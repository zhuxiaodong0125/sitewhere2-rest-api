import {restAuthGet, restAuthPost, restAuthPut, restAuthDelete} from './sitewhere-rest'

/**
 * Create a new customer type.
 */
export function createCustomerType (axios, customerType) {
  return restAuthPost(axios, 'customertypes/', customerType)
}

/**
 * Get a customer type by unique token.
 */
export function getCustomerType (axios, customerTypeToken) {
  return restAuthGet(axios, 'customertypes/' + customerTypeToken)
}

/**
 * Update an existing customer type.
 */
export function updateCustomerType (axios, customerTypeToken, payload) {
  return restAuthPut(axios, 'customertypes/' + customerTypeToken, payload)
}

/**
 * List customer types.
 */
export function listCustomerTypes (axios, includeContainedCustomerTypes, paging) {
  let query = ''
  query += (includeContainedCustomerTypes) ? '?includeContainedCustomerTypes=true'
    : '?includeContainedCustomerTypes=false'
  if (paging) {
    query += '&' + paging
  }
  return restAuthGet(axios, 'customertypes' + query)
}

/**
 * Delete an existing customer type.
 */
export function deleteCustomerType (axios, customerTypeToken, force) {
  let query = ''
  if (force) {
    query += '?force=true'
  }
  return restAuthDelete(axios, 'customertypes/' + customerTypeToken + query)
}
