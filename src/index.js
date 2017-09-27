import * as _ from 'lodash';
import { runInNewContext } from 'vm';

export class DSLHelper {
  constructor(dsl_context) {
    this.dsl_context = dsl_context;
  }

  execute(target, code, file) {
    // Clone target to security
    target = _.clone(target);
    var context = this._create_dsl_context(target);

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
