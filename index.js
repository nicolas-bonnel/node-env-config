const merge = require('merge-env')
const pickBy = require('lodash.pickby')
const mapKeys = require('lodash.mapkeys')

var envVars = pickBy(process.env, function(value, key){
  return key.startsWith('NEC_')
});

envVars = mapKeys(envVars, function(value, key){
  return key.split('NEC_').slice(1).join('_')
})

module.exports = function(config){
  return merge(config,envVars)
}
