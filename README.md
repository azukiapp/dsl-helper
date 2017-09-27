# dsl-helper

[![CircleCI](https://circleci.com/gh/azukiapp/dsl-helper.svg?style=svg)](https://circleci.com/gh/azukiapp/dsl-helper)

This lib assists in the specification and DSL processing in JavaScript. Including adding validates and catch syntax errors.

Currently supports:

- node.js >= 6.0.0

Example:

```js
var DSLHelper = require('dsl-helper').DSLHelper;

var dsl = new DSLHelper({
  console: console,
  log: function() {
    console.log(this);
  }
});

dsl.execute({ name: "David" }, "log();");
// { name: "David" }
```

## License

"Azuki", "azk" and the Azuki logo are copyright (c) 2013-2017 Azuki Serviços de Internet LTDA.

**azk** source code is released under Apache 2 License.

Check LEGAL and LICENSE files for more information.

