import { appAccountToken } from './appAccountToken'
import { environment } from './environment'
import { inAppOwnershipType } from './inAppOwnershipType'
import { bundleId } from './product_information/bundleId'
import { productId } from './product_information/productId'
import { productType } from './product_information/productType'
import { quantity } from './product_information/quantity'
import { subscriptionGroupIdentifier } from './product_information/subscriptionGroupIdentifier'
import { offerIdentifier } from './promotional_offers/offerIdentifier'
import { offerType } from './promotional_offers/offerType'
import { originalPurchaseDate } from './purchase_dates/originalPurchaseDate'
import { purchaseDate } from './purchase_dates/purchaseDate'
import { revocationDate } from './revocation_date_and_reason/revocationDate'
import { revocationReason } from './revocation_date_and_reason/revocationReason'
import { signedDate } from './signedDate'
import { storefront } from './storefront_info/storefront'
import { storefrontId } from './storefront_info/storefrontId'
import { expiresDate } from './subscription_renewal_and_expiration/expiresDate'
import { isUpgraded } from './subscription_renewal_and_expiration/isUpgraded'
import { originalTransactionId } from './transaction_indefiers/originalTransactionId'
import { transactionId } from './transaction_indefiers/transactionId'
import { webOrderLineItemId } from './transaction_indefiers/webOrderLineItemId'
import { transactionReason } from './transactionReason'

/**
 * A decoded payload containing transaction information.
 *
 * @link https://developer.apple.com/documentation/appstoreservernotifications/jwstransactiondecodedpayload
 * @version 2.0+ (Server Notifications API)
 *
 * @link https://developer.apple.com/documentation/appstoreserverapi/jwstransactiondecodedpayload
 * @version 1.0+ (App Store Server API)
 */
export interface jwsTransactionDecodedPayload {

  appAccountToken: appAccountToken

  bundleId: bundleId

  environment: environment

  expiresDate: expiresDate

  inAppOwnershipType: inAppOwnershipType

  isUpgraded: isUpgraded

  offerIdentifier: offerIdentifier

  offerType: offerType

  originalPurchaseDate: originalPurchaseDate

  originalTransactionId: originalTransactionId

  productId: productId

  purchaseDate: purchaseDate

  quantity: quantity

  revocationDate: revocationDate

  revocationReason: revocationReason

  signedDate: signedDate

  storefront: storefront

  storefrontId: storefrontId

  subscriptionGroupIdentifier: subscriptionGroupIdentifier

  transactionId: transactionId

  transactionReason: transactionReason

  type: productType

  webOrderLineItemId: webOrderLineItemId
}
