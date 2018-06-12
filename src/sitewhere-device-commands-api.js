/**
 * API calls associated with SiteWhere device specifications.
 */
import {restAuthGet, restAuthPost, restAuthPut, restAuthDelete} from './sitewhere-rest'

/**
 * Create a device command.
 */
export function createDeviceCommand (axios, payload) {
  return restAuthPost(axios, '/commands', payload)
}

/**
 * Get a device command by token.
 */
export function getDeviceCommand (axios, token) {
  return restAuthGet(axios, '/commands/' + token)
}

/**
 * Update an existing device command.
 */
export function updateDeviceCommand (axios, token, payload) {
  return restAuthPut(axios, '/commands/' + token, payload)
}

/**
 * List device commands that meet criteria.
 */
export function listDeviceCommands (axios, options) {
  let query = ''
  query += (options.deviceTypeToken)
    ? '?deviceTypeToken=' + options.deviceTypeToken : ''
  return restAuthGet(axios, '/commands' + query)
}

/**
 * List device specification commands by namespace.
 */
export function listDeviceCommandsByNamespace (axios, options) {
  let query = ''
  query += (options.deviceTypeToken)
    ? '?deviceTypeToken=' + options.deviceTypeToken : ''
  return restAuthGet(axios, '/commands/namespaces' + query)
}

/**
 * Delete device command.
 */
export function deleteDeviceCommand (axios, token, force) {
  let query = ''
  query += (force)
    ? '?force=true' : '?force=false'
  return restAuthDelete(axios, 'commands/' + token + query)
}
