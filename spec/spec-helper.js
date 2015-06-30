var Helpers = {
  expect : require('azk-dev/chai').expect,

  escapeRegExp(value) {
    return (value || "").replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  },
};

export default Helpers;
