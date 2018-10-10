(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios')) :
  typeof define === 'function' && define.amd ? define(['exports', 'axios'], factory) :
  (factory((global['sitewhere2-rest-api'] = {}),global.axios));
}(this, (function (exports,axios) { 'use strict';

  axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;

  /**
   * Perform a REST get call.
   */
  function restAuthGet(axios$$1, path) {
    return axios$$1.get(path);
  }

  /**
   * Perform a REST post call.
   */
  function restAuthPost(axios$$1, path, payload) {
    return axios$$1.post(path, payload);
  }

  /**
   * Perform a REST put call.
   */
  function restAuthPut(axios$$1, path, payload) {
    return axios$$1.put(path, payload);
  }

  /**
   * Perform a REST delete call.
   */
  function restAuthDelete(axios$$1, path) {
    return axios$$1.delete(path);
  }

  /**
   * Generate a query with a random seed value to prevent caching.
   */
  function randomSeedQuery() {
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = crypto.getRandomValues(new Uint8Array(1))[0] % 16 | 0;
      var v = c === 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
    return '?rnd=' + uuid;
  }

  /**
   * API calls associated with authentication.
   */

  /**
   * Get new JWT.
   */
  function getJwt(axios$$1) {
    return restAuthGet(axios$$1, 'jwt');
  }

  /**
   * Create a new customer type.
   */
  function createCustomerType(axios$$1, customerType) {
    return restAuthPost(axios$$1, 'customertypes/', customerType);
  }

  /**
   * Get a customer type by unique token.
   */
  function getCustomerType(axios$$1, customerTypeToken) {
    return restAuthGet(axios$$1, 'customertypes/' + customerTypeToken);
  }

  /**
   * Update an existing customer type.
   */
  function updateCustomerType(axios$$1, customerTypeToken, payload) {
    return restAuthPut(axios$$1, 'customertypes/' + customerTypeToken, payload);
  }

  /**
   * List customer types.
   */
  function listCustomerTypes(axios$$1, includeContainedCustomerTypes, paging) {
    var query = '';
    query += includeContainedCustomerTypes ? '?includeContainedCustomerTypes=true' : '?includeContainedCustomerTypes=false';
    if (paging) {
      query += '&' + paging;
    }
    return restAuthGet(axios$$1, 'customertypes' + query);
  }

  /**
   * Delete an existing customer type.
   */
  function deleteCustomerType(axios$$1, customerTypeToken, force) {
    var query = '';
    if (force) {
      query += '?force=true';
    }
    return restAuthDelete(axios$$1, 'customertypes/' + customerTypeToken + query);
  }

  /**
   * Create a new customer.
   */
  function createCustomer(axios$$1, customer) {
    return restAuthPost(axios$$1, 'customers', customer);
  }

  /**
   * Get a customer by unique token.
   */
  function getCustomer(axios$$1, customerToken) {
    return restAuthGet(axios$$1, 'customers/' + customerToken);
  }

  /**
   * Update an existing customer.
   */
  function updateCustomer(axios$$1, customerToken, payload) {
    return restAuthPut(axios$$1, 'customers/' + customerToken, payload);
  }

  /**
   * List customers.
   */
  function listCustomers(axios$$1, options, paging) {
    var query = '';
    query += options.rootOnly ? '?rootOnly=true' : '?rootOnly=false';
    query += options.parentCustomerToken ? '&parentCustomerToken=' + options.parentCustomerToken : '';
    query += options.customerTypeToken ? '&customerTypeToken=' + options.customerTypeToken : '';
    query += options.includeCustomerType ? '&includeCustomerType=true' : '';
    query += options.includeAssignments ? '&includeAssignments=true' : '';
    if (paging) {
      query += '&' + paging;
    }
    return restAuthGet(axios$$1, 'customers' + query);
  }

  /**
   * Delete an existing customer.
   */
  function deleteCustomer(axios$$1, customerToken, force) {
    var query = '';
    if (force) {
      query += '?force=true';
    }
    return restAuthDelete(axios$$1, 'customers/' + customerToken + query);
  }

  /**
   * List assignments for an area.
   */
  function listAssignmentsForCustomer(axios$$1, customerToken, options, paging) {
    var query = randomSeedQuery();
    query += options.includeDevice ? '&includeDevice=true' : '';
    query += options.includeCustomer ? '&includeCustomer=true' : '';
    query += options.includeArea ? '&includeArea=true' : '';
    query += options.includeAsset ? '&includeAsset=true' : '';
    if (paging) {
      query += '&' + paging;
    }
    return restAuthGet(axios$$1, 'customers/' + customerToken + '/assignments' + query);
  }

  /**
   * List location events for a customer.
   */
  function listLocationsForCustomer(axios$$1, customerToken, paging) {
    var query = '';
    if (paging) {
      query += '?' + paging;
    }
    return restAuthGet(axios$$1, 'customers/' + customerToken + '/locations' + query);
  }

  /**
   * List measurement events for a customer.
   */
  function listMeasurementsForCustomer(axios$$1, customerToken, paging) {
    var query = '';
    if (paging) {
      query += '?' + paging;
    }
    return restAuthGet(axios$$1, 'customers/' + customerToken + '/measurements' + query);
  }

  /**
   * List alert events for a customer.
   */
  function listAlertsForCustomer(axios$$1, customerToken, paging) {
    var query = '';
    if (paging) {
      query += '?' + paging;
    }
    return restAuthGet(axios$$1, 'customers/' + customerToken + '/alerts' + query);
  }

  /**
   * Create a new area type.
   */
  function createAreaType(axios$$1, areaType) {
    return restAuthPost(axios$$1, 'areatypes/', areaType);
  }

  /**
   * Get an area type by unique token.
   */
  function getAreaType(axios$$1, areaTypeToken) {
    return restAuthGet(axios$$1, 'areatypes/' + areaTypeToken);
  }

  /**
   * Update an existing area type.
   */
  function updateAreaType(axios$$1, areaTypeToken, payload) {
    return restAuthPut(axios$$1, 'areatypes/' + areaTypeToken, payload);
  }

  /**
   * List area types.
   */
  function listAreaTypes(axios$$1, includeContainedAreaTypes, paging) {
    var query = '';
    query += includeContainedAreaTypes ? '?includeContainedAreaTypes=true' : '?includeContainedAreaTypes=false';
    if (paging) {
      query += '&' + paging;
    }
    return restAuthGet(axios$$1, 'areatypes' + query);
  }

  /**
   * Delete an existing area type.
   */
  function deleteAreaType(axios$$1, areaTypeToken, force) {
    var query = '';
    if (force) {
      query += '?force=true';
    }
    return restAuthDelete(axios$$1, 'areatypes/' + areaTypeToken + query);
  }

  /**
   * Create a new area.
   */
  function createArea(axios$$1, area) {
    return restAuthPost(axios$$1, 'areas', area);
  }

  /**
   * Get an area by unique token.
   */
  function getArea(axios$$1, areaToken) {
    return restAuthGet(axios$$1, 'areas/' + areaToken);
  }

  /**
   * Update an existing area.
   */
  function updateArea(axios$$1, areaToken, payload) {
    return restAuthPut(axios$$1, 'areas/' + areaToken, payload);
  }

  /**
   * List areas.
   */
  function listAreas(axios$$1, options, paging) {
    var query = '';
    query += options.rootOnly ? '?rootOnly=true' : '?rootOnly=false';
    query += options.parentAreaToken ? '&parentAreaToken=' + options.parentAreaToken : '';
    query += options.areaTypeToken ? '&areaTypeToken=' + options.areaTypeToken : '';
    query += options.includeAreaType ? '&includeAreaType=true' : '';
    query += options.includeAssignments ? '&includeAssignments=true' : '';
    query += options.includeZones ? '&includeZones=true' : '';
    if (paging) {
      query += '&' + paging;
    }
    return restAuthGet(axios$$1, 'areas' + query);
  }

  /**
   * Delete an existing area.
   */
  function deleteArea(axios$$1, areaToken, force) {
    var query = '';
    if (force) {
      query += '?force=true';
    }
    return restAuthDelete(axios$$1, 'areas/' + areaToken + query);
  }

  /**
   * List assignments for an area.
   */
  function listAssignmentsForArea(axios$$1, areaToken, options, paging) {
    var query = randomSeedQuery();
    query += options.includeDevice ? '&includeDevice=true' : '';
    query += options.includeCustomer ? '&includeCustomer=true' : '';
    query += options.includeArea ? '&includeArea=true' : '';
    query += options.includeAsset ? '&includeAsset=true' : '';
    if (paging) {
      query += '&' + paging;
    }
    return restAuthGet(axios$$1, 'areas/' + areaToken + '/assignments' + query);
  }

  /**
   * List location events for an area.
   */
  function listLocationsForArea(axios$$1, areaToken, paging) {
    var query = '';
    if (paging) {
      query += '?' + paging;
    }
    return restAuthGet(axios$$1, 'areas/' + areaToken + '/locations' + query);
  }

  /**
   * List measurement events for an area.
   */
  function listMeasurementsForArea(axios$$1, areaToken, paging) {
    var query = '';
    if (paging) {
      query += '?' + paging;
    }
    return restAuthGet(axios$$1, 'areas/' + areaToken + '/measurements' + query);
  }

  /**
   * List alert events for an area.
   */
  function listAlertsForArea(axios$$1, areaToken, paging) {
    var query = '';
    if (paging) {
      query += '?' + paging;
    }
    return restAuthGet(axios$$1, 'areas/' + areaToken + '/alerts' + query);
  }

  /**
   * Create zone.
   */
  function createZone(axios$$1, payload) {
    return restAuthPost(axios$$1, '/zones', payload);
  }

  /**
   * Get zone by unique token.
   */
  function getZone(axios$$1, zoneToken) {
    return restAuthGet(axios$$1, '/zones/' + zoneToken);
  }

  /**
   * Update an existing zone.
   */
  function updateZone(axios$$1, zoneToken, payload) {
    return restAuthPut(axios$$1, '/zones/' + zoneToken, payload);
  }

  /**
   * List zones based on criteria.
   */
  function listZones(axios$$1, options, paging) {
    var query = '';
    query += options.areaToken ? '?areaToken=' + options.areaToken : '?all=true';
    if (paging) {
      query += '&' + paging;
    }
    return restAuthGet(axios$$1, 'zones' + query);
  }

  /**
   * Delete zone.
   */
  function deleteZone(axios$$1, zoneToken) {
    return restAuthDelete(axios$$1, 'zones/' + zoneToken + '?force=true');
  }

  /**
   * API calls associated with SiteWhere assets.
   */

  /**
   * Create an asset.
   */
  function createAsset(axios$$1, payload) {
    return restAuthPost(axios$$1, '/assets', payload);
  }

  /**
   * Get an asset by token.
   */
  function getAsset(axios$$1, token) {
    return restAuthGet(axios$$1, 'assets/' + encodeURIComponent(token));
  }

  /**
   * Update an existing asset.
   */
  function updateAsset(axios$$1, token, payload) {
    return restAuthPut(axios$$1, 'assets/' + token, payload);
  }

  /**
   * List assets.
   */
  function listAssets(axios$$1, options, paging) {
    var query = '';
    query += options.includeAssetType ? '?includeAssetType=true' : '?includeAssetType=false';
    query += options.assetTypeToken ? '&assetTypeToken=' + options.assetTypeToken : '';
    if (paging) {
      query += '&' + paging;
    }
    return restAuthGet(axios$$1, 'assets' + query);
  }

  /**
   * Delete an existing asset type.
   */
  function deleteAsset(axios$$1, token, force) {
    var query = '';
    if (force) {
      query += '?force=true';
    }
    return restAuthDelete(axios$$1, 'assets/' + token + query);
  }

  /**
   * Create a new asset type.
   */
  function createAssetType(axios$$1, assetType) {
    return restAuthPost(axios$$1, 'assettypes/', assetType);
  }

  /**
   * Get an asset type by unique token.
   */
  function getAssetType(axios$$1, assetTypeToken) {
    return restAuthGet(axios$$1, 'assettypes/' + assetTypeToken);
  }

  /**
   * Update an existing asset type.
   */
  function updateAssetType(axios$$1, assetTypeToken, payload) {
    return restAuthPut(axios$$1, 'assettypes/' + assetTypeToken, payload);
  }

  /**
   * List asset types.
   */
  function listAssetTypes(axios$$1, options, paging) {
    var query = '';
    if (paging) {
      query += '?' + paging;
    }
    return restAuthGet(axios$$1, 'assettypes' + query);
  }

  /**
   * Delete an existing asset type.
   */
  function deleteAssetType(axios$$1, assetTypeToken, force) {
    var query = '';
    if (force) {
      query += '?force=true';
    }
    return restAuthDelete(axios$$1, 'assettypes/' + assetTypeToken + query);
  }

  /**
   * API calls associated with SiteWhere device assignments.
   */

  /**
   * Create a device assignment.
   */
  function createDeviceAssignment(axios$$1, payload) {
    return restAuthPost(axios$$1, 'assignments/', payload);
  }

  /**
   * Get an assignment by unique token.
   */
  function getDeviceAssignment(axios$$1, token) {
    return restAuthGet(axios$$1, 'assignments/' + token);
  }

  /**
   * List assignments that match criteria.
   */
  function listDeviceAssignments(axios$$1, options, paging) {
    var query = '';
    query += options.includeDevice ? '?includeDevice=true' : '?includeDevice=false';
    query += options.includeCustomer ? '&includeCustomer=true' : '';
    query += options.includeArea ? '&includeArea=true' : '';
    query += options.includeAsset ? '&includeAsset=true' : '';
    query += options.deviceToken ? '&deviceToken=' + options.deviceToken : '';
    query += options.customerToken ? '&customerToken=' + options.customerToken : '';
    query += options.areaToken ? '&areaToken=' + options.areaToken : '';
    query += options.assetToken ? '&assetToken=' + options.assetToken : '';
    if (paging) {
      query += '&' + paging;
    }
    return restAuthGet(axios$$1, 'assignments' + query);
  }

  /**
   * Release an active assignment.
   */
  function releaseAssignment(axios$$1, token) {
    return restAuthPost(axios$$1, '/assignments/' + token + '/end', null);
  }

  /**
   * Mark an assignment as missing.
   */
  function missingAssignment(axios$$1, token) {
    return restAuthPost(axios$$1, '/assignments/' + token + '/missing', null);
  }

  /**
   * Delete a device assignment.
   */
  function deleteDeviceAssignment(axios$$1, token, force) {
    var query = '';
    if (force) {
      query += '?force=true';
    }
    return restAuthDelete(axios$$1, 'assignments/' + token + query);
  }

  /**
   * Create measurements event for an assignment.
   */
  function createMeasurementsForAssignment(axios$$1, token, payload) {
    return restAuthPost(axios$$1, 'assignments/' + token + '/measurements', payload);
  }

  /**
   * List measurement events for an assignment.
   */
  function listMeasurementsForAssignment(axios$$1, token, paging) {
    var query = '';
    if (paging) {
      query += '?' + paging;
    }
    return restAuthGet(axios$$1, 'assignments/' + token + '/measurements' + query);
  }

  /**
   * List measurement events for an assignment as a chart series.
   */
  function listMeasurementsForAssignmentAsChartSeries(axios$$1, token, mxIds, paging) {
    var query = '';
    if (paging) {
      query += '?' + paging;
    }
    if (mxIds) {
      for (var i = 0; i < mxIds.length; i++) {
        query += '&measurementIds=' + mxIds[i];
      }
    }
    return restAuthGet(axios$$1, 'assignments/' + token + '/measurements/series' + query);
  }

  /**
   * Create location event for an assignment.
   */
  function createLocationForAssignment(axios$$1, token, payload) {
    return restAuthPost(axios$$1, 'assignments/' + token + '/locations', payload);
  }

  /**
   * List location events for an assignment.
   */
  function listLocationsForAssignment(axios$$1, token, paging) {
    var query = '';
    if (paging) {
      query += '?' + paging;
    }
    return restAuthGet(axios$$1, 'assignments/' + token + '/locations' + query);
  }

  /**
   * Create alert event for an assignment.
   */
  function createAlertForAssignment(axios$$1, token, payload) {
    return restAuthPost(axios$$1, 'assignments/' + token + '/alerts', payload);
  }

  /**
   * List alert events for an assignment.
   */
  function listAlertsForAssignment(axios$$1, token, paging) {
    var query = '';
    if (paging) {
      query += '?' + paging;
    }
    return restAuthGet(axios$$1, 'assignments/' + token + '/alerts' + query);
  }

  /**
   * Create command invocation for an assignment.
   */
  function createCommandInvocationForAssignment(axios$$1, token, payload) {
    return restAuthPost(axios$$1, 'assignments/' + token + '/invocations', payload);
  }

  /**
   * Schedule command invocation for an assignment.
   */
  function scheduleCommandInvocation(axios$$1, token, schedule, payload) {
    return restAuthPost(axios$$1, 'assignments/' + token + '/invocations/schedules/' + schedule, payload);
  }

  /**
   * List command invocation events for an assignment.
   */
  function listCommandInvocationsForAssignment(axios$$1, token, paging) {
    var query = '';
    if (paging) {
      query += '?' + paging;
    }
    return restAuthGet(axios$$1, 'assignments/' + token + '/invocations' + query);
  }

  /**
   * List command invocation events for an assignment.
   */
  function listCommandResponsesForAssignment(axios$$1, token, paging) {
    var query = '';
    if (paging) {
      query += '?' + paging;
    }
    return restAuthGet(axios$$1, 'assignments/' + token + '/responses' + query);
  }

  /**
   * List alert events for device assignment.
   * @param {*} axios 
   * @param {*} bulk 
   * @param {*} startDate 
   * @param {*} endDate 
   * @param {*} paging 
   */
  function listBulkAlertsForAssignments(axios$$1, bulk, startDate, endDate, paging) {
    var query = '';
    var firstParam = true;

    if (paging || endDate || startDate) {
      query += '?';
    }
    if (startDate) {
      query += '&startDate=' + startDate;
      firstParam = false;
    }
    if (endDate) {
      if (firstParam) {
        query += '&';
      }
      query += 'endDate=' + endDate;
      firstParam = false;
    }
    if (paging) {
      if (firstParam) {
        query += '&';
      }
      query += paging;
    }
    return restAuthPost(axios$$1, '/assignments/bulk/alerts' + query, bulk);
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
  function listBulkInvocationsForAssignments(axios$$1, bulk, includeCommand, startDate, endDate, paging) {
    var query = '';
    var firstParam = true;

    if (includeCommand || paging || endDate || startDate) {
      query += '?';
    }
    if (includeCommand) {
      if (firstParam) {
        query += '&';
      }
      query += 'includeCommand=' + includeCommand;
      firstParam = false;
    }
    if (startDate) {
      if (firstParam) {
        query += '&';
      }
      query += 'startDate=' + startDate;
      firstParam = false;
    }
    if (endDate) {
      if (firstParam) {
        query += '&';
      }
      query += 'endDate=' + endDate;
      firstParam = false;
    }
    if (paging) {
      if (firstParam) {
        query += '&';
      }
      query += paging;
    }
    return restAuthPost(axios$$1, '/assignments/bulk/invocations' + query, bulk);
  }

  /**
   * List location events for device assignment.
   * @param {*} axios 
   * @param {*} bulk
   * @param {*} startDate 
   * @param {*} endDate 
   * @param {*} paging 
   */
  function listBulkLocationsForAssignments(axios$$1, bulk, startDate, endDate, paging) {
    var query = '';
    var firstParam = true;

    if (paging || endDate || startDate) {
      query += '?';
    }
    if (startDate) {
      query += '&startDate=' + startDate;
      firstParam = false;
    }
    if (endDate) {
      if (firstParam) {
        query += '&';
      }
      query += 'endDate=' + endDate;
      firstParam = false;
    }
    if (paging) {
      if (firstParam) {
        query += '&';
      }
      query += paging;
    }
    return restAuthPost(axios$$1, '/assignments/bulk/locations' + query, bulk);
  }

  /**
   * List measurement events for multiple assignments.
   * @param {*} axios 
   * @param {*} bulk
   * @param {*} startDate 
   * @param {*} endDate 
   * @param {*} paging 
   */
  function listBulkMeasurementsForAssignments(axios$$1, bulk, startDate, endDate, paging) {
    var query = '';
    var firstParam = true;

    if (paging || endDate || startDate) {
      query += '?';
    }
    if (startDate) {
      query += '&startDate=' + startDate;
      firstParam = false;
    }
    if (endDate) {
      if (firstParam) {
        query += '&';
      }
      query += 'endDate=' + endDate;
      firstParam = false;
    }
    if (paging) {
      if (firstParam) {
        query += '&';
      }
      query += paging;
    }
    return restAuthPost(axios$$1, '/assignments/bulk/measurements' + query, bulk);
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
  function listBulkMeasurementsForAssignmentsAsChartSeries(axios$$1, bulk, startDate, endDate, mxIds, paging) {
    var query = '';
    var firstParam = true;

    if (paging || endDate || startDate) {
      query += '?';
    }
    if (startDate) {
      query += '&startDate=' + startDate;
      firstParam = false;
    }
    if (endDate) {
      if (firstParam) {
        query += '&';
      }
      query += 'endDate=' + endDate;
      firstParam = false;
    }
    if (paging) {
      if (firstParam) {
        query += '&';
      }
      query += paging;
      firstParam = false;
    }
    if (mxIds) {
      if (firstParam) {
        query += '&';
      }
      for (var i = 0; i < mxIds.length; i++) {
        query += '&measurementIds=' + mxIds[i];
      }
    }
    return restAuthPost(axios$$1, '/assignments/bulk/measurements/series' + query, bulk);
  }

  /**
   * List command response events for assignment.
   * @param {*} axios 
   * @param {*} bulk 
   * @param {*} startDate 
   * @param {*} endDate 
   * @param {*} paging 
   */
  function listBulkResponsesForAssignments(axios$$1, bulk, startDate, endDate, paging) {
    var query = '';
    var firstParam = true;

    if (paging || endDate || startDate) {
      query += '?';
    }
    if (startDate) {
      query += '&startDate=' + startDate;
      firstParam = false;
    }
    if (endDate) {
      if (firstParam) {
        query += '&';
      }
      query += 'endDate=' + endDate;
      firstParam = false;
    }
    if (paging) {
      if (firstParam) {
        query += '&';
      }
      query += paging;
    }
    return restAuthPost(axios$$1, '/assignments/bulk/responses' + query, bulk);
  }

  /**
   * List state change events for a device assignment.
   * @param {*} axios 
   * @param {*} bulk 
   * @param {*} startDate 
   * @param {*} endDate 
   * @param {*} paging 
   */
  function listBulkStateChangesForAssignments(axios$$1, bulk, startDate, endDate, paging) {
    var query = '';
    var firstParam = true;

    if (paging || endDate || startDate) {
      query += '?';
    }
    if (startDate) {
      query += '&startDate=' + startDate;
      firstParam = false;
    }
    if (endDate) {
      if (firstParam) {
        query += '&';
      }
      query += 'endDate=' + endDate;
      firstParam = false;
    }
    if (paging) {
      if (firstParam) {
        query += '&';
      }
      query += paging;
    }
    return restAuthPost(axios$$1, '/assignments/bulk/statechanges' + query, bulk);
  }

  /**
   * API calls associated with SiteWhere batch operations.
   */

  /**
   * Get an assignment by unique token.
   */
  function getBatchOperation(axios$$1, token) {
    return restAuthGet(axios$$1, 'batch/' + token);
  }

  /**
   * List batch operations.
   */
  function listBatchOperations(axios$$1, token, includeDeleted, paging) {
    var query = '';
    query += includeDeleted ? '?includeDeleted=true' : '?includeDeleted=false';
    if (paging) {
      query += '&' + paging;
    }
    return restAuthGet(axios$$1, 'batch/' + query);
  }

  /**
   * List batch operation elements.
   */
  function listBatchOperationElements(axios$$1, token, options, paging) {
    var query = '';
    query += options.includeDevice ? '?includeDevice=true' : '?includeDevice=false';
    if (paging) {
      query += '&' + paging;
    }
    return restAuthGet(axios$$1, 'batch/' + token + '/elements' + query);
  }

  /**
   * Create a batch command invocation.
   */
  function createBatchCommandInvocation(axios$$1, payload) {
    return restAuthPost(axios$$1, '/batch/command', payload);
  }

  /**
   * Create a batch command invocation baesd on criteria.
   */
  function createBatchCommandByCriteria(axios$$1, options, payload) {
    var query = '';
    query += options.scheduleToken ? '?scheduleToken=' + options.scheduleToken : '';
    return restAuthPost(axios$$1, '/batch/command/criteria' + query, payload);
  }

  /**
   * API calls associated with SiteWhere device assignments.
   */

  /**
   * Create a device.
   */
  function createDevice(axios$$1, payload) {
    return restAuthPost(axios$$1, '/devices', payload);
  }

  /**
   * Update an existing device.
   */
  function updateDevice(axios$$1, token, payload) {
    return restAuthPut(axios$$1, '/devices/' + token, payload);
  }

  /**
   * List devices.
   */
  function listDevices(axios$$1, options, paging) {
    var query = '';
    query += options.includeDeleted ? '?includeDeleted=true' : '?includeDeleted=false';
    query += options.excludeAssigned ? '&excludeAssigned=true' : '';
    query += options.includeDeviceType ? '&includeDeviceType=true' : '';
    query += options.includeAssignment ? '&includeAssignment=true' : ' ';
    query += options.area ? '&area=' + options.area : '';
    query += options.deviceType ? '&deviceType=' + options.deviceType : '';
    if (paging) {
      query += '&' + paging;
    }
    return restAuthGet(axios$$1, 'devices' + query);
  }

  /**
   * Get device by token.
   */
  function getDevice(axios$$1, token, options) {
    var query = '';
    query += options.includeDeviceType ? '?includeDeviceType=true' : '?includeDeviceType=false';
    query += options.includeAssignment ? '&includeAssignment=true' : '';
    query += options.includeAsset ? '&includeAsset=true' : '';
    query += options.includeNested ? '&includeNested=true' : '';
    return restAuthGet(axios$$1, '/devices/' + token + query);
  }

  /**
   * Delete device.
   */
  function deleteDevice(axios$$1, token, force) {
    var query = '';
    query += force ? '?force=true' : '?force=false';
    return restAuthDelete(axios$$1, 'devices/' + token + query);
  }

  /**
   * List assignment history for a device.
   */
  function listDeviceAssignmentHistory(axios$$1, token, options, paging) {
    var query = randomSeedQuery();
    query += options.includeDevice ? '&includeDevice=true' : '';
    query += options.includeCustomer ? '&includeCustomer=true' : '';
    query += options.includeArea ? '&includeArea=true' : '';
    query += options.includeAsset ? '&includeAsset=true' : '';
    if (paging) {
      query += '&' + paging;
    }
    return restAuthGet(axios$$1, 'devices/' + token + '/assignments' + query);
  }

  /**
   * API calls associated with SiteWhere device groups.
   */

  /**
   * Create a device group.
   */
  function createDeviceGroup(axios$$1, payload) {
    return restAuthPost(axios$$1, '/devicegroups', payload);
  }

  /**
   * Update an existing device group.
   */
  function updateDeviceGroup(axios$$1, token, payload) {
    return restAuthPut(axios$$1, '/devicegroups/' + token, payload);
  }

  /**
   * Get device group by token.
   */
  function getDeviceGroup(axios$$1, token) {
    return restAuthGet(axios$$1, '/devicegroups/' + token);
  }

  /**
   * List sites.
   */
  function listDeviceGroups(axios$$1, role, includeDeleted, paging) {
    var query = '';
    query += includeDeleted ? '?includeDeleted=true' : '?includeDeleted=false';
    if (role) {
      query += '&role=' + role;
    }
    if (paging) {
      query += '&' + paging;
    }
    return restAuthGet(axios$$1, 'devicegroups' + query);
  }

  /**
   * List device group elements.
   */
  function listDeviceGroupElements(axios$$1, token, includeDetails, paging) {
    var query = '';
    query += includeDetails ? '?includeDetails=true' : '?includeDetails=false';
    if (paging) {
      query += '&' + paging;
    }
    return restAuthGet(axios$$1, 'devicegroups/' + token + '/elements' + query);
  }

  /**
   * Add a device group element.
   */
  function addDeviceGroupElement(axios$$1, token, payload) {
    return restAuthPut(axios$$1, 'devicegroups/' + token + '/elements', payload);
  }

  /**
   * Delete a device group element.
   */
  function deleteDeviceGroupElement(axios$$1, token, elementId) {
    return restAuthDelete(axios$$1, 'devicegroups/' + token + '/elements/' + elementId);
  }

  /**
   * Delete device group.
   */
  function deleteDeviceGroup(axios$$1, token, force) {
    var query = '';
    query += force ? '?force=true' : '?force=false';
    return restAuthDelete(axios$$1, 'devicegroups/' + token + query);
  }

  /**
   * API calls associated with SiteWhere device specifications.
   */

  /**
   * Create a device type.
   */
  function createDeviceType(axios$$1, payload) {
    return restAuthPost(axios$$1, '/devicetypes', payload);
  }

  /**
   * Get device type by unique token.
   */
  function getDeviceType(axios$$1, token) {
    return restAuthGet(axios$$1, '/devicetypes/' + token);
  }

  /**
   * Get device type protocol buffer definition.
   */
  function getDeviceTypeProtobuf(axios$$1, token) {
    return restAuthGet(axios$$1, '/devicetypes/' + token + '/proto');
  }

  /**
   * Update an existing device type.
   */
  function updateDeviceType(axios$$1, token, payload) {
    return restAuthPut(axios$$1, '/devicetypes/' + token, payload);
  }

  /**
   * List device types.
   */
  function listDeviceTypes(axios$$1, includeDeleted, includeAsset, paging) {
    var query = '';
    query += includeDeleted ? '?includeDeleted=true' : '?includeDeleted=false';
    query += includeAsset ? '&includeAsset=true' : '&includeAsset=false';
    if (paging) {
      query += '&' + paging;
    }
    return restAuthGet(axios$$1, 'devicetypes' + query);
  }

  /**
   * Delete device type.
   */
  function deleteDeviceType(axios$$1, token, force) {
    var query = '';
    query += force ? '?force=true' : '?force=false';
    return restAuthDelete(axios$$1, 'devicetypes/' + token + query);
  }

  /**
   * API calls associated with SiteWhere device specifications.
   */

  /**
   * Create a device command.
   */
  function createDeviceCommand(axios$$1, payload) {
    return restAuthPost(axios$$1, '/commands', payload);
  }

  /**
   * Get a device command by token.
   */
  function getDeviceCommand(axios$$1, token) {
    return restAuthGet(axios$$1, '/commands/' + token);
  }

  /**
   * Update an existing device command.
   */
  function updateDeviceCommand(axios$$1, token, payload) {
    return restAuthPut(axios$$1, '/commands/' + token, payload);
  }

  /**
   * List device commands that meet criteria.
   */
  function listDeviceCommands(axios$$1, options) {
    var query = '';
    query += options.deviceTypeToken ? '?deviceTypeToken=' + options.deviceTypeToken : '';
    return restAuthGet(axios$$1, '/commands' + query);
  }

  /**
   * List device specification commands by namespace.
   */
  function listDeviceCommandsByNamespace(axios$$1, options) {
    var query = '';
    query += options.deviceTypeToken ? '?deviceTypeToken=' + options.deviceTypeToken : '';
    return restAuthGet(axios$$1, '/commands/namespaces' + query);
  }

  /**
   * Delete device command.
   */
  function deleteDeviceCommand(axios$$1, token, force) {
    var query = '';
    query += force ? '?force=true' : '?force=false';
    return restAuthDelete(axios$$1, 'commands/' + token + query);
  }

  /**
   * API calls associated with SiteWhere device specifications.
   */

  /**
   * Create a device status.
   */
  function createDeviceStatus(axios$$1, payload) {
    return restAuthPost(axios$$1, '/statuses', payload);
  }

  /**
   * Get a device status by token.
   */
  function getDeviceStatus(axios$$1, token) {
    return restAuthGet(axios$$1, '/statuses/' + token);
  }

  /**
   * Update an existing device status.
   */
  function updateDeviceStatus(axios$$1, token, payload) {
    return restAuthPut(axios$$1, '/statuses/' + token, payload);
  }

  /**
   * List all device statuses that meet criteria.
   */
  function listDeviceStatuses(axios$$1, options) {
    var query = '';
    query += options.deviceTypeToken ? '?deviceTypeToken=' + options.deviceTypeToken : '';
    return restAuthGet(axios$$1, '/statuses' + query);
  }

  /**
   * Delete device status.
   */
  function deleteDeviceStatus(axios$$1, token) {
    return restAuthDelete(axios$$1, '/statuses/' + token);
  }

  /**
   * List device state entries matching the given criteria.
   */
  function searchDeviceStates(axios$$1, criteria, options) {
    var query = randomSeedQuery();
    query += options.includeDevice ? '&includeDevice=true' : '';
    query += options.includeDeviceType ? '&includeDeviceType=true' : '';
    query += options.includeDeviceAssignment ? '&includeDeviceAssignment=true' : '';
    query += options.includeCustomer ? '&includeCustomer=true' : '';
    query += options.includeArea ? '&includeArea=true' : '';
    query += options.includeAsset ? '&includeAsset=true' : '';
    query += options.includeEventDetails ? '&includeEventDetails=true' : '';
    return restAuthPost(axios$$1, 'devicestates/search' + query, criteria);
  }

  /**
   * API calls associated with SiteWhere instance.
   */

  /**
   * Get list of all microservices in current topology.
   */
  function getTopology(axios$$1) {
    return restAuthGet(axios$$1, 'instance/topology');
  }

  /**
   * Get list of global microservices in current topology.
   */
  function getGlobalTopology(axios$$1) {
    return restAuthGet(axios$$1, 'instance/topology/global');
  }

  /**
   * Get list of tenant microservices in current topology.
   */
  function getTenantTopology(axios$$1) {
    return restAuthGet(axios$$1, 'instance/topology/tenant');
  }

  /**
   * Get the state of all tenant engines (across all microservice instances)
   * for a given tenant id.
   */
  function getMicroserviceTenantRuntimeState(axios$$1, identifier, tenantToken) {
    return restAuthGet(axios$$1, 'instance/microservice/' + identifier + '/tenants/' + tenantToken + '/state');
  }

  /**
   * Get configuration model for a given microservice identifier.
   */
  function getConfigurationModel(axios$$1, identifier) {
    return restAuthGet(axios$$1, 'instance/microservice/' + identifier + '/configuration/model');
  }

  /**
   * Get global microservice configuration based on identifier.
   */
  function getGlobalConfiguration(axios$$1, identifier) {
    return restAuthGet(axios$$1, 'instance/microservice/' + identifier + '/configuration');
  }

  /**
   * Update global microservice configuration based on identifier.
   */
  function updateGlobalConfiguration(axios$$1, identifier, config) {
    return restAuthPost(axios$$1, 'instance/microservice/' + identifier + '/configuration', config);
  }

  /**
   * Get tenant microservice configuration based on identifier.
   */
  function getTenantConfiguration(axios$$1, tenantToken, identifier) {
    return restAuthGet(axios$$1, 'instance/microservice/' + identifier + '/tenants/' + tenantToken + '/configuration');
  }

  /**
   * Update tenant microservice configuration based on identifier.
   */
  function updateTenantConfiguration(axios$$1, tenantToken, identifier, config) {
    return restAuthPost(axios$$1, 'instance/microservice/' + identifier + '/tenants/' + tenantToken + '/configuration', config);
  }

  /**
   * Get a list of script templates for a given microservice.
   */
  function listScriptTemplates(axios$$1, identifier) {
    return restAuthGet(axios$$1, 'instance/microservice/' + identifier + '/scripting/templates');
  }

  /**
   * Get content for a script template for a given microservice.
   */
  function getScriptTemplateContent(axios$$1, identifier, templateId) {
    return restAuthGet(axios$$1, 'instance/microservice/' + identifier + '/scripting/templates/' + templateId);
  }

  /**
   * Get a list of global script metadata for a microservice.
   */
  function listGlobalScriptMetadata(axios$$1, identifier) {
    return restAuthGet(axios$$1, 'instance/microservice/' + identifier + '/scripting/scripts');
  }

  /**
   * Get metadata for a tenant script based on unique script id.
   */
  function getGlobalScriptMetadata(axios$$1, identifier, scriptId) {
    return restAuthGet(axios$$1, 'instance/microservice/' + identifier + '/scripting/scripts/' + scriptId);
  }

  /**
   * Create a new global script for a microservice.
   */
  function createGlobalScript(axios$$1, identifier, request) {
    return restAuthPost(axios$$1, 'instance/microservice/' + identifier + '/scripting/scripts/' + identifier, request);
  }

  /**
   * Get global script content based on unique script id and version identifier.
   */
  function getGlobalScriptContent(axios$$1, identifier, scriptId, versionId) {
    return restAuthGet(axios$$1, 'instance/microservice/' + identifier + '/scripting/tenants/' + tenantId + '/scripts/' + identifier + '/' + scriptId + '/versions/' + versionId + '/content');
  }

  /**
   * Update an existing global script.
   */
  function updateGlobalScript(axios$$1, identifier, scriptId, versionId, request) {
    return restAuthPost(axios$$1, 'instance/microservice/' + identifier + 'scripting/scripts/' + identifier + '/' + scriptId + '/versions/' + versionId, request);
  }

  /**
   * Clone an existing global script version to create a new version.
   */
  function cloneGlobalScript(axios$$1, identifier, scriptId, versionId, request) {
    return restAuthPost(axios$$1, 'instance/microservice/' + identifier + '/scripting/scripts/' + identifier + '/' + scriptId + '/versions/' + versionId + '/clone', request);
  }

  /**
   * Activate a global script.
   */
  function activateGlobalScript(axios$$1, identifier, scriptId, versionId) {
    return restAuthPost(axios$$1, 'instance/microservice/' + identifier + '/scripting/scripts/' + identifier + '/' + scriptId + '/versions/' + versionId + '/activate', null);
  }

  /**
   * Get a list of script metadata for the given tenant.
   */
  function listTenantScriptMetadata(axios$$1, identifier, tenantToken) {
    return restAuthGet(axios$$1, 'instance/microservice/' + identifier + '/tenants/' + tenantToken + '/scripting/scripts');
  }

  /**
   * Get metadata for a tenant script based on unique script id.
   */
  function getTenantScriptMetadata(axios$$1, identifier, tenantToken, scriptId) {
    return restAuthGet(axios$$1, 'instance/microservice/' + identifier + '/tenants/' + tenantToken + '/scripting/scripts/' + scriptId);
  }

  /**
   * Create a new tenant script.
   */
  function createTenantScript(axios$$1, identifier, tenantToken, request) {
    return restAuthPost(axios$$1, 'instance/microservice/' + identifier + '/tenants/' + tenantToken + '/scripting/scripts', request);
  }

  /**
   * Get tenant script content based on unique script id and version identifier.
   */
  function getTenantScriptContent(axios$$1, identifier, tenantToken, scriptId, versionId) {
    return restAuthGet(axios$$1, 'instance/microservice/' + identifier + '/tenants/' + tenantToken + '/scripting/scripts/' + scriptId + '/versions/' + versionId + '/content');
  }

  /**
   * Update an existing tenant script.
   */
  function updateTenantScript(axios$$1, identifier, tenantToken, scriptId, versionId, request) {
    return restAuthPost(axios$$1, 'instance/microservice/' + identifier + '/tenants/' + tenantToken + '/scripting/scripts/' + scriptId + '/versions/' + versionId, request);
  }

  /**
   * Clone an existing tenant script version to create a new version.
   */
  function cloneTenantScript(axios$$1, identifier, tenantToken, scriptId, versionId, request) {
    return restAuthPost(axios$$1, 'instance/microservice/' + identifier + '/tenants/' + tenantToken + '/scripting/scripts/' + scriptId + '/versions/' + versionId + '/clone', request);
  }

  /**
   * Activate a tenant script.
   */
  function activateTenantScript(axios$$1, identifier, tenantToken, scriptId, versionId) {
    return restAuthPost(axios$$1, 'instance/microservice/' + identifier + '/tenants/' + tenantToken + '/scripting/scripts/' + scriptId + '/versions/' + versionId + '/activate', null);
  }

  /**
   * API calls associated with SiteWhere schedules.
   */

  /**
   * Create a new site.
   */
  function createSchedule(axios$$1, payload) {
    return restAuthPost(axios$$1, 'schedules', payload);
  }

  /**
   * Get a schedule by unique token.
   */
  function getSchedule(axios$$1, token) {
    return restAuthGet(axios$$1, 'schedules/' + token);
  }

  /**
   * Update an existing schedule.
   */
  function updateSchedule(axios$$1, token, payload) {
    return restAuthPut(axios$$1, 'schedules/' + token, payload);
  }

  /**
   * Delete an existing schedule.
   */
  function deleteSchedule(axios$$1, token, force) {
    var query = '';
    if (force) {
      query += '?force=true';
    }
    return restAuthDelete(axios$$1, 'schedules/' + token + query);
  }

  /**
   * List schedules.
   */
  function listSchedules(axios$$1, options, paging) {
    var query = '';
    if (paging) {
      query += '?' + paging;
    }
    return restAuthGet(axios$$1, 'schedules' + query);
  }

  /**
   * API calls associated with SiteWhere tenants.
   */

  /**
   * Create a tenant.
   */
  function createTenant(axios$$1, payload) {
    return restAuthPost(axios$$1, '/tenants', payload);
  }

  /**
   * Get a tenant by tenant id.
   */
  function getTenant(axios$$1, tenantToken) {
    var query = '';
    return restAuthGet(axios$$1, 'tenants/' + tenantToken + query);
  }

  /**
   * Update an existing tenant.
   */
  function updateTenant(axios$$1, id, payload) {
    return restAuthPut(axios$$1, 'tenants/' + id, payload);
  }

  /**
   * List tenants.
   */
  function listTenants(axios$$1, textSearch, authUserId, includeRuntimeInfo, paging) {
    var query = '';
    query += includeRuntimeInfo ? '?includeRuntimeInfo=true' : '?includeRuntimeInfo=false';
    if (textSearch) {
      query += '&textSearch=' + textSearch;
    }
    if (authUserId) {
      query += '&authUserId=' + authUserId;
    }
    if (paging) {
      query += '&' + paging;
    }
    return restAuthGet(axios$$1, 'tenants' + query);
  }

  /**
   * Delete tenant.
   */
  function deleteTenant(axios$$1, tenantId, force) {
    var query = '';
    query += force ? '?force=true' : '?force=false';
    return restAuthDelete(axios$$1, 'tenants/' + tenantId + query);
  }

  /**
   * Get list of available tenant templates.
   */
  function getTenantTemplates(axios$$1) {
    return restAuthGet(axios$$1, 'tenants/templates');
  }

  /**
   * Get list of available dataset templates.
   */
  function getDatasetTemplates(axios$$1) {
    return restAuthGet(axios$$1, 'tenants/datasets');
  }

  /**
   * API calls associated with SiteWhere users.
   */

  /**
   * Create a user.
   */
  function createUser(axios$$1, payload) {
    return restAuthPost(axios$$1, '/users', payload);
  }

  /**
   * Update an existing user.
   */
  function updateUser(axios$$1, username, payload) {
    return restAuthPut(axios$$1, '/users/' + username, payload);
  }

  /**
   * Get a user by username.
   */
  function getUser(axios$$1, username) {
    return restAuthGet(axios$$1, 'users/' + username);
  }

  /**
   * Delete an existing user.
   */
  function deleteUser(axios$$1, username, force) {
    var query = '';
    if (force) {
      query += '?force=true';
    }
    return restAuthDelete(axios$$1, 'users/' + username + query);
  }

  /**
   * List users.
   */
  function listUsers(axios$$1, includeDeleted, count) {
    var query = '';
    query += includeDeleted ? '?includeDeleted=true' : '?includeDeleted=false';
    if (count) {
      query += '&count=' + count;
    }
    return restAuthGet(axios$$1, 'users' + query);
  }

  /**
   * List authorized tenants for a user.
   */
  function listUserTenants(axios$$1, username, includeRuntimeInfo) {
    var query = '';
    if (includeRuntimeInfo) {
      query += '?includeRuntimeInfo=true';
    }
    return restAuthGet(axios$$1, 'users/' + username + '/tenants' + query);
  }

  /**
   * Get authorities hierarchy.
   */
  function getAuthoritiesHierarchy(axios$$1) {
    return restAuthGet(axios$$1, 'authorities/hierarchy');
  }

  /**
   * Create call that uses basic authentication.
   */
  function createAxiosBasicAuth(baseUrl, authToken) {
    var headers = {};
    if (authToken) {
      headers['Authorization'] = 'Basic ' + authToken;
    }
    return axios.create({
      baseURL: baseUrl,
      headers: headers
    });
  }

  /**
   * Create call that uses JWT for authentication.
   */
  function createAxiosJwt(baseUrl, jwt, tenantId, tenantAuth) {
    var headers = {};
    if (jwt) {
      headers['Authorization'] = 'Bearer ' + jwt;
    }
    if (tenantId) {
      headers['X-SiteWhere-Tenant-Id'] = tenantId;
    }
    if (tenantAuth) {
      headers['X-SiteWhere-Tenant-Auth'] = tenantAuth;
    }
    return axios.create({
      baseURL: baseUrl,
      headers: headers
    });
  }

  exports.createAxiosBasicAuth = createAxiosBasicAuth;
  exports.createAxiosJwt = createAxiosJwt;
  exports.getJwt = getJwt;
  exports.createCustomerType = createCustomerType;
  exports.getCustomerType = getCustomerType;
  exports.updateCustomerType = updateCustomerType;
  exports.listCustomerTypes = listCustomerTypes;
  exports.deleteCustomerType = deleteCustomerType;
  exports.createCustomer = createCustomer;
  exports.getCustomer = getCustomer;
  exports.updateCustomer = updateCustomer;
  exports.listCustomers = listCustomers;
  exports.deleteCustomer = deleteCustomer;
  exports.listAssignmentsForCustomer = listAssignmentsForCustomer;
  exports.listLocationsForCustomer = listLocationsForCustomer;
  exports.listMeasurementsForCustomer = listMeasurementsForCustomer;
  exports.listAlertsForCustomer = listAlertsForCustomer;
  exports.createAreaType = createAreaType;
  exports.getAreaType = getAreaType;
  exports.updateAreaType = updateAreaType;
  exports.listAreaTypes = listAreaTypes;
  exports.deleteAreaType = deleteAreaType;
  exports.createArea = createArea;
  exports.getArea = getArea;
  exports.updateArea = updateArea;
  exports.listAreas = listAreas;
  exports.deleteArea = deleteArea;
  exports.listAssignmentsForArea = listAssignmentsForArea;
  exports.listLocationsForArea = listLocationsForArea;
  exports.listMeasurementsForArea = listMeasurementsForArea;
  exports.listAlertsForArea = listAlertsForArea;
  exports.createZone = createZone;
  exports.getZone = getZone;
  exports.updateZone = updateZone;
  exports.listZones = listZones;
  exports.deleteZone = deleteZone;
  exports.createAsset = createAsset;
  exports.getAsset = getAsset;
  exports.updateAsset = updateAsset;
  exports.listAssets = listAssets;
  exports.deleteAsset = deleteAsset;
  exports.createAssetType = createAssetType;
  exports.getAssetType = getAssetType;
  exports.updateAssetType = updateAssetType;
  exports.listAssetTypes = listAssetTypes;
  exports.deleteAssetType = deleteAssetType;
  exports.createDeviceAssignment = createDeviceAssignment;
  exports.getDeviceAssignment = getDeviceAssignment;
  exports.listDeviceAssignments = listDeviceAssignments;
  exports.releaseAssignment = releaseAssignment;
  exports.missingAssignment = missingAssignment;
  exports.deleteDeviceAssignment = deleteDeviceAssignment;
  exports.createMeasurementsForAssignment = createMeasurementsForAssignment;
  exports.listMeasurementsForAssignment = listMeasurementsForAssignment;
  exports.listMeasurementsForAssignmentAsChartSeries = listMeasurementsForAssignmentAsChartSeries;
  exports.createLocationForAssignment = createLocationForAssignment;
  exports.listLocationsForAssignment = listLocationsForAssignment;
  exports.createAlertForAssignment = createAlertForAssignment;
  exports.listAlertsForAssignment = listAlertsForAssignment;
  exports.createCommandInvocationForAssignment = createCommandInvocationForAssignment;
  exports.scheduleCommandInvocation = scheduleCommandInvocation;
  exports.listCommandInvocationsForAssignment = listCommandInvocationsForAssignment;
  exports.listCommandResponsesForAssignment = listCommandResponsesForAssignment;
  exports.listBulkAlertsForAssignments = listBulkAlertsForAssignments;
  exports.listBulkInvocationsForAssignments = listBulkInvocationsForAssignments;
  exports.listBulkLocationsForAssignments = listBulkLocationsForAssignments;
  exports.listBulkMeasurementsForAssignments = listBulkMeasurementsForAssignments;
  exports.listBulkMeasurementsForAssignmentsAsChartSeries = listBulkMeasurementsForAssignmentsAsChartSeries;
  exports.listBulkResponsesForAssignments = listBulkResponsesForAssignments;
  exports.listBulkStateChangesForAssignments = listBulkStateChangesForAssignments;
  exports.getBatchOperation = getBatchOperation;
  exports.listBatchOperations = listBatchOperations;
  exports.listBatchOperationElements = listBatchOperationElements;
  exports.createBatchCommandInvocation = createBatchCommandInvocation;
  exports.createBatchCommandByCriteria = createBatchCommandByCriteria;
  exports.createDevice = createDevice;
  exports.listDevices = listDevices;
  exports.getDevice = getDevice;
  exports.updateDevice = updateDevice;
  exports.deleteDevice = deleteDevice;
  exports.listDeviceAssignmentHistory = listDeviceAssignmentHistory;
  exports.createDeviceGroup = createDeviceGroup;
  exports.updateDeviceGroup = updateDeviceGroup;
  exports.getDeviceGroup = getDeviceGroup;
  exports.listDeviceGroups = listDeviceGroups;
  exports.listDeviceGroupElements = listDeviceGroupElements;
  exports.addDeviceGroupElement = addDeviceGroupElement;
  exports.deleteDeviceGroupElement = deleteDeviceGroupElement;
  exports.deleteDeviceGroup = deleteDeviceGroup;
  exports.createDeviceType = createDeviceType;
  exports.getDeviceType = getDeviceType;
  exports.getDeviceTypeProtobuf = getDeviceTypeProtobuf;
  exports.updateDeviceType = updateDeviceType;
  exports.listDeviceTypes = listDeviceTypes;
  exports.deleteDeviceType = deleteDeviceType;
  exports.createDeviceCommand = createDeviceCommand;
  exports.getDeviceCommand = getDeviceCommand;
  exports.listDeviceCommands = listDeviceCommands;
  exports.updateDeviceCommand = updateDeviceCommand;
  exports.listDeviceCommandsByNamespace = listDeviceCommandsByNamespace;
  exports.deleteDeviceCommand = deleteDeviceCommand;
  exports.createDeviceStatus = createDeviceStatus;
  exports.getDeviceStatus = getDeviceStatus;
  exports.listDeviceStatuses = listDeviceStatuses;
  exports.updateDeviceStatus = updateDeviceStatus;
  exports.deleteDeviceStatus = deleteDeviceStatus;
  exports.searchDeviceStates = searchDeviceStates;
  exports.getTopology = getTopology;
  exports.getGlobalTopology = getGlobalTopology;
  exports.getTenantTopology = getTenantTopology;
  exports.getMicroserviceTenantRuntimeState = getMicroserviceTenantRuntimeState;
  exports.getConfigurationModel = getConfigurationModel;
  exports.getGlobalConfiguration = getGlobalConfiguration;
  exports.getTenantConfiguration = getTenantConfiguration;
  exports.updateGlobalConfiguration = updateGlobalConfiguration;
  exports.updateTenantConfiguration = updateTenantConfiguration;
  exports.listScriptTemplates = listScriptTemplates;
  exports.getScriptTemplateContent = getScriptTemplateContent;
  exports.listGlobalScriptMetadata = listGlobalScriptMetadata;
  exports.getGlobalScriptMetadata = getGlobalScriptMetadata;
  exports.createGlobalScript = createGlobalScript;
  exports.getGlobalScriptContent = getGlobalScriptContent;
  exports.updateGlobalScript = updateGlobalScript;
  exports.cloneGlobalScript = cloneGlobalScript;
  exports.activateGlobalScript = activateGlobalScript;
  exports.listTenantScriptMetadata = listTenantScriptMetadata;
  exports.getTenantScriptMetadata = getTenantScriptMetadata;
  exports.createTenantScript = createTenantScript;
  exports.getTenantScriptContent = getTenantScriptContent;
  exports.updateTenantScript = updateTenantScript;
  exports.cloneTenantScript = cloneTenantScript;
  exports.activateTenantScript = activateTenantScript;
  exports.createSchedule = createSchedule;
  exports.getSchedule = getSchedule;
  exports.updateSchedule = updateSchedule;
  exports.deleteSchedule = deleteSchedule;
  exports.listSchedules = listSchedules;
  exports.createTenant = createTenant;
  exports.getTenant = getTenant;
  exports.updateTenant = updateTenant;
  exports.listTenants = listTenants;
  exports.deleteTenant = deleteTenant;
  exports.getTenantTemplates = getTenantTemplates;
  exports.getDatasetTemplates = getDatasetTemplates;
  exports.createUser = createUser;
  exports.updateUser = updateUser;
  exports.getUser = getUser;
  exports.deleteUser = deleteUser;
  exports.listUsers = listUsers;
  exports.listUserTenants = listUserTenants;
  exports.getAuthoritiesHierarchy = getAuthoritiesHierarchy;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
