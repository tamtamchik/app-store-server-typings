/**
 * Don't use the `recentSubscriptionStartDate` date to calculate days of paid service.
 *
 * The earliest start date of a subscription in a series of auto-renewable subscription purchases that ignores
 * all lapses of paid service shorter than 60 days.
 *
 * @link https://developer.apple.com/documentation/appstoreservernotifications/recentsubscriptionstartdate
 * @version 2.5+ (Server Notifications API)
 *
 * @link https://developer.apple.com/documentation/appstoreserverapi/recentsubscriptionstartdate
 * @version 1.5+ (App Store Server API)
 */
export type recentSubscriptionStartDate = number
