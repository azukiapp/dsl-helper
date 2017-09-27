import { resolve } from 'path';
import chai from 'chai';

require('source-map-support').install();
chai.config.includeStack = true;

var Helpers = {
  expect : chai.expect,

  fixture_path(...fixture) {
    return resolve(__dirname, 'fixtures', ...fixture);
  },

  escapeRegExp(value) {
    return (value || '').replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  },
};

export default Helpers;
export { chai };
