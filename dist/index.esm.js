import React__default, { forwardRef, createElement, Component } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
var reactIs_development_1 = reactIs_development.AsyncMode;
var reactIs_development_2 = reactIs_development.ConcurrentMode;
var reactIs_development_3 = reactIs_development.ContextConsumer;
var reactIs_development_4 = reactIs_development.ContextProvider;
var reactIs_development_5 = reactIs_development.Element;
var reactIs_development_6 = reactIs_development.ForwardRef;
var reactIs_development_7 = reactIs_development.Fragment;
var reactIs_development_8 = reactIs_development.Lazy;
var reactIs_development_9 = reactIs_development.Memo;
var reactIs_development_10 = reactIs_development.Portal;
var reactIs_development_11 = reactIs_development.Profiler;
var reactIs_development_12 = reactIs_development.StrictMode;
var reactIs_development_13 = reactIs_development.Suspense;
var reactIs_development_14 = reactIs_development.isAsyncMode;
var reactIs_development_15 = reactIs_development.isConcurrentMode;
var reactIs_development_16 = reactIs_development.isContextConsumer;
var reactIs_development_17 = reactIs_development.isContextProvider;
var reactIs_development_18 = reactIs_development.isElement;
var reactIs_development_19 = reactIs_development.isForwardRef;
var reactIs_development_20 = reactIs_development.isFragment;
var reactIs_development_21 = reactIs_development.isLazy;
var reactIs_development_22 = reactIs_development.isMemo;
var reactIs_development_23 = reactIs_development.isPortal;
var reactIs_development_24 = reactIs_development.isProfiler;
var reactIs_development_25 = reactIs_development.isStrictMode;
var reactIs_development_26 = reactIs_development.isSuspense;
var reactIs_development_27 = reactIs_development.isValidElementType;
var reactIs_development_28 = reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var __assign$1 = (undefined && undefined.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};
function promisify(api) {
    return function (arg) {
        if (arg === void 0) { arg = {}; }
        return new Promise(function (resolve, reject) {
            var promisifyArg = arg;
            api(__assign$1(__assign$1({}, promisifyArg), { success: function (res) {
                    if (promisifyArg && typeof promisifyArg.success === 'function') {
                        promisifyArg.success(res);
                    }
                    resolve(res);
                }, fail: function (res) {
                    if (promisifyArg && typeof promisifyArg.fail === 'function') {
                        promisifyArg.fail(res);
                    }
                    reject(res);
                } }));
        });
    };
}

function formatDisplayName(name) {
    return name
        .replace(/-(.)/g, function ($1) {
        return $1.toUpperCase();
    })
        .replace(/-/g, '')
        .replace(/^(.)/, function ($1) {
        return $1.toUpperCase();
    });
}

var __assign$2 = (undefined && undefined.__assign) || function () {
    __assign$2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$2.apply(this, arguments);
};
function createHostComponent(name, component) {
    if (component) {
        return component;
    }
    var Component = function (props, ref) {
        var _a = props.children, children = _a === void 0 ? [] : _a;
        return createElement(name, __assign$2(__assign$2({}, props), { ref: ref }), children);
    };
    if (process.env.NODE_ENV === 'development') {
        Component.displayName = formatDisplayName(name);
    }
    return forwardRef(Component);
}

var View = createHostComponent('view');

var ScrollView = createHostComponent('scroll-view');

var Swiper = createHostComponent('swiper');

var SwiperItem = createHostComponent('swiper-item');

var MovableView = createHostComponent('movable-view');

var MovableArea = createHostComponent('movable-area');

var CoverView = createHostComponent('cover-view');

var CoverImage = createHostComponent('cover-image');

var Icon = createHostComponent('icon');

var Text = createHostComponent('text');

var RichText = createHostComponent('rich-text');

var Progress = createHostComponent('progress');

var Button = createHostComponent('button');

var CheckboxGroup = createHostComponent('checkbox-group');

var Checkbox = createHostComponent('checkbox');

var Form = createHostComponent('form');

var Input = createHostComponent('input');

var Label = createHostComponent('label');

var Picker = createHostComponent('picker');

var PickerView = createHostComponent('picker-view');

var PickerViewColumn = createHostComponent('picker-view-column');

var RadioGroup = createHostComponent('radio-group');

var Radio = createHostComponent('radio');

var Slider = createHostComponent('slider');

var Switch = createHostComponent('switch');

var Textarea = createHostComponent('textarea');

var Navigator = createHostComponent('navigator');

var Image = createHostComponent('image');

var Map = createHostComponent('map');

var Canvas = createHostComponent('canvas');

var WebView = createHostComponent('web-view');

var Lifestyle = createHostComponent('lifestyle');

var ContactButton = createHostComponent('contact-button');

var Video = createHostComponent('video');

var getAppStub = getApp;
var addCardAuth = promisify(my.addCardAuth);
var addPhoneContact = promisify(my.addPhoneContact);
var alert = promisify(my.alert);
var canIUse = my.canIUse;
var chooseAlipayContact = promisify(my.chooseAlipayContact);
var chooseCity = promisify(my.chooseCity);
var chooseContact = promisify(my.chooseContact);
var chooseImage = promisify(my.chooseImage);
var chooseLocation = promisify(my.chooseLocation);
var choosePhoneContact = promisify(my.choosePhoneContact);
var clearStorage = my.clearStorage;
var clearStorageSync = my.clearStorageSync;
var closeBluetoothAdapter = promisify(my.closeBluetoothAdapter);
var closeSocket = promisify(my.closeSocket);
var compressImage = promisify(my.compressImage);
var confirm = promisify(my.confirm);
var connectBLEDevice = promisify(my.connectBLEDevice);
var connectSocket = promisify(my.connectSocket);
var createAnimation = my.createAnimation;
var createCanvasContext = my.createCanvasContext;
var createIntersectionObserver = my.createIntersectionObserver;
var createMapContext = my.createMapContext;
var createSelectorQuery = my.createSelectorQuery;
var createWebViewContext = my.createWebViewContext;
var datePicker = promisify(my.datePicker);
var disconnectBLEDevice = promisify(my.disconnectBLEDevice);
var downloadFile = promisify(my.downloadFile);
var getAuthCode = promisify(my.getAuthCode);
var getAuthUserInfo = promisify(my.getAuthUserInfo);
var getBatteryInfo = promisify(my.getBatteryInfo);
var getBatteryInfoSync = my.getBatteryInfoSync;
var getBeacons = promisify(my.getBeacons);
var getBLEDeviceCharacteristics = promisify(my.getBLEDeviceCharacteristics);
var getBLEDeviceServices = promisify(my.getBLEDeviceServices);
var getBluetoothAdapterState = promisify(my.getBluetoothAdapterState);
var getBluetoothDevices = promisify(my.getBluetoothDevices);
var getClipboard = promisify(my.getClipboard);
var getConnectedBluetoothDevices = promisify(my.getConnectedBluetoothDevices);
var getFileInfo = promisify(my.getFileInfo);
var getImageInfo = promisify(my.getImageInfo);
var getLocation = promisify(my.getLocation);
var getNetworkType = promisify(my.getNetworkType);
var getPhoneNumber = promisify(my.getPhoneNumber);
var getRunData = promisify(my.getRunData);
var getRunScene = promisify(my.getRunScene);
var getSavedFileInfo = promisify(my.getSavedFileInfo);
var getSavedFileList = promisify(my.getSavedFileList);
var getScreenBrightness = promisify(my.getScreenBrightness);
var getServerTime = promisify(my.getServerTime);
var getSetting = promisify(my.getSetting);
var getStorage = promisify(my.getStorage);
var getStorageInfo = promisify(my.getStorageInfo);
var getStorageInfoSync = my.getStorageInfoSync;
var getStorageSync = my.getStorageSync;
var getSystemInfo = promisify(my.getSystemInfo);
var getSystemInfoSync = my.getSystemInfoSync;
var getTitleColor = promisify(my.getTitleColor);
var getUpdateManager = my.getUpdateManager;
var hideAddToDesktopMenu = my.hideAddToDesktopMenu;
var hideAllAddToDesktopMenu = my.hideAllAddToDesktopMenu;
var hideAllFavoriteMenu = my.hideAllFavoriteMenu;
var hideBackHome = my.hideBackHome;
var hideFavoriteMenu = my.hideFavoriteMenu;
var hideKeyboard = my.hideKeyboard;
var hideLoading = my.hideLoading;
var hideNavigationBarLoading = my.hideNavigationBarLoading;
var hideShareMenu = my.hideShareMenu;
var hideTabBar = my.hideTabBar;
var hideTabBarRedDot = my.hideTabBarRedDot;
var hideToast = my.hideToast;
var loadFontFace = promisify(my.loadFontFace);
var makePhoneCall = my.makePhoneCall;
var multiLevelSelect = promisify(my.multiLevelSelect);
var navigateBack = promisify(my.navigateBack);
var navigateBackMiniProgram = promisify(my.navigateBackMiniProgram);
var navigateTo = promisify(my.navigateTo);
var navigateToMiniProgram = promisify(my.navigateToMiniProgram);
var notifyBLECharacteristicValueChange = promisify(my.notifyBLECharacteristicValueChange);
var offAccelerometerChange = my.offAccelerometerChange;
var offBLECharacteristicValueChange = my.offBLECharacteristicValueChange;
var offBLEConnectionStateChanged = my.offBLEConnectionStateChanged;
var offBluetoothAdapterStateChange = my.offBluetoothAdapterStateChange;
var offBluetoothDeviceFound = my.offBluetoothDeviceFound;
var offCompassChange = my.offCompassChange;
var offGyroscopeChange = my.offGyroscopeChange;
var offMemoryWarning = my.offMemoryWarning;
var offNetworkStatusChange = my.offNetworkStatusChange;
var offSocketClose = my.offSocketClose;
var offSocketError = my.offSocketError;
var offSocketMessage = my.offSocketMessage;
var offSocketOpen = my.offSocketOpen;
var offUserCaptureScreen = my.offUserCaptureScreen;
var onAccelerometerChange = my.onAccelerometerChange;
var onBeaconServiceChange = my.onBeaconServiceChange;
var onBeaconUpdate = my.onBeaconUpdate;
var onBLECharacteristicValueChange = my.onBLECharacteristicValueChange;
var onBLEConnectionStateChanged = my.onBLEConnectionStateChanged;
var onBluetoothAdapterStateChange = my.onBluetoothAdapterStateChange;
var onBluetoothDeviceFound = my.onBluetoothDeviceFound;
var onCompassChange = my.onCompassChange;
var onGyroscopeChange = my.onGyroscopeChange;
var onMemoryWarning = my.onMemoryWarning;
var onNetworkStatusChange = my.onNetworkStatusChange;
var onSocketClose = my.onSocketClose;
var onSocketError = my.onSocketError;
var onSocketMessage = my.onSocketMessage;
var onSocketOpen = my.onSocketOpen;
var onUserCaptureScreen = my.onUserCaptureScreen;
var openBluetoothAdapter = my.openBluetoothAdapter;
var openCardDetail = my.openCardDetail;
var openCardList = my.openCardList;
var openKBVoucherDetail = my.openKBVoucherDetail;
var openLocation = promisify(my.openLocation);
var openMerchantCardList = my.openMerchantCardList;
var openMerchantTicketList = my.openMerchantTicketList;
var openMerchantVoucherList = my.openMerchantVoucherList;
var openSetting = promisify(my.openSetting);
var openTicketDetail = my.openTicketDetail;
var openTicketList = my.openTicketList;
var openVoucherDetail = my.openVoucherDetail;
var openVoucherList = my.openVoucherList;
var optionsSelect = my.optionsSelect;
var pageScrollTo = promisify(my.pageScrollTo);
var previewImage = promisify(my.previewImage);
var prompt = promisify(my.prompt);
var readBLECharacteristicValue = promisify(my.readBLECharacteristicValue);
var redirectTo = promisify(my.redirectTo);
var reLaunch = promisify(my.reLaunch);
var removeSavedFile = promisify(my.removeSavedFile);
var removeStorage = promisify(my.removeStorage);
var removeStorageSync = my.removeStorageSync;
var removeTabBarBadge = promisify(my.removeTabBarBadge);
var reportAnalytics = my.reportAnalytics;
var request = promisify(my.request);
var rsa = promisify(my.rsa);
var saveFile = promisify(my.saveFile);
var saveImage = promisify(my.saveImage);
var scan = promisify(my.scan);
var SDKVersion = my.SDKVersion;
var sendSocketMessage = promisify(my.sendSocketMessage);
var setBackgroundColor = promisify(my.setBackgroundColor);
var setBackgroundTextStyle = promisify(my.setBackgroundTextStyle);
var setCanPullDown = my.setCanPullDown;
var setClipboard = promisify(my.setClipboard);
var setKeepScreenOn = promisify(my.setKeepScreenOn);
var setNavigationBar = promisify(my.setNavigationBar);
var setOptionMenu = my.setOptionMenu;
var setScreenBrightness = promisify(my.setScreenBrightness);
var setStorage = promisify(my.setStorage);
var setStorageSync = my.setStorageSync;
var setTabBarBadge = promisify(my.setTabBarBadge);
var setTabBarItem = promisify(my.setTabBarItem);
var setTabBarStyle = promisify(my.setTabBarStyle);
var showActionSheet = promisify(my.showActionSheet);
var showAuthGuide = my.showAuthGuide;
var showLoading = promisify(my.showLoading);
var showNavigationBarLoading = promisify(my.showNavigationBarLoading);
var showSharePanel = my.showSharePanel;
var showTabBar = promisify(my.showTabBar);
var showTabBarRedDot = promisify(my.showTabBarRedDot);
var showToast = promisify(my.showToast);
var startBeaconDiscovery = promisify(my.startBeaconDiscovery);
var startBluetoothDevicesDiscovery = promisify(my.startBluetoothDevicesDiscovery);
var startPullDownRefresh = promisify(my.startPullDownRefresh);
var startZMVerify = my.startZMVerify;
var stopBeaconDiscovery = promisify(my.stopBeaconDiscovery);
var stopBluetoothDevicesDiscovery = promisify(my.stopBluetoothDevicesDiscovery);
var stopPullDownRefresh = promisify(my.stopPullDownRefresh);
var switchTab = promisify(my.switchTab);
var textRiskIdentification = promisify(my.textRiskIdentification);
var tradePay = promisify(my.tradePay);
var uploadFile = promisify(my.uploadFile);
var vibrate = promisify(my.vibrate);
var vibrateLong = promisify(my.vibrateLong);
var vibrateShort = promisify(my.vibrateShort);
var watchShake = my.watchShake;
var writeBLECharacteristicValue = promisify(my.writeBLECharacteristicValue);
var createVideoContext = my.createVideoContext;
var getOpenUserInfo = promisify(my.getOpenUserInfo);
var httpRequest = promisify(my.httpRequest);

var AtActionSheetBody = /** @class */ (function (_super) {
    __extends(AtActionSheetBody, _super);
    function AtActionSheetBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtActionSheetBody.prototype.render = function () {
        var rootClass = classnames('at-action-sheet__body', this.props.className);
        return React__default.createElement(View, { className: rootClass }, this.props.children);
    };
    return AtActionSheetBody;
}(React__default.Component));

var AtActionSheetFooter = /** @class */ (function (_super) {
    __extends(AtActionSheetFooter, _super);
    function AtActionSheetFooter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (typeof _this.props.onClick === 'function') {
                (_a = _this.props).onClick.apply(_a, __spread(args));
            }
        };
        return _this;
    }
    AtActionSheetFooter.prototype.render = function () {
        var rootClass = classnames('at-action-sheet__footer', this.props.className);
        return (React__default.createElement(View, { onClick: this.handleClick, className: rootClass }, this.props.children));
    };
    return AtActionSheetFooter;
}(React__default.Component));
AtActionSheetFooter.propTypes = {
    onClick: propTypes.func
};

var AtActionSheetHeader = /** @class */ (function (_super) {
    __extends(AtActionSheetHeader, _super);
    function AtActionSheetHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtActionSheetHeader.prototype.render = function () {
        var rootClass = classnames('at-action-sheet__header', this.props.className);
        return React__default.createElement(View, { className: rootClass }, this.props.children);
    };
    return AtActionSheetHeader;
}(React__default.Component));

var AtActionSheet = /** @class */ (function (_super) {
    __extends(AtActionSheet, _super);
    function AtActionSheet(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClose = function () {
            if (typeof _this.props.onClose === 'function') {
                _this.props.onClose();
            }
        };
        _this.handleCancel = function () {
            if (typeof _this.props.onCancel === 'function') {
                return _this.props.onCancel();
            }
            _this.close();
        };
        _this.close = function () {
            _this.setState({
                _isOpened: false
            }, _this.handleClose);
        };
        _this.handleTouchMove = function (e) {
            e.stopPropagation();
            e.preventDefault();
        };
        var isOpened = props.isOpened;
        _this.state = {
            _isOpened: isOpened
        };
        return _this;
    }
    AtActionSheet.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var isOpened = nextProps.isOpened;
        if (isOpened !== this.state._isOpened) {
            this.setState({
                _isOpened: isOpened
            });
            !isOpened && this.handleClose();
        }
    };
    AtActionSheet.prototype.render = function () {
        var _a = this.props, title = _a.title, cancelText = _a.cancelText, className = _a.className;
        var _isOpened = this.state._isOpened;
        var rootClass = classnames('at-action-sheet', {
            'at-action-sheet--active': _isOpened
        }, className);
        return (React__default.createElement(View, { className: rootClass, onTouchMove: this.handleTouchMove },
            React__default.createElement(View, { onClick: this.close, className: 'at-action-sheet__overlay' }),
            React__default.createElement(View, { className: 'at-action-sheet__container' },
                title && React__default.createElement(AtActionSheetHeader, null, title),
                React__default.createElement(AtActionSheetBody, null, this.props.children),
                cancelText && (React__default.createElement(AtActionSheetFooter, { onClick: this.handleCancel }, cancelText)))));
    };
    return AtActionSheet;
}(React__default.Component));
AtActionSheet.defaultProps = {
    title: '',
    cancelText: '',
    isOpened: false
};
AtActionSheet.propTypes = {
    title: propTypes.string,
    onClose: propTypes.func,
    onCancel: propTypes.func,
    isOpened: propTypes.bool.isRequired,
    cancelText: propTypes.string
};

var AtActionSheetItem = /** @class */ (function (_super) {
    __extends(AtActionSheetItem, _super);
    function AtActionSheetItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (args) {
            if (typeof _this.props.onClick === 'function') {
                _this.props.onClick(args);
            }
        };
        return _this;
    }
    AtActionSheetItem.prototype.render = function () {
        var rootClass = classnames('at-action-sheet__item', this.props.className);
        return (React__default.createElement(View, { className: rootClass, onClick: this.handleClick }, this.props.children));
    };
    return AtActionSheetItem;
}(React__default.Component));
AtActionSheetItem.propTypes = {
    onClick: propTypes.func
};

function delay(delayTime) {
    if (delayTime === void 0) { delayTime = 25; }
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, delayTime);
    });
}
function delayQuerySelector(selectorStr, delayTime) {
    if (delayTime === void 0) { delayTime = 500; }
    return new Promise(function (resolve) {
        var selector = createSelectorQuery();
        delay(delayTime).then(function () {
            selector
                .select(selectorStr)
                .boundingClientRect()
                .exec(function (res) {
                resolve(res);
            });
        });
    });
}
function delayGetScrollOffset(_a) {
    var _b = _a.delayTime, delayTime = _b === void 0 ? 500 : _b;
    return new Promise(function (resolve) {
        delay(delayTime).then(function () {
            createSelectorQuery()
                .selectViewport()
                .scrollOffset()
                .exec(function (res) {
                resolve(res);
            });
        });
    });
}
function delayGetClientRect(_a) {
    var selectorStr = _a.selectorStr, _b = _a.delayTime, delayTime = _b === void 0 ? 500 : _b;
    var selector = createSelectorQuery();
    return new Promise(function (resolve) {
        delay(delayTime).then(function () {
            selector
                .select(selectorStr)
                .boundingClientRect()
                .exec(function (res) {
                resolve(res);
            });
        });
    });
}
function uuid(len, radix) {
    if (len === void 0) { len = 8; }
    if (radix === void 0) { radix = 16; }
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    var value = [];
    var i = 0;
    radix = radix || chars.length;
    if (len) {
        // Compact form
        for (i = 0; i < len; i++)
            value[i] = chars[0 | (Math.random() * radix)];
    }
    else {
        // rfc4122, version 4 form
        var r = void 0;
        // rfc4122 requires these characters
        /* eslint-disable-next-line */
        value[8] = value[13] = value[18] = value[23] = "-";
        value[14] = "4";
        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!value[i]) {
                r = 0 | (Math.random() * 16);
                value[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return value.join("");
}
function getEventDetail(event) {
    return {
        pageX: event.target.pageX,
        pageY: event.target.pageY,
        clientX: event.target.clientX,
        clientY: event.target.clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.target.x,
        y: event.target.y,
    };
}
function isTest() {
    return process.env.NODE_ENV === "test";
}
function pxTransform(size) {
    if (!size)
        return "";
    var designWidth = 750;
    var deviceRatio = {
        640: 2.34 / 2,
        750: 1,
        828: 1.81 / 2,
    };
    return size / deviceRatio[designWidth] + "rpx";
}
function objectToString(style) {
    if (style && typeof style === "object") {
        var styleStr_1 = "";
        Object.keys(style).forEach(function (key) {
            var lowerCaseKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
            styleStr_1 += lowerCaseKey + ":" + style[key] + ";";
        });
        return styleStr_1;
    }
    else if (style && typeof style === "string") {
        return style;
    }
    return "";
}
/**
 * 合并 style
 * @param {Object|String} style1
 * @param {Object|String} style2
 * @returns {String}
 */
function mergeStyle(style1, style2) {
    if (style1 &&
        typeof style1 === "object" &&
        style2 &&
        typeof style2 === "object") {
        return Object.assign({}, style1, style2);
    }
    return objectToString(style1) + objectToString(style2);
}

var AtLoading = /** @class */ (function (_super) {
    __extends(AtLoading, _super);
    function AtLoading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtLoading.prototype.render = function () {
        var _a = this.props, color = _a.color, size = _a.size;
        var loadingSize = typeof size === 'string' ? size : String(size);
        var sizeStyle = {
            width: size ? "" + pxTransform(parseInt(loadingSize)) : '',
            height: size ? "" + pxTransform(parseInt(loadingSize)) : ''
        };
        var colorStyle = {
            border: color ? "1px solid " + color : '',
            borderColor: color ? color + " transparent transparent transparent" : ''
        };
        var ringStyle = Object.assign({}, colorStyle, sizeStyle);
        return (React__default.createElement(View, { className: 'at-loading', style: sizeStyle },
            React__default.createElement(View, { className: 'at-loading__ring', style: ringStyle }),
            React__default.createElement(View, { className: 'at-loading__ring', style: ringStyle }),
            React__default.createElement(View, { className: 'at-loading__ring', style: ringStyle })));
    };
    return AtLoading;
}(React__default.Component));
AtLoading.defaultProps = {
    size: 0,
    color: ''
};
AtLoading.propTypes = {
    size: propTypes.oneOfType([propTypes.string, propTypes.number]),
    color: propTypes.oneOfType([propTypes.string, propTypes.number])
};

var AtActivityIndicator = /** @class */ (function (_super) {
    __extends(AtActivityIndicator, _super);
    function AtActivityIndicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtActivityIndicator.prototype.render = function () {
        var _a = this.props, color = _a.color, size = _a.size, mode = _a.mode, content = _a.content, isOpened = _a.isOpened;
        var rootClass = classnames('at-activity-indicator', {
            'at-activity-indicator--center': mode === 'center',
            'at-activity-indicator--isopened': isOpened
        }, this.props.className);
        return (React__default.createElement(View, { className: rootClass },
            React__default.createElement(View, { className: 'at-activity-indicator__body' },
                React__default.createElement(AtLoading, { size: size, color: color })),
            content && (React__default.createElement(Text, { className: 'at-activity-indicator__content' }, content))));
    };
    return AtActivityIndicator;
}(React__default.Component));
AtActivityIndicator.defaultProps = {
    size: 0,
    mode: 'normal',
    color: '',
    content: '',
    className: '',
    isOpened: true
};
AtActivityIndicator.propTypes = {
    size: propTypes.number,
    mode: propTypes.string,
    color: propTypes.string,
    content: propTypes.string,
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    isOpened: propTypes.bool
};

var SIZE_CLASS = {
    large: "large",
    normal: "normal",
    small: "small",
};
var AtAvatar = /** @class */ (function (_super) {
    __extends(AtAvatar, _super);
    function AtAvatar(props) {
        return _super.call(this, props) || this;
    }
    AtAvatar.prototype.render = function () {
        var _a;
        var _b = this.props, size = _b.size, circle = _b.circle, image = _b.image, text = _b.text, customStyle = _b.customStyle;
        var rootClassName = ["at-avatar"];
        var iconSize = SIZE_CLASS[size || "normal"];
        var classObject = (_a = {},
            _a["at-avatar--" + iconSize] = iconSize,
            _a["at-avatar--circle"] = circle,
            _a);
        var letter = "";
        if (text)
            letter = text[0];
        var elem;
        if (image) {
            elem = React__default.createElement(Image, { className: "at-avatar__img", src: image });
        }
        else {
            elem = React__default.createElement(Text, { className: "at-avatar__text" }, letter);
        }
        return (React__default.createElement(View, { className: classnames(rootClassName, classObject, this.props.className), style: customStyle }, elem));
    };
    return AtAvatar;
}(React__default.Component));
AtAvatar.defaultProps = {
    size: "normal",
    circle: false,
    text: "",
    image: "",
    customStyle: {},
    className: "",
};
AtAvatar.propTypes = {
    size: propTypes.oneOf(["large", "normal", "small"]),
    circle: propTypes.bool,
    text: propTypes.string,
    image: propTypes.string,
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
};

var AtBadge = /** @class */ (function (_super) {
    __extends(AtBadge, _super);
    function AtBadge(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    AtBadge.prototype.formatValue = function (value, maxValue) {
        if (value === '' || value === null || typeof value === 'undefined')
            return '';
        var numValue = +value;
        if (Number.isNaN(numValue)) {
            return value;
        }
        return numValue > maxValue ? maxValue + "+" : numValue;
    };
    AtBadge.prototype.render = function () {
        var _a = this.props, dot = _a.dot, value = _a.value, _b = _a.maxValue, maxValue = _b === void 0 ? 99 : _b, customStyle = _a.customStyle;
        var rootClassName = ['at-badge'];
        var val = this.formatValue(value, maxValue);
        return (React__default.createElement(View, { className: classnames(rootClassName, this.props.className), style: customStyle },
            this.props.children,
            dot ? (React__default.createElement(View, { className: 'at-badge__dot' })) : (val !== '' && React__default.createElement(View, { className: 'at-badge__num' }, val))));
    };
    return AtBadge;
}(React__default.Component));
AtBadge.defaultProps = {
    dot: false,
    value: '',
    maxValue: 99,
    customStyle: {},
    className: ''
};
AtBadge.propTypes = {
    dot: propTypes.bool,
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    maxValue: propTypes.number,
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string])
};

var SIZE_CLASS$1 = {
    normal: "normal",
    small: "small",
};
var TYPE_CLASS = {
    primary: "primary",
    secondary: "secondary",
};
var AtButton = /** @class */ (function (_super) {
    __extends(AtButton, _super);
    function AtButton(props) {
        return _super.call(this, props) || this;
    }
    AtButton.prototype.onClick = function (event) {
        if (!this.props.disabled) {
            this.props.onClick && this.props.onClick(event);
        }
    };
    AtButton.prototype.onGetUserInfo = function (event) {
        this.props.onGetUserInfo && this.props.onGetUserInfo(event);
    };
    AtButton.prototype.onContact = function (event) {
        this.props.onContact && this.props.onContact(event);
    };
    AtButton.prototype.onGetPhoneNumber = function (event) {
        this.props.onGetPhoneNumber && this.props.onGetPhoneNumber(event);
    };
    AtButton.prototype.onError = function (event) {
        this.props.onError && this.props.onError(event);
    };
    AtButton.prototype.onOpenSetting = function (event) {
        this.props.onOpenSetting && this.props.onOpenSetting(event);
    };
    AtButton.prototype.render = function () {
        var _a;
        var _b = this.props, _c = _b.size, size = _c === void 0 ? "normal" : _c, _d = _b.type, type = _d === void 0 ? "" : _d, circle = _b.circle, full = _b.full, loading = _b.loading, disabled = _b.disabled, customStyle = _b.customStyle, formType = _b.formType, lang = _b.lang, sessionFrom = _b.sessionFrom, sendMessageTitle = _b.sendMessageTitle, sendMessagePath = _b.sendMessagePath, sendMessageImg = _b.sendMessageImg, showMessageCard = _b.showMessageCard, appParameter = _b.appParameter;
        var rootClassName = ["at-button"];
        var classObject = (_a = {},
            _a["at-button--" + SIZE_CLASS$1[size]] = SIZE_CLASS$1[size],
            _a["at-button--disabled"] = disabled,
            _a["at-button--" + type] = TYPE_CLASS[type],
            _a["at-button--circle"] = circle,
            _a["at-button--full"] = full,
            _a);
        var loadingColor = type === "primary" ? "#fff" : "";
        var loadingSize = size === "small" ? "30" : 0;
        var loadingComponent = null;
        if (loading) {
            loadingComponent = (React__default.createElement(View, { className: "at-button__icon" },
                React__default.createElement(AtLoading, { color: loadingColor, size: loadingSize })));
            rootClassName.push("at-button--icon");
        }
        var button = (React__default.createElement(Button, { className: "at-button__wxbutton", formType: formType, 
            // @ts-ignore
            lang: lang, sessionFrom: sessionFrom, sendMessageTitle: sendMessageTitle, sendMessagePath: sendMessagePath, sendMessageImg: sendMessageImg, showMessageCard: showMessageCard, appParameter: appParameter, onGetUserInfo: this.onGetUserInfo.bind(this), onGetPhoneNumber: this.onGetPhoneNumber.bind(this), onOpenSetting: this.onOpenSetting.bind(this), onError: this.onError.bind(this), onContact: this.onContact.bind(this) }));
        return (React__default.createElement(View, { className: classnames(rootClassName, classObject, this.props.className), style: customStyle, onClick: this.onClick.bind(this) },
            !disabled && button,
            loadingComponent,
            React__default.createElement(View, { className: "at-button__text" }, this.props.children)));
    };
    return AtButton;
}(React__default.Component));
AtButton.defaultProps = {
    size: "normal",
    circle: false,
    full: false,
    loading: false,
    disabled: false,
    customStyle: {},
    // Button props
    lang: "en",
    sessionFrom: "",
    sendMessageTitle: "",
    sendMessagePath: "",
    sendMessageImg: "",
    showMessageCard: false,
    appParameter: "",
};
AtButton.propTypes = {
    size: propTypes.oneOf(["normal", "small"]),
    type: propTypes.oneOf(["primary", "secondary", ""]),
    circle: propTypes.bool,
    full: propTypes.bool,
    loading: propTypes.bool,
    disabled: propTypes.bool,
    onClick: propTypes.func,
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    formType: propTypes.oneOf(["submit", "reset", ""]),
    openType: propTypes.oneOf([
        "contact",
        "share",
        "getUserInfo",
        "getPhoneNumber",
        "launchApp",
        "openSetting",
        "feedback",
        "getRealnameAuthInfo",
        "getAuthorize",
        "contactShare",
        "",
    ]),
    lang: propTypes.string,
    sessionFrom: propTypes.string,
    sendMessageTitle: propTypes.string,
    sendMessagePath: propTypes.string,
    sendMessageImg: propTypes.string,
    showMessageCard: propTypes.bool,
    appParameter: propTypes.string,
    onGetUserInfo: propTypes.func,
    onContact: propTypes.func,
    onGetPhoneNumber: propTypes.func,
    onError: propTypes.func,
    onOpenSetting: propTypes.func,
};

var AtCard = /** @class */ (function (_super) {
    __extends(AtCard, _super);
    function AtCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (args) {
            if (typeof _this.props.onClick === 'function') {
                _this.props.onClick(args);
            }
        };
        return _this;
    }
    AtCard.prototype.render = function () {
        var _a;
        var _b = this.props, title = _b.title, note = _b.note, extra = _b.extra, extraStyle = _b.extraStyle, thumb = _b.thumb, isFull = _b.isFull, icon = _b.icon, renderIcon = _b.renderIcon;
        var rootClass = classnames('at-card', {
            'at-card--full': isFull
        }, this.props.className);
        var iconClass = classnames((_a = {
                'at-icon': true
            },
            _a["at-icon-" + (icon && icon.value)] = icon && icon.value,
            _a['at-card__header-icon'] = true,
            _a));
        var iconStyle = {
            color: (icon && icon.color) || '',
            fontSize: (icon && icon.size + "px") || ''
        };
        return (React__default.createElement(View, { onClick: this.handleClick, className: rootClass },
            React__default.createElement(View, { className: 'at-card__header' },
                thumb && (React__default.createElement(View, { className: 'at-card__header-thumb' },
                    React__default.createElement(Image, { className: 'at-card__header-thumb-info', mode: 'scaleToFill', src: thumb }))),
                renderIcon || '',
                !thumb && icon && icon.value && (React__default.createElement(Text, { className: iconClass, style: iconStyle })),
                React__default.createElement(Text, { className: 'at-card__header-title' }, title),
                extra && (React__default.createElement(Text, { style: __assign({}, extraStyle), className: 'at-card__header-extra' }, extra))),
            React__default.createElement(View, { className: 'at-card__content' },
                React__default.createElement(View, { className: 'at-card__content-info' }, this.props.children),
                note && React__default.createElement(View, { className: 'at-card__content-note' }, note))));
    };
    return AtCard;
}(React__default.Component));
AtCard.defaultProps = {
    note: '',
    isFull: false,
    thumb: '',
    title: '',
    extra: '',
    extraStyle: {}
};
AtCard.propTypes = {
    note: propTypes.string,
    isFull: propTypes.bool,
    thumb: propTypes.string,
    title: propTypes.string,
    extra: propTypes.string,
    icon: propTypes.object,
    onClick: propTypes.func,
    renderIcon: propTypes.oneOfType([propTypes.string, propTypes.element]),
    extraStyle: propTypes.object // 自定义extra样式
};

var AtCheckbox = /** @class */ (function (_super) {
    __extends(AtCheckbox, _super);
    function AtCheckbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtCheckbox.prototype.handleClick = function (idx) {
        var _a = this.props, selectedList = _a.selectedList, options = _a.options;
        var option = options[idx];
        var disabled = option.disabled, value = option.value;
        if (disabled)
            return;
        var selectedSet = new Set(selectedList);
        if (!selectedSet.has(value)) {
            selectedSet.add(value);
        }
        else {
            selectedSet.delete(value);
        }
        this.props.onChange(__spread(selectedSet));
    };
    AtCheckbox.prototype.render = function () {
        var _this = this;
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, options = _a.options, selectedList = _a.selectedList;
        var rootCls = classnames('at-checkbox', className);
        return (React__default.createElement(View, { className: rootCls, style: customStyle }, options.map(function (option, idx) {
            var value = option.value, disabled = option.disabled, label = option.label, desc = option.desc;
            var optionCls = classnames('at-checkbox__option', {
                'at-checkbox__option--disabled': disabled,
                'at-checkbox__option--selected': selectedList.includes(value)
            });
            return (React__default.createElement(View, { className: optionCls, key: value, onClick: _this.handleClick.bind(_this, idx) },
                React__default.createElement(View, { className: 'at-checkbox__option-wrap' },
                    React__default.createElement(View, { className: 'at-checkbox__option-cnt' },
                        React__default.createElement(View, { className: 'at-checkbox__icon-cnt' },
                            React__default.createElement(Text, { className: 'at-icon at-icon-check' })),
                        React__default.createElement(View, { className: 'at-checkbox__title' }, label)),
                    desc && React__default.createElement(View, { className: 'at-checkbox__desc' }, desc))));
        })));
    };
    return AtCheckbox;
}(React__default.Component));
AtCheckbox.defaultProps = {
    customStyle: '',
    className: '',
    options: [],
    selectedList: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: function () { }
};
AtCheckbox.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    options: propTypes.array,
    selectedList: propTypes.array,
    onChange: propTypes.func
};

var AtList = /** @class */ (function (_super) {
    __extends(AtList, _super);
    function AtList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtList.prototype.render = function () {
        var rootClass = classnames('at-list', {
            'at-list--no-border': !this.props.hasBorder
        }, this.props.className);
        return React__default.createElement(View, { className: rootClass }, this.props.children);
    };
    return AtList;
}(React__default.Component));
AtList.defaultProps = {
    hasBorder: true
};
AtList.propTypes = {
    hasBorder: propTypes.bool
};

var AtListItem = /** @class */ (function (_super) {
    __extends(AtListItem, _super);
    function AtListItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            if (typeof _this.props.onClick === 'function' && !_this.props.disabled) {
                _this.props.onClick(event);
            }
        };
        _this.handleSwitchChange = function (event) {
            if (typeof _this.props.onSwitchChange === 'function' &&
                !_this.props.disabled) {
                _this.props.onSwitchChange(event);
            }
        };
        return _this;
    }
    AtListItem.prototype.handleSwitchClick = function (e) {
        e.stopPropagation();
    };
    AtListItem.prototype.render = function () {
        var _a;
        var _b = this.props, note = _b.note, arrow = _b.arrow, thumb = _b.thumb, iconInfo = _b.iconInfo, disabled = _b.disabled, isSwitch = _b.isSwitch, hasBorder = _b.hasBorder, extraThumb = _b.extraThumb, switchColor = _b.switchColor, switchIsCheck = _b.switchIsCheck;
        var _c = this.props, extraText = _c.extraText, title = _c.title;
        extraText = String(extraText);
        title = String(title);
        var rootClass = classnames('at-list__item', {
            'at-list__item--thumb': thumb,
            'at-list__item--multiple': note,
            'at-list__item--disabled': disabled,
            'at-list__item--no-border': !hasBorder
        }, this.props.className);
        var iconClass = classnames((iconInfo && iconInfo.prefixClass) || 'at-icon', (_a = {},
            _a[((iconInfo && iconInfo.prefixClass) || 'at-icon') + "-" + (iconInfo && iconInfo.value)] = iconInfo && iconInfo.value,
            _a), iconInfo && iconInfo.className);
        return (React__default.createElement(View, { className: rootClass, onClick: this.handleClick },
            React__default.createElement(View, { className: 'at-list__item-container' },
                thumb && (React__default.createElement(View, { className: 'at-list__item-thumb item-thumb' },
                    React__default.createElement(Image, { className: 'item-thumb__info', mode: 'scaleToFill', src: thumb }))),
                iconInfo && iconInfo.value && (React__default.createElement(View, { className: 'at-list__item-icon item-icon' },
                    React__default.createElement(Text, { className: iconClass, style: mergeStyle({
                            color: iconInfo.color || '',
                            fontSize: (iconInfo.size || 24) + "px"
                        }, iconInfo.customStyle || '') }))),
                React__default.createElement(View, { className: 'at-list__item-content item-content' },
                    React__default.createElement(View, { className: 'item-content__info' },
                        React__default.createElement(View, { className: 'item-content__info-title' }, title),
                        note && React__default.createElement(View, { className: 'item-content__info-note' }, note))),
                React__default.createElement(View, { className: 'at-list__item-extra item-extra' },
                    extraText && React__default.createElement(View, { className: 'item-extra__info' }, extraText),
                    extraThumb && !extraText && (React__default.createElement(View, { className: 'item-extra__image' },
                        React__default.createElement(Image, { className: 'item-extra__image-info', mode: 'aspectFit', src: extraThumb }))),
                    isSwitch && !extraThumb && !extraText && (React__default.createElement(View, { className: 'item-extra__switch', onClick: this.handleSwitchClick },
                        React__default.createElement(Switch, { color: switchColor, disabled: disabled, checked: switchIsCheck, onChange: this.handleSwitchChange }))),
                    arrow ? (React__default.createElement(View, { className: 'item-extra__icon' },
                        React__default.createElement(Text, { className: "at-icon item-extra__icon-arrow at-icon-chevron-" + arrow }))) : null))));
    };
    return AtListItem;
}(React__default.Component));
AtListItem.defaultProps = {
    note: '',
    disabled: false,
    title: '',
    thumb: '',
    isSwitch: false,
    hasBorder: true,
    switchColor: '#6190E8',
    switchIsCheck: false,
    extraText: '',
    extraThumb: '',
    iconInfo: { value: '' }
};
AtListItem.propTypes = {
    note: propTypes.string,
    disabled: propTypes.bool,
    title: propTypes.string,
    thumb: propTypes.string,
    onClick: propTypes.func,
    isSwitch: propTypes.bool,
    hasBorder: propTypes.bool,
    switchColor: propTypes.string,
    switchIsCheck: propTypes.bool,
    extraText: propTypes.string,
    extraThumb: propTypes.string,
    onSwitchChange: propTypes.func,
    arrow: propTypes.oneOf(['up', 'down', 'right']),
    iconInfo: propTypes.shape({
        size: propTypes.number,
        value: propTypes.string,
        color: propTypes.string,
        prefixClass: propTypes.string,
        customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
        className: propTypes.oneOfType([propTypes.array, propTypes.string])
    })
};

var AtDrawer = /** @class */ (function (_super) {
    __extends(AtDrawer, _super);
    function AtDrawer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            animShow: false,
            _show: props.show
        };
        return _this;
    }
    AtDrawer.prototype.componentDidMount = function () {
        var _show = this.state._show;
        if (_show)
            this.animShow();
    };
    AtDrawer.prototype.onItemClick = function (index) {
        this.props.onItemClick && this.props.onItemClick(index);
        this.animHide();
    };
    AtDrawer.prototype.onHide = function () {
        var _this = this;
        this.setState({ _show: false }, function () {
            _this.props.onClose && _this.props.onClose();
        });
    };
    AtDrawer.prototype.animHide = function () {
        var _this = this;
        this.setState({
            animShow: false
        });
        setTimeout(function () {
            _this.onHide();
        }, 300);
    };
    AtDrawer.prototype.animShow = function () {
        var _this = this;
        this.setState({ _show: true });
        setTimeout(function () {
            _this.setState({
                animShow: true
            });
        }, 200);
    };
    AtDrawer.prototype.onMaskClick = function () {
        this.animHide();
    };
    AtDrawer.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var show = nextProps.show;
        if (show !== this.state._show) {
            show ? this.animShow() : this.animHide();
        }
    };
    AtDrawer.prototype.render = function () {
        var _this = this;
        var _a = this.props, mask = _a.mask, width = _a.width, right = _a.right, items = _a.items;
        var _b = this.state, animShow = _b.animShow, _show = _b._show;
        var rootClassName = ['at-drawer'];
        var maskStyle = {
            display: mask ? 'block' : 'none',
            opacity: animShow ? 1 : 0
        };
        var listStyle = {
            width: width,
            transition: animShow
                ? 'all 225ms cubic-bezier(0, 0, 0.2, 1)'
                : 'all 195ms cubic-bezier(0.4, 0, 0.6, 1)'
        };
        var classObject = {
            'at-drawer--show': animShow,
            'at-drawer--right': right,
            'at-drawer--left': !right
        };
        return _show ? (React__default.createElement(View, { className: classnames(rootClassName, classObject, this.props.className) },
            React__default.createElement(View, { className: 'at-drawer__mask', style: maskStyle, onClick: this.onMaskClick.bind(this) }),
            React__default.createElement(View, { className: 'at-drawer__content', style: listStyle }, !!items && items.length ? (React__default.createElement(AtList, null, items.map(function (name, index) { return (React__default.createElement(AtListItem, { key: name + "-" + index, "data-index": index, onClick: _this.onItemClick.bind(_this, index), title: name, arrow: 'right' })); }))) : (this.props.children)))) : (React__default.createElement(View, null));
    };
    return AtDrawer;
}(React__default.Component));
AtDrawer.defaultProps = {
    show: false,
    mask: true,
    width: '',
    right: false,
    items: []
};
AtDrawer.propTypes = {
    show: propTypes.bool,
    mask: propTypes.bool,
    width: propTypes.string,
    items: propTypes.arrayOf(propTypes.string),
    onItemClick: propTypes.func,
    onClose: propTypes.func
};

var AtFloatLayout = /** @class */ (function (_super) {
    __extends(AtFloatLayout, _super);
    function AtFloatLayout(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClose = function () {
            if (typeof _this.props.onClose === 'function') {
                // TODO: Fix typings
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                _this.props.onClose();
            }
        };
        _this.close = function () {
            _this.setState({
                _isOpened: false
            }, _this.handleClose);
        };
        _this.handleTouchMove = function (e) {
            e.stopPropagation();
        };
        var isOpened = props.isOpened;
        _this.state = {
            _isOpened: isOpened
        };
        return _this;
    }
    AtFloatLayout.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var isOpened = nextProps.isOpened;
        if (isOpened !== this.state._isOpened) {
            this.setState({
                _isOpened: isOpened
            });
        }
    };
    AtFloatLayout.prototype.render = function () {
        var _isOpened = this.state._isOpened;
        var _a = this.props, title = _a.title, scrollY = _a.scrollY, scrollX = _a.scrollX, scrollTop = _a.scrollTop, scrollLeft = _a.scrollLeft, upperThreshold = _a.upperThreshold, lowerThreshold = _a.lowerThreshold, scrollWithAnimation = _a.scrollWithAnimation;
        var rootClass = classnames('at-float-layout', {
            'at-float-layout--active': _isOpened
        }, this.props.className);
        return (React__default.createElement(View, { className: rootClass, onTouchMove: this.handleTouchMove },
            React__default.createElement(View, { onClick: this.close, className: 'at-float-layout__overlay' }),
            React__default.createElement(View, { className: 'at-float-layout__container layout' },
                title ? (React__default.createElement(View, { className: 'layout-header' },
                    React__default.createElement(Text, { className: 'layout-header__title' }, title),
                    React__default.createElement(View, { className: 'layout-header__btn-close', onClick: this.close }))) : null,
                React__default.createElement(View, { className: 'layout-body' },
                    React__default.createElement(ScrollView, { scrollY: scrollY, scrollX: scrollX, scrollTop: scrollTop, scrollLeft: scrollLeft, upperThreshold: upperThreshold, lowerThreshold: lowerThreshold, scrollWithAnimation: scrollWithAnimation, 
                        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                        // @ts-ignore // TODO: Fix typings
                        onScroll: this.props.onScroll, 
                        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                        // @ts-ignore // TODO: Fix typings
                        onScrollToLower: this.props.onScrollToLower, 
                        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                        // @ts-ignore // TODO: Fix typings
                        onScrollToUpper: this.props.onScrollToUpper, className: 'layout-body__content' }, this.props.children)))));
    };
    return AtFloatLayout;
}(React__default.Component));
AtFloatLayout.defaultProps = {
    title: '',
    isOpened: false,
    scrollY: true,
    scrollX: false,
    scrollWithAnimation: false
};
AtFloatLayout.propTypes = {
    title: propTypes.string,
    isOpened: propTypes.bool,
    scrollY: propTypes.bool,
    scrollX: propTypes.bool,
    scrollTop: propTypes.number,
    scrollLeft: propTypes.number,
    upperThreshold: propTypes.number,
    lowerThreshold: propTypes.number,
    scrollWithAnimation: propTypes.bool,
    onClose: propTypes.func,
    onScroll: propTypes.func,
    onScrollToLower: propTypes.func,
    onScrollToUpper: propTypes.func
};

var AtForm = /** @class */ (function (_super) {
    __extends(AtForm, _super);
    function AtForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtForm.prototype.onSubmit = function () {
        this.props.onSubmit && this.props.onSubmit(arguments);
    };
    AtForm.prototype.onReset = function () {
        this.props.onReset && this.props.onReset(arguments);
    };
    AtForm.prototype.render = function () {
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, reportSubmit = _a.reportSubmit;
        var rootCls = classnames('at-form', className);
        return (React__default.createElement(Form, { className: rootCls, style: customStyle, onSubmit: this.onSubmit.bind(this), reportSubmit: reportSubmit, onReset: this.onReset.bind(this) }, this.props.children));
    };
    return AtForm;
}(React__default.Component));
AtForm.defaultProps = {
    customStyle: '',
    className: '',
    reportSubmit: false
};
AtForm.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    reportSubmit: propTypes.bool,
    onSubmit: propTypes.func,
    onReset: propTypes.func
};

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

var _baseSlice = baseSlice;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString$1;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike_1(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq_1(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_1(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

var toFinite_1 = toFinite;

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite_1(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

var toInteger_1 = toInteger;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size, guard) {
  if ((guard ? _isIterateeCall(array, size, guard) : size === undefined)) {
    size = 1;
  } else {
    size = nativeMax(toInteger_1(size), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
      resIndex = 0,
      result = Array(nativeCeil(length / size));

  while (index < length) {
    result[resIndex++] = _baseSlice(array, index, (index += size));
  }
  return result;
}

var chunk_1 = chunk;

var AtGrid = /** @class */ (function (_super) {
    __extends(AtGrid, _super);
    function AtGrid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (item, index, row, event) {
            var _a = _this.props, onClick = _a.onClick, _b = _a.columnNum, columnNum = _b === void 0 ? 3 : _b;
            if (typeof onClick === 'function') {
                var clickIndex = row * columnNum + index;
                onClick(item, clickIndex, event);
            }
        };
        return _this;
    }
    AtGrid.prototype.render = function () {
        var _this = this;
        var _a = this.props, data = _a.data, mode = _a.mode, _b = _a.columnNum, columnNum = _b === void 0 ? 3 : _b, hasBorder = _a.hasBorder;
        if (Array.isArray(data) && data.length === 0) {
            return null;
        }
        var gridGroup = chunk_1(data, columnNum);
        var bodyClass = classnames(['at-grid__flex-item', 'at-grid-item', "at-grid-item--" + mode], {
            'at-grid-item--no-border': !hasBorder
        });
        return (React__default.createElement(View, { className: classnames('at-grid', this.props.className) }, gridGroup.map(function (item, i) { return (React__default.createElement(View, { className: 'at-grid__flex', key: "at-grid-group-" + i }, item.map(function (childItem, index) {
            var _a;
            return (React__default.createElement(View, { key: "at-grid-item-" + index, className: classnames(bodyClass, {
                    'at-grid-item--last': index === columnNum - 1
                }), onClick: _this.handleClick.bind(_this, childItem, index, i), style: {
                    flex: "0 0 " + 100 / columnNum + "%"
                } },
                React__default.createElement(View, { className: 'at-grid-item__content' },
                    React__default.createElement(View, { className: 'at-grid-item__content-inner' },
                        React__default.createElement(View, { className: 'content-inner__icon' },
                            childItem.image && (React__default.createElement(Image, { className: 'content-inner__img', src: childItem.image, mode: 'scaleToFill' })),
                            childItem.iconInfo && !childItem.image && (React__default.createElement(Text, { className: classnames(childItem.iconInfo.prefixClass || 'at-icon', (_a = {},
                                    _a[(childItem.iconInfo.prefixClass || 'at-icon') + "-" + childItem.iconInfo.value] = childItem
                                        .iconInfo.value,
                                    _a), childItem.iconInfo.className), 
                                // @ts-ignore
                                style: mergeStyle({
                                    color: childItem.iconInfo.color,
                                    fontSize: (childItem.iconInfo.size || 24) + "px"
                                }, 
                                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                                childItem.iconInfo.customStyle) }))),
                        React__default.createElement(Text, { className: 'content-inner__text' }, childItem.value)))));
        }))); })));
    };
    return AtGrid;
}(React__default.Component));
AtGrid.defaultProps = {
    data: [],
    columnNum: 3,
    mode: 'square',
    hasBorder: true
};
AtGrid.propTypes = {
    mode: propTypes.string,
    onClick: propTypes.func,
    hasBorder: propTypes.bool,
    columnNum: propTypes.number,
    data: propTypes.arrayOf(propTypes.shape({
        image: propTypes.string,
        value: propTypes.string,
        iconInfo: propTypes.shape({
            size: propTypes.number,
            value: propTypes.string,
            color: propTypes.string,
            prefixClass: propTypes.string,
            customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
            className: propTypes.oneOfType([propTypes.array, propTypes.string])
        })
    }))
};

var AtIcon = /** @class */ (function (_super) {
    __extends(AtIcon, _super);
    function AtIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtIcon.prototype.handleClick = function () {
        this.props.onClick && this.props.onClick(arguments);
    };
    AtIcon.prototype.render = function () {
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, prefixClass = _a.prefixClass, value = _a.value, size = _a.size, color = _a.color;
        var rootStyle = {
            fontSize: "" + pxTransform(parseInt(String(size)) * 2),
            color: color,
        };
        var iconName = value ? prefixClass + "-" + value : "";
        return (React__default.createElement(Text, { className: classnames(prefixClass, iconName, className), style: mergeStyle(rootStyle, customStyle), onClick: this.handleClick.bind(this) }));
    };
    return AtIcon;
}(React__default.Component));
AtIcon.defaultProps = {
    customStyle: "",
    className: "",
    prefixClass: "at-icon",
    value: "",
    color: "",
    size: 24,
};
AtIcon.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    prefixClass: propTypes.string,
    value: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOfType([propTypes.string, propTypes.number]),
    onClick: propTypes.func,
};

function getInputProps(props) {
    var actualProps = {
        type: props.type,
        maxLength: props.maxlength,
        disabled: props.disabled,
        password: false
    };
    switch (actualProps.type) {
        case 'phone':
            actualProps.type = 'number';
            actualProps.maxLength = 11;
            break;
        case 'password':
            actualProps.type = 'text';
            actualProps.password = true;
            break;
    }
    if (!props.disabled && !props.editable) {
        actualProps.disabled = true;
    }
    return actualProps;
}
var AtInput = /** @class */ (function (_super) {
    __extends(AtInput, _super);
    function AtInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // TODO: 有待考证是否为合理方式处理 #840
        _this.inputClearing = false;
        _this.handleInput = function (event) {
            return _this.props.onChange(event.detail.value, event);
        };
        _this.handleFocus = function (event) {
            if (typeof _this.props.onFocus === 'function') {
                _this.props.onFocus(event.detail.value, event);
            }
        };
        _this.handleBlur = function (event) {
            if (typeof _this.props.onBlur === 'function') {
                _this.props.onBlur(event.detail.value, event);
            }
            if (event.type === 'blur' && !_this.inputClearing) {
                // fix # 583 AtInput 不触发 onChange 的问题
                _this.props.onChange(event.detail.value, event);
            }
            // 还原状态
            _this.inputClearing = false;
        };
        _this.handleConfirm = function (event) {
            if (typeof _this.props.onConfirm === 'function') {
                _this.props.onConfirm(event.detail.value, event);
            }
        };
        _this.handleClick = function (event) {
            if (!_this.props.editable && typeof _this.props.onClick === 'function') {
                _this.props.onClick(event);
            }
        };
        _this.handleClearValue = function (event) {
            _this.inputClearing = true;
            _this.props.onChange('', event);
        };
        _this.handleKeyboardHeightChange = function (event) {
            if (typeof _this.props.onKeyboardHeightChange === 'function') {
                _this.props.onKeyboardHeightChange(event);
            }
        };
        _this.handleErrorClick = function (event) {
            if (typeof _this.props.onErrorClick === 'function') {
                _this.props.onErrorClick(event);
            }
        };
        return _this;
    }
    AtInput.prototype.render = function () {
        var _a = this.props, className = _a.className, customStyle = _a.customStyle, name = _a.name, cursorSpacing = _a.cursorSpacing, confirmType = _a.confirmType, cursor = _a.cursor, selectionStart = _a.selectionStart, selectionEnd = _a.selectionEnd, adjustPosition = _a.adjustPosition, border = _a.border, title = _a.title, error = _a.error, clear = _a.clear, placeholder = _a.placeholder, placeholderStyle = _a.placeholderStyle, placeholderClass = _a.placeholderClass, autoFocus = _a.autoFocus, focus = _a.focus, value = _a.value, required = _a.required;
        var _b = getInputProps(this.props), type = _b.type, maxlength = _b.maxlength, disabled = _b.disabled, password = _b.password;
        var rootCls = classnames('at-input', {
            'at-input--without-border': !border
        }, className);
        var containerCls = classnames('at-input__container', {
            'at-input--error': error,
            'at-input--disabled': disabled
        });
        var overlayCls = classnames('at-input__overlay', {
            'at-input__overlay--hidden': !disabled
        });
        var placeholderCls = classnames('placeholder', placeholderClass);
        return (React__default.createElement(View, { className: rootCls, style: customStyle },
            React__default.createElement(View, { className: containerCls },
                React__default.createElement(View, { className: overlayCls, onClick: this.handleClick }),
                title && (React__default.createElement(Label, { className: "at-input__title " + (required && 'at-input__title--required'), for: name }, title)),
                React__default.createElement(Input, { className: 'at-input__input', id: name, name: name, type: type, password: password, placeholderStyle: placeholderStyle, placeholderClass: placeholderCls, placeholder: placeholder, cursorSpacing: cursorSpacing, maxlength: maxlength, autoFocus: autoFocus, focus: focus, value: value, confirmType: confirmType, cursor: cursor, selectionStart: selectionStart, selectionEnd: selectionEnd, adjustPosition: adjustPosition, onInput: this.handleInput, onFocus: this.handleFocus, onBlur: this.handleBlur, onConfirm: this.handleConfirm, 
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore
                    onKeyboardHeightChange: this.handleKeyboardHeightChange }),
                clear && value && (React__default.createElement(View, { className: 'at-input__icon', onTouchEnd: this.handleClearValue },
                    React__default.createElement(Text, { className: 'at-icon at-icon-close-circle at-input__icon-close' }))),
                error && (React__default.createElement(View, { className: 'at-input__icon', onTouchStart: this.handleErrorClick },
                    React__default.createElement(Text, { className: 'at-icon at-icon-alert-circle at-input__icon-alert' }))),
                React__default.createElement(View, { className: 'at-input__children' }, this.props.children))));
    };
    return AtInput;
}(React__default.Component));
AtInput.defaultProps = {
    className: '',
    customStyle: '',
    value: '',
    name: '',
    placeholder: '',
    placeholderStyle: '',
    placeholderClass: '',
    title: '',
    cursorSpacing: 50,
    confirmType: 'done',
    cursor: 0,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    maxlength: 140,
    type: 'text',
    disabled: false,
    border: true,
    editable: true,
    error: false,
    clear: false,
    autoFocus: false,
    focus: false,
    required: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: function () { }
};
AtInput.propTypes = {
    className: propTypes.oneOfType([propTypes.string, propTypes.array]),
    customStyle: propTypes.oneOfType([propTypes.string, propTypes.object]),
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    name: propTypes.string,
    placeholder: propTypes.string,
    placeholderStyle: propTypes.string,
    placeholderClass: propTypes.string,
    title: propTypes.string,
    confirmType: propTypes.string,
    cursor: propTypes.oneOfType([propTypes.string, propTypes.number]),
    selectionStart: propTypes.oneOfType([propTypes.string, propTypes.number]),
    selectionEnd: propTypes.oneOfType([propTypes.string, propTypes.number]),
    adjustPosition: propTypes.bool,
    cursorSpacing: propTypes.oneOfType([propTypes.string, propTypes.number]),
    maxlength: propTypes.oneOfType([propTypes.string, propTypes.number]),
    type: propTypes.string,
    disabled: propTypes.bool,
    border: propTypes.bool,
    editable: propTypes.bool,
    error: propTypes.bool,
    clear: propTypes.bool,
    autoFocus: propTypes.bool,
    focus: propTypes.bool,
    onChange: propTypes.func,
    onFocus: propTypes.func,
    onBlur: propTypes.func,
    onConfirm: propTypes.func,
    onErrorClick: propTypes.func,
    onClick: propTypes.func,
    required: propTypes.bool
};

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

// TODO: Check all types
// 实现两数相加并保留小数点后最短尾数
function addNum(num1, num2) {
    var sq1, sq2;
    try {
        sq1 = toString_1(num1).split('.')[1].length;
    }
    catch (e) {
        sq1 = 0;
    }
    try {
        sq2 = toString_1(num2).split('.')[1].length;
    }
    catch (e) {
        sq2 = 0;
    }
    var m = Math.pow(10, Math.max(sq1, sq2));
    return (Math.round(num1 * m) + Math.round(num2 * m)) / m;
}
// 格式化数字，处理01变成1,并且不处理1. 这种情况
function parseValue(num) {
    if (num === '')
        return '0';
    var numStr = toString_1(num);
    if (numStr.indexOf('0') === 0 && numStr.indexOf('.') === -1) {
        // 处理01变成1,并且不处理1.
        return toString_1(parseFloat(num));
    }
    return toString_1(num);
}
var AtInputNumber = /** @class */ (function (_super) {
    __extends(AtInputNumber, _super);
    function AtInputNumber() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleValue = function (value) {
            var _a = _this.props, _b = _a.max, max = _b === void 0 ? 100 : _b, _c = _a.min, min = _c === void 0 ? 0 : _c;
            var resultValue = value === '' ? min : value;
            // 此处不能使用 Math.max，会是字符串变数字，并丢失 .
            if (resultValue > max) {
                resultValue = max;
                _this.handleError({
                    type: 'OVER',
                    errorValue: resultValue
                });
            }
            if (resultValue < min) {
                resultValue = min;
                _this.handleError({
                    type: 'LOW',
                    errorValue: resultValue
                });
            }
            if (resultValue && !Number(resultValue)) {
                resultValue = parseFloat(String(resultValue)) || min;
                _this.handleError({
                    type: 'OVER',
                    errorValue: resultValue
                });
            }
            resultValue = parseValue(String(resultValue));
            return resultValue;
        };
        _this.handleInput = function (e) {
            var value = e.target.value;
            var disabled = _this.props.disabled;
            if (disabled)
                return '';
            var newValue = _this.handleValue(value);
            _this.props.onChange(Number(newValue), e);
            return newValue;
        };
        _this.handleBlur = function (event) {
            return _this.props.onBlur && _this.props.onBlur(event);
        };
        _this.handleError = function (errorValue) {
            if (!_this.props.onErrorInput) {
                return;
            }
            _this.props.onErrorInput(errorValue);
        };
        return _this;
    }
    AtInputNumber.prototype.handleClick = function (clickType, e) {
        var _a = this.props, disabled = _a.disabled, value = _a.value, _b = _a.min, min = _b === void 0 ? 0 : _b, _c = _a.max, max = _c === void 0 ? 100 : _c, _d = _a.step, step = _d === void 0 ? 1 : _d;
        var lowThanMin = clickType === 'minus' && value <= min;
        var overThanMax = clickType === 'plus' && value >= max;
        if (lowThanMin || overThanMax || disabled) {
            var deltaValue_1 = clickType === 'minus' ? -step : step;
            var errorValue = addNum(Number(value), deltaValue_1);
            if (disabled) {
                this.handleError({
                    type: 'DISABLED',
                    errorValue: errorValue
                });
            }
            else {
                this.handleError({
                    type: lowThanMin ? 'LOW' : 'OVER',
                    errorValue: errorValue
                });
            }
            return;
        }
        var deltaValue = clickType === 'minus' ? -step : step;
        var newValue = addNum(Number(value), deltaValue);
        newValue = Number(this.handleValue(newValue));
        this.props.onChange(newValue, e);
    };
    AtInputNumber.prototype.render = function () {
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, width = _a.width, disabled = _a.disabled, value = _a.value, type = _a.type, _b = _a.min, min = _b === void 0 ? 0 : _b, _c = _a.max, max = _c === void 0 ? 100 : _c, size = _a.size, disabledInput = _a.disabledInput;
        var inputStyle = {
            width: width ? "" + pxTransform(width) : ''
        };
        var inputValue = Number(this.handleValue(value));
        var rootCls = classnames('at-input-number', {
            'at-input-number--lg': size === 'large'
        }, className);
        var minusBtnCls = classnames('at-input-number__btn', {
            'at-input-number--disabled': inputValue <= min || disabled
        });
        var plusBtnCls = classnames('at-input-number__btn', {
            'at-input-number--disabled': inputValue >= max || disabled
        });
        return (React__default.createElement(View, { className: rootCls, style: customStyle },
            React__default.createElement(View, { className: minusBtnCls, onClick: this.handleClick.bind(this, 'minus') },
                React__default.createElement(Text, { className: 'at-icon at-icon-subtract at-input-number__btn-subtract' })),
            React__default.createElement(Input, { className: 'at-input-number__input', style: inputStyle, type: type, value: String(inputValue), disabled: disabledInput || disabled, onInput: this.handleInput, onBlur: this.handleBlur }),
            React__default.createElement(View, { className: plusBtnCls, onClick: this.handleClick.bind(this, 'plus') },
                React__default.createElement(Text, { className: 'at-icon at-icon-add at-input-number__btn-add' }))));
    };
    return AtInputNumber;
}(React__default.Component));
AtInputNumber.defaultProps = {
    customStyle: '',
    className: '',
    disabled: false,
    disabledInput: false,
    value: 1,
    type: 'number',
    width: 0,
    min: 0,
    max: 100,
    step: 1,
    size: 'normal',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: function () { }
};
AtInputNumber.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    value: propTypes.oneOfType([propTypes.number, propTypes.string]),
    type: propTypes.oneOf(['number', 'digit']),
    disabled: propTypes.bool,
    width: propTypes.number,
    min: propTypes.number,
    max: propTypes.number,
    step: propTypes.number,
    size: propTypes.oneOf(['normal', 'large']),
    disabledInput: propTypes.bool,
    onChange: propTypes.func,
    onBlur: propTypes.func,
    onErrorInput: propTypes.func
};

var AtModalAction = /** @class */ (function (_super) {
    __extends(AtModalAction, _super);
    function AtModalAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtModalAction.prototype.render = function () {
        var rootClass = classnames('at-modal__footer', {
            'at-modal__footer--simple': this.props.isSimple
        }, this.props.className);
        return (React__default.createElement(View, { className: rootClass },
            React__default.createElement(View, { className: 'at-modal__action' }, this.props.children)));
    };
    return AtModalAction;
}(React__default.Component));
AtModalAction.defaultProps = {
    isSimple: false
};
AtModalAction.propTypes = {
    isSimple: propTypes.bool
};

var AtModalContent = /** @class */ (function (_super) {
    __extends(AtModalContent, _super);
    function AtModalContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtModalContent.prototype.render = function () {
        var rootClass = classnames('at-modal__content', this.props.className);
        return (React__default.createElement(ScrollView, { scrollY: true, className: rootClass }, this.props.children));
    };
    return AtModalContent;
}(React__default.Component));

var AtModalHeader = /** @class */ (function (_super) {
    __extends(AtModalHeader, _super);
    function AtModalHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtModalHeader.prototype.render = function () {
        var rootClass = classnames('at-modal__header', this.props.className);
        return React__default.createElement(View, { className: rootClass }, this.props.children);
    };
    return AtModalHeader;
}(React__default.Component));

var AtModal = /** @class */ (function (_super) {
    __extends(AtModal, _super);
    function AtModal(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClickOverlay = function () {
            if (_this.props.closeOnClickOverlay) {
                _this.setState({
                    _isOpened: false,
                }, _this.handleClose);
            }
        };
        _this.handleClose = function (event) {
            if (typeof _this.props.onClose === "function") {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                _this.props.onClose(event);
            }
        };
        _this.handleCancel = function (event) {
            if (typeof _this.props.onCancel === "function") {
                _this.props.onCancel(event);
            }
        };
        _this.handleConfirm = function (event) {
            if (typeof _this.props.onConfirm === "function") {
                _this.props.onConfirm(event);
            }
        };
        _this.handleTouchMove = function (e) {
            e.stopPropagation();
        };
        var isOpened = props.isOpened;
        _this.state = {
            _isOpened: isOpened,
        };
        return _this;
    }
    AtModal.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var isOpened = nextProps.isOpened;
        if (isOpened !== this.state._isOpened) {
            this.setState({
                _isOpened: isOpened,
            });
        }
    };
    AtModal.prototype.render = function () {
        var _isOpened = this.state._isOpened;
        var _a = this.props, title = _a.title, content = _a.content, cancelText = _a.cancelText, confirmText = _a.confirmText;
        var rootClass = classnames("at-modal", {
            "at-modal--active": _isOpened,
        }, this.props.className);
        if (title || content) {
            var isRenderAction = cancelText || confirmText;
            return (React__default.createElement(View, { className: rootClass },
                React__default.createElement(View, { onClick: this.handleClickOverlay, className: "at-modal__overlay" }),
                React__default.createElement(View, { className: "at-modal__container" },
                    title && (React__default.createElement(AtModalHeader, null,
                        React__default.createElement(Text, null, title))),
                    content && (React__default.createElement(AtModalContent, null,
                        React__default.createElement(View, { className: "content-simple" },
                            React__default.createElement(Text, null, content)))),
                    isRenderAction && (React__default.createElement(AtModalAction, { isSimple: true },
                        cancelText && (React__default.createElement(Button, { onClick: this.handleCancel }, cancelText)),
                        confirmText && (React__default.createElement(Button, { onClick: this.handleConfirm }, confirmText)))))));
        }
        return (React__default.createElement(View, { onTouchMove: this.handleTouchMove, className: rootClass },
            React__default.createElement(View, { className: "at-modal__overlay", onClick: this.handleClickOverlay }),
            React__default.createElement(View, { className: "at-modal__container" }, this.props.children)));
    };
    return AtModal;
}(React__default.Component));
AtModal.defaultProps = {
    isOpened: false,
    closeOnClickOverlay: true,
};
AtModal.propTypes = {
    title: propTypes.string,
    isOpened: propTypes.bool,
    onCancel: propTypes.func,
    onConfirm: propTypes.func,
    onClose: propTypes.func,
    content: propTypes.string,
    closeOnClickOverlay: propTypes.bool,
    cancelText: propTypes.string,
    confirmText: propTypes.string,
};

var AtNavBar = /** @class */ (function (_super) {
    __extends(AtNavBar, _super);
    function AtNavBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtNavBar.prototype.handleClickLeftView = function (event) {
        this.props.onClickLeftIcon && this.props.onClickLeftIcon(event);
    };
    AtNavBar.prototype.handleClickSt = function (event) {
        this.props.onClickRgIconSt && this.props.onClickRgIconSt(event);
    };
    AtNavBar.prototype.handleClickNd = function (event) {
        this.props.onClickRgIconNd && this.props.onClickRgIconNd(event);
    };
    AtNavBar.prototype.render = function () {
        var _a, _b, _c;
        var _d = this.props, customStyle = _d.customStyle, className = _d.className, color = _d.color, fixed = _d.fixed, border = _d.border, leftIconType = _d.leftIconType, leftText = _d.leftText, title = _d.title, rightFirstIconType = _d.rightFirstIconType, rightSecondIconType = _d.rightSecondIconType;
        var linkStyle = { color: color };
        var defaultIconInfo = {
            customStyle: '',
            className: '',
            prefixClass: 'at-icon',
            value: '',
            color: '',
            size: 24
        };
        var leftIconInfo = leftIconType instanceof Object
            ? __assign(__assign({}, defaultIconInfo), leftIconType) : __assign(__assign({}, defaultIconInfo), { value: leftIconType });
        var leftIconClass = classnames(leftIconInfo.prefixClass, (_a = {},
            _a[leftIconInfo.prefixClass + "-" + leftIconInfo.value] = leftIconInfo.value,
            _a), leftIconInfo.className);
        var rightFirstIconInfo = rightFirstIconType instanceof Object
            ? __assign(__assign({}, defaultIconInfo), rightFirstIconType) : __assign(__assign({}, defaultIconInfo), { value: rightFirstIconType });
        var rightFirstIconClass = classnames(rightFirstIconInfo.prefixClass, (_b = {},
            _b[rightFirstIconInfo.prefixClass + "-" + rightFirstIconInfo.value] = rightFirstIconInfo.value,
            _b), rightFirstIconInfo.className);
        var rightSecondIconInfo = rightSecondIconType instanceof Object
            ? __assign(__assign({}, defaultIconInfo), rightSecondIconType) : __assign(__assign({}, defaultIconInfo), { value: rightSecondIconType });
        var rightSecondIconClass = classnames(rightSecondIconInfo.prefixClass, (_c = {},
            _c[rightSecondIconInfo.prefixClass + "-" + rightSecondIconInfo.value] = rightSecondIconInfo.value,
            _c), rightSecondIconInfo.className);
        return (React__default.createElement(View, { className: classnames({
                'at-nav-bar': true,
                'at-nav-bar--fixed': fixed,
                'at-nav-bar--no-border': !border
            }, className), style: customStyle },
            React__default.createElement(View, { className: 'at-nav-bar__left-view', onClick: this.handleClickLeftView.bind(this), style: linkStyle },
                leftIconType && (React__default.createElement(Text, { className: leftIconClass, style: mergeStyle({
                        color: leftIconInfo.color,
                        fontSize: "" + pxTransform(parseInt(leftIconInfo.size.toString()) * 2)
                    }, leftIconInfo.customStyle) })),
                React__default.createElement(Text, { className: 'at-nav-bar__text' }, leftText)),
            React__default.createElement(View, { className: 'at-nav-bar__title' }, title || this.props.children),
            React__default.createElement(View, { className: 'at-nav-bar__right-view' },
                React__default.createElement(View, { className: classnames({
                        'at-nav-bar__container': true,
                        'at-nav-bar__container--hide': !rightSecondIconType
                    }), style: linkStyle, onClick: this.handleClickNd.bind(this) }, rightSecondIconType && (React__default.createElement(Text, { className: rightSecondIconClass, style: mergeStyle({
                        color: rightSecondIconInfo.color,
                        fontSize: "" + pxTransform(parseInt(rightSecondIconInfo.size.toString()) * 2)
                    }, rightSecondIconInfo.customStyle) }))),
                React__default.createElement(View, { className: classnames({
                        'at-nav-bar__container': true,
                        'at-nav-bar__container--hide': !rightFirstIconType
                    }), style: linkStyle, onClick: this.handleClickSt.bind(this) }, rightFirstIconType && (React__default.createElement(Text, { className: rightFirstIconClass, style: mergeStyle({
                        color: rightFirstIconInfo.color,
                        fontSize: "" + pxTransform(parseInt(rightFirstIconInfo.size.toString()) * 2)
                    }, rightFirstIconInfo.customStyle) }))))));
    };
    return AtNavBar;
}(React__default.Component));
AtNavBar.defaultProps = {
    customStyle: '',
    className: '',
    fixed: false,
    border: true,
    color: '',
    leftIconType: '',
    leftText: '',
    title: '',
    rightFirstIconType: '',
    rightSecondIconType: ''
};
AtNavBar.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    fixed: propTypes.bool,
    border: propTypes.bool,
    color: propTypes.string,
    leftIconType: propTypes.oneOfType([propTypes.string, propTypes.object]),
    leftText: propTypes.string,
    title: propTypes.string,
    rightFirstIconType: propTypes.oneOfType([propTypes.string, propTypes.object]),
    rightSecondIconType: propTypes.oneOfType([
        propTypes.string,
        propTypes.object
    ]),
    onClickLeftIcon: propTypes.func,
    onClickRgIconSt: propTypes.func,
    onClickRgIconNd: propTypes.func
};

var MIN_MAXPAGE = 1;
var getMaxPage = function (maxPage) {
    if (maxPage === void 0) { maxPage = 0; }
    if (maxPage <= 0)
        return MIN_MAXPAGE;
    return maxPage;
};
var createPickerRange = function (max) {
    var range = new Array(max).fill(0).map(function (_val, index) { return index + 1; });
    return range;
};
var AtPagination = /** @class */ (function (_super) {
    __extends(AtPagination, _super);
    function AtPagination(props) {
        var _this = _super.call(this, props) || this;
        var _a = _this.props, current = _a.current, _b = _a.pageSize, pageSize = _b === void 0 ? 20 : _b, total = _a.total;
        var maxPage = getMaxPage(Math.ceil(total / pageSize));
        _this.state = {
            currentPage: current || 1,
            maxPage: maxPage,
            pickerRange: createPickerRange(maxPage)
        };
        return _this;
    }
    AtPagination.prototype.onPrev = function () {
        var currentPage = this.state.currentPage;
        var originCur = currentPage;
        currentPage -= 1;
        currentPage = Math.max(1, currentPage);
        if (originCur === currentPage)
            return;
        this.props.onPageChange &&
            this.props.onPageChange({ type: 'prev', current: currentPage });
        this.setState({ currentPage: currentPage });
    };
    AtPagination.prototype.onNext = function () {
        var currentPage = this.state.currentPage;
        var originCur = currentPage;
        var maxPage = this.state.maxPage;
        currentPage += 1;
        currentPage = Math.min(maxPage, currentPage);
        if (originCur === currentPage)
            return;
        this.props.onPageChange &&
            this.props.onPageChange({ type: 'next', current: currentPage });
        this.setState({ currentPage: currentPage });
    };
    AtPagination.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        var total = props.total, _a = props.pageSize, pageSize = _a === void 0 ? 20 : _a, current = props.current;
        var maxPage = getMaxPage(Math.ceil(total / pageSize));
        if (maxPage !== this.state.maxPage) {
            this.setState({
                maxPage: maxPage,
                pickerRange: createPickerRange(maxPage)
            });
        }
        if (typeof current === 'number' && current !== this.state.currentPage) {
            this.setState({ currentPage: current });
        }
    };
    // onPickerChange (evt) {
    //   const { value } = evt.detail
    //   const current = +value + 1
    //   if (current === this.state.currentPage) return
    //   this.props.onPageChange && this.props.onPageChange({ type: 'pick', current })
    //   this.setState({
    //     currentPage: current,
    //   })
    // }
    AtPagination.prototype.render = function () {
        var _a = this.props, icon = _a.icon, 
        // pickerSelect,
        customStyle = _a.customStyle;
        var _b = this.state, currentPage = _b.currentPage, maxPage = _b.maxPage
        // pickerRange,
        ;
        var rootClassName = ['at-pagination'];
        var prevDisabled = maxPage === MIN_MAXPAGE || currentPage === 1;
        var nextDisabled = maxPage === MIN_MAXPAGE || currentPage === maxPage;
        var classObject = {
            'at-pagination--icon': icon
        };
        return (React__default.createElement(View, { className: classnames(rootClassName, classObject, this.props.className), style: customStyle },
            React__default.createElement(View, { className: 'at-pagination__btn-prev' },
                icon && (React__default.createElement(AtButton, { onClick: this.onPrev.bind(this), size: 'small', disabled: prevDisabled },
                    React__default.createElement(Text, { className: 'at-icon at-icon-chevron-left' }))),
                !icon && (React__default.createElement(AtButton, { onClick: this.onPrev.bind(this), size: 'small', disabled: prevDisabled }, "\u4E0A\u4E00\u9875"))),
            React__default.createElement(View, { className: 'at-pagination__number' },
                React__default.createElement(Text, { className: 'at-pagination__number-current' }, currentPage),
                "/",
                maxPage),
            React__default.createElement(View, { className: 'at-pagination__btn-next' },
                icon && (React__default.createElement(AtButton, { onClick: this.onNext.bind(this), size: 'small', disabled: nextDisabled },
                    React__default.createElement(Text, { className: 'at-icon at-icon-chevron-right' }))),
                !icon && (React__default.createElement(AtButton, { onClick: this.onNext.bind(this), size: 'small', disabled: nextDisabled }, "\u4E0B\u4E00\u9875")))));
    };
    return AtPagination;
}(React__default.Component));
AtPagination.defaultProps = {
    current: 1,
    total: 0,
    pageSize: 20,
    icon: false,
    customStyle: {}
};
AtPagination.propTypes = {
    current: propTypes.number,
    total: propTypes.number,
    pageSize: propTypes.number,
    icon: propTypes.bool,
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    onPageChange: propTypes.func
};

var AtProgress = /** @class */ (function (_super) {
    __extends(AtProgress, _super);
    function AtProgress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtProgress.prototype.render = function () {
        var _a;
        var color = this.props.color;
        var percent = this.props.percent;
        var _b = this.props, strokeWidth = _b.strokeWidth, status = _b.status, isHidePercent = _b.isHidePercent;
        if (typeof percent !== 'number') {
            percent = 0;
        }
        if (percent < 0) {
            percent = 0;
        }
        else if (percent > 100) {
            percent = 100;
        }
        var rootClass = classnames('at-progress', (_a = {},
            _a["at-progress--" + status] = !!status,
            _a), this.props.className);
        var iconClass = classnames('at-icon', {
            'at-icon-close-circle': status === 'error',
            'at-icon-check-circle': status === 'success'
        });
        var progressStyle = {
            width: percent && +percent + "%",
            height: strokeWidth && +strokeWidth + "px",
            backgroundColor: color
        };
        return (React__default.createElement(View, { className: rootClass },
            React__default.createElement(View, { className: 'at-progress__outer' },
                React__default.createElement(View, { className: 'at-progress__outer-inner' },
                    React__default.createElement(View, { className: 'at-progress__outer-inner-background', style: progressStyle }))),
            !isHidePercent && (React__default.createElement(View, { className: 'at-progress__content' }, !status || status === 'progress' ? (percent + "%") : (React__default.createElement(Text, { className: iconClass }))))));
    };
    return AtProgress;
}(React__default.Component));
AtProgress.propTypes = {
    color: propTypes.string,
    status: propTypes.string,
    percent: propTypes.number,
    strokeWidth: propTypes.number,
    isHidePercent: propTypes.bool
};

var AtRadio = /** @class */ (function (_super) {
    __extends(AtRadio, _super);
    function AtRadio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtRadio.prototype.handleClick = function (option, event) {
        if (option.disabled)
            return;
        this.props.onClick(option.value, event);
    };
    AtRadio.prototype.render = function () {
        var _this = this;
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, options = _a.options, value = _a.value;
        return (React__default.createElement(View, { className: classnames('at-radio', className), style: customStyle }, options.map(function (option) { return (React__default.createElement(View, { key: option.value, onClick: _this.handleClick.bind(_this, option), className: classnames({
                'at-radio__option': true,
                'at-radio__option--disabled': option.disabled
            }) },
            React__default.createElement(View, { className: 'at-radio__option-wrap' },
                React__default.createElement(View, { className: 'at-radio__option-container' },
                    React__default.createElement(View, { className: 'at-radio__title' }, option.label),
                    React__default.createElement(View, { className: classnames({
                            'at-radio__icon': true,
                            'at-radio__icon--checked': value === option.value
                        }) },
                        React__default.createElement(Text, { className: 'at-icon at-icon-check' }))),
                option.desc && (React__default.createElement(View, { className: 'at-radio__desc' }, option.desc))))); })));
    };
    return AtRadio;
}(React__default.Component));
AtRadio.defaultProps = {
    customStyle: '',
    className: '',
    value: '',
    options: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: function () { }
};
AtRadio.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    value: propTypes.string,
    options: propTypes.array,
    onClick: propTypes.func
};

var AtRate = /** @class */ (function (_super) {
    __extends(AtRate, _super);
    function AtRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtRate.prototype.handleClick = function (event) {
        this.props.onChange && this.props.onChange(event);
    };
    AtRate.prototype.render = function () {
        var _this = this;
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, _b = _a.value, value = _b === void 0 ? 0 : _b, _c = _a.max, max = _c === void 0 ? 5 : _c, size = _a.size, _d = _a.margin, margin = _d === void 0 ? 5 : _d;
        var iconStyle = {
            marginRight: pxTransform(margin)
        };
        var starIconStyle = {
            fontSize: size ? size + "px" : ''
        };
        // 生成星星颜色 className 数组，方便在jsx中直接map
        var classNameArr = [];
        var floorValue = Math.floor(value);
        var ceilValue = Math.ceil(value);
        for (var i = 0; i < max; i++) {
            if (floorValue > i) {
                classNameArr.push('at-rate__icon at-rate__icon--on');
            }
            else if (ceilValue - 1 === i) {
                classNameArr.push('at-rate__icon at-rate__icon--half');
            }
            else {
                classNameArr.push('at-rate__icon at-rate__icon--off');
            }
        }
        return (React__default.createElement(View, { className: classnames('at-rate', className), style: customStyle }, classNameArr.map(function (cls, i) { return (React__default.createElement(View, { className: cls, key: "at-rate-star-" + i, style: iconStyle, onClick: _this.handleClick.bind(_this, i + 1) },
            React__default.createElement(Text, { className: 'at-icon at-icon-star-2', style: starIconStyle }),
            React__default.createElement(View, { className: 'at-rate__left' },
                React__default.createElement(Text, { className: 'at-icon at-icon-star-2', style: starIconStyle })))); })));
    };
    return AtRate;
}(React__default.Component));
AtRate.defaultProps = {
    customStyle: '',
    className: '',
    size: 0,
    value: 0,
    max: 5,
    margin: 5
};
AtRate.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    size: propTypes.oneOfType([propTypes.string, propTypes.number]),
    value: propTypes.number,
    max: propTypes.number,
    margin: propTypes.number,
    onChange: propTypes.func
};

var AtSegmentedControl = /** @class */ (function (_super) {
    __extends(AtSegmentedControl, _super);
    function AtSegmentedControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtSegmentedControl.prototype.handleClick = function (index, event) {
        if (this.props.disabled)
            return;
        this.props.onClick(index, event);
    };
    AtSegmentedControl.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.customStyle, customStyle = _b === void 0 ? '' : _b, className = _a.className, disabled = _a.disabled, values = _a.values, selectedColor = _a.selectedColor, current = _a.current, color = _a.color, _c = _a.fontSize, fontSize = _c === void 0 ? 28 : _c;
        var rootStyle = {
            borderColor: selectedColor
        };
        var itemStyle = {
            color: selectedColor,
            fontSize: pxTransform(fontSize),
            borderColor: selectedColor,
            backgroundColor: color
        };
        var selectedItemStyle = {
            color: color,
            fontSize: pxTransform(fontSize),
            borderColor: selectedColor,
            backgroundColor: selectedColor
        };
        var rootCls = classnames('at-segmented-control', {
            'at-segmented-control--disabled': disabled
        }, className);
        return (React__default.createElement(View, { className: rootCls, style: mergeStyle(rootStyle, customStyle) }, values.map(function (value, i) { return (React__default.createElement(View, { className: classnames('at-segmented-control__item', {
                'at-segmented-control__item--active': current === i
            }), style: current === i ? selectedItemStyle : itemStyle, key: value, onClick: _this.handleClick.bind(_this, i) }, value)); })));
    };
    return AtSegmentedControl;
}(React__default.Component));
AtSegmentedControl.defaultProps = {
    customStyle: '',
    className: '',
    current: 0,
    color: '',
    fontSize: 28,
    disabled: false,
    selectedColor: '',
    values: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: function () { }
};
AtSegmentedControl.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    current: propTypes.number,
    color: propTypes.string,
    fontSize: propTypes.oneOfType([propTypes.string, propTypes.number]),
    disabled: propTypes.bool,
    values: propTypes.array,
    onClick: propTypes.func
};

var AtSwitch = /** @class */ (function (_super) {
    __extends(AtSwitch, _super);
    function AtSwitch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (event) {
            var _a = event.detail, value = _a.value, checked = _a.checked;
            var state = typeof value === 'undefined' ? checked : value;
            _this.props.onChange && _this.props.onChange(state);
        };
        return _this;
    }
    AtSwitch.prototype.render = function () {
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, disabled = _a.disabled, border = _a.border, title = _a.title, checked = _a.checked, color = _a.color;
        var rootCls = classnames('at-switch', {
            'at-switch--without-border': !border
        }, className);
        var containerCls = classnames('at-switch__container', {
            'at-switch--disabled': disabled
        });
        return (React__default.createElement(View, { className: rootCls, style: customStyle },
            React__default.createElement(View, { className: 'at-switch__title' }, title),
            React__default.createElement(View, { className: containerCls },
                React__default.createElement(View, { className: 'at-switch__mask' }),
                React__default.createElement(Switch, { className: 'at-switch__switch', checked: checked, color: color, onChange: this.handleChange }))));
    };
    return AtSwitch;
}(React__default.Component));
AtSwitch.defaultProps = {
    customStyle: '',
    className: '',
    title: '',
    color: '#6190e8',
    border: true,
    disabled: false,
    checked: false
};
AtSwitch.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    title: propTypes.string,
    color: propTypes.string,
    checked: propTypes.bool,
    border: propTypes.bool,
    disabled: propTypes.bool,
    onChange: propTypes.func
};

var AtTabBar = /** @class */ (function (_super) {
    __extends(AtTabBar, _super);
    function AtTabBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtTabBar.prototype.handleClick = function (index, event) {
        this.props.onClick(index, event);
    };
    AtTabBar.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.customStyle, customStyle = _b === void 0 ? "" : _b, className = _a.className, fixed = _a.fixed, backgroundColor = _a.backgroundColor, tabList = _a.tabList, current = _a.current, color = _a.color, iconSize = _a.iconSize, fontSize = _a.fontSize, selectedColor = _a.selectedColor;
        // const { isIPhoneX } = this.state
        var defaultStyle = {
            color: color || "",
        };
        var selectedStyle = {
            color: selectedColor || "",
        };
        var titleStyle = {
            fontSize: fontSize ? fontSize + "px" : "",
        };
        var rootStyle = {
            backgroundColor: backgroundColor || "",
        };
        var imgStyle = {
            width: iconSize + "px",
            height: iconSize + "px",
        };
        return (React__default.createElement(View, { className: classnames({
                "at-tab-bar": true,
                "at-tab-bar--fixed": fixed,
            }, className), style: mergeStyle(rootStyle, customStyle) }, tabList.map(function (item, i) {
            var _a;
            return (React__default.createElement(View, { className: classnames("at-tab-bar__item", {
                    "at-tab-bar__item--active": current === i,
                }), style: current === i ? selectedStyle : defaultStyle, key: item.title, onClick: _this.handleClick.bind(_this, i) },
                item.iconType ? (React__default.createElement(AtBadge, { dot: !!item.dot, value: item.text, maxValue: Number(item.max) },
                    React__default.createElement(View, { className: "at-tab-bar__icon" },
                        React__default.createElement(Text, { className: classnames("" + (item.iconPrefixClass || "at-icon"), (_a = {},
                                _a[(item.iconPrefixClass || "at-icon") + "-" + item.selectedIconType] = current === i && item.selectedIconType,
                                _a[(item.iconPrefixClass || "at-icon") + "-" + item.iconType] = !(current === i && item.selectedIconType),
                                _a)), style: {
                                color: current === i ? selectedColor : color,
                                fontSize: iconSize ? iconSize + "px" : "",
                            } })))) : null,
                item.image ? (React__default.createElement(AtBadge, { dot: !!item.dot, value: item.text, maxValue: Number(item.max) },
                    React__default.createElement(View, { className: "at-tab-bar__icon" },
                        React__default.createElement(Image, { className: classnames("at-tab-bar__inner-img", {
                                "at-tab-bar__inner-img--inactive": current !== i,
                            }), mode: "widthFix", src: item.selectedImage || item.image, style: imgStyle }),
                        React__default.createElement(Image, { className: classnames("at-tab-bar__inner-img", {
                                "at-tab-bar__inner-img--inactive": current === i,
                            }), mode: "widthFix", src: item.image, style: imgStyle })))) : null,
                React__default.createElement(View, null,
                    React__default.createElement(AtBadge, { dot: item.iconType || item.image ? false : !!item.dot, value: item.iconType || item.image ? "" : item.text, maxValue: item.iconType || item.image ? 0 : Number(item.max) },
                        React__default.createElement(View, { className: "at-tab-bar__title", style: titleStyle }, item.title)))));
        })));
    };
    return AtTabBar;
}(React__default.Component));
AtTabBar.defaultProps = {
    customStyle: "",
    className: "",
    fixed: false,
    current: 0,
    tabList: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: function () { },
};
AtTabBar.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    fixed: propTypes.bool,
    backgroundColor: propTypes.string,
    current: propTypes.number,
    iconSize: propTypes.oneOfType([propTypes.number, propTypes.string]),
    fontSize: propTypes.oneOfType([propTypes.number, propTypes.string]),
    color: propTypes.string,
    selectedColor: propTypes.string,
    tabList: propTypes.array,
    onClick: propTypes.func,
};

var MIN_DISTANCE = 100;
var MAX_INTERVAL = 10;
var AtTabs = /** @class */ (function (_super) {
    __extends(AtTabs, _super);
    function AtTabs(props) {
        var _this = _super.call(this, props) || this;
        _this.updateState = function (idx) {
            if (_this.props.scroll) {
                // 标签栏滚动
                var index = Math.max(idx - 1, 0);
                _this.setState({
                    _scrollIntoView: "tab" + _this._tabId + index,
                });
            }
        };
        _this.state = {
            _scrollLeft: 0,
            _scrollTop: 0,
            _scrollIntoView: "",
        };
        _this._tabId = isTest() ? "tabs-AOTU2018" : uuid();
        // 触摸时的原点
        _this._touchDot = 0;
        // 定时器
        _this._timer = null;
        // 滑动时间间隔
        _this._interval = 0;
        // 是否已经在滑动
        _this._isMoving = false;
        return _this;
    }
    AtTabs.prototype.handleClick = function (index, event) {
        this.props.onClick(index, event);
    };
    AtTabs.prototype.handleTouchStart = function (e) {
        var _this = this;
        var _a = this.props, swipeable = _a.swipeable, tabDirection = _a.tabDirection;
        if (!swipeable || tabDirection === "vertical")
            return;
        // 获取触摸时的原点
        this._touchDot = e.touches[0].pageX;
        // 使用js计时器记录时间
        this._timer = setInterval(function () {
            _this._interval++;
        }, 100);
    };
    AtTabs.prototype.handleTouchMove = function (e) {
        var _a = this.props, swipeable = _a.swipeable, tabDirection = _a.tabDirection, current = _a.current, tabList = _a.tabList;
        if (!swipeable || tabDirection === "vertical")
            return;
        var touchMove = e.touches[0].pageX;
        var moveDistance = touchMove - this._touchDot;
        var maxIndex = tabList.length;
        if (!this._isMoving &&
            this._interval < MAX_INTERVAL &&
            this._touchDot > 20) {
            // 向左滑动
            if (current + 1 < maxIndex && moveDistance <= -MIN_DISTANCE) {
                this._isMoving = true;
                this.handleClick(current + 1, e);
                // 向右滑动
            }
            else if (current - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
                this._isMoving = true;
                this.handleClick(current - 1, e);
            }
        }
    };
    AtTabs.prototype.handleTouchEnd = function () {
        var _a = this.props, swipeable = _a.swipeable, tabDirection = _a.tabDirection;
        if (!swipeable || tabDirection === "vertical")
            return;
        clearInterval(this._timer);
        this._interval = 0;
        this._isMoving = false;
    };
    AtTabs.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (nextProps.current !== this.props.current) {
            this.updateState(nextProps.current);
        }
    };
    AtTabs.prototype.componentDidMount = function () {
        this.updateState(this.props.current);
    };
    AtTabs.prototype.componentWillUnmount = function () { };
    AtTabs.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, _c = _b.customStyle, customStyle = _c === void 0 ? "" : _c, className = _b.className, height = _b.height, tabDirection = _b.tabDirection, animated = _b.animated, tabList = _b.tabList, scroll = _b.scroll, current = _b.current;
        var _d = this.state, _scrollLeft = _d._scrollLeft, _scrollTop = _d._scrollTop, _scrollIntoView = _d._scrollIntoView;
        var heightStyle = { height: height };
        var underlineStyle = {
            height: tabDirection === "vertical" ? tabList.length * 100 + "%" : "1PX",
            width: tabDirection === "horizontal" ? tabList.length * 100 + "%" : "1PX",
        };
        var bodyStyle = {};
        var transformStyle = "translate3d(0px, -" + current * 100 + "%, 0px)";
        if (tabDirection === "horizontal") {
            transformStyle = "translate3d(-" + current * 100 + "%, 0px, 0px)";
        }
        Object.assign(bodyStyle, {
            transform: transformStyle,
            "-webkit-transform": transformStyle,
        });
        if (!animated) {
            bodyStyle.transition = "unset";
        }
        var tabItems = tabList.map(function (item, idx) {
            var itemCls = classnames({
                "at-tabs__item": true,
                "at-tabs__item--active": current === idx,
            });
            return (React__default.createElement(View, { className: itemCls, id: "tab" + _this._tabId + idx, key: item.title, onClick: _this.handleClick.bind(_this, idx) },
                item.title,
                React__default.createElement(View, { className: "at-tabs__item-underline" })));
        });
        var rootCls = classnames((_a = {
                "at-tabs": true,
                "at-tabs--scroll": scroll
            },
            _a["at-tabs--" + tabDirection] = true,
            _a["at-tabs--alipay"] = true,
            _a), className);
        var scrollX = tabDirection === "horizontal";
        var scrollY = tabDirection === "vertical";
        return (React__default.createElement(View, { className: rootCls, style: mergeStyle(heightStyle, customStyle) },
            scroll ? (React__default.createElement(ScrollView, { id: this._tabId, className: "at-tabs__header", style: heightStyle, scrollX: scrollX, scrollY: scrollY, scrollWithAnimation: true, scrollLeft: _scrollLeft, scrollTop: _scrollTop, scrollIntoView: _scrollIntoView }, tabItems)) : (React__default.createElement(View, { id: this._tabId, className: "at-tabs__header" }, tabItems)),
            React__default.createElement(View, { className: "at-tabs__body", onTouchStart: this.handleTouchStart.bind(this), onTouchEnd: this.handleTouchEnd.bind(this), onTouchMove: this.handleTouchMove.bind(this), style: mergeStyle(bodyStyle, heightStyle) },
                React__default.createElement(View, { className: "at-tabs__underline", style: underlineStyle }),
                this.props.children)));
    };
    return AtTabs;
}(React__default.Component));
AtTabs.defaultProps = {
    customStyle: "",
    className: "",
    tabDirection: "horizontal",
    height: "",
    current: 0,
    swipeable: true,
    scroll: false,
    animated: true,
    tabList: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: function () { },
};
AtTabs.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    height: propTypes.string,
    tabDirection: propTypes.oneOf(["horizontal", "vertical"]),
    current: propTypes.number,
    swipeable: propTypes.bool,
    scroll: propTypes.bool,
    animated: propTypes.bool,
    tabList: propTypes.array,
    onClick: propTypes.func,
};

var AtTabsPane = /** @class */ (function (_super) {
    __extends(AtTabsPane, _super);
    function AtTabsPane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtTabsPane.prototype.render = function () {
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, tabDirection = _a.tabDirection, index = _a.index, current = _a.current;
        return (React__default.createElement(View, { className: classnames({
                'at-tabs-pane': true,
                'at-tabs-pane--vertical': tabDirection === 'vertical',
                'at-tabs-pane--active': index === current,
                'at-tabs-pane--inactive': index !== current
            }, className), style: customStyle }, this.props.children));
    };
    return AtTabsPane;
}(React__default.Component));
AtTabsPane.defaultProps = {
    customStyle: '',
    className: '',
    tabDirection: 'horizontal',
    index: 0,
    current: 0
};
AtTabsPane.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    tabDirection: propTypes.oneOf(['horizontal', 'vertical']),
    index: propTypes.number,
    current: propTypes.number
};

var SIZE_CLASS$2 = {
    normal: 'normal',
    small: 'small'
};
var TYPE_CLASS$1 = {
    primary: 'primary'
};
var AtTag = /** @class */ (function (_super) {
    __extends(AtTag, _super);
    function AtTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtTag.prototype.onClick = function (event) {
        var _a = this.props, _b = _a.name, name = _b === void 0 ? '' : _b, _c = _a.active, active = _c === void 0 ? false : _c, disabled = _a.disabled, onClick = _a.onClick;
        if (!disabled) {
            typeof onClick === 'function' &&
                onClick({
                    name: name,
                    active: active
                }, event);
        }
    };
    AtTag.prototype.render = function () {
        var _a;
        var _b = this.props, _c = _b.size, size = _c === void 0 ? 'normal' : _c, _d = _b.type, type = _d === void 0 ? '' : _d, _e = _b.circle, circle = _e === void 0 ? false : _e, _f = _b.disabled, disabled = _f === void 0 ? false : _f, _g = _b.active, active = _g === void 0 ? false : _g, customStyle = _b.customStyle;
        var rootClassName = ['at-tag'];
        var classObject = (_a = {},
            _a["at-tag--" + SIZE_CLASS$2[size]] = SIZE_CLASS$2[size],
            _a["at-tag--" + type] = TYPE_CLASS$1[type],
            _a['at-tag--disabled'] = disabled,
            _a['at-tag--active'] = active,
            _a['at-tag--circle'] = circle,
            _a);
        return (React__default.createElement(View, { className: classnames(rootClassName, classObject, this.props.className), style: customStyle, onClick: this.onClick.bind(this) }, this.props.children));
    };
    return AtTag;
}(React__default.Component));
AtTag.defaultProps = {
    size: 'normal',
    type: '',
    name: '',
    circle: false,
    active: false,
    disabled: false,
    customStyle: {}
};
AtTag.propTypes = {
    size: propTypes.oneOf(['normal', 'small']),
    type: propTypes.oneOf(['', 'primary']),
    name: propTypes.string,
    circle: propTypes.bool,
    active: propTypes.bool,
    disabled: propTypes.bool,
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    onClick: propTypes.func
};

function getMaxLength(maxLength, textOverflowForbidden) {
    if (!textOverflowForbidden) {
        return maxLength + 500;
    }
    return maxLength;
}
var AtTextarea = /** @class */ (function (_super) {
    __extends(AtTextarea, _super);
    function AtTextarea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleInput = function (event) {
            _this.props.onChange(event.target.value, event);
        };
        _this.handleFocus = function (event) {
            _this.props.onFocus && _this.props.onFocus(event);
        };
        _this.handleBlur = function (event) {
            _this.props.onBlur && _this.props.onBlur(event);
        };
        _this.handleConfirm = function (event) {
            _this.props.onConfirm && _this.props.onConfirm(event);
        };
        return _this;
    }
    AtTextarea.prototype.render = function () {
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, value = _a.value, cursorSpacing = _a.cursorSpacing, placeholder = _a.placeholder, placeholderStyle = _a.placeholderStyle, placeholderClass = _a.placeholderClass, _b = _a.maxLength, maxLength = _b === void 0 ? 200 : _b, count = _a.count, disabled = _a.disabled, autoFocus = _a.autoFocus, focus = _a.focus, showConfirmBar = _a.showConfirmBar, selectionStart = _a.selectionStart, selectionEnd = _a.selectionEnd, fixed = _a.fixed, _c = _a.textOverflowForbidden, textOverflowForbidden = _c === void 0 ? true : _c, height = _a.height;
        var _maxLength = parseInt(maxLength.toString());
        var actualMaxLength = getMaxLength(_maxLength, textOverflowForbidden);
        var textareaStyle = height ? "height:" + pxTransform(Number(height)) : "";
        var rootCls = classnames("at-textarea", "at-textarea--alipay", {
            "at-textarea--error": _maxLength < value.length,
        }, className);
        var placeholderCls = classnames("placeholder", placeholderClass);
        return (React__default.createElement(View, { className: rootCls, style: customStyle },
            React__default.createElement(Textarea, { className: "at-textarea__textarea", style: textareaStyle, placeholderStyle: placeholderStyle, placeholderClassName: placeholderCls, cursorSpacing: cursorSpacing, value: value, maxlength: actualMaxLength, placeholder: placeholder, disabled: disabled, autoFocus: autoFocus, focus: focus, showConfirmBar: showConfirmBar, selectionStart: selectionStart, selectionEnd: selectionEnd, fixed: fixed, onInput: this.handleInput, onFocus: this.handleFocus, onBlur: this.handleBlur, onConfirm: this.handleConfirm }),
            count && (React__default.createElement(View, { className: "at-textarea__counter" },
                value.length,
                "/",
                _maxLength))));
    };
    return AtTextarea;
}(React__default.Component));
AtTextarea.defaultProps = {
    customStyle: "",
    className: "",
    value: "",
    cursorSpacing: 100,
    maxLength: 200,
    placeholder: "",
    disabled: false,
    autoFocus: false,
    focus: false,
    showConfirmBar: false,
    selectionStart: -1,
    selectionEnd: -1,
    count: true,
    fixed: false,
    height: "",
    textOverflowForbidden: true,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: function () { },
};
AtTextarea.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    value: propTypes.string.isRequired,
    cursorSpacing: propTypes.number,
    maxLength: propTypes.oneOfType([propTypes.string, propTypes.number]),
    placeholderClass: propTypes.string,
    placeholderStyle: propTypes.string,
    placeholder: propTypes.string,
    disabled: propTypes.bool,
    autoFocus: propTypes.bool,
    focus: propTypes.bool,
    showConfirmBar: propTypes.bool,
    selectionStart: propTypes.number,
    selectionEnd: propTypes.number,
    count: propTypes.bool,
    textOverflowForbidden: propTypes.bool,
    fixed: propTypes.bool,
    height: propTypes.oneOfType([propTypes.string, propTypes.number]),
    onChange: propTypes.func.isRequired,
    onFocus: propTypes.func,
    onBlur: propTypes.func,
    onConfirm: propTypes.func,
};

var AtTimeline = /** @class */ (function (_super) {
    __extends(AtTimeline, _super);
    function AtTimeline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtTimeline.prototype.render = function () {
        var _a = this.props, pending = _a.pending, items = _a.items, customStyle = _a.customStyle;
        var rootClassName = ['at-timeline'];
        if (pending)
            rootClassName.push('at-timeline--pending');
        var rootClassObject = {
            'at-timeline--pending': pending
        };
        var itemElems = items.map(function (item, index) {
            var _a;
            var _b = item.title, title = _b === void 0 ? '' : _b, color = item.color, icon = item.icon, _c = item.content, content = _c === void 0 ? [] : _c;
            var iconClass = classnames((_a = {
                    'at-icon': true
                },
                _a["at-icon-" + icon] = icon,
                _a));
            var itemRootClassName = ['at-timeline-item'];
            if (color)
                itemRootClassName.push("at-timeline-item--" + color);
            var dotClass = [];
            if (icon) {
                dotClass.push('at-timeline-item__icon');
            }
            else {
                dotClass.push('at-timeline-item__dot');
            }
            return (React__default.createElement(View, { className: classnames(itemRootClassName), key: "at-timeline-item-" + index },
                React__default.createElement(View, { className: 'at-timeline-item__tail' }),
                React__default.createElement(View, { className: classnames(dotClass) }, icon && React__default.createElement(Text, { className: iconClass })),
                React__default.createElement(View, { className: 'at-timeline-item__content' },
                    React__default.createElement(View, { className: 'at-timeline-item__content-item' }, title),
                    content.map(function (sub, subIndex) { return (React__default.createElement(View, { className: 'at-timeline-item__content-item at-timeline-item__content--sub', key: subIndex }, sub)); }))));
        });
        return (React__default.createElement(View, { className: classnames(rootClassName, rootClassObject, this.props.className), style: customStyle }, itemElems));
    };
    return AtTimeline;
}(React__default.Component));
AtTimeline.defaultProps = {
    pending: false,
    items: [],
    customStyle: {}
};
AtTimeline.propTypes = {
    pending: propTypes.bool,
    items: propTypes.arrayOf(propTypes.object),
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string])
};

var error = "data:image/png;base64,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";
var success = "data:image/png;base64,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";
var loading = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANHRSTlMA6AN+QRH69xUI7Z7x2sWzcWYvphvj4MxiXVIiGAuH08K9ibepmI+Oc2tKHQ+helY5NykfkF5N9AAABmhJREFUeNrdnWlT4kAQhjt3CARIwg1yH3Lpqv3/f9tabsYJMUGCsM6b56NVVjGV6WP6pLvTijTb8bS2X29U581BaBEmLY9T1LrVpukSGhFn06n2W4SExvn4q2ecL6PxeSbrPwRBxN/iG0NSHyHs55kGB1KdVqTxBTjLnU6qo1csdx+ag8CIujXOxe+pf5QEIzPYNDo5OnlbITD2/WObM9AeHwiOYbDMEB/PgHRiwo3GaWpbKFkR6LvI4RTdF4Lk0JtyihXk/Xrnbe2kRKVHoLjjlImphwSKZXicxH4iVB4eNU6ywPHy01SME1nRTIJluOAEtgFpU/4xaHOC2YhgeRjbJble9Dplid0nXHSDEzQJGFNjyZyAGc1YUgVWXqfXqwH3dsy7XnVUf/iD1oQ/mUCfxKonvgn07ao0EnKCLPGkVxO6i6AZl8SeEDVLYuNPToLsd53cLhvZF35HSrwG/D55R5daeAathKkiLaNB0FiTsohJS/sUE9wo0QcmCxaEjcEC3BjkB/rsU0xg48L/GH2KSZ2wkWICm3VIi4kH/V4k0qccsyJsXm2OAc0zfnWEu9g+Fz20OWZL2Aw4pgYu77QoiRtMQ0eoYMC6lWxj8kjYVDThz0PHHt95LIvievBEpRq4LSGjLL6jJepWfPRP8umo7AgbV9iSJYGzFvXC6lc+n+eNYwICR7ywpgROj2MQOgTOcXBK4gNTJEwJgbPjGJBOmlx04QOvCZyNKIkgcEKOAc8yyEa0ZwJnWZKgIwVlUcBDjsHqMc2gXY5yCKJjOaqGiPoiBkHg7EtjSUQ/I3gJAVGjHGVcRJuySLswiV0CxxQ5HwJnxDHoySsSoVPwkg6iLv9jQOBEZdG/Rjkqm4mCshgSkXRvEDhmSeq3KCzLa1c48u2PASxaBPvodUXGPR6J46GexBLVHMKiRIRJRWTgSBOfBhNd1M+SqKwDzVfLg4i8D2h5irxaHrZDL4Vdww6oSPUroo57gkQaRB/7iSVdlDp2iEs6jQ3st6J046vYJR3yYTXHrh+QT90mQztbMvgwwA46ynBQiB10lAE6i2MgW2CTIdMasiFJBrG7yPo3mVYQhmRDgCQTPU3kEFcy9WYip3iTyVCXcR350/R0B7cOIlkwIKX9SHDIEo7ksdoEx2lRTQu2Ejhd5uSjmsR04dkKtYMhXQr4zKBh03RxpsuYkZSv5bITTHfrawHzWtwtqEh2Rkn5H8jOq6wifx8xApHVdmEAdl5lNsIMARstZWtSVufVjGDIbhYLOOaNQMhp3zs4aN0xeQ2VS/F3kMyVbHHNU8pjgiC36Vj3oWZ0nGkD70HN6DjTmK93gGZ0nB2VsAWa0SGHV2DP6Pjmpz7CSIkc8HL+4jmKh1O+HbljgIxBlEOQ8pUzQtL9+7FUUnG1FVbBlwwK07sAjsr8ktFtLxxjv5KiXDhMb8UxU0UDKpeON7Q8xY3JxQMne8wqp6sLjACtqzxEu8hQ1tBWd4h2sTG5T+oO0S44uHihqpgUHSXtyiHaSpX+Fx/ubdoqLmG5Zty6oeASlqsG4Osz5ZawXLmSYKSptoSl8JIIKSZKOcLXr+3oK7WEJblIBXmdzM9+y5xVuV0/XTZ0VGNlXHL90/FKjafCyrhbLOSq1H9/ZdxtVqRZyZVxLSqKQkvrrPoPdpAqtUYweUO50Ipb1RY76sffWXGbXrV51G8SECt+vVRcftrkotdL1XW0fZsl01f6BoUXBJ98ZXv8QLmovrL5RO64PaAc1F+irRs2J1gMKQuIteYn14sdI0etAyyadxecRHtMiQrQ6v8nm5N4hkU3xTI8TmI/0Z0I63xCbezSzXDHNT6hHtL96Hl8grN+o5vwtnb4BK9Hd8VacYpZ70A/5NCbcYqVRffmpcspnGin09Xou8jhFN0X+g/o2xqn0TbhlWK30ThNbavT3ZHqJY22DIYFTV+wFKcoqAzvpPAl7WN/Txex7x/bLMk1T/ensu1wJp3GJjBHlMvIDDaNvP/dVuj/o/d8zqXWjYxgYIZ716roesVy96E5CIyoW+Nc/J5Ov4O+Wzp8I5zlTqdf5BBM+QZMAwXaC4aGzz/CN5SpdPuznvCVTNaKLatwn1c+F8RfPatZwd7qVzt8IZ1qX6nk9xdcs1kVOjZPM1ebpppf4itWOGjOq42639Y8x7YdT2v79UZ13hyEFt2Fv6Loy9OZgJFyAAAAAElFTkSuQmCC";
var statusImg = {
	error: error,
	success: success,
	loading: loading
};

var AtToast = /** @class */ (function (_super) {
    __extends(AtToast, _super);
    function AtToast(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (event) {
            var _a = _this.props, onClick = _a.onClick, status = _a.status;
            if (status === 'loading') {
                return;
            }
            if (onClick) {
                return onClick(event);
            }
            _this.close();
        };
        var isOpened = props.isOpened, duration = props.duration;
        if (isOpened) {
            _this.makeTimer(duration || 0);
        }
        _this._timer = null;
        _this.state = {
            _isOpened: isOpened
        };
        return _this;
    }
    AtToast.prototype.clearTimmer = function () {
        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = null;
        }
    };
    AtToast.prototype.makeTimer = function (duration) {
        var _this = this;
        if (duration === 0) {
            return;
        }
        this._timer = setTimeout(function () {
            _this.close();
        }, +duration);
    };
    AtToast.prototype.close = function () {
        var _isOpened = this.state._isOpened;
        if (_isOpened) {
            this.setState({
                _isOpened: false
            }, this.handleClose // TODO: Fix dirty hack
            );
            this.clearTimmer();
        }
    };
    AtToast.prototype.handleClose = function (event) {
        // TODO: Fix dirty hack
        if (typeof this.props.onClose === 'function') {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            this.props.onClose(event);
        }
    };
    AtToast.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var isOpened = nextProps.isOpened, duration = nextProps.duration;
        if (!isOpened) {
            this.close();
            return;
        }
        if (!this.state._isOpened) {
            this.setState({
                _isOpened: true
            });
        }
        else {
            this.clearTimmer();
        }
        this.makeTimer(duration || 0);
    };
    AtToast.prototype.render = function () {
        var _a, _b;
        var _isOpened = this.state._isOpened;
        var _c = this.props, customStyle = _c.customStyle, text = _c.text, icon = _c.icon, status = _c.status, image = _c.image, hasMask = _c.hasMask;
        /* eslint-disable @typescript-eslint/no-non-null-assertion */
        var realImg = image || statusImg[status] || null;
        var isRenderIcon = !!(icon && !(image || statusImg[status]));
        /* eslint-enable @typescript-eslint/no-non-null-assertion */
        var bodyClass = classnames('toast-body', (_a = {
                'at-toast__body--custom-image': image,
                'toast-body--text': !realImg && !icon
            },
            _a["at-toast__body--" + status] = !!status,
            _a));
        var iconClass = classnames('at-icon', (_b = {},
            _b["at-icon-" + icon] = icon,
            _b));
        return _isOpened ? (React__default.createElement(View, { className: classnames('at-toast', this.props.className) },
            hasMask && React__default.createElement(View, { className: 'at-toast__overlay' }),
            React__default.createElement(View, { className: bodyClass, style: customStyle, onClick: this.handleClick },
                React__default.createElement(View, { className: 'toast-body-content' },
                    realImg ? (React__default.createElement(View, { className: 'toast-body-content__img' },
                        React__default.createElement(Image, { className: 'toast-body-content__img-item', src: realImg, mode: 'scaleToFill' }))) : null,
                    isRenderIcon && (React__default.createElement(View, { className: 'toast-body-content__icon' },
                        React__default.createElement(Text, { className: iconClass }))),
                    text && (React__default.createElement(View, { className: 'toast-body-content__info' },
                        React__default.createElement(Text, null, text))))))) : null;
    };
    return AtToast;
}(React__default.Component));
AtToast.defaultProps = {
    duration: 3000,
    isOpened: false
};
AtToast.propTypes = {
    text: propTypes.string,
    icon: propTypes.string,
    hasMask: propTypes.bool,
    image: propTypes.string,
    isOpened: propTypes.bool,
    duration: propTypes.number,
    status: propTypes.oneOf(['', 'error', 'loading', 'success']),
    onClick: propTypes.func,
    onClose: propTypes.func
};

var AtAccordion = /** @class */ (function (_super) {
    __extends(AtAccordion, _super);
    function AtAccordion(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (event) {
            var open = _this.props.open;
            if (!_this.isCompleted)
                return;
            _this.props.onClick && _this.props.onClick(!open, event);
        };
        _this.isCompleted = true;
        _this.startOpen = false;
        _this.state = {
            wrapperHeight: 0
        };
        return _this;
    }
    AtAccordion.prototype.toggleWithAnimation = function () {
        var _this = this;
        var _a = this.props, open = _a.open, isAnimation = _a.isAnimation;
        if (!this.isCompleted || !isAnimation)
            return;
        this.isCompleted = false;
        delayQuerySelector('.at-accordion__body', 0).then(function (rect) {
            var height = parseInt(rect[0].height.toString());
            var startHeight = open ? height : 0;
            var endHeight = open ? 0 : height;
            _this.startOpen = false;
            _this.setState({
                wrapperHeight: startHeight
            }, function () {
                setTimeout(function () {
                    _this.setState({
                        wrapperHeight: endHeight
                    }, function () {
                        setTimeout(function () {
                            _this.isCompleted = true;
                            _this.setState({});
                        }, 700);
                    });
                }, 100);
            });
        });
    };
    AtAccordion.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (nextProps.open !== this.props.open) {
            this.startOpen = !!nextProps.open && !!nextProps.isAnimation;
            this.toggleWithAnimation();
        }
    };
    AtAccordion.prototype.render = function () {
        var _a;
        var _b = this.props, customStyle = _b.customStyle, className = _b.className, title = _b.title, icon = _b.icon, hasBorder = _b.hasBorder, open = _b.open, note = _b.note;
        var wrapperHeight = this.state.wrapperHeight;
        var rootCls = classnames('at-accordion', className);
        var prefixClass = (icon && icon.prefixClass) || 'at-icon';
        var iconCls = classnames((_a = {},
            _a[prefixClass] = true,
            _a[prefixClass + "-" + (icon && icon.value)] = icon && icon.value,
            _a['at-accordion__icon'] = true,
            _a));
        var headerCls = classnames('at-accordion__header', {
            'at-accordion__header--noborder': !hasBorder
        });
        var arrowCls = classnames('at-accordion__arrow', {
            'at-accordion__arrow--folded': !!open
        });
        var contentCls = classnames('at-accordion__content', {
            'at-accordion__content--inactive': (!open && this.isCompleted) || this.startOpen
        });
        var iconStyle = {
            color: (icon && icon.color) || '',
            fontSize: (icon && icon.size + "px") || ''
        };
        var contentStyle = { height: wrapperHeight + "px" };
        if (this.isCompleted) {
            contentStyle.height = '';
        }
        return (React__default.createElement(View, { className: rootCls, style: customStyle },
            React__default.createElement(View, { className: headerCls, onClick: this.handleClick },
                icon && icon.value && (React__default.createElement(Text, { className: iconCls, style: iconStyle })),
                React__default.createElement(View, { className: 'at-accordion__info' },
                    React__default.createElement(View, { className: 'at-accordion__info__title' }, title),
                    React__default.createElement(View, { className: 'at-accordion__info__note' }, note)),
                React__default.createElement(View, { className: arrowCls },
                    React__default.createElement(Text, { className: 'at-icon at-icon-chevron-down' }))),
            React__default.createElement(View, { style: contentStyle, className: contentCls },
                React__default.createElement(View, { className: 'at-accordion__body' }, this.props.children))));
    };
    return AtAccordion;
}(React__default.Component));
AtAccordion.defaultProps = {
    open: false,
    customStyle: '',
    className: '',
    title: '',
    note: '',
    icon: { value: '' },
    hasBorder: true,
    isAnimation: true
};
AtAccordion.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    open: propTypes.bool,
    isAnimation: propTypes.bool,
    title: propTypes.string,
    note: propTypes.string,
    icon: propTypes.object,
    hasBorder: propTypes.bool,
    onClick: propTypes.func
};

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max,
    nativeMin = Math.min;

/**
 * The base implementation of `_.inRange` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
function baseInRange(number, start, end) {
  return number >= nativeMin(start, end) && number < nativeMax$1(start, end);
}

var _baseInRange = baseInRange;

/**
 * Checks if `n` is between `start` and up to, but not including, `end`. If
 * `end` is not specified, it's set to `start` with `start` then set to `0`.
 * If `start` is greater than `end` the params are swapped to support
 * negative ranges.
 *
 * @static
 * @memberOf _
 * @since 3.3.0
 * @category Number
 * @param {number} number The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 * @see _.range, _.rangeRight
 * @example
 *
 * _.inRange(3, 2, 4);
 * // => true
 *
 * _.inRange(4, 8);
 * // => true
 *
 * _.inRange(4, 2);
 * // => false
 *
 * _.inRange(2, 2);
 * // => false
 *
 * _.inRange(1.2, 2);
 * // => true
 *
 * _.inRange(5.2, 4);
 * // => false
 *
 * _.inRange(-3, -2, -6);
 * // => true
 */
function inRange(number, start, end) {
  start = toFinite_1(start);
  if (end === undefined) {
    end = start;
    start = 0;
  } else {
    end = toFinite_1(end);
  }
  number = toNumber_1(number);
  return _baseInRange(number, start, end);
}

var inRange_1 = inRange;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$2;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$2.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$4 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$3).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;

/* Built-in method references that are verified to be native. */
var Map$1 = _getNative(_root, 'Map');

var _Map = Map$1;

/* Built-in method references that are verified to be native. */
var Promise$1 = _getNative(_root, 'Promise');

var _Promise = Promise$1;

/* Built-in method references that are verified to be native. */
var Set$1 = _getNative(_root, 'Set');

var _Set = Set$1;

/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap;

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (_Map && getTag(new _Map) != mapTag) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

var _getTag = getTag;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$4.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag$1 = '[object Map]',
    numberTag = '[object Number]',
    objectTag$1 = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag = '[object String]',
    weakMapTag$1 = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag$1] = typedArrayTags[numberTag] =
typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] =
typedArrayTags[setTag$1] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag$1] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]',
    setTag$2 = '[object Set]';

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike_1(value) &&
      (isArray_1(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer_1(value) || isTypedArray_1(value) || isArguments_1(value))) {
    return !value.length;
  }
  var tag = _getTag(value);
  if (tag == mapTag$2 || tag == setTag$2) {
    return !value.size;
  }
  if (_isPrototype(value)) {
    return !_baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty$5.call(value, key)) {
      return false;
    }
  }
  return true;
}

var isEmpty_1 = isEmpty;

var AtSwipeActionOptions = /** @class */ (function (_super) {
    __extends(AtSwipeActionOptions, _super);
    function AtSwipeActionOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtSwipeActionOptions.prototype.trrigerOptionsDomUpadte = function () {
        var _this = this;
        delayQuerySelector("#swipeActionOptions-" + this.props.componentId, 100).then(function (res) {
            _this.props.onQueryedDom(res[0]);
        });
    };
    AtSwipeActionOptions.prototype.componentDidMount = function () {
        this.trrigerOptionsDomUpadte();
    };
    AtSwipeActionOptions.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (nextProps.options !== this.props.options) {
            this.trrigerOptionsDomUpadte();
        }
    };
    AtSwipeActionOptions.prototype.render = function () {
        var rootClass = classnames('at-swipe-action__options', this.props.className);
        return (React__default.createElement(View, { id: "swipeActionOptions-" + this.props.componentId, className: rootClass }, this.props.children));
    };
    return AtSwipeActionOptions;
}(React__default.Component));

var AtSwipeAction = /** @class */ (function (_super) {
    __extends(AtSwipeAction, _super);
    function AtSwipeAction(props) {
        var _this = _super.call(this, props) || this;
        _this.computeTransform = function (value) {
            return value ? "translate3d(" + value + "px,0,0)" : null;
        };
        _this.handleOpened = function (event) {
            var onOpened = _this.props.onOpened;
            if (typeof onOpened === "function" && _this.state._isOpened) {
                onOpened(event);
            }
        };
        _this.handleClosed = function (event) {
            var onClosed = _this.props.onClosed;
            if (typeof onClosed === "function" && !_this.state._isOpened) {
                onClosed(event);
            }
        };
        _this.handleTouchStart = function (e) {
            var _a = e.touches[0], clientX = _a.clientX, clientY = _a.clientY;
            if (_this.props.disabled)
                return;
            _this.getDomInfo();
            _this.startX = clientX;
            _this.startY = clientY;
            _this.isTouching = true;
        };
        _this.handleTouchMove = function (e) {
            if (isEmpty_1(_this.domInfo)) {
                return;
            }
            var _a = _this, startX = _a.startX, startY = _a.startY;
            var _b = _this.domInfo, top = _b.top, bottom = _b.bottom, left = _b.left, right = _b.right;
            var _c = e.touches[0], clientX = _c.clientX, clientY = _c.clientY, pageX = _c.pageX, pageY = _c.pageY;
            var x = Math.abs(clientX - startX);
            var y = Math.abs(clientY - startY);
            var inDom = inRange_1(pageX, left, right) && inRange_1(pageY, top, bottom);
            if (!_this.isMoving && inDom) {
                _this.isMoving =
                    y === 0 ||
                        x / y >= Number.parseFloat(Math.tan((45 * Math.PI) / 180).toFixed(2));
            }
            if (_this.isTouching && _this.isMoving) {
                e.preventDefault();
                var offsetSize = clientX - _this.startX;
                var isRight = offsetSize > 0;
                if (_this.state.offsetSize === 0 && isRight)
                    return;
                var value = _this.endValue + offsetSize;
                _this.setState({
                    offsetSize: value >= 0 ? 0 : value,
                });
            }
        };
        _this.handleTouchEnd = function (event) {
            _this.isTouching = false;
            var offsetSize = _this.state.offsetSize;
            _this.endValue = offsetSize;
            var breakpoint = _this.maxOffsetSize / 2;
            var absOffsetSize = Math.abs(offsetSize);
            if (absOffsetSize > breakpoint) {
                _this._reset(true);
                _this.handleOpened(event);
                return;
            }
            _this._reset(false); // TODO: Check behavior
            _this.handleClosed(event);
        };
        _this.handleDomInfo = function (_a) {
            var width = _a.width;
            var _isOpened = _this.state._isOpened;
            _this.maxOffsetSize = width;
            _this._reset(_isOpened);
        };
        _this.handleClick = function (item, index, event) {
            var _a = _this.props, onClick = _a.onClick, autoClose = _a.autoClose;
            if (typeof onClick === "function") {
                onClick(item, index, event);
            }
            if (autoClose) {
                _this._reset(false); // TODO: Check behavior
                _this.handleClosed(event);
            }
        };
        var isOpened = props.isOpened;
        _this.endValue = 0;
        _this.startX = 0;
        _this.startY = 0;
        _this.maxOffsetSize = 0;
        _this.domInfo = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        };
        _this.isMoving = false;
        _this.isTouching = false;
        _this.state = {
            componentId: uuid(),
            offsetSize: 0,
            _isOpened: !!isOpened,
        };
        return _this;
    }
    AtSwipeAction.prototype.getDomInfo = function () {
        var _this = this;
        return Promise.all([
            delayGetClientRect({
                delayTime: 0,
                selectorStr: "#swipeAction-" + this.state.componentId,
            }),
            delayGetScrollOffset({ delayTime: 0 }),
        ]).then(function (_a) {
            var _b = __read(_a, 2), rect = _b[0], scrollOffset = _b[1];
            rect[0].top += scrollOffset[0].scrollTop;
            rect[0].bottom += scrollOffset[0].scrollTop;
            _this.domInfo = rect[0];
        });
    };
    AtSwipeAction.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var isOpened = nextProps.isOpened;
        var _isOpened = this.state._isOpened;
        if (isOpened !== _isOpened) {
            this._reset(!!isOpened); // TODO: Check behavior
        }
    };
    AtSwipeAction.prototype._reset = function (isOpened) {
        this.isMoving = false;
        this.isTouching = false;
        if (isOpened) {
            this.endValue = -this.maxOffsetSize;
            this.setState({
                _isOpened: true,
                offsetSize: -this.maxOffsetSize,
            });
        }
        else {
            this.endValue = 0;
            this.setState({
                offsetSize: 0,
                _isOpened: false,
            });
        }
    };
    AtSwipeAction.prototype.render = function () {
        var _this = this;
        var _a = this.state, offsetSize = _a.offsetSize, componentId = _a.componentId;
        var options = this.props.options;
        var rootClass = classnames("at-swipe-action", this.props.className);
        var transform = this.computeTransform(offsetSize);
        var transformStyle = transform ? { transform: transform } : {};
        return (React__default.createElement(View, { id: "swipeAction-" + componentId, className: rootClass, onTouchMove: this.handleTouchMove, onTouchEnd: this.handleTouchEnd, onTouchStart: this.handleTouchStart },
            React__default.createElement(View, { className: classnames("at-swipe-action__content", {
                    animtion: !this.isTouching,
                }), style: transformStyle }, this.props.children),
            Array.isArray(options) && options.length > 0 ? (React__default.createElement(AtSwipeActionOptions, { options: options, componentId: componentId, onQueryedDom: this.handleDomInfo }, options.map(function (item, key) { return (React__default.createElement(View, { key: item.text + "-" + key, style: item.style, onClick: function (e) { return _this.handleClick(item, key, e); }, className: classnames("at-swipe-action__option", item.className) },
                React__default.createElement(Text, { className: "option__text" }, item.text))); }))) : null));
    };
    return AtSwipeAction;
}(React__default.Component));
AtSwipeAction.defaultProps = {
    options: [],
    isOpened: false,
    disabled: false,
    autoClose: false,
};
AtSwipeAction.propTypes = {
    isOpened: propTypes.bool,
    disabled: propTypes.bool,
    autoClose: propTypes.bool,
    options: propTypes.arrayOf(propTypes.shape({
        text: propTypes.string,
        style: propTypes.oneOfType([propTypes.object, propTypes.string]),
        className: propTypes.oneOfType([
            propTypes.object,
            propTypes.string,
            propTypes.array,
        ]),
    })),
    onClick: propTypes.func,
    onOpened: propTypes.func,
    onClosed: propTypes.func,
};

var AtSearchBar = /** @class */ (function (_super) {
    __extends(AtSearchBar, _super);
    function AtSearchBar(props) {
        var _this = _super.call(this, props) || this;
        _this.handleFocus = function (event) {
            _this.setState({
                isFocus: true
            });
            _this.props.onFocus && _this.props.onFocus(event);
        };
        _this.handleBlur = function (event) {
            _this.setState({
                isFocus: false
            });
            _this.props.onBlur && _this.props.onBlur(event);
        };
        _this.handleChange = function (e) {
            _this.props.onChange(e.target.value, e);
        };
        _this.handleClear = function (event) {
            if (_this.props.onClear) {
                _this.props.onClear(event);
            }
            else {
                _this.props.onChange('', event);
            }
        };
        _this.handleConfirm = function (event) {
            _this.props.onConfirm && _this.props.onConfirm(event);
        };
        _this.handleActionClick = function (event) {
            _this.props.onActionClick && _this.props.onActionClick(event);
        };
        _this.state = {
            isFocus: !!props.focus
        };
        return _this;
    }
    AtSearchBar.prototype.render = function () {
        var _a = this.props, value = _a.value, placeholder = _a.placeholder, maxLength = _a.maxLength, fixed = _a.fixed, disabled = _a.disabled, showActionButton = _a.showActionButton, _b = _a.actionName, actionName = _b === void 0 ? '搜索' : _b, inputType = _a.inputType, // 处理issue#464
        className = _a.className, customStyle = _a.customStyle;
        var isFocus = this.state.isFocus;
        var fontSize = 14;
        var rootCls = classnames('at-search-bar', {
            'at-search-bar--fixed': fixed
        }, className);
        var placeholderWrapStyle = {};
        var actionStyle = {};
        if (isFocus || (!isFocus && value)) {
            actionStyle.opacity = 1;
            actionStyle.marginRight = "0";
            placeholderWrapStyle.flexGrow = 0;
        }
        else if (!isFocus && !value) {
            placeholderWrapStyle.flexGrow = 1;
            actionStyle.opacity = 0;
            actionStyle.marginRight = "-" + ((actionName.length + 1) * fontSize + fontSize / 2 + 10) + "px";
        }
        if (showActionButton) {
            actionStyle.opacity = 1;
            actionStyle.marginRight = "0";
        }
        var clearIconStyle = { display: 'flex' };
        var placeholderStyle = { visibility: 'hidden' };
        if (!value.length) {
            clearIconStyle.display = 'none';
            placeholderStyle.visibility = 'visible';
        }
        return (React__default.createElement(View, { className: rootCls, style: customStyle },
            React__default.createElement(View, { className: 'at-search-bar__input-cnt' },
                React__default.createElement(View, { className: 'at-search-bar__placeholder-wrap', style: placeholderWrapStyle },
                    React__default.createElement(Text, { className: 'at-icon at-icon-search' }),
                    React__default.createElement(Text, { className: 'at-search-bar__placeholder', style: placeholderStyle }, isFocus ? '' : placeholder)),
                React__default.createElement(Input, { className: 'at-search-bar__input', type: inputType, confirmType: 'search', value: value, focus: isFocus, disabled: disabled, maxlength: maxLength, onInput: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, onConfirm: this.handleConfirm }),
                React__default.createElement(View, { className: 'at-search-bar__clear', style: clearIconStyle, onTouchStart: this.handleClear },
                    React__default.createElement(Text, { className: 'at-icon at-icon-close-circle' }))),
            React__default.createElement(View, { className: 'at-search-bar__action', style: actionStyle, onClick: this.handleActionClick }, actionName)));
    };
    return AtSearchBar;
}(React__default.Component));
AtSearchBar.defaultProps = {
    value: '',
    placeholder: '搜索',
    maxLength: 140,
    fixed: false,
    focus: false,
    disabled: false,
    showActionButton: false,
    actionName: '搜索',
    inputType: 'text',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: function () { }
};
AtSearchBar.propTypes = {
    value: propTypes.string,
    placeholder: propTypes.string,
    maxLength: propTypes.number,
    fixed: propTypes.bool,
    focus: propTypes.bool,
    disabled: propTypes.bool,
    showActionButton: propTypes.bool,
    actionName: propTypes.string,
    inputType: propTypes.oneOf(['text', 'number', 'idcard', 'digit']),
    onChange: propTypes.func,
    onFocus: propTypes.func,
    onBlur: propTypes.func,
    onConfirm: propTypes.func,
    onActionClick: propTypes.func,
    onClear: propTypes.func
};

var AtLoadMore = /** @class */ (function (_super) {
    __extends(AtLoadMore, _super);
    function AtLoadMore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtLoadMore.prototype.onClick = function () {
        this.props.onClick && this.props.onClick(arguments);
    };
    AtLoadMore.prototype.render = function () {
        var _a = this.props, className = _a.className, customStyle = _a.customStyle, loadingText = _a.loadingText, moreText = _a.moreText, status = _a.status, moreBtnStyle = _a.moreBtnStyle, noMoreTextStyle = _a.noMoreTextStyle, noMoreText = _a.noMoreText;
        var component = null;
        if (status === 'loading') {
            component = React__default.createElement(AtActivityIndicator, { mode: 'center', content: loadingText });
        }
        else if (status === 'more') {
            component = (React__default.createElement(View, { className: 'at-load-more__cnt' },
                React__default.createElement(AtButton, { full: true, onClick: this.onClick.bind(this), customStyle: moreBtnStyle }, moreText)));
        }
        else {
            component = (React__default.createElement(Text, { className: 'at-load-more__tip', style: noMoreTextStyle }, noMoreText));
        }
        return (React__default.createElement(View, { className: classnames('at-load-more', className), style: customStyle }, component));
    };
    return AtLoadMore;
}(React__default.Component));
AtLoadMore.defaultProps = {
    customStyle: '',
    className: '',
    noMoreTextStyle: '',
    moreBtnStyle: '',
    status: 'more',
    loadingText: '加载中',
    moreText: '查看更多',
    noMoreText: '没有更多'
};
AtLoadMore.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    noMoreTextStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    moreBtnStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    status: propTypes.oneOf(['more', 'loading', 'noMore']),
    loadingText: propTypes.string,
    moreText: propTypes.string,
    noMoreText: propTypes.string,
    onClick: propTypes.func
};

var AtDivider = /** @class */ (function (_super) {
    __extends(AtDivider, _super);
    function AtDivider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtDivider.prototype.render = function () {
        var _a = this.props, className = _a.className, customStyle = _a.customStyle, content = _a.content, height = _a.height, fontColor = _a.fontColor, fontSize = _a.fontSize, lineColor = _a.lineColor;
        var rootStyle = {
            height: height ? "" + pxTransform(Number(height)) : ''
        };
        var fontStyle = {
            color: fontColor,
            'font-size': fontSize ? "" + pxTransform(Number(fontSize)) : ''
        };
        var lineStyle = {
            backgroundColor: lineColor
        };
        return (React__default.createElement(View, { className: classnames('at-divider', className), style: mergeStyle(rootStyle, customStyle) },
            React__default.createElement(View, { className: 'at-divider__content', style: fontStyle }, content === '' ? this.props.children : content),
            React__default.createElement(View, { className: 'at-divider__line', style: lineStyle })));
    };
    return AtDivider;
}(React__default.Component));
AtDivider.defaultProps = {
    content: '',
    height: 0,
    fontColor: '',
    fontSize: 0,
    lineColor: ''
};
AtDivider.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    content: propTypes.string,
    height: propTypes.oneOfType([propTypes.number, propTypes.string]),
    fontColor: propTypes.string,
    fontSize: propTypes.oneOfType([propTypes.number, propTypes.string]),
    lineColor: propTypes.string
};

var AtCountdownItem = /** @class */ (function (_super) {
    __extends(AtCountdownItem, _super);
    function AtCountdownItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtCountdownItem.prototype.formatNum = function (num) {
        return num <= 9 ? "0" + num : "" + num;
    };
    AtCountdownItem.prototype.render = function () {
        var _a = this.props, num = _a.num, separator = _a.separator;
        return (React__default.createElement(View, { className: 'at-countdown__item' },
            React__default.createElement(View, { className: 'at-countdown__time-box' },
                React__default.createElement(Text, { className: 'at-countdown__time' }, this.formatNum(num))),
            React__default.createElement(Text, { className: 'at-countdown__separator' }, separator)));
    };
    return AtCountdownItem;
}(React__default.Component));
AtCountdownItem.defaultProps = {
    num: 0,
    separator: ':'
};
AtCountdownItem.propTypes = {
    num: propTypes.number.isRequired,
    separator: propTypes.string
};

var toSeconds = function (day, hours, minutes, seconds) { return day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds; };
var AtCountdown = /** @class */ (function (_super) {
    __extends(AtCountdown, _super);
    function AtCountdown(props) {
        var _this = _super.call(this, props) || this;
        var _a = _this.props, _b = _a.day, day = _b === void 0 ? 0 : _b, _c = _a.hours, hours = _c === void 0 ? 0 : _c, _d = _a.minutes, minutes = _d === void 0 ? 0 : _d, _e = _a.seconds, seconds = _e === void 0 ? 0 : _e;
        _this.seconds = toSeconds(day, hours, minutes, seconds);
        var _f = _this.calculateTime(), _day = _f.day, _hours = _f.hours, _minutes = _f.minutes, _seconds = _f.seconds;
        _this.state = {
            _day: _day,
            _hours: _hours,
            _minutes: _minutes,
            _seconds: _seconds
        };
        return _this;
    }
    AtCountdown.prototype.setTimer = function () {
        if (!this.timer)
            this.countdonwn();
    };
    AtCountdown.prototype.clearTimer = function () {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    };
    AtCountdown.prototype.calculateTime = function () {
        var _a = __read([0, 0, 0, 0], 4), day = _a[0], hours = _a[1], minutes = _a[2], seconds = _a[3];
        if (this.seconds > 0) {
            day = this.props.isShowDay ? Math.floor(this.seconds / (60 * 60 * 24)) : 0;
            hours = Math.floor(this.seconds / (60 * 60)) - day * 24;
            minutes = Math.floor(this.seconds / 60) - day * 24 * 60 - hours * 60;
            seconds =
                Math.floor(this.seconds) -
                    day * 24 * 60 * 60 -
                    hours * 60 * 60 -
                    minutes * 60;
        }
        return {
            day: day,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    };
    AtCountdown.prototype.countdonwn = function () {
        var _this = this;
        var _a = this.calculateTime(), day = _a.day, hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
        this.setState({
            _day: day,
            _hours: hours,
            _minutes: minutes,
            _seconds: seconds
        });
        this.seconds--;
        if (this.seconds < 0) {
            this.clearTimer();
            this.props.onTimeUp && this.props.onTimeUp();
            return;
        }
        this.timer = setTimeout(function () {
            _this.countdonwn();
        }, 1000);
    };
    AtCountdown.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (JSON.stringify(this.props) === JSON.stringify(nextProps))
            return;
        var day = nextProps.day, hours = nextProps.hours, minutes = nextProps.minutes, seconds = nextProps.seconds;
        this.seconds = toSeconds(day, hours, minutes, seconds);
        this.clearTimer();
        this.setTimer();
    };
    AtCountdown.prototype.componentDidMount = function () {
        this.setTimer();
    };
    AtCountdown.prototype.componentWillUnmount = function () {
        this.clearTimer();
    };
    AtCountdown.prototype.componentDidHide = function () {
        this.clearTimer();
    };
    AtCountdown.prototype.componentDidShow = function () {
        this.setTimer();
    };
    AtCountdown.prototype.render = function () {
        var _a = this.props, className = _a.className, customStyle = _a.customStyle, format = _a.format, isShowDay = _a.isShowDay, isCard = _a.isCard, isShowHour = _a.isShowHour;
        var _b = this.state, _day = _b._day, _hours = _b._hours, _minutes = _b._minutes, _seconds = _b._seconds;
        return (React__default.createElement(View, { className: classnames({
                'at-countdown': true,
                'at-countdown--card': isCard
            }, className), style: customStyle },
            isShowDay && React__default.createElement(AtCountdownItem, { num: _day, separator: format.day }),
            isShowHour && (React__default.createElement(AtCountdownItem, { num: _hours, separator: format.hours })),
            React__default.createElement(AtCountdownItem, { num: _minutes, separator: format.minutes }),
            React__default.createElement(AtCountdownItem, { num: _seconds, separator: format.seconds })));
    };
    return AtCountdown;
}(React__default.Component));
AtCountdown.defaultProps = {
    customStyle: '',
    className: '',
    isCard: false,
    isShowDay: false,
    isShowHour: true,
    format: {
        day: '天',
        hours: '时',
        minutes: '分',
        seconds: '秒'
    },
    day: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
};
AtCountdown.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    isCard: propTypes.bool,
    isShowDay: propTypes.bool,
    isShowHour: propTypes.bool,
    format: propTypes.object,
    day: propTypes.number,
    hours: propTypes.number,
    minutes: propTypes.number,
    seconds: propTypes.number,
    onTimeUp: propTypes.func
};

var AtSteps = /** @class */ (function (_super) {
    __extends(AtSteps, _super);
    function AtSteps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtSteps.prototype.handleClick = function (current, event) {
        this.props.onChange(current, event);
    };
    AtSteps.prototype.render = function () {
        var _this = this;
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, items = _a.items, current = _a.current;
        return (React__default.createElement(View, { className: classnames('at-steps', className), style: customStyle }, !!items &&
            items.map(function (item, i) {
                var _a;
                return (React__default.createElement(View, { key: item.title, className: classnames({
                        'at-steps__item': true,
                        'at-steps__item--active': i === current,
                        'at-steps__item--inactive': i !== current
                    }), onClick: _this.handleClick.bind(_this, i) },
                    React__default.createElement(View, { className: 'at-steps__circular-wrap' },
                        i !== 0 && React__default.createElement(View, { className: 'at-steps__left-line' }),
                        item.status ? (React__default.createElement(View, { className: classnames({
                                'at-icon': true,
                                'at-icon-check-circle': item.status === 'success',
                                'at-icon-close-circle': item.status === 'error',
                                'at-steps__single-icon': true,
                                'at-steps__single-icon--success': item.status === 'success',
                                'at-steps__single-icon--error': item.status === 'error'
                            }) })) : (React__default.createElement(View, { className: 'at-steps__circular' }, item.icon ? (React__default.createElement(Text, { className: classnames('at-icon', (_a = {},
                                _a["at-icon-" + item.icon.value] = item.icon.value,
                                _a['at-steps__circle-icon'] = true,
                                _a)) })) : (React__default.createElement(Text, { className: 'at-steps__num' }, i + 1)))),
                        i !== items.length - 1 && (React__default.createElement(View, { className: 'at-steps__right-line' }))),
                    React__default.createElement(View, { className: 'at-steps__title' }, item.title),
                    React__default.createElement(View, { className: 'at-steps__desc' }, item.desc)));
            })));
    };
    return AtSteps;
}(React__default.Component));
AtSteps.defaultProps = {
    customStyle: '',
    className: '',
    current: 0,
    items: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: function () { }
};
AtSteps.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    current: propTypes.number,
    items: propTypes.array,
    onChange: propTypes.func
};

var AtCurtain = /** @class */ (function (_super) {
    __extends(AtCurtain, _super);
    function AtCurtain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtCurtain.prototype.onClose = function (e) {
        e.stopPropagation();
        this.props.onClose(e);
    };
    AtCurtain.prototype._stopPropagation = function (e) {
        e.stopPropagation();
    };
    AtCurtain.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, customStyle = _b.customStyle, isOpened = _b.isOpened, closeBtnPosition = _b.closeBtnPosition;
        var curtainClass = classnames({
            'at-curtain': true,
            'at-curtain--closed': !isOpened
        }, className);
        var btnCloseClass = classnames((_a = {
                'at-curtain__btn-close': true
            },
            _a["at-curtain__btn-close--" + closeBtnPosition] = closeBtnPosition,
            _a));
        return (React__default.createElement(View, { className: curtainClass, style: customStyle, onClick: this._stopPropagation },
            React__default.createElement(View, { className: 'at-curtain__container' },
                React__default.createElement(View, { className: 'at-curtain__body' },
                    this.props.children,
                    React__default.createElement(View, { className: btnCloseClass, onClick: this.onClose.bind(this) })))));
    };
    return AtCurtain;
}(React__default.Component));
AtCurtain.defaultProps = {
    customStyle: '',
    className: '',
    isOpened: false,
    closeBtnPosition: 'bottom',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClose: function () { }
};
AtCurtain.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    isOpened: propTypes.bool,
    closeBtnPosition: propTypes.string,
    onClose: propTypes.func
};

var AtRange = /** @class */ (function (_super) {
    __extends(AtRange, _super);
    function AtRange(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (event) {
            if (_this.currentSlider && !_this.props.disabled) {
                var sliderValue = 0;
                var detail = getEventDetail(event);
                sliderValue = detail.x - _this.left;
                _this.setSliderValue(_this.currentSlider, sliderValue, "onChange");
            }
        };
        var _a = props.min, min = _a === void 0 ? 0 : _a, _b = props.max, max = _b === void 0 ? 100 : _b;
        // range 宽度
        _this.width = 0;
        // range 到屏幕左边的距离
        _this.left = 0;
        _this.deltaValue = max - min;
        _this.currentSlider = "";
        _this.state = {
            aX: 0,
            bX: 0,
        };
        return _this;
    }
    AtRange.prototype.handleTouchMove = function (sliderName, event) {
        if (this.props.disabled)
            return;
        event.stopPropagation();
        var clientX = event.touches[0].clientX;
        this.setSliderValue(sliderName, clientX - this.left, "onChange");
    };
    AtRange.prototype.handleTouchEnd = function (sliderName) {
        if (this.props.disabled)
            return;
        this.currentSlider = sliderName;
        this.triggerEvent("onAfterChange");
    };
    AtRange.prototype.setSliderValue = function (sliderName, targetValue, funcName) {
        var _a, _b;
        var _this = this;
        var distance = Math.min(Math.max(targetValue, 0), this.width);
        var sliderValue = Math.floor((distance / this.width) * 100);
        if (funcName) {
            this.setState((_a = {},
                _a[sliderName] = sliderValue,
                _a), function () { return _this.triggerEvent(funcName); });
        }
        else {
            this.setState((_b = {},
                _b[sliderName] = sliderValue,
                _b));
        }
    };
    AtRange.prototype.setValue = function (value) {
        var _a = this.props.min, min = _a === void 0 ? 0 : _a;
        var aX = Math.round(((value[0] - min) / this.deltaValue) * 100); // fix issue #670
        var bX = Math.round(((value[1] - min) / this.deltaValue) * 100); // fix issue #670
        this.setState({ aX: aX, bX: bX });
    };
    AtRange.prototype.triggerEvent = function (funcName) {
        var _a = this.props.min, min = _a === void 0 ? 0 : _a;
        var _b = this.state, aX = _b.aX, bX = _b.bX;
        var a = Math.round((aX / 100) * this.deltaValue) + min; // fix issue #670
        var b = Math.round((bX / 100) * this.deltaValue) + min; // fix issue #670
        var result = [a, b].sort(function (x, y) { return x - y; });
        if (funcName === "onChange") {
            this.props.onChange && this.props.onChange(result);
        }
        else if (funcName === "onAfterChange") {
            this.props.onAfterChange && this.props.onAfterChange(result);
        }
    };
    AtRange.prototype.updatePos = function () {
        var _this = this;
        delayQuerySelector(".at-range__container", 0).then(function (rect) {
            _this.width = Math.round(rect[0].width);
            _this.left = Math.round(rect[0].left || 0);
        });
    };
    AtRange.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var value = nextProps.value;
        this.updatePos();
        if (this.props.value[0] !== value[0] ||
            this.props.value[1] !== value[1]) {
            this.setValue(value);
        }
    };
    AtRange.prototype.componentDidMount = function () {
        var value = this.props.value;
        this.updatePos();
        this.setValue(value);
    };
    AtRange.prototype.render = function () {
        var _a = this.props, className = _a.className, customStyle = _a.customStyle, sliderStyle = _a.sliderStyle, railStyle = _a.railStyle, trackStyle = _a.trackStyle, blockSize = _a.blockSize, disabled = _a.disabled;
        var rootCls = classnames("at-range", {
            "at-range--disabled": disabled,
        }, className);
        var _b = this.state, aX = _b.aX, bX = _b.bX;
        var sliderCommonStyle = {
            width: blockSize ? blockSize + "PX" : "",
            height: blockSize ? blockSize + "PX" : "",
            marginLeft: blockSize ? -blockSize / 2 + "PX" : "",
        };
        var sliderAStyle = __assign(__assign({}, sliderCommonStyle), { left: aX + "%" });
        var sliderBStyle = __assign(__assign({}, sliderCommonStyle), { left: bX + "%" });
        var containerStyle = {
            height: blockSize ? blockSize + "PX" : "",
        };
        var smallerX = Math.min(aX, bX);
        var deltaX = Math.abs(aX - bX);
        var atTrackStyle = {
            left: smallerX + "%",
            width: deltaX + "%",
        };
        return (React__default.createElement(View, { className: rootCls, style: customStyle, onClick: this.handleClick },
            React__default.createElement(View, { className: "at-range__container", style: containerStyle },
                React__default.createElement(View, { className: "at-range__rail", style: railStyle }),
                React__default.createElement(View, { className: "at-range__track", style: mergeStyle(atTrackStyle, trackStyle) }),
                React__default.createElement(View, { className: "at-range__slider", style: mergeStyle(sliderAStyle, sliderStyle), onTouchMove: this.handleTouchMove.bind(this, "aX"), onTouchEnd: this.handleTouchEnd.bind(this, "aX") }),
                React__default.createElement(View, { className: "at-range__slider", style: mergeStyle(sliderBStyle, sliderStyle), onTouchMove: this.handleTouchMove.bind(this, "bX"), onTouchEnd: this.handleTouchEnd.bind(this, "bX") }))));
    };
    return AtRange;
}(React__default.Component));
AtRange.defaultProps = {
    customStyle: "",
    className: "",
    sliderStyle: "",
    railStyle: "",
    trackStyle: "",
    value: [0, 0],
    min: 0,
    max: 100,
    disabled: false,
    blockSize: 0,
};
AtRange.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    sliderStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    railStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    trackStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    value: propTypes.array,
    min: propTypes.number,
    max: propTypes.number,
    disabled: propTypes.bool,
    blockSize: propTypes.number,
    onChange: propTypes.func,
    onAfterChange: propTypes.func,
};

var AtIndexes = /** @class */ (function (_super) {
    __extends(AtIndexes, _super);
    function AtIndexes(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (item) {
            _this.props.onClick && _this.props.onClick(item);
        };
        _this.handleTouchMove = function (event) {
            event.stopPropagation();
            event.preventDefault();
            var list = _this.props.list;
            var pageY = event.touches[0].pageY;
            var index = Math.floor((pageY - _this.startTop) / _this.itemHeight);
            if (index >= 0 && index <= list.length && _this.currentIndex !== index) {
                _this.currentIndex = index;
                var key = index > 0 ? list[index - 1].key : "top";
                var touchView = "at-indexes__list-" + key;
                _this.jumpTarget(touchView, index);
            }
        };
        _this.handleTouchEnd = function () {
            _this.currentIndex = -1;
        };
        _this.state = {
            _scrollIntoView: "",
            _scrollTop: 0,
            _tipText: "",
            _isShowToast: false,
        };
        // 右侧导航高度
        _this.menuHeight = 0;
        // 右侧导航距离顶部高度
        _this.startTop = 0;
        // 右侧导航元素高度
        _this.itemHeight = 0;
        // 当前索引
        _this.currentIndex = -1;
        _this.listId = isTest() ? "indexes-list-AOTU2018" : "list-" + uuid();
        return _this;
    }
    AtIndexes.prototype.jumpTarget = function (_scrollIntoView, idx) {
        var _a = this.props, _b = _a.topKey, topKey = _b === void 0 ? "Top" : _b, list = _a.list;
        var _tipText = idx === 0 ? topKey : list[idx - 1].key;
        this.updateState({
            _scrollIntoView: _scrollIntoView,
            _tipText: _tipText,
        });
    };
    AtIndexes.prototype.__jumpTarget = function (key) {
        var list = this.props.list;
        // const index = _findIndex(list, ['key', key])
        var index = list.findIndex(function (item) { return item.key === key; });
        var targetView = "at-indexes__list-" + key;
        this.jumpTarget(targetView, index + 1);
    };
    AtIndexes.prototype.updateState = function (state) {
        var _this = this;
        var isShowToast = this.props.isShowToast;
        var _scrollIntoView = state._scrollIntoView, _tipText = state._tipText, _scrollTop = state._scrollTop;
        // TODO: Fix dirty hack
        /* eslint-disable @typescript-eslint/no-non-null-assertion */
        this.setState({
            _scrollIntoView: _scrollIntoView,
            _tipText: _tipText,
            _scrollTop: _scrollTop,
            _isShowToast: isShowToast,
        }, 
        /* eslint-enable @typescript-eslint/no-non-null-assertion */
        function () {
            clearTimeout(_this.timeoutTimer);
            _this.timeoutTimer = setTimeout(function () {
                _this.setState({
                    _tipText: "",
                    _isShowToast: false,
                });
            }, 3000);
        });
    };
    AtIndexes.prototype.initData = function () {
        var _this = this;
        delayQuerySelector(".at-indexes__menu").then(function (rect) {
            var _a, _b;
            var len = _this.props.list.length;
            // @ts-ignore
            _this.menuHeight = (_a = rect[0]) === null || _a === void 0 ? void 0 : _a.height;
            // @ts-ignore
            _this.startTop = (_b = rect[0]) === null || _b === void 0 ? void 0 : _b.top;
            _this.itemHeight = Math.floor(_this.menuHeight / (len + 1));
        });
    };
    AtIndexes.prototype.handleScroll = function (e) {
        if (e && e.detail) {
            this.setState({
                _scrollTop: e.detail.scrollTop,
            });
        }
    };
    AtIndexes.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (nextProps.list.length !== this.props.list.length) {
            this.initData();
        }
    };
    AtIndexes.prototype.componentDidMount = function () {
        this.initData();
    };
    AtIndexes.prototype.UNSAFE_componentWillMount = function () {
        this.props.onScrollIntoView &&
            this.props.onScrollIntoView(this.__jumpTarget.bind(this));
    };
    AtIndexes.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, customStyle = _a.customStyle, animation = _a.animation, topKey = _a.topKey, list = _a.list;
        var _b = this.state, _scrollIntoView = _b._scrollIntoView, _tipText = _b._tipText, _isShowToast = _b._isShowToast;
        var toastStyle = { minWidth: pxTransform(100) };
        var rootCls = classnames("at-indexes", className);
        var menuList = list.map(function (dataList, i) {
            var key = dataList.key;
            var targetView = "at-indexes__list-" + key;
            return (React__default.createElement(View, { className: "at-indexes__menu-item", key: key, onClick: _this.jumpTarget.bind(_this, targetView, i + 1) }, key));
        });
        var indexesList = list.map(function (dataList) { return (React__default.createElement(View, { id: "at-indexes__list-" + dataList.key, className: "at-indexes__list", key: dataList.key },
            React__default.createElement(View, { className: "at-indexes__list-title" }, dataList.title),
            React__default.createElement(AtList, null, dataList.items &&
                dataList.items.map(function (item) { return (React__default.createElement(AtListItem, { key: item.name, title: item.name, onClick: _this.handleClick.bind(_this, item) })); })))); });
        return (React__default.createElement(View, { className: rootCls, style: customStyle },
            React__default.createElement(AtToast, { customStyle: toastStyle, isOpened: _isShowToast, text: _tipText, duration: 2000 }),
            React__default.createElement(View, { className: "at-indexes__menu", onTouchMove: this.handleTouchMove, onTouchEnd: this.handleTouchEnd },
                React__default.createElement(View, { className: "at-indexes__menu-item", onClick: this.jumpTarget.bind(this, "at-indexes__top", 0) }, topKey),
                menuList),
            React__default.createElement(ScrollView, { className: "at-indexes__body", id: this.listId, scrollY: true, scrollWithAnimation: animation, 
                // eslint-disable-next-line no-undefined
                scrollIntoView: _scrollIntoView, onScroll: this.handleScroll.bind(this) },
                React__default.createElement(View, { className: "at-indexes__content", id: "at-indexes__top" }, this.props.children),
                indexesList)));
    };
    return AtIndexes;
}(React__default.Component));
AtIndexes.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    animation: propTypes.bool,
    isShowToast: propTypes.bool,
    topKey: propTypes.string,
    list: propTypes.array,
    onClick: propTypes.func,
    onScrollIntoView: propTypes.func,
};
AtIndexes.defaultProps = {
    customStyle: "",
    className: "",
    animation: false,
    topKey: "Top",
    isShowToast: true,
    list: [],
};

var AtFab = /** @class */ (function (_super) {
    __extends(AtFab, _super);
    function AtFab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtFab.prototype.onClick = function (e) {
        if (typeof this.props.onClick === 'function') {
            this.props.onClick(e);
        }
    };
    AtFab.prototype.render = function () {
        var _a;
        var _b = this.props, size = _b.size, className = _b.className, children = _b.children;
        var rootClass = classnames('at-fab', className, (_a = {},
            _a["at-fab--" + size] = size,
            _a));
        return (React__default.createElement(View, { className: rootClass, onClick: this.onClick.bind(this) }, children));
    };
    return AtFab;
}(React__default.Component));
AtFab.propTypes = {
    size: propTypes.oneOf(['normal', 'small']),
    onClick: propTypes.func
};
AtFab.defaultProps = {
    size: 'normal'
};

var objectToString$2 = function (style) {
    if (style && typeof style === 'object') {
        var styleStr_1 = '';
        Object.keys(style).forEach(function (key) {
            var lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
            styleStr_1 += lowerCaseKey + ":" + style[key] + ";";
        });
        return styleStr_1;
    }
    else if (style && typeof style === 'string') {
        return style;
    }
    return '';
};
var AtComponent = /** @class */ (function (_super) {
    __extends(AtComponent, _super);
    function AtComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 合并 style
     * @param {Object|String} style1
     * @param {Object|String} style2
     * @returns {String}
     */
    AtComponent.prototype.mergeStyle = function (style1, style2) {
        if (style1 &&
            typeof style1 === 'object' &&
            style2 &&
            typeof style2 === 'object') {
            return Object.assign({}, style1, style2);
        }
        return objectToString$2(style1) + objectToString$2(style2);
    };
    return AtComponent;
}(Component));

export { AtAccordion, AtActionSheet, AtActionSheetItem, AtActivityIndicator, AtAvatar, AtBadge, AtButton, AtCard, AtCheckbox, AtComponent, AtCountdown, AtCurtain, AtDivider, AtDrawer, AtFab, AtFloatLayout, AtForm, AtGrid, AtIcon, AtIndexes, AtInput, AtInputNumber, AtList, AtListItem, AtLoadMore, AtLoading, AtModal, AtModalAction, AtModalContent, AtModalHeader, AtNavBar, AtPagination, AtProgress, AtRadio, AtRange, AtRate, AtSearchBar, AtSegmentedControl, AtSteps, AtSwipeAction, AtSwitch, AtTabBar, AtTabs, AtTabsPane, AtTag, AtTextarea, AtTimeline, AtToast };
//# sourceMappingURL=index.esm.js.map
