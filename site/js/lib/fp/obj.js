/*
 * Intended to be used in conjunction with underscore.js,
 * provides only missing implementations.
 *
 * This provides suplemental functions that operate on
 * objects. Importantly it treats objects as a functor, in haskell
 * terms it could be thought of as a `Functor (Map String)`. This
 * allows correct implementations for map/bind etc... that do not
 * coerce the object to an array (arghhh!!!!).
 */
define([], function () {
  var has = function (o, k) {
    return Object.prototype.hasOwnProperty.call(o, k);
  };

  var map = function (o, f, context) {
    var r = {};
    for (var k in o)
      if (has(o, k))
        r[k] = f.call(context, o[k], k, o);
    return r;
  };

  return {
    map: map,
    each: map
  };
});
