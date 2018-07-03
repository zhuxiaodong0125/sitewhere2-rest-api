import axios from 'axios'

/**
 * Perform a REST get call.
 */
export function restAuthGet (axios, path) {
  return axios.get(path)
}

/**
 * Perform a REST post call.
 */
export function restAuthPost (axios, path, payload) {
  return axios.post(path, payload)
}

/**
 * Perform a REST post call with progress monitoring.
 */
export function restAuthPostWithProgress (axios, path, payload, callback) {
  let config = {
    onDownloadProgress: callback
  }
  return axios.post(path, payload, config)
}

/**
 * Perform a REST put call.
 */
export function restAuthPut (axios, path, payload) {
  return axios.put(path, payload)
}

/**
 * Perform a REST delete call.
 */
export function restAuthDelete (axios, path) {
  return axios.delete(path)
}

/**
 * Generate a query with a random seed value to prevent caching.
 */
export function randomSeedQuery () {
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = crypto.getRandomValues(new Uint8Array(1))[0] % 16 | 0
    let v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
  return '?rnd=' + uuid
}
