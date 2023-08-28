/**
 * A string that describes whether the transaction was purchased by the user, or is available to them through Family Sharing.
 *
 * @link https://developer.apple.com/documentation/appstoreservernotifications/inappownershiptype
 * @version 2.0+ (Server Notifications API)
 *
 * @link https://developer.apple.com/documentation/appstoreserverapi/inappownershiptype
 * @version 1.0+ (App Store Server API)
 */
export enum inAppOwnershipType {
  /**
   * The transaction belongs to a family member who benefits from the service.
   */
  FAMILY_SHARED = 'FAMILY_SHARED',

  /**
   * The transaction belongs to the purchaser.
   */
  PURCHASED = 'PURCHASED',
}
