# Node Environment Configuration
This module provides a way to easily override parts of a JS/JSON configuration file
with environment variables. This module uses [merge-env](https://github.com/bholloway/merge-env) and filters
environment variables prefixed with `NEC_`.

Keys which are **uppercase alpha-numeric**, with possible **underscore**, are legal environment variables per IEEE Std 1003.1-2001 Shell and Utilities volume. These keys are assumed to describe camel-case fields where single underscore implies camel-case, and double underscore implies a dot (i.e. nested object). Their value must be some non-object.

For example:
```
NEC_FOO_BAR = 1
NEC_BAR__BAZ = true
```

gives:
```javascript
{
  fooBar: 1,
  bar: {
    baz: true
  }
}
```

## Install
No npm build yet, reference this repository in your package.json file

## Usage

```
var envConfig = require('env-config')
var defaultConfig = require('/path/to/config.js')
var config = envConfig(defaultConfig)
// You can now use your config object
```
