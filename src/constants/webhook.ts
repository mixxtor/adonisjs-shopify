/**
 * @link [Rest Webhook Topics](https://shopify.dev/docs/api/webhooks)
 * @link [GraphQL Webhook Topics](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic)
 */
export const SHOPIFY_WEBHOOK_TOPICS = {
  /**
   * Occurs whenever the access scopes of any installation are modified. Allows apps to keep track of the granted access scopes of their installations.
   */
  APP_SCOPES_UPDATE: 'app/scopes_update',
  /**
   * Occurs whenever a shop has uninstalled the app.
   */
  APP_UNINSTALLED: 'app/uninstalled',
  /**
   * Occurs whenever a one-time app charge is updated.
   */
  APP_PURCHASES_ONE_TIME_UPDATE: 'app_purchases_one_time/update',
  /**
   * Occurs when the balance used on an app subscription crosses 90% of the capped amount.
   */
  APP_SUBSCRIPTIONS_APPROACHING_CAPPED_AMOUNT: 'app_subscriptions/approaching_capped_amount',
  /**
   * Occurs whenever an app subscription is updated.
   */
  APP_SUBSCRIPTIONS_UPDATE: 'app_subscriptions/update',
  /**
   * Triggers for each auditable Admin API request. This topic is limited to one active subscription per Plus store and requires the use of Google Cloud Pub/Sub or AWS EventBridge.
   */
  AUDIT_EVENTS_ADMIN_API_ACTIVITY: 'audit_events/admin_api_activity',
  /**
   * Notifies when a Bulk Operation finishes.
   */
  BULK_OPERATIONS_FINISH: 'bulk_operations/finish',
  /**
   * Occurs when a cart is created in the online store. Other types of carts aren't supported. For example, the webhook doesn't support carts that are created in a custom storefront.
   */
  CARTS_CREATE: 'carts/create',
  /**
   * Occurs when a cart is updated in the online store. Other types of carts aren't supported. For example, the webhook doesn't support carts that are updated in a custom storefront.
   */
  CARTS_UPDATE: 'carts/update',
  /**
   * Occurs whenever a channel is deleted.
   */
  CHANNELS_DELETE: 'channels/delete',
  /**
   * Occurs whenever a checkout is created.
   */
  CHECKOUTS_CREATE: 'checkouts/create',
  /**
   * Occurs whenever a checkout is deleted.
   */
  CHECKOUTS_DELETE: 'checkouts/delete',
  /**
   * Occurs whenever a checkout is updated.
   */
  CHECKOUTS_UPDATE: 'checkouts/update',
  /**
   * Occurs whenever a collection listing is added.
   */
  COLLECTION_LISTINGS_ADD: 'collection_listings/add',
  /**
   * Occurs whenever a collection listing is removed.
   */
  COLLECTION_LISTINGS_REMOVE: 'collection_listings/remove',
  /**
   * Occurs whenever a collection listing is updated.
   */
  COLLECTION_LISTINGS_UPDATE: 'collection_listings/update',
  /**
   * Occurs whenever a collection publication listing is created.
   */
  COLLECTION_PUBLICATIONS_CREATE: 'collection_publications/create',
  /**
   * Occurs whenever a collection publication listing is deleted.
   */
  COLLECTION_PUBLICATIONS_DELETE: 'collection_publications/delete',
  /**
   * Occurs whenever a collection publication listing is updated.
   */
  COLLECTION_PUBLICATIONS_UPDATE: 'collection_publications/update',
  /**
   * Occurs whenever a collection is created.
   */
  COLLECTIONS_CREATE: 'collections/create',
  /**
   * Occurs whenever a collection is deleted.
   */
  COLLECTIONS_DELETE: 'collections/delete',
  /**
   * Occurs whenever a collection is updated, including whenever products are added or removed from the collection. Occurs once if multiple products are added or removed from a collection at the same time.
   */
  COLLECTIONS_UPDATE: 'collections/update',
  /**
   * Occurs whenever a company is created.
   */
  COMPANIES_CREATE: 'companies/create',
  /**
   * Occurs whenever a company is deleted.
   */
  COMPANIES_DELETE: 'companies/delete',
  /**
   * Occurs whenever a company is updated.
   */
  COMPANIES_UPDATE: 'companies/update',
  /**
   * Occurs whenever a role is assigned to a contact at a location.
   */
  COMPANY_CONTACT_ROLES_ASSIGN: 'company_contact_roles/assign',
  /**
   * Occurs whenever a role is revoked from a contact at a location.
   */
  COMPANY_CONTACT_ROLES_REVOKE: 'company_contact_roles/revoke',
  /**
   * Occurs whenever a company contact is created.
   */
  COMPANY_CONTACTS_CREATE: 'company_contacts/create',
  /**
   * Occurs whenever a company contact is deleted.
   */
  COMPANY_CONTACTS_DELETE: 'company_contacts/delete',
  /**
   * Occurs whenever a company contact is updated.
   */
  COMPANY_CONTACTS_UPDATE: 'company_contacts/update',
  /**
   * Occurs whenever a company location is created.
   */
  COMPANY_LOCATIONS_CREATE: 'company_locations/create',
  /**
   * Occurs whenever a company location is deleted.
   */
  COMPANY_LOCATIONS_DELETE: 'company_locations/delete',
  /**
   * Occurs whenever a company location is updated.
   */
  COMPANY_LOCATIONS_UPDATE: 'company_locations/update',
  /**
   * Triggers when a customer joins a segment.
   */
  CUSTOMER_JOINED_SEGMENT: 'customer.joined_segment',
  /**
   * Triggers when a customer leaves a segment.
   */
  CUSTOMER_LEFT_SEGMENT: 'customer.left_segment',
  /**
   * Triggers when tags are added to a customer.
   */
  CUSTOMER_TAGS_ADDED: 'customer.tags_added',
  /**
   * Triggers when tags are removed from a customer.
   */
  CUSTOMER_TAGS_REMOVED: 'customer.tags_removed',
  /**
   * Triggers when merchants change customer account setting.
   */
  CUSTOMER_ACCOUNT_SETTINGS_UPDATE: 'customer_account_settings/update',
  /**
   * Occurs whenever a customer saved search is created.
   */
  CUSTOMER_GROUPS_CREATE: 'customer_groups/create',
  /**
   * Occurs whenever a customer saved search is deleted.
   */
  CUSTOMER_GROUPS_DELETE: 'customer_groups/delete',
  /**
   * Occurs whenever a customer saved search is updated.
   */
  CUSTOMER_GROUPS_UPDATE: 'customer_groups/update',
  /**
   * Occurs whenever a customer payment method is created.
   */
  CUSTOMER_PAYMENT_METHODS_CREATE: 'customer_payment_methods/create',
  /**
   * Occurs whenever a customer payment method is revoked.
   */
  CUSTOMER_PAYMENT_METHODS_REVOKE: 'customer_payment_methods/revoke',
  /**
   * Occurs whenever a customer payment method is updated.
   */
  CUSTOMER_PAYMENT_METHODS_UPDATE: 'customer_payment_methods/update',
  /**
   * Occurs whenever a customer is created.
   */
  CUSTOMERS_CREATE: 'customers/create',
  /**
   * Customers can request their data from a store owner. When this happens, Shopify sends a payload on the customers/data_request topic to the apps that are installed on that store.
   */
  CUSTOMERS_DATA_REQUEST: 'customers/data_request',
  /**
   * Occurs whenever a customer is deleted.
   */
  CUSTOMERS_DELETE: 'customers/delete',
  /**
   * Occurs whenever a customer account is disabled.
   */
  CUSTOMERS_DISABLE: 'customers/disable',
  /**
   * Occurs whenever a customer account is enabled.
   */
  CUSTOMERS_ENABLE: 'customers/enable',
  /**
   * Triggers when two customers are merged
   */
  CUSTOMERS_MERGE: 'customers/merge',
  /**
   * Occurs when a customer sales history change.
   */
  CUSTOMERS_PURCHASING_SUMMARY: 'customers/purchasing_summary',
  /**
   * Store owners can request that data is deleted on behalf of a customer. When this happens, Shopify sends a payload on the customers/redact topic to the apps installed on that store.
   * Customer redaction occurs either at the end of the grace period after the redaction was requested (today + 10 days), OR the customer's last order date plus the chargeback period of 60 days (last order date + 60 days), whichever occurs later.
   */
  CUSTOMERS_REDACT: 'customers/redact',
  /**
   * Occurs whenever a customer is updated.
   */
  CUSTOMERS_UPDATE: 'customers/update',
  /**
   * Occurs whenever a customer's email marketing consent is updated.
   */
  CUSTOMERS_EMAIL_MARKETING_CONSENT_UPDATE: 'customers_email_marketing_consent/update',
  /**
   * Occurs whenever a customer's SMS marketing consent is updated.
   */
  CUSTOMERS_MARKETING_CONSENT_UPDATE: 'customers_marketing_consent/update',
  /**
   * Occurs when a promise setting is updated.
   */
  DELIVERY_PROMISE_SETTINGS_UPDATE: 'delivery_promise_settings/update',
  /**
   * Occurs whenever a discount is created.
   */
  DISCOUNTS_CREATE: 'discounts/create',
  /**
   * Occurs whenever a discount is deleted.
   */
  DISCOUNTS_DELETE: 'discounts/delete',
  /**
   * Occurs whenever a redeem code is added to a code discount.
   */
  DISCOUNTS_REDEEMCODE_ADDED: 'discounts/redeemcode_added',
  /**
   * Occurs whenever a redeem code on a code discount is deleted.
   */
  DISCOUNTS_REDEEMCODE_REMOVED: 'discounts/redeemcode_removed',
  /**
   * Occurs whenever a discount is updated.
   */
  DISCOUNTS_UPDATE: 'discounts/update',
  /**
   * Occurs whenever a dispute is created.
   */
  DISPUTES_CREATE: 'disputes/create',
  /**
   * Occurs whenever a dispute is updated.
   */
  DISPUTES_UPDATE: 'disputes/update',
  /**
   * Occurs whenever a domain is created.
   */
  DOMAINS_CREATE: 'domains/create',
  /**
   * Occurs whenever a domain is destroyed.
   */
  DOMAINS_DESTROY: 'domains/destroy',
  /**
   * Occurs whenever a domain is updated.
   */
  DOMAINS_UPDATE: 'domains/update',
  /**
   * Occurs whenever a draft order is created.
   */
  DRAFT_ORDERS_CREATE: 'draft_orders/create',
  /**
   * Occurs whenever a draft order is deleted.
   */
  DRAFT_ORDERS_DELETE: 'draft_orders/delete',
  /**
   * Occurs whenever a draft order is updated.
   */
  DRAFT_ORDERS_UPDATE: 'draft_orders/update',
  /**
   * Triggers when a staff with access to all or some finance app has been removed.
   */
  FINANCE_APP_STAFF_MEMBER_DELETE: 'finance_app_staff_member/delete',
  /**
   * Triggers when a staff is granted access to all or some finance app.
   */
  FINANCE_APP_STAFF_MEMBER_GRANT: 'finance_app_staff_member/grant',
  /**
   * Triggers when a staff's access to all or some finance app has been revoked.
   */
  FINANCE_APP_STAFF_MEMBER_REVOKE: 'finance_app_staff_member/revoke',
  /**
   * Triggers when a staff's information has been updated.
   */
  FINANCE_APP_STAFF_MEMBER_UPDATE: 'finance_app_staff_member/update',
  /**
   * Occurs whenever shop's finance KYC information was updated
   */
  FINANCE_KYC_INFORMATION_UPDATE: 'finance_kyc_information/update',
  /**
   * Occurs whenever a fulfillment event is created.
   */
  FULFILLMENT_EVENTS_CREATE: 'fulfillment_events/create',
  /**
   * Occurs whenever a fulfillment event is deleted.
   */
  FULFILLMENT_EVENTS_DELETE: 'fulfillment_events/delete',
  /**
   * Occurs each time that a hold is added to a fulfillment order.
   * For cases where multiple holds are applied to a fulfillment order, this webhook will trigger after each hold is applied.
   */
  FULFILLMENT_HOLDS_ADDED: 'fulfillment_holds/added',
  /**
   * Occurs each time that a hold is released from a fulfillment order.
   * For cases where multiple holds are released from a fulfillment order a the same time, this webhook will trigger for each released hold.
   */
  FULFILLMENT_HOLDS_RELEASED: 'fulfillment_holds/released',
  /**
   * Occurs when a 3PL accepts a fulfillment cancellation request, received from a merchant.
   */
  FULFILLMENT_ORDERS_CANCELLATION_REQUEST_ACCEPTED:
    'fulfillment_orders/cancellation_request_accepted',
  /**
   * Occurs when a 3PL rejects a fulfillment cancellation request, received from a merchant.
   */
  FULFILLMENT_ORDERS_CANCELLATION_REQUEST_REJECTED:
    'fulfillment_orders/cancellation_request_rejected',
  /**
   * Occurs when a merchant requests a fulfillment request to be cancelled after that request was approved by a 3PL.
   */
  FULFILLMENT_ORDERS_CANCELLATION_REQUEST_SUBMITTED:
    'fulfillment_orders/cancellation_request_submitted',
  /**
   * Occurs when a fulfillment order is cancelled.
   */
  FULFILLMENT_ORDERS_CANCELLED: 'fulfillment_orders/cancelled',
  /**
   * Occurs when a fulfillment service accepts a request to fulfill a fulfillment order.
   */
  FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_ACCEPTED:
    'fulfillment_orders/fulfillment_request_accepted',
  /**
   * Occurs when a 3PL rejects a fulfillment request that was sent by a merchant.
   */
  FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_REJECTED:
    'fulfillment_orders/fulfillment_request_rejected',
  /**
   * Occurs when a merchant submits a fulfillment request to a 3PL.
   */
  FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_SUBMITTED:
    'fulfillment_orders/fulfillment_request_submitted',
  /**
   * Occurs when a fulfillment service intends to close an in_progress fulfillment order.
   */
  FULFILLMENT_ORDERS_FULFILLMENT_SERVICE_FAILED_TO_COMPLETE:
    'fulfillment_orders/fulfillment_service_failed_to_complete',
  /**
   * Occurs when a fulfillment order is released and is no longer on hold.
   * If a fulfillment order has multiple holds then this webhook will only be triggered once when the last hold is released and the status of the fulfillment order is no longer `ON_HOLD`.
   */
  FULFILLMENT_ORDERS_HOLD_RELEASED: 'fulfillment_orders/hold_released',
  /**
   * Occurs whenever a fulfillment order's line items are prepared for local delivery.
   */
  FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_LOCAL_DELIVERY:
    'fulfillment_orders/line_items_prepared_for_local_delivery',
  /**
   * Triggers when one or more of the line items for a fulfillment order are prepared for pickup
   */
  FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_PICKUP:
    'fulfillment_orders/line_items_prepared_for_pickup',
  /**
   * Occurs when multiple fulfillment orders are merged into a single fulfillment order.
   */
  FULFILLMENT_ORDERS_MERGED: 'fulfillment_orders/merged',
  /**
   * Occurs whenever the location which is assigned to fulfill one or more fulfillment order line items is changed.
   * - `original_fulfillment_order` - The final state of the original fulfillment order.
   * - `moved_fulfillment_order` - The fulfillment order which now contains the re-assigned line items.
   * - `source_location` - The original location which was assigned to fulfill the line items (available as of the `2023-04` API version).
   * - `destination_location_id` - The ID of the location which is now responsible for fulfilling the line items.
   *
   * NOTE: The [assignedLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-fulfillmentorder-assignedlocation)
   * of the `original_fulfillment_order` might be changed by the move operation.
   * If you need to determine the originally assigned location, then you should refer to the `source_location`.
   * @link [Learn more about moving line items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderMove).
   */
  FULFILLMENT_ORDERS_MOVED: 'fulfillment_orders/moved',
  /**
   * Occurs when an order has finished being routed and it's fulfillment orders assigned to a fulfillment service's location.
   */
  FULFILLMENT_ORDERS_ORDER_ROUTING_COMPLETE: 'fulfillment_orders/order_routing_complete',
  /**
   * Occurs when a fulfillment order transitions to the `ON_HOLD` status
   * For cases where multiple holds are applied to a fulfillment order, this webhook will only trigger once when the first hold is applied and the fulfillment order status changes to `ON_HOLD`.
   */
  FULFILLMENT_ORDERS_PLACED_ON_HOLD: 'fulfillment_orders/placed_on_hold',
  /**
   * Triggers when a fulfillment order is rescheduled.
   * Fulfillment orders may be merged if they have the same `fulfillAt` datetime.
   * If the fulfillment order is merged then the resulting fulfillment order will be indicated in the webhook body.
   * Otherwise it will be the original fulfillment order with an updated `fulfill_at` datetime.
   */
  FULFILLMENT_ORDERS_RESCHEDULED: 'fulfillment_orders/rescheduled',
  /**
   * Occurs whenever a fulfillment order which was scheduled becomes due.
   */
  FULFILLMENT_ORDERS_SCHEDULED_FULFILLMENT_ORDER_READY:
    'fulfillment_orders/scheduled_fulfillment_order_ready',
  /**
   * Occurs when a fulfillment order is split into multiple fulfillment orders.
   */
  FULFILLMENT_ORDERS_SPLIT: 'fulfillment_orders/split',
  /**
   * Occurs whenever a fulfillment is created.
   */
  FULFILLMENTS_CREATE: 'fulfillments/create',
  /**
   * Occurs whenever a fulfillment is updated.
   */
  FULFILLMENTS_UPDATE: 'fulfillments/update',
  /**
   * Occurs whenever an inventory item is created.
   */
  INVENTORY_ITEMS_CREATE: 'inventory_items/create',
  /**
   * Occurs whenever an inventory item is deleted.
   */
  INVENTORY_ITEMS_DELETE: 'inventory_items/delete',
  /**
   * Occurs whenever an inventory item is updated.
   */
  INVENTORY_ITEMS_UPDATE: 'inventory_items/update',
  /**
   * Occurs whenever an inventory level is connected.
   */
  INVENTORY_LEVELS_CONNECT: 'inventory_levels/connect',
  /**
   * Occurs whenever an inventory level is disconnected.
   */
  INVENTORY_LEVELS_DISCONNECT: 'inventory_levels/disconnect',
  /**
   * Occurs whenever an inventory level is updated.
   */
  INVENTORY_LEVELS_UPDATE: 'inventory_levels/update',
  /**
   * Occurs whenever items are added to a shipment.
   */
  INVENTORY_SHIPMENTS_ADD_ITEMS: 'inventory_shipments/add_items',
  /**
   * Triggers when a shipment is created.
   */
  INVENTORY_SHIPMENTS_CREATE: 'inventory_shipments/create',
  /**
   * Triggers when a shipment is deleted.
   */
  INVENTORY_SHIPMENTS_DELETE: 'inventory_shipments/delete',
  /**
   * Triggers when a shipment is marked as in transit.
   */
  INVENTORY_SHIPMENTS_MARK_IN_TRANSIT: 'inventory_shipments/mark_in_transit',
  /**
   * Triggers when items on a shipment are received.
   */
  INVENTORY_SHIPMENTS_RECEIVE_ITEMS: 'inventory_shipments/receive_items',
  /**
   * Occurs whenever items are removed from a shipment.
   */
  INVENTORY_SHIPMENTS_REMOVE_ITEMS: 'inventory_shipments/remove_items',
  /**
   * Occurs whenever quantities change on a shipment.
   */
  INVENTORY_SHIPMENTS_UPDATE_ITEM_QUANTITIES: 'inventory_shipments/update_item_quantities',
  /**
   * Triggers when tracking info on a shipment is updated.
   */
  INVENTORY_SHIPMENTS_UPDATE_TRACKING: 'inventory_shipments/update_tracking',
  /**
   * Occurs any time items are added to a transfer.
   */
  INVENTORY_TRANSFERS_ADD_ITEMS: 'inventory_transfers/add_items',
  /**
   * Triggers when a transfer is canceled.
   */
  INVENTORY_TRANSFERS_CANCEL: 'inventory_transfers/cancel',
  /**
   * Triggers when a transfer is completed.
   */
  INVENTORY_TRANSFERS_COMPLETE: 'inventory_transfers/complete',
  /**
   * Triggers when a transfer is marked as ready to ship.
   */
  INVENTORY_TRANSFERS_READY_TO_SHIP: 'inventory_transfers/ready_to_ship',
  /**
   * Occurs any time items are removed from a transfer.
   */
  INVENTORY_TRANSFERS_REMOVE_ITEMS: 'inventory_transfers/remove_items',
  /**
   * Occurs whenever the quantity of transfer line items changes.
   */
  INVENTORY_TRANSFERS_UPDATE_ITEM_QUANTITIES: 'inventory_transfers/update_item_quantities',
  /**
   * Occurs whenever a shop locale is created
   */
  LOCALES_CREATE: 'locales/create',
  /**
   * Occurs whenever a shop locale is updated, such as published or unpublished
   */
  LOCALES_UPDATE: 'locales/update',
  /**
   * Occurs whenever a deactivated location is re-activated.
   */
  LOCATIONS_ACTIVATE: 'locations/activate',
  /**
   * Occurs whenever a location is created.
   */
  LOCATIONS_CREATE: 'locations/create',
  /**
   * Occurs whenever a location is deactivated.
   */
  LOCATIONS_DEACTIVATE: 'locations/deactivate',
  /**
   * Occurs whenever a location is deleted.
   */
  LOCATIONS_DELETE: 'locations/delete',
  /**
   * Occurs whenever a location is updated.
   */
  LOCATIONS_UPDATE: 'locations/update',
  /**
   * Occurs when a new market is created.
   */
  MARKETS_CREATE: 'markets/create',
  /**
   * Occurs when a market is deleted.
   */
  MARKETS_DELETE: 'markets/delete',
  /**
   * Occurs when a market is updated.
   */
  MARKETS_UPDATE: 'markets/update',
  /**
   * Occurs when a backup region is updated.
   */
  MARKETS_BACKUP_REGION_UPDATE: 'markets_backup_region/update',
  /**
   * Occurs when a metafield definition is created.
   */
  METAFIELD_DEFINITIONS_CREATE: 'metafield_definitions/create',
  /**
   * Occurs when a metafield definition is deleted.
   */
  METAFIELD_DEFINITIONS_DELETE: 'metafield_definitions/delete',
  /**
   * Occurs when a metafield definition is updated.
   */
  METAFIELD_DEFINITIONS_UPDATE: 'metafield_definitions/update',
  /**
   * Occurs when a metaobject is created.
   */
  METAOBJECTS_CREATE: 'metaobjects/create',
  /**
   * Occurs when a metaobject is deleted.
   */
  METAOBJECTS_DELETE: 'metaobjects/delete',
  /**
   * Occurs when a metaobject is updated.
   */
  METAOBJECTS_UPDATE: 'metaobjects/update',
  /**
   * Occurs when a order transaction is created or when it's status is updated. Only occurs for transactions with a status of success, failure or error.
   */
  ORDER_TRANSACTIONS_CREATE: 'order_transactions/create',
  /**
   * Occurs whenever an order is cancelled.
   */
  ORDERS_CANCELLED: 'orders/cancelled',
  /**
   * Occurs whenever an order is created.
   */
  ORDERS_CREATE: 'orders/create',
  /**
   * Occurs whenever an order is deleted.
   */
  ORDERS_DELETE: 'orders/delete',
  /**
   * Occurs whenever an order is edited.
   */
  ORDERS_EDITED: 'orders/edited',
  /**
   * Occurs whenever an order is fulfilled.
   */
  ORDERS_FULFILLED: 'orders/fulfilled',
  /**
   * Occurs whenever an order is paid.
   */
  ORDERS_PAID: 'orders/paid',
  /**
   * Occurs whenever an order is partially fulfilled.
   */
  ORDERS_PARTIALLY_FULFILLED: 'orders/partially_fulfilled',
  /**
   * Triggers when a new risk assessment is available on the order. This can be the first or a subsequent risk assessment.
   * New risk assessments can be provided until the order is marked as fulfilled. Includes the risk level, risk facts, the provider and the order ID.
   * When the provider is Shopify, that field is null. Does not include the risk recommendation for the order. The Shop ID is available in the headers.
   */
  ORDERS_RISK_ASSESSMENT_CHANGED: 'orders/risk_assessment_changed',
  /**
   * Occurs whenever Shopify Protect's eligibility for an order is changed.
   */
  ORDERS_SHOPIFY_PROTECT_ELIGIBILITY_CHANGED: 'orders/shopify_protect_eligibility_changed',
  /**
   * Occurs whenever an order is updated.
   */
  ORDERS_UPDATED: 'orders/updated',
  /**
   * Occurs whenever payment schedules are due.
   */
  PAYMENT_SCHEDULES_DUE: 'payment_schedules/due',
  /**
   * Occurs whenever payment terms are created.
   */
  PAYMENT_TERMS_CREATE: 'payment_terms/create',
  /**
   * Occurs whenever payment terms are deleted.
   */
  PAYMENT_TERMS_DELETE: 'payment_terms/delete',
  /**
   * Occurs whenever payment terms are updated.
   */
  PAYMENT_TERMS_UPDATE: 'payment_terms/update',
  /**
   * Triggers when product feed is created
   */
  PRODUCT_FEEDS_CREATE: 'product_feeds/create',
  /**
   * Triggers when a full sync for a product feed is performed
   */
  PRODUCT_FEEDS_FULL_SYNC: 'product_feeds/full_sync',
  /**
   * Triggers when a full sync finishes
   */
  PRODUCT_FEEDS_FULL_SYNC_FINISH: 'product_feeds/full_sync_finish',
  /**
   * Occurs whenever a product publication is created, updated or removed for a product feed
   */
  PRODUCT_FEEDS_INCREMENTAL_SYNC: 'product_feeds/incremental_sync',
  /**
   * Triggers when product feed is updated
   */
  PRODUCT_FEEDS_UPDATE: 'product_feeds/update',
  /**
   * Occurs whenever an active product is listed on a channel.
   */
  PRODUCT_LISTINGS_ADD: 'product_listings/add',
  /**
   * Occurs whenever a product listing is removed from the channel.
   */
  PRODUCT_LISTINGS_REMOVE: 'product_listings/remove',
  /**
   * Occurs whenever a product publication is updated.
   */
  PRODUCT_LISTINGS_UPDATE: 'product_listings/update',
  /**
   * Occurs whenever a product publication for an active product is created, or whenever an existing product publication is published on the app that is subscribed to this webhook topic.
   * Note that a webhook is only emitted when there are publishing changes to the app that is subscribed to the topic (ie. no webhook will be emitted if there is a publishing change to the online store and the webhook subscriber of the topic is a third-party app).
   */
  PRODUCT_PUBLICATIONS_CREATE: 'product_publications/create',
  /**
   * Occurs whenever a product publication for an active product is removed, or whenever an existing product publication is unpublished from the app that is subscribed to this webhook topic.
   * Note that a webhook is only emitted when there are publishing changes to the app that is subscribed to the topic (ie. no webhook will be emitted if there is a publishing change to the online store and the webhook subscriber of the topic is a third-party app).
   */
  PRODUCT_PUBLICATIONS_DELETE: 'product_publications/delete',
  /**
   * Occurs whenever a product publication is updated from the app that is subscribed to this webhook topic.
   * Note that a webhook is only emitted when there are publishing changes to the app that is subscribed to the topic (ie. no webhook will be emitted if there is a publishing change to the online store and the webhook subscriber of the topic is a third-party app).
   */
  PRODUCT_PUBLICATIONS_UPDATE: 'product_publications/update',
  /**
   * Occurs whenever a product is created. Product webhooks will return a full variants payload for the first 100 records.
   * For records 101 and higher, the payload won't include the full variant details, but the `variant_gids` field will still include a `admin_graphql_api_id` value for these variants.
   * The `variant_gids` are sorted by `updated_at`, with the gids for recently updated variants appearing first.
   */
  PRODUCTS_CREATE: 'products/create',
  /**
   * Occurs whenever a product is deleted.
   */
  PRODUCTS_DELETE: 'products/delete',
  /**
   * Occurs whenever a product is updated, ordered, or variants are added, removed or updated. Product webhooks will return a full variants payload for the first 100 records.
   * For records 101 and higher, the payload won't include the full variant details, but the `variant_gids` field will still include a `admin_graphql_api_id` value for these variants.
   * The `variant_gids` are sorted by `updated_at`, with the gids for recently updated variants appearing first.
   */
  PRODUCTS_UPDATE: 'products/update',
  /**
   * Occurs whenever a delivery profile is created
   */
  PROFILES_CREATE: 'profiles/create',
  /**
   * Occurs whenever a delivery profile is deleted
   */
  PROFILES_DELETE: 'profiles/delete',
  /**
   * Occurs whenever a delivery profile is updated
   */
  PROFILES_UPDATE: 'profiles/update',
  /**
   * Occurs whenever a new refund is created without errors on an order, independent from the movement of money.
   */
  REFUNDS_CREATE: 'refunds/create',
  /**
   * Occurs whenever a return is approved. This means `Return.status` is `OPEN`.
   */
  RETURNS_APPROVE: 'returns/approve',
  /**
   * Occurs whenever a return is canceled.
   */
  RETURNS_CANCEL: 'returns/cancel',
  /**
   * Occurs whenever a return is closed.
   */
  RETURNS_CLOSE: 'returns/close',
  /**
   * Occurs whenever a return is declined. This means `Return.status` is `DECLINED`.
   */
  RETURNS_DECLINE: 'returns/decline',
  /**
   * Occurs whenever a return is processed.
   */
  RETURNS_PROCESS: 'returns/process',
  /**
   * Occurs whenever a closed return is reopened.
   */
  RETURNS_REOPEN: 'returns/reopen',
  /**
   * Occurs whenever a return is requested. This means `Return.status` is `REQUESTED`.
   */
  RETURNS_REQUEST: 'returns/request',
  /**
   * Occurs whenever a return is updated.
   */
  RETURNS_UPDATE: 'returns/update',
  /**
   * Occurs whenever a deliverable is attached to a reverse delivery.
   * This occurs when a reverse delivery is created or updated with delivery metadata.
   * Metadata includes the delivery method, label, and tracking information associated with a reverse delivery.
   */
  REVERSE_DELIVERIES_ATTACH_DELIVERABLE: 'reverse_deliveries/attach_deliverable',
  /**
   * Occurs whenever a disposition is made on a reverse fulfillment order.
   * This includes dispositions made on reverse deliveries that are associated with the reverse fulfillment order.
   */
  REVERSE_FULFILLMENT_ORDERS_DISPOSE: 'reverse_fulfillment_orders/dispose',
  /**
   * Occurs whenever a product is scheduled to be published.
   */
  SCHEDULED_PRODUCT_LISTINGS_ADD: 'scheduled_product_listings/add',
  /**
   * Occurs whenever a product is no longer scheduled to be published.
   */
  SCHEDULED_PRODUCT_LISTINGS_REMOVE: 'scheduled_product_listings/remove',
  /**
   * Occurs whenever a product's scheduled availability date changes.
   */
  SCHEDULED_PRODUCT_LISTINGS_UPDATE: 'scheduled_product_listings/update',
  /**
   * Occurs whenever a segment is created.
   */
  SEGMENTS_CREATE: 'segments/create',
  /**
   * Occurs whenever a segment is deleted.
   */
  SEGMENTS_DELETE: 'segments/delete',
  /**
   * Occurs whenever a segment is updated.
   */
  SEGMENTS_UPDATE: 'segments/update',
  /**
   * Notifies when a SellingPlanGroup is created.
   */
  SELLING_PLAN_GROUPS_CREATE: 'selling_plan_groups/create',
  /**
   * Notifies when a SellingPlanGroup is deleted.
   */
  SELLING_PLAN_GROUPS_DELETE: 'selling_plan_groups/delete',
  /**
   * Notifies when a SellingPlanGroup is updated.
   */
  SELLING_PLAN_GROUPS_UPDATE: 'selling_plan_groups/update',
  /**
   * Occurs whenever a shipping address is created.
   * @deprecated
   */
  SHIPPING_ADDRESSES_CREATE: 'shipping_addresses/create',
  /**
   * Occurs whenever a shipping address is updated.
   * @deprecated
   */
  SHIPPING_ADDRESSES_UPDATE: 'shipping_addresses/update',
  /**
   * 48 hours after a store owner uninstalls your app, Shopify sends a payload on the `shop/redact` topic.
   * This webhook provides the store's `shop_id` and `shop_domain` so that you can erase data for that store from your database.
   * While testing with this topic in development, note that the corresponding event on your test shop will not result in a webhook triggering immediately.
   * The `shop/redact` webhooks are emitted no earlier than 48 hours after uninstalling the app, and they do not fire if the app has been re-installed again.
   */
  SHOP_REDACT: 'shop/redact',
  /**
   * Occurs whenever a shop is updated.
   */
  SHOP_UPDATE: 'shop/update',
  /**
   * Occurs when the financial instutition challenges the subscripttion billing attempt charge as per 3D Secure.
   */
  SUBSCRIPTION_BILLING_ATTEMPTS_CHALLENGED: 'subscription_billing_attempts/challenged',
  /**
   * Occurs whenever a subscription billing attempt fails.
   */
  SUBSCRIPTION_BILLING_ATTEMPTS_FAILURE: 'subscription_billing_attempts/failure',
  /**
   * Occurs whenever a subscription billing attempt succeeds.
   */
  SUBSCRIPTION_BILLING_ATTEMPTS_SUCCESS: 'subscription_billing_attempts/success',
  /**
   * Occurs whenever a subscription contract billing cycle is edited.
   */
  SUBSCRIPTION_BILLING_CYCLE_EDITS_CREATE: 'subscription_billing_cycle_edits/create',
  /**
   * Occurs whenever a subscription contract billing cycle edit is deleted.
   */
  SUBSCRIPTION_BILLING_CYCLE_EDITS_DELETE: 'subscription_billing_cycle_edits/delete',
  /**
   * Occurs whenever a subscription contract billing cycle edit is updated.
   */
  SUBSCRIPTION_BILLING_CYCLE_EDITS_UPDATE: 'subscription_billing_cycle_edits/update',
  /**
   * Occurs whenever a subscription contract billing cycle is skipped.
   */
  SUBSCRIPTION_BILLING_CYCLES_SKIP: 'subscription_billing_cycles/skip',
  /**
   * Occurs whenever a subscription contract billing cycle is unskipped.
   */
  SUBSCRIPTION_BILLING_CYCLES_UNSKIP: 'subscription_billing_cycles/unskip',
  /**
   * Occurs when a subscription contract is activated.
   */
  SUBSCRIPTION_CONTRACTS_ACTIVATE: 'subscription_contracts/activate',
  /**
   * Occurs when a subscription contract is canceled.
   */
  SUBSCRIPTION_CONTRACTS_CANCEL: 'subscription_contracts/cancel',
  /**
   * Occurs whenever a subscription contract is created.
   */
  SUBSCRIPTION_CONTRACTS_CREATE: 'subscription_contracts/create',
  /**
   * Occurs when a subscription contract expires.
   */
  SUBSCRIPTION_CONTRACTS_EXPIRE: 'subscription_contracts/expire',
  /**
   * Occurs when a subscription contract is failed.
   */
  SUBSCRIPTION_CONTRACTS_FAIL: 'subscription_contracts/fail',
  /**
   * Occurs when a subscription contract is paused.
   */
  SUBSCRIPTION_CONTRACTS_PAUSE: 'subscription_contracts/pause',
  /**
   * Occurs whenever a subscription contract is updated.
   */
  SUBSCRIPTION_CONTRACTS_UPDATE: 'subscription_contracts/update',
  /**
   * Occurs whenever a tax service is created.
   * @deprecated
   */
  TAX_SERVICES_CREATE: 'tax_services/create',
  /**
   * Occurs whenver a tax service is updated.
   * @deprecated
   */
  TAX_SERVICES_UPDATE: 'tax_services/update',
  /**
   * Occurs when a tender transaction is created.
   */
  TENDER_TRANSACTIONS_CREATE: 'tender_transactions/create',
  /**
   * Occurs whenever a theme is created.
   * Does not occur when theme files are created.
   */
  THEMES_CREATE: 'themes/create',
  /**
   * Occurs whenever a theme is deleted.
   * Does not occur when theme files are deleted.
   */
  THEMES_DELETE: 'themes/delete',
  /**
   * Occurs whenever a theme with the main or mobile (deprecated) role is published.
   */
  THEMES_PUBLISH: 'themes/publish',
  /**
   * Occurs whenever a theme is updated.
   * Does not occur when theme files are updated.
   */
  THEMES_UPDATE: 'themes/update',
  /**
   * Occurs whenever a variant becomes in stock.
   * Online channels receive this webhook only when the variant becomes in stock online.
   */
  VARIANTS_IN_STOCK: 'variants/in_stock',
  /**
   * Occurs whenever a variant becomes out of stock.
   * Online channels receive this webhook only when the variant becomes out of stock online.</
   */
  VARIANTS_OUT_OF_STOCK: 'variants/out_of_stock',
} as const
