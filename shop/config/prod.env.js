// 'use strict'
// module.exports = {
//   NODE_ENV: '"production"'
// }
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"production"',
  API_ROOT: '"http://localhost:5000"'   //线上接口请求前缀
})
