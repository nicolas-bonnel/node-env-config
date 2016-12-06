process.env.NEC_FOO_BAR = 3
process.env.NEC_BAR__BAZ = true

var envConfig = require('./index')
var config = envConfig({
  fooBar: 1,
  fooBar2: 2,
  bar: {
    baz: false
  }
})

console.log(config)
