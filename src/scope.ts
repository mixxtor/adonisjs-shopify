import type { AuthScopes } from '@shopify/shopify-api'

export class Scope {
  private compressedScopes: string[] = []

  constructor(scopes?: AuthScopes | string | string[]) {
    if (typeof scopes === 'string') {
      this.compressedScopes = this.parseString(scopes)
    } else {
      if (scopes) {
        this.compressedScopes = this.normalizeArray(
          Array.isArray(scopes) ? scopes : scopes.toArray()
        )
      }
    }
  }

  /**
   * Parse the input string into an array of strings.
   *
   * @param {string} scopes - the input string to be parsed
   * @return {string[]} the array of parsed strings
   */
  private parseString(scopes: string): string[] {
    return scopes
      .split(',')
      .map((scope) => scope.trim())
      .filter((scope) => scope.length > 0)
  }

  /**
   * Normalize the given array of strings by removing duplicate items and trimming whitespace from each string.
   *
   * @param {string[]} scopes - The array of strings to be normalized
   * @return {string[]} - The normalized array of strings
   */
  private normalizeArray(scopes: string[]): string[] {
    return Array.from(new Set(scopes.map((scope) => scope.trim())))
  }

  /**
   * Retrieves implied scopes based on the input array of scopes.
   *
   * @param {string[]} scopes - The array of scopes to derive implied scopes from
   * @return {string[]} The array of implied scopes
   */
  private getImpliedScopes(scopes: string[]): string[] {
    const impliedScopes: string[] = []
    for (const scope of scopes) {
      if (scope.match(/^(unauthenticated_)?write_(.*)$/)) {
        impliedScopes.push(scope.replace(/^(unauthenticated_)?write_/, '$1read_'))
      }
    }
    return impliedScopes
  }

  /**
   * Set the initial scopes.
   *
   * @param {string | string[]} scopes - The initial scopes
   * @example string format: 'read_products,write_orders';
   *          array format: ['read_products', 'write_orders']
   * @return {this} The updated object
   */
  set(scopes: string | string[]): this {
    if (typeof scopes === 'string') {
      this.compressedScopes = this.parseString(scopes)
    } else {
      this.compressedScopes = this.normalizeArray(scopes)
    }

    return this
  }

  /**
   * Get the compressed old scopes.
   *
   * @return {string[]} the compressed scopes
   */
  getCompressedScopes(): string[] {
    return this.compressedScopes
  }

  /**
   * Compresses the scopes: removes duplicates and non-sense scopes
   *
   * @param {string | string[]} scopes - The scopes to compress
   * @return {string[]} The compressed scopes
   */
  compressScopes(scopes: string | string[]): string[] {
    return typeof scopes === 'string' ? this.parseString(scopes) : this.normalizeArray(scopes)
  }

  /**
   * Checks if the provided scopes are equal to the current scopes.
   *
   * @param {string | string[]} newScopes - The new scopes to compare.
   * @return {boolean} Returns true if the scopes are equal, false otherwise.
   */
  equals(newScopes: string | string[]): boolean {
    const newScopeArray =
      typeof newScopes === 'string' ? this.parseString(newScopes) : this.normalizeArray(newScopes)
    const impliedScopes = this.getImpliedScopes(newScopeArray)

    const allScopes = [...this.compressedScopes, ...impliedScopes]
    const newScopeSet = new Set(newScopeArray)

    return !allScopes.every((scope) => newScopeSet.has(scope))
  }
}

// export default new Scope(configer.get('shopify.scopes'));
