import { bundleId, environment, productId } from '../common'

import { storefrontCountryCode } from './storefrontCountryCode'

/**
 * The payload data for a subscription-renewal-date extension notification.
 *
 * @link https://developer.apple.com/documentation/appstoreservernotifications/summary
 * @version 2.7+
 */
export interface summary {

  /**
   * The UUID that represents a specific request to extend a subscription renewal date.
   * This value matches the value you initially specify in the requestIdentifier when you call
   * Extend Subscription Renewal Dates for All Active Subscribers in the App Store Server API.
   *
   * @link https://developer.apple.com/documentation/appstoreservernotifications/requestidentifier
   * @version 2.7+
   */
  requestIdentifier: string

  environment: environment

  /**
   * The unique identifier of the app that the notification applies to.
   * This property is available for apps that users download from the App Store.
   * It isn’t present in the sandbox environment.
   *
   * @link https://developer.apple.com/documentation/appstoreservernotifications/appappleid
   * @version 2.7+
   */
  appAppleId?: number

  bundleId: bundleId

  productId: productId

  /**
   * A list of country codes that limits the App Store’s attempt to apply the subscription-renewal-date extension.
   * If this list isn't present, the subscription-renewal-date extension applies to all storefronts.
   *
   * @link https://developer.apple.com/documentation/appstoreservernotifications/storefrontcountrycodes
   * @version 2.7+
   */
  storefrontCountryCodes?: storefrontCountryCode[]

  /**
   * The final count of subscriptions that fail to receive a subscription-renewal-date extension.
   *
   * @link https://developer.apple.com/documentation/appstoreservernotifications/failedcount
   * @version 2.7+
   */
  failedCount: number

  /**
   * The final count of subscriptions that successfully receive a subscription-renewal-date extension.
   *
   * @link https://developer.apple.com/documentation/appstoreservernotifications/succeededcount
   * @version 2.7+
   */
  succeededCount: number
}
