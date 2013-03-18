/**
 * A data type representing an optional value.
 *
 * An `option` represents either a value with the `some` constructor
 * or no value with the `none` constructor.
 *
 * The data type is implemented using a church-encoding, that is a
 * higher-order fold function, or catamorphism, that accepts functions
 * to handle the none case and the some case respectively. Note that
 * the none case is the first argument, by convention. All other
 * operations are defined in terms of fold.
 */
define(['fp/func'], function (Func) {

  /** The `some` constructor representing a value. */
  var some = function (value) {
    return option(function (n, s) {
      return s(value);
    });
  };

  /** The `none` constructor representing no value. */
  var none = function () {
    return option(function (n, s) {
      return n();
    });
  };

  /** A convenience for wrapping code that _may_ return null or undefined. */
  var wrap = function (value) {
    return value === null || value === undefined ? none() : some(value);
  };

  /** The `option` data type and its operations. */
  var option = function (fold) {

    var map = function (f) {
      return bind(function (value) {
        return some(f(value));
      });
    };

    var bind = function (f) {
      return fold(none, f);
    };

    var is = function (v) {
      return fold(Func.constant(false), function (o) {
        return o === v;
      });
    };

    var isSome = function () {
      return fold(Func.constant(false), Func.constant(true));
    };

    var isNone = Func.not(isSome);

    var exists = function (f) {
      return fold(Func.constant(false), f);
    };

    var forall = function (f) {
      return fold(Func.constant(true), f);
    };

    var getOr = function (value) {
      return fold(Func.constant(value), Func.identity);
    };

    var getOrThunk = function (f) {
      return fold(f, Func.identity);
    };

    var getOrError = function (msg) {
      return fold(Func.error(msg || 'getOrError called on none.'), Func.identity);
    };

    var or = function (opt) {
      return fold(Func.constant(opt), some);
    };

    var flatten = function () {
      return fold(none, Func.identity);
    };

    var filter = function (f) {
      return fold(none, function (v) {
        return f(v) ? some(v) : none();
      });
    };

    return {
      fold: fold,
      map: map,
      bind: bind,
      is: is,
      isSome: isSome,
      isNone: isNone,
      exists: exists,
      forall: forall,
      getOr: getOr,
      getOrThunk: getOrThunk,
      getOrError: getOrError,
      or: or,
      flatten: flatten,
      filter: filter
    };
  };

  var equal = function (o1, o2, compare) {
    var eq = compare || function (a, b) { return a === b; };
    return o1.fold(function () {
      return o2.fold(Func.constant(true), Func.constant(false))
    }, function (a) {
      return o2.fold(Func.constant(false), function (b) {
        return eq(a, b);
      });
    });
  };

  return {
    some: some,
    none: none,
    wrap: wrap,
    equal: equal
  };
});
