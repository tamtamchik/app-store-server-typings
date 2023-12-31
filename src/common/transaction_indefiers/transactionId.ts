/**
 * The unique identifier for a transaction such as an in-app purchase, restored purchase, or subscription renewal.
 *
 * The App Store generates a new value for transaction identifier every time the subscription automatically renews
 * or the user restores it on a new device.
 *
 * When a user first purchases a subscription, the transaction identifier always matches the original transaction
 * identifier {@link originalTransactionId}. For a restore or renewal, the transaction identifier doesn't match
 * the original transaction identifier. If a user restores or renews the same subscription multiple times, each
 * restore or renewal has a unique transaction identifier.
 *
 * @link https://developer.apple.com/documentation/appstoreservernotifications/transactionid
 * @version 2.0+ (Server Notifications API)
 *
 * @link https://developer.apple.com/documentation/appstoreserverapi/transactionid
 * @version 1.0+ (App Store Server API)
 */
export type transactionId = string
