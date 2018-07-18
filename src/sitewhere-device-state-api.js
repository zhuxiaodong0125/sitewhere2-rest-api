import {
  restAuthPost,
  randomSeedQuery
} from './sitewhere-rest'

/**
 * List device state entries matching the given criteria.
 */
export function searchDeviceStates (axios, criteria, options) {
  let query = randomSeedQuery()
  query += (options.includeDevice) ? '&includeDevice=true' : ''
  query += (options.includeDeviceType) ? '&includeDeviceType=true' : ''
  query += (options.includeDeviceAssignment) ? '&includeDeviceAssignment=true' : ''
  query += (options.includeCustomer) ? '&includeCustomer=true' : ''
  query += (options.includeArea) ? '&includeArea=true' : ''
  query += (options.includeAsset) ? '&includeAsset=true' : ''
  query += (options.includeEventDetails) ? '&includeEventDetails=true' : ''
  return restAuthPost(axios, 'devicestates/search' + query, criteria)
}
