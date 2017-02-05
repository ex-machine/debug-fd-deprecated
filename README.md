# debug-fd-deprecated

This is a fix for deprecation warning (not its cause),

> `DEBUG_FD` is deprecated. Override `debug.log` if you want to use a different log function

Which is produced on Node.js by `debug` package v2.6.0 and its dependents, commonly ExpressJS and its middlewares.

Particularly useful for the users of JetBrains IntelliJ IDEA, PhpStorm, WebStorm.

## Description

The package patches Node.js `util.deprecate` in safe manner to keep it silent about `DEBUG_FD`.

## Use

`debug-fd-deprecated` should be loaded once per process, before `debug` or any other package that uses it:

```js
'use strict';
require('debug-fd-deprecated');
...
const bodyParser = require('body-parser');
```

If it is known that `process.env.DEBUG_FD` is enabled only from the environment before Node.js start (like it happens with JetBrains IDEs), `debug-fd-deprecated` can be made conditional:


```js
'use strict';

if ('DEBUG_FD' in process.env) {
  require('debug-fd-deprecated');
}
...
const bodyParser = require('body-parser');
```
