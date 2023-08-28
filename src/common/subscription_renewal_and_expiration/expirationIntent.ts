/**
 * The reason a subscription expired.
 *
 * @link https://developer.apple.com/documentation/appstoreservernotifications/expirationintent
 * @version 2.0+ (Server Notifications API)
 *
 * @link https://developer.apple.com/documentation/appstoreserverapi/expirationintent
 * @version 1.0+ (App Store Server API)
 */
export enum expirationIntent {
  /**
   * The customer canceled their subscription.
   */
  CUSTOMER_CANCELED = 1,

  /**
   * Billing error; for example, the customer’s payment information is no longer valid.
   */
  BILLING_ERROR = 2,

  /**
   * The customer didn't consent to an auto-renewable subscription price increase that requires customer consent,
   * allowing the subscription to expire.
   */
  CUSTOMER_DENIED_PRICE_INCREASE = 3,

  /**
   * The product wasn't available for purchase at the time of renewal.
   */
  PRODUCT_NOT_AVAILABLE = 4,

  /**
   * The subscription expired for some other reason.
   */
  UNKNOWN = 5,
}
