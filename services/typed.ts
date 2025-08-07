import ShopifyService from '../services/shopify.js'
import type { ShopifyConfig, FutureFlagOptions } from '../src/types/index.js'
import type { ConfigParams, ShopifyRestResources } from '@shopify/shopify-api'

/**
 * Create a properly typed Shopify service instance
 * This bypasses container resolution issues and provides direct type inference
 */
export function createTypedShopify<
  Config extends ShopifyConfig<ConfigParams<Resources, Future>, Resources, Future>,
  Resources extends ShopifyRestResources = ShopifyRestResources,
  Future extends FutureFlagOptions = FutureFlagOptions,
>(config: Config) {
  const service = new ShopifyService(config)

  return {
    api: service.api,
    helper: service.helper(),
    use: (appCredentials: { api_key: string; api_secret: string }) => {
      const modifiedConfig = {
        ...config,
        apiKey: appCredentials.api_key,
        apiSecretKey: appCredentials.api_secret,
      }
      const modifiedService = new ShopifyService(modifiedConfig)
      return {
        api: modifiedService.api,
        helper: modifiedService.helper(),
      }
    },
  }
}
