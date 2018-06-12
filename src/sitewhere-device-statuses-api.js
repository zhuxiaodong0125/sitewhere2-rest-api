/**
 * API calls associated with SiteWhere device specifications.
 */
import {restAuthGet, restAuthPost, restAuthPut, restAuthDelete} from './sitewhere-rest'

/**
 * Create a device status.
 */
export function createDeviceStatus (axios, payload) {
  return restAuthPost(axios, '/statuses', payload)
}

/**
 * Get a device status by token.
 */
export function getDeviceStatus (axios, token) {
  return restAuthGet(axios, '/statuses/' + token)
}

/**
 * Update an existing device status.
 */
export function updateDeviceStatus (axios, token, payload) {
  return restAuthPut(axios, '/statuses/' + token, payload)
}

/**
 * List all device statuses that meet criteria.
 */
export function listDeviceStatuses (axios, options) {
  let query = ''
  query += (options.deviceTypeToken)
    ? '?deviceTypeToken=' + options.deviceTypeToken : ''
  return restAuthGet(axios, '/statuses' + query)
}

/**
 * Delete device status.
 */
export function deleteDeviceStatus (axios, token) {
  return restAuthDelete(axios, '/statuses/' + token)
}
