/**
 * The UNIX time, in milliseconds, when the most recent auto-renewable subscription purchase expires.
 *
 * The renewalDate is a value that's always present in the payload for auto-renewable subscriptions,
 * even for expired subscriptions. This date indicates the expiration date of the most recent auto-renewable
 * subscription purchase, including renewals, and may be in the past. For subscriptions that renew successfully,
 * the renewalDate is the date when the subscription renews.
 *
 * @link https://developer.apple.com/documentation/appstoreservernotifications/renewaldate
 * @version 2.8+ (Server Notifications API)
 *
 * @link https://developer.apple.com/documentation/appstoreserverapi/renewaldate
 * @version 1.8+ (App Store Server API)
 */
export type renewalDate = number
