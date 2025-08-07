import type { ConfigParams, ShopifyRestResources } from '@shopify/shopify-api'
import type { FutureFlagOptions, ShopifyConfig } from '../types/index.js'

export function defineConfig<
  Config extends ShopifyConfig<ConfigParams<Resources, Future>, Resources, Future>,
  Resources extends ShopifyRestResources = ShopifyRestResources,
  Future extends FutureFlagOptions = FutureFlagOptions,
>(config: Config): Config {
  return config
}
