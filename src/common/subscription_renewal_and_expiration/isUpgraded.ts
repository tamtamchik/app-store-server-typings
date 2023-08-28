/**
 * A Boolean value that indicates whether the user upgraded to another subscription.
 *
 * If isUpgraded is true, the user has upgraded the subscription represented by this transaction to another subscription.
 * This value appears in the transaction only when the value is true.
 *
 * To determine the service that the customer is entitled to, look for another transaction that has a subscription
 * with a higher level of service.
 *
 * @link https://developer.apple.com/documentation/appstoreservernotifications/isupgraded
 * @version 2.0+ (Server Notifications API)
 *
 * @link https://developer.apple.com/documentation/appstoreserverapi/isupgraded
 * @version 1.0+ (App Store Server API)
 */
export type isUpgraded = boolean
