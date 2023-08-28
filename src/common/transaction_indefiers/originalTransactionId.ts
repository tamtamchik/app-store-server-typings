/**
 * The original transaction identifier of a purchase.
 *
 * This value is identical to the transaction identifier {@link transactionId} except when the user restores or
 * renews a subscription.
 *
 * @link https://developer.apple.com/documentation/appstoreservernotifications/originaltransactionid
 * @version 2.0+ (Server Notifications API)
 *
 * @link https://developer.apple.com/documentation/appstoreserverapi/originaltransactionid
 * @version 1.0+ (App Store Server API)
 */
export type originalTransactionId = string
