import {
  shopifyApi,
  Shopify as ShopifyApi,
  type ConfigParams,
  type ShopifyRestResources,
} from '@shopify/shopify-api'
import '@shopify/shopify-api/adapters/node'
import { SHOPIFY } from '../src/constants/shopify.js'
import { Scope } from '../src/scope.js'
import type { Shopify } from '../src/types/rest.js'
import type { ShopifyConfig } from '../src/index.js'
import type { FutureFlagOptions } from '../src/types/index.js'

class ShopifyService<
  Params extends ConfigParams<Resources, Future>,
  Resources extends ShopifyRestResources,
  Future extends FutureFlagOptions,
> {
  #config: ShopifyConfig<Params, Resources, Future>
  #apiInstance: { [apiKey: string]: ShopifyApi<Params, Resources, Future> } = {}

  constructor(shopifyConfig: ShopifyConfig<Params, Resources, Future>) {
    this.#config = shopifyConfig
  }

  api(config = this.#config): ShopifyApi<Params, Resources, Future> {
    const apiKey = config.apiKey!
    if (!this.#apiInstance[apiKey]) {
      this.#apiInstance[apiKey] = shopifyApi<Params, Resources, Future>(config)
    }

    return this.#apiInstance[apiKey]
  }

  helper() {
    const config = this.#config
    const plans: Shopify['Plan'][] = (
      Object.keys(SHOPIFY.PLAN.UNIT) as (keyof typeof SHOPIFY.PLAN.UNIT)[]
    ).map((u) => SHOPIFY.PLAN.UNIT[u])

    return {
      // ...this.api().utils,
      scope: new Scope(config.scopes),
      plan: {
        /**
         * Get all or filtered plans.
         *
         * @param {string} keyword - The keyword to filter by.
         * @return {Shopify['Plan'][]} An array of Shopify plans.
         */
        get: (keyword?: string): Shopify['Plan'][] =>
          plans.filter((p) => (keyword ? p.key.includes(keyword) : p)),

        /**
         * Get all plan keys.
         *
         * @param {string} keyword - The keyword to filter by.
         * @return {Shopify['Plan'][]} An array of Shopify plans.
         */
        getKeys: (keyword?: string): Shopify['PlanKey'][] =>
          plans.filter((p) => (keyword ? p.key.includes(keyword) : p)).map((p) => p.key),

        /**
         * Get plan keys by group.
         *
         * @param {Shopify['PlanGroup']} group - The group to filter the plans by.
         * @return {Shopify['Plan'][]} An array of Shopify plans.
         */
        getKeysByGroup: <G extends Shopify['PlanGroup']>(group: G): Shopify['PlanKey'][] =>
          plans
            .filter((p) =>
              group ? (p.groups as any as Shopify['PlanGroup'][]).includes(group) : p
            )
            .map((p) => p.key),
      },

      webhooks(group: keyof NonNullable<typeof config.webhooks>) {
        return Object.entries(config.webhooks?.[group] ?? []).map(([topic, routePath]) => ({
          address: routePath as string,
          topic: topic,
        }))
      },
    }
  }
}

export default ShopifyService
