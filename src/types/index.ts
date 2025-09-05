import type {
  ConfigParams,
  Shopify as ShopifyApi,
  // ShopifyRestResources,
} from '@shopify/shopify-api'
import { SHOPIFY } from '../constants/shopify.js'
import ShopifyService from '../../services/shopify.js'

/**
 * A list of REST resources inferred using the config defined inside
 * the user-land application
 */
export interface ShopifyRestResources {}

/**
 * Type to infer rest resources from config
 */
export type InferShopifyRestResources<T extends { restResources?: any }> =
  T['restResources'] extends ShopifyRestResources ? T['restResources'] : ShopifyRestResources

export interface ShopifyAppCredentials {
  /** Shopify API key */
  api_key: string

  /** Shopify API secret */
  api_secret: string

  /** Shopify API version, not should be used differently from `shopifyConfig.api_version` */
  // api_version?: string
}

/**
 * Future flags are used to enable features that are not yet available by default.
 * @alias FutureFlagOptions from `@shopify/shopify-api/types/future`
 */
export interface FutureFlags {
  /**
   * Enable line item billing, to make billing configuration more similar to the GraphQL API. Default enabling of this
   * feature has been moved to v11. Use lineItemBilling instead.
   */
  v10_lineItemBilling?: boolean
  /**
   * Enable line item billing, to make billing configuration more similar to the GraphQL API.
   */
  lineItemBilling?: boolean
  /**
   * Enable support for managed pricing, so apps can check for payments without needing a billing config.
   */
  unstable_managedPricingSupport?: boolean
  /**
   * Change the CustomerAddress classes to expose a `is_default` property instead of `default` when fetching data. This
   * resolves a conflict with the default() method in that class.
   */
  customerAddressDefaultFix?: boolean
}

/**
 * @alias FutureFlagOptions from `@shopify/shopify-api/types/future`
 */
export type FutureFlagOptions = FutureFlags | undefined

type TCustomConfig = {
  /**
   * AdonisJS specific configuration
   */
  // adonisjs: {
  //   /**
  //    * The Lucid model to use for shopify store queries
  //    */
  //   model: () => Promise<{ default: Model }> | Model

  //   /**
  //    * Column mapping for the shopify stores table
  //    */
  //   columns?: {
  //     /**
  //      * Shopify store ID column
  //      * @default 'id'
  //      */
  //     id: string

  //     /**
  //      * Shopify store domain column
  //      * @default 'shopify_domain'
  //      */
  //     shopify_domain: string
  //   }
  // }

  /**
   * Webhooks to be registered on Shopify.
   * Note that we have `rest` and `graphql` webhooks which are different topics & events' responses.
   */
  webhooks?: {
    /**
     * REST Webhooks to be registered on Shopify based on the specified group.
     * @link https://shopify.dev/docs/api/webhooks
     */
    rest: Record<string, string>
    /**
     * GraphQL Webhooks to be registered on Shopify.
     * @link https://shopify.dev/docs/api/admin-graphql/2025-07/enums/WebhookSubscriptionTopic
     */
    graphql: { [topic in keyof typeof SHOPIFY.GRAPH.WEBHOOK_TOPICS | (string & {})]?: string }
  }

  /**
   * Extra Shopify apps credentials to be used for multiple apps validation.
   * @example [{ api_key: 'key', api_secret: 'secret' }, { api_key: 'key2', api_secret: 'secret2' }]
   */
  extra_apps?: ShopifyAppCredentials[]
}

type Config<
  Params extends ConfigParams<Resources, Future>,
  Resources extends ShopifyRestResources = ShopifyRestResources,
  Future extends FutureFlagOptions = FutureFlagOptions,
> = {
  future?: Future
  restResources?: Resources
} & Params

export type ShopifyConfig<
  Params extends ConfigParams<Resources, Future>,
  Resources extends ShopifyRestResources = ShopifyRestResources,
  Future extends FutureFlagOptions = FutureFlagOptions,
> = { app: Config<Params, Resources, Future> } & TCustomConfig

interface TShopifyService<
  Params extends ConfigParams<Resources, Future>,
  Resources extends ShopifyRestResources = ShopifyRestResources,
  Future extends FutureFlagOptions = FutureFlagOptions,
> {
  /** Shopify API instance */
  api: ShopifyApi<Params, Resources, Future>

  /** Shopify helper functions */
  helper: ReturnType<ShopifyService<Params, Resources, Future>['helper']> & ShopifyApi['utils']
}

export interface ShopifyServiceContract<
  Params extends ConfigParams<Resources, Future>,
  Resources extends ShopifyRestResources = ShopifyRestResources,
  Future extends FutureFlagOptions = FutureFlagOptions,
> extends TShopifyService<Params, Resources, Future> {
  /**
   * Use specific app credentials by overriding `api_key` and `api_secret`.
   * This purpose is to be used for multiple apps.
   *
   * @param {object} app - Shopify app credentials
   * @param {string} app.api_key - Shopify app API key
   * @param {string} app.api_secret - Shopify app API secret
   */
  use: (app: ShopifyAppCredentials) => TShopifyService<Params, Resources, Future>
}

declare module '@adonisjs/core/types' {
  interface ContainerBindings {
    shopify: ShopifyServiceContract<
      ConfigParams<ShopifyRestResources, FutureFlagOptions>,
      ShopifyRestResources,
      FutureFlagOptions
    >
  }
}

export type { Shopify } from './rest.js'
export type * from './resource.js'
export type * from '../../services/shopify.js'
