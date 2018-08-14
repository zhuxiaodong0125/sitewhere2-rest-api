/**
 * API calls associated with SiteWhere instance.
 */
import { restAuthGet, restAuthPost } from './sitewhere-rest'

/**
 * Get list of all microservices in current topology.
 */
export function getTopology (axios) {
  return restAuthGet(axios, 'instance/topology')
}

/**
 * Get list of global microservices in current topology.
 */
export function getGlobalTopology (axios) {
  return restAuthGet(axios, 'instance/topology/global')
}

/**
 * Get list of tenant microservices in current topology.
 */
export function getTenantTopology (axios) {
  return restAuthGet(axios, 'instance/topology/tenant')
}

/**
 * Get the state of all tenant engines (across all microservice instances)
 * for a given tenant id.
 */
export function getMicroserviceTenantRuntimeState (axios, identifier, tenantToken) {
  return restAuthGet(axios, 'instance/microservice/' + identifier +
    '/tenants/' + tenantToken + '/state')
}

/**
 * Get configuration model for a given microservice identifier.
 */
export function getConfigurationModel (axios, identifier) {
  return restAuthGet(axios, 'instance/microservice/' + identifier +
    '/configuration/model')
}

/**
 * Get global microservice configuration based on identifier.
 */
export function getGlobalConfiguration (axios, identifier) {
  return restAuthGet(axios, 'instance/microservice/' + identifier +
    '/configuration')
}

/**
 * Update global microservice configuration based on identifier.
 */
export function updateGlobalConfiguration (axios, identifier, config) {
  return restAuthPost(axios, 'instance/microservice/' + identifier +
    '/configuration', config)
}

/**
 * Get tenant microservice configuration based on identifier.
 */
export function getTenantConfiguration (axios, tenantToken, identifier) {
  return restAuthGet(axios, 'instance/microservice/' + identifier +
    '/tenants/' + tenantToken + '/configuration')
}

/**
 * Update tenant microservice configuration based on identifier.
 */
export function updateTenantConfiguration (axios, tenantToken, identifier, config) {
  return restAuthPost(axios, 'instance/microservice/' + identifier +
    '/tenants/' + tenantToken + '/configuration', config)
}

/**
 * Get a list of script templates for a given microservice.
 */
export function listScriptTemplates (axios, identifier) {
  return restAuthGet(axios, 'instance/microservice/' + identifier + 
    '/scripting/templates')
}

/**
 * Get content for a script template for a given microservice.
 */
export function getScriptTemplateContent (axios, identifier, templateId) {
  return restAuthGet(axios, 'instance/microservice/' + identifier + 
    '/scripting/templates/' + templateId)
}

/**
 * Get a list of global script metadata for a microservice.
 */
export function listGlobalScriptMetadata (axios, identifier) {
  return restAuthGet(axios, 'instance/microservice/' + identifier + 
    '/scripting/scripts')
}

/**
 * Get metadata for a tenant script based on unique script id.
 */
export function getGlobalScriptMetadata (axios, identifier, scriptId) {
  return restAuthGet(axios, 'instance/microservice/' + identifier + 
    '/scripting/scripts/' + scriptId)
}

/**
 * Create a new global script for a microservice.
 */
export function createGlobalScript (axios, identifier, request) {
  return restAuthPost(axios, 'instance/microservice/' + identifier +
    '/scripting/scripts/' + identifier, request)
}

/**
 * Get global script content based on unique script id and version identifier.
 */
export function getGlobalScriptContent (axios, identifier, scriptId, versionId) {
  return restAuthGet(axios, 'instance/microservice/' + identifier +
    '/scripting/tenants/' + tenantId + '/scripts/' + identifier + '/' + scriptId + '/versions/' +
    versionId + '/content')
}

/**
 * Update an existing global script.
 */
export function updateGlobalScript (axios, identifier, scriptId, versionId, request) {
  return restAuthPost(axios, 'instance/microservice/' + identifier + 
    'scripting/scripts/' + identifier + '/' + scriptId + '/versions/' +
    versionId, request)
}

/**
 * Clone an existing global script version to create a new version.
 */
export function cloneGlobalScript (axios, identifier, scriptId, versionId, request) {
  return restAuthPost(axios, 'instance/microservice/' + identifier + 
    '/scripting/scripts/' + identifier + '/' + scriptId + '/versions/' +
    versionId + '/clone', request)
}

/**
 * Activate a global script.
 */
export function activateGlobalScript (axios, identifier, scriptId, versionId) {
  return restAuthPost(axios, 'instance/microservice/' + identifier + 
    '/scripting/scripts/' + identifier + '/' + scriptId + '/versions/' +
    versionId + '/activate', null)
}

/**
 * Get a list of script metadata for the given tenant.
 */
export function listTenantScriptMetadata (axios, identifier, tenantToken) {
  return restAuthGet(axios, 'instance/microservice/' + identifier + 
    '/tenants/' + tenantToken + '/scripting/scripts')
}

/**
 * Get metadata for a tenant script based on unique script id.
 */
export function getTenantScriptMetadata (axios, identifier, tenantToken, scriptId) {
  return restAuthGet(axios, 'instance/microservice/' + identifier + 
  '/tenants/' + tenantToken + '/scripting/scripts/' + scriptId)
}

/**
 * Create a new tenant script.
 */
export function createTenantScript (axios, identifier, tenantToken, request) {
  return restAuthPost(axios, 'instance/microservice/' + identifier + 
  '/tenants/' + tenantToken + '/scripting/scripts', request)
}

/**
 * Get tenant script content based on unique script id and version identifier.
 */
export function getTenantScriptContent (axios, identifier, tenantToken, 
  scriptId, versionId) {
  return restAuthGet(axios, 'instance/microservice/' + identifier + 
  '/tenants/' + tenantToken + '/scripting/scripts/' + scriptId + '/versions/' +
    versionId + '/content')
}

/**
 * Update an existing tenant script.
 */
export function updateTenantScript (axios, identifier, tenantToken, 
  scriptId, versionId, request) {
  return restAuthPost(axios, 'instance/microservice/' + identifier + 
  '/tenants/' + tenantToken + '/scripting/scripts/' + scriptId + '/versions/' +
    versionId, request)
}

/**
 * Clone an existing tenant script version to create a new version.
 */
export function cloneTenantScript (axios, identifier, tenantToken, 
  scriptId, versionId, request) {
  return restAuthPost(axios, 'instance/microservice/' + identifier + 
  '/tenants/' + tenantToken + '/scripting/scripts/' + scriptId + '/versions/' +
    versionId + '/clone', request)
}

/**
 * Activate a tenant script.
 */
export function activateTenantScript (axios, identifier, tenantToken, 
  scriptId, versionId) {
  return restAuthPost(axios, 'instance/microservice/' + identifier + 
  '/tenants/' + tenantToken + '/scripting/scripts/' + scriptId + '/versions/' +
    versionId + '/activate', null)
}
