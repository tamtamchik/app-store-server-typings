/**
 * The product type of the in-app purchase.
 *
 * @name type - apple docs use 'type' as the name, but that's a reserved word in typescript
 *
 * @link https://developer.apple.com/documentation/appstoreservernotifications/type
 * @version 2.0+ (Server Notifications API)
 *
 * @link https://developer.apple.com/documentation/appstoreserverapi/type
 * @version 1.0+ (App Store Server API)
 */
export enum productType {
  /**
   * An auto-renewable subscription.
   */
  AUTO_RENEWABLE_SUBSCRIPTION = 'Auto-Renewable Subscription',

  /**
   * A non-consumable in-app purchase.
   */
  NON_CONSUMABLE = 'Non-Consumable',

  /**
   * A consumable in-app purchase.
   */
  CONSUMABLE = 'Consumable',

  /**
   * A non-renewing subscription.
   */
  NON_RENEWING_SUBSCRIPTION = 'Non-Renewing Subscription',
}

