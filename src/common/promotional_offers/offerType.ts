/**
 * The type of subscription offer.
 *
 * The offer types 2 and 3 have an offerIdentifier.
 *
 * @link https://developer.apple.com/documentation/appstoreservernotifications/offertype
 * @version 2.0+ (Server Notifications API)
 *
 * @link https://developer.apple.com/documentation/appstoreserverapi/offertype
 * @version 1.0+ (App Store Server API)
 */
export enum offerType {
  /**
   * An introductory offer.
   */
  INTRODUCTORY = 1,

  /**
   * A promotional offer.
   */
  PROMOTIONAL = 2,

  /**
   * An offer with a subscription offer code.
   */
  SUBSCRIPTION_OFFER_CODE = 3,
}
