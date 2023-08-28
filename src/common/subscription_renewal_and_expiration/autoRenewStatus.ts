/**
 * The renewal status for an auto-renewable subscription.
 *
 * @link https://developer.apple.com/documentation/appstoreservernotifications/autorenewstatus
 * @version 2.0+ (Server Notifications API)
 *
 * @link https://developer.apple.com/documentation/appstoreserverapi/autorenewstatus
 * @version 1.0+ (App Store Server API)
 */
export enum autoRenewStatus {
  /**
   * Automatic renewal is off. The customer has turned off automatic renewal for the subscription, and it won't
   * renew at the end of the current subscription period.
   */
  OFF = 0,

  /**
   * Automatic renewal is on. The subscription renews at the end of the current subscription period.
   */
  ON = 1,
}
