/**
 * API calls associated with SiteWhere device specifications.
 */
import {restAuthGet, restAuthPost, restAuthPut, restAuthDelete} from './sitewhere-rest'

/**
 * Create a device type.
 */
export function createDeviceType (axios, payload) {
  return restAuthPost(axios, '/devicetypes', payload)
}

/**
 * Get device type by unique token.
 */
export function getDeviceType (axios, token) {
  return restAuthGet(axios, '/devicetypes/' + token)
}

/**
 * Get device type protocol buffer definition.
 */
export function getDeviceTypeProtobuf (axios, token) {
  return restAuthGet(axios, '/devicetypes/' + token + '/proto')
}

/**
 * Update an existing device type.
 */
export function updateDeviceType (axios, token, payload) {
  return restAuthPut(axios, '/devicetypes/' + token, payload)
}

/**
 * List device types.
 */
export function listDeviceTypes (axios, includeDeleted, includeAsset, paging) {
  let query = ''
  query += (includeDeleted)
    ? '?includeDeleted=true' : '?includeDeleted=false'
  query += (includeAsset)
    ? '&includeAsset=true' : '&includeAsset=false'
  if (paging) {
    query += '&' + paging
  }
  return restAuthGet(axios, 'devicetypes' + query)
}

/**
 * Delete device type.
 */
export function deleteDeviceType (axios, token, force) {
  let query = ''
  query += (force)
    ? '?force=true' : '?force=false'
  return restAuthDelete(axios, 'devicetypes/' + token + query)
}
