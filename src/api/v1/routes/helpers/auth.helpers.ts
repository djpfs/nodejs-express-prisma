import { RouteRule } from '../../../../interfaces/route'

/**
 * @description
 * Is used to compare the route rules from the route file
 * and check if the user has the permission to access the route
 */

const routeRules: RouteRule[] = [
  {
    path: '/api/v1/auth/me',
    method: 'get',
    rules: [],
  },
  {
    path: '/api/v1/auth/signin',
    method: 'post',
    rules: [],
  },
  {
    path: '/api/v1/auth/signout',
    method: 'get',
    rules: [],
  },
]

export default { routeRules }
