# dsl-helper

This lib assists in the specification and dsl processing in JavaScript. Including adding validates and catch syntax errors.

Currently supports:

- node.js
- io.js

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

"Azuki", "azk" and the Azuki logo are copyright (c) 2013-2015 Azuki Serviços de Internet LTDA.

**azk** source code is released under Apache 2 License.

Check LEGAL and LICENSE files for more information.

