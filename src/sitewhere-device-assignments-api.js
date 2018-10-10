/**
 * API calls associated with SiteWhere device assignments.
 */
import {restAuthGet, restAuthPost, restAuthDelete} from './sitewhere-rest'

/**
 * Create a device assignment.
 */
export function createDeviceAssignment (axios, payload) {
  return restAuthPost(axios, 'assignments/', payload)
}

/**
 * Get an assignment by unique token.
 */
export function getDeviceAssignment (axios, token) {
  return restAuthGet(axios, 'assignments/' + token)
}

/**
 * List assignments that match criteria.
 */
export function listDeviceAssignments (axios, options, paging) {
  let query = ''
  query += (options.includeDevice)
    ? '?includeDevice=true' : '?includeDevice=false'
  query += (options.includeCustomer) ? '&includeCustomer=true' : ''
  query += (options.includeArea) ? '&includeArea=true' : ''
  query += (options.includeAsset) ? '&includeAsset=true' : ''
  query += (options.deviceToken) ? '&deviceToken=' + options.deviceToken : ''
  query += (options.customerToken) ? '&customerToken=' + options.customerToken : ''
  query += (options.areaToken) ? '&areaToken=' + options.areaToken : ''
  query += (options.assetToken) ? '&assetToken=' + options.assetToken : ''
  if (paging) {
    query += '&' + paging
  }
  return restAuthGet(axios, 'assignments' + query)
}

/**
 * Release an active assignment.
 */
export function releaseAssignment (axios, token) {
  return restAuthPost(axios, '/assignments/' + token + '/end', null)
}

/**
 * Mark an assignment as missing.
 */
export function missingAssignment (axios, token) {
  return restAuthPost(axios, '/assignments/' + token + '/missing', null)
}

/**
 * Delete a device assignment.
 */
export function deleteDeviceAssignment (axios, token, force) {
  let query = ''
  if (force) {
    query += '?force=true'
  }
  return restAuthDelete(axios, 'assignments/' + token + query)
}

/**
 * Create measurements event for an assignment.
 */
export function createMeasurementsForAssignment (axios, token, payload) {
  return restAuthPost(axios, 'assignments/' + token + '/measurements', payload)
}

/**
 * List measurement events for an assignment.
 */
export function listMeasurementsForAssignment (axios, token, paging) {
  let query = ''
  if (paging) {
    query += '?' + paging
  }
  return restAuthGet(axios, 'assignments/' + token + '/measurements' + query)
}

/**
 * List measurement events for an assignment as a chart series.
 */
export function listMeasurementsForAssignmentAsChartSeries (axios, token,
  mxIds, paging) {
  let query = ''
  if (paging) {
    query += '?' + paging
  }
  if (mxIds) {
    for (var i = 0; i < mxIds.length; i++) {
      query += '&measurementIds=' + mxIds[i]
    }
  }
  return restAuthGet(axios, 'assignments/' + token + '/measurements/series' + query)
}

/**
 * Create location event for an assignment.
 */
export function createLocationForAssignment (axios, token, payload) {
  return restAuthPost(axios, 'assignments/' + token + '/locations', payload)
}

/**
 * List location events for an assignment.
 */
export function listLocationsForAssignment (axios, token, paging) {
  let query = ''
  if (paging) {
    query += '?' + paging
  }
  return restAuthGet(axios, 'assignments/' + token + '/locations' + query)
}

/**
 * Create alert event for an assignment.
 */
export function createAlertForAssignment (axios, token, payload) {
  return restAuthPost(axios, 'assignments/' + token + '/alerts', payload)
}

/**
 * List alert events for an assignment.
 */
export function listAlertsForAssignment (axios, token, paging) {
  let query = ''
  if (paging) {
    query += '?' + paging
  }
  return restAuthGet(axios, 'assignments/' + token + '/alerts' + query)
}

/**
 * Create command invocation for an assignment.
 */
export function createCommandInvocationForAssignment (axios, token, payload) {
  return restAuthPost(axios, 'assignments/' + token + '/invocations', payload)
}

/**
 * Schedule command invocation for an assignment.
 */
export function scheduleCommandInvocation (axios, token, schedule, payload) {
  return restAuthPost(axios, 'assignments/' + token +
    '/invocations/schedules/' + schedule, payload)
}

/**
 * List command invocation events for an assignment.
 */
export function listCommandInvocationsForAssignment (axios, token, paging) {
  let query = ''
  if (paging) {
    query += '?' + paging
  }
  return restAuthGet(axios, 'assignments/' + token + '/invocations' + query)
}

/**
 * List command invocation events for an assignment.
 */
export function listCommandResponsesForAssignment (axios, token, paging) {
  let query = ''
  if (paging) {
    query += '?' + paging
  }
  return restAuthGet(axios, 'assignments/' + token + '/responses' + query)
}

/**
 * List alert events for device assignment.
 * @param {*} axios 
 * @param {*} bulk 
 * @param {*} startDate 
 * @param {*} endDate 
 * @param {*} paging 
 */
export function listBulkAlertsForAssignments(axios, bulk, startDate, endDate, paging) {
  let query = ''
  let firstParam = true

  if (paging || endDate || startDate) {
    query += '?'
  }
  if (startDate) {
    query += '&startDate=' + startDate
    firstParam = false
  }
  if (endDate) {
    if (firstParam) {
      query += '&'
    }
    query += 'endDate=' + endDate
    firstParam = false
  }
  if (paging) {
    if (firstParam) {
      query += '&'
    }
    query += paging
  }
  return restAuthPost(axios, '/assignments/bulk/alerts' + query, bulk)
}

/**
 * List command invocation events for assignment.
 * @param {*} axios 
 * @param {*} bulk 
 * @param {*} includeCommand 
 * @param {*} startDate 
 * @param {*} endDate 
 * @param {*} paging 
 */
export function listBulkInvocationsForAssignments(axios, bulk, includeCommand, startDate, endDate, paging) {
  let query = ''
  let firstParam = true

  if (includeCommand || paging || endDate || startDate) {
    query += '?'
  }
  if (includeCommand) {
    if (firstParam) {
      query += '&'
    }
    query += 'includeCommand=' + includeCommand
    firstParam = false
  }
  if (startDate) {
    if (firstParam) {
      query += '&'
    }
    query += 'startDate=' + startDate
    firstParam = false
  }
  if (endDate) {
    if (firstParam) {
      query += '&'
    }
    query += 'endDate=' + endDate
    firstParam = false
  }
  if (paging) {
    if (firstParam) {
      query += '&'
    }
    query += paging
  }
  return restAuthPost(axios, '/assignments/bulk/invocations' + query, bulk)
}

/**
 * List location events for device assignment.
 * @param {*} axios 
 * @param {*} bulk
 * @param {*} startDate 
 * @param {*} endDate 
 * @param {*} paging 
 */
export function listBulkLocationsForAssignments(axios, bulk, startDate, endDate, paging) {
  let query = ''
  let firstParam = true

  if (paging || endDate || startDate) {
    query += '?'
  }
  if (startDate) {
    query += '&startDate=' + startDate
    firstParam = false
  }
  if (endDate) {
    if (firstParam) {
      query += '&'
    }
    query += 'endDate=' + endDate
    firstParam = false
  }
  if (paging) {
    if (firstParam) {
      query += '&'
    }
    query += paging
  }
  return restAuthPost(axios, '/assignments/bulk/locations' + query, bulk)
}

/**
 * List measurement events for multiple assignments.
 * @param {*} axios 
 * @param {*} bulk
 * @param {*} startDate 
 * @param {*} endDate 
 * @param {*} paging 
 */
export function listBulkMeasurementsForAssignments(axios, bulk, startDate, endDate, paging) {
  let query = ''
  let firstParam = true

  if (paging || endDate || startDate) {
    query += '?'
  }
  if (startDate) {
    query += '&startDate=' + startDate
    firstParam = false
  }
  if (endDate) {
    if (firstParam) {
      query += '&'
    }
    query += 'endDate=' + endDate
    firstParam = false 
  }
  if (paging) {
    if (firstParam) {
      query += '&'
    }
    query += paging
  }
  return restAuthPost(axios, '/assignments/bulk/measurements' + query, bulk)
}

/**
 * List measurement events for an assignment as a chart series.
 * 
 * @param {*} axios 
 * @param {*} bulk 
 * @param {*} startDate 
 * @param {*} endDate 
 * @param {*} mxIds 
 * @param {*} paging 
 */
export function listBulkMeasurementsForAssignmentsAsChartSeries(axios, 
  bulk, startDate, endDate, mxIds, paging) {
  let query = ''
  let firstParam = true

  if (paging || endDate || startDate) {
    query += '?'
  }
  if (startDate) {
    query += '&startDate=' + startDate
    firstParam = false
  }
  if (endDate) {
    if (firstParam) {
      query += '&'
    }
    query += 'endDate=' + endDate
    firstParam = false
  }
  if (paging) {
    if (firstParam) {
      query += '&'
    }
    query += paging
    firstParam = false;
  }
  if (mxIds) {
    if (firstParam) {
      query += '&';
    }
    for (var i = 0; i < mxIds.length; i++) {
      query += '&measurementIds=' + mxIds[i]
    }
  }
  return restAuthPost(axios, '/assignments/bulk/measurements/series' + query, bulk)
}

/**
 * List command response events for assignment.
 * @param {*} axios 
 * @param {*} bulk 
 * @param {*} startDate 
 * @param {*} endDate 
 * @param {*} paging 
 */
export function listBulkResponsesForAssignments(axios, bulk, startDate, endDate, paging) {
  let query = ''
  let firstParam = true

  if (paging || endDate || startDate) {
    query += '?'
  }
  if (startDate) {
    query += '&startDate=' + startDate
    firstParam = false
  }
  if (endDate) {
    if (firstParam) {
      query += '&'
    }
    query += 'endDate=' + endDate
    firstParam = false
  }
  if (paging) {
    if (firstParam) {
      query += '&'
    }
    query += paging
  }
  return restAuthPost(axios, '/assignments/bulk/responses' + query, bulk)
}

/**
 * List state change events for a device assignment.
 * @param {*} axios 
 * @param {*} bulk 
 * @param {*} startDate 
 * @param {*} endDate 
 * @param {*} paging 
 */
export function listBulkStateChangesForAssignments(axios, bulk, startDate, endDate, paging) {
  let query = ''
  let firstParam = true

  if (paging || endDate || startDate) {
    query += '?'
  }
  if (startDate) {
    query += '&startDate=' + startDate
    firstParam = false
  }
  if (endDate) {
    if (firstParam) {
      query += '&'
    }
    query += 'endDate=' + endDate
    firstParam = false
  }
  if (paging) {
    if (firstParam) {
      query += '&'
    }
    query += paging
  }
  return restAuthPost(axios, '/assignments/bulk/statechanges' + query, bulk)
}
