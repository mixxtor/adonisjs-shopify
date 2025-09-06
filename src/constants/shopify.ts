import { SHOPIFY_WEBHOOK_TOPICS } from './webhook.js'

const SHOPIFY_PLAN_GROUP = {
  STAFF: 'staff',
  UNAVAILABLE: 'unavailable',
  AVAILABLE: 'available',
  ADVANCED: 'advanced',
  TEST: 'test',
  FREE: 'free',
} as const

const SHOPIFY_PLANS = {
  // known plans
  AFFILIATE: { key: 'affiliate', groups: [SHOPIFY_PLAN_GROUP.AVAILABLE] },
  COMPED: { key: 'comped', groups: [SHOPIFY_PLAN_GROUP.AVAILABLE, SHOPIFY_PLAN_GROUP.FREE] },

  STARTER: { key: 'starter', groups: [SHOPIFY_PLAN_GROUP.AVAILABLE] },
  STARTER_2022: { key: 'starter_2022', groups: [SHOPIFY_PLAN_GROUP.AVAILABLE] },
  STARTER_2022_TRIAL: {
    key: 'starter_2022_trial',
    groups: [SHOPIFY_PLAN_GROUP.AVAILABLE, SHOPIFY_PLAN_GROUP.FREE],
  },

  BASIC: { key: 'basic', groups: [SHOPIFY_PLAN_GROUP.AVAILABLE] },
  STANDARD: { key: 'standard', groups: [SHOPIFY_PLAN_GROUP.AVAILABLE] },
  PROFESSIONAL: {
    key: 'professional',
    groups: [SHOPIFY_PLAN_GROUP.AVAILABLE, SHOPIFY_PLAN_GROUP.ADVANCED],
  },
  BUSINESS: {
    key: 'business',
    groups: [SHOPIFY_PLAN_GROUP.AVAILABLE, SHOPIFY_PLAN_GROUP.ADVANCED],
  },
  SHOPIFY_ALUMNI: { key: 'shopify_alumni', groups: [SHOPIFY_PLAN_GROUP.AVAILABLE] },
  SHOPIFY_PLUS: {
    key: 'shopify_plus',
    groups: [SHOPIFY_PLAN_GROUP.AVAILABLE, SHOPIFY_PLAN_GROUP.ADVANCED],
  },
  UNLIMITED: {
    key: 'unlimited',
    groups: [SHOPIFY_PLAN_GROUP.AVAILABLE, SHOPIFY_PLAN_GROUP.ADVANCED],
  },
  CUSTOM: { key: 'custom', groups: [SHOPIFY_PLAN_GROUP.AVAILABLE] },

  NONPROFIT: { key: 'nonprofit', groups: [SHOPIFY_PLAN_GROUP.AVAILABLE] },
  NPO_FULL: { key: 'npo_full', groups: [SHOPIFY_PLAN_GROUP.AVAILABLE] },
  NPO_LITE: { key: 'npo_lite', groups: [SHOPIFY_PLAN_GROUP.AVAILABLE] },

  SINGTEL_BASIC: { key: 'singtel_basic', groups: [SHOPIFY_PLAN_GROUP.AVAILABLE] },
  SINGTEL_PROFESSIONAL: { key: 'singtel_professional', groups: [SHOPIFY_PLAN_GROUP.AVAILABLE] },
  SINGTEL_TRIAL: {
    key: 'singtel_trial',
    groups: [SHOPIFY_PLAN_GROUP.AVAILABLE, SHOPIFY_PLAN_GROUP.FREE],
  },

  UAFRICA_BASIC: { key: 'uafrica_basic', groups: [SHOPIFY_PLAN_GROUP.AVAILABLE] },
  UAFRICA_PROFESSIONAL: { key: 'uafrica_professional', groups: [SHOPIFY_PLAN_GROUP.AVAILABLE] },

  TRIAL: { key: 'trial', groups: [SHOPIFY_PLAN_GROUP.AVAILABLE, SHOPIFY_PLAN_GROUP.FREE] },
  PAID_TRIAL: {
    key: 'paid_trial',
    groups: [SHOPIFY_PLAN_GROUP.AVAILABLE, SHOPIFY_PLAN_GROUP.FREE],
  },

  STAFF: {
    key: 'staff',
    groups: [SHOPIFY_PLAN_GROUP.AVAILABLE, SHOPIFY_PLAN_GROUP.TEST, SHOPIFY_PLAN_GROUP.STAFF],
  },
  STAFF_BUSINESS: {
    key: 'staff_business',
    groups: [SHOPIFY_PLAN_GROUP.AVAILABLE, SHOPIFY_PLAN_GROUP.TEST, SHOPIFY_PLAN_GROUP.STAFF],
  },
  GRANDFATHER: {
    key: 'grandfather',
    groups: [SHOPIFY_PLAN_GROUP.AVAILABLE, SHOPIFY_PLAN_GROUP.TEST, SHOPIFY_PLAN_GROUP.STAFF],
  },
  GRANDFATHERED: {
    key: 'grandfathered',
    groups: [SHOPIFY_PLAN_GROUP.AVAILABLE, SHOPIFY_PLAN_GROUP.FREE, SHOPIFY_PLAN_GROUP.STAFF],
  },

  PARTNER_TEST: {
    key: 'partner_test',
    groups: [SHOPIFY_PLAN_GROUP.AVAILABLE, SHOPIFY_PLAN_GROUP.FREE, SHOPIFY_PLAN_GROUP.TEST],
  },
  PLUS_PARTNER_SANDBOX: {
    key: 'plus_partner_sandbox',
    groups: [SHOPIFY_PLAN_GROUP.AVAILABLE, SHOPIFY_PLAN_GROUP.FREE, SHOPIFY_PLAN_GROUP.TEST],
  },
  SALES_TRAINING: {
    key: 'sales_training',
    groups: [SHOPIFY_PLAN_GROUP.AVAILABLE, SHOPIFY_PLAN_GROUP.FREE, SHOPIFY_PLAN_GROUP.TEST],
  },
  OPEN_LEARNING: {
    key: 'open_learning',
    groups: [SHOPIFY_PLAN_GROUP.AVAILABLE, SHOPIFY_PLAN_GROUP.FREE, SHOPIFY_PLAN_GROUP.TEST],
  },

  CANCELLED: { key: 'cancelled', groups: [SHOPIFY_PLAN_GROUP.UNAVAILABLE] },
  DORMANT: { key: 'dormant', groups: [SHOPIFY_PLAN_GROUP.UNAVAILABLE] },
  FRAUDULENT: { key: 'fraudulent', groups: [SHOPIFY_PLAN_GROUP.UNAVAILABLE] },
  FROZEN: { key: 'frozen', groups: [SHOPIFY_PLAN_GROUP.UNAVAILABLE] },
} as const

export const SHOPIFY = {
  RESOURCE: {
    // support resource
    PRODUCT: 'product',
  },
  WEBHOOK_TOPICS: SHOPIFY_WEBHOOK_TOPICS,
  GRAPH: {
    RESOURCE: {
      PRODUCT: 'Product',
      COLLECTION: 'Collection',
    },
    QUERY: {
      RESOURCE: {
        PRODUCT: 'products',
        TAG: 'tags',
      },
    },
  },
  PLAN: {
    GROUP: SHOPIFY_PLAN_GROUP,
    UNIT: SHOPIFY_PLANS,
  },
} as const

// const knownPlans = [
//   'affiliate', 'basic', 'business', 'cancelled', 'comped', 'custom', 'dormant', 'fraudulent',
//   'frozen', 'grandfather', 'nonprofit', 'npo_full', 'npo_lite', 'open_learning', 'paid_trial',
//   'partner_test', 'professional', 'shopify_alumni', 'shopify_plus', 'sales_training',
//   'singtel_basic', 'singtel_professional', 'singtel_trial', 'staff', 'staff_business',
//   'standard', 'starter', 'starter_2022', 'starter_2022_trial', 'trial', 'uafrica_basic',
//   'uafrica_professional', 'unlimited', 'plus_partner_sandbox', 'grandfathered'
// ];
