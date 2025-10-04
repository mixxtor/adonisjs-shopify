import ShopifyProvider from '../../providers/shopify_provider.js'
import { Session, ApiVersion, ShopifyClients } from '@shopify/shopify-api'
import { SHOPIFY } from '../constants/shopify.js'
import type { ShopifyRestResources } from './index.js'

// type RestResources = Record<string, any>

type ShopifyRestInstances<Resources extends ShopifyRestResources> = {
  [K in keyof Resources]: InstanceType<Resources[K]>
}

type TShopifyPlan = (typeof SHOPIFY.PLAN.UNIT)[keyof typeof SHOPIFY.PLAN.UNIT]
export interface Shopify extends ShopifyRestInstances<ShopifyRestResources> {
  ShopifyProvider: typeof ShopifyProvider
  Session: Session
  ApiVersion: ApiVersion
  RestResources: ShopifyRestResources
  RestClient: ShopifyClients['Rest']
  GraphqlClient: ShopifyClients['Graphql']
  StorefrontClient: ShopifyClients['Storefront']

  PlanGroup: (typeof SHOPIFY.PLAN.GROUP)[keyof typeof SHOPIFY.PLAN.GROUP]
  Plan: TShopifyPlan
  PlanKey: TShopifyPlan['key']
}
