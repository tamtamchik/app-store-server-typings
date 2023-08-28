/**
 * The server environment, either sandbox or production.
 *
 * You receive data from the App Store Server API for the sandbox environment when you send test requests to
 * the endpoints using the sandbox base URL: https://api.storekit-sandbox.itunes.apple.com
 *
 * @link https://developer.apple.com/documentation/appstoreservernotifications/environment
 * @version 2.0+ (Server Notifications API)
 *
 * @link https://developer.apple.com/documentation/appstoreserverapi/environment
 * @version 1.0+ (App Store Server API)
 */
export enum environment {
  Sandbox = 'Sandbox',
  Production = 'Production',
}
