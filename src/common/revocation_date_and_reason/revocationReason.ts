/**
 * The reason for a refunded transaction.
 *
 * @link https://developer.apple.com/documentation/appstoreservernotifications/revocationreason
 * @version 2.0+ (Server Notifications API)
 *
 * @link https://developer.apple.com/documentation/appstoreserverapi/revocationreason
 * @version 1.0+ (App Store Server API)
 */
export enum revocationReason {
  /**
   * The App Store refunded the transaction on behalf of the customer for other reasons, for example,
   * an accidental purchase.
   */
  CUSTOMER_CANCELLED = 0,

  /**
   * The App Store refunded the transaction on behalf of the customer due to an actual or perceived issue
   * within your app.
   */
  APP_ISSUE = 1,
}
