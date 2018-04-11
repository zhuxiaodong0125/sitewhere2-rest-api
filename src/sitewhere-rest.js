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
