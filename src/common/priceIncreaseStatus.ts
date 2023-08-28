/**
 * The status that indicates whether an auto-renewable subscription is subject to a price increase.
 *
 * @link https://developer.apple.com/documentation/appstoreservernotifications/priceincreasestatus
 * @version 2.0+ (Server Notifications API)
 *
 * @link https://developer.apple.com/documentation/appstoreserverapi/priceincreasestatus
 * @version 1.0+ (App Store Server API)
 */
export enum priceIncreaseStatus {
  /**
   * The customer hasn't yet responded to an auto-renewable subscription price increase that requires customer consent.
   */
  CUSTOMER_NOTIFIED = 0,

  /**
   * The customer consented to an auto-renewable subscription price increase that requires customer consent, or
   * the App Store has notified the customer of an auto-renewable subscription price increase that doesn't require
   * consent.
   */
  CUSTOMER_AGREED = 1,
}
