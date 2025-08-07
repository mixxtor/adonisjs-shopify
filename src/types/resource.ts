import { SHOPIFY } from '../constants/shopify.js'

/** Type of Shopify resources */
export type TShopifyResource = (typeof SHOPIFY.RESOURCE)[keyof typeof SHOPIFY.RESOURCE]
/** Type of Shopify GraphQL resources */
export type TShopifyGResource = (typeof SHOPIFY.GRAPH.RESOURCE)[keyof typeof SHOPIFY.GRAPH.RESOURCE]

type TShopifyMetadataResult = {
  userErrors?: { field: string; message: string }[]
  pageInfo?: {
    startCursor: string
    endCursor: string
    hasNextPage: boolean
    hasPreviousPage: boolean
  }
}

/**
 * Type of Shopify GraphQL (request) API results
 * @argument {string} D Query resource result
 * @argument {string} R Query resource
 */
export type TShopifyGqlResultData<
  D = Record<string, any>,
  R extends string | undefined = undefined,
> = {
  [r in R extends undefined ? keyof D : R]: R extends undefined
    ? D extends Record<string, any>
      ? D[r] & Pick<TShopifyMetadataResult, 'userErrors'>
      : never
    : (r extends string
        ? Partial<{ nodes: D[]; edges: { cursor?: string; node: D }[] }>
        : D & { cursor?: string; node: D }) &
        TShopifyMetadataResult
}

/**
 * Type of Shopify GraphQL (query) API resources
 * @deprecated Use `TShopifyGqlResultData` instead. Since Shopify stopping using this type with `gqlClient.query()`, they now suggest using `gqlClient.request()` instead with `TShopifyGqlResultData`.
 * @argument {string} D Query resource result
 * @argument {string} R Query resource
 */
export type TShopifyGqlResult<D = Record<string, any>, R extends string | undefined = undefined> = {
  data: TShopifyGqlResultData<D, R>
  extensions: {
    cost: {
      requestedQueryCost: number
      actualQueryCost: number
      throttleStatus: {
        maximumAvailable: number
        currentlyAvailable: number
        restoreRate: number
      }
    }
  }
}
