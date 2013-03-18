/*
 * Intended to be used in conjunction with underscore.js,
 * provides only missing implementations.
 *
 * This provides suplemental functions that operate on
 * functions.
 */
define([], function () {
  var constant = function (v) {
    return function () {
      return v;
    };
  };

  var not = function (f) {
    return function () {
      return !f.apply(undefined, arguments);
    };
  };

  var is = function (v) {
    return function (vv) {
      return v == vv;
    };
  };

  var identity = function (x) {
    return x;
  };

  var error = function (message) {
    return function () {
      throw (message || 'error - no message supplied');
    };
  };

  return {
    constant: constant,
    not: not,
    is: is,
    identity: identity,
    error: error
  };
});
