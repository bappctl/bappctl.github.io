function ns(r, i) {
  for (var e = 0; e < i.length; e++) {
    const t = i[e];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const n in t)
        if (n !== "default" && !(n in r)) {
          const a = Object.getOwnPropertyDescriptor(t, n);
          a && Object.defineProperty(r, n, a.get ? a : {
            enumerable: !0,
            get: () => t[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
function rs(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var dn = { exports: {} }, jt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var la;
function as() {
  if (la) return jt;
  la = 1;
  var r = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function e(t, n, a) {
    var s = null;
    if (a !== void 0 && (s = "" + a), n.key !== void 0 && (s = "" + n.key), "key" in n) {
      a = {};
      for (var o in n)
        o !== "key" && (a[o] = n[o]);
    } else a = n;
    return n = a.ref, {
      $$typeof: r,
      type: t,
      key: s,
      ref: n !== void 0 ? n : null,
      props: a
    };
  }
  return jt.Fragment = i, jt.jsx = e, jt.jsxs = e, jt;
}
var Ut = {}, fn = { exports: {} }, ae = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ua;
function is() {
  if (ua) return ae;
  ua = 1;
  var r = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), t = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), o = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), d = Symbol.iterator;
  function p(v) {
    return v === null || typeof v != "object" ? null : (v = d && v[d] || v["@@iterator"], typeof v == "function" ? v : null);
  }
  var h = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, g = Object.assign, k = {};
  function S(v, w, L) {
    this.props = v, this.context = w, this.refs = k, this.updater = L || h;
  }
  S.prototype.isReactComponent = {}, S.prototype.setState = function(v, w) {
    if (typeof v != "object" && typeof v != "function" && v != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, v, w, "setState");
  }, S.prototype.forceUpdate = function(v) {
    this.updater.enqueueForceUpdate(this, v, "forceUpdate");
  };
  function T() {
  }
  T.prototype = S.prototype;
  function A(v, w, L) {
    this.props = v, this.context = w, this.refs = k, this.updater = L || h;
  }
  var D = A.prototype = new T();
  D.constructor = A, g(D, S.prototype), D.isPureReactComponent = !0;
  var N = Array.isArray, x = { H: null, A: null, T: null, S: null }, Y = Object.prototype.hasOwnProperty;
  function de(v, w, L, B, $, le) {
    return L = le.ref, {
      $$typeof: r,
      type: v,
      key: w,
      ref: L !== void 0 ? L : null,
      props: le
    };
  }
  function ee(v, w) {
    return de(
      v.type,
      w,
      void 0,
      void 0,
      void 0,
      v.props
    );
  }
  function me(v) {
    return typeof v == "object" && v !== null && v.$$typeof === r;
  }
  function fe(v) {
    var w = { "=": "=0", ":": "=2" };
    return "$" + v.replace(/[=:]/g, function(L) {
      return w[L];
    });
  }
  var Ce = /\/+/g;
  function Q(v, w) {
    return typeof v == "object" && v !== null && v.key != null ? fe("" + v.key) : w.toString(36);
  }
  function ge() {
  }
  function te(v) {
    switch (v.status) {
      case "fulfilled":
        return v.value;
      case "rejected":
        throw v.reason;
      default:
        switch (typeof v.status == "string" ? v.then(ge, ge) : (v.status = "pending", v.then(
          function(w) {
            v.status === "pending" && (v.status = "fulfilled", v.value = w);
          },
          function(w) {
            v.status === "pending" && (v.status = "rejected", v.reason = w);
          }
        )), v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
        }
    }
    throw v;
  }
  function Ee(v, w, L, B, $) {
    var le = typeof v;
    (le === "undefined" || le === "boolean") && (v = null);
    var X = !1;
    if (v === null) X = !0;
    else
      switch (le) {
        case "bigint":
        case "string":
        case "number":
          X = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case r:
            case i:
              X = !0;
              break;
            case c:
              return X = v._init, Ee(
                X(v._payload),
                w,
                L,
                B,
                $
              );
          }
      }
    if (X)
      return $ = $(v), X = B === "" ? "." + Q(v, 0) : B, N($) ? (L = "", X != null && (L = X.replace(Ce, "$&/") + "/"), Ee($, w, L, "", function(Ye) {
        return Ye;
      })) : $ != null && (me($) && ($ = ee(
        $,
        L + ($.key == null || v && v.key === $.key ? "" : ("" + $.key).replace(
          Ce,
          "$&/"
        ) + "/") + X
      )), w.push($)), 1;
    X = 0;
    var ke = B === "" ? "." : B + ":";
    if (N(v))
      for (var be = 0; be < v.length; be++)
        B = v[be], le = ke + Q(B, be), X += Ee(
          B,
          w,
          L,
          le,
          $
        );
    else if (be = p(v), typeof be == "function")
      for (v = be.call(v), be = 0; !(B = v.next()).done; )
        B = B.value, le = ke + Q(B, be++), X += Ee(
          B,
          w,
          L,
          le,
          $
        );
    else if (le === "object") {
      if (typeof v.then == "function")
        return Ee(
          te(v),
          w,
          L,
          B,
          $
        );
      throw w = String(v), Error(
        "Objects are not valid as a React child (found: " + (w === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : w) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return X;
  }
  function O(v, w, L) {
    if (v == null) return v;
    var B = [], $ = 0;
    return Ee(v, B, "", "", function(le) {
      return w.call(L, le, $++);
    }), B;
  }
  function M(v) {
    if (v._status === -1) {
      var w = v._result;
      w = w(), w.then(
        function(L) {
          (v._status === 0 || v._status === -1) && (v._status = 1, v._result = L);
        },
        function(L) {
          (v._status === 0 || v._status === -1) && (v._status = 2, v._result = L);
        }
      ), v._status === -1 && (v._status = 0, v._result = w);
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var I = typeof reportError == "function" ? reportError : function(v) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var w = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
        error: v
      });
      if (!window.dispatchEvent(w)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", v);
      return;
    }
    console.error(v);
  };
  function z() {
  }
  return ae.Children = {
    map: O,
    forEach: function(v, w, L) {
      O(
        v,
        function() {
          w.apply(this, arguments);
        },
        L
      );
    },
    count: function(v) {
      var w = 0;
      return O(v, function() {
        w++;
      }), w;
    },
    toArray: function(v) {
      return O(v, function(w) {
        return w;
      }) || [];
    },
    only: function(v) {
      if (!me(v))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return v;
    }
  }, ae.Component = S, ae.Fragment = e, ae.Profiler = n, ae.PureComponent = A, ae.StrictMode = t, ae.Suspense = l, ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = x, ae.act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, ae.cache = function(v) {
    return function() {
      return v.apply(null, arguments);
    };
  }, ae.cloneElement = function(v, w, L) {
    if (v == null)
      throw Error(
        "The argument must be a React element, but you passed " + v + "."
      );
    var B = g({}, v.props), $ = v.key, le = void 0;
    if (w != null)
      for (X in w.ref !== void 0 && (le = void 0), w.key !== void 0 && ($ = "" + w.key), w)
        !Y.call(w, X) || X === "key" || X === "__self" || X === "__source" || X === "ref" && w.ref === void 0 || (B[X] = w[X]);
    var X = arguments.length - 2;
    if (X === 1) B.children = L;
    else if (1 < X) {
      for (var ke = Array(X), be = 0; be < X; be++)
        ke[be] = arguments[be + 2];
      B.children = ke;
    }
    return de(v.type, $, void 0, void 0, le, B);
  }, ae.createContext = function(v) {
    return v = {
      $$typeof: s,
      _currentValue: v,
      _currentValue2: v,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, v.Provider = v, v.Consumer = {
      $$typeof: a,
      _context: v
    }, v;
  }, ae.createElement = function(v, w, L) {
    var B, $ = {}, le = null;
    if (w != null)
      for (B in w.key !== void 0 && (le = "" + w.key), w)
        Y.call(w, B) && B !== "key" && B !== "__self" && B !== "__source" && ($[B] = w[B]);
    var X = arguments.length - 2;
    if (X === 1) $.children = L;
    else if (1 < X) {
      for (var ke = Array(X), be = 0; be < X; be++)
        ke[be] = arguments[be + 2];
      $.children = ke;
    }
    if (v && v.defaultProps)
      for (B in X = v.defaultProps, X)
        $[B] === void 0 && ($[B] = X[B]);
    return de(v, le, void 0, void 0, null, $);
  }, ae.createRef = function() {
    return { current: null };
  }, ae.forwardRef = function(v) {
    return { $$typeof: o, render: v };
  }, ae.isValidElement = me, ae.lazy = function(v) {
    return {
      $$typeof: c,
      _payload: { _status: -1, _result: v },
      _init: M
    };
  }, ae.memo = function(v, w) {
    return {
      $$typeof: u,
      type: v,
      compare: w === void 0 ? null : w
    };
  }, ae.startTransition = function(v) {
    var w = x.T, L = {};
    x.T = L;
    try {
      var B = v(), $ = x.S;
      $ !== null && $(L, B), typeof B == "object" && B !== null && typeof B.then == "function" && B.then(z, I);
    } catch (le) {
      I(le);
    } finally {
      x.T = w;
    }
  }, ae.unstable_useCacheRefresh = function() {
    return x.H.useCacheRefresh();
  }, ae.use = function(v) {
    return x.H.use(v);
  }, ae.useActionState = function(v, w, L) {
    return x.H.useActionState(v, w, L);
  }, ae.useCallback = function(v, w) {
    return x.H.useCallback(v, w);
  }, ae.useContext = function(v) {
    return x.H.useContext(v);
  }, ae.useDebugValue = function() {
  }, ae.useDeferredValue = function(v, w) {
    return x.H.useDeferredValue(v, w);
  }, ae.useEffect = function(v, w) {
    return x.H.useEffect(v, w);
  }, ae.useId = function() {
    return x.H.useId();
  }, ae.useImperativeHandle = function(v, w, L) {
    return x.H.useImperativeHandle(v, w, L);
  }, ae.useInsertionEffect = function(v, w) {
    return x.H.useInsertionEffect(v, w);
  }, ae.useLayoutEffect = function(v, w) {
    return x.H.useLayoutEffect(v, w);
  }, ae.useMemo = function(v, w) {
    return x.H.useMemo(v, w);
  }, ae.useOptimistic = function(v, w) {
    return x.H.useOptimistic(v, w);
  }, ae.useReducer = function(v, w, L) {
    return x.H.useReducer(v, w, L);
  }, ae.useRef = function(v) {
    return x.H.useRef(v);
  }, ae.useState = function(v) {
    return x.H.useState(v);
  }, ae.useSyncExternalStore = function(v, w, L) {
    return x.H.useSyncExternalStore(
      v,
      w,
      L
    );
  }, ae.useTransition = function() {
    return x.H.useTransition();
  }, ae.version = "19.0.0", ae;
}
var qt = { exports: {} };
qt.exports;
var ca;
function ss() {
  return ca || (ca = 1, function(r, i) {
    var e = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    e.NODE_ENV !== "production" && function() {
      function t(f, b) {
        Object.defineProperty(s.prototype, f, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              b[0],
              b[1]
            );
          }
        });
      }
      function n(f) {
        return f === null || typeof f != "object" ? null : (f = Bt && f[Bt] || f["@@iterator"], typeof f == "function" ? f : null);
      }
      function a(f, b) {
        f = (f = f.constructor) && (f.displayName || f.name) || "ReactClass";
        var R = f + "." + b;
        Ft[R] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          b,
          f
        ), Ft[R] = !0);
      }
      function s(f, b, R) {
        this.props = f, this.context = b, this.refs = U, this.updater = R || y;
      }
      function o() {
      }
      function l(f, b, R) {
        this.props = f, this.context = b, this.refs = U, this.updater = R || y;
      }
      function u(f) {
        return "" + f;
      }
      function c(f) {
        try {
          u(f);
          var b = !1;
        } catch {
          b = !0;
        }
        if (b) {
          b = console;
          var R = b.error, P = typeof Symbol == "function" && Symbol.toStringTag && f[Symbol.toStringTag] || f.constructor.name || "Object";
          return R.call(
            b,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            P
          ), u(f);
        }
      }
      function d(f) {
        if (f == null) return null;
        if (typeof f == "function")
          return f.$$typeof === ne ? null : f.displayName || f.name || null;
        if (typeof f == "string") return f;
        switch (f) {
          case Ye:
            return "Fragment";
          case be:
            return "Portal";
          case Mt:
            return "Profiler";
          case xt:
            return "StrictMode";
          case Xe:
            return "Suspense";
          case ot:
            return "SuspenseList";
        }
        if (typeof f == "object")
          switch (typeof f.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), f.$$typeof) {
            case it:
              return (f.displayName || "Context") + ".Provider";
            case at:
              return (f._context.displayName || "Context") + ".Consumer";
            case st:
              var b = f.render;
              return f = f.displayName, f || (f = b.displayName || b.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
            case lt:
              return b = f.displayName || null, b !== null ? b : d(f.type) || "Memo";
            case Ze:
              b = f._payload, f = f._init;
              try {
                return d(f(b));
              } catch {
              }
          }
        return null;
      }
      function p(f) {
        return typeof f == "string" || typeof f == "function" || f === Ye || f === Mt || f === xt || f === Xe || f === ot || f === sn || typeof f == "object" && f !== null && (f.$$typeof === Ze || f.$$typeof === lt || f.$$typeof === it || f.$$typeof === at || f.$$typeof === st || f.$$typeof === Me || f.getModuleId !== void 0);
      }
      function h() {
      }
      function g() {
        if (De === 0) {
          Qe = console.log, qe = console.info, ut = console.warn, je = console.error, Jr = console.group, Yr = console.groupCollapsed, Xr = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: h,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        De++;
      }
      function k() {
        if (De--, De === 0) {
          var f = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: F({}, f, { value: Qe }),
            info: F({}, f, { value: qe }),
            warn: F({}, f, { value: ut }),
            error: F({}, f, { value: je }),
            group: F({}, f, { value: Jr }),
            groupCollapsed: F({}, f, { value: Yr }),
            groupEnd: F({}, f, { value: Xr })
          });
        }
        0 > De && console.error(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
      }
      function S(f) {
        if (Kn === void 0)
          try {
            throw Error();
          } catch (R) {
            var b = R.stack.trim().match(/\n( *(at )?)/);
            Kn = b && b[1] || "", Zr = -1 < R.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < R.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return `
` + Kn + f + Zr;
      }
      function T(f, b) {
        if (!f || Jn) return "";
        var R = Yn.get(f);
        if (R !== void 0) return R;
        Jn = !0, R = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
        var P = null;
        P = Z.H, Z.H = null, g();
        try {
          var H = {
            DetermineComponentFrameRoot: function() {
              try {
                if (b) {
                  var Ve = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(Ve.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(Ve, []);
                    } catch (Je) {
                      var cn = Je;
                    }
                    Reflect.construct(f, [], Ve);
                  } else {
                    try {
                      Ve.call();
                    } catch (Je) {
                      cn = Je;
                    }
                    f.call(Ve.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (Je) {
                    cn = Je;
                  }
                  (Ve = f()) && typeof Ve.catch == "function" && Ve.catch(function() {
                  });
                }
              } catch (Je) {
                if (Je && cn && typeof Je.stack == "string")
                  return [Je.stack, cn.stack];
              }
              return [null, null];
            }
          };
          H.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var V = Object.getOwnPropertyDescriptor(
            H.DetermineComponentFrameRoot,
            "name"
          );
          V && V.configurable && Object.defineProperty(
            H.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var q = H.DetermineComponentFrameRoot(), he = q[0], pe = q[1];
          if (he && pe) {
            var Se = he.split(`
`), Le = pe.split(`
`);
            for (q = V = 0; V < Se.length && !Se[V].includes(
              "DetermineComponentFrameRoot"
            ); )
              V++;
            for (; q < Le.length && !Le[q].includes(
              "DetermineComponentFrameRoot"
            ); )
              q++;
            if (V === Se.length || q === Le.length)
              for (V = Se.length - 1, q = Le.length - 1; 1 <= V && 0 <= q && Se[V] !== Le[q]; )
                q--;
            for (; 1 <= V && 0 <= q; V--, q--)
              if (Se[V] !== Le[q]) {
                if (V !== 1 || q !== 1)
                  do
                    if (V--, q--, 0 > q || Se[V] !== Le[q]) {
                      var ct = `
` + Se[V].replace(
                        " at new ",
                        " at "
                      );
                      return f.displayName && ct.includes("<anonymous>") && (ct = ct.replace("<anonymous>", f.displayName)), typeof f == "function" && Yn.set(f, ct), ct;
                    }
                  while (1 <= V && 0 <= q);
                break;
              }
          }
        } finally {
          Jn = !1, Z.H = P, k(), Error.prepareStackTrace = R;
        }
        return Se = (Se = f ? f.displayName || f.name : "") ? S(Se) : "", typeof f == "function" && Yn.set(f, Se), Se;
      }
      function A(f) {
        if (f == null) return "";
        if (typeof f == "function") {
          var b = f.prototype;
          return T(
            f,
            !(!b || !b.isReactComponent)
          );
        }
        if (typeof f == "string") return S(f);
        switch (f) {
          case Xe:
            return S("Suspense");
          case ot:
            return S("SuspenseList");
        }
        if (typeof f == "object")
          switch (f.$$typeof) {
            case st:
              return f = T(f.render, !1), f;
            case lt:
              return A(f.type);
            case Ze:
              b = f._payload, f = f._init;
              try {
                return A(f(b));
              } catch {
              }
          }
        return "";
      }
      function D() {
        var f = Z.A;
        return f === null ? null : f.getOwner();
      }
      function N(f) {
        if (He.call(f, "key")) {
          var b = Object.getOwnPropertyDescriptor(f, "key").get;
          if (b && b.isReactWarning) return !1;
        }
        return f.key !== void 0;
      }
      function x(f, b) {
        function R() {
          Qr || (Qr = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            b
          ));
        }
        R.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: R,
          configurable: !0
        });
      }
      function Y() {
        var f = d(this.type);
        return ta[f] || (ta[f] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), f = this.props.ref, f !== void 0 ? f : null;
      }
      function de(f, b, R, P, H, V) {
        return R = V.ref, f = {
          $$typeof: ke,
          type: f,
          key: b,
          props: V,
          _owner: H
        }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(f, "ref", {
          enumerable: !1,
          get: Y
        }) : Object.defineProperty(f, "ref", { enumerable: !1, value: null }), f._store = {}, Object.defineProperty(f._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(f, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
      }
      function ee(f, b) {
        return b = de(
          f.type,
          b,
          void 0,
          void 0,
          f._owner,
          f.props
        ), b._store.validated = f._store.validated, b;
      }
      function me(f, b) {
        if (typeof f == "object" && f && f.$$typeof !== ts) {
          if (ve(f))
            for (var R = 0; R < f.length; R++) {
              var P = f[R];
              fe(P) && Ce(P, b);
            }
          else if (fe(f))
            f._store && (f._store.validated = 1);
          else if (R = n(f), typeof R == "function" && R !== f.entries && (R = R.call(f), R !== f))
            for (; !(f = R.next()).done; )
              fe(f.value) && Ce(f.value, b);
        }
      }
      function fe(f) {
        return typeof f == "object" && f !== null && f.$$typeof === ke;
      }
      function Ce(f, b) {
        if (f._store && !f._store.validated && f.key == null && (f._store.validated = 1, b = Q(b), !na[b])) {
          na[b] = !0;
          var R = "";
          f && f._owner != null && f._owner !== D() && (R = null, typeof f._owner.tag == "number" ? R = d(f._owner.type) : typeof f._owner.name == "string" && (R = f._owner.name), R = " It was passed a child from " + R + ".");
          var P = Z.getCurrentStack;
          Z.getCurrentStack = function() {
            var H = A(f.type);
            return P && (H += P() || ""), H;
          }, console.error(
            'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
            b,
            R
          ), Z.getCurrentStack = P;
        }
      }
      function Q(f) {
        var b = "", R = D();
        return R && (R = d(R.type)) && (b = `

Check the render method of \`` + R + "`."), b || (f = d(f)) && (b = `

Check the top-level render call using <` + f + ">."), b;
      }
      function ge(f) {
        var b = { "=": "=0", ":": "=2" };
        return "$" + f.replace(/[=:]/g, function(R) {
          return b[R];
        });
      }
      function te(f, b) {
        return typeof f == "object" && f !== null && f.key != null ? (c(f.key), ge("" + f.key)) : b.toString(36);
      }
      function Ee() {
      }
      function O(f) {
        switch (f.status) {
          case "fulfilled":
            return f.value;
          case "rejected":
            throw f.reason;
          default:
            switch (typeof f.status == "string" ? f.then(Ee, Ee) : (f.status = "pending", f.then(
              function(b) {
                f.status === "pending" && (f.status = "fulfilled", f.value = b);
              },
              function(b) {
                f.status === "pending" && (f.status = "rejected", f.reason = b);
              }
            )), f.status) {
              case "fulfilled":
                return f.value;
              case "rejected":
                throw f.reason;
            }
        }
        throw f;
      }
      function M(f, b, R, P, H) {
        var V = typeof f;
        (V === "undefined" || V === "boolean") && (f = null);
        var q = !1;
        if (f === null) q = !0;
        else
          switch (V) {
            case "bigint":
            case "string":
            case "number":
              q = !0;
              break;
            case "object":
              switch (f.$$typeof) {
                case ke:
                case be:
                  q = !0;
                  break;
                case Ze:
                  return q = f._init, M(
                    q(f._payload),
                    b,
                    R,
                    P,
                    H
                  );
              }
          }
        if (q) {
          q = f, H = H(q);
          var he = P === "" ? "." + te(q, 0) : P;
          return ve(H) ? (R = "", he != null && (R = he.replace(aa, "$&/") + "/"), M(H, b, R, "", function(Se) {
            return Se;
          })) : H != null && (fe(H) && (H.key != null && (q && q.key === H.key || c(H.key)), R = ee(
            H,
            R + (H.key == null || q && q.key === H.key ? "" : ("" + H.key).replace(
              aa,
              "$&/"
            ) + "/") + he
          ), P !== "" && q != null && fe(q) && q.key == null && q._store && !q._store.validated && (R._store.validated = 2), H = R), b.push(H)), 1;
        }
        if (q = 0, he = P === "" ? "." : P + ":", ve(f))
          for (var pe = 0; pe < f.length; pe++)
            P = f[pe], V = he + te(P, pe), q += M(
              P,
              b,
              R,
              V,
              H
            );
        else if (pe = n(f), typeof pe == "function")
          for (pe === f.entries && (ra || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), ra = !0), f = pe.call(f), pe = 0; !(P = f.next()).done; )
            P = P.value, V = he + te(P, pe++), q += M(
              P,
              b,
              R,
              V,
              H
            );
        else if (V === "object") {
          if (typeof f.then == "function")
            return M(
              O(f),
              b,
              R,
              P,
              H
            );
          throw b = String(f), Error(
            "Objects are not valid as a React child (found: " + (b === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return q;
      }
      function I(f, b, R) {
        if (f == null) return f;
        var P = [], H = 0;
        return M(f, P, "", "", function(V) {
          return b.call(R, V, H++);
        }), P;
      }
      function z(f) {
        if (f._status === -1) {
          var b = f._result;
          b = b(), b.then(
            function(R) {
              (f._status === 0 || f._status === -1) && (f._status = 1, f._result = R);
            },
            function(R) {
              (f._status === 0 || f._status === -1) && (f._status = 2, f._result = R);
            }
          ), f._status === -1 && (f._status = 0, f._result = b);
        }
        if (f._status === 1)
          return b = f._result, b === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            b
          ), "default" in b || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            b
          ), b.default;
        throw f._result;
      }
      function v() {
        var f = Z.H;
        return f === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), f;
      }
      function w() {
      }
      function L(f) {
        if (on === null)
          try {
            var b = ("require" + Math.random()).slice(0, 7);
            on = (r && r[b]).call(
              r,
              "timers"
            ).setImmediate;
          } catch {
            on = function(P) {
              sa === !1 && (sa = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var H = new MessageChannel();
              H.port1.onmessage = P, H.port2.postMessage(void 0);
            };
          }
        return on(f);
      }
      function B(f) {
        return 1 < f.length && typeof AggregateError == "function" ? new AggregateError(f) : f[0];
      }
      function $(f, b) {
        b !== ln - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), ln = b;
      }
      function le(f, b, R) {
        var P = Z.actQueue;
        if (P !== null)
          if (P.length !== 0)
            try {
              X(P), L(function() {
                return le(f, b, R);
              });
              return;
            } catch (H) {
              Z.thrownErrors.push(H);
            }
          else Z.actQueue = null;
        0 < Z.thrownErrors.length ? (P = B(Z.thrownErrors), Z.thrownErrors.length = 0, R(P)) : b(f);
      }
      function X(f) {
        if (!Xn) {
          Xn = !0;
          var b = 0;
          try {
            for (; b < f.length; b++) {
              var R = f[b];
              do {
                Z.didUsePromise = !1;
                var P = R(!1);
                if (P !== null) {
                  if (Z.didUsePromise) {
                    f[b] = R, f.splice(0, b);
                    return;
                  }
                  R = P;
                } else break;
              } while (!0);
            }
            f.length = 0;
          } catch (H) {
            f.splice(0, b + 1), Z.thrownErrors.push(H);
          } finally {
            Xn = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var ke = Symbol.for("react.transitional.element"), be = Symbol.for("react.portal"), Ye = Symbol.for("react.fragment"), xt = Symbol.for("react.strict_mode"), Mt = Symbol.for("react.profiler"), at = Symbol.for("react.consumer"), it = Symbol.for("react.context"), st = Symbol.for("react.forward_ref"), Xe = Symbol.for("react.suspense"), ot = Symbol.for("react.suspense_list"), lt = Symbol.for("react.memo"), Ze = Symbol.for("react.lazy"), sn = Symbol.for("react.offscreen"), Bt = Symbol.iterator, Ft = {}, y = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(f) {
          a(f, "forceUpdate");
        },
        enqueueReplaceState: function(f) {
          a(f, "replaceState");
        },
        enqueueSetState: function(f) {
          a(f, "setState");
        }
      }, F = Object.assign, U = {};
      Object.freeze(U), s.prototype.isReactComponent = {}, s.prototype.setState = function(f, b) {
        if (typeof f != "object" && typeof f != "function" && f != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, f, b, "setState");
      }, s.prototype.forceUpdate = function(f) {
        this.updater.enqueueForceUpdate(this, f, "forceUpdate");
      };
      var ue = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, we;
      for (we in ue)
        ue.hasOwnProperty(we) && t(we, ue[we]);
      o.prototype = s.prototype, ue = l.prototype = new o(), ue.constructor = l, F(ue, s.prototype), ue.isPureReactComponent = !0;
      var ve = Array.isArray, ne = Symbol.for("react.client.reference"), Z = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null
      }, He = Object.prototype.hasOwnProperty, Me = Symbol.for("react.client.reference"), De = 0, Qe, qe, ut, je, Jr, Yr, Xr;
      h.__reactDisabledLog = !0;
      var Kn, Zr, Jn = !1, Yn = new (typeof WeakMap == "function" ? WeakMap : Map)(), ts = Symbol.for("react.client.reference"), Qr, ea, ta = {}, na = {}, ra = !1, aa = /\/+/g, ia = typeof reportError == "function" ? reportError : function(f) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var b = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof f == "object" && f !== null && typeof f.message == "string" ? String(f.message) : String(f),
            error: f
          });
          if (!window.dispatchEvent(b)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", f);
          return;
        }
        console.error(f);
      }, sa = !1, on = null, ln = 0, un = !1, Xn = !1, oa = typeof queueMicrotask == "function" ? function(f) {
        queueMicrotask(function() {
          return queueMicrotask(f);
        });
      } : L;
      i.Children = {
        map: I,
        forEach: function(f, b, R) {
          I(
            f,
            function() {
              b.apply(this, arguments);
            },
            R
          );
        },
        count: function(f) {
          var b = 0;
          return I(f, function() {
            b++;
          }), b;
        },
        toArray: function(f) {
          return I(f, function(b) {
            return b;
          }) || [];
        },
        only: function(f) {
          if (!fe(f))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return f;
        }
      }, i.Component = s, i.Fragment = Ye, i.Profiler = Mt, i.PureComponent = l, i.StrictMode = xt, i.Suspense = Xe, i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Z, i.act = function(f) {
        var b = Z.actQueue, R = ln;
        ln++;
        var P = Z.actQueue = b !== null ? b : [], H = !1;
        try {
          var V = f();
        } catch (pe) {
          Z.thrownErrors.push(pe);
        }
        if (0 < Z.thrownErrors.length)
          throw $(b, R), f = B(Z.thrownErrors), Z.thrownErrors.length = 0, f;
        if (V !== null && typeof V == "object" && typeof V.then == "function") {
          var q = V;
          return oa(function() {
            H || un || (un = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(pe, Se) {
              H = !0, q.then(
                function(Le) {
                  if ($(b, R), R === 0) {
                    try {
                      X(P), L(function() {
                        return le(
                          Le,
                          pe,
                          Se
                        );
                      });
                    } catch (Ve) {
                      Z.thrownErrors.push(Ve);
                    }
                    if (0 < Z.thrownErrors.length) {
                      var ct = B(
                        Z.thrownErrors
                      );
                      Z.thrownErrors.length = 0, Se(ct);
                    }
                  } else pe(Le);
                },
                function(Le) {
                  $(b, R), 0 < Z.thrownErrors.length && (Le = B(
                    Z.thrownErrors
                  ), Z.thrownErrors.length = 0), Se(Le);
                }
              );
            }
          };
        }
        var he = V;
        if ($(b, R), R === 0 && (X(P), P.length !== 0 && oa(function() {
          H || un || (un = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), Z.actQueue = null), 0 < Z.thrownErrors.length)
          throw f = B(Z.thrownErrors), Z.thrownErrors.length = 0, f;
        return {
          then: function(pe, Se) {
            H = !0, R === 0 ? (Z.actQueue = P, L(function() {
              return le(
                he,
                pe,
                Se
              );
            })) : pe(he);
          }
        };
      }, i.cache = function(f) {
        return function() {
          return f.apply(null, arguments);
        };
      }, i.cloneElement = function(f, b, R) {
        if (f == null)
          throw Error(
            "The argument must be a React element, but you passed " + f + "."
          );
        var P = F({}, f.props), H = f.key, V = f._owner;
        if (b != null) {
          var q;
          e: {
            if (He.call(b, "ref") && (q = Object.getOwnPropertyDescriptor(
              b,
              "ref"
            ).get) && q.isReactWarning) {
              q = !1;
              break e;
            }
            q = b.ref !== void 0;
          }
          q && (V = D()), N(b) && (c(b.key), H = "" + b.key);
          for (he in b)
            !He.call(b, he) || he === "key" || he === "__self" || he === "__source" || he === "ref" && b.ref === void 0 || (P[he] = b[he]);
        }
        var he = arguments.length - 2;
        if (he === 1) P.children = R;
        else if (1 < he) {
          q = Array(he);
          for (var pe = 0; pe < he; pe++)
            q[pe] = arguments[pe + 2];
          P.children = q;
        }
        for (P = de(f.type, H, void 0, void 0, V, P), H = 2; H < arguments.length; H++)
          me(arguments[H], P.type);
        return P;
      }, i.createContext = function(f) {
        return f = {
          $$typeof: it,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, f.Provider = f, f.Consumer = {
          $$typeof: at,
          _context: f
        }, f._currentRenderer = null, f._currentRenderer2 = null, f;
      }, i.createElement = function(f, b, R) {
        if (p(f))
          for (var P = 2; P < arguments.length; P++)
            me(arguments[P], f);
        else {
          if (P = "", (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), f === null) var H = "null";
          else
            ve(f) ? H = "array" : f !== void 0 && f.$$typeof === ke ? (H = "<" + (d(f.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : H = typeof f;
          console.error(
            "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
            H,
            P
          );
        }
        var V;
        if (P = {}, H = null, b != null)
          for (V in ea || !("__self" in b) || "key" in b || (ea = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), N(b) && (c(b.key), H = "" + b.key), b)
            He.call(b, V) && V !== "key" && V !== "__self" && V !== "__source" && (P[V] = b[V]);
        var q = arguments.length - 2;
        if (q === 1) P.children = R;
        else if (1 < q) {
          for (var he = Array(q), pe = 0; pe < q; pe++)
            he[pe] = arguments[pe + 2];
          Object.freeze && Object.freeze(he), P.children = he;
        }
        if (f && f.defaultProps)
          for (V in q = f.defaultProps, q)
            P[V] === void 0 && (P[V] = q[V]);
        return H && x(
          P,
          typeof f == "function" ? f.displayName || f.name || "Unknown" : f
        ), de(f, H, void 0, void 0, D(), P);
      }, i.createRef = function() {
        var f = { current: null };
        return Object.seal(f), f;
      }, i.forwardRef = function(f) {
        f != null && f.$$typeof === lt ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof f != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          f === null ? "null" : typeof f
        ) : f.length !== 0 && f.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          f.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), f != null && f.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var b = { $$typeof: st, render: f }, R;
        return Object.defineProperty(b, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return R;
          },
          set: function(P) {
            R = P, f.name || f.displayName || (Object.defineProperty(f, "name", { value: P }), f.displayName = P);
          }
        }), b;
      }, i.isValidElement = fe, i.lazy = function(f) {
        return {
          $$typeof: Ze,
          _payload: { _status: -1, _result: f },
          _init: z
        };
      }, i.memo = function(f, b) {
        p(f) || console.error(
          "memo: The first argument must be a component. Instead received: %s",
          f === null ? "null" : typeof f
        ), b = {
          $$typeof: lt,
          type: f,
          compare: b === void 0 ? null : b
        };
        var R;
        return Object.defineProperty(b, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return R;
          },
          set: function(P) {
            R = P, f.name || f.displayName || (Object.defineProperty(f, "name", { value: P }), f.displayName = P);
          }
        }), b;
      }, i.startTransition = function(f) {
        var b = Z.T, R = {};
        Z.T = R, R._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var P = f(), H = Z.S;
          H !== null && H(R, P), typeof P == "object" && P !== null && typeof P.then == "function" && P.then(w, ia);
        } catch (V) {
          ia(V);
        } finally {
          b === null && R._updatedFibers && (f = R._updatedFibers.size, R._updatedFibers.clear(), 10 < f && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), Z.T = b;
        }
      }, i.unstable_useCacheRefresh = function() {
        return v().useCacheRefresh();
      }, i.use = function(f) {
        return v().use(f);
      }, i.useActionState = function(f, b, R) {
        return v().useActionState(
          f,
          b,
          R
        );
      }, i.useCallback = function(f, b) {
        return v().useCallback(f, b);
      }, i.useContext = function(f) {
        var b = v();
        return f.$$typeof === at && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), b.useContext(f);
      }, i.useDebugValue = function(f, b) {
        return v().useDebugValue(f, b);
      }, i.useDeferredValue = function(f, b) {
        return v().useDeferredValue(f, b);
      }, i.useEffect = function(f, b) {
        return v().useEffect(f, b);
      }, i.useId = function() {
        return v().useId();
      }, i.useImperativeHandle = function(f, b, R) {
        return v().useImperativeHandle(f, b, R);
      }, i.useInsertionEffect = function(f, b) {
        return v().useInsertionEffect(f, b);
      }, i.useLayoutEffect = function(f, b) {
        return v().useLayoutEffect(f, b);
      }, i.useMemo = function(f, b) {
        return v().useMemo(f, b);
      }, i.useOptimistic = function(f, b) {
        return v().useOptimistic(f, b);
      }, i.useReducer = function(f, b, R) {
        return v().useReducer(f, b, R);
      }, i.useRef = function(f) {
        return v().useRef(f);
      }, i.useState = function(f) {
        return v().useState(f);
      }, i.useSyncExternalStore = function(f, b, R) {
        return v().useSyncExternalStore(
          f,
          b,
          R
        );
      }, i.useTransition = function() {
        return v().useTransition();
      }, i.version = "19.0.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(qt, qt.exports)), qt.exports;
}
var da;
function ii() {
  if (da) return fn.exports;
  da = 1;
  var r = {};
  return r.NODE_ENV === "production" ? fn.exports = is() : fn.exports = ss(), fn.exports;
}
var fa;
function os() {
  if (fa) return Ut;
  fa = 1;
  var r = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return r.NODE_ENV !== "production" && function() {
    function i(y) {
      if (y == null) return null;
      if (typeof y == "function")
        return y.$$typeof === z ? null : y.displayName || y.name || null;
      if (typeof y == "string") return y;
      switch (y) {
        case de:
          return "Fragment";
        case Y:
          return "Portal";
        case me:
          return "Profiler";
        case ee:
          return "StrictMode";
        case ge:
          return "Suspense";
        case te:
          return "SuspenseList";
      }
      if (typeof y == "object")
        switch (typeof y.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), y.$$typeof) {
          case Ce:
            return (y.displayName || "Context") + ".Provider";
          case fe:
            return (y._context.displayName || "Context") + ".Consumer";
          case Q:
            var F = y.render;
            return y = y.displayName, y || (y = F.displayName || F.name || "", y = y !== "" ? "ForwardRef(" + y + ")" : "ForwardRef"), y;
          case Ee:
            return F = y.displayName || null, F !== null ? F : i(y.type) || "Memo";
          case O:
            F = y._payload, y = y._init;
            try {
              return i(y(F));
            } catch {
            }
        }
      return null;
    }
    function e(y) {
      return "" + y;
    }
    function t(y) {
      try {
        e(y);
        var F = !1;
      } catch {
        F = !0;
      }
      if (F) {
        F = console;
        var U = F.error, ue = typeof Symbol == "function" && Symbol.toStringTag && y[Symbol.toStringTag] || y.constructor.name || "Object";
        return U.call(
          F,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ue
        ), e(y);
      }
    }
    function n() {
    }
    function a() {
      if (le === 0) {
        X = console.log, ke = console.info, be = console.warn, Ye = console.error, xt = console.group, Mt = console.groupCollapsed, at = console.groupEnd;
        var y = {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        };
        Object.defineProperties(console, {
          info: y,
          log: y,
          warn: y,
          error: y,
          group: y,
          groupCollapsed: y,
          groupEnd: y
        });
      }
      le++;
    }
    function s() {
      if (le--, le === 0) {
        var y = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: L({}, y, { value: X }),
          info: L({}, y, { value: ke }),
          warn: L({}, y, { value: be }),
          error: L({}, y, { value: Ye }),
          group: L({}, y, { value: xt }),
          groupCollapsed: L({}, y, { value: Mt }),
          groupEnd: L({}, y, { value: at })
        });
      }
      0 > le && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function o(y) {
      if (it === void 0)
        try {
          throw Error();
        } catch (U) {
          var F = U.stack.trim().match(/\n( *(at )?)/);
          it = F && F[1] || "", st = -1 < U.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < U.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + it + y + st;
    }
    function l(y, F) {
      if (!y || Xe) return "";
      var U = ot.get(y);
      if (U !== void 0) return U;
      Xe = !0, U = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var ue = null;
      ue = v.H, v.H = null, a();
      try {
        var we = {
          DetermineComponentFrameRoot: function() {
            try {
              if (F) {
                var qe = function() {
                  throw Error();
                };
                if (Object.defineProperty(qe.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(qe, []);
                  } catch (je) {
                    var ut = je;
                  }
                  Reflect.construct(y, [], qe);
                } else {
                  try {
                    qe.call();
                  } catch (je) {
                    ut = je;
                  }
                  y.call(qe.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (je) {
                  ut = je;
                }
                (qe = y()) && typeof qe.catch == "function" && qe.catch(function() {
                });
              }
            } catch (je) {
              if (je && ut && typeof je.stack == "string")
                return [je.stack, ut.stack];
            }
            return [null, null];
          }
        };
        we.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var ve = Object.getOwnPropertyDescriptor(
          we.DetermineComponentFrameRoot,
          "name"
        );
        ve && ve.configurable && Object.defineProperty(
          we.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var ne = we.DetermineComponentFrameRoot(), Z = ne[0], He = ne[1];
        if (Z && He) {
          var Me = Z.split(`
`), De = He.split(`
`);
          for (ne = ve = 0; ve < Me.length && !Me[ve].includes(
            "DetermineComponentFrameRoot"
          ); )
            ve++;
          for (; ne < De.length && !De[ne].includes(
            "DetermineComponentFrameRoot"
          ); )
            ne++;
          if (ve === Me.length || ne === De.length)
            for (ve = Me.length - 1, ne = De.length - 1; 1 <= ve && 0 <= ne && Me[ve] !== De[ne]; )
              ne--;
          for (; 1 <= ve && 0 <= ne; ve--, ne--)
            if (Me[ve] !== De[ne]) {
              if (ve !== 1 || ne !== 1)
                do
                  if (ve--, ne--, 0 > ne || Me[ve] !== De[ne]) {
                    var Qe = `
` + Me[ve].replace(
                      " at new ",
                      " at "
                    );
                    return y.displayName && Qe.includes("<anonymous>") && (Qe = Qe.replace("<anonymous>", y.displayName)), typeof y == "function" && ot.set(y, Qe), Qe;
                  }
                while (1 <= ve && 0 <= ne);
              break;
            }
        }
      } finally {
        Xe = !1, v.H = ue, s(), Error.prepareStackTrace = U;
      }
      return Me = (Me = y ? y.displayName || y.name : "") ? o(Me) : "", typeof y == "function" && ot.set(y, Me), Me;
    }
    function u(y) {
      if (y == null) return "";
      if (typeof y == "function") {
        var F = y.prototype;
        return l(
          y,
          !(!F || !F.isReactComponent)
        );
      }
      if (typeof y == "string") return o(y);
      switch (y) {
        case ge:
          return o("Suspense");
        case te:
          return o("SuspenseList");
      }
      if (typeof y == "object")
        switch (y.$$typeof) {
          case Q:
            return y = l(y.render, !1), y;
          case Ee:
            return u(y.type);
          case O:
            F = y._payload, y = y._init;
            try {
              return u(y(F));
            } catch {
            }
        }
      return "";
    }
    function c() {
      var y = v.A;
      return y === null ? null : y.getOwner();
    }
    function d(y) {
      if (w.call(y, "key")) {
        var F = Object.getOwnPropertyDescriptor(y, "key").get;
        if (F && F.isReactWarning) return !1;
      }
      return y.key !== void 0;
    }
    function p(y, F) {
      function U() {
        Ze || (Ze = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          F
        ));
      }
      U.isReactWarning = !0, Object.defineProperty(y, "key", {
        get: U,
        configurable: !0
      });
    }
    function h() {
      var y = i(this.type);
      return sn[y] || (sn[y] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), y = this.props.ref, y !== void 0 ? y : null;
    }
    function g(y, F, U, ue, we, ve) {
      return U = ve.ref, y = {
        $$typeof: x,
        type: y,
        key: F,
        props: ve,
        _owner: we
      }, (U !== void 0 ? U : null) !== null ? Object.defineProperty(y, "ref", {
        enumerable: !1,
        get: h
      }) : Object.defineProperty(y, "ref", { enumerable: !1, value: null }), y._store = {}, Object.defineProperty(y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(y, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    }
    function k(y, F, U, ue, we, ve) {
      if (typeof y == "string" || typeof y == "function" || y === de || y === me || y === ee || y === ge || y === te || y === M || typeof y == "object" && y !== null && (y.$$typeof === O || y.$$typeof === Ee || y.$$typeof === Ce || y.$$typeof === fe || y.$$typeof === Q || y.$$typeof === B || y.getModuleId !== void 0)) {
        var ne = F.children;
        if (ne !== void 0)
          if (ue)
            if ($(ne)) {
              for (ue = 0; ue < ne.length; ue++)
                S(ne[ue], y);
              Object.freeze && Object.freeze(ne);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else S(ne, y);
      } else
        ne = "", (y === void 0 || typeof y == "object" && y !== null && Object.keys(y).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), y === null ? ue = "null" : $(y) ? ue = "array" : y !== void 0 && y.$$typeof === x ? (ue = "<" + (i(y.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : ue = typeof y, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          ue,
          ne
        );
      if (w.call(F, "key")) {
        ne = i(y);
        var Z = Object.keys(F).filter(function(Me) {
          return Me !== "key";
        });
        ue = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", Bt[ne + ue] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ue,
          ne,
          Z,
          ne
        ), Bt[ne + ue] = !0);
      }
      if (ne = null, U !== void 0 && (t(U), ne = "" + U), d(F) && (t(F.key), ne = "" + F.key), "key" in F) {
        U = {};
        for (var He in F)
          He !== "key" && (U[He] = F[He]);
      } else U = F;
      return ne && p(
        U,
        typeof y == "function" ? y.displayName || y.name || "Unknown" : y
      ), g(y, ne, ve, we, c(), U);
    }
    function S(y, F) {
      if (typeof y == "object" && y && y.$$typeof !== lt) {
        if ($(y))
          for (var U = 0; U < y.length; U++) {
            var ue = y[U];
            T(ue) && A(ue, F);
          }
        else if (T(y))
          y._store && (y._store.validated = 1);
        else if (y === null || typeof y != "object" ? U = null : (U = I && y[I] || y["@@iterator"], U = typeof U == "function" ? U : null), typeof U == "function" && U !== y.entries && (U = U.call(y), U !== y))
          for (; !(y = U.next()).done; )
            T(y.value) && A(y.value, F);
      }
    }
    function T(y) {
      return typeof y == "object" && y !== null && y.$$typeof === x;
    }
    function A(y, F) {
      if (y._store && !y._store.validated && y.key == null && (y._store.validated = 1, F = D(F), !Ft[F])) {
        Ft[F] = !0;
        var U = "";
        y && y._owner != null && y._owner !== c() && (U = null, typeof y._owner.tag == "number" ? U = i(y._owner.type) : typeof y._owner.name == "string" && (U = y._owner.name), U = " It was passed a child from " + U + ".");
        var ue = v.getCurrentStack;
        v.getCurrentStack = function() {
          var we = u(y.type);
          return ue && (we += ue() || ""), we;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          F,
          U
        ), v.getCurrentStack = ue;
      }
    }
    function D(y) {
      var F = "", U = c();
      return U && (U = i(U.type)) && (F = `

Check the render method of \`` + U + "`."), F || (y = i(y)) && (F = `

Check the top-level render call using <` + y + ">."), F;
    }
    var N = ii(), x = Symbol.for("react.transitional.element"), Y = Symbol.for("react.portal"), de = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), me = Symbol.for("react.profiler"), fe = Symbol.for("react.consumer"), Ce = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), ge = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), Ee = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), I = Symbol.iterator, z = Symbol.for("react.client.reference"), v = N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = Object.prototype.hasOwnProperty, L = Object.assign, B = Symbol.for("react.client.reference"), $ = Array.isArray, le = 0, X, ke, be, Ye, xt, Mt, at;
    n.__reactDisabledLog = !0;
    var it, st, Xe = !1, ot = new (typeof WeakMap == "function" ? WeakMap : Map)(), lt = Symbol.for("react.client.reference"), Ze, sn = {}, Bt = {}, Ft = {};
    Ut.Fragment = de, Ut.jsx = function(y, F, U, ue, we) {
      return k(y, F, U, !1, ue, we);
    }, Ut.jsxs = function(y, F, U, ue, we) {
      return k(y, F, U, !0, ue, we);
    };
  }(), Ut;
}
var pa;
function ls() {
  if (pa) return dn.exports;
  pa = 1;
  var r = {};
  return r.NODE_ENV === "production" ? dn.exports = as() : dn.exports = os(), dn.exports;
}
var Zn = ls(), si = ii();
const us = /* @__PURE__ */ rs(si), cs = /* @__PURE__ */ ns({
  __proto__: null,
  default: us
}, [si]);
function ds(r, i) {
  var e = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!e) {
    if (Array.isArray(r) || (e = Pr(r)) || i) {
      e && (r = e);
      var t = 0, n = function() {
      };
      return { s: n, n: function() {
        return t >= r.length ? { done: !0 } : { done: !1, value: r[t++] };
      }, e: function(u) {
        throw u;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a, s = !0, o = !1;
  return { s: function() {
    e = e.call(r);
  }, n: function() {
    var u = e.next();
    return s = u.done, u;
  }, e: function(u) {
    o = !0, a = u;
  }, f: function() {
    try {
      s || e.return == null || e.return();
    } finally {
      if (o) throw a;
    }
  } };
}
function fr(r) {
  var i = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return fr = function(t) {
    if (t === null || !ps(t)) return t;
    if (typeof t != "function") throw new TypeError("Super expression must either be null or a function");
    if (i !== void 0) {
      if (i.has(t)) return i.get(t);
      i.set(t, n);
    }
    function n() {
      return fs(t, arguments, Wt(this).constructor);
    }
    return n.prototype = Object.create(t.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), Kt(n, t);
  }, fr(r);
}
function fs(r, i, e) {
  if (Lr()) return Reflect.construct.apply(null, arguments);
  var t = [null];
  t.push.apply(t, i);
  var n = new (r.bind.apply(r, t))();
  return e && Kt(n, e.prototype), n;
}
function ps(r) {
  try {
    return Function.toString.call(r).indexOf("[native code]") !== -1;
  } catch {
    return typeof r == "function";
  }
}
function K(r, i, e) {
  return i = Wt(i), hs(r, Lr() ? Reflect.construct(i, e || [], Wt(r).constructor) : i.apply(r, e));
}
function hs(r, i) {
  if (i && (G(i) == "object" || typeof i == "function")) return i;
  if (i !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Ot(r);
}
function Ot(r) {
  if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Lr() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Lr = function() {
    return !!r;
  })();
}
function Wt(r) {
  return Wt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, Wt(r);
}
function J(r, i) {
  if (typeof i != "function" && i !== null) throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(i && i.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), i && Kt(r, i);
}
function Kt(r, i) {
  return Kt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
    return e.__proto__ = t, e;
  }, Kt(r, i);
}
function Or(r, i) {
  return gs(r) || vs(r, i) || Pr(r, i) || ms();
}
function ms() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vs(r, i) {
  var e = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (e != null) {
    var t, n, a, s, o = [], l = !0, u = !1;
    try {
      if (a = (e = e.call(r)).next, i !== 0) for (; !(l = (t = a.call(e)).done) && (o.push(t.value), o.length !== i); l = !0) ;
    } catch (c) {
      u = !0, n = c;
    } finally {
      try {
        if (!l && e.return != null && (s = e.return(), Object(s) !== s)) return;
      } finally {
        if (u) throw n;
      }
    }
    return o;
  }
}
function gs(r) {
  if (Array.isArray(r)) return r;
}
function m() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  m = function() {
    return i;
  };
  var r, i = {}, e = Object.prototype, t = e.hasOwnProperty, n = Object.defineProperty || function(O, M, I) {
    O[M] = I.value;
  }, a = typeof Symbol == "function" ? Symbol : {}, s = a.iterator || "@@iterator", o = a.asyncIterator || "@@asyncIterator", l = a.toStringTag || "@@toStringTag";
  function u(O, M, I) {
    return Object.defineProperty(O, M, { value: I, enumerable: !0, configurable: !0, writable: !0 }), O[M];
  }
  try {
    u({}, "");
  } catch {
    u = function(I, z, v) {
      return I[z] = v;
    };
  }
  function c(O, M, I, z) {
    var v = M && M.prototype instanceof T ? M : T, w = Object.create(v.prototype), L = new te(z || []);
    return n(w, "_invoke", { value: fe(O, I, L) }), w;
  }
  function d(O, M, I) {
    try {
      return { type: "normal", arg: O.call(M, I) };
    } catch (z) {
      return { type: "throw", arg: z };
    }
  }
  i.wrap = c;
  var p = "suspendedStart", h = "suspendedYield", g = "executing", k = "completed", S = {};
  function T() {
  }
  function A() {
  }
  function D() {
  }
  var N = {};
  u(N, s, function() {
    return this;
  });
  var x = Object.getPrototypeOf, Y = x && x(x(Ee([])));
  Y && Y !== e && t.call(Y, s) && (N = Y);
  var de = D.prototype = T.prototype = Object.create(N);
  function ee(O) {
    ["next", "throw", "return"].forEach(function(M) {
      u(O, M, function(I) {
        return this._invoke(M, I);
      });
    });
  }
  function me(O, M) {
    function I(v, w, L, B) {
      var $ = d(O[v], O, w);
      if ($.type !== "throw") {
        var le = $.arg, X = le.value;
        return X && G(X) == "object" && t.call(X, "__await") ? M.resolve(X.__await).then(function(ke) {
          I("next", ke, L, B);
        }, function(ke) {
          I("throw", ke, L, B);
        }) : M.resolve(X).then(function(ke) {
          le.value = ke, L(le);
        }, function(ke) {
          return I("throw", ke, L, B);
        });
      }
      B($.arg);
    }
    var z;
    n(this, "_invoke", { value: function(w, L) {
      function B() {
        return new M(function($, le) {
          I(w, L, $, le);
        });
      }
      return z = z ? z.then(B, B) : B();
    } });
  }
  function fe(O, M, I) {
    var z = p;
    return function(v, w) {
      if (z === g) throw Error("Generator is already running");
      if (z === k) {
        if (v === "throw") throw w;
        return { value: r, done: !0 };
      }
      for (I.method = v, I.arg = w; ; ) {
        var L = I.delegate;
        if (L) {
          var B = Ce(L, I);
          if (B) {
            if (B === S) continue;
            return B;
          }
        }
        if (I.method === "next") I.sent = I._sent = I.arg;
        else if (I.method === "throw") {
          if (z === p) throw z = k, I.arg;
          I.dispatchException(I.arg);
        } else I.method === "return" && I.abrupt("return", I.arg);
        z = g;
        var $ = d(O, M, I);
        if ($.type === "normal") {
          if (z = I.done ? k : h, $.arg === S) continue;
          return { value: $.arg, done: I.done };
        }
        $.type === "throw" && (z = k, I.method = "throw", I.arg = $.arg);
      }
    };
  }
  function Ce(O, M) {
    var I = M.method, z = O.iterator[I];
    if (z === r) return M.delegate = null, I === "throw" && O.iterator.return && (M.method = "return", M.arg = r, Ce(O, M), M.method === "throw") || I !== "return" && (M.method = "throw", M.arg = new TypeError("The iterator does not provide a '" + I + "' method")), S;
    var v = d(z, O.iterator, M.arg);
    if (v.type === "throw") return M.method = "throw", M.arg = v.arg, M.delegate = null, S;
    var w = v.arg;
    return w ? w.done ? (M[O.resultName] = w.value, M.next = O.nextLoc, M.method !== "return" && (M.method = "next", M.arg = r), M.delegate = null, S) : w : (M.method = "throw", M.arg = new TypeError("iterator result is not an object"), M.delegate = null, S);
  }
  function Q(O) {
    var M = { tryLoc: O[0] };
    1 in O && (M.catchLoc = O[1]), 2 in O && (M.finallyLoc = O[2], M.afterLoc = O[3]), this.tryEntries.push(M);
  }
  function ge(O) {
    var M = O.completion || {};
    M.type = "normal", delete M.arg, O.completion = M;
  }
  function te(O) {
    this.tryEntries = [{ tryLoc: "root" }], O.forEach(Q, this), this.reset(!0);
  }
  function Ee(O) {
    if (O || O === "") {
      var M = O[s];
      if (M) return M.call(O);
      if (typeof O.next == "function") return O;
      if (!isNaN(O.length)) {
        var I = -1, z = function v() {
          for (; ++I < O.length; ) if (t.call(O, I)) return v.value = O[I], v.done = !1, v;
          return v.value = r, v.done = !0, v;
        };
        return z.next = z;
      }
    }
    throw new TypeError(G(O) + " is not iterable");
  }
  return A.prototype = D, n(de, "constructor", { value: D, configurable: !0 }), n(D, "constructor", { value: A, configurable: !0 }), A.displayName = u(D, l, "GeneratorFunction"), i.isGeneratorFunction = function(O) {
    var M = typeof O == "function" && O.constructor;
    return !!M && (M === A || (M.displayName || M.name) === "GeneratorFunction");
  }, i.mark = function(O) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(O, D) : (O.__proto__ = D, u(O, l, "GeneratorFunction")), O.prototype = Object.create(de), O;
  }, i.awrap = function(O) {
    return { __await: O };
  }, ee(me.prototype), u(me.prototype, o, function() {
    return this;
  }), i.AsyncIterator = me, i.async = function(O, M, I, z, v) {
    v === void 0 && (v = Promise);
    var w = new me(c(O, M, I, z), v);
    return i.isGeneratorFunction(M) ? w : w.next().then(function(L) {
      return L.done ? L.value : w.next();
    });
  }, ee(de), u(de, l, "Generator"), u(de, s, function() {
    return this;
  }), u(de, "toString", function() {
    return "[object Generator]";
  }), i.keys = function(O) {
    var M = Object(O), I = [];
    for (var z in M) I.push(z);
    return I.reverse(), function v() {
      for (; I.length; ) {
        var w = I.pop();
        if (w in M) return v.value = w, v.done = !1, v;
      }
      return v.done = !0, v;
    };
  }, i.values = Ee, te.prototype = { constructor: te, reset: function(M) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(ge), !M) for (var I in this) I.charAt(0) === "t" && t.call(this, I) && !isNaN(+I.slice(1)) && (this[I] = r);
  }, stop: function() {
    this.done = !0;
    var M = this.tryEntries[0].completion;
    if (M.type === "throw") throw M.arg;
    return this.rval;
  }, dispatchException: function(M) {
    if (this.done) throw M;
    var I = this;
    function z(le, X) {
      return L.type = "throw", L.arg = M, I.next = le, X && (I.method = "next", I.arg = r), !!X;
    }
    for (var v = this.tryEntries.length - 1; v >= 0; --v) {
      var w = this.tryEntries[v], L = w.completion;
      if (w.tryLoc === "root") return z("end");
      if (w.tryLoc <= this.prev) {
        var B = t.call(w, "catchLoc"), $ = t.call(w, "finallyLoc");
        if (B && $) {
          if (this.prev < w.catchLoc) return z(w.catchLoc, !0);
          if (this.prev < w.finallyLoc) return z(w.finallyLoc);
        } else if (B) {
          if (this.prev < w.catchLoc) return z(w.catchLoc, !0);
        } else {
          if (!$) throw Error("try statement without catch or finally");
          if (this.prev < w.finallyLoc) return z(w.finallyLoc);
        }
      }
    }
  }, abrupt: function(M, I) {
    for (var z = this.tryEntries.length - 1; z >= 0; --z) {
      var v = this.tryEntries[z];
      if (v.tryLoc <= this.prev && t.call(v, "finallyLoc") && this.prev < v.finallyLoc) {
        var w = v;
        break;
      }
    }
    w && (M === "break" || M === "continue") && w.tryLoc <= I && I <= w.finallyLoc && (w = null);
    var L = w ? w.completion : {};
    return L.type = M, L.arg = I, w ? (this.method = "next", this.next = w.finallyLoc, S) : this.complete(L);
  }, complete: function(M, I) {
    if (M.type === "throw") throw M.arg;
    return M.type === "break" || M.type === "continue" ? this.next = M.arg : M.type === "return" ? (this.rval = this.arg = M.arg, this.method = "return", this.next = "end") : M.type === "normal" && I && (this.next = I), S;
  }, finish: function(M) {
    for (var I = this.tryEntries.length - 1; I >= 0; --I) {
      var z = this.tryEntries[I];
      if (z.finallyLoc === M) return this.complete(z.completion, z.afterLoc), ge(z), S;
    }
  }, catch: function(M) {
    for (var I = this.tryEntries.length - 1; I >= 0; --I) {
      var z = this.tryEntries[I];
      if (z.tryLoc === M) {
        var v = z.completion;
        if (v.type === "throw") {
          var w = v.arg;
          ge(z);
        }
        return w;
      }
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(M, I, z) {
    return this.delegate = { iterator: Ee(M), resultName: I, nextLoc: z }, this.method === "next" && (this.arg = r), S;
  } }, i;
}
function ha(r, i, e, t, n, a, s) {
  try {
    var o = r[a](s), l = o.value;
  } catch (u) {
    return void e(u);
  }
  o.done ? i(l) : Promise.resolve(l).then(t, n);
}
function C(r) {
  return function() {
    var i = this, e = arguments;
    return new Promise(function(t, n) {
      var a = r.apply(i, e);
      function s(l) {
        ha(a, t, n, s, o, "next", l);
      }
      function o(l) {
        ha(a, t, n, s, o, "throw", l);
      }
      s(void 0);
    });
  };
}
function Rn(r) {
  return ks(r) || bs(r) || Pr(r) || ys();
}
function ys() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pr(r, i) {
  if (r) {
    if (typeof r == "string") return pr(r, i);
    var e = {}.toString.call(r).slice(8, -1);
    return e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set" ? Array.from(r) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? pr(r, i) : void 0;
  }
}
function bs(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function ks(r) {
  if (Array.isArray(r)) return pr(r);
}
function pr(r, i) {
  (i == null || i > r.length) && (i = r.length);
  for (var e = 0, t = Array(i); e < i; e++) t[e] = r[e];
  return t;
}
function ma(r, i) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(r);
    i && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function ce(r) {
  for (var i = 1; i < arguments.length; i++) {
    var e = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ma(Object(e), !0).forEach(function(t) {
      Tn(r, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : ma(Object(e)).forEach(function(t) {
      Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return r;
}
function Tn(r, i, e) {
  return (i = oi(i)) in r ? Object.defineProperty(r, i, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : r[i] = e, r;
}
function G(r) {
  "@babel/helpers - typeof";
  return G = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
    return typeof i;
  } : function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, G(r);
}
function E(r, i) {
  if (!(r instanceof i)) throw new TypeError("Cannot call a class as a function");
}
function va(r, i) {
  for (var e = 0; e < i.length; e++) {
    var t = i[e];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(r, oi(t.key), t);
  }
}
function _(r, i, e) {
  return i && va(r.prototype, i), e && va(r, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function oi(r) {
  var i = Es(r, "string");
  return G(i) == "symbol" ? i : i + "";
}
function Es(r, i) {
  if (G(r) != "object" || !r) return r;
  var e = r[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(r, i);
    if (G(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var _s = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "render",
    value: function(e, t) {
      var n = document.createElement("div");
      n.id = "error-view", n.innerText = t, e.replaceChildren(n);
    }
  }]);
}(), Ss = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "onLoad",
    value: function(e) {
      e.innerHTML = '<div id="loading-validate-key-property"></div>';
    }
  }, {
    key: "createElements",
    value: function() {
      var e = document.createElement("div");
      return e.id = "validate-property-key-view", e;
    }
  }, {
    key: "render",
    value: function(e, t, n) {
      var a = r.createElements(), s = {
        onSuccess: t,
        onFail: _s.render.bind(this, e, "Your 'key' has failed authentication"),
        onLoad: r.onLoad.bind(this, a)
      };
      n.key && n.verifyKey(n.key, s), e.replaceChildren(a);
    }
  }]);
}(), Re = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "unsetStyle",
    value: function(e, t) {
      var n = Object.keys(t).reduce(function(a, s) {
        return a[s] = "", a;
      }, {});
      Object.assign(e.style, n);
    }
  }, {
    key: "unsetActivityCSSMouseStates",
    value: function(e, t) {
      t.click && r.unsetStyle(e, t.click), t.hover && r.unsetStyle(e, t.hover);
    }
  }, {
    key: "unsetAllCSSMouseStates",
    value: function(e, t) {
      r.unsetActivityCSSMouseStates(e, t), t.default && r.unsetStyle(e, t.default);
    }
  }, {
    key: "processStateful",
    value: function(e, t, n) {
      var a = e.default || {}, s = Object.assign(JSON.parse(JSON.stringify(ce(ce({}, a), t))), e == null ? void 0 : e.hover), o = Object.assign(JSON.parse(JSON.stringify(ce(ce({}, s), n))), e == null ? void 0 : e.click);
      return {
        default: a,
        hover: s,
        click: o
      };
    }
  }, {
    key: "mergeStatefulStyles",
    value: function(e) {
      var t = {
        default: {},
        hover: {},
        click: {}
      };
      return e.forEach(function(n) {
        t.default = Object.assign(t.default, n.default), t.hover = Object.assign(t.hover, n.hover), t.click = Object.assign(t.click, n.click);
      }), t;
    }
  }, {
    key: "overwriteDefaultWithAlreadyApplied",
    value: function(e, t) {
      Object.keys(e.default || []).forEach(function(n) {
        var a, s = n;
        t.style[s] && (a = e.default) != null && a[s] && (e.default[n] = t.style[s]);
      });
    }
  }, {
    key: "applyToStyleIfNotDefined",
    value: function(e, t) {
      for (var n in t) {
        var a = t[n];
        e[n] === "" && a && (e[n] = a);
      }
    }
  }]);
}(), hr = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "attemptAppendStyleSheetToHead",
    value: function(e) {
      if (!(e.fontFamily && e.fontFamily !== r.DEFAULT_FONT_FAMILY)) {
        var t = document.getElementsByTagName("head")[0];
        if (!Array.from(t.getElementsByTagName("link")).some(function(a) {
          return a.getAttribute("href") === r.FONT_URL;
        })) {
          var n = document.createElement("link");
          n.rel = "stylesheet", n.href = r.FONT_URL, t.appendChild(n);
        }
      }
    }
  }]);
}();
hr.FONT_URL = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap", hr.DEFAULT_FONT_FAMILY = "'Inter', sans-serif, Avenir, Helvetica, Arial";
var li = hr, ui = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "apply",
    value: function(e, t) {
      if (t) try {
        r.applyStyleSheet(e, t);
      } catch {
        r.addStyleElement(e, t);
      }
    }
  }, {
    key: "applyStyleSheet",
    value: function(e, t) {
      var n = new CSSStyleSheet();
      n.replaceSync(e), t.adoptedStyleSheets.push(n);
    }
  }, {
    key: "addStyleElement",
    value: function(e, t) {
      var n = document.createElement("style");
      n.innerHTML = e, t.appendChild(n);
    }
  }, {
    key: "applyDefaultStyleToComponent",
    value: function(e, t) {
      t && Re.applyToStyleIfNotDefined(e, t), Re.applyToStyleIfNotDefined(e, r.DEFAULT_COMPONENT_STYLE);
    }
  }]);
}();
ui.DEFAULT_COMPONENT_STYLE = {
  height: "350px",
  width: "320px",
  borderTop: "1px solid #cacaca",
  borderRight: "1px solid #cacaca",
  borderLeft: "1px solid #cacaca",
  borderBottom: "1px solid #cacaca",
  fontFamily: li.DEFAULT_FONT_FAMILY,
  fontSize: "0.9rem",
  backgroundColor: "white",
  position: "relative",
  // this is used to prevent inputAreaStyle background color from going beyond the container's rounded border
  // it will cause issues if there are elements that are meant to be outside of the chat component and in
  // that instance they should overwrite this
  // this is also causing the chat to squeeze when there is no space
  overflow: "hidden"
};
var Qn = ui, pn, Pt = (pn = /* @__PURE__ */ _(function r() {
  E(this, r);
}), pn.IS_SAFARI = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), pn.IS_CHROMIUM = window.chrome, pn), xe = /* @__PURE__ */ function(r) {
  return r.ESCAPE = "Escape", r.ENTER = "Enter", r.TAB = "Tab", r.ARROW_UP = "ArrowUp", r.ARROW_DOWN = "ArrowDown", r.ARROW_RIGHT = "ArrowRight", r.ARROW_LEFT = "ArrowLeft", r.BACKSPACE = "Backspace", r.DELETE = "Delete", r.META = "Meta", r.CONTROL = "Control", r;
}(xe || {}), ci = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "add",
    value: (
      // prettier-ignore
      function(e, t, n, a) {
        n !== void 0 && e.addEventListener("keydown", r.onKeyDown.bind(this, n)), e.oninput = r.onInput.bind(this, n, a), e.addEventListener("paste", function(s) {
          var o;
          s.preventDefault(), (o = s.clipboardData) != null && o.files.length && t.addFilesToAnyType(Array.from(s.clipboardData.files));
        });
      }
    )
    // preventing insertion early for a nicer UX
    // prettier-ignore
  }, {
    key: "onKeyDown",
    value: function(e, t) {
      var n = t.target.textContent;
      n && n.length >= e && !r.PERMITTED_KEYS.has(t.key) && !r.isKeyCombinationPermitted(t) && t.preventDefault();
    }
  }, {
    key: "isKeyCombinationPermitted",
    value: function(e) {
      return e.key === "a" ? e.ctrlKey || e.metaKey : !1;
    }
  }, {
    key: "onInput",
    value: function(e, t, n) {
      var a = n.target, s = a.textContent || "";
      e !== void 0 && s.length > e && (a.textContent = s.substring(0, e), Nr.focusEndOfInput(a)), t == null || t();
    }
  }]);
}();
ci.PERMITTED_KEYS = /* @__PURE__ */ new Set([xe.BACKSPACE, xe.DELETE, xe.ARROW_RIGHT, xe.ARROW_LEFT, xe.ARROW_DOWN, xe.ARROW_UP, xe.META, xe.CONTROL, xe.ENTER]);
var ws = ci, Cs = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "sanitizePastedTextContent",
    value: function(e) {
      var t, n;
      e.preventDefault();
      var a = (t = e.clipboardData) == null ? void 0 : t.getData("text/plain");
      a && ((n = document.execCommand) == null || n.call(document, "insertText", !1, a));
    }
  }]);
}(), di = /* @__PURE__ */ function() {
  function r(i, e, t) {
    var n = this;
    E(this, r);
    var a, s, o = r.processConfig(e, i.textInput);
    this.elementRef = r.createContainerElement((a = o == null ? void 0 : o.styles) == null ? void 0 : a.container), this._config = o, this.inputElementRef = this.createInputElement(), this.elementRef.appendChild(this.inputElementRef), i.setPlaceholderText = this.setPlaceholderText.bind(this), i.setPlaceholderText(((s = this._config.placeholder) == null ? void 0 : s.text) || "Ask me anything!"), setTimeout(function() {
      ws.add(n.inputElementRef, t, n._config.characterLimit, i._validationHandler);
    });
  }
  return _(r, [{
    key: "clear",
    value: (
      // this also similarly prevents scroll up
      function() {
        var e, t = window.scrollY;
        this.inputElementRef.classList.contains("text-input-disabled") || (Object.assign(this.inputElementRef.style, (e = this._config.placeholder) == null ? void 0 : e.style), this.inputElementRef.textContent = "", Nr.focusEndOfInput(this.inputElementRef)), Pt.IS_CHROMIUM && window.scrollTo({
          top: t
        });
      }
    )
  }, {
    key: "createInputElement",
    value: function() {
      var e, t, n, a, s = document.createElement("div");
      return s.id = r.TEXT_INPUT_ID, s.classList.add("text-input-styling"), Pt.IS_CHROMIUM && r.preventAutomaticScrollUpOnNewLine(s), typeof this._config.disabled == "boolean" && this._config.disabled === !0 ? (s.contentEditable = "false", s.classList.add("text-input-disabled")) : (s.contentEditable = "true", this.addEventListeners(s)), Object.assign(s.style, (e = this._config.styles) == null ? void 0 : e.text), Object.assign(s.style, (t = this._config.placeholder) == null ? void 0 : t.style), (a = (n = this._config.placeholder) == null ? void 0 : n.style) != null && a.color || s.setAttribute("textcolor", ""), s;
    }
  }, {
    key: "removePlaceholderStyle",
    value: function() {
      var e, t, n, a;
      !this.inputElementRef.classList.contains("text-input-disabled") && (e = this._config.placeholder) != null && e.style && (Re.unsetStyle(this.inputElementRef, (t = this._config.placeholder) == null ? void 0 : t.style), Object.assign(this.inputElementRef.style, (a = (n = this._config) == null ? void 0 : n.styles) == null ? void 0 : a.text));
    }
  }, {
    key: "addEventListeners",
    value: function(e) {
      var t = this, n, a;
      (n = this._config.styles) != null && n.focus && (e.onfocus = function() {
        var s;
        return Object.assign(t.elementRef.style, (s = t._config.styles) == null ? void 0 : s.focus);
      }, e.onblur = this.onBlur.bind(this, this._config.styles.focus, (a = this._config.styles) == null ? void 0 : a.container)), e.addEventListener("keydown", this.onKeydown.bind(this)), e.addEventListener("input", this.onInput.bind(this)), e.addEventListener("paste", Cs.sanitizePastedTextContent);
    }
  }, {
    key: "onBlur",
    value: function(e, t) {
      Re.unsetStyle(this.elementRef, e), t && Object.assign(this.elementRef.style, t);
    }
  }, {
    key: "onKeydown",
    value: function(e) {
      var t;
      e.key === xe.ENTER && !e.ctrlKey && !e.shiftKey && (e.preventDefault(), (t = this.submit) == null || t.call(this));
    }
  }, {
    key: "onInput",
    value: function() {
      var e;
      this.isTextInputEmpty() ? Object.assign(this.inputElementRef.style, (e = this._config.placeholder) == null ? void 0 : e.style) : this.removePlaceholderStyle();
    }
  }, {
    key: "setPlaceholderText",
    value: function(e) {
      this.inputElementRef.setAttribute("deep-chat-placeholder-text", e);
    }
  }, {
    key: "isTextInputEmpty",
    value: function() {
      return this.inputElementRef.textContent === "";
    }
  }], [{
    key: "processConfig",
    value: function(e, t) {
      var n, a, s, o, l;
      return (n = t) !== null && n !== void 0 || (t = {}), (a = t.disabled) !== null && a !== void 0 || (t.disabled = e.isTextInputDisabled), (s = t.placeholder) !== null && s !== void 0 || (t.placeholder = {}), (o = (l = t.placeholder).text) !== null && o !== void 0 || (l.text = e.textInputPlaceholderText), t;
    }
  }, {
    key: "createContainerElement",
    value: function(e) {
      var t = document.createElement("div");
      return t.id = "text-input-container", Object.assign(t.style, e), t;
    }
    // this is is a bug fix where if the browser is scrolled down and the user types in text that creates new line
    // the browser scrollbar will move up which leads to undesirable UX.
    // More details in this Stack Overflow question:
    // https://stackoverflow.com/questions/76285135/prevent-automatic-scroll-when-text-is-inserted-into-contenteditable-div
    // prettier-ignore
  }, {
    key: "preventAutomaticScrollUpOnNewLine",
    value: function(e) {
      var t;
      e.addEventListener("keydown", function() {
        t = window.scrollY;
      }), e.addEventListener("input", function() {
        t !== window.scrollY && window.scrollTo({
          top: t
        });
      });
    }
  }]);
}();
di.TEXT_INPUT_ID = "text-input";
var fi = di, Nr = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "focusEndOfInput",
    value: function(e) {
      var t = document.createRange();
      t.selectNodeContents(e), t.collapse(!1);
      var n = window.getSelection();
      n == null || n.removeAllRanges(), n == null || n.addRange(t);
    }
  }, {
    key: "focusFromParentElement",
    value: function(e) {
      var t = e.querySelector("#".concat(fi.TEXT_INPUT_ID));
      t && (Pt.IS_SAFARI && t.focus(), r.focusEndOfInput(t));
    }
  }]);
}();
function ga(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function Ts(r) {
  return r && JSON.stringify(r);
}
function Dr(r, i, e, t) {
  var n = `
`.concat(ga(i), " message: ").concat(JSON.stringify(r), ` 
`), a = e ? "".concat(ga(i), " message after interceptor: ").concat(Ts(t), ` 
`) : "";
  return n + a;
}
function As(r, i, e, t) {
  return "".concat(Dr(r, i, e, t), "Make sure the ").concat(i, ` message is using the Response format: https://deepchat.dev/docs/connect/#Response 
You can also augment it using the responseInterceptor property: https://deepchat.dev/docs/interceptors#responseInterceptor`);
}
function xs(r, i, e) {
  var t = "response";
  return "".concat(Dr(r, t, i, e), "Make sure the ").concat(t, ' message is using the {text: string} format, e.g: {text: "Model Response"}');
}
function Ms(r, i) {
  var e = "request";
  return "".concat(Dr(r, e, i), "Make sure the ").concat(e, ' message is using the {body: {text: string}} format, e.g: {body: {text: "Model Response"}}');
}
var ya = `Make sure the events are using {text: string} or {html: string} format.
You can also augment them using the responseInterceptor property: https://deepchat.dev/docs/interceptors#responseInterceptor`, _e = {
  INVALID_KEY: "Invalid API Key",
  CONNECTION_FAILED: "Failed to connect",
  INVALID_RESPONSE: As,
  INVALID_MODEL_REQUEST: Ms,
  INVALID_MODEL_RESPONSE: xs,
  INVALID_STREAM_EVENT: ya,
  INVALID_STREAM_EVENT_MIX: "Cannot mix {text: string} and {html: string} responses.",
  NO_VALID_STREAM_EVENTS_SENT: `No valid stream events were sent.
`.concat(ya)
}, pi = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "addElements",
    value: function(e) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
        n[a - 1] = arguments[a];
      n.forEach(function(s) {
        return e.appendChild(s);
      });
    }
  }, {
    key: "isScrollbarAtBottomOfElement",
    value: function(e) {
      var t = e.scrollHeight, n = e.clientHeight, a = e.scrollTop, s = t - n;
      return a >= s - r.CODE_SNIPPET_GENERATION_JUMP;
    }
  }, {
    key: "cloneElement",
    value: function(e) {
      var t = e.cloneNode(!0);
      return e.parentNode.replaceChild(t, e), t;
    }
  }, {
    key: "scrollToBottom",
    value: function(e) {
      e.scrollTop = e.scrollHeight;
    }
  }, {
    key: "scrollToTop",
    value: function(e) {
      e.scrollTop = 0;
    }
  }]);
}();
pi.CODE_SNIPPET_GENERATION_JUMP = 0.5;
var Ue = pi, hi = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "speak",
    value: function(e, t) {
      if (window.SpeechSynthesisUtterance) {
        var n = new SpeechSynthesisUtterance(e);
        Object.assign(n, t), speechSynthesis.speak(n);
      }
    }
  }, {
    key: "processConfig",
    value: function(e, t) {
      var n = {};
      setTimeout(function() {
        if (G(e) == "object" && (e.lang && (n.lang = e.lang), e.pitch && (n.pitch = e.pitch), e.rate && (n.rate = e.rate), e.volume && (n.volume = e.volume), e.voiceName)) {
          var a = window.speechSynthesis.getVoices().find(function(s) {
            var o;
            return s.name.toLocaleLowerCase() === ((o = e.voiceName) == null ? void 0 : o.toLocaleLowerCase());
          });
          a && (n.voice = a);
        }
        t(n);
      }, r.LOAD_VOICES_MS);
    }
  }]);
}();
hi.LOAD_VOICES_MS = 200;
var yn = hi, mr = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "colorToHex",
    value: function(e) {
      var t = document.createElement("div");
      return t.style.color = e, document.body.appendChild(t), "#".concat(window.getComputedStyle(t).color.match(/\d+/g).map(function(n) {
        return parseInt(n).toString(16).padStart(2, "0");
      }).join(""));
    }
  }, {
    key: "setDots",
    value: function(e, t) {
      var n, a, s, o;
      if ((o = (s = (a = (n = t == null ? void 0 : t.loading) == null ? void 0 : n.message) == null ? void 0 : a.styles) == null ? void 0 : s.bubble) != null && o.color) {
        var l = r.colorToHex(t.loading.message.styles.bubble.color);
        e.style.setProperty("--loading-message-color", l), e.style.setProperty("--loading-message-color-fade", "".concat(l, "33"));
      } else e.style.setProperty("--loading-message-color", "#848484"), e.style.setProperty("--loading-message-color-fade", "#55555533");
    }
  }, {
    key: "setRing",
    value: function(e, t) {
      var n = t || {}, a = n.color, s = n.width, o = n.height, l = n.margin, u = n.border;
      if (a) {
        var c = r.colorToHex(a);
        e.style.setProperty("--loading-history-color", c);
      } else e.style.setProperty("--loading-history-color", "#dbdbdb");
      e.style.setProperty("--loading-history-height", o || "57px"), e.style.setProperty("--loading-history-width", s || "57px"), e.style.setProperty("--loading-history-margin", l || "7px"), e.style.setProperty("--loading-history-border", u || "6px solid");
    }
  }]);
}();
mr.BUBBLE_CLASS = "deep-chat-loading-message-bubble", mr.DOTS_CONTAINER_CLASS = "deep-chat-loading-message-dots-container";
var mt = mr, vr = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "setElementProps",
    value: (
      // prettier-ignore
      function(e, t, n, a) {
        var s;
        n !== "loading" && (e.applyCustomStyles(t, a, !0, (s = e.messageStyles) == null ? void 0 : s[n]), t.bubbleElement.classList.add(r.FILE_BUBBLE_CLASS));
      }
    )
    // prettier-ignore
  }, {
    key: "addMessage",
    value: function(e, t, n, a, s) {
      r.setElementProps(e, t, n, a), s || (e.elementRef.appendChild(t.outerContainer), e.elementRef.scrollTop = e.elementRef.scrollHeight);
    }
  }, {
    key: "wrapInLink",
    value: function(e, t, n) {
      var a = document.createElement("a");
      return a.href = t, a.download = n || r.DEFAULT_FILE_NAME, a.target = "_blank", a.appendChild(e), a;
    }
  }, {
    key: "isNonLinkableDataUrl",
    value: function(e, t) {
      return !t.startsWith("data") || e === "image" ? !1 : e === "any" && t.startsWith("data:text/javascript") || !t.startsWith("data:image") && !t.startsWith("data:application");
    }
  }, {
    key: "processContent",
    value: function(e, t, n, a) {
      return !n || r.isNonLinkableDataUrl(e, n) ? t : r.wrapInLink(t, n, a);
    }
  }, {
    key: "waitToLoadThenScroll",
    value: function(e) {
      setTimeout(function() {
        e.scrollTop = e.scrollHeight;
      }, 60);
    }
  }, {
    key: "scrollDownOnImageLoad",
    value: function(e, t) {
      if (e.startsWith("data")) r.waitToLoadThenScroll(t);
      else try {
        fetch(e, {
          mode: "no-cors"
        }).catch(function() {
        }).finally(function() {
          r.waitToLoadThenScroll(t);
        });
      } catch {
        t.scrollTop = t.scrollHeight;
      }
    }
    // The strategy is to emit the actual file reference in the `onMessage` event for the user to inspect it
    // But it is not actually used by anything in the chat, hence it is removed when adding a message
    // after the body has been stringified and parsed - the file reference will disappear, hence this readds it
  }, {
    key: "reAddFileRefToObject",
    value: function(e, t) {
      var n;
      (n = e.files) == null || n.forEach(function(a, s) {
        var o;
        a.ref && (o = t.message.files) != null && o[s] && (t.message.files[s].ref = a.ref);
      });
    }
    // the chat does not use the actual file
  }, {
    key: "removeFileRef",
    value: function(e) {
      var t = ce({}, e);
      return delete t.ref, t;
    }
  }, {
    key: "isAudioFile",
    value: function(e) {
      var t = /\.(mp3|ogg|wav|aac|webm|4a)$/i, n = e.type, a = e.src;
      return n === "audio" || (a == null ? void 0 : a.startsWith("data:audio")) || a && t.test(a);
    }
  }, {
    key: "isImageFile",
    value: function(e) {
      var t = e.type, n = e.src;
      return t === "image" || (n == null ? void 0 : n.startsWith("data:image")) || n && r.isImageFileExtension(n);
    }
  }, {
    key: "isImageFileExtension",
    value: function(e) {
      return /\.(jpg|jpeg|png|gif|bmp)$/i.test(e);
    }
  }]);
}();
vr.DEFAULT_FILE_NAME = "file", vr.FILE_BUBBLE_CLASS = "file-message";
var Oe = vr, Ne = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "checkForContainerStyles",
    value: function(e, t) {
      var n = e.containerStyle;
      n && (Object.assign(t.style, n), console.error("The containerStyle property is deprecated since version 1.3.14."), console.error("Please change to using the style property instead: https://deepchat.dev/docs/styles#style"));
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {
    key: "handleResponseProperty",
    value: function(e) {
      return console.error("The {result: ....} response object type is deprecated since version 1.3.0."), console.error("Please change to using the new response object: https://deepchat.dev/docs/connect#Response"), e.result;
    }
  }, {
    key: "processHistory",
    value: function(e) {
      var t = e.initialMessages;
      if (t) return console.error("The initialMessages property is deprecated since version 2.0.0."), console.error("Please change to using the history property instead: https://deepchat.dev/docs/messages/#history"), t;
    }
  }, {
    key: "processHistoryFile",
    value: function(e) {
      var t = e.file;
      t && (console.error("The file property in MessageContent is deprecated since version 1.3.17."), console.error("Please change to using the files array property: https://deepchat.dev/docs/messages/#MessageContent"), e.files = [t]);
    }
  }, {
    key: "processValidateInput",
    value: function(e) {
      var t = e.validateMessageBeforeSending;
      if (t) return console.error("The validateMessageBeforeSending property is deprecated since version 1.3.24."), console.error("Please change to using validateInput: https://deepchat.dev/docs/interceptors#validateInput"), t;
    }
  }, {
    key: "processSubmitUserMessage",
    value: function(e) {
      return console.error("The submitUserMessage(text: string) argument string type is deprecated since version 1.4.4."), console.error("Please change to using the new argument type: https://deepchat.dev/docs/methods#submitUserMessage"), {
        text: e
      };
    }
  }, {
    key: "flagHTMLUpdateClass",
    value: function(e) {
      var t;
      (t = e.children[0]) != null && t.classList.contains("deep-chat-update-message") && (console.error('The "deep-chat-update-message" html class is deprecated since version 1.4.4.'), console.error("Please change to using {..., overwrite: true} object: https://deepchat.dev/docs/connect#Response"));
    }
  }, {
    key: "processConnect",
    value: function(e) {
      var t = e;
      t.request && (t.connect ? Object.assign(t.connect, t.request) : t.connect = t.request, console.error("The request property is deprecated since version 2.0.0."), console.error("Please see the connect object: https://deepchat.dev/docs/connect#connect-1"));
    }
  }, {
    key: "checkForStream",
    value: function(e) {
      var t = e.stream;
      if (t) return console.error("The stream property has been moved to the connect object in version 2.0.0."), console.error("Please see the connect object: https://deepchat.dev/docs/connect#connect-1"), t;
    }
  }, {
    key: "fireOnNewMessage",
    value: function(e, t) {
      var n, a = e;
      a.onNewMessage && (console.error("The onNewMessage event has been deprecated since version 2.0.0."), console.error("Please see the onMessage event: https://deepchat.dev/docs/events#onMessage"), (n = a.onNewMessage) == null || n.call(a, t)), e.dispatchEvent(new CustomEvent("new-message", {
        detail: t
      }));
    }
  }, {
    key: "processFileConfigConnect",
    value: function(e) {
      var t = e;
      t.request && (console.error("The request property in file configuration is deprecated since version 2.0.0."), console.error("Please use the connect property instead: https://deepchat.dev/docs/files"), t.connect || (t.connect = t.request));
    }
  }, {
    key: "processMessageStyles",
    value: function(e) {
      if (e) {
        var t = structuredClone(e), n = t.loading;
        return n && (n.outerContainer || n.innerContainer || n.bubble || n.media) && (console.error("The loading message styles are defined using LoadingMessageStyles interface since version 2.1.0."), console.error("Check it out here: https://deepchat.dev/docs/messages/styles#LoadingMessageStyles"), t.loading = {
          message: {
            styles: n
          }
        }), t;
      }
    }
  }, {
    key: "processDemo",
    value: function(e) {
      return typeof e == "boolean" || e.displayLoadingBubble && (console.error("The demo displayLoadingBubble property is deprecated since version 2.1.0."), console.error("Please use displayLoading instead: https://deepchat.dev/docs/demo#demo"), e.displayLoading = {
        message: !0
      }), e;
    }
  }]);
}(), mi = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "mouseUp",
    value: function(e, t) {
      Re.unsetAllCSSMouseStates(e, t), Object.assign(e.style, t.default), Object.assign(e.style, t.hover);
    }
  }, {
    key: "mouseDown",
    value: function(e, t) {
      Object.assign(e.style, t.click);
    }
  }, {
    key: "mouseLeave",
    value: function(e, t) {
      Re.unsetAllCSSMouseStates(e, t), Object.assign(e.style, t.default);
    }
  }, {
    key: "mouseEnter",
    value: function(e, t) {
      Object.assign(e.style, t.hover);
    }
  }, {
    key: "add",
    value: function(e, t) {
      e.addEventListener("mouseenter", r.mouseEnter.bind(this, e, t)), e.addEventListener("mouseleave", r.mouseLeave.bind(this, e, t)), e.addEventListener("mousedown", r.mouseDown.bind(this, e, t)), e.addEventListener("mouseup", r.mouseUp.bind(this, e, t));
    }
  }]);
}(), Rs = "deep-chat-temporary-message", Is = "deep-chat-suggestion-button", gr = {
  "deep-chat-button": {
    styles: {
      default: {
        backgroundColor: "white",
        padding: "5px",
        paddingLeft: "7px",
        paddingRight: "7px",
        border: "1px solid #c2c2c2",
        borderRadius: "6px",
        cursor: "pointer"
      },
      hover: {
        backgroundColor: "#fafafa"
      },
      click: {
        backgroundColor: "#f1f1f1"
      }
    }
  }
}, ba = Object.keys(gr), Jt = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "applySuggestionEvent",
    value: function(e, t) {
      setTimeout(function() {
        t.addEventListener("click", function() {
          var n, a;
          (a = e.submitUserMessage) == null || a.call(e, {
            text: ((n = t.textContent) == null ? void 0 : n.trim()) || ""
          });
        });
      });
    }
  }, {
    key: "isElementTemporary",
    value: function(e) {
      var t;
      return e ? (t = e.bubbleElement.children[0]) == null ? void 0 : t.classList.contains(Rs) : !1;
    }
  }, {
    key: "doesElementContainDeepChatClass",
    value: function(e) {
      return ba.find(function(t) {
        return e.classList.contains(t);
      });
    }
  }, {
    key: "applyEvents",
    value: function(e, t) {
      var n = gr[t].events;
      Object.keys(n || []).forEach(function(a) {
        e.addEventListener(a, n == null ? void 0 : n[a]);
      });
    }
  }, {
    key: "getProcessedStyles",
    value: function(e, t, n) {
      var a = Array.from(t.classList).reduce(function(u, c) {
        var d, p = (d = e[c]) == null ? void 0 : d.styles;
        return p && e[c].styles && u.push(p), u;
      }, []), s = gr[n].styles;
      if (s) {
        var o = JSON.parse(JSON.stringify(s));
        o.default && Re.overwriteDefaultWithAlreadyApplied(o, t), a.unshift(o);
      }
      var l = Re.mergeStatefulStyles(a);
      return Re.processStateful(l, {}, {});
    }
  }, {
    key: "applyDeepChatUtilities",
    value: function(e, t, n) {
      ba.forEach(function(s) {
        var o = n.getElementsByClassName(s);
        Array.from(o || []).forEach(function(l) {
          var u = r.getProcessedStyles(t, l, s);
          Nt.applyStylesToElement(l, u), r.applyEvents(l, s);
        });
      });
      var a = n.getElementsByClassName(Is);
      Array.from(a).forEach(function(s) {
        return r.applySuggestionEvent(e, s);
      });
    }
  }]);
}(), Nt = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "applyStylesToElement",
    value: function(e, t) {
      var n = Re.processStateful(t, {}, {});
      mi.add(e, n), Object.assign(e.style, n.default);
    }
  }, {
    key: "applyEventsToElement",
    value: function(e, t) {
      Object.keys(t).forEach(function(n) {
        var a = t[n];
        a && e.addEventListener(n, a);
      });
    }
  }, {
    key: "applyClassUtilitiesToElement",
    value: function(e, t) {
      var n = t.events, a = t.styles;
      n && r.applyEventsToElement(e, n), a && !Jt.doesElementContainDeepChatClass(e) && r.applyStylesToElement(e, a);
    }
  }, {
    key: "applyCustomClassUtilities",
    value: function(e, t) {
      Object.keys(e).forEach(function(n) {
        var a = t.getElementsByClassName(n);
        Array.from(a).forEach(function(s) {
          e[n] && r.applyClassUtilitiesToElement(s, e[n]);
        });
      });
    }
  }, {
    key: "apply",
    value: function(e, t) {
      Jt.applyDeepChatUtilities(e, e.htmlClassUtilities, t), r.applyCustomClassUtilities(e.htmlClassUtilities, t);
    }
  }, {
    key: "traverseNodes",
    value: function(e, t) {
      e.nodeType === Node.ELEMENT_NODE && t.push(e.outerHTML), e.childNodes.forEach(function(n) {
        r.traverseNodes(n, t);
      });
    }
  }, {
    key: "splitHTML",
    value: function(e) {
      var t = new DOMParser().parseFromString(e, "text/html"), n = [];
      return t.body.childNodes.forEach(function(a) {
        r.traverseNodes(a, n);
      }), n;
    }
  }]);
}(), vi = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "addElement",
    value: function(e, t) {
      e.elementRef.appendChild(t), e.elementRef.scrollTop = e.elementRef.scrollHeight;
    }
  }, {
    key: "createElements",
    value: function(e, t, n, a) {
      var s = e.createMessageElementsOnOrientation("", n, a);
      return s.bubbleElement.classList.add(r.HTML_BUBBLE_CLASS), s.bubbleElement.innerHTML = t, s;
    }
  }, {
    key: "overwriteElements",
    value: function(e, t, n) {
      n.bubbleElement.innerHTML = t, Nt.apply(e, n.outerContainer), Ne.flagHTMLUpdateClass(n.bubbleElement);
    }
    // prettier-ignore
  }, {
    key: "overwrite",
    value: function(e, t, n, a) {
      var s = e.messageToElements, o = W.overwriteMessage(s, a, t, n, "html", r.HTML_BUBBLE_CLASS);
      return o && r.overwriteElements(e, t, o), o;
    }
  }, {
    key: "create",
    value: function(e, t, n) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, s, o = r.createElements(e, t, n, a);
      return W.fillEmptyMessageElement(o.bubbleElement, t), Nt.apply(e, o.outerContainer), Ne.flagHTMLUpdateClass(o.bubbleElement), e.applyCustomStyles(o, n, !1, (s = e.messageStyles) == null ? void 0 : s.html), o;
    }
    // prettier-ignore
  }, {
    key: "add",
    value: function(e, t, n, a, s) {
      var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1;
      if (s != null && s.status) {
        var l = this.overwrite(e, t, n, a);
        if (l) return l;
        s.status = !1;
      }
      var u = r.create(e, t, n, o);
      return o || r.addElement(e, u.outerContainer), u;
    }
  }]);
}();
vi.HTML_BUBBLE_CLASS = "html-message";
var et = vi, hn;
function gi(r) {
  return hn = hn || document.createElement("textarea"), hn.innerHTML = "&" + r + ";", hn.value;
}
var Ls = Object.prototype.hasOwnProperty;
function Os(r, i) {
  return r ? Ls.call(r, i) : !1;
}
function yi(r) {
  var i = [].slice.call(arguments, 1);
  return i.forEach(function(e) {
    if (e) {
      if (G(e) != "object") throw new TypeError(e + "must be object");
      Object.keys(e).forEach(function(t) {
        r[t] = e[t];
      });
    }
  }), r;
}
var Ps = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
function Yt(r) {
  return r.indexOf("\\") < 0 ? r : r.replace(Ps, "$1");
}
function bi(r) {
  return !(r >= 55296 && r <= 57343 || r >= 64976 && r <= 65007 || (r & 65535) === 65535 || (r & 65535) === 65534 || r >= 0 && r <= 8 || r === 11 || r >= 14 && r <= 31 || r >= 127 && r <= 159 || r > 1114111);
}
function yr(r) {
  if (r > 65535) {
    r -= 65536;
    var i = 55296 + (r >> 10), e = 56320 + (r & 1023);
    return String.fromCharCode(i, e);
  }
  return String.fromCharCode(r);
}
var Ns = /&([a-z#][a-z0-9]{1,31});/gi, Ds = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
function Bs(r, i) {
  var e = 0, t = gi(i);
  return i !== t ? t : i.charCodeAt(0) === 35 && Ds.test(i) && (e = i[1].toLowerCase() === "x" ? parseInt(i.slice(2), 16) : parseInt(i.slice(1), 10), bi(e)) ? yr(e) : r;
}
function bt(r) {
  return r.indexOf("&") < 0 ? r : r.replace(Ns, Bs);
}
var Fs = /[&<>"]/, js = /[&<>"]/g, Us = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function Hs(r) {
  return Us[r];
}
function Pe(r) {
  return Fs.test(r) ? r.replace(js, Hs) : r;
}
var j = {};
j.blockquote_open = function() {
  return `<blockquote>
`;
};
j.blockquote_close = function(r, i) {
  return "</blockquote>" + Et(r, i);
};
j.code = function(r, i) {
  return r[i].block ? "<pre><code>" + Pe(r[i].content) + "</code></pre>" + Et(r, i) : "<code>" + Pe(r[i].content) + "</code>";
};
j.fence = function(r, i, e, t, n) {
  var a = r[i], s = "", o = e.langPrefix, l = "", u, c, d;
  if (a.params) {
    if (u = a.params.split(/\s+/g), c = u.join(" "), Os(n.rules.fence_custom, u[0])) return n.rules.fence_custom[u[0]](r, i, e, t, n);
    l = Pe(bt(Yt(c))), s = ' class="' + o + l + '"';
  }
  return e.highlight ? d = e.highlight.apply(e.highlight, [a.content].concat(u)) || Pe(a.content) : d = Pe(a.content), "<pre><code" + s + ">" + d + "</code></pre>" + Et(r, i);
};
j.fence_custom = {};
j.heading_open = function(r, i) {
  return "<h" + r[i].hLevel + ">";
};
j.heading_close = function(r, i) {
  return "</h" + r[i].hLevel + `>
`;
};
j.hr = function(r, i, e) {
  return (e.xhtmlOut ? "<hr />" : "<hr>") + Et(r, i);
};
j.bullet_list_open = function() {
  return `<ul>
`;
};
j.bullet_list_close = function(r, i) {
  return "</ul>" + Et(r, i);
};
j.list_item_open = function() {
  return "<li>";
};
j.list_item_close = function() {
  return `</li>
`;
};
j.ordered_list_open = function(r, i) {
  var e = r[i], t = e.order > 1 ? ' start="' + e.order + '"' : "";
  return "<ol" + t + `>
`;
};
j.ordered_list_close = function(r, i) {
  return "</ol>" + Et(r, i);
};
j.paragraph_open = function(r, i) {
  return r[i].tight ? "" : "<p>";
};
j.paragraph_close = function(r, i) {
  var e = !(r[i].tight && i && r[i - 1].type === "inline" && !r[i - 1].content);
  return (r[i].tight ? "" : "</p>") + (e ? Et(r, i) : "");
};
j.link_open = function(r, i, e) {
  var t = r[i].title ? ' title="' + Pe(bt(r[i].title)) + '"' : "", n = e.linkTarget ? ' target="' + e.linkTarget + '"' : "";
  return '<a href="' + Pe(r[i].href) + '"' + t + n + ">";
};
j.link_close = function() {
  return "</a>";
};
j.image = function(r, i, e) {
  var t = ' src="' + Pe(r[i].src) + '"', n = r[i].title ? ' title="' + Pe(bt(r[i].title)) + '"' : "", a = ' alt="' + (r[i].alt ? Pe(bt(Yt(r[i].alt))) : "") + '"', s = e.xhtmlOut ? " /" : "";
  return "<img" + t + a + n + s + ">";
};
j.table_open = function() {
  return `<table>
`;
};
j.table_close = function() {
  return `</table>
`;
};
j.thead_open = function() {
  return `<thead>
`;
};
j.thead_close = function() {
  return `</thead>
`;
};
j.tbody_open = function() {
  return `<tbody>
`;
};
j.tbody_close = function() {
  return `</tbody>
`;
};
j.tr_open = function() {
  return "<tr>";
};
j.tr_close = function() {
  return `</tr>
`;
};
j.th_open = function(r, i) {
  var e = r[i];
  return "<th" + (e.align ? ' style="text-align:' + e.align + '"' : "") + ">";
};
j.th_close = function() {
  return "</th>";
};
j.td_open = function(r, i) {
  var e = r[i];
  return "<td" + (e.align ? ' style="text-align:' + e.align + '"' : "") + ">";
};
j.td_close = function() {
  return "</td>";
};
j.strong_open = function() {
  return "<strong>";
};
j.strong_close = function() {
  return "</strong>";
};
j.em_open = function() {
  return "<em>";
};
j.em_close = function() {
  return "</em>";
};
j.del_open = function() {
  return "<del>";
};
j.del_close = function() {
  return "</del>";
};
j.ins_open = function() {
  return "<ins>";
};
j.ins_close = function() {
  return "</ins>";
};
j.mark_open = function() {
  return "<mark>";
};
j.mark_close = function() {
  return "</mark>";
};
j.sub = function(r, i) {
  return "<sub>" + Pe(r[i].content) + "</sub>";
};
j.sup = function(r, i) {
  return "<sup>" + Pe(r[i].content) + "</sup>";
};
j.hardbreak = function(r, i, e) {
  return e.xhtmlOut ? `<br />
` : `<br>
`;
};
j.softbreak = function(r, i, e) {
  return e.breaks ? e.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
j.text = function(r, i) {
  return Pe(r[i].content);
};
j.htmlblock = function(r, i) {
  return r[i].content;
};
j.htmltag = function(r, i) {
  return r[i].content;
};
j.abbr_open = function(r, i) {
  return '<abbr title="' + Pe(bt(r[i].title)) + '">';
};
j.abbr_close = function() {
  return "</abbr>";
};
j.footnote_ref = function(r, i) {
  var e = Number(r[i].id + 1).toString(), t = "fnref" + e;
  return r[i].subId > 0 && (t += ":" + r[i].subId), '<sup class="footnote-ref"><a href="#fn' + e + '" id="' + t + '">[' + e + "]</a></sup>";
};
j.footnote_block_open = function(r, i, e) {
  var t = e.xhtmlOut ? `<hr class="footnotes-sep" />
` : `<hr class="footnotes-sep">
`;
  return t + `<section class="footnotes">
<ol class="footnotes-list">
`;
};
j.footnote_block_close = function() {
  return `</ol>
</section>
`;
};
j.footnote_open = function(r, i) {
  var e = Number(r[i].id + 1).toString();
  return '<li id="fn' + e + '"  class="footnote-item">';
};
j.footnote_close = function() {
  return `</li>
`;
};
j.footnote_anchor = function(r, i) {
  var e = Number(r[i].id + 1).toString(), t = "fnref" + e;
  return r[i].subId > 0 && (t += ":" + r[i].subId), ' <a href="#' + t + '" class="footnote-backref">↩</a>';
};
j.dl_open = function() {
  return `<dl>
`;
};
j.dt_open = function() {
  return "<dt>";
};
j.dd_open = function() {
  return "<dd>";
};
j.dl_close = function() {
  return `</dl>
`;
};
j.dt_close = function() {
  return `</dt>
`;
};
j.dd_close = function() {
  return `</dd>
`;
};
function ki(r, i) {
  return ++i >= r.length - 2 ? i : r[i].type === "paragraph_open" && r[i].tight && r[i + 1].type === "inline" && r[i + 1].content.length === 0 && r[i + 2].type === "paragraph_close" && r[i + 2].tight ? ki(r, i + 2) : i;
}
var Et = j.getBreak = function(r, i) {
  return i = ki(r, i), i < r.length && r[i].type === "list_item_close" ? "" : `
`;
};
function Br() {
  this.rules = yi({}, j), this.getBreak = j.getBreak;
}
Br.prototype.renderInline = function(r, i, e) {
  for (var t = this.rules, n = r.length, a = 0, s = ""; n--; ) s += t[r[a].type](r, a++, i, e, this);
  return s;
};
Br.prototype.render = function(r, i, e) {
  for (var t = this.rules, n = r.length, a = -1, s = ""; ++a < n; ) r[a].type === "inline" ? s += this.renderInline(r[a].children, i, e) : s += t[r[a].type](r, a, i, e, this);
  return s;
};
function Fe() {
  this.__rules__ = [], this.__cache__ = null;
}
Fe.prototype.__find__ = function(r) {
  for (var i = this.__rules__.length, e = -1; i--; ) if (this.__rules__[++e].name === r) return e;
  return -1;
};
Fe.prototype.__compile__ = function() {
  var r = this, i = [""];
  r.__rules__.forEach(function(e) {
    e.enabled && e.alt.forEach(function(t) {
      i.indexOf(t) < 0 && i.push(t);
    });
  }), r.__cache__ = {}, i.forEach(function(e) {
    r.__cache__[e] = [], r.__rules__.forEach(function(t) {
      t.enabled && (e && t.alt.indexOf(e) < 0 || r.__cache__[e].push(t.fn));
    });
  });
};
Fe.prototype.at = function(r, i, e) {
  var t = this.__find__(r), n = e || {};
  if (t === -1) throw new Error("Parser rule not found: " + r);
  this.__rules__[t].fn = i, this.__rules__[t].alt = n.alt || [], this.__cache__ = null;
};
Fe.prototype.before = function(r, i, e, t) {
  var n = this.__find__(r), a = t || {};
  if (n === -1) throw new Error("Parser rule not found: " + r);
  this.__rules__.splice(n, 0, {
    name: i,
    enabled: !0,
    fn: e,
    alt: a.alt || []
  }), this.__cache__ = null;
};
Fe.prototype.after = function(r, i, e, t) {
  var n = this.__find__(r), a = t || {};
  if (n === -1) throw new Error("Parser rule not found: " + r);
  this.__rules__.splice(n + 1, 0, {
    name: i,
    enabled: !0,
    fn: e,
    alt: a.alt || []
  }), this.__cache__ = null;
};
Fe.prototype.push = function(r, i, e) {
  var t = e || {};
  this.__rules__.push({
    name: r,
    enabled: !0,
    fn: i,
    alt: t.alt || []
  }), this.__cache__ = null;
};
Fe.prototype.enable = function(r, i) {
  r = Array.isArray(r) ? r : [r], i && this.__rules__.forEach(function(e) {
    e.enabled = !1;
  }), r.forEach(function(e) {
    var t = this.__find__(e);
    if (t < 0) throw new Error("Rules manager: invalid rule name " + e);
    this.__rules__[t].enabled = !0;
  }, this), this.__cache__ = null;
};
Fe.prototype.disable = function(r) {
  r = Array.isArray(r) ? r : [r], r.forEach(function(i) {
    var e = this.__find__(i);
    if (e < 0) throw new Error("Rules manager: invalid rule name " + i);
    this.__rules__[e].enabled = !1;
  }, this), this.__cache__ = null;
};
Fe.prototype.getRules = function(r) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[r] || [];
};
function qs(r) {
  r.inlineMode ? r.tokens.push({
    type: "inline",
    content: r.src.replace(/\n/g, " ").trim(),
    level: 0,
    lines: [0, 1],
    children: []
  }) : r.block.parse(r.src, r.options, r.env, r.tokens);
}
function _t(r, i, e, t, n) {
  this.src = r, this.env = t, this.options = e, this.parser = i, this.tokens = n, this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = [], this.isInLabel = !1, this.linkLevel = 0, this.linkContent = "", this.labelUnmatchedScopes = 0;
}
_t.prototype.pushPending = function() {
  this.tokens.push({
    type: "text",
    content: this.pending,
    level: this.pendingLevel
  }), this.pending = "";
};
_t.prototype.push = function(r) {
  this.pending && this.pushPending(), this.tokens.push(r), this.pendingLevel = this.level;
};
_t.prototype.cacheSet = function(r, i) {
  for (var e = this.cache.length; e <= r; e++) this.cache.push(0);
  this.cache[r] = i;
};
_t.prototype.cacheGet = function(r) {
  return r < this.cache.length ? this.cache[r] : 0;
};
function Xt(r, i) {
  var e, t, n, a = -1, s = r.posMax, o = r.pos, l = r.isInLabel;
  if (r.isInLabel) return -1;
  if (r.labelUnmatchedScopes) return r.labelUnmatchedScopes--, -1;
  for (r.pos = i + 1, r.isInLabel = !0, e = 1; r.pos < s; ) {
    if (n = r.src.charCodeAt(r.pos), n === 91) e++;
    else if (n === 93 && (e--, e === 0)) {
      t = !0;
      break;
    }
    r.parser.skipToken(r);
  }
  return t ? (a = r.pos, r.labelUnmatchedScopes = 0) : r.labelUnmatchedScopes = e - 1, r.pos = o, r.isInLabel = l, a;
}
function zs(r, i, e, t) {
  var n, a, s, o, l, u;
  if (r.charCodeAt(0) !== 42 || r.charCodeAt(1) !== 91 || r.indexOf("]:") === -1 || (n = new _t(r, i, e, t, []), a = Xt(n, 1), a < 0 || r.charCodeAt(a + 1) !== 58)) return -1;
  for (o = n.posMax, s = a + 2; s < o && n.src.charCodeAt(s) !== 10; s++) ;
  return l = r.slice(2, a), u = r.slice(a + 2, s).trim(), u.length === 0 ? -1 : (t.abbreviations || (t.abbreviations = {}), G(t.abbreviations[":" + l]) > "u" && (t.abbreviations[":" + l] = u), s);
}
function $s(r) {
  var i = r.tokens, e, t, n, a;
  if (!r.inlineMode) {
    for (e = 1, t = i.length - 1; e < t; e++) if (i[e - 1].type === "paragraph_open" && i[e].type === "inline" && i[e + 1].type === "paragraph_close") {
      for (n = i[e].content; n.length && (a = zs(n, r.inline, r.options, r.env), !(a < 0)); ) n = n.slice(a).trim();
      i[e].content = n, n.length || (i[e - 1].tight = !0, i[e + 1].tight = !0);
    }
  }
}
function br(r) {
  var i = bt(r);
  try {
    i = decodeURI(i);
  } catch {
  }
  return encodeURI(i);
}
function Ei(r, i) {
  var e, t, n, a = i, s = r.posMax;
  if (r.src.charCodeAt(i) === 60) {
    for (i++; i < s; ) {
      if (e = r.src.charCodeAt(i), e === 10) return !1;
      if (e === 62) return n = br(Yt(r.src.slice(a + 1, i))), r.parser.validateLink(n) ? (r.pos = i + 1, r.linkContent = n, !0) : !1;
      if (e === 92 && i + 1 < s) {
        i += 2;
        continue;
      }
      i++;
    }
    return !1;
  }
  for (t = 0; i < s && (e = r.src.charCodeAt(i), !(e === 32 || e < 32 || e === 127)); ) {
    if (e === 92 && i + 1 < s) {
      i += 2;
      continue;
    }
    if (e === 40 && (t++, t > 1) || e === 41 && (t--, t < 0)) break;
    i++;
  }
  return a === i || (n = Yt(r.src.slice(a, i)), !r.parser.validateLink(n)) ? !1 : (r.linkContent = n, r.pos = i, !0);
}
function _i(r, i) {
  var e, t = i, n = r.posMax, a = r.src.charCodeAt(i);
  if (a !== 34 && a !== 39 && a !== 40) return !1;
  for (i++, a === 40 && (a = 41); i < n; ) {
    if (e = r.src.charCodeAt(i), e === a) return r.pos = i + 1, r.linkContent = Yt(r.src.slice(t + 1, i)), !0;
    if (e === 92 && i + 1 < n) {
      i += 2;
      continue;
    }
    i++;
  }
  return !1;
}
function Si(r) {
  return r.trim().replace(/\s+/g, " ").toUpperCase();
}
function Vs(r, i, e, t) {
  var n, a, s, o, l, u, c, d, p;
  if (r.charCodeAt(0) !== 91 || r.indexOf("]:") === -1 || (n = new _t(r, i, e, t, []), a = Xt(n, 0), a < 0 || r.charCodeAt(a + 1) !== 58)) return -1;
  for (o = n.posMax, s = a + 2; s < o && (l = n.src.charCodeAt(s), !(l !== 32 && l !== 10)); s++) ;
  if (!Ei(n, s)) return -1;
  for (c = n.linkContent, s = n.pos, u = s, s = s + 1; s < o && (l = n.src.charCodeAt(s), !(l !== 32 && l !== 10)); s++) ;
  for (s < o && u !== s && _i(n, s) ? (d = n.linkContent, s = n.pos) : (d = "", s = u); s < o && n.src.charCodeAt(s) === 32; ) s++;
  return s < o && n.src.charCodeAt(s) !== 10 ? -1 : (p = Si(r.slice(1, a)), G(t.references[p]) > "u" && (t.references[p] = {
    title: d,
    href: c
  }), s);
}
function Gs(r) {
  var i = r.tokens, e, t, n, a;
  if (r.env.references = r.env.references || {}, !r.inlineMode) {
    for (e = 1, t = i.length - 1; e < t; e++) if (i[e].type === "inline" && i[e - 1].type === "paragraph_open" && i[e + 1].type === "paragraph_close") {
      for (n = i[e].content; n.length && (a = Vs(n, r.inline, r.options, r.env), !(a < 0)); ) n = n.slice(a).trim();
      i[e].content = n, n.length || (i[e - 1].tight = !0, i[e + 1].tight = !0);
    }
  }
}
function Ws(r) {
  var i = r.tokens, e, t, n;
  for (t = 0, n = i.length; t < n; t++) e = i[t], e.type === "inline" && r.inline.parse(e.content, r.options, r.env, e.children);
}
function Ks(r) {
  var i, e, t, n, a, s, o, l, u, c = 0, d = !1, p = {};
  if (r.env.footnotes && (r.tokens = r.tokens.filter(function(h) {
    return h.type === "footnote_reference_open" ? (d = !0, l = [], u = h.label, !1) : h.type === "footnote_reference_close" ? (d = !1, p[":" + u] = l, !1) : (d && l.push(h), !d);
  }), !!r.env.footnotes.list)) {
    for (s = r.env.footnotes.list, r.tokens.push({
      type: "footnote_block_open",
      level: c++
    }), i = 0, e = s.length; i < e; i++) {
      for (r.tokens.push({
        type: "footnote_open",
        id: i,
        level: c++
      }), s[i].tokens ? (o = [], o.push({
        type: "paragraph_open",
        tight: !1,
        level: c++
      }), o.push({
        type: "inline",
        content: "",
        level: c,
        children: s[i].tokens
      }), o.push({
        type: "paragraph_close",
        tight: !1,
        level: --c
      })) : s[i].label && (o = p[":" + s[i].label]), r.tokens = r.tokens.concat(o), r.tokens[r.tokens.length - 1].type === "paragraph_close" ? a = r.tokens.pop() : a = null, n = s[i].count > 0 ? s[i].count : 1, t = 0; t < n; t++) r.tokens.push({
        type: "footnote_anchor",
        id: i,
        subId: t,
        level: c
      });
      a && r.tokens.push(a), r.tokens.push({
        type: "footnote_close",
        level: --c
      });
    }
    r.tokens.push({
      type: "footnote_block_close",
      level: --c
    });
  }
}
var ka = ` 
()[]'".,!?-`;
function er(r) {
  return r.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1");
}
function Js(r) {
  var i, e, t, n, a, s, o, l, u, c, d, p, h = r.tokens;
  if (r.env.abbreviations) {
    for (r.env.abbrRegExp || (p = "(^|[" + ka.split("").map(er).join("") + "])(" + Object.keys(r.env.abbreviations).map(function(g) {
      return g.substr(1);
    }).sort(function(g, k) {
      return k.length - g.length;
    }).map(er).join("|") + ")($|[" + ka.split("").map(er).join("") + "])", r.env.abbrRegExp = new RegExp(p, "g")), c = r.env.abbrRegExp, e = 0, t = h.length; e < t; e++) if (h[e].type === "inline") {
      for (n = h[e].children, i = n.length - 1; i >= 0; i--) if (a = n[i], a.type === "text") {
        for (l = 0, s = a.content, c.lastIndex = 0, u = a.level, o = []; d = c.exec(s); ) c.lastIndex > l && o.push({
          type: "text",
          content: s.slice(l, d.index + d[1].length),
          level: u
        }), o.push({
          type: "abbr_open",
          title: r.env.abbreviations[":" + d[2]],
          level: u++
        }), o.push({
          type: "text",
          content: d[2],
          level: u
        }), o.push({
          type: "abbr_close",
          level: --u
        }), l = c.lastIndex - d[3].length;
        o.length && (l < s.length && o.push({
          type: "text",
          content: s.slice(l),
          level: u
        }), h[e].children = n = [].concat(n.slice(0, i), o, n.slice(i + 1)));
      }
    }
  }
}
var Ys = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, Xs = /\((c|tm|r|p)\)/ig, Zs = {
  c: "©",
  r: "®",
  p: "§",
  tm: "™"
};
function Qs(r) {
  return r.indexOf("(") < 0 ? r : r.replace(Xs, function(i, e) {
    return Zs[e.toLowerCase()];
  });
}
function eo(r) {
  var i, e, t, n, a;
  if (r.options.typographer) {
    for (a = r.tokens.length - 1; a >= 0; a--) if (r.tokens[a].type === "inline") for (n = r.tokens[a].children, i = n.length - 1; i >= 0; i--) e = n[i], e.type === "text" && (t = e.content, t = Qs(t), Ys.test(t) && (t = t.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/mg, "$1—$2").replace(/(^|\s)--(\s|$)/mg, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/mg, "$1–$2")), e.content = t);
  }
}
var to = /['"]/, Ea = /['"]/g, no = /[-\s()\[\]]/, _a = "’";
function Sa(r, i) {
  return i < 0 || i >= r.length ? !1 : !no.test(r[i]);
}
function Rt(r, i, e) {
  return r.substr(0, i) + e + r.substr(i + 1);
}
function ro(r) {
  var i, e, t, n, a, s, o, l, u, c, d, p, h, g, k, S, T;
  if (r.options.typographer) {
    for (T = [], k = r.tokens.length - 1; k >= 0; k--) if (r.tokens[k].type === "inline") {
      for (S = r.tokens[k].children, T.length = 0, i = 0; i < S.length; i++) if (e = S[i], !(e.type !== "text" || to.test(e.text))) {
        for (o = S[i].level, h = T.length - 1; h >= 0 && !(T[h].level <= o); h--) ;
        T.length = h + 1, t = e.content, a = 0, s = t.length;
        e: for (; a < s && (Ea.lastIndex = a, n = Ea.exec(t), !!n); ) {
          if (l = !Sa(t, n.index - 1), a = n.index + 1, g = n[0] === "'", u = !Sa(t, a), !u && !l) {
            g && (e.content = Rt(e.content, n.index, _a));
            continue;
          }
          if (d = !u, p = !l, p) {
            for (h = T.length - 1; h >= 0 && (c = T[h], !(T[h].level < o)); h--) if (c.single === g && T[h].level === o) {
              c = T[h], g ? (S[c.token].content = Rt(S[c.token].content, c.pos, r.options.quotes[2]), e.content = Rt(e.content, n.index, r.options.quotes[3])) : (S[c.token].content = Rt(S[c.token].content, c.pos, r.options.quotes[0]), e.content = Rt(e.content, n.index, r.options.quotes[1])), T.length = h;
              continue e;
            }
          }
          d ? T.push({
            token: i,
            pos: n.index,
            single: g,
            level: o
          }) : p && g && (e.content = Rt(e.content, n.index, _a));
        }
      }
    }
  }
}
var tr = [["block", qs], ["abbr", $s], ["references", Gs], ["inline", Ws], ["footnote_tail", Ks], ["abbr2", Js], ["replacements", eo], ["smartquotes", ro]];
function wi() {
  this.options = {}, this.ruler = new Fe();
  for (var r = 0; r < tr.length; r++) this.ruler.push(tr[r][0], tr[r][1]);
}
wi.prototype.process = function(r) {
  var i, e, t;
  for (t = this.ruler.getRules(""), i = 0, e = t.length; i < e; i++) t[i](r);
};
function St(r, i, e, t, n) {
  var a, s, o, l, u, c, d;
  for (this.src = r, this.parser = i, this.options = e, this.env = t, this.tokens = n, this.bMarks = [], this.eMarks = [], this.tShift = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.parentType = "root", this.ddIndent = -1, this.level = 0, this.result = "", s = this.src, c = 0, d = !1, o = l = c = 0, u = s.length; l < u; l++) {
    if (a = s.charCodeAt(l), !d) if (a === 32) {
      c++;
      continue;
    } else d = !0;
    (a === 10 || l === u - 1) && (a !== 10 && l++, this.bMarks.push(o), this.eMarks.push(l), this.tShift.push(c), d = !1, c = 0, o = l + 1);
  }
  this.bMarks.push(s.length), this.eMarks.push(s.length), this.tShift.push(0), this.lineMax = this.bMarks.length - 1;
}
St.prototype.isEmpty = function(r) {
  return this.bMarks[r] + this.tShift[r] >= this.eMarks[r];
};
St.prototype.skipEmptyLines = function(r) {
  for (var i = this.lineMax; r < i && !(this.bMarks[r] + this.tShift[r] < this.eMarks[r]); r++) ;
  return r;
};
St.prototype.skipSpaces = function(r) {
  for (var i = this.src.length; r < i && this.src.charCodeAt(r) === 32; r++) ;
  return r;
};
St.prototype.skipChars = function(r, i) {
  for (var e = this.src.length; r < e && this.src.charCodeAt(r) === i; r++) ;
  return r;
};
St.prototype.skipCharsBack = function(r, i, e) {
  if (r <= e) return r;
  for (; r > e; ) if (i !== this.src.charCodeAt(--r)) return r + 1;
  return r;
};
St.prototype.getLines = function(r, i, e, t) {
  var n, a, s, o, l, u = r;
  if (r >= i) return "";
  if (u + 1 === i) return a = this.bMarks[u] + Math.min(this.tShift[u], e), s = t ? this.eMarks[u] + 1 : this.eMarks[u], this.src.slice(a, s);
  for (o = new Array(i - r), n = 0; u < i; u++, n++) l = this.tShift[u], l > e && (l = e), l < 0 && (l = 0), a = this.bMarks[u] + l, u + 1 < i || t ? s = this.eMarks[u] + 1 : s = this.eMarks[u], o[n] = this.src.slice(a, s);
  return o.join("");
};
function ao(r, i, e) {
  var t, n;
  if (r.tShift[i] - r.blkIndent < 4) return !1;
  for (n = t = i + 1; t < e; ) {
    if (r.isEmpty(t)) {
      t++;
      continue;
    }
    if (r.tShift[t] - r.blkIndent >= 4) {
      t++, n = t;
      continue;
    }
    break;
  }
  return r.line = t, r.tokens.push({
    type: "code",
    content: r.getLines(i, n, 4 + r.blkIndent, !0),
    block: !0,
    lines: [i, r.line],
    level: r.level
  }), !0;
}
function io(r, i, e, t) {
  var n, a, s, o, l, u = !1, c = r.bMarks[i] + r.tShift[i], d = r.eMarks[i];
  if (c + 3 > d || (n = r.src.charCodeAt(c), n !== 126 && n !== 96) || (l = c, c = r.skipChars(c, n), a = c - l, a < 3) || (s = r.src.slice(c, d).trim(), s.indexOf("`") >= 0)) return !1;
  if (t) return !0;
  for (o = i; o++, !(o >= e || (c = l = r.bMarks[o] + r.tShift[o], d = r.eMarks[o], c < d && r.tShift[o] < r.blkIndent)); ) if (r.src.charCodeAt(c) === n && !(r.tShift[o] - r.blkIndent >= 4) && (c = r.skipChars(c, n), !(c - l < a) && (c = r.skipSpaces(c), !(c < d)))) {
    u = !0;
    break;
  }
  return a = r.tShift[i], r.line = o + (u ? 1 : 0), r.tokens.push({
    type: "fence",
    params: s,
    content: r.getLines(i + 1, o, a, !0),
    lines: [i, r.line],
    level: r.level
  }), !0;
}
function so(r, i, e, t) {
  var n, a, s, o, l, u, c, d, p, h, g, k = r.bMarks[i] + r.tShift[i], S = r.eMarks[i];
  if (k > S || r.src.charCodeAt(k++) !== 62 || r.level >= r.options.maxNesting) return !1;
  if (t) return !0;
  for (r.src.charCodeAt(k) === 32 && k++, l = r.blkIndent, r.blkIndent = 0, o = [r.bMarks[i]], r.bMarks[i] = k, k = k < S ? r.skipSpaces(k) : k, a = k >= S, s = [r.tShift[i]], r.tShift[i] = k - r.bMarks[i], d = r.parser.ruler.getRules("blockquote"), n = i + 1; n < e && (k = r.bMarks[n] + r.tShift[n], S = r.eMarks[n], !(k >= S)); n++) {
    if (r.src.charCodeAt(k++) === 62) {
      r.src.charCodeAt(k) === 32 && k++, o.push(r.bMarks[n]), r.bMarks[n] = k, k = k < S ? r.skipSpaces(k) : k, a = k >= S, s.push(r.tShift[n]), r.tShift[n] = k - r.bMarks[n];
      continue;
    }
    if (a) break;
    for (g = !1, p = 0, h = d.length; p < h; p++) if (d[p](r, n, e, !0)) {
      g = !0;
      break;
    }
    if (g) break;
    o.push(r.bMarks[n]), s.push(r.tShift[n]), r.tShift[n] = -1337;
  }
  for (u = r.parentType, r.parentType = "blockquote", r.tokens.push({
    type: "blockquote_open",
    lines: c = [i, 0],
    level: r.level++
  }), r.parser.tokenize(r, i, n), r.tokens.push({
    type: "blockquote_close",
    level: --r.level
  }), r.parentType = u, c[1] = r.line, p = 0; p < s.length; p++) r.bMarks[p + i] = o[p], r.tShift[p + i] = s[p];
  return r.blkIndent = l, !0;
}
function oo(r, i, e, t) {
  var n, a, s, o = r.bMarks[i], l = r.eMarks[i];
  if (o += r.tShift[i], o > l || (n = r.src.charCodeAt(o++), n !== 42 && n !== 45 && n !== 95)) return !1;
  for (a = 1; o < l; ) {
    if (s = r.src.charCodeAt(o++), s !== n && s !== 32) return !1;
    s === n && a++;
  }
  return a < 3 ? !1 : (t || (r.line = i + 1, r.tokens.push({
    type: "hr",
    lines: [i, r.line],
    level: r.level
  })), !0);
}
function wa(r, i) {
  var e, t, n;
  return t = r.bMarks[i] + r.tShift[i], n = r.eMarks[i], t >= n || (e = r.src.charCodeAt(t++), e !== 42 && e !== 45 && e !== 43) || t < n && r.src.charCodeAt(t) !== 32 ? -1 : t;
}
function Ca(r, i) {
  var e, t = r.bMarks[i] + r.tShift[i], n = r.eMarks[i];
  if (t + 1 >= n || (e = r.src.charCodeAt(t++), e < 48 || e > 57)) return -1;
  for (; ; ) {
    if (t >= n) return -1;
    if (e = r.src.charCodeAt(t++), !(e >= 48 && e <= 57)) {
      if (e === 41 || e === 46) break;
      return -1;
    }
  }
  return t < n && r.src.charCodeAt(t) !== 32 ? -1 : t;
}
function lo(r, i) {
  var e, t, n = r.level + 2;
  for (e = i + 2, t = r.tokens.length - 2; e < t; e++) r.tokens[e].level === n && r.tokens[e].type === "paragraph_open" && (r.tokens[e + 2].tight = !0, r.tokens[e].tight = !0, e += 2);
}
function uo(r, i, e, t) {
  var n, a, s, o, l, u, c, d, p, h, g, k, S, T, A, D, N, x, Y = !0, de, ee, me, fe;
  if ((d = Ca(r, i)) >= 0) S = !0;
  else if ((d = wa(r, i)) >= 0) S = !1;
  else return !1;
  if (r.level >= r.options.maxNesting) return !1;
  if (k = r.src.charCodeAt(d - 1), t) return !0;
  for (A = r.tokens.length, S ? (c = r.bMarks[i] + r.tShift[i], g = Number(r.src.substr(c, d - c - 1)), r.tokens.push({
    type: "ordered_list_open",
    order: g,
    lines: N = [i, 0],
    level: r.level++
  })) : r.tokens.push({
    type: "bullet_list_open",
    lines: N = [i, 0],
    level: r.level++
  }), n = i, D = !1, de = r.parser.ruler.getRules("list"); n < e && (T = r.skipSpaces(d), p = r.eMarks[n], T >= p ? h = 1 : h = T - d, h > 4 && (h = 1), h < 1 && (h = 1), a = d - r.bMarks[n] + h, r.tokens.push({
    type: "list_item_open",
    lines: x = [i, 0],
    level: r.level++
  }), o = r.blkIndent, l = r.tight, s = r.tShift[i], u = r.parentType, r.tShift[i] = T - r.bMarks[i], r.blkIndent = a, r.tight = !0, r.parentType = "list", r.parser.tokenize(r, i, e, !0), (!r.tight || D) && (Y = !1), D = r.line - i > 1 && r.isEmpty(r.line - 1), r.blkIndent = o, r.tShift[i] = s, r.tight = l, r.parentType = u, r.tokens.push({
    type: "list_item_close",
    level: --r.level
  }), n = i = r.line, x[1] = n, T = r.bMarks[i], !(n >= e || r.isEmpty(n) || r.tShift[n] < r.blkIndent)); ) {
    for (fe = !1, ee = 0, me = de.length; ee < me; ee++) if (de[ee](r, n, e, !0)) {
      fe = !0;
      break;
    }
    if (fe) break;
    if (S) {
      if (d = Ca(r, n), d < 0) break;
    } else if (d = wa(r, n), d < 0) break;
    if (k !== r.src.charCodeAt(d - 1)) break;
  }
  return r.tokens.push({
    type: S ? "ordered_list_close" : "bullet_list_close",
    level: --r.level
  }), N[1] = n, r.line = n, Y && lo(r, A), !0;
}
function co(r, i, e, t) {
  var n, a, s, o, l, u = r.bMarks[i] + r.tShift[i], c = r.eMarks[i];
  if (u + 4 > c || r.src.charCodeAt(u) !== 91 || r.src.charCodeAt(u + 1) !== 94 || r.level >= r.options.maxNesting) return !1;
  for (o = u + 2; o < c; o++) {
    if (r.src.charCodeAt(o) === 32) return !1;
    if (r.src.charCodeAt(o) === 93) break;
  }
  return o === u + 2 || o + 1 >= c || r.src.charCodeAt(++o) !== 58 ? !1 : (t || (o++, r.env.footnotes || (r.env.footnotes = {}), r.env.footnotes.refs || (r.env.footnotes.refs = {}), l = r.src.slice(u + 2, o - 2), r.env.footnotes.refs[":" + l] = -1, r.tokens.push({
    type: "footnote_reference_open",
    label: l,
    level: r.level++
  }), n = r.bMarks[i], a = r.tShift[i], s = r.parentType, r.tShift[i] = r.skipSpaces(o) - o, r.bMarks[i] = o, r.blkIndent += 4, r.parentType = "footnote", r.tShift[i] < r.blkIndent && (r.tShift[i] += r.blkIndent, r.bMarks[i] -= r.blkIndent), r.parser.tokenize(r, i, e, !0), r.parentType = s, r.blkIndent -= 4, r.tShift[i] = a, r.bMarks[i] = n, r.tokens.push({
    type: "footnote_reference_close",
    level: --r.level
  })), !0);
}
function fo(r, i, e, t) {
  var n, a, s, o = r.bMarks[i] + r.tShift[i], l = r.eMarks[i];
  if (o >= l || (n = r.src.charCodeAt(o), n !== 35 || o >= l)) return !1;
  for (a = 1, n = r.src.charCodeAt(++o); n === 35 && o < l && a <= 6; ) a++, n = r.src.charCodeAt(++o);
  return a > 6 || o < l && n !== 32 ? !1 : (t || (l = r.skipCharsBack(l, 32, o), s = r.skipCharsBack(l, 35, o), s > o && r.src.charCodeAt(s - 1) === 32 && (l = s), r.line = i + 1, r.tokens.push({
    type: "heading_open",
    hLevel: a,
    lines: [i, r.line],
    level: r.level
  }), o < l && r.tokens.push({
    type: "inline",
    content: r.src.slice(o, l).trim(),
    level: r.level + 1,
    lines: [i, r.line],
    children: []
  }), r.tokens.push({
    type: "heading_close",
    hLevel: a,
    level: r.level
  })), !0);
}
function po(r, i, e) {
  var t, n, a, s = i + 1;
  return s >= e || r.tShift[s] < r.blkIndent || r.tShift[s] - r.blkIndent > 3 || (n = r.bMarks[s] + r.tShift[s], a = r.eMarks[s], n >= a) || (t = r.src.charCodeAt(n), t !== 45 && t !== 61) || (n = r.skipChars(n, t), n = r.skipSpaces(n), n < a) ? !1 : (n = r.bMarks[i] + r.tShift[i], r.line = s + 1, r.tokens.push({
    type: "heading_open",
    hLevel: t === 61 ? 1 : 2,
    lines: [i, r.line],
    level: r.level
  }), r.tokens.push({
    type: "inline",
    content: r.src.slice(n, r.eMarks[i]).trim(),
    level: r.level + 1,
    lines: [i, r.line - 1],
    children: []
  }), r.tokens.push({
    type: "heading_close",
    hLevel: t === 61 ? 1 : 2,
    level: r.level
  }), !0);
}
var Ci = {};
["article", "aside", "button", "blockquote", "body", "canvas", "caption", "col", "colgroup", "dd", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "iframe", "li", "map", "object", "ol", "output", "p", "pre", "progress", "script", "section", "style", "table", "tbody", "td", "textarea", "tfoot", "th", "tr", "thead", "ul", "video"].forEach(function(r) {
  Ci[r] = !0;
});
var ho = /^<([a-zA-Z]{1,15})[\s\/>]/, mo = /^<\/([a-zA-Z]{1,15})[\s>]/;
function vo(r) {
  var i = r | 32;
  return i >= 97 && i <= 122;
}
function go(r, i, e, t) {
  var n, a, s, o = r.bMarks[i], l = r.eMarks[i], u = r.tShift[i];
  if (o += u, !r.options.html || u > 3 || o + 2 >= l || r.src.charCodeAt(o) !== 60) return !1;
  if (n = r.src.charCodeAt(o + 1), n === 33 || n === 63) {
    if (t) return !0;
  } else if (n === 47 || vo(n)) {
    if (n === 47) {
      if (a = r.src.slice(o, l).match(mo), !a) return !1;
    } else if (a = r.src.slice(o, l).match(ho), !a) return !1;
    if (Ci[a[1].toLowerCase()] !== !0) return !1;
    if (t) return !0;
  } else return !1;
  for (s = i + 1; s < r.lineMax && !r.isEmpty(s); ) s++;
  return r.line = s, r.tokens.push({
    type: "htmlblock",
    level: r.level,
    lines: [i, r.line],
    content: r.getLines(i, s, 0, !0)
  }), !0;
}
function nr(r, i) {
  var e = r.bMarks[i] + r.blkIndent, t = r.eMarks[i];
  return r.src.substr(e, t - e);
}
function yo(r, i, e, t) {
  var n, a, s, o, l, u, c, d, p, h, g;
  if (i + 2 > e || (l = i + 1, r.tShift[l] < r.blkIndent) || (s = r.bMarks[l] + r.tShift[l], s >= r.eMarks[l]) || (n = r.src.charCodeAt(s), n !== 124 && n !== 45 && n !== 58) || (a = nr(r, i + 1), !/^[-:| ]+$/.test(a)) || (u = a.split("|"), u <= 2)) return !1;
  for (d = [], o = 0; o < u.length; o++) {
    if (p = u[o].trim(), !p) {
      if (o === 0 || o === u.length - 1) continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(p)) return !1;
    p.charCodeAt(p.length - 1) === 58 ? d.push(p.charCodeAt(0) === 58 ? "center" : "right") : p.charCodeAt(0) === 58 ? d.push("left") : d.push("");
  }
  if (a = nr(r, i).trim(), a.indexOf("|") === -1 || (u = a.replace(/^\||\|$/g, "").split("|"), d.length !== u.length)) return !1;
  if (t) return !0;
  for (r.tokens.push({
    type: "table_open",
    lines: h = [i, 0],
    level: r.level++
  }), r.tokens.push({
    type: "thead_open",
    lines: [i, i + 1],
    level: r.level++
  }), r.tokens.push({
    type: "tr_open",
    lines: [i, i + 1],
    level: r.level++
  }), o = 0; o < u.length; o++) r.tokens.push({
    type: "th_open",
    align: d[o],
    lines: [i, i + 1],
    level: r.level++
  }), r.tokens.push({
    type: "inline",
    content: u[o].trim(),
    lines: [i, i + 1],
    level: r.level,
    children: []
  }), r.tokens.push({
    type: "th_close",
    level: --r.level
  });
  for (r.tokens.push({
    type: "tr_close",
    level: --r.level
  }), r.tokens.push({
    type: "thead_close",
    level: --r.level
  }), r.tokens.push({
    type: "tbody_open",
    lines: g = [i + 2, 0],
    level: r.level++
  }), l = i + 2; l < e && !(r.tShift[l] < r.blkIndent || (a = nr(r, l).trim(), a.indexOf("|") === -1)); l++) {
    for (u = a.replace(/^\||\|$/g, "").split("|"), r.tokens.push({
      type: "tr_open",
      level: r.level++
    }), o = 0; o < u.length; o++) r.tokens.push({
      type: "td_open",
      align: d[o],
      level: r.level++
    }), c = u[o].substring(u[o].charCodeAt(0) === 124 ? 1 : 0, u[o].charCodeAt(u[o].length - 1) === 124 ? u[o].length - 1 : u[o].length).trim(), r.tokens.push({
      type: "inline",
      content: c,
      level: r.level,
      children: []
    }), r.tokens.push({
      type: "td_close",
      level: --r.level
    });
    r.tokens.push({
      type: "tr_close",
      level: --r.level
    });
  }
  return r.tokens.push({
    type: "tbody_close",
    level: --r.level
  }), r.tokens.push({
    type: "table_close",
    level: --r.level
  }), h[1] = g[1] = l, r.line = l, !0;
}
function mn(r, i) {
  var e, t, n = r.bMarks[i] + r.tShift[i], a = r.eMarks[i];
  return n >= a || (t = r.src.charCodeAt(n++), t !== 126 && t !== 58) || (e = r.skipSpaces(n), n === e) || e >= a ? -1 : e;
}
function bo(r, i) {
  var e, t, n = r.level + 2;
  for (e = i + 2, t = r.tokens.length - 2; e < t; e++) r.tokens[e].level === n && r.tokens[e].type === "paragraph_open" && (r.tokens[e + 2].tight = !0, r.tokens[e].tight = !0, e += 2);
}
function ko(r, i, e, t) {
  var n, a, s, o, l, u, c, d, p, h, g, k, S, T;
  if (t) return r.ddIndent < 0 ? !1 : mn(r, i) >= 0;
  if (c = i + 1, r.isEmpty(c) && ++c > e || r.tShift[c] < r.blkIndent || (n = mn(r, c), n < 0) || r.level >= r.options.maxNesting) return !1;
  u = r.tokens.length, r.tokens.push({
    type: "dl_open",
    lines: l = [i, 0],
    level: r.level++
  }), s = i, a = c;
  e: for (; ; ) {
    for (T = !0, S = !1, r.tokens.push({
      type: "dt_open",
      lines: [s, s],
      level: r.level++
    }), r.tokens.push({
      type: "inline",
      content: r.getLines(s, s + 1, r.blkIndent, !1).trim(),
      level: r.level + 1,
      lines: [s, s],
      children: []
    }), r.tokens.push({
      type: "dt_close",
      level: --r.level
    }); ; ) {
      if (r.tokens.push({
        type: "dd_open",
        lines: o = [c, 0],
        level: r.level++
      }), k = r.tight, p = r.ddIndent, d = r.blkIndent, g = r.tShift[a], h = r.parentType, r.blkIndent = r.ddIndent = r.tShift[a] + 2, r.tShift[a] = n - r.bMarks[a], r.tight = !0, r.parentType = "deflist", r.parser.tokenize(r, a, e, !0), (!r.tight || S) && (T = !1), S = r.line - a > 1 && r.isEmpty(r.line - 1), r.tShift[a] = g, r.tight = k, r.parentType = h, r.blkIndent = d, r.ddIndent = p, r.tokens.push({
        type: "dd_close",
        level: --r.level
      }), o[1] = c = r.line, c >= e || r.tShift[c] < r.blkIndent) break e;
      if (n = mn(r, c), n < 0) break;
      a = c;
    }
    if (c >= e || (s = c, r.isEmpty(s)) || r.tShift[s] < r.blkIndent || (a = s + 1, a >= e) || (r.isEmpty(a) && a++, a >= e) || r.tShift[a] < r.blkIndent || (n = mn(r, a), n < 0)) break;
  }
  return r.tokens.push({
    type: "dl_close",
    level: --r.level
  }), l[1] = c, r.line = c, T && bo(r, u), !0;
}
function Eo(r, i) {
  var e, t, n, a, s, o = i + 1, l;
  if (e = r.lineMax, o < e && !r.isEmpty(o)) {
    for (l = r.parser.ruler.getRules("paragraph"); o < e && !r.isEmpty(o); o++) if (!(r.tShift[o] - r.blkIndent > 3)) {
      for (n = !1, a = 0, s = l.length; a < s; a++) if (l[a](r, o, e, !0)) {
        n = !0;
        break;
      }
      if (n) break;
    }
  }
  return t = r.getLines(i, o, r.blkIndent, !1).trim(), r.line = o, t.length && (r.tokens.push({
    type: "paragraph_open",
    tight: !1,
    lines: [i, r.line],
    level: r.level
  }), r.tokens.push({
    type: "inline",
    content: t,
    level: r.level + 1,
    lines: [i, r.line],
    children: []
  }), r.tokens.push({
    type: "paragraph_close",
    tight: !1,
    level: r.level
  })), !0;
}
var vn = [["code", ao], ["fences", io, ["paragraph", "blockquote", "list"]], ["blockquote", so, ["paragraph", "blockquote", "list"]], ["hr", oo, ["paragraph", "blockquote", "list"]], ["list", uo, ["paragraph", "blockquote"]], ["footnote", co, ["paragraph"]], ["heading", fo, ["paragraph", "blockquote"]], ["lheading", po], ["htmlblock", go, ["paragraph", "blockquote"]], ["table", yo, ["paragraph"]], ["deflist", ko, ["paragraph"]], ["paragraph", Eo]];
function Fr() {
  this.ruler = new Fe();
  for (var r = 0; r < vn.length; r++) this.ruler.push(vn[r][0], vn[r][1], {
    alt: (vn[r][2] || []).slice()
  });
}
Fr.prototype.tokenize = function(r, i, e) {
  for (var t = this.ruler.getRules(""), n = t.length, a = i, s = !1, o, l; a < e && (r.line = a = r.skipEmptyLines(a), !(a >= e || r.tShift[a] < r.blkIndent)); ) {
    for (l = 0; l < n && (o = t[l](r, a, e, !1), !o); l++) ;
    if (r.tight = !s, r.isEmpty(r.line - 1) && (s = !0), a = r.line, a < e && r.isEmpty(a)) {
      if (s = !0, a++, a < e && r.parentType === "list" && r.isEmpty(a)) break;
      r.line = a;
    }
  }
};
var _o = /[\n\t]/g, So = /\r[\n\u0085]|[\u2424\u2028\u0085]/g, wo = /\u00a0/g;
Fr.prototype.parse = function(r, i, e, t) {
  var n, a = 0, s = 0;
  if (!r) return [];
  r = r.replace(wo, " "), r = r.replace(So, `
`), r.indexOf("	") >= 0 && (r = r.replace(_o, function(o, l) {
    var u;
    return r.charCodeAt(l) === 10 ? (a = l + 1, s = 0, o) : (u = "    ".slice((l - a - s) % 4), s = l - a + 1, u);
  })), n = new St(r, this, i, e, t), this.tokenize(n, n.line, n.lineMax);
};
function Co(r) {
  switch (r) {
    case 10:
    case 92:
    case 96:
    case 42:
    case 95:
    case 94:
    case 91:
    case 93:
    case 33:
    case 38:
    case 60:
    case 62:
    case 123:
    case 125:
    case 36:
    case 37:
    case 64:
    case 126:
    case 43:
    case 61:
    case 58:
      return !0;
    default:
      return !1;
  }
}
function To(r, i) {
  for (var e = r.pos; e < r.posMax && !Co(r.src.charCodeAt(e)); ) e++;
  return e === r.pos ? !1 : (i || (r.pending += r.src.slice(r.pos, e)), r.pos = e, !0);
}
function Ao(r, i) {
  var e, t, n = r.pos;
  if (r.src.charCodeAt(n) !== 10) return !1;
  if (e = r.pending.length - 1, t = r.posMax, !i) if (e >= 0 && r.pending.charCodeAt(e) === 32)
    if (e >= 1 && r.pending.charCodeAt(e - 1) === 32) {
      for (var a = e - 2; a >= 0; a--) if (r.pending.charCodeAt(a) !== 32) {
        r.pending = r.pending.substring(0, a + 1);
        break;
      }
      r.push({
        type: "hardbreak",
        level: r.level
      });
    } else r.pending = r.pending.slice(0, -1), r.push({
      type: "softbreak",
      level: r.level
    });
  else r.push({
    type: "softbreak",
    level: r.level
  });
  for (n++; n < t && r.src.charCodeAt(n) === 32; ) n++;
  return r.pos = n, !0;
}
var jr = [];
for (var Ta = 0; Ta < 256; Ta++) jr.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(r) {
  jr[r.charCodeAt(0)] = 1;
});
function xo(r, i) {
  var e, t = r.pos, n = r.posMax;
  if (r.src.charCodeAt(t) !== 92) return !1;
  if (t++, t < n) {
    if (e = r.src.charCodeAt(t), e < 256 && jr[e] !== 0) return i || (r.pending += r.src[t]), r.pos += 2, !0;
    if (e === 10) {
      for (i || r.push({
        type: "hardbreak",
        level: r.level
      }), t++; t < n && r.src.charCodeAt(t) === 32; ) t++;
      return r.pos = t, !0;
    }
  }
  return i || (r.pending += "\\"), r.pos++, !0;
}
function Mo(r, i) {
  var e, t, n, a, s, o = r.pos, l = r.src.charCodeAt(o);
  if (l !== 96) return !1;
  for (e = o, o++, t = r.posMax; o < t && r.src.charCodeAt(o) === 96; ) o++;
  for (n = r.src.slice(e, o), a = s = o; (a = r.src.indexOf("`", s)) !== -1; ) {
    for (s = a + 1; s < t && r.src.charCodeAt(s) === 96; ) s++;
    if (s - a === n.length) return i || r.push({
      type: "code",
      content: r.src.slice(o, a).replace(/[ \n]+/g, " ").trim(),
      block: !1,
      level: r.level
    }), r.pos = s, !0;
  }
  return i || (r.pending += n), r.pos += n.length, !0;
}
function Ro(r, i) {
  var e, t, n, a = r.posMax, s = r.pos, o, l;
  if (r.src.charCodeAt(s) !== 126 || i || s + 4 >= a || r.src.charCodeAt(s + 1) !== 126 || r.level >= r.options.maxNesting || (o = s > 0 ? r.src.charCodeAt(s - 1) : -1, l = r.src.charCodeAt(s + 2), o === 126) || l === 126 || l === 32 || l === 10) return !1;
  for (t = s + 2; t < a && r.src.charCodeAt(t) === 126; ) t++;
  if (t > s + 3) return r.pos += t - s, i || (r.pending += r.src.slice(s, t)), !0;
  for (r.pos = s + 2, n = 1; r.pos + 1 < a; ) {
    if (r.src.charCodeAt(r.pos) === 126 && r.src.charCodeAt(r.pos + 1) === 126 && (o = r.src.charCodeAt(r.pos - 1), l = r.pos + 2 < a ? r.src.charCodeAt(r.pos + 2) : -1, l !== 126 && o !== 126 && (o !== 32 && o !== 10 ? n-- : l !== 32 && l !== 10 && n++, n <= 0))) {
      e = !0;
      break;
    }
    r.parser.skipToken(r);
  }
  return e ? (r.posMax = r.pos, r.pos = s + 2, i || (r.push({
    type: "del_open",
    level: r.level++
  }), r.parser.tokenize(r), r.push({
    type: "del_close",
    level: --r.level
  })), r.pos = r.posMax + 2, r.posMax = a, !0) : (r.pos = s, !1);
}
function Io(r, i) {
  var e, t, n, a = r.posMax, s = r.pos, o, l;
  if (r.src.charCodeAt(s) !== 43 || i || s + 4 >= a || r.src.charCodeAt(s + 1) !== 43 || r.level >= r.options.maxNesting || (o = s > 0 ? r.src.charCodeAt(s - 1) : -1, l = r.src.charCodeAt(s + 2), o === 43) || l === 43 || l === 32 || l === 10) return !1;
  for (t = s + 2; t < a && r.src.charCodeAt(t) === 43; ) t++;
  if (t !== s + 2) return r.pos += t - s, i || (r.pending += r.src.slice(s, t)), !0;
  for (r.pos = s + 2, n = 1; r.pos + 1 < a; ) {
    if (r.src.charCodeAt(r.pos) === 43 && r.src.charCodeAt(r.pos + 1) === 43 && (o = r.src.charCodeAt(r.pos - 1), l = r.pos + 2 < a ? r.src.charCodeAt(r.pos + 2) : -1, l !== 43 && o !== 43 && (o !== 32 && o !== 10 ? n-- : l !== 32 && l !== 10 && n++, n <= 0))) {
      e = !0;
      break;
    }
    r.parser.skipToken(r);
  }
  return e ? (r.posMax = r.pos, r.pos = s + 2, i || (r.push({
    type: "ins_open",
    level: r.level++
  }), r.parser.tokenize(r), r.push({
    type: "ins_close",
    level: --r.level
  })), r.pos = r.posMax + 2, r.posMax = a, !0) : (r.pos = s, !1);
}
function Lo(r, i) {
  var e, t, n, a = r.posMax, s = r.pos, o, l;
  if (r.src.charCodeAt(s) !== 61 || i || s + 4 >= a || r.src.charCodeAt(s + 1) !== 61 || r.level >= r.options.maxNesting || (o = s > 0 ? r.src.charCodeAt(s - 1) : -1, l = r.src.charCodeAt(s + 2), o === 61) || l === 61 || l === 32 || l === 10) return !1;
  for (t = s + 2; t < a && r.src.charCodeAt(t) === 61; ) t++;
  if (t !== s + 2) return r.pos += t - s, i || (r.pending += r.src.slice(s, t)), !0;
  for (r.pos = s + 2, n = 1; r.pos + 1 < a; ) {
    if (r.src.charCodeAt(r.pos) === 61 && r.src.charCodeAt(r.pos + 1) === 61 && (o = r.src.charCodeAt(r.pos - 1), l = r.pos + 2 < a ? r.src.charCodeAt(r.pos + 2) : -1, l !== 61 && o !== 61 && (o !== 32 && o !== 10 ? n-- : l !== 32 && l !== 10 && n++, n <= 0))) {
      e = !0;
      break;
    }
    r.parser.skipToken(r);
  }
  return e ? (r.posMax = r.pos, r.pos = s + 2, i || (r.push({
    type: "mark_open",
    level: r.level++
  }), r.parser.tokenize(r), r.push({
    type: "mark_close",
    level: --r.level
  })), r.pos = r.posMax + 2, r.posMax = a, !0) : (r.pos = s, !1);
}
function Aa(r) {
  return r >= 48 && r <= 57 || r >= 65 && r <= 90 || r >= 97 && r <= 122;
}
function xa(r, i) {
  var e = i, t, n, a, s = !0, o = !0, l = r.posMax, u = r.src.charCodeAt(i);
  for (t = i > 0 ? r.src.charCodeAt(i - 1) : -1; e < l && r.src.charCodeAt(e) === u; ) e++;
  return e >= l && (s = !1), a = e - i, a >= 4 ? s = o = !1 : (n = e < l ? r.src.charCodeAt(e) : -1, (n === 32 || n === 10) && (s = !1), (t === 32 || t === 10) && (o = !1), u === 95 && (Aa(t) && (s = !1), Aa(n) && (o = !1))), {
    can_open: s,
    can_close: o,
    delims: a
  };
}
function Oo(r, i) {
  var e, t, n, a, s, o, l, u = r.posMax, c = r.pos, d = r.src.charCodeAt(c);
  if (d !== 95 && d !== 42 || i) return !1;
  if (l = xa(r, c), e = l.delims, !l.can_open) return r.pos += e, i || (r.pending += r.src.slice(c, r.pos)), !0;
  if (r.level >= r.options.maxNesting) return !1;
  for (r.pos = c + e, o = [e]; r.pos < u; ) {
    if (r.src.charCodeAt(r.pos) === d) {
      if (l = xa(r, r.pos), t = l.delims, l.can_close) {
        for (a = o.pop(), s = t; a !== s; ) {
          if (s < a) {
            o.push(a - s);
            break;
          }
          if (s -= a, o.length === 0) break;
          r.pos += a, a = o.pop();
        }
        if (o.length === 0) {
          e = a, n = !0;
          break;
        }
        r.pos += t;
        continue;
      }
      l.can_open && o.push(t), r.pos += t;
      continue;
    }
    r.parser.skipToken(r);
  }
  return n ? (r.posMax = r.pos, r.pos = c + e, i || ((e === 2 || e === 3) && r.push({
    type: "strong_open",
    level: r.level++
  }), (e === 1 || e === 3) && r.push({
    type: "em_open",
    level: r.level++
  }), r.parser.tokenize(r), (e === 1 || e === 3) && r.push({
    type: "em_close",
    level: --r.level
  }), (e === 2 || e === 3) && r.push({
    type: "strong_close",
    level: --r.level
  })), r.pos = r.posMax + e, r.posMax = u, !0) : (r.pos = c, !1);
}
var Po = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
function No(r, i) {
  var e, t, n = r.posMax, a = r.pos;
  if (r.src.charCodeAt(a) !== 126 || i || a + 2 >= n || r.level >= r.options.maxNesting) return !1;
  for (r.pos = a + 1; r.pos < n; ) {
    if (r.src.charCodeAt(r.pos) === 126) {
      e = !0;
      break;
    }
    r.parser.skipToken(r);
  }
  return !e || a + 1 === r.pos || (t = r.src.slice(a + 1, r.pos), t.match(/(^|[^\\])(\\\\)*\s/)) ? (r.pos = a, !1) : (r.posMax = r.pos, r.pos = a + 1, i || r.push({
    type: "sub",
    level: r.level,
    content: t.replace(Po, "$1")
  }), r.pos = r.posMax + 1, r.posMax = n, !0);
}
var Do = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
function Bo(r, i) {
  var e, t, n = r.posMax, a = r.pos;
  if (r.src.charCodeAt(a) !== 94 || i || a + 2 >= n || r.level >= r.options.maxNesting) return !1;
  for (r.pos = a + 1; r.pos < n; ) {
    if (r.src.charCodeAt(r.pos) === 94) {
      e = !0;
      break;
    }
    r.parser.skipToken(r);
  }
  return !e || a + 1 === r.pos || (t = r.src.slice(a + 1, r.pos), t.match(/(^|[^\\])(\\\\)*\s/)) ? (r.pos = a, !1) : (r.posMax = r.pos, r.pos = a + 1, i || r.push({
    type: "sup",
    level: r.level,
    content: t.replace(Do, "$1")
  }), r.pos = r.posMax + 1, r.posMax = n, !0);
}
function Fo(r, i) {
  var e, t, n, a, s, o, l, u, c = !1, d = r.pos, p = r.posMax, h = r.pos, g = r.src.charCodeAt(h);
  if (g === 33 && (c = !0, g = r.src.charCodeAt(++h)), g !== 91 || r.level >= r.options.maxNesting || (e = h + 1, t = Xt(r, h), t < 0)) return !1;
  if (o = t + 1, o < p && r.src.charCodeAt(o) === 40) {
    for (o++; o < p && (u = r.src.charCodeAt(o), !(u !== 32 && u !== 10)); o++) ;
    if (o >= p) return !1;
    for (h = o, Ei(r, o) ? (a = r.linkContent, o = r.pos) : a = "", h = o; o < p && (u = r.src.charCodeAt(o), !(u !== 32 && u !== 10)); o++) ;
    if (o < p && h !== o && _i(r, o)) for (s = r.linkContent, o = r.pos; o < p && (u = r.src.charCodeAt(o), !(u !== 32 && u !== 10)); o++) ;
    else s = "";
    if (o >= p || r.src.charCodeAt(o) !== 41) return r.pos = d, !1;
    o++;
  } else {
    if (r.linkLevel > 0) return !1;
    for (; o < p && (u = r.src.charCodeAt(o), !(u !== 32 && u !== 10)); o++) ;
    if (o < p && r.src.charCodeAt(o) === 91 && (h = o + 1, o = Xt(r, o), o >= 0 ? n = r.src.slice(h, o++) : o = h - 1), n || (G(n) > "u" && (o = t + 1), n = r.src.slice(e, t)), l = r.env.references[Si(n)], !l) return r.pos = d, !1;
    a = l.href, s = l.title;
  }
  return i || (r.pos = e, r.posMax = t, c ? r.push({
    type: "image",
    src: a,
    title: s,
    alt: r.src.substr(e, t - e),
    level: r.level
  }) : (r.push({
    type: "link_open",
    href: a,
    title: s,
    level: r.level++
  }), r.linkLevel++, r.parser.tokenize(r), r.linkLevel--, r.push({
    type: "link_close",
    level: --r.level
  }))), r.pos = o, r.posMax = p, !0;
}
function jo(r, i) {
  var e, t, n, a, s = r.posMax, o = r.pos;
  return o + 2 >= s || r.src.charCodeAt(o) !== 94 || r.src.charCodeAt(o + 1) !== 91 || r.level >= r.options.maxNesting || (e = o + 2, t = Xt(r, o + 1), t < 0) ? !1 : (i || (r.env.footnotes || (r.env.footnotes = {}), r.env.footnotes.list || (r.env.footnotes.list = []), n = r.env.footnotes.list.length, r.pos = e, r.posMax = t, r.push({
    type: "footnote_ref",
    id: n,
    level: r.level
  }), r.linkLevel++, a = r.tokens.length, r.parser.tokenize(r), r.env.footnotes.list[n] = {
    tokens: r.tokens.splice(a)
  }, r.linkLevel--), r.pos = t + 1, r.posMax = s, !0);
}
function Uo(r, i) {
  var e, t, n, a, s = r.posMax, o = r.pos;
  if (o + 3 > s || !r.env.footnotes || !r.env.footnotes.refs || r.src.charCodeAt(o) !== 91 || r.src.charCodeAt(o + 1) !== 94 || r.level >= r.options.maxNesting) return !1;
  for (t = o + 2; t < s; t++) {
    if (r.src.charCodeAt(t) === 32 || r.src.charCodeAt(t) === 10) return !1;
    if (r.src.charCodeAt(t) === 93) break;
  }
  return t === o + 2 || t >= s || (t++, e = r.src.slice(o + 2, t - 1), G(r.env.footnotes.refs[":" + e]) > "u") ? !1 : (i || (r.env.footnotes.list || (r.env.footnotes.list = []), r.env.footnotes.refs[":" + e] < 0 ? (n = r.env.footnotes.list.length, r.env.footnotes.list[n] = {
    label: e,
    count: 0
  }, r.env.footnotes.refs[":" + e] = n) : n = r.env.footnotes.refs[":" + e], a = r.env.footnotes.list[n].count, r.env.footnotes.list[n].count++, r.push({
    type: "footnote_ref",
    id: n,
    subId: a,
    level: r.level
  })), r.pos = t, r.posMax = s, !0);
}
var Ho = ["coap", "doi", "javascript", "aaa", "aaas", "about", "acap", "cap", "cid", "crid", "data", "dav", "dict", "dns", "file", "ftp", "geo", "go", "gopher", "h323", "http", "https", "iax", "icap", "im", "imap", "info", "ipp", "iris", "iris.beep", "iris.xpc", "iris.xpcs", "iris.lwz", "ldap", "mailto", "mid", "msrp", "msrps", "mtqp", "mupdate", "news", "nfs", "ni", "nih", "nntp", "opaquelocktoken", "pop", "pres", "rtsp", "service", "session", "shttp", "sieve", "sip", "sips", "sms", "snmp", "soap.beep", "soap.beeps", "tag", "tel", "telnet", "tftp", "thismessage", "tn3270", "tip", "tv", "urn", "vemmi", "ws", "wss", "xcon", "xcon-userid", "xmlrpc.beep", "xmlrpc.beeps", "xmpp", "z39.50r", "z39.50s", "adiumxtra", "afp", "afs", "aim", "apt", "attachment", "aw", "beshare", "bitcoin", "bolo", "callto", "chrome", "chrome-extension", "com-eventbrite-attendee", "content", "cvs", "dlna-playsingle", "dlna-playcontainer", "dtn", "dvb", "ed2k", "facetime", "feed", "finger", "fish", "gg", "git", "gizmoproject", "gtalk", "hcp", "icon", "ipn", "irc", "irc6", "ircs", "itms", "jar", "jms", "keyparc", "lastfm", "ldaps", "magnet", "maps", "market", "message", "mms", "ms-help", "msnim", "mumble", "mvn", "notes", "oid", "palm", "paparazzi", "platform", "proxy", "psyc", "query", "res", "resource", "rmi", "rsync", "rtmp", "secondlife", "sftp", "sgn", "skype", "smb", "soldat", "spotify", "ssh", "steam", "svn", "teamspeak", "things", "udp", "unreal", "ut2004", "ventrilo", "view-source", "webcal", "wtai", "wyciwyg", "xfire", "xri", "ymsgr"], qo = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/, zo = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;
function $o(r, i) {
  var e, t, n, a, s, o = r.pos;
  return r.src.charCodeAt(o) !== 60 || (e = r.src.slice(o), e.indexOf(">") < 0) ? !1 : (t = e.match(zo), t ? Ho.indexOf(t[1].toLowerCase()) < 0 || (a = t[0].slice(1, -1), s = br(a), !r.parser.validateLink(a)) ? !1 : (i || (r.push({
    type: "link_open",
    href: s,
    level: r.level
  }), r.push({
    type: "text",
    content: a,
    level: r.level + 1
  }), r.push({
    type: "link_close",
    level: r.level
  })), r.pos += t[0].length, !0) : (n = e.match(qo), n ? (a = n[0].slice(1, -1), s = br("mailto:" + a), r.parser.validateLink(s) ? (i || (r.push({
    type: "link_open",
    href: s,
    level: r.level
  }), r.push({
    type: "text",
    content: a,
    level: r.level + 1
  }), r.push({
    type: "link_close",
    level: r.level
  })), r.pos += n[0].length, !0) : !1) : !1));
}
function In(r, i) {
  return r = r.source, i = i || "", function e(t, n) {
    return t ? (n = n.source || n, r = r.replace(t, n), e) : new RegExp(r, i);
  };
}
var Vo = /[a-zA-Z_:][a-zA-Z0-9:._-]*/, Go = /[^"'=<>`\x00-\x20]+/, Wo = /'[^']*'/, Ko = /"[^"]*"/, Jo = In(/(?:unquoted|single_quoted|double_quoted)/)("unquoted", Go)("single_quoted", Wo)("double_quoted", Ko)(), Yo = In(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)("attr_name", Vo)("attr_value", Jo)(), Xo = In(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)("attribute", Yo)(), Zo = /<\/[A-Za-z][A-Za-z0-9]*\s*>/, Qo = /<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->/, el = /<[?].*?[?]>/, tl = /<![A-Z]+\s+[^>]*>/, nl = /<!\[CDATA\[[\s\S]*?\]\]>/, rl = In(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)("open_tag", Xo)("close_tag", Zo)("comment", Qo)("processing", el)("declaration", tl)("cdata", nl)();
function al(r) {
  var i = r | 32;
  return i >= 97 && i <= 122;
}
function il(r, i) {
  var e, t, n, a = r.pos;
  return !r.options.html || (n = r.posMax, r.src.charCodeAt(a) !== 60 || a + 2 >= n) || (e = r.src.charCodeAt(a + 1), e !== 33 && e !== 63 && e !== 47 && !al(e)) || (t = r.src.slice(a).match(rl), !t) ? !1 : (i || r.push({
    type: "htmltag",
    content: r.src.slice(a, a + t[0].length),
    level: r.level
  }), r.pos += t[0].length, !0);
}
var sl = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i, ol = /^&([a-z][a-z0-9]{1,31});/i;
function ll(r, i) {
  var e, t, n, a = r.pos, s = r.posMax;
  if (r.src.charCodeAt(a) !== 38) return !1;
  if (a + 1 < s) {
    if (e = r.src.charCodeAt(a + 1), e === 35) {
      if (n = r.src.slice(a).match(sl), n) return i || (t = n[1][0].toLowerCase() === "x" ? parseInt(n[1].slice(1), 16) : parseInt(n[1], 10), r.pending += bi(t) ? yr(t) : yr(65533)), r.pos += n[0].length, !0;
    } else if (n = r.src.slice(a).match(ol), n) {
      var o = gi(n[1]);
      if (n[1] !== o) return i || (r.pending += o), r.pos += n[0].length, !0;
    }
  }
  return i || (r.pending += "&"), r.pos++, !0;
}
var rr = [["text", To], ["newline", Ao], ["escape", xo], ["backticks", Mo], ["del", Ro], ["ins", Io], ["mark", Lo], ["emphasis", Oo], ["sub", No], ["sup", Bo], ["links", Fo], ["footnote_inline", jo], ["footnote_ref", Uo], ["autolink", $o], ["htmltag", il], ["entity", ll]];
function Ln() {
  this.ruler = new Fe();
  for (var r = 0; r < rr.length; r++) this.ruler.push(rr[r][0], rr[r][1]);
  this.validateLink = ul;
}
Ln.prototype.skipToken = function(r) {
  var i = this.ruler.getRules(""), e = i.length, t = r.pos, n, a;
  if ((a = r.cacheGet(t)) > 0) {
    r.pos = a;
    return;
  }
  for (n = 0; n < e; n++) if (i[n](r, !0)) {
    r.cacheSet(t, r.pos);
    return;
  }
  r.pos++, r.cacheSet(t, r.pos);
};
Ln.prototype.tokenize = function(r) {
  for (var i = this.ruler.getRules(""), e = i.length, t = r.posMax, n, a; r.pos < t; ) {
    for (a = 0; a < e && (n = i[a](r, !1), !n); a++) ;
    if (n) {
      if (r.pos >= t) break;
      continue;
    }
    r.pending += r.src[r.pos++];
  }
  r.pending && r.pushPending();
};
Ln.prototype.parse = function(r, i, e, t) {
  var n = new _t(r, this, i, e, t);
  this.tokenize(n);
};
function ul(r) {
  var i = ["vbscript", "javascript", "file", "data"], e = r.trim().toLowerCase();
  return e = bt(e), !(e.indexOf(":") !== -1 && i.indexOf(e.split(":")[0]) !== -1);
}
var cl = {
  options: {
    html: !1,
    // Enable HTML tags in source
    xhtmlOut: !1,
    // Use '/' to close single tags (<br />)
    breaks: !1,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkTarget: "",
    // set target to open link in
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: "“”‘’",
    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    core: {
      rules: ["block", "inline", "references", "replacements", "smartquotes", "references", "abbr2", "footnote_tail"]
    },
    block: {
      rules: ["blockquote", "code", "fences", "footnote", "heading", "hr", "htmlblock", "lheading", "list", "paragraph", "table"]
    },
    inline: {
      rules: ["autolink", "backticks", "del", "emphasis", "entity", "escape", "footnote_ref", "htmltag", "links", "newline", "text"]
    }
  }
}, dl = {
  options: {
    html: !1,
    // Enable HTML tags in source
    xhtmlOut: !1,
    // Use '/' to close single tags (<br />)
    breaks: !1,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkTarget: "",
    // set target to open link in
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: "“”‘’",
    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    // Don't restrict core/block/inline rules
    core: {},
    block: {},
    inline: {}
  }
}, fl = {
  options: {
    html: !0,
    // Enable HTML tags in source
    xhtmlOut: !0,
    // Use '/' to close single tags (<br />)
    breaks: !1,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkTarget: "",
    // set target to open link in
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: "“”‘’",
    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    core: {
      rules: ["block", "inline", "references", "abbr2"]
    },
    block: {
      rules: ["blockquote", "code", "fences", "heading", "hr", "htmlblock", "lheading", "list", "paragraph"]
    },
    inline: {
      rules: ["autolink", "backticks", "emphasis", "entity", "escape", "htmltag", "links", "newline", "text"]
    }
  }
}, pl = {
  default: cl,
  full: dl,
  commonmark: fl
};
function Ti(r, i, e) {
  this.src = i, this.env = e, this.options = r.options, this.tokens = [], this.inlineMode = !1, this.inline = r.inline, this.block = r.block, this.renderer = r.renderer, this.typographer = r.typographer;
}
function Ke(r, i) {
  typeof r != "string" && (i = r, r = "default"), i && i.linkify != null && console.warn(`linkify option is removed. Use linkify plugin instead:

import Remarkable from 'remarkable';
import linkify from 'remarkable/linkify';
new Remarkable().use(linkify)
`), this.inline = new Ln(), this.block = new Fr(), this.core = new wi(), this.renderer = new Br(), this.ruler = new Fe(), this.options = {}, this.configure(pl[r]), this.set(i || {});
}
Ke.prototype.set = function(r) {
  yi(this.options, r);
};
Ke.prototype.configure = function(r) {
  var i = this;
  if (!r) throw new Error("Wrong `remarkable` preset, check name/content");
  r.options && i.set(r.options), r.components && Object.keys(r.components).forEach(function(e) {
    r.components[e].rules && i[e].ruler.enable(r.components[e].rules, !0);
  });
};
Ke.prototype.use = function(r, i) {
  return r(this, i), this;
};
Ke.prototype.parse = function(r, i) {
  var e = new Ti(this, r, i);
  return this.core.process(e), e.tokens;
};
Ke.prototype.render = function(r, i) {
  return i = i || {}, this.renderer.render(this.parse(r, i), this.options, i);
};
Ke.prototype.parseInline = function(r, i) {
  var e = new Ti(this, r, i);
  return e.inlineMode = !0, this.core.process(e), e.tokens;
};
Ke.prototype.renderInline = function(r, i) {
  return i = i || {}, this.renderer.render(this.parseInline(r, i), this.options, i);
};
var Ai = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "instantiate",
    value: function(e) {
      if (e) return new Ke(ce(ce({}, r.DEFAULT_PROPERTIES), e));
      if (window.hljs) {
        var t = window.hljs;
        return new Ke({
          highlight: function(a, s) {
            if (s && t.getLanguage(s)) try {
              return t.highlight(s, a).value;
            } catch {
              console.error("failed to setup the highlight dependency");
            }
            try {
              return t.highlightAuto(a).value;
            } catch {
              console.error("failed to automatically highlight messages");
            }
            return "";
          },
          html: !1,
          // Enable HTML tags in source
          xhtmlOut: !1,
          // Use '/' to close single tags (<br />)
          breaks: !0,
          // Convert '\n' in paragraphs into <br>
          langPrefix: "language-",
          // CSS language prefix for fenced blocks
          linkTarget: "_blank",
          // set target to open in a new tab
          typographer: !0
          // Enable smartypants and other sweet transforms
        });
      } else return new Ke(r.DEFAULT_PROPERTIES);
    }
  }, {
    key: "createNew",
    value: function(e) {
      var t = r.instantiate(e);
      return t.inline.validateLink = function() {
        return !0;
      }, t;
    }
  }]);
}();
Ai.DEFAULT_PROPERTIES = {
  breaks: !0,
  linkTarget: "_blank"
  // set target to open in a new tab
};
var kr = Ai, bn = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "applyCustomStylesToElements",
    value: function(e, t, n) {
      if (n && (Object.assign(e.outerContainer.style, n.outerContainer), Object.assign(e.innerContainer.style, n.innerContainer), Object.assign(e.bubbleElement.style, n.bubble), t)) {
        var a = e.bubbleElement.children[0], s = a.tagName.toLocaleLowerCase() !== "a" ? a : a.children[0];
        Object.assign(s.style, n.media);
      }
    }
  }, {
    key: "applySideStyles",
    value: function(e, t, n, a) {
      a && (r.applyCustomStylesToElements(e, n, a.shared), t === W.USER_ROLE ? r.applyCustomStylesToElements(e, n, a.user) : (r.applyCustomStylesToElements(e, n, a.ai), r.applyCustomStylesToElements(e, n, a[t])));
    }
  }, {
    key: "isElementsStyles",
    value: function(e) {
      return !!(e.outerContainer || e.innerContainer || e.bubble || e.media);
    }
    // prettier-ignore
  }, {
    key: "applyCustomStyles",
    value: function(e, t, n, a, s) {
      var o;
      s && e.default !== s ? r.isElementsStyles(s) ? (r.applyCustomStylesToElements(t, a, (o = e.default) == null ? void 0 : o.shared), r.applyCustomStylesToElements(t, a, s)) : (r.applySideStyles(t, n, a, e.default), r.applySideStyles(t, n, a, s)) : r.applySideStyles(t, n, a, e.default);
    }
    // prettier-ignore
  }, {
    key: "extractParticularSharedStyles",
    value: function(e, t) {
      if (t != null && t.shared) {
        var n = t.shared, a = {
          outerContainer: {},
          innerContainer: {},
          bubble: {},
          media: {}
        };
        return e.forEach(function(s) {
          var o, l, u, c;
          a.outerContainer[s] = ((o = n.outerContainer) == null ? void 0 : o[s]) || "", a.innerContainer[s] = ((l = n.innerContainer) == null ? void 0 : l[s]) || "", a.bubble[s] = ((u = n.bubble) == null ? void 0 : u[s]) || "", a.media[s] = ((c = n.media) == null ? void 0 : c[s]) || "";
        }), a;
      }
    }
  }]);
}(), An = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "onMessage",
    value: function(e, t, n) {
      var a, s = JSON.parse(JSON.stringify({
        message: t,
        isHistory: n,
        isInitial: n
      }));
      Oe.reAddFileRefToObject(t, s), (a = e.onMessage) == null || a.call(e, s), e.dispatchEvent(new CustomEvent("message", {
        detail: s
      })), Ne.fireOnNewMessage(e, s);
    }
  }, {
    key: "onClearMessages",
    value: function(e) {
      var t;
      (t = e.onClearMessages) == null || t.call(e), e.dispatchEvent(new CustomEvent("clear-messages"));
    }
  }, {
    key: "onRender",
    value: function(e) {
      var t;
      (t = e.onComponentRender) == null || t.call(e, e), e.dispatchEvent(new CustomEvent("render", {
        detail: e
      }));
    }
  }, {
    key: "onError",
    value: function(e, t) {
      var n;
      (n = e.onError) == null || n.call(e, t), e.dispatchEvent(new CustomEvent("error", {
        detail: t
      }));
    }
  }]);
}(), kn = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "generateLoadingRingElement",
    value: function() {
      var e = document.createElement("div");
      return e.classList.add("loading-history"), e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), e;
    }
  }, {
    key: "apply",
    value: function(e, t, n) {
      mt.setRing(t.bubbleElement, n == null ? void 0 : n.bubble), n != null && n.bubble && (n = JSON.parse(JSON.stringify(n)), delete n.bubble), e.applyCustomStyles(t, "history", !1, n);
    }
  }, {
    key: "addLoadHistoryMessage",
    value: function(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, a, s, o, l, u, c, d, p;
      e.bubbleElement.classList.add(r.CLASS);
      var h = n ? r.FULL_VIEW_CLASS : r.SMALL_CLASS;
      e.outerContainer.classList.add(h);
      var g = n ? (l = (o = (s = (a = t.messageStyles) == null ? void 0 : a.loading) == null ? void 0 : s.history) == null ? void 0 : o.full) == null ? void 0 : l.styles : (p = (d = (c = (u = t.messageStyles) == null ? void 0 : u.loading) == null ? void 0 : c.history) == null ? void 0 : d.small) == null ? void 0 : p.styles;
      r.apply(t, e, g), t.elementRef.prepend(e.outerContainer);
    }
  }, {
    key: "createDefaultElements",
    value: function(e) {
      var t = e.createMessageElements("", W.AI_ROLE), n = t.bubbleElement, a = r.generateLoadingRingElement();
      return n.appendChild(a), t;
    }
  }, {
    key: "addMessage",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n, a, s, o, l = (o = (s = (a = (n = e.messageStyles) == null ? void 0 : n.loading) == null ? void 0 : a.history) == null ? void 0 : s.full) == null ? void 0 : o.html, u = l ? et.createElements(e, l, W.AI_ROLE, !0) : r.createDefaultElements(e);
      return r.addLoadHistoryMessage(u, e, t), u;
    }
  }, {
    key: "tryChangeViewToSmall",
    value: function(e, t) {
      var n, a, s, o, l, u, c, d;
      if (t != null && t.outerContainer.classList.contains(r.FULL_VIEW_CLASS)) {
        t.outerContainer.classList.replace(r.FULL_VIEW_CLASS, r.SMALL_CLASS);
        var p = (o = (s = (a = (n = e.messageStyles) == null ? void 0 : n.loading) == null ? void 0 : a.history) == null ? void 0 : s.small) == null ? void 0 : o.styles;
        p && r.apply(e, t, p);
        var h = (d = (c = (u = (l = e.messageStyles) == null ? void 0 : l.loading) == null ? void 0 : u.history) == null ? void 0 : c.small) == null ? void 0 : d.html;
        return h && (t.bubbleElement.innerHTML = h), !0;
      }
      return !1;
    }
  }, {
    key: "changeFullViewToSmall",
    value: function(e) {
      var t = e.messageElementRefs[e.messageElementRefs.length - 1];
      r.tryChangeViewToSmall(e, t) || r.tryChangeViewToSmall(e, e.messageElementRefs[0]);
    }
  }]);
}();
kn.CLASS = "loading-history-message", kn.FULL_VIEW_CLASS = "loading-history-message-full-view", kn.SMALL_CLASS = "loading-history-message-small";
var vt = kn, Er = /* @__PURE__ */ function() {
  function r(i) {
    var e = this;
    E(this, r), this.messageElementRefs = [], this.htmlClassUtilities = {}, this.messageToElements = [], this.elementRef = r.createContainerElement(), this.messageStyles = Ne.processMessageStyles(i.messageStyles), this._remarkable = kr.createNew(i.remarkable), this._avatars = i.avatars, this._names = i.names, this._onMessage = An.onMessage.bind(this, i), i.htmlClassUtilities && (this.htmlClassUtilities = i.htmlClassUtilities), setTimeout(function() {
      e.submitUserMessage = i.submitUserMessage;
    });
  }
  return _(r, [{
    key: "addNewTextMessage",
    value: function(e, t, n) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      if (n != null && n.status) {
        var s = this.overwriteText(t, e, this.messageElementRefs);
        if (s) return s;
        n.status = !1;
      }
      var o = a ? this.createAndPrependNewMessageElement(e, t, a) : this.createAndAppendNewMessageElement(e, t);
      return o.bubbleElement.classList.add(r.TEXT_BUBBLE_CLASS), this.applyCustomStyles(o, t, !1), W.fillEmptyMessageElement(o.bubbleElement, e), o;
    }
    // prettier-ignore
  }, {
    key: "overwriteText",
    value: function(e, t, n) {
      var a = W.overwriteMessage(this.messageToElements, n, t, e, "text", r.TEXT_BUBBLE_CLASS);
      return a && this.renderText(a.bubbleElement, t), a;
    }
    // Check how it will impact history pagination
    /*
    // need a fade out and fade in animation like in https://pi.ai/talk
    // do not scroll to last file message, stop scrolling altogether
    protected createAndAppendNewMessageElement(text: string, role: string) {
      if (role === 'user') {
        if (this.lastElem) this.lastElem.style.height = '';
        const lastGroupElement = document.createElement('div');
        if (this.lastElem) lastGroupElement.style.height = '100%';
        this.lastElem = lastGroupElement;
      }
      const messageElements = this.createNewMessageElement(text, role);
      this.lastElem?.appendChild(messageElements.outerContainer);
      this.elementRef.appendChild(this.lastElem as HTMLElement);
      setTimeout(() => ElementUtils.scrollToBottom(this.elementRef)); // timeout neeed when bubble font is large
      return messageElements;
    }
      */
    // need a fade out and fade in animation like in https://pi.ai/talk
    // do not scroll to last file message, stop scrolling altogether
  }, {
    key: "createAndAppendNewMessageElement",
    value: function(e, t) {
      var n = this, a = this.createNewMessageElement(e, t);
      return this.elementRef.appendChild(a.outerContainer), setTimeout(function() {
        return Ue.scrollToBottom(n.elementRef);
      }), a;
    }
  }, {
    key: "createAndPrependNewMessageElement",
    value: function(e, t, n) {
      var a, s = this.createNewMessageElement(e, t, n);
      if (n && (a = this.elementRef.firstChild) != null && a.classList.contains(r.INTRO_CLASS)) {
        this.elementRef.firstChild.insertAdjacentElement("afterend", s.outerContainer);
        var o = this.messageElementRefs[0];
        this.messageElementRefs[0] = this.messageElementRefs[1], this.messageElementRefs[1] = o;
      } else this.elementRef.insertBefore(s.outerContainer, this.elementRef.firstChild);
      return s;
    }
  }, {
    key: "createMessageElementsOnOrientation",
    value: function(e, t, n) {
      return n ? this.createAndPrependNewMessageElement(e, t, !0) : this.createNewMessageElement(e, t);
    }
  }, {
    key: "createNewMessageElement",
    value: function(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a;
      (a = this._introPanel) == null || a.hide();
      var s = this.messageElementRefs[this.messageElementRefs.length - 1];
      return vt.changeFullViewToSmall(this), r.isTemporaryElement(s) && (this.revealRoleElementsIfTempRemoved(s, t), s.outerContainer.remove(), this.messageElementRefs.pop()), this.createMessageElements(e, t, n);
    }
    // this can be tested by having an ai message, then a temp ai message with html that submits new user message:
    // https://github.com/OvidijusParsiunas/deep-chat/issues/258
    // prettier-ignore
  }, {
    key: "revealRoleElementsIfTempRemoved",
    value: function(e, t) {
      if ((this._avatars || this._names) && Jt.isElementTemporary(e)) {
        var n = this.messageElementRefs[this.messageElementRefs.length - 2];
        n && this.messageToElements.length > 0 && !e.bubbleElement.classList.contains(W.getRoleClass(t)) && W.revealRoleElements(n.innerContainer, this._avatars, this._names);
      }
    }
  }, {
    key: "createElements",
    value: function(e, t) {
      var n = r.createBaseElements(t), a = n.outerContainer, s = n.innerContainer, o = n.bubbleElement;
      return a.appendChild(s), this.addInnerContainerElements(o, e, t), n;
    }
  }, {
    key: "createMessageElements",
    value: function(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = this.createElements(e, t);
      return W.updateRefArr(this.messageElementRefs, a, n), W.classifyMessages(t, this.messageElementRefs), a;
    }
  }, {
    key: "addInnerContainerElements",
    value: (
      // prettier-ignore
      function(e, t, n) {
        var a;
        return ((a = this.messageToElements[this.messageToElements.length - 1]) == null ? void 0 : a[0].role) === n && !this.isLastMessageError() && W.hideRoleElements(this.messageElementRefs, !!this._avatars, !!this._names), e.classList.add("message-bubble", W.getRoleClass(n), n === W.USER_ROLE ? "user-message-text" : "ai-message-text"), this.renderText(e, t), W.addRoleElements(e, n, this._avatars, this._names), {
          bubbleElement: e
        };
      }
    )
    // prettier-ignore
  }, {
    key: "applyCustomStyles",
    value: function(e, t, n, a) {
      e && this.messageStyles && bn.applyCustomStyles(this.messageStyles, e, t, n, a);
    }
    // WORK - add a customProps to allow devs to add custom properties
  }, {
    key: "removeMessage",
    value: function(e) {
      e.outerContainer.remove();
      var t = this.messageElementRefs.findIndex(function(n) {
        return n === e;
      });
      this.messageElementRefs.splice(t, 1);
    }
  }, {
    key: "removeLastMessage",
    value: function() {
      this.messageElementRefs[this.messageElementRefs.length - 1].outerContainer.remove(), this.messageElementRefs.pop();
    }
  }, {
    key: "isLastMessageError",
    value: function() {
      var e;
      return (e = W.getLastMessageBubbleElement(this.elementRef)) == null ? void 0 : e.classList.contains("error-message-text");
    }
  }, {
    key: "sendClientUpdate",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
      (n = this._onMessage) == null || n.call(this, e, t);
    }
  }, {
    key: "renderText",
    value: function(e, t) {
      e.innerHTML = this._remarkable.render(t), e.innerText.trim().length === 0 && (e.innerText = t);
    }
    // this is mostly used for enabling highlight.js to highlight code if it downloads later
  }, {
    key: "refreshTextMessages",
    value: function(e) {
      var t = this;
      this._remarkable = kr.createNew(e), this.messageToElements.forEach(function(n) {
        n[1].text && n[0].text && t.renderText(n[1].text.bubbleElement, n[0].text);
      });
    }
  }], [{
    key: "createContainerElement",
    value: function() {
      var e = document.createElement("div");
      return e.id = "messages", e;
    }
  }, {
    key: "isTemporaryElement",
    value: function(e) {
      return r.isLoadingMessage(e) || Jt.isElementTemporary(e);
    }
  }, {
    key: "createBaseElements",
    value: function(e) {
      var t = document.createElement("div"), n = document.createElement("div");
      n.classList.add("inner-message-container"), t.appendChild(n), t.classList.add("outer-message-container"), t.classList.add(W.buildRoleContainerClass(e));
      var a = document.createElement("div");
      return a.classList.add("message-bubble"), n.appendChild(a), {
        outerContainer: t,
        innerContainer: n,
        bubbleElement: a
      };
    }
  }, {
    key: "createMessageContent",
    value: function(e) {
      var t = e.text, n = e.files, a = e.html, s = e._sessionId, o = e.role, l = {
        role: o || W.AI_ROLE
      };
      return t && (l.text = t), n && (l.files = n), a && (l.html = a), !t && !n && !a && (l.text = ""), s && (l._sessionId = s), l;
    }
  }, {
    key: "isLoadingMessage",
    value: function(e) {
      return e == null ? void 0 : e.bubbleElement.classList.contains(mt.BUBBLE_CLASS);
    }
  }]);
}();
Er.TEXT_BUBBLE_CLASS = "text-message", Er.INTRO_CLASS = "deep-chat-intro";
var gt = Er, hl = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3csvg%20fill='%23000000'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2032%2032'%20xml:space='preserve'%3e%3cpath%20d='M23,30.36H9c-2.404,0-4.36-1.956-4.36-4.36V15c0-2.404,1.956-4.36,4.36-4.36h3.659%20c0.167-1.566,1.415-2.813,2.981-2.981V5.333c-1.131-0.174-2-1.154-2-2.333c0-1.301,1.059-2.36,2.36-2.36%20c1.302,0,2.36,1.059,2.36,2.36c0,1.179-0.869,2.159-2,2.333V7.66c1.566,0.167,2.814,1.415,2.981,2.981H23%20c2.404,0,4.36,1.956,4.36,4.36v11C27.36,28.404,25.404,30.36,23,30.36z%20M9,11.36c-2.007,0-3.64,1.633-3.64,3.64v11%20c0,2.007,1.633,3.64,3.64,3.64h14c2.007,0,3.64-1.633,3.64-3.64V15c0-2.007-1.633-3.64-3.64-3.64H9z%20M13.384,10.64h5.231%20C18.439,9.354,17.334,8.36,16,8.36C14.667,8.36,13.561,9.354,13.384,10.64z%20M16,1.36c-0.904,0-1.64,0.736-1.64,1.64%20S15.096,4.64,16,4.64c0.904,0,1.64-0.736,1.64-1.64S16.904,1.36,16,1.36z%20M20,27.36h-8c-1.301,0-2.36-1.059-2.36-2.36%20s1.059-2.36,2.36-2.36h8c1.302,0,2.36,1.059,2.36,2.36S21.302,27.36,20,27.36z%20M12,23.36c-0.904,0-1.64,0.735-1.64,1.64%20s0.736,1.64,1.64,1.64h8c0.904,0,1.64-0.735,1.64-1.64s-0.735-1.64-1.64-1.64H12z%20M31,23.86h-2c-0.199,0-0.36-0.161-0.36-0.36V15%20c0-0.199,0.161-0.36,0.36-0.36h2c0.199,0,0.36,0.161,0.36,0.36v8.5C31.36,23.699,31.199,23.86,31,23.86z%20M29.36,23.14h1.279v-7.78%20H29.36V23.14z%20M3,23.86H1c-0.199,0-0.36-0.161-0.36-0.36V15c0-0.199,0.161-0.36,0.36-0.36h2c0.199,0,0.36,0.161,0.36,0.36v8.5%20C3.36,23.699,3.199,23.86,3,23.86z%20M1.36,23.14h1.28v-7.78H1.36V23.14z%20M20,20.36c-1.302,0-2.36-1.059-2.36-2.36%20s1.059-2.36,2.36-2.36s2.36,1.059,2.36,2.36C22.36,19.302,21.302,20.36,20,20.36z%20M20,16.36c-0.904,0-1.64,0.736-1.64,1.64%20s0.735,1.64,1.64,1.64s1.64-0.735,1.64-1.64S20.904,16.36,20,16.36z%20M12,20.36c-1.301,0-2.36-1.059-2.36-2.36s1.059-2.36,2.36-2.36%20s2.36,1.059,2.36,2.36C14.36,19.302,13.301,20.36,12,20.36z%20M12,16.36c-0.904,0-1.64,0.736-1.64,1.64s0.736,1.64,1.64,1.64%20s1.64-0.735,1.64-1.64S12.904,16.36,12,16.36z'/%3e%3crect%20style='fill:none;'%20width='32'%20height='32'/%3e%3c/svg%3e", ml = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAMAAAC/MqoPAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAADNQTFRF////9vX18vLy/Pz86enp4+Li2tnZ1tbWzczM+fn57Ozs4N/f09LS0M/P5uXl7+/v3dzcwtncCAAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAAEgAAABIAEbJaz4AAAZNSURBVHja7d3bdtsqEABQYABZSLH9/3+ZpnUsIcF5iOM6PfElNoMHMfPQdq3GmL0GkLhEUqLaUExnOtOZznSmM53pTGc605nOdKYznelMZzrTmV4LXSqllKyJDkob26xWq8Zae/iH0QoWTm9d1xur4WuypQJtTd+5dqn0VjcxzNO5/57mEBvdLo8Oron6aseWOjYOFkVvjQs3DmgyONMuht52EfztP+4hdu0i6LCO808/M8c1lE/fuPGej41uUzgdtoO/75N+2ELJ9I3b3//hPXbiMenm3pR/Jt4USgcLBIp4Bh10gqKVhvLo0klCxeSky96nKcj3siw6pJIL4XsoiQ7apyvMY/V3HHrSRioLopvEhSpTCn2TPEuwKYMOIX0tAxRBf/Hpa+lfSqBv9gi1FPsNfTrMAiVmIE/vJhz61FGnQxRIEYE4vfNYdN8Rp6MlHaHotHTn8ejekaZPAjEmyvQWdZFTtYTpXqCGJ0zvcek9Yfoel76nS0ffv1NMp1ca+pkgyfRCGind4L7OWWc605l+cxjsyhqy9AGbPpClc1/nvl5VX0c/3Alk6RU3+Am7shNZ+h6bvidLr7jBB+zKBrL0irOOudmIUDzTmf5gIP+iEuXtRuTVaEmY/oZLfyNMrzjryPc0gerMTdpVg0tvjJUU6bLPcGOoUv46SLL6Wi8yhLf06C7TUyekI0efRaaYqdFltkeNpPumRPSMDxgBYvSM035FrKAmH72hRW99PrpvSdEHkTEGUvSsK3yKVDkuJ92RohcZaehzzirPpOg+J92Tolfc4Cumx5xVXpGiZ34+ICX6W84qv5GiR5NPbiIpOv6BCoSvSkTX+eiaGP092zINvBOj4x8mSf9FqejvNo/cvpOji19ZbmviL0GPLsYMFzgzCor0+Bv/ePDvSJKOb9dJ5UlnbnEHiHgzv6cdTpJOWuc/u3FEucLDOL75xGtBiefrcwgoC9NDSH/jkH6pAuXmBqPQ9HSUPVdZBH1GGOrMXAQdYxcKZfxAoK+KKBKFLosoEoX+u4giUehz8jlcnAuhp78I46yDYNAd+QLR6K+pr+yvxdBTHyVDubQh0UfSxaHSd0lbvNkVRE87JGOtc+PQd2QLQ6fHhJkKsSh6yg13tO08JPprsgrrXWH0dJd2vH1MLPprot4eXoujpzrdhngiD40ek2y92lggPcnWa8qN1Yz0BFuvZhRl0uOfR0v4Ewuli/Bg4Qr3lArqGdndQ3UPO1EunXYwnelMZzrTmc50pjOd6UxnOtOZznSmM53pTGf6kuj6oedFKV0s3fX6sX1S3bsi6a4PD7+/YAqYeBw6pIB/4qEgOqxdSPbGiim4NRRCbzs3Jj0L4UfXtQXQVRfn5IdA/Bw7RZzurEV6EtdsLeGXkIPuA+K1UoVeA0l62zmN/LqfSSft9KkepmoRuvi3nd5uKNFB9zbbXEANqdr941XO0NJx2v2jdJenpf+/3bvn0ts16ph+sd6hX7dPo2+2cZzE02Ia43bzDHqr+2Evnhz74ZHU30ffbKOeng1/NPV30Ns1gYQnSP2P6e65Pfxc6h02XZqXQCjhJ6kPL6bFo4NrGvAU4UII4SE2P1vQuZkuOxckVfehisF1MjUddN/MZBN+kvq5uf0O/xa66gyNS9ktMWlz44rO1Z8C19i5FPdHzPamXn+F3hryPfxMr78+4F+kq22kO6Rf6fUQt+puuustyWv4rbG3l/duztFB96GYoe1cTBdXMr+nw9qVM6ZfxOvzezff0nXi/ZOndvrR6Zvpm0c3h6nhdb+5iS7tsIim/qXZD9+97/Jf+rpZ5BET1ayv0GUzLhEuhBBjIy/RdVPgndutIRt9nt7p5cKFEEJ3Z+jQFDZL+XnMDXxHB73gxn5s9Kc3d3/pFciFkN/QTSXHJpX5l66gDrkQoP6hL3xsPw39la4qOiV8tH78XeSbue6N9mvWa6J/ybpc1CT1Wnh5Qq9meP8IOKH3ddH7E/ri1iYux/SXDrXR4UiPdck/wUpU+FtPf6/orja6O9KL3l56LOvVxe5Ib2qjN0d6Vbex4ghWlU3bPqI90If66MNng680FNpbJijH6kCvaF3uMzQ3+IrpFerV4Y9dffQdN3im10ivbuImhD3Qq5u4HdZkua8znelMZ/pS4z9CPVKkxowNxgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wMy0yN1QxNTo0NToxNSswMDowMN1xSg4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDMtMjdUMTU6NDU6MTUrMDA6MDCsLPKyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg==", xi = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "hide",
    value: function(e) {
      var t;
      (t = e.getElementsByClassName(r.CONTAINER_CLASS)[0].style).visibility || (t.visibility = "hidden");
    }
  }, {
    key: "reveal",
    value: function(e) {
      e.getElementsByClassName(r.CONTAINER_CLASS)[0].style.visibility = "";
    }
  }, {
    key: "applyCustomStylesToElements",
    value: function(e, t, n) {
      Object.assign(e.style, n.container), Object.assign(t.style, n.avatar);
    }
  }, {
    key: "applyCustomStyles",
    value: function(e, t, n, a) {
      var s, o, l, u;
      if ((s = n.default) != null && s.styles && r.applyCustomStylesToElements(e, t, n.default.styles), a === W.USER_ROLE) (o = n.user) != null && o.styles && r.applyCustomStylesToElements(e, t, n.user.styles);
      else {
        (l = n.ai) != null && l.styles && r.applyCustomStylesToElements(e, t, n.ai.styles);
        var c = (u = n[a]) == null ? void 0 : u.styles;
        c && r.applyCustomStylesToElements(e, t, c);
      }
    }
  }, {
    key: "createAvatar",
    value: function(e, t) {
      var n, a, s, o, l, u = document.createElement("img");
      e === W.USER_ROLE ? u.src = ((n = t == null ? void 0 : t.user) == null ? void 0 : n.src) || ((a = t == null ? void 0 : t.default) == null ? void 0 : a.src) || ml : u.src = ((s = t == null ? void 0 : t[e]) == null ? void 0 : s.src) || ((o = t == null ? void 0 : t.ai) == null ? void 0 : o.src) || ((l = t == null ? void 0 : t.default) == null ? void 0 : l.src) || hl, u.classList.add("avatar"), u.alt = "".concat(e, " avatar");
      var c = document.createElement("div");
      return c.classList.add(r.CONTAINER_CLASS), c.appendChild(u), t && r.applyCustomStyles(c, u, t, e), c;
    }
  }, {
    key: "getPosition",
    value: function(e, t) {
      var n, a, s, o, l, u, c, d, p, h = (l = (o = t == null ? void 0 : t[e]) == null ? void 0 : o.styles) == null ? void 0 : l.position;
      return e !== W.USER_ROLE && ((n = h) !== null && n !== void 0 || (h = (c = (u = t == null ? void 0 : t.ai) == null ? void 0 : u.styles) == null ? void 0 : c.position)), (a = h) !== null && a !== void 0 || (h = (p = (d = t == null ? void 0 : t.default) == null ? void 0 : d.styles) == null ? void 0 : p.position), (s = h) !== null && s !== void 0 || (h = e === W.USER_ROLE ? "right" : "left"), h;
    }
  }, {
    key: "add",
    value: function(e, t, n) {
      var a = typeof n == "boolean" ? void 0 : n, s = r.createAvatar(t, a), o = r.getPosition(t, a);
      s.classList.add(o === "left" ? "left-item-position" : "right-item-position"), e.insertAdjacentElement(o === "left" ? "beforebegin" : "afterend", s);
    }
  }]);
}();
xi.CONTAINER_CLASS = "avatar-container";
var ar = xi, Mi = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "hide",
    value: function(e) {
      var t;
      (t = e.getElementsByClassName(r.NAME_CLASS)[0].style).visibility || (t.visibility = "hidden");
    }
  }, {
    key: "reveal",
    value: function(e) {
      e.getElementsByClassName(r.NAME_CLASS)[0].style.visibility = "";
    }
  }, {
    key: "getPosition",
    value: function(e, t) {
      var n, a, s, o, l, u, c = (o = t == null ? void 0 : t[e]) == null ? void 0 : o.position;
      return e !== W.USER_ROLE && ((n = c) !== null && n !== void 0 || (c = (l = t == null ? void 0 : t.ai) == null ? void 0 : l.position)), (a = c) !== null && a !== void 0 || (c = (u = t == null ? void 0 : t.default) == null ? void 0 : u.position), (s = c) !== null && s !== void 0 || (c = e === W.USER_ROLE ? "right" : "left"), c;
    }
  }, {
    key: "applyStyle",
    value: function(e, t, n) {
      var a, s, o, l;
      Object.assign(e.style, (a = n.default) == null ? void 0 : a.style), t === W.USER_ROLE ? Object.assign(e.style, (s = n.user) == null ? void 0 : s.style) : (Object.assign(e.style, (o = n.ai) == null ? void 0 : o.style), Object.assign(e.style, (l = n[t]) == null ? void 0 : l.style));
    }
  }, {
    key: "getNameText",
    value: function(e, t) {
      var n, a, s, o, l, u;
      return e === W.USER_ROLE ? ((n = t.user) == null ? void 0 : n.text) || ((a = t.default) == null ? void 0 : a.text) || "User" : e === W.AI_ROLE ? ((s = t.ai) == null ? void 0 : s.text) || ((o = t.default) == null ? void 0 : o.text) || "AI" : ((l = t[e]) == null ? void 0 : l.text) || ((u = t.default) == null ? void 0 : u.text) || e;
    }
  }, {
    key: "createName",
    value: function(e, t) {
      var n = document.createElement("div");
      return n.classList.add(r.NAME_CLASS), n.textContent = r.getNameText(e, t), r.applyStyle(n, e, t), n;
    }
  }, {
    key: "add",
    value: function(e, t, n) {
      var a = typeof n == "boolean" ? {} : n, s = r.createName(t, a), o = r.getPosition(t, a);
      s.classList.add(o === "left" ? "left-item-position" : "right-item-position"), e.insertAdjacentElement(o === "left" ? "beforebegin" : "afterend", s);
    }
  }]);
}();
Mi.NAME_CLASS = "name";
var ir = Mi, ht = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "getLastElementsByClass",
    value: function(e, t, n) {
      for (var a = function() {
        var u = e[o];
        if (u.bubbleElement.classList.contains(t[0]) && !t.slice(1).find(function(c) {
          return !u.bubbleElement.classList.contains(c);
        })) if (n) {
          if (!n.find(function(c) {
            return u.bubbleElement.classList.contains(c);
          })) return {
            v: u
          };
        } else return {
          v: u
        };
      }, s, o = e.length - 1; o >= 0; o -= 1)
        if (s = a(), s) return s.v;
    }
  }, {
    key: "getLastMessage",
    value: function(e, t, n) {
      for (var a = e.length - 1; a >= 0; a -= 1) if (e[a][0].role === t) if (n) {
        if (e[a][0][n]) return e[a][0];
      } else return e[a][0];
    }
  }, {
    key: "getLastTextToElement",
    value: function(e, t) {
      for (var n = e.length - 1; n >= 0; n -= 1) if (e[n][0] === t) return e[n];
    }
    // IMPORTANT: If the overwrite message does not contain a role property it will look for the last 'ai' role message
    // and if messages have custom roles, it will still look to update the last 'ai' role message
    // prettier-ignore
  }, {
    key: "overwriteMessage",
    value: function(e, t, n, a, s, o) {
      var l = r.getLastElementsByClass(t, [r.getRoleClass(a), o], [mt.BUBBLE_CLASS]), u = r.getLastMessage(e, a, s);
      return u && (u[s] = n), l;
    }
  }, {
    key: "getRoleClass",
    value: function(e) {
      return "".concat(e, "-message");
    }
    // makes sure the bubble has dimensions when there is no text
  }, {
    key: "fillEmptyMessageElement",
    value: function(e, t) {
      t.trim().length === 0 && (e.classList.add(r.EMPTY_MESSAGE_CLASS), e.innerHTML = '<div style="color:#00000000">.</div>');
    }
  }, {
    key: "unfillEmptyMessageElement",
    value: function(e, t) {
      e.classList.contains(r.EMPTY_MESSAGE_CLASS) && t.trim().length > 0 && e.replaceChildren();
    }
  }, {
    key: "getLastMessageBubbleElement",
    value: function(e) {
      var t, n, a;
      return Array.from(((a = (n = (t = r.getLastMessageElement(e)) == null ? void 0 : t.children) == null ? void 0 : n[0]) == null ? void 0 : a.children) || []).find(function(s) {
        return s.classList.contains("message-bubble");
      });
    }
  }, {
    key: "getLastMessageElement",
    value: function(e) {
      return e.children[e.children.length - 1];
    }
  }, {
    key: "addRoleElements",
    value: function(e, t, n, a) {
      n && ar.add(e, t, n), a && ir.add(e, t, a);
    }
  }, {
    key: "hideRoleElements",
    value: function(e, t, n) {
      var a = e[e.length - 1].innerContainer;
      t && ar.hide(a), n && ir.hide(a);
    }
  }, {
    key: "revealRoleElements",
    value: function(e, t, n) {
      t && ar.reveal(e), n && ir.reveal(e);
    }
  }, {
    key: "updateRefArr",
    value: function(e, t, n) {
      n ? e.unshift(t) : e.push(t);
    }
  }, {
    key: "buildRoleContainerClass",
    value: function(e) {
      return "deep-chat-".concat(e, "-container");
    }
  }, {
    key: "addNewPositionClasses",
    value: function(e, t) {
      var n;
      e.outerContainer.classList.remove(r.POSITION_TOP_MESSAGE_CLASS, r.POSITION_MIDDLE_MESSAGE_CLASS, r.POSITION_BOTTOM_MESSAGE_CLASS), (n = e.outerContainer.classList).add.apply(n, Rn(t));
    }
  }, {
    key: "getNumberOfElements",
    value: function(e) {
      var t = 0;
      return e.text !== void 0 && (t += 1), e.html !== void 0 && (t += 1), e.files && (t += e.files.length), t;
    }
  }, {
    key: "filterdMessageElements",
    value: function(e, t) {
      return e.filter(function(n) {
        return n.bubbleElement.classList.contains(t);
      });
    }
  }, {
    key: "findMessageElements",
    value: function(e, t) {
      return e.find(function(n) {
        return n.bubbleElement.classList.contains(t);
      });
    }
  }, {
    key: "generateMessageBodyElements",
    value: function(e, t) {
      var n = {};
      return e.text && (n.text = r.findMessageElements(t, gt.TEXT_BUBBLE_CLASS)), e.html && (n.html = r.findMessageElements(t, et.HTML_BUBBLE_CLASS)), e.files && (n.files = r.filterdMessageElements(t, Oe.FILE_BUBBLE_CLASS)), n;
    }
  }, {
    key: "generateMessageBody",
    value: function(e, t) {
      var n = r.getNumberOfElements(e), a = t.slice(t.length - n);
      return r.generateMessageBodyElements(e, a);
    }
  }, {
    key: "classifyMessages",
    value: function(e, t) {
      var n = r.buildRoleContainerClass(e);
      t.forEach(function(a, s) {
        var o = a.outerContainer.classList.contains(n), l = t[s - 1], u = t[s + 1], c = l == null ? void 0 : l.outerContainer.classList.contains(n), d = u == null ? void 0 : u.outerContainer.classList.contains(n);
        o && (!c && d ? r.addNewPositionClasses(a, [r.POSITION_TOP_MESSAGE_CLASS]) : c && d ? r.addNewPositionClasses(a, [r.POSITION_MIDDLE_MESSAGE_CLASS]) : c && !d ? r.addNewPositionClasses(a, [r.POSITION_BOTTOM_MESSAGE_CLASS]) : !c && !d && r.addNewPositionClasses(a, [r.POSITION_TOP_MESSAGE_CLASS, r.POSITION_BOTTOM_MESSAGE_CLASS]));
      });
    }
  }]);
}();
ht.AI_ROLE = "ai", ht.USER_ROLE = "user", ht.EMPTY_MESSAGE_CLASS = "empty-message", ht.POSITION_TOP_MESSAGE_CLASS = "deep-chat-top-message", ht.POSITION_MIDDLE_MESSAGE_CLASS = "deep-chat-middle-message", ht.POSITION_BOTTOM_MESSAGE_CLASS = "deep-chat-bottom-message";
var W = ht, Ri = /* @__PURE__ */ function() {
  function r(i) {
    E(this, r), this._fileAdded = !1, this._streamType = "", this._hasStreamEnded = !1, this._messages = i;
  }
  return _(r, [{
    key: "upsertStreamedMessage",
    value: function(e) {
      var t;
      if (!this._hasStreamEnded) {
        if ((e == null ? void 0 : e.text) === void 0 && (e == null ? void 0 : e.html) === void 0) return console.error(_e.INVALID_STREAM_EVENT);
        var n = (e == null ? void 0 : e.text) || (e == null ? void 0 : e.html) || "", a = Ue.isScrollbarAtBottomOfElement(this._messages.elementRef), s = (e == null ? void 0 : e.text) !== void 0 ? "text" : "html";
        if (!this._elements && !this._message) this.setInitialState(s, n, e == null ? void 0 : e.role);
        else {
          if (this._streamType !== s) return console.error(_e.INVALID_STREAM_EVENT_MIX);
          this.updateBasedOnType(n, s, (t = this._elements) == null ? void 0 : t.bubbleElement, e == null ? void 0 : e.overwrite);
        }
        a && Ue.scrollToBottom(this._messages.elementRef);
      }
    }
  }, {
    key: "setInitialState",
    value: function(e, t, n) {
      var a;
      this._streamType = e, (a = n) !== null && a !== void 0 || (n = W.AI_ROLE), this._elements = e === "text" ? this._messages.addNewTextMessage(t, n) : et.add(this._messages, t, n, this._messages.messageElementRefs), this._elements.bubbleElement.classList.add(r.MESSAGE_CLASS), this._activeMessageRole = n, this._message = Tn({
        role: this._activeMessageRole
      }, e, t), this._messages.messageToElements.push([this._message, Tn({}, e, this._elements)]);
    }
  }, {
    key: "updateBasedOnType",
    value: function(e, t, n) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      W.unfillEmptyMessageElement(n, e), (t === "text" ? this.updateText : this.updateHTML).bind(this)(e, n, a);
    }
  }, {
    key: "updateText",
    value: function(e, t, n) {
      this._message && (this._message.text = n ? e : this._message.text + e, this._messages.renderText(t, this._message.text));
    }
  }, {
    key: "updateHTML",
    value: function(e, t, n) {
      if (this._message) if (n) this._message.html = e, t.innerHTML = e;
      else {
        var a = document.createElement("span");
        a.innerHTML = e, t.appendChild(a), this._message.html = (t == null ? void 0 : t.innerHTML) || "";
      }
    }
  }, {
    key: "finaliseStreamedMessage",
    value: function() {
      var e;
      if (!(this._endStreamAfterOperation || !this._message) && !(this._fileAdded && !this._elements)) {
        if (!this._elements) throw Error(_e.NO_VALID_STREAM_EVENTS_SENT);
        (e = this._elements.bubbleElement) != null && e.classList.contains(r.MESSAGE_CLASS) && (this._streamType === "text" ? this._messages.textToSpeech && yn.speak(this._message.text || "", this._messages.textToSpeech) : this._streamType === "html" && this._elements && Nt.apply(this._messages, this._elements.outerContainer), this._elements.bubbleElement.classList.remove(r.MESSAGE_CLASS), this._message && this._messages.sendClientUpdate(gt.createMessageContent(this._message), !1), this._hasStreamEnded = !0);
      }
    }
  }, {
    key: "markFileAdded",
    value: function() {
      this._fileAdded = !0;
    }
  }, {
    key: "newMessage",
    value: function() {
      this.finaliseStreamedMessage(), this._elements = void 0, delete this._message, this._fileAdded = !1, this._hasStreamEnded = !1, this._activeMessageRole = void 0;
    }
    // prettier-ignore
  }, {
    key: "endStreamAfterFileDownloaded",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n, a) {
        var s, o, l, u;
        return m().wrap(function(d) {
          for (; ; ) switch (d.prev = d.next) {
            case 0:
              return this._endStreamAfterOperation = !0, d.next = 3, a();
            case 3:
              o = d.sent, l = o.text, u = o.files, l && this.updateBasedOnType(l, "text", (s = this._elements) == null ? void 0 : s.bubbleElement, !0), this._endStreamAfterOperation = !1, this.finaliseStreamedMessage(), u && n.addNewMessage({
                files: u
              });
            case 7:
            case "end":
              return d.stop();
          }
        }, t, this);
      }));
      function e(t, n) {
        return i.apply(this, arguments);
      }
      return e;
    }()
  }]);
}();
Ri.MESSAGE_CLASS = "streamed-message";
var tt = Ri, Ii = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "tempRemoveContentHeader",
    value: (
      // need to pass stringifyBody boolean separately as binding is throwing an error for some reason
      // prettier-ignore
      function() {
        var i = C(/* @__PURE__ */ m().mark(function t(n, a, s) {
          var o, l;
          return m().wrap(function(c) {
            for (; ; ) switch (c.prev = c.next) {
              case 0:
                if (n != null && n.headers) {
                  c.next = 2;
                  break;
                }
                throw new Error("Request settings have not been set up");
              case 2:
                return o = n.headers[r.CONTENT_TYPE], delete n.headers[r.CONTENT_TYPE], c.prev = 4, c.next = 7, a(s);
              case 7:
                l = c.sent, c.next = 13;
                break;
              case 10:
                throw c.prev = 10, c.t0 = c.catch(4), n.headers[r.CONTENT_TYPE] = o, c.t0;
              case 13:
                return c.abrupt("return", (n.headers[r.CONTENT_TYPE] = o, l));
              case 14:
              case "end":
                return c.stop();
            }
          }, t, null, [[4, 10]]);
        }));
        function e(t, n, a) {
          return i.apply(this, arguments);
        }
        return e;
      }()
    )
  }, {
    key: "displayError",
    value: function(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "Service error, please try again.";
      if (console.error(t), G(t) == "object") return t instanceof Error ? e.addNewErrorMessage("service", t.message) : Array.isArray(t) || typeof t.error == "string" ? e.addNewErrorMessage("service", t) : Object.keys(t).length === 0 ? e.addNewErrorMessage("service", n) : e.addNewErrorMessage("service", JSON.stringify(t));
      e.addNewErrorMessage("service", t);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {
    key: "fetch",
    value: function(i) {
      function e(t, n, a, s) {
        return i.apply(this, arguments);
      }
      return e.toString = function() {
        return i.toString();
      }, e;
    }(function(i, e, t, n) {
      var a, s, o = {
        method: ((a = i.connectSettings) == null ? void 0 : a.method) || "POST",
        headers: e
      };
      return o.method !== "GET" && (o.body = t ? JSON.stringify(n) : n), i.connectSettings.credentials && (o.credentials = i.connectSettings.credentials), fetch(((s = i.connectSettings) == null ? void 0 : s.url) || i.url || "", o);
    })
  }, {
    key: "processResponseByType",
    value: function(e) {
      var t = e.headers.get("content-type");
      return t != null && t.includes("application/json") ? e.json() : t != null && t.includes("text/plain") || !t ? e : e.blob();
    }
  }, {
    key: "processRequestInterceptor",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n, a) {
        var s, o, l, u;
        return m().wrap(function(d) {
          for (; ; ) switch (d.prev = d.next) {
            case 0:
              return d.next = 2, (s = n.requestInterceptor) == null ? void 0 : s.call(n, a);
            case 2:
              if (d.t0 = d.sent, d.t0) {
                d.next = 5;
                break;
              }
              d.t0 = a;
            case 5:
              return o = d.t0, l = o, u = o, d.abrupt("return", {
                body: l.body,
                headers: l.headers,
                error: u.error
              });
            case 9:
            case "end":
              return d.stop();
          }
        }, t);
      }));
      function e(t, n) {
        return i.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "validateResponseFormat",
    value: function(e) {
      return e && G(e) == "object" && (typeof e.error == "string" || typeof e.text == "string" || typeof e.html == "string" || Array.isArray(e.files));
    }
  }, {
    key: "onInterceptorError",
    value: function(e, t, n) {
      e.addNewErrorMessage("service", t), n == null || n();
    }
  }]);
}();
Ii.CONTENT_TYPE = "Content-Type";
var ie = Ii;
function vl(r, i) {
  return _r.apply(this, arguments);
}
function _r() {
  return _r = C(/* @__PURE__ */ m().mark(function r(i, e) {
    var t, n;
    return m().wrap(function(s) {
      for (; ; ) switch (s.prev = s.next) {
        case 0:
          t = i.getReader();
        case 1:
          return s.next = 3, t.read();
        case 3:
          if ((n = s.sent).done) {
            s.next = 7;
            break;
          }
          e(n.value);
        case 5:
          s.next = 1;
          break;
        case 7:
        case "end":
          return s.stop();
      }
    }, r);
  })), _r.apply(this, arguments);
}
function gl(r) {
  var i, e, t, n = !1;
  return function(a) {
    i === void 0 ? (i = a, e = 0, t = -1) : i = bl(i, a);
    for (var s = i.length, o = 0; e < s; ) {
      n && (i[e] === 10 && (o = ++e), n = !1);
      for (var l = -1; e < s && l === -1; ++e) switch (i[e]) {
        case 58:
          t === -1 && (t = e - o);
          break;
        case 13:
          n = !0;
        case 10:
          l = e;
          break;
      }
      if (l === -1) break;
      r(i.subarray(o, l), t), o = e, t = -1;
    }
    o === s ? i = void 0 : o !== 0 && (i = i.subarray(o), e -= o);
  };
}
function yl(r, i, e) {
  var t = Ma(), n = new TextDecoder();
  return function(a, s) {
    if (a.length === 0) e == null || e(t), t = Ma();
    else if (s > 0) {
      var o = n.decode(a.subarray(0, s)), l = s + (a[s + 1] === 32 ? 2 : 1), u = n.decode(a.subarray(l));
      switch (o) {
        case "data":
          t.data = t.data ? t.data + `
` + u : u;
          break;
        case "event":
          t.event = u;
          break;
        case "id":
          r(t.id = u);
          break;
        case "retry":
          var c = parseInt(u, 10);
          isNaN(c) || i(t.retry = c);
          break;
      }
    }
  };
}
function bl(r, i) {
  var e = new Uint8Array(r.length + i.length);
  return e.set(r), e.set(i, r.length), e;
}
function Ma() {
  return {
    data: "",
    event: "",
    id: "",
    retry: void 0
  };
}
var kl = function(i, e) {
  var t = {};
  for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && e.indexOf(n) < 0 && (t[n] = i[n]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(i); a < n.length; a++) e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(i, n[a]) && (t[n[a]] = i[n[a]]);
  return t;
}, Sr = "text/event-stream", El = 1e3, Ra = "last-event-id";
function _l(r, i) {
  var e = i.signal, t = i.headers, n = i.onopen, a = i.onmessage, s = i.onclose, o = i.onerror, l = i.openWhenHidden, u = i.fetch, c = kl(i, ["signal", "headers", "onopen", "onmessage", "onclose", "onerror", "openWhenHidden", "fetch"]);
  return new Promise(function(d, p) {
    var h = Object.assign({}, t);
    h.accept || (h.accept = Sr);
    var g;
    function k() {
      g.abort(), document.hidden || x();
    }
    l || document.addEventListener("visibilitychange", k);
    var S = El, T = 0;
    function A() {
      document.removeEventListener("visibilitychange", k), window.clearTimeout(T), g.abort();
    }
    e == null || e.addEventListener("abort", function() {
      A(), d();
    });
    var D = u ?? window.fetch, N = n ?? Sl;
    function x() {
      return Y.apply(this, arguments);
    }
    function Y() {
      return Y = C(/* @__PURE__ */ m().mark(function de() {
        var ee, me, fe;
        return m().wrap(function(Q) {
          for (; ; ) switch (Q.prev = Q.next) {
            case 0:
              return g = new AbortController(), Q.prev = 1, Q.next = 4, D(r, Object.assign(Object.assign({}, c), {
                headers: h,
                signal: g.signal
              }));
            case 4:
              return me = Q.sent, Q.next = 7, N(me);
            case 7:
              return Q.next = 9, vl(me.body, gl(yl(function(ge) {
                ge ? h[Ra] = ge : delete h[Ra];
              }, function(ge) {
                S = ge;
              }, a)));
            case 9:
              s == null || s(), A(), d(), Q.next = 17;
              break;
            case 14:
              if (Q.prev = 14, Q.t0 = Q.catch(1), !g.signal.aborted) try {
                fe = (ee = o == null ? void 0 : o(Q.t0)) !== null && ee !== void 0 ? ee : S, window.clearTimeout(T), T = window.setTimeout(x, fe);
              } catch (ge) {
                A(), p(ge);
              }
            case 17:
            case "end":
              return Q.stop();
          }
        }, de, null, [[1, 14]]);
      })), Y.apply(this, arguments);
    }
    x();
  });
}
function Sl(r) {
  var i = r.headers.get("content-type");
  if (!(i != null && i.startsWith(Sr))) throw new Error("Expected content-type to be ".concat(Sr, ", Actual: ").concat(i));
}
var Te = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "request",
    value: (
      // prettier-ignore
      function() {
        var i = C(/* @__PURE__ */ m().mark(function t(n, a, s) {
          var o, l, u, c, d, p, h, g, k, S, T, A, D, N, x, Y, de, ee, me, fe = arguments;
          return m().wrap(function(Q) {
            for (; ; ) switch (Q.prev = Q.next) {
              case 0:
                return o = fe.length > 3 && fe[3] !== void 0 ? fe[3] : !0, l = fe.length > 4 && fe[4] !== void 0 ? fe[4] : !1, k = {
                  body: a,
                  headers: (u = n.connectSettings) == null ? void 0 : u.headers
                }, Q.next = 5, ie.processRequestInterceptor(n.deepChat, k);
              case 5:
                if (S = Q.sent, T = S.body, A = S.headers, D = S.error, N = n.streamHandlers, x = N.onOpen, Y = N.onClose, de = N.abortStream, !D) {
                  Q.next = 15;
                  break;
                }
                return Q.abrupt("return", ie.onInterceptorError(s, D, Y));
              case 15:
                if (!((c = n.connectSettings) != null && c.handler)) {
                  Q.next = 17;
                  break;
                }
                return Q.abrupt("return", Ur.stream(n, T, s));
              case 17:
                if (((d = n.connectSettings) == null ? void 0 : d.url) !== nt.URL) {
                  Q.next = 19;
                  break;
                }
                return Q.abrupt("return", nt.requestStream(s, n.streamHandlers));
              case 19:
                return ee = new tt(s), me = ie.fetch.bind(this, n, A, o), Q.abrupt("return", (_l(((p = n.connectSettings) == null ? void 0 : p.url) || n.url || "", {
                  method: ((h = n.connectSettings) == null ? void 0 : h.method) || "POST",
                  headers: A,
                  credentials: (g = n.connectSettings) == null ? void 0 : g.credentials,
                  body: o ? JSON.stringify(T) : T,
                  openWhenHidden: !0,
                  // keep stream open when browser tab not open
                  onopen: function(te) {
                    return C(/* @__PURE__ */ m().mark(function Ee() {
                      return m().wrap(function(M) {
                        for (; ; ) switch (M.prev = M.next) {
                          case 0:
                            if (!te.ok) {
                              M.next = 2;
                              break;
                            }
                            return M.abrupt("return", x());
                          case 2:
                            return M.next = 4, ie.processResponseByType(te);
                          case 4:
                            throw M.sent;
                          case 5:
                          case "end":
                            return M.stop();
                        }
                      }, Ee);
                    }))();
                  },
                  onmessage: function(te) {
                    return C(/* @__PURE__ */ m().mark(function Ee() {
                      var O, M, I, z, v;
                      return m().wrap(function(L) {
                        for (; ; ) switch (L.prev = L.next) {
                          case 0:
                            if (JSON.stringify(te.data) === JSON.stringify("[DONE]")) {
                              L.next = 9;
                              break;
                            }
                            try {
                              z = JSON.parse(te.data);
                            } catch {
                              z = {};
                            }
                            return L.next = 4, (M = (O = n.deepChat).responseInterceptor) == null ? void 0 : M.call(O, z);
                          case 4:
                            if (L.t0 = L.sent, L.t0) {
                              L.next = 7;
                              break;
                            }
                            L.t0 = z;
                          case 7:
                            v = L.t0, (I = n.extractResultData) == null || I.call(n, v, me, T).then(function(B) {
                              n.asyncCallInProgress && B && B.text !== "" ? (r.simulate(s, n.streamHandlers, B), Y(), n.asyncCallInProgress = !1) : r.upsertWFiles(s, ee.upsertStreamedMessage.bind(ee), ee, B);
                            }).catch(function(B) {
                              return ie.displayError(s, B);
                            });
                          case 9:
                          case "end":
                            return L.stop();
                        }
                      }, Ee);
                    }))();
                  },
                  onerror: function(te) {
                    throw Y(), te;
                  },
                  onclose: function() {
                    if (!n.asyncCallInProgress) try {
                      ee.finaliseStreamedMessage(), Y();
                    } catch (te) {
                      if (!l) throw te;
                    }
                  },
                  signal: de.signal
                }).catch(function(ge) {
                  var te;
                  s.isLastMessageError() || (te = n.extractResultData) == null || te.call(n, ge).then(function() {
                    ie.displayError(s, ge);
                  }).catch(function(Ee) {
                    ie.displayError(s, Ee);
                  });
                }), ee));
              case 21:
              case "end":
                return Q.stop();
            }
          }, t, this);
        }));
        function e(t, n, a) {
          return i.apply(this, arguments);
        }
        return e;
      }()
    )
  }, {
    key: "simulate",
    value: function(e, t, n) {
      var a = t;
      if (n.files && e.addNewMessage(ce({
        sendUpdate: !1,
        ignoreText: !0
      }, n), !1), n.text) {
        t.onOpen();
        var s = n.text.split("");
        r.populateMessages(s, new tt(e), a, "text");
      }
      if (n.html) {
        t.onOpen();
        var o = Nt.splitHTML(n.html);
        o.length === 0 && (o = n.html.split("")), r.populateMessages(o, new tt(e), a, "html");
      }
    }
    // prettier-ignore
  }, {
    key: "populateMessages",
    value: function(e, t, n, a) {
      var s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, o = e[s];
      if (o) {
        t.upsertStreamedMessage(Tn({}, a, o));
        var l = setTimeout(function() {
          r.populateMessages(e, t, n, a, s + 1);
        }, n.simulationInterim || 6);
        n.abortStream.abort = function() {
          r.abort(l, t, n.onClose);
        };
      } else t.finaliseStreamedMessage(), n.onClose();
    }
  }, {
    key: "isSimulation",
    value: function(e) {
      return G(e) == "object" && !!e.simulation;
    }
  }, {
    key: "isSimulatable",
    value: function(e, t) {
      return r.isSimulation(e) && t && (t.text || t.html);
    }
  }, {
    key: "abort",
    value: function(e, t, n) {
      clearTimeout(e), t.finaliseStreamedMessage(), n();
    }
  }, {
    key: "upsertWFiles",
    value: function(e, t, n, a) {
      if (a != null && a.text || a != null && a.html) {
        var s, o = t(a);
        (s = n) !== null && s !== void 0 || (n = o || void 0);
      }
      a != null && a.files && (e.addNewMessage({
        files: a.files
      }), n == null || n.markFileAdded());
    }
  }]);
}(), Li = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "generateResponse",
    value: function(e) {
      var t = e[e.length - 1][0];
      if (t.files && t.files.length > 0) {
        if (t.files.length > 1) return "These are interesting files!";
        var n = t.files[0];
        return n.src && n.src.startsWith("data:image/gif") ? "That is a nice gif!" : n.type === "image" ? "That is a nice image!" : n.type === "audio" ? "I like the sound of that!" : "That is an interesting file!";
      }
      if (t.text) {
        if (t.text.charAt(t.text.length - 1) === "?") return "I'm sorry but I can't answer that question...";
        if (t.text.includes("updog")) return "What's updog?";
      }
      return "Hi there! This is a demo response!";
    }
  }, {
    key: "getCustomResponse",
    value: function(e, t) {
      return typeof e == "function" ? e(t) : e;
    }
  }, {
    key: "getResponse",
    value: function(e) {
      var t = e.customDemoResponse, n = e.messageToElements;
      return t ? r.getCustomResponse(t, n[n.length - 1][0]) : {
        text: r.generateResponse(n)
      };
    }
    // timeout is used to simulate a timeout for a response to come back
  }, {
    key: "request",
    value: function(e, t) {
      var n = r.getResponse(t);
      setTimeout(/* @__PURE__ */ C(/* @__PURE__ */ m().mark(function a() {
        var s, o, l;
        return m().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              return c.next = 2, (o = (s = e.deepChat).responseInterceptor) == null ? void 0 : o.call(s, n);
            case 2:
              if (c.t0 = c.sent, c.t0) {
                c.next = 5;
                break;
              }
              c.t0 = n;
            case 5:
              l = c.t0, l.error ? (t.addNewErrorMessage("service", l.error), e.completionsHandlers.onFinish()) : Te.isSimulatable(e.stream, l) ? Te.simulate(t, e.streamHandlers, l) : (t.addNewMessage(l), e.completionsHandlers.onFinish());
            case 7:
            case "end":
              return c.stop();
          }
        }, a);
      })), 400);
    }
    // timeout is used to simulate a timeout for a response to come back
  }, {
    key: "requestStream",
    value: function(e, t) {
      setTimeout(function() {
        var n = r.getResponse(e);
        Te.simulate(e, t, n);
      }, 400);
    }
  }]);
}();
Li.URL = "deep-chat-demo";
var nt = Li, Zt = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "setup",
    value: function(e) {
      e.connectSettings.url !== nt.URL && (e.permittedErrorPrefixes = ["Connection error", "Error in server message"], e.websocket = "pending");
    }
  }, {
    key: "isElementPresentInDOM",
    value: function(e) {
      return e.getRootNode({
        composed: !0
      }) instanceof Document;
    }
  }, {
    key: "createConnection",
    value: function(e, t) {
      if (r.isElementPresentInDOM(e.deepChat)) {
        var n = e.connectSettings.websocket;
        if (n) {
          if (e.connectSettings.handler) return Ur.websocket(e, t);
          try {
            var a = typeof n != "boolean" ? n : void 0, s = new WebSocket(e.connectSettings.url || "", a);
            e.websocket = s, e.websocket.onopen = function() {
              var o, l;
              t.removeError(), e.websocket && G(e.websocket) == "object" && r.assignListeners(e, s, t), (l = (o = e.deepChat)._validationHandler) == null || l.call(o);
            }, e.websocket.onerror = function(o) {
              console.error(o), r.retryConnection(e, t);
            };
          } catch (o) {
            console.error(o), r.retryConnection(e, t);
          }
        }
      }
    }
  }, {
    key: "retryConnection",
    value: function(e, t) {
      var n, a;
      (a = (n = e.deepChat)._validationHandler) == null || a.call(n), r.isElementPresentInDOM(e.deepChat) && (e.websocket = "pending", t.isLastMessageError() || t.addNewErrorMessage("service", "Connection error"), setTimeout(function() {
        r.createConnection(e, t);
      }, 5e3));
    }
  }, {
    key: "assignListeners",
    value: function(e, t, n) {
      var a = this, s = {};
      t.onmessage = /* @__PURE__ */ function() {
        var o = C(/* @__PURE__ */ m().mark(function l(u) {
          var c, d, p, h, g, k, S;
          return m().wrap(function(A) {
            for (; ; ) switch (A.prev = A.next) {
              case 0:
                if (!e.extractResultData) {
                  A.next = 20;
                  break;
                }
                return A.prev = 1, p = JSON.parse(u.data), A.next = 5, (d = (c = e.deepChat).responseInterceptor) == null ? void 0 : d.call(c, p);
              case 5:
                if (A.t0 = A.sent, A.t0) {
                  A.next = 8;
                  break;
                }
                A.t0 = p;
              case 8:
                return h = A.t0, A.next = 11, e.extractResultData(h);
              case 11:
                if (g = A.sent, !(!g || G(g) != "object")) {
                  A.next = 14;
                  break;
                }
                throw Error(_e.INVALID_RESPONSE(p, "server", !!e.deepChat.responseInterceptor, h));
              case 14:
                Te.isSimulation(e.stream) ? (k = r.stream.bind(a, e, n, s), S = s[p.role || W.AI_ROLE], Te.upsertWFiles(n, k, S, g)) : n.addNewMessage(g), A.next = 20;
                break;
              case 17:
                A.prev = 17, A.t1 = A.catch(1), ie.displayError(n, A.t1, "Error in server message");
              case 20:
              case "end":
                return A.stop();
            }
          }, l, null, [[1, 17]]);
        }));
        return function(l) {
          return o.apply(this, arguments);
        };
      }(), t.onclose = function() {
        console.error("Connection closed"), n.isLastMessageError() || n.addNewErrorMessage("service", "Connection error"), e.stream && e.streamHandlers.abortStream.abort(), r.createConnection(e, n);
      };
    }
  }, {
    key: "sendWebsocket",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n, a, s) {
        var o, l, u, c, d, p, h, g, k, S = arguments;
        return m().wrap(function(A) {
          for (; ; ) switch (A.prev = A.next) {
            case 0:
              if (o = S.length > 3 && S[3] !== void 0 ? S[3] : !0, c = n.websocket, !(!c || c === "pending")) {
                A.next = 4;
                break;
              }
              return A.abrupt("return");
            case 4:
              return d = {
                body: a,
                headers: (l = n.connectSettings) == null ? void 0 : l.headers
              }, A.next = 7, ie.processRequestInterceptor(n.deepChat, d);
            case 7:
              if (p = A.sent, h = p.body, g = p.error, !g) {
                A.next = 12;
                break;
              }
              return A.abrupt("return", s.addNewErrorMessage("service", g));
            case 12:
              if (r.isWebSocket(c)) {
                A.next = 14;
                break;
              }
              return A.abrupt("return", c.newUserMessage.listener(h));
            case 14:
              if (k = o ? JSON.stringify(h) : h, ((u = n.connectSettings) == null ? void 0 : u.url) !== nt.URL) {
                A.next = 17;
                break;
              }
              return A.abrupt("return", nt.request(n, s));
            case 17:
              c.readyState === void 0 || c.readyState !== c.OPEN ? (console.error("Connection is not open"), s.isLastMessageError() || s.addNewErrorMessage("service", "Connection error")) : (c.send(JSON.stringify(k)), n.completionsHandlers.onFinish());
            case 18:
            case "end":
              return A.stop();
          }
        }, t);
      }));
      function e(t, n, a) {
        return i.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "canSendMessage",
    value: function(e) {
      return e ? e === "pending" ? !1 : r.isWebSocket(e) ? e.readyState !== void 0 && e.readyState === e.OPEN : e.isOpen : !0;
    }
    // if false then it is the internal websocket handler
  }, {
    key: "isWebSocket",
    value: function(e) {
      return e.send !== void 0;
    }
  }, {
    key: "stream",
    value: function(e, t, n, a) {
      if (a) {
        var s = e.stream.simulation;
        if (typeof s == "string") {
          var o, l = a.role || W.AI_ROLE, u = n[l];
          a.text === s || a.html === s ? (u == null || u.finaliseStreamedMessage(), delete n[l]) : ((o = n[l]) !== null && o !== void 0 || (n[l] = new tt(t)), n[l].upsertStreamedMessage(a));
        } else Te.simulate(t, e.streamHandlers, a);
      }
    }
  }]);
}(), Ur = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "request",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n, a, s) {
        var o, l, u, c, d;
        return m().wrap(function(h) {
          for (; ; ) switch (h.prev = h.next) {
            case 0:
              u = !0, c = /* @__PURE__ */ function() {
                var g = C(/* @__PURE__ */ m().mark(function k(S) {
                  var T, A, D;
                  return m().wrap(function(x) {
                    for (; ; ) switch (x.prev = x.next) {
                      case 0:
                        if (u) {
                          x.next = 2;
                          break;
                        }
                        return x.abrupt("return");
                      case 2:
                        return u = !1, x.next = 5, (A = (T = n.deepChat).responseInterceptor) == null ? void 0 : A.call(T, S);
                      case 5:
                        if (x.t0 = x.sent, x.t0) {
                          x.next = 8;
                          break;
                        }
                        x.t0 = S;
                      case 8:
                        D = x.t0, ie.validateResponseFormat(D) ? typeof D.error == "string" ? (console.error(D.error), s.addNewErrorMessage("service", D.error), n.completionsHandlers.onFinish()) : Te.isSimulatable(n.stream, D) ? Te.simulate(s, n.streamHandlers, D) : (s.addNewMessage(D), n.completionsHandlers.onFinish()) : (console.error(_e.INVALID_RESPONSE(S, "server", !!n.deepChat.responseInterceptor, D)), s.addNewErrorMessage("service", "Error in server message"), n.completionsHandlers.onFinish());
                      case 10:
                      case "end":
                        return x.stop();
                    }
                  }, k);
                }));
                return function(S) {
                  return g.apply(this, arguments);
                };
              }(), d = r.generateOptionalSignals(), (l = (o = n.connectSettings).handler) == null || l.call(o, a, ce(ce({}, d), {}, {
                onResponse: c
              }));
            case 3:
            case "end":
              return h.stop();
          }
        }, t);
      }));
      function e(t, n, a) {
        return i.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "attemptToFinaliseStream",
    value: function(e, t) {
      try {
        var n = t.messageElementRefs[t.messageElementRefs.length - 1];
        gt.isLoadingMessage(n) ? t.removeLastMessage() : e.finaliseStreamedMessage();
      } catch (a) {
        console.error(a), t.addNewErrorMessage("service", a);
      }
    }
    // prettier-ignore
  }, {
    key: "stream",
    value: function(e, t, n) {
      var a, s, o = !0, l = !1, u = new tt(n), c = function() {
        l || !o || (e.streamHandlers.onOpen(), l = !0);
      }, d = function() {
        o && (r.attemptToFinaliseStream(u, n), e.streamHandlers.onClose(), o = !1);
      }, p = /* @__PURE__ */ function() {
        var g = C(/* @__PURE__ */ m().mark(function k(S) {
          var T, A, D;
          return m().wrap(function(x) {
            for (; ; ) switch (x.prev = x.next) {
              case 0:
                if (o) {
                  x.next = 2;
                  break;
                }
                return x.abrupt("return");
              case 2:
                return x.next = 4, (A = (T = e.deepChat).responseInterceptor) == null ? void 0 : A.call(T, S);
              case 4:
                if (x.t0 = x.sent, x.t0) {
                  x.next = 7;
                  break;
                }
                x.t0 = S;
              case 7:
                D = x.t0, ie.validateResponseFormat(D) ? D.error ? (console.error(D.error), u.finaliseStreamedMessage(), n.addNewErrorMessage("service", D.error), e.streamHandlers.onClose(), o = !1) : Te.upsertWFiles(n, u.upsertStreamedMessage.bind(u), u, D) : console.error(_e.INVALID_RESPONSE(S, "server", !!e.deepChat.responseInterceptor, D));
              case 9:
              case "end":
                return x.stop();
            }
          }, k);
        }));
        return function(S) {
          return g.apply(this, arguments);
        };
      }();
      e.streamHandlers.abortStream.abort = function() {
        r.attemptToFinaliseStream(u, n), e.streamHandlers.onClose(), o = !1;
      };
      var h = r.generateOptionalSignals();
      (s = (a = e.connectSettings).handler) == null || s.call(a, t, ce(ce({}, h), {}, {
        onOpen: c,
        onResponse: p,
        onClose: d,
        stopClicked: e.streamHandlers.stopClicked
      }));
    }
    // prettier-ignore
  }, {
    key: "websocket",
    value: function(e, t) {
      var n = this, a, s, o = {
        isOpen: !1,
        newUserMessage: {
          listener: function() {
          }
        },
        roleToStream: {}
      };
      e.websocket = o;
      var l = function() {
        t.removeError(), o.isOpen = !0;
      }, u = function() {
        o.isOpen = !1;
      }, c = /* @__PURE__ */ function() {
        var p = C(/* @__PURE__ */ m().mark(function h(g) {
          var k, S, T, A, D;
          return m().wrap(function(x) {
            for (; ; ) switch (x.prev = x.next) {
              case 0:
                if (o.isOpen) {
                  x.next = 2;
                  break;
                }
                return x.abrupt("return");
              case 2:
                return x.next = 4, (S = (k = e.deepChat).responseInterceptor) == null ? void 0 : S.call(k, g);
              case 4:
                if (x.t0 = x.sent, x.t0) {
                  x.next = 7;
                  break;
                }
                x.t0 = g;
              case 7:
                T = x.t0, ie.validateResponseFormat(T) ? typeof T.error == "string" ? (console.error(T.error), t.isLastMessageError() || t.addNewErrorMessage("service", T.error)) : Te.isSimulation(e.stream) ? (A = Zt.stream.bind(n, e, t, o.roleToStream), D = o.roleToStream[g.role || W.AI_ROLE], Te.upsertWFiles(t, A, D, g)) : t.addNewMessage(T) : (console.error(_e.INVALID_RESPONSE(g, "server", !!e.deepChat.responseInterceptor, T)), t.addNewErrorMessage("service", "Error in server message"));
              case 9:
              case "end":
                return x.stop();
            }
          }, h);
        }));
        return function(g) {
          return p.apply(this, arguments);
        };
      }(), d = r.generateOptionalSignals();
      (s = (a = e.connectSettings).handler) == null || s.call(a, void 0, ce(ce({}, d), {}, {
        onOpen: l,
        onResponse: c,
        onClose: u,
        newUserMessage: o.newUserMessage
      }));
    }
  }, {
    key: "generateOptionalSignals",
    value: function() {
      return {
        onClose: function() {
        },
        onOpen: function() {
        },
        stopClicked: {
          listener: function() {
          }
        },
        newUserMessage: {
          listener: function() {
          }
        }
      };
    }
  }]);
}(), ye = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "request",
    value: (
      // prettier-ignore
      function() {
        var i = C(/* @__PURE__ */ m().mark(function t(n, a, s) {
          var o, l, u, c, d, p, h, g, k, S, T, A, D = arguments;
          return m().wrap(function(x) {
            for (; ; ) switch (x.prev = x.next) {
              case 0:
                return o = D.length > 3 && D[3] !== void 0 ? D[3] : !0, d = {
                  body: a,
                  headers: (l = n.connectSettings) == null ? void 0 : l.headers
                }, x.next = 4, ie.processRequestInterceptor(n.deepChat, d);
              case 4:
                if (p = x.sent, h = p.body, g = p.headers, k = p.error, S = n.completionsHandlers.onFinish, !k) {
                  x.next = 11;
                  break;
                }
                return x.abrupt("return", ie.onInterceptorError(s, k, S));
              case 11:
                if (!((u = n.connectSettings) != null && u.handler)) {
                  x.next = 13;
                  break;
                }
                return x.abrupt("return", Ur.request(n, h, s));
              case 13:
                if (((c = n.connectSettings) == null ? void 0 : c.url) !== nt.URL) {
                  x.next = 15;
                  break;
                }
                return x.abrupt("return", nt.request(n, s));
              case 15:
                T = !0, A = ie.fetch.bind(this, n, g, o), A(h).then(function(Y) {
                  return T = !!Y.ok, Y;
                }).then(function(Y) {
                  return ie.processResponseByType(Y);
                }).then(/* @__PURE__ */ function() {
                  var Y = C(/* @__PURE__ */ m().mark(function de(ee) {
                    var me, fe, Ce, Q;
                    return m().wrap(function(te) {
                      for (; ; ) switch (te.prev = te.next) {
                        case 0:
                          if (n.extractResultData) {
                            te.next = 2;
                            break;
                          }
                          return te.abrupt("return");
                        case 2:
                          return te.next = 4, (fe = (me = n.deepChat).responseInterceptor) == null ? void 0 : fe.call(me, ee);
                        case 4:
                          if (te.t0 = te.sent, te.t0) {
                            te.next = 7;
                            break;
                          }
                          te.t0 = ee;
                        case 7:
                          return Ce = te.t0, te.next = 10, n.extractResultData(Ce, A, h);
                        case 10:
                          if (Q = te.sent, T) {
                            te.next = 13;
                            break;
                          }
                          throw ee;
                        case 13:
                          if (!(!Q || G(Q) != "object")) {
                            te.next = 15;
                            break;
                          }
                          throw Error(_e.INVALID_RESPONSE(ee, "response", !!n.deepChat.responseInterceptor, Ce));
                        case 15:
                          Q.makingAnotherRequest || (Te.isSimulatable(n.stream, Q) ? Te.simulate(s, n.streamHandlers, Q) : (s.addNewMessage(Q), S()));
                        case 16:
                        case "end":
                          return te.stop();
                      }
                    }, de);
                  }));
                  return function(de) {
                    return Y.apply(this, arguments);
                  };
                }()).catch(function(Y) {
                  ie.displayError(s, Y), S();
                });
              case 18:
              case "end":
                return x.stop();
            }
          }, t, this);
        }));
        function e(t, n, a) {
          return i.apply(this, arguments);
        }
        return e;
      }()
    )
  }, {
    key: "executePollRequest",
    value: function(e, t, n, a) {
      var s = e.completionsHandlers.onFinish;
      fetch(t, n).then(function(o) {
        return o.json();
      }).then(/* @__PURE__ */ function() {
        var o = C(/* @__PURE__ */ m().mark(function l(u) {
          var c, d, p;
          return m().wrap(function(g) {
            for (; ; ) switch (g.prev = g.next) {
              case 0:
                if (e.extractPollResultData) {
                  g.next = 2;
                  break;
                }
                return g.abrupt("return");
              case 2:
                return g.t0 = e, g.next = 5, (d = (c = e.deepChat).responseInterceptor) == null ? void 0 : d.call(c, u);
              case 5:
                if (g.t1 = g.sent, g.t1) {
                  g.next = 8;
                  break;
                }
                g.t1 = u;
              case 8:
                return g.t2 = g.t1, g.next = 11, g.t0.extractPollResultData.call(g.t0, g.t2);
              case 11:
                p = g.sent, p.timeoutMS ? setTimeout(function() {
                  r.executePollRequest(e, t, n, a);
                }, p.timeoutMS) : Te.isSimulatable(e.stream, p) ? Te.simulate(a, e.streamHandlers, p) : (a.addNewMessage(p), s());
              case 13:
              case "end":
                return g.stop();
            }
          }, l);
        }));
        return function(l) {
          return o.apply(this, arguments);
        };
      }()).catch(function(o) {
        ie.displayError(a, o), s();
      });
    }
    // prettier-ignore
  }, {
    key: "poll",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n, a, s) {
        var o, l, u, c, d, p, h, g, k, S, T, A, D, N = arguments;
        return m().wrap(function(Y) {
          for (; ; ) switch (Y.prev = Y.next) {
            case 0:
              return o = N.length > 3 && N[3] !== void 0 ? N[3] : !0, d = {
                body: a,
                headers: (l = n.connectSettings) == null ? void 0 : l.headers
              }, Y.next = 4, ie.processRequestInterceptor(n.deepChat, d);
            case 4:
              if (p = Y.sent, h = p.body, g = p.headers, k = p.error, !k) {
                Y.next = 10;
                break;
              }
              return Y.abrupt("return", ie.onInterceptorError(s, k));
            case 10:
              S = ((u = n.connectSettings) == null ? void 0 : u.url) || n.url || "", T = ((c = n.connectSettings) == null ? void 0 : c.method) || "POST", A = o ? JSON.stringify(h) : h, D = {
                method: T,
                body: A,
                headers: g
              }, n.connectSettings.credentials && (D.credentials = n.connectSettings.credentials), r.executePollRequest(n, S, D, s);
            case 12:
            case "end":
              return Y.stop();
          }
        }, t);
      }));
      function e(t, n, a) {
        return i.apply(this, arguments);
      }
      return e;
    }()
    // prettier-ignore
  }, {
    key: "verifyKey",
    value: function(e, t, n, a, s, o, l, u, c) {
      if (e === "") return o(_e.INVALID_KEY);
      l(), fetch(t, {
        method: a,
        headers: n,
        body: c || null
      }).then(function(d) {
        return ie.processResponseByType(d);
      }).then(function(d) {
        u(d, e, s, o);
      }).catch(function(d) {
        o(_e.CONNECTION_FAILED), console.error(d);
      });
    }
  }]);
}(), Oi = /* @__PURE__ */ function() {
  function r(i, e, t) {
    E(this, r), this._isLoading = !1, this._isPaginationComplete = !1, this._index = 0, this._messages = e, t.fetchHistory && this.fetchHistory(t.fetchHistory), i.loadHistory && this.setupLoadHistoryOnScroll(i.loadHistory), this.setupInitialHistory(i);
  }
  return _(r, [{
    key: "fetchHistory",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n) {
        var a = this, s, o;
        return m().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              return s = vt.addMessage(this._messages), u.next = 3, n();
            case 3:
              o = u.sent, this._messages.removeMessage(s), o.forEach(function(c) {
                return a._messages.addAnyMessage(c, !0);
              }), setTimeout(function() {
                return Ue.scrollToBottom(a._messages.elementRef);
              }, 0);
            case 5:
            case "end":
              return u.stop();
          }
        }, t, this);
      }));
      function e(t) {
        return i.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "processLoadedHistory",
    value: function(e) {
      var t = this, n, a = this._messages, s = a.messageElementRefs, o = a.messageToElements, l = a.elementRef, u = (n = s.find(function(d) {
        return !d.outerContainer.classList.contains(gt.INTRO_CLASS);
      })) == null ? void 0 : n.outerContainer, c = l.scrollTop;
      e == null || e.reverse().map(function(d) {
        var p = t._messages.addAnyMessage(ce(ce({}, d), {}, {
          sendUpdate: !0
        }), !0, !0);
        if (p) {
          var h = W.generateMessageBody(p, s);
          o.unshift([p, h]);
        }
        return p;
      }).filter(function(d) {
        return !!d;
      }).reverse().forEach(function(d) {
        return t._messages.sendClientUpdate(d, !0);
      }), u && (l.scrollTop = c + u.offsetTop - 40);
    }
  }, {
    key: "populateMessages",
    value: function(e, t) {
      this._messages.removeMessage(e), this._isPaginationComplete = t.findIndex(function(a) {
        return !a;
      }) < 0;
      var n = t.filter(function(a) {
        return !!a;
      });
      this.processLoadedHistory(n);
    }
  }, {
    key: "setupLoadHistoryOnScroll",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n) {
        var a = this;
        return m().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              this._messages.elementRef.onscroll = /* @__PURE__ */ C(/* @__PURE__ */ m().mark(function l() {
                var u, c;
                return m().wrap(function(p) {
                  for (; ; ) switch (p.prev = p.next) {
                    case 0:
                      if (!(!a._isLoading && !a._isPaginationComplete && a._messages.elementRef.scrollTop === 0)) {
                        p.next = 13;
                        break;
                      }
                      return a._isLoading = !0, u = vt.addMessage(a._messages, !1), p.prev = 3, p.next = 6, n(a._index++);
                    case 6:
                      c = p.sent, a.populateMessages(u, c), a._isLoading = !1, p.next = 13;
                      break;
                    case 10:
                      p.prev = 10, p.t0 = p.catch(3), a._messages.removeMessage(u), a._isPaginationComplete = !0, a._messages.addNewErrorMessage("service", r.FAILED_ERROR_MESSAGE, !0), console.error(p.t0);
                    case 13:
                    case "end":
                      return p.stop();
                  }
                }, l, null, [[3, 10]]);
              }));
            case 1:
            case "end":
              return o.stop();
          }
        }, t, this);
      }));
      function e(t) {
        return i.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "populateInitialHistory",
    value: function(e) {
      var t = this;
      e.forEach(function(n) {
        Ne.processHistoryFile(n), t._messages.addNewMessage(n, !0);
      });
    }
  }, {
    key: "loadInitialHistory",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n) {
        var a = this, s, o, l;
        return m().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              return this._isLoading = !0, s = vt.addMessage(this._messages), c.prev = 2, c.next = 5, n(this._index++);
            case 5:
              o = c.sent, l = this._messages.elementRef.scrollTop, this.populateMessages(s, o), l === 0 && setTimeout(function() {
                return Ue.scrollToBottom(a._messages.elementRef);
              }, 0), c.next = 13;
              break;
            case 10:
              c.prev = 10, c.t0 = c.catch(2), this._messages.removeMessage(s), this._isPaginationComplete = !0, this._messages.addNewErrorMessage("service", r.FAILED_ERROR_MESSAGE, !0), console.error(c.t0);
            case 13:
              this._isLoading = !1;
            case 14:
            case "end":
              return c.stop();
          }
        }, t, this, [[2, 10]]);
      }));
      function e(t) {
        return i.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "setupInitialHistory",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n) {
        var a;
        return m().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              n.loadHistory && this.loadInitialHistory(n.loadHistory), a = n.history || Ne.processHistory(n), a && (this.populateInitialHistory(a), this._index += 1);
            case 3:
            case "end":
              return o.stop();
          }
        }, t, this);
      }));
      function e(t) {
        return i.apply(this, arguments);
      }
      return e;
    }()
  }], [{
    key: "addErrorPrefix",
    value: function(e) {
      var t;
      (t = e.permittedErrorPrefixes) !== null && t !== void 0 || (e.permittedErrorPrefixes = []), e.permittedErrorPrefixes.push(r.FAILED_ERROR_MESSAGE);
    }
  }]);
}();
Oi.FAILED_ERROR_MESSAGE = "Failed to load history";
var Hr = Oi, qr = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "getCharacterLimitMessages",
    value: function(e, t) {
      var n;
      if (t === -1) return e;
      var a = 0, s = e.length - 1;
      for (s; s >= 0; s -= 1) {
        var o = (n = e[s]) == null ? void 0 : n.text;
        if (o !== void 0 && (a += o.length, a > t)) {
          e[s].text = o.substring(0, o.length - (a - t));
          break;
        }
      }
      return e.slice(Math.max(s, 0));
    }
  }, {
    key: "getMaxMessages",
    value: function(e, t) {
      return e.slice(Math.max(e.length - t, 0));
    }
    // if maxMessages is not defined we send all messages
    // if maxMessages above 0 we send that number
    // if maxMessages 0 or below we send only what is in the request
  }, {
    key: "processMessages",
    value: function(e, t, n) {
      return t !== void 0 ? t > 0 && (e = r.getMaxMessages(e, t)) : e = [e[e.length - 1]], e = JSON.parse(JSON.stringify(e)), n === void 0 ? e : r.getCharacterLimitMessages(e, n);
    }
  }]);
}(), wl = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "parseConfig",
    value: (
      // prettier-ignore
      function(e, t, n, a) {
        var s, o = {
          files: t
        };
        if (G(a) == "object") {
          Ne.processFileConfigConnect(a);
          var l = a.files, u = a.connect, c = a.button;
          l && (l.infoModal && (o.files.infoModal = l.infoModal, (s = l.infoModal) != null && s.textMarkDown && (o.infoModalTextMarkUp = n.render(l.infoModal.textMarkDown))), l.acceptedFormats && (o.files.acceptedFormats = l.acceptedFormats), l.maxNumberOfFiles && (o.files.maxNumberOfFiles = l.maxNumberOfFiles)), o.button = c, u && (u.headers || u.method || u.url || u.credentials || e.headers || e.method || e.url || e.credentials) && (o.connect = {
            url: (u == null ? void 0 : u.url) || e.url,
            method: (u == null ? void 0 : u.method) || e.method,
            headers: (u == null ? void 0 : u.headers) || e.headers,
            credentials: (u == null ? void 0 : u.credentials) || e.credentials
          });
        }
        return o;
      }
    )
  }, {
    key: "processMixedFiles",
    value: function(e, t, n) {
      if (n) {
        var a = {
          acceptedFormats: ""
        };
        e.fileTypes.mixedFiles = r.parseConfig(e.connectSettings, a, t, n);
      }
    }
    // needs to be set after audio to overwrite maxNumberOfFiles
    // prettier-ignore
  }, {
    key: "processMicrophone",
    value: function(e, t, n, a) {
      var s, o, l, u, c, d, p, h, g = ce({
        acceptedFormats: "audio/*"
      }, ((l = e.fileTypes.audio) == null ? void 0 : l.files) || {});
      n && (navigator.mediaDevices.getUserMedia !== void 0 ? (e.recordAudio = r.parseConfig(e.connectSettings, g, t, n), G(n) == "object" && n.files && ((s = (u = e.recordAudio).files) !== null && s !== void 0 || (u.files = {}), e.recordAudio.files.format = (c = n.files) == null ? void 0 : c.format, e.recordAudio.files.maxDurationSeconds = (d = n.files) == null ? void 0 : d.maxDurationSeconds, (p = e.fileTypes.audio) != null && p.files && ((o = (h = e.fileTypes.audio.files).maxNumberOfFiles) !== null && o !== void 0 || (h.maxNumberOfFiles = n.files.maxNumberOfFiles)))) : a || (e.fileTypes.audio = r.parseConfig(e.connectSettings, g, t, n)));
    }
    // prettier-ignore
  }, {
    key: "processAudioConfig",
    value: function(e, t, n, a) {
      if (!(!n && !a)) {
        var s = ce({
          acceptedFormats: "audio/*"
        }, (a == null ? void 0 : a.files) || {});
        e.fileTypes.audio = r.parseConfig(e.connectSettings, s, t, n);
      }
    }
    // prettier-ignore
  }, {
    key: "processGifConfig",
    value: function(e, t, n, a) {
      if (!(!n && !a)) {
        var s = ce({
          acceptedFormats: "image/gif"
        }, (a == null ? void 0 : a.files) || {});
        e.fileTypes.gifs = r.parseConfig(e.connectSettings, s, t, n);
      }
    }
    // needs to be set after images to overwrite maxNumberOfFiles
    // prettier-ignore
  }, {
    key: "processCamera",
    value: function(e, t, n, a) {
      var s, o, l, u, c, d = ce({
        acceptedFormats: "image/*"
      }, ((o = e.fileTypes.images) == null ? void 0 : o.files) || {});
      n && (navigator.mediaDevices.getUserMedia !== void 0 ? (e.camera = r.parseConfig(e.connectSettings, d, t, n), G(n) == "object" && (e.camera.modalContainerStyle = n.modalContainerStyle, n.files && ((s = (l = e.camera).files) !== null && s !== void 0 || (l.files = {}), e.camera.files.format = (u = n.files) == null ? void 0 : u.format, e.camera.files.dimensions = (c = n.files) == null ? void 0 : c.dimensions))) : a || (e.fileTypes.images = r.parseConfig(e.connectSettings, d, t, n)));
    }
    // prettier-ignore
  }, {
    key: "processImagesConfig",
    value: function(e, t, n, a) {
      if (!(!n && !a)) {
        var s = ce({
          acceptedFormats: "image/*"
        }, (a == null ? void 0 : a.files) || {});
        e.fileTypes.images = r.parseConfig(e.connectSettings, s, t, n);
      }
    }
    // default for direct service
  }, {
    key: "populateDefaultFileIO",
    value: function(e, t) {
      var n, a, s, o, l;
      e && ((n = e.files) !== null && n !== void 0 || (e.files = {}), (a = (o = e.files).acceptedFormats) !== null && a !== void 0 || (o.acceptedFormats = t), (s = (l = e.files).maxNumberOfFiles) !== null && s !== void 0 || (l.maxNumberOfFiles = 1));
    }
  }, {
    key: "set",
    value: function(e, t, n) {
      r.populateDefaultFileIO(n == null ? void 0 : n.audio, ".4a,.mp3,.webm,.mp4,.mpga,.wav,.mpeg,.m4a"), r.populateDefaultFileIO(n == null ? void 0 : n.images, ".png,.jpg");
      var a = kr.createNew(e.remarkable);
      r.processImagesConfig(t, a, e.images, n == null ? void 0 : n.images), r.processCamera(t, a, e.camera, e.images), r.processGifConfig(t, a, e.gifs, n == null ? void 0 : n.gifs), r.processAudioConfig(t, a, e.audio, n == null ? void 0 : n.audio), r.processMicrophone(t, a, e.microphone, e.audio), r.processMixedFiles(t, a, e.mixedFiles);
    }
  }]);
}(), xn = /* @__PURE__ */ function() {
  function r(i, e, t) {
    var n;
    E(this, r);
    var a, s, o, l, u;
    this.rawBody = {}, this.validateKeyProperty = !1, this.canSendMessage = r.canSendMessage, this.connectSettings = {}, this.fileTypes = {}, this.completionsHandlers = {}, this.streamHandlers = {}, this.deepChat = i, this.demo = t, Object.assign(this.rawBody, (a = i.connect) == null ? void 0 : a.additionalBodyProps), this.totalMessagesMaxCharLength = (s = i == null ? void 0 : i.requestBodyLimits) == null ? void 0 : s.totalMessagesMaxCharLength, this.maxMessages = (o = i == null ? void 0 : i.requestBodyLimits) == null ? void 0 : o.maxMessages, wl.set(i, this, e), i.connect && (this.connectSettings = i.connect), this.demo && ((n = (l = this.connectSettings).url) !== null && n !== void 0 || (l.url = nt.URL)), this.connectSettings.websocket && Zt.setup(this), this.stream = ((u = this.deepChat.connect) == null ? void 0 : u.stream) || Ne.checkForStream(this.deepChat), i.loadHistory && Hr.addErrorPrefix(this);
  }
  return _(r, [{
    key: "verifyKey",
    value: function(e, t) {
    }
  }, {
    key: "getServiceIOByType",
    value: function(e) {
      if (e.type.startsWith("audio") && this.fileTypes.audio) return this.fileTypes.audio;
      if (e.type.startsWith("image")) {
        if (this.fileTypes.gifs && e.type.endsWith("/gif")) return this.fileTypes.gifs;
        if (this.fileTypes.images) return this.fileTypes.images;
        if (this.camera) return this.camera;
      }
      return this.fileTypes.mixedFiles;
    }
  }, {
    key: "request",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n, a) {
        var s, o = arguments;
        return m().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              return s = o.length > 2 && o[2] !== void 0 ? o[2] : !0, u.abrupt("return", this.stream && !Te.isSimulation(this.stream) ? Te.request(this, n, a, s) : ye.request(this, n, a, s));
            case 2:
            case "end":
              return u.stop();
          }
        }, t, this);
      }));
      function e(t, n) {
        return i.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "callAPIWithText",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n, a) {
        var s, o, l, u, c, d, p, h;
        return m().wrap(function(k) {
          for (; ; ) switch (k.prev = k.next) {
            case 0:
              return p = ce({
                messages: a
              }, this.rawBody), h = !1, (l = this.connectSettings.headers) != null && l["Content-Type"] || ((s = (u = this.connectSettings).headers) !== null && s !== void 0 || (u.headers = {}), (o = (c = this.connectSettings.headers)["Content-Type"]) !== null && o !== void 0 || (c["Content-Type"] = "application/json"), h = !0), k.next = 5, this.request(p, n);
            case 5:
              h && ((d = this.connectSettings.headers) == null || delete d["Content-Type"]);
            case 6:
            case "end":
              return k.stop();
          }
        }, t, this);
      }));
      function e(t, n) {
        return i.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "callApiWithFiles",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n, a, s) {
        var o, l, u;
        return m().wrap(function(d) {
          for (; ; ) switch (d.prev = d.next) {
            case 0:
              return o = r.createCustomFormDataBody(this.rawBody, a, s), l = this.connectSettings, u = this.getServiceIOByType(s[0]), this.connectSettings = (u == null ? void 0 : u.connect) || this.connectSettings, d.next = 4, this.request(o, n, !1);
            case 4:
              this.connectSettings = l;
            case 5:
            case "end":
              return d.stop();
          }
        }, t, this);
      }));
      function e(t, n, a) {
        return i.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "callServiceAPI",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n, a, s) {
        return m().wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              s ? this.callApiWithFiles(n, a, s) : this.callAPIWithText(n, a);
            case 1:
            case "end":
              return l.stop();
          }
        }, t, this);
      }));
      function e(t, n, a) {
        return i.apply(this, arguments);
      }
      return e;
    }()
    // prettier-ignore
  }, {
    key: "callAPI",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n, a) {
        var s, o;
        return m().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              if (this.connectSettings) {
                u.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              s = qr.processMessages(a.messageToElements.map(function(c) {
                var d = Or(c, 1), p = d[0];
                return p;
              }), this.maxMessages, this.totalMessagesMaxCharLength), this.connectSettings.websocket ? (o = ce({
                messages: s
              }, this.rawBody), Zt.sendWebsocket(this, o, a, !1)) : this.callServiceAPI(a, s, n.files);
            case 4:
            case "end":
              return u.stop();
          }
        }, t, this);
      }));
      function e(t, n) {
        return i.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "extractResultData",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n) {
        return m().wrap(function(s) {
          for (; ; ) switch (s.prev = s.next) {
            case 0:
              if (!n.error) {
                s.next = 2;
                break;
              }
              throw n.error;
            case 2:
              if (!n.result) {
                s.next = 4;
                break;
              }
              return s.abrupt("return", Ne.handleResponseProperty(n));
            case 4:
              if (!ie.validateResponseFormat(n)) {
                s.next = 6;
                break;
              }
              return s.abrupt("return", n);
            case 6:
            case "end":
              return s.stop();
          }
        }, t);
      }));
      function e(t) {
        return i.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "isDirectConnection",
    value: function() {
      return !1;
    }
  }, {
    key: "isWebModel",
    value: function() {
      return !1;
    }
  }], [{
    key: "canSendMessage",
    value: function(e, t, n) {
      return n ? !0 : !!(e && e.trim() !== "") || !!(t && t.length > 0);
    }
  }, {
    key: "createCustomFormDataBody",
    value: function(e, t, n) {
      var a = new FormData();
      n.forEach(function(l) {
        return a.append("files", l);
      }), Object.keys(e).forEach(function(l) {
        return a.append(l, String(e[l]));
      });
      var s = 0;
      t.slice(0, t.length - 1).forEach(function(l) {
        a.append("message".concat(s += 1), JSON.stringify(l));
      });
      var o = t[t.length - 1];
      return o.text && (delete o.files, a.append("message".concat(s += 1), JSON.stringify(o))), a;
    }
  }]);
}(), Ie = /* @__PURE__ */ function(r) {
  function i(e, t, n, a, s) {
    var o;
    E(this, i);
    var l;
    return o = K(this, i, [e, s]), o.insertKeyPlaceholderText = "API Key", o.keyHelpUrl = "", Object.assign(o.rawBody, (l = e.connect) == null ? void 0 : l.additionalBodyProps), o.keyVerificationDetails = t, o.buildHeadersFunc = n, a && o.setApiKeyProperties(a), o.connectSettings = o.buildConnectSettings(o.key || "", e.connect), o;
  }
  return J(i, r), _(i, [{
    key: "setApiKeyProperties",
    value: function(t) {
      this.key = t.key, t.validateKeyProperty && (this.validateKeyProperty = t.validateKeyProperty);
    }
  }, {
    key: "buildConnectSettings",
    value: function(t, n) {
      var a, s = n ?? {};
      return (a = s.headers) !== null && a !== void 0 || (s.headers = {}), Object.assign(s.headers, this.buildHeadersFunc(t)), s;
    }
  }, {
    key: "keyAuthenticated",
    value: function(t, n) {
      this.connectSettings = this.buildConnectSettings(n, this.connectSettings), this.key = n, t();
    }
    // prettier-ignore
  }, {
    key: "verifyKey",
    value: function(t, n) {
      var a = this.keyVerificationDetails, s = a.url, o = a.method, l = a.handleVerificationResult, u = a.createHeaders, c = a.body, d = (u == null ? void 0 : u(t)) || this.buildHeadersFunc(t);
      ye.verifyKey(t, s, d, o, this.keyAuthenticated.bind(this, n.onSuccess), n.onFail, n.onLoad, l, c);
    }
  }, {
    key: "isDirectConnection",
    value: function() {
      return !0;
    }
  }]);
}(xn), Cl = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "waitForPropertiesToBeUpdatedBeforeRender",
    value: function(e) {
      e._propUpdated_ = !1, setTimeout(function() {
        e._propUpdated_ ? r.waitForPropertiesToBeUpdatedBeforeRender(e) : (e._waitingToRender_ = !1, e.onRender());
      });
    }
  }, {
    key: "attemptRender",
    value: function(e) {
      e._propUpdated_ = !0, e._waitingToRender_ || (e._waitingToRender_ = !0, r.waitForPropertiesToBeUpdatedBeforeRender(e));
    }
  }]);
}(), wr = /* @__PURE__ */ function(r) {
  function i() {
    var e;
    return E(this, i), e = K(this, i), e._waitingToRender_ = !1, e._propUpdated_ = !1, Object.keys(i._attributeToProperty_).forEach(function(t) {
      var n = i._attributeToProperty_[t];
      e.constructPropertyAccessors(n), e.hasOwnProperty(t) || e.constructPropertyAccessors(n, t);
    }), e;
  }
  return J(i, r), _(i, [{
    key: "constructPropertyAccessors",
    value: (
      // need to be called here as accessors need to be set for the class instance
      function(t, n) {
        var a;
        Object.defineProperty(this, n || t, {
          get: function() {
            return a;
          },
          set: function(o) {
            a = o, n ? this[t] = o : Cl.attemptRender(this);
          }
        });
      }
    )
  }, {
    key: "attributeChangedCallback",
    value: function(t, n, a) {
      if (n !== a) {
        var s = i._attributes_[t](a), o = i._attributeToProperty_[t];
        this[o] = s;
      }
    }
  }, {
    key: "onRender",
    value: function() {
    }
  }], [{
    key: "observedAttributes",
    get: function() {
      return Object.keys(i._attributes_) || [];
    }
  }]);
}(/* @__PURE__ */ fr(HTMLElement));
wr._attributes_ = {}, wr._attributeToProperty_ = {};
var Tl = wr, Al = `<?xml version="1.0" standalone="no"?>
<svg version="1.1"
	xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
	xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0.9em" height="0.9em"
	viewBox="0 0 1200 1200" enable-background="new 0 0 1200 1200">
		<path d="
			M669.727,273.516c-22.891-2.476-46.15-3.895-69.727-4.248c-103.025,0.457-209.823,25.517-310.913,73.536
			c-75.058,37.122-148.173,89.529-211.67,154.174C46.232,529.978,6.431,577.76,0,628.74c0.76,44.162,48.153,98.67,77.417,131.764
			c59.543,62.106,130.754,113.013,211.67,154.174c2.75,1.335,5.51,2.654,8.276,3.955l-75.072,131.102l102.005,60.286l551.416-960.033
			l-98.186-60.008L669.727,273.516z M902.563,338.995l-74.927,129.857c34.47,44.782,54.932,100.006,54.932,159.888
			c0,149.257-126.522,270.264-282.642,270.264c-6.749,0-13.29-0.728-19.922-1.172l-49.585,85.84c22.868,2.449,45.99,4.233,69.58,4.541
			c103.123-0.463,209.861-25.812,310.84-73.535c75.058-37.122,148.246-89.529,211.743-154.174
			c31.186-32.999,70.985-80.782,77.417-131.764c-0.76-44.161-48.153-98.669-77.417-131.763
			c-59.543-62.106-130.827-113.013-211.743-154.175C908.108,341.478,905.312,340.287,902.563,338.995L902.563,338.995z
			M599.927,358.478c6.846,0,13.638,0.274,20.361,0.732l-58.081,100.561c-81.514,16.526-142.676,85.88-142.676,168.897
			c0,20.854,3.841,40.819,10.913,59.325c0.008,0.021-0.008,0.053,0,0.074l-58.228,100.854
			c-34.551-44.823-54.932-100.229-54.932-160.182C317.285,479.484,443.808,358.477,599.927,358.478L599.927,358.478z M768.896,570.513
			L638.013,797.271c81.076-16.837,141.797-85.875,141.797-168.603C779.81,608.194,775.724,588.729,768.896,570.513L768.896,570.513z"
			/>
</svg>
`, xl = `<?xml version="1.0" standalone="no"?>
<svg version="1.1"
	xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
	xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0.9em" height="0.9em"
	viewBox="0 0 1200 1200" enable-background="new 0 0 1200 1200">
		<path id="path6686" inkscape:connector-curvature="0" d="M779.843,599.925c0,95.331-80.664,172.612-180.169,172.612
			c-99.504,0-180.168-77.281-180.168-172.612c0-95.332,80.664-172.612,180.168-172.612
			C699.179,427.312,779.843,504.594,779.843,599.925z M600,240.521c-103.025,0.457-209.814,25.538-310.904,73.557
			c-75.058,37.122-148.206,89.496-211.702,154.141C46.208,501.218,6.431,549,0,599.981c0.76,44.161,48.13,98.669,77.394,131.763
			c59.543,62.106,130.786,113.018,211.702,154.179c94.271,45.751,198.616,72.092,310.904,73.557
			c103.123-0.464,209.888-25.834,310.866-73.557c75.058-37.122,148.243-89.534,211.74-154.179
			c31.185-32.999,70.962-80.782,77.394-131.763c-0.76-44.161-48.13-98.671-77.394-131.764
			c-59.543-62.106-130.824-112.979-211.74-154.141C816.644,268.36,712.042,242.2,600,240.521z M599.924,329.769
			c156.119,0,282.675,120.994,282.675,270.251c0,149.256-126.556,270.25-282.675,270.25S317.249,749.275,317.249,600.02
			C317.249,450.763,443.805,329.769,599.924,329.769L599.924,329.769z"/>
</svg>
`, Be = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "createSVGElement",
    value: function(e) {
      return new DOMParser().parseFromString(e, "image/svg+xml").documentElement;
    }
  }]);
}(), Pi = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "changeVisibility",
    value: (
      // prettier-ignore
      function(e, t, n, a) {
        a.target.id === r.VISIBLE_ICON_ID ? (t.style.display = "none", n.style.display = "block", e.type = "password") : (t.style.display = "block", n.style.display = "none", e.type = "text");
      }
    )
  }, {
    key: "createIconElement",
    value: function(e, t) {
      var n = Be.createSVGElement(e);
      return n.id = t, n.classList.add("visibility-icon"), n;
    }
    // prettier-ignore
  }, {
    key: "create",
    value: function(e) {
      var t = document.createElement("div");
      t.id = "visibility-icon-container";
      var n = r.createIconElement(xl, r.VISIBLE_ICON_ID);
      n.style.display = "none", t.appendChild(n);
      var a = r.createIconElement(Al, "not-visible-icon");
      return t.appendChild(a), t.onclick = r.changeVisibility.bind(this, e, n, a), t;
    }
  }]);
}();
Pi.VISIBLE_ICON_ID = "visible-icon";
var Ml = Pi, Rl = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "createCautionText",
    value: function() {
      var e = document.createElement("a");
      return e.classList.add("insert-key-input-help-text"), e.innerText = "Please exercise CAUTION when inserting your API key outside of deepchat.dev or localhost!!", e;
    }
  }, {
    key: "createHelpLink",
    value: function(e) {
      var t = document.createElement("a");
      return t.classList.add("insert-key-input-help-text"), t.href = e, t.innerText = "Find more info here", t.target = "_blank", t;
    }
  }, {
    key: "createFailText",
    value: function() {
      var e = document.createElement("div");
      return e.id = "insert-key-input-invalid-text", e.style.display = "none", e;
    }
  }, {
    key: "createHelpTextContainer",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = document.createElement("div");
      n.id = "insert-key-help-text-container";
      var a = document.createElement("div");
      a.id = "insert-key-help-text-contents";
      var s = r.createFailText();
      if (a.appendChild(s), e) {
        var o = r.createHelpLink(e);
        a.appendChild(o);
      }
      if (t === !0) {
        var l = r.createCautionText();
        a.appendChild(l);
      }
      return n.appendChild(a), {
        helpTextContainerElement: n,
        failTextElement: s
      };
    }
  }, {
    key: "onFail",
    value: function(e, t, n, a) {
      e.classList.replace("insert-key-input-valid", "insert-key-input-invalid"), n.innerText = a, n.style.display = "block", t.innerText = "Start", e.classList.remove("loading");
    }
  }, {
    key: "onLoad",
    value: function(e, t) {
      e.classList.add("loading"), t.innerHTML = '<div id="loading-key"></div>';
    }
    // prettier-ignore
  }, {
    key: "verifyKey",
    value: function(e, t, n) {
      var a = e.value.trim();
      n.verifyKey(a, t);
    }
    // prettier-ignore
  }, {
    key: "addVerificationEvents",
    value: function(e, t, n, a, s) {
      var o = {
        onSuccess: a,
        onFail: r.onFail.bind(this, e, t, n),
        onLoad: r.onLoad.bind(this, e, t)
      }, l = r.verifyKey.bind(this, e, o, s);
      t.onclick = l, e.onkeydown = function(u) {
        !e.classList.contains("loading") && u.key === xe.ENTER && l();
      };
    }
  }, {
    key: "createStartButton",
    value: function() {
      var e = document.createElement("div");
      return e.id = "start-button", e.innerText = "Start", e;
    }
  }, {
    key: "onInputFocus",
    value: function(e) {
      e.target.classList.replace("insert-key-input-invalid", "insert-key-input-valid");
    }
  }, {
    key: "createInput",
    value: function(e) {
      var t = document.createElement("div");
      t.id = "insert-key-input-container";
      var n = document.createElement("input");
      return n.id = "insert-key-input", n.placeholder = e || "API Key", n.type = "password", n.classList.add("insert-key-input-valid"), n.onfocus = r.onInputFocus, t.appendChild(n), t;
    }
    // prettier-ignore
  }, {
    key: "createContents",
    value: function(e, t) {
      var n, a = document.createElement("div");
      a.id = "insert-key-contents";
      var s = r.createInput(t.insertKeyPlaceholderText), o = s.children[0], l = Ml.create(o);
      s.appendChild(l), a.appendChild(s);
      var u = r.createStartButton(), c = r.createHelpTextContainer(t.keyHelpUrl, (n = t.deepChat._insertKeyViewStyles) == null ? void 0 : n.displayCautionText), d = c.helpTextContainerElement, p = c.failTextElement;
      return a.appendChild(u), a.appendChild(d), r.addVerificationEvents(o, u, p, e, t), a;
    }
  }, {
    key: "createElements",
    value: function(e, t) {
      var n = document.createElement("div");
      n.id = "insert-key-view";
      var a = r.createContents(e, t);
      return n.appendChild(a), n;
    }
  }, {
    key: "render",
    value: function(e, t, n) {
      var a = r.createElements(t, n);
      e.replaceChildren(a);
    }
  }]);
}(), zt = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "enableButtons",
    value: function(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      window.webLLM ? (e && (e.disabled = !1), t && (t.disabled = !1)) : n < zr.MODULE_SEARCH_LIMIT_S * 4 && setTimeout(function() {
        return r.enableButtons(e, t, n + 1);
      }, 250);
    }
    // prettier-ignore
  }, {
    key: "setUpInitial",
    value: function(e, t, n, a) {
      var s = (t == null ? void 0 : t.downloadClass) || r.DOWNLOAD_BUTTON_CLASS, o = (t == null ? void 0 : t.uploadClass) || r.UPLOAD_BUTTON_CLASS, l = (t == null ? void 0 : t.fileInputClass) || r.FILE_INPUT_CLASS;
      return setTimeout(function() {
        var u = n == null ? void 0 : n.getElementsByClassName(s)[0], c = n == null ? void 0 : n.getElementsByClassName(l)[0], d = n == null ? void 0 : n.getElementsByClassName(o)[0];
        u && (u.onclick = function() {
          return e();
        }), c && (c.onchange = function() {
          c.files && c.files.length > 0 && e(c.files);
        }), d && (d.onclick = function() {
          return c.click();
        }), (u || d) && r.enableButtons(u, d);
      }), (t == null ? void 0 : t.initialHtml) || `<div>
        Download or upload a web model that will run entirely on your browser: <br/> 
        <button disabled class="`.concat(s, ` deep-chat-button deep-chat-web-model-button">Download</button>
        `).concat(a ? "" : '<input type="file" class="'.concat(l, `" hidden multiple />
          <button disabled class="`).concat(o, ' deep-chat-button deep-chat-web-model-button">Upload</button>'), `
      </div>`);
    }
  }, {
    key: "exportFile",
    value: function(e) {
      for (var t = document.createElement("a"), n = 4, a = function(l) {
        setTimeout(function() {
          for (var u = l * n, c = u; c < Math.min(u + n, e.length); c += 1) {
            var d = URL.createObjectURL(e[c]);
            t.href = d, t.download = e[c].name, document.body.appendChild(t), t.click(), URL.revokeObjectURL(d);
          }
        }, 500 * l);
      }, s = 0; s < e.length / n; s += 1)
        a(s);
    }
    // prettier-ignore
  }, {
    key: "setUpAfterLoad",
    value: function(e, t, n, a) {
      var s = (t == null ? void 0 : t.exportFilesClass) || r.EXPORT_BUTTON_CLASS;
      return setTimeout(function() {
        var o = n == null ? void 0 : n.getElementsByClassName(s)[0];
        o && (o.onclick = function() {
          return r.exportFile(e);
        });
      }), (t == null ? void 0 : t.afterLoadHtml) || `<div>
        Model loaded successfully and has been cached for future requests.
        `.concat(a ? "" : '<br/> <button style="margin-top: 5px" class="'.concat(s, ' deep-chat-button">Export</button>'), `
      </div>`);
    }
  }]);
}();
zt.DOWNLOAD_BUTTON_CLASS = "deep-chat-download-button", zt.UPLOAD_BUTTON_CLASS = "deep-chat-upload-button", zt.FILE_INPUT_CLASS = "deep-chat-file-input", zt.EXPORT_BUTTON_CLASS = "deep-chat-export-button";
var Ia = zt, La = {
  model_list: [
    // Llama-2
    {
      model_url: "https://huggingface.co/mlc-ai/Llama-2-7b-chat-hf-q4f32_1-MLC/resolve/main/",
      local_id: "Llama-2-7b-chat-hf-q4f32_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-7b-chat-hf/Llama-2-7b-chat-hf-q4f32_1-ctx4k_cs1k-webgpu.wasm",
      vram_required_MB: 9109.03,
      low_resource_required: !1
    },
    {
      model_url: "https://huggingface.co/mlc-ai/Llama-2-7b-chat-hf-q4f16_1-MLC/resolve/main/",
      local_id: "Llama-2-7b-chat-hf-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-7b-chat-hf/Llama-2-7b-chat-hf-q4f16_1-ctx4k_cs1k-webgpu.wasm",
      vram_required_MB: 6749.02,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    },
    {
      model_url: "https://huggingface.co/mlc-ai/Llama-2-7b-chat-hf-q4f16_1-MLC/resolve/main/",
      local_id: "Llama-2-7b-chat-hf-q4f16_1-1k",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-7b-chat-hf/Llama-2-7b-chat-hf-q4f16_1-ctx1k-webgpu.wasm",
      vram_required_MB: 4618.52,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    },
    {
      model_url: "https://huggingface.co/mlc-ai/Llama-2-13b-chat-hf-q4f16_1-MLC/resolve/main/",
      local_id: "Llama-2-13b-chat-hf-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-13b-chat-hf/Llama-2-13b-chat-hf-q4f16_1-ctx4k_cs1k-webgpu.wasm",
      vram_required_MB: 11814.09,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    },
    {
      model_url: "https://huggingface.co/mlc-ai/Llama-2-70b-chat-hf-q4f16_1-MLC/resolve/main/",
      local_id: "Llama-2-70b-chat-hf-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-70b-chat-hf/Llama-2-70b-chat-hf-q4f16_1-ctx4k_cs1k-webgpu.wasm",
      vram_required_MB: 43729.05,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    },
    // RedPajama
    {
      model_url: "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f16_1-MLC/resolve/main/",
      local_id: "RedPajama-INCITE-Chat-3B-v1-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1/RedPajama-INCITE-Chat-3B-v1-q4f16_1-ctx2k-webgpu.wasm",
      vram_required_MB: 2972.09,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    },
    {
      model_url: "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f32_1-MLC/resolve/main/",
      local_id: "RedPajama-INCITE-Chat-3B-v1-q4f32_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1/RedPajama-INCITE-Chat-3B-v1-q4f32_1-ctx2k-webgpu.wasm",
      vram_required_MB: 3928.09,
      low_resource_required: !1
    },
    {
      model_url: "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f16_1-MLC/resolve/main/",
      local_id: "RedPajama-INCITE-Chat-3B-v1-q4f16_1-1k",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1/RedPajama-INCITE-Chat-3B-v1-q4f16_1-ctx1k-webgpu.wasm",
      vram_required_MB: 2041.09,
      low_resource_required: !0,
      required_features: ["shader-f16"]
    },
    {
      model_url: "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f32_1-MLC/resolve/main/",
      local_id: "RedPajama-INCITE-Chat-3B-v1-q4f32_1-1k",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1/RedPajama-INCITE-Chat-3B-v1-q4f32_1-ctx1k-webgpu.wasm",
      vram_required_MB: 2558.09,
      low_resource_required: !0
    },
    // Mistral variants
    {
      model_url: "https://huggingface.co/mlc-ai/WizardMath-7B-V1.1-q4f16_1-MLC/resolve/main/",
      local_id: "WizardMath-7B-V1.1-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.2/Mistral-7B-Instruct-v0.2-q4f16_1-sw4k_cs1k-webgpu.wasm",
      vram_required_MB: 6079.02,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    },
    {
      model_url: "https://huggingface.co/mlc-ai/Mistral-7B-Instruct-v0.2-q4f16_1-MLC/resolve/main/",
      local_id: "Mistral-7B-Instruct-v0.2-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.2/Mistral-7B-Instruct-v0.2-q4f16_1-sw4k_cs1k-webgpu.wasm",
      vram_required_MB: 6079.02,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    },
    {
      model_url: "https://huggingface.co/mlc-ai/OpenHermes-2.5-Mistral-7B-q4f16_1-MLC/resolve/main/",
      local_id: "OpenHermes-2.5-Mistral-7B-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.2/Mistral-7B-Instruct-v0.2-q4f16_1-sw4k_cs1k-webgpu.wasm",
      vram_required_MB: 6079.02,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    },
    {
      model_url: "https://huggingface.co/mlc-ai/NeuralHermes-2.5-Mistral-7B-q4f16_1-MLC/resolve/main/",
      local_id: "NeuralHermes-2.5-Mistral-7B-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.2/Mistral-7B-Instruct-v0.2-q4f16_1-sw4k_cs1k-webgpu.wasm",
      vram_required_MB: 6079.02,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    },
    // TinyLlama
    {
      model_url: "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q0f16-MLC/resolve/main/",
      local_id: "TinyLlama-1.1B-Chat-v0.4-q0f16",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/TinyLlama-1.1B-Chat-v0.4/TinyLlama-1.1B-Chat-v0.4-q0f16-ctx2k-webgpu.wasm",
      vram_required_MB: 5063.52,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    },
    {
      model_url: "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q0f32-MLC/resolve/main/",
      local_id: "TinyLlama-1.1B-Chat-v0.4-q0f32",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/TinyLlama-1.1B-Chat-v0.4/TinyLlama-1.1B-Chat-v0.4-q0f32-ctx2k-webgpu.wasm",
      vram_required_MB: 5394.53,
      low_resource_required: !1
    },
    {
      model_url: "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC/resolve/main/",
      local_id: "TinyLlama-1.1B-Chat-v0.4-q4f16_1-1k",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/TinyLlama-1.1B-Chat-v0.4/TinyLlama-1.1B-Chat-v0.4-q4f16_1-ctx1k-webgpu.wasm",
      vram_required_MB: 899.11,
      low_resource_required: !0,
      required_features: ["shader-f16"]
    },
    {
      model_url: "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q4f32_1-MLC/resolve/main/",
      local_id: "TinyLlama-1.1B-Chat-v0.4-q4f32_1-1k",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/TinyLlama-1.1B-Chat-v0.4/TinyLlama-1.1B-Chat-v0.4-q4f32_1-ctx1k-webgpu.wasm",
      vram_required_MB: 992.11,
      low_resource_required: !0
    }
  ],
  use_web_worker: !0
}, Lt = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    E(this, i);
    var n, a;
    return t = K(this, i, [e]), t._isModelLoaded = !1, t._isModelLoading = !1, t._loadOnFirstMessage = !1, t._webModel = {}, t.permittedErrorPrefixes = [i.MULTIPLE_MODELS_ERROR, i.WEB_LLM_NOT_FOUND_ERROR, i.GENERIC_ERROR], t._conversationHistory = [], G(e.webModel) == "object" && (t._webModel = e.webModel), (n = t._webModel.load) != null && n.clearCache && i.clearAllCache(), t.findModelInWindow(e), t.canSendMessage = t.canSubmit.bind(Ot(t)), t._chatEl = (a = e.shadowRoot) == null ? void 0 : a.children[0], e.history && i.setUpHistory(t._conversationHistory, e.history), t;
  }
  return J(i, r), _(i, [{
    key: "setUpMessages",
    value: function(t) {
      var n = this;
      this._messages = t, this._removeIntro = function() {
        t.removeIntroductoryMessage(), n._removeIntro = void 0;
      };
    }
  }, {
    key: "findModelInWindow",
    value: function(t) {
      var n = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, s;
      window.webLLM ? this.configureInit(this.shouldAddIntroMessage(t.introMessage)) : a > i.MODULE_SEARCH_LIMIT_S ? ((s = this._messages) == null || s.addNewErrorMessage("service", i.WEB_LLM_NOT_FOUND_ERROR), console.error("The deep-chat-web-llm module has not been attached to the window object. Please see the following guide:"), console.error("https://deepchat.dev/examples/externalModules")) : setTimeout(function() {
        return n.findModelInWindow(t, a + 1);
      }, 1e3);
    }
  }, {
    key: "shouldAddIntroMessage",
    value: function(t) {
      var n;
      return !t && this._webModel && ((n = this._webModel.introMessage) == null ? void 0 : n.displayed) !== !1;
    }
  }, {
    key: "scrollToTop",
    value: function(t) {
      var n = this, a;
      ((a = this._webModel.introMessage) == null ? void 0 : a.autoScroll) !== !1 && setTimeout(function() {
        var s, o;
        (s = n._messages) != null && s.elementRef && Ue.scrollToTop((o = n._messages) == null ? void 0 : o.elementRef);
      }, t);
    }
    // prettier-ignore
  }, {
    key: "getIntroMessage",
    value: function(t) {
      if (!(!this.shouldAddIntroMessage(t) || !this._chatEl)) {
        var n = Ia.setUpInitial(this.init.bind(this), this._webModel.introMessage, this._chatEl, !!this._webModel.worker);
        return this.scrollToTop(1), {
          role: W.AI_ROLE,
          html: n,
          sendUpdate: !1
        };
      }
    }
  }, {
    key: "configureInit",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s;
        return m().wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              if (s = this._webModel.load, !s) {
                l.next = 8;
                break;
              }
              if (!s.onInit) {
                l.next = 5;
                break;
              }
              return this.init(), l.abrupt("return");
            case 5:
              if (!s.onMessage) {
                l.next = 8;
                break;
              }
              return this._loadOnFirstMessage = !0, l.abrupt("return");
            case 8:
              a || this.init();
            case 9:
            case "end":
              return l.stop();
          }
        }, n, this);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "init",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s, o;
        return m().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              if ((s = this._messages) == null || s.removeError(), o = this.attemptToCreateChat(), u.t0 = o, !u.t0) {
                u.next = 6;
                break;
              }
              return u.next = 6, this.loadModel(o, a);
            case 6:
            case "end":
              return u.stop();
          }
        }, n, this);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "attemptToCreateChat",
    value: function() {
      var t;
      if (i.chat) {
        (t = this._messages) == null || t.addNewErrorMessage("service", i.MULTIPLE_MODELS_ERROR), console.error(i.MULTIPLE_MODELS_ERROR);
        return;
      }
      if (!(this._isModelLoaded || this._isModelLoading)) {
        var n = this._webModel.worker;
        return La.use_web_worker && n ? new window.webLLM.ChatWorkerClient(n) : new window.webLLM.ChatModule();
      }
    }
  }, {
    key: "getConfig",
    value: function() {
      var t, n = i.DEFAULT_MODEL;
      this._webModel.model && (n = this._webModel.model);
      var a = JSON.parse(JSON.stringify(La));
      if (this._webModel.urls) {
        var s = a.model_list.find(function(o) {
          return o.local_id = n;
        });
        s && (this._webModel.urls.model && (s.model_url = this._webModel.urls.model), this._webModel.urls.wasm && (s.model_lib_url = this._webModel.urls.wasm));
      }
      return (t = this._webModel.load) != null && t.skipCache && (a.use_cache = !1), {
        model: n,
        appConfig: a
      };
    }
    // prettier-ignore
  }, {
    key: "loadModel",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s) {
        var o = this, l, u, c, d, p, h, g, k, S, T, A, D, N, x, Y;
        return m().wrap(function(ee) {
          for (; ; ) switch (ee.prev = ee.next) {
            case 0:
              return this.scrollToTop(), i.chat = a, this._isModelLoading = !0, k = ((l = this._webModel.introMessage) == null ? void 0 : l.displayed) === !1, S = function(fe) {
                var Ce;
                (Ce = o._messages) == null || Ce.addNewMessage({
                  html: "<div>".concat(fe.text, "</div>"),
                  overwrite: !0,
                  sendUpdate: !1
                }), k && (setTimeout(function() {
                  var Q;
                  return Ue.scrollToBottom((Q = o._messages) == null ? void 0 : Q.elementRef);
                }), k = !1);
              }, i.chat.setInitProgressCallback(S), ee.prev = 4, A = this.getConfig(), D = A.model, N = A.appConfig, x = {}, this._webModel.instruction && (x.conv_config = {
                system: this._webModel.instruction
              }), this._conversationHistory.length > 0 && (x.conversation_history = this._conversationHistory), ee.next = 10, i.chat.reload(D, x, N, s);
            case 10:
              T = ee.sent, ee.next = 16;
              break;
            case 13:
              return ee.prev = 13, ee.t0 = ee.catch(4), ee.abrupt("return", this.unloadChat(ee.t0));
            case 16:
              (c = (u = this.deepChat)._validationHandler) == null || c.call(u), (d = this._webModel.introMessage) != null && d.removeAfterLoad ? this._webModel.introMessage.displayed === !1 ? (h = this._messages) == null || h.removeLastMessage() : (g = this._removeIntro) == null || g.call(this) : (Y = Ia.setUpAfterLoad(T, this._webModel.introMessage, this._chatEl, !!this._webModel.worker), (p = this._messages) == null || p.addNewMessage({
                html: Y,
                overwrite: !0,
                sendUpdate: !1
              })), this._isModelLoaded = !0, this._isModelLoading = !1;
            case 18:
            case "end":
              return ee.stop();
          }
        }, n, this, [[4, 13]]);
      }));
      function t(n, a) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "unloadChat",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s;
        return m().wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              if ((s = this._messages) == null || s.addNewErrorMessage("service", i.GENERIC_ERROR), console.error(a), this._isModelLoaded = !1, this._isModelLoading = !1, l.t0 = i.chat, !l.t0) {
                l.next = 9;
                break;
              }
              return l.next = 8, i.chat.unload();
            case 8:
              i.chat = void 0;
            case 9:
            case "end":
              return l.stop();
          }
        }, n, this);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "immediateResp",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s, o) {
        var l, u;
        return m().wrap(function(d) {
          for (; ; ) switch (d.prev = d.next) {
            case 0:
              return d.next = 2, o.generate(s, void 0, 0);
            case 2:
              return d.t0 = d.sent, l = {
                text: d.t0
              }, d.next = 6, i.processResponse(this.deepChat, a, l);
            case 6:
              u = d.sent, u && a.addNewMessage(u), this.completionsHandlers.onFinish();
            case 8:
            case "end":
              return d.stop();
          }
        }, n, this);
      }));
      function t(n, a, s) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "streamResp",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s, o) {
        var l = this, u;
        return m().wrap(function(d) {
          for (; ; ) switch (d.prev = d.next) {
            case 0:
              return this.streamHandlers.abortStream.abort = function() {
                o.interruptGenerate();
              }, this.streamHandlers.onOpen(), u = new tt(a), d.next = 4, o.generate(s, /* @__PURE__ */ function() {
                var p = C(/* @__PURE__ */ m().mark(function h(g, k) {
                  var S;
                  return m().wrap(function(A) {
                    for (; ; ) switch (A.prev = A.next) {
                      case 0:
                        return A.next = 2, i.processResponse(l.deepChat, a, {
                          text: k
                        });
                      case 2:
                        S = A.sent, S && u.upsertStreamedMessage({
                          text: S.text,
                          overwrite: !0
                        });
                      case 4:
                      case "end":
                        return A.stop();
                    }
                  }, h);
                }));
                return function(h, g) {
                  return p.apply(this, arguments);
                };
              }());
            case 4:
              u.finaliseStreamedMessage(), this.streamHandlers.onClose();
            case 6:
            case "end":
              return d.stop();
          }
        }, n, this);
      }));
      function t(n, a, s) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "generateRespByType",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s, o, l) {
        var u;
        return m().wrap(function(d) {
          for (; ; ) switch (d.prev = d.next) {
            case 0:
              if (d.prev = 0, !o) {
                d.next = 6;
                break;
              }
              return d.next = 4, this.streamResp(a, s, l);
            case 4:
              d.next = 8;
              break;
            case 6:
              return d.next = 8, this.immediateResp(a, s, l);
            case 8:
              d.next = 13;
              break;
            case 10:
              d.prev = 10, d.t0 = d.catch(0), (u = this._messages) == null || u.addNewErrorMessage("service"), console.log(d.t0);
            case 13:
            case "end":
              return d.stop();
          }
        }, n, this, [[0, 10]]);
      }));
      function t(n, a, s, o) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "generateResp",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s, o) {
        var l, u, c, d, p, h, g;
        return m().wrap(function(S) {
          for (; ; ) switch (S.prev = S.next) {
            case 0:
              return l = s[s.length - 1].text, S.next = 3, ie.processRequestInterceptor(this.deepChat, {
                body: {
                  text: l
                }
              });
            case 3:
              u = S.sent, c = u.body, d = u.error, p = !!this.stream;
              try {
                d ? (ie.displayError(a, new Error(d)), (p ? this.streamHandlers.onClose : this.completionsHandlers.onFinish)()) : !c || !c.text ? (h = _e.INVALID_MODEL_REQUEST({
                  body: c
                }, !1), console.error(h), g = p ? this.streamHandlers.onClose : this.completionsHandlers.onFinish, ie.onInterceptorError(a, h, g)) : this.generateRespByType(a, c.text, !!this.stream, o);
              } catch (T) {
                this.unloadChat(T);
              }
            case 8:
            case "end":
              return S.stop();
          }
        }, n, this);
      }));
      function t(n, a, s) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s) {
        var o, l;
        return m().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              if (this._isModelLoaded) {
                c.next = 7;
                break;
              }
              if (!this._loadOnFirstMessage) {
                c.next = 6;
                break;
              }
              return c.next = 4, this.init();
            case 4:
              c.next = 7;
              break;
            case 6:
              return c.abrupt("return");
            case 7:
              !i.chat || this._isModelLoading || ((o = this._webModel.introMessage) != null && o.removeAfterMessage && ((l = this._removeIntro) == null || l.call(this)), a.addLoadingMessage(), this.generateResp(a, s, i.chat));
            case 8:
            case "end":
              return c.stop();
          }
        }, n, this);
      }));
      function t(n, a) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "canSubmit",
    value: function(t) {
      return !(t != null && t.trim()) || this._isModelLoading ? !1 : this._loadOnFirstMessage ? !0 : !!this._isModelLoaded;
    }
  }, {
    key: "isWebModel",
    value: function() {
      return !0;
    }
  }], [{
    key: "setUpHistory",
    value: function(t, n) {
      n.forEach(function(a, s) {
        if (a.role === W.USER_ROLE && a.text) {
          var o = n[s + 1];
          o != null && o.text && o.role !== W.USER_ROLE && t.push([a.text, o.text]);
        }
      });
    }
  }, {
    key: "processResponse",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s, o) {
        var l, u, c;
        return m().wrap(function(p) {
          for (; ; ) switch (p.prev = p.next) {
            case 0:
              return p.next = 2, (l = a.responseInterceptor) == null ? void 0 : l.call(a, o);
            case 2:
              if (p.t0 = p.sent, p.t0) {
                p.next = 5;
                break;
              }
              p.t0 = o;
            case 5:
              if (u = p.t0, !u.error) {
                p.next = 11;
                break;
              }
              return ie.displayError(s, new Error(u.error)), p.abrupt("return");
            case 11:
              if (!(!u || !u.text)) {
                p.next = 15;
                break;
              }
              return c = _e.INVALID_MODEL_RESPONSE(o, !!a.responseInterceptor, u), ie.displayError(s, new Error(c)), p.abrupt("return");
            case 15:
              return p.abrupt("return", u);
            case 16:
            case "end":
              return p.stop();
          }
        }, n);
      }));
      function t(n, a, s) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "clearAllCache",
    value: function() {
      i.clearCache("webllm/model"), i.clearCache("webllm/wasm");
    }
  }, {
    key: "clearCache",
    value: function(t) {
      caches.open(t).then(function(n) {
        n.keys().then(function(a) {
          a.forEach(function(s) {
            n.delete(s);
          });
        });
      });
    }
  }]);
}(xn);
Lt.GENERIC_ERROR = "Error, please check the [troubleshooting](https://deepchat.dev/docs/webModel#troubleshooting) section of documentation for help.", Lt.MULTIPLE_MODELS_ERROR = "Cannot run multiple web models", Lt.WEB_LLM_NOT_FOUND_ERROR = "WebLLM module not found", Lt.DEFAULT_MODEL = "Llama-2-7b-chat-hf-q4f32_1", Lt.MODULE_SEARCH_LIMIT_S = 5;
var zr = Lt, Oa = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "buildHeaders",
    value: function(e) {
      return {
        Authorization: "Bearer ".concat(e),
        "Content-Type": "application/json"
        // bigcode/santacoder expects this so adding just-in-case
      };
    }
    // prettier-ignore
  }, {
    key: "handleVerificationResult",
    value: function(e, t, n, a) {
      var s = e;
      Array.isArray(s.error) && s.error[0] === "Error in `parameters`: field required" ? n(t) : a(_e.INVALID_KEY);
    }
  }, {
    key: "buildKeyVerificationDetails",
    value: function() {
      return {
        url: "https://api-inference.huggingface.co/models/gpt2",
        method: "POST",
        handleVerificationResult: r.handleVerificationResult
      };
    }
  }]);
}(), Ni = /* @__PURE__ */ function(r) {
  function i(e, t, n, a, s, o) {
    var l;
    return E(this, i), l = K(this, i, [e, Oa.buildKeyVerificationDetails(), Oa.buildHeaders, s, o]), l.insertKeyPlaceholderText = "Hugging Face Token", l.keyHelpUrl = "https://huggingface.co/settings/tokens", l.introPanelMarkUp = `
    <div style="width: 100%; text-align: center; margin-left: -10px"><b>Hugging Face</b></div>
    <p>First message may take an extented amount of time to complete as the model needs to be initialized.</p>`, l.permittedErrorPrefixes = ["Authorization header"], l.url = "".concat(i.URL_PREFIX).concat(n), l.textInputPlaceholderText = t, G(a) == "object" && (a.model && (l.url = "".concat(i.URL_PREFIX).concat(a.model)), a.options && (l.rawBody.options = a.options), a.parameters && (l.rawBody.parameters = a.parameters)), l;
  }
  return J(i, r), _(i, [{
    key: "preprocessBody",
    value: function(t, n, a) {
      var s, o = JSON.parse(JSON.stringify(t)), l = n[n.length - 1].text;
      if (l) return (s = o.options) !== null && s !== void 0 || (o.options = {}), o.options.wait_for_model = !0, ce({
        inputs: l
      }, o);
    }
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s, o) {
        var l;
        return m().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              if (this.connectSettings) {
                c.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              l = this.preprocessBody(this.rawBody, s, o), ye.request(this, l, a);
            case 4:
            case "end":
              return c.stop();
          }
        }, n, this);
      }));
      function t(n, a, s) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }]);
}(Ie);
Ni.URL_PREFIX = "https://api-inference.huggingface.co/models/";
var wt = Ni, $r = /* @__PURE__ */ function(r) {
  function i(e, t, n, a, s, o) {
    var l;
    return E(this, i), l = K(this, i, [e, t, n, a, s, o]), l.isTextInputDisabled = !0, l.canSendMessage = i.canSendFile, l;
  }
  return J(i, r), _(i, [{
    key: "preprocessBody",
    value: function(t, n, a) {
      return a[0];
    }
    // prettier-ignore
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s, o) {
        return m().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              if (this.connectSettings) {
                u.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              if (o != null && o[0]) {
                u.next = 4;
                break;
              }
              throw new Error("No file was added");
            case 4:
              ye.poll(this, o[0], a, !1);
            case 5:
            case "end":
              return u.stop();
          }
        }, n, this);
      }));
      function t(n, a, s) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }], [{
    key: "canSendFile",
    value: function(t, n) {
      return !!(n != null && n[0]);
    }
  }]);
}(wt), Il = /* @__PURE__ */ function(r) {
  function i(e) {
    E(this, i);
    var t, n, a, s = (n = (t = e.directConnection) == null ? void 0 : t.huggingFace) == null ? void 0 : n.audioClassification, o = (a = e.directConnection) == null ? void 0 : a.huggingFace;
    return K(this, i, [e, "Attach an audio file", "ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition", s, o, {
      audio: {}
    }]);
  }
  return J(i, r), _(i, [{
    key: "extractPollResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s;
        return m().wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              if (!a.estimated_time) {
                l.next = 2;
                break;
              }
              return l.abrupt("return", {
                timeoutMS: (a.estimated_time + 1) * 1e3
              });
            case 2:
              if (!a.error) {
                l.next = 4;
                break;
              }
              throw a.error;
            case 4:
              return l.abrupt("return", {
                text: ((s = a[0]) == null ? void 0 : s.label) || ""
              });
            case 5:
            case "end":
              return l.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }]);
}($r), Ll = /* @__PURE__ */ function(r) {
  function i(e) {
    E(this, i);
    var t, n, a, s = (n = (t = e.directConnection) == null ? void 0 : t.huggingFace) == null ? void 0 : n.imageClassification, o = (a = e.directConnection) == null ? void 0 : a.huggingFace;
    return K(this, i, [e, "Attach an image file", "google/vit-base-patch16-224", s, o, {
      images: {}
    }]);
  }
  return J(i, r), _(i, [{
    key: "extractPollResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s;
        return m().wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              if (!a.estimated_time) {
                l.next = 2;
                break;
              }
              return l.abrupt("return", {
                timeoutMS: (a.estimated_time + 1) * 1e3
              });
            case 2:
              if (!a.error) {
                l.next = 4;
                break;
              }
              throw a.error;
            case 4:
              return l.abrupt("return", {
                text: ((s = a[0]) == null ? void 0 : s.label) || ""
              });
            case 5:
            case "end":
              return l.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }]);
}($r), Qt = "data:image/png;base64,", rt = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "buildHeaders",
    value: function(e) {
      return {
        Authorization: "Bearer ".concat(e),
        "Content-Type": "application/json"
      };
    }
    // prettier-ignore
  }, {
    key: "handleVerificationResult",
    value: function(e, t, n, a) {
      e.message ? a(_e.INVALID_KEY) : n(t);
    }
  }, {
    key: "buildKeyVerificationDetails",
    value: function() {
      return {
        url: "https://api.stability.ai/v1/engines/list",
        method: "GET",
        handleVerificationResult: r.handleVerificationResult
      };
    }
  }]);
}(), On = /* @__PURE__ */ function(r) {
  function i(e, t, n, a, s) {
    var o;
    return E(this, i), o = K(this, i, [e, t, n, a, s]), o.insertKeyPlaceholderText = "Stability AI API Key", o.keyHelpUrl = "https://platform.stability.ai/docs/getting-started/authentication", o.permittedErrorPrefixes = ["Incorrect", "invalid_"], o;
  }
  return J(i, r), _(i);
}(Ie), Ol = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    E(this, i);
    var n, a = JSON.parse(JSON.stringify(e.directConnection)), s = a == null ? void 0 : a.stabilityAI, o = {
      images: {
        files: {
          acceptedFormats: ".png",
          maxNumberOfFiles: 1
        }
      }
    };
    t = K(this, i, [e, rt.buildKeyVerificationDetails(), rt.buildHeaders, s, o]), t.url = "https://api.stability.ai/v1/generation/esrgan-v1-x2plus/image-to-image/upscale", t.textInputPlaceholderText = "Describe image changes", t.introPanelMarkUp = `
    <div style="width: 100%; text-align: center; margin-left: -10px"><b>Stability AI</b></div>
    <div style="width: 100%; text-align: center; margin-left: -10px; margin-top: 5px"><b>Image to Image Upscale</b></div>
    <p>Upload an image to generate a new one with higher resolution.</p>
    <p>Click <a href="https://platform.stability.ai/">here</a> for more info.</p>`;
    var l = (n = a == null ? void 0 : a.stabilityAI) == null ? void 0 : n.imageToImageUpscale;
    return G(l) == "object" && (l.engine_id && (t.url = "https://api.stability.ai/v1/generation/".concat(l.engine_id, "/image-to-image/upscale")), i.cleanConfig(l), Object.assign(t.rawBody, l)), t.canSendMessage = i.canSendFileMessage, t;
  }
  return J(i, r), _(i, [{
    key: "createFormDataBody",
    value: function(t, n) {
      var a = new FormData();
      return a.append("image", n), Object.keys(t).forEach(function(s) {
        a.append(s, String(t[s]));
      }), a;
    }
    // prettier-ignore
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s, o) {
        var l;
        return m().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              if (this.connectSettings) {
                c.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              if (o) {
                c.next = 4;
                break;
              }
              throw new Error("Image was not found");
            case 4:
              l = this.createFormDataBody(this.rawBody, o[0]), ie.tempRemoveContentHeader(this.connectSettings, ye.request.bind(this, this, l, a), !1);
            case 6:
            case "end":
              return c.stop();
          }
        }, n, this);
      }));
      function t(n, a, s) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        return m().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              if (!a.message) {
                o.next = 2;
                break;
              }
              throw a.message;
            case 2:
              return o.abrupt("return", {
                files: a.artifacts.map(function(l) {
                  return {
                    src: "".concat(Qt).concat(l.base64),
                    type: "image"
                  };
                })
              });
            case 3:
            case "end":
              return o.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }], [{
    key: "cleanConfig",
    value: function(t) {
      delete t.engine_id;
    }
  }, {
    key: "canSendFileMessage",
    value: function(t, n) {
      return !!(n != null && n[0]);
    }
  }]);
}(On), Pl = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    E(this, i);
    var n, a = JSON.parse(JSON.stringify(e.directConnection)), s = a == null ? void 0 : a.stabilityAI, o = {
      images: {
        files: {
          acceptedFormats: ".png",
          maxNumberOfFiles: 2
        }
      }
    };
    t = K(this, i, [e, rt.buildKeyVerificationDetails(), rt.buildHeaders, s, o]), t.url = "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/image-to-image/masking", t._maskSource = "MASK_IMAGE_WHITE", t.textInputPlaceholderText = "Describe image changes", t.introPanelMarkUp = `
    <div style="width: 100%; text-align: center; margin-left: -10px"><b>Stability AI</b></div>
    <div style="width: 100%; text-align: center; margin-left: -10px; margin-top: 5px"><b>Image to Image Masking</b></div>
    <p>Upload an image, its mask image to create a new one based on the changes you have described for the mask area.</p>
    <p>Click <a href="https://platform.stability.ai/">here</a> for more info.</p>`;
    var l = (n = a == null ? void 0 : a.stabilityAI) == null ? void 0 : n.imageToImageMasking;
    return G(l) == "object" && (l.engine_id && (t.url = "https://api.stability.ai/v1/generation/".concat(l.engine_id, "/image-to-image/masking")), l.weight !== void 0 && l.weight !== null && (t._imageWeight = l.weight), l.mask_source !== void 0 && l.mask_source !== null && (t._maskSource = l.mask_source), i.cleanConfig(l), Object.assign(t.rawBody, l)), t.canSendMessage = i.canSendFileTextMessage, t;
  }
  return J(i, r), _(i, [{
    key: "createFormDataBody",
    value: function(t, n, a, s) {
      var o = new FormData();
      return o.append("init_image", n), o.append("mask_source", String(this._maskSource)), o.append("mask_image", a), s && s !== "" && o.append("text_prompts[0][text]", s), this._imageWeight !== void 0 && this._imageWeight !== null && o.append("text_prompts[0][weight]", String(this._imageWeight)), Object.keys(t).forEach(function(l) {
        o.append(l, String(t[l]));
      }), o.get("weight") === void 0 && o.append("weight", String(1)), o;
    }
    // prettier-ignore
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s, o) {
        var l, u, c, d;
        return m().wrap(function(h) {
          for (; ; ) switch (h.prev = h.next) {
            case 0:
              if (this.connectSettings) {
                h.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              if (!(!o || !o[0] || !o[1])) {
                h.next = 4;
                break;
              }
              throw new Error("Image was not found");
            case 4:
              c = (u = (l = s[s.length - 1]) == null ? void 0 : l.text) == null ? void 0 : u.trim(), d = this.createFormDataBody(this.rawBody, o[0], o[1], c), ie.tempRemoveContentHeader(this.connectSettings, ye.request.bind(this, this, d, a), !1);
            case 6:
            case "end":
              return h.stop();
          }
        }, n, this);
      }));
      function t(n, a, s) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        return m().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              if (!a.message) {
                o.next = 2;
                break;
              }
              throw a.message;
            case 2:
              return o.abrupt("return", {
                files: a.artifacts.map(function(l) {
                  return {
                    src: "".concat(Qt).concat(l.base64),
                    type: "image"
                  };
                })
              });
            case 3:
            case "end":
              return o.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }], [{
    key: "cleanConfig",
    value: function(t) {
      delete t.engine_id, delete t.weight;
    }
  }, {
    key: "canSendFileTextMessage",
    value: function(t, n) {
      return !!(n != null && n[0]) && !!(t && t.trim() !== "");
    }
  }]);
}(On), Nl = /* @__PURE__ */ function(r) {
  function i(e) {
    E(this, i);
    var t, n, a, s = (n = (t = e.directConnection) == null ? void 0 : t.huggingFace) == null ? void 0 : n.audioSpeechRecognition, o = (a = e.directConnection) == null ? void 0 : a.huggingFace;
    return K(this, i, [e, "Attach an audio file", "facebook/wav2vec2-large-960h-lv60-self", s, o, {
      audio: {}
    }]);
  }
  return J(i, r), _(i, [{
    key: "extractPollResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        return m().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              if (!a.estimated_time) {
                o.next = 2;
                break;
              }
              return o.abrupt("return", {
                timeoutMS: (a.estimated_time + 1) * 1e3
              });
            case 2:
              if (!a.error) {
                o.next = 4;
                break;
              }
              throw a.error;
            case 4:
              return o.abrupt("return", {
                text: a.text || ""
              });
            case 5:
            case "end":
              return o.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }]);
}($r), Dl = /* @__PURE__ */ function(r) {
  function i(e) {
    E(this, i);
    var t, n, a, s = (n = (t = e.directConnection) == null ? void 0 : t.huggingFace) == null ? void 0 : n.textGeneration, o = (a = e.directConnection) == null ? void 0 : a.huggingFace;
    return K(this, i, [e, "Once upon a time", "gpt2", s, o]);
  }
  return J(i, r), _(i, [{
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s;
        return m().wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              if (!a.error) {
                l.next = 2;
                break;
              }
              throw a.error;
            case 2:
              return l.abrupt("return", {
                text: ((s = a[0]) == null ? void 0 : s.generated_text) || ""
              });
            case 3:
            case "end":
              return l.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }]);
}(wt), Bl = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    E(this, i);
    var n, a, s, o = (a = (n = e.directConnection) == null ? void 0 : n.huggingFace) == null ? void 0 : a.questionAnswer, l = (s = e.directConnection) == null ? void 0 : s.huggingFace;
    return t = K(this, i, [e, "Ask a question", "bert-large-uncased-whole-word-masking-finetuned-squad", o, l]), t.permittedErrorPrefixes = ["Authorization header", "Error in"], t.context = o.context, t;
  }
  return J(i, r), _(i, [{
    key: "preprocessBody",
    value: function(t, n) {
      var a = n[n.length - 1].text;
      if (a) return {
        inputs: {
          question: a,
          context: this.context,
          options: {
            wait_for_model: !0
          }
        }
      };
    }
  }, {
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        return m().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              if (!a.error) {
                o.next = 2;
                break;
              }
              throw a.error;
            case 2:
              return o.abrupt("return", {
                text: a.answer || ""
              });
            case 3:
            case "end":
              return o.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }]);
}(wt), Fl = /* @__PURE__ */ function(r) {
  function i(e) {
    E(this, i);
    var t, n, a, s = (n = (t = e.directConnection) == null ? void 0 : t.huggingFace) == null ? void 0 : n.summarization, o = (a = e.directConnection) == null ? void 0 : a.huggingFace;
    return K(this, i, [e, "Insert text to summarize", "facebook/bart-large-cnn", s, o]);
  }
  return J(i, r), _(i, [{
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s;
        return m().wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              if (!a.error) {
                l.next = 2;
                break;
              }
              throw a.error;
            case 2:
              return l.abrupt("return", {
                text: ((s = a[0]) == null ? void 0 : s.summary_text) || ""
              });
            case 3:
            case "end":
              return l.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }]);
}(wt), jl = /* @__PURE__ */ function(r) {
  function i(e) {
    var t, n;
    E(this, i);
    var a, s, o, l = (s = (a = e.directConnection) == null ? void 0 : a.huggingFace) == null ? void 0 : s.conversation, u = (o = e.directConnection) == null ? void 0 : o.huggingFace;
    return n = K(this, i, [e, "Ask me anything!", "facebook/blenderbot-400M-distill", l, u]), (t = n.maxMessages) !== null && t !== void 0 || (n.maxMessages = -1), n;
  }
  return J(i, r), _(i, [{
    key: "processMessages",
    value: function(t) {
      var n = t.filter(function(u) {
        return u.text;
      }), a = n[n.length - 1].text, s = n.slice(0, n.length - 1);
      if (a) {
        var o = s.filter(function(u) {
          return u.role === "user";
        }).map(function(u) {
          return u.text;
        }), l = s.filter(function(u) {
          return u.role === "ai";
        }).map(function(u) {
          return u.text;
        });
        return {
          past_user_inputs: o,
          generated_responses: l,
          mostRecentMessageText: a
        };
      }
    }
    // prettier-ignore
  }, {
    key: "preprocessBody",
    value: function(t, n) {
      var a, s = JSON.parse(JSON.stringify(t)), o = this.processMessages(n);
      if (o) return (a = s.options) !== null && a !== void 0 || (s.options = {}), s.options.wait_for_model = !0, ce({
        inputs: {
          past_user_inputs: o.past_user_inputs,
          generated_responses: o.generated_responses,
          text: o.mostRecentMessageText
        }
      }, s);
    }
  }, {
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        return m().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              if (!a.error) {
                o.next = 2;
                break;
              }
              throw a.error;
            case 2:
              return o.abrupt("return", {
                text: a.generated_text || ""
              });
            case 3:
            case "end":
              return o.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }]);
}(wt), Ul = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    E(this, i);
    var n, a = JSON.parse(JSON.stringify(e.directConnection)), s = a.stabilityAI, o = {
      images: {
        files: {
          acceptedFormats: ".png",
          maxNumberOfFiles: 1
        }
      }
    };
    t = K(this, i, [e, rt.buildKeyVerificationDetails(), rt.buildHeaders, s, o]), t.url = "https://api.stability.ai/v1/generation/stable-diffusion-v1-6/image-to-image", t.textInputPlaceholderText = "Describe image changes", t.introPanelMarkUp = `
    <div style="width: 100%; text-align: center; margin-left: -10px"><b>Stability AI: Image to Image</b></div>
    <p>Upload an image to create a new one with the changes you have described.</p>
    <p>Click <a href="https://platform.stability.ai/">here</a> for more info.</p>`;
    var l = (n = a.stabilityAI) == null ? void 0 : n.imageToImage;
    return G(l) == "object" && (l.engine_id && (t.url = "https://api.stability.ai/v1/generation/".concat(l.engine_id, "/text-to-image")), l.weight !== void 0 && l.weight !== null && (t._imageWeight = l.weight), i.cleanConfig(l), Object.assign(t.rawBody, l)), t.canSendMessage = i.canSendFileTextMessage, t;
  }
  return J(i, r), _(i, [{
    key: "createFormDataBody",
    value: function(t, n, a) {
      var s = new FormData();
      return s.append("init_image", n), a && a !== "" && s.append("text_prompts[0][text]", a), this._imageWeight !== void 0 && this._imageWeight !== null && s.append("text_prompts[0][weight]", String(this._imageWeight)), Object.keys(t).forEach(function(o) {
        s.append(o, String(t[o]));
      }), s.get("weight") === void 0 && s.append("weight", String(1)), s;
    }
    // prettier-ignore
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s, o) {
        var l, u, c, d;
        return m().wrap(function(h) {
          for (; ; ) switch (h.prev = h.next) {
            case 0:
              if (this.connectSettings) {
                h.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              if (o) {
                h.next = 4;
                break;
              }
              throw new Error("Image was not found");
            case 4:
              c = (u = (l = s[s.length - 1]) == null ? void 0 : l.text) == null ? void 0 : u.trim(), d = this.createFormDataBody(this.rawBody, o[0], c), ie.tempRemoveContentHeader(this.connectSettings, ye.request.bind(this, this, d, a), !1);
            case 6:
            case "end":
              return h.stop();
          }
        }, n, this);
      }));
      function t(n, a, s) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        return m().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              if (!a.message) {
                o.next = 2;
                break;
              }
              throw a.message;
            case 2:
              return o.abrupt("return", {
                files: a.artifacts.map(function(l) {
                  return {
                    src: "".concat(Qt).concat(l.base64),
                    type: "image"
                  };
                })
              });
            case 3:
            case "end":
              return o.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }], [{
    key: "cleanConfig",
    value: function(t) {
      delete t.engine_id, delete t.weight;
    }
  }, {
    key: "canSendFileTextMessage",
    value: function(t, n) {
      return !!(n != null && n[0]) && !!(t && t.trim() !== "");
    }
  }]);
}(On), Hl = /* @__PURE__ */ function(r) {
  function i(e) {
    E(this, i);
    var t, n, a, s = (n = (t = e.directConnection) == null ? void 0 : t.huggingFace) == null ? void 0 : n.translation, o = (a = e.directConnection) == null ? void 0 : a.huggingFace;
    return K(this, i, [e, "Insert text to translate", "Helsinki-NLP/opus-tatoeba-en-ja", s, o]);
  }
  return J(i, r), _(i, [{
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s;
        return m().wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              if (!a.error) {
                l.next = 2;
                break;
              }
              throw a.error;
            case 2:
              return l.abrupt("return", {
                text: ((s = a[0]) == null ? void 0 : s.translation_text) || ""
              });
            case 3:
            case "end":
              return l.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }]);
}(wt), ql = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    E(this, i);
    var n, a = JSON.parse(JSON.stringify(e.directConnection)), s = a.stabilityAI;
    t = K(this, i, [e, rt.buildKeyVerificationDetails(), rt.buildHeaders, s]), t.url = "https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image", t.textInputPlaceholderText = "Describe an image", t.introPanelMarkUp = `
    <div style="width: 100%; text-align: center; margin-left: -10px"><b>Stability AI: Text to Image</b></div>
    <p>Insert text to generate an image.</p>
    <p>Click <a href="https://platform.stability.ai/">here</a> for more info.</p>`;
    var o = (n = a.stabilityAI) == null ? void 0 : n.textToImage;
    return G(o) == "object" && (o.engine_id && (t.url = "https://api.stability.ai/v1/generation/".concat(o.engine_id, "/text-to-image")), o.weight !== void 0 && o.weight !== null && (t._imageWeight = o.weight), i.cleanConfig(o), Object.assign(t.rawBody, o)), t.canSendMessage = i.canSendTextMessage, t;
  }
  return J(i, r), _(i, [{
    key: "preprocessBody",
    value: function(t, n) {
      var a = JSON.parse(JSON.stringify(t)), s = {
        text: n
      };
      return this._imageWeight && (s.weight = this._imageWeight), a.text_prompts = [s], a;
    }
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s) {
        var o;
        return m().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              if (this.connectSettings) {
                u.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              o = this.preprocessBody(this.rawBody, s[s.length - 1].text), ye.request(this, o, a);
            case 4:
            case "end":
              return u.stop();
          }
        }, n, this);
      }));
      function t(n, a) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        return m().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              if (!a.message) {
                o.next = 2;
                break;
              }
              throw a.message;
            case 2:
              return o.abrupt("return", {
                files: a.artifacts.map(function(l) {
                  return {
                    src: "".concat(Qt).concat(l.base64),
                    type: "image"
                  };
                })
              });
            case 3:
            case "end":
              return o.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }], [{
    key: "cleanConfig",
    value: function(t) {
      delete t.engine_id, delete t.weight;
    }
  }, {
    key: "canSendTextMessage",
    value: function(t) {
      return !!(t && t.trim() !== "");
    }
  }]);
}(On), zl = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    E(this, i);
    var n, a, s, o = (a = (n = e.directConnection) == null ? void 0 : n.huggingFace) == null ? void 0 : a.fillMask, l = (s = e.directConnection) == null ? void 0 : s.huggingFace;
    return t = K(this, i, [e, "The goal of life is [MASK].", "bert-base-uncased", o, l]), t.introPanelMarkUp = `
    <div style="width: 100%; text-align: center; margin-left: -10px"><b>Hugging Face</b></div>
    <p>Insert a sentence with the word [MASK] and the model will try to fill it for you. E.g. I want [MASK].</p>
    <p>First message may take an extented amount of time to complete as the model needs to be initialized.</p>`, t.permittedErrorPrefixes = ["Authorization header", "No mask_token"], t;
  }
  return J(i, r), _(i, [{
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s;
        return m().wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              if (!a.error) {
                l.next = 2;
                break;
              }
              throw a.error;
            case 2:
              return l.abrupt("return", {
                text: ((s = a[0]) == null ? void 0 : s.sequence) || ""
              });
            case 3:
            case "end":
              return l.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }]);
}(wt), Di = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "buildHeaders",
    value: function(e) {
      return {
        Authorization: "Bearer ".concat(e),
        "Content-Type": "application/json"
      };
    }
    // prettier-ignore
  }, {
    key: "handleVerificationResult",
    value: function(e, t, n, a) {
      var s = e;
      s.error ? s.error.code === "invalid_api_key" ? a(_e.INVALID_KEY) : a(_e.CONNECTION_FAILED) : n(t);
    }
  }, {
    key: "buildKeyVerificationDetails",
    value: function() {
      return {
        url: "https://api.openai.com/v1/models",
        method: "GET",
        handleVerificationResult: r.handleVerificationResult
      };
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {
    key: "directFetch",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n, a, s) {
        var o, l, u = arguments;
        return m().wrap(function(d) {
          for (; ; ) switch (d.prev = d.next) {
            case 0:
              return o = u.length > 3 && u[3] !== void 0 ? u[3] : !0, n.connectSettings.method = s, d.next = 4, ie.fetch(n, n.connectSettings.headers, o, a).then(function(p) {
                return ie.processResponseByType(p);
              });
            case 4:
              if (l = d.sent, !l.error) {
                d.next = 7;
                break;
              }
              throw l.error.message;
            case 7:
              return d.abrupt("return", l);
            case 8:
            case "end":
              return d.stop();
          }
        }, t);
      }));
      function e(t, n, a) {
        return i.apply(this, arguments);
      }
      return e;
    }()
  }]);
}();
Di.FUNCTION_TOOL_RESP_ERROR = "Response object must either be {response: string}[] for each individual function or {text: string} for a direct response, see https://deepchat.dev/docs/directConnection/OpenAI#FunctionHandler.";
var Ae = Di, Cr = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "storeFiles",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n, a, s, o) {
        var l, u, c, d;
        return m().wrap(function(h) {
          for (; ; ) switch (h.prev = h.next) {
            case 0:
              if (l = n.connectSettings.headers, l) {
                h.next = 3;
                break;
              }
              return h.abrupt("return");
            case 3:
              return n.url = o, u = l[ie.CONTENT_TYPE], delete l[ie.CONTENT_TYPE], c = s.map(/* @__PURE__ */ function() {
                var g = C(/* @__PURE__ */ m().mark(function k(S) {
                  var T;
                  return m().wrap(function(D) {
                    for (; ; ) switch (D.prev = D.next) {
                      case 0:
                        return T = new FormData(), D.abrupt("return", (T.append("purpose", "assistants"), T.append("file", S), new Promise(function(N) {
                          N(Ae.directFetch(n, T, "POST", !1));
                        })));
                      case 2:
                      case "end":
                        return D.stop();
                    }
                  }, k);
                }));
                return function(k) {
                  return g.apply(this, arguments);
                };
              }()), h.prev = 7, h.next = 10, Promise.all(c);
            case 10:
              return d = h.sent.map(function(g) {
                return {
                  id: g.id,
                  name: g.filename
                };
              }), h.abrupt("return", (l[ie.CONTENT_TYPE] = u, d));
            case 14:
              throw h.prev = 14, h.t0 = h.catch(7), l[ie.CONTENT_TYPE] = u, ie.displayError(a, h.t0), n.completionsHandlers.onFinish(), h.t0;
            case 17:
            case "end":
              return h.stop();
          }
        }, t, null, [[7, 14]]);
      }));
      function e(t, n, a, s) {
        return i.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "getType",
    value: function(e, t) {
      var n = e[t].path;
      return !n || n.endsWith("png") ? "image" : "any";
    }
  }, {
    key: "getFiles",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n, a, s, o) {
        var l, u;
        return m().wrap(function(d) {
          for (; ; ) switch (d.prev = d.next) {
            case 0:
              return l = a.map(function(p) {
                var h = p.fileId;
                return n.url = "".concat(s).concat(h).concat(o), new Promise(function(g) {
                  g(Ae.directFetch(n, void 0, "GET", !1));
                });
              }), d.next = 3, Promise.all(l);
            case 3:
              return u = d.sent.map(function(p, h) {
                return new Promise(function(g) {
                  var k = new FileReader();
                  k.readAsDataURL(p), k.onload = function(S) {
                    g({
                      src: S.target.result,
                      name: a[h].name,
                      type: r.getType(a, h)
                    });
                  };
                });
              }), d.next = 6, Promise.all(u);
            case 6:
              return d.abrupt("return", d.sent);
            case 7:
            case "end":
              return d.stop();
          }
        }, t);
      }));
      function e(t, n, a, s) {
        return i.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "getFileName",
    value: function(e) {
      var t = e.split("/");
      return t[t.length - 1];
    }
    // prettier-ignore
  }, {
    key: "getFilesAndNewText",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n, a, s, o, l) {
        var u, c, d, p, h;
        return m().wrap(function(k) {
          for (; ; ) switch (k.prev = k.next) {
            case 0:
              if (p = s.getFilesPrefix, h = s.getFilesPostfix, k.t0 = a.length > 0, !k.t0) {
                k.next = 7;
                break;
              }
              return k.next = 5, r.getFiles(n, a, p, h);
            case 5:
              d = k.sent, (u = l == null ? void 0 : l.text) != null && u.value && d.forEach(function(S, T) {
                var A;
                if (S.src) {
                  var D = a[T].path;
                  (A = l == null ? void 0 : l.text) != null && A.value && D && (l.text.value = l.text.value.replace(D, S.src));
                }
              });
            case 7:
              return k.abrupt("return", (c = l == null ? void 0 : l.text) != null && c.value ? {
                text: l.text.value,
                role: o
              } : {
                files: d,
                role: o
              });
            case 8:
            case "end":
              return k.stop();
          }
        }, t);
      }));
      function e(t, n, a, s, o) {
        return i.apply(this, arguments);
      }
      return e;
    }()
    // Noticed an issue where text contains a sandbox hyperlink to a csv, but no annotation provided
    // To reproduce use the following text:
    // give example data for a csv and create a suitable bar chart for it with a link
    // Don't think it can be fixed and it is something on OpenAI side of things
    // prettier-ignore
  }, {
    key: "getFileDetails",
    value: function(e, t) {
      var n, a = [];
      return (n = t == null ? void 0 : t.text) != null && n.value && e.content.forEach(function(s) {
        var o, l;
        (l = (o = s.text) == null ? void 0 : o.annotations) == null || l.forEach(function(u) {
          var c;
          u.text && u.text.startsWith("sandbox:") && (c = u.file_path) != null && c.file_id && a.push({
            path: u.text,
            fileId: u.file_path.file_id,
            name: r.getFileName(u.text)
          });
        });
      }), t != null && t.image_file && a.push({
        fileId: t.image_file.file_id
      }), a;
    }
    // prettier-ignore
  }, {
    key: "getFilesAndText",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n, a, s, o) {
        var l;
        return m().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              return l = r.getFileDetails(a, o), c.next = 3, r.getFilesAndNewText(n, l, s, a.role, o);
            case 3:
              return c.abrupt("return", c.sent);
            case 4:
            case "end":
              return c.stop();
          }
        }, t);
      }));
      function e(t, n, a, s) {
        return i.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "parseResult",
    value: function(e, t) {
      var n = [];
      if (t) n = e.data;
      else for (var a = 0; a < e.data.length; a += 1) {
        var s = e.data[a];
        if (s.role === "assistant") n.push(s);
        else break;
      }
      return n.reverse();
    }
    // test this using this prompt and it should give 2 text mesages and a file:
    // "give example data for a csv and create a suitable bar chart"
  }, {
    key: "parseMessages",
    value: function(e, t, n) {
      var a = [];
      return t.forEach(/* @__PURE__ */ function() {
        var s = C(/* @__PURE__ */ m().mark(function o(l) {
          return m().wrap(function(c) {
            for (; ; ) switch (c.prev = c.next) {
              case 0:
                l.content.filter(function(d) {
                  return !!d.text || !!d.image_file;
                }).sort(function(d) {
                  return d.text ? -1 : d.image_file ? 1 : 0;
                }).forEach(/* @__PURE__ */ function() {
                  var d = C(/* @__PURE__ */ m().mark(function p(h) {
                    return m().wrap(function(k) {
                      for (; ; ) switch (k.prev = k.next) {
                        case 0:
                          a.push(r.getFilesAndText(e, l, n, h));
                        case 1:
                        case "end":
                          return k.stop();
                      }
                    }, p);
                  }));
                  return function(p) {
                    return d.apply(this, arguments);
                  };
                }());
              case 1:
              case "end":
                return c.stop();
            }
          }, o);
        }));
        return function(o) {
          return s.apply(this, arguments);
        };
      }()), Promise.all(a);
    }
  }, {
    key: "processStreamMessages",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n, a, s) {
        return m().wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              return l.abrupt("return", r.parseMessages(n, [{
                content: a,
                role: "assistant"
              }], s));
            case 1:
            case "end":
              return l.stop();
          }
        }, t);
      }));
      function e(t, n, a) {
        return i.apply(this, arguments);
      }
      return e;
    }()
    // prettier-ignore
  }, {
    key: "processAPIMessages",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n, a, s, o) {
        var l;
        return m().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              return l = r.parseResult(a, s), c.abrupt("return", r.parseMessages(n, l, o));
            case 2:
            case "end":
              return c.stop();
          }
        }, t);
      }));
      function e(t, n, a, s) {
        return i.apply(this, arguments);
      }
      return e;
    }()
  }]);
}();
Cr.FILES_WITH_TEXT_ERROR = "content with type `text` must have `text` values", Cr.FUNCTION_TOOL_RESP_ERROR = "Response must contain an array of strings for each individual function/tool_call, see https://deepchat.dev/docs/directConnection/OpenAI/#assistant-functions.";
var dt = Cr, Bi = /* @__PURE__ */ function(r) {
  function i(e, t, n, a, s, o) {
    var l;
    if (E(this, i), l = K(this, i, [e, a, s, o]), l.insertKeyPlaceholderText = "OpenAI API Key", l.keyHelpUrl = "https://platform.openai.com/account/api-keys", l.url = "", l.permittedErrorPrefixes = ["Incorrect", "Please send text", Hr.FAILED_ERROR_MESSAGE], l.shouldFetchHistory = !1, l.searchedForThreadId = !1, l.config = {}, l.newAssistantDetails = {
      model: "gpt-4"
    }, l.waitingForStreamResponse = !1, l.isSSEStream = !1, l.urlSegments = n, G(t) == "object") {
      l.config = t;
      var u = l.config, c = u.new_assistant, d = u.thread_id, p = u.load_thread_history;
      Object.assign(l.newAssistantDetails, c), d && (l.sessionId = d), p && (l.shouldFetchHistory = !0);
    }
    return l.maxMessages = 1, l.isSSEStream = !!(l.stream && (G(l.stream) != "object" || !l.stream.simulation)), l;
  }
  return J(i, r), _(i, [{
    key: "fetchHistoryFunc",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n() {
        var a = this, s;
        return m().wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              return setTimeout(function() {
                return a.deepChat.disableSubmitButton();
              }, 2), l.prev = 1, l.next = 4, this.getThreadMessages(this.sessionId, !0);
            case 4:
              return s = l.sent, l.abrupt("return", (this.deepChat.disableSubmitButton(!1), s));
            case 8:
              return l.prev = 8, l.t0 = l.catch(1), l.abrupt("return", [{
                error: "Failed to fetch history"
              }]);
            case 11:
            case "end":
              return l.stop();
          }
        }, n, this, [[1, 8]]);
      }));
      function t() {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "processMessage",
    value: function(t, n) {
      var a = this.totalMessagesMaxCharLength || -1, s = qr.getCharacterLimitMessages(t, a)[0];
      if (n && n.length > 0) {
        var o = this.filesToolType;
        if (typeof this.filesToolType == "function") {
          var l = this.filesToolType(n.map(function(c) {
            var d = c.name;
            return d;
          }));
          l === "code_interpreter" || l === "file_search" || l === "images" ? o = l : (console.error('Tool type "'.concat(l, '" is not valid')), console.error('Expected "code_interpreter" or "file_search" or "images". Going to default to "images"'));
        }
        if (o === "file_search") return i.processAttachmentsMessage(s, n, "file_search");
        if (o === "code_interpreter") return i.processAttachmentsMessage(s, n, "code_interpreter");
        if (n.find(function(c) {
          var d = c.name;
          return !Oe.isImageFileExtension(d);
        })) console.error("The uploaded files contained a non-image file"), console.error('Make sure only images can be uploaded or define a "code_interpreter" or "file_search" value in the "files_tool_type" property'), console.warn('Make sure your existing assistant supports these "tools" or specify them in the "new_assistant" property');
        else {
          var u = i.processImageMessage(s, n);
          if (u) return u;
        }
      }
      return {
        content: s.text || "",
        role: "user"
      };
    }
  }, {
    key: "createNewThreadMessages",
    value: function(t, n, a) {
      var s = JSON.parse(JSON.stringify(t)), o = this.processMessage(n, a);
      return s.thread = {
        messages: [o]
      }, s;
    }
  }, {
    key: "callService",
    value: function(t, n, a) {
      if (this.messages = t, this.sessionId) {
        this.url = "".concat(this.urlSegments.threadsPrefix, "/").concat(this.sessionId, "/messages").concat(this.urlSegments.createMessagePostfix);
        var s = this.processMessage(n, a);
        ye.request(this, s, t);
      } else {
        this.url = "".concat(this.urlSegments.threadsPrefix, "/runs").concat(this.urlSegments.threadsPosfix);
        var o = this.createNewThreadMessages(this.rawBody, n, a);
        this.isSSEStream ? this.createStreamRun(o) : ye.request(this, o, t);
      }
    }
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s, o) {
        var l, u, c;
        return m().wrap(function(p) {
          for (; ; ) switch (p.prev = p.next) {
            case 0:
              if (this.waitingForStreamResponse = !1, !!this.connectSettings) {
                p.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              if (!((l = (u = this.rawBody).assistant_id) !== null && l !== void 0)) {
                p.next = 6;
                break;
              }
              p.next = 12;
              break;
            case 6:
              if (p.t0 = this.config.assistant_id, p.t0) {
                p.next = 11;
                break;
              }
              return p.next = 10, this.createNewAssistant();
            case 10:
              p.t0 = p.sent;
            case 11:
              u.assistant_id = p.t0;
            case 12:
              if (this.searchedForThreadId || this.searchPreviousMessagesForThreadId(a.messageToElements), !o) {
                p.next = 19;
                break;
              }
              return p.next = 16, dt.storeFiles(this, a, o, this.urlSegments.storeFiles);
            case 16:
              p.t1 = p.sent, p.next = 20;
              break;
            case 19:
              p.t1 = void 0;
            case 20:
              c = p.t1, this.connectSettings.method = "POST", this.callService(a, s, c);
            case 22:
            case "end":
              return p.stop();
          }
        }, n, this);
      }));
      function t(n, a, s) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "createNewAssistant",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n() {
        var a;
        return m().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              return o.prev = 0, this.url = this.urlSegments.newAssistantUrl, o.next = 4, Ae.directFetch(this, JSON.parse(JSON.stringify(this.newAssistantDetails)), "POST");
            case 4:
              return a = o.sent, o.abrupt("return", (this.config.assistant_id = a.id, this.config.assistant_id));
            case 8:
              o.prev = 8, o.t0 = o.catch(0), console.error(o.t0), console.error("Failed to create a new assistant");
            case 11:
            case "end":
              return o.stop();
          }
        }, n, this, [[0, 8]]);
      }));
      function t() {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "searchPreviousMessagesForThreadId",
    value: function(t) {
      var n = t.find(function(a) {
        var s = Or(a, 1), o = s[0];
        return o._sessionId;
      });
      n && (this.sessionId = n[0]._sessionId), this.searchedForThreadId = !0;
    }
    // prettier-ignore
  }, {
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s, o, l;
        return m().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              if (!(this.waitingForStreamResponse || this.isSSEStream && this.sessionId)) {
                c.next = 4;
                break;
              }
              return c.next = 3, this.handleStream(a);
            case 3:
              return c.abrupt("return", c.sent);
            case 4:
              if (!a.error) {
                c.next = 6;
                break;
              }
              throw a.error.message.startsWith(dt.FILES_WITH_TEXT_ERROR) ? Error("Please send text with your file(s)") : a.error.message;
            case 6:
              return c.next = 8, this.assignThreadAndRun(a);
            case 8:
              return o = "".concat(this.urlSegments.threadsPrefix, "/").concat(this.sessionId, "/runs/").concat(this.run_id).concat(this.urlSegments.threadsPosfix), l = {
                method: "GET",
                headers: (s = this.connectSettings) == null ? void 0 : s.headers
              }, c.abrupt("return", (ye.executePollRequest(this, o, l, this.messages), {
                makingAnotherRequest: !0
              }));
            case 10:
            case "end":
              return c.stop();
          }
        }, n, this);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "assignThreadAndRun",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s;
        return m().wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              if (!this.sessionId) {
                l.next = 8;
                break;
              }
              return this.url = "".concat(this.urlSegments.threadsPrefix, "/").concat(this.sessionId, "/runs").concat(this.urlSegments.threadsPosfix), l.next = 4, Ae.directFetch(this, JSON.parse(JSON.stringify(this.rawBody)), "POST");
            case 4:
              s = l.sent, this.run_id = s.id, l.next = 9;
              break;
            case 8:
              this.sessionId = a.thread_id, this.run_id = a.id, this.messages && this.messages.messageToElements.length > 0 && (this.messages.messageToElements[this.messages.messageToElements.length - 1][0]._sessionId = this.sessionId);
            case 9:
            case "end":
              return l.stop();
          }
        }, n, this);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "getThreadMessages",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s, o, l, u, c = arguments;
        return m().wrap(function(p) {
          for (; ; ) switch (p.prev = p.next) {
            case 0:
              return s = c.length > 1 && c[1] !== void 0 ? c[1] : !1, this.url = "".concat(this.urlSegments.threadsPrefix, "/").concat(a, "/messages?").concat(this.urlSegments.listMessagesPostfix), p.next = 4, Ae.directFetch(this, {}, "GET");
            case 4:
              if (u = p.sent, p.t0 = !s && this.deepChat.responseInterceptor, !p.t0) {
                p.next = 10;
                break;
              }
              return p.next = 9, (l = (o = this.deepChat).responseInterceptor) == null ? void 0 : l.call(o, u);
            case 9:
              u = p.sent;
            case 10:
              return p.abrupt("return", dt.processAPIMessages(this, u, s, this.urlSegments));
            case 11:
            case "end":
              return p.stop();
          }
        }, n, this);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "extractPollResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s = this, o, l, u, c, d, p, h, g;
        return m().wrap(function(S) {
          for (; ; ) switch (S.prev = S.next) {
            case 0:
              if (l = a.status, u = a.required_action, !(l === "queued" || l === "in_progress")) {
                S.next = 3;
                break;
              }
              return S.abrupt("return", {
                timeoutMS: i.POLLING_TIMEOUT_MS
              });
            case 3:
              if (!(l === "completed" && this.messages)) {
                S.next = 11;
                break;
              }
              return S.next = 6, this.getThreadMessages(a.thread_id);
            case 6:
              return c = S.sent, d = c.shift(), p = d.text, h = d.files, S.abrupt("return", (setTimeout(function() {
                c.forEach(function(T) {
                  return s.deepChat.addMessage(T);
                });
              }), {
                text: p,
                _sessionId: this.sessionId,
                files: h
              }));
            case 11:
              if (g = (o = u == null ? void 0 : u.submit_tool_outputs) == null ? void 0 : o.tool_calls, !(l === "requires_action" && g)) {
                S.next = 16;
                break;
              }
              return S.next = 15, this.handleTools(g);
            case 15:
              return S.abrupt("return", S.sent);
            case 16:
              throw Error("Thread run status: ".concat(l));
            case 17:
            case "end":
              return S.stop();
          }
        }, n, this);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
    // prettier-ignore
  }, {
    key: "handleTools",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s, o, l, u, c, d;
        return m().wrap(function(h) {
          for (; ; ) switch (h.prev = h.next) {
            case 0:
              if (this.functionHandler) {
                h.next = 2;
                break;
              }
              throw Error("Please define the `function_handler` property inside the [openAI](https://deepchat.dev/docs/directConnection/openAI#Assistant) object.");
            case 2:
              return s = a.map(function(g) {
                return {
                  name: g.function.name,
                  arguments: g.function.arguments
                };
              }), h.next = 5, this.functionHandler(s);
            case 5:
              if (o = h.sent, !(!Array.isArray(o) || a.length !== o.length)) {
                h.next = 8;
                break;
              }
              throw Error(dt.FUNCTION_TOOL_RESP_ERROR);
            case 8:
              return h.next = 10, Promise.all(o);
            case 10:
              if (l = h.sent, !l.find(function(g) {
                return typeof g != "string";
              })) {
                h.next = 13;
                break;
              }
              throw Error(dt.FUNCTION_TOOL_RESP_ERROR);
            case 13:
              if (u = l.map(function(g, k) {
                return {
                  tool_call_id: a[k].id,
                  output: g
                };
              }), c = "".concat(this.urlSegments.threadsPrefix, "/").concat(this.sessionId), d = "/runs/".concat(this.run_id, "/submit_tool_outputs").concat(this.urlSegments.threadsPosfix), this.url = "".concat(c).concat(d), !this.isSSEStream) {
                h.next = 20;
                break;
              }
              return h.next = 18, this.createStreamRun({
                tool_outputs: u
              });
            case 18:
              h.next = 22;
              break;
            case 20:
              return h.next = 22, Ae.directFetch(this, {
                tool_outputs: u
              }, "POST");
            case 22:
              return h.abrupt("return", {
                timeoutMS: i.POLLING_TIMEOUT_MS
              });
            case 23:
            case "end":
              return h.stop();
          }
        }, n, this);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "handleStream",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s, o, l, u;
        return m().wrap(function(d) {
          for (; ; ) switch (d.prev = d.next) {
            case 0:
              if (l = (o = (s = a.required_action) == null ? void 0 : s.submit_tool_outputs) == null ? void 0 : o.tool_calls, !(a.status === "requires_action" && l)) {
                d.next = 6;
                break;
              }
              return this.run_id = a.id, d.next = 5, this.handleTools(l);
            case 5:
              return d.abrupt("return", d.sent);
            case 6:
              if (!this.waitingForStreamResponse) {
                d.next = 8;
                break;
              }
              return d.abrupt("return", this.parseStreamResult(a));
            case 8:
              return this.isSSEStream && this.sessionId && (this.url = "".concat(this.urlSegments.threadsPrefix, "/").concat(this.sessionId, "/runs").concat(this.urlSegments.threadsPosfix), u = JSON.parse(JSON.stringify(this.rawBody)), this.createStreamRun(u)), d.abrupt("return", {
                makingAnotherRequest: !0
              });
            case 10:
            case "end":
              return d.stop();
          }
        }, n, this);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
    // prettier-ignore
  }, {
    key: "parseStreamResult",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s, o, l, u, c, d, p, h, g, k;
        return m().wrap(function(T) {
          for (; ; ) switch (T.prev = T.next) {
            case 0:
              if (!(a.content && a.content.length > 0 && this.messages)) {
                T.next = 5;
                break;
              }
              if (d = a.content.find(function(A) {
                return A.text;
              }), !((s = d == null ? void 0 : d.text) != null && s.annotations && d.text.annotations.length > 0)) {
                T.next = 5;
                break;
              }
              return p = a.content.find(function(A) {
                return !!A.text;
              }) || a.content[0], h = dt.getFilesAndText.bind(this, this, {
                role: "assistant",
                content: a.content
              }, this.urlSegments, p), T.abrupt("return", ((o = this.messageStream) == null || o.endStreamAfterFileDownloaded(this.messages, h), {
                text: ""
              }));
            case 5:
              if (!((l = a.delta) != null && l.content)) {
                T.next = 14;
                break;
              }
              if (!(a.delta.content.length > 1)) {
                T.next = 13;
                break;
              }
              if (g = a.delta.content.find(function(A) {
                return A.text;
              }), !((u = g == null ? void 0 : g.text) != null && u.annotations && g.text.annotations.length === 0)) {
                T.next = 13;
                break;
              }
              return T.next = 11, dt.processStreamMessages(this, a.delta.content, this.urlSegments);
            case 11:
              return k = T.sent, T.abrupt("return", {
                text: k[0].text,
                files: k[1].files
              });
            case 13:
              return T.abrupt("return", {
                text: (c = a.delta.content[0].text) == null ? void 0 : c.value
              });
            case 14:
              return T.abrupt("return", (!this.sessionId && a.thread_id && (this.sessionId = a.thread_id), {
                makingAnotherRequest: !0
              }));
            case 15:
            case "end":
              return T.stop();
          }
        }, n, this);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
    // https://platform.openai.com/docs/api-reference/assistants-streaming
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {
    key: "createStreamRun",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        return m().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              return a.stream = !0, this.waitingForStreamResponse = !0, o.next = 4, Te.request(this, a, this.messages, !0, !0);
            case 4:
              this.messageStream = o.sent;
            case 5:
            case "end":
              return o.stop();
          }
        }, n, this);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }], [{
    key: "processImageMessage",
    value: function(t, n) {
      var a = n == null ? void 0 : n.filter(function(s) {
        return Oe.isImageFileExtension(s.name);
      }).map(function(s) {
        return {
          type: "image_file",
          image_file: {
            file_id: s.id
          }
        };
      });
      if (a && a.length > 0) return t.text && t.text.length > 0 && a.push({
        type: "text",
        text: t.text
      }), {
        content: a,
        role: "user"
      };
    }
  }, {
    key: "processAttachmentsMessage",
    value: function(t, n, a) {
      return {
        attachments: n.map(function(s) {
          return {
            tools: [{
              type: a
            }],
            file_id: s.id
          };
        }),
        content: [{
          type: "text",
          text: t.text
        }],
        role: "user"
      };
    }
  }]);
}(Ie);
Bi.POLLING_TIMEOUT_MS = 800;
var Fi = Bi, ji = /* @__PURE__ */ function(r) {
  function i(e) {
    var t, n, a;
    E(this, i);
    var s, o, l, u, c, d = JSON.parse(JSON.stringify(e.directConnection)), p = d.openAI, h = (s = d.openAI) == null ? void 0 : s.assistant;
    if (a = K(this, i, [e, h, i.URL_SEGMENTS, Ae.buildKeyVerificationDetails(), Ae.buildHeaders, p]), (t = (o = a.connectSettings).headers) !== null && t !== void 0 || (o.headers = {}), (n = (l = a.connectSettings.headers)["OpenAI-Beta"]) !== null && n !== void 0 || (l["OpenAI-Beta"] = "assistants=v2"), a.shouldFetchHistory && a.sessionId && (a.fetchHistory = a.fetchHistoryFunc.bind(Ot(a))), G(h) == "object") {
      var g = (c = (u = e.directConnection) == null ? void 0 : u.openAI) == null ? void 0 : c.assistant, k = g.function_handler, S = g.files_tool_type;
      k && (a.functionHandler = k), S && (a.filesToolType = S);
    }
    return a;
  }
  return J(i, r), _(i);
}(Fi);
ji.URL_SEGMENTS = {
  threadsPrefix: "https://api.openai.com/v1/threads",
  threadsPosfix: "",
  newAssistantUrl: "https://api.openai.com/v1/assistants",
  createMessagePostfix: "",
  listMessagesPostfix: "order=desc",
  storeFiles: "https://api.openai.com/v1/files",
  getFilesPrefix: "https://api.openai.com/v1/files/",
  getFilesPostfix: "/content"
};
var $l = ji, Pa = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "buildHeaders",
    value: function(e) {
      return {
        Authorization: "Bearer ".concat(e),
        "Content-Type": "application/json",
        accept: "application/json"
      };
    }
    // prettier-ignore
  }, {
    key: "handleVerificationResult",
    value: function(e, t, n, a) {
      var s;
      (s = e.message) != null && s.includes("invalid request: prompt must be at least 1 token long") ? n(t) : a(_e.INVALID_KEY);
    }
  }, {
    key: "buildKeyVerificationDetails",
    value: function() {
      return {
        url: "https://api.cohere.ai/v1/generate",
        method: "POST",
        handleVerificationResult: r.handleVerificationResult,
        body: JSON.stringify({
          prompt: ""
        })
      };
    }
  }]);
}(), Vr = /* @__PURE__ */ function(r) {
  function i(e, t, n, a, s) {
    var o;
    return E(this, i), o = K(this, i, [e, Pa.buildKeyVerificationDetails(), Pa.buildHeaders, s]), o.insertKeyPlaceholderText = "Cohere API Key", o.keyHelpUrl = "https://dashboard.cohere.ai/api-keys", o.permittedErrorPrefixes = ["invalid"], o.url = t, o.textInputPlaceholderText = n, a && G(a) == "object" && Object.assign(o.rawBody, a), o;
  }
  return J(i, r), _(i);
}(Ie), Vl = /* @__PURE__ */ function(r) {
  function i(e) {
    E(this, i);
    var t, n, a, s = (n = (t = e.directConnection) == null ? void 0 : t.cohere) == null ? void 0 : n.textGeneration, o = (a = e.directConnection) == null ? void 0 : a.cohere;
    return K(this, i, [e, "https://api.cohere.ai/v1/generate", "Once upon a time", s, o]);
  }
  return J(i, r), _(i, [{
    key: "preprocessBody",
    value: function(t, n) {
      var a = JSON.parse(JSON.stringify(t)), s = n[n.length - 1].text;
      if (s) return ce({
        prompt: s
      }, a);
    }
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s) {
        var o;
        return m().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              if (this.connectSettings) {
                u.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              o = this.preprocessBody(this.rawBody, s), ye.request(this, o, a);
            case 4:
            case "end":
              return u.stop();
          }
        }, n, this);
      }));
      function t(n, a) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s;
        return m().wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              if (!a.message) {
                l.next = 2;
                break;
              }
              throw a.message;
            case 2:
              return l.abrupt("return", {
                text: ((s = a.generations) == null ? void 0 : s[0].text) || ""
              });
            case 3:
            case "end":
              return l.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }]);
}(Vr), Ui = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "buildHeaders",
    value: function(e) {
      return {
        "api-key": e,
        "Content-Type": "application/json"
      };
    }
  }, {
    key: "buildKeyVerificationDetails",
    value: function(e) {
      return {
        url: "".concat(e.endpoint, "/openai/models?api-version=").concat(e.version),
        method: "GET",
        handleVerificationResult: Ae.handleVerificationResult
      };
    }
  }, {
    key: "validateURLDetails",
    value: function(e) {
      var t = e.endpoint, n = e.version, a = e.deploymentId;
      return t && n && a;
    }
  }]);
}();
Ui.URL_DETAILS_ERROR_MESSAGE = "Please define the Azure URL Details. [More Information](https://deepchat.dev/docs/directConnection/Azure)";
var We = Ui, Tr = /* @__PURE__ */ function(r) {
  function i(e) {
    var t, n;
    E(this, i);
    var a, s, o, l, u, c, d, p, h = JSON.parse(JSON.stringify(e.directConnection)), g = h.azure, k = (a = h.azure) == null ? void 0 : a.openAI, S = (k == null ? void 0 : k.urlDetails) || {}, T = "".concat((s = k == null ? void 0 : k.urlDetails) == null ? void 0 : s.endpoint, "/openai/"), A = "?api-version=".concat((o = k == null ? void 0 : k.urlDetails) == null ? void 0 : o.version), D = {
      threadsPrefix: "".concat(T).concat(i.THREAD_RESOURCE),
      threadsPosfix: A,
      newAssistantUrl: "".concat(T).concat(i.NEW_ASSISTANT_RESOURCE).concat(A),
      createMessagePostfix: A,
      listMessagesPostfix: "order=desc&api-version=".concat((l = k == null ? void 0 : k.urlDetails) == null ? void 0 : l.version),
      storeFiles: "".concat(T, "files").concat(A),
      getFilesPrefix: "".concat(T, "files/"),
      getFilesPostfix: "/content".concat(A)
    };
    if (n = K(this, i, [e, k == null ? void 0 : k.assistant, D, We.buildKeyVerificationDetails(S), We.buildHeaders, g]), n.permittedErrorPrefixes = [We.URL_DETAILS_ERROR_MESSAGE], n.insertKeyPlaceholderText = "Azure OpenAI API Key", n.keyHelpUrl = "https://learn.microsoft.com/en-us/answers/questions/1193991/how-to-get-the-value-of-openai-api-key", n.isTextInputDisabled = !1, G(k == null ? void 0 : k.assistant) == "object") {
      var N = (d = (c = (u = e.directConnection) == null ? void 0 : u.azure) == null ? void 0 : c.openAI) == null ? void 0 : d.assistant, x = N.function_handler, Y = N.files_tool_type;
      x && (n.functionHandler = x), Y && (n.filesToolType = Y);
    }
    return We.validateURLDetails(S) ? (t = (p = n.connectSettings).headers) !== null && t !== void 0 || (p.headers = {}) : (n.isTextInputDisabled = !0, n.canSendMessage = function() {
      return !1;
    }, setTimeout(function() {
      e.addMessage({
        error: We.URL_DETAILS_ERROR_MESSAGE
      });
    })), n;
  }
  return J(i, r), _(i);
}(Fi);
Tr.THREAD_RESOURCE = "threads", Tr.NEW_ASSISTANT_RESOURCE = "assistants";
var Gl = Tr, Wl = /* @__PURE__ */ function(r) {
  function i(e) {
    E(this, i);
    var t, n, a, s = (n = (t = e.directConnection) == null ? void 0 : t.cohere) == null ? void 0 : n.summarization, o = (a = e.directConnection) == null ? void 0 : a.cohere;
    return K(this, i, [e, "https://api.cohere.ai/v1/summarize", "Insert text to summarize", s, o]);
  }
  return J(i, r), _(i, [{
    key: "preprocessBody",
    value: function(t, n) {
      var a = JSON.parse(JSON.stringify(t)), s = n[n.length - 1].text;
      if (s) return ce({
        text: s
      }, a);
    }
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s) {
        var o;
        return m().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              if (this.connectSettings) {
                u.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              o = this.preprocessBody(this.rawBody, s), ye.request(this, o, a);
            case 4:
            case "end":
              return u.stop();
          }
        }, n, this);
      }));
      function t(n, a) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        return m().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              if (!a.message) {
                o.next = 2;
                break;
              }
              throw a.message;
            case 2:
              return o.abrupt("return", {
                text: a.summary || ""
              });
            case 3:
            case "end":
              return o.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }]);
}(Vr), Ar = /* @__PURE__ */ function(r) {
  function i(e) {
    var t, n, a;
    E(this, i);
    var s, o, l, u = JSON.parse(JSON.stringify(e.directConnection)), c = u == null ? void 0 : u.openAI;
    a = K(this, i, [e, Ae.buildKeyVerificationDetails(), Ae.buildHeaders, c]), a.insertKeyPlaceholderText = "OpenAI API Key", a.keyHelpUrl = "https://platform.openai.com/account/api-keys", a.url = "https://api.openai.com/v1/audio/speech", a.permittedErrorPrefixes = ["Invalid"], a.introPanelMarkUp = `
    <div style="width: 100%; text-align: center; margin-left: -10px"><b>OpenAI : Text To Speech</b></div>
    <p>Generate an audio file based on your text input.</p>
    <p>Click <a href="https://platform.openai.com/docs/guides/text-to-speech">here</a> for more information.</p>`;
    var d = (s = u == null ? void 0 : u.openAI) == null ? void 0 : s.textToSpeech;
    return G(d) == "object" && Object.assign(a.rawBody, d), (t = (o = a.rawBody).model) !== null && t !== void 0 || (o.model = i.DEFAULT_MODEL), (n = (l = a.rawBody).voice) !== null && n !== void 0 || (l.voice = i.DEFAULT_VOIDE), a.textInputPlaceholderText = "Insert text to generate audio", a.rawBody.response_format = "mp3", a;
  }
  return J(i, r), _(i, [{
    key: "preprocessBody",
    value: function(t, n) {
      var a, s, o = JSON.parse(JSON.stringify(t)), l = (s = (a = n[n.length - 1]) == null ? void 0 : a.text) == null ? void 0 : s.trim();
      return l && l !== "" && (o.input = l), o;
    }
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s) {
        var o, l;
        return m().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              if ((o = this.connectSettings) != null && o.headers) {
                c.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              this.url = this.connectSettings.url || this.url, l = this.preprocessBody(this.rawBody, s), ye.request(this, l, a);
            case 5:
            case "end":
              return c.stop();
          }
        }, n, this);
      }));
      function t(n, a) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        return m().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              if (!(a instanceof Blob)) {
                o.next = 2;
                break;
              }
              return o.abrupt("return", new Promise(function(l) {
                var u = new FileReader();
                u.readAsDataURL(a), u.onload = function(c) {
                  l({
                    files: [{
                      src: c.target.result,
                      type: "audio"
                    }]
                  });
                };
              }));
            case 2:
              if (!a.error) {
                o.next = 4;
                break;
              }
              throw a.error.message;
            case 4:
              return o.abrupt("return", {
                error: "error"
              });
            case 5:
            case "end":
              return o.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }]);
}(Ie);
Ar.DEFAULT_MODEL = "tts-1", Ar.DEFAULT_VOIDE = "alloy";
var Kl = Ar, En = /* @__PURE__ */ function(r) {
  function i(e) {
    var t, n;
    E(this, i);
    var a, s, o = JSON.parse(JSON.stringify(e.directConnection)), l = o == null ? void 0 : o.openAI;
    n = K(this, i, [e, Ae.buildKeyVerificationDetails(), Ae.buildHeaders, l, {
      audio: {}
    }]), n.insertKeyPlaceholderText = "OpenAI API Key", n.keyHelpUrl = "https://platform.openai.com/account/api-keys", n.introPanelMarkUp = `
    <div style="width: 100%; text-align: center; margin-left: -10px"><b>OpenAI : Speech To Text</b></div>
    <p><b>Upload an audio file</b> to transcribe it into text. You can optionally provide text to guide the audio
      processing.
    <p>Click <a href="https://platform.openai.com/docs/guides/speech-to-text">here</a> for more info.</p>`, n.url = "", n.permittedErrorPrefixes = ["Invalid"], n.textInputPlaceholderText = "Upload an audio file", n._service_url = i.AUDIO_TRANSCRIPTIONS_URL;
    var u = (a = o == null ? void 0 : o.openAI) == null ? void 0 : a.audio;
    return G(u) == "object" && (n.processConfig(u), i.cleanConfig(u), Object.assign(n.rawBody, u)), (t = (s = n.rawBody).model) !== null && t !== void 0 || (s.model = i.DEFAULT_MODEL), n.rawBody.response_format = "json", n.canSendMessage = i.canSendFileMessage, n;
  }
  return J(i, r), _(i, [{
    key: "processConfig",
    value: function(t) {
      t != null && t.type && t.type === "translation" && (this._service_url = i.AUDIO_TRANSLATIONS_URL, delete t.language);
    }
  }, {
    key: "preprocessBody",
    value: function(t, n) {
      var a, s, o = JSON.parse(JSON.stringify(t)), l = (s = (a = n[n.length - 1]) == null ? void 0 : a.text) == null ? void 0 : s.trim();
      return l && l !== "" && (o.prompt = l), o;
    }
    // prettier-ignore
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s, o) {
        var l, u, c;
        return m().wrap(function(p) {
          for (; ; ) switch (p.prev = p.next) {
            case 0:
              if ((l = this.connectSettings) != null && l.headers) {
                p.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              if (o != null && o[0]) {
                p.next = 4;
                break;
              }
              throw new Error("No file was added");
            case 4:
              this.url = this.connectSettings.url || this._service_url, u = this.preprocessBody(this.rawBody, s), c = i.createFormDataBody(u, o[0]), ie.tempRemoveContentHeader(this.connectSettings, ye.request.bind(this, this, c, a), !1);
            case 7:
            case "end":
              return p.stop();
          }
        }, n, this);
      }));
      function t(n, a, s) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        return m().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              if (!a.error) {
                o.next = 2;
                break;
              }
              throw a.error.message;
            case 2:
              return o.abrupt("return", {
                text: a.text
              });
            case 3:
            case "end":
              return o.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }], [{
    key: "canSendFileMessage",
    value: function(t, n) {
      return !!(n != null && n[0]);
    }
  }, {
    key: "cleanConfig",
    value: function(t) {
      delete t.type;
    }
  }, {
    key: "createFormDataBody",
    value: function(t, n) {
      var a = new FormData();
      return a.append("file", n), Object.keys(t).forEach(function(s) {
        a.append(s, String(t[s]));
      }), a;
    }
  }]);
}(Ie);
En.AUDIO_TRANSCRIPTIONS_URL = "https://api.openai.com/v1/audio/transcriptions", En.AUDIO_TRANSLATIONS_URL = "https://api.openai.com/v1/audio/translations", En.DEFAULT_MODEL = "whisper-1";
var Jl = En, kt = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "buildTextToSpeechHeaders",
    value: function(e, t) {
      return {
        "Ocp-Apim-Subscription-Key": t,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": e
      };
    }
  }, {
    key: "buildSpeechToTextHeaders",
    value: function(e) {
      return {
        "Ocp-Apim-Subscription-Key": e,
        Accept: "application/json"
      };
    }
    // prettier-ignore
  }, {
    key: "handleSpeechVerificationResult",
    value: function(e, t, n, a) {
      e.error ? a(_e.INVALID_KEY) : n(t);
    }
  }, {
    key: "buildSpeechKeyVerificationDetails",
    value: function(e) {
      return {
        url: "https://".concat(e, ".api.cognitive.microsoft.com/sts/v1.0/issuetoken"),
        method: "POST",
        createHeaders: function(n) {
          return {
            "Ocp-Apim-Subscription-Key": "".concat(n)
          };
        },
        handleVerificationResult: r.handleSpeechVerificationResult
      };
    }
  }, {
    key: "buildSummarizationHeader",
    value: function(e) {
      return {
        "Ocp-Apim-Subscription-Key": e,
        "Content-Type": "application/json"
      };
    }
    // prettier-ignore
  }, {
    key: "handleLanguageVerificationResult",
    value: function(e, t, n, a) {
      var s;
      ((s = e.error) == null ? void 0 : s.code) === "401" ? a(_e.INVALID_KEY) : n(t);
    }
  }, {
    key: "buildLanguageKeyVerificationDetails",
    value: function(e) {
      return {
        url: "".concat(e, "/language/analyze-text/jobs?api-version=2022-10-01-preview"),
        method: "POST",
        createHeaders: function(n) {
          return {
            "Ocp-Apim-Subscription-Key": "".concat(n)
          };
        },
        handleVerificationResult: r.handleLanguageVerificationResult
      };
    }
    // prettier-ignore
  }, {
    key: "handleTranslationVerificationResult",
    value: function(e, t, n, a) {
      e.json().then(function(s) {
        !Array.isArray(s) && s.error.code === 401e3 ? a(_e.INVALID_KEY) : n(t);
      });
    }
  }, {
    key: "buildTranslationKeyVerificationDetails",
    value: function(e) {
      return {
        url: "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=es",
        method: "POST",
        createHeaders: function(n) {
          return r.buildTranslationHeaders(e, n);
        },
        handleVerificationResult: r.handleTranslationVerificationResult
      };
    }
  }, {
    key: "buildTranslationHeaders",
    value: function(e, t) {
      var n = {
        "Ocp-Apim-Subscription-Key": t,
        "Content-Type": "application/json"
      };
      return e && (n["Ocp-Apim-Subscription-Region"] = e), n;
    }
  }]);
}(), Yl = /* @__PURE__ */ function(r) {
  function i(e, t, n, a, s) {
    var o;
    return E(this, i), o = K(this, i, [e, kt.buildLanguageKeyVerificationDetails(n), t, a, s]), o.insertKeyPlaceholderText = "Azure Language Subscription Key", o.keyHelpUrl = // eslint-disable-next-line max-len
    "https://learn.microsoft.com/en-us/azure/api-management/api-management-subscriptions#create-and-manage-subscriptions-in-azure-portal", o.permittedErrorPrefixes = ["Access"], o;
  }
  return J(i, r), _(i);
}(Ie), Hi = /* @__PURE__ */ function(r) {
  function i(e) {
    var t, n;
    E(this, i);
    var a, s, o, l, u = (s = (a = e.directConnection) == null ? void 0 : a.azure) == null ? void 0 : s.summarization, c = (o = e.directConnection) == null ? void 0 : o.azure;
    return n = K(this, i, [e, kt.buildSummarizationHeader, u.endpoint, c]), n.permittedErrorPrefixes = [i.ENDPOINT_ERROR_MESSAGE], n.url = "", n.textInputPlaceholderText = "Insert text to summarize", n.isTextInputDisabled = !1, u.endpoint ? ((t = (l = n.rawBody).language) !== null && t !== void 0 || (l.language = "en"), Object.assign(n.rawBody, u), n.url = "".concat(u.endpoint, "/language/analyze-text/jobs?api-version=2022-10-01-preview")) : (n.isTextInputDisabled = !0, n.canSendMessage = function() {
      return !1;
    }, setTimeout(function() {
      e.addMessage({
        error: i.ENDPOINT_ERROR_MESSAGE
      });
    })), n;
  }
  return J(i, r), _(i, [{
    key: "preprocessBody",
    value: function(t, n) {
      var a = n[n.length - 1].text;
      if (a) return {
        analysisInput: {
          documents: [{
            id: "1",
            language: t.language,
            text: a
          }]
        },
        tasks: [{
          kind: "ExtractiveSummarization"
        }]
      };
    }
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s) {
        var o;
        return m().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              if (this.connectSettings) {
                u.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              o = this.preprocessBody(this.rawBody, s), ye.request(this, o, a), this.messages = a;
            case 4:
            case "end":
              return u.stop();
          }
        }, n, this);
      }));
      function t(n, a) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s, o, l;
        return m().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              if (!a.error) {
                c.next = 2;
                break;
              }
              throw a.error.message;
            case 2:
              return this.messages && this.completionsHandlers && (o = a.headers.get("operation-location"), l = {
                method: "GET",
                headers: (s = this.connectSettings) == null ? void 0 : s.headers
              }, ye.executePollRequest(this, o, l, this.messages)), c.abrupt("return", {
                makingAnotherRequest: !0
              });
            case 4:
            case "end":
              return c.stop();
          }
        }, n, this);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "extractPollResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s, o, l, u;
        return m().wrap(function(d) {
          for (; ; ) switch (d.prev = d.next) {
            case 0:
              if (!a.error) {
                d.next = 2;
                break;
              }
              throw a.error;
            case 2:
              if (a.status !== "running") {
                d.next = 4;
                break;
              }
              return d.abrupt("return", {
                timeoutMS: 2e3
              });
            case 4:
              if (!(a.errors.length > 0)) {
                d.next = 6;
                break;
              }
              throw a.errors[0];
            case 6:
              if (!(a.tasks.items[0].results.errors.length > 0)) {
                d.next = 8;
                break;
              }
              throw a.tasks.items[0].results.errors[0];
            case 8:
              s = "", o = ds(a.tasks.items[0].results.documents[0].sentences);
              try {
                for (o.s(); !(l = o.n()).done; )
                  u = l.value, s += u.text;
              } catch (p) {
                o.e(p);
              } finally {
                o.f();
              }
              return d.abrupt("return", {
                text: s || ""
              });
            case 12:
            case "end":
              return d.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }]);
}(Yl);
Hi.ENDPOINT_ERROR_MESSAGE = // eslint-disable-next-line max-len
"Please define the azure endpoint. [More Information](https://deepchat.dev/docs/directConnection/Azure#Summarization)";
var Xl = Hi, sr = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "poll",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n, a) {
        var s, o, l, u;
        return m().wrap(function(d) {
          for (; ; ) switch (d.prev = d.next) {
            case 0:
              return s = {
                authorization: n,
                "content-type": "application/json"
              }, d.t0 = "https://api.assemblyai.com/v2/transcript/", d.next = 4, fetch("https://api.assemblyai.com/v2/transcript", {
                method: "POST",
                body: JSON.stringify({
                  audio_url: a
                }),
                headers: s
              });
            case 4:
              return d.next = 6, d.sent.json();
            case 6:
              d.t1 = d.sent.id, o = d.t0.concat.call(d.t0, d.t1);
            case 8:
              if (l) {
                d.next = 24;
                break;
              }
              return d.next = 11, fetch(o, {
                headers: s
              });
            case 11:
              return d.next = 13, d.sent.json();
            case 13:
              if (u = d.sent, u.status !== "completed") {
                d.next = 18;
                break;
              }
              l = u, d.next = 22;
              break;
            case 18:
              if (u.status !== "error") {
                d.next = 20;
                break;
              }
              throw new Error("Transcription failed: ".concat(u.error));
            case 20:
              return d.next = 22, new Promise(function(p) {
                return setTimeout(p, 3e3);
              });
            case 22:
              d.next = 8;
              break;
            case 24:
              return d.abrupt("return", l);
            case 25:
            case "end":
              return d.stop();
          }
        }, t);
      }));
      function e(t, n) {
        return i.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "buildHeaders",
    value: function(e) {
      return {
        Authorization: e,
        "Content-Type": "application/octet-stream"
      };
    }
    // prettier-ignore
  }, {
    key: "handleVerificationResult",
    value: function(e, t, n, a) {
      var s = e;
      s.error ? s.error.code === "invalid_api_key" ? a(_e.INVALID_KEY) : a(_e.CONNECTION_FAILED) : n(t);
    }
  }, {
    key: "buildKeyVerificationDetails",
    value: function() {
      return {
        url: "https://api.assemblyai.com/v2/upload",
        method: "POST",
        handleVerificationResult: r.handleVerificationResult
      };
    }
  }]);
}(), Zl = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    E(this, i);
    var n, a = (n = e.directConnection) == null ? void 0 : n.assemblyAI;
    return t = K(this, i, [e, sr.buildKeyVerificationDetails(), sr.buildHeaders, a, {
      audio: {}
    }]), t.insertKeyPlaceholderText = "AssemblyAI API Key", t.keyHelpUrl = "https://www.assemblyai.com/app/account", t.introPanelMarkUp = `
    <div style="width: 100%; text-align: center; margin-left: -10px"><b>AssemblyAI Audio</b></div>
    <p><b>Upload an audio file</b> to transcribe it into text.
    <p>
      Click <a href="https://www.assemblyai.com/docs/Guides/transcribing_an_audio_file#get-started">here</a> for more info.
    </p>`, t.url = "https://api.assemblyai.com/v2/upload", t.isTextInputDisabled = !0, t.textInputPlaceholderText = "Upload an audio file", t.permittedErrorPrefixes = ["Authentication", "Invalid"], t.canSendMessage = i.canFileSendMessage, t;
  }
  return J(i, r), _(i, [{
    key: "callServiceAPI",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s, o) {
        var l;
        return m().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              if ((l = this.connectSettings) != null && l.headers) {
                c.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              if (o != null && o[0]) {
                c.next = 4;
                break;
              }
              throw new Error("No file was added");
            case 4:
              ye.request(this, o[0], a, !1);
            case 5:
            case "end":
              return c.stop();
          }
        }, n, this);
      }));
      function t(n, a, s) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s, o, l;
        return m().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              if (!a.error) {
                c.next = 2;
                break;
              }
              throw a.error;
            case 2:
              return l = (o = (s = this.connectSettings) == null ? void 0 : s.headers) == null ? void 0 : o.Authorization, c.next = 5, sr.poll(l, a.upload_url);
            case 5:
              return c.t0 = c.sent.text, c.abrupt("return", {
                text: c.t0
              });
            case 7:
            case "end":
              return c.stop();
          }
        }, n, this);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }], [{
    key: "canFileSendMessage",
    value: function(t, n) {
      return !!(n != null && n[0]);
    }
  }]);
}(Ie), qi = /* @__PURE__ */ function(r) {
  function i(e, t, n, a, s) {
    var o;
    return E(this, i), o = K(this, i, [e, kt.buildSpeechKeyVerificationDetails(n), t, a, s]), o.insertKeyPlaceholderText = "Azure Speech Subscription Key", o.keyHelpUrl = // eslint-disable-next-line max-len
    "https://learn.microsoft.com/en-us/azure/api-management/api-management-subscriptions#create-and-manage-subscriptions-in-azure-portal", o;
  }
  return J(i, r), _(i);
}(Ie), xr = /* @__PURE__ */ function(r) {
  function i(e) {
    var t, n, a, s;
    E(this, i);
    var o, l, u, c, d, p, h = (l = (o = e.directConnection) == null ? void 0 : o.azure) == null ? void 0 : l.textToSpeech, g = (u = e.directConnection) == null ? void 0 : u.azure;
    return s = K(this, i, [e, kt.buildTextToSpeechHeaders.bind({}, (h == null ? void 0 : h.outputFormat) || "audio-16khz-128kbitrate-mono-mp3"), h.region, g]), s.permittedErrorPrefixes = [i.REGION_ERROR_MESSAGE], s.introPanelMarkUp = `
    <div style="width: 100%; text-align: center; margin-left: -10px"><b>Azure Text To Speech</b></div>
    <p>Insert text to synthesize it to audio.
    <p>
      Click <a href="`.concat(i.HELP_LINK, `">here</a> for more info.
    </p>`), s.isTextInputDisabled = !1, s.url = "", h.region ? (Object.assign(s.rawBody, h), (t = (c = s.rawBody).lang) !== null && t !== void 0 || (c.lang = "en-US"), (n = (d = s.rawBody).name) !== null && n !== void 0 || (d.name = "en-US-JennyNeural"), (a = (p = s.rawBody).gender) !== null && a !== void 0 || (p.gender = "Female"), s.url = "https://".concat(h.region, ".tts.speech.microsoft.com/cognitiveservices/v1")) : (s.isTextInputDisabled = !0, s.canSendMessage = function() {
      return !1;
    }, setTimeout(function() {
      e.addMessage({
        error: i.REGION_ERROR_MESSAGE
      });
    })), s;
  }
  return J(i, r), _(i, [{
    key: "preprocessBody",
    value: function(t, n) {
      var a = n[n.length - 1].text;
      if (a) return "<speak version='1.0' xml:lang='".concat(t.lang, `'>
      <voice xml:lang='`).concat(t.lang, "' xml:gender='").concat(t.gender, "' name='").concat(t.name, `'>
        `).concat(a, `
      </voice>
    </speak>`);
    }
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s) {
        var o;
        return m().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              if (this.connectSettings) {
                u.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              o = this.preprocessBody(this.rawBody, s), ye.request(this, o, a, !1);
            case 4:
            case "end":
              return u.stop();
          }
        }, n, this);
      }));
      function t(n, a) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        return m().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              return o.abrupt("return", new Promise(function(l) {
                var u = new FileReader();
                u.readAsDataURL(a), u.onload = function(c) {
                  l({
                    files: [{
                      src: c.target.result,
                      type: "audio"
                    }]
                  });
                };
              }));
            case 1:
            case "end":
              return o.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }]);
}(qi);
xr.HELP_LINK = // eslint-disable-next-line max-len
"https://learn.microsoft.com/en-GB/azure/cognitive-services/speech-service/get-started-text-to-speech?tabs=windows%2Cterminal&pivots=programming-language-rest", xr.REGION_ERROR_MESSAGE = // eslint-disable-next-line max-len
"Please define a region config property. [More Information](https://deepchat.dev/docs/directConnection/Azure#TextToSpeech)";
var Ql = xr, Mr = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    E(this, i);
    var n, a, s, o = (a = (n = e.directConnection) == null ? void 0 : n.azure) == null ? void 0 : a.speechToText, l = (s = e.directConnection) == null ? void 0 : s.azure, u = {
      audio: {
        files: {
          acceptedFormats: ".wav,.ogg"
        }
      }
    };
    if (t = K(this, i, [e, kt.buildSpeechToTextHeaders, o.region, l, u]), t.permittedErrorPrefixes = [i.REGION_ERROR_MESSAGE], t.introPanelMarkUp = `
    <div style="width: 100%; text-align: center; margin-left: -10px"><b>Azure Speech To Text</b></div>
    <p><b>Upload a .wav or .ogg audio file</b> to transcribe it into text.
    <p>
      Click <a href="`.concat(i.HELP_LINK, `">here</a> for more info.
    </p>`), t.url = "", t.isTextInputDisabled = !0, t.textInputPlaceholderText = "Upload an audio file", !o.region) t.isTextInputDisabled = !0, t.canSendMessage = function() {
      return !1;
    }, setTimeout(function() {
      e.addMessage({
        error: i.REGION_ERROR_MESSAGE
      });
    });
    else {
      t.canSendMessage = i.canFileSendMessage;
      var c = o.lang || "en-US";
      t.url = "https://".concat(o.region, ".stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=").concat(c, "&format=detailed"), t.recordAudio = void 0;
    }
    return t;
  }
  return J(i, r), _(i, [{
    key: "callServiceAPI",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s, o) {
        var l, u;
        return m().wrap(function(d) {
          for (; ; ) switch (d.prev = d.next) {
            case 0:
              if ((l = this.connectSettings) != null && l.headers) {
                d.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              if (o != null && o[0]) {
                d.next = 4;
                break;
              }
              throw new Error("No file was added");
            case 4:
              (u = this.connectSettings) != null && u.headers && (this.connectSettings.headers["Content-Type"] = o[0].name.toLocaleLowerCase().endsWith(".wav") ? "audio/wav; codecs=audio/pcm; samplerate=16000" : "audio/ogg; codecs=opus"), ye.request(this, o[0], a, !1);
            case 5:
            case "end":
              return d.stop();
          }
        }, n, this);
      }));
      function t(n, a, s) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        return m().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              if (!a.error) {
                o.next = 2;
                break;
              }
              throw a.error;
            case 2:
              return o.abrupt("return", {
                text: a.DisplayText || ""
              });
            case 3:
            case "end":
              return o.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }], [{
    key: "canFileSendMessage",
    value: function(t, n) {
      return !!(n != null && n[0]);
    }
  }]);
}(qi);
Mr.HELP_LINK = // eslint-disable-next-line max-len
"https://learn.microsoft.com/en-GB/azure/cognitive-services/speech-service/get-started-text-to-speech?tabs=windows%2Cterminal&pivots=programming-language-rest", Mr.REGION_ERROR_MESSAGE = // eslint-disable-next-line max-len
"Please define a region config property. [More Information](https://deepchat.dev/docs/directConnection/Azure#SpeechToText)";
var eu = Mr, tu = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    E(this, i);
    var n, a, s, o = (a = (n = e.directConnection) == null ? void 0 : n.azure) == null ? void 0 : a.translation, l = (s = e.directConnection) == null ? void 0 : s.azure;
    return t = K(this, i, [e, kt.buildTranslationKeyVerificationDetails(o.region), kt.buildTranslationHeaders.bind({}, o == null ? void 0 : o.region), l]), t.insertKeyPlaceholderText = "Azure Translate Subscription Key", t.keyHelpUrl = // eslint-disable-next-line max-len
    "https://learn.microsoft.com/en-us/azure/api-management/api-management-subscriptions#create-and-manage-subscriptions-in-azure-portal", t.url = "", t.url = "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=".concat(o.language || "es"), t;
  }
  return J(i, r), _(i, [{
    key: "preprocessBody",
    value: function(t) {
      var n = t[t.length - 1].text;
      if (n) return [{
        Text: n
      }];
    }
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s) {
        var o;
        return m().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              if (this.connectSettings) {
                u.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              o = this.preprocessBody(s), ye.request(this, o, a);
            case 4:
            case "end":
              return u.stop();
          }
        }, n, this);
      }));
      function t(n, a) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s;
        return m().wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              if (!Array.isArray(a)) {
                l.next = 2;
                break;
              }
              return l.abrupt("return", {
                text: ((s = a[0].translations) == null ? void 0 : s[0].text) || ""
              });
            case 2:
              throw a.error;
            case 3:
            case "end":
              return l.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }]);
}(Ie), zi = /* @__PURE__ */ function(r) {
  function i(e, t, n, a, s) {
    var o, l, u;
    E(this, i);
    var c, d, p, h, g = JSON.parse(JSON.stringify(e.directConnection)), k = t || Ae.buildKeyVerificationDetails(), S = n || Ae.buildHeaders, T = a || g.openAI;
    u = K(this, i, [e, k, S, T]), u.insertKeyPlaceholderText = "OpenAI API Key", u.keyHelpUrl = "https://platform.openai.com/account/api-keys", u.url = "https://api.openai.com/v1/chat/completions", u.permittedErrorPrefixes = ["Incorrect"], u.asyncCallInProgress = !1, u._systemMessage = i.generateSystemMessage("You are a helpful assistant.");
    var A = s || ((c = g.openAI) == null ? void 0 : c.chat);
    if (G(A) == "object") {
      A.system_prompt && (u._systemMessage = i.generateSystemMessage(A.system_prompt));
      var D = (p = (d = e.directConnection) == null ? void 0 : d.openAI) == null ? void 0 : p.chat, N = D.function_handler;
      N && (u._functionHandler = N), u.cleanConfig(A), Object.assign(u.rawBody, A);
    }
    return (o = u.maxMessages) !== null && o !== void 0 || (u.maxMessages = -1), (l = (h = u.rawBody).model) !== null && l !== void 0 || (h.model = "gpt-4o"), u;
  }
  return J(i, r), _(i, [{
    key: "cleanConfig",
    value: function(t) {
      delete t.system_prompt, delete t.function_handler;
    }
  }, {
    key: "preprocessBody",
    value: (
      // prettier-ignore
      function(t, n) {
        var a, s = JSON.parse(JSON.stringify(t)), o = qr.getCharacterLimitMessages(n, this.totalMessagesMaxCharLength ? this.totalMessagesMaxCharLength - this._systemMessage.content.length : -1).map(function(l) {
          return {
            content: i.getContent(l),
            role: l.role === W.USER_ROLE ? "user" : "assistant"
          };
        });
        return n.find(function(l) {
          return l.files && l.files.length > 0;
        }) && ((a = s.max_tokens) !== null && a !== void 0 || (s.max_tokens = 300)), s.messages = [this._systemMessage].concat(Rn(o)), s;
      }
    )
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s) {
        var o, l;
        return m().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              if (this.connectSettings) {
                c.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              o = this.preprocessBody(this.rawBody, s), l = this.stream, l && (G(l) != "object" || !l.simulation) || o.stream ? (o.stream = !0, Te.request(this, o, a)) : ye.request(this, o, a);
            case 4:
            case "end":
              return c.stop();
          }
        }, n, this);
      }));
      function t(n, a) {
        return e.apply(this, arguments);
      }
      return t;
    }()
    // prettier-ignore
  }, {
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s, o) {
        var l, u, c, d;
        return m().wrap(function(h) {
          for (; ; ) switch (h.prev = h.next) {
            case 0:
              if (!a.error) {
                h.next = 2;
                break;
              }
              throw a.error.message;
            case 2:
              return h.abrupt("return", (u = (l = a.choices) == null ? void 0 : l[0]) != null && u.delta ? this.extractStreamResult(a.choices[0], s, o) : (d = (c = a.choices) == null ? void 0 : c[0]) != null && d.message ? a.choices[0].message.tool_calls ? this.handleTools(a.choices[0].message, s, o) : {
                text: a.choices[0].message.content
              } : {
                text: ""
              });
            case 3:
            case "end":
              return h.stop();
          }
        }, n, this);
      }));
      function t(n, a, s) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "extractStreamResult",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s, o) {
        var l = this, u, c, d;
        return m().wrap(function(h) {
          for (; ; ) switch (h.prev = h.next) {
            case 0:
              if (u = a.delta, c = a.finish_reason, c !== "tool_calls") {
                h.next = 7;
                break;
              }
              return this.asyncCallInProgress = !0, d = {
                tool_calls: this._streamToolCalls
              }, h.abrupt("return", (this._streamToolCalls = void 0, this.handleTools(d, s, o)));
            case 7:
              u != null && u.tool_calls && (this._streamToolCalls ? u.tool_calls.forEach(function(g, k) {
                l._streamToolCalls && (l._streamToolCalls[k].function.arguments += g.function.arguments);
              }) : this._streamToolCalls = u.tool_calls);
            case 8:
              return h.abrupt("return", {
                text: (u == null ? void 0 : u.content) || ""
              });
            case 9:
            case "end":
              return h.stop();
          }
        }, n, this);
      }));
      function t(n, a, s) {
        return e.apply(this, arguments);
      }
      return t;
    }()
    // prettier-ignore
  }, {
    key: "handleTools",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s, o) {
        var l, u, c, d, p, h, g, k, S, T, A;
        return m().wrap(function(N) {
          for (; ; ) switch (N.prev = N.next) {
            case 0:
              if (!(!a.tool_calls || !s || !o || !this._functionHandler)) {
                N.next = 2;
                break;
              }
              throw Error("Please define the `function_handler` property inside the [openAI](https://deepchat.dev/docs/directConnection/openAI#Chat) object.");
            case 2:
              return h = JSON.parse(JSON.stringify(o)), g = a.tool_calls.map(function(x) {
                return {
                  name: x.function.name,
                  arguments: x.function.arguments
                };
              }), N.next = 6, (l = this._functionHandler) == null ? void 0 : l.call(this, g);
            case 6:
              if (k = N.sent, Array.isArray(k)) {
                N.next = 17;
                break;
              }
              if (!k.text) {
                N.next = 16;
                break;
              }
              return S = {
                text: k.text
              }, N.next = 12, (c = (u = this.deepChat).responseInterceptor) == null ? void 0 : c.call(u, S);
            case 12:
              if (N.t0 = N.sent, N.t0) {
                N.next = 15;
                break;
              }
              N.t0 = S;
            case 15:
              return N.abrupt("return", N.t0);
            case 16:
              throw Error(Ae.FUNCTION_TOOL_RESP_ERROR);
            case 17:
              return N.next = 19, Promise.all(k);
            case 19:
              if (T = N.sent, h.messages.push({
                tool_calls: a.tool_calls,
                role: "assistant",
                content: null
              }), !(!T.find(function(x) {
                var Y = x.response;
                return typeof Y != "string";
              }) && g.length === T.length)) {
                N.next = 40;
                break;
              }
              return T.forEach(function(x, Y) {
                var de, ee = (de = a.tool_calls) == null ? void 0 : de[Y];
                h == null || h.messages.push({
                  role: "tool",
                  tool_call_id: ee == null ? void 0 : ee.id,
                  name: ee == null ? void 0 : ee.function.name,
                  content: x.response
                });
              }), delete h.tools, delete h.tool_choice, delete h.stream, N.prev = 22, N.next = 25, s == null ? void 0 : s(h).then(function(x) {
                return ie.processResponseByType(x);
              });
            case 25:
              return A = N.sent, N.next = 28, (p = (d = this.deepChat).responseInterceptor) == null ? void 0 : p.call(d, A);
            case 28:
              if (N.t1 = N.sent, N.t1) {
                N.next = 31;
                break;
              }
              N.t1 = A;
            case 31:
              if (A = N.t1, !A.error) {
                N.next = 34;
                break;
              }
              throw A.error.message;
            case 34:
              return N.abrupt("return", {
                text: A.choices[0].message.content || ""
              });
            case 37:
              throw N.prev = 37, N.t2 = N.catch(22), this.asyncCallInProgress = !1, N.t2;
            case 40:
              throw Error(Ae.FUNCTION_TOOL_RESP_ERROR);
            case 41:
            case "end":
              return N.stop();
          }
        }, n, this, [[22, 37]]);
      }));
      function t(n, a, s) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }], [{
    key: "generateSystemMessage",
    value: function(t) {
      return {
        role: "system",
        content: t
      };
    }
  }, {
    key: "getContent",
    value: function(t) {
      if (t.files && t.files.length > 0) {
        var n = t.files.map(function(a) {
          return {
            type: "image_url",
            image_url: {
              url: a.src
            }
          };
        });
        return t.text && t.text.trim().length > 0 && n.unshift({
          type: "text",
          text: t.text
        }), n;
      }
      return t.text;
    }
  }]);
}(Ie), nu = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    E(this, i);
    var n, a, s, o, l, u, c, d = JSON.parse(JSON.stringify(e.directConnection)), p = d.azure, h = ((a = (n = d.azure) == null ? void 0 : n.openAI) == null ? void 0 : a.urlDetails) || {}, g = (o = (s = d.azure) == null ? void 0 : s.openAI) == null ? void 0 : o.chat;
    if (t = K(this, i, [e, We.buildKeyVerificationDetails(h), We.buildHeaders, p, g]), t.permittedErrorPrefixes = [We.URL_DETAILS_ERROR_MESSAGE], t.isTextInputDisabled = !1, G(g) == "object") {
      var k = (c = (u = (l = e.directConnection) == null ? void 0 : l.azure) == null ? void 0 : u.openAI) == null ? void 0 : c.chat, S = k.function_handler;
      S && (t._functionHandler = S);
    }
    return We.validateURLDetails(h) ? t.url = i.buildURL(h) : (t.isTextInputDisabled = !0, t.canSendMessage = function() {
      return !1;
    }, setTimeout(function() {
      e.addMessage({
        error: We.URL_DETAILS_ERROR_MESSAGE
      });
    })), t;
  }
  return J(i, r), _(i, null, [{
    key: "buildURL",
    value: function(t) {
      var n = t.endpoint, a = t.deploymentId, s = t.version;
      return "".concat(n, "/openai/deployments/").concat(a, "/completions?api-version=").concat(s);
    }
  }]);
}(zi), _n = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    E(this, i);
    var n, a = e.directConnection, s = a == null ? void 0 : a.openAI, o = {
      images: {
        files: {
          acceptedFormats: ".png",
          maxNumberOfFiles: 2
        }
      }
    };
    t = K(this, i, [e, Ae.buildKeyVerificationDetails(), Ae.buildHeaders, s, o]), t.insertKeyPlaceholderText = "OpenAI API Key", t.keyHelpUrl = "https://platform.openai.com/account/api-keys", t.introPanelMarkUp = `
    <div style="width: 100%; text-align: center; margin-left: -10px"><b>OpenAI DALL·E</b></div>
    <p><b>Insert text</b> to generate an image.</p>
    <p><b>Upload 1</b> PNG image to generate its variation and optionally insert text to specify the change.</p>
    <p><b>Upload 2</b> PNG images where the second is a copy of the first with a transparent area where the edit should
      take place and text to specify the edit.</p>
    <p>Click <a href="https://platform.openai.com/docs/guides/images/introduction">here</a> for more info.</p>`, t.url = "", t.permittedErrorPrefixes = ["Incorrect", "Invalid input image"];
    var l = (n = a == null ? void 0 : a.openAI) == null ? void 0 : n.images;
    if (t.camera) {
      var u = G(l) == "object" && l.size ? Number.parseInt(l.size) : 1024;
      t.camera.files = {
        dimensions: {
          width: u,
          height: u
        }
      };
    }
    return G(l) == "object" && Object.assign(t.rawBody, l), t.canSendMessage = i.canFileSendMessage, t;
  }
  return J(i, r), _(i, [{
    key: "preprocessBody",
    value: function(t, n) {
      var a = JSON.parse(JSON.stringify(t));
      return n && n !== "" && (a.prompt = n), a;
    }
    // prettier-ignore
  }, {
    key: "callApiWithImage",
    value: function(t, n, a) {
      var s, o, l, u = (o = (s = n[n.length - 1]) == null ? void 0 : s.text) == null ? void 0 : o.trim();
      if (a[1] || u && u !== "") {
        this.url = i.IMAGE_EDIT_URL;
        var c = this.preprocessBody(this.rawBody, u);
        l = i.createFormDataBody(c, a[0], a[1]);
      } else this.url = i.IMAGE_VARIATIONS_URL, l = i.createFormDataBody(this.rawBody, a[0]);
      ie.tempRemoveContentHeader(this.connectSettings, ye.request.bind(this, this, l, t), !1);
    }
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s, o) {
        var l, u;
        return m().wrap(function(d) {
          for (; ; ) switch (d.prev = d.next) {
            case 0:
              if ((l = this.connectSettings) != null && l.headers) {
                d.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              if (!(o != null && o[0])) {
                d.next = 6;
                break;
              }
              this.callApiWithImage(a, s, o), d.next = 11;
              break;
            case 6:
              if (this.connectSettings) {
                d.next = 8;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 8:
              this.url = i.IMAGE_GENERATION_URL, u = this.preprocessBody(this.rawBody, s[s.length - 1].text), ye.request(this, u, a);
            case 11:
            case "end":
              return d.stop();
          }
        }, n, this);
      }));
      function t(n, a, s) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        return m().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              if (!a.error) {
                o.next = 2;
                break;
              }
              throw a.error.message;
            case 2:
              return o.abrupt("return", {
                files: a.data.map(function(l) {
                  return l.url ? {
                    src: l.url,
                    type: "image"
                  } : {
                    src: "".concat(Qt).concat(l.b64_json),
                    type: "image"
                  };
                })
              });
            case 3:
            case "end":
              return o.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
    // private static readonly MODAL_MARKDOWN = `
    // 1 image:
    // - With text - edits image based on the text
    // - No text - creates a variation of the image
    // 2 images:
    // - The second image needs to be a copy of the first with a transparent area where the edit should take place.
    // Add text to describe the required modification.
    // Click here for [more info](https://platform.openai.com/docs/guides/images/introduction).
    //   `;
  }], [{
    key: "canFileSendMessage",
    value: function(t, n) {
      return !!(n != null && n[0]) || !!(t && t.trim() !== "");
    }
  }, {
    key: "createFormDataBody",
    value: function(t, n, a) {
      var s = new FormData();
      return s.append("image", n), a && s.append("mask", a), Object.keys(t).forEach(function(o) {
        s.append(o, String(t[o]));
      }), s;
    }
  }]);
}(Ie);
_n.IMAGE_GENERATION_URL = "https://api.openai.com/v1/images/generations", _n.IMAGE_VARIATIONS_URL = "https://api.openai.com/v1/images/variations", _n.IMAGE_EDIT_URL = "https://api.openai.com/v1/images/edits";
var ru = _n, au = /* @__PURE__ */ function(r) {
  function i(e) {
    var t, n;
    E(this, i);
    var a, s = JSON.parse(JSON.stringify(e.directConnection)), o = (a = s.cohere) == null ? void 0 : a.chat, l = s.cohere;
    return n = K(this, i, [e, "https://api.cohere.ai/v1/chat", "Ask me anything!", o, l]), G(o) == "object" && Object.assign(n.rawBody, o), (t = n.maxMessages) !== null && t !== void 0 || (n.maxMessages = -1), n;
  }
  return J(i, r), _(i, [{
    key: "preprocessBody",
    value: function(t, n) {
      var a = JSON.parse(JSON.stringify(t)), s = n.filter(function(o) {
        return o.text;
      });
      return a.query = s[s.length - 1].text, a.chat_history = s.slice(0, s.length - 1).map(function(o) {
        return {
          text: o.text,
          user_name: o.role === "ai" ? "CHATBOT" : "USER"
        };
      }), a;
    }
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s) {
        var o;
        return m().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              if (this.connectSettings) {
                u.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              o = this.preprocessBody(this.rawBody, s), ye.request(this, o, a);
            case 4:
            case "end":
              return u.stop();
          }
        }, n, this);
      }));
      function t(n, a) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        return m().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              if (!a.message) {
                o.next = 2;
                break;
              }
              throw a.message;
            case 2:
              return o.abrupt("return", {
                text: a.text
              });
            case 3:
            case "end":
              return o.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }]);
}(Vr), Na = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "buildHeaders",
    value: function(e) {
      return {
        Authorization: "Bearer ".concat(e),
        "Content-Type": "application/json",
        accept: "application/json"
      };
    }
    // prettier-ignore
  }, {
    key: "handleVerificationResult",
    value: function(e, t, n, a) {
      var s;
      (s = e.message) != null && s.includes("invalid request: prompt must be at least 1 token long") ? n(t) : a(_e.INVALID_KEY);
    }
  }, {
    key: "buildKeyVerificationDetails",
    value: function() {
      return {
        url: "https://api.mistral.ai/v1/models",
        method: "GET",
        handleVerificationResult: r.handleVerificationResult
      };
    }
  }]);
}(), iu = /* @__PURE__ */ function(r) {
  function i(e) {
    var t, n, a;
    E(this, i);
    var s, o = JSON.parse(JSON.stringify(e.directConnection)).mistral;
    return a = K(this, i, [e, Na.buildKeyVerificationDetails(), Na.buildHeaders, o]), a.insertKeyPlaceholderText = "Mistral API Key", a.keyHelpUrl = "https://console.mistral.ai/api-keys/", a.url = "https://api.mistral.ai/v1/chat/completions", a.permittedErrorPrefixes = ["invalid"], o && (a.cleanConfig(o), Object.assign(a.rawBody, o)), (t = a.maxMessages) !== null && t !== void 0 || (a.maxMessages = -1), (n = (s = a.rawBody).model) !== null && n !== void 0 || (s.model = "open-mistral-7b"), a;
  }
  return J(i, r), _(i, [{
    key: "cleanConfig",
    value: function(t) {
      delete t.key;
    }
    // build a single string for user
  }, {
    key: "preprocessBody",
    value: function(t, n) {
      var a = JSON.parse(JSON.stringify(t)), s = n.filter(function(o) {
        return o.text;
      });
      return a.messages = s.slice(0, s.length - 1).map(function(o) {
        return {
          text: o.text,
          user_name: o.role === "ai" ? "system" : "user"
        };
      }), a;
    }
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a, s) {
        var o;
        return m().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              if (this.connectSettings) {
                u.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              o = this.preprocessBody(this.rawBody, s), ye.request(this, o, a);
            case 4:
            case "end":
              return u.stop();
          }
        }, n, this);
      }));
      function t(n, a) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "extractResultData",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        return m().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              if (!a.message) {
                o.next = 2;
                break;
              }
              throw a.message;
            case 2:
              return o.abrupt("return", {
                text: a.text
              });
            case 3:
            case "end":
              return o.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }]);
}(Ie), su = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "create",
    value: (
      // this should only be called when no _activeService is set or is demo as otherwise we don't want to reconnect
      function(e) {
        var t = e.directConnection, n = e.connect, a = e.demo, s = e.webModel;
        if (s) return new zr(e);
        if (t) {
          if (t.openAI) return t.openAI.images ? new ru(e) : t.openAI.speechToText ? new Jl(e) : t.openAI.textToSpeech ? new Kl(e) : t.openAI.assistant ? new $l(e) : new zi(e);
          if (t.assemblyAI) return new Zl(e);
          if (t.cohere) return t.cohere.textGeneration ? new Vl(e) : t.cohere.summarization ? new Wl(e) : new au(e);
          if (t.huggingFace) return t.huggingFace.textGeneration ? new Dl(e) : t.huggingFace.summarization ? new Fl(e) : t.huggingFace.translation ? new Hl(e) : t.huggingFace.fillMask ? new zl(e) : t.huggingFace.questionAnswer ? new Bl(e) : t.huggingFace.audioSpeechRecognition ? new Nl(e) : t.huggingFace.audioClassification ? new Il(e) : t.huggingFace.imageClassification ? new Ll(e) : new jl(e);
          if (t.azure) {
            if (t.azure.openAI) {
              if (t.azure.openAI.chat) return new nu(e);
              if (t.azure.openAI.assistant) return new Gl(e);
            }
            if (t.azure.speechToText) return new eu(e);
            if (t.azure.textToSpeech) return new Ql(e);
            if (t.azure.summarization) return new Xl(e);
            if (t.azure.translation) return new tu(e);
          }
          if (t.stabilityAI) return t.stabilityAI.imageToImage ? new Ul(e) : t.stabilityAI.imageToImageUpscale ? new Ol(e) : t.stabilityAI.imageToImageMasking ? new Pl(e) : new ql(e);
          if (t.mistral) return new iu(e);
        }
        return n && (!a || !n.stream) ? new xn(e) : new xn(e, void 0, a || !0);
      }
    )
  }]);
}(), $i = /* @__PURE__ */ _(function r() {
  E(this, r);
});
$i.attibutes = {
  string: function(i) {
    return i;
  },
  number: function(i) {
    return parseFloat(i);
  },
  boolean: function(i) {
    return i === "true";
  },
  object: function(i) {
    return JSON.parse(i);
  },
  array: function(i) {
    return JSON.parse(i);
  },
  function: function(i) {
    return new Function("return ".concat(i))();
  }
};
var ou = $i;
function se(r) {
  return function(i, e) {
    Object.defineProperty(i, e, {});
    var t = i.constructor, n = e.toLocaleLowerCase();
    t._attributes_[n] = ou.attibutes[r], t._attributeToProperty_[n] = e;
  };
}
var lu = /* @__PURE__ */ function() {
  function r(i, e, t) {
    E(this, r), this._isDisplayed = !1, i ? (this._elementRef = this.createIntroPanelWithChild(i, t), this._isDisplayed = !0) : e && (this._elementRef = this.createInternalIntroPanel(e, t), this._isDisplayed = !0);
  }
  return _(r, [{
    key: "createIntroPanelWithChild",
    value: function(e, t) {
      var n = r.createIntroPanel(t);
      return e.style.display === "none" && (e.style.display = "block"), n.appendChild(e), n;
    }
  }, {
    key: "createInternalIntroPanel",
    value: function(e, t) {
      var n = r.createIntroPanel(t);
      return n.id = "internal-intro-panel", n.innerHTML = e, n;
    }
  }, {
    key: "hide",
    value: function() {
      this._isDisplayed && this._elementRef && (this._elementRef.style.display = "none", this._isDisplayed = !1);
    }
  }, {
    key: "display",
    value: function() {
      !this._isDisplayed && this._elementRef && (this._elementRef.style.display = "", this._isDisplayed = !0);
    }
  }], [{
    key: "createIntroPanel",
    value: function(e) {
      var t = document.createElement("div");
      return t.classList.add("intro-panel"), Object.assign(t.style, e), t;
    }
  }]);
}(), uu = `<?xml version="1.0" encoding="iso-8859-1"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="50 30 420 450" xml:space="preserve">
<g filter="brightness(0) saturate(100%) invert(16%) sepia(0%) saturate(1942%) hue-rotate(215deg) brightness(99%) contrast(93%)">
	<g>
		<path d="M447.933,103.629c-0.034-3.076-1.224-6.09-3.485-8.352L352.683,3.511c-0.004-0.004-0.007-0.005-0.011-0.008
			C350.505,1.338,347.511,0,344.206,0H89.278C75.361,0,64.04,11.32,64.04,25.237v461.525c0,13.916,11.32,25.237,25.237,25.237
			h333.444c13.916,0,25.237-11.32,25.237-25.237V103.753C447.96,103.709,447.937,103.672,447.933,103.629z M356.194,40.931
			l50.834,50.834h-49.572c-0.695,0-1.262-0.567-1.262-1.262V40.931z M423.983,486.763c0,0.695-0.566,1.261-1.261,1.261H89.278
			c-0.695,0-1.261-0.566-1.261-1.261V25.237c0-0.695,0.566-1.261,1.261-1.261h242.94v66.527c0,13.916,11.322,25.239,25.239,25.239
			h66.527V486.763z"/>
	</g>
</g>
<g>
	<g>
		<path d="M362.088,164.014H149.912c-6.62,0-11.988,5.367-11.988,11.988c0,6.62,5.368,11.988,11.988,11.988h212.175
			c6.62,0,11.988-5.368,11.988-11.988C374.076,169.381,368.707,164.014,362.088,164.014z"/>
	</g>
</g>
<g>
	<g>
		<path d="M362.088,236.353H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.62,5.368,11.988,11.988,11.988h212.175
			c6.62,0,11.988-5.368,11.988-11.988C374.076,241.721,368.707,236.353,362.088,236.353z"/>
	</g>
</g>
<g>
	<g>
		<path d="M362.088,308.691H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.621,5.368,11.988,11.988,11.988h212.175
			c6.62,0,11.988-5.367,11.988-11.988C374.076,314.06,368.707,308.691,362.088,308.691z"/>
	</g>
</g>
<g>
	<g>
		<path d="M256,381.031H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.621,5.368,11.988,11.988,11.988H256
			c6.62,0,11.988-5.367,11.988-11.988C267.988,386.398,262.62,381.031,256,381.031z"/>
	</g>
</g>
</svg>`, Sn = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "createImage",
    value: function(e, t, n) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, s = new Image();
      return s.src = e.src, !n && a && Oe.scrollDownOnImageLoad(s.src, t), Oe.processContent("image", s, s.src, e.name);
    }
    // WORK - image still does not scroll down when loaded
  }, {
    key: "createImageMessage",
    value: function(e, t, n, a) {
      var s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, o = r.createImage(t, e.elementRef, a, s), l = e.createNewMessageElement("", n);
      return l.bubbleElement.appendChild(o), l.bubbleElement.classList.add(r.IMAGE_BUBBLE_CLASS), {
        type: "image",
        elements: l
      };
    }
  }, {
    key: "createAudioElement",
    value: function(e, t) {
      var n = document.createElement("audio");
      return n.src = e.src, n.classList.add("audio-player"), n.controls = !0, Pt.IS_SAFARI && (n.classList.add("audio-player-safari"), n.classList.add(t === W.USER_ROLE ? "audio-player-safari-right" : "audio-player-safari-left")), n;
    }
  }, {
    key: "createNewAudioMessage",
    value: function(e, t, n, a) {
      var s = r.createAudioElement(t, n), o = e.createMessageElementsOnOrientation("", n, a);
      return o.bubbleElement.appendChild(s), o.bubbleElement.classList.add(r.AUDIO_BUBBLE_CLASS), {
        type: "audio",
        elements: o
      };
    }
  }, {
    key: "createAnyFile",
    value: function(e) {
      var t = document.createElement("div");
      t.classList.add("any-file-message-contents");
      var n = document.createElement("div");
      n.classList.add("any-file-message-icon-container");
      var a = Be.createSVGElement(uu);
      a.classList.add("any-file-message-icon"), n.appendChild(a);
      var s = document.createElement("div");
      return s.classList.add("any-file-message-text"), s.textContent = e.name || Oe.DEFAULT_FILE_NAME, t.appendChild(n), t.appendChild(s), Oe.processContent("any", t, e.src, s.textContent);
    }
  }, {
    key: "createNewAnyFileMessage",
    value: function(e, t, n, a) {
      var s = e.createMessageElementsOnOrientation("", n, a), o = r.createAnyFile(t);
      return s.bubbleElement.classList.add(r.ANY_FILE_BUBBLE_CLASS), s.bubbleElement.appendChild(o), {
        type: "file",
        elements: s
      };
    }
  }, {
    key: "createMessages",
    value: function(e, t, n) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0;
      return t.map(function(o) {
        return o.ref && (o = Oe.removeFileRef(o)), Oe.isAudioFile(o) ? r.createNewAudioMessage(e, o, n, a) : Oe.isImageFile(o) ? r.createImageMessage(e, o, n, a, s) : r.createNewAnyFileMessage(e, o, n, a);
      });
    }
    // no overwrite previous message logic as it is complex to track which files are to be overwritten
  }, {
    key: "addMessages",
    value: function(e, t, n, a) {
      r.createMessages(e, t, n, a).forEach(function(s) {
        var o = s.type, l = s.elements;
        Oe.addMessage(e, l, o, n, a);
      });
    }
  }]);
}();
Sn.IMAGE_BUBBLE_CLASS = "image-message", Sn.AUDIO_BUBBLE_CLASS = "audio-message", Sn.ANY_FILE_BUBBLE_CLASS = "any-file-message";
var Vi = Sn, cu = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "removeElements",
    value: function(e, t) {
      if (t) {
        var n = e.findIndex(function(a) {
          return a === t;
        });
        e.splice(n, 1), t == null || t.outerContainer.remove();
      }
    }
  }, {
    key: "removeFilesMessages",
    value: function(e, t) {
      var n;
      (n = t[1].files) == null || n.forEach(function(a) {
        r.removeElements(e.messageElementRefs, a);
      }), delete t[0].files, delete t[1].files;
    }
  }, {
    key: "removeTextHTMLMessage",
    value: function(e, t, n) {
      var a = t[1][n];
      r.removeElements(e.messageElementRefs, a), delete t[0][n], delete t[1][n];
    }
  }, {
    key: "updateHTMLMessage",
    value: function(e, t, n) {
      var a, s;
      if (t[1].html) et.overwriteElements(e, n, t[1].html);
      else {
        var o = et.create(e, n, t[0].role), l = ((s = t[1].files) == null ? void 0 : s[((a = t[1].files) == null ? void 0 : a.length) - 1]) || t[1].text;
        e.elementRef.insertBefore(o.outerContainer, l.outerContainer.nextSibling), e.messageElementRefs.splice(e.messageElementRefs.length - 1, 1);
        var u = e.messageElementRefs.findIndex(function(c) {
          return c === l;
        });
        e.messageElementRefs.splice(u + 1, 0, o), t[1].html = o;
      }
      t[0].html = n;
    }
    // finds beforeElement, creates new elements, remove old and adds new ones
  }, {
    key: "updateFileMessages",
    value: function(e, t, n) {
      var a, s, o = t[0].role, l = Vi.createMessages(e, n, o), u = t[1].html, c = ((s = t[1].files) == null ? void 0 : s[((a = t[1].files) == null ? void 0 : a.length) - 1]) || t[1].text, d = u || c, p = e.messageElementRefs.findIndex(function(g) {
        return g === d;
      });
      c && (p += 1);
      var h = (u == null ? void 0 : u.outerContainer) || (c == null ? void 0 : c.outerContainer.nextSibling);
      l.forEach(function(g, k) {
        var S = g.type, T = g.elements;
        Oe.setElementProps(e, T, S, o), e.elementRef.insertBefore(T.outerContainer, h), e.messageElementRefs.splice(e.messageElementRefs.length - 1, 1), e.messageElementRefs.splice(p + k, 0, T);
      }), r.removeFilesMessages(e, t), t[1].files = l.map(function(g) {
        var k = g.elements;
        return k;
      }), t[0].files = n;
    }
  }, {
    key: "updateTextMessage",
    value: function(e, t, n) {
      var a;
      if (t[1].text) e.renderText(t[1].text.bubbleElement, n);
      else {
        var s = e.createElements(n, t[0].role), o = ((a = t[1].files) == null ? void 0 : a[0]) || t[1].html;
        e.elementRef.insertBefore(s.outerContainer, o.outerContainer);
        var l = e.messageElementRefs.findIndex(function(u) {
          return u === o;
        });
        e.messageElementRefs.splice(l, 0, s), t[1].text = s;
      }
      t[0].text = n;
    }
  }, {
    key: "isElementActive",
    value: function(e) {
      var t, n;
      return Rr.isActiveElement((t = e.text) == null ? void 0 : t.bubbleElement.classList) || Rr.isActiveElement((n = e.html) == null ? void 0 : n.bubbleElement.classList);
    }
    // note that overwrite and 'deep-chat-temporary-message' are used to remove a message
  }, {
    key: "update",
    value: function(e, t, n) {
      var a = e.messageToElements[n];
      if (a) {
        if (r.isElementActive(a[1])) return console.error("Cannot update a message that is being streamed");
        t.text && r.updateTextMessage(e, a, t.text), t.html && r.updateHTMLMessage(e, a, t.html), t.files ? r.updateFileMessages(e, a, t.files) : r.removeFilesMessages(e, a), !t.text && a[1].text && r.removeTextHTMLMessage(e, a, "text"), !t.html && a[1].html && r.removeTextHTMLMessage(e, a, "html");
      } else console.error("Message index not found. Please use the `getMessages` method to find the correct index");
    }
  }]);
}(), du = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "getText",
    value: function(e, t) {
      var n;
      if (!e.directConnection && !e.connect && !e.webModel && !e.demo) return `Connect to any API using the [connect](https://deepchat.dev/docs/connect#connect-1) property or a popular service via [directConnection](https://deepchat.dev/docs/directConnection/#directConnection).
 Host AI entirely on your browser via a [webModel](https://deepchat.dev/docs/webModel).
 To get started checkout the [Start](https://deepchat.dev/start) page and live code [examples](https://deepchat.dev/examples/frameworks).
 To remove this message set the [demo](https://deepchat.dev/docs/demo#demo) property to true.`;
      if (e.directConnection) {
        if (!t.isDirectConnection()) return `Please define a valid service inside
          the [directConnection](https://deepchat.dev/docs/directConnection/#directConnection) object.`;
        var a = (n = e.directConnection.openAI) == null ? void 0 : n.chat;
        if (G(a) == "object" && a.tools && !a.function_handler) return "Please define the `function_handler` property inside the openAI [chat](https://deepchat.dev/docs/directConnection/openAI#Chat) object.";
      } else if (e.connect && !e.connect.url && !e.connect.handler) return e.demo ? e.connect.stream ? null : "When [demo](https://deepchat.dev/docs/demo) mode is enabled - the [connect](https://deepchat.dev/docs/connect#connect-1) object can only accept the [stream](https://deepchat.dev/docs/connect#Stream) property." : "Please define a `url` or a `handler` property inside the [connect](https://deepchat.dev/docs/connect#connect-1) object.";
      return null;
    }
  }]);
}(), Rr = /* @__PURE__ */ function(r) {
  function i(e, t, n) {
    var a;
    E(this, i);
    var s, o;
    a = K(this, i, [e]);
    var l = t.permittedErrorPrefixes, u = t.introPanelMarkUp, c = t.demo;
    return a._errorMessageOverrides = (s = e.errorMessages) == null ? void 0 : s.overrides, a._onClearMessages = An.onClearMessages.bind(a, e), a._onError = An.onError.bind(a, e), a._displayLoadingMessage = i.getDisplayLoadingMessage(e, t), a._permittedErrorPrefixes = l, a.addSetupMessageIfNeeded(e, t) || a.populateIntroPanel(n, u, e.introPanelStyle), a.addIntroductoryMessages(e, t), new Hr(e, a, t), a._displayServiceErrorMessages = (o = e.errorMessages) == null ? void 0 : o.displayServiceErrorMessages, e.getMessages = function() {
      return JSON.parse(JSON.stringify(a.messageToElements.map(function(d) {
        var p = Or(d, 1), h = p[0];
        return h;
      })));
    }, e.clearMessages = a.clearMessages.bind(a, t), e.refreshMessages = a.refreshTextMessages.bind(a, e.remarkable), e.scrollToBottom = Ue.scrollToBottom.bind(a, a.elementRef), e.addMessage = function(d, p) {
      a.addAnyMessage(ce(ce({}, d), {}, {
        sendUpdate: !!p
      }), !p);
    }, e.updateMessage = function(d, p) {
      return cu.update(a, d, p);
    }, t.isWebModel() && t.setUpMessages(a), c && a.prepareDemo(Ne.processDemo(c)), e.textToSpeech && yn.processConfig(e.textToSpeech, function(d) {
      a.textToSpeech = d;
    }), a;
  }
  return J(i, r), _(i, [{
    key: "prepareDemo",
    value: function(t) {
      var n;
      if (G(t) == "object") {
        if (t.displayLoading) {
          var a = t.displayLoading.history;
          a != null && a.small && vt.addMessage(this, !1), a != null && a.full && vt.addMessage(this);
        }
        t.displayErrors && (t.displayErrors.default && this.addNewErrorMessage("", ""), t.displayErrors.service && this.addNewErrorMessage("service", ""), t.displayErrors.speechToText && this.addNewErrorMessage("speechToText", "")), (n = t.displayLoading) != null && n.message && this.addLoadingMessage(), t.response && (this.customDemoResponse = t.response);
      }
    }
  }, {
    key: "addSetupMessageIfNeeded",
    value: function(t, n) {
      var a = du.getText(t, n);
      if (a) {
        var s = this.createAndAppendNewMessageElement(a, W.AI_ROLE);
        this.applyCustomStyles(s, W.AI_ROLE, !1);
      }
      return !!a;
    }
    // WORK - const file for deep chat classes
  }, {
    key: "addIntroductoryMessages",
    value: function(t, n) {
      var a, s = this;
      t != null && t.shadowRoot && (this._introMessage = t.introMessage);
      var o = this._introMessage;
      n != null && n.isWebModel() && ((a = o) !== null && a !== void 0 || (o = n.getIntroMessage(o))), o && (Array.isArray(o) ? o.forEach(function(l, u) {
        u !== 0 && W.hideRoleElements(s.messageElementRefs, !!s._avatars, !!s._names), s.addIntroductoryMessage(l);
      }) : this.addIntroductoryMessage(o));
    }
  }, {
    key: "addIntroductoryMessage",
    value: function(t) {
      var n, a;
      t != null && t.text ? a = this.createAndAppendNewMessageElement(t.text, W.AI_ROLE) : t != null && t.html && (a = et.add(this, t.html, W.AI_ROLE, this.messageElementRefs)), a && (this.applyCustomStyles(a, W.AI_ROLE, !1, (n = this.messageStyles) == null ? void 0 : n.intro), a.outerContainer.classList.add(gt.INTRO_CLASS));
    }
  }, {
    key: "removeIntroductoryMessage",
    value: function() {
      var t = this.messageElementRefs[0];
      t.outerContainer.classList.contains(gt.INTRO_CLASS) && (t.outerContainer.remove(), this.messageElementRefs.shift());
    }
  }, {
    key: "addAnyMessage",
    value: function(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      return t.error ? this.addNewErrorMessage("service", t.error) : this.addNewMessage(t, n, a);
    }
    // this should not be activated by streamed messages
  }, {
    key: "addNewMessage",
    value: function(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, s = i.createMessageContent(t), o = {
        status: t.overwrite
      };
      if (!t.ignoreText && s.text !== void 0 && t.text !== null && (this.addNewTextMessage(s.text, s.role, o, a), !n && this.textToSpeech && s.role !== W.USER_ROLE && yn.speak(s.text, this.textToSpeech)), s.files && Array.isArray(s.files) && Vi.addMessages(this, s.files, s.role, a), s.html !== void 0 && s.html !== null) {
        var l = et.add(this, s.html, s.role, this.messageElementRefs, o, a);
        Jt.isElementTemporary(l) && delete s.html;
      }
      return this.isValidMessageContent(s) && !a && this.updateStateOnMessage(s, t.overwrite, t.sendUpdate, n), s;
    }
  }, {
    key: "isValidMessageContent",
    value: function(t) {
      return t.text || t.html || t.files && t.files.length > 0;
    }
  }, {
    key: "updateStateOnMessage",
    value: function(t, n) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      if (!n) {
        var o = W.generateMessageBody(t, this.messageElementRefs);
        this.messageToElements.push([t, o]);
      }
      a && this.sendClientUpdate(t, s);
    }
    // prettier-ignore
  }, {
    key: "removeMessageOnError",
    value: function() {
      var t = this.messageElementRefs[this.messageElementRefs.length - 1], n = t == null ? void 0 : t.bubbleElement;
      (n != null && n.classList.contains(tt.MESSAGE_CLASS) && n.textContent === "" || i.isTemporaryElement(t)) && this.removeLastMessage();
    }
    // prettier-ignore
  }, {
    key: "addNewErrorMessage",
    value: function(t, n) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, s, o, l, u, c;
      this.removeMessageOnError();
      var d = this.getPermittedMessage(n) || ((s = this._errorMessageOverrides) == null ? void 0 : s[t]) || ((o = this._errorMessageOverrides) == null ? void 0 : o.default) || "Error, please try again.", p = this.createMessageElementsOnOrientation(d, "error", a);
      W.hideRoleElements(this.messageElementRefs, !!this._avatars, !!this._names);
      var h = p.bubbleElement, g = p.outerContainer;
      h.classList.add("error-message-text"), this.renderText(h, d);
      var k = bn.extractParticularSharedStyles(["fontSize", "fontFamily"], (l = this.messageStyles) == null ? void 0 : l.default);
      bn.applyCustomStylesToElements(p, !1, k), bn.applyCustomStylesToElements(p, !1, (u = this.messageStyles) == null ? void 0 : u.error), a || this.elementRef.appendChild(g), this.textToSpeech && yn.speak(d, this.textToSpeech), (c = this._onError) == null || c.call(this, d);
    }
  }, {
    key: "getPermittedMessage",
    value: function(t) {
      if (t)
        for (var n = i.extractErrorMessages(t), a = 0; a < n.length; a += 1) {
          var s = n[a];
          if (typeof s == "string") {
            if (this._displayServiceErrorMessages) return s;
            if (this._permittedErrorPrefixes) {
              var o = i.checkPermittedErrorPrefixes(this._permittedErrorPrefixes, s);
              if (o) return o;
            }
          }
        }
    }
  }, {
    key: "removeError",
    value: function() {
      this.isLastMessageError() && W.getLastMessageElement(this.elementRef).remove();
    }
  }, {
    key: "addDefaultLoadingMessage",
    value: function() {
      var t = this.createMessageElements("", W.AI_ROLE), n = t.bubbleElement;
      t.bubbleElement.classList.add(mt.DOTS_CONTAINER_CLASS);
      var a = document.createElement("div");
      return a.classList.add("loading-message-dots"), n.appendChild(a), mt.setDots(n, this.messageStyles), t;
    }
  }, {
    key: "addLoadingMessage",
    value: function() {
      var t, n, a, s, o, l;
      if (this._displayLoadingMessage) {
        var u = (a = (n = (t = this.messageStyles) == null ? void 0 : t.loading) == null ? void 0 : n.message) == null ? void 0 : a.html, c = u ? et.createElements(this, u, W.AI_ROLE, !1) : this.addDefaultLoadingMessage();
        this.elementRef.appendChild(c.outerContainer), c.bubbleElement.classList.add(mt.BUBBLE_CLASS), this.applyCustomStyles(c, W.AI_ROLE, !1, (l = (o = (s = this.messageStyles) == null ? void 0 : s.loading) == null ? void 0 : o.message) == null ? void 0 : l.styles), Ue.scrollToBottom(this.elementRef);
      }
    }
  }, {
    key: "populateIntroPanel",
    value: function(t, n, a) {
      (t || n) && (this._introPanel = new lu(t, n, a), this._introPanel._elementRef && (Nt.apply(this, this._introPanel._elementRef), this.elementRef.appendChild(this._introPanel._elementRef)));
    }
  }, {
    key: "addMultipleFiles",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        return m().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              return o.abrupt("return", Promise.all((a || []).map(function(l) {
                return new Promise(function(u) {
                  if (!l.type || l.type === "any") {
                    var c = l.file.name || Oe.DEFAULT_FILE_NAME;
                    u({
                      name: c,
                      type: "any",
                      ref: l.file
                    });
                  } else {
                    var d = new FileReader();
                    d.readAsDataURL(l.file), d.onload = function() {
                      u({
                        src: d.result,
                        type: l.type,
                        ref: l.file
                      });
                    };
                  }
                });
              })));
            case 1:
            case "end":
              return o.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "clearMessages",
    value: (
      // WORK - update all message classes to use deep-chat prefix
      function(t, n) {
        var a, s, o, l = [];
        this.messageElementRefs.forEach(function(c) {
          i.isActiveElement(c.bubbleElement.classList) ? l.push(c) : c.outerContainer.remove();
        }), Array.from(this.elementRef.children).forEach(function(c) {
          var d, p = (d = c.children[0]) == null ? void 0 : d.children[0];
          p != null && p.classList.contains("error-message-text") && c.remove();
        }), this.messageElementRefs = l;
        var u = this.messageToElements.filter(function(c) {
          return c[1].text && i.isActiveElement(c[1].text.bubbleElement.classList) || c[1].html && i.isActiveElement(c[1].html.bubbleElement.classList);
        });
        (a = this.messageToElements).splice.apply(a, [0, this.messageToElements.length].concat(Rn(u))), n !== !1 && ((s = this._introPanel) != null && s._elementRef && this._introPanel.display(), this.addIntroductoryMessages()), (o = this._onClearMessages) == null || o.call(this), delete t.sessionId;
      }
    )
  }], [{
    key: "getDisplayLoadingMessage",
    value: function(t, n) {
      var a;
      return n.websocket ? !1 : (a = t.displayLoadingBubble) !== null && a !== void 0 ? a : !0;
    }
  }, {
    key: "checkPermittedErrorPrefixes",
    value: function(t, n) {
      for (var a = 0; a < t.length; a += 1) if (n.startsWith(t[a])) return n;
    }
  }, {
    key: "extractErrorMessages",
    value: function(t) {
      return Array.isArray(t) ? t : t instanceof Error ? [t.message] : typeof t == "string" ? [t] : G(t) == "object" && t.error ? [t.error] : [];
    }
  }, {
    key: "isActiveElement",
    value: function(t) {
      return t ? t.contains(mt.BUBBLE_CLASS) || t.contains(vt.CLASS) || t.contains(tt.MESSAGE_CLASS) : !1;
    }
  }]);
}(gt), $t = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "adjustInputPadding",
    value: function(e, t) {
      t["inside-left"].length > 0 && e.classList.add("text-input-inner-left-adjustment"), t["inside-right"].length > 0 && e.classList.add("text-input-inner-right-adjustment");
    }
  }, {
    key: "adjustForOutsideButton",
    value: function(e, t, n) {
      n["outside-right"].length === 0 && n["outside-left"].length > 0 ? (e[0].classList.add(r.INPUT_OUTSIDE_LEFT_SMALL_ADJUSTMENT_CLASS), t.classList.add(r.INPUT_OUTSIDE_LEFT_SMALL_ADJUSTMENT_CLASS)) : n["outside-left"].length === 0 && n["outside-right"].length > 0 && (e[3].classList.add(r.INPUT_OUTSIDE_RIGHT_SMALL_ADJUSTMENT_CLASS), t.classList.add(r.INPUT_OUTSIDE_RIGHT_SMALL_ADJUSTMENT_CLASS));
    }
    // when submit is the only button
    // when submit button is outside by itself - we increase the height for a better look
  }, {
    key: "adjustOutsideSubmit",
    value: function(e, t, n) {
      if (!(n["inside-left"].length > 0 || n["inside-right"].length > 0)) {
        if (n["outside-right"].length === 0 && n["outside-left"].length > 0) return e[0].classList.add(r.INPUT_OUTSIDE_LEFT_ADJUSTMENT_CLASS), t.classList.add(r.INPUT_OUTSIDE_LEFT_ADJUSTMENT_CLASS), n["outside-left"].map(function(a) {
          return a.button.elementRef.classList.add("submit-button-enlarged");
        });
        if (n["outside-left"].length === 0 && n["outside-right"].length > 0) return e[3].classList.add(r.INPUT_OUTSIDE_RIGHT_ADJUSTMENT_CLASS), t.classList.add(r.INPUT_OUTSIDE_RIGHT_ADJUSTMENT_CLASS), n["outside-right"].map(function(a) {
          return a.button.elementRef.classList.add("submit-button-enlarged");
        });
      }
    }
  }, {
    key: "set",
    value: function(e, t, n, a) {
      r.adjustOutsideSubmit(t, n, a) || r.adjustForOutsideButton(t, n, a), r.adjustInputPadding(e, a);
    }
  }]);
}();
$t.INPUT_OUTSIDE_LEFT_ADJUSTMENT_CLASS = "text-input-container-left-adjustment", $t.INPUT_OUTSIDE_RIGHT_ADJUSTMENT_CLASS = "text-input-container-right-adjustment", $t.INPUT_OUTSIDE_LEFT_SMALL_ADJUSTMENT_CLASS = "text-input-container-left-small-adjustment", $t.INPUT_OUTSIDE_RIGHT_SMALL_ADJUSTMENT_CLASS = "text-input-container-right-small-adjustment";
var fu = $t, Mn = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "create",
    value: function() {
      return Array.from({
        length: 4
      }).map(function(e, t) {
        var n = document.createElement("div");
        return n.classList.add("input-button-container"), (t === 0 || t === 3) && n.classList.add("outer-button-container"), (t === 1 || t === 2) && n.classList.add("inner-button-container"), n;
      });
    }
  }, {
    key: "add",
    value: function(e, t) {
      e.insertBefore(t[1], e.firstChild), e.insertBefore(t[0], e.firstChild), e.appendChild(t[2]), e.appendChild(t[3]);
    }
  }, {
    key: "getContainerIndex",
    value: function(e) {
      return e === "outside-left" ? 0 : e === "inside-left" ? 1 : e === "inside-right" ? 2 : 3;
    }
  }, {
    key: "addButton",
    value: function(e, t, n) {
      t.classList.add(n);
      var a = r.getContainerIndex(n);
      e[a].appendChild(t), a === 3 && t.classList.add("outside-right");
    }
  }]);
}(), Da = ["camera", "gifs", "images", "audio", "mixedFiles", "submit", "microphone"], yt = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "createTextElement",
    value: function(e) {
      var t = document.createElement("div");
      return t.classList.add("text-button"), t.innerText = e, t;
    }
  }, {
    key: "createElement",
    value: function(e, t) {
      return t ? r.createTextElement(e) : Be.createSVGElement(e);
    }
  }, {
    key: "createCustomElement",
    value: function(e, t) {
      var n, a, s, o, l = t == null ? void 0 : t[e];
      if ((n = l == null ? void 0 : l.svg) != null && n.content) return r.createElement((a = l == null ? void 0 : l.svg) == null ? void 0 : a.content, !1);
      if ((s = l == null ? void 0 : l.text) != null && s.content) return r.createElement((o = l == null ? void 0 : l.text) == null ? void 0 : o.content, !0);
    }
  }, {
    key: "processElement",
    value: function(e, t) {
      t != null && t.classList.contains("text-button") || e.classList.add("input-button-svg");
    }
    // publicly used for creating elements that do not change state in a sequence
    // prettier-ignore
  }, {
    key: "createSpecificStateElement",
    value: function(e, t, n) {
      var a;
      return n && (a = r.createCustomElement(t, n)), r.processElement(e, a), a;
    }
    // https://github.com/OvidijusParsiunas/deep-chat/issues/175
    // isDropup here is only determined by the user and not when moved to dropup automatically
    // prettier-ignore
  }, {
    key: "createInnerElement",
    value: function(e, t, n, a) {
      var s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, o, l;
      return s && !((l = (o = a == null ? void 0 : a[n]) == null ? void 0 : o.svg) != null && l.content) ? t : r.createSpecificStateElement(e, n, a) || t;
    }
  }]);
}(), pu = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM23 15h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path>
</svg>`, ft = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "unsetAllCSS",
    value: function(e, t) {
      var n, a;
      t.container && Re.unsetAllCSSMouseStates(e, t.container), (n = t.svg) != null && n.styles && Re.unsetAllCSSMouseStates(e.children[0], t.svg.styles), (a = t.text) != null && a.styles && Re.unsetAllCSSMouseStates(e.children[0], t.text.styles);
    }
  }, {
    key: "unsetActionCSS",
    value: function(e, t) {
      var n, a;
      t.container && Re.unsetActivityCSSMouseStates(e, t.container), (n = t.svg) != null && n.styles && Re.unsetActivityCSSMouseStates(e.children[0], t.svg.styles), (a = t.text) != null && a.styles && Re.unsetActivityCSSMouseStates(e.children[0], t.text.styles);
    }
  }, {
    key: "setElementsCSS",
    value: function(e, t, n) {
      var a, s, o, l, u;
      Object.assign(e.style, (a = t.container) == null ? void 0 : a[n]), Object.assign(e.children[0].style, (o = (s = t.svg) == null ? void 0 : s.styles) == null ? void 0 : o[n]), Object.assign(e.children[0].style, (u = (l = t.text) == null ? void 0 : l.styles) == null ? void 0 : u[n]);
    }
  }, {
    key: "setElementCssUpToState",
    value: function(e, t, n) {
      r.setElementsCSS(e, t, "default"), n !== "default" && (r.setElementsCSS(e, t, "hover"), n !== "hover" && r.setElementsCSS(e, t, "click"));
    }
  }]);
}(), en = /* @__PURE__ */ function() {
  function r(i, e, t, n) {
    E(this, r), this._mouseState = {
      state: "default"
    }, this.elementRef = i, this._customStyles = t, this.position = e, this.dropupText = n;
  }
  return _(r, [{
    key: "buttonMouseLeave",
    value: function(e) {
      this._mouseState.state = "default", e && (ft.unsetAllCSS(this.elementRef, e), ft.setElementsCSS(this.elementRef, e, "default"));
    }
  }, {
    key: "buttonMouseEnter",
    value: function(e) {
      this._mouseState.state = "hover", e && ft.setElementsCSS(this.elementRef, e, "hover");
    }
  }, {
    key: "buttonMouseUp",
    value: function(e) {
      e && ft.unsetActionCSS(this.elementRef, e), this.buttonMouseEnter(e);
    }
  }, {
    key: "buttonMouseDown",
    value: function(e) {
      this._mouseState.state = "click", e && ft.setElementsCSS(this.elementRef, e, "click");
    }
    // be careful not to use onclick as that is used for button functionality
  }, {
    key: "setEvents",
    value: function(e) {
      this.elementRef.onmousedown = this.buttonMouseDown.bind(this, e), this.elementRef.onmouseup = this.buttonMouseUp.bind(this, e), this.elementRef.onmouseenter = this.buttonMouseEnter.bind(this, e), this.elementRef.onmouseleave = this.buttonMouseLeave.bind(this, e);
    }
  }, {
    key: "unsetCustomStateStyles",
    value: function(e) {
      if (this._customStyles) for (var t = 0; t < e.length; t += 1) {
        var n = e[t], a = n && this._customStyles[n];
        a && ft.unsetActionCSS(this.elementRef, a);
      }
    }
  }, {
    key: "reapplyStateStyle",
    value: function(e, t) {
      if (this._customStyles) {
        t && this.unsetCustomStateStyles(t);
        var n = this._customStyles[e];
        n && ft.setElementCssUpToState(this.elementRef, n, this._mouseState.state), this.setEvents(n);
      }
    }
  }]);
}(), Ba = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "focusItemWhenOnEdge",
    value: function(e, t) {
      var n = t ? e.children[0] : e.children[e.children.length - 1];
      r.focusSiblingItem(n, e, t, !0);
    }
    // isEdgeItem means is it a start or end item
    // prettier-ignore
  }, {
    key: "focusSiblingItem",
    value: function(e, t, n) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, s = a ? e : e[n ? "nextSibling" : "previousSibling"];
      s ? (e.dispatchEvent(new MouseEvent("mouseleave")), s.dispatchEvent(new MouseEvent("mouseenter"))) : (e.dispatchEvent(new MouseEvent("mouseleave")), r.focusItemWhenOnEdge(t, n));
    }
  }]);
}(), hu = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "addItemEvents",
    value: function(e, t, n, a) {
      mi.add(t, a), t.addEventListener("click", function() {
        n.click();
      }), t.addEventListener("mouseenter", function(s) {
        e.highlightedItem = s.target;
      }), t.addEventListener("mouseleave", function() {
        e.highlightedItem = void 0;
      });
    }
  }, {
    key: "createItemText",
    value: function(e, t) {
      var n = document.createElement("div");
      return Object.assign(n.style, t), n.classList.add("dropup-menu-item-text"), n.textContent = e || "File", n;
    }
  }, {
    key: "createItemIcon",
    value: function(e, t) {
      var n = document.createElement("div");
      return Object.assign(n.style, t), n.classList.add("dropup-menu-item-icon"), n.appendChild(e.children[0]), n;
    }
  }, {
    key: "populateItem",
    value: function(e, t, n, a) {
      var s = e.children[0];
      s.classList.contains("text-button") ? t.appendChild(r.createItemText(s.textContent, a == null ? void 0 : a.text)) : (t.appendChild(r.createItemIcon(e, a == null ? void 0 : a.iconContainer)), t.appendChild(r.createItemText(n, a == null ? void 0 : a.text)));
    }
    // prettier-ignore
  }, {
    key: "createItem",
    value: function(e, t, n) {
      var a, s = t.elementRef, o = t.dropupText, l = document.createElement("div");
      Object.assign(l.style, (a = n == null ? void 0 : n.item) == null ? void 0 : a.default), r.populateItem(s, l, o, n), l.classList.add("dropup-menu-item");
      var u = Re.processStateful((n == null ? void 0 : n.item) || {}, {
        backgroundColor: "#f3f3f3"
      }, {
        backgroundColor: "#ebebeb"
      });
      return r.addItemEvents(e, l, s, u), l;
    }
  }]);
}(), mu = /* @__PURE__ */ function() {
  function r(i, e) {
    var t = this;
    E(this, r);
    var n;
    this._isOpen = !0, this._styles = e, this.elementRef = r.createElement((n = this._styles) == null ? void 0 : n.container), this.close(), setTimeout(function() {
      return t.addWindowEvents(i);
    });
  }
  return _(r, [{
    key: "open",
    value: function() {
      this.elementRef.style.display = "block", this._isOpen = !0;
    }
  }, {
    key: "close",
    value: function() {
      this._isOpen && (this.elementRef.style.display = "none", this._isOpen = !1);
    }
  }, {
    key: "toggle",
    value: function() {
      this._isOpen ? this.close() : this.open();
    }
  }, {
    key: "addItem",
    value: function(e) {
      var t = hu.createItem(this, e, this._styles);
      this.elementRef.appendChild(t);
    }
    // prettier-ignore
  }, {
    key: "addWindowEvents",
    value: function(e) {
      this.clickEvent = this.windowClick.bind(this, e), window.addEventListener("click", this.clickEvent), this.keyDownEvent = this.windowKeyDown.bind(this, e), window.addEventListener("keydown", this.keyDownEvent);
    }
  }, {
    key: "windowClick",
    value: function(e, t) {
      var n;
      !e.isConnected && this.clickEvent ? window.removeEventListener("click", this.clickEvent) : e.parentElement !== ((n = t.target.shadowRoot) == null ? void 0 : n.children[0]) && this.close();
    }
    // prettier-ignore
  }, {
    key: "windowKeyDown",
    value: function(e, t) {
      var n, a, s;
      !e.isConnected && this.keyDownEvent ? window.removeEventListener("keydown", this.keyDownEvent) : this._isOpen && (t.key === xe.ESCAPE ? (this.close(), (n = this.highlightedItem) == null || n.dispatchEvent(new MouseEvent("mouseleave"))) : t.key === xe.ENTER ? ((a = this.highlightedItem) == null || a.click(), (s = this.highlightedItem) == null || s.dispatchEvent(new MouseEvent("mouseleave"))) : t.key === xe.ARROW_DOWN ? Ba.focusSiblingItem(this.highlightedItem || this.elementRef.children[this.elementRef.children.length - 1], this.elementRef, !0) : t.key === xe.ARROW_UP && Ba.focusSiblingItem(this.highlightedItem || this.elementRef.children[0], this.elementRef, !1));
    }
  }], [{
    key: "createElement",
    value: function(e) {
      var t = document.createElement("div");
      return t.id = "dropup-menu", Object.assign(t.style, e), t;
    }
  }]);
}(), Fa = /* @__PURE__ */ function(r) {
  function i(e, t) {
    var n;
    E(this, i);
    var a;
    n = K(this, i, [i.createButtonElement(), void 0, {
      styles: (a = t == null ? void 0 : t.button) == null ? void 0 : a.styles
    }]);
    var s = n.createInnerElements(n._customStyles);
    return n._menu = new mu(e, t == null ? void 0 : t.menu), n.addClickEvent(), n.buttonContainer = i.createButtonContainer(), n.elementRef.appendChild(s.styles), n.buttonContainer.appendChild(n.elementRef), n.elementRef.classList.add("dropup-icon", "upload-file-button"), n.elementRef.children[0].id = "dropup-icon", n.buttonContainer.appendChild(n._menu.elementRef), n.reapplyStateStyle("styles"), n.addContainerEvents(e), n;
  }
  return J(i, r), _(i, [{
    key: "createInnerElements",
    value: function(t) {
      return {
        styles: this.createInnerElement(i.createSVGIconElement(), "styles", t)
      };
    }
  }, {
    key: "createInnerElement",
    value: function(t, n, a) {
      return yt.createSpecificStateElement(this.elementRef, n, a) || t;
    }
  }, {
    key: "addClickEvent",
    value: function() {
      this.elementRef.onclick = this._menu.toggle.bind(this._menu);
    }
  }, {
    key: "addItem",
    value: function(t) {
      this._menu.addItem(t);
    }
  }, {
    key: "addContainerEvents",
    value: function(t) {
      var n = this;
      t.addEventListener("click", function(a) {
        a.target.classList.contains("dropup-icon") || n._menu.close();
      });
    }
  }], [{
    key: "createButtonElement",
    value: function() {
      var t = document.createElement("div");
      return t.classList.add("input-button"), t;
    }
  }, {
    key: "createSVGIconElement",
    value: function() {
      return Be.createSVGElement(pu);
    }
  }, {
    key: "createButtonContainer",
    value: function() {
      var t = document.createElement("div");
      return t.id = "dropup-container", t;
    }
  }, {
    key: "getPosition",
    value: function(t, n) {
      var a, s;
      return (a = n == null ? void 0 : n.button) != null && a.position ? (s = n == null ? void 0 : n.button) == null ? void 0 : s.position : t["outside-left"].length > 0 && t["outside-right"].length === 0 ? "outside-right" : "outside-left";
    }
  }]);
}(en), vu = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "addToDropup",
    value: (
      // prettier-ignore
      function(e, t, n, a) {
        var s = new Fa(n, a);
        Da.forEach(function(l) {
          var u = t["dropup-menu"].findIndex(function(d) {
            return d.buttonType === l;
          }), c = t["dropup-menu"][u];
          c && (s.addItem(c.button), t["dropup-menu"].splice(u, 1));
        });
        var o = Fa.getPosition(t, a);
        Mn.addButton(e, s.buttonContainer, o), t[o].push({});
      }
    )
  }, {
    key: "addToSideContainer",
    value: function(e, t) {
      ["inside-left", "inside-right", "outside-left", "outside-right"].forEach(function(n) {
        var a = n;
        t[a].forEach(function(s) {
          Mn.addButton(e, s.button.elementRef, a);
        });
      });
    }
  }, {
    key: "setPosition",
    value: function(e, t, n) {
      var a = ce(ce({}, e[t]), {}, {
        buttonType: t
      });
      n.push(a), delete e[t];
    }
  }, {
    key: "createPositionsObj",
    value: function() {
      return {
        "dropup-menu": [],
        "outside-left": [],
        "inside-left": [],
        "inside-right": [],
        "outside-right": []
      };
    }
    // prettier-ignore
  }, {
    key: "generatePositions",
    value: function(e) {
      var t = r.createPositionsObj();
      Object.keys(e).forEach(function(a) {
        var s, o = (s = e[a]) == null ? void 0 : s.button.position;
        o && r.setPosition(e, a, t[o]);
      }), t["inside-right"].length === 0 && e.submit && r.setPosition(e, "submit", t["inside-right"]), t["outside-right"].length === 0 && (e.submit ? r.setPosition(e, "submit", t["outside-right"]) : e.microphone ? r.setPosition(e, "microphone", t["outside-right"]) : e.camera && r.setPosition(e, "camera", t["outside-right"])), e.submit && r.setPosition(e, "submit", t["outside-left"].length === 0 ? t["outside-left"] : t["inside-right"]), e.microphone && r.setPosition(e, "microphone", t["outside-left"].length === 0 ? t["outside-left"] : t["inside-right"]);
      var n = Object.keys(e);
      return n.length > 1 || t["dropup-menu"].length > 0 ? Da.forEach(function(a) {
        e[a] && t["dropup-menu"].push(ce(ce({}, e[a]), {}, {
          buttonType: a
        }));
      }) : n.length === 1 && r.setPosition(e, n[0], t["outside-right"].length === 0 ? t["outside-right"] : t["outside-left"]), t;
    }
    // prettier-ignore
  }, {
    key: "addButtons",
    value: function(e, t, n, a) {
      var s = r.generatePositions(t);
      return r.addToSideContainer(e, s), s["dropup-menu"].length > 0 && r.addToDropup(e, s, n, a), s;
    }
  }]);
}(), gu = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>file</title>
<path d="M20 10.9696L11.9628 18.5497C10.9782 19.4783 9.64274 20 8.25028 20C6.85782 20 5.52239 19.4783 4.53777 18.5497C3.55315 17.6211 3 16.3616 3 15.0483C3 13.7351 3.55315 12.4756 4.53777 11.547L12.575 3.96687C13.2314 3.34779 14.1217 3 15.05 3C15.9783 3 16.8686 3.34779 17.525 3.96687C18.1814 4.58595 18.5502 5.4256 18.5502 6.30111C18.5502 7.17662 18.1814 8.01628 17.525 8.63535L9.47904 16.2154C9.15083 16.525 8.70569 16.6989 8.24154 16.6989C7.77738 16.6989 7.33224 16.525 7.00403 16.2154C6.67583 15.9059 6.49144 15.4861 6.49144 15.0483C6.49144 14.6106 6.67583 14.1907 7.00403 13.8812L14.429 6.88674" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`, yu = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M20,15.2928932 L20,5.5 C20,4.67157288 19.3284271,4 18.5,4 L5.5,4 C4.67157288,4 4,4.67157288 4,5.5 L4,12.2928932 L7.14644661,9.14644661 C7.34170876,8.95118446 7.65829124,8.95118446 7.85355339,9.14644661 L13.5,14.7928932 L16.1464466,12.1464466 C16.3417088,11.9511845 16.6582912,11.9511845 16.8535534,12.1464466 L20,15.2928932 Z M20,16.7071068 L16.5,13.2071068 L13.8535534,15.8535534 C13.6582912,16.0488155 13.3417088,16.0488155 13.1464466,15.8535534 L7.5,10.2071068 L4,13.7071068 L4,18.5 C4,19.3284271 4.67157288,20 5.5,20 L18.5,20 C19.3284271,20 20,19.3284271 20,18.5 L20,16.7071068 Z M3,5.5 C3,4.11928813 4.11928813,3 5.5,3 L18.5,3 C19.8807119,3 21,4.11928813 21,5.5 L21,18.5 C21,19.8807119 19.8807119,21 18.5,21 L5.5,21 C4.11928813,21 3,19.8807119 3,18.5 L3,5.5 Z M15,6 L17,6 C17.5522847,6 18,6.44771525 18,7 L18,9 C18,9.55228475 17.5522847,10 17,10 L15,10 C14.4477153,10 14,9.55228475 14,9 L14,7 C14,6.44771525 14.4477153,6 15,6 Z M15,7 L15,9 L17,9 L17,7 L15,7 Z"/>
</svg>
`, bu = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-49.49 -49.49 593.87 593.87" stroke-width="3.95908" transform="rotate(0)">
  <g stroke-width="0"></g>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="0.98977"></g>
  <g>
    <g>
      <g>
        <path d="M163.205,76.413v293.301c-3.434-3.058-7.241-5.867-11.486-8.339c-21.38-12.452-49.663-15.298-77.567-7.846 c-49.038,13.096-80.904,54.519-71.038,92.337c4.019,15.404,14.188,28.221,29.404,37.087c13.553,7.894,29.87,11.933,47.115,11.933 c9.962,0,20.231-1.356,30.447-4.087c42.74-11.406,72.411-44.344,72.807-77.654h0.011v-0.162c0.002-0.166,0-0.331,0-0.496V187.072 l290.971-67.3v178.082c-3.433-3.055-7.238-5.863-11.481-8.334c-21.385-12.452-49.654-15.308-77.567-7.846 c-49.038,13.087-80.904,54.519-71.038,92.356c4.019,15.385,14.183,28.212,29.404,37.067c13.548,7.894,29.875,11.933,47.115,11.933 c9.962,0,20.231-1.356,30.452-4.087c42.74-11.413,72.411-44.346,72.804-77.654h0.004v-0.065c0.003-0.236,0.001-0.469,0-0.704V0 L163.205,76.413z M104.999,471.779c-22.543,6.038-45.942,3.846-62.572-5.846c-10.587-6.163-17.591-14.817-20.255-25.038 c-7.144-27.375,18.452-58.029,57.062-68.346c8.409-2.25,16.938-3.346,25.188-3.346c13.87,0,26.962,3.115,37.389,9.192 c10.587,6.163,17.591,14.817,20.255,25.029c0.809,3.102,1.142,6.248,1.139,9.4v0.321h0.014 C162.99,437.714,139.082,462.678,104.999,471.779z M182.898,166.853V92.067l290.971-67.298v74.784L182.898,166.853z M415.677,399.923c-22.558,6.038-45.942,3.837-62.587-5.846c-10.587-6.163-17.587-14.817-20.25-25.019 c-7.144-27.385,18.452-58.058,57.058-68.365c8.414-2.25,16.942-3.346,25.192-3.346c13.875,0,26.962,3.115,37.385,9.192 c10.596,6.163,17.596,14.817,20.26,25.029v0.01c0.796,3.05,1.124,6.144,1.135,9.244v0.468h0.02 C473.668,365.851,449.763,390.814,415.677,399.923z">
        </path>
      </g>
    </g>
  </g>
</svg>`, ku = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 5.9266752 5.6408391" height="21.31971" width="22.4">
  <g>
    <path d="m 5.2564627,1.548212 c -3.1136005,-0.4796804 -1.5568006,-0.2398402 0,0 z M 2.0001198,2.0922063 c 0.1556781,0 0.2657489,0.020893 0.3917849,0.080366 0.081154,0.038347 0.1153492,0.134065 0.076377,0.2138602 -0.038973,0.07979 -0.1363527,0.1134129 -0.2175069,0.075091 -0.078199,-0.036919 -0.1407455,-0.048792 -0.250655,-0.048792 -0.2260486,0 -0.3921482,0.2042182 -0.3921482,0.4801409 0,0.2761822 0.1663188,0.4810688 0.3921482,0.4810688 0.1117901,0 0.2064255,-0.046133 0.255659,-0.1284198 l 0.00162,-0.00389 V 3.0534032 l -0.098011,1.75e-4 c -0.081844,0 -0.1495979,-0.059305 -0.1612403,-0.1365887 l -0.00175,-0.023683 c 0,-0.08047 0.060311,-0.1470874 0.1389194,-0.1585331 l 0.024085,-0.00195 h 0.2612303 c 0.081842,0 0.149598,0.059305 0.1612404,0.1365891 l 0.00175,0.023683 -3.398e-4,0.3968809 v 0 l -0.00168,0.014211 v 0 l -0.00553,0.023034 v 0 l -0.00532,0.014145 c -0.098178,0.22826 -0.3236506,0.3528713 -0.5706303,0.3528713 -0.4240855,0 -0.7181621,-0.3622714 -0.7181621,-0.8016063 0,-0.4391857 0.2940275,-0.8006848 0.7181621,-0.8006848 z m 1.2034759,0.031275 c 0.081843,0 0.1495977,0.059305 0.1612403,0.1365891 l 0.00175,0.023683 v 1.2211775 c 0,0.088516 -0.07298,0.1602721 -0.1630073,0.1602721 -0.081841,0 -0.1495972,-0.059305 -0.1612397,-0.1365892 L 3.040589,3.5049308 V 2.2837527 c 0,-0.088516 0.07298,-0.1602721 0.1630067,-0.1602714 z m 0.7813442,0 0.5209469,0.00195 c 0.090025,3.048e-4 0.1627543,0.072306 0.1624458,0.1608234 -2.809e-4,0.08047 -0.06083,0.1468798 -0.1394772,0.158066 l -0.024092,0.00195 -0.3575326,-0.0013 v 0.4497782 l 0.2928918,2.27e-4 c 0.081842,0 0.1495979,0.059305 0.1612403,0.136589 l 0.00175,0.023683 c 0,0.080469 -0.06031,0.1470871 -0.1389193,0.1585393 l -0.024092,0.00195 -0.2928919,-2.336e-4 1.563e-4,0.2860316 c 0,0.080471 -0.06031,0.1470873 -0.1389193,0.1585395 l -0.024085,0.00195 c -0.081843,0 -0.1495979,-0.059305 -0.1612403,-0.1365826 l -0.00175,-0.023691 V 2.2841354 c 2.798e-4,-0.08047 0.060829,-0.1468797 0.1394758,-0.1580594 z"/>
    <path d="m 5.0894191,1.0943261 c 0,-0.21918999 -0.177687,-0.39686999 -0.396876,-0.39686999 h -3.43959 c -0.2191879,0 -0.391262,0.1777519 -0.3968759,0.39686999 l -0.027082,3.4379266 c 0.040152,0.2939927 0.4235456,0.409415 0.4235456,0.409415 l 3.4785583,-0.00851 c 0,0 0.3008506,-0.1402998 0.3236271,-0.4201576 0.042911,-0.5272495 0.034693,-1.6106146 0.034693,-3.4186761 z m -4.49792494,0 c 0,-0.36530999 0.29614504,-0.66145999 0.66145894,-0.66145999 h 3.43959 c 0.365314,0 0.66146,0.29615 0.66146,0.66145999 v 3.43959 c 0,0.36532 -0.296146,0.66146 -0.66146,0.66146 h -3.43959 c -0.3653139,0 -0.66145894,-0.29614 -0.66145894,-0.66146 z"/>
  </g>
</svg>
`, Eu = {
  images: {
    id: "upload-images-icon",
    svgString: yu,
    dropupText: "Image"
  },
  gifs: {
    id: "upload-gifs-icon",
    svgString: ku,
    dropupText: "GIF"
  },
  audio: {
    id: "upload-audio-icon",
    svgString: bu,
    dropupText: "Audio"
  },
  mixedFiles: {
    id: "upload-mixed-files-icon",
    svgString: gu,
    dropupText: "File"
  }
}, _u = `<?xml version="1.0" encoding="iso-8859-1"?>
<svg height="1.4em" width="1.4em" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	 viewBox="0 0 490.9 490.9" xml:space="preserve">
	<g>
		<g>
			<path d="M245.5,322.9c53,0,96.2-43.2,96.2-96.2V96.2c0-53-43.2-96.2-96.2-96.2s-96.2,43.2-96.2,96.2v130.5
				C149.3,279.8,192.5,322.9,245.5,322.9z M173.8,96.2c0-39.5,32.2-71.7,71.7-71.7s71.7,32.2,71.7,71.7v130.5
				c0,39.5-32.2,71.7-71.7,71.7s-71.7-32.2-71.7-71.7V96.2z"/>
			<path d="M94.4,214.5c-6.8,0-12.3,5.5-12.3,12.3c0,85.9,66.7,156.6,151.1,162.8v76.7h-63.9c-6.8,0-12.3,5.5-12.3,12.3
				s5.5,12.3,12.3,12.3h152.3c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3h-63.9v-76.7c84.4-6.3,151.1-76.9,151.1-162.8
				c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3c0,76.6-62.3,138.9-138.9,138.9s-138.9-62.3-138.9-138.9
				C106.6,220,101.2,214.5,94.4,214.5z"/>
		</g>
	</g>
</svg>
`, $e = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "addAttributes",
    value: function(e) {
      e.role = "button", e.setAttribute("tabindex", "0");
    }
  }, {
    key: "addAriaBusy",
    value: function(e) {
      e.setAttribute("aria-busy", "true");
    }
  }, {
    key: "removeAriaBusy",
    value: function(e) {
      e.removeAttribute("aria-busy");
    }
  }, {
    key: "addAriaDisabled",
    value: function(e) {
      e.setAttribute("aria-disabled", "true");
    }
  }, {
    key: "removeAriaDisabled",
    value: function(e) {
      e.removeAttribute("aria-disabled");
    }
  }, {
    key: "removeAriaAttributes",
    value: function(e) {
      r.removeAriaBusy(e), r.removeAriaDisabled(e);
    }
  }]);
}(), Gi = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    return E(this, i), (e == null ? void 0 : e.position) === "dropup-menu" && (e.position = "outside-right"), t = K(this, i, [i.createMicrophoneElement(), e == null ? void 0 : e.position, e]), t.isActive = !1, t._innerElements = t.createInnerElements(t._customStyles), t.changeToDefault(), t;
  }
  return J(i, r), _(i, [{
    key: "createInnerElements",
    value: function(t) {
      var n = i.createSVGIconElement();
      return {
        default: this.createInnerElement(n, "default", t),
        active: this.createInnerElement(n, "active", t),
        unsupported: this.createInnerElement(n, "unsupported", t),
        commandMode: this.createInnerElement(n, "commandMode", t)
      };
    }
    // prettier-ignore
  }, {
    key: "createInnerElement",
    value: function(t, n, a) {
      return yt.createSpecificStateElement(this.elementRef, n, a) || t;
    }
  }, {
    key: "changeToActive",
    value: function() {
      this.elementRef.replaceChildren(this._innerElements.active), this.toggleIconFilter("active"), this.reapplyStateStyle("active", ["default", "commandMode"]), this.isActive = !0;
    }
  }, {
    key: "changeToDefault",
    value: function() {
      this.elementRef.replaceChildren(this._innerElements.default), this.toggleIconFilter("default"), this.reapplyStateStyle("default", ["active", "commandMode"]), this.isActive = !1;
    }
  }, {
    key: "changeToCommandMode",
    value: function() {
      this.elementRef.replaceChildren(this._innerElements.unsupported), this.toggleIconFilter("command"), this.reapplyStateStyle("commandMode", ["active"]);
    }
  }, {
    key: "changeToUnsupported",
    value: function() {
      this.elementRef.replaceChildren(this._innerElements.unsupported), this.elementRef.classList.add("unsupported-microphone"), this.reapplyStateStyle("unsupported", ["active"]);
    }
  }, {
    key: "toggleIconFilter",
    value: function(t) {
      var n = this.elementRef.children[0];
      if (n.tagName.toLocaleLowerCase() === "svg") switch (t) {
        case "default":
          n.classList.remove("active-microphone-icon", "command-microphone-icon"), n.classList.add("default-microphone-icon");
          break;
        case "active":
          n.classList.remove("default-microphone-icon", "command-microphone-icon"), n.classList.add("active-microphone-icon");
          break;
        case "command":
          n.classList.remove("active-microphone-icon", "default-microphone-icon"), n.classList.add("command-microphone-icon");
          break;
      }
    }
  }], [{
    key: "createMicrophoneElement",
    value: function() {
      var t = document.createElement("div");
      return t.id = "microphone-button", t.classList.add("input-button"), $e.addAttributes(t), t;
    }
  }, {
    key: "createSVGIconElement",
    value: function() {
      var t = Be.createSVGElement(_u);
      return t.id = "microphone-icon", t;
    }
  }]);
}(en), Wi = {}, Pn = {}, Nn = {}, tn = {}, Ct = {};
Object.defineProperty(Ct, "__esModule", {
  value: !0
});
Ct.Text = void 0;
var Dn = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "capitalize",
    value: function(e) {
      return e.replace(r.FIRST_CHAR_REGEX, function(t) {
        return t.toUpperCase();
      });
    }
  }, {
    key: "lineBreak",
    value: function(e) {
      return e.replace(r.DOUBLE_LINE, "<p></p>").replace(r.ONE_LINE, "<br>");
    }
  }, {
    key: "isCharDefined",
    value: function(e) {
      return e !== void 0 && e !== " " && e !== " " && e !== `
` && e !== "";
    }
    // WORK - can optimize to not not have to do it multiple times
  }, {
    key: "breakupIntoWordsArr",
    value: function(e) {
      return e.split(/(\W+)/);
    }
  }]);
}();
Ct.Text = Dn;
Dn.FIRST_CHAR_REGEX = /\S/;
Dn.DOUBLE_LINE = /\n\n/g;
Dn.ONE_LINE = /\n/g;
Object.defineProperty(tn, "__esModule", {
  value: !0
});
tn.Translate = void 0;
var Su = Ct, wu = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "translate",
    value: function(e, t) {
      for (var n = Su.Text.breakupIntoWordsArr(e), a = 0; a < n.length; a += 1) t[n[a]] && (n[a] = t[n[a]]);
      return n.join("");
    }
  }]);
}();
tn.Translate = wu;
Object.defineProperty(Nn, "__esModule", {
  value: !0
});
Nn.WebSpeechTranscript = void 0;
var ja = tn, Cu = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "extract",
    value: function(e, t, n) {
      for (var a = "", s = e.resultIndex; s < e.results.length; ++s) {
        var o = e.results[s][0].transcript;
        n && (o = ja.Translate.translate(o, n)), e.results[s].isFinal ? t += o : a += o;
      }
      return {
        interimTranscript: a,
        finalTranscript: t,
        newText: a || t
      };
    }
  }, {
    key: "extractSafari",
    value: function(e, t, n) {
      for (var a = "", s = "", o = e.resultIndex; o < e.results.length; ++o) {
        var l = e.results[o][0].transcript;
        n && (l = ja.Translate.translate(l, n)), a += l;
      }
      return {
        interimTranscript: s,
        finalTranscript: a,
        newText: s || a
      };
    }
  }]);
}();
Nn.WebSpeechTranscript = Cu;
var Dt = {};
Object.defineProperty(Dt, "__esModule", {
  value: !0
});
Dt.Browser = void 0;
var Vt = /* @__PURE__ */ _(function r() {
  E(this, r);
});
Dt.Browser = Vt;
Vt.IS_SAFARI = function() {
  return Vt._IS_SAFARI === void 0 && (Vt._IS_SAFARI = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), Vt._IS_SAFARI;
};
var nn = {}, Bn = {};
Object.defineProperty(Bn, "__esModule", {
  value: !0
});
Bn.EventListeners = void 0;
var Ki = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "getElementIfFocusedOnAvailable",
    value: function(e, t) {
      return Array.isArray(e) ? e.find(function(n) {
        return t === n;
      }) : t === e ? e : void 0;
    }
  }, {
    key: "keyDownWindow",
    value: function(e) {
      var t = this;
      e.element && r.getElementIfFocusedOnAvailable(e.element, document.activeElement) && (r.KEY_DOWN_TIMEOUT !== null && clearTimeout(r.KEY_DOWN_TIMEOUT), r.KEY_DOWN_TIMEOUT = setTimeout(function() {
        r.KEY_DOWN_TIMEOUT = null, t.resetRecording(e);
      }, 500));
    }
  }, {
    key: "mouseDownWindow",
    value: function(e, t) {
      this.mouseDownElement = r.getElementIfFocusedOnAvailable(e, t.target);
    }
  }, {
    key: "mouseUpWindow",
    value: function(e) {
      this.mouseDownElement && this.resetRecording(e), this.mouseDownElement = void 0;
    }
  }, {
    key: "add",
    value: function(e, t) {
      var n = (t == null ? void 0 : t.insertInCursorLocation) === void 0 || (t == null ? void 0 : t.insertInCursorLocation);
      t != null && t.element && n && (e.mouseDownEvent = r.mouseDownWindow.bind(e, t.element), document.addEventListener("mousedown", e.mouseDownEvent), e.mouseUpEvent = r.mouseUpWindow.bind(e, t), document.addEventListener("mouseup", e.mouseUpEvent), e.keyDownEvent = r.keyDownWindow.bind(e, t), document.addEventListener("keydown", e.keyDownEvent));
    }
  }, {
    key: "remove",
    value: function(e) {
      document.removeEventListener("mousedown", e.mouseDownEvent), document.removeEventListener("mouseup", e.mouseUpEvent), document.removeEventListener("keydown", e.keyDownEvent);
    }
  }]);
}();
Bn.EventListeners = Ki;
Ki.KEY_DOWN_TIMEOUT = null;
var Fn = {};
Object.defineProperty(Fn, "__esModule", {
  value: !0
});
Fn.PreResultUtils = void 0;
var Tu = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "process",
    value: function(e, t, n, a, s) {
      var o = a == null ? void 0 : a(t, n);
      return o ? (setTimeout(function() {
        o.restart ? e.resetRecording(s) : o.stop && e.stop();
      }), (o.stop || o.restart) && o.removeNewText) : !1;
    }
  }]);
}();
Fn.PreResultUtils = Tu;
var rn = {}, an = {};
Object.defineProperty(an, "__esModule", {
  value: !0
});
an.AutoScroll = void 0;
var Au = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "changeStateIfNeeded",
    value: function(e, t) {
      t && !e.isCursorAtEnd && (e.endPadding = "", e.scrollingSpan.innerHTML = "&nbsp;");
    }
  }, {
    key: "scrollGeneric",
    value: function(e, t) {
      e.isCursorAtEnd ? t.scrollTop = t.scrollHeight : e.scrollingSpan.scrollIntoView({
        block: "nearest"
      });
    }
    // primitives don't need to be scrolled except in safari
    // they can only safely be scrolled to the end
  }, {
    key: "scrollSafariPrimitiveToEnd",
    value: function(e) {
      e.scrollLeft = e.scrollWidth, e.scrollTop = e.scrollHeight;
    }
  }, {
    key: "isElementOverflown",
    value: function(e) {
      return e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth;
    }
  }, {
    key: "isRequired",
    value: function(e, t) {
      return e && r.isElementOverflown(t);
    }
  }]);
}();
an.AutoScroll = Au;
var Tt = {};
Object.defineProperty(Tt, "__esModule", {
  value: !0
});
Tt.Elements = void 0;
var xu = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "isPrimitiveElement",
    value: function(e) {
      return e.tagName === "INPUT" || e.tagName === "TEXTAREA";
    }
  }, {
    key: "createInterimSpan",
    value: function() {
      var e = document.createElement("span");
      return e.style.color = "grey", e.style.pointerEvents = "none", e;
    }
  }, {
    key: "createGenericSpan",
    value: function() {
      var e = document.createElement("span");
      return e.style.pointerEvents = "none", e;
    }
  }, {
    key: "appendSpans",
    value: function(e, t) {
      if (e.spansPopulated = !0, e.insertInCursorLocation && document.activeElement === t) {
        var n = window.getSelection();
        if (n != null && n.focusNode) {
          var a = n.getRangeAt(0);
          a.insertNode(e.scrollingSpan), a.insertNode(e.interimSpan), a.insertNode(e.finalSpan), a.collapse(!1), n.removeAllRanges(), n.addRange(a);
          return;
        }
      }
      t.appendChild(e.finalSpan), t.appendChild(e.interimSpan), t.appendChild(e.scrollingSpan);
    }
  }, {
    key: "applyCustomColors",
    value: function(e, t) {
      t.interim && (e.interimSpan.style.color = t.interim), t.final && (e.finalSpan.style.color = t.final);
    }
  }, {
    key: "isInsideShadowDOM",
    value: function(e) {
      return e.getRootNode() instanceof ShadowRoot;
    }
  }]);
}();
Tt.Elements = xu;
var At = {};
Object.defineProperty(At, "__esModule", {
  value: !0
});
At.Cursor = void 0;
var Mu = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "setOffsetForGeneric",
    value: function(e, t) {
      for (var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = 0, s = 0; s < e.childNodes.length; s += 1) {
        var o = e.childNodes[s];
        if (o.childNodes.length > 0) {
          var l = r.setOffsetForGeneric(o, t, n);
          if (l === -1) return -1;
          n += l;
        } else if (o.textContent !== null) {
          if (n + o.textContent.length > t) {
            var u = document.createRange();
            u.setStart(o, t - n), u.collapse(!0);
            var c = window.getSelection();
            return c == null || c.removeAllRanges(), c == null || c.addRange(u), e.focus(), -1;
          }
          n += o.textContent.length, a += o.textContent.length;
        }
      }
      return a;
    }
  }, {
    key: "focusEndOfGeneric",
    value: function(e) {
      var t = document.createRange();
      t.selectNodeContents(e), t.collapse(!1);
      var n = window.getSelection();
      n && (n.removeAllRanges(), n.addRange(t));
    }
  }, {
    key: "setOffsetForSafariGeneric",
    value: function(e, t) {
      var n = window.getSelection();
      if (n) {
        var a = r.getGenericElementCursorOffset(e, n, !0);
        console.log(a), setTimeout(function() {
        }, 100), r.setOffsetForGeneric(e, a + t);
      }
    }
    // set to automatically scroll to cursor (scroll does not work in Safari)
  }, {
    key: "setOffsetForPrimitive",
    value: function(e, t, n) {
      n && e.blur(), e.setSelectionRange(t, t), e.focus();
    }
    // Scroll Input in Safari - does not work for TextArea and uses span which can have a different style
    // private static getCursorOffsetFromLeft(inputElement: HTMLInputElement, position: number) {
    //   // Get the value of the input element up to the cursor position
    //   const valueUpToCursor = inputElement.value.substring(0, position);
    //   // Create a temporary span element to measure the width of the text
    //   const tempSpan = document.createElement('span');
    //   tempSpan.textContent = valueUpToCursor;
    //   tempSpan.style.visibility = 'hidden';
    //   tempSpan.style.position = 'absolute';
    //   document.body.appendChild(tempSpan);
    //   // Measure the width of the text up to the cursor position
    //   const offsetWidth = tempSpan.offsetWidth;
    //   const offsetHeight = tempSpan.offsetHeight;
    //   // Clean up the temporary span element
    //   document.body.removeChild(tempSpan);
    //   return {left: offsetWidth, top: offsetHeight};
    // }
  }, {
    key: "getGenericElementCursorOffset",
    value: function(e, t, n) {
      var a = 0;
      if (t.rangeCount > 0) {
        var s = t.getRangeAt(0), o = s.cloneRange();
        o.selectNodeContents(e), n ? o.setEnd(s.startContainer, s.startOffset) : o.setEnd(s.endContainer, s.endOffset), a = o.toString().length;
      }
      return a;
    }
  }]);
}();
At.Cursor = Mu;
Object.defineProperty(rn, "__esModule", {
  value: !0
});
rn.CommandUtils = void 0;
var Ua = an, Ru = Tt, Iu = Dt, Ha = At, qa = Ct, Lu = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "processCommand",
    value: function(e, t) {
      return (!t || !t.caseSensitive) && (e = e.toLowerCase()), (t == null ? void 0 : t.substrings) === !1 ? qa.Text.breakupIntoWordsArr(e) : e;
    }
  }, {
    key: "process",
    value: function(e) {
      var t;
      return ((t = e.settings) === null || t === void 0 ? void 0 : t.caseSensitive) === !0 ? e : Object.keys(e).reduce(function(n, a) {
        var s = e[a];
        return n[a] = typeof s == "string" ? r.processCommand(s, e.settings) : s, n;
      }, {});
    }
  }, {
    key: "toggleCommandModeOn",
    value: function(e) {
      var t;
      e.isWaitingForCommand = !0, (t = e.onCommandModeTrigger) === null || t === void 0 || t.call(e, !0);
    }
  }, {
    key: "toggleCommandModeOff",
    value: function(e) {
      var t;
      e.isWaitingForCommand && ((t = e.onCommandModeTrigger) === null || t === void 0 || t.call(e, !1), e.isWaitingForCommand = !1);
    }
  }, {
    key: "setText",
    value: function(e, t, n, a) {
      r.toggleCommandModeOff(e), Ru.Elements.isPrimitiveElement(a) ? (a.value = n, e.isTargetInShadow || Ha.Cursor.setOffsetForPrimitive(a, n.length, !0), Iu.Browser.IS_SAFARI() && e.autoScroll && Ua.AutoScroll.scrollSafariPrimitiveToEnd(a)) : (a.textContent = n, e.isTargetInShadow || Ha.Cursor.focusEndOfGeneric(a), setTimeout(function() {
        return Ua.AutoScroll.scrollGeneric(e, a);
      })), e.resetRecording(t);
    }
  }, {
    key: "checkIfMatchesSubstring",
    value: function(e, t) {
      return t.includes(e);
    }
  }, {
    key: "checkIfMatchesWord",
    value: function(e, t, n) {
      for (var a = e, s = n.length - 1; s >= 0; s -= 1) {
        for (var o = s, l = a.length - 1; n[o] === a[l] && l >= 0; ) o -= 1, l -= 1;
        if (l < 0) return !0;
      }
      return !1;
    }
    // prettier-ignore
  }, {
    key: "execCommand",
    value: function(e, t, n, a, s) {
      var o, l, u, c = e.commands;
      if (!(!c || !a || !n)) {
        var d = ((o = c.settings) === null || o === void 0 ? void 0 : o.caseSensitive) === !0 ? t : t.toLowerCase(), p = qa.Text.breakupIntoWordsArr(d), h = ((l = c.settings) === null || l === void 0 ? void 0 : l.substrings) === !1 ? r.checkIfMatchesWord : r.checkIfMatchesSubstring;
        if (c.commandMode && h(c.commandMode, d, p)) return e.setInterimColorToFinal(), setTimeout(function() {
          return r.toggleCommandModeOn(e);
        }), {
          doNotProcessTranscription: !1
        };
        if (!(c.commandMode && !e.isWaitingForCommand)) {
          if (c.stop && h(c.stop, d, p)) return r.toggleCommandModeOff(e), setTimeout(function() {
            return e.stop();
          }), {
            doNotProcessTranscription: !1
          };
          if (c.pause && h(c.pause, d, p)) return r.toggleCommandModeOff(e), e.setInterimColorToFinal(), setTimeout(function() {
            var g;
            e.isPaused = !0, (g = e.onPauseTrigger) === null || g === void 0 || g.call(e, !0);
          }), {
            doNotProcessTranscription: !1
          };
          if (c.resume && h(c.resume, d, p)) return e.isPaused = !1, (u = e.onPauseTrigger) === null || u === void 0 || u.call(e, !1), r.toggleCommandModeOff(e), e.resetRecording(n), {
            doNotProcessTranscription: !0
          };
          if (c.reset && h(c.reset, d, p)) return s !== void 0 && r.setText(e, n, s, a), {
            doNotProcessTranscription: !0
          };
          if (c.removeAllText && h(c.removeAllText, d, p)) return r.setText(e, n, "", a), {
            doNotProcessTranscription: !0
          };
        }
      }
    }
  }]);
}();
rn.CommandUtils = Lu;
var jn = {};
Object.defineProperty(jn, "__esModule", {
  value: !0
});
jn.Highlight = void 0;
var Ou = Tt, Ht = At, Pu = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "setStateForPrimitive",
    value: function(e, t) {
      var n, a;
      t.selectionStart !== null && (n = t.selectionStart), t.selectionEnd !== null && (a = t.selectionEnd), e.isHighlighted = n !== a;
    }
  }, {
    key: "setStateForGeneric",
    value: function(e, t) {
      var n = window.getSelection();
      if (n != null && n.focusNode) {
        var a = Ht.Cursor.getGenericElementCursorOffset(t, n, !0), s = Ht.Cursor.getGenericElementCursorOffset(t, n, !1);
        e.isHighlighted = a !== s;
      }
    }
  }, {
    key: "setState",
    value: function(e, t) {
      document.activeElement === t && (Ou.Elements.isPrimitiveElement(t) ? r.setStateForPrimitive(e, t) : r.setStateForGeneric(e, t));
    }
  }, {
    key: "removeForGeneric",
    value: function(e, t) {
      var n = window.getSelection();
      if (n) {
        var a = Ht.Cursor.getGenericElementCursorOffset(t, n, !0);
        n.deleteFromDocument(), Ht.Cursor.setOffsetForGeneric(t, a), e.isHighlighted = !1;
      }
    }
  }, {
    key: "removeForPrimitive",
    value: function(e, t) {
      var n = t.selectionStart, a = t.selectionEnd, s = t.value;
      if (n && a) {
        var o = s.substring(0, n) + s.substring(a);
        t.value = o, Ht.Cursor.setOffsetForPrimitive(t, n, e.autoScroll);
      }
      e.isHighlighted = !1;
    }
  }]);
}();
jn.Highlight = Pu;
var Un = {};
Object.defineProperty(Un, "__esModule", {
  value: !0
});
Un.Padding = void 0;
var Nu = Tt, za = At, It = Ct, Du = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "setStateForPrimitiveElement",
    value: function(e, t) {
      if (document.activeElement === t && t.selectionStart !== null) {
        var n = t.selectionStart, a = t.value[n - 1], s = t.selectionEnd === null ? n : t.selectionEnd, o = t.value[s];
        It.Text.isCharDefined(a) && (e.startPadding = " ", e.numberOfSpacesBeforeNewText = 1), It.Text.isCharDefined(o) && (e.endPadding = " ", e.numberOfSpacesAfterNewText = 1), e.isCursorAtEnd = t.value.length === s;
        return;
      }
      var l = t.value[t.value.length - 1];
      It.Text.isCharDefined(l) && (e.startPadding = " ", e.numberOfSpacesBeforeNewText = 1), e.isCursorAtEnd = !0;
    }
  }, {
    key: "setStateForGenericElement",
    value: function(e, t) {
      var n, a, s;
      if (document.activeElement === t) {
        var o = window.getSelection();
        if (o != null && o.focusNode) {
          var l = za.Cursor.getGenericElementCursorOffset(t, o, !0), u = (n = t.textContent) === null || n === void 0 ? void 0 : n[l - 1], c = za.Cursor.getGenericElementCursorOffset(t, o, !1), d = (a = t.textContent) === null || a === void 0 ? void 0 : a[c];
          It.Text.isCharDefined(u) && (e.startPadding = " "), It.Text.isCharDefined(d) && (e.endPadding = " "), e.isCursorAtEnd = ((s = t.textContent) === null || s === void 0 ? void 0 : s.length) === c;
          return;
        }
      }
      var p = t.innerText.charAt(t.innerText.length - 1);
      It.Text.isCharDefined(p) && (e.startPadding = " "), e.isCursorAtEnd = !0;
    }
  }, {
    key: "setState",
    value: function(e, t) {
      Nu.Elements.isPrimitiveElement(t) ? r.setStateForPrimitiveElement(e, t) : r.setStateForGenericElement(e, t);
    }
  }, {
    key: "adjustStateAfterRecodingPrimitiveElement",
    value: function(e, t) {
      if (e.primitiveTextRecorded = !0, e.insertInCursorLocation && document.activeElement === t && (t.selectionEnd !== null && (e.endPadding = e.endPadding + t.value.slice(t.selectionEnd)), t.selectionStart !== null)) {
        e.startPadding = t.value.slice(0, t.selectionStart) + e.startPadding;
        return;
      }
      e.startPadding = t.value + e.startPadding;
    }
  }, {
    key: "adjustSateForNoTextPrimitiveElement",
    value: function(e) {
      e.numberOfSpacesBeforeNewText === 1 && (e.startPadding = e.startPadding.substring(0, e.startPadding.length - 1), e.numberOfSpacesBeforeNewText = 0), e.numberOfSpacesAfterNewText === 1 && (e.endPadding = e.endPadding.substring(1), e.numberOfSpacesAfterNewText = 0);
    }
  }]);
}();
Un.Padding = Du;
Object.defineProperty(nn, "__esModule", {
  value: !0
});
nn.Speech = void 0;
var $a = Bn, Bu = Fn, Va = rn, gn = an, or = jn, Ge = Tt, lr = Un, Ga = Dt, Wa = At, ur = Ct, Fu = /* @__PURE__ */ function() {
  function r() {
    E(this, r), this.finalTranscript = "", this.interimSpan = Ge.Elements.createInterimSpan(), this.finalSpan = Ge.Elements.createGenericSpan(), this.scrollingSpan = Ge.Elements.createGenericSpan(), this.isCursorAtEnd = !1, this.spansPopulated = !1, this.startPadding = "", this.endPadding = "", this.numberOfSpacesBeforeNewText = 0, this.numberOfSpacesAfterNewText = 0, this.isHighlighted = !1, this.primitiveTextRecorded = !1, this.recognizing = !1, this._displayInterimResults = !0, this.insertInCursorLocation = !0, this.autoScroll = !0, this.isRestarting = !1, this.isPaused = !1, this.isWaitingForCommand = !1, this.isTargetInShadow = !1, this.cannotBeStopped = !1, this.resetState();
  }
  return _(r, [{
    key: "prepareBeforeStart",
    value: function(e) {
      var t, n;
      if (e != null && e.element) if ($a.EventListeners.add(this, e), Array.isArray(e.element)) {
        var a = e.element.find(function(s) {
          return s === document.activeElement;
        }) || e.element[0];
        if (!a) return;
        this.prepare(a);
      } else this.prepare(e.element);
      (e == null ? void 0 : e.displayInterimResults) !== void 0 && (this._displayInterimResults = e.displayInterimResults), e != null && e.textColor && (this._finalTextColor = (t = e == null ? void 0 : e.textColor) === null || t === void 0 ? void 0 : t.final, Ge.Elements.applyCustomColors(this, e.textColor)), (e == null ? void 0 : e.insertInCursorLocation) !== void 0 && (this.insertInCursorLocation = e.insertInCursorLocation), (e == null ? void 0 : e.autoScroll) !== void 0 && (this.autoScroll = e.autoScroll), this._onResult = e == null ? void 0 : e.onResult, this._onPreResult = e == null ? void 0 : e.onPreResult, this._onStart = e == null ? void 0 : e.onStart, this._onStop = e == null ? void 0 : e.onStop, this._onError = e == null ? void 0 : e.onError, this.onCommandModeTrigger = e == null ? void 0 : e.onCommandModeTrigger, this.onPauseTrigger = e == null ? void 0 : e.onPauseTrigger, this._options = e, !((n = this._options) === null || n === void 0) && n.commands && (this.commands = Va.CommandUtils.process(this._options.commands));
    }
  }, {
    key: "prepare",
    value: function(e) {
      lr.Padding.setState(this, e), or.Highlight.setState(this, e), this.isTargetInShadow = Ge.Elements.isInsideShadowDOM(e), Ge.Elements.isPrimitiveElement(e) ? (this._primitiveElement = e, this._originalText = this._primitiveElement.value) : (this._genericElement = e, this._originalText = this._genericElement.textContent);
    }
    // there was an attempt to optimize this by not having to restart the service and just reset state:
    // unfortunately it did not work because the service would still continue firing the intermediate and final results
    // into the new position
  }, {
    key: "resetRecording",
    value: function(e) {
      this.isRestarting = !0, this.stop(!0), this.resetState(!0), this.start(e, !0);
    }
    // prettier-ignore
  }, {
    key: "updateElements",
    value: function(e, t, n) {
      var a, s = ur.Text.capitalize(t);
      if (!(this.finalTranscript === s && e === "")) {
        Bu.PreResultUtils.process(this, n, e === "", this._onPreResult, this._options) && (e = "", n = "");
        var o = this.commands && Va.CommandUtils.execCommand(this, n, this._options, this._primitiveElement || this._genericElement, this._originalText);
        if (o) {
          if (o.doNotProcessTranscription) return;
          e = "", n = "";
        }
        if (!(this.isPaused || this.isWaitingForCommand)) {
          (a = this._onResult) === null || a === void 0 || a.call(this, n, e === ""), this.finalTranscript = s, this._displayInterimResults || (e = "");
          var l = this.finalTranscript === "" && e === "";
          this._primitiveElement ? this.updatePrimitiveElement(this._primitiveElement, e, l) : this._genericElement && this.updateGenericElement(this._genericElement, e, l);
        }
      }
    }
    // prettier-ignore
    // remember that padding values here contain actual text left and right
  }, {
    key: "updatePrimitiveElement",
    value: function(e, t, n) {
      this.isHighlighted && or.Highlight.removeForPrimitive(this, e), this.primitiveTextRecorded || lr.Padding.adjustStateAfterRecodingPrimitiveElement(this, e), n && lr.Padding.adjustSateForNoTextPrimitiveElement(this);
      var a = this.startPadding + this.finalTranscript + t;
      if (e.value = a + this.endPadding, !this.isTargetInShadow) {
        var s = a.length + this.numberOfSpacesAfterNewText;
        Wa.Cursor.setOffsetForPrimitive(e, s, this.autoScroll);
      }
      this.autoScroll && Ga.Browser.IS_SAFARI() && this.isCursorAtEnd && gn.AutoScroll.scrollSafariPrimitiveToEnd(e);
    }
  }, {
    key: "updateGenericElement",
    value: function(e, t, n) {
      this.isHighlighted && or.Highlight.removeForGeneric(this, e), this.spansPopulated || Ge.Elements.appendSpans(this, e);
      var a = (n ? "" : this.startPadding) + ur.Text.lineBreak(this.finalTranscript);
      this.finalSpan.innerHTML = a;
      var s = gn.AutoScroll.isRequired(this.autoScroll, e);
      gn.AutoScroll.changeStateIfNeeded(this, s);
      var o = ur.Text.lineBreak(t) + (n ? "" : this.endPadding);
      this.interimSpan.innerHTML = o, Ga.Browser.IS_SAFARI() && this.insertInCursorLocation && Wa.Cursor.setOffsetForSafariGeneric(e, a.length + o.length), s && gn.AutoScroll.scrollGeneric(this, e), n && (this.scrollingSpan.innerHTML = "");
    }
  }, {
    key: "finalise",
    value: function(e) {
      this._genericElement && (e ? (this.finalSpan = Ge.Elements.createGenericSpan(), this.setInterimColorToFinal(), this.interimSpan = Ge.Elements.createInterimSpan(), this.scrollingSpan = Ge.Elements.createGenericSpan()) : this._genericElement.textContent = this._genericElement.textContent, this.spansPopulated = !1), $a.EventListeners.remove(this);
    }
  }, {
    key: "setInterimColorToFinal",
    value: function() {
      this.interimSpan.style.color = this._finalTextColor || "black";
    }
  }, {
    key: "resetState",
    value: function(e) {
      this._primitiveElement = void 0, this._genericElement = void 0, this.finalTranscript = "", this.finalSpan.innerHTML = "", this.interimSpan.innerHTML = "", this.scrollingSpan.innerHTML = "", this.startPadding = "", this.endPadding = "", this.isHighlighted = !1, this.primitiveTextRecorded = !1, this.numberOfSpacesBeforeNewText = 0, this.numberOfSpacesAfterNewText = 0, e || (this.stopTimeout = void 0);
    }
  }, {
    key: "setStateOnStart",
    value: function() {
      var e;
      this.recognizing = !0, this.isRestarting ? this.isRestarting = !1 : (e = this._onStart) === null || e === void 0 || e.call(this);
    }
  }, {
    key: "setStateOnStop",
    value: function() {
      var e;
      this.recognizing = !1, this.isRestarting || (e = this._onStop) === null || e === void 0 || e.call(this);
    }
  }, {
    key: "setStateOnError",
    value: function(e) {
      var t;
      (t = this._onError) === null || t === void 0 || t.call(this, e), this.recognizing = !1;
    }
  }]);
}();
nn.Speech = Fu;
Object.defineProperty(Pn, "__esModule", {
  value: !0
});
Pn.WebSpeech = void 0;
var Ka = Nn, Ja = Dt, ju = nn, Uu = /* @__PURE__ */ function(r) {
  function i() {
    return E(this, i), K(this, i);
  }
  return J(i, r), _(i, [{
    key: "start",
    value: function(t) {
      var n;
      this._extractText === void 0 && (this._extractText = Ja.Browser.IS_SAFARI() ? Ka.WebSpeechTranscript.extractSafari : Ka.WebSpeechTranscript.extract), this.validate() && (this.prepareBeforeStart(t), this.instantiateService(t), (n = this._service) === null || n === void 0 || n.start(), this._translations = t == null ? void 0 : t.translations);
    }
  }, {
    key: "validate",
    value: function() {
      return i.getAPI() ? !0 : (this.error("Speech Recognition is unsupported"), !1);
    }
  }, {
    key: "instantiateService",
    value: function(t) {
      var n, a, s = i.getAPI();
      this._service = new s(), this._service.continuous = !0, this._service.interimResults = (n = t == null ? void 0 : t.displayInterimResults) !== null && n !== void 0 ? n : !0, this._service.lang = ((a = t == null ? void 0 : t.language) === null || a === void 0 ? void 0 : a.trim()) || "en-US", this.setEvents();
    }
  }, {
    key: "setEvents",
    value: function() {
      var t = this;
      this._service && (this._service.onstart = function() {
        t.setStateOnStart();
      }, this._service.onerror = function(n) {
        Ja.Browser.IS_SAFARI() && n.message === "Another request is started" || n.error === "aborted" && t.isRestarting || n.error !== "no-speech" && t.error(n.message || n.error);
      }, this._service.onaudioend = function() {
        t.setStateOnStop();
      }, this._service.onend = function() {
        t._stopping = !1;
      }, this._service.onresult = function(n) {
        if (G(n.results) > "u" && t._service) t._service.onend = null, t._service.stop();
        else if (t._extractText && !t._stopping) {
          var a = t._extractText(n, t.finalTranscript, t._translations), s = a.interimTranscript, o = a.finalTranscript, l = a.newText;
          t.updateElements(s, o, l);
        }
      });
    }
  }, {
    key: "stop",
    value: function(t) {
      var n;
      this._stopping = !0, (n = this._service) === null || n === void 0 || n.stop(), this.finalise(t);
    }
  }, {
    key: "error",
    value: function(t) {
      console.error(t), this.setStateOnError(t), this.stop();
    }
  }], [{
    key: "getAPI",
    value: function() {
      return window.webkitSpeechRecognition || window.SpeechRecognition;
    }
  }]);
}(ju.Speech);
Pn.WebSpeech = Uu;
var Hn = {};
Object.defineProperty(Hn, "__esModule", {
  value: !0
});
Hn.GlobalState = void 0;
var Ji = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "doubleClickDetector",
    value: function() {
      return r.doubleClickPending ? !0 : (r.doubleClickPending = !0, setTimeout(function() {
        r.doubleClickPending = !1;
      }, 300), !1);
    }
  }]);
}();
Hn.GlobalState = Ji;
Ji.doubleClickPending = !1;
var qn = {}, zn = {};
Object.defineProperty(zn, "__esModule", {
  value: !0
});
zn.PreventConnectionStop = void 0;
var Hu = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "applyPrevention",
    value: function(e) {
      clearTimeout(e._manualConnectionStopPrevention), e.cannotBeStopped = !0, e._manualConnectionStopPrevention = setTimeout(function() {
        e.cannotBeStopped = !1;
      }, 800);
    }
  }, {
    key: "clearPrevention",
    value: function(e) {
      clearTimeout(e._manualConnectionStopPrevention), e.cannotBeStopped = !1;
    }
  }]);
}();
zn.PreventConnectionStop = Hu;
var $n = {}, Vn = {};
Object.defineProperty(Vn, "__esModule", {
  value: !0
});
Vn.README_URL = void 0;
Vn.README_URL = "https://github.com/OvidijusParsiunas/speech-to-element";
Object.defineProperty($n, "__esModule", {
  value: !0
});
$n.AzureSpeechConfig = void 0;
var cr = Vn, qu = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "validateOptions",
    value: function(e, t) {
      return t ? !t.subscriptionKey && !t.token && !t.retrieveToken ? (e("Please define a 'subscriptionKey', 'token' or 'retrieveToken' property - more info: ".concat(cr.README_URL)), !1) : t.region ? !0 : (e("Please define a 'region' property - more info: ".concat(cr.README_URL)), !1) : (e("Please provide subscription details - more info: ".concat(cr.README_URL)), !1);
    }
  }, {
    key: "getNewSpeechConfig",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n, a) {
        return m().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              if (!a.region) {
                o.next = 2;
                break;
              }
              return o.abrupt("return", a.subscriptionKey ? n.fromSubscription(a.subscriptionKey.trim(), a.region.trim()) : a.token ? n.fromAuthorizationToken(a.token.trim(), a.region.trim()) : a.retrieveToken ? a.retrieveToken().then(function(l) {
                return a.region ? n.fromAuthorizationToken((l == null ? void 0 : l.trim()) || "", a.region.trim()) : null;
              }).catch(function(l) {
                return console.error(l), null;
              }) : null);
            case 2:
            case "end":
              return o.stop();
          }
        }, t);
      }));
      function e(t, n) {
        return i.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "process",
    value: function(e, t) {
      t.language && (e.speechRecognitionLanguage = t.language.trim());
    }
  }, {
    key: "get",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n, a) {
        var s;
        return m().wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              return l.next = 2, r.getNewSpeechConfig(n, a);
            case 2:
              return s = l.sent, l.abrupt("return", (s && r.process(s, a), s));
            case 4:
            case "end":
              return l.stop();
          }
        }, t);
      }));
      function e(t, n) {
        return i.apply(this, arguments);
      }
      return e;
    }()
  }]);
}();
$n.AzureSpeechConfig = qu;
var Gn = {};
Object.defineProperty(Gn, "__esModule", {
  value: !0
});
Gn.StopTimeout = void 0;
var Yi = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "set",
    value: function(e) {
      e.stopTimeout = setTimeout(function() {
        return e.stop();
      }, e.stopTimeoutMS);
    }
  }, {
    key: "reset",
    value: function(e, t) {
      e.stopTimeoutMS = t || r.DEFAULT_MS, e.stopTimeout && clearTimeout(e.stopTimeout), r.set(e);
    }
  }]);
}();
Gn.StopTimeout = Yi;
Yi.DEFAULT_MS = 2e4;
var Wn = {};
Object.defineProperty(Wn, "__esModule", {
  value: !0
});
Wn.AzureTranscript = void 0;
var zu = tn, $u = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "extract",
    value: (
      // newText is used to only send new text in onResult as finalTranscript is continuously accumulated
      function(e, t, n, a) {
        return a && (e = zu.Translate.translate(e, a)), n ? {
          interimTranscript: "",
          finalTranscript: t + e,
          newText: e
        } : {
          interimTranscript: e,
          finalTranscript: t,
          newText: e
        };
      }
    )
  }]);
}();
Wn.AzureTranscript = $u;
Object.defineProperty(qn, "__esModule", {
  value: !0
});
qn.Azure = void 0;
var Ya = zn, Xa = $n, dr = Gn, Za = Wn, Vu = nn, Gu = /* @__PURE__ */ function(r) {
  function i() {
    var e;
    return E(this, i), e = K(this, i, arguments), e._newTextPadding = "", e;
  }
  return J(i, r), _(i, [{
    key: "start",
    value: function(t, n) {
      this._newTextPadding = "", this.stopTimeout === void 0 && dr.StopTimeout.reset(this, t == null ? void 0 : t.stopAfterSilenceMs), this.prepareBeforeStart(t), this.startAsync(t), n || Ya.PreventConnectionStop.applyPrevention(this);
    }
  }, {
    key: "startAsync",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s;
        return m().wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              if (l.t0 = this.validate(a), !l.t0) {
                l.next = 6;
                break;
              }
              return l.next = 4, this.instantiateService(a);
            case 4:
              this._translations = a == null ? void 0 : a.translations, (s = this._service) === null || s === void 0 || s.startContinuousRecognitionAsync(function() {
              }, this.error);
            case 6:
            case "end":
              return l.stop();
          }
        }, n, this);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "validate",
    value: function(t) {
      return i.getAPI() ? Xa.AzureSpeechConfig.validateOptions(this.error.bind(this), t) : (this.moduleNotFound(), !1);
    }
  }, {
    key: "instantiateService",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s, o, l, u;
        return m().wrap(function(d) {
          for (; ; ) switch (d.prev = d.next) {
            case 0:
              return s = i.getAPI(), o = s.AudioConfig.fromDefaultMicrophoneInput(), d.next = 4, Xa.AzureSpeechConfig.get(s.SpeechConfig, a);
            case 4:
              l = d.sent, l ? (u = new s.SpeechRecognizer(l, o), this.setEvents(u), this._service = u, a.retrieveToken && this.retrieveTokenInterval(a.retrieveToken)) : this.error("Unable to contact Azure server");
            case 6:
            case "end":
              return d.stop();
          }
        }, n, this);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "setEvents",
    value: function(t) {
      t.recognizing = this.onRecognizing.bind(this), t.recognized = this.onRecognized.bind(this), t.sessionStarted = this.onSessionStarted.bind(this), t.canceled = this.onCanceled.bind(this), t.sessionStopped = this.onSessionStopped.bind(this);
    }
    // prettier-ignore
  }, {
    key: "onRecognizing",
    value: function(t, n) {
      if (!this._stopping) {
        var a = Za.AzureTranscript.extract(this._newTextPadding + n.result.text, this.finalTranscript, !1, this._translations), s = a.interimTranscript, o = a.finalTranscript, l = a.newText;
        dr.StopTimeout.reset(this, this.stopTimeoutMS), this.updateElements(s, o, l);
      }
    }
    // WORK - huge opportunity to fix this in the repo!!!!!
    //   function onRecognized(sender, recognitionEventArgs) {
    //     var result = recognitionEventArgs.result;
    //     onRecognizedResult(recognitionEventArgs.result);
    // }
    // prettier-ignore
  }, {
    key: "onRecognized",
    value: function(t, n) {
      var a = n.result;
      switch (a.reason) {
        case window.SpeechSDK.ResultReason.Canceled:
          break;
        case window.SpeechSDK.ResultReason.RecognizedSpeech:
          if (a.text && !this._stopping) {
            var s = Za.AzureTranscript.extract(this._newTextPadding + a.text, this.finalTranscript, !0, this._translations), o = s.interimTranscript, l = s.finalTranscript, u = s.newText;
            dr.StopTimeout.reset(this, this.stopTimeoutMS), this.updateElements(o, l, u), l !== "" && (this._newTextPadding = " ");
          }
          break;
      }
    }
  }, {
    key: "onCanceled",
    value: function(t, n) {
      n.reason === window.SpeechSDK.CancellationReason.Error && this.error(n.errorDetails);
    }
  }, {
    key: "onSessionStarted",
    value: function() {
      Ya.PreventConnectionStop.clearPrevention(this), this.setStateOnStart();
    }
  }, {
    key: "onSessionStopped",
    value: function() {
      this._retrieveTokenInterval || clearInterval(this._retrieveTokenInterval), this._stopping = !1, this.setStateOnStop();
    }
  }, {
    key: "retrieveTokenInterval",
    value: function(t) {
      var n = this;
      this._retrieveTokenInterval = setInterval(function() {
        t == null || t().then(function(a) {
          n._service && (n._service.authorizationToken = (a == null ? void 0 : a.trim()) || "");
        }).catch(function(a) {
          n.error(a);
        });
      }, 1e4);
    }
  }, {
    key: "stop",
    value: function(t) {
      var n;
      !t && this._retrieveTokenInterval && clearInterval(this._retrieveTokenInterval), this._stopping = !0, (n = this._service) === null || n === void 0 || n.stopContinuousRecognitionAsync(), this.finalise(t);
    }
  }, {
    key: "moduleNotFound",
    value: function() {
      console.error("speech recognition module not found:"), console.error(`please install the 'microsoft-cognitiveservices-speech-sdk' npm package or add a script tag: <script src="https://aka.ms/csspeech/jsbrowserpackageraw"><\/script>`), this.setStateOnError("speech recognition module not found");
    }
  }, {
    key: "error",
    value: function(t) {
      this._retrieveTokenInterval && clearInterval(this._retrieveTokenInterval), console.error(t), this.setStateOnError(t), this.stop();
    }
  }], [{
    key: "getAPI",
    value: function() {
      return window.SpeechSDK;
    }
  }]);
}(Vu.Speech);
qn.Azure = Gu;
Object.defineProperty(Wi, "__esModule", {
  value: !0
});
var Qa = Pn, Wu = rn, ze = Hn, Ku = qn, Ju = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "toggle",
    value: function(e, t) {
      var n, a, s = e.toLocaleLowerCase().trim();
      !((n = ze.GlobalState.service) === null || n === void 0) && n.recognizing ? this.stop() : s === "webspeech" ? r.startWebSpeech(t) : s === "azure" ? r.startAzure(t) : (console.error("service not found - must be either 'webspeech' or 'azure'"), (a = t == null ? void 0 : t.onError) === null || a === void 0 || a.call(t, "service not found - must be either 'webspeech' or 'azure'"));
    }
  }, {
    key: "startWebSpeech",
    value: function(e) {
      r.stop() || (ze.GlobalState.service = new Qa.WebSpeech(), ze.GlobalState.service.start(e));
    }
  }, {
    key: "isWebSpeechSupported",
    value: function() {
      return !!Qa.WebSpeech.getAPI();
    }
  }, {
    key: "startAzure",
    value: function(e) {
      var t;
      r.stop() || !((t = ze.GlobalState.service) === null || t === void 0) && t.cannotBeStopped || (ze.GlobalState.service = new Ku.Azure(), ze.GlobalState.service.start(e));
    }
  }, {
    key: "stop",
    value: function() {
      var e;
      return ze.GlobalState.doubleClickDetector() ? !0 : (!((e = ze.GlobalState.service) === null || e === void 0) && e.recognizing && ze.GlobalState.service.stop(), !1);
    }
  }, {
    key: "endCommandMode",
    value: function() {
      ze.GlobalState.service && Wu.CommandUtils.toggleCommandModeOff(ze.GlobalState.service);
    }
  }]);
}(), wn = Wi.default = Ju, Yu = /* @__PURE__ */ function() {
  function r(i, e) {
    E(this, r), this.silenceMS = 2e3, this.stop = !0, typeof e == "boolean" && e === !1 && (this.stop = !1), typeof i == "number" && (this.silenceMS = i);
  }
  return _(r, [{
    key: "setSilenceTimeout",
    value: function(e, t) {
      var n = this;
      this._silenceTimeout = setTimeout(function() {
        var a;
        (a = e.submit) == null || a.call(e), wn.stop(), n.stop || setTimeout(t, Gr.MICROPHONE_RESET_TIMEOUT_MS);
      }, this.silenceMS);
    }
  }, {
    key: "clearSilenceTimeout",
    value: function() {
      this._silenceTimeout && clearTimeout(this._silenceTimeout);
    }
  }, {
    key: "resetSilenceTimeout",
    value: function(e, t) {
      this.clearSilenceTimeout(), this.setSilenceTimeout(e, t);
    }
  }, {
    key: "onPause",
    value: function(e, t, n) {
      e ? this.resetSilenceTimeout(t, n) : this.clearSilenceTimeout();
    }
  }]);
}(), Xi = /* @__PURE__ */ function(r) {
  function i(e, t, n) {
    var a;
    E(this, i);
    var s = G(e.speechToText) == "object" ? e.speechToText : {};
    a = K(this, i, [s == null ? void 0 : s.button]);
    var o = a.processConfiguration(t, e.speechToText), l = o.serviceName, u = o.processedConfig;
    if (a._addErrorMessage = n, l === "webspeech" && !wn.isWebSpeechSupported()) a.changeToUnsupported();
    else {
      var c = !e.textInput || !e.textInput.disabled;
      a.elementRef.onclick = a.buttonClick.bind(a, t, c, l, u);
    }
    return setTimeout(function() {
      a._validationHandler = e._validationHandler;
    }), a;
  }
  return J(i, r), _(i, [{
    key: "processConfiguration",
    value: function(t, n) {
      var a, s, o, l, u, c, d = G(n) == "object" ? n : {}, p = G(d.webSpeech) == "object" ? d.webSpeech : {}, h = d.azure || {}, g = ce(ce({
        displayInterimResults: (a = d.displayInterimResults) !== null && a !== void 0 ? a : void 0,
        textColor: (s = d.textColor) !== null && s !== void 0 ? s : void 0,
        translations: (o = d.translations) !== null && o !== void 0 ? o : void 0,
        commands: (l = d.commands) !== null && l !== void 0 ? l : void 0,
        events: (u = d.events) !== null && u !== void 0 ? u : void 0
      }, p), h), k = (c = d.commands) == null ? void 0 : c.submit;
      return k && (g.onPreResult = function(S) {
        return S.toLowerCase().includes(k) ? (setTimeout(function() {
          var T;
          return (T = t.submit) == null ? void 0 : T.call(t);
        }), wn.endCommandMode(), {
          restart: !0,
          removeNewText: !0
        }) : null;
      }), d.submitAfterSilence && (this._silenceSubmit = new Yu(d.submitAfterSilence, d.stopAfterSubmit)), {
        serviceName: i.getServiceName(d),
        processedConfig: g
      };
    }
  }, {
    key: "buttonClick",
    value: function(t, n, a, s) {
      var o = this, l = s == null ? void 0 : s.events;
      t.removePlaceholderStyle(), wn.toggle(a, ce({
        insertInCursorLocation: !1,
        element: n ? t.inputElementRef : void 0,
        onError: function() {
          var c;
          o.onError(), (c = o._silenceSubmit) == null || c.clearSilenceTimeout();
        },
        onStart: function() {
          var c;
          o.changeToActive(), (c = l == null ? void 0 : l.onStart) == null || c.call(l);
        },
        onStop: function() {
          var c, d, p;
          (c = o._validationHandler) == null || c.call(o), (d = o._silenceSubmit) == null || d.clearSilenceTimeout(), o.changeToDefault(), (p = l == null ? void 0 : l.onStop) == null || p.call(l);
        },
        onPauseTrigger: function(c) {
          var d, p;
          (d = o._silenceSubmit) == null || d.onPause(c, t, o.elementRef.onclick), (p = l == null ? void 0 : l.onPauseTrigger) == null || p.call(l, c);
        },
        onPreResult: function(c, d) {
          var p;
          (p = l == null ? void 0 : l.onPreResult) == null || p.call(l, c, d);
        },
        onResult: function(c, d) {
          var p, h, g;
          d && ((p = o._validationHandler) == null || p.call(o)), (h = o._silenceSubmit) == null || h.resetSilenceTimeout(t, o.elementRef.onclick), (g = l == null ? void 0 : l.onResult) == null || g.call(l, c, d);
        },
        onCommandModeTrigger: function(c) {
          var d;
          o.onCommandModeTrigger(c), (d = l == null ? void 0 : l.onCommandModeTrigger) == null || d.call(l, c);
        }
      }, s));
    }
  }, {
    key: "onCommandModeTrigger",
    value: function(t) {
      t ? this.changeToCommandMode() : this.changeToActive();
    }
  }, {
    key: "onError",
    value: function() {
      this._addErrorMessage("speechToText", "speech input error");
    }
  }], [{
    key: "getServiceName",
    value: function(t) {
      return t.azure ? "azure" : "webspeech";
    }
  }, {
    key: "toggleSpeechAfterSubmit",
    value: function(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      t.click(), n || setTimeout(function() {
        return t.click();
      }, i.MICROPHONE_RESET_TIMEOUT_MS);
    }
  }]);
}(Gi);
Xi.MICROPHONE_RESET_TIMEOUT_MS = 300;
var Gr = Xi, Wr = /* @__PURE__ */ function() {
  function r(i, e, t, n) {
    var a = this;
    E(this, r), this._attachments = [], this._fileCountLimit = 99, this._acceptedFormat = "", e.maxNumberOfFiles && (this._fileCountLimit = e.maxNumberOfFiles), this._toggleContainerDisplay = t, this._fileAttachmentsContainerRef = n, e.acceptedFormats && (this._acceptedFormat = e.acceptedFormats), setTimeout(function() {
      a._validationHandler = i._validationHandler;
    });
  }
  return _(r, [{
    key: "attemptAddFile",
    value: function(e, t) {
      return r.isFileTypeValid(e, this._acceptedFormat) ? (this.addAttachmentBasedOnType(e, t, !0), !0) : !1;
    }
  }, {
    key: "addAttachmentBasedOnType",
    value: function(e, t, n) {
      var a = r.getTypeFromBlob(e);
      if (a === "image") {
        var s = r.createImageAttachment(t);
        this.addFileAttachment(e, "image", s, n);
      } else if (a === "audio") {
        var o = Ir.createAudioAttachment(t);
        this.addFileAttachment(e, "audio", o, n);
      } else {
        var l = r.createAnyFileAttachment(e.name);
        this.addFileAttachment(e, "any", l, n);
      }
    }
  }, {
    key: "addFileAttachment",
    value: function(e, t, n, a) {
      var s, o = r.createContainer(n);
      if (this._attachments.length >= this._fileCountLimit) {
        var l = this._attachments[this._attachments.length - 1].removeButton;
        l == null || l.click();
        var u = this._fileAttachmentsContainerRef.children;
        this._fileAttachmentsContainerRef.insertBefore(o, u[0]);
      } else this._fileAttachmentsContainerRef.appendChild(o);
      var c = {
        file: e,
        attachmentContainerElement: o,
        fileType: t
      };
      return a && (c.removeButton = this.createRemoveAttachmentButton(c), o.appendChild(c.removeButton)), this._toggleContainerDisplay(!0), this._attachments.push(c), this._fileAttachmentsContainerRef.scrollTop = this._fileAttachmentsContainerRef.scrollHeight, (s = this._validationHandler) == null || s.call(this), c;
    }
  }, {
    key: "createRemoveAttachmentButton",
    value: function(e) {
      var t = document.createElement("div");
      t.classList.add("remove-file-attachment-button"), t.onclick = this.removeAttachment.bind(this, e);
      var n = document.createElement("div");
      return n.classList.add("x-icon"), n.innerText = "×", t.appendChild(n), t;
    }
  }, {
    key: "removeAttachment",
    value: function(e) {
      var t, n = this._attachments.findIndex(function(s) {
        return s === e;
      }), a = this._attachments[n].attachmentContainerElement;
      this._attachments.splice(n, 1), Ir.stopAttachmentPlayback(a), a.remove(), this._toggleContainerDisplay(!1), (t = this._validationHandler) == null || t.call(this);
    }
  }, {
    key: "getFiles",
    value: function() {
      return Array.from(this._attachments).map(function(e) {
        return {
          file: e.file,
          type: e.fileType
        };
      });
    }
  }, {
    key: "removeAllAttachments",
    value: function() {
      this._attachments.forEach(function(e) {
        setTimeout(function() {
          var t;
          return (t = e.removeButton) == null ? void 0 : t.click();
        });
      });
    }
  }], [{
    key: "isFileTypeValid",
    value: function(e, t) {
      if (t === "") return !0;
      for (var n = t.split(","), a = 0; a < n.length; a++) {
        var s = n[a].trim();
        if (e.type === s) return !0;
        if (s.startsWith(".")) {
          var o = s.slice(1);
          if (e.name.endsWith(o)) return !0;
        } else if (e.name.endsWith(s) || s.endsWith("/*") && e.type.startsWith(s.slice(0, -2))) return !0;
      }
      return !1;
    }
  }, {
    key: "getTypeFromBlob",
    value: function(e) {
      var t = e.type;
      return t.startsWith("image") ? "image" : t.startsWith("audio") ? "audio" : "any";
    }
  }, {
    key: "createImageAttachment",
    value: function(e) {
      var t = new Image();
      return t.src = e, t.classList.add("image-attachment"), t;
    }
  }, {
    key: "createAnyFileAttachment",
    value: function(e) {
      var t = document.createElement("div");
      t.classList.add("border-bound-attachment"), Pt.IS_SAFARI && t.classList.add("border-bound-attachment-safari");
      var n = document.createElement("div");
      n.classList.add("any-file-attachment-text");
      var a = document.createElement("div");
      return a.classList.add("file-attachment-text-container"), a.appendChild(n), n.textContent = e, t.appendChild(a), t;
    }
  }, {
    key: "createContainer",
    value: function(e) {
      var t = document.createElement("div");
      return t.classList.add("file-attachment"), t.appendChild(e), t;
    }
  }]);
}(), Xu = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <title>play</title>
  <path d="M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z"></path>
</svg>`, ei = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>stop</title>
<path d="M5.92 24.096q0 0.832 0.576 1.408t1.44 0.608h16.128q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-16.128q-0.832 0-1.44 0.576t-0.576 1.44v16.16z"></path>
</svg>`, Zi = /* @__PURE__ */ function(r) {
  function i(e, t, n, a) {
    return E(this, i), K(this, i, [e, t, n, a]);
  }
  return J(i, r), _(i, [{
    key: "createTimer",
    value: function(t, n) {
      var a = this, s = 0, o = n !== void 0 && n < i.TIMER_LIMIT_S ? n : i.TIMER_LIMIT_S;
      return setInterval(function() {
        var l;
        s += 1, s === o && ((l = a.stopPlaceholderCallback) == null || l.call(a), a.clearTimer()), s === 600 && t.classList.add("audio-placeholder-text-4-digits");
        var u = Math.floor(s / 60), c = (s % 60).toString().padStart(2, "0");
        t.textContent = "".concat(u, ":").concat(c);
      }, 1e3);
    }
  }, {
    key: "createPlaceholderAudioAttachment",
    value: function(t) {
      var n = i.createAudioContainer(), a = document.createElement("div");
      a.classList.add("audio-placeholder-text-3-digits");
      var s = document.createElement("div");
      s.classList.add("file-attachment-text-container", "audio-placeholder-text-3-digits-container"), s.appendChild(a);
      var o = Be.createSVGElement(ei);
      return o.classList.add("attachment-icon", "stop-icon", "not-removable-attachment-icon"), a.textContent = "0:00", this._activePlaceholderTimer = this.createTimer(a, t), n.appendChild(s), this.addPlaceholderAudioAttachmentEvents(n, o, s), n;
    }
  }, {
    key: "addPlaceholderAudioAttachmentEvents",
    value: function(t, n, a) {
      var s = this, o = function() {
        return t.replaceChildren(n);
      };
      t.addEventListener("mouseenter", o);
      var l = function() {
        return t.replaceChildren(a);
      };
      t.addEventListener("mouseleave", l);
      var u = function() {
        var d;
        return (d = s.stopPlaceholderCallback) == null ? void 0 : d.call(s);
      };
      t.addEventListener("click", u);
    }
  }, {
    key: "addPlaceholderAttachment",
    value: function(t, n) {
      var a = this.createPlaceholderAudioAttachment(n);
      this._activePlaceholderAttachment = this.addFileAttachment(new File([], ""), "audio", a, !1), this.stopPlaceholderCallback = t;
    }
    // prettier-ignore
  }, {
    key: "completePlaceholderAttachment",
    value: function(t, n) {
      var a = this._activePlaceholderAttachment;
      a && (a.file = t, i.addAudioElements(a.attachmentContainerElement.children[0], n), a.removeButton = this.createRemoveAttachmentButton(a), a.attachmentContainerElement.appendChild(a.removeButton), this._activePlaceholderAttachment = void 0, this.clearTimer());
    }
  }, {
    key: "removePlaceholderAttachment",
    value: function() {
      this._activePlaceholderAttachment && (this.removeAttachment(this._activePlaceholderAttachment), this._activePlaceholderAttachment = void 0, this.clearTimer());
    }
  }, {
    key: "clearTimer",
    value: function() {
      this._activePlaceholderTimer !== void 0 && (clearInterval(this._activePlaceholderTimer), this._activePlaceholderTimer = void 0, this.stopPlaceholderCallback = void 0);
    }
  }], [{
    key: "createAudioContainer",
    value: function() {
      var t = document.createElement("div");
      return t.classList.add("border-bound-attachment", "audio-attachment-icon-container"), Pt.IS_SAFARI && t.classList.add("border-bound-attachment-safari"), t;
    }
  }, {
    key: "addAudioElements",
    value: function(t, n) {
      var a = t.parentElement ? Ue.cloneElement(t) : t, s = document.createElement("audio");
      s.src = n;
      var o = Be.createSVGElement(Xu);
      o.classList.add("attachment-icon", "play-icon");
      var l = Be.createSVGElement(ei);
      l.classList.add("attachment-icon", "stop-icon"), a.replaceChildren(o), s.onplay = function() {
        a.replaceChildren(l);
      }, s.onpause = function() {
        a.replaceChildren(o), s.currentTime = 0;
      }, s.onended = function() {
        a.replaceChildren(o);
      }, a.onclick = function() {
        s.paused ? s.play() : s.pause();
      };
    }
  }, {
    key: "createAudioAttachment",
    value: function(t) {
      var n = i.createAudioContainer();
      return i.addAudioElements(n, t), n;
    }
  }, {
    key: "stopAttachmentPlayback",
    value: function(t) {
      var n, a, s;
      (s = (a = (n = t.children[0]) == null ? void 0 : n.children) == null ? void 0 : a[0]) != null && s.classList.contains("stop-icon") && t.children[0].click();
    }
  }]);
}(Wr);
Zi.TIMER_LIMIT_S = 5999;
var Ir = Zi, Zu = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "create",
    value: (
      // prettier-ignore
      function(e, t, n, a, s) {
        return s === "audio" ? new Ir(e, t, n, a) : new Wr(e, t, n, a);
      }
    )
  }]);
}(), Kr = /* @__PURE__ */ function() {
  function r(i, e, t) {
    E(this, r), this._fileAttachmentsTypes = [], this.elementRef = this.createAttachmentContainer();
    var n = G(t) == "object" && !!t.displayFileAttachmentContainer;
    this.toggleContainerDisplay(n), i.appendChild(this.elementRef), e && Object.assign(this.elementRef.style, e);
  }
  return _(r, [{
    key: "addType",
    value: function(e, t, n) {
      var a = Zu.create(e, t, this.toggleContainerDisplay.bind(this), this.elementRef, n);
      return this._fileAttachmentsTypes.push(a), a;
    }
  }, {
    key: "createAttachmentContainer",
    value: function() {
      var e = document.createElement("div");
      return e.id = "file-attachment-container", e;
    }
  }, {
    key: "toggleContainerDisplay",
    value: function(e) {
      e ? this.elementRef.style.display = "block" : this.elementRef.children.length === 0 && (this.elementRef.style.display = "none");
    }
  }, {
    key: "getAllFileData",
    value: function() {
      var e = this._fileAttachmentsTypes.map(function(t) {
        return t.getFiles();
      }).flat();
      return e.length > 0 ? e : void 0;
    }
  }, {
    key: "completePlaceholders",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t() {
        return m().wrap(function(a) {
          for (; ; ) switch (a.prev = a.next) {
            case 0:
              return a.next = 2, Promise.all(this._fileAttachmentsTypes.map(/* @__PURE__ */ function() {
                var s = C(/* @__PURE__ */ m().mark(function o(l) {
                  var u;
                  return m().wrap(function(d) {
                    for (; ; ) switch (d.prev = d.next) {
                      case 0:
                        return d.abrupt("return", (u = l.stopPlaceholderCallback) == null ? void 0 : u.call(l));
                      case 1:
                      case "end":
                        return d.stop();
                    }
                  }, o);
                }));
                return function(o) {
                  return s.apply(this, arguments);
                };
              }()));
            case 2:
            case "end":
              return a.stop();
          }
        }, t, this);
      }));
      function e() {
        return i.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "addFilesToAnyType",
    value: function(e) {
      r.addFilesToType(e, this._fileAttachmentsTypes);
    }
  }, {
    key: "removeAllFiles",
    value: function() {
      this._fileAttachmentsTypes.forEach(function(e) {
        return e.removeAllAttachments();
      }), this.elementRef.replaceChildren(), this.toggleContainerDisplay(!1);
    }
  }, {
    key: "getNumberOfTypes",
    value: function() {
      return this._fileAttachmentsTypes.length;
    }
  }], [{
    key: "addFilesToType",
    value: function(e, t) {
      e.forEach(function(n) {
        var a = new FileReader();
        a.readAsDataURL(n), a.onload = function(s) {
          for (var o = 0; o < t.length && !t[o].attemptAddFile(n, s.target.result); o += 1) ;
        };
      });
    }
  }]);
}(), Qi = /* @__PURE__ */ function() {
  function r(i, e, t) {
    E(this, r), this._isOpen = !1, this._contentRef = r.createModalContent(e, t == null ? void 0 : t.backgroundColor), this._buttonPanel = r.createButtonPanel(t == null ? void 0 : t.backgroundColor), this._elementRef = r.createContainer(this._contentRef, t), this._elementRef.appendChild(this._buttonPanel), i.appendChild(this._elementRef), this._backgroundPanelRef = r.createDarkBackgroundPanel(), i.appendChild(this._backgroundPanelRef), this.addWindowEvents(i);
  }
  return _(r, [{
    key: "isOpen",
    value: function() {
      return this._isOpen;
    }
  }, {
    key: "addButtons",
    value: function() {
      for (var e = this, t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      n.forEach(function(s) {
        $e.addAttributes(s), e._buttonPanel.appendChild(s);
      });
    }
  }, {
    key: "close",
    value: function() {
      var e = this;
      this._elementRef.classList.remove("show-modal"), this._elementRef.classList.add("hide-modal"), this._backgroundPanelRef.classList.remove("show-modal-background"), this._backgroundPanelRef.classList.add("hide-modal-background"), this._isOpen = !1, setTimeout(function() {
        e._elementRef.style.display = "none", e._backgroundPanelRef.style.display = "none";
      }, r.MODAL_CLOSE_TIMEOUT_MS);
    }
  }, {
    key: "displayModalElements",
    value: function() {
      this._elementRef.style.display = "flex", this._elementRef.classList.remove("hide-modal"), this._elementRef.classList.add("show-modal"), this._backgroundPanelRef.style.display = "block", this._backgroundPanelRef.classList.remove("hide-modal-background"), this._backgroundPanelRef.classList.add("show-modal-background"), this._isOpen = !0;
    }
  }, {
    key: "openTextModal",
    value: function(e) {
      this._contentRef.innerHTML = e, this.displayModalElements();
    }
  }, {
    key: "addCloseButton",
    value: function(e, t, n) {
      var a = this, s = t ? r.createSVGButton(e) : r.createTextButton(e);
      return this.addButtons(s), s.onclick = function() {
        a.close(), setTimeout(function() {
          n == null || n();
        }, 140);
      }, s;
    }
  }, {
    key: "addWindowEvents",
    value: function(e) {
      this.keyDownEvent = this.windowKeyDown.bind(this, e), window.addEventListener("keydown", this.keyDownEvent);
    }
  }, {
    key: "windowKeyDown",
    value: function(e, t) {
      var n, a;
      !e.isConnected && this.keyDownEvent ? window.removeEventListener("keydown", this.keyDownEvent) : this._isOpen && (t.key === xe.ESCAPE ? (this.close(), (n = this.extensionCloseCallback) == null || n.call(this)) : t.key === xe.ENTER && (this.close(), (a = this.extensionCloseCallback) == null || a.call(this)));
    }
  }], [{
    key: "createContainer",
    value: function(e, t) {
      var n = document.createElement("div");
      return n.classList.add("modal"), n.appendChild(e), t && delete t.backgroundColor, Object.assign(n.style, t), n;
    }
  }, {
    key: "createModalContent",
    value: function(e, t) {
      var n, a = document.createElement("div");
      return (n = a.classList).add.apply(n, Rn(e)), t && (a.style.backgroundColor = t), document.createElement("div").appendChild(a), a;
    }
  }, {
    key: "createButtonPanel",
    value: function(e) {
      var t = document.createElement("div");
      return t.classList.add("modal-button-panel"), e && (t.style.backgroundColor = e), t;
    }
  }, {
    key: "createDarkBackgroundPanel",
    value: function() {
      var e = document.createElement("div");
      return e.id = "modal-background-panel", e;
    }
  }, {
    key: "createTextButton",
    value: function(e) {
      var t = document.createElement("div");
      return t.classList.add("modal-button"), t.textContent = e, t;
    }
  }, {
    key: "createSVGButton",
    value: function(e) {
      var t = document.createElement("div");
      t.classList.add("modal-button", "modal-svg-button");
      var n = Be.createSVGElement(e);
      return n.classList.add("modal-svg-button-icon"), t.appendChild(n), t;
    }
  }, {
    key: "createTextModalFunc",
    value: function(e, t, n) {
      var a;
      if (G(t) == "object" && (a = t.files) != null && a.infoModal) {
        var s = new r(e, ["modal-content"], t.files.infoModal.containerStyle);
        return s.addCloseButton("OK", !1, n), s.openTextModal.bind(s, t.infoModalTextMarkUp || "");
      }
    }
  }]);
}();
Qi.MODAL_CLOSE_TIMEOUT_MS = 190;
var Gt = Qi, Qu = /* @__PURE__ */ function(r) {
  function i(e, t, n, a, s, o) {
    var l;
    E(this, i);
    var u, c, d, p, h, g, k, S, T, A = (u = n == null ? void 0 : n.button) == null ? void 0 : u.position, D = ((p = (d = (c = n == null ? void 0 : n.button) == null ? void 0 : c.styles) == null ? void 0 : d.text) == null ? void 0 : p.content) || o;
    l = K(this, i, [i.createButtonElement(), A, n.button, D]);
    var N = A === "dropup-menu", x = l.createInnerElements(a, s, l._customStyles, N);
    return l._inputElement = i.createInputElement((h = n == null ? void 0 : n.files) == null ? void 0 : h.acceptedFormats), l.addClickEvent(e, n), l.elementRef.replaceChildren(x.styles), l.reapplyStateStyle("styles"), l._fileAttachmentsType = t, l._openModalOnce = ((k = (g = n.files) == null ? void 0 : g.infoModal) == null ? void 0 : k.openModalOnce) === !1 || (T = (S = n.files) == null ? void 0 : S.infoModal) == null ? void 0 : T.openModalOnce, l;
  }
  return J(i, r), _(i, [{
    key: "createInnerElements",
    value: function(t, n, a) {
      var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, o = i.createSVGIconElement(t, n);
      return {
        styles: yt.createInnerElement(this.elementRef, o, "styles", a, s)
      };
    }
  }, {
    key: "triggerImportPrompt",
    value: function(t) {
      t.onchange = this.import.bind(this, t), t.click();
    }
  }, {
    key: "import",
    value: function(t) {
      Kr.addFilesToType(Array.from(t.files || []), [this._fileAttachmentsType]), t.value = "";
    }
  }, {
    key: "addClickEvent",
    value: function(t, n) {
      var a = this.triggerImportPrompt.bind(this, this._inputElement), s = Gt.createTextModalFunc(t, n, a);
      this.elementRef.onclick = this.click.bind(this, s);
    }
  }, {
    key: "click",
    value: function(t) {
      t && (this._openModalOnce === void 0 || this._openModalOnce === !0) ? (t(), this._openModalOnce === !0 && (this._openModalOnce = !1)) : this.triggerImportPrompt(this._inputElement);
    }
  }], [{
    key: "createInputElement",
    value: function(t) {
      var n = document.createElement("input");
      return n.type = "file", n.accept = t || "", n.hidden = !0, n.multiple = !0, n;
    }
  }, {
    key: "createButtonElement",
    value: function() {
      var t = document.createElement("div");
      return t.classList.add("input-button", "upload-file-button"), $e.addAttributes(t), t;
    }
  }, {
    key: "createSVGIconElement",
    value: function(t, n) {
      var a = Be.createSVGElement(n);
      return a.id = t, a;
    }
  }]);
}(en), ti = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "create",
    value: function(e, t, n) {
      var a = r.createElement(n);
      r.addEvents(a, e, t), e.appendChild(a);
    }
  }, {
    key: "createElement",
    value: function(e) {
      var t = document.createElement("div");
      return t.id = "drag-and-drop", G(e) == "object" && Object.assign(t.style, e), t;
    }
  }, {
    key: "addEvents",
    value: function(e, t, n) {
      t.ondragenter = function(a) {
        a.preventDefault(), r.display(e);
      }, e.ondragleave = function(a) {
        a.preventDefault(), r.hide(e);
      }, e.ondragover = function(a) {
        a.preventDefault();
      }, e.ondrop = function(a) {
        a.preventDefault(), r.uploadFile(n, a), r.hide(e);
      };
    }
  }, {
    key: "uploadFile",
    value: function(e, t) {
      var n, a = (n = t.dataTransfer) == null ? void 0 : n.files;
      a && e.addFilesToAnyType(Array.from(a));
    }
  }, {
    key: "display",
    value: function(e) {
      e.style.display = "block";
    }
  }, {
    key: "hide",
    value: function(e) {
      e.style.display = "none";
    }
  }, {
    key: "isEnabled",
    value: function(e, t) {
      return t !== void 0 && t === !1 ? !1 : !!t || e.getNumberOfTypes() > 0;
    }
  }]);
}(), ec = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "validate",
    value: (
      // prettier-ignore
      function(e, t, n, a, s) {
        var o = e(n, a, s);
        return o ? t.changeToSubmitIcon() : t.changeToDisabledIcon(), o;
      }
    )
    // prettier-ignore
  }, {
    key: "useValidationFunc",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n, a, s, o) {
        var l, u, c;
        return m().wrap(function(p) {
          for (; ; ) switch (p.prev = p.next) {
            case 0:
              return l = a.isTextInputEmpty() ? "" : a.inputElementRef.textContent, p.next = 3, s.completePlaceholders();
            case 3:
              return u = s.getAllFileData(), c = u == null ? void 0 : u.map(function(h) {
                return h.file;
              }), p.abrupt("return", r.validate(n, o, l, c));
            case 5:
            case "end":
              return p.stop();
          }
        }, t);
      }));
      function e(t, n, a, s) {
        return i.apply(this, arguments);
      }
      return e;
    }()
    // prettier-ignore
  }, {
    key: "useValidationFuncProgrammatic",
    value: function() {
      var i = C(/* @__PURE__ */ m().mark(function t(n, a, s) {
        var o, l;
        return m().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              return l = (o = a.files) == null ? void 0 : o.map(function(d) {
                return d.file;
              }), c.abrupt("return", r.validate(n, s, a.text, l, !0));
            case 2:
            case "end":
              return c.stop();
          }
        }, t);
      }));
      function e(t, n, a) {
        return i.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "validateWebsocket",
    value: function(e, t) {
      return e.websocket && !Zt.canSendMessage(e.websocket) ? (t.changeToDisabledIcon(), !1) : !0;
    }
    // prettier-ignore
  }, {
    key: "attach",
    value: function(e, t, n, a, s) {
      var o = e.validateInput || Ne.processValidateInput(e);
      e._validationHandler = /* @__PURE__ */ function() {
        var l = C(/* @__PURE__ */ m().mark(function u(c) {
          var d;
          return m().wrap(function(h) {
            for (; ; ) switch (h.prev = h.next) {
              case 0:
                if (!(s.status.loadingActive || s.status.requestInProgress || t.isSubmitProgrammaticallyDisabled === !0 || !r.validateWebsocket(t, s))) {
                  h.next = 2;
                  break;
                }
                return h.abrupt("return", !1);
              case 2:
                return d = o || t.canSendMessage, h.abrupt("return", d ? c ? r.useValidationFuncProgrammatic(d, c, s) : r.useValidationFunc(d, n, a, s) : null);
              case 4:
              case "end":
                return h.stop();
            }
          }, u);
        }));
        return function(u) {
          return l.apply(this, arguments);
        };
      }();
    }
  }]);
}(), es = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "getFileName",
    value: function(e, t) {
      var n = /* @__PURE__ */ new Date(), a = String(n.getHours()).padStart(2, "0"), s = String(n.getMinutes()).padStart(2, "0"), o = String(n.getSeconds()).padStart(2, "0");
      return "".concat(e, "-").concat(a, "-").concat(s, "-").concat(o, ".").concat(t);
    }
  }]);
}(), tc = /* @__PURE__ */ function(r) {
  function i(e, t) {
    var n;
    E(this, i);
    var a, s;
    return n = K(this, i, [t.button]), n._waitingForBrowserApproval = !1, n._audioType = e, n._extension = ((a = t.files) == null ? void 0 : a.format) || "mp3", n._maxDurationSeconds = (s = t.files) == null ? void 0 : s.maxDurationSeconds, n.elementRef.onclick = n.buttonClick.bind(Ot(n)), n;
  }
  return J(i, r), _(i, [{
    key: "buttonClick",
    value: function() {
      this._waitingForBrowserApproval || (this.isActive ? this.stop() : (this._waitingForBrowserApproval = !0, this.record()));
    }
  }, {
    key: "stop",
    value: function() {
      var t = this;
      return new Promise(function(n) {
        var a, s;
        t.changeToDefault(), (a = t._mediaRecorder) == null || a.stop(), (s = t._mediaStream) == null || s.getTracks().forEach(function(o) {
          return o.stop();
        }), setTimeout(function() {
          n();
        }, 10);
      });
    }
  }, {
    key: "record",
    value: function() {
      var t = this;
      navigator.mediaDevices.getUserMedia({
        audio: !0
      }).then(function(n) {
        t.changeToActive(), t._mediaRecorder = new MediaRecorder(n), t._audioType.addPlaceholderAttachment(t.stop.bind(t), t._maxDurationSeconds), t._mediaStream = n, t._mediaRecorder.addEventListener("dataavailable", function(a) {
          t.createFile(a);
        }), t._mediaRecorder.start();
      }).catch(function(n) {
        console.error(n), t.stop();
      }).finally(function() {
        t._waitingForBrowserApproval = !1;
      });
    }
  }, {
    key: "createFile",
    value: function(t) {
      var n = this, a = new Blob([t.data], {
        type: "audio/".concat(this._extension)
      }), s = es.getFileName(this._newFilePrefix || "audio", this._extension), o = new File([a], s, {
        type: a.type
      }), l = new FileReader();
      l.readAsDataURL(o), l.onload = function(u) {
        n._audioType.completePlaceholderAttachment(o, u.target.result);
      };
    }
  }]);
}(Gi), nc = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" stroke-width="1" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
  <line x1="22" y1="2" x2="11" y2="14"></line>
  <polygon points="22 2 15 22 11 14 2 10 22 2"></polygon>
</svg>
`, pt = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "setPropertyValueIfDoesNotExist",
    value: function(e, t, n) {
      var a, s, o = t[0];
      t.length === 1 ? (a = e[o]) !== null && a !== void 0 || (e[o] = n) : ((s = e[o]) !== null && s !== void 0 || (e[o] = {}), t.shift(), r.setPropertyValueIfDoesNotExist(e[o], t, n));
    }
  }, {
    key: "setPropertyValue",
    value: function(e, t, n) {
      var a, s = t[0];
      t.length === 1 ? e[s] = n : ((a = e[s]) !== null && a !== void 0 || (e[s] = {}), t.shift(), r.setPropertyValue(e[s], t, n));
    }
  }, {
    key: "getObjectValue",
    value: function(e, t) {
      var n = t[0], a = e[n];
      return a === void 0 || t.length === 1 ? a : r.getObjectValue(a, t.slice(1));
    }
  }, {
    key: "overwritePropertyObjectFromAnother",
    value: function(e, t, n) {
      var a = r.getObjectValue(t, n);
      if (a) {
        var s = ce(ce({}, a), r.getObjectValue(e, n) || {});
        r.setPropertyValue(e, n, s);
      }
    }
  }]);
}(), ni = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "resetSubmit",
    value: function(e, t) {
      t ? e.unsetCustomStateStyles(["loading", "submit"]) : e.unsetCustomStateStyles(["stop", "loading", "submit"]), e.reapplyStateStyle("submit");
    }
  }, {
    key: "overwriteDefaultStyleWithSubmit",
    value: function(e, t) {
      if (e.submit) {
        var n = JSON.parse(JSON.stringify(e[t] || {}));
        pt.overwritePropertyObjectFromAnother(n, e.submit, ["container", "default"]), pt.overwritePropertyObjectFromAnother(n, e.submit, ["text", "styles", "default"]), pt.overwritePropertyObjectFromAnother(n, e.submit, ["svg", "styles", "default"]), e[t] = n;
      }
    }
    // prettier-ignore
  }, {
    key: "setUpDisabledButton",
    value: function(e) {
      pt.setPropertyValueIfDoesNotExist(e, ["submit", "container", "default", "backgroundColor"], ""), pt.setPropertyValueIfDoesNotExist(e, ["disabled", "container", "default", "backgroundColor"], "unset"), pt.setPropertyValueIfDoesNotExist(e.submit, ["svg", "styles", "default", "filter"], ""), pt.setPropertyValueIfDoesNotExist(e.disabled, ["svg", "styles", "default", "filter"], "brightness(0) saturate(100%) invert(70%) sepia(0%) saturate(5564%) hue-rotate(207deg) brightness(100%) contrast(97%)"), r.overwriteDefaultStyleWithSubmit(e, "disabled");
    }
  }, {
    key: "process",
    value: function(e) {
      var t = JSON.parse(JSON.stringify(e || {}));
      return r.overwriteDefaultStyleWithSubmit(t, "loading"), r.overwriteDefaultStyleWithSubmit(t, "stop"), e != null && e.alwaysEnabled || r.setUpDisabledButton(t), t;
    }
  }]);
}(), Cn = /* @__PURE__ */ function(r) {
  function i(e, t, n, a, s, o) {
    var l;
    E(this, i);
    var u = ni.process(e.submitButtonStyles);
    return l = K(this, i, [i.createButtonContainerElement(), u == null ? void 0 : u.position, u]), l._isSVGLoadingIconOverriden = !1, l.status = {
      requestInProgress: !1,
      loadingActive: !1
    }, l._messages = n, l._textInput = t, l._fileAttachments = s, l._innerElements = l.createInnerElements(), l._abortStream = new AbortController(), l._stopClicked = {
      listener: function() {
      }
    }, l._serviceIO = a, l._alwaysEnabled = !!(u != null && u.alwaysEnabled), e.disableSubmitButton = l.disableSubmitButton.bind(Ot(l), a), l.attemptOverwriteLoadingStyle(e), o.microphone && l.setUpSpeechToText(o.microphone.button, e.speechToText), setTimeout(function() {
      var c;
      l._validationHandler = e._validationHandler, l.assignHandlers(l._validationHandler), (c = l._validationHandler) == null || c.call(Ot(l));
    }), l;
  }
  return J(i, r), _(i, [{
    key: "createInnerElements",
    value: function() {
      var t = this.createCustomElements(), n = t.submit, a = t.loading, s = t.stop, o = n || i.createSubmitIconElement();
      return {
        submit: o,
        loading: a || i.createLoadingIconElement(),
        stop: s || i.createStopIconElement(),
        disabled: this.createDisabledIconElement(o)
      };
    }
  }, {
    key: "createCustomElements",
    value: function() {
      var t = this, n = yt.createSpecificStateElement(this.elementRef, "submit", this._customStyles), a = {
        loading: void 0,
        stop: void 0
      };
      return Object.keys(a).forEach(function(s) {
        var o = s, l = yt.createCustomElement(o, t._customStyles);
        l && (a[o] = l);
      }), a.submit = n, a;
    }
  }, {
    key: "createDisabledIconElement",
    value: function(t) {
      return yt.createCustomElement("disabled", this._customStyles) || t.cloneNode(!0);
    }
    // prettier-ignore
  }, {
    key: "attemptOverwriteLoadingStyle",
    value: function(t) {
      var n, a, s, o, l, u, c, d, p;
      if (!((a = (n = this._customStyles) == null ? void 0 : n.submit) != null && a.svg || (l = (o = (s = this._customStyles) == null ? void 0 : s.loading) == null ? void 0 : o.svg) != null && l.content || (d = (c = (u = this._customStyles) == null ? void 0 : u.loading) == null ? void 0 : c.text) != null && d.content) && (t.displayLoadingBubble === void 0 || t.displayLoadingBubble === !0)) {
        var h = document.createElement("style");
        h.textContent = `
        .loading-button > * {
          filter: brightness(0) saturate(100%) invert(72%) sepia(0%) saturate(3044%) hue-rotate(322deg) brightness(100%)
            contrast(96%) !important;
        }`, (p = t.shadowRoot) == null || p.appendChild(h), this._isSVGLoadingIconOverriden = !0;
      }
    }
  }, {
    key: "assignHandlers",
    value: function(t) {
      this._serviceIO.completionsHandlers = {
        onFinish: this.resetSubmit.bind(this, t)
      }, this._serviceIO.streamHandlers = {
        onOpen: this.changeToStopIcon.bind(this),
        onClose: this.resetSubmit.bind(this, t),
        abortStream: this._abortStream,
        stopClicked: this._stopClicked
      };
      var n = this._serviceIO.stream;
      G(n) == "object" && typeof n.simulation == "number" && (this._serviceIO.streamHandlers.simulationInterim = n.simulation);
    }
  }, {
    key: "setUpSpeechToText",
    value: function(t, n) {
      this._microphoneButton = t, this._stopSTTAfterSubmit = G(n) == "object" ? n.stopAfterSubmit : !1;
    }
  }, {
    key: "resetSubmit",
    value: function(t) {
      this.status.requestInProgress = !1, this.status.loadingActive = !1, t();
    }
  }, {
    key: "submitFromInput",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n() {
        var a, s;
        return m().wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              return l.next = 2, this._fileAttachments.completePlaceholders();
            case 2:
              a = this._fileAttachments.getAllFileData(), this._textInput.isTextInputEmpty() ? this.attemptSubmit({
                text: "",
                files: a
              }) : (s = this._textInput.inputElementRef.innerText.trim(), this.attemptSubmit({
                text: s,
                files: a
              }));
            case 4:
            case "end":
              return l.stop();
          }
        }, n, this);
      }));
      function t() {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "programmaticSubmit",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s = this, o;
        return m().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              typeof a == "string" && (a = Ne.processSubmitUserMessage(a)), o = {
                text: a.text
              }, a.files && (o.files = Array.from(a.files).map(function(c) {
                return {
                  file: c,
                  type: Wr.getTypeFromBlob(c)
                };
              })), setTimeout(function() {
                return s.attemptSubmit(o, !0);
              });
            case 3:
            case "end":
              return u.stop();
          }
        }, n);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
    // TO-DO - should be disabled when loading history
  }, {
    key: "attemptSubmit",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s, o, l, u, c, d, p = arguments;
        return m().wrap(function(g) {
          for (; ; ) switch (g.prev = g.next) {
            case 0:
              return s = p.length > 1 && p[1] !== void 0 ? p[1] : !1, g.next = 3, (o = this._validationHandler) == null ? void 0 : o.call(this, s ? a : void 0);
            case 3:
              if (g.t0 = g.sent, g.t1 = !1, g.t0 !== g.t1) {
                g.next = 7;
                break;
              }
              return g.abrupt("return");
            case 7:
              return this.changeToLoadingIcon(), g.next = 10, this.addNewMessage(a);
            case 10:
              return this._serviceIO.isWebModel() || this._messages.addLoadingMessage(), this._textInput.clear(), c = (l = a.files) == null ? void 0 : l.map(function(k) {
                return k.file;
              }), d = {
                text: a.text === "" ? void 0 : a.text,
                files: c
              }, g.next = 15, this._serviceIO.callAPI(d, this._messages);
            case 15:
              (u = this._fileAttachments) == null || u.removeAllFiles();
            case 16:
            case "end":
              return g.stop();
          }
        }, n, this);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "addNewMessage",
    value: function() {
      var e = C(/* @__PURE__ */ m().mark(function n(a) {
        var s, o, l;
        return m().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              if (s = a.text, o = a.files, l = {
                role: W.USER_ROLE
              }, s && (l.text = s), c.t0 = o, !c.t0) {
                c.next = 8;
                break;
              }
              return c.next = 7, this._messages.addMultipleFiles(o);
            case 7:
              l.files = c.sent;
            case 8:
              this._serviceIO.sessionId && (l._sessionId = this._serviceIO.sessionId), Object.keys(l).length > 0 && this._messages.addNewMessage(l);
            case 10:
            case "end":
              return c.stop();
          }
        }, n, this);
      }));
      function t(n) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "stopStream",
    value: function() {
      var t;
      this._abortStream.abort(), (t = this._stopClicked) == null || t.listener(), this._validationHandler && this.resetSubmit(this._validationHandler);
    }
  }, {
    key: "changeToStopIcon",
    value: function() {
      this._serviceIO.websocket || (this.elementRef.classList.remove(i.LOADING_CLASS, i.DISABLED_CLASS, i.SUBMIT_CLASS), $e.removeAriaAttributes(this.elementRef), this.elementRef.replaceChildren(this._innerElements.stop), this.reapplyStateStyle("stop", ["loading", "submit"]), this.elementRef.onclick = this.stopStream.bind(this), this.status.loadingActive = !1);
    }
  }, {
    key: "changeToLoadingIcon",
    value: function() {
      this._serviceIO.websocket || (this._isSVGLoadingIconOverriden || this.elementRef.replaceChildren(this._innerElements.loading), this.elementRef.classList.remove(i.SUBMIT_CLASS, i.DISABLED_CLASS), $e.removeAriaDisabled(this.elementRef), this.elementRef.classList.add(i.LOADING_CLASS), $e.addAriaBusy(this.elementRef), this.reapplyStateStyle("loading", ["submit"]), this.elementRef.onclick = function() {
      }, this.status.requestInProgress = !0, this.status.loadingActive = !0);
    }
    // called every time when user triggers an input via ValidationHandler - hence use class to check if not already present
  }, {
    key: "changeToSubmitIcon",
    value: function() {
      var t = this;
      this.elementRef.classList.contains(i.SUBMIT_CLASS) || (this.elementRef.classList.remove(i.LOADING_CLASS, i.DISABLED_CLASS), $e.removeAriaAttributes(this.elementRef), this.elementRef.classList.add(i.SUBMIT_CLASS), this.elementRef.replaceChildren(this._innerElements.submit), ni.resetSubmit(this, this.status.loadingActive), this.elementRef.onclick = function() {
        var n;
        t.submitFromInput(), (n = t._microphoneButton) != null && n.isActive && Gr.toggleSpeechAfterSubmit(t._microphoneButton.elementRef, !!t._stopSTTAfterSubmit);
      });
    }
    // called every time when user triggers an input via ValidationHandler - hence use class to check if not already present
  }, {
    key: "changeToDisabledIcon",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      this._alwaysEnabled && !t ? this.changeToSubmitIcon() : this.elementRef.classList.contains(i.DISABLED_CLASS) || (this.elementRef.classList.remove(i.LOADING_CLASS, i.SUBMIT_CLASS), $e.removeAriaBusy(this.elementRef), this.elementRef.classList.add(i.DISABLED_CLASS), $e.addAriaDisabled(this.elementRef), this.elementRef.replaceChildren(this._innerElements.disabled), this.reapplyStateStyle("disabled", ["submit"]), this.elementRef.onclick = function() {
      });
    }
  }, {
    key: "disableSubmitButton",
    value: function(t, n) {
      var a;
      t.isSubmitProgrammaticallyDisabled = n !== !1, !(this.status.requestInProgress || this.status.loadingActive) && (n === !1 ? (a = this._validationHandler) == null || a.call(this) : this.changeToDisabledIcon(!0));
    }
  }], [{
    key: "createButtonContainerElement",
    value: function() {
      var t = document.createElement("div");
      return t.classList.add("input-button"), $e.addAttributes(t), t;
    }
  }, {
    key: "createSubmitIconElement",
    value: function() {
      var t = Be.createSVGElement(nc);
      return t.id = "submit-icon", t;
    }
  }, {
    key: "createLoadingIconElement",
    value: function() {
      var t = document.createElement("div");
      return t.classList.add("loading-submit-button"), t;
    }
  }, {
    key: "createStopIconElement",
    value: function() {
      var t = document.createElement("div");
      return t.id = "stop-icon", t;
    }
  }]);
}(en);
Cn.SUBMIT_CLASS = "submit-button", Cn.LOADING_CLASS = "loading-button", Cn.DISABLED_CLASS = "disabled-button";
var rc = Cn, ac = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path d="M27.1 14.313V5.396L24.158 8.34c-2.33-2.325-5.033-3.503-8.11-3.503C9.902 4.837 4.901 9.847 4.899 16c.001 6.152 5.003 11.158 11.15 11.16 4.276 0 9.369-2.227 10.836-8.478l.028-.122h-3.23l-.022.068c-1.078 3.242-4.138 5.421-7.613 5.421a8 8 0 0 1-5.691-2.359A7.993 7.993 0 0 1 8 16.001c0-4.438 3.611-8.049 8.05-8.049 2.069 0 3.638.58 5.924 2.573l-3.792 3.789H27.1z"/>
</svg>
`, ic = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <title>capture</title>
  <path d="M0 16q0 3.264 1.28 6.208t3.392 5.12 5.12 3.424 6.208 1.248 6.208-1.248 5.12-3.424 3.392-5.12 1.28-6.208-1.28-6.208-3.392-5.12-5.088-3.392-6.24-1.28q-3.264 0-6.208 1.28t-5.12 3.392-3.392 5.12-1.28 6.208zM4 16q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016-1.6 6.048-4.384 4.352-6.016 1.6-6.016-1.6-4.384-4.352-1.6-6.048z"></path>
</svg>
`, sc = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
  <path d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/>
</svg>`, oc = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.89163 13.2687L9.16582 17.5427L18.7085 8" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`, lc = /* @__PURE__ */ function(r) {
  function i(e, t, n, a) {
    var s;
    E(this, i), s = K(this, i, [e, ["modal-content", "modal-camera-content"], n]), s._stopped = !1, s._format = "image/png", s._canvas = document.createElement("canvas"), s._canvas.classList.add("camera-modal-canvas");
    var o = s.addButtonsAndTheirEvents(t), l = o.captureButton, u = o.submitButton;
    return s._captureButton = l, s._submitButton = u, s._captureIcon = s._captureButton.children[0], s._refreshIcon = Be.createSVGElement(ac), s._refreshIcon.classList.add("modal-svg-button-icon", "modal-svg-refresh-icon"), (a == null ? void 0 : a.format) === "jpeg" && (s._format = "image/jpeg"), a != null && a.dimensions && (s._dimensions = a.dimensions), s._contentRef.appendChild(s._canvas), s.extensionCloseCallback = s.stop, s;
  }
  return J(i, r), _(i, [{
    key: "addButtonsAndTheirEvents",
    value: function(t) {
      var n = Gt.createSVGButton(ic);
      n.classList.add("modal-svg-camera-button"), n.children[0].classList.add("modal-svg-camera-icon");
      var a = this.addCloseButton(sc, !0);
      a.classList.add("modal-svg-close-button"), a.children[0].classList.add("modal-svg-close-icon");
      var s = Gt.createSVGButton(oc);
      return s.classList.add("modal-svg-submit-button"), this.addButtons(n, s), this.addButtonEvents(n, a, s, t), {
        captureButton: n,
        submitButton: s
      };
    }
    // prettier-ignore
  }, {
    key: "addButtonEvents",
    value: function(t, n, a, s) {
      var o = this;
      t.onclick = function() {
        o.capture();
      }, n.addEventListener("click", this.stop.bind(this)), a.onclick = function() {
        var l = o.getFile();
        l && Kr.addFilesToType([l], [s]), o.stop(), o.close();
      };
    }
  }, {
    key: "stop",
    value: function() {
      var t = this;
      this._mediaStream && this._mediaStream.getTracks().forEach(function(n) {
        return n.stop();
      }), this._stopped = !0, setTimeout(function() {
        t._captureButton.replaceChildren(t._captureIcon), t._captureButton.classList.replace("modal-svg-refresh-button", "modal-svg-camera-button");
        var n = t._canvas.getContext("2d");
        n == null || n.clearRect(0, 0, t._canvas.width, t._canvas.height);
      }, Gt.MODAL_CLOSE_TIMEOUT_MS);
    }
  }, {
    key: "start",
    value: function() {
      var t = this;
      this._dataURL = void 0, this._submitButton.classList.add("modal-svg-submit-disabled"), this._stopped = !1, navigator.mediaDevices.getUserMedia({
        video: this._dimensions || !0
      }).then(function(n) {
        if (t._mediaStream = n, !t.isOpen()) return t.stop();
        var a = document.createElement("video");
        a.srcObject = n, a.play(), requestAnimationFrame(t.updateCanvas.bind(t, a, t._canvas));
      }).catch(function(n) {
        console.error(n), t.stop(), t.close();
      });
    }
  }, {
    key: "capture",
    value: function() {
      this._dataURL ? (this._captureButton.replaceChildren(this._captureIcon), this._captureButton.classList.replace("modal-svg-refresh-button", "modal-svg-camera-button"), this._submitButton.classList.add("modal-svg-submit-disabled"), this._dataURL = void 0) : (this._captureButton.replaceChildren(this._refreshIcon), this._captureButton.classList.replace("modal-svg-camera-button", "modal-svg-refresh-button"), this._submitButton.classList.remove("modal-svg-submit-disabled"), this._dataURL = this._canvas.toDataURL());
    }
  }, {
    key: "getFile",
    value: function() {
      if (this._dataURL) {
        for (var t = atob(this._dataURL.split(",")[1]), n = new Array(t.length), a = 0; a < t.length; a++) n[a] = t.charCodeAt(a);
        var s = new Uint8Array(n), o = new Blob([s], {
          type: this._format
        }), l = this._format === "image/jpeg" ? "jpeg" : "png", u = es.getFileName(this._newFilePrefix || "photo", l);
        return new File([o], u, {
          type: o.type
        });
      }
    }
  }, {
    key: "updateCanvas",
    value: function(t, n) {
      if (!this._stopped) {
        if (!this._dataURL) {
          n.width = t.videoWidth, n.height = t.videoHeight;
          var a = n.getContext("2d");
          a == null || a.drawImage(t, 0, 0, n.width, n.height);
        }
        requestAnimationFrame(this.updateCanvas.bind(this, t, n));
      }
    }
  }, {
    key: "openCameraModal",
    value: function(t) {
      this.displayModalElements(), t.start();
    }
    // prettier-ignore
  }], [{
    key: "createCameraModalFunc",
    value: function(t, n, a, s) {
      var o = new i(t, n, a, s);
      return o.openCameraModal.bind(o, o);
    }
  }]);
}(Gt), uc = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="M29 7h-4.599l-2.401-4h-12l-2.4 4h-4.6c-1 0-3 1-3 2.969v16.031c0 1.657 1.5 3 2.792 3h26.271c1.313 0 2.938-1.406 2.938-2.968v-16.032c0-1-1-3-3-3zM30 26.032c0 0.395-0.639 0.947-0.937 0.969h-26.265c-0.232-0.019-0.797-0.47-0.797-1v-16.031c0-0.634 0.851-0.953 1-0.969h5.732l2.4-4h9.802l1.785 3.030 0.55 0.97h5.731c0.705 0 0.99 0.921 1 1v16.032zM16 10c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zM16 22c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
</svg>`, cc = /* @__PURE__ */ function(r) {
  function i(e, t, n) {
    var a;
    E(this, i);
    var s, o, l, u, c = (s = n == null ? void 0 : n.button) == null ? void 0 : s.position, d = ((u = (l = (o = n == null ? void 0 : n.button) == null ? void 0 : o.styles) == null ? void 0 : l.text) == null ? void 0 : u.content) || "Photo";
    a = K(this, i, [i.createButtonElement(), c, (n == null ? void 0 : n.button) || {}, d]);
    var p = a.createInnerElements(a._customStyles, c === "dropup-menu");
    return n && a.addClickEvent(e, t, n.modalContainerStyle, n.files), a.elementRef.classList.add("upload-file-button"), a.elementRef.appendChild(p.styles), a.reapplyStateStyle("styles"), a;
  }
  return J(i, r), _(i, [{
    key: "createInnerElements",
    value: function(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return {
        styles: yt.createInnerElement(this.elementRef, i.createSVGIconElement(), "styles", t, n)
      };
    }
  }, {
    key: "addClickEvent",
    value: (
      // prettier-ignore
      function(t, n, a, s) {
        var o = lc.createCameraModalFunc(t, n, a, s);
        this.elementRef.onclick = o;
      }
    )
  }], [{
    key: "createButtonElement",
    value: function() {
      var t = document.createElement("div");
      return t.classList.add("input-button"), $e.addAttributes(t), t;
    }
  }, {
    key: "createSVGIconElement",
    value: function() {
      var t = Be.createSVGElement(uc);
      return t.id = "camera-icon", t;
    }
  }]);
}(en), dc = /* @__PURE__ */ function() {
  function r(i, e, t, n) {
    E(this, r), this.elementRef = r.createPanelElement(i.inputAreaStyle);
    var a = {}, s = this.createFileUploadComponents(i, t, n, a), o = new fi(i, t, s);
    i.speechToText && !a.microphone && (a.microphone = {
      button: new Gr(i, o, e.addNewErrorMessage.bind(e))
    });
    var l = new rc(i, o, e, t, s, a);
    o.submit = l.submitFromInput.bind(l), ec.attach(i, t, o, s, l), i.submitUserMessage = l.programmaticSubmit.bind(l), a.submit = {
      button: l
    }, r.addElements(this.elementRef, o, a, n, s, i.dropupStyles);
  }
  return _(r, [{
    key: "createFileUploadComponents",
    value: (
      // prettier-ignore
      function(e, t, n, a) {
        var s, o, l, u, c = new Kr(this.elementRef, e.attachmentContainerStyle, t.demo);
        if (r.createUploadButtons(e, t.fileTypes || {}, c, n, a), (s = t.camera) != null && s.files) {
          var d = ((o = a.images) == null ? void 0 : o.fileType) || c.addType(e, t.camera.files, "images");
          a.camera = {
            button: new cc(n, d, t.camera)
          };
        }
        if ((l = t.recordAudio) != null && l.files) {
          var p = ((u = a.audio) == null ? void 0 : u.fileType) || c.addType(e, t.recordAudio.files, "audio");
          a.microphone = {
            button: new tc(p, t.recordAudio)
          };
        }
        return ti.isEnabled(c, e.dragAndDrop) && ti.create(n, c, e.dragAndDrop), c;
      }
    )
    // prettier-ignore
  }], [{
    key: "createPanelElement",
    value: function(e) {
      var t = document.createElement("div");
      return t.id = "input", Object.assign(t.style, e), t;
    }
  }, {
    key: "createUploadButtons",
    value: function(e, t, n, a, s) {
      Object.keys(t).forEach(function(o) {
        var l = o, u = t[l];
        if (u.files) {
          var c = n.addType(e, u.files, l), d = Eu[l], p = d.id, h = d.svgString, g = d.dropupText, k = new Qu(a, c, u, p, h, g);
          s[l] = {
            button: k,
            fileType: c
          };
        }
      });
    }
    // prettier-ignore
  }, {
    key: "addElements",
    value: function(e, t, n, a, s, o) {
      Ue.addElements(e, t.elementRef);
      var l = Mn.create(), u = vu.addButtons(l, n, a, o);
      fu.set(t.inputElementRef, l, s.elementRef, u), Mn.add(e, l);
    }
  }]);
}(), fc = /* @__PURE__ */ function() {
  function r() {
    E(this, r);
  }
  return _(r, null, [{
    key: "createElements",
    value: function(e, t, n) {
      var a = document.createElement("div");
      a.id = "chat-view";
      var s = new Rr(e, t, n);
      t.websocket && Zt.createConnection(t, s);
      var o = new dc(e, s, t, a);
      return Ue.addElements(a, s.elementRef, o.elementRef), a;
    }
  }, {
    key: "render",
    value: function(e, t, n, a) {
      var s = r.createElements(e, n, a);
      t.replaceChildren(s);
    }
  }]);
}(), pc = `#validate-property-key-view{height:100%;position:relative;display:flex;justify-content:center;align-items:center;padding:8px}#loading-validate-key-property{display:inline-block;width:50px;height:50px}#loading-validate-key-property:after{content:" ";display:block;width:38px;height:38px;margin:1px;border-radius:50%;border:5px solid #5fb2ff;border-color:#5fb2ff transparent #5fb2ff transparent;animation:loading-spinner 1.4s linear infinite}#insert-key-view{height:100%;position:relative}#insert-key-contents{text-align:center;position:absolute;top:44%;left:50%;transform:translate(-50%,-50%);width:82%;display:flex;max-width:700px}#insert-key-title{margin-bottom:15px}#insert-key-input-container{margin-right:2.7em;width:calc(100% - 80px)}#insert-key-input{padding:.3em 1.7em .3em .3em;border-width:1px;border-style:solid;border-radius:3px;width:100%;font-size:inherit}.insert-key-input-valid{border-color:gray}.insert-key-input-invalid{border-color:red}#visibility-icon-container{position:relative;float:right;cursor:pointer;-webkit-user-select:none;user-select:none}.visibility-icon{filter:brightness(0) saturate(100%) invert(63%) sepia(1%) saturate(9%) hue-rotate(43deg) brightness(98%) contrast(92%);position:absolute;right:-1.7em;top:-1.43em}#visible-icon{top:-1.4em}.visibility-icon:hover{filter:unset}.visibility-icon>*{pointer-events:none}#start-button{border:1px solid grey;color:#454545;border-radius:4px;width:3em;display:flex;justify-content:center;align-items:center;cursor:pointer;padding:.28em .3em;-webkit-user-select:none;user-select:none;background-color:#fff}#start-button:hover{background-color:#f2f2f2}#start-button:active{background-color:#d2d2d2}#insert-key-help-text-container{width:100%;position:absolute;margin-top:32px;margin-bottom:20px}#insert-key-help-text-contents{width:100%;position:absolute}#insert-key-input-invalid-text{display:block;margin-top:1em;margin-bottom:.5em;color:red}.insert-key-input-help-text{display:block;margin-top:16px}#loading-key{display:inline-block;width:16px;height:16px}#loading-key:after{content:" ";display:block;width:11px;height:11px;margin:1px;border-radius:50%;border:2px solid #0084ff;border-color:#0084ff transparent #0084ff transparent;animation:loading-spinner 1.2s linear infinite}#error-view{color:red;font-size:1.2em;line-height:1.3em;margin-top:-5px;text-align:center;height:100%;display:flex;justify-content:center;align-items:center;padding-left:8px;padding-right:8px}@keyframes loading-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.intro-panel{position:absolute;display:flex;justify-content:center;right:0;bottom:0;left:0;margin:auto;height:fit-content;top:-2.5em}#internal-intro-panel{width:250px;height:min-content;display:block;border-radius:5px;overflow:auto;border:1px solid rgb(203,203,203);padding:10px;max-height:calc(100% - 6.8em)}#internal-intro-panel>p{margin-block-start:.8em;margin-block-end:.8em}pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: a11y-dark
  Author: @ericwbailey
  Maintainer: @ericwbailey

  Based on the Tomorrow Night Eighties theme: https://github.com/isagalaev/highlight.js/blob/master/src/styles/tomorrow-night-eighties.css
*/.hljs{background:#2b2b2b;color:#f8f8f2}.hljs-comment,.hljs-quote{color:#d4d0ab}.hljs-deletion,.hljs-name,.hljs-regexp,.hljs-selector-class,.hljs-selector-id,.hljs-tag,.hljs-template-variable,.hljs-variable{color:#ffa07a}.hljs-built_in,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-type{color:#f5ab35}.hljs-attribute{color:gold}.hljs-addition,.hljs-bullet,.hljs-string,.hljs-symbol{color:#abe338}.hljs-section,.hljs-title{color:#00e0e0}.hljs-keyword,.hljs-selector-tag{color:#dcc6e0}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}@media screen and (-ms-high-contrast: active){.hljs-addition,.hljs-attribute,.hljs-built_in,.hljs-bullet,.hljs-comment,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-quote,.hljs-string,.hljs-symbol,.hljs-type{color:highlight}.hljs-keyword,.hljs-selector-tag{font-weight:700}}#messages{overflow:auto}.outer-message-container:last-child{margin-bottom:5px}.inner-message-container{display:flex;margin-left:auto;margin-right:auto;width:calc(97.5% - 24px);max-width:100%}.message-bubble{margin-top:10px;word-wrap:break-word;width:fit-content;max-width:60%;border-radius:10px;padding:.42em .55em;height:fit-content;line-height:1.26em}.user-message-text{color:#fff;background-color:#0084ff;margin-right:0;margin-left:auto}.ai-message-text{color:#000;background-color:#e4e6eb;margin-left:0;margin-right:auto}.loading-history-message-full-view{position:absolute;height:70%;width:100%;display:flex;align-items:center}.loading-history-message-small{height:20px;margin-bottom:30px}.loading-history-message-small>div>div{scale:.6}.loading-history-message{margin-top:0;width:100%;max-width:100%;display:flex;justify-content:center;background-color:unset}.loading-history{width:70px}.loading-history div{position:absolute;width:var(--loading-history-width);height:var(--loading-history-height);margin:var(--loading-history-margin);border:var(--loading-history-border);border-radius:50%;animation:loading-spinner 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:var(--loading-history-color) transparent transparent transparent}.loading-history div:nth-child(1){animation-delay:-.45s}.loading-history div:nth-child(2){animation-delay:-.3s}.loading-history div:nth-child(3){animation-delay:-.15s}.html-message{max-width:unset}.error-message-text{margin:14px auto 10px;background-color:#f4c0c0;color:#474747;text-align:center;max-width:95%}.deep-chat-loading-message-dots-container{width:1em;padding:.6em .75em .6em 1.3em}.loading-message-dots{position:relative;width:.45em;height:.45em;border-radius:5px;background-color:var(--loading-message-color);color:var(--loading-message-color);animation:loading-message-dots 1s infinite linear alternate;animation-delay:.5s}.loading-message-dots:before,.loading-message-dots:after{content:"";display:inline-block;position:absolute;top:0}.loading-message-dots:before{left:-.7em;width:.45em;height:.45em;border-radius:5px;background-color:var(--loading-message-color);color:var(--loading-message-color);animation:loading-message-dots 1s infinite alternate;animation-delay:0s}.loading-message-dots:after{left:.7em;width:.45em;height:.45em;border-radius:5px;background-color:var(--loading-message-color);color:var(--loading-message-color);animation:loading-message-dots 1s infinite alternate;animation-delay:1s}@keyframes loading-message-dots{0%{background-color:var(--loading-message-color)}50%,to{background-color:var(--loading-message-color-fade)}}.message-bubble>p:first-child{margin-top:0}.message-bubble>p:last-child{margin-bottom:0}pre{overflow:auto;display:block;word-break:break-all;word-wrap:break-word;border-radius:7px;background:#2b2b2b;color:#f8f8f2;margin-top:.8em;margin-bottom:.8em;padding:.6em;font-size:.9em;line-height:1.5em}.image-message{padding:0;display:flex;background-color:#ddd}.image-message>*,.image-message>*>*{width:100%;border-radius:8px;display:flex}.audio-message{width:60%;max-width:300px;height:2.2em;max-height:54px;padding:0;background-color:unset}.audio-player{width:100%;height:100%}.audio-player-safari{height:fit-content;width:40px}.audio-player-safari-left{float:left}.audio-player-safari-right{float:right}.any-file-message{padding:1px}.any-file-message-contents{display:flex}.any-file-message-icon-container{width:1.3em;min-width:1.3em;position:relative;border-radius:4px;margin-left:6px;margin-right:2px}.any-file-message-icon{background-color:#fff;border-radius:4px;position:absolute;width:1em;height:1.25em;padding:1px;margin-top:auto;margin-bottom:auto;top:0;bottom:0}.any-file-message-text{padding-top:5px;overflow-wrap:anywhere;padding-bottom:5px;padding-right:7px}.message-bubble>a{color:inherit}.left-item-position{margin-right:10px}.right-item-position{margin-left:10px}.avatar{padding-top:5px;width:1.5em;height:1.5em;border-radius:1px}.avatar-container{margin-top:9px}.name{margin-top:16px;font-size:15px}#drag-and-drop{position:absolute;display:none;z-index:10;height:calc(100% - 10px);width:calc(100% - 10px);background-color:#70c6ff4d;border:5px dashed #6dafff}#file-attachment-container{position:absolute;height:3.6em;width:calc(80% - 4px);top:-2.5em;border-radius:5px;overflow:auto;text-align:left;background-color:#d7d7d73b;padding-left:4px}.file-attachment{width:2.85em;height:2.85em;display:inline-flex;margin-right:.6em;margin-bottom:.44em;margin-top:4px;position:relative;background-color:#fff;border-radius:5px}.image-attachment{width:100%;height:100%;object-fit:cover;border-radius:5px}.border-bound-attachment{width:calc(100% - 2px);height:calc(100% - 2px);border:1px solid #c3c3c3;border-radius:5px;overflow:hidden}.border-bound-attachment-safari{width:calc(100% - 1px);height:calc(100% - 1px)}.audio-attachment-icon-container{cursor:pointer}.audio-attachment-icon-container:hover{background-color:#f8f8f8}.attachment-icon{left:0;right:0;bottom:0;top:2px;margin:auto;position:absolute;width:25px;-webkit-user-select:none;user-select:none}.not-removable-attachment-icon{top:0;right:0;bottom:0;left:0}.play-icon{filter:brightness(0) saturate(100%) invert(17%) sepia(0%) saturate(1392%) hue-rotate(67deg) brightness(98%) contrast(97%)}.stop-icon{filter:brightness(0) saturate(100%) invert(29%) sepia(90%) saturate(1228%) hue-rotate(198deg) brightness(93%) contrast(98%)}.audio-placeholder-text-3-digits{padding-left:.26rem}.audio-placeholder-text-4-digits{padding-left:.1rem}.any-file-attachment{padding:2px 0}.file-attachment-text-container{position:absolute;width:inherit;display:flex;align-items:center;height:100%;top:-1px}.audio-placeholder-text-3-digits-container{padding-top:1px;cursor:default}.any-file-attachment-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;padding-left:.13em;margin-left:auto;margin-right:auto}.remove-file-attachment-button{height:1.25em;width:1.25em;border:1px solid #cfcfcf;border-radius:25px;background-color:#fff;top:-4px;right:-5px;position:absolute;display:flex;justify-content:center;cursor:pointer;-webkit-user-select:none;user-select:none}.remove-file-attachment-button:hover{background-color:#e4e4e4}.remove-file-attachment-button:active{background-color:#d7d7d7}.x-icon{color:#4e4e4e;top:-.075em;position:relative;font-size:1.05em}.modal{display:none;flex-direction:column;align-items:center;justify-content:center;position:absolute;width:80%;max-width:420px;max-height:80%;margin:auto;top:0;right:0;bottom:0;left:0;z-index:2}.modal-content{border-top:1px solid rgb(217,217,217);border-left:1px solid rgb(217,217,217);border-right:1px solid rgb(217,217,217);border-top-left-radius:inherit;border-top-right-radius:inherit;background-color:#fff;overflow-y:auto;height:fit-content;max-height:calc(100% - 3.3em);width:100%}.modal-content>p{margin-left:1em;margin-right:1em}.modal-content>ul{margin-right:1em}.modal-button-panel{height:3.3em;border:1px solid;border-color:rgb(223,223,223) rgb(217,217,217) rgb(217,217,217);border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;background-color:#fff;text-align:center;justify-content:center;display:flex;width:100%}.modal-button{min-width:2.5em;text-align:center;color:#fff;border-radius:5px;padding:.4em .4em .3em;height:1.25em;background-color:#3279b2;top:0;bottom:0;cursor:pointer;-webkit-user-select:none;user-select:none;margin:auto .31em}.modal-button:hover{background-color:#276da7}.modal-button:active{background-color:#1b5687}.modal-svg-button{padding:0 0 2px;width:2em;height:1.8em}.modal-svg-button-icon{width:100%;height:100%;filter:brightness(0) saturate(100%) invert(100%) sepia(15%) saturate(4%) hue-rotate(346deg) brightness(101%) contrast(102%)}#modal-background-panel{position:absolute;width:100%;height:100%;background-color:#00000042;z-index:1;display:none}.show-modal-background{animation:fadeInBackground .3s ease-in-out}@keyframes fadeInBackground{0%{opacity:0}to{opacity:1}}.show-modal{animation:fadeInModal .3s ease-in-out}@keyframes fadeInModal{0%{opacity:0;scale:.95}to{opacity:1;scale:1}}.hide-modal-background{animation:fadeOutBackground .2s ease-in-out}@keyframes fadeOutBackground{0%{opacity:1}to{opacity:0}}.hide-modal{animation:fadeOutModal .2s ease-in-out}@keyframes fadeOutModal{0%{opacity:1;scale:1}to{opacity:0;scale:.95}}.modal-camera-content{overflow:hidden;text-align:center;border:unset;height:100%;background-color:#2a2a2a;display:flex;justify-content:center}.camera-modal-canvas{max-width:100%;max-height:100%;margin-top:auto;margin-bottom:auto}.modal-svg-submit-button{background-color:green}.modal-svg-submit-button:hover{background-color:#007500}.modal-svg-submit-button:active{background-color:#006500}.modal-svg-submit-disabled{pointer-events:none;background-color:#747474}.modal-svg-close-button{height:1.56em;padding-top:.37em;padding-bottom:0;background-color:#c13e3e}.modal-svg-close-button:hover{background-color:#b43434}.modal-svg-close-button:active{background-color:#972929}.modal-svg-close-icon{width:80%;height:80%}.modal-svg-camera-button{height:1.6em;padding-top:.38em;padding-bottom:0}.modal-svg-camera-icon{height:76%}.modal-svg-refresh-icon{height:105%}.modal-svg-refresh-button{height:1.66em;padding-top:.11em;padding-bottom:.21em}.input-button-container{position:relative;z-index:1}.inside-right{position:absolute;right:calc(10% + .35em);bottom:.85em}.inside-left{position:absolute;left:calc(10% + .35em);bottom:.85em}.outside-left{position:absolute;right:calc(11px - .55em);bottom:.88em}.outside-right{position:absolute;left:calc(11px - .55em);bottom:.88em}#upload-images-icon{position:absolute;pointer-events:none;width:1.45em;height:1.45em;left:.11em;bottom:.08em;filter:brightness(0) saturate(100%) invert(43%) sepia(0%) saturate(740%) hue-rotate(77deg) brightness(99%) contrast(92%)}#upload-gifs-icon{position:absolute;pointer-events:none;width:1.5em;height:1.48em;left:.07em;bottom:.08em;filter:brightness(0) saturate(100%) invert(49%) sepia(0%) saturate(2586%) hue-rotate(12deg) brightness(93%) contrast(90%)}#upload-audio-icon{position:absolute;pointer-events:none;width:1.21em;height:1.21em;left:.17em;bottom:.2em;filter:brightness(0) saturate(100%) invert(15%) sepia(0%) saturate(337%) hue-rotate(125deg) brightness(91%) contrast(94%);transform:scaleX(.95)}#camera-icon{position:absolute;pointer-events:none;width:1.21em;height:1.21em;left:.23em;bottom:.2em;filter:brightness(0) saturate(100%) invert(52%) sepia(0%) saturate(161%) hue-rotate(164deg) brightness(91%) contrast(92%);transform:scaleX(.95)}#upload-mixed-files-icon{position:absolute;pointer-events:none;width:1.21em;height:1.21em;left:.25em;bottom:.2em;filter:brightness(0) saturate(100%) invert(53%) sepia(0%) saturate(36%) hue-rotate(74deg) brightness(98%) contrast(93%);transform:scaleX(.95)}#interim-text{color:gray}#microphone-button{padding-top:.5px}.outer-button-container>#microphone-button{padding-bottom:1px}#microphone-icon{position:absolute;pointer-events:none;width:1.21em;height:1.21em;left:.25em;bottom:.25em}.default-microphone-icon{filter:brightness(0) saturate(100%) invert(32%) sepia(0%) saturate(924%) hue-rotate(46deg) brightness(95%) contrast(99%)}.active-microphone-icon{filter:brightness(0) saturate(100%) invert(10%) sepia(97%) saturate(7495%) hue-rotate(0deg) brightness(101%) contrast(107%);border-radius:10px}.command-microphone-icon{filter:brightness(0) saturate(100%) invert(42%) sepia(96%) saturate(1067%) hue-rotate(77deg) brightness(99%) contrast(102%)}.unsupported-microphone{display:none}#submit-icon{height:100%;filter:brightness(0) saturate(100%) invert(32%) sepia(0%) saturate(924%) hue-rotate(46deg) brightness(95%) contrast(99%);width:1.21em}#stop-icon{background-color:#acacac;position:absolute;width:.95em;height:.95em;left:.35em;bottom:.35em;border-radius:2px}.submit-button-enlarged{scale:1.1;margin-right:.3em;margin-left:.3em}.loading-submit-button{position:relative;left:calc(-9990px + .275em);width:.22em;height:.22em;border-radius:5px;background-color:#848484;color:#848484;box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484;animation:loading-submit-button 1.5s infinite linear;bottom:-.75em}@keyframes loading-submit-button{0%{box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}16.667%{box-shadow:9990px -6px #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}33.333%{box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}50%{box-shadow:9990px 0 #848484,calc(9990px + .44em) -6px 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}66.667%{box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}83.333%{box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) -6px 0 0 #848484}to{box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}}.input-button{border-radius:4px;cursor:pointer;margin-bottom:.2em;-webkit-user-select:none;user-select:none}.input-button-svg{width:1.65em;height:1.65em}.input-button:hover,.input-button:focus-visible{background-color:#9c9c9c2e}.input-button:active{background-color:#9c9c9c5e}.loading-button{cursor:auto}.loading-button:hover{background-color:unset}.text-button{filter:unset!important;display:flex;justify-content:center;align-items:center;margin-left:4px;margin-right:4px;height:1.6em}#text-input-container{background-color:#fff;width:80%;display:flex;border:1px solid #0000001a;border-radius:5px;margin-top:.8em;margin-bottom:.8em;box-shadow:#959da533 0 1px 12px;overflow-y:auto;max-height:200px;position:relative}.text-input-container-left-adjustment{margin-left:1.5em}.text-input-container-right-adjustment{margin-right:1.5em}.text-input-container-left-small-adjustment{margin-left:1.1em}.text-input-container-left-small-adjustment>.outside-left{right:calc(14px - .55em)}.text-input-container-right-small-adjustment{margin-right:1.1em}.text-input-container-right-small-adjustment>.outside-right{left:calc(14px - .55em)}#text-input{text-align:left;outline:none;word-wrap:break-word;line-break:auto}.text-input-styling{padding:.4em .5em;overflow:overlay;width:100%}.text-input-inner-left-adjustment{padding-left:2.2em}.text-input-inner-right-adjustment{padding-right:2em}.text-input-disabled{pointer-events:none;-webkit-user-select:none;user-select:none}[contenteditable]:empty:before{content:attr(deep-chat-placeholder-text);pointer-events:none}[contenteditable][textcolor]:empty:before{color:gray}.outside-right>#dropup-menu,.inside-right>#dropup-menu{right:0}#dropup-icon{position:absolute;pointer-events:none;width:1.16em;height:1.2em;left:.265em;bottom:.43em;filter:brightness(0) saturate(100%) invert(54%) sepia(0%) saturate(724%) hue-rotate(6deg) brightness(92%) contrast(90%)}#dropup-menu{background-color:#fff;position:absolute;transform:translateY(-100%);border-radius:5px;z-index:1;top:-.49em;box-shadow:#0003 -1px 2px 10px,#0000001a 0 2px 4px;cursor:pointer;-webkit-user-select:none;user-select:none}.dropup-menu-item{height:1.4em;padding:.28em .84em .28em .35em;display:flex;position:relative}.dropup-menu-item:first-child{padding-top:.49em;border-top-left-radius:inherit;border-top-right-radius:inherit}.dropup-menu-item:last-child{padding-bottom:.45em;border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.dropup-menu-item-icon{width:1.39em;position:relative;margin-right:.56em}.dropup-menu-item-icon>svg{bottom:0!important;top:0!important;margin-bottom:auto;margin-top:auto}.dropup-menu-item-text{margin-top:.08em;width:max-content}#input{width:100%;display:inline-flex;text-align:center;margin-left:auto;margin-right:auto;margin-top:auto;position:relative;justify-content:center}#chat-view{height:100%;display:grid;grid-template-columns:100%}::-webkit-scrollbar{width:9px;height:9px}::-webkit-scrollbar-thumb{background-color:#d0d0d0;border-radius:5px}::-webkit-scrollbar-track{background-color:#f2f2f2}.deep-chat-web-model-button{margin-top:10px;margin-bottom:5px;margin-left:1px}:host{all:initial;display:table-cell}#container{height:inherit;width:inherit;overflow:hidden}`, hc = Object.defineProperty, oe = function(i, e, t, n) {
  for (var a = void 0, s = i.length - 1, o; s >= 0; s--) (o = i[s]) && (a = o(e, t, a) || a);
  return a && hc(e, t, a), a;
}, re = /* @__PURE__ */ function(r) {
  function i() {
    var e;
    return E(this, i), e = K(this, i), e.getMessages = function() {
      return [];
    }, e.submitUserMessage = function() {
      return console.warn("submitUserMessage failed - please wait for chat view to render before calling this property.");
    }, e.addMessage = function() {
      return console.warn("addMessage failed - please wait for chat view to render before calling this property.");
    }, e.updateMessage = function() {
    }, e.clearMessages = function() {
    }, e.focusInput = function() {
      return Nr.focusFromParentElement(e._elementRef);
    }, e.refreshMessages = function() {
    }, e.scrollToBottom = function() {
    }, e.disableSubmitButton = function() {
    }, e.setPlaceholderText = function() {
    }, e._hasBeenRendered = !1, e._auxiliaryStyleApplied = !1, e._elementRef = document.createElement("div"), e._elementRef.id = "container", e.attachShadow({
      mode: "open"
    }).appendChild(e._elementRef), Qn.apply(pc, e.shadowRoot), setTimeout(function() {
      e._hasBeenRendered || e.onRender();
    }, 20), e;
  }
  return J(i, r), _(i, [{
    key: "changeToChatView",
    value: function() {
      this._activeService && (this._activeService.validateKeyProperty = !1), this.onRender();
    }
    // prettier-ignore
  }, {
    key: "onRender",
    value: function() {
      var t;
      li.attemptAppendStyleSheetToHead(this.style), Ne.processConnect(this), (!this._activeService || this._activeService.demo) && (this._activeService = su.create(this)), this.auxiliaryStyle && !this._auxiliaryStyleApplied && (Qn.apply(this.auxiliaryStyle, this.shadowRoot), this._auxiliaryStyleApplied = !0), Qn.applyDefaultStyleToComponent(this.style, this.chatStyle), Ne.checkForContainerStyles(this, this._elementRef), this._activeService.key && this._activeService.validateKeyProperty ? Ss.render(this._elementRef, this.changeToChatView.bind(this), this._activeService) : !(this._activeService instanceof Ie) || this._activeService.key ? ((t = this._childElement) !== null && t !== void 0 || (this._childElement = this.children[0]), fc.render(this, this._elementRef, this._activeService, this._childElement)) : this._activeService instanceof Ie && Rl.render(this._elementRef, this.changeToChatView.bind(this), this._activeService), this._hasBeenRendered = !0, An.onRender(this);
    }
  }, {
    key: "disconnectedCallback",
    value: function() {
      zr.chat = void 0;
    }
  }]);
}(Tl);
oe([se("object")], re.prototype, "connect");
oe([se("object")], re.prototype, "directConnection");
oe([se("object")], re.prototype, "webModel");
oe([se("object")], re.prototype, "requestBodyLimits");
oe([se("function")], re.prototype, "requestInterceptor");
oe([se("function")], re.prototype, "responseInterceptor");
oe([se("function")], re.prototype, "validateInput");
oe([se("function")], re.prototype, "loadHistory");
oe([se("object")], re.prototype, "chatStyle");
oe([se("object")], re.prototype, "attachmentContainerStyle");
oe([se("object")], re.prototype, "dropupStyles");
oe([se("object")], re.prototype, "inputAreaStyle");
oe([se("object")], re.prototype, "textInput");
oe([se("object")], re.prototype, "submitButtonStyles");
oe([se("string")], re.prototype, "auxiliaryStyle");
oe([se("array")], re.prototype, "history");
oe([se("object")], re.prototype, "introMessage");
oe([se("object")], re.prototype, "avatars");
oe([se("object")], re.prototype, "names");
oe([se("boolean")], re.prototype, "displayLoadingBubble");
oe([se("object")], re.prototype, "errorMessages");
oe([se("object")], re.prototype, "messageStyles");
oe([se("object")], re.prototype, "textToSpeech");
oe([se("object")], re.prototype, "speechToText");
oe([se("object")], re.prototype, "images");
oe([se("object")], re.prototype, "gifs");
oe([se("object")], re.prototype, "camera");
oe([se("object")], re.prototype, "audio");
oe([se("object")], re.prototype, "microphone");
oe([se("object")], re.prototype, "mixedFiles");
oe([se("object")], re.prototype, "dragAndDrop");
oe([se("object")], re.prototype, "introPanelStyle");
oe([se("object")], re.prototype, "htmlClassUtilities");
oe([se("object")], re.prototype, "remarkable");
oe([se("function")], re.prototype, "onMessage");
oe([se("function")], re.prototype, "onClearMessages");
oe([se("function")], re.prototype, "onComponentRender");
oe([se("function")], re.prototype, "onError");
oe([se("object")], re.prototype, "demo");
oe([se("object")], re.prototype, "_insertKeyViewStyles");
customElements.define("deep-chat", re);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const mc = /* @__PURE__ */ new Set(["children", "localName", "ref", "style", "className"]), ri = /* @__PURE__ */ new WeakMap(), ai = (r, i, e, t, n) => {
  const a = n == null ? void 0 : n[i];
  a === void 0 ? (r[i] = e, e == null && i in HTMLElement.prototype && r.removeAttribute(i)) : e !== t && ((s, o, l) => {
    let u = ri.get(s);
    u === void 0 && ri.set(s, u = /* @__PURE__ */ new Map());
    let c = u.get(o);
    l !== void 0 ? c === void 0 ? (u.set(o, c = { handleEvent: l }), s.addEventListener(o, c)) : c.handleEvent = l : c !== void 0 && (u.delete(o), s.removeEventListener(o, c));
  })(r, a, e);
}, vc = ({ react: r, tagName: i, elementClass: e, events: t, displayName: n }) => {
  const a = new Set(Object.keys(t ?? {})), s = r.forwardRef((o, l) => {
    const u = r.useRef(/* @__PURE__ */ new Map()), c = r.useRef(null), d = {}, p = {};
    for (const [h, g] of Object.entries(o)) mc.has(h) ? d[h === "className" ? "class" : h] = g : a.has(h) || h in e.prototype ? p[h] = g : d[h] = g;
    return r.useLayoutEffect(() => {
      if (c.current === null) return;
      const h = /* @__PURE__ */ new Map();
      for (const g in p) ai(c.current, g, o[g], u.current.get(g), t), u.current.delete(g), h.set(g, o[g]);
      for (const [g, k] of u.current) ai(c.current, g, void 0, k, t);
      u.current = h;
    }), r.useLayoutEffect(() => {
      var h;
      (h = c.current) == null || h.removeAttribute("defer-hydration");
    }, []), d.suppressHydrationWarning = !0, r.createElement(i, { ...d, ref: r.useCallback((h) => {
      c.current = h, typeof l == "function" ? l(h) : l !== null && (l.current = h);
    }, [l]) });
  });
  return s.displayName = n ?? e.name, s;
}, gc = vc({
  tagName: "deep-chat",
  elementClass: re,
  react: cs,
  events: {
    onactivate: "activate",
    onchange: "change"
  }
}), yc = ({ apiUrl: r, title: i = "SalesAI Navigator Chatbot" }) => /* @__PURE__ */ Zn.jsxs("div", { className: "chatbot-container", children: [
  /* @__PURE__ */ Zn.jsx("div", { className: "chatbot-header", children: i }),
  /* @__PURE__ */ Zn.jsx(
    gc,
    {
      style: { width: "100%", height: "400px" },
      request: { url: r, method: "POST" }
    }
  )
] });
export {
  yc as default
};
