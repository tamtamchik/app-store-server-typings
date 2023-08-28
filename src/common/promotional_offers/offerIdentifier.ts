/**
 * The identifier that contains the offer code or the promotional offer identifier.
 *
 * The offerIdentifier applies only when the {@link offerType} has a value of 2 or 3.
 *
 * The offerIdentifier provides details about the subscription offer in effect for the transaction.
 * Its value is either the offer code or the promotional offer.
 *
 * @link https://developer.apple.com/documentation/appstoreservernotifications/offeridentifier
 * @version 2.0+ (Server Notifications API)
 *
 * @link https://developer.apple.com/documentation/appstoreserverapi/offeridentifier
 * @version 1.0+ (App Store Server API)
 */
export type offerIdentifier = string
