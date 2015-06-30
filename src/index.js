
var _ = require('lodash');
var runInNewContext = require('vm').runInNewContext;
var isIojs = require('is-iojs');

export class DSLHelper {
  constructor(dsl_context) {
    this.dsl_context = dsl_context;
  }

  execute(target, code, file) {
    // Clone target to security
    target = _.clone(target);
    var context = this._create_dsl_context(target);

    // Check for syntax error
    if (!isIojs) {
      var err = require('syntax-error')(code, file);
      if (err) {
        err.stack = err.toString();
        throw err;
      }
    }

    // Run code in dsl context
    runInNewContext(code, context, file);

    // Return changed clone target
    return target;
  }

  _create_dsl_context(target) {
    return _.reduce(this.dsl_context, (context, func, name) => {
      if (_.isFunction(func)) {
        context[name] = func.bind(target);
      } else {
        context[name] = func;
      }
      return context;
    }, { });
  }
}
