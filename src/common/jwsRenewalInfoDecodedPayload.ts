import { gracePeriodExpiresDate } from './billing_status/gracePeriodExpiresDate'
import { isInBillingRetryPeriod } from './billing_status/isInBillingRetryPeriod'
import { environment } from './environment'
import { priceIncreaseStatus } from './priceIncreaseStatus'
import { productId } from './product_information/productId'
import { offerIdentifier } from './promotional_offers/offerIdentifier'
import { offerType } from './promotional_offers/offerType'
import { recentSubscriptionStartDate } from './purchase_dates/recentSubscriptionStartDate'
import { signedDate } from './signedDate'
import { autoRenewProductId } from './subscription_renewal_and_expiration/autoRenewProductId'
import { autoRenewStatus } from './subscription_renewal_and_expiration/autoRenewStatus'
import { expirationIntent } from './subscription_renewal_and_expiration/expirationIntent'
import { renewalDate } from './subscription_renewal_and_expiration/renewalDate'
import { originalTransactionId } from './transaction_indefiers/originalTransactionId'

/**
 * A decoded payload containing subscription renewal information for an auto-renewable subscription.
 *
 * @link https://developer.apple.com/documentation/appstoreservernotifications/jwsrenewalinfodecodedpayload
 * @version 2.0+ (Server Notifications API)
 *
 * @link https://developer.apple.com/documentation/appstoreserverapi/jwsrenewalinfodecodedpayload
 * @version 1.0+ (App Store Server API)
 */
export interface jwsRenewalInfoDecodedPayload {

  autoRenewProductId: autoRenewProductId

  autoRenewStatus: autoRenewStatus

  environment: environment

  expirationIntent: expirationIntent

  gracePeriodExpiresDate: gracePeriodExpiresDate

  isInBillingRetryPeriod: isInBillingRetryPeriod

  offerIdentifier: offerIdentifier

  offerType: offerType

  originalTransactionId: originalTransactionId

  priceIncreaseStatus: priceIncreaseStatus

  productId: productId

  recentSubscriptionStartDate: recentSubscriptionStartDate

  renewalDate: renewalDate

  signedDate: signedDate
}
