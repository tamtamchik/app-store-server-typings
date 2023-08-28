/**
 * The UNIX time, in milliseconds, an auto-renewable subscription purchase expires or renews.
 *
 * The expiresDate is a static value that applies for each transaction.
 * When the auto-renewable subscription renews, the App Store creates a new transaction with a new expiresDate.
 *
 * @link https://developer.apple.com/documentation/appstoreservernotifications/expiresdate
 * @version 2.0+ (Server Notifications API)
 *
 * @link https://developer.apple.com/documentation/appstoreserverapi/expiresdate
 * @version 1.0+ (App Store Server API)
 */
export type expiresDate = number
