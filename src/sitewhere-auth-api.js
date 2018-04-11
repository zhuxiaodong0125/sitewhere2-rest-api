/**
 * API calls associated with authentication.
 */
import {restAuthGet} from './sitewhere-rest'

/**
 * Get new JWT.
 */
export function getJwt (axios) {
  return restAuthGet(axios, 'jwt')
}
