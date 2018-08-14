import axios from 'axios'

export {
  getJwt
} from './sitewhere-auth-api'

export {
  createCustomerType,
  getCustomerType,
  updateCustomerType,
  listCustomerTypes,
  deleteCustomerType
} from './sitewhere-customer-types-api'

export {
  createCustomer,
  getCustomer,
  updateCustomer,
  listCustomers,
  deleteCustomer,
  listAssignmentsForCustomer,
  listLocationsForCustomer,
  listMeasurementsForCustomer,
  listAlertsForCustomer
} from './sitewhere-customers-api'

export {
  createAreaType,
  getAreaType,
  updateAreaType,
  listAreaTypes,
  deleteAreaType
} from './sitewhere-area-types-api'

export {
  createArea,
  getArea,
  updateArea,
  listAreas,
  deleteArea,
  listAssignmentsForArea,
  listLocationsForArea,
  listMeasurementsForArea,
  listAlertsForArea,
  createZone,
  getZone,
  updateZone,
  listZones,
  deleteZone
} from './sitewhere-areas-api'

export {
  createAsset,
  getAsset,
  updateAsset,
  listAssets,
  deleteAsset
} from './sitewhere-assets-api'

export {
  createAssetType,
  getAssetType,
  updateAssetType,
  listAssetTypes,
  deleteAssetType
} from './sitewhere-asset-types-api'

export {
  createDeviceAssignment,
  getDeviceAssignment,
  listDeviceAssignments,
  releaseAssignment,
  missingAssignment,
  deleteDeviceAssignment,
  createMeasurementsForAssignment,
  listMeasurementsForAssignment,
  listMeasurementsForAssignmentAsChartSeries,
  createLocationForAssignment,
  listLocationsForAssignment,
  createAlertForAssignment,
  listAlertsForAssignment,
  createCommandInvocationForAssignment,
  scheduleCommandInvocation,
  listCommandInvocationsForAssignment,
  listCommandResponsesForAssignment
} from './sitewhere-device-assignments-api'

export {
  getBatchOperation,
  listBatchOperations,
  listBatchOperationElements,
  createBatchCommandInvocation,
  createBatchCommandByCriteria
} from './sitewhere-batch-api'

export {
  createDevice,
  listDevices,
  getDevice,
  updateDevice,
  deleteDevice,
  listDeviceAssignmentHistory
} from './sitewhere-devices-api'

export {
  createDeviceGroup,
  updateDeviceGroup,
  getDeviceGroup,
  listDeviceGroups,
  listDeviceGroupElements,
  addDeviceGroupElement,
  deleteDeviceGroupElement,
  deleteDeviceGroup
} from './sitewhere-device-groups-api'

export {
  createDeviceType,
  getDeviceType,
  getDeviceTypeProtobuf,
  updateDeviceType,
  listDeviceTypes,
  deleteDeviceType
} from './sitewhere-device-types-api'

export {
  createDeviceCommand,
  getDeviceCommand,
  listDeviceCommands,
  updateDeviceCommand,
  listDeviceCommandsByNamespace,
  deleteDeviceCommand
} from './sitewhere-device-commands-api'

export {
  createDeviceStatus,
  getDeviceStatus,
  listDeviceStatuses,
  updateDeviceStatus,
  deleteDeviceStatus
} from './sitewhere-device-statuses-api'

export {
  searchDeviceStates
} from './sitewhere-device-state-api'

export {
  getTopology,
  getGlobalTopology,
  getTenantTopology,
  getMicroserviceTenantRuntimeState,
  getConfigurationModel,
  getGlobalConfiguration,
  getTenantConfiguration,
  updateGlobalConfiguration,
  updateTenantConfiguration,
  listScriptTemplates,
  getScriptTemplateContent,
  listGlobalScriptMetadata,
  getGlobalScriptMetadata,
  createGlobalScript,
  getGlobalScriptContent,
  updateGlobalScript,
  cloneGlobalScript,
  activateGlobalScript,
  listTenantScriptMetadata,
  getTenantScriptMetadata,
  createTenantScript,
  getTenantScriptContent,
  updateTenantScript,
  cloneTenantScript,
  activateTenantScript
} from './sitewhere-instance-api'

export {
  createSchedule,
  getSchedule,
  updateSchedule,
  deleteSchedule,
  listSchedules
} from './sitewhere-schedules-api'

export {
  createTenant,
  getTenant,
  updateTenant,
  listTenants,
  deleteTenant,
  getTenantTemplates,
  getDatasetTemplates
} from './sitewhere-tenants-api'

export {
  createUser,
  updateUser,
  getUser,
  deleteUser,
  listUsers,
  listUserTenants,
  getAuthoritiesHierarchy
} from './sitewhere-users-api'

/**
 * Create call that uses basic authentication.
 */
export function createAxiosBasicAuth (baseUrl, authToken) {
  let headers = {}
  if (authToken) {
    headers['Authorization'] = 'Basic ' + authToken
  }
  return axios.create({
    baseURL: baseUrl,
    headers: headers
  })
}

/**
 * Create call that uses JWT for authentication.
 */
export function createAxiosJwt (baseUrl, jwt, tenantId, tenantAuth) {
  let headers = {}
  if (jwt) {
    headers['Authorization'] = 'Bearer ' + jwt
  }
  if (tenantId) {
    headers['X-SiteWhere-Tenant-Id'] = tenantId
  }
  if (tenantAuth) {
    headers['X-SiteWhere-Tenant-Auth'] = tenantAuth
  }
  return axios.create({
    baseURL: baseUrl,
    headers: headers
  })
}
