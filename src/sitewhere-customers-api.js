import {restAuthGet, restAuthPost, restAuthPut, restAuthDelete} from './sitewhere-rest'

/**
 * Create a new customer.
 */
export function createCustomer (axios, customer) {
  return restAuthPost(axios, 'customers', customer)
}

/**
 * Get a customer by unique token.
 */
export function getCustomer (axios, customerToken) {
  return restAuthGet(axios, 'customers/' + customerToken)
}

/**
 * Update an existing customer.
 */
export function updateCustomer (axios, customerToken, payload) {
  return restAuthPut(axios, 'customers/' + customerToken, payload)
}

/**
 * List customers.
 */
export function listCustomers (axios, options, paging) {
  let query = ''
  query += (options.rootOnly) ? '?rootOnly=true' : '?rootOnly=false'
  query += (options.parentCustomerToken)
    ? '&parentCustomerToken=' + options.parentCustomerToken : ''
  query += (options.customerTypeToken)
    ? '&customerTypeToken=' + options.customerTypeToken : ''
  query += (options.includeCustomerType) ? '&includeCustomerType=true' : ''
  query += (options.includeAssignments) ? '&includeAssignments=true' : ''
  if (paging) {
    query += '&' + paging
  }
  return restAuthGet(axios, 'customers' + query)
}

/**
 * Delete an existing customer.
 */
export function deleteCustomer (axios, customerToken, force) {
  let query = ''
  if (force) {
    query += '?force=true'
  }
  return restAuthDelete(axios, 'customers/' + customerToken + query)
}

/**
 * List assignments for an area.
 */
export function listAssignmentsForCustomer (axios, customerToken, options, paging) {
  let query = ''
  query += (options.includeDevice)
    ? '?includeDevice=true' : '?includeDevice=false'
  query += (options.includeAsset)
    ? '&includeAsset=true' : '&includeAsset=false'
  query += (options.status) ? '&status=' + options.status : ''
  if (paging) {
    query += '&' + paging
  }
  return restAuthGet(axios, 'customers/' + customerToken + '/assignments' + query)
}

/**
 * List location events for a customer.
 */
export function listLocationsForCustomer (axios, customerToken, paging) {
  let query = ''
  if (paging) {
    query += '?' + paging
  }
  return restAuthGet(axios, 'customers/' + customerToken + '/locations' + query)
}

/**
 * List measurement events for a customer.
 */
export function listMeasurementsForCustomer (axios, customerToken, paging) {
  let query = ''
  if (paging) {
    query += '?' + paging
  }
  return restAuthGet(axios, 'customers/' + customerToken + '/measurements' + query)
}

/**
 * List alert events for a customer.
 */
export function listAlertsForCustomer (axios, customerToken, paging) {
  let query = ''
  if (paging) {
    query += '?' + paging
  }
  return restAuthGet(axios, 'customers/' + customerToken + '/alerts' + query)
}
