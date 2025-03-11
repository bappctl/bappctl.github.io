import * as hi from "react";
import pi from "react";
var It = { exports: {} }, ct = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Er;
function fi() {
  if (Er) return ct;
  Er = 1;
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
  return ct.Fragment = i, ct.jsx = e, ct.jsxs = e, ct;
}
var dt = {}, wr;
function mi() {
  if (wr) return dt;
  wr = 1;
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
    function i(v) {
      if (v == null) return null;
      if (typeof v == "function")
        return v.$$typeof === O ? null : v.displayName || v.name || null;
      if (typeof v == "string") return v;
      switch (v) {
        case Z:
          return "Fragment";
        case U:
          return "Portal";
        case ie:
          return "Profiler";
        case H:
          return "StrictMode";
        case ae:
          return "Suspense";
        case Y:
          return "SuspenseList";
      }
      if (typeof v == "object")
        switch (typeof v.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), v.$$typeof) {
          case fe:
            return (v.displayName || "Context") + ".Provider";
          case te:
            return (v._context.displayName || "Context") + ".Consumer";
          case q:
            var R = v.render;
            return v = v.displayName, v || (v = R.displayName || R.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
          case ye:
            return R = v.displayName || null, R !== null ? R : i(v.type) || "Memo";
          case x:
            R = v._payload, v = v._init;
            try {
              return i(v(R));
            } catch {
            }
        }
      return null;
    }
    function e(v) {
      return "" + v;
    }
    function t(v) {
      try {
        e(v);
        var R = !1;
      } catch {
        R = !0;
      }
      if (R) {
        R = console;
        var L = R.error, X = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return L.call(
          R,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          X
        ), e(v);
      }
    }
    function n() {
    }
    function a() {
      if (be === 0) {
        Ee = console.log, Te = console.info, pr = console.warn, fr = console.error, mr = console.group, vr = console.groupCollapsed, gr = console.groupEnd;
        var v = {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        };
        Object.defineProperties(console, {
          info: v,
          log: v,
          warn: v,
          error: v,
          group: v,
          groupCollapsed: v,
          groupEnd: v
        });
      }
      be++;
    }
    function s() {
      if (be--, be === 0) {
        var v = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: V({}, v, { value: Ee }),
          info: V({}, v, { value: Te }),
          warn: V({}, v, { value: pr }),
          error: V({}, v, { value: fr }),
          group: V({}, v, { value: mr }),
          groupCollapsed: V({}, v, { value: vr }),
          groupEnd: V({}, v, { value: gr })
        });
      }
      0 > be && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function o(v) {
      if (pn === void 0)
        try {
          throw Error();
        } catch (L) {
          var R = L.stack.trim().match(/\n( *(at )?)/);
          pn = R && R[1] || "", yr = -1 < L.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < L.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + pn + v + yr;
    }
    function l(v, R) {
      if (!v || fn) return "";
      var L = mn.get(v);
      if (L !== void 0) return L;
      fn = !0, L = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var X = null;
      X = N.H, N.H = null, a();
      try {
        var de = {
          DetermineComponentFrameRoot: function() {
            try {
              if (R) {
                var Le = function() {
                  throw Error();
                };
                if (Object.defineProperty(Le.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Le, []);
                  } catch (Re) {
                    var Mt = Re;
                  }
                  Reflect.construct(v, [], Le);
                } else {
                  try {
                    Le.call();
                  } catch (Re) {
                    Mt = Re;
                  }
                  v.call(Le.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Re) {
                  Mt = Re;
                }
                (Le = v()) && typeof Le.catch == "function" && Le.catch(function() {
                });
              }
            } catch (Re) {
              if (Re && Mt && typeof Re.stack == "string")
                return [Re.stack, Mt.stack];
            }
            return [null, null];
          }
        };
        de.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var ne = Object.getOwnPropertyDescriptor(
          de.DetermineComponentFrameRoot,
          "name"
        );
        ne && ne.configurable && Object.defineProperty(
          de.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var G = de.DetermineComponentFrameRoot(), Ie = G[0], tt = G[1];
        if (Ie && tt) {
          var he = Ie.split(`
`), Fe = tt.split(`
`);
          for (G = ne = 0; ne < he.length && !he[ne].includes(
            "DetermineComponentFrameRoot"
          ); )
            ne++;
          for (; G < Fe.length && !Fe[G].includes(
            "DetermineComponentFrameRoot"
          ); )
            G++;
          if (ne === he.length || G === Fe.length)
            for (ne = he.length - 1, G = Fe.length - 1; 1 <= ne && 0 <= G && he[ne] !== Fe[G]; )
              G--;
          for (; 1 <= ne && 0 <= G; ne--, G--)
            if (he[ne] !== Fe[G]) {
              if (ne !== 1 || G !== 1)
                do
                  if (ne--, G--, 0 > G || he[ne] !== Fe[G]) {
                    var ut = `
` + he[ne].replace(
                      " at new ",
                      " at "
                    );
                    return v.displayName && ut.includes("<anonymous>") && (ut = ut.replace("<anonymous>", v.displayName)), typeof v == "function" && mn.set(v, ut), ut;
                  }
                while (1 <= ne && 0 <= G);
              break;
            }
        }
      } finally {
        fn = !1, N.H = X, s(), Error.prepareStackTrace = L;
      }
      return he = (he = v ? v.displayName || v.name : "") ? o(he) : "", typeof v == "function" && mn.set(v, he), he;
    }
    function u(v) {
      if (v == null) return "";
      if (typeof v == "function") {
        var R = v.prototype;
        return l(
          v,
          !(!R || !R.isReactComponent)
        );
      }
      if (typeof v == "string") return o(v);
      switch (v) {
        case ae:
          return o("Suspense");
        case Y:
          return o("SuspenseList");
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case q:
            return v = l(v.render, !1), v;
          case ye:
            return u(v.type);
          case x:
            R = v._payload, v = v._init;
            try {
              return u(v(R));
            } catch {
            }
        }
      return "";
    }
    function c() {
      var v = N.A;
      return v === null ? null : v.getOwner();
    }
    function d(v) {
      if (j.call(v, "key")) {
        var R = Object.getOwnPropertyDescriptor(v, "key").get;
        if (R && R.isReactWarning) return !1;
      }
      return v.key !== void 0;
    }
    function h(v, R) {
      function L() {
        br || (br = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          R
        ));
      }
      L.isReactWarning = !0, Object.defineProperty(v, "key", {
        get: L,
        configurable: !0
      });
    }
    function p() {
      var v = i(this.type);
      return kr[v] || (kr[v] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), v = this.props.ref, v !== void 0 ? v : null;
    }
    function m(v, R, L, X, de, ne) {
      return L = ne.ref, v = {
        $$typeof: C,
        type: v,
        key: R,
        props: ne,
        _owner: de
      }, (L !== void 0 ? L : null) !== null ? Object.defineProperty(v, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(v, "ref", { enumerable: !1, value: null }), v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(v, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    }
    function g(v, R, L, X, de, ne) {
      if (typeof v == "string" || typeof v == "function" || v === Z || v === ie || v === H || v === ae || v === Y || v === w || typeof v == "object" && v !== null && (v.$$typeof === x || v.$$typeof === ye || v.$$typeof === fe || v.$$typeof === te || v.$$typeof === q || v.$$typeof === ee || v.getModuleId !== void 0)) {
        var G = R.children;
        if (G !== void 0)
          if (X)
            if (le(G)) {
              for (X = 0; X < G.length; X++)
                k(G[X], v);
              Object.freeze && Object.freeze(G);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else k(G, v);
      } else
        G = "", (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (G += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), v === null ? X = "null" : le(v) ? X = "array" : v !== void 0 && v.$$typeof === C ? (X = "<" + (i(v.type) || "Unknown") + " />", G = " Did you accidentally export a JSX literal instead of a component?") : X = typeof v, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          X,
          G
        );
      if (j.call(R, "key")) {
        G = i(v);
        var Ie = Object.keys(R).filter(function(he) {
          return he !== "key";
        });
        X = 0 < Ie.length ? "{key: someKey, " + Ie.join(": ..., ") + ": ...}" : "{key: someKey}", Sr[G + X] || (Ie = 0 < Ie.length ? "{" + Ie.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          X,
          G,
          Ie,
          G
        ), Sr[G + X] = !0);
      }
      if (G = null, L !== void 0 && (t(L), G = "" + L), d(R) && (t(R.key), G = "" + R.key), "key" in R) {
        L = {};
        for (var tt in R)
          tt !== "key" && (L[tt] = R[tt]);
      } else L = R;
      return G && h(
        L,
        typeof v == "function" ? v.displayName || v.name || "Unknown" : v
      ), m(v, G, ne, de, c(), L);
    }
    function k(v, R) {
      if (typeof v == "object" && v && v.$$typeof !== di) {
        if (le(v))
          for (var L = 0; L < v.length; L++) {
            var X = v[L];
            _(X) && E(X, R);
          }
        else if (_(v))
          v._store && (v._store.validated = 1);
        else if (v === null || typeof v != "object" ? L = null : (L = T && v[T] || v["@@iterator"], L = typeof L == "function" ? L : null), typeof L == "function" && L !== v.entries && (L = L.call(v), L !== v))
          for (; !(v = L.next()).done; )
            _(v.value) && E(v.value, R);
      }
    }
    function _(v) {
      return typeof v == "object" && v !== null && v.$$typeof === C;
    }
    function E(v, R) {
      if (v._store && !v._store.validated && v.key == null && (v._store.validated = 1, R = M(R), !_r[R])) {
        _r[R] = !0;
        var L = "";
        v && v._owner != null && v._owner !== c() && (L = null, typeof v._owner.tag == "number" ? L = i(v._owner.type) : typeof v._owner.name == "string" && (L = v._owner.name), L = " It was passed a child from " + L + ".");
        var X = N.getCurrentStack;
        N.getCurrentStack = function() {
          var de = u(v.type);
          return X && (de += X() || ""), de;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          R,
          L
        ), N.getCurrentStack = X;
      }
    }
    function M(v) {
      var R = "", L = c();
      return L && (L = i(L.type)) && (R = `

Check the render method of \`` + L + "`."), R || (v = i(v)) && (R = `

Check the top-level render call using <` + v + ">."), R;
    }
    var A = pi, C = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), H = Symbol.for("react.strict_mode"), ie = Symbol.for("react.profiler"), te = Symbol.for("react.consumer"), fe = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), ae = Symbol.for("react.suspense"), Y = Symbol.for("react.suspense_list"), ye = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), T = Symbol.iterator, O = Symbol.for("react.client.reference"), N = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, V = Object.assign, ee = Symbol.for("react.client.reference"), le = Array.isArray, be = 0, Ee, Te, pr, fr, mr, vr, gr;
    n.__reactDisabledLog = !0;
    var pn, yr, fn = !1, mn = new (typeof WeakMap == "function" ? WeakMap : Map)(), di = Symbol.for("react.client.reference"), br, kr = {}, Sr = {}, _r = {};
    dt.Fragment = Z, dt.jsx = function(v, R, L, X, de) {
      return g(v, R, L, !1, X, de);
    }, dt.jsxs = function(v, R, L, X, de) {
      return g(v, R, L, !0, X, de);
    };
  }(), dt;
}
var Cr;
function vi() {
  if (Cr) return It.exports;
  Cr = 1;
  var r = {};
  return r.NODE_ENV === "production" ? It.exports = fi() : It.exports = mi(), It.exports;
}
var vn = vi();
function gi(r, i) {
  var e = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!e) {
    if (Array.isArray(r) || (e = Zn(r)) || i) {
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
function In(r) {
  var i = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return In = function(t) {
    if (t === null || !bi(t)) return t;
    if (typeof t != "function") throw new TypeError("Super expression must either be null or a function");
    if (i !== void 0) {
      if (i.has(t)) return i.get(t);
      i.set(t, n);
    }
    function n() {
      return yi(t, arguments, gt(this).constructor);
    }
    return n.prototype = Object.create(t.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), yt(n, t);
  }, In(r);
}
function yi(r, i, e) {
  if (Yn()) return Reflect.construct.apply(null, arguments);
  var t = [null];
  t.push.apply(t, i);
  var n = new (r.bind.apply(r, t))();
  return e && yt(n, e.prototype), n;
}
function bi(r) {
  try {
    return Function.toString.call(r).indexOf("[native code]") !== -1;
  } catch {
    return typeof r == "function";
  }
}
function F(r, i, e) {
  return i = gt(i), ki(r, Yn() ? Reflect.construct(i, e || [], gt(r).constructor) : i.apply(r, e));
}
function ki(r, i) {
  if (i && (P(i) == "object" || typeof i == "function")) return i;
  if (i !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return it(r);
}
function it(r) {
  if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Yn() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Yn = function() {
    return !!r;
  })();
}
function gt(r) {
  return gt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, gt(r);
}
function B(r, i) {
  if (typeof i != "function" && i !== null) throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(i && i.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), i && yt(r, i);
}
function yt(r, i) {
  return yt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
    return e.__proto__ = t, e;
  }, yt(r, i);
}
function Xn(r, i) {
  return Ei(r) || _i(r, i) || Zn(r, i) || Si();
}
function Si() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _i(r, i) {
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
function Ei(r) {
  if (Array.isArray(r)) return r;
}
function f() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  f = function() {
    return i;
  };
  var r, i = {}, e = Object.prototype, t = e.hasOwnProperty, n = Object.defineProperty || function(x, w, T) {
    x[w] = T.value;
  }, a = typeof Symbol == "function" ? Symbol : {}, s = a.iterator || "@@iterator", o = a.asyncIterator || "@@asyncIterator", l = a.toStringTag || "@@toStringTag";
  function u(x, w, T) {
    return Object.defineProperty(x, w, { value: T, enumerable: !0, configurable: !0, writable: !0 }), x[w];
  }
  try {
    u({}, "");
  } catch {
    u = function(T, O, N) {
      return T[O] = N;
    };
  }
  function c(x, w, T, O) {
    var N = w && w.prototype instanceof _ ? w : _, j = Object.create(N.prototype), V = new Y(O || []);
    return n(j, "_invoke", { value: te(x, T, V) }), j;
  }
  function d(x, w, T) {
    try {
      return { type: "normal", arg: x.call(w, T) };
    } catch (O) {
      return { type: "throw", arg: O };
    }
  }
  i.wrap = c;
  var h = "suspendedStart", p = "suspendedYield", m = "executing", g = "completed", k = {};
  function _() {
  }
  function E() {
  }
  function M() {
  }
  var A = {};
  u(A, s, function() {
    return this;
  });
  var C = Object.getPrototypeOf, U = C && C(C(ye([])));
  U && U !== e && t.call(U, s) && (A = U);
  var Z = M.prototype = _.prototype = Object.create(A);
  function H(x) {
    ["next", "throw", "return"].forEach(function(w) {
      u(x, w, function(T) {
        return this._invoke(w, T);
      });
    });
  }
  function ie(x, w) {
    function T(N, j, V, ee) {
      var le = d(x[N], x, j);
      if (le.type !== "throw") {
        var be = le.arg, Ee = be.value;
        return Ee && P(Ee) == "object" && t.call(Ee, "__await") ? w.resolve(Ee.__await).then(function(Te) {
          T("next", Te, V, ee);
        }, function(Te) {
          T("throw", Te, V, ee);
        }) : w.resolve(Ee).then(function(Te) {
          be.value = Te, V(be);
        }, function(Te) {
          return T("throw", Te, V, ee);
        });
      }
      ee(le.arg);
    }
    var O;
    n(this, "_invoke", { value: function(j, V) {
      function ee() {
        return new w(function(le, be) {
          T(j, V, le, be);
        });
      }
      return O = O ? O.then(ee, ee) : ee();
    } });
  }
  function te(x, w, T) {
    var O = h;
    return function(N, j) {
      if (O === m) throw Error("Generator is already running");
      if (O === g) {
        if (N === "throw") throw j;
        return { value: r, done: !0 };
      }
      for (T.method = N, T.arg = j; ; ) {
        var V = T.delegate;
        if (V) {
          var ee = fe(V, T);
          if (ee) {
            if (ee === k) continue;
            return ee;
          }
        }
        if (T.method === "next") T.sent = T._sent = T.arg;
        else if (T.method === "throw") {
          if (O === h) throw O = g, T.arg;
          T.dispatchException(T.arg);
        } else T.method === "return" && T.abrupt("return", T.arg);
        O = m;
        var le = d(x, w, T);
        if (le.type === "normal") {
          if (O = T.done ? g : p, le.arg === k) continue;
          return { value: le.arg, done: T.done };
        }
        le.type === "throw" && (O = g, T.method = "throw", T.arg = le.arg);
      }
    };
  }
  function fe(x, w) {
    var T = w.method, O = x.iterator[T];
    if (O === r) return w.delegate = null, T === "throw" && x.iterator.return && (w.method = "return", w.arg = r, fe(x, w), w.method === "throw") || T !== "return" && (w.method = "throw", w.arg = new TypeError("The iterator does not provide a '" + T + "' method")), k;
    var N = d(O, x.iterator, w.arg);
    if (N.type === "throw") return w.method = "throw", w.arg = N.arg, w.delegate = null, k;
    var j = N.arg;
    return j ? j.done ? (w[x.resultName] = j.value, w.next = x.nextLoc, w.method !== "return" && (w.method = "next", w.arg = r), w.delegate = null, k) : j : (w.method = "throw", w.arg = new TypeError("iterator result is not an object"), w.delegate = null, k);
  }
  function q(x) {
    var w = { tryLoc: x[0] };
    1 in x && (w.catchLoc = x[1]), 2 in x && (w.finallyLoc = x[2], w.afterLoc = x[3]), this.tryEntries.push(w);
  }
  function ae(x) {
    var w = x.completion || {};
    w.type = "normal", delete w.arg, x.completion = w;
  }
  function Y(x) {
    this.tryEntries = [{ tryLoc: "root" }], x.forEach(q, this), this.reset(!0);
  }
  function ye(x) {
    if (x || x === "") {
      var w = x[s];
      if (w) return w.call(x);
      if (typeof x.next == "function") return x;
      if (!isNaN(x.length)) {
        var T = -1, O = function N() {
          for (; ++T < x.length; ) if (t.call(x, T)) return N.value = x[T], N.done = !1, N;
          return N.value = r, N.done = !0, N;
        };
        return O.next = O;
      }
    }
    throw new TypeError(P(x) + " is not iterable");
  }
  return E.prototype = M, n(Z, "constructor", { value: M, configurable: !0 }), n(M, "constructor", { value: E, configurable: !0 }), E.displayName = u(M, l, "GeneratorFunction"), i.isGeneratorFunction = function(x) {
    var w = typeof x == "function" && x.constructor;
    return !!w && (w === E || (w.displayName || w.name) === "GeneratorFunction");
  }, i.mark = function(x) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(x, M) : (x.__proto__ = M, u(x, l, "GeneratorFunction")), x.prototype = Object.create(Z), x;
  }, i.awrap = function(x) {
    return { __await: x };
  }, H(ie.prototype), u(ie.prototype, o, function() {
    return this;
  }), i.AsyncIterator = ie, i.async = function(x, w, T, O, N) {
    N === void 0 && (N = Promise);
    var j = new ie(c(x, w, T, O), N);
    return i.isGeneratorFunction(w) ? j : j.next().then(function(V) {
      return V.done ? V.value : j.next();
    });
  }, H(Z), u(Z, l, "Generator"), u(Z, s, function() {
    return this;
  }), u(Z, "toString", function() {
    return "[object Generator]";
  }), i.keys = function(x) {
    var w = Object(x), T = [];
    for (var O in w) T.push(O);
    return T.reverse(), function N() {
      for (; T.length; ) {
        var j = T.pop();
        if (j in w) return N.value = j, N.done = !1, N;
      }
      return N.done = !0, N;
    };
  }, i.values = ye, Y.prototype = { constructor: Y, reset: function(w) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(ae), !w) for (var T in this) T.charAt(0) === "t" && t.call(this, T) && !isNaN(+T.slice(1)) && (this[T] = r);
  }, stop: function() {
    this.done = !0;
    var w = this.tryEntries[0].completion;
    if (w.type === "throw") throw w.arg;
    return this.rval;
  }, dispatchException: function(w) {
    if (this.done) throw w;
    var T = this;
    function O(be, Ee) {
      return V.type = "throw", V.arg = w, T.next = be, Ee && (T.method = "next", T.arg = r), !!Ee;
    }
    for (var N = this.tryEntries.length - 1; N >= 0; --N) {
      var j = this.tryEntries[N], V = j.completion;
      if (j.tryLoc === "root") return O("end");
      if (j.tryLoc <= this.prev) {
        var ee = t.call(j, "catchLoc"), le = t.call(j, "finallyLoc");
        if (ee && le) {
          if (this.prev < j.catchLoc) return O(j.catchLoc, !0);
          if (this.prev < j.finallyLoc) return O(j.finallyLoc);
        } else if (ee) {
          if (this.prev < j.catchLoc) return O(j.catchLoc, !0);
        } else {
          if (!le) throw Error("try statement without catch or finally");
          if (this.prev < j.finallyLoc) return O(j.finallyLoc);
        }
      }
    }
  }, abrupt: function(w, T) {
    for (var O = this.tryEntries.length - 1; O >= 0; --O) {
      var N = this.tryEntries[O];
      if (N.tryLoc <= this.prev && t.call(N, "finallyLoc") && this.prev < N.finallyLoc) {
        var j = N;
        break;
      }
    }
    j && (w === "break" || w === "continue") && j.tryLoc <= T && T <= j.finallyLoc && (j = null);
    var V = j ? j.completion : {};
    return V.type = w, V.arg = T, j ? (this.method = "next", this.next = j.finallyLoc, k) : this.complete(V);
  }, complete: function(w, T) {
    if (w.type === "throw") throw w.arg;
    return w.type === "break" || w.type === "continue" ? this.next = w.arg : w.type === "return" ? (this.rval = this.arg = w.arg, this.method = "return", this.next = "end") : w.type === "normal" && T && (this.next = T), k;
  }, finish: function(w) {
    for (var T = this.tryEntries.length - 1; T >= 0; --T) {
      var O = this.tryEntries[T];
      if (O.finallyLoc === w) return this.complete(O.completion, O.afterLoc), ae(O), k;
    }
  }, catch: function(w) {
    for (var T = this.tryEntries.length - 1; T >= 0; --T) {
      var O = this.tryEntries[T];
      if (O.tryLoc === w) {
        var N = O.completion;
        if (N.type === "throw") {
          var j = N.arg;
          ae(O);
        }
        return j;
      }
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(w, T, O) {
    return this.delegate = { iterator: ye(w), resultName: T, nextLoc: O }, this.method === "next" && (this.arg = r), k;
  } }, i;
}
function Tr(r, i, e, t, n, a, s) {
  try {
    var o = r[a](s), l = o.value;
  } catch (u) {
    return void e(u);
  }
  o.done ? i(l) : Promise.resolve(l).then(t, n);
}
function S(r) {
  return function() {
    var i = this, e = arguments;
    return new Promise(function(t, n) {
      var a = r.apply(i, e);
      function s(l) {
        Tr(a, t, n, s, o, "next", l);
      }
      function o(l) {
        Tr(a, t, n, s, o, "throw", l);
      }
      s(void 0);
    });
  };
}
function Kt(r) {
  return Ti(r) || Ci(r) || Zn(r) || wi();
}
function wi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zn(r, i) {
  if (r) {
    if (typeof r == "string") return Rn(r, i);
    var e = {}.toString.call(r).slice(8, -1);
    return e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set" ? Array.from(r) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Rn(r, i) : void 0;
  }
}
function Ci(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function Ti(r) {
  if (Array.isArray(r)) return Rn(r);
}
function Rn(r, i) {
  (i == null || i > r.length) && (i = r.length);
  for (var e = 0, t = Array(i); e < i; e++) t[e] = r[e];
  return t;
}
function xr(r, i) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(r);
    i && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function J(r) {
  for (var i = 1; i < arguments.length; i++) {
    var e = arguments[i] != null ? arguments[i] : {};
    i % 2 ? xr(Object(e), !0).forEach(function(t) {
      Vt(r, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : xr(Object(e)).forEach(function(t) {
      Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return r;
}
function Vt(r, i, e) {
  return (i = ga(i)) in r ? Object.defineProperty(r, i, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : r[i] = e, r;
}
function P(r) {
  "@babel/helpers - typeof";
  return P = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
    return typeof i;
  } : function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, P(r);
}
function y(r, i) {
  if (!(r instanceof i)) throw new TypeError("Cannot call a class as a function");
}
function Ar(r, i) {
  for (var e = 0; e < i.length; e++) {
    var t = i[e];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(r, ga(t.key), t);
  }
}
function b(r, i, e) {
  return i && Ar(r.prototype, i), e && Ar(r, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function ga(r) {
  var i = xi(r, "string");
  return P(i) == "symbol" ? i : i + "";
}
function xi(r, i) {
  if (P(r) != "object" || !r) return r;
  var e = r[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(r, i);
    if (P(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var Ai = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "render",
    value: function(e, t) {
      var n = document.createElement("div");
      n.id = "error-view", n.innerText = t, e.replaceChildren(n);
    }
  }]);
}(), Mi = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
        onFail: Ai.render.bind(this, e, "Your 'key' has failed authentication"),
        onLoad: r.onLoad.bind(this, a)
      };
      n.key && n.verifyKey(n.key, s), e.replaceChildren(a);
    }
  }]);
}(), ce = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
      var a = e.default || {}, s = Object.assign(JSON.parse(JSON.stringify(J(J({}, a), t))), e == null ? void 0 : e.hover), o = Object.assign(JSON.parse(JSON.stringify(J(J({}, s), n))), e == null ? void 0 : e.click);
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
}(), Ln = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
Ln.FONT_URL = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap", Ln.DEFAULT_FONT_FAMILY = "'Inter', sans-serif, Avenir, Helvetica, Arial";
var ya = Ln, ba = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
      t && ce.applyToStyleIfNotDefined(e, t), ce.applyToStyleIfNotDefined(e, r.DEFAULT_COMPONENT_STYLE);
    }
  }]);
}();
ba.DEFAULT_COMPONENT_STYLE = {
  height: "350px",
  width: "320px",
  borderTop: "1px solid #cacaca",
  borderRight: "1px solid #cacaca",
  borderLeft: "1px solid #cacaca",
  borderBottom: "1px solid #cacaca",
  fontFamily: ya.DEFAULT_FONT_FAMILY,
  fontSize: "0.9rem",
  backgroundColor: "white",
  position: "relative",
  // this is used to prevent inputAreaStyle background color from going beyond the container's rounded border
  // it will cause issues if there are elements that are meant to be outside of the chat component and in
  // that instance they should overwrite this
  // this is also causing the chat to squeeze when there is no space
  overflow: "hidden"
};
var gn = ba, Rt, st = (Rt = /* @__PURE__ */ b(function r() {
  y(this, r);
}), Rt.IS_SAFARI = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), Rt.IS_CHROMIUM = window.chrome, Rt), ue = /* @__PURE__ */ function(r) {
  return r.ESCAPE = "Escape", r.ENTER = "Enter", r.TAB = "Tab", r.ARROW_UP = "ArrowUp", r.ARROW_DOWN = "ArrowDown", r.ARROW_RIGHT = "ArrowRight", r.ARROW_LEFT = "ArrowLeft", r.BACKSPACE = "Backspace", r.DELETE = "Delete", r.META = "Meta", r.CONTROL = "Control", r;
}(ue || {}), ka = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
      e !== void 0 && s.length > e && (a.textContent = s.substring(0, e), Qn.focusEndOfInput(a)), t == null || t();
    }
  }]);
}();
ka.PERMITTED_KEYS = /* @__PURE__ */ new Set([ue.BACKSPACE, ue.DELETE, ue.ARROW_RIGHT, ue.ARROW_LEFT, ue.ARROW_DOWN, ue.ARROW_UP, ue.META, ue.CONTROL, ue.ENTER]);
var Ii = ka, Ri = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "sanitizePastedTextContent",
    value: function(e) {
      var t, n;
      e.preventDefault();
      var a = (t = e.clipboardData) == null ? void 0 : t.getData("text/plain");
      a && ((n = document.execCommand) == null || n.call(document, "insertText", !1, a));
    }
  }]);
}(), Sa = /* @__PURE__ */ function() {
  function r(i, e, t) {
    var n = this;
    y(this, r);
    var a, s, o = r.processConfig(e, i.textInput);
    this.elementRef = r.createContainerElement((a = o == null ? void 0 : o.styles) == null ? void 0 : a.container), this._config = o, this.inputElementRef = this.createInputElement(), this.elementRef.appendChild(this.inputElementRef), i.setPlaceholderText = this.setPlaceholderText.bind(this), i.setPlaceholderText(((s = this._config.placeholder) == null ? void 0 : s.text) || "Ask me anything!"), setTimeout(function() {
      Ii.add(n.inputElementRef, t, n._config.characterLimit, i._validationHandler);
    });
  }
  return b(r, [{
    key: "clear",
    value: (
      // this also similarly prevents scroll up
      function() {
        var e, t = window.scrollY;
        this.inputElementRef.classList.contains("text-input-disabled") || (Object.assign(this.inputElementRef.style, (e = this._config.placeholder) == null ? void 0 : e.style), this.inputElementRef.textContent = "", Qn.focusEndOfInput(this.inputElementRef)), st.IS_CHROMIUM && window.scrollTo({
          top: t
        });
      }
    )
  }, {
    key: "createInputElement",
    value: function() {
      var e, t, n, a, s = document.createElement("div");
      return s.id = r.TEXT_INPUT_ID, s.classList.add("text-input-styling"), st.IS_CHROMIUM && r.preventAutomaticScrollUpOnNewLine(s), typeof this._config.disabled == "boolean" && this._config.disabled === !0 ? (s.contentEditable = "false", s.classList.add("text-input-disabled")) : (s.contentEditable = "true", this.addEventListeners(s)), Object.assign(s.style, (e = this._config.styles) == null ? void 0 : e.text), Object.assign(s.style, (t = this._config.placeholder) == null ? void 0 : t.style), (a = (n = this._config.placeholder) == null ? void 0 : n.style) != null && a.color || s.setAttribute("textcolor", ""), s;
    }
  }, {
    key: "removePlaceholderStyle",
    value: function() {
      var e, t, n, a;
      !this.inputElementRef.classList.contains("text-input-disabled") && (e = this._config.placeholder) != null && e.style && (ce.unsetStyle(this.inputElementRef, (t = this._config.placeholder) == null ? void 0 : t.style), Object.assign(this.inputElementRef.style, (a = (n = this._config) == null ? void 0 : n.styles) == null ? void 0 : a.text));
    }
  }, {
    key: "addEventListeners",
    value: function(e) {
      var t = this, n, a;
      (n = this._config.styles) != null && n.focus && (e.onfocus = function() {
        var s;
        return Object.assign(t.elementRef.style, (s = t._config.styles) == null ? void 0 : s.focus);
      }, e.onblur = this.onBlur.bind(this, this._config.styles.focus, (a = this._config.styles) == null ? void 0 : a.container)), e.addEventListener("keydown", this.onKeydown.bind(this)), e.addEventListener("input", this.onInput.bind(this)), e.addEventListener("paste", Ri.sanitizePastedTextContent);
    }
  }, {
    key: "onBlur",
    value: function(e, t) {
      ce.unsetStyle(this.elementRef, e), t && Object.assign(this.elementRef.style, t);
    }
  }, {
    key: "onKeydown",
    value: function(e) {
      var t;
      e.key === ue.ENTER && !e.ctrlKey && !e.shiftKey && (e.preventDefault(), (t = this.submit) == null || t.call(this));
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
Sa.TEXT_INPUT_ID = "text-input";
var _a = Sa, Qn = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
      var t = e.querySelector("#".concat(_a.TEXT_INPUT_ID));
      t && (st.IS_SAFARI && t.focus(), r.focusEndOfInput(t));
    }
  }]);
}();
function Mr(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function Li(r) {
  return r && JSON.stringify(r);
}
function er(r, i, e, t) {
  var n = `
`.concat(Mr(i), " message: ").concat(JSON.stringify(r), ` 
`), a = e ? "".concat(Mr(i), " message after interceptor: ").concat(Li(t), ` 
`) : "";
  return n + a;
}
function Oi(r, i, e, t) {
  return "".concat(er(r, i, e, t), "Make sure the ").concat(i, ` message is using the Response format: https://deepchat.dev/docs/connect/#Response 
You can also augment it using the responseInterceptor property: https://deepchat.dev/docs/interceptors#responseInterceptor`);
}
function Pi(r, i, e) {
  var t = "response";
  return "".concat(er(r, t, i, e), "Make sure the ").concat(t, ' message is using the {text: string} format, e.g: {text: "Model Response"}');
}
function Ni(r, i) {
  var e = "request";
  return "".concat(er(r, e, i), "Make sure the ").concat(e, ' message is using the {body: {text: string}} format, e.g: {body: {text: "Model Response"}}');
}
var Ir = `Make sure the events are using {text: string} or {html: string} format.
You can also augment them using the responseInterceptor property: https://deepchat.dev/docs/interceptors#responseInterceptor`, re = {
  INVALID_KEY: "Invalid API Key",
  CONNECTION_FAILED: "Failed to connect",
  INVALID_RESPONSE: Oi,
  INVALID_MODEL_REQUEST: Ni,
  INVALID_MODEL_RESPONSE: Pi,
  INVALID_STREAM_EVENT: Ir,
  INVALID_STREAM_EVENT_MIX: "Cannot mix {text: string} and {html: string} responses.",
  NO_VALID_STREAM_EVENTS_SENT: `No valid stream events were sent.
`.concat(Ir)
}, Ea = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
Ea.CODE_SNIPPET_GENERATION_JUMP = 0.5;
var _e = Ea, wa = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
        if (P(e) == "object" && (e.lang && (n.lang = e.lang), e.pitch && (n.pitch = e.pitch), e.rate && (n.rate = e.rate), e.volume && (n.volume = e.volume), e.voiceName)) {
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
wa.LOAD_VOICES_MS = 200;
var Dt = wa, On = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
On.BUBBLE_CLASS = "deep-chat-loading-message-bubble", On.DOTS_CONTAINER_CLASS = "deep-chat-loading-message-dots-container";
var qe = On, Pn = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
      var t = J({}, e);
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
Pn.DEFAULT_FILE_NAME = "file", Pn.FILE_BUBBLE_CLASS = "file-message";
var me = Pn, ge = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
}(), Ca = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "mouseUp",
    value: function(e, t) {
      ce.unsetAllCSSMouseStates(e, t), Object.assign(e.style, t.default), Object.assign(e.style, t.hover);
    }
  }, {
    key: "mouseDown",
    value: function(e, t) {
      Object.assign(e.style, t.click);
    }
  }, {
    key: "mouseLeave",
    value: function(e, t) {
      ce.unsetAllCSSMouseStates(e, t), Object.assign(e.style, t.default);
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
}(), Di = "deep-chat-temporary-message", Fi = "deep-chat-suggestion-button", Nn = {
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
}, Rr = Object.keys(Nn), bt = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
      return e ? (t = e.bubbleElement.children[0]) == null ? void 0 : t.classList.contains(Di) : !1;
    }
  }, {
    key: "doesElementContainDeepChatClass",
    value: function(e) {
      return Rr.find(function(t) {
        return e.classList.contains(t);
      });
    }
  }, {
    key: "applyEvents",
    value: function(e, t) {
      var n = Nn[t].events;
      Object.keys(n || []).forEach(function(a) {
        e.addEventListener(a, n == null ? void 0 : n[a]);
      });
    }
  }, {
    key: "getProcessedStyles",
    value: function(e, t, n) {
      var a = Array.from(t.classList).reduce(function(u, c) {
        var d, h = (d = e[c]) == null ? void 0 : d.styles;
        return h && e[c].styles && u.push(h), u;
      }, []), s = Nn[n].styles;
      if (s) {
        var o = JSON.parse(JSON.stringify(s));
        o.default && ce.overwriteDefaultWithAlreadyApplied(o, t), a.unshift(o);
      }
      var l = ce.mergeStatefulStyles(a);
      return ce.processStateful(l, {}, {});
    }
  }, {
    key: "applyDeepChatUtilities",
    value: function(e, t, n) {
      Rr.forEach(function(s) {
        var o = n.getElementsByClassName(s);
        Array.from(o || []).forEach(function(l) {
          var u = r.getProcessedStyles(t, l, s);
          ot.applyStylesToElement(l, u), r.applyEvents(l, s);
        });
      });
      var a = n.getElementsByClassName(Fi);
      Array.from(a).forEach(function(s) {
        return r.applySuggestionEvent(e, s);
      });
    }
  }]);
}(), ot = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "applyStylesToElement",
    value: function(e, t) {
      var n = ce.processStateful(t, {}, {});
      Ca.add(e, n), Object.assign(e.style, n.default);
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
      n && r.applyEventsToElement(e, n), a && !bt.doesElementContainDeepChatClass(e) && r.applyStylesToElement(e, a);
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
      bt.applyDeepChatUtilities(e, e.htmlClassUtilities, t), r.applyCustomClassUtilities(e.htmlClassUtilities, t);
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
}(), Ta = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
      n.bubbleElement.innerHTML = t, ot.apply(e, n.outerContainer), ge.flagHTMLUpdateClass(n.bubbleElement);
    }
    // prettier-ignore
  }, {
    key: "overwrite",
    value: function(e, t, n, a) {
      var s = e.messageToElements, o = D.overwriteMessage(s, a, t, n, "html", r.HTML_BUBBLE_CLASS);
      return o && r.overwriteElements(e, t, o), o;
    }
  }, {
    key: "create",
    value: function(e, t, n) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, s, o = r.createElements(e, t, n, a);
      return D.fillEmptyMessageElement(o.bubbleElement, t), ot.apply(e, o.outerContainer), ge.flagHTMLUpdateClass(o.bubbleElement), e.applyCustomStyles(o, n, !1, (s = e.messageStyles) == null ? void 0 : s.html), o;
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
Ta.HTML_BUBBLE_CLASS = "html-message";
var Oe = Ta, Lt;
function xa(r) {
  return Lt = Lt || document.createElement("textarea"), Lt.innerHTML = "&" + r + ";", Lt.value;
}
var Bi = Object.prototype.hasOwnProperty;
function ji(r, i) {
  return r ? Bi.call(r, i) : !1;
}
function Aa(r) {
  var i = [].slice.call(arguments, 1);
  return i.forEach(function(e) {
    if (e) {
      if (P(e) != "object") throw new TypeError(e + "must be object");
      Object.keys(e).forEach(function(t) {
        r[t] = e[t];
      });
    }
  }), r;
}
var Ui = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
function kt(r) {
  return r.indexOf("\\") < 0 ? r : r.replace(Ui, "$1");
}
function Ma(r) {
  return !(r >= 55296 && r <= 57343 || r >= 64976 && r <= 65007 || (r & 65535) === 65535 || (r & 65535) === 65534 || r >= 0 && r <= 8 || r === 11 || r >= 14 && r <= 31 || r >= 127 && r <= 159 || r > 1114111);
}
function Dn(r) {
  if (r > 65535) {
    r -= 65536;
    var i = 55296 + (r >> 10), e = 56320 + (r & 1023);
    return String.fromCharCode(i, e);
  }
  return String.fromCharCode(r);
}
var Hi = /&([a-z#][a-z0-9]{1,31});/gi, qi = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
function zi(r, i) {
  var e = 0, t = xa(i);
  return i !== t ? t : i.charCodeAt(0) === 35 && qi.test(i) && (e = i[1].toLowerCase() === "x" ? parseInt(i.slice(2), 16) : parseInt(i.slice(1), 10), Ma(e)) ? Dn(e) : r;
}
function $e(r) {
  return r.indexOf("&") < 0 ? r : r.replace(Hi, zi);
}
var Vi = /[&<>"]/, Gi = /[&<>"]/g, $i = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function Wi(r) {
  return $i[r];
}
function ve(r) {
  return Vi.test(r) ? r.replace(Gi, Wi) : r;
}
var I = {};
I.blockquote_open = function() {
  return `<blockquote>
`;
};
I.blockquote_close = function(r, i) {
  return "</blockquote>" + Ke(r, i);
};
I.code = function(r, i) {
  return r[i].block ? "<pre><code>" + ve(r[i].content) + "</code></pre>" + Ke(r, i) : "<code>" + ve(r[i].content) + "</code>";
};
I.fence = function(r, i, e, t, n) {
  var a = r[i], s = "", o = e.langPrefix, l = "", u, c, d;
  if (a.params) {
    if (u = a.params.split(/\s+/g), c = u.join(" "), ji(n.rules.fence_custom, u[0])) return n.rules.fence_custom[u[0]](r, i, e, t, n);
    l = ve($e(kt(c))), s = ' class="' + o + l + '"';
  }
  return e.highlight ? d = e.highlight.apply(e.highlight, [a.content].concat(u)) || ve(a.content) : d = ve(a.content), "<pre><code" + s + ">" + d + "</code></pre>" + Ke(r, i);
};
I.fence_custom = {};
I.heading_open = function(r, i) {
  return "<h" + r[i].hLevel + ">";
};
I.heading_close = function(r, i) {
  return "</h" + r[i].hLevel + `>
`;
};
I.hr = function(r, i, e) {
  return (e.xhtmlOut ? "<hr />" : "<hr>") + Ke(r, i);
};
I.bullet_list_open = function() {
  return `<ul>
`;
};
I.bullet_list_close = function(r, i) {
  return "</ul>" + Ke(r, i);
};
I.list_item_open = function() {
  return "<li>";
};
I.list_item_close = function() {
  return `</li>
`;
};
I.ordered_list_open = function(r, i) {
  var e = r[i], t = e.order > 1 ? ' start="' + e.order + '"' : "";
  return "<ol" + t + `>
`;
};
I.ordered_list_close = function(r, i) {
  return "</ol>" + Ke(r, i);
};
I.paragraph_open = function(r, i) {
  return r[i].tight ? "" : "<p>";
};
I.paragraph_close = function(r, i) {
  var e = !(r[i].tight && i && r[i - 1].type === "inline" && !r[i - 1].content);
  return (r[i].tight ? "" : "</p>") + (e ? Ke(r, i) : "");
};
I.link_open = function(r, i, e) {
  var t = r[i].title ? ' title="' + ve($e(r[i].title)) + '"' : "", n = e.linkTarget ? ' target="' + e.linkTarget + '"' : "";
  return '<a href="' + ve(r[i].href) + '"' + t + n + ">";
};
I.link_close = function() {
  return "</a>";
};
I.image = function(r, i, e) {
  var t = ' src="' + ve(r[i].src) + '"', n = r[i].title ? ' title="' + ve($e(r[i].title)) + '"' : "", a = ' alt="' + (r[i].alt ? ve($e(kt(r[i].alt))) : "") + '"', s = e.xhtmlOut ? " /" : "";
  return "<img" + t + a + n + s + ">";
};
I.table_open = function() {
  return `<table>
`;
};
I.table_close = function() {
  return `</table>
`;
};
I.thead_open = function() {
  return `<thead>
`;
};
I.thead_close = function() {
  return `</thead>
`;
};
I.tbody_open = function() {
  return `<tbody>
`;
};
I.tbody_close = function() {
  return `</tbody>
`;
};
I.tr_open = function() {
  return "<tr>";
};
I.tr_close = function() {
  return `</tr>
`;
};
I.th_open = function(r, i) {
  var e = r[i];
  return "<th" + (e.align ? ' style="text-align:' + e.align + '"' : "") + ">";
};
I.th_close = function() {
  return "</th>";
};
I.td_open = function(r, i) {
  var e = r[i];
  return "<td" + (e.align ? ' style="text-align:' + e.align + '"' : "") + ">";
};
I.td_close = function() {
  return "</td>";
};
I.strong_open = function() {
  return "<strong>";
};
I.strong_close = function() {
  return "</strong>";
};
I.em_open = function() {
  return "<em>";
};
I.em_close = function() {
  return "</em>";
};
I.del_open = function() {
  return "<del>";
};
I.del_close = function() {
  return "</del>";
};
I.ins_open = function() {
  return "<ins>";
};
I.ins_close = function() {
  return "</ins>";
};
I.mark_open = function() {
  return "<mark>";
};
I.mark_close = function() {
  return "</mark>";
};
I.sub = function(r, i) {
  return "<sub>" + ve(r[i].content) + "</sub>";
};
I.sup = function(r, i) {
  return "<sup>" + ve(r[i].content) + "</sup>";
};
I.hardbreak = function(r, i, e) {
  return e.xhtmlOut ? `<br />
` : `<br>
`;
};
I.softbreak = function(r, i, e) {
  return e.breaks ? e.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
I.text = function(r, i) {
  return ve(r[i].content);
};
I.htmlblock = function(r, i) {
  return r[i].content;
};
I.htmltag = function(r, i) {
  return r[i].content;
};
I.abbr_open = function(r, i) {
  return '<abbr title="' + ve($e(r[i].title)) + '">';
};
I.abbr_close = function() {
  return "</abbr>";
};
I.footnote_ref = function(r, i) {
  var e = Number(r[i].id + 1).toString(), t = "fnref" + e;
  return r[i].subId > 0 && (t += ":" + r[i].subId), '<sup class="footnote-ref"><a href="#fn' + e + '" id="' + t + '">[' + e + "]</a></sup>";
};
I.footnote_block_open = function(r, i, e) {
  var t = e.xhtmlOut ? `<hr class="footnotes-sep" />
` : `<hr class="footnotes-sep">
`;
  return t + `<section class="footnotes">
<ol class="footnotes-list">
`;
};
I.footnote_block_close = function() {
  return `</ol>
</section>
`;
};
I.footnote_open = function(r, i) {
  var e = Number(r[i].id + 1).toString();
  return '<li id="fn' + e + '"  class="footnote-item">';
};
I.footnote_close = function() {
  return `</li>
`;
};
I.footnote_anchor = function(r, i) {
  var e = Number(r[i].id + 1).toString(), t = "fnref" + e;
  return r[i].subId > 0 && (t += ":" + r[i].subId), ' <a href="#' + t + '" class="footnote-backref">↩</a>';
};
I.dl_open = function() {
  return `<dl>
`;
};
I.dt_open = function() {
  return "<dt>";
};
I.dd_open = function() {
  return "<dd>";
};
I.dl_close = function() {
  return `</dl>
`;
};
I.dt_close = function() {
  return `</dt>
`;
};
I.dd_close = function() {
  return `</dd>
`;
};
function Ia(r, i) {
  return ++i >= r.length - 2 ? i : r[i].type === "paragraph_open" && r[i].tight && r[i + 1].type === "inline" && r[i + 1].content.length === 0 && r[i + 2].type === "paragraph_close" && r[i + 2].tight ? Ia(r, i + 2) : i;
}
var Ke = I.getBreak = function(r, i) {
  return i = Ia(r, i), i < r.length && r[i].type === "list_item_close" ? "" : `
`;
};
function tr() {
  this.rules = Aa({}, I), this.getBreak = I.getBreak;
}
tr.prototype.renderInline = function(r, i, e) {
  for (var t = this.rules, n = r.length, a = 0, s = ""; n--; ) s += t[r[a].type](r, a++, i, e, this);
  return s;
};
tr.prototype.render = function(r, i, e) {
  for (var t = this.rules, n = r.length, a = -1, s = ""; ++a < n; ) r[a].type === "inline" ? s += this.renderInline(r[a].children, i, e) : s += t[r[a].type](r, a, i, e, this);
  return s;
};
function Se() {
  this.__rules__ = [], this.__cache__ = null;
}
Se.prototype.__find__ = function(r) {
  for (var i = this.__rules__.length, e = -1; i--; ) if (this.__rules__[++e].name === r) return e;
  return -1;
};
Se.prototype.__compile__ = function() {
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
Se.prototype.at = function(r, i, e) {
  var t = this.__find__(r), n = e || {};
  if (t === -1) throw new Error("Parser rule not found: " + r);
  this.__rules__[t].fn = i, this.__rules__[t].alt = n.alt || [], this.__cache__ = null;
};
Se.prototype.before = function(r, i, e, t) {
  var n = this.__find__(r), a = t || {};
  if (n === -1) throw new Error("Parser rule not found: " + r);
  this.__rules__.splice(n, 0, {
    name: i,
    enabled: !0,
    fn: e,
    alt: a.alt || []
  }), this.__cache__ = null;
};
Se.prototype.after = function(r, i, e, t) {
  var n = this.__find__(r), a = t || {};
  if (n === -1) throw new Error("Parser rule not found: " + r);
  this.__rules__.splice(n + 1, 0, {
    name: i,
    enabled: !0,
    fn: e,
    alt: a.alt || []
  }), this.__cache__ = null;
};
Se.prototype.push = function(r, i, e) {
  var t = e || {};
  this.__rules__.push({
    name: r,
    enabled: !0,
    fn: i,
    alt: t.alt || []
  }), this.__cache__ = null;
};
Se.prototype.enable = function(r, i) {
  r = Array.isArray(r) ? r : [r], i && this.__rules__.forEach(function(e) {
    e.enabled = !1;
  }), r.forEach(function(e) {
    var t = this.__find__(e);
    if (t < 0) throw new Error("Rules manager: invalid rule name " + e);
    this.__rules__[t].enabled = !0;
  }, this), this.__cache__ = null;
};
Se.prototype.disable = function(r) {
  r = Array.isArray(r) ? r : [r], r.forEach(function(i) {
    var e = this.__find__(i);
    if (e < 0) throw new Error("Rules manager: invalid rule name " + i);
    this.__rules__[e].enabled = !1;
  }, this), this.__cache__ = null;
};
Se.prototype.getRules = function(r) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[r] || [];
};
function Ki(r) {
  r.inlineMode ? r.tokens.push({
    type: "inline",
    content: r.src.replace(/\n/g, " ").trim(),
    level: 0,
    lines: [0, 1],
    children: []
  }) : r.block.parse(r.src, r.options, r.env, r.tokens);
}
function Je(r, i, e, t, n) {
  this.src = r, this.env = t, this.options = e, this.parser = i, this.tokens = n, this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = [], this.isInLabel = !1, this.linkLevel = 0, this.linkContent = "", this.labelUnmatchedScopes = 0;
}
Je.prototype.pushPending = function() {
  this.tokens.push({
    type: "text",
    content: this.pending,
    level: this.pendingLevel
  }), this.pending = "";
};
Je.prototype.push = function(r) {
  this.pending && this.pushPending(), this.tokens.push(r), this.pendingLevel = this.level;
};
Je.prototype.cacheSet = function(r, i) {
  for (var e = this.cache.length; e <= r; e++) this.cache.push(0);
  this.cache[r] = i;
};
Je.prototype.cacheGet = function(r) {
  return r < this.cache.length ? this.cache[r] : 0;
};
function St(r, i) {
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
function Ji(r, i, e, t) {
  var n, a, s, o, l, u;
  if (r.charCodeAt(0) !== 42 || r.charCodeAt(1) !== 91 || r.indexOf("]:") === -1 || (n = new Je(r, i, e, t, []), a = St(n, 1), a < 0 || r.charCodeAt(a + 1) !== 58)) return -1;
  for (o = n.posMax, s = a + 2; s < o && n.src.charCodeAt(s) !== 10; s++) ;
  return l = r.slice(2, a), u = r.slice(a + 2, s).trim(), u.length === 0 ? -1 : (t.abbreviations || (t.abbreviations = {}), P(t.abbreviations[":" + l]) > "u" && (t.abbreviations[":" + l] = u), s);
}
function Yi(r) {
  var i = r.tokens, e, t, n, a;
  if (!r.inlineMode) {
    for (e = 1, t = i.length - 1; e < t; e++) if (i[e - 1].type === "paragraph_open" && i[e].type === "inline" && i[e + 1].type === "paragraph_close") {
      for (n = i[e].content; n.length && (a = Ji(n, r.inline, r.options, r.env), !(a < 0)); ) n = n.slice(a).trim();
      i[e].content = n, n.length || (i[e - 1].tight = !0, i[e + 1].tight = !0);
    }
  }
}
function Fn(r) {
  var i = $e(r);
  try {
    i = decodeURI(i);
  } catch {
  }
  return encodeURI(i);
}
function Ra(r, i) {
  var e, t, n, a = i, s = r.posMax;
  if (r.src.charCodeAt(i) === 60) {
    for (i++; i < s; ) {
      if (e = r.src.charCodeAt(i), e === 10) return !1;
      if (e === 62) return n = Fn(kt(r.src.slice(a + 1, i))), r.parser.validateLink(n) ? (r.pos = i + 1, r.linkContent = n, !0) : !1;
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
  return a === i || (n = kt(r.src.slice(a, i)), !r.parser.validateLink(n)) ? !1 : (r.linkContent = n, r.pos = i, !0);
}
function La(r, i) {
  var e, t = i, n = r.posMax, a = r.src.charCodeAt(i);
  if (a !== 34 && a !== 39 && a !== 40) return !1;
  for (i++, a === 40 && (a = 41); i < n; ) {
    if (e = r.src.charCodeAt(i), e === a) return r.pos = i + 1, r.linkContent = kt(r.src.slice(t + 1, i)), !0;
    if (e === 92 && i + 1 < n) {
      i += 2;
      continue;
    }
    i++;
  }
  return !1;
}
function Oa(r) {
  return r.trim().replace(/\s+/g, " ").toUpperCase();
}
function Xi(r, i, e, t) {
  var n, a, s, o, l, u, c, d, h;
  if (r.charCodeAt(0) !== 91 || r.indexOf("]:") === -1 || (n = new Je(r, i, e, t, []), a = St(n, 0), a < 0 || r.charCodeAt(a + 1) !== 58)) return -1;
  for (o = n.posMax, s = a + 2; s < o && (l = n.src.charCodeAt(s), !(l !== 32 && l !== 10)); s++) ;
  if (!Ra(n, s)) return -1;
  for (c = n.linkContent, s = n.pos, u = s, s = s + 1; s < o && (l = n.src.charCodeAt(s), !(l !== 32 && l !== 10)); s++) ;
  for (s < o && u !== s && La(n, s) ? (d = n.linkContent, s = n.pos) : (d = "", s = u); s < o && n.src.charCodeAt(s) === 32; ) s++;
  return s < o && n.src.charCodeAt(s) !== 10 ? -1 : (h = Oa(r.slice(1, a)), P(t.references[h]) > "u" && (t.references[h] = {
    title: d,
    href: c
  }), s);
}
function Zi(r) {
  var i = r.tokens, e, t, n, a;
  if (r.env.references = r.env.references || {}, !r.inlineMode) {
    for (e = 1, t = i.length - 1; e < t; e++) if (i[e].type === "inline" && i[e - 1].type === "paragraph_open" && i[e + 1].type === "paragraph_close") {
      for (n = i[e].content; n.length && (a = Xi(n, r.inline, r.options, r.env), !(a < 0)); ) n = n.slice(a).trim();
      i[e].content = n, n.length || (i[e - 1].tight = !0, i[e + 1].tight = !0);
    }
  }
}
function Qi(r) {
  var i = r.tokens, e, t, n;
  for (t = 0, n = i.length; t < n; t++) e = i[t], e.type === "inline" && r.inline.parse(e.content, r.options, r.env, e.children);
}
function es(r) {
  var i, e, t, n, a, s, o, l, u, c = 0, d = !1, h = {};
  if (r.env.footnotes && (r.tokens = r.tokens.filter(function(p) {
    return p.type === "footnote_reference_open" ? (d = !0, l = [], u = p.label, !1) : p.type === "footnote_reference_close" ? (d = !1, h[":" + u] = l, !1) : (d && l.push(p), !d);
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
      })) : s[i].label && (o = h[":" + s[i].label]), r.tokens = r.tokens.concat(o), r.tokens[r.tokens.length - 1].type === "paragraph_close" ? a = r.tokens.pop() : a = null, n = s[i].count > 0 ? s[i].count : 1, t = 0; t < n; t++) r.tokens.push({
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
var Lr = ` 
()[]'".,!?-`;
function yn(r) {
  return r.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1");
}
function ts(r) {
  var i, e, t, n, a, s, o, l, u, c, d, h, p = r.tokens;
  if (r.env.abbreviations) {
    for (r.env.abbrRegExp || (h = "(^|[" + Lr.split("").map(yn).join("") + "])(" + Object.keys(r.env.abbreviations).map(function(m) {
      return m.substr(1);
    }).sort(function(m, g) {
      return g.length - m.length;
    }).map(yn).join("|") + ")($|[" + Lr.split("").map(yn).join("") + "])", r.env.abbrRegExp = new RegExp(h, "g")), c = r.env.abbrRegExp, e = 0, t = p.length; e < t; e++) if (p[e].type === "inline") {
      for (n = p[e].children, i = n.length - 1; i >= 0; i--) if (a = n[i], a.type === "text") {
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
        }), p[e].children = n = [].concat(n.slice(0, i), o, n.slice(i + 1)));
      }
    }
  }
}
var ns = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, rs = /\((c|tm|r|p)\)/ig, as = {
  c: "©",
  r: "®",
  p: "§",
  tm: "™"
};
function is(r) {
  return r.indexOf("(") < 0 ? r : r.replace(rs, function(i, e) {
    return as[e.toLowerCase()];
  });
}
function ss(r) {
  var i, e, t, n, a;
  if (r.options.typographer) {
    for (a = r.tokens.length - 1; a >= 0; a--) if (r.tokens[a].type === "inline") for (n = r.tokens[a].children, i = n.length - 1; i >= 0; i--) e = n[i], e.type === "text" && (t = e.content, t = is(t), ns.test(t) && (t = t.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/mg, "$1—$2").replace(/(^|\s)--(\s|$)/mg, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/mg, "$1–$2")), e.content = t);
  }
}
var os = /['"]/, Or = /['"]/g, ls = /[-\s()\[\]]/, Pr = "’";
function Nr(r, i) {
  return i < 0 || i >= r.length ? !1 : !ls.test(r[i]);
}
function nt(r, i, e) {
  return r.substr(0, i) + e + r.substr(i + 1);
}
function us(r) {
  var i, e, t, n, a, s, o, l, u, c, d, h, p, m, g, k, _;
  if (r.options.typographer) {
    for (_ = [], g = r.tokens.length - 1; g >= 0; g--) if (r.tokens[g].type === "inline") {
      for (k = r.tokens[g].children, _.length = 0, i = 0; i < k.length; i++) if (e = k[i], !(e.type !== "text" || os.test(e.text))) {
        for (o = k[i].level, p = _.length - 1; p >= 0 && !(_[p].level <= o); p--) ;
        _.length = p + 1, t = e.content, a = 0, s = t.length;
        e: for (; a < s && (Or.lastIndex = a, n = Or.exec(t), !!n); ) {
          if (l = !Nr(t, n.index - 1), a = n.index + 1, m = n[0] === "'", u = !Nr(t, a), !u && !l) {
            m && (e.content = nt(e.content, n.index, Pr));
            continue;
          }
          if (d = !u, h = !l, h) {
            for (p = _.length - 1; p >= 0 && (c = _[p], !(_[p].level < o)); p--) if (c.single === m && _[p].level === o) {
              c = _[p], m ? (k[c.token].content = nt(k[c.token].content, c.pos, r.options.quotes[2]), e.content = nt(e.content, n.index, r.options.quotes[3])) : (k[c.token].content = nt(k[c.token].content, c.pos, r.options.quotes[0]), e.content = nt(e.content, n.index, r.options.quotes[1])), _.length = p;
              continue e;
            }
          }
          d ? _.push({
            token: i,
            pos: n.index,
            single: m,
            level: o
          }) : h && m && (e.content = nt(e.content, n.index, Pr));
        }
      }
    }
  }
}
var bn = [["block", Ki], ["abbr", Yi], ["references", Zi], ["inline", Qi], ["footnote_tail", es], ["abbr2", ts], ["replacements", ss], ["smartquotes", us]];
function Pa() {
  this.options = {}, this.ruler = new Se();
  for (var r = 0; r < bn.length; r++) this.ruler.push(bn[r][0], bn[r][1]);
}
Pa.prototype.process = function(r) {
  var i, e, t;
  for (t = this.ruler.getRules(""), i = 0, e = t.length; i < e; i++) t[i](r);
};
function Ye(r, i, e, t, n) {
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
Ye.prototype.isEmpty = function(r) {
  return this.bMarks[r] + this.tShift[r] >= this.eMarks[r];
};
Ye.prototype.skipEmptyLines = function(r) {
  for (var i = this.lineMax; r < i && !(this.bMarks[r] + this.tShift[r] < this.eMarks[r]); r++) ;
  return r;
};
Ye.prototype.skipSpaces = function(r) {
  for (var i = this.src.length; r < i && this.src.charCodeAt(r) === 32; r++) ;
  return r;
};
Ye.prototype.skipChars = function(r, i) {
  for (var e = this.src.length; r < e && this.src.charCodeAt(r) === i; r++) ;
  return r;
};
Ye.prototype.skipCharsBack = function(r, i, e) {
  if (r <= e) return r;
  for (; r > e; ) if (i !== this.src.charCodeAt(--r)) return r + 1;
  return r;
};
Ye.prototype.getLines = function(r, i, e, t) {
  var n, a, s, o, l, u = r;
  if (r >= i) return "";
  if (u + 1 === i) return a = this.bMarks[u] + Math.min(this.tShift[u], e), s = t ? this.eMarks[u] + 1 : this.eMarks[u], this.src.slice(a, s);
  for (o = new Array(i - r), n = 0; u < i; u++, n++) l = this.tShift[u], l > e && (l = e), l < 0 && (l = 0), a = this.bMarks[u] + l, u + 1 < i || t ? s = this.eMarks[u] + 1 : s = this.eMarks[u], o[n] = this.src.slice(a, s);
  return o.join("");
};
function cs(r, i, e) {
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
function ds(r, i, e, t) {
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
function hs(r, i, e, t) {
  var n, a, s, o, l, u, c, d, h, p, m, g = r.bMarks[i] + r.tShift[i], k = r.eMarks[i];
  if (g > k || r.src.charCodeAt(g++) !== 62 || r.level >= r.options.maxNesting) return !1;
  if (t) return !0;
  for (r.src.charCodeAt(g) === 32 && g++, l = r.blkIndent, r.blkIndent = 0, o = [r.bMarks[i]], r.bMarks[i] = g, g = g < k ? r.skipSpaces(g) : g, a = g >= k, s = [r.tShift[i]], r.tShift[i] = g - r.bMarks[i], d = r.parser.ruler.getRules("blockquote"), n = i + 1; n < e && (g = r.bMarks[n] + r.tShift[n], k = r.eMarks[n], !(g >= k)); n++) {
    if (r.src.charCodeAt(g++) === 62) {
      r.src.charCodeAt(g) === 32 && g++, o.push(r.bMarks[n]), r.bMarks[n] = g, g = g < k ? r.skipSpaces(g) : g, a = g >= k, s.push(r.tShift[n]), r.tShift[n] = g - r.bMarks[n];
      continue;
    }
    if (a) break;
    for (m = !1, h = 0, p = d.length; h < p; h++) if (d[h](r, n, e, !0)) {
      m = !0;
      break;
    }
    if (m) break;
    o.push(r.bMarks[n]), s.push(r.tShift[n]), r.tShift[n] = -1337;
  }
  for (u = r.parentType, r.parentType = "blockquote", r.tokens.push({
    type: "blockquote_open",
    lines: c = [i, 0],
    level: r.level++
  }), r.parser.tokenize(r, i, n), r.tokens.push({
    type: "blockquote_close",
    level: --r.level
  }), r.parentType = u, c[1] = r.line, h = 0; h < s.length; h++) r.bMarks[h + i] = o[h], r.tShift[h + i] = s[h];
  return r.blkIndent = l, !0;
}
function ps(r, i, e, t) {
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
function Dr(r, i) {
  var e, t, n;
  return t = r.bMarks[i] + r.tShift[i], n = r.eMarks[i], t >= n || (e = r.src.charCodeAt(t++), e !== 42 && e !== 45 && e !== 43) || t < n && r.src.charCodeAt(t) !== 32 ? -1 : t;
}
function Fr(r, i) {
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
function fs(r, i) {
  var e, t, n = r.level + 2;
  for (e = i + 2, t = r.tokens.length - 2; e < t; e++) r.tokens[e].level === n && r.tokens[e].type === "paragraph_open" && (r.tokens[e + 2].tight = !0, r.tokens[e].tight = !0, e += 2);
}
function ms(r, i, e, t) {
  var n, a, s, o, l, u, c, d, h, p, m, g, k, _, E, M, A, C, U = !0, Z, H, ie, te;
  if ((d = Fr(r, i)) >= 0) k = !0;
  else if ((d = Dr(r, i)) >= 0) k = !1;
  else return !1;
  if (r.level >= r.options.maxNesting) return !1;
  if (g = r.src.charCodeAt(d - 1), t) return !0;
  for (E = r.tokens.length, k ? (c = r.bMarks[i] + r.tShift[i], m = Number(r.src.substr(c, d - c - 1)), r.tokens.push({
    type: "ordered_list_open",
    order: m,
    lines: A = [i, 0],
    level: r.level++
  })) : r.tokens.push({
    type: "bullet_list_open",
    lines: A = [i, 0],
    level: r.level++
  }), n = i, M = !1, Z = r.parser.ruler.getRules("list"); n < e && (_ = r.skipSpaces(d), h = r.eMarks[n], _ >= h ? p = 1 : p = _ - d, p > 4 && (p = 1), p < 1 && (p = 1), a = d - r.bMarks[n] + p, r.tokens.push({
    type: "list_item_open",
    lines: C = [i, 0],
    level: r.level++
  }), o = r.blkIndent, l = r.tight, s = r.tShift[i], u = r.parentType, r.tShift[i] = _ - r.bMarks[i], r.blkIndent = a, r.tight = !0, r.parentType = "list", r.parser.tokenize(r, i, e, !0), (!r.tight || M) && (U = !1), M = r.line - i > 1 && r.isEmpty(r.line - 1), r.blkIndent = o, r.tShift[i] = s, r.tight = l, r.parentType = u, r.tokens.push({
    type: "list_item_close",
    level: --r.level
  }), n = i = r.line, C[1] = n, _ = r.bMarks[i], !(n >= e || r.isEmpty(n) || r.tShift[n] < r.blkIndent)); ) {
    for (te = !1, H = 0, ie = Z.length; H < ie; H++) if (Z[H](r, n, e, !0)) {
      te = !0;
      break;
    }
    if (te) break;
    if (k) {
      if (d = Fr(r, n), d < 0) break;
    } else if (d = Dr(r, n), d < 0) break;
    if (g !== r.src.charCodeAt(d - 1)) break;
  }
  return r.tokens.push({
    type: k ? "ordered_list_close" : "bullet_list_close",
    level: --r.level
  }), A[1] = n, r.line = n, U && fs(r, E), !0;
}
function vs(r, i, e, t) {
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
function gs(r, i, e, t) {
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
function ys(r, i, e) {
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
var Na = {};
["article", "aside", "button", "blockquote", "body", "canvas", "caption", "col", "colgroup", "dd", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "iframe", "li", "map", "object", "ol", "output", "p", "pre", "progress", "script", "section", "style", "table", "tbody", "td", "textarea", "tfoot", "th", "tr", "thead", "ul", "video"].forEach(function(r) {
  Na[r] = !0;
});
var bs = /^<([a-zA-Z]{1,15})[\s\/>]/, ks = /^<\/([a-zA-Z]{1,15})[\s>]/;
function Ss(r) {
  var i = r | 32;
  return i >= 97 && i <= 122;
}
function _s(r, i, e, t) {
  var n, a, s, o = r.bMarks[i], l = r.eMarks[i], u = r.tShift[i];
  if (o += u, !r.options.html || u > 3 || o + 2 >= l || r.src.charCodeAt(o) !== 60) return !1;
  if (n = r.src.charCodeAt(o + 1), n === 33 || n === 63) {
    if (t) return !0;
  } else if (n === 47 || Ss(n)) {
    if (n === 47) {
      if (a = r.src.slice(o, l).match(ks), !a) return !1;
    } else if (a = r.src.slice(o, l).match(bs), !a) return !1;
    if (Na[a[1].toLowerCase()] !== !0) return !1;
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
function kn(r, i) {
  var e = r.bMarks[i] + r.blkIndent, t = r.eMarks[i];
  return r.src.substr(e, t - e);
}
function Es(r, i, e, t) {
  var n, a, s, o, l, u, c, d, h, p, m;
  if (i + 2 > e || (l = i + 1, r.tShift[l] < r.blkIndent) || (s = r.bMarks[l] + r.tShift[l], s >= r.eMarks[l]) || (n = r.src.charCodeAt(s), n !== 124 && n !== 45 && n !== 58) || (a = kn(r, i + 1), !/^[-:| ]+$/.test(a)) || (u = a.split("|"), u <= 2)) return !1;
  for (d = [], o = 0; o < u.length; o++) {
    if (h = u[o].trim(), !h) {
      if (o === 0 || o === u.length - 1) continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(h)) return !1;
    h.charCodeAt(h.length - 1) === 58 ? d.push(h.charCodeAt(0) === 58 ? "center" : "right") : h.charCodeAt(0) === 58 ? d.push("left") : d.push("");
  }
  if (a = kn(r, i).trim(), a.indexOf("|") === -1 || (u = a.replace(/^\||\|$/g, "").split("|"), d.length !== u.length)) return !1;
  if (t) return !0;
  for (r.tokens.push({
    type: "table_open",
    lines: p = [i, 0],
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
    lines: m = [i + 2, 0],
    level: r.level++
  }), l = i + 2; l < e && !(r.tShift[l] < r.blkIndent || (a = kn(r, l).trim(), a.indexOf("|") === -1)); l++) {
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
  }), p[1] = m[1] = l, r.line = l, !0;
}
function Ot(r, i) {
  var e, t, n = r.bMarks[i] + r.tShift[i], a = r.eMarks[i];
  return n >= a || (t = r.src.charCodeAt(n++), t !== 126 && t !== 58) || (e = r.skipSpaces(n), n === e) || e >= a ? -1 : e;
}
function ws(r, i) {
  var e, t, n = r.level + 2;
  for (e = i + 2, t = r.tokens.length - 2; e < t; e++) r.tokens[e].level === n && r.tokens[e].type === "paragraph_open" && (r.tokens[e + 2].tight = !0, r.tokens[e].tight = !0, e += 2);
}
function Cs(r, i, e, t) {
  var n, a, s, o, l, u, c, d, h, p, m, g, k, _;
  if (t) return r.ddIndent < 0 ? !1 : Ot(r, i) >= 0;
  if (c = i + 1, r.isEmpty(c) && ++c > e || r.tShift[c] < r.blkIndent || (n = Ot(r, c), n < 0) || r.level >= r.options.maxNesting) return !1;
  u = r.tokens.length, r.tokens.push({
    type: "dl_open",
    lines: l = [i, 0],
    level: r.level++
  }), s = i, a = c;
  e: for (; ; ) {
    for (_ = !0, k = !1, r.tokens.push({
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
      }), g = r.tight, h = r.ddIndent, d = r.blkIndent, m = r.tShift[a], p = r.parentType, r.blkIndent = r.ddIndent = r.tShift[a] + 2, r.tShift[a] = n - r.bMarks[a], r.tight = !0, r.parentType = "deflist", r.parser.tokenize(r, a, e, !0), (!r.tight || k) && (_ = !1), k = r.line - a > 1 && r.isEmpty(r.line - 1), r.tShift[a] = m, r.tight = g, r.parentType = p, r.blkIndent = d, r.ddIndent = h, r.tokens.push({
        type: "dd_close",
        level: --r.level
      }), o[1] = c = r.line, c >= e || r.tShift[c] < r.blkIndent) break e;
      if (n = Ot(r, c), n < 0) break;
      a = c;
    }
    if (c >= e || (s = c, r.isEmpty(s)) || r.tShift[s] < r.blkIndent || (a = s + 1, a >= e) || (r.isEmpty(a) && a++, a >= e) || r.tShift[a] < r.blkIndent || (n = Ot(r, a), n < 0)) break;
  }
  return r.tokens.push({
    type: "dl_close",
    level: --r.level
  }), l[1] = c, r.line = c, _ && ws(r, u), !0;
}
function Ts(r, i) {
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
var Pt = [["code", cs], ["fences", ds, ["paragraph", "blockquote", "list"]], ["blockquote", hs, ["paragraph", "blockquote", "list"]], ["hr", ps, ["paragraph", "blockquote", "list"]], ["list", ms, ["paragraph", "blockquote"]], ["footnote", vs, ["paragraph"]], ["heading", gs, ["paragraph", "blockquote"]], ["lheading", ys], ["htmlblock", _s, ["paragraph", "blockquote"]], ["table", Es, ["paragraph"]], ["deflist", Cs, ["paragraph"]], ["paragraph", Ts]];
function nr() {
  this.ruler = new Se();
  for (var r = 0; r < Pt.length; r++) this.ruler.push(Pt[r][0], Pt[r][1], {
    alt: (Pt[r][2] || []).slice()
  });
}
nr.prototype.tokenize = function(r, i, e) {
  for (var t = this.ruler.getRules(""), n = t.length, a = i, s = !1, o, l; a < e && (r.line = a = r.skipEmptyLines(a), !(a >= e || r.tShift[a] < r.blkIndent)); ) {
    for (l = 0; l < n && (o = t[l](r, a, e, !1), !o); l++) ;
    if (r.tight = !s, r.isEmpty(r.line - 1) && (s = !0), a = r.line, a < e && r.isEmpty(a)) {
      if (s = !0, a++, a < e && r.parentType === "list" && r.isEmpty(a)) break;
      r.line = a;
    }
  }
};
var xs = /[\n\t]/g, As = /\r[\n\u0085]|[\u2424\u2028\u0085]/g, Ms = /\u00a0/g;
nr.prototype.parse = function(r, i, e, t) {
  var n, a = 0, s = 0;
  if (!r) return [];
  r = r.replace(Ms, " "), r = r.replace(As, `
`), r.indexOf("	") >= 0 && (r = r.replace(xs, function(o, l) {
    var u;
    return r.charCodeAt(l) === 10 ? (a = l + 1, s = 0, o) : (u = "    ".slice((l - a - s) % 4), s = l - a + 1, u);
  })), n = new Ye(r, this, i, e, t), this.tokenize(n, n.line, n.lineMax);
};
function Is(r) {
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
function Rs(r, i) {
  for (var e = r.pos; e < r.posMax && !Is(r.src.charCodeAt(e)); ) e++;
  return e === r.pos ? !1 : (i || (r.pending += r.src.slice(r.pos, e)), r.pos = e, !0);
}
function Ls(r, i) {
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
var rr = [];
for (var Br = 0; Br < 256; Br++) rr.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(r) {
  rr[r.charCodeAt(0)] = 1;
});
function Os(r, i) {
  var e, t = r.pos, n = r.posMax;
  if (r.src.charCodeAt(t) !== 92) return !1;
  if (t++, t < n) {
    if (e = r.src.charCodeAt(t), e < 256 && rr[e] !== 0) return i || (r.pending += r.src[t]), r.pos += 2, !0;
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
function Ps(r, i) {
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
function Ns(r, i) {
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
function Ds(r, i) {
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
function Fs(r, i) {
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
function jr(r) {
  return r >= 48 && r <= 57 || r >= 65 && r <= 90 || r >= 97 && r <= 122;
}
function Ur(r, i) {
  var e = i, t, n, a, s = !0, o = !0, l = r.posMax, u = r.src.charCodeAt(i);
  for (t = i > 0 ? r.src.charCodeAt(i - 1) : -1; e < l && r.src.charCodeAt(e) === u; ) e++;
  return e >= l && (s = !1), a = e - i, a >= 4 ? s = o = !1 : (n = e < l ? r.src.charCodeAt(e) : -1, (n === 32 || n === 10) && (s = !1), (t === 32 || t === 10) && (o = !1), u === 95 && (jr(t) && (s = !1), jr(n) && (o = !1))), {
    can_open: s,
    can_close: o,
    delims: a
  };
}
function Bs(r, i) {
  var e, t, n, a, s, o, l, u = r.posMax, c = r.pos, d = r.src.charCodeAt(c);
  if (d !== 95 && d !== 42 || i) return !1;
  if (l = Ur(r, c), e = l.delims, !l.can_open) return r.pos += e, i || (r.pending += r.src.slice(c, r.pos)), !0;
  if (r.level >= r.options.maxNesting) return !1;
  for (r.pos = c + e, o = [e]; r.pos < u; ) {
    if (r.src.charCodeAt(r.pos) === d) {
      if (l = Ur(r, r.pos), t = l.delims, l.can_close) {
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
var js = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
function Us(r, i) {
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
    content: t.replace(js, "$1")
  }), r.pos = r.posMax + 1, r.posMax = n, !0);
}
var Hs = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
function qs(r, i) {
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
    content: t.replace(Hs, "$1")
  }), r.pos = r.posMax + 1, r.posMax = n, !0);
}
function zs(r, i) {
  var e, t, n, a, s, o, l, u, c = !1, d = r.pos, h = r.posMax, p = r.pos, m = r.src.charCodeAt(p);
  if (m === 33 && (c = !0, m = r.src.charCodeAt(++p)), m !== 91 || r.level >= r.options.maxNesting || (e = p + 1, t = St(r, p), t < 0)) return !1;
  if (o = t + 1, o < h && r.src.charCodeAt(o) === 40) {
    for (o++; o < h && (u = r.src.charCodeAt(o), !(u !== 32 && u !== 10)); o++) ;
    if (o >= h) return !1;
    for (p = o, Ra(r, o) ? (a = r.linkContent, o = r.pos) : a = "", p = o; o < h && (u = r.src.charCodeAt(o), !(u !== 32 && u !== 10)); o++) ;
    if (o < h && p !== o && La(r, o)) for (s = r.linkContent, o = r.pos; o < h && (u = r.src.charCodeAt(o), !(u !== 32 && u !== 10)); o++) ;
    else s = "";
    if (o >= h || r.src.charCodeAt(o) !== 41) return r.pos = d, !1;
    o++;
  } else {
    if (r.linkLevel > 0) return !1;
    for (; o < h && (u = r.src.charCodeAt(o), !(u !== 32 && u !== 10)); o++) ;
    if (o < h && r.src.charCodeAt(o) === 91 && (p = o + 1, o = St(r, o), o >= 0 ? n = r.src.slice(p, o++) : o = p - 1), n || (P(n) > "u" && (o = t + 1), n = r.src.slice(e, t)), l = r.env.references[Oa(n)], !l) return r.pos = d, !1;
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
  }))), r.pos = o, r.posMax = h, !0;
}
function Vs(r, i) {
  var e, t, n, a, s = r.posMax, o = r.pos;
  return o + 2 >= s || r.src.charCodeAt(o) !== 94 || r.src.charCodeAt(o + 1) !== 91 || r.level >= r.options.maxNesting || (e = o + 2, t = St(r, o + 1), t < 0) ? !1 : (i || (r.env.footnotes || (r.env.footnotes = {}), r.env.footnotes.list || (r.env.footnotes.list = []), n = r.env.footnotes.list.length, r.pos = e, r.posMax = t, r.push({
    type: "footnote_ref",
    id: n,
    level: r.level
  }), r.linkLevel++, a = r.tokens.length, r.parser.tokenize(r), r.env.footnotes.list[n] = {
    tokens: r.tokens.splice(a)
  }, r.linkLevel--), r.pos = t + 1, r.posMax = s, !0);
}
function Gs(r, i) {
  var e, t, n, a, s = r.posMax, o = r.pos;
  if (o + 3 > s || !r.env.footnotes || !r.env.footnotes.refs || r.src.charCodeAt(o) !== 91 || r.src.charCodeAt(o + 1) !== 94 || r.level >= r.options.maxNesting) return !1;
  for (t = o + 2; t < s; t++) {
    if (r.src.charCodeAt(t) === 32 || r.src.charCodeAt(t) === 10) return !1;
    if (r.src.charCodeAt(t) === 93) break;
  }
  return t === o + 2 || t >= s || (t++, e = r.src.slice(o + 2, t - 1), P(r.env.footnotes.refs[":" + e]) > "u") ? !1 : (i || (r.env.footnotes.list || (r.env.footnotes.list = []), r.env.footnotes.refs[":" + e] < 0 ? (n = r.env.footnotes.list.length, r.env.footnotes.list[n] = {
    label: e,
    count: 0
  }, r.env.footnotes.refs[":" + e] = n) : n = r.env.footnotes.refs[":" + e], a = r.env.footnotes.list[n].count, r.env.footnotes.list[n].count++, r.push({
    type: "footnote_ref",
    id: n,
    subId: a,
    level: r.level
  })), r.pos = t, r.posMax = s, !0);
}
var $s = ["coap", "doi", "javascript", "aaa", "aaas", "about", "acap", "cap", "cid", "crid", "data", "dav", "dict", "dns", "file", "ftp", "geo", "go", "gopher", "h323", "http", "https", "iax", "icap", "im", "imap", "info", "ipp", "iris", "iris.beep", "iris.xpc", "iris.xpcs", "iris.lwz", "ldap", "mailto", "mid", "msrp", "msrps", "mtqp", "mupdate", "news", "nfs", "ni", "nih", "nntp", "opaquelocktoken", "pop", "pres", "rtsp", "service", "session", "shttp", "sieve", "sip", "sips", "sms", "snmp", "soap.beep", "soap.beeps", "tag", "tel", "telnet", "tftp", "thismessage", "tn3270", "tip", "tv", "urn", "vemmi", "ws", "wss", "xcon", "xcon-userid", "xmlrpc.beep", "xmlrpc.beeps", "xmpp", "z39.50r", "z39.50s", "adiumxtra", "afp", "afs", "aim", "apt", "attachment", "aw", "beshare", "bitcoin", "bolo", "callto", "chrome", "chrome-extension", "com-eventbrite-attendee", "content", "cvs", "dlna-playsingle", "dlna-playcontainer", "dtn", "dvb", "ed2k", "facetime", "feed", "finger", "fish", "gg", "git", "gizmoproject", "gtalk", "hcp", "icon", "ipn", "irc", "irc6", "ircs", "itms", "jar", "jms", "keyparc", "lastfm", "ldaps", "magnet", "maps", "market", "message", "mms", "ms-help", "msnim", "mumble", "mvn", "notes", "oid", "palm", "paparazzi", "platform", "proxy", "psyc", "query", "res", "resource", "rmi", "rsync", "rtmp", "secondlife", "sftp", "sgn", "skype", "smb", "soldat", "spotify", "ssh", "steam", "svn", "teamspeak", "things", "udp", "unreal", "ut2004", "ventrilo", "view-source", "webcal", "wtai", "wyciwyg", "xfire", "xri", "ymsgr"], Ws = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/, Ks = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;
function Js(r, i) {
  var e, t, n, a, s, o = r.pos;
  return r.src.charCodeAt(o) !== 60 || (e = r.src.slice(o), e.indexOf(">") < 0) ? !1 : (t = e.match(Ks), t ? $s.indexOf(t[1].toLowerCase()) < 0 || (a = t[0].slice(1, -1), s = Fn(a), !r.parser.validateLink(a)) ? !1 : (i || (r.push({
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
  })), r.pos += t[0].length, !0) : (n = e.match(Ws), n ? (a = n[0].slice(1, -1), s = Fn("mailto:" + a), r.parser.validateLink(s) ? (i || (r.push({
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
function Jt(r, i) {
  return r = r.source, i = i || "", function e(t, n) {
    return t ? (n = n.source || n, r = r.replace(t, n), e) : new RegExp(r, i);
  };
}
var Ys = /[a-zA-Z_:][a-zA-Z0-9:._-]*/, Xs = /[^"'=<>`\x00-\x20]+/, Zs = /'[^']*'/, Qs = /"[^"]*"/, eo = Jt(/(?:unquoted|single_quoted|double_quoted)/)("unquoted", Xs)("single_quoted", Zs)("double_quoted", Qs)(), to = Jt(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)("attr_name", Ys)("attr_value", eo)(), no = Jt(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)("attribute", to)(), ro = /<\/[A-Za-z][A-Za-z0-9]*\s*>/, ao = /<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->/, io = /<[?].*?[?]>/, so = /<![A-Z]+\s+[^>]*>/, oo = /<!\[CDATA\[[\s\S]*?\]\]>/, lo = Jt(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)("open_tag", no)("close_tag", ro)("comment", ao)("processing", io)("declaration", so)("cdata", oo)();
function uo(r) {
  var i = r | 32;
  return i >= 97 && i <= 122;
}
function co(r, i) {
  var e, t, n, a = r.pos;
  return !r.options.html || (n = r.posMax, r.src.charCodeAt(a) !== 60 || a + 2 >= n) || (e = r.src.charCodeAt(a + 1), e !== 33 && e !== 63 && e !== 47 && !uo(e)) || (t = r.src.slice(a).match(lo), !t) ? !1 : (i || r.push({
    type: "htmltag",
    content: r.src.slice(a, a + t[0].length),
    level: r.level
  }), r.pos += t[0].length, !0);
}
var ho = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i, po = /^&([a-z][a-z0-9]{1,31});/i;
function fo(r, i) {
  var e, t, n, a = r.pos, s = r.posMax;
  if (r.src.charCodeAt(a) !== 38) return !1;
  if (a + 1 < s) {
    if (e = r.src.charCodeAt(a + 1), e === 35) {
      if (n = r.src.slice(a).match(ho), n) return i || (t = n[1][0].toLowerCase() === "x" ? parseInt(n[1].slice(1), 16) : parseInt(n[1], 10), r.pending += Ma(t) ? Dn(t) : Dn(65533)), r.pos += n[0].length, !0;
    } else if (n = r.src.slice(a).match(po), n) {
      var o = xa(n[1]);
      if (n[1] !== o) return i || (r.pending += o), r.pos += n[0].length, !0;
    }
  }
  return i || (r.pending += "&"), r.pos++, !0;
}
var Sn = [["text", Rs], ["newline", Ls], ["escape", Os], ["backticks", Ps], ["del", Ns], ["ins", Ds], ["mark", Fs], ["emphasis", Bs], ["sub", Us], ["sup", qs], ["links", zs], ["footnote_inline", Vs], ["footnote_ref", Gs], ["autolink", Js], ["htmltag", co], ["entity", fo]];
function Yt() {
  this.ruler = new Se();
  for (var r = 0; r < Sn.length; r++) this.ruler.push(Sn[r][0], Sn[r][1]);
  this.validateLink = mo;
}
Yt.prototype.skipToken = function(r) {
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
Yt.prototype.tokenize = function(r) {
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
Yt.prototype.parse = function(r, i, e, t) {
  var n = new Je(r, this, i, e, t);
  this.tokenize(n);
};
function mo(r) {
  var i = ["vbscript", "javascript", "file", "data"], e = r.trim().toLowerCase();
  return e = $e(e), !(e.indexOf(":") !== -1 && i.indexOf(e.split(":")[0]) !== -1);
}
var vo = {
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
}, go = {
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
}, yo = {
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
}, bo = {
  default: vo,
  full: go,
  commonmark: yo
};
function Da(r, i, e) {
  this.src = i, this.env = e, this.options = r.options, this.tokens = [], this.inlineMode = !1, this.inline = r.inline, this.block = r.block, this.renderer = r.renderer, this.typographer = r.typographer;
}
function Me(r, i) {
  typeof r != "string" && (i = r, r = "default"), i && i.linkify != null && console.warn(`linkify option is removed. Use linkify plugin instead:

import Remarkable from 'remarkable';
import linkify from 'remarkable/linkify';
new Remarkable().use(linkify)
`), this.inline = new Yt(), this.block = new nr(), this.core = new Pa(), this.renderer = new tr(), this.ruler = new Se(), this.options = {}, this.configure(bo[r]), this.set(i || {});
}
Me.prototype.set = function(r) {
  Aa(this.options, r);
};
Me.prototype.configure = function(r) {
  var i = this;
  if (!r) throw new Error("Wrong `remarkable` preset, check name/content");
  r.options && i.set(r.options), r.components && Object.keys(r.components).forEach(function(e) {
    r.components[e].rules && i[e].ruler.enable(r.components[e].rules, !0);
  });
};
Me.prototype.use = function(r, i) {
  return r(this, i), this;
};
Me.prototype.parse = function(r, i) {
  var e = new Da(this, r, i);
  return this.core.process(e), e.tokens;
};
Me.prototype.render = function(r, i) {
  return i = i || {}, this.renderer.render(this.parse(r, i), this.options, i);
};
Me.prototype.parseInline = function(r, i) {
  var e = new Da(this, r, i);
  return e.inlineMode = !0, this.core.process(e), e.tokens;
};
Me.prototype.renderInline = function(r, i) {
  return i = i || {}, this.renderer.render(this.parseInline(r, i), this.options, i);
};
var Fa = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "instantiate",
    value: function(e) {
      if (e) return new Me(J(J({}, r.DEFAULT_PROPERTIES), e));
      if (window.hljs) {
        var t = window.hljs;
        return new Me({
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
      } else return new Me(r.DEFAULT_PROPERTIES);
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
Fa.DEFAULT_PROPERTIES = {
  breaks: !0,
  linkTarget: "_blank"
  // set target to open in a new tab
};
var Bn = Fa, Ft = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
      a && (r.applyCustomStylesToElements(e, n, a.shared), t === D.USER_ROLE ? r.applyCustomStylesToElements(e, n, a.user) : (r.applyCustomStylesToElements(e, n, a.ai), r.applyCustomStylesToElements(e, n, a[t])));
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
}(), Gt = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "onMessage",
    value: function(e, t, n) {
      var a, s = JSON.parse(JSON.stringify({
        message: t,
        isHistory: n,
        isInitial: n
      }));
      me.reAddFileRefToObject(t, s), (a = e.onMessage) == null || a.call(e, s), e.dispatchEvent(new CustomEvent("message", {
        detail: s
      })), ge.fireOnNewMessage(e, s);
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
}(), Bt = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "generateLoadingRingElement",
    value: function() {
      var e = document.createElement("div");
      return e.classList.add("loading-history"), e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), e;
    }
  }, {
    key: "apply",
    value: function(e, t, n) {
      qe.setRing(t.bubbleElement, n == null ? void 0 : n.bubble), n != null && n.bubble && (n = JSON.parse(JSON.stringify(n)), delete n.bubble), e.applyCustomStyles(t, "history", !1, n);
    }
  }, {
    key: "addLoadHistoryMessage",
    value: function(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, a, s, o, l, u, c, d, h;
      e.bubbleElement.classList.add(r.CLASS);
      var p = n ? r.FULL_VIEW_CLASS : r.SMALL_CLASS;
      e.outerContainer.classList.add(p);
      var m = n ? (l = (o = (s = (a = t.messageStyles) == null ? void 0 : a.loading) == null ? void 0 : s.history) == null ? void 0 : o.full) == null ? void 0 : l.styles : (h = (d = (c = (u = t.messageStyles) == null ? void 0 : u.loading) == null ? void 0 : c.history) == null ? void 0 : d.small) == null ? void 0 : h.styles;
      r.apply(t, e, m), t.elementRef.prepend(e.outerContainer);
    }
  }, {
    key: "createDefaultElements",
    value: function(e) {
      var t = e.createMessageElements("", D.AI_ROLE), n = t.bubbleElement, a = r.generateLoadingRingElement();
      return n.appendChild(a), t;
    }
  }, {
    key: "addMessage",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n, a, s, o, l = (o = (s = (a = (n = e.messageStyles) == null ? void 0 : n.loading) == null ? void 0 : a.history) == null ? void 0 : s.full) == null ? void 0 : o.html, u = l ? Oe.createElements(e, l, D.AI_ROLE, !0) : r.createDefaultElements(e);
      return r.addLoadHistoryMessage(u, e, t), u;
    }
  }, {
    key: "tryChangeViewToSmall",
    value: function(e, t) {
      var n, a, s, o, l, u, c, d;
      if (t != null && t.outerContainer.classList.contains(r.FULL_VIEW_CLASS)) {
        t.outerContainer.classList.replace(r.FULL_VIEW_CLASS, r.SMALL_CLASS);
        var h = (o = (s = (a = (n = e.messageStyles) == null ? void 0 : n.loading) == null ? void 0 : a.history) == null ? void 0 : s.small) == null ? void 0 : o.styles;
        h && r.apply(e, t, h);
        var p = (d = (c = (u = (l = e.messageStyles) == null ? void 0 : l.loading) == null ? void 0 : u.history) == null ? void 0 : c.small) == null ? void 0 : d.html;
        return p && (t.bubbleElement.innerHTML = p), !0;
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
Bt.CLASS = "loading-history-message", Bt.FULL_VIEW_CLASS = "loading-history-message-full-view", Bt.SMALL_CLASS = "loading-history-message-small";
var ze = Bt, jn = /* @__PURE__ */ function() {
  function r(i) {
    var e = this;
    y(this, r), this.messageElementRefs = [], this.htmlClassUtilities = {}, this.messageToElements = [], this.elementRef = r.createContainerElement(), this.messageStyles = ge.processMessageStyles(i.messageStyles), this._remarkable = Bn.createNew(i.remarkable), this._avatars = i.avatars, this._names = i.names, this._onMessage = Gt.onMessage.bind(this, i), i.htmlClassUtilities && (this.htmlClassUtilities = i.htmlClassUtilities), setTimeout(function() {
      e.submitUserMessage = i.submitUserMessage;
    });
  }
  return b(r, [{
    key: "addNewTextMessage",
    value: function(e, t, n) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      if (n != null && n.status) {
        var s = this.overwriteText(t, e, this.messageElementRefs);
        if (s) return s;
        n.status = !1;
      }
      var o = a ? this.createAndPrependNewMessageElement(e, t, a) : this.createAndAppendNewMessageElement(e, t);
      return o.bubbleElement.classList.add(r.TEXT_BUBBLE_CLASS), this.applyCustomStyles(o, t, !1), D.fillEmptyMessageElement(o.bubbleElement, e), o;
    }
    // prettier-ignore
  }, {
    key: "overwriteText",
    value: function(e, t, n) {
      var a = D.overwriteMessage(this.messageToElements, n, t, e, "text", r.TEXT_BUBBLE_CLASS);
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
        return _e.scrollToBottom(n.elementRef);
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
      return ze.changeFullViewToSmall(this), r.isTemporaryElement(s) && (this.revealRoleElementsIfTempRemoved(s, t), s.outerContainer.remove(), this.messageElementRefs.pop()), this.createMessageElements(e, t, n);
    }
    // this can be tested by having an ai message, then a temp ai message with html that submits new user message:
    // https://github.com/OvidijusParsiunas/deep-chat/issues/258
    // prettier-ignore
  }, {
    key: "revealRoleElementsIfTempRemoved",
    value: function(e, t) {
      if ((this._avatars || this._names) && bt.isElementTemporary(e)) {
        var n = this.messageElementRefs[this.messageElementRefs.length - 2];
        n && this.messageToElements.length > 0 && !e.bubbleElement.classList.contains(D.getRoleClass(t)) && D.revealRoleElements(n.innerContainer, this._avatars, this._names);
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
      return D.updateRefArr(this.messageElementRefs, a, n), D.classifyMessages(t, this.messageElementRefs), a;
    }
  }, {
    key: "addInnerContainerElements",
    value: (
      // prettier-ignore
      function(e, t, n) {
        var a;
        return ((a = this.messageToElements[this.messageToElements.length - 1]) == null ? void 0 : a[0].role) === n && !this.isLastMessageError() && D.hideRoleElements(this.messageElementRefs, !!this._avatars, !!this._names), e.classList.add("message-bubble", D.getRoleClass(n), n === D.USER_ROLE ? "user-message-text" : "ai-message-text"), this.renderText(e, t), D.addRoleElements(e, n, this._avatars, this._names), {
          bubbleElement: e
        };
      }
    )
    // prettier-ignore
  }, {
    key: "applyCustomStyles",
    value: function(e, t, n, a) {
      e && this.messageStyles && Ft.applyCustomStyles(this.messageStyles, e, t, n, a);
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
      return (e = D.getLastMessageBubbleElement(this.elementRef)) == null ? void 0 : e.classList.contains("error-message-text");
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
      this._remarkable = Bn.createNew(e), this.messageToElements.forEach(function(n) {
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
      return r.isLoadingMessage(e) || bt.isElementTemporary(e);
    }
  }, {
    key: "createBaseElements",
    value: function(e) {
      var t = document.createElement("div"), n = document.createElement("div");
      n.classList.add("inner-message-container"), t.appendChild(n), t.classList.add("outer-message-container"), t.classList.add(D.buildRoleContainerClass(e));
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
        role: o || D.AI_ROLE
      };
      return t && (l.text = t), n && (l.files = n), a && (l.html = a), !t && !n && !a && (l.text = ""), s && (l._sessionId = s), l;
    }
  }, {
    key: "isLoadingMessage",
    value: function(e) {
      return e == null ? void 0 : e.bubbleElement.classList.contains(qe.BUBBLE_CLASS);
    }
  }]);
}();
jn.TEXT_BUBBLE_CLASS = "text-message", jn.INTRO_CLASS = "deep-chat-intro";
var Ve = jn, ko = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3csvg%20fill='%23000000'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2032%2032'%20xml:space='preserve'%3e%3cpath%20d='M23,30.36H9c-2.404,0-4.36-1.956-4.36-4.36V15c0-2.404,1.956-4.36,4.36-4.36h3.659%20c0.167-1.566,1.415-2.813,2.981-2.981V5.333c-1.131-0.174-2-1.154-2-2.333c0-1.301,1.059-2.36,2.36-2.36%20c1.302,0,2.36,1.059,2.36,2.36c0,1.179-0.869,2.159-2,2.333V7.66c1.566,0.167,2.814,1.415,2.981,2.981H23%20c2.404,0,4.36,1.956,4.36,4.36v11C27.36,28.404,25.404,30.36,23,30.36z%20M9,11.36c-2.007,0-3.64,1.633-3.64,3.64v11%20c0,2.007,1.633,3.64,3.64,3.64h14c2.007,0,3.64-1.633,3.64-3.64V15c0-2.007-1.633-3.64-3.64-3.64H9z%20M13.384,10.64h5.231%20C18.439,9.354,17.334,8.36,16,8.36C14.667,8.36,13.561,9.354,13.384,10.64z%20M16,1.36c-0.904,0-1.64,0.736-1.64,1.64%20S15.096,4.64,16,4.64c0.904,0,1.64-0.736,1.64-1.64S16.904,1.36,16,1.36z%20M20,27.36h-8c-1.301,0-2.36-1.059-2.36-2.36%20s1.059-2.36,2.36-2.36h8c1.302,0,2.36,1.059,2.36,2.36S21.302,27.36,20,27.36z%20M12,23.36c-0.904,0-1.64,0.735-1.64,1.64%20s0.736,1.64,1.64,1.64h8c0.904,0,1.64-0.735,1.64-1.64s-0.735-1.64-1.64-1.64H12z%20M31,23.86h-2c-0.199,0-0.36-0.161-0.36-0.36V15%20c0-0.199,0.161-0.36,0.36-0.36h2c0.199,0,0.36,0.161,0.36,0.36v8.5C31.36,23.699,31.199,23.86,31,23.86z%20M29.36,23.14h1.279v-7.78%20H29.36V23.14z%20M3,23.86H1c-0.199,0-0.36-0.161-0.36-0.36V15c0-0.199,0.161-0.36,0.36-0.36h2c0.199,0,0.36,0.161,0.36,0.36v8.5%20C3.36,23.699,3.199,23.86,3,23.86z%20M1.36,23.14h1.28v-7.78H1.36V23.14z%20M20,20.36c-1.302,0-2.36-1.059-2.36-2.36%20s1.059-2.36,2.36-2.36s2.36,1.059,2.36,2.36C22.36,19.302,21.302,20.36,20,20.36z%20M20,16.36c-0.904,0-1.64,0.736-1.64,1.64%20s0.735,1.64,1.64,1.64s1.64-0.735,1.64-1.64S20.904,16.36,20,16.36z%20M12,20.36c-1.301,0-2.36-1.059-2.36-2.36s1.059-2.36,2.36-2.36%20s2.36,1.059,2.36,2.36C14.36,19.302,13.301,20.36,12,20.36z%20M12,16.36c-0.904,0-1.64,0.736-1.64,1.64s0.736,1.64,1.64,1.64%20s1.64-0.735,1.64-1.64S12.904,16.36,12,16.36z'/%3e%3crect%20style='fill:none;'%20width='32'%20height='32'/%3e%3c/svg%3e", So = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAMAAAC/MqoPAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAADNQTFRF////9vX18vLy/Pz86enp4+Li2tnZ1tbWzczM+fn57Ozs4N/f09LS0M/P5uXl7+/v3dzcwtncCAAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAAEgAAABIAEbJaz4AAAZNSURBVHja7d3bdtsqEABQYABZSLH9/3+ZpnUsIcF5iOM6PfElNoMHMfPQdq3GmL0GkLhEUqLaUExnOtOZznSmM53pTGc605nOdKYznelMZzrTmV4LXSqllKyJDkob26xWq8Zae/iH0QoWTm9d1xur4WuypQJtTd+5dqn0VjcxzNO5/57mEBvdLo8Oron6aseWOjYOFkVvjQs3DmgyONMuht52EfztP+4hdu0i6LCO808/M8c1lE/fuPGej41uUzgdtoO/75N+2ELJ9I3b3//hPXbiMenm3pR/Jt4USgcLBIp4Bh10gqKVhvLo0klCxeSky96nKcj3siw6pJIL4XsoiQ7apyvMY/V3HHrSRioLopvEhSpTCn2TPEuwKYMOIX0tAxRBf/Hpa+lfSqBv9gi1FPsNfTrMAiVmIE/vJhz61FGnQxRIEYE4vfNYdN8Rp6MlHaHotHTn8ejekaZPAjEmyvQWdZFTtYTpXqCGJ0zvcek9Yfoel76nS0ffv1NMp1ca+pkgyfRCGind4L7OWWc605l+cxjsyhqy9AGbPpClc1/nvl5VX0c/3Alk6RU3+Am7shNZ+h6bvidLr7jBB+zKBrL0irOOudmIUDzTmf5gIP+iEuXtRuTVaEmY/oZLfyNMrzjryPc0gerMTdpVg0tvjJUU6bLPcGOoUv46SLL6Wi8yhLf06C7TUyekI0efRaaYqdFltkeNpPumRPSMDxgBYvSM035FrKAmH72hRW99PrpvSdEHkTEGUvSsK3yKVDkuJ92RohcZaehzzirPpOg+J92Tolfc4Cumx5xVXpGiZ34+ICX6W84qv5GiR5NPbiIpOv6BCoSvSkTX+eiaGP092zINvBOj4x8mSf9FqejvNo/cvpOji19ZbmviL0GPLsYMFzgzCor0+Bv/ePDvSJKOb9dJ5UlnbnEHiHgzv6cdTpJOWuc/u3FEucLDOL75xGtBiefrcwgoC9NDSH/jkH6pAuXmBqPQ9HSUPVdZBH1GGOrMXAQdYxcKZfxAoK+KKBKFLosoEoX+u4giUehz8jlcnAuhp78I46yDYNAd+QLR6K+pr+yvxdBTHyVDubQh0UfSxaHSd0lbvNkVRE87JGOtc+PQd2QLQ6fHhJkKsSh6yg13tO08JPprsgrrXWH0dJd2vH1MLPprot4eXoujpzrdhngiD40ek2y92lggPcnWa8qN1Yz0BFuvZhRl0uOfR0v4Ewuli/Bg4Qr3lArqGdndQ3UPO1EunXYwnelMZzrTmc50pjOd6UxnOtOZznSmM53pTGf6kuj6oedFKV0s3fX6sX1S3bsi6a4PD7+/YAqYeBw6pIB/4qEgOqxdSPbGiim4NRRCbzs3Jj0L4UfXtQXQVRfn5IdA/Bw7RZzurEV6EtdsLeGXkIPuA+K1UoVeA0l62zmN/LqfSSft9KkepmoRuvi3nd5uKNFB9zbbXEANqdr941XO0NJx2v2jdJenpf+/3bvn0ts16ph+sd6hX7dPo2+2cZzE02Ia43bzDHqr+2Evnhz74ZHU30ffbKOeng1/NPV30Ns1gYQnSP2P6e65Pfxc6h02XZqXQCjhJ6kPL6bFo4NrGvAU4UII4SE2P1vQuZkuOxckVfehisF1MjUddN/MZBN+kvq5uf0O/xa66gyNS9ktMWlz44rO1Z8C19i5FPdHzPamXn+F3hryPfxMr78+4F+kq22kO6Rf6fUQt+puuustyWv4rbG3l/duztFB96GYoe1cTBdXMr+nw9qVM6ZfxOvzezff0nXi/ZOndvrR6Zvpm0c3h6nhdb+5iS7tsIim/qXZD9+97/Jf+rpZ5BET1ayv0GUzLhEuhBBjIy/RdVPgndutIRt9nt7p5cKFEEJ3Z+jQFDZL+XnMDXxHB73gxn5s9Kc3d3/pFciFkN/QTSXHJpX5l66gDrkQoP6hL3xsPw39la4qOiV8tH78XeSbue6N9mvWa6J/ybpc1CT1Wnh5Qq9meP8IOKH3ddH7E/ri1iYux/SXDrXR4UiPdck/wUpU+FtPf6/orja6O9KL3l56LOvVxe5Ib2qjN0d6Vbex4ghWlU3bPqI90If66MNng680FNpbJijH6kCvaF3uMzQ3+IrpFerV4Y9dffQdN3im10ivbuImhD3Qq5u4HdZkua8znelMZ/pS4z9CPVKkxowNxgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wMy0yN1QxNTo0NToxNSswMDowMN1xSg4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDMtMjdUMTU6NDU6MTUrMDA6MDCsLPKyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg==", Ba = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
      if ((s = n.default) != null && s.styles && r.applyCustomStylesToElements(e, t, n.default.styles), a === D.USER_ROLE) (o = n.user) != null && o.styles && r.applyCustomStylesToElements(e, t, n.user.styles);
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
      e === D.USER_ROLE ? u.src = ((n = t == null ? void 0 : t.user) == null ? void 0 : n.src) || ((a = t == null ? void 0 : t.default) == null ? void 0 : a.src) || So : u.src = ((s = t == null ? void 0 : t[e]) == null ? void 0 : s.src) || ((o = t == null ? void 0 : t.ai) == null ? void 0 : o.src) || ((l = t == null ? void 0 : t.default) == null ? void 0 : l.src) || ko, u.classList.add("avatar"), u.alt = "".concat(e, " avatar");
      var c = document.createElement("div");
      return c.classList.add(r.CONTAINER_CLASS), c.appendChild(u), t && r.applyCustomStyles(c, u, t, e), c;
    }
  }, {
    key: "getPosition",
    value: function(e, t) {
      var n, a, s, o, l, u, c, d, h, p = (l = (o = t == null ? void 0 : t[e]) == null ? void 0 : o.styles) == null ? void 0 : l.position;
      return e !== D.USER_ROLE && ((n = p) !== null && n !== void 0 || (p = (c = (u = t == null ? void 0 : t.ai) == null ? void 0 : u.styles) == null ? void 0 : c.position)), (a = p) !== null && a !== void 0 || (p = (h = (d = t == null ? void 0 : t.default) == null ? void 0 : d.styles) == null ? void 0 : h.position), (s = p) !== null && s !== void 0 || (p = e === D.USER_ROLE ? "right" : "left"), p;
    }
  }, {
    key: "add",
    value: function(e, t, n) {
      var a = typeof n == "boolean" ? void 0 : n, s = r.createAvatar(t, a), o = r.getPosition(t, a);
      s.classList.add(o === "left" ? "left-item-position" : "right-item-position"), e.insertAdjacentElement(o === "left" ? "beforebegin" : "afterend", s);
    }
  }]);
}();
Ba.CONTAINER_CLASS = "avatar-container";
var _n = Ba, ja = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
      return e !== D.USER_ROLE && ((n = c) !== null && n !== void 0 || (c = (l = t == null ? void 0 : t.ai) == null ? void 0 : l.position)), (a = c) !== null && a !== void 0 || (c = (u = t == null ? void 0 : t.default) == null ? void 0 : u.position), (s = c) !== null && s !== void 0 || (c = e === D.USER_ROLE ? "right" : "left"), c;
    }
  }, {
    key: "applyStyle",
    value: function(e, t, n) {
      var a, s, o, l;
      Object.assign(e.style, (a = n.default) == null ? void 0 : a.style), t === D.USER_ROLE ? Object.assign(e.style, (s = n.user) == null ? void 0 : s.style) : (Object.assign(e.style, (o = n.ai) == null ? void 0 : o.style), Object.assign(e.style, (l = n[t]) == null ? void 0 : l.style));
    }
  }, {
    key: "getNameText",
    value: function(e, t) {
      var n, a, s, o, l, u;
      return e === D.USER_ROLE ? ((n = t.user) == null ? void 0 : n.text) || ((a = t.default) == null ? void 0 : a.text) || "User" : e === D.AI_ROLE ? ((s = t.ai) == null ? void 0 : s.text) || ((o = t.default) == null ? void 0 : o.text) || "AI" : ((l = t[e]) == null ? void 0 : l.text) || ((u = t.default) == null ? void 0 : u.text) || e;
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
ja.NAME_CLASS = "name";
var En = ja, He = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
      var l = r.getLastElementsByClass(t, [r.getRoleClass(a), o], [qe.BUBBLE_CLASS]), u = r.getLastMessage(e, a, s);
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
      n && _n.add(e, t, n), a && En.add(e, t, a);
    }
  }, {
    key: "hideRoleElements",
    value: function(e, t, n) {
      var a = e[e.length - 1].innerContainer;
      t && _n.hide(a), n && En.hide(a);
    }
  }, {
    key: "revealRoleElements",
    value: function(e, t, n) {
      t && _n.reveal(e), n && En.reveal(e);
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
      e.outerContainer.classList.remove(r.POSITION_TOP_MESSAGE_CLASS, r.POSITION_MIDDLE_MESSAGE_CLASS, r.POSITION_BOTTOM_MESSAGE_CLASS), (n = e.outerContainer.classList).add.apply(n, Kt(t));
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
      return e.text && (n.text = r.findMessageElements(t, Ve.TEXT_BUBBLE_CLASS)), e.html && (n.html = r.findMessageElements(t, Oe.HTML_BUBBLE_CLASS)), e.files && (n.files = r.filterdMessageElements(t, me.FILE_BUBBLE_CLASS)), n;
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
He.AI_ROLE = "ai", He.USER_ROLE = "user", He.EMPTY_MESSAGE_CLASS = "empty-message", He.POSITION_TOP_MESSAGE_CLASS = "deep-chat-top-message", He.POSITION_MIDDLE_MESSAGE_CLASS = "deep-chat-middle-message", He.POSITION_BOTTOM_MESSAGE_CLASS = "deep-chat-bottom-message";
var D = He, Ua = /* @__PURE__ */ function() {
  function r(i) {
    y(this, r), this._fileAdded = !1, this._streamType = "", this._hasStreamEnded = !1, this._messages = i;
  }
  return b(r, [{
    key: "upsertStreamedMessage",
    value: function(e) {
      var t;
      if (!this._hasStreamEnded) {
        if ((e == null ? void 0 : e.text) === void 0 && (e == null ? void 0 : e.html) === void 0) return console.error(re.INVALID_STREAM_EVENT);
        var n = (e == null ? void 0 : e.text) || (e == null ? void 0 : e.html) || "", a = _e.isScrollbarAtBottomOfElement(this._messages.elementRef), s = (e == null ? void 0 : e.text) !== void 0 ? "text" : "html";
        if (!this._elements && !this._message) this.setInitialState(s, n, e == null ? void 0 : e.role);
        else {
          if (this._streamType !== s) return console.error(re.INVALID_STREAM_EVENT_MIX);
          this.updateBasedOnType(n, s, (t = this._elements) == null ? void 0 : t.bubbleElement, e == null ? void 0 : e.overwrite);
        }
        a && _e.scrollToBottom(this._messages.elementRef);
      }
    }
  }, {
    key: "setInitialState",
    value: function(e, t, n) {
      var a;
      this._streamType = e, (a = n) !== null && a !== void 0 || (n = D.AI_ROLE), this._elements = e === "text" ? this._messages.addNewTextMessage(t, n) : Oe.add(this._messages, t, n, this._messages.messageElementRefs), this._elements.bubbleElement.classList.add(r.MESSAGE_CLASS), this._activeMessageRole = n, this._message = Vt({
        role: this._activeMessageRole
      }, e, t), this._messages.messageToElements.push([this._message, Vt({}, e, this._elements)]);
    }
  }, {
    key: "updateBasedOnType",
    value: function(e, t, n) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      D.unfillEmptyMessageElement(n, e), (t === "text" ? this.updateText : this.updateHTML).bind(this)(e, n, a);
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
        if (!this._elements) throw Error(re.NO_VALID_STREAM_EVENTS_SENT);
        (e = this._elements.bubbleElement) != null && e.classList.contains(r.MESSAGE_CLASS) && (this._streamType === "text" ? this._messages.textToSpeech && Dt.speak(this._message.text || "", this._messages.textToSpeech) : this._streamType === "html" && this._elements && ot.apply(this._messages, this._elements.outerContainer), this._elements.bubbleElement.classList.remove(r.MESSAGE_CLASS), this._message && this._messages.sendClientUpdate(Ve.createMessageContent(this._message), !1), this._hasStreamEnded = !0);
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
      var i = S(/* @__PURE__ */ f().mark(function t(n, a) {
        var s, o, l, u;
        return f().wrap(function(d) {
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
Ua.MESSAGE_CLASS = "streamed-message";
var Pe = Ua, Ha = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "tempRemoveContentHeader",
    value: (
      // need to pass stringifyBody boolean separately as binding is throwing an error for some reason
      // prettier-ignore
      function() {
        var i = S(/* @__PURE__ */ f().mark(function t(n, a, s) {
          var o, l;
          return f().wrap(function(c) {
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
      if (console.error(t), P(t) == "object") return t instanceof Error ? e.addNewErrorMessage("service", t.message) : Array.isArray(t) || typeof t.error == "string" ? e.addNewErrorMessage("service", t) : Object.keys(t).length === 0 ? e.addNewErrorMessage("service", n) : e.addNewErrorMessage("service", JSON.stringify(t));
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
      var i = S(/* @__PURE__ */ f().mark(function t(n, a) {
        var s, o, l, u;
        return f().wrap(function(d) {
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
      return e && P(e) == "object" && (typeof e.error == "string" || typeof e.text == "string" || typeof e.html == "string" || Array.isArray(e.files));
    }
  }, {
    key: "onInterceptorError",
    value: function(e, t, n) {
      e.addNewErrorMessage("service", t), n == null || n();
    }
  }]);
}();
Ha.CONTENT_TYPE = "Content-Type";
var $ = Ha;
function _o(r, i) {
  return Un.apply(this, arguments);
}
function Un() {
  return Un = S(/* @__PURE__ */ f().mark(function r(i, e) {
    var t, n;
    return f().wrap(function(s) {
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
  })), Un.apply(this, arguments);
}
function Eo(r) {
  var i, e, t, n = !1;
  return function(a) {
    i === void 0 ? (i = a, e = 0, t = -1) : i = Co(i, a);
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
function wo(r, i, e) {
  var t = Hr(), n = new TextDecoder();
  return function(a, s) {
    if (a.length === 0) e == null || e(t), t = Hr();
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
function Co(r, i) {
  var e = new Uint8Array(r.length + i.length);
  return e.set(r), e.set(i, r.length), e;
}
function Hr() {
  return {
    data: "",
    event: "",
    id: "",
    retry: void 0
  };
}
var To = function(i, e) {
  var t = {};
  for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && e.indexOf(n) < 0 && (t[n] = i[n]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(i); a < n.length; a++) e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(i, n[a]) && (t[n[a]] = i[n[a]]);
  return t;
}, Hn = "text/event-stream", xo = 1e3, qr = "last-event-id";
function Ao(r, i) {
  var e = i.signal, t = i.headers, n = i.onopen, a = i.onmessage, s = i.onclose, o = i.onerror, l = i.openWhenHidden, u = i.fetch, c = To(i, ["signal", "headers", "onopen", "onmessage", "onclose", "onerror", "openWhenHidden", "fetch"]);
  return new Promise(function(d, h) {
    var p = Object.assign({}, t);
    p.accept || (p.accept = Hn);
    var m;
    function g() {
      m.abort(), document.hidden || C();
    }
    l || document.addEventListener("visibilitychange", g);
    var k = xo, _ = 0;
    function E() {
      document.removeEventListener("visibilitychange", g), window.clearTimeout(_), m.abort();
    }
    e == null || e.addEventListener("abort", function() {
      E(), d();
    });
    var M = u ?? window.fetch, A = n ?? Mo;
    function C() {
      return U.apply(this, arguments);
    }
    function U() {
      return U = S(/* @__PURE__ */ f().mark(function Z() {
        var H, ie, te;
        return f().wrap(function(q) {
          for (; ; ) switch (q.prev = q.next) {
            case 0:
              return m = new AbortController(), q.prev = 1, q.next = 4, M(r, Object.assign(Object.assign({}, c), {
                headers: p,
                signal: m.signal
              }));
            case 4:
              return ie = q.sent, q.next = 7, A(ie);
            case 7:
              return q.next = 9, _o(ie.body, Eo(wo(function(ae) {
                ae ? p[qr] = ae : delete p[qr];
              }, function(ae) {
                k = ae;
              }, a)));
            case 9:
              s == null || s(), E(), d(), q.next = 17;
              break;
            case 14:
              if (q.prev = 14, q.t0 = q.catch(1), !m.signal.aborted) try {
                te = (H = o == null ? void 0 : o(q.t0)) !== null && H !== void 0 ? H : k, window.clearTimeout(_), _ = window.setTimeout(C, te);
              } catch (ae) {
                E(), h(ae);
              }
            case 17:
            case "end":
              return q.stop();
          }
        }, Z, null, [[1, 14]]);
      })), U.apply(this, arguments);
    }
    C();
  });
}
function Mo(r) {
  var i = r.headers.get("content-type");
  if (!(i != null && i.startsWith(Hn))) throw new Error("Expected content-type to be ".concat(Hn, ", Actual: ").concat(i));
}
var se = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "request",
    value: (
      // prettier-ignore
      function() {
        var i = S(/* @__PURE__ */ f().mark(function t(n, a, s) {
          var o, l, u, c, d, h, p, m, g, k, _, E, M, A, C, U, Z, H, ie, te = arguments;
          return f().wrap(function(q) {
            for (; ; ) switch (q.prev = q.next) {
              case 0:
                return o = te.length > 3 && te[3] !== void 0 ? te[3] : !0, l = te.length > 4 && te[4] !== void 0 ? te[4] : !1, g = {
                  body: a,
                  headers: (u = n.connectSettings) == null ? void 0 : u.headers
                }, q.next = 5, $.processRequestInterceptor(n.deepChat, g);
              case 5:
                if (k = q.sent, _ = k.body, E = k.headers, M = k.error, A = n.streamHandlers, C = A.onOpen, U = A.onClose, Z = A.abortStream, !M) {
                  q.next = 15;
                  break;
                }
                return q.abrupt("return", $.onInterceptorError(s, M, U));
              case 15:
                if (!((c = n.connectSettings) != null && c.handler)) {
                  q.next = 17;
                  break;
                }
                return q.abrupt("return", ar.stream(n, _, s));
              case 17:
                if (((d = n.connectSettings) == null ? void 0 : d.url) !== Ne.URL) {
                  q.next = 19;
                  break;
                }
                return q.abrupt("return", Ne.requestStream(s, n.streamHandlers));
              case 19:
                return H = new Pe(s), ie = $.fetch.bind(this, n, E, o), q.abrupt("return", (Ao(((h = n.connectSettings) == null ? void 0 : h.url) || n.url || "", {
                  method: ((p = n.connectSettings) == null ? void 0 : p.method) || "POST",
                  headers: E,
                  credentials: (m = n.connectSettings) == null ? void 0 : m.credentials,
                  body: o ? JSON.stringify(_) : _,
                  openWhenHidden: !0,
                  // keep stream open when browser tab not open
                  onopen: function(Y) {
                    return S(/* @__PURE__ */ f().mark(function ye() {
                      return f().wrap(function(w) {
                        for (; ; ) switch (w.prev = w.next) {
                          case 0:
                            if (!Y.ok) {
                              w.next = 2;
                              break;
                            }
                            return w.abrupt("return", C());
                          case 2:
                            return w.next = 4, $.processResponseByType(Y);
                          case 4:
                            throw w.sent;
                          case 5:
                          case "end":
                            return w.stop();
                        }
                      }, ye);
                    }))();
                  },
                  onmessage: function(Y) {
                    return S(/* @__PURE__ */ f().mark(function ye() {
                      var x, w, T, O, N;
                      return f().wrap(function(V) {
                        for (; ; ) switch (V.prev = V.next) {
                          case 0:
                            if (JSON.stringify(Y.data) === JSON.stringify("[DONE]")) {
                              V.next = 9;
                              break;
                            }
                            try {
                              O = JSON.parse(Y.data);
                            } catch {
                              O = {};
                            }
                            return V.next = 4, (w = (x = n.deepChat).responseInterceptor) == null ? void 0 : w.call(x, O);
                          case 4:
                            if (V.t0 = V.sent, V.t0) {
                              V.next = 7;
                              break;
                            }
                            V.t0 = O;
                          case 7:
                            N = V.t0, (T = n.extractResultData) == null || T.call(n, N, ie, _).then(function(ee) {
                              n.asyncCallInProgress && ee && ee.text !== "" ? (r.simulate(s, n.streamHandlers, ee), U(), n.asyncCallInProgress = !1) : r.upsertWFiles(s, H.upsertStreamedMessage.bind(H), H, ee);
                            }).catch(function(ee) {
                              return $.displayError(s, ee);
                            });
                          case 9:
                          case "end":
                            return V.stop();
                        }
                      }, ye);
                    }))();
                  },
                  onerror: function(Y) {
                    throw U(), Y;
                  },
                  onclose: function() {
                    if (!n.asyncCallInProgress) try {
                      H.finaliseStreamedMessage(), U();
                    } catch (Y) {
                      if (!l) throw Y;
                    }
                  },
                  signal: Z.signal
                }).catch(function(ae) {
                  var Y;
                  s.isLastMessageError() || (Y = n.extractResultData) == null || Y.call(n, ae).then(function() {
                    $.displayError(s, ae);
                  }).catch(function(ye) {
                    $.displayError(s, ye);
                  });
                }), H));
              case 21:
              case "end":
                return q.stop();
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
      if (n.files && e.addNewMessage(J({
        sendUpdate: !1,
        ignoreText: !0
      }, n), !1), n.text) {
        t.onOpen();
        var s = n.text.split("");
        r.populateMessages(s, new Pe(e), a, "text");
      }
      if (n.html) {
        t.onOpen();
        var o = ot.splitHTML(n.html);
        o.length === 0 && (o = n.html.split("")), r.populateMessages(o, new Pe(e), a, "html");
      }
    }
    // prettier-ignore
  }, {
    key: "populateMessages",
    value: function(e, t, n, a) {
      var s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, o = e[s];
      if (o) {
        t.upsertStreamedMessage(Vt({}, a, o));
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
      return P(e) == "object" && !!e.simulation;
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
}(), qa = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
      setTimeout(/* @__PURE__ */ S(/* @__PURE__ */ f().mark(function a() {
        var s, o, l;
        return f().wrap(function(c) {
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
              l = c.t0, l.error ? (t.addNewErrorMessage("service", l.error), e.completionsHandlers.onFinish()) : se.isSimulatable(e.stream, l) ? se.simulate(t, e.streamHandlers, l) : (t.addNewMessage(l), e.completionsHandlers.onFinish());
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
        se.simulate(e, t, n);
      }, 400);
    }
  }]);
}();
qa.URL = "deep-chat-demo";
var Ne = qa, _t = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "setup",
    value: function(e) {
      e.connectSettings.url !== Ne.URL && (e.permittedErrorPrefixes = ["Connection error", "Error in server message"], e.websocket = "pending");
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
          if (e.connectSettings.handler) return ar.websocket(e, t);
          try {
            var a = typeof n != "boolean" ? n : void 0, s = new WebSocket(e.connectSettings.url || "", a);
            e.websocket = s, e.websocket.onopen = function() {
              var o, l;
              t.removeError(), e.websocket && P(e.websocket) == "object" && r.assignListeners(e, s, t), (l = (o = e.deepChat)._validationHandler) == null || l.call(o);
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
        var o = S(/* @__PURE__ */ f().mark(function l(u) {
          var c, d, h, p, m, g, k;
          return f().wrap(function(E) {
            for (; ; ) switch (E.prev = E.next) {
              case 0:
                if (!e.extractResultData) {
                  E.next = 20;
                  break;
                }
                return E.prev = 1, h = JSON.parse(u.data), E.next = 5, (d = (c = e.deepChat).responseInterceptor) == null ? void 0 : d.call(c, h);
              case 5:
                if (E.t0 = E.sent, E.t0) {
                  E.next = 8;
                  break;
                }
                E.t0 = h;
              case 8:
                return p = E.t0, E.next = 11, e.extractResultData(p);
              case 11:
                if (m = E.sent, !(!m || P(m) != "object")) {
                  E.next = 14;
                  break;
                }
                throw Error(re.INVALID_RESPONSE(h, "server", !!e.deepChat.responseInterceptor, p));
              case 14:
                se.isSimulation(e.stream) ? (g = r.stream.bind(a, e, n, s), k = s[h.role || D.AI_ROLE], se.upsertWFiles(n, g, k, m)) : n.addNewMessage(m), E.next = 20;
                break;
              case 17:
                E.prev = 17, E.t1 = E.catch(1), $.displayError(n, E.t1, "Error in server message");
              case 20:
              case "end":
                return E.stop();
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
      var i = S(/* @__PURE__ */ f().mark(function t(n, a, s) {
        var o, l, u, c, d, h, p, m, g, k = arguments;
        return f().wrap(function(E) {
          for (; ; ) switch (E.prev = E.next) {
            case 0:
              if (o = k.length > 3 && k[3] !== void 0 ? k[3] : !0, c = n.websocket, !(!c || c === "pending")) {
                E.next = 4;
                break;
              }
              return E.abrupt("return");
            case 4:
              return d = {
                body: a,
                headers: (l = n.connectSettings) == null ? void 0 : l.headers
              }, E.next = 7, $.processRequestInterceptor(n.deepChat, d);
            case 7:
              if (h = E.sent, p = h.body, m = h.error, !m) {
                E.next = 12;
                break;
              }
              return E.abrupt("return", s.addNewErrorMessage("service", m));
            case 12:
              if (r.isWebSocket(c)) {
                E.next = 14;
                break;
              }
              return E.abrupt("return", c.newUserMessage.listener(p));
            case 14:
              if (g = o ? JSON.stringify(p) : p, ((u = n.connectSettings) == null ? void 0 : u.url) !== Ne.URL) {
                E.next = 17;
                break;
              }
              return E.abrupt("return", Ne.request(n, s));
            case 17:
              c.readyState === void 0 || c.readyState !== c.OPEN ? (console.error("Connection is not open"), s.isLastMessageError() || s.addNewErrorMessage("service", "Connection error")) : (c.send(JSON.stringify(g)), n.completionsHandlers.onFinish());
            case 18:
            case "end":
              return E.stop();
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
          var o, l = a.role || D.AI_ROLE, u = n[l];
          a.text === s || a.html === s ? (u == null || u.finaliseStreamedMessage(), delete n[l]) : ((o = n[l]) !== null && o !== void 0 || (n[l] = new Pe(t)), n[l].upsertStreamedMessage(a));
        } else se.simulate(t, e.streamHandlers, a);
      }
    }
  }]);
}(), ar = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "request",
    value: function() {
      var i = S(/* @__PURE__ */ f().mark(function t(n, a, s) {
        var o, l, u, c, d;
        return f().wrap(function(p) {
          for (; ; ) switch (p.prev = p.next) {
            case 0:
              u = !0, c = /* @__PURE__ */ function() {
                var m = S(/* @__PURE__ */ f().mark(function g(k) {
                  var _, E, M;
                  return f().wrap(function(C) {
                    for (; ; ) switch (C.prev = C.next) {
                      case 0:
                        if (u) {
                          C.next = 2;
                          break;
                        }
                        return C.abrupt("return");
                      case 2:
                        return u = !1, C.next = 5, (E = (_ = n.deepChat).responseInterceptor) == null ? void 0 : E.call(_, k);
                      case 5:
                        if (C.t0 = C.sent, C.t0) {
                          C.next = 8;
                          break;
                        }
                        C.t0 = k;
                      case 8:
                        M = C.t0, $.validateResponseFormat(M) ? typeof M.error == "string" ? (console.error(M.error), s.addNewErrorMessage("service", M.error), n.completionsHandlers.onFinish()) : se.isSimulatable(n.stream, M) ? se.simulate(s, n.streamHandlers, M) : (s.addNewMessage(M), n.completionsHandlers.onFinish()) : (console.error(re.INVALID_RESPONSE(k, "server", !!n.deepChat.responseInterceptor, M)), s.addNewErrorMessage("service", "Error in server message"), n.completionsHandlers.onFinish());
                      case 10:
                      case "end":
                        return C.stop();
                    }
                  }, g);
                }));
                return function(k) {
                  return m.apply(this, arguments);
                };
              }(), d = r.generateOptionalSignals(), (l = (o = n.connectSettings).handler) == null || l.call(o, a, J(J({}, d), {}, {
                onResponse: c
              }));
            case 3:
            case "end":
              return p.stop();
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
        Ve.isLoadingMessage(n) ? t.removeLastMessage() : e.finaliseStreamedMessage();
      } catch (a) {
        console.error(a), t.addNewErrorMessage("service", a);
      }
    }
    // prettier-ignore
  }, {
    key: "stream",
    value: function(e, t, n) {
      var a, s, o = !0, l = !1, u = new Pe(n), c = function() {
        l || !o || (e.streamHandlers.onOpen(), l = !0);
      }, d = function() {
        o && (r.attemptToFinaliseStream(u, n), e.streamHandlers.onClose(), o = !1);
      }, h = /* @__PURE__ */ function() {
        var m = S(/* @__PURE__ */ f().mark(function g(k) {
          var _, E, M;
          return f().wrap(function(C) {
            for (; ; ) switch (C.prev = C.next) {
              case 0:
                if (o) {
                  C.next = 2;
                  break;
                }
                return C.abrupt("return");
              case 2:
                return C.next = 4, (E = (_ = e.deepChat).responseInterceptor) == null ? void 0 : E.call(_, k);
              case 4:
                if (C.t0 = C.sent, C.t0) {
                  C.next = 7;
                  break;
                }
                C.t0 = k;
              case 7:
                M = C.t0, $.validateResponseFormat(M) ? M.error ? (console.error(M.error), u.finaliseStreamedMessage(), n.addNewErrorMessage("service", M.error), e.streamHandlers.onClose(), o = !1) : se.upsertWFiles(n, u.upsertStreamedMessage.bind(u), u, M) : console.error(re.INVALID_RESPONSE(k, "server", !!e.deepChat.responseInterceptor, M));
              case 9:
              case "end":
                return C.stop();
            }
          }, g);
        }));
        return function(k) {
          return m.apply(this, arguments);
        };
      }();
      e.streamHandlers.abortStream.abort = function() {
        r.attemptToFinaliseStream(u, n), e.streamHandlers.onClose(), o = !1;
      };
      var p = r.generateOptionalSignals();
      (s = (a = e.connectSettings).handler) == null || s.call(a, t, J(J({}, p), {}, {
        onOpen: c,
        onResponse: h,
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
        var h = S(/* @__PURE__ */ f().mark(function p(m) {
          var g, k, _, E, M;
          return f().wrap(function(C) {
            for (; ; ) switch (C.prev = C.next) {
              case 0:
                if (o.isOpen) {
                  C.next = 2;
                  break;
                }
                return C.abrupt("return");
              case 2:
                return C.next = 4, (k = (g = e.deepChat).responseInterceptor) == null ? void 0 : k.call(g, m);
              case 4:
                if (C.t0 = C.sent, C.t0) {
                  C.next = 7;
                  break;
                }
                C.t0 = m;
              case 7:
                _ = C.t0, $.validateResponseFormat(_) ? typeof _.error == "string" ? (console.error(_.error), t.isLastMessageError() || t.addNewErrorMessage("service", _.error)) : se.isSimulation(e.stream) ? (E = _t.stream.bind(n, e, t, o.roleToStream), M = o.roleToStream[m.role || D.AI_ROLE], se.upsertWFiles(t, E, M, m)) : t.addNewMessage(_) : (console.error(re.INVALID_RESPONSE(m, "server", !!e.deepChat.responseInterceptor, _)), t.addNewErrorMessage("service", "Error in server message"));
              case 9:
              case "end":
                return C.stop();
            }
          }, p);
        }));
        return function(m) {
          return h.apply(this, arguments);
        };
      }(), d = r.generateOptionalSignals();
      (s = (a = e.connectSettings).handler) == null || s.call(a, void 0, J(J({}, d), {}, {
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
}(), Q = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "request",
    value: (
      // prettier-ignore
      function() {
        var i = S(/* @__PURE__ */ f().mark(function t(n, a, s) {
          var o, l, u, c, d, h, p, m, g, k, _, E, M = arguments;
          return f().wrap(function(C) {
            for (; ; ) switch (C.prev = C.next) {
              case 0:
                return o = M.length > 3 && M[3] !== void 0 ? M[3] : !0, d = {
                  body: a,
                  headers: (l = n.connectSettings) == null ? void 0 : l.headers
                }, C.next = 4, $.processRequestInterceptor(n.deepChat, d);
              case 4:
                if (h = C.sent, p = h.body, m = h.headers, g = h.error, k = n.completionsHandlers.onFinish, !g) {
                  C.next = 11;
                  break;
                }
                return C.abrupt("return", $.onInterceptorError(s, g, k));
              case 11:
                if (!((u = n.connectSettings) != null && u.handler)) {
                  C.next = 13;
                  break;
                }
                return C.abrupt("return", ar.request(n, p, s));
              case 13:
                if (((c = n.connectSettings) == null ? void 0 : c.url) !== Ne.URL) {
                  C.next = 15;
                  break;
                }
                return C.abrupt("return", Ne.request(n, s));
              case 15:
                _ = !0, E = $.fetch.bind(this, n, m, o), E(p).then(function(U) {
                  return _ = !!U.ok, U;
                }).then(function(U) {
                  return $.processResponseByType(U);
                }).then(/* @__PURE__ */ function() {
                  var U = S(/* @__PURE__ */ f().mark(function Z(H) {
                    var ie, te, fe, q;
                    return f().wrap(function(Y) {
                      for (; ; ) switch (Y.prev = Y.next) {
                        case 0:
                          if (n.extractResultData) {
                            Y.next = 2;
                            break;
                          }
                          return Y.abrupt("return");
                        case 2:
                          return Y.next = 4, (te = (ie = n.deepChat).responseInterceptor) == null ? void 0 : te.call(ie, H);
                        case 4:
                          if (Y.t0 = Y.sent, Y.t0) {
                            Y.next = 7;
                            break;
                          }
                          Y.t0 = H;
                        case 7:
                          return fe = Y.t0, Y.next = 10, n.extractResultData(fe, E, p);
                        case 10:
                          if (q = Y.sent, _) {
                            Y.next = 13;
                            break;
                          }
                          throw H;
                        case 13:
                          if (!(!q || P(q) != "object")) {
                            Y.next = 15;
                            break;
                          }
                          throw Error(re.INVALID_RESPONSE(H, "response", !!n.deepChat.responseInterceptor, fe));
                        case 15:
                          q.makingAnotherRequest || (se.isSimulatable(n.stream, q) ? se.simulate(s, n.streamHandlers, q) : (s.addNewMessage(q), k()));
                        case 16:
                        case "end":
                          return Y.stop();
                      }
                    }, Z);
                  }));
                  return function(Z) {
                    return U.apply(this, arguments);
                  };
                }()).catch(function(U) {
                  $.displayError(s, U), k();
                });
              case 18:
              case "end":
                return C.stop();
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
        var o = S(/* @__PURE__ */ f().mark(function l(u) {
          var c, d, h;
          return f().wrap(function(m) {
            for (; ; ) switch (m.prev = m.next) {
              case 0:
                if (e.extractPollResultData) {
                  m.next = 2;
                  break;
                }
                return m.abrupt("return");
              case 2:
                return m.t0 = e, m.next = 5, (d = (c = e.deepChat).responseInterceptor) == null ? void 0 : d.call(c, u);
              case 5:
                if (m.t1 = m.sent, m.t1) {
                  m.next = 8;
                  break;
                }
                m.t1 = u;
              case 8:
                return m.t2 = m.t1, m.next = 11, m.t0.extractPollResultData.call(m.t0, m.t2);
              case 11:
                h = m.sent, h.timeoutMS ? setTimeout(function() {
                  r.executePollRequest(e, t, n, a);
                }, h.timeoutMS) : se.isSimulatable(e.stream, h) ? se.simulate(a, e.streamHandlers, h) : (a.addNewMessage(h), s());
              case 13:
              case "end":
                return m.stop();
            }
          }, l);
        }));
        return function(l) {
          return o.apply(this, arguments);
        };
      }()).catch(function(o) {
        $.displayError(a, o), s();
      });
    }
    // prettier-ignore
  }, {
    key: "poll",
    value: function() {
      var i = S(/* @__PURE__ */ f().mark(function t(n, a, s) {
        var o, l, u, c, d, h, p, m, g, k, _, E, M, A = arguments;
        return f().wrap(function(U) {
          for (; ; ) switch (U.prev = U.next) {
            case 0:
              return o = A.length > 3 && A[3] !== void 0 ? A[3] : !0, d = {
                body: a,
                headers: (l = n.connectSettings) == null ? void 0 : l.headers
              }, U.next = 4, $.processRequestInterceptor(n.deepChat, d);
            case 4:
              if (h = U.sent, p = h.body, m = h.headers, g = h.error, !g) {
                U.next = 10;
                break;
              }
              return U.abrupt("return", $.onInterceptorError(s, g));
            case 10:
              k = ((u = n.connectSettings) == null ? void 0 : u.url) || n.url || "", _ = ((c = n.connectSettings) == null ? void 0 : c.method) || "POST", E = o ? JSON.stringify(p) : p, M = {
                method: _,
                body: E,
                headers: m
              }, n.connectSettings.credentials && (M.credentials = n.connectSettings.credentials), r.executePollRequest(n, k, M, s);
            case 12:
            case "end":
              return U.stop();
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
      if (e === "") return o(re.INVALID_KEY);
      l(), fetch(t, {
        method: a,
        headers: n,
        body: c || null
      }).then(function(d) {
        return $.processResponseByType(d);
      }).then(function(d) {
        u(d, e, s, o);
      }).catch(function(d) {
        o(re.CONNECTION_FAILED), console.error(d);
      });
    }
  }]);
}(), za = /* @__PURE__ */ function() {
  function r(i, e, t) {
    y(this, r), this._isLoading = !1, this._isPaginationComplete = !1, this._index = 0, this._messages = e, t.fetchHistory && this.fetchHistory(t.fetchHistory), i.loadHistory && this.setupLoadHistoryOnScroll(i.loadHistory), this.setupInitialHistory(i);
  }
  return b(r, [{
    key: "fetchHistory",
    value: function() {
      var i = S(/* @__PURE__ */ f().mark(function t(n) {
        var a = this, s, o;
        return f().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              return s = ze.addMessage(this._messages), u.next = 3, n();
            case 3:
              o = u.sent, this._messages.removeMessage(s), o.forEach(function(c) {
                return a._messages.addAnyMessage(c, !0);
              }), setTimeout(function() {
                return _e.scrollToBottom(a._messages.elementRef);
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
        return !d.outerContainer.classList.contains(Ve.INTRO_CLASS);
      })) == null ? void 0 : n.outerContainer, c = l.scrollTop;
      e == null || e.reverse().map(function(d) {
        var h = t._messages.addAnyMessage(J(J({}, d), {}, {
          sendUpdate: !0
        }), !0, !0);
        if (h) {
          var p = D.generateMessageBody(h, s);
          o.unshift([h, p]);
        }
        return h;
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
      var i = S(/* @__PURE__ */ f().mark(function t(n) {
        var a = this;
        return f().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              this._messages.elementRef.onscroll = /* @__PURE__ */ S(/* @__PURE__ */ f().mark(function l() {
                var u, c;
                return f().wrap(function(h) {
                  for (; ; ) switch (h.prev = h.next) {
                    case 0:
                      if (!(!a._isLoading && !a._isPaginationComplete && a._messages.elementRef.scrollTop === 0)) {
                        h.next = 13;
                        break;
                      }
                      return a._isLoading = !0, u = ze.addMessage(a._messages, !1), h.prev = 3, h.next = 6, n(a._index++);
                    case 6:
                      c = h.sent, a.populateMessages(u, c), a._isLoading = !1, h.next = 13;
                      break;
                    case 10:
                      h.prev = 10, h.t0 = h.catch(3), a._messages.removeMessage(u), a._isPaginationComplete = !0, a._messages.addNewErrorMessage("service", r.FAILED_ERROR_MESSAGE, !0), console.error(h.t0);
                    case 13:
                    case "end":
                      return h.stop();
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
        ge.processHistoryFile(n), t._messages.addNewMessage(n, !0);
      });
    }
  }, {
    key: "loadInitialHistory",
    value: function() {
      var i = S(/* @__PURE__ */ f().mark(function t(n) {
        var a = this, s, o, l;
        return f().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              return this._isLoading = !0, s = ze.addMessage(this._messages), c.prev = 2, c.next = 5, n(this._index++);
            case 5:
              o = c.sent, l = this._messages.elementRef.scrollTop, this.populateMessages(s, o), l === 0 && setTimeout(function() {
                return _e.scrollToBottom(a._messages.elementRef);
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
      var i = S(/* @__PURE__ */ f().mark(function t(n) {
        var a;
        return f().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              n.loadHistory && this.loadInitialHistory(n.loadHistory), a = n.history || ge.processHistory(n), a && (this.populateInitialHistory(a), this._index += 1);
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
za.FAILED_ERROR_MESSAGE = "Failed to load history";
var ir = za, sr = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
}(), Io = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "parseConfig",
    value: (
      // prettier-ignore
      function(e, t, n, a) {
        var s, o = {
          files: t
        };
        if (P(a) == "object") {
          ge.processFileConfigConnect(a);
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
      var s, o, l, u, c, d, h, p, m = J({
        acceptedFormats: "audio/*"
      }, ((l = e.fileTypes.audio) == null ? void 0 : l.files) || {});
      n && (navigator.mediaDevices.getUserMedia !== void 0 ? (e.recordAudio = r.parseConfig(e.connectSettings, m, t, n), P(n) == "object" && n.files && ((s = (u = e.recordAudio).files) !== null && s !== void 0 || (u.files = {}), e.recordAudio.files.format = (c = n.files) == null ? void 0 : c.format, e.recordAudio.files.maxDurationSeconds = (d = n.files) == null ? void 0 : d.maxDurationSeconds, (h = e.fileTypes.audio) != null && h.files && ((o = (p = e.fileTypes.audio.files).maxNumberOfFiles) !== null && o !== void 0 || (p.maxNumberOfFiles = n.files.maxNumberOfFiles)))) : a || (e.fileTypes.audio = r.parseConfig(e.connectSettings, m, t, n)));
    }
    // prettier-ignore
  }, {
    key: "processAudioConfig",
    value: function(e, t, n, a) {
      if (!(!n && !a)) {
        var s = J({
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
        var s = J({
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
      var s, o, l, u, c, d = J({
        acceptedFormats: "image/*"
      }, ((o = e.fileTypes.images) == null ? void 0 : o.files) || {});
      n && (navigator.mediaDevices.getUserMedia !== void 0 ? (e.camera = r.parseConfig(e.connectSettings, d, t, n), P(n) == "object" && (e.camera.modalContainerStyle = n.modalContainerStyle, n.files && ((s = (l = e.camera).files) !== null && s !== void 0 || (l.files = {}), e.camera.files.format = (u = n.files) == null ? void 0 : u.format, e.camera.files.dimensions = (c = n.files) == null ? void 0 : c.dimensions))) : a || (e.fileTypes.images = r.parseConfig(e.connectSettings, d, t, n)));
    }
    // prettier-ignore
  }, {
    key: "processImagesConfig",
    value: function(e, t, n, a) {
      if (!(!n && !a)) {
        var s = J({
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
      var a = Bn.createNew(e.remarkable);
      r.processImagesConfig(t, a, e.images, n == null ? void 0 : n.images), r.processCamera(t, a, e.camera, e.images), r.processGifConfig(t, a, e.gifs, n == null ? void 0 : n.gifs), r.processAudioConfig(t, a, e.audio, n == null ? void 0 : n.audio), r.processMicrophone(t, a, e.microphone, e.audio), r.processMixedFiles(t, a, e.mixedFiles);
    }
  }]);
}(), $t = /* @__PURE__ */ function() {
  function r(i, e, t) {
    var n;
    y(this, r);
    var a, s, o, l, u;
    this.rawBody = {}, this.validateKeyProperty = !1, this.canSendMessage = r.canSendMessage, this.connectSettings = {}, this.fileTypes = {}, this.completionsHandlers = {}, this.streamHandlers = {}, this.deepChat = i, this.demo = t, Object.assign(this.rawBody, (a = i.connect) == null ? void 0 : a.additionalBodyProps), this.totalMessagesMaxCharLength = (s = i == null ? void 0 : i.requestBodyLimits) == null ? void 0 : s.totalMessagesMaxCharLength, this.maxMessages = (o = i == null ? void 0 : i.requestBodyLimits) == null ? void 0 : o.maxMessages, Io.set(i, this, e), i.connect && (this.connectSettings = i.connect), this.demo && ((n = (l = this.connectSettings).url) !== null && n !== void 0 || (l.url = Ne.URL)), this.connectSettings.websocket && _t.setup(this), this.stream = ((u = this.deepChat.connect) == null ? void 0 : u.stream) || ge.checkForStream(this.deepChat), i.loadHistory && ir.addErrorPrefix(this);
  }
  return b(r, [{
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
      var i = S(/* @__PURE__ */ f().mark(function t(n, a) {
        var s, o = arguments;
        return f().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              return s = o.length > 2 && o[2] !== void 0 ? o[2] : !0, u.abrupt("return", this.stream && !se.isSimulation(this.stream) ? se.request(this, n, a, s) : Q.request(this, n, a, s));
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
      var i = S(/* @__PURE__ */ f().mark(function t(n, a) {
        var s, o, l, u, c, d, h, p;
        return f().wrap(function(g) {
          for (; ; ) switch (g.prev = g.next) {
            case 0:
              return h = J({
                messages: a
              }, this.rawBody), p = !1, (l = this.connectSettings.headers) != null && l["Content-Type"] || ((s = (u = this.connectSettings).headers) !== null && s !== void 0 || (u.headers = {}), (o = (c = this.connectSettings.headers)["Content-Type"]) !== null && o !== void 0 || (c["Content-Type"] = "application/json"), p = !0), g.next = 5, this.request(h, n);
            case 5:
              p && ((d = this.connectSettings.headers) == null || delete d["Content-Type"]);
            case 6:
            case "end":
              return g.stop();
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
      var i = S(/* @__PURE__ */ f().mark(function t(n, a, s) {
        var o, l, u;
        return f().wrap(function(d) {
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
      var i = S(/* @__PURE__ */ f().mark(function t(n, a, s) {
        return f().wrap(function(l) {
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
      var i = S(/* @__PURE__ */ f().mark(function t(n, a) {
        var s, o;
        return f().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              if (this.connectSettings) {
                u.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              s = sr.processMessages(a.messageToElements.map(function(c) {
                var d = Xn(c, 1), h = d[0];
                return h;
              }), this.maxMessages, this.totalMessagesMaxCharLength), this.connectSettings.websocket ? (o = J({
                messages: s
              }, this.rawBody), _t.sendWebsocket(this, o, a, !1)) : this.callServiceAPI(a, s, n.files);
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
      var i = S(/* @__PURE__ */ f().mark(function t(n) {
        return f().wrap(function(s) {
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
              return s.abrupt("return", ge.handleResponseProperty(n));
            case 4:
              if (!$.validateResponseFormat(n)) {
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
}(), pe = /* @__PURE__ */ function(r) {
  function i(e, t, n, a, s) {
    var o;
    y(this, i);
    var l;
    return o = F(this, i, [e, s]), o.insertKeyPlaceholderText = "API Key", o.keyHelpUrl = "", Object.assign(o.rawBody, (l = e.connect) == null ? void 0 : l.additionalBodyProps), o.keyVerificationDetails = t, o.buildHeadersFunc = n, a && o.setApiKeyProperties(a), o.connectSettings = o.buildConnectSettings(o.key || "", e.connect), o;
  }
  return B(i, r), b(i, [{
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
      Q.verifyKey(t, s, d, o, this.keyAuthenticated.bind(this, n.onSuccess), n.onFail, n.onLoad, l, c);
    }
  }, {
    key: "isDirectConnection",
    value: function() {
      return !0;
    }
  }]);
}($t), Ro = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
}(), qn = /* @__PURE__ */ function(r) {
  function i() {
    var e;
    return y(this, i), e = F(this, i), e._waitingToRender_ = !1, e._propUpdated_ = !1, Object.keys(i._attributeToProperty_).forEach(function(t) {
      var n = i._attributeToProperty_[t];
      e.constructPropertyAccessors(n), e.hasOwnProperty(t) || e.constructPropertyAccessors(n, t);
    }), e;
  }
  return B(i, r), b(i, [{
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
            a = o, n ? this[t] = o : Ro.attemptRender(this);
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
}(/* @__PURE__ */ In(HTMLElement));
qn._attributes_ = {}, qn._attributeToProperty_ = {};
var Lo = qn, Oo = `<?xml version="1.0" standalone="no"?>
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
`, Po = `<?xml version="1.0" standalone="no"?>
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
`, ke = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "createSVGElement",
    value: function(e) {
      return new DOMParser().parseFromString(e, "image/svg+xml").documentElement;
    }
  }]);
}(), Va = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
      var n = ke.createSVGElement(e);
      return n.id = t, n.classList.add("visibility-icon"), n;
    }
    // prettier-ignore
  }, {
    key: "create",
    value: function(e) {
      var t = document.createElement("div");
      t.id = "visibility-icon-container";
      var n = r.createIconElement(Po, r.VISIBLE_ICON_ID);
      n.style.display = "none", t.appendChild(n);
      var a = r.createIconElement(Oo, "not-visible-icon");
      return t.appendChild(a), t.onclick = r.changeVisibility.bind(this, e, n, a), t;
    }
  }]);
}();
Va.VISIBLE_ICON_ID = "visible-icon";
var No = Va, Do = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
        !e.classList.contains("loading") && u.key === ue.ENTER && l();
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
      var s = r.createInput(t.insertKeyPlaceholderText), o = s.children[0], l = No.create(o);
      s.appendChild(l), a.appendChild(s);
      var u = r.createStartButton(), c = r.createHelpTextContainer(t.keyHelpUrl, (n = t.deepChat._insertKeyViewStyles) == null ? void 0 : n.displayCautionText), d = c.helpTextContainerElement, h = c.failTextElement;
      return a.appendChild(u), a.appendChild(d), r.addVerificationEvents(o, u, h, e, t), a;
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
}(), pt = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "enableButtons",
    value: function(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      window.webLLM ? (e && (e.disabled = !1), t && (t.disabled = !1)) : n < or.MODULE_SEARCH_LIMIT_S * 4 && setTimeout(function() {
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
pt.DOWNLOAD_BUTTON_CLASS = "deep-chat-download-button", pt.UPLOAD_BUTTON_CLASS = "deep-chat-upload-button", pt.FILE_INPUT_CLASS = "deep-chat-file-input", pt.EXPORT_BUTTON_CLASS = "deep-chat-export-button";
var zr = pt, Vr = {
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
}, at = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    y(this, i);
    var n, a;
    return t = F(this, i, [e]), t._isModelLoaded = !1, t._isModelLoading = !1, t._loadOnFirstMessage = !1, t._webModel = {}, t.permittedErrorPrefixes = [i.MULTIPLE_MODELS_ERROR, i.WEB_LLM_NOT_FOUND_ERROR, i.GENERIC_ERROR], t._conversationHistory = [], P(e.webModel) == "object" && (t._webModel = e.webModel), (n = t._webModel.load) != null && n.clearCache && i.clearAllCache(), t.findModelInWindow(e), t.canSendMessage = t.canSubmit.bind(it(t)), t._chatEl = (a = e.shadowRoot) == null ? void 0 : a.children[0], e.history && i.setUpHistory(t._conversationHistory, e.history), t;
  }
  return B(i, r), b(i, [{
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
        (s = n._messages) != null && s.elementRef && _e.scrollToTop((o = n._messages) == null ? void 0 : o.elementRef);
      }, t);
    }
    // prettier-ignore
  }, {
    key: "getIntroMessage",
    value: function(t) {
      if (!(!this.shouldAddIntroMessage(t) || !this._chatEl)) {
        var n = zr.setUpInitial(this.init.bind(this), this._webModel.introMessage, this._chatEl, !!this._webModel.worker);
        return this.scrollToTop(1), {
          role: D.AI_ROLE,
          html: n,
          sendUpdate: !1
        };
      }
    }
  }, {
    key: "configureInit",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s;
        return f().wrap(function(l) {
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s, o;
        return f().wrap(function(u) {
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
        return Vr.use_web_worker && n ? new window.webLLM.ChatWorkerClient(n) : new window.webLLM.ChatModule();
      }
    }
  }, {
    key: "getConfig",
    value: function() {
      var t, n = i.DEFAULT_MODEL;
      this._webModel.model && (n = this._webModel.model);
      var a = JSON.parse(JSON.stringify(Vr));
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
      var e = S(/* @__PURE__ */ f().mark(function n(a, s) {
        var o = this, l, u, c, d, h, p, m, g, k, _, E, M, A, C, U;
        return f().wrap(function(H) {
          for (; ; ) switch (H.prev = H.next) {
            case 0:
              return this.scrollToTop(), i.chat = a, this._isModelLoading = !0, g = ((l = this._webModel.introMessage) == null ? void 0 : l.displayed) === !1, k = function(te) {
                var fe;
                (fe = o._messages) == null || fe.addNewMessage({
                  html: "<div>".concat(te.text, "</div>"),
                  overwrite: !0,
                  sendUpdate: !1
                }), g && (setTimeout(function() {
                  var q;
                  return _e.scrollToBottom((q = o._messages) == null ? void 0 : q.elementRef);
                }), g = !1);
              }, i.chat.setInitProgressCallback(k), H.prev = 4, E = this.getConfig(), M = E.model, A = E.appConfig, C = {}, this._webModel.instruction && (C.conv_config = {
                system: this._webModel.instruction
              }), this._conversationHistory.length > 0 && (C.conversation_history = this._conversationHistory), H.next = 10, i.chat.reload(M, C, A, s);
            case 10:
              _ = H.sent, H.next = 16;
              break;
            case 13:
              return H.prev = 13, H.t0 = H.catch(4), H.abrupt("return", this.unloadChat(H.t0));
            case 16:
              (c = (u = this.deepChat)._validationHandler) == null || c.call(u), (d = this._webModel.introMessage) != null && d.removeAfterLoad ? this._webModel.introMessage.displayed === !1 ? (p = this._messages) == null || p.removeLastMessage() : (m = this._removeIntro) == null || m.call(this) : (U = zr.setUpAfterLoad(_, this._webModel.introMessage, this._chatEl, !!this._webModel.worker), (h = this._messages) == null || h.addNewMessage({
                html: U,
                overwrite: !0,
                sendUpdate: !1
              })), this._isModelLoaded = !0, this._isModelLoading = !1;
            case 18:
            case "end":
              return H.stop();
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s;
        return f().wrap(function(l) {
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
      var e = S(/* @__PURE__ */ f().mark(function n(a, s, o) {
        var l, u;
        return f().wrap(function(d) {
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
      var e = S(/* @__PURE__ */ f().mark(function n(a, s, o) {
        var l = this, u;
        return f().wrap(function(d) {
          for (; ; ) switch (d.prev = d.next) {
            case 0:
              return this.streamHandlers.abortStream.abort = function() {
                o.interruptGenerate();
              }, this.streamHandlers.onOpen(), u = new Pe(a), d.next = 4, o.generate(s, /* @__PURE__ */ function() {
                var h = S(/* @__PURE__ */ f().mark(function p(m, g) {
                  var k;
                  return f().wrap(function(E) {
                    for (; ; ) switch (E.prev = E.next) {
                      case 0:
                        return E.next = 2, i.processResponse(l.deepChat, a, {
                          text: g
                        });
                      case 2:
                        k = E.sent, k && u.upsertStreamedMessage({
                          text: k.text,
                          overwrite: !0
                        });
                      case 4:
                      case "end":
                        return E.stop();
                    }
                  }, p);
                }));
                return function(p, m) {
                  return h.apply(this, arguments);
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
      var e = S(/* @__PURE__ */ f().mark(function n(a, s, o, l) {
        var u;
        return f().wrap(function(d) {
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
      var e = S(/* @__PURE__ */ f().mark(function n(a, s, o) {
        var l, u, c, d, h, p, m;
        return f().wrap(function(k) {
          for (; ; ) switch (k.prev = k.next) {
            case 0:
              return l = s[s.length - 1].text, k.next = 3, $.processRequestInterceptor(this.deepChat, {
                body: {
                  text: l
                }
              });
            case 3:
              u = k.sent, c = u.body, d = u.error, h = !!this.stream;
              try {
                d ? ($.displayError(a, new Error(d)), (h ? this.streamHandlers.onClose : this.completionsHandlers.onFinish)()) : !c || !c.text ? (p = re.INVALID_MODEL_REQUEST({
                  body: c
                }, !1), console.error(p), m = h ? this.streamHandlers.onClose : this.completionsHandlers.onFinish, $.onInterceptorError(a, p, m)) : this.generateRespByType(a, c.text, !!this.stream, o);
              } catch (_) {
                this.unloadChat(_);
              }
            case 8:
            case "end":
              return k.stop();
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
      var e = S(/* @__PURE__ */ f().mark(function n(a, s) {
        var o, l;
        return f().wrap(function(c) {
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
        if (a.role === D.USER_ROLE && a.text) {
          var o = n[s + 1];
          o != null && o.text && o.role !== D.USER_ROLE && t.push([a.text, o.text]);
        }
      });
    }
  }, {
    key: "processResponse",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a, s, o) {
        var l, u, c;
        return f().wrap(function(h) {
          for (; ; ) switch (h.prev = h.next) {
            case 0:
              return h.next = 2, (l = a.responseInterceptor) == null ? void 0 : l.call(a, o);
            case 2:
              if (h.t0 = h.sent, h.t0) {
                h.next = 5;
                break;
              }
              h.t0 = o;
            case 5:
              if (u = h.t0, !u.error) {
                h.next = 11;
                break;
              }
              return $.displayError(s, new Error(u.error)), h.abrupt("return");
            case 11:
              if (!(!u || !u.text)) {
                h.next = 15;
                break;
              }
              return c = re.INVALID_MODEL_RESPONSE(o, !!a.responseInterceptor, u), $.displayError(s, new Error(c)), h.abrupt("return");
            case 15:
              return h.abrupt("return", u);
            case 16:
            case "end":
              return h.stop();
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
}($t);
at.GENERIC_ERROR = "Error, please check the [troubleshooting](https://deepchat.dev/docs/webModel#troubleshooting) section of documentation for help.", at.MULTIPLE_MODELS_ERROR = "Cannot run multiple web models", at.WEB_LLM_NOT_FOUND_ERROR = "WebLLM module not found", at.DEFAULT_MODEL = "Llama-2-7b-chat-hf-q4f32_1", at.MODULE_SEARCH_LIMIT_S = 5;
var or = at, Gr = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
      Array.isArray(s.error) && s.error[0] === "Error in `parameters`: field required" ? n(t) : a(re.INVALID_KEY);
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
}(), Ga = /* @__PURE__ */ function(r) {
  function i(e, t, n, a, s, o) {
    var l;
    return y(this, i), l = F(this, i, [e, Gr.buildKeyVerificationDetails(), Gr.buildHeaders, s, o]), l.insertKeyPlaceholderText = "Hugging Face Token", l.keyHelpUrl = "https://huggingface.co/settings/tokens", l.introPanelMarkUp = `
    <div style="width: 100%; text-align: center; margin-left: -10px"><b>Hugging Face</b></div>
    <p>First message may take an extented amount of time to complete as the model needs to be initialized.</p>`, l.permittedErrorPrefixes = ["Authorization header"], l.url = "".concat(i.URL_PREFIX).concat(n), l.textInputPlaceholderText = t, P(a) == "object" && (a.model && (l.url = "".concat(i.URL_PREFIX).concat(a.model)), a.options && (l.rawBody.options = a.options), a.parameters && (l.rawBody.parameters = a.parameters)), l;
  }
  return B(i, r), b(i, [{
    key: "preprocessBody",
    value: function(t, n, a) {
      var s, o = JSON.parse(JSON.stringify(t)), l = n[n.length - 1].text;
      if (l) return (s = o.options) !== null && s !== void 0 || (o.options = {}), o.options.wait_for_model = !0, J({
        inputs: l
      }, o);
    }
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a, s, o) {
        var l;
        return f().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              if (this.connectSettings) {
                c.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              l = this.preprocessBody(this.rawBody, s, o), Q.request(this, l, a);
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
}(pe);
Ga.URL_PREFIX = "https://api-inference.huggingface.co/models/";
var Xe = Ga, lr = /* @__PURE__ */ function(r) {
  function i(e, t, n, a, s, o) {
    var l;
    return y(this, i), l = F(this, i, [e, t, n, a, s, o]), l.isTextInputDisabled = !0, l.canSendMessage = i.canSendFile, l;
  }
  return B(i, r), b(i, [{
    key: "preprocessBody",
    value: function(t, n, a) {
      return a[0];
    }
    // prettier-ignore
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a, s, o) {
        return f().wrap(function(u) {
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
              Q.poll(this, o[0], a, !1);
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
}(Xe), Fo = /* @__PURE__ */ function(r) {
  function i(e) {
    y(this, i);
    var t, n, a, s = (n = (t = e.directConnection) == null ? void 0 : t.huggingFace) == null ? void 0 : n.audioClassification, o = (a = e.directConnection) == null ? void 0 : a.huggingFace;
    return F(this, i, [e, "Attach an audio file", "ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition", s, o, {
      audio: {}
    }]);
  }
  return B(i, r), b(i, [{
    key: "extractPollResultData",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s;
        return f().wrap(function(l) {
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
}(lr), Bo = /* @__PURE__ */ function(r) {
  function i(e) {
    y(this, i);
    var t, n, a, s = (n = (t = e.directConnection) == null ? void 0 : t.huggingFace) == null ? void 0 : n.imageClassification, o = (a = e.directConnection) == null ? void 0 : a.huggingFace;
    return F(this, i, [e, "Attach an image file", "google/vit-base-patch16-224", s, o, {
      images: {}
    }]);
  }
  return B(i, r), b(i, [{
    key: "extractPollResultData",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s;
        return f().wrap(function(l) {
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
}(lr), Et = "data:image/png;base64,", De = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
      e.message ? a(re.INVALID_KEY) : n(t);
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
}(), Xt = /* @__PURE__ */ function(r) {
  function i(e, t, n, a, s) {
    var o;
    return y(this, i), o = F(this, i, [e, t, n, a, s]), o.insertKeyPlaceholderText = "Stability AI API Key", o.keyHelpUrl = "https://platform.stability.ai/docs/getting-started/authentication", o.permittedErrorPrefixes = ["Incorrect", "invalid_"], o;
  }
  return B(i, r), b(i);
}(pe), jo = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    y(this, i);
    var n, a = JSON.parse(JSON.stringify(e.directConnection)), s = a == null ? void 0 : a.stabilityAI, o = {
      images: {
        files: {
          acceptedFormats: ".png",
          maxNumberOfFiles: 1
        }
      }
    };
    t = F(this, i, [e, De.buildKeyVerificationDetails(), De.buildHeaders, s, o]), t.url = "https://api.stability.ai/v1/generation/esrgan-v1-x2plus/image-to-image/upscale", t.textInputPlaceholderText = "Describe image changes", t.introPanelMarkUp = `
    <div style="width: 100%; text-align: center; margin-left: -10px"><b>Stability AI</b></div>
    <div style="width: 100%; text-align: center; margin-left: -10px; margin-top: 5px"><b>Image to Image Upscale</b></div>
    <p>Upload an image to generate a new one with higher resolution.</p>
    <p>Click <a href="https://platform.stability.ai/">here</a> for more info.</p>`;
    var l = (n = a == null ? void 0 : a.stabilityAI) == null ? void 0 : n.imageToImageUpscale;
    return P(l) == "object" && (l.engine_id && (t.url = "https://api.stability.ai/v1/generation/".concat(l.engine_id, "/image-to-image/upscale")), i.cleanConfig(l), Object.assign(t.rawBody, l)), t.canSendMessage = i.canSendFileMessage, t;
  }
  return B(i, r), b(i, [{
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
      var e = S(/* @__PURE__ */ f().mark(function n(a, s, o) {
        var l;
        return f().wrap(function(c) {
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
              l = this.createFormDataBody(this.rawBody, o[0]), $.tempRemoveContentHeader(this.connectSettings, Q.request.bind(this, this, l, a), !1);
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        return f().wrap(function(o) {
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
                    src: "".concat(Et).concat(l.base64),
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
}(Xt), Uo = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    y(this, i);
    var n, a = JSON.parse(JSON.stringify(e.directConnection)), s = a == null ? void 0 : a.stabilityAI, o = {
      images: {
        files: {
          acceptedFormats: ".png",
          maxNumberOfFiles: 2
        }
      }
    };
    t = F(this, i, [e, De.buildKeyVerificationDetails(), De.buildHeaders, s, o]), t.url = "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/image-to-image/masking", t._maskSource = "MASK_IMAGE_WHITE", t.textInputPlaceholderText = "Describe image changes", t.introPanelMarkUp = `
    <div style="width: 100%; text-align: center; margin-left: -10px"><b>Stability AI</b></div>
    <div style="width: 100%; text-align: center; margin-left: -10px; margin-top: 5px"><b>Image to Image Masking</b></div>
    <p>Upload an image, its mask image to create a new one based on the changes you have described for the mask area.</p>
    <p>Click <a href="https://platform.stability.ai/">here</a> for more info.</p>`;
    var l = (n = a == null ? void 0 : a.stabilityAI) == null ? void 0 : n.imageToImageMasking;
    return P(l) == "object" && (l.engine_id && (t.url = "https://api.stability.ai/v1/generation/".concat(l.engine_id, "/image-to-image/masking")), l.weight !== void 0 && l.weight !== null && (t._imageWeight = l.weight), l.mask_source !== void 0 && l.mask_source !== null && (t._maskSource = l.mask_source), i.cleanConfig(l), Object.assign(t.rawBody, l)), t.canSendMessage = i.canSendFileTextMessage, t;
  }
  return B(i, r), b(i, [{
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
      var e = S(/* @__PURE__ */ f().mark(function n(a, s, o) {
        var l, u, c, d;
        return f().wrap(function(p) {
          for (; ; ) switch (p.prev = p.next) {
            case 0:
              if (this.connectSettings) {
                p.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              if (!(!o || !o[0] || !o[1])) {
                p.next = 4;
                break;
              }
              throw new Error("Image was not found");
            case 4:
              c = (u = (l = s[s.length - 1]) == null ? void 0 : l.text) == null ? void 0 : u.trim(), d = this.createFormDataBody(this.rawBody, o[0], o[1], c), $.tempRemoveContentHeader(this.connectSettings, Q.request.bind(this, this, d, a), !1);
            case 6:
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        return f().wrap(function(o) {
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
                    src: "".concat(Et).concat(l.base64),
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
}(Xt), Ho = /* @__PURE__ */ function(r) {
  function i(e) {
    y(this, i);
    var t, n, a, s = (n = (t = e.directConnection) == null ? void 0 : t.huggingFace) == null ? void 0 : n.audioSpeechRecognition, o = (a = e.directConnection) == null ? void 0 : a.huggingFace;
    return F(this, i, [e, "Attach an audio file", "facebook/wav2vec2-large-960h-lv60-self", s, o, {
      audio: {}
    }]);
  }
  return B(i, r), b(i, [{
    key: "extractPollResultData",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        return f().wrap(function(o) {
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
}(lr), qo = /* @__PURE__ */ function(r) {
  function i(e) {
    y(this, i);
    var t, n, a, s = (n = (t = e.directConnection) == null ? void 0 : t.huggingFace) == null ? void 0 : n.textGeneration, o = (a = e.directConnection) == null ? void 0 : a.huggingFace;
    return F(this, i, [e, "Once upon a time", "gpt2", s, o]);
  }
  return B(i, r), b(i, [{
    key: "extractResultData",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s;
        return f().wrap(function(l) {
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
}(Xe), zo = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    y(this, i);
    var n, a, s, o = (a = (n = e.directConnection) == null ? void 0 : n.huggingFace) == null ? void 0 : a.questionAnswer, l = (s = e.directConnection) == null ? void 0 : s.huggingFace;
    return t = F(this, i, [e, "Ask a question", "bert-large-uncased-whole-word-masking-finetuned-squad", o, l]), t.permittedErrorPrefixes = ["Authorization header", "Error in"], t.context = o.context, t;
  }
  return B(i, r), b(i, [{
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        return f().wrap(function(o) {
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
}(Xe), Vo = /* @__PURE__ */ function(r) {
  function i(e) {
    y(this, i);
    var t, n, a, s = (n = (t = e.directConnection) == null ? void 0 : t.huggingFace) == null ? void 0 : n.summarization, o = (a = e.directConnection) == null ? void 0 : a.huggingFace;
    return F(this, i, [e, "Insert text to summarize", "facebook/bart-large-cnn", s, o]);
  }
  return B(i, r), b(i, [{
    key: "extractResultData",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s;
        return f().wrap(function(l) {
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
}(Xe), Go = /* @__PURE__ */ function(r) {
  function i(e) {
    var t, n;
    y(this, i);
    var a, s, o, l = (s = (a = e.directConnection) == null ? void 0 : a.huggingFace) == null ? void 0 : s.conversation, u = (o = e.directConnection) == null ? void 0 : o.huggingFace;
    return n = F(this, i, [e, "Ask me anything!", "facebook/blenderbot-400M-distill", l, u]), (t = n.maxMessages) !== null && t !== void 0 || (n.maxMessages = -1), n;
  }
  return B(i, r), b(i, [{
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
      if (o) return (a = s.options) !== null && a !== void 0 || (s.options = {}), s.options.wait_for_model = !0, J({
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        return f().wrap(function(o) {
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
}(Xe), $o = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    y(this, i);
    var n, a = JSON.parse(JSON.stringify(e.directConnection)), s = a.stabilityAI, o = {
      images: {
        files: {
          acceptedFormats: ".png",
          maxNumberOfFiles: 1
        }
      }
    };
    t = F(this, i, [e, De.buildKeyVerificationDetails(), De.buildHeaders, s, o]), t.url = "https://api.stability.ai/v1/generation/stable-diffusion-v1-6/image-to-image", t.textInputPlaceholderText = "Describe image changes", t.introPanelMarkUp = `
    <div style="width: 100%; text-align: center; margin-left: -10px"><b>Stability AI: Image to Image</b></div>
    <p>Upload an image to create a new one with the changes you have described.</p>
    <p>Click <a href="https://platform.stability.ai/">here</a> for more info.</p>`;
    var l = (n = a.stabilityAI) == null ? void 0 : n.imageToImage;
    return P(l) == "object" && (l.engine_id && (t.url = "https://api.stability.ai/v1/generation/".concat(l.engine_id, "/text-to-image")), l.weight !== void 0 && l.weight !== null && (t._imageWeight = l.weight), i.cleanConfig(l), Object.assign(t.rawBody, l)), t.canSendMessage = i.canSendFileTextMessage, t;
  }
  return B(i, r), b(i, [{
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
      var e = S(/* @__PURE__ */ f().mark(function n(a, s, o) {
        var l, u, c, d;
        return f().wrap(function(p) {
          for (; ; ) switch (p.prev = p.next) {
            case 0:
              if (this.connectSettings) {
                p.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              if (o) {
                p.next = 4;
                break;
              }
              throw new Error("Image was not found");
            case 4:
              c = (u = (l = s[s.length - 1]) == null ? void 0 : l.text) == null ? void 0 : u.trim(), d = this.createFormDataBody(this.rawBody, o[0], c), $.tempRemoveContentHeader(this.connectSettings, Q.request.bind(this, this, d, a), !1);
            case 6:
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        return f().wrap(function(o) {
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
                    src: "".concat(Et).concat(l.base64),
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
}(Xt), Wo = /* @__PURE__ */ function(r) {
  function i(e) {
    y(this, i);
    var t, n, a, s = (n = (t = e.directConnection) == null ? void 0 : t.huggingFace) == null ? void 0 : n.translation, o = (a = e.directConnection) == null ? void 0 : a.huggingFace;
    return F(this, i, [e, "Insert text to translate", "Helsinki-NLP/opus-tatoeba-en-ja", s, o]);
  }
  return B(i, r), b(i, [{
    key: "extractResultData",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s;
        return f().wrap(function(l) {
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
}(Xe), Ko = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    y(this, i);
    var n, a = JSON.parse(JSON.stringify(e.directConnection)), s = a.stabilityAI;
    t = F(this, i, [e, De.buildKeyVerificationDetails(), De.buildHeaders, s]), t.url = "https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image", t.textInputPlaceholderText = "Describe an image", t.introPanelMarkUp = `
    <div style="width: 100%; text-align: center; margin-left: -10px"><b>Stability AI: Text to Image</b></div>
    <p>Insert text to generate an image.</p>
    <p>Click <a href="https://platform.stability.ai/">here</a> for more info.</p>`;
    var o = (n = a.stabilityAI) == null ? void 0 : n.textToImage;
    return P(o) == "object" && (o.engine_id && (t.url = "https://api.stability.ai/v1/generation/".concat(o.engine_id, "/text-to-image")), o.weight !== void 0 && o.weight !== null && (t._imageWeight = o.weight), i.cleanConfig(o), Object.assign(t.rawBody, o)), t.canSendMessage = i.canSendTextMessage, t;
  }
  return B(i, r), b(i, [{
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
      var e = S(/* @__PURE__ */ f().mark(function n(a, s) {
        var o;
        return f().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              if (this.connectSettings) {
                u.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              o = this.preprocessBody(this.rawBody, s[s.length - 1].text), Q.request(this, o, a);
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        return f().wrap(function(o) {
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
                    src: "".concat(Et).concat(l.base64),
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
}(Xt), Jo = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    y(this, i);
    var n, a, s, o = (a = (n = e.directConnection) == null ? void 0 : n.huggingFace) == null ? void 0 : a.fillMask, l = (s = e.directConnection) == null ? void 0 : s.huggingFace;
    return t = F(this, i, [e, "The goal of life is [MASK].", "bert-base-uncased", o, l]), t.introPanelMarkUp = `
    <div style="width: 100%; text-align: center; margin-left: -10px"><b>Hugging Face</b></div>
    <p>Insert a sentence with the word [MASK] and the model will try to fill it for you. E.g. I want [MASK].</p>
    <p>First message may take an extented amount of time to complete as the model needs to be initialized.</p>`, t.permittedErrorPrefixes = ["Authorization header", "No mask_token"], t;
  }
  return B(i, r), b(i, [{
    key: "extractResultData",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s;
        return f().wrap(function(l) {
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
}(Xe), $a = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
      s.error ? s.error.code === "invalid_api_key" ? a(re.INVALID_KEY) : a(re.CONNECTION_FAILED) : n(t);
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
      var i = S(/* @__PURE__ */ f().mark(function t(n, a, s) {
        var o, l, u = arguments;
        return f().wrap(function(d) {
          for (; ; ) switch (d.prev = d.next) {
            case 0:
              return o = u.length > 3 && u[3] !== void 0 ? u[3] : !0, n.connectSettings.method = s, d.next = 4, $.fetch(n, n.connectSettings.headers, o, a).then(function(h) {
                return $.processResponseByType(h);
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
$a.FUNCTION_TOOL_RESP_ERROR = "Response object must either be {response: string}[] for each individual function or {text: string} for a direct response, see https://deepchat.dev/docs/directConnection/OpenAI#FunctionHandler.";
var oe = $a, zn = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "storeFiles",
    value: function() {
      var i = S(/* @__PURE__ */ f().mark(function t(n, a, s, o) {
        var l, u, c, d;
        return f().wrap(function(p) {
          for (; ; ) switch (p.prev = p.next) {
            case 0:
              if (l = n.connectSettings.headers, l) {
                p.next = 3;
                break;
              }
              return p.abrupt("return");
            case 3:
              return n.url = o, u = l[$.CONTENT_TYPE], delete l[$.CONTENT_TYPE], c = s.map(/* @__PURE__ */ function() {
                var m = S(/* @__PURE__ */ f().mark(function g(k) {
                  var _;
                  return f().wrap(function(M) {
                    for (; ; ) switch (M.prev = M.next) {
                      case 0:
                        return _ = new FormData(), M.abrupt("return", (_.append("purpose", "assistants"), _.append("file", k), new Promise(function(A) {
                          A(oe.directFetch(n, _, "POST", !1));
                        })));
                      case 2:
                      case "end":
                        return M.stop();
                    }
                  }, g);
                }));
                return function(g) {
                  return m.apply(this, arguments);
                };
              }()), p.prev = 7, p.next = 10, Promise.all(c);
            case 10:
              return d = p.sent.map(function(m) {
                return {
                  id: m.id,
                  name: m.filename
                };
              }), p.abrupt("return", (l[$.CONTENT_TYPE] = u, d));
            case 14:
              throw p.prev = 14, p.t0 = p.catch(7), l[$.CONTENT_TYPE] = u, $.displayError(a, p.t0), n.completionsHandlers.onFinish(), p.t0;
            case 17:
            case "end":
              return p.stop();
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
      var i = S(/* @__PURE__ */ f().mark(function t(n, a, s, o) {
        var l, u;
        return f().wrap(function(d) {
          for (; ; ) switch (d.prev = d.next) {
            case 0:
              return l = a.map(function(h) {
                var p = h.fileId;
                return n.url = "".concat(s).concat(p).concat(o), new Promise(function(m) {
                  m(oe.directFetch(n, void 0, "GET", !1));
                });
              }), d.next = 3, Promise.all(l);
            case 3:
              return u = d.sent.map(function(h, p) {
                return new Promise(function(m) {
                  var g = new FileReader();
                  g.readAsDataURL(h), g.onload = function(k) {
                    m({
                      src: k.target.result,
                      name: a[p].name,
                      type: r.getType(a, p)
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
      var i = S(/* @__PURE__ */ f().mark(function t(n, a, s, o, l) {
        var u, c, d, h, p;
        return f().wrap(function(g) {
          for (; ; ) switch (g.prev = g.next) {
            case 0:
              if (h = s.getFilesPrefix, p = s.getFilesPostfix, g.t0 = a.length > 0, !g.t0) {
                g.next = 7;
                break;
              }
              return g.next = 5, r.getFiles(n, a, h, p);
            case 5:
              d = g.sent, (u = l == null ? void 0 : l.text) != null && u.value && d.forEach(function(k, _) {
                var E;
                if (k.src) {
                  var M = a[_].path;
                  (E = l == null ? void 0 : l.text) != null && E.value && M && (l.text.value = l.text.value.replace(M, k.src));
                }
              });
            case 7:
              return g.abrupt("return", (c = l == null ? void 0 : l.text) != null && c.value ? {
                text: l.text.value,
                role: o
              } : {
                files: d,
                role: o
              });
            case 8:
            case "end":
              return g.stop();
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
      var i = S(/* @__PURE__ */ f().mark(function t(n, a, s, o) {
        var l;
        return f().wrap(function(c) {
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
        var s = S(/* @__PURE__ */ f().mark(function o(l) {
          return f().wrap(function(c) {
            for (; ; ) switch (c.prev = c.next) {
              case 0:
                l.content.filter(function(d) {
                  return !!d.text || !!d.image_file;
                }).sort(function(d) {
                  return d.text ? -1 : d.image_file ? 1 : 0;
                }).forEach(/* @__PURE__ */ function() {
                  var d = S(/* @__PURE__ */ f().mark(function h(p) {
                    return f().wrap(function(g) {
                      for (; ; ) switch (g.prev = g.next) {
                        case 0:
                          a.push(r.getFilesAndText(e, l, n, p));
                        case 1:
                        case "end":
                          return g.stop();
                      }
                    }, h);
                  }));
                  return function(h) {
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
      var i = S(/* @__PURE__ */ f().mark(function t(n, a, s) {
        return f().wrap(function(l) {
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
      var i = S(/* @__PURE__ */ f().mark(function t(n, a, s, o) {
        var l;
        return f().wrap(function(c) {
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
zn.FILES_WITH_TEXT_ERROR = "content with type `text` must have `text` values", zn.FUNCTION_TOOL_RESP_ERROR = "Response must contain an array of strings for each individual function/tool_call, see https://deepchat.dev/docs/directConnection/OpenAI/#assistant-functions.";
var Be = zn, Wa = /* @__PURE__ */ function(r) {
  function i(e, t, n, a, s, o) {
    var l;
    if (y(this, i), l = F(this, i, [e, a, s, o]), l.insertKeyPlaceholderText = "OpenAI API Key", l.keyHelpUrl = "https://platform.openai.com/account/api-keys", l.url = "", l.permittedErrorPrefixes = ["Incorrect", "Please send text", ir.FAILED_ERROR_MESSAGE], l.shouldFetchHistory = !1, l.searchedForThreadId = !1, l.config = {}, l.newAssistantDetails = {
      model: "gpt-4"
    }, l.waitingForStreamResponse = !1, l.isSSEStream = !1, l.urlSegments = n, P(t) == "object") {
      l.config = t;
      var u = l.config, c = u.new_assistant, d = u.thread_id, h = u.load_thread_history;
      Object.assign(l.newAssistantDetails, c), d && (l.sessionId = d), h && (l.shouldFetchHistory = !0);
    }
    return l.maxMessages = 1, l.isSSEStream = !!(l.stream && (P(l.stream) != "object" || !l.stream.simulation)), l;
  }
  return B(i, r), b(i, [{
    key: "fetchHistoryFunc",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n() {
        var a = this, s;
        return f().wrap(function(l) {
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
      var a = this.totalMessagesMaxCharLength || -1, s = sr.getCharacterLimitMessages(t, a)[0];
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
          return !me.isImageFileExtension(d);
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
        Q.request(this, s, t);
      } else {
        this.url = "".concat(this.urlSegments.threadsPrefix, "/runs").concat(this.urlSegments.threadsPosfix);
        var o = this.createNewThreadMessages(this.rawBody, n, a);
        this.isSSEStream ? this.createStreamRun(o) : Q.request(this, o, t);
      }
    }
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a, s, o) {
        var l, u, c;
        return f().wrap(function(h) {
          for (; ; ) switch (h.prev = h.next) {
            case 0:
              if (this.waitingForStreamResponse = !1, !!this.connectSettings) {
                h.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              if (!((l = (u = this.rawBody).assistant_id) !== null && l !== void 0)) {
                h.next = 6;
                break;
              }
              h.next = 12;
              break;
            case 6:
              if (h.t0 = this.config.assistant_id, h.t0) {
                h.next = 11;
                break;
              }
              return h.next = 10, this.createNewAssistant();
            case 10:
              h.t0 = h.sent;
            case 11:
              u.assistant_id = h.t0;
            case 12:
              if (this.searchedForThreadId || this.searchPreviousMessagesForThreadId(a.messageToElements), !o) {
                h.next = 19;
                break;
              }
              return h.next = 16, Be.storeFiles(this, a, o, this.urlSegments.storeFiles);
            case 16:
              h.t1 = h.sent, h.next = 20;
              break;
            case 19:
              h.t1 = void 0;
            case 20:
              c = h.t1, this.connectSettings.method = "POST", this.callService(a, s, c);
            case 22:
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
    key: "createNewAssistant",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n() {
        var a;
        return f().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              return o.prev = 0, this.url = this.urlSegments.newAssistantUrl, o.next = 4, oe.directFetch(this, JSON.parse(JSON.stringify(this.newAssistantDetails)), "POST");
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
        var s = Xn(a, 1), o = s[0];
        return o._sessionId;
      });
      n && (this.sessionId = n[0]._sessionId), this.searchedForThreadId = !0;
    }
    // prettier-ignore
  }, {
    key: "extractResultData",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s, o, l;
        return f().wrap(function(c) {
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
              throw a.error.message.startsWith(Be.FILES_WITH_TEXT_ERROR) ? Error("Please send text with your file(s)") : a.error.message;
            case 6:
              return c.next = 8, this.assignThreadAndRun(a);
            case 8:
              return o = "".concat(this.urlSegments.threadsPrefix, "/").concat(this.sessionId, "/runs/").concat(this.run_id).concat(this.urlSegments.threadsPosfix), l = {
                method: "GET",
                headers: (s = this.connectSettings) == null ? void 0 : s.headers
              }, c.abrupt("return", (Q.executePollRequest(this, o, l, this.messages), {
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s;
        return f().wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              if (!this.sessionId) {
                l.next = 8;
                break;
              }
              return this.url = "".concat(this.urlSegments.threadsPrefix, "/").concat(this.sessionId, "/runs").concat(this.urlSegments.threadsPosfix), l.next = 4, oe.directFetch(this, JSON.parse(JSON.stringify(this.rawBody)), "POST");
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s, o, l, u, c = arguments;
        return f().wrap(function(h) {
          for (; ; ) switch (h.prev = h.next) {
            case 0:
              return s = c.length > 1 && c[1] !== void 0 ? c[1] : !1, this.url = "".concat(this.urlSegments.threadsPrefix, "/").concat(a, "/messages?").concat(this.urlSegments.listMessagesPostfix), h.next = 4, oe.directFetch(this, {}, "GET");
            case 4:
              if (u = h.sent, h.t0 = !s && this.deepChat.responseInterceptor, !h.t0) {
                h.next = 10;
                break;
              }
              return h.next = 9, (l = (o = this.deepChat).responseInterceptor) == null ? void 0 : l.call(o, u);
            case 9:
              u = h.sent;
            case 10:
              return h.abrupt("return", Be.processAPIMessages(this, u, s, this.urlSegments));
            case 11:
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
    key: "extractPollResultData",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s = this, o, l, u, c, d, h, p, m;
        return f().wrap(function(k) {
          for (; ; ) switch (k.prev = k.next) {
            case 0:
              if (l = a.status, u = a.required_action, !(l === "queued" || l === "in_progress")) {
                k.next = 3;
                break;
              }
              return k.abrupt("return", {
                timeoutMS: i.POLLING_TIMEOUT_MS
              });
            case 3:
              if (!(l === "completed" && this.messages)) {
                k.next = 11;
                break;
              }
              return k.next = 6, this.getThreadMessages(a.thread_id);
            case 6:
              return c = k.sent, d = c.shift(), h = d.text, p = d.files, k.abrupt("return", (setTimeout(function() {
                c.forEach(function(_) {
                  return s.deepChat.addMessage(_);
                });
              }), {
                text: h,
                _sessionId: this.sessionId,
                files: p
              }));
            case 11:
              if (m = (o = u == null ? void 0 : u.submit_tool_outputs) == null ? void 0 : o.tool_calls, !(l === "requires_action" && m)) {
                k.next = 16;
                break;
              }
              return k.next = 15, this.handleTools(m);
            case 15:
              return k.abrupt("return", k.sent);
            case 16:
              throw Error("Thread run status: ".concat(l));
            case 17:
            case "end":
              return k.stop();
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s, o, l, u, c, d;
        return f().wrap(function(p) {
          for (; ; ) switch (p.prev = p.next) {
            case 0:
              if (this.functionHandler) {
                p.next = 2;
                break;
              }
              throw Error("Please define the `function_handler` property inside the [openAI](https://deepchat.dev/docs/directConnection/openAI#Assistant) object.");
            case 2:
              return s = a.map(function(m) {
                return {
                  name: m.function.name,
                  arguments: m.function.arguments
                };
              }), p.next = 5, this.functionHandler(s);
            case 5:
              if (o = p.sent, !(!Array.isArray(o) || a.length !== o.length)) {
                p.next = 8;
                break;
              }
              throw Error(Be.FUNCTION_TOOL_RESP_ERROR);
            case 8:
              return p.next = 10, Promise.all(o);
            case 10:
              if (l = p.sent, !l.find(function(m) {
                return typeof m != "string";
              })) {
                p.next = 13;
                break;
              }
              throw Error(Be.FUNCTION_TOOL_RESP_ERROR);
            case 13:
              if (u = l.map(function(m, g) {
                return {
                  tool_call_id: a[g].id,
                  output: m
                };
              }), c = "".concat(this.urlSegments.threadsPrefix, "/").concat(this.sessionId), d = "/runs/".concat(this.run_id, "/submit_tool_outputs").concat(this.urlSegments.threadsPosfix), this.url = "".concat(c).concat(d), !this.isSSEStream) {
                p.next = 20;
                break;
              }
              return p.next = 18, this.createStreamRun({
                tool_outputs: u
              });
            case 18:
              p.next = 22;
              break;
            case 20:
              return p.next = 22, oe.directFetch(this, {
                tool_outputs: u
              }, "POST");
            case 22:
              return p.abrupt("return", {
                timeoutMS: i.POLLING_TIMEOUT_MS
              });
            case 23:
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
    key: "handleStream",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s, o, l, u;
        return f().wrap(function(d) {
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s, o, l, u, c, d, h, p, m, g;
        return f().wrap(function(_) {
          for (; ; ) switch (_.prev = _.next) {
            case 0:
              if (!(a.content && a.content.length > 0 && this.messages)) {
                _.next = 5;
                break;
              }
              if (d = a.content.find(function(E) {
                return E.text;
              }), !((s = d == null ? void 0 : d.text) != null && s.annotations && d.text.annotations.length > 0)) {
                _.next = 5;
                break;
              }
              return h = a.content.find(function(E) {
                return !!E.text;
              }) || a.content[0], p = Be.getFilesAndText.bind(this, this, {
                role: "assistant",
                content: a.content
              }, this.urlSegments, h), _.abrupt("return", ((o = this.messageStream) == null || o.endStreamAfterFileDownloaded(this.messages, p), {
                text: ""
              }));
            case 5:
              if (!((l = a.delta) != null && l.content)) {
                _.next = 14;
                break;
              }
              if (!(a.delta.content.length > 1)) {
                _.next = 13;
                break;
              }
              if (m = a.delta.content.find(function(E) {
                return E.text;
              }), !((u = m == null ? void 0 : m.text) != null && u.annotations && m.text.annotations.length === 0)) {
                _.next = 13;
                break;
              }
              return _.next = 11, Be.processStreamMessages(this, a.delta.content, this.urlSegments);
            case 11:
              return g = _.sent, _.abrupt("return", {
                text: g[0].text,
                files: g[1].files
              });
            case 13:
              return _.abrupt("return", {
                text: (c = a.delta.content[0].text) == null ? void 0 : c.value
              });
            case 14:
              return _.abrupt("return", (!this.sessionId && a.thread_id && (this.sessionId = a.thread_id), {
                makingAnotherRequest: !0
              }));
            case 15:
            case "end":
              return _.stop();
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        return f().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              return a.stream = !0, this.waitingForStreamResponse = !0, o.next = 4, se.request(this, a, this.messages, !0, !0);
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
        return me.isImageFileExtension(s.name);
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
}(pe);
Wa.POLLING_TIMEOUT_MS = 800;
var Ka = Wa, Ja = /* @__PURE__ */ function(r) {
  function i(e) {
    var t, n, a;
    y(this, i);
    var s, o, l, u, c, d = JSON.parse(JSON.stringify(e.directConnection)), h = d.openAI, p = (s = d.openAI) == null ? void 0 : s.assistant;
    if (a = F(this, i, [e, p, i.URL_SEGMENTS, oe.buildKeyVerificationDetails(), oe.buildHeaders, h]), (t = (o = a.connectSettings).headers) !== null && t !== void 0 || (o.headers = {}), (n = (l = a.connectSettings.headers)["OpenAI-Beta"]) !== null && n !== void 0 || (l["OpenAI-Beta"] = "assistants=v2"), a.shouldFetchHistory && a.sessionId && (a.fetchHistory = a.fetchHistoryFunc.bind(it(a))), P(p) == "object") {
      var m = (c = (u = e.directConnection) == null ? void 0 : u.openAI) == null ? void 0 : c.assistant, g = m.function_handler, k = m.files_tool_type;
      g && (a.functionHandler = g), k && (a.filesToolType = k);
    }
    return a;
  }
  return B(i, r), b(i);
}(Ka);
Ja.URL_SEGMENTS = {
  threadsPrefix: "https://api.openai.com/v1/threads",
  threadsPosfix: "",
  newAssistantUrl: "https://api.openai.com/v1/assistants",
  createMessagePostfix: "",
  listMessagesPostfix: "order=desc",
  storeFiles: "https://api.openai.com/v1/files",
  getFilesPrefix: "https://api.openai.com/v1/files/",
  getFilesPostfix: "/content"
};
var Yo = Ja, $r = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
      (s = e.message) != null && s.includes("invalid request: prompt must be at least 1 token long") ? n(t) : a(re.INVALID_KEY);
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
}(), ur = /* @__PURE__ */ function(r) {
  function i(e, t, n, a, s) {
    var o;
    return y(this, i), o = F(this, i, [e, $r.buildKeyVerificationDetails(), $r.buildHeaders, s]), o.insertKeyPlaceholderText = "Cohere API Key", o.keyHelpUrl = "https://dashboard.cohere.ai/api-keys", o.permittedErrorPrefixes = ["invalid"], o.url = t, o.textInputPlaceholderText = n, a && P(a) == "object" && Object.assign(o.rawBody, a), o;
  }
  return B(i, r), b(i);
}(pe), Xo = /* @__PURE__ */ function(r) {
  function i(e) {
    y(this, i);
    var t, n, a, s = (n = (t = e.directConnection) == null ? void 0 : t.cohere) == null ? void 0 : n.textGeneration, o = (a = e.directConnection) == null ? void 0 : a.cohere;
    return F(this, i, [e, "https://api.cohere.ai/v1/generate", "Once upon a time", s, o]);
  }
  return B(i, r), b(i, [{
    key: "preprocessBody",
    value: function(t, n) {
      var a = JSON.parse(JSON.stringify(t)), s = n[n.length - 1].text;
      if (s) return J({
        prompt: s
      }, a);
    }
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a, s) {
        var o;
        return f().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              if (this.connectSettings) {
                u.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              o = this.preprocessBody(this.rawBody, s), Q.request(this, o, a);
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s;
        return f().wrap(function(l) {
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
}(ur), Ya = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
        handleVerificationResult: oe.handleVerificationResult
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
Ya.URL_DETAILS_ERROR_MESSAGE = "Please define the Azure URL Details. [More Information](https://deepchat.dev/docs/directConnection/Azure)";
var Ae = Ya, Vn = /* @__PURE__ */ function(r) {
  function i(e) {
    var t, n;
    y(this, i);
    var a, s, o, l, u, c, d, h, p = JSON.parse(JSON.stringify(e.directConnection)), m = p.azure, g = (a = p.azure) == null ? void 0 : a.openAI, k = (g == null ? void 0 : g.urlDetails) || {}, _ = "".concat((s = g == null ? void 0 : g.urlDetails) == null ? void 0 : s.endpoint, "/openai/"), E = "?api-version=".concat((o = g == null ? void 0 : g.urlDetails) == null ? void 0 : o.version), M = {
      threadsPrefix: "".concat(_).concat(i.THREAD_RESOURCE),
      threadsPosfix: E,
      newAssistantUrl: "".concat(_).concat(i.NEW_ASSISTANT_RESOURCE).concat(E),
      createMessagePostfix: E,
      listMessagesPostfix: "order=desc&api-version=".concat((l = g == null ? void 0 : g.urlDetails) == null ? void 0 : l.version),
      storeFiles: "".concat(_, "files").concat(E),
      getFilesPrefix: "".concat(_, "files/"),
      getFilesPostfix: "/content".concat(E)
    };
    if (n = F(this, i, [e, g == null ? void 0 : g.assistant, M, Ae.buildKeyVerificationDetails(k), Ae.buildHeaders, m]), n.permittedErrorPrefixes = [Ae.URL_DETAILS_ERROR_MESSAGE], n.insertKeyPlaceholderText = "Azure OpenAI API Key", n.keyHelpUrl = "https://learn.microsoft.com/en-us/answers/questions/1193991/how-to-get-the-value-of-openai-api-key", n.isTextInputDisabled = !1, P(g == null ? void 0 : g.assistant) == "object") {
      var A = (d = (c = (u = e.directConnection) == null ? void 0 : u.azure) == null ? void 0 : c.openAI) == null ? void 0 : d.assistant, C = A.function_handler, U = A.files_tool_type;
      C && (n.functionHandler = C), U && (n.filesToolType = U);
    }
    return Ae.validateURLDetails(k) ? (t = (h = n.connectSettings).headers) !== null && t !== void 0 || (h.headers = {}) : (n.isTextInputDisabled = !0, n.canSendMessage = function() {
      return !1;
    }, setTimeout(function() {
      e.addMessage({
        error: Ae.URL_DETAILS_ERROR_MESSAGE
      });
    })), n;
  }
  return B(i, r), b(i);
}(Ka);
Vn.THREAD_RESOURCE = "threads", Vn.NEW_ASSISTANT_RESOURCE = "assistants";
var Zo = Vn, Qo = /* @__PURE__ */ function(r) {
  function i(e) {
    y(this, i);
    var t, n, a, s = (n = (t = e.directConnection) == null ? void 0 : t.cohere) == null ? void 0 : n.summarization, o = (a = e.directConnection) == null ? void 0 : a.cohere;
    return F(this, i, [e, "https://api.cohere.ai/v1/summarize", "Insert text to summarize", s, o]);
  }
  return B(i, r), b(i, [{
    key: "preprocessBody",
    value: function(t, n) {
      var a = JSON.parse(JSON.stringify(t)), s = n[n.length - 1].text;
      if (s) return J({
        text: s
      }, a);
    }
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a, s) {
        var o;
        return f().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              if (this.connectSettings) {
                u.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              o = this.preprocessBody(this.rawBody, s), Q.request(this, o, a);
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        return f().wrap(function(o) {
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
}(ur), Gn = /* @__PURE__ */ function(r) {
  function i(e) {
    var t, n, a;
    y(this, i);
    var s, o, l, u = JSON.parse(JSON.stringify(e.directConnection)), c = u == null ? void 0 : u.openAI;
    a = F(this, i, [e, oe.buildKeyVerificationDetails(), oe.buildHeaders, c]), a.insertKeyPlaceholderText = "OpenAI API Key", a.keyHelpUrl = "https://platform.openai.com/account/api-keys", a.url = "https://api.openai.com/v1/audio/speech", a.permittedErrorPrefixes = ["Invalid"], a.introPanelMarkUp = `
    <div style="width: 100%; text-align: center; margin-left: -10px"><b>OpenAI : Text To Speech</b></div>
    <p>Generate an audio file based on your text input.</p>
    <p>Click <a href="https://platform.openai.com/docs/guides/text-to-speech">here</a> for more information.</p>`;
    var d = (s = u == null ? void 0 : u.openAI) == null ? void 0 : s.textToSpeech;
    return P(d) == "object" && Object.assign(a.rawBody, d), (t = (o = a.rawBody).model) !== null && t !== void 0 || (o.model = i.DEFAULT_MODEL), (n = (l = a.rawBody).voice) !== null && n !== void 0 || (l.voice = i.DEFAULT_VOIDE), a.textInputPlaceholderText = "Insert text to generate audio", a.rawBody.response_format = "mp3", a;
  }
  return B(i, r), b(i, [{
    key: "preprocessBody",
    value: function(t, n) {
      var a, s, o = JSON.parse(JSON.stringify(t)), l = (s = (a = n[n.length - 1]) == null ? void 0 : a.text) == null ? void 0 : s.trim();
      return l && l !== "" && (o.input = l), o;
    }
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a, s) {
        var o, l;
        return f().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              if ((o = this.connectSettings) != null && o.headers) {
                c.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              this.url = this.connectSettings.url || this.url, l = this.preprocessBody(this.rawBody, s), Q.request(this, l, a);
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        return f().wrap(function(o) {
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
}(pe);
Gn.DEFAULT_MODEL = "tts-1", Gn.DEFAULT_VOIDE = "alloy";
var el = Gn, jt = /* @__PURE__ */ function(r) {
  function i(e) {
    var t, n;
    y(this, i);
    var a, s, o = JSON.parse(JSON.stringify(e.directConnection)), l = o == null ? void 0 : o.openAI;
    n = F(this, i, [e, oe.buildKeyVerificationDetails(), oe.buildHeaders, l, {
      audio: {}
    }]), n.insertKeyPlaceholderText = "OpenAI API Key", n.keyHelpUrl = "https://platform.openai.com/account/api-keys", n.introPanelMarkUp = `
    <div style="width: 100%; text-align: center; margin-left: -10px"><b>OpenAI : Speech To Text</b></div>
    <p><b>Upload an audio file</b> to transcribe it into text. You can optionally provide text to guide the audio
      processing.
    <p>Click <a href="https://platform.openai.com/docs/guides/speech-to-text">here</a> for more info.</p>`, n.url = "", n.permittedErrorPrefixes = ["Invalid"], n.textInputPlaceholderText = "Upload an audio file", n._service_url = i.AUDIO_TRANSCRIPTIONS_URL;
    var u = (a = o == null ? void 0 : o.openAI) == null ? void 0 : a.audio;
    return P(u) == "object" && (n.processConfig(u), i.cleanConfig(u), Object.assign(n.rawBody, u)), (t = (s = n.rawBody).model) !== null && t !== void 0 || (s.model = i.DEFAULT_MODEL), n.rawBody.response_format = "json", n.canSendMessage = i.canSendFileMessage, n;
  }
  return B(i, r), b(i, [{
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
      var e = S(/* @__PURE__ */ f().mark(function n(a, s, o) {
        var l, u, c;
        return f().wrap(function(h) {
          for (; ; ) switch (h.prev = h.next) {
            case 0:
              if ((l = this.connectSettings) != null && l.headers) {
                h.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              if (o != null && o[0]) {
                h.next = 4;
                break;
              }
              throw new Error("No file was added");
            case 4:
              this.url = this.connectSettings.url || this._service_url, u = this.preprocessBody(this.rawBody, s), c = i.createFormDataBody(u, o[0]), $.tempRemoveContentHeader(this.connectSettings, Q.request.bind(this, this, c, a), !1);
            case 7:
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        return f().wrap(function(o) {
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
}(pe);
jt.AUDIO_TRANSCRIPTIONS_URL = "https://api.openai.com/v1/audio/transcriptions", jt.AUDIO_TRANSLATIONS_URL = "https://api.openai.com/v1/audio/translations", jt.DEFAULT_MODEL = "whisper-1";
var tl = jt, We = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
      e.error ? a(re.INVALID_KEY) : n(t);
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
      ((s = e.error) == null ? void 0 : s.code) === "401" ? a(re.INVALID_KEY) : n(t);
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
        !Array.isArray(s) && s.error.code === 401e3 ? a(re.INVALID_KEY) : n(t);
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
}(), nl = /* @__PURE__ */ function(r) {
  function i(e, t, n, a, s) {
    var o;
    return y(this, i), o = F(this, i, [e, We.buildLanguageKeyVerificationDetails(n), t, a, s]), o.insertKeyPlaceholderText = "Azure Language Subscription Key", o.keyHelpUrl = // eslint-disable-next-line max-len
    "https://learn.microsoft.com/en-us/azure/api-management/api-management-subscriptions#create-and-manage-subscriptions-in-azure-portal", o.permittedErrorPrefixes = ["Access"], o;
  }
  return B(i, r), b(i);
}(pe), Xa = /* @__PURE__ */ function(r) {
  function i(e) {
    var t, n;
    y(this, i);
    var a, s, o, l, u = (s = (a = e.directConnection) == null ? void 0 : a.azure) == null ? void 0 : s.summarization, c = (o = e.directConnection) == null ? void 0 : o.azure;
    return n = F(this, i, [e, We.buildSummarizationHeader, u.endpoint, c]), n.permittedErrorPrefixes = [i.ENDPOINT_ERROR_MESSAGE], n.url = "", n.textInputPlaceholderText = "Insert text to summarize", n.isTextInputDisabled = !1, u.endpoint ? ((t = (l = n.rawBody).language) !== null && t !== void 0 || (l.language = "en"), Object.assign(n.rawBody, u), n.url = "".concat(u.endpoint, "/language/analyze-text/jobs?api-version=2022-10-01-preview")) : (n.isTextInputDisabled = !0, n.canSendMessage = function() {
      return !1;
    }, setTimeout(function() {
      e.addMessage({
        error: i.ENDPOINT_ERROR_MESSAGE
      });
    })), n;
  }
  return B(i, r), b(i, [{
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
      var e = S(/* @__PURE__ */ f().mark(function n(a, s) {
        var o;
        return f().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              if (this.connectSettings) {
                u.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              o = this.preprocessBody(this.rawBody, s), Q.request(this, o, a), this.messages = a;
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s, o, l;
        return f().wrap(function(c) {
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
              }, Q.executePollRequest(this, o, l, this.messages)), c.abrupt("return", {
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s, o, l, u;
        return f().wrap(function(d) {
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
              s = "", o = gi(a.tasks.items[0].results.documents[0].sentences);
              try {
                for (o.s(); !(l = o.n()).done; )
                  u = l.value, s += u.text;
              } catch (h) {
                o.e(h);
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
}(nl);
Xa.ENDPOINT_ERROR_MESSAGE = // eslint-disable-next-line max-len
"Please define the azure endpoint. [More Information](https://deepchat.dev/docs/directConnection/Azure#Summarization)";
var rl = Xa, wn = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "poll",
    value: function() {
      var i = S(/* @__PURE__ */ f().mark(function t(n, a) {
        var s, o, l, u;
        return f().wrap(function(d) {
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
              return d.next = 22, new Promise(function(h) {
                return setTimeout(h, 3e3);
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
      s.error ? s.error.code === "invalid_api_key" ? a(re.INVALID_KEY) : a(re.CONNECTION_FAILED) : n(t);
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
}(), al = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    y(this, i);
    var n, a = (n = e.directConnection) == null ? void 0 : n.assemblyAI;
    return t = F(this, i, [e, wn.buildKeyVerificationDetails(), wn.buildHeaders, a, {
      audio: {}
    }]), t.insertKeyPlaceholderText = "AssemblyAI API Key", t.keyHelpUrl = "https://www.assemblyai.com/app/account", t.introPanelMarkUp = `
    <div style="width: 100%; text-align: center; margin-left: -10px"><b>AssemblyAI Audio</b></div>
    <p><b>Upload an audio file</b> to transcribe it into text.
    <p>
      Click <a href="https://www.assemblyai.com/docs/Guides/transcribing_an_audio_file#get-started">here</a> for more info.
    </p>`, t.url = "https://api.assemblyai.com/v2/upload", t.isTextInputDisabled = !0, t.textInputPlaceholderText = "Upload an audio file", t.permittedErrorPrefixes = ["Authentication", "Invalid"], t.canSendMessage = i.canFileSendMessage, t;
  }
  return B(i, r), b(i, [{
    key: "callServiceAPI",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a, s, o) {
        var l;
        return f().wrap(function(c) {
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
              Q.request(this, o[0], a, !1);
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s, o, l;
        return f().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              if (!a.error) {
                c.next = 2;
                break;
              }
              throw a.error;
            case 2:
              return l = (o = (s = this.connectSettings) == null ? void 0 : s.headers) == null ? void 0 : o.Authorization, c.next = 5, wn.poll(l, a.upload_url);
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
}(pe), Za = /* @__PURE__ */ function(r) {
  function i(e, t, n, a, s) {
    var o;
    return y(this, i), o = F(this, i, [e, We.buildSpeechKeyVerificationDetails(n), t, a, s]), o.insertKeyPlaceholderText = "Azure Speech Subscription Key", o.keyHelpUrl = // eslint-disable-next-line max-len
    "https://learn.microsoft.com/en-us/azure/api-management/api-management-subscriptions#create-and-manage-subscriptions-in-azure-portal", o;
  }
  return B(i, r), b(i);
}(pe), $n = /* @__PURE__ */ function(r) {
  function i(e) {
    var t, n, a, s;
    y(this, i);
    var o, l, u, c, d, h, p = (l = (o = e.directConnection) == null ? void 0 : o.azure) == null ? void 0 : l.textToSpeech, m = (u = e.directConnection) == null ? void 0 : u.azure;
    return s = F(this, i, [e, We.buildTextToSpeechHeaders.bind({}, (p == null ? void 0 : p.outputFormat) || "audio-16khz-128kbitrate-mono-mp3"), p.region, m]), s.permittedErrorPrefixes = [i.REGION_ERROR_MESSAGE], s.introPanelMarkUp = `
    <div style="width: 100%; text-align: center; margin-left: -10px"><b>Azure Text To Speech</b></div>
    <p>Insert text to synthesize it to audio.
    <p>
      Click <a href="`.concat(i.HELP_LINK, `">here</a> for more info.
    </p>`), s.isTextInputDisabled = !1, s.url = "", p.region ? (Object.assign(s.rawBody, p), (t = (c = s.rawBody).lang) !== null && t !== void 0 || (c.lang = "en-US"), (n = (d = s.rawBody).name) !== null && n !== void 0 || (d.name = "en-US-JennyNeural"), (a = (h = s.rawBody).gender) !== null && a !== void 0 || (h.gender = "Female"), s.url = "https://".concat(p.region, ".tts.speech.microsoft.com/cognitiveservices/v1")) : (s.isTextInputDisabled = !0, s.canSendMessage = function() {
      return !1;
    }, setTimeout(function() {
      e.addMessage({
        error: i.REGION_ERROR_MESSAGE
      });
    })), s;
  }
  return B(i, r), b(i, [{
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
      var e = S(/* @__PURE__ */ f().mark(function n(a, s) {
        var o;
        return f().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              if (this.connectSettings) {
                u.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              o = this.preprocessBody(this.rawBody, s), Q.request(this, o, a, !1);
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        return f().wrap(function(o) {
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
}(Za);
$n.HELP_LINK = // eslint-disable-next-line max-len
"https://learn.microsoft.com/en-GB/azure/cognitive-services/speech-service/get-started-text-to-speech?tabs=windows%2Cterminal&pivots=programming-language-rest", $n.REGION_ERROR_MESSAGE = // eslint-disable-next-line max-len
"Please define a region config property. [More Information](https://deepchat.dev/docs/directConnection/Azure#TextToSpeech)";
var il = $n, Wn = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    y(this, i);
    var n, a, s, o = (a = (n = e.directConnection) == null ? void 0 : n.azure) == null ? void 0 : a.speechToText, l = (s = e.directConnection) == null ? void 0 : s.azure, u = {
      audio: {
        files: {
          acceptedFormats: ".wav,.ogg"
        }
      }
    };
    if (t = F(this, i, [e, We.buildSpeechToTextHeaders, o.region, l, u]), t.permittedErrorPrefixes = [i.REGION_ERROR_MESSAGE], t.introPanelMarkUp = `
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
  return B(i, r), b(i, [{
    key: "callServiceAPI",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a, s, o) {
        var l, u;
        return f().wrap(function(d) {
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
              (u = this.connectSettings) != null && u.headers && (this.connectSettings.headers["Content-Type"] = o[0].name.toLocaleLowerCase().endsWith(".wav") ? "audio/wav; codecs=audio/pcm; samplerate=16000" : "audio/ogg; codecs=opus"), Q.request(this, o[0], a, !1);
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        return f().wrap(function(o) {
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
}(Za);
Wn.HELP_LINK = // eslint-disable-next-line max-len
"https://learn.microsoft.com/en-GB/azure/cognitive-services/speech-service/get-started-text-to-speech?tabs=windows%2Cterminal&pivots=programming-language-rest", Wn.REGION_ERROR_MESSAGE = // eslint-disable-next-line max-len
"Please define a region config property. [More Information](https://deepchat.dev/docs/directConnection/Azure#SpeechToText)";
var sl = Wn, ol = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    y(this, i);
    var n, a, s, o = (a = (n = e.directConnection) == null ? void 0 : n.azure) == null ? void 0 : a.translation, l = (s = e.directConnection) == null ? void 0 : s.azure;
    return t = F(this, i, [e, We.buildTranslationKeyVerificationDetails(o.region), We.buildTranslationHeaders.bind({}, o == null ? void 0 : o.region), l]), t.insertKeyPlaceholderText = "Azure Translate Subscription Key", t.keyHelpUrl = // eslint-disable-next-line max-len
    "https://learn.microsoft.com/en-us/azure/api-management/api-management-subscriptions#create-and-manage-subscriptions-in-azure-portal", t.url = "", t.url = "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=".concat(o.language || "es"), t;
  }
  return B(i, r), b(i, [{
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
      var e = S(/* @__PURE__ */ f().mark(function n(a, s) {
        var o;
        return f().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              if (this.connectSettings) {
                u.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              o = this.preprocessBody(s), Q.request(this, o, a);
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s;
        return f().wrap(function(l) {
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
}(pe), Qa = /* @__PURE__ */ function(r) {
  function i(e, t, n, a, s) {
    var o, l, u;
    y(this, i);
    var c, d, h, p, m = JSON.parse(JSON.stringify(e.directConnection)), g = t || oe.buildKeyVerificationDetails(), k = n || oe.buildHeaders, _ = a || m.openAI;
    u = F(this, i, [e, g, k, _]), u.insertKeyPlaceholderText = "OpenAI API Key", u.keyHelpUrl = "https://platform.openai.com/account/api-keys", u.url = "https://api.openai.com/v1/chat/completions", u.permittedErrorPrefixes = ["Incorrect"], u.asyncCallInProgress = !1, u._systemMessage = i.generateSystemMessage("You are a helpful assistant.");
    var E = s || ((c = m.openAI) == null ? void 0 : c.chat);
    if (P(E) == "object") {
      E.system_prompt && (u._systemMessage = i.generateSystemMessage(E.system_prompt));
      var M = (h = (d = e.directConnection) == null ? void 0 : d.openAI) == null ? void 0 : h.chat, A = M.function_handler;
      A && (u._functionHandler = A), u.cleanConfig(E), Object.assign(u.rawBody, E);
    }
    return (o = u.maxMessages) !== null && o !== void 0 || (u.maxMessages = -1), (l = (p = u.rawBody).model) !== null && l !== void 0 || (p.model = "gpt-4o"), u;
  }
  return B(i, r), b(i, [{
    key: "cleanConfig",
    value: function(t) {
      delete t.system_prompt, delete t.function_handler;
    }
  }, {
    key: "preprocessBody",
    value: (
      // prettier-ignore
      function(t, n) {
        var a, s = JSON.parse(JSON.stringify(t)), o = sr.getCharacterLimitMessages(n, this.totalMessagesMaxCharLength ? this.totalMessagesMaxCharLength - this._systemMessage.content.length : -1).map(function(l) {
          return {
            content: i.getContent(l),
            role: l.role === D.USER_ROLE ? "user" : "assistant"
          };
        });
        return n.find(function(l) {
          return l.files && l.files.length > 0;
        }) && ((a = s.max_tokens) !== null && a !== void 0 || (s.max_tokens = 300)), s.messages = [this._systemMessage].concat(Kt(o)), s;
      }
    )
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a, s) {
        var o, l;
        return f().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              if (this.connectSettings) {
                c.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              o = this.preprocessBody(this.rawBody, s), l = this.stream, l && (P(l) != "object" || !l.simulation) || o.stream ? (o.stream = !0, se.request(this, o, a)) : Q.request(this, o, a);
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
      var e = S(/* @__PURE__ */ f().mark(function n(a, s, o) {
        var l, u, c, d;
        return f().wrap(function(p) {
          for (; ; ) switch (p.prev = p.next) {
            case 0:
              if (!a.error) {
                p.next = 2;
                break;
              }
              throw a.error.message;
            case 2:
              return p.abrupt("return", (u = (l = a.choices) == null ? void 0 : l[0]) != null && u.delta ? this.extractStreamResult(a.choices[0], s, o) : (d = (c = a.choices) == null ? void 0 : c[0]) != null && d.message ? a.choices[0].message.tool_calls ? this.handleTools(a.choices[0].message, s, o) : {
                text: a.choices[0].message.content
              } : {
                text: ""
              });
            case 3:
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
    key: "extractStreamResult",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a, s, o) {
        var l = this, u, c, d;
        return f().wrap(function(p) {
          for (; ; ) switch (p.prev = p.next) {
            case 0:
              if (u = a.delta, c = a.finish_reason, c !== "tool_calls") {
                p.next = 7;
                break;
              }
              return this.asyncCallInProgress = !0, d = {
                tool_calls: this._streamToolCalls
              }, p.abrupt("return", (this._streamToolCalls = void 0, this.handleTools(d, s, o)));
            case 7:
              u != null && u.tool_calls && (this._streamToolCalls ? u.tool_calls.forEach(function(m, g) {
                l._streamToolCalls && (l._streamToolCalls[g].function.arguments += m.function.arguments);
              }) : this._streamToolCalls = u.tool_calls);
            case 8:
              return p.abrupt("return", {
                text: (u == null ? void 0 : u.content) || ""
              });
            case 9:
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
    // prettier-ignore
  }, {
    key: "handleTools",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a, s, o) {
        var l, u, c, d, h, p, m, g, k, _, E;
        return f().wrap(function(A) {
          for (; ; ) switch (A.prev = A.next) {
            case 0:
              if (!(!a.tool_calls || !s || !o || !this._functionHandler)) {
                A.next = 2;
                break;
              }
              throw Error("Please define the `function_handler` property inside the [openAI](https://deepchat.dev/docs/directConnection/openAI#Chat) object.");
            case 2:
              return p = JSON.parse(JSON.stringify(o)), m = a.tool_calls.map(function(C) {
                return {
                  name: C.function.name,
                  arguments: C.function.arguments
                };
              }), A.next = 6, (l = this._functionHandler) == null ? void 0 : l.call(this, m);
            case 6:
              if (g = A.sent, Array.isArray(g)) {
                A.next = 17;
                break;
              }
              if (!g.text) {
                A.next = 16;
                break;
              }
              return k = {
                text: g.text
              }, A.next = 12, (c = (u = this.deepChat).responseInterceptor) == null ? void 0 : c.call(u, k);
            case 12:
              if (A.t0 = A.sent, A.t0) {
                A.next = 15;
                break;
              }
              A.t0 = k;
            case 15:
              return A.abrupt("return", A.t0);
            case 16:
              throw Error(oe.FUNCTION_TOOL_RESP_ERROR);
            case 17:
              return A.next = 19, Promise.all(g);
            case 19:
              if (_ = A.sent, p.messages.push({
                tool_calls: a.tool_calls,
                role: "assistant",
                content: null
              }), !(!_.find(function(C) {
                var U = C.response;
                return typeof U != "string";
              }) && m.length === _.length)) {
                A.next = 40;
                break;
              }
              return _.forEach(function(C, U) {
                var Z, H = (Z = a.tool_calls) == null ? void 0 : Z[U];
                p == null || p.messages.push({
                  role: "tool",
                  tool_call_id: H == null ? void 0 : H.id,
                  name: H == null ? void 0 : H.function.name,
                  content: C.response
                });
              }), delete p.tools, delete p.tool_choice, delete p.stream, A.prev = 22, A.next = 25, s == null ? void 0 : s(p).then(function(C) {
                return $.processResponseByType(C);
              });
            case 25:
              return E = A.sent, A.next = 28, (h = (d = this.deepChat).responseInterceptor) == null ? void 0 : h.call(d, E);
            case 28:
              if (A.t1 = A.sent, A.t1) {
                A.next = 31;
                break;
              }
              A.t1 = E;
            case 31:
              if (E = A.t1, !E.error) {
                A.next = 34;
                break;
              }
              throw E.error.message;
            case 34:
              return A.abrupt("return", {
                text: E.choices[0].message.content || ""
              });
            case 37:
              throw A.prev = 37, A.t2 = A.catch(22), this.asyncCallInProgress = !1, A.t2;
            case 40:
              throw Error(oe.FUNCTION_TOOL_RESP_ERROR);
            case 41:
            case "end":
              return A.stop();
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
}(pe), ll = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    y(this, i);
    var n, a, s, o, l, u, c, d = JSON.parse(JSON.stringify(e.directConnection)), h = d.azure, p = ((a = (n = d.azure) == null ? void 0 : n.openAI) == null ? void 0 : a.urlDetails) || {}, m = (o = (s = d.azure) == null ? void 0 : s.openAI) == null ? void 0 : o.chat;
    if (t = F(this, i, [e, Ae.buildKeyVerificationDetails(p), Ae.buildHeaders, h, m]), t.permittedErrorPrefixes = [Ae.URL_DETAILS_ERROR_MESSAGE], t.isTextInputDisabled = !1, P(m) == "object") {
      var g = (c = (u = (l = e.directConnection) == null ? void 0 : l.azure) == null ? void 0 : u.openAI) == null ? void 0 : c.chat, k = g.function_handler;
      k && (t._functionHandler = k);
    }
    return Ae.validateURLDetails(p) ? t.url = i.buildURL(p) : (t.isTextInputDisabled = !0, t.canSendMessage = function() {
      return !1;
    }, setTimeout(function() {
      e.addMessage({
        error: Ae.URL_DETAILS_ERROR_MESSAGE
      });
    })), t;
  }
  return B(i, r), b(i, null, [{
    key: "buildURL",
    value: function(t) {
      var n = t.endpoint, a = t.deploymentId, s = t.version;
      return "".concat(n, "/openai/deployments/").concat(a, "/completions?api-version=").concat(s);
    }
  }]);
}(Qa), Ut = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    y(this, i);
    var n, a = e.directConnection, s = a == null ? void 0 : a.openAI, o = {
      images: {
        files: {
          acceptedFormats: ".png",
          maxNumberOfFiles: 2
        }
      }
    };
    t = F(this, i, [e, oe.buildKeyVerificationDetails(), oe.buildHeaders, s, o]), t.insertKeyPlaceholderText = "OpenAI API Key", t.keyHelpUrl = "https://platform.openai.com/account/api-keys", t.introPanelMarkUp = `
    <div style="width: 100%; text-align: center; margin-left: -10px"><b>OpenAI DALL·E</b></div>
    <p><b>Insert text</b> to generate an image.</p>
    <p><b>Upload 1</b> PNG image to generate its variation and optionally insert text to specify the change.</p>
    <p><b>Upload 2</b> PNG images where the second is a copy of the first with a transparent area where the edit should
      take place and text to specify the edit.</p>
    <p>Click <a href="https://platform.openai.com/docs/guides/images/introduction">here</a> for more info.</p>`, t.url = "", t.permittedErrorPrefixes = ["Incorrect", "Invalid input image"];
    var l = (n = a == null ? void 0 : a.openAI) == null ? void 0 : n.images;
    if (t.camera) {
      var u = P(l) == "object" && l.size ? Number.parseInt(l.size) : 1024;
      t.camera.files = {
        dimensions: {
          width: u,
          height: u
        }
      };
    }
    return P(l) == "object" && Object.assign(t.rawBody, l), t.canSendMessage = i.canFileSendMessage, t;
  }
  return B(i, r), b(i, [{
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
      $.tempRemoveContentHeader(this.connectSettings, Q.request.bind(this, this, l, t), !1);
    }
  }, {
    key: "callServiceAPI",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a, s, o) {
        var l, u;
        return f().wrap(function(d) {
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
              this.url = i.IMAGE_GENERATION_URL, u = this.preprocessBody(this.rawBody, s[s.length - 1].text), Q.request(this, u, a);
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        return f().wrap(function(o) {
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
                    src: "".concat(Et).concat(l.b64_json),
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
}(pe);
Ut.IMAGE_GENERATION_URL = "https://api.openai.com/v1/images/generations", Ut.IMAGE_VARIATIONS_URL = "https://api.openai.com/v1/images/variations", Ut.IMAGE_EDIT_URL = "https://api.openai.com/v1/images/edits";
var ul = Ut, cl = /* @__PURE__ */ function(r) {
  function i(e) {
    var t, n;
    y(this, i);
    var a, s = JSON.parse(JSON.stringify(e.directConnection)), o = (a = s.cohere) == null ? void 0 : a.chat, l = s.cohere;
    return n = F(this, i, [e, "https://api.cohere.ai/v1/chat", "Ask me anything!", o, l]), P(o) == "object" && Object.assign(n.rawBody, o), (t = n.maxMessages) !== null && t !== void 0 || (n.maxMessages = -1), n;
  }
  return B(i, r), b(i, [{
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
      var e = S(/* @__PURE__ */ f().mark(function n(a, s) {
        var o;
        return f().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              if (this.connectSettings) {
                u.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              o = this.preprocessBody(this.rawBody, s), Q.request(this, o, a);
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        return f().wrap(function(o) {
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
}(ur), Wr = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
      (s = e.message) != null && s.includes("invalid request: prompt must be at least 1 token long") ? n(t) : a(re.INVALID_KEY);
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
}(), dl = /* @__PURE__ */ function(r) {
  function i(e) {
    var t, n, a;
    y(this, i);
    var s, o = JSON.parse(JSON.stringify(e.directConnection)).mistral;
    return a = F(this, i, [e, Wr.buildKeyVerificationDetails(), Wr.buildHeaders, o]), a.insertKeyPlaceholderText = "Mistral API Key", a.keyHelpUrl = "https://console.mistral.ai/api-keys/", a.url = "https://api.mistral.ai/v1/chat/completions", a.permittedErrorPrefixes = ["invalid"], o && (a.cleanConfig(o), Object.assign(a.rawBody, o)), (t = a.maxMessages) !== null && t !== void 0 || (a.maxMessages = -1), (n = (s = a.rawBody).model) !== null && n !== void 0 || (s.model = "open-mistral-7b"), a;
  }
  return B(i, r), b(i, [{
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
      var e = S(/* @__PURE__ */ f().mark(function n(a, s) {
        var o;
        return f().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              if (this.connectSettings) {
                u.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              o = this.preprocessBody(this.rawBody, s), Q.request(this, o, a);
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        return f().wrap(function(o) {
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
}(pe), hl = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "create",
    value: (
      // this should only be called when no _activeService is set or is demo as otherwise we don't want to reconnect
      function(e) {
        var t = e.directConnection, n = e.connect, a = e.demo, s = e.webModel;
        if (s) return new or(e);
        if (t) {
          if (t.openAI) return t.openAI.images ? new ul(e) : t.openAI.speechToText ? new tl(e) : t.openAI.textToSpeech ? new el(e) : t.openAI.assistant ? new Yo(e) : new Qa(e);
          if (t.assemblyAI) return new al(e);
          if (t.cohere) return t.cohere.textGeneration ? new Xo(e) : t.cohere.summarization ? new Qo(e) : new cl(e);
          if (t.huggingFace) return t.huggingFace.textGeneration ? new qo(e) : t.huggingFace.summarization ? new Vo(e) : t.huggingFace.translation ? new Wo(e) : t.huggingFace.fillMask ? new Jo(e) : t.huggingFace.questionAnswer ? new zo(e) : t.huggingFace.audioSpeechRecognition ? new Ho(e) : t.huggingFace.audioClassification ? new Fo(e) : t.huggingFace.imageClassification ? new Bo(e) : new Go(e);
          if (t.azure) {
            if (t.azure.openAI) {
              if (t.azure.openAI.chat) return new ll(e);
              if (t.azure.openAI.assistant) return new Zo(e);
            }
            if (t.azure.speechToText) return new sl(e);
            if (t.azure.textToSpeech) return new il(e);
            if (t.azure.summarization) return new rl(e);
            if (t.azure.translation) return new ol(e);
          }
          if (t.stabilityAI) return t.stabilityAI.imageToImage ? new $o(e) : t.stabilityAI.imageToImageUpscale ? new jo(e) : t.stabilityAI.imageToImageMasking ? new Uo(e) : new Ko(e);
          if (t.mistral) return new dl(e);
        }
        return n && (!a || !n.stream) ? new $t(e) : new $t(e, void 0, a || !0);
      }
    )
  }]);
}(), ei = /* @__PURE__ */ b(function r() {
  y(this, r);
});
ei.attibutes = {
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
var pl = ei;
function W(r) {
  return function(i, e) {
    Object.defineProperty(i, e, {});
    var t = i.constructor, n = e.toLocaleLowerCase();
    t._attributes_[n] = pl.attibutes[r], t._attributeToProperty_[n] = e;
  };
}
var fl = /* @__PURE__ */ function() {
  function r(i, e, t) {
    y(this, r), this._isDisplayed = !1, i ? (this._elementRef = this.createIntroPanelWithChild(i, t), this._isDisplayed = !0) : e && (this._elementRef = this.createInternalIntroPanel(e, t), this._isDisplayed = !0);
  }
  return b(r, [{
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
}(), ml = `<?xml version="1.0" encoding="iso-8859-1"?>
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
</svg>`, Ht = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "createImage",
    value: function(e, t, n) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, s = new Image();
      return s.src = e.src, !n && a && me.scrollDownOnImageLoad(s.src, t), me.processContent("image", s, s.src, e.name);
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
      return n.src = e.src, n.classList.add("audio-player"), n.controls = !0, st.IS_SAFARI && (n.classList.add("audio-player-safari"), n.classList.add(t === D.USER_ROLE ? "audio-player-safari-right" : "audio-player-safari-left")), n;
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
      var a = ke.createSVGElement(ml);
      a.classList.add("any-file-message-icon"), n.appendChild(a);
      var s = document.createElement("div");
      return s.classList.add("any-file-message-text"), s.textContent = e.name || me.DEFAULT_FILE_NAME, t.appendChild(n), t.appendChild(s), me.processContent("any", t, e.src, s.textContent);
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
        return o.ref && (o = me.removeFileRef(o)), me.isAudioFile(o) ? r.createNewAudioMessage(e, o, n, a) : me.isImageFile(o) ? r.createImageMessage(e, o, n, a, s) : r.createNewAnyFileMessage(e, o, n, a);
      });
    }
    // no overwrite previous message logic as it is complex to track which files are to be overwritten
  }, {
    key: "addMessages",
    value: function(e, t, n, a) {
      r.createMessages(e, t, n, a).forEach(function(s) {
        var o = s.type, l = s.elements;
        me.addMessage(e, l, o, n, a);
      });
    }
  }]);
}();
Ht.IMAGE_BUBBLE_CLASS = "image-message", Ht.AUDIO_BUBBLE_CLASS = "audio-message", Ht.ANY_FILE_BUBBLE_CLASS = "any-file-message";
var ti = Ht, vl = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
      if (t[1].html) Oe.overwriteElements(e, n, t[1].html);
      else {
        var o = Oe.create(e, n, t[0].role), l = ((s = t[1].files) == null ? void 0 : s[((a = t[1].files) == null ? void 0 : a.length) - 1]) || t[1].text;
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
      var a, s, o = t[0].role, l = ti.createMessages(e, n, o), u = t[1].html, c = ((s = t[1].files) == null ? void 0 : s[((a = t[1].files) == null ? void 0 : a.length) - 1]) || t[1].text, d = u || c, h = e.messageElementRefs.findIndex(function(m) {
        return m === d;
      });
      c && (h += 1);
      var p = (u == null ? void 0 : u.outerContainer) || (c == null ? void 0 : c.outerContainer.nextSibling);
      l.forEach(function(m, g) {
        var k = m.type, _ = m.elements;
        me.setElementProps(e, _, k, o), e.elementRef.insertBefore(_.outerContainer, p), e.messageElementRefs.splice(e.messageElementRefs.length - 1, 1), e.messageElementRefs.splice(h + g, 0, _);
      }), r.removeFilesMessages(e, t), t[1].files = l.map(function(m) {
        var g = m.elements;
        return g;
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
      return Kn.isActiveElement((t = e.text) == null ? void 0 : t.bubbleElement.classList) || Kn.isActiveElement((n = e.html) == null ? void 0 : n.bubbleElement.classList);
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
}(), gl = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
        if (P(a) == "object" && a.tools && !a.function_handler) return "Please define the `function_handler` property inside the openAI [chat](https://deepchat.dev/docs/directConnection/openAI#Chat) object.";
      } else if (e.connect && !e.connect.url && !e.connect.handler) return e.demo ? e.connect.stream ? null : "When [demo](https://deepchat.dev/docs/demo) mode is enabled - the [connect](https://deepchat.dev/docs/connect#connect-1) object can only accept the [stream](https://deepchat.dev/docs/connect#Stream) property." : "Please define a `url` or a `handler` property inside the [connect](https://deepchat.dev/docs/connect#connect-1) object.";
      return null;
    }
  }]);
}(), Kn = /* @__PURE__ */ function(r) {
  function i(e, t, n) {
    var a;
    y(this, i);
    var s, o;
    a = F(this, i, [e]);
    var l = t.permittedErrorPrefixes, u = t.introPanelMarkUp, c = t.demo;
    return a._errorMessageOverrides = (s = e.errorMessages) == null ? void 0 : s.overrides, a._onClearMessages = Gt.onClearMessages.bind(a, e), a._onError = Gt.onError.bind(a, e), a._displayLoadingMessage = i.getDisplayLoadingMessage(e, t), a._permittedErrorPrefixes = l, a.addSetupMessageIfNeeded(e, t) || a.populateIntroPanel(n, u, e.introPanelStyle), a.addIntroductoryMessages(e, t), new ir(e, a, t), a._displayServiceErrorMessages = (o = e.errorMessages) == null ? void 0 : o.displayServiceErrorMessages, e.getMessages = function() {
      return JSON.parse(JSON.stringify(a.messageToElements.map(function(d) {
        var h = Xn(d, 1), p = h[0];
        return p;
      })));
    }, e.clearMessages = a.clearMessages.bind(a, t), e.refreshMessages = a.refreshTextMessages.bind(a, e.remarkable), e.scrollToBottom = _e.scrollToBottom.bind(a, a.elementRef), e.addMessage = function(d, h) {
      a.addAnyMessage(J(J({}, d), {}, {
        sendUpdate: !!h
      }), !h);
    }, e.updateMessage = function(d, h) {
      return vl.update(a, d, h);
    }, t.isWebModel() && t.setUpMessages(a), c && a.prepareDemo(ge.processDemo(c)), e.textToSpeech && Dt.processConfig(e.textToSpeech, function(d) {
      a.textToSpeech = d;
    }), a;
  }
  return B(i, r), b(i, [{
    key: "prepareDemo",
    value: function(t) {
      var n;
      if (P(t) == "object") {
        if (t.displayLoading) {
          var a = t.displayLoading.history;
          a != null && a.small && ze.addMessage(this, !1), a != null && a.full && ze.addMessage(this);
        }
        t.displayErrors && (t.displayErrors.default && this.addNewErrorMessage("", ""), t.displayErrors.service && this.addNewErrorMessage("service", ""), t.displayErrors.speechToText && this.addNewErrorMessage("speechToText", "")), (n = t.displayLoading) != null && n.message && this.addLoadingMessage(), t.response && (this.customDemoResponse = t.response);
      }
    }
  }, {
    key: "addSetupMessageIfNeeded",
    value: function(t, n) {
      var a = gl.getText(t, n);
      if (a) {
        var s = this.createAndAppendNewMessageElement(a, D.AI_ROLE);
        this.applyCustomStyles(s, D.AI_ROLE, !1);
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
        u !== 0 && D.hideRoleElements(s.messageElementRefs, !!s._avatars, !!s._names), s.addIntroductoryMessage(l);
      }) : this.addIntroductoryMessage(o));
    }
  }, {
    key: "addIntroductoryMessage",
    value: function(t) {
      var n, a;
      t != null && t.text ? a = this.createAndAppendNewMessageElement(t.text, D.AI_ROLE) : t != null && t.html && (a = Oe.add(this, t.html, D.AI_ROLE, this.messageElementRefs)), a && (this.applyCustomStyles(a, D.AI_ROLE, !1, (n = this.messageStyles) == null ? void 0 : n.intro), a.outerContainer.classList.add(Ve.INTRO_CLASS));
    }
  }, {
    key: "removeIntroductoryMessage",
    value: function() {
      var t = this.messageElementRefs[0];
      t.outerContainer.classList.contains(Ve.INTRO_CLASS) && (t.outerContainer.remove(), this.messageElementRefs.shift());
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
      if (!t.ignoreText && s.text !== void 0 && t.text !== null && (this.addNewTextMessage(s.text, s.role, o, a), !n && this.textToSpeech && s.role !== D.USER_ROLE && Dt.speak(s.text, this.textToSpeech)), s.files && Array.isArray(s.files) && ti.addMessages(this, s.files, s.role, a), s.html !== void 0 && s.html !== null) {
        var l = Oe.add(this, s.html, s.role, this.messageElementRefs, o, a);
        bt.isElementTemporary(l) && delete s.html;
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
        var o = D.generateMessageBody(t, this.messageElementRefs);
        this.messageToElements.push([t, o]);
      }
      a && this.sendClientUpdate(t, s);
    }
    // prettier-ignore
  }, {
    key: "removeMessageOnError",
    value: function() {
      var t = this.messageElementRefs[this.messageElementRefs.length - 1], n = t == null ? void 0 : t.bubbleElement;
      (n != null && n.classList.contains(Pe.MESSAGE_CLASS) && n.textContent === "" || i.isTemporaryElement(t)) && this.removeLastMessage();
    }
    // prettier-ignore
  }, {
    key: "addNewErrorMessage",
    value: function(t, n) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, s, o, l, u, c;
      this.removeMessageOnError();
      var d = this.getPermittedMessage(n) || ((s = this._errorMessageOverrides) == null ? void 0 : s[t]) || ((o = this._errorMessageOverrides) == null ? void 0 : o.default) || "Error, please try again.", h = this.createMessageElementsOnOrientation(d, "error", a);
      D.hideRoleElements(this.messageElementRefs, !!this._avatars, !!this._names);
      var p = h.bubbleElement, m = h.outerContainer;
      p.classList.add("error-message-text"), this.renderText(p, d);
      var g = Ft.extractParticularSharedStyles(["fontSize", "fontFamily"], (l = this.messageStyles) == null ? void 0 : l.default);
      Ft.applyCustomStylesToElements(h, !1, g), Ft.applyCustomStylesToElements(h, !1, (u = this.messageStyles) == null ? void 0 : u.error), a || this.elementRef.appendChild(m), this.textToSpeech && Dt.speak(d, this.textToSpeech), (c = this._onError) == null || c.call(this, d);
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
      this.isLastMessageError() && D.getLastMessageElement(this.elementRef).remove();
    }
  }, {
    key: "addDefaultLoadingMessage",
    value: function() {
      var t = this.createMessageElements("", D.AI_ROLE), n = t.bubbleElement;
      t.bubbleElement.classList.add(qe.DOTS_CONTAINER_CLASS);
      var a = document.createElement("div");
      return a.classList.add("loading-message-dots"), n.appendChild(a), qe.setDots(n, this.messageStyles), t;
    }
  }, {
    key: "addLoadingMessage",
    value: function() {
      var t, n, a, s, o, l;
      if (this._displayLoadingMessage) {
        var u = (a = (n = (t = this.messageStyles) == null ? void 0 : t.loading) == null ? void 0 : n.message) == null ? void 0 : a.html, c = u ? Oe.createElements(this, u, D.AI_ROLE, !1) : this.addDefaultLoadingMessage();
        this.elementRef.appendChild(c.outerContainer), c.bubbleElement.classList.add(qe.BUBBLE_CLASS), this.applyCustomStyles(c, D.AI_ROLE, !1, (l = (o = (s = this.messageStyles) == null ? void 0 : s.loading) == null ? void 0 : o.message) == null ? void 0 : l.styles), _e.scrollToBottom(this.elementRef);
      }
    }
  }, {
    key: "populateIntroPanel",
    value: function(t, n, a) {
      (t || n) && (this._introPanel = new fl(t, n, a), this._introPanel._elementRef && (ot.apply(this, this._introPanel._elementRef), this.elementRef.appendChild(this._introPanel._elementRef)));
    }
  }, {
    key: "addMultipleFiles",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        return f().wrap(function(o) {
          for (; ; ) switch (o.prev = o.next) {
            case 0:
              return o.abrupt("return", Promise.all((a || []).map(function(l) {
                return new Promise(function(u) {
                  if (!l.type || l.type === "any") {
                    var c = l.file.name || me.DEFAULT_FILE_NAME;
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
          var d, h = (d = c.children[0]) == null ? void 0 : d.children[0];
          h != null && h.classList.contains("error-message-text") && c.remove();
        }), this.messageElementRefs = l;
        var u = this.messageToElements.filter(function(c) {
          return c[1].text && i.isActiveElement(c[1].text.bubbleElement.classList) || c[1].html && i.isActiveElement(c[1].html.bubbleElement.classList);
        });
        (a = this.messageToElements).splice.apply(a, [0, this.messageToElements.length].concat(Kt(u))), n !== !1 && ((s = this._introPanel) != null && s._elementRef && this._introPanel.display(), this.addIntroductoryMessages()), (o = this._onClearMessages) == null || o.call(this), delete t.sessionId;
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
      return Array.isArray(t) ? t : t instanceof Error ? [t.message] : typeof t == "string" ? [t] : P(t) == "object" && t.error ? [t.error] : [];
    }
  }, {
    key: "isActiveElement",
    value: function(t) {
      return t ? t.contains(qe.BUBBLE_CLASS) || t.contains(ze.CLASS) || t.contains(Pe.MESSAGE_CLASS) : !1;
    }
  }]);
}(Ve), ft = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
ft.INPUT_OUTSIDE_LEFT_ADJUSTMENT_CLASS = "text-input-container-left-adjustment", ft.INPUT_OUTSIDE_RIGHT_ADJUSTMENT_CLASS = "text-input-container-right-adjustment", ft.INPUT_OUTSIDE_LEFT_SMALL_ADJUSTMENT_CLASS = "text-input-container-left-small-adjustment", ft.INPUT_OUTSIDE_RIGHT_SMALL_ADJUSTMENT_CLASS = "text-input-container-right-small-adjustment";
var yl = ft, Wt = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
}(), Kr = ["camera", "gifs", "images", "audio", "mixedFiles", "submit", "microphone"], Ge = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "createTextElement",
    value: function(e) {
      var t = document.createElement("div");
      return t.classList.add("text-button"), t.innerText = e, t;
    }
  }, {
    key: "createElement",
    value: function(e, t) {
      return t ? r.createTextElement(e) : ke.createSVGElement(e);
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
}(), bl = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM23 15h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path>
</svg>`, je = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "unsetAllCSS",
    value: function(e, t) {
      var n, a;
      t.container && ce.unsetAllCSSMouseStates(e, t.container), (n = t.svg) != null && n.styles && ce.unsetAllCSSMouseStates(e.children[0], t.svg.styles), (a = t.text) != null && a.styles && ce.unsetAllCSSMouseStates(e.children[0], t.text.styles);
    }
  }, {
    key: "unsetActionCSS",
    value: function(e, t) {
      var n, a;
      t.container && ce.unsetActivityCSSMouseStates(e, t.container), (n = t.svg) != null && n.styles && ce.unsetActivityCSSMouseStates(e.children[0], t.svg.styles), (a = t.text) != null && a.styles && ce.unsetActivityCSSMouseStates(e.children[0], t.text.styles);
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
}(), wt = /* @__PURE__ */ function() {
  function r(i, e, t, n) {
    y(this, r), this._mouseState = {
      state: "default"
    }, this.elementRef = i, this._customStyles = t, this.position = e, this.dropupText = n;
  }
  return b(r, [{
    key: "buttonMouseLeave",
    value: function(e) {
      this._mouseState.state = "default", e && (je.unsetAllCSS(this.elementRef, e), je.setElementsCSS(this.elementRef, e, "default"));
    }
  }, {
    key: "buttonMouseEnter",
    value: function(e) {
      this._mouseState.state = "hover", e && je.setElementsCSS(this.elementRef, e, "hover");
    }
  }, {
    key: "buttonMouseUp",
    value: function(e) {
      e && je.unsetActionCSS(this.elementRef, e), this.buttonMouseEnter(e);
    }
  }, {
    key: "buttonMouseDown",
    value: function(e) {
      this._mouseState.state = "click", e && je.setElementsCSS(this.elementRef, e, "click");
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
        a && je.unsetActionCSS(this.elementRef, a);
      }
    }
  }, {
    key: "reapplyStateStyle",
    value: function(e, t) {
      if (this._customStyles) {
        t && this.unsetCustomStateStyles(t);
        var n = this._customStyles[e];
        n && je.setElementCssUpToState(this.elementRef, n, this._mouseState.state), this.setEvents(n);
      }
    }
  }]);
}(), Jr = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
}(), kl = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "addItemEvents",
    value: function(e, t, n, a) {
      Ca.add(t, a), t.addEventListener("click", function() {
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
      var u = ce.processStateful((n == null ? void 0 : n.item) || {}, {
        backgroundColor: "#f3f3f3"
      }, {
        backgroundColor: "#ebebeb"
      });
      return r.addItemEvents(e, l, s, u), l;
    }
  }]);
}(), Sl = /* @__PURE__ */ function() {
  function r(i, e) {
    var t = this;
    y(this, r);
    var n;
    this._isOpen = !0, this._styles = e, this.elementRef = r.createElement((n = this._styles) == null ? void 0 : n.container), this.close(), setTimeout(function() {
      return t.addWindowEvents(i);
    });
  }
  return b(r, [{
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
      var t = kl.createItem(this, e, this._styles);
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
      !e.isConnected && this.keyDownEvent ? window.removeEventListener("keydown", this.keyDownEvent) : this._isOpen && (t.key === ue.ESCAPE ? (this.close(), (n = this.highlightedItem) == null || n.dispatchEvent(new MouseEvent("mouseleave"))) : t.key === ue.ENTER ? ((a = this.highlightedItem) == null || a.click(), (s = this.highlightedItem) == null || s.dispatchEvent(new MouseEvent("mouseleave"))) : t.key === ue.ARROW_DOWN ? Jr.focusSiblingItem(this.highlightedItem || this.elementRef.children[this.elementRef.children.length - 1], this.elementRef, !0) : t.key === ue.ARROW_UP && Jr.focusSiblingItem(this.highlightedItem || this.elementRef.children[0], this.elementRef, !1));
    }
  }], [{
    key: "createElement",
    value: function(e) {
      var t = document.createElement("div");
      return t.id = "dropup-menu", Object.assign(t.style, e), t;
    }
  }]);
}(), Yr = /* @__PURE__ */ function(r) {
  function i(e, t) {
    var n;
    y(this, i);
    var a;
    n = F(this, i, [i.createButtonElement(), void 0, {
      styles: (a = t == null ? void 0 : t.button) == null ? void 0 : a.styles
    }]);
    var s = n.createInnerElements(n._customStyles);
    return n._menu = new Sl(e, t == null ? void 0 : t.menu), n.addClickEvent(), n.buttonContainer = i.createButtonContainer(), n.elementRef.appendChild(s.styles), n.buttonContainer.appendChild(n.elementRef), n.elementRef.classList.add("dropup-icon", "upload-file-button"), n.elementRef.children[0].id = "dropup-icon", n.buttonContainer.appendChild(n._menu.elementRef), n.reapplyStateStyle("styles"), n.addContainerEvents(e), n;
  }
  return B(i, r), b(i, [{
    key: "createInnerElements",
    value: function(t) {
      return {
        styles: this.createInnerElement(i.createSVGIconElement(), "styles", t)
      };
    }
  }, {
    key: "createInnerElement",
    value: function(t, n, a) {
      return Ge.createSpecificStateElement(this.elementRef, n, a) || t;
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
      return ke.createSVGElement(bl);
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
}(wt), _l = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "addToDropup",
    value: (
      // prettier-ignore
      function(e, t, n, a) {
        var s = new Yr(n, a);
        Kr.forEach(function(l) {
          var u = t["dropup-menu"].findIndex(function(d) {
            return d.buttonType === l;
          }), c = t["dropup-menu"][u];
          c && (s.addItem(c.button), t["dropup-menu"].splice(u, 1));
        });
        var o = Yr.getPosition(t, a);
        Wt.addButton(e, s.buttonContainer, o), t[o].push({});
      }
    )
  }, {
    key: "addToSideContainer",
    value: function(e, t) {
      ["inside-left", "inside-right", "outside-left", "outside-right"].forEach(function(n) {
        var a = n;
        t[a].forEach(function(s) {
          Wt.addButton(e, s.button.elementRef, a);
        });
      });
    }
  }, {
    key: "setPosition",
    value: function(e, t, n) {
      var a = J(J({}, e[t]), {}, {
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
      return n.length > 1 || t["dropup-menu"].length > 0 ? Kr.forEach(function(a) {
        e[a] && t["dropup-menu"].push(J(J({}, e[a]), {}, {
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
}(), El = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>file</title>
<path d="M20 10.9696L11.9628 18.5497C10.9782 19.4783 9.64274 20 8.25028 20C6.85782 20 5.52239 19.4783 4.53777 18.5497C3.55315 17.6211 3 16.3616 3 15.0483C3 13.7351 3.55315 12.4756 4.53777 11.547L12.575 3.96687C13.2314 3.34779 14.1217 3 15.05 3C15.9783 3 16.8686 3.34779 17.525 3.96687C18.1814 4.58595 18.5502 5.4256 18.5502 6.30111C18.5502 7.17662 18.1814 8.01628 17.525 8.63535L9.47904 16.2154C9.15083 16.525 8.70569 16.6989 8.24154 16.6989C7.77738 16.6989 7.33224 16.525 7.00403 16.2154C6.67583 15.9059 6.49144 15.4861 6.49144 15.0483C6.49144 14.6106 6.67583 14.1907 7.00403 13.8812L14.429 6.88674" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`, wl = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M20,15.2928932 L20,5.5 C20,4.67157288 19.3284271,4 18.5,4 L5.5,4 C4.67157288,4 4,4.67157288 4,5.5 L4,12.2928932 L7.14644661,9.14644661 C7.34170876,8.95118446 7.65829124,8.95118446 7.85355339,9.14644661 L13.5,14.7928932 L16.1464466,12.1464466 C16.3417088,11.9511845 16.6582912,11.9511845 16.8535534,12.1464466 L20,15.2928932 Z M20,16.7071068 L16.5,13.2071068 L13.8535534,15.8535534 C13.6582912,16.0488155 13.3417088,16.0488155 13.1464466,15.8535534 L7.5,10.2071068 L4,13.7071068 L4,18.5 C4,19.3284271 4.67157288,20 5.5,20 L18.5,20 C19.3284271,20 20,19.3284271 20,18.5 L20,16.7071068 Z M3,5.5 C3,4.11928813 4.11928813,3 5.5,3 L18.5,3 C19.8807119,3 21,4.11928813 21,5.5 L21,18.5 C21,19.8807119 19.8807119,21 18.5,21 L5.5,21 C4.11928813,21 3,19.8807119 3,18.5 L3,5.5 Z M15,6 L17,6 C17.5522847,6 18,6.44771525 18,7 L18,9 C18,9.55228475 17.5522847,10 17,10 L15,10 C14.4477153,10 14,9.55228475 14,9 L14,7 C14,6.44771525 14.4477153,6 15,6 Z M15,7 L15,9 L17,9 L17,7 L15,7 Z"/>
</svg>
`, Cl = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-49.49 -49.49 593.87 593.87" stroke-width="3.95908" transform="rotate(0)">
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
</svg>`, Tl = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 5.9266752 5.6408391" height="21.31971" width="22.4">
  <g>
    <path d="m 5.2564627,1.548212 c -3.1136005,-0.4796804 -1.5568006,-0.2398402 0,0 z M 2.0001198,2.0922063 c 0.1556781,0 0.2657489,0.020893 0.3917849,0.080366 0.081154,0.038347 0.1153492,0.134065 0.076377,0.2138602 -0.038973,0.07979 -0.1363527,0.1134129 -0.2175069,0.075091 -0.078199,-0.036919 -0.1407455,-0.048792 -0.250655,-0.048792 -0.2260486,0 -0.3921482,0.2042182 -0.3921482,0.4801409 0,0.2761822 0.1663188,0.4810688 0.3921482,0.4810688 0.1117901,0 0.2064255,-0.046133 0.255659,-0.1284198 l 0.00162,-0.00389 V 3.0534032 l -0.098011,1.75e-4 c -0.081844,0 -0.1495979,-0.059305 -0.1612403,-0.1365887 l -0.00175,-0.023683 c 0,-0.08047 0.060311,-0.1470874 0.1389194,-0.1585331 l 0.024085,-0.00195 h 0.2612303 c 0.081842,0 0.149598,0.059305 0.1612404,0.1365891 l 0.00175,0.023683 -3.398e-4,0.3968809 v 0 l -0.00168,0.014211 v 0 l -0.00553,0.023034 v 0 l -0.00532,0.014145 c -0.098178,0.22826 -0.3236506,0.3528713 -0.5706303,0.3528713 -0.4240855,0 -0.7181621,-0.3622714 -0.7181621,-0.8016063 0,-0.4391857 0.2940275,-0.8006848 0.7181621,-0.8006848 z m 1.2034759,0.031275 c 0.081843,0 0.1495977,0.059305 0.1612403,0.1365891 l 0.00175,0.023683 v 1.2211775 c 0,0.088516 -0.07298,0.1602721 -0.1630073,0.1602721 -0.081841,0 -0.1495972,-0.059305 -0.1612397,-0.1365892 L 3.040589,3.5049308 V 2.2837527 c 0,-0.088516 0.07298,-0.1602721 0.1630067,-0.1602714 z m 0.7813442,0 0.5209469,0.00195 c 0.090025,3.048e-4 0.1627543,0.072306 0.1624458,0.1608234 -2.809e-4,0.08047 -0.06083,0.1468798 -0.1394772,0.158066 l -0.024092,0.00195 -0.3575326,-0.0013 v 0.4497782 l 0.2928918,2.27e-4 c 0.081842,0 0.1495979,0.059305 0.1612403,0.136589 l 0.00175,0.023683 c 0,0.080469 -0.06031,0.1470871 -0.1389193,0.1585393 l -0.024092,0.00195 -0.2928919,-2.336e-4 1.563e-4,0.2860316 c 0,0.080471 -0.06031,0.1470873 -0.1389193,0.1585395 l -0.024085,0.00195 c -0.081843,0 -0.1495979,-0.059305 -0.1612403,-0.1365826 l -0.00175,-0.023691 V 2.2841354 c 2.798e-4,-0.08047 0.060829,-0.1468797 0.1394758,-0.1580594 z"/>
    <path d="m 5.0894191,1.0943261 c 0,-0.21918999 -0.177687,-0.39686999 -0.396876,-0.39686999 h -3.43959 c -0.2191879,0 -0.391262,0.1777519 -0.3968759,0.39686999 l -0.027082,3.4379266 c 0.040152,0.2939927 0.4235456,0.409415 0.4235456,0.409415 l 3.4785583,-0.00851 c 0,0 0.3008506,-0.1402998 0.3236271,-0.4201576 0.042911,-0.5272495 0.034693,-1.6106146 0.034693,-3.4186761 z m -4.49792494,0 c 0,-0.36530999 0.29614504,-0.66145999 0.66145894,-0.66145999 h 3.43959 c 0.365314,0 0.66146,0.29615 0.66146,0.66145999 v 3.43959 c 0,0.36532 -0.296146,0.66146 -0.66146,0.66146 h -3.43959 c -0.3653139,0 -0.66145894,-0.29614 -0.66145894,-0.66146 z"/>
  </g>
</svg>
`, xl = {
  images: {
    id: "upload-images-icon",
    svgString: wl,
    dropupText: "Image"
  },
  gifs: {
    id: "upload-gifs-icon",
    svgString: Tl,
    dropupText: "GIF"
  },
  audio: {
    id: "upload-audio-icon",
    svgString: Cl,
    dropupText: "Audio"
  },
  mixedFiles: {
    id: "upload-mixed-files-icon",
    svgString: El,
    dropupText: "File"
  }
}, Al = `<?xml version="1.0" encoding="iso-8859-1"?>
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
`, Ce = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
}(), ni = /* @__PURE__ */ function(r) {
  function i(e) {
    var t;
    return y(this, i), (e == null ? void 0 : e.position) === "dropup-menu" && (e.position = "outside-right"), t = F(this, i, [i.createMicrophoneElement(), e == null ? void 0 : e.position, e]), t.isActive = !1, t._innerElements = t.createInnerElements(t._customStyles), t.changeToDefault(), t;
  }
  return B(i, r), b(i, [{
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
      return Ge.createSpecificStateElement(this.elementRef, n, a) || t;
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
      return t.id = "microphone-button", t.classList.add("input-button"), Ce.addAttributes(t), t;
    }
  }, {
    key: "createSVGIconElement",
    value: function() {
      var t = ke.createSVGElement(Al);
      return t.id = "microphone-icon", t;
    }
  }]);
}(wt), ri = {}, Zt = {}, Qt = {}, Ct = {}, Ze = {};
Object.defineProperty(Ze, "__esModule", {
  value: !0
});
Ze.Text = void 0;
var en = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
Ze.Text = en;
en.FIRST_CHAR_REGEX = /\S/;
en.DOUBLE_LINE = /\n\n/g;
en.ONE_LINE = /\n/g;
Object.defineProperty(Ct, "__esModule", {
  value: !0
});
Ct.Translate = void 0;
var Ml = Ze, Il = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "translate",
    value: function(e, t) {
      for (var n = Ml.Text.breakupIntoWordsArr(e), a = 0; a < n.length; a += 1) t[n[a]] && (n[a] = t[n[a]]);
      return n.join("");
    }
  }]);
}();
Ct.Translate = Il;
Object.defineProperty(Qt, "__esModule", {
  value: !0
});
Qt.WebSpeechTranscript = void 0;
var Xr = Ct, Rl = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "extract",
    value: function(e, t, n) {
      for (var a = "", s = e.resultIndex; s < e.results.length; ++s) {
        var o = e.results[s][0].transcript;
        n && (o = Xr.Translate.translate(o, n)), e.results[s].isFinal ? t += o : a += o;
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
        n && (l = Xr.Translate.translate(l, n)), a += l;
      }
      return {
        interimTranscript: s,
        finalTranscript: a,
        newText: s || a
      };
    }
  }]);
}();
Qt.WebSpeechTranscript = Rl;
var lt = {};
Object.defineProperty(lt, "__esModule", {
  value: !0
});
lt.Browser = void 0;
var mt = /* @__PURE__ */ b(function r() {
  y(this, r);
});
lt.Browser = mt;
mt.IS_SAFARI = function() {
  return mt._IS_SAFARI === void 0 && (mt._IS_SAFARI = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), mt._IS_SAFARI;
};
var Tt = {}, tn = {};
Object.defineProperty(tn, "__esModule", {
  value: !0
});
tn.EventListeners = void 0;
var ai = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
tn.EventListeners = ai;
ai.KEY_DOWN_TIMEOUT = null;
var nn = {};
Object.defineProperty(nn, "__esModule", {
  value: !0
});
nn.PreResultUtils = void 0;
var Ll = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "process",
    value: function(e, t, n, a, s) {
      var o = a == null ? void 0 : a(t, n);
      return o ? (setTimeout(function() {
        o.restart ? e.resetRecording(s) : o.stop && e.stop();
      }), (o.stop || o.restart) && o.removeNewText) : !1;
    }
  }]);
}();
nn.PreResultUtils = Ll;
var xt = {}, At = {};
Object.defineProperty(At, "__esModule", {
  value: !0
});
At.AutoScroll = void 0;
var Ol = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
At.AutoScroll = Ol;
var Qe = {};
Object.defineProperty(Qe, "__esModule", {
  value: !0
});
Qe.Elements = void 0;
var Pl = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
Qe.Elements = Pl;
var et = {};
Object.defineProperty(et, "__esModule", {
  value: !0
});
et.Cursor = void 0;
var Nl = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
et.Cursor = Nl;
Object.defineProperty(xt, "__esModule", {
  value: !0
});
xt.CommandUtils = void 0;
var Zr = At, Dl = Qe, Fl = lt, Qr = et, ea = Ze, Bl = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "processCommand",
    value: function(e, t) {
      return (!t || !t.caseSensitive) && (e = e.toLowerCase()), (t == null ? void 0 : t.substrings) === !1 ? ea.Text.breakupIntoWordsArr(e) : e;
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
      r.toggleCommandModeOff(e), Dl.Elements.isPrimitiveElement(a) ? (a.value = n, e.isTargetInShadow || Qr.Cursor.setOffsetForPrimitive(a, n.length, !0), Fl.Browser.IS_SAFARI() && e.autoScroll && Zr.AutoScroll.scrollSafariPrimitiveToEnd(a)) : (a.textContent = n, e.isTargetInShadow || Qr.Cursor.focusEndOfGeneric(a), setTimeout(function() {
        return Zr.AutoScroll.scrollGeneric(e, a);
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
        var d = ((o = c.settings) === null || o === void 0 ? void 0 : o.caseSensitive) === !0 ? t : t.toLowerCase(), h = ea.Text.breakupIntoWordsArr(d), p = ((l = c.settings) === null || l === void 0 ? void 0 : l.substrings) === !1 ? r.checkIfMatchesWord : r.checkIfMatchesSubstring;
        if (c.commandMode && p(c.commandMode, d, h)) return e.setInterimColorToFinal(), setTimeout(function() {
          return r.toggleCommandModeOn(e);
        }), {
          doNotProcessTranscription: !1
        };
        if (!(c.commandMode && !e.isWaitingForCommand)) {
          if (c.stop && p(c.stop, d, h)) return r.toggleCommandModeOff(e), setTimeout(function() {
            return e.stop();
          }), {
            doNotProcessTranscription: !1
          };
          if (c.pause && p(c.pause, d, h)) return r.toggleCommandModeOff(e), e.setInterimColorToFinal(), setTimeout(function() {
            var m;
            e.isPaused = !0, (m = e.onPauseTrigger) === null || m === void 0 || m.call(e, !0);
          }), {
            doNotProcessTranscription: !1
          };
          if (c.resume && p(c.resume, d, h)) return e.isPaused = !1, (u = e.onPauseTrigger) === null || u === void 0 || u.call(e, !1), r.toggleCommandModeOff(e), e.resetRecording(n), {
            doNotProcessTranscription: !0
          };
          if (c.reset && p(c.reset, d, h)) return s !== void 0 && r.setText(e, n, s, a), {
            doNotProcessTranscription: !0
          };
          if (c.removeAllText && p(c.removeAllText, d, h)) return r.setText(e, n, "", a), {
            doNotProcessTranscription: !0
          };
        }
      }
    }
  }]);
}();
xt.CommandUtils = Bl;
var rn = {};
Object.defineProperty(rn, "__esModule", {
  value: !0
});
rn.Highlight = void 0;
var jl = Qe, ht = et, Ul = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
        var a = ht.Cursor.getGenericElementCursorOffset(t, n, !0), s = ht.Cursor.getGenericElementCursorOffset(t, n, !1);
        e.isHighlighted = a !== s;
      }
    }
  }, {
    key: "setState",
    value: function(e, t) {
      document.activeElement === t && (jl.Elements.isPrimitiveElement(t) ? r.setStateForPrimitive(e, t) : r.setStateForGeneric(e, t));
    }
  }, {
    key: "removeForGeneric",
    value: function(e, t) {
      var n = window.getSelection();
      if (n) {
        var a = ht.Cursor.getGenericElementCursorOffset(t, n, !0);
        n.deleteFromDocument(), ht.Cursor.setOffsetForGeneric(t, a), e.isHighlighted = !1;
      }
    }
  }, {
    key: "removeForPrimitive",
    value: function(e, t) {
      var n = t.selectionStart, a = t.selectionEnd, s = t.value;
      if (n && a) {
        var o = s.substring(0, n) + s.substring(a);
        t.value = o, ht.Cursor.setOffsetForPrimitive(t, n, e.autoScroll);
      }
      e.isHighlighted = !1;
    }
  }]);
}();
rn.Highlight = Ul;
var an = {};
Object.defineProperty(an, "__esModule", {
  value: !0
});
an.Padding = void 0;
var Hl = Qe, ta = et, rt = Ze, ql = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "setStateForPrimitiveElement",
    value: function(e, t) {
      if (document.activeElement === t && t.selectionStart !== null) {
        var n = t.selectionStart, a = t.value[n - 1], s = t.selectionEnd === null ? n : t.selectionEnd, o = t.value[s];
        rt.Text.isCharDefined(a) && (e.startPadding = " ", e.numberOfSpacesBeforeNewText = 1), rt.Text.isCharDefined(o) && (e.endPadding = " ", e.numberOfSpacesAfterNewText = 1), e.isCursorAtEnd = t.value.length === s;
        return;
      }
      var l = t.value[t.value.length - 1];
      rt.Text.isCharDefined(l) && (e.startPadding = " ", e.numberOfSpacesBeforeNewText = 1), e.isCursorAtEnd = !0;
    }
  }, {
    key: "setStateForGenericElement",
    value: function(e, t) {
      var n, a, s;
      if (document.activeElement === t) {
        var o = window.getSelection();
        if (o != null && o.focusNode) {
          var l = ta.Cursor.getGenericElementCursorOffset(t, o, !0), u = (n = t.textContent) === null || n === void 0 ? void 0 : n[l - 1], c = ta.Cursor.getGenericElementCursorOffset(t, o, !1), d = (a = t.textContent) === null || a === void 0 ? void 0 : a[c];
          rt.Text.isCharDefined(u) && (e.startPadding = " "), rt.Text.isCharDefined(d) && (e.endPadding = " "), e.isCursorAtEnd = ((s = t.textContent) === null || s === void 0 ? void 0 : s.length) === c;
          return;
        }
      }
      var h = t.innerText.charAt(t.innerText.length - 1);
      rt.Text.isCharDefined(h) && (e.startPadding = " "), e.isCursorAtEnd = !0;
    }
  }, {
    key: "setState",
    value: function(e, t) {
      Hl.Elements.isPrimitiveElement(t) ? r.setStateForPrimitiveElement(e, t) : r.setStateForGenericElement(e, t);
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
an.Padding = ql;
Object.defineProperty(Tt, "__esModule", {
  value: !0
});
Tt.Speech = void 0;
var na = tn, zl = nn, ra = xt, Nt = At, Cn = rn, xe = Qe, Tn = an, aa = lt, ia = et, xn = Ze, Vl = /* @__PURE__ */ function() {
  function r() {
    y(this, r), this.finalTranscript = "", this.interimSpan = xe.Elements.createInterimSpan(), this.finalSpan = xe.Elements.createGenericSpan(), this.scrollingSpan = xe.Elements.createGenericSpan(), this.isCursorAtEnd = !1, this.spansPopulated = !1, this.startPadding = "", this.endPadding = "", this.numberOfSpacesBeforeNewText = 0, this.numberOfSpacesAfterNewText = 0, this.isHighlighted = !1, this.primitiveTextRecorded = !1, this.recognizing = !1, this._displayInterimResults = !0, this.insertInCursorLocation = !0, this.autoScroll = !0, this.isRestarting = !1, this.isPaused = !1, this.isWaitingForCommand = !1, this.isTargetInShadow = !1, this.cannotBeStopped = !1, this.resetState();
  }
  return b(r, [{
    key: "prepareBeforeStart",
    value: function(e) {
      var t, n;
      if (e != null && e.element) if (na.EventListeners.add(this, e), Array.isArray(e.element)) {
        var a = e.element.find(function(s) {
          return s === document.activeElement;
        }) || e.element[0];
        if (!a) return;
        this.prepare(a);
      } else this.prepare(e.element);
      (e == null ? void 0 : e.displayInterimResults) !== void 0 && (this._displayInterimResults = e.displayInterimResults), e != null && e.textColor && (this._finalTextColor = (t = e == null ? void 0 : e.textColor) === null || t === void 0 ? void 0 : t.final, xe.Elements.applyCustomColors(this, e.textColor)), (e == null ? void 0 : e.insertInCursorLocation) !== void 0 && (this.insertInCursorLocation = e.insertInCursorLocation), (e == null ? void 0 : e.autoScroll) !== void 0 && (this.autoScroll = e.autoScroll), this._onResult = e == null ? void 0 : e.onResult, this._onPreResult = e == null ? void 0 : e.onPreResult, this._onStart = e == null ? void 0 : e.onStart, this._onStop = e == null ? void 0 : e.onStop, this._onError = e == null ? void 0 : e.onError, this.onCommandModeTrigger = e == null ? void 0 : e.onCommandModeTrigger, this.onPauseTrigger = e == null ? void 0 : e.onPauseTrigger, this._options = e, !((n = this._options) === null || n === void 0) && n.commands && (this.commands = ra.CommandUtils.process(this._options.commands));
    }
  }, {
    key: "prepare",
    value: function(e) {
      Tn.Padding.setState(this, e), Cn.Highlight.setState(this, e), this.isTargetInShadow = xe.Elements.isInsideShadowDOM(e), xe.Elements.isPrimitiveElement(e) ? (this._primitiveElement = e, this._originalText = this._primitiveElement.value) : (this._genericElement = e, this._originalText = this._genericElement.textContent);
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
      var a, s = xn.Text.capitalize(t);
      if (!(this.finalTranscript === s && e === "")) {
        zl.PreResultUtils.process(this, n, e === "", this._onPreResult, this._options) && (e = "", n = "");
        var o = this.commands && ra.CommandUtils.execCommand(this, n, this._options, this._primitiveElement || this._genericElement, this._originalText);
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
      this.isHighlighted && Cn.Highlight.removeForPrimitive(this, e), this.primitiveTextRecorded || Tn.Padding.adjustStateAfterRecodingPrimitiveElement(this, e), n && Tn.Padding.adjustSateForNoTextPrimitiveElement(this);
      var a = this.startPadding + this.finalTranscript + t;
      if (e.value = a + this.endPadding, !this.isTargetInShadow) {
        var s = a.length + this.numberOfSpacesAfterNewText;
        ia.Cursor.setOffsetForPrimitive(e, s, this.autoScroll);
      }
      this.autoScroll && aa.Browser.IS_SAFARI() && this.isCursorAtEnd && Nt.AutoScroll.scrollSafariPrimitiveToEnd(e);
    }
  }, {
    key: "updateGenericElement",
    value: function(e, t, n) {
      this.isHighlighted && Cn.Highlight.removeForGeneric(this, e), this.spansPopulated || xe.Elements.appendSpans(this, e);
      var a = (n ? "" : this.startPadding) + xn.Text.lineBreak(this.finalTranscript);
      this.finalSpan.innerHTML = a;
      var s = Nt.AutoScroll.isRequired(this.autoScroll, e);
      Nt.AutoScroll.changeStateIfNeeded(this, s);
      var o = xn.Text.lineBreak(t) + (n ? "" : this.endPadding);
      this.interimSpan.innerHTML = o, aa.Browser.IS_SAFARI() && this.insertInCursorLocation && ia.Cursor.setOffsetForSafariGeneric(e, a.length + o.length), s && Nt.AutoScroll.scrollGeneric(this, e), n && (this.scrollingSpan.innerHTML = "");
    }
  }, {
    key: "finalise",
    value: function(e) {
      this._genericElement && (e ? (this.finalSpan = xe.Elements.createGenericSpan(), this.setInterimColorToFinal(), this.interimSpan = xe.Elements.createInterimSpan(), this.scrollingSpan = xe.Elements.createGenericSpan()) : this._genericElement.textContent = this._genericElement.textContent, this.spansPopulated = !1), na.EventListeners.remove(this);
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
Tt.Speech = Vl;
Object.defineProperty(Zt, "__esModule", {
  value: !0
});
Zt.WebSpeech = void 0;
var sa = Qt, oa = lt, Gl = Tt, $l = /* @__PURE__ */ function(r) {
  function i() {
    return y(this, i), F(this, i);
  }
  return B(i, r), b(i, [{
    key: "start",
    value: function(t) {
      var n;
      this._extractText === void 0 && (this._extractText = oa.Browser.IS_SAFARI() ? sa.WebSpeechTranscript.extractSafari : sa.WebSpeechTranscript.extract), this.validate() && (this.prepareBeforeStart(t), this.instantiateService(t), (n = this._service) === null || n === void 0 || n.start(), this._translations = t == null ? void 0 : t.translations);
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
        oa.Browser.IS_SAFARI() && n.message === "Another request is started" || n.error === "aborted" && t.isRestarting || n.error !== "no-speech" && t.error(n.message || n.error);
      }, this._service.onaudioend = function() {
        t.setStateOnStop();
      }, this._service.onend = function() {
        t._stopping = !1;
      }, this._service.onresult = function(n) {
        if (P(n.results) > "u" && t._service) t._service.onend = null, t._service.stop();
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
}(Gl.Speech);
Zt.WebSpeech = $l;
var sn = {};
Object.defineProperty(sn, "__esModule", {
  value: !0
});
sn.GlobalState = void 0;
var ii = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "doubleClickDetector",
    value: function() {
      return r.doubleClickPending ? !0 : (r.doubleClickPending = !0, setTimeout(function() {
        r.doubleClickPending = !1;
      }, 300), !1);
    }
  }]);
}();
sn.GlobalState = ii;
ii.doubleClickPending = !1;
var on = {}, ln = {};
Object.defineProperty(ln, "__esModule", {
  value: !0
});
ln.PreventConnectionStop = void 0;
var Wl = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
ln.PreventConnectionStop = Wl;
var un = {}, cn = {};
Object.defineProperty(cn, "__esModule", {
  value: !0
});
cn.README_URL = void 0;
cn.README_URL = "https://github.com/OvidijusParsiunas/speech-to-element";
Object.defineProperty(un, "__esModule", {
  value: !0
});
un.AzureSpeechConfig = void 0;
var An = cn, Kl = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "validateOptions",
    value: function(e, t) {
      return t ? !t.subscriptionKey && !t.token && !t.retrieveToken ? (e("Please define a 'subscriptionKey', 'token' or 'retrieveToken' property - more info: ".concat(An.README_URL)), !1) : t.region ? !0 : (e("Please define a 'region' property - more info: ".concat(An.README_URL)), !1) : (e("Please provide subscription details - more info: ".concat(An.README_URL)), !1);
    }
  }, {
    key: "getNewSpeechConfig",
    value: function() {
      var i = S(/* @__PURE__ */ f().mark(function t(n, a) {
        return f().wrap(function(o) {
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
      var i = S(/* @__PURE__ */ f().mark(function t(n, a) {
        var s;
        return f().wrap(function(l) {
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
un.AzureSpeechConfig = Kl;
var dn = {};
Object.defineProperty(dn, "__esModule", {
  value: !0
});
dn.StopTimeout = void 0;
var si = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
dn.StopTimeout = si;
si.DEFAULT_MS = 2e4;
var hn = {};
Object.defineProperty(hn, "__esModule", {
  value: !0
});
hn.AzureTranscript = void 0;
var Jl = Ct, Yl = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "extract",
    value: (
      // newText is used to only send new text in onResult as finalTranscript is continuously accumulated
      function(e, t, n, a) {
        return a && (e = Jl.Translate.translate(e, a)), n ? {
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
hn.AzureTranscript = Yl;
Object.defineProperty(on, "__esModule", {
  value: !0
});
on.Azure = void 0;
var la = ln, ua = un, Mn = dn, ca = hn, Xl = Tt, Zl = /* @__PURE__ */ function(r) {
  function i() {
    var e;
    return y(this, i), e = F(this, i, arguments), e._newTextPadding = "", e;
  }
  return B(i, r), b(i, [{
    key: "start",
    value: function(t, n) {
      this._newTextPadding = "", this.stopTimeout === void 0 && Mn.StopTimeout.reset(this, t == null ? void 0 : t.stopAfterSilenceMs), this.prepareBeforeStart(t), this.startAsync(t), n || la.PreventConnectionStop.applyPrevention(this);
    }
  }, {
    key: "startAsync",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s;
        return f().wrap(function(l) {
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
      return i.getAPI() ? ua.AzureSpeechConfig.validateOptions(this.error.bind(this), t) : (this.moduleNotFound(), !1);
    }
  }, {
    key: "instantiateService",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s, o, l, u;
        return f().wrap(function(d) {
          for (; ; ) switch (d.prev = d.next) {
            case 0:
              return s = i.getAPI(), o = s.AudioConfig.fromDefaultMicrophoneInput(), d.next = 4, ua.AzureSpeechConfig.get(s.SpeechConfig, a);
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
        var a = ca.AzureTranscript.extract(this._newTextPadding + n.result.text, this.finalTranscript, !1, this._translations), s = a.interimTranscript, o = a.finalTranscript, l = a.newText;
        Mn.StopTimeout.reset(this, this.stopTimeoutMS), this.updateElements(s, o, l);
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
            var s = ca.AzureTranscript.extract(this._newTextPadding + a.text, this.finalTranscript, !0, this._translations), o = s.interimTranscript, l = s.finalTranscript, u = s.newText;
            Mn.StopTimeout.reset(this, this.stopTimeoutMS), this.updateElements(o, l, u), l !== "" && (this._newTextPadding = " ");
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
      la.PreventConnectionStop.clearPrevention(this), this.setStateOnStart();
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
}(Xl.Speech);
on.Azure = Zl;
Object.defineProperty(ri, "__esModule", {
  value: !0
});
var da = Zt, Ql = xt, we = sn, eu = on, tu = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "toggle",
    value: function(e, t) {
      var n, a, s = e.toLocaleLowerCase().trim();
      !((n = we.GlobalState.service) === null || n === void 0) && n.recognizing ? this.stop() : s === "webspeech" ? r.startWebSpeech(t) : s === "azure" ? r.startAzure(t) : (console.error("service not found - must be either 'webspeech' or 'azure'"), (a = t == null ? void 0 : t.onError) === null || a === void 0 || a.call(t, "service not found - must be either 'webspeech' or 'azure'"));
    }
  }, {
    key: "startWebSpeech",
    value: function(e) {
      r.stop() || (we.GlobalState.service = new da.WebSpeech(), we.GlobalState.service.start(e));
    }
  }, {
    key: "isWebSpeechSupported",
    value: function() {
      return !!da.WebSpeech.getAPI();
    }
  }, {
    key: "startAzure",
    value: function(e) {
      var t;
      r.stop() || !((t = we.GlobalState.service) === null || t === void 0) && t.cannotBeStopped || (we.GlobalState.service = new eu.Azure(), we.GlobalState.service.start(e));
    }
  }, {
    key: "stop",
    value: function() {
      var e;
      return we.GlobalState.doubleClickDetector() ? !0 : (!((e = we.GlobalState.service) === null || e === void 0) && e.recognizing && we.GlobalState.service.stop(), !1);
    }
  }, {
    key: "endCommandMode",
    value: function() {
      we.GlobalState.service && Ql.CommandUtils.toggleCommandModeOff(we.GlobalState.service);
    }
  }]);
}(), qt = ri.default = tu, nu = /* @__PURE__ */ function() {
  function r(i, e) {
    y(this, r), this.silenceMS = 2e3, this.stop = !0, typeof e == "boolean" && e === !1 && (this.stop = !1), typeof i == "number" && (this.silenceMS = i);
  }
  return b(r, [{
    key: "setSilenceTimeout",
    value: function(e, t) {
      var n = this;
      this._silenceTimeout = setTimeout(function() {
        var a;
        (a = e.submit) == null || a.call(e), qt.stop(), n.stop || setTimeout(t, cr.MICROPHONE_RESET_TIMEOUT_MS);
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
}(), oi = /* @__PURE__ */ function(r) {
  function i(e, t, n) {
    var a;
    y(this, i);
    var s = P(e.speechToText) == "object" ? e.speechToText : {};
    a = F(this, i, [s == null ? void 0 : s.button]);
    var o = a.processConfiguration(t, e.speechToText), l = o.serviceName, u = o.processedConfig;
    if (a._addErrorMessage = n, l === "webspeech" && !qt.isWebSpeechSupported()) a.changeToUnsupported();
    else {
      var c = !e.textInput || !e.textInput.disabled;
      a.elementRef.onclick = a.buttonClick.bind(a, t, c, l, u);
    }
    return setTimeout(function() {
      a._validationHandler = e._validationHandler;
    }), a;
  }
  return B(i, r), b(i, [{
    key: "processConfiguration",
    value: function(t, n) {
      var a, s, o, l, u, c, d = P(n) == "object" ? n : {}, h = P(d.webSpeech) == "object" ? d.webSpeech : {}, p = d.azure || {}, m = J(J({
        displayInterimResults: (a = d.displayInterimResults) !== null && a !== void 0 ? a : void 0,
        textColor: (s = d.textColor) !== null && s !== void 0 ? s : void 0,
        translations: (o = d.translations) !== null && o !== void 0 ? o : void 0,
        commands: (l = d.commands) !== null && l !== void 0 ? l : void 0,
        events: (u = d.events) !== null && u !== void 0 ? u : void 0
      }, h), p), g = (c = d.commands) == null ? void 0 : c.submit;
      return g && (m.onPreResult = function(k) {
        return k.toLowerCase().includes(g) ? (setTimeout(function() {
          var _;
          return (_ = t.submit) == null ? void 0 : _.call(t);
        }), qt.endCommandMode(), {
          restart: !0,
          removeNewText: !0
        }) : null;
      }), d.submitAfterSilence && (this._silenceSubmit = new nu(d.submitAfterSilence, d.stopAfterSubmit)), {
        serviceName: i.getServiceName(d),
        processedConfig: m
      };
    }
  }, {
    key: "buttonClick",
    value: function(t, n, a, s) {
      var o = this, l = s == null ? void 0 : s.events;
      t.removePlaceholderStyle(), qt.toggle(a, J({
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
          var c, d, h;
          (c = o._validationHandler) == null || c.call(o), (d = o._silenceSubmit) == null || d.clearSilenceTimeout(), o.changeToDefault(), (h = l == null ? void 0 : l.onStop) == null || h.call(l);
        },
        onPauseTrigger: function(c) {
          var d, h;
          (d = o._silenceSubmit) == null || d.onPause(c, t, o.elementRef.onclick), (h = l == null ? void 0 : l.onPauseTrigger) == null || h.call(l, c);
        },
        onPreResult: function(c, d) {
          var h;
          (h = l == null ? void 0 : l.onPreResult) == null || h.call(l, c, d);
        },
        onResult: function(c, d) {
          var h, p, m;
          d && ((h = o._validationHandler) == null || h.call(o)), (p = o._silenceSubmit) == null || p.resetSilenceTimeout(t, o.elementRef.onclick), (m = l == null ? void 0 : l.onResult) == null || m.call(l, c, d);
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
}(ni);
oi.MICROPHONE_RESET_TIMEOUT_MS = 300;
var cr = oi, dr = /* @__PURE__ */ function() {
  function r(i, e, t, n) {
    var a = this;
    y(this, r), this._attachments = [], this._fileCountLimit = 99, this._acceptedFormat = "", e.maxNumberOfFiles && (this._fileCountLimit = e.maxNumberOfFiles), this._toggleContainerDisplay = t, this._fileAttachmentsContainerRef = n, e.acceptedFormats && (this._acceptedFormat = e.acceptedFormats), setTimeout(function() {
      a._validationHandler = i._validationHandler;
    });
  }
  return b(r, [{
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
        var o = Jn.createAudioAttachment(t);
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
      this._attachments.splice(n, 1), Jn.stopAttachmentPlayback(a), a.remove(), this._toggleContainerDisplay(!1), (t = this._validationHandler) == null || t.call(this);
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
      t.classList.add("border-bound-attachment"), st.IS_SAFARI && t.classList.add("border-bound-attachment-safari");
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
}(), ru = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <title>play</title>
  <path d="M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z"></path>
</svg>`, ha = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>stop</title>
<path d="M5.92 24.096q0 0.832 0.576 1.408t1.44 0.608h16.128q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-16.128q-0.832 0-1.44 0.576t-0.576 1.44v16.16z"></path>
</svg>`, li = /* @__PURE__ */ function(r) {
  function i(e, t, n, a) {
    return y(this, i), F(this, i, [e, t, n, a]);
  }
  return B(i, r), b(i, [{
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
      var o = ke.createSVGElement(ha);
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
      return t.classList.add("border-bound-attachment", "audio-attachment-icon-container"), st.IS_SAFARI && t.classList.add("border-bound-attachment-safari"), t;
    }
  }, {
    key: "addAudioElements",
    value: function(t, n) {
      var a = t.parentElement ? _e.cloneElement(t) : t, s = document.createElement("audio");
      s.src = n;
      var o = ke.createSVGElement(ru);
      o.classList.add("attachment-icon", "play-icon");
      var l = ke.createSVGElement(ha);
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
}(dr);
li.TIMER_LIMIT_S = 5999;
var Jn = li, au = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "create",
    value: (
      // prettier-ignore
      function(e, t, n, a, s) {
        return s === "audio" ? new Jn(e, t, n, a) : new dr(e, t, n, a);
      }
    )
  }]);
}(), hr = /* @__PURE__ */ function() {
  function r(i, e, t) {
    y(this, r), this._fileAttachmentsTypes = [], this.elementRef = this.createAttachmentContainer();
    var n = P(t) == "object" && !!t.displayFileAttachmentContainer;
    this.toggleContainerDisplay(n), i.appendChild(this.elementRef), e && Object.assign(this.elementRef.style, e);
  }
  return b(r, [{
    key: "addType",
    value: function(e, t, n) {
      var a = au.create(e, t, this.toggleContainerDisplay.bind(this), this.elementRef, n);
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
      var i = S(/* @__PURE__ */ f().mark(function t() {
        return f().wrap(function(a) {
          for (; ; ) switch (a.prev = a.next) {
            case 0:
              return a.next = 2, Promise.all(this._fileAttachmentsTypes.map(/* @__PURE__ */ function() {
                var s = S(/* @__PURE__ */ f().mark(function o(l) {
                  var u;
                  return f().wrap(function(d) {
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
}(), ui = /* @__PURE__ */ function() {
  function r(i, e, t) {
    y(this, r), this._isOpen = !1, this._contentRef = r.createModalContent(e, t == null ? void 0 : t.backgroundColor), this._buttonPanel = r.createButtonPanel(t == null ? void 0 : t.backgroundColor), this._elementRef = r.createContainer(this._contentRef, t), this._elementRef.appendChild(this._buttonPanel), i.appendChild(this._elementRef), this._backgroundPanelRef = r.createDarkBackgroundPanel(), i.appendChild(this._backgroundPanelRef), this.addWindowEvents(i);
  }
  return b(r, [{
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
        Ce.addAttributes(s), e._buttonPanel.appendChild(s);
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
      !e.isConnected && this.keyDownEvent ? window.removeEventListener("keydown", this.keyDownEvent) : this._isOpen && (t.key === ue.ESCAPE ? (this.close(), (n = this.extensionCloseCallback) == null || n.call(this)) : t.key === ue.ENTER && (this.close(), (a = this.extensionCloseCallback) == null || a.call(this)));
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
      return (n = a.classList).add.apply(n, Kt(e)), t && (a.style.backgroundColor = t), document.createElement("div").appendChild(a), a;
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
      var n = ke.createSVGElement(e);
      return n.classList.add("modal-svg-button-icon"), t.appendChild(n), t;
    }
  }, {
    key: "createTextModalFunc",
    value: function(e, t, n) {
      var a;
      if (P(t) == "object" && (a = t.files) != null && a.infoModal) {
        var s = new r(e, ["modal-content"], t.files.infoModal.containerStyle);
        return s.addCloseButton("OK", !1, n), s.openTextModal.bind(s, t.infoModalTextMarkUp || "");
      }
    }
  }]);
}();
ui.MODAL_CLOSE_TIMEOUT_MS = 190;
var vt = ui, iu = /* @__PURE__ */ function(r) {
  function i(e, t, n, a, s, o) {
    var l;
    y(this, i);
    var u, c, d, h, p, m, g, k, _, E = (u = n == null ? void 0 : n.button) == null ? void 0 : u.position, M = ((h = (d = (c = n == null ? void 0 : n.button) == null ? void 0 : c.styles) == null ? void 0 : d.text) == null ? void 0 : h.content) || o;
    l = F(this, i, [i.createButtonElement(), E, n.button, M]);
    var A = E === "dropup-menu", C = l.createInnerElements(a, s, l._customStyles, A);
    return l._inputElement = i.createInputElement((p = n == null ? void 0 : n.files) == null ? void 0 : p.acceptedFormats), l.addClickEvent(e, n), l.elementRef.replaceChildren(C.styles), l.reapplyStateStyle("styles"), l._fileAttachmentsType = t, l._openModalOnce = ((g = (m = n.files) == null ? void 0 : m.infoModal) == null ? void 0 : g.openModalOnce) === !1 || (_ = (k = n.files) == null ? void 0 : k.infoModal) == null ? void 0 : _.openModalOnce, l;
  }
  return B(i, r), b(i, [{
    key: "createInnerElements",
    value: function(t, n, a) {
      var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, o = i.createSVGIconElement(t, n);
      return {
        styles: Ge.createInnerElement(this.elementRef, o, "styles", a, s)
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
      hr.addFilesToType(Array.from(t.files || []), [this._fileAttachmentsType]), t.value = "";
    }
  }, {
    key: "addClickEvent",
    value: function(t, n) {
      var a = this.triggerImportPrompt.bind(this, this._inputElement), s = vt.createTextModalFunc(t, n, a);
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
      return t.classList.add("input-button", "upload-file-button"), Ce.addAttributes(t), t;
    }
  }, {
    key: "createSVGIconElement",
    value: function(t, n) {
      var a = ke.createSVGElement(n);
      return a.id = t, a;
    }
  }]);
}(wt), pa = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "create",
    value: function(e, t, n) {
      var a = r.createElement(n);
      r.addEvents(a, e, t), e.appendChild(a);
    }
  }, {
    key: "createElement",
    value: function(e) {
      var t = document.createElement("div");
      return t.id = "drag-and-drop", P(e) == "object" && Object.assign(t.style, e), t;
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
}(), su = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
      var i = S(/* @__PURE__ */ f().mark(function t(n, a, s, o) {
        var l, u, c;
        return f().wrap(function(h) {
          for (; ; ) switch (h.prev = h.next) {
            case 0:
              return l = a.isTextInputEmpty() ? "" : a.inputElementRef.textContent, h.next = 3, s.completePlaceholders();
            case 3:
              return u = s.getAllFileData(), c = u == null ? void 0 : u.map(function(p) {
                return p.file;
              }), h.abrupt("return", r.validate(n, o, l, c));
            case 5:
            case "end":
              return h.stop();
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
      var i = S(/* @__PURE__ */ f().mark(function t(n, a, s) {
        var o, l;
        return f().wrap(function(c) {
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
      return e.websocket && !_t.canSendMessage(e.websocket) ? (t.changeToDisabledIcon(), !1) : !0;
    }
    // prettier-ignore
  }, {
    key: "attach",
    value: function(e, t, n, a, s) {
      var o = e.validateInput || ge.processValidateInput(e);
      e._validationHandler = /* @__PURE__ */ function() {
        var l = S(/* @__PURE__ */ f().mark(function u(c) {
          var d;
          return f().wrap(function(p) {
            for (; ; ) switch (p.prev = p.next) {
              case 0:
                if (!(s.status.loadingActive || s.status.requestInProgress || t.isSubmitProgrammaticallyDisabled === !0 || !r.validateWebsocket(t, s))) {
                  p.next = 2;
                  break;
                }
                return p.abrupt("return", !1);
              case 2:
                return d = o || t.canSendMessage, p.abrupt("return", d ? c ? r.useValidationFuncProgrammatic(d, c, s) : r.useValidationFunc(d, n, a, s) : null);
              case 4:
              case "end":
                return p.stop();
            }
          }, u);
        }));
        return function(u) {
          return l.apply(this, arguments);
        };
      }();
    }
  }]);
}(), ci = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "getFileName",
    value: function(e, t) {
      var n = /* @__PURE__ */ new Date(), a = String(n.getHours()).padStart(2, "0"), s = String(n.getMinutes()).padStart(2, "0"), o = String(n.getSeconds()).padStart(2, "0");
      return "".concat(e, "-").concat(a, "-").concat(s, "-").concat(o, ".").concat(t);
    }
  }]);
}(), ou = /* @__PURE__ */ function(r) {
  function i(e, t) {
    var n;
    y(this, i);
    var a, s;
    return n = F(this, i, [t.button]), n._waitingForBrowserApproval = !1, n._audioType = e, n._extension = ((a = t.files) == null ? void 0 : a.format) || "mp3", n._maxDurationSeconds = (s = t.files) == null ? void 0 : s.maxDurationSeconds, n.elementRef.onclick = n.buttonClick.bind(it(n)), n;
  }
  return B(i, r), b(i, [{
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
      }), s = ci.getFileName(this._newFilePrefix || "audio", this._extension), o = new File([a], s, {
        type: a.type
      }), l = new FileReader();
      l.readAsDataURL(o), l.onload = function(u) {
        n._audioType.completePlaceholderAttachment(o, u.target.result);
      };
    }
  }]);
}(ni), lu = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" stroke-width="1" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
  <line x1="22" y1="2" x2="11" y2="14"></line>
  <polygon points="22 2 15 22 11 14 2 10 22 2"></polygon>
</svg>
`, Ue = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
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
        var s = J(J({}, a), r.getObjectValue(e, n) || {});
        r.setPropertyValue(e, n, s);
      }
    }
  }]);
}(), fa = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "resetSubmit",
    value: function(e, t) {
      t ? e.unsetCustomStateStyles(["loading", "submit"]) : e.unsetCustomStateStyles(["stop", "loading", "submit"]), e.reapplyStateStyle("submit");
    }
  }, {
    key: "overwriteDefaultStyleWithSubmit",
    value: function(e, t) {
      if (e.submit) {
        var n = JSON.parse(JSON.stringify(e[t] || {}));
        Ue.overwritePropertyObjectFromAnother(n, e.submit, ["container", "default"]), Ue.overwritePropertyObjectFromAnother(n, e.submit, ["text", "styles", "default"]), Ue.overwritePropertyObjectFromAnother(n, e.submit, ["svg", "styles", "default"]), e[t] = n;
      }
    }
    // prettier-ignore
  }, {
    key: "setUpDisabledButton",
    value: function(e) {
      Ue.setPropertyValueIfDoesNotExist(e, ["submit", "container", "default", "backgroundColor"], ""), Ue.setPropertyValueIfDoesNotExist(e, ["disabled", "container", "default", "backgroundColor"], "unset"), Ue.setPropertyValueIfDoesNotExist(e.submit, ["svg", "styles", "default", "filter"], ""), Ue.setPropertyValueIfDoesNotExist(e.disabled, ["svg", "styles", "default", "filter"], "brightness(0) saturate(100%) invert(70%) sepia(0%) saturate(5564%) hue-rotate(207deg) brightness(100%) contrast(97%)"), r.overwriteDefaultStyleWithSubmit(e, "disabled");
    }
  }, {
    key: "process",
    value: function(e) {
      var t = JSON.parse(JSON.stringify(e || {}));
      return r.overwriteDefaultStyleWithSubmit(t, "loading"), r.overwriteDefaultStyleWithSubmit(t, "stop"), e != null && e.alwaysEnabled || r.setUpDisabledButton(t), t;
    }
  }]);
}(), zt = /* @__PURE__ */ function(r) {
  function i(e, t, n, a, s, o) {
    var l;
    y(this, i);
    var u = fa.process(e.submitButtonStyles);
    return l = F(this, i, [i.createButtonContainerElement(), u == null ? void 0 : u.position, u]), l._isSVGLoadingIconOverriden = !1, l.status = {
      requestInProgress: !1,
      loadingActive: !1
    }, l._messages = n, l._textInput = t, l._fileAttachments = s, l._innerElements = l.createInnerElements(), l._abortStream = new AbortController(), l._stopClicked = {
      listener: function() {
      }
    }, l._serviceIO = a, l._alwaysEnabled = !!(u != null && u.alwaysEnabled), e.disableSubmitButton = l.disableSubmitButton.bind(it(l), a), l.attemptOverwriteLoadingStyle(e), o.microphone && l.setUpSpeechToText(o.microphone.button, e.speechToText), setTimeout(function() {
      var c;
      l._validationHandler = e._validationHandler, l.assignHandlers(l._validationHandler), (c = l._validationHandler) == null || c.call(it(l));
    }), l;
  }
  return B(i, r), b(i, [{
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
      var t = this, n = Ge.createSpecificStateElement(this.elementRef, "submit", this._customStyles), a = {
        loading: void 0,
        stop: void 0
      };
      return Object.keys(a).forEach(function(s) {
        var o = s, l = Ge.createCustomElement(o, t._customStyles);
        l && (a[o] = l);
      }), a.submit = n, a;
    }
  }, {
    key: "createDisabledIconElement",
    value: function(t) {
      return Ge.createCustomElement("disabled", this._customStyles) || t.cloneNode(!0);
    }
    // prettier-ignore
  }, {
    key: "attemptOverwriteLoadingStyle",
    value: function(t) {
      var n, a, s, o, l, u, c, d, h;
      if (!((a = (n = this._customStyles) == null ? void 0 : n.submit) != null && a.svg || (l = (o = (s = this._customStyles) == null ? void 0 : s.loading) == null ? void 0 : o.svg) != null && l.content || (d = (c = (u = this._customStyles) == null ? void 0 : u.loading) == null ? void 0 : c.text) != null && d.content) && (t.displayLoadingBubble === void 0 || t.displayLoadingBubble === !0)) {
        var p = document.createElement("style");
        p.textContent = `
        .loading-button > * {
          filter: brightness(0) saturate(100%) invert(72%) sepia(0%) saturate(3044%) hue-rotate(322deg) brightness(100%)
            contrast(96%) !important;
        }`, (h = t.shadowRoot) == null || h.appendChild(p), this._isSVGLoadingIconOverriden = !0;
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
      P(n) == "object" && typeof n.simulation == "number" && (this._serviceIO.streamHandlers.simulationInterim = n.simulation);
    }
  }, {
    key: "setUpSpeechToText",
    value: function(t, n) {
      this._microphoneButton = t, this._stopSTTAfterSubmit = P(n) == "object" ? n.stopAfterSubmit : !1;
    }
  }, {
    key: "resetSubmit",
    value: function(t) {
      this.status.requestInProgress = !1, this.status.loadingActive = !1, t();
    }
  }, {
    key: "submitFromInput",
    value: function() {
      var e = S(/* @__PURE__ */ f().mark(function n() {
        var a, s;
        return f().wrap(function(l) {
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s = this, o;
        return f().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              typeof a == "string" && (a = ge.processSubmitUserMessage(a)), o = {
                text: a.text
              }, a.files && (o.files = Array.from(a.files).map(function(c) {
                return {
                  file: c,
                  type: dr.getTypeFromBlob(c)
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s, o, l, u, c, d, h = arguments;
        return f().wrap(function(m) {
          for (; ; ) switch (m.prev = m.next) {
            case 0:
              return s = h.length > 1 && h[1] !== void 0 ? h[1] : !1, m.next = 3, (o = this._validationHandler) == null ? void 0 : o.call(this, s ? a : void 0);
            case 3:
              if (m.t0 = m.sent, m.t1 = !1, m.t0 !== m.t1) {
                m.next = 7;
                break;
              }
              return m.abrupt("return");
            case 7:
              return this.changeToLoadingIcon(), m.next = 10, this.addNewMessage(a);
            case 10:
              return this._serviceIO.isWebModel() || this._messages.addLoadingMessage(), this._textInput.clear(), c = (l = a.files) == null ? void 0 : l.map(function(g) {
                return g.file;
              }), d = {
                text: a.text === "" ? void 0 : a.text,
                files: c
              }, m.next = 15, this._serviceIO.callAPI(d, this._messages);
            case 15:
              (u = this._fileAttachments) == null || u.removeAllFiles();
            case 16:
            case "end":
              return m.stop();
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
      var e = S(/* @__PURE__ */ f().mark(function n(a) {
        var s, o, l;
        return f().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              if (s = a.text, o = a.files, l = {
                role: D.USER_ROLE
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
      this._serviceIO.websocket || (this.elementRef.classList.remove(i.LOADING_CLASS, i.DISABLED_CLASS, i.SUBMIT_CLASS), Ce.removeAriaAttributes(this.elementRef), this.elementRef.replaceChildren(this._innerElements.stop), this.reapplyStateStyle("stop", ["loading", "submit"]), this.elementRef.onclick = this.stopStream.bind(this), this.status.loadingActive = !1);
    }
  }, {
    key: "changeToLoadingIcon",
    value: function() {
      this._serviceIO.websocket || (this._isSVGLoadingIconOverriden || this.elementRef.replaceChildren(this._innerElements.loading), this.elementRef.classList.remove(i.SUBMIT_CLASS, i.DISABLED_CLASS), Ce.removeAriaDisabled(this.elementRef), this.elementRef.classList.add(i.LOADING_CLASS), Ce.addAriaBusy(this.elementRef), this.reapplyStateStyle("loading", ["submit"]), this.elementRef.onclick = function() {
      }, this.status.requestInProgress = !0, this.status.loadingActive = !0);
    }
    // called every time when user triggers an input via ValidationHandler - hence use class to check if not already present
  }, {
    key: "changeToSubmitIcon",
    value: function() {
      var t = this;
      this.elementRef.classList.contains(i.SUBMIT_CLASS) || (this.elementRef.classList.remove(i.LOADING_CLASS, i.DISABLED_CLASS), Ce.removeAriaAttributes(this.elementRef), this.elementRef.classList.add(i.SUBMIT_CLASS), this.elementRef.replaceChildren(this._innerElements.submit), fa.resetSubmit(this, this.status.loadingActive), this.elementRef.onclick = function() {
        var n;
        t.submitFromInput(), (n = t._microphoneButton) != null && n.isActive && cr.toggleSpeechAfterSubmit(t._microphoneButton.elementRef, !!t._stopSTTAfterSubmit);
      });
    }
    // called every time when user triggers an input via ValidationHandler - hence use class to check if not already present
  }, {
    key: "changeToDisabledIcon",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      this._alwaysEnabled && !t ? this.changeToSubmitIcon() : this.elementRef.classList.contains(i.DISABLED_CLASS) || (this.elementRef.classList.remove(i.LOADING_CLASS, i.SUBMIT_CLASS), Ce.removeAriaBusy(this.elementRef), this.elementRef.classList.add(i.DISABLED_CLASS), Ce.addAriaDisabled(this.elementRef), this.elementRef.replaceChildren(this._innerElements.disabled), this.reapplyStateStyle("disabled", ["submit"]), this.elementRef.onclick = function() {
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
      return t.classList.add("input-button"), Ce.addAttributes(t), t;
    }
  }, {
    key: "createSubmitIconElement",
    value: function() {
      var t = ke.createSVGElement(lu);
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
}(wt);
zt.SUBMIT_CLASS = "submit-button", zt.LOADING_CLASS = "loading-button", zt.DISABLED_CLASS = "disabled-button";
var uu = zt, cu = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path d="M27.1 14.313V5.396L24.158 8.34c-2.33-2.325-5.033-3.503-8.11-3.503C9.902 4.837 4.901 9.847 4.899 16c.001 6.152 5.003 11.158 11.15 11.16 4.276 0 9.369-2.227 10.836-8.478l.028-.122h-3.23l-.022.068c-1.078 3.242-4.138 5.421-7.613 5.421a8 8 0 0 1-5.691-2.359A7.993 7.993 0 0 1 8 16.001c0-4.438 3.611-8.049 8.05-8.049 2.069 0 3.638.58 5.924 2.573l-3.792 3.789H27.1z"/>
</svg>
`, du = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <title>capture</title>
  <path d="M0 16q0 3.264 1.28 6.208t3.392 5.12 5.12 3.424 6.208 1.248 6.208-1.248 5.12-3.424 3.392-5.12 1.28-6.208-1.28-6.208-3.392-5.12-5.088-3.392-6.24-1.28q-3.264 0-6.208 1.28t-5.12 3.392-3.392 5.12-1.28 6.208zM4 16q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016-1.6 6.048-4.384 4.352-6.016 1.6-6.016-1.6-4.384-4.352-1.6-6.048z"></path>
</svg>
`, hu = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
  <path d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/>
</svg>`, pu = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.89163 13.2687L9.16582 17.5427L18.7085 8" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`, fu = /* @__PURE__ */ function(r) {
  function i(e, t, n, a) {
    var s;
    y(this, i), s = F(this, i, [e, ["modal-content", "modal-camera-content"], n]), s._stopped = !1, s._format = "image/png", s._canvas = document.createElement("canvas"), s._canvas.classList.add("camera-modal-canvas");
    var o = s.addButtonsAndTheirEvents(t), l = o.captureButton, u = o.submitButton;
    return s._captureButton = l, s._submitButton = u, s._captureIcon = s._captureButton.children[0], s._refreshIcon = ke.createSVGElement(cu), s._refreshIcon.classList.add("modal-svg-button-icon", "modal-svg-refresh-icon"), (a == null ? void 0 : a.format) === "jpeg" && (s._format = "image/jpeg"), a != null && a.dimensions && (s._dimensions = a.dimensions), s._contentRef.appendChild(s._canvas), s.extensionCloseCallback = s.stop, s;
  }
  return B(i, r), b(i, [{
    key: "addButtonsAndTheirEvents",
    value: function(t) {
      var n = vt.createSVGButton(du);
      n.classList.add("modal-svg-camera-button"), n.children[0].classList.add("modal-svg-camera-icon");
      var a = this.addCloseButton(hu, !0);
      a.classList.add("modal-svg-close-button"), a.children[0].classList.add("modal-svg-close-icon");
      var s = vt.createSVGButton(pu);
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
        l && hr.addFilesToType([l], [s]), o.stop(), o.close();
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
      }, vt.MODAL_CLOSE_TIMEOUT_MS);
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
        }), l = this._format === "image/jpeg" ? "jpeg" : "png", u = ci.getFileName(this._newFilePrefix || "photo", l);
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
}(vt), mu = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="M29 7h-4.599l-2.401-4h-12l-2.4 4h-4.6c-1 0-3 1-3 2.969v16.031c0 1.657 1.5 3 2.792 3h26.271c1.313 0 2.938-1.406 2.938-2.968v-16.032c0-1-1-3-3-3zM30 26.032c0 0.395-0.639 0.947-0.937 0.969h-26.265c-0.232-0.019-0.797-0.47-0.797-1v-16.031c0-0.634 0.851-0.953 1-0.969h5.732l2.4-4h9.802l1.785 3.030 0.55 0.97h5.731c0.705 0 0.99 0.921 1 1v16.032zM16 10c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zM16 22c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
</svg>`, vu = /* @__PURE__ */ function(r) {
  function i(e, t, n) {
    var a;
    y(this, i);
    var s, o, l, u, c = (s = n == null ? void 0 : n.button) == null ? void 0 : s.position, d = ((u = (l = (o = n == null ? void 0 : n.button) == null ? void 0 : o.styles) == null ? void 0 : l.text) == null ? void 0 : u.content) || "Photo";
    a = F(this, i, [i.createButtonElement(), c, (n == null ? void 0 : n.button) || {}, d]);
    var h = a.createInnerElements(a._customStyles, c === "dropup-menu");
    return n && a.addClickEvent(e, t, n.modalContainerStyle, n.files), a.elementRef.classList.add("upload-file-button"), a.elementRef.appendChild(h.styles), a.reapplyStateStyle("styles"), a;
  }
  return B(i, r), b(i, [{
    key: "createInnerElements",
    value: function(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return {
        styles: Ge.createInnerElement(this.elementRef, i.createSVGIconElement(), "styles", t, n)
      };
    }
  }, {
    key: "addClickEvent",
    value: (
      // prettier-ignore
      function(t, n, a, s) {
        var o = fu.createCameraModalFunc(t, n, a, s);
        this.elementRef.onclick = o;
      }
    )
  }], [{
    key: "createButtonElement",
    value: function() {
      var t = document.createElement("div");
      return t.classList.add("input-button"), Ce.addAttributes(t), t;
    }
  }, {
    key: "createSVGIconElement",
    value: function() {
      var t = ke.createSVGElement(mu);
      return t.id = "camera-icon", t;
    }
  }]);
}(wt), gu = /* @__PURE__ */ function() {
  function r(i, e, t, n) {
    y(this, r), this.elementRef = r.createPanelElement(i.inputAreaStyle);
    var a = {}, s = this.createFileUploadComponents(i, t, n, a), o = new _a(i, t, s);
    i.speechToText && !a.microphone && (a.microphone = {
      button: new cr(i, o, e.addNewErrorMessage.bind(e))
    });
    var l = new uu(i, o, e, t, s, a);
    o.submit = l.submitFromInput.bind(l), su.attach(i, t, o, s, l), i.submitUserMessage = l.programmaticSubmit.bind(l), a.submit = {
      button: l
    }, r.addElements(this.elementRef, o, a, n, s, i.dropupStyles);
  }
  return b(r, [{
    key: "createFileUploadComponents",
    value: (
      // prettier-ignore
      function(e, t, n, a) {
        var s, o, l, u, c = new hr(this.elementRef, e.attachmentContainerStyle, t.demo);
        if (r.createUploadButtons(e, t.fileTypes || {}, c, n, a), (s = t.camera) != null && s.files) {
          var d = ((o = a.images) == null ? void 0 : o.fileType) || c.addType(e, t.camera.files, "images");
          a.camera = {
            button: new vu(n, d, t.camera)
          };
        }
        if ((l = t.recordAudio) != null && l.files) {
          var h = ((u = a.audio) == null ? void 0 : u.fileType) || c.addType(e, t.recordAudio.files, "audio");
          a.microphone = {
            button: new ou(h, t.recordAudio)
          };
        }
        return pa.isEnabled(c, e.dragAndDrop) && pa.create(n, c, e.dragAndDrop), c;
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
          var c = n.addType(e, u.files, l), d = xl[l], h = d.id, p = d.svgString, m = d.dropupText, g = new iu(a, c, u, h, p, m);
          s[l] = {
            button: g,
            fileType: c
          };
        }
      });
    }
    // prettier-ignore
  }, {
    key: "addElements",
    value: function(e, t, n, a, s, o) {
      _e.addElements(e, t.elementRef);
      var l = Wt.create(), u = _l.addButtons(l, n, a, o);
      yl.set(t.inputElementRef, l, s.elementRef, u), Wt.add(e, l);
    }
  }]);
}(), yu = /* @__PURE__ */ function() {
  function r() {
    y(this, r);
  }
  return b(r, null, [{
    key: "createElements",
    value: function(e, t, n) {
      var a = document.createElement("div");
      a.id = "chat-view";
      var s = new Kn(e, t, n);
      t.websocket && _t.createConnection(t, s);
      var o = new gu(e, s, t, a);
      return _e.addElements(a, s.elementRef, o.elementRef), a;
    }
  }, {
    key: "render",
    value: function(e, t, n, a) {
      var s = r.createElements(e, n, a);
      t.replaceChildren(s);
    }
  }]);
}(), bu = `#validate-property-key-view{height:100%;position:relative;display:flex;justify-content:center;align-items:center;padding:8px}#loading-validate-key-property{display:inline-block;width:50px;height:50px}#loading-validate-key-property:after{content:" ";display:block;width:38px;height:38px;margin:1px;border-radius:50%;border:5px solid #5fb2ff;border-color:#5fb2ff transparent #5fb2ff transparent;animation:loading-spinner 1.4s linear infinite}#insert-key-view{height:100%;position:relative}#insert-key-contents{text-align:center;position:absolute;top:44%;left:50%;transform:translate(-50%,-50%);width:82%;display:flex;max-width:700px}#insert-key-title{margin-bottom:15px}#insert-key-input-container{margin-right:2.7em;width:calc(100% - 80px)}#insert-key-input{padding:.3em 1.7em .3em .3em;border-width:1px;border-style:solid;border-radius:3px;width:100%;font-size:inherit}.insert-key-input-valid{border-color:gray}.insert-key-input-invalid{border-color:red}#visibility-icon-container{position:relative;float:right;cursor:pointer;-webkit-user-select:none;user-select:none}.visibility-icon{filter:brightness(0) saturate(100%) invert(63%) sepia(1%) saturate(9%) hue-rotate(43deg) brightness(98%) contrast(92%);position:absolute;right:-1.7em;top:-1.43em}#visible-icon{top:-1.4em}.visibility-icon:hover{filter:unset}.visibility-icon>*{pointer-events:none}#start-button{border:1px solid grey;color:#454545;border-radius:4px;width:3em;display:flex;justify-content:center;align-items:center;cursor:pointer;padding:.28em .3em;-webkit-user-select:none;user-select:none;background-color:#fff}#start-button:hover{background-color:#f2f2f2}#start-button:active{background-color:#d2d2d2}#insert-key-help-text-container{width:100%;position:absolute;margin-top:32px;margin-bottom:20px}#insert-key-help-text-contents{width:100%;position:absolute}#insert-key-input-invalid-text{display:block;margin-top:1em;margin-bottom:.5em;color:red}.insert-key-input-help-text{display:block;margin-top:16px}#loading-key{display:inline-block;width:16px;height:16px}#loading-key:after{content:" ";display:block;width:11px;height:11px;margin:1px;border-radius:50%;border:2px solid #0084ff;border-color:#0084ff transparent #0084ff transparent;animation:loading-spinner 1.2s linear infinite}#error-view{color:red;font-size:1.2em;line-height:1.3em;margin-top:-5px;text-align:center;height:100%;display:flex;justify-content:center;align-items:center;padding-left:8px;padding-right:8px}@keyframes loading-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.intro-panel{position:absolute;display:flex;justify-content:center;right:0;bottom:0;left:0;margin:auto;height:fit-content;top:-2.5em}#internal-intro-panel{width:250px;height:min-content;display:block;border-radius:5px;overflow:auto;border:1px solid rgb(203,203,203);padding:10px;max-height:calc(100% - 6.8em)}#internal-intro-panel>p{margin-block-start:.8em;margin-block-end:.8em}pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: a11y-dark
  Author: @ericwbailey
  Maintainer: @ericwbailey

  Based on the Tomorrow Night Eighties theme: https://github.com/isagalaev/highlight.js/blob/master/src/styles/tomorrow-night-eighties.css
*/.hljs{background:#2b2b2b;color:#f8f8f2}.hljs-comment,.hljs-quote{color:#d4d0ab}.hljs-deletion,.hljs-name,.hljs-regexp,.hljs-selector-class,.hljs-selector-id,.hljs-tag,.hljs-template-variable,.hljs-variable{color:#ffa07a}.hljs-built_in,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-type{color:#f5ab35}.hljs-attribute{color:gold}.hljs-addition,.hljs-bullet,.hljs-string,.hljs-symbol{color:#abe338}.hljs-section,.hljs-title{color:#00e0e0}.hljs-keyword,.hljs-selector-tag{color:#dcc6e0}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}@media screen and (-ms-high-contrast: active){.hljs-addition,.hljs-attribute,.hljs-built_in,.hljs-bullet,.hljs-comment,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-quote,.hljs-string,.hljs-symbol,.hljs-type{color:highlight}.hljs-keyword,.hljs-selector-tag{font-weight:700}}#messages{overflow:auto}.outer-message-container:last-child{margin-bottom:5px}.inner-message-container{display:flex;margin-left:auto;margin-right:auto;width:calc(97.5% - 24px);max-width:100%}.message-bubble{margin-top:10px;word-wrap:break-word;width:fit-content;max-width:60%;border-radius:10px;padding:.42em .55em;height:fit-content;line-height:1.26em}.user-message-text{color:#fff;background-color:#0084ff;margin-right:0;margin-left:auto}.ai-message-text{color:#000;background-color:#e4e6eb;margin-left:0;margin-right:auto}.loading-history-message-full-view{position:absolute;height:70%;width:100%;display:flex;align-items:center}.loading-history-message-small{height:20px;margin-bottom:30px}.loading-history-message-small>div>div{scale:.6}.loading-history-message{margin-top:0;width:100%;max-width:100%;display:flex;justify-content:center;background-color:unset}.loading-history{width:70px}.loading-history div{position:absolute;width:var(--loading-history-width);height:var(--loading-history-height);margin:var(--loading-history-margin);border:var(--loading-history-border);border-radius:50%;animation:loading-spinner 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:var(--loading-history-color) transparent transparent transparent}.loading-history div:nth-child(1){animation-delay:-.45s}.loading-history div:nth-child(2){animation-delay:-.3s}.loading-history div:nth-child(3){animation-delay:-.15s}.html-message{max-width:unset}.error-message-text{margin:14px auto 10px;background-color:#f4c0c0;color:#474747;text-align:center;max-width:95%}.deep-chat-loading-message-dots-container{width:1em;padding:.6em .75em .6em 1.3em}.loading-message-dots{position:relative;width:.45em;height:.45em;border-radius:5px;background-color:var(--loading-message-color);color:var(--loading-message-color);animation:loading-message-dots 1s infinite linear alternate;animation-delay:.5s}.loading-message-dots:before,.loading-message-dots:after{content:"";display:inline-block;position:absolute;top:0}.loading-message-dots:before{left:-.7em;width:.45em;height:.45em;border-radius:5px;background-color:var(--loading-message-color);color:var(--loading-message-color);animation:loading-message-dots 1s infinite alternate;animation-delay:0s}.loading-message-dots:after{left:.7em;width:.45em;height:.45em;border-radius:5px;background-color:var(--loading-message-color);color:var(--loading-message-color);animation:loading-message-dots 1s infinite alternate;animation-delay:1s}@keyframes loading-message-dots{0%{background-color:var(--loading-message-color)}50%,to{background-color:var(--loading-message-color-fade)}}.message-bubble>p:first-child{margin-top:0}.message-bubble>p:last-child{margin-bottom:0}pre{overflow:auto;display:block;word-break:break-all;word-wrap:break-word;border-radius:7px;background:#2b2b2b;color:#f8f8f2;margin-top:.8em;margin-bottom:.8em;padding:.6em;font-size:.9em;line-height:1.5em}.image-message{padding:0;display:flex;background-color:#ddd}.image-message>*,.image-message>*>*{width:100%;border-radius:8px;display:flex}.audio-message{width:60%;max-width:300px;height:2.2em;max-height:54px;padding:0;background-color:unset}.audio-player{width:100%;height:100%}.audio-player-safari{height:fit-content;width:40px}.audio-player-safari-left{float:left}.audio-player-safari-right{float:right}.any-file-message{padding:1px}.any-file-message-contents{display:flex}.any-file-message-icon-container{width:1.3em;min-width:1.3em;position:relative;border-radius:4px;margin-left:6px;margin-right:2px}.any-file-message-icon{background-color:#fff;border-radius:4px;position:absolute;width:1em;height:1.25em;padding:1px;margin-top:auto;margin-bottom:auto;top:0;bottom:0}.any-file-message-text{padding-top:5px;overflow-wrap:anywhere;padding-bottom:5px;padding-right:7px}.message-bubble>a{color:inherit}.left-item-position{margin-right:10px}.right-item-position{margin-left:10px}.avatar{padding-top:5px;width:1.5em;height:1.5em;border-radius:1px}.avatar-container{margin-top:9px}.name{margin-top:16px;font-size:15px}#drag-and-drop{position:absolute;display:none;z-index:10;height:calc(100% - 10px);width:calc(100% - 10px);background-color:#70c6ff4d;border:5px dashed #6dafff}#file-attachment-container{position:absolute;height:3.6em;width:calc(80% - 4px);top:-2.5em;border-radius:5px;overflow:auto;text-align:left;background-color:#d7d7d73b;padding-left:4px}.file-attachment{width:2.85em;height:2.85em;display:inline-flex;margin-right:.6em;margin-bottom:.44em;margin-top:4px;position:relative;background-color:#fff;border-radius:5px}.image-attachment{width:100%;height:100%;object-fit:cover;border-radius:5px}.border-bound-attachment{width:calc(100% - 2px);height:calc(100% - 2px);border:1px solid #c3c3c3;border-radius:5px;overflow:hidden}.border-bound-attachment-safari{width:calc(100% - 1px);height:calc(100% - 1px)}.audio-attachment-icon-container{cursor:pointer}.audio-attachment-icon-container:hover{background-color:#f8f8f8}.attachment-icon{left:0;right:0;bottom:0;top:2px;margin:auto;position:absolute;width:25px;-webkit-user-select:none;user-select:none}.not-removable-attachment-icon{top:0;right:0;bottom:0;left:0}.play-icon{filter:brightness(0) saturate(100%) invert(17%) sepia(0%) saturate(1392%) hue-rotate(67deg) brightness(98%) contrast(97%)}.stop-icon{filter:brightness(0) saturate(100%) invert(29%) sepia(90%) saturate(1228%) hue-rotate(198deg) brightness(93%) contrast(98%)}.audio-placeholder-text-3-digits{padding-left:.26rem}.audio-placeholder-text-4-digits{padding-left:.1rem}.any-file-attachment{padding:2px 0}.file-attachment-text-container{position:absolute;width:inherit;display:flex;align-items:center;height:100%;top:-1px}.audio-placeholder-text-3-digits-container{padding-top:1px;cursor:default}.any-file-attachment-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;padding-left:.13em;margin-left:auto;margin-right:auto}.remove-file-attachment-button{height:1.25em;width:1.25em;border:1px solid #cfcfcf;border-radius:25px;background-color:#fff;top:-4px;right:-5px;position:absolute;display:flex;justify-content:center;cursor:pointer;-webkit-user-select:none;user-select:none}.remove-file-attachment-button:hover{background-color:#e4e4e4}.remove-file-attachment-button:active{background-color:#d7d7d7}.x-icon{color:#4e4e4e;top:-.075em;position:relative;font-size:1.05em}.modal{display:none;flex-direction:column;align-items:center;justify-content:center;position:absolute;width:80%;max-width:420px;max-height:80%;margin:auto;top:0;right:0;bottom:0;left:0;z-index:2}.modal-content{border-top:1px solid rgb(217,217,217);border-left:1px solid rgb(217,217,217);border-right:1px solid rgb(217,217,217);border-top-left-radius:inherit;border-top-right-radius:inherit;background-color:#fff;overflow-y:auto;height:fit-content;max-height:calc(100% - 3.3em);width:100%}.modal-content>p{margin-left:1em;margin-right:1em}.modal-content>ul{margin-right:1em}.modal-button-panel{height:3.3em;border:1px solid;border-color:rgb(223,223,223) rgb(217,217,217) rgb(217,217,217);border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;background-color:#fff;text-align:center;justify-content:center;display:flex;width:100%}.modal-button{min-width:2.5em;text-align:center;color:#fff;border-radius:5px;padding:.4em .4em .3em;height:1.25em;background-color:#3279b2;top:0;bottom:0;cursor:pointer;-webkit-user-select:none;user-select:none;margin:auto .31em}.modal-button:hover{background-color:#276da7}.modal-button:active{background-color:#1b5687}.modal-svg-button{padding:0 0 2px;width:2em;height:1.8em}.modal-svg-button-icon{width:100%;height:100%;filter:brightness(0) saturate(100%) invert(100%) sepia(15%) saturate(4%) hue-rotate(346deg) brightness(101%) contrast(102%)}#modal-background-panel{position:absolute;width:100%;height:100%;background-color:#00000042;z-index:1;display:none}.show-modal-background{animation:fadeInBackground .3s ease-in-out}@keyframes fadeInBackground{0%{opacity:0}to{opacity:1}}.show-modal{animation:fadeInModal .3s ease-in-out}@keyframes fadeInModal{0%{opacity:0;scale:.95}to{opacity:1;scale:1}}.hide-modal-background{animation:fadeOutBackground .2s ease-in-out}@keyframes fadeOutBackground{0%{opacity:1}to{opacity:0}}.hide-modal{animation:fadeOutModal .2s ease-in-out}@keyframes fadeOutModal{0%{opacity:1;scale:1}to{opacity:0;scale:.95}}.modal-camera-content{overflow:hidden;text-align:center;border:unset;height:100%;background-color:#2a2a2a;display:flex;justify-content:center}.camera-modal-canvas{max-width:100%;max-height:100%;margin-top:auto;margin-bottom:auto}.modal-svg-submit-button{background-color:green}.modal-svg-submit-button:hover{background-color:#007500}.modal-svg-submit-button:active{background-color:#006500}.modal-svg-submit-disabled{pointer-events:none;background-color:#747474}.modal-svg-close-button{height:1.56em;padding-top:.37em;padding-bottom:0;background-color:#c13e3e}.modal-svg-close-button:hover{background-color:#b43434}.modal-svg-close-button:active{background-color:#972929}.modal-svg-close-icon{width:80%;height:80%}.modal-svg-camera-button{height:1.6em;padding-top:.38em;padding-bottom:0}.modal-svg-camera-icon{height:76%}.modal-svg-refresh-icon{height:105%}.modal-svg-refresh-button{height:1.66em;padding-top:.11em;padding-bottom:.21em}.input-button-container{position:relative;z-index:1}.inside-right{position:absolute;right:calc(10% + .35em);bottom:.85em}.inside-left{position:absolute;left:calc(10% + .35em);bottom:.85em}.outside-left{position:absolute;right:calc(11px - .55em);bottom:.88em}.outside-right{position:absolute;left:calc(11px - .55em);bottom:.88em}#upload-images-icon{position:absolute;pointer-events:none;width:1.45em;height:1.45em;left:.11em;bottom:.08em;filter:brightness(0) saturate(100%) invert(43%) sepia(0%) saturate(740%) hue-rotate(77deg) brightness(99%) contrast(92%)}#upload-gifs-icon{position:absolute;pointer-events:none;width:1.5em;height:1.48em;left:.07em;bottom:.08em;filter:brightness(0) saturate(100%) invert(49%) sepia(0%) saturate(2586%) hue-rotate(12deg) brightness(93%) contrast(90%)}#upload-audio-icon{position:absolute;pointer-events:none;width:1.21em;height:1.21em;left:.17em;bottom:.2em;filter:brightness(0) saturate(100%) invert(15%) sepia(0%) saturate(337%) hue-rotate(125deg) brightness(91%) contrast(94%);transform:scaleX(.95)}#camera-icon{position:absolute;pointer-events:none;width:1.21em;height:1.21em;left:.23em;bottom:.2em;filter:brightness(0) saturate(100%) invert(52%) sepia(0%) saturate(161%) hue-rotate(164deg) brightness(91%) contrast(92%);transform:scaleX(.95)}#upload-mixed-files-icon{position:absolute;pointer-events:none;width:1.21em;height:1.21em;left:.25em;bottom:.2em;filter:brightness(0) saturate(100%) invert(53%) sepia(0%) saturate(36%) hue-rotate(74deg) brightness(98%) contrast(93%);transform:scaleX(.95)}#interim-text{color:gray}#microphone-button{padding-top:.5px}.outer-button-container>#microphone-button{padding-bottom:1px}#microphone-icon{position:absolute;pointer-events:none;width:1.21em;height:1.21em;left:.25em;bottom:.25em}.default-microphone-icon{filter:brightness(0) saturate(100%) invert(32%) sepia(0%) saturate(924%) hue-rotate(46deg) brightness(95%) contrast(99%)}.active-microphone-icon{filter:brightness(0) saturate(100%) invert(10%) sepia(97%) saturate(7495%) hue-rotate(0deg) brightness(101%) contrast(107%);border-radius:10px}.command-microphone-icon{filter:brightness(0) saturate(100%) invert(42%) sepia(96%) saturate(1067%) hue-rotate(77deg) brightness(99%) contrast(102%)}.unsupported-microphone{display:none}#submit-icon{height:100%;filter:brightness(0) saturate(100%) invert(32%) sepia(0%) saturate(924%) hue-rotate(46deg) brightness(95%) contrast(99%);width:1.21em}#stop-icon{background-color:#acacac;position:absolute;width:.95em;height:.95em;left:.35em;bottom:.35em;border-radius:2px}.submit-button-enlarged{scale:1.1;margin-right:.3em;margin-left:.3em}.loading-submit-button{position:relative;left:calc(-9990px + .275em);width:.22em;height:.22em;border-radius:5px;background-color:#848484;color:#848484;box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484;animation:loading-submit-button 1.5s infinite linear;bottom:-.75em}@keyframes loading-submit-button{0%{box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}16.667%{box-shadow:9990px -6px #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}33.333%{box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}50%{box-shadow:9990px 0 #848484,calc(9990px + .44em) -6px 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}66.667%{box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}83.333%{box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) -6px 0 0 #848484}to{box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}}.input-button{border-radius:4px;cursor:pointer;margin-bottom:.2em;-webkit-user-select:none;user-select:none}.input-button-svg{width:1.65em;height:1.65em}.input-button:hover,.input-button:focus-visible{background-color:#9c9c9c2e}.input-button:active{background-color:#9c9c9c5e}.loading-button{cursor:auto}.loading-button:hover{background-color:unset}.text-button{filter:unset!important;display:flex;justify-content:center;align-items:center;margin-left:4px;margin-right:4px;height:1.6em}#text-input-container{background-color:#fff;width:80%;display:flex;border:1px solid #0000001a;border-radius:5px;margin-top:.8em;margin-bottom:.8em;box-shadow:#959da533 0 1px 12px;overflow-y:auto;max-height:200px;position:relative}.text-input-container-left-adjustment{margin-left:1.5em}.text-input-container-right-adjustment{margin-right:1.5em}.text-input-container-left-small-adjustment{margin-left:1.1em}.text-input-container-left-small-adjustment>.outside-left{right:calc(14px - .55em)}.text-input-container-right-small-adjustment{margin-right:1.1em}.text-input-container-right-small-adjustment>.outside-right{left:calc(14px - .55em)}#text-input{text-align:left;outline:none;word-wrap:break-word;line-break:auto}.text-input-styling{padding:.4em .5em;overflow:overlay;width:100%}.text-input-inner-left-adjustment{padding-left:2.2em}.text-input-inner-right-adjustment{padding-right:2em}.text-input-disabled{pointer-events:none;-webkit-user-select:none;user-select:none}[contenteditable]:empty:before{content:attr(deep-chat-placeholder-text);pointer-events:none}[contenteditable][textcolor]:empty:before{color:gray}.outside-right>#dropup-menu,.inside-right>#dropup-menu{right:0}#dropup-icon{position:absolute;pointer-events:none;width:1.16em;height:1.2em;left:.265em;bottom:.43em;filter:brightness(0) saturate(100%) invert(54%) sepia(0%) saturate(724%) hue-rotate(6deg) brightness(92%) contrast(90%)}#dropup-menu{background-color:#fff;position:absolute;transform:translateY(-100%);border-radius:5px;z-index:1;top:-.49em;box-shadow:#0003 -1px 2px 10px,#0000001a 0 2px 4px;cursor:pointer;-webkit-user-select:none;user-select:none}.dropup-menu-item{height:1.4em;padding:.28em .84em .28em .35em;display:flex;position:relative}.dropup-menu-item:first-child{padding-top:.49em;border-top-left-radius:inherit;border-top-right-radius:inherit}.dropup-menu-item:last-child{padding-bottom:.45em;border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.dropup-menu-item-icon{width:1.39em;position:relative;margin-right:.56em}.dropup-menu-item-icon>svg{bottom:0!important;top:0!important;margin-bottom:auto;margin-top:auto}.dropup-menu-item-text{margin-top:.08em;width:max-content}#input{width:100%;display:inline-flex;text-align:center;margin-left:auto;margin-right:auto;margin-top:auto;position:relative;justify-content:center}#chat-view{height:100%;display:grid;grid-template-columns:100%}::-webkit-scrollbar{width:9px;height:9px}::-webkit-scrollbar-thumb{background-color:#d0d0d0;border-radius:5px}::-webkit-scrollbar-track{background-color:#f2f2f2}.deep-chat-web-model-button{margin-top:10px;margin-bottom:5px;margin-left:1px}:host{all:initial;display:table-cell}#container{height:inherit;width:inherit;overflow:hidden}`, ku = Object.defineProperty, K = function(i, e, t, n) {
  for (var a = void 0, s = i.length - 1, o; s >= 0; s--) (o = i[s]) && (a = o(e, t, a) || a);
  return a && ku(e, t, a), a;
}, z = /* @__PURE__ */ function(r) {
  function i() {
    var e;
    return y(this, i), e = F(this, i), e.getMessages = function() {
      return [];
    }, e.submitUserMessage = function() {
      return console.warn("submitUserMessage failed - please wait for chat view to render before calling this property.");
    }, e.addMessage = function() {
      return console.warn("addMessage failed - please wait for chat view to render before calling this property.");
    }, e.updateMessage = function() {
    }, e.clearMessages = function() {
    }, e.focusInput = function() {
      return Qn.focusFromParentElement(e._elementRef);
    }, e.refreshMessages = function() {
    }, e.scrollToBottom = function() {
    }, e.disableSubmitButton = function() {
    }, e.setPlaceholderText = function() {
    }, e._hasBeenRendered = !1, e._auxiliaryStyleApplied = !1, e._elementRef = document.createElement("div"), e._elementRef.id = "container", e.attachShadow({
      mode: "open"
    }).appendChild(e._elementRef), gn.apply(bu, e.shadowRoot), setTimeout(function() {
      e._hasBeenRendered || e.onRender();
    }, 20), e;
  }
  return B(i, r), b(i, [{
    key: "changeToChatView",
    value: function() {
      this._activeService && (this._activeService.validateKeyProperty = !1), this.onRender();
    }
    // prettier-ignore
  }, {
    key: "onRender",
    value: function() {
      var t;
      ya.attemptAppendStyleSheetToHead(this.style), ge.processConnect(this), (!this._activeService || this._activeService.demo) && (this._activeService = hl.create(this)), this.auxiliaryStyle && !this._auxiliaryStyleApplied && (gn.apply(this.auxiliaryStyle, this.shadowRoot), this._auxiliaryStyleApplied = !0), gn.applyDefaultStyleToComponent(this.style, this.chatStyle), ge.checkForContainerStyles(this, this._elementRef), this._activeService.key && this._activeService.validateKeyProperty ? Mi.render(this._elementRef, this.changeToChatView.bind(this), this._activeService) : !(this._activeService instanceof pe) || this._activeService.key ? ((t = this._childElement) !== null && t !== void 0 || (this._childElement = this.children[0]), yu.render(this, this._elementRef, this._activeService, this._childElement)) : this._activeService instanceof pe && Do.render(this._elementRef, this.changeToChatView.bind(this), this._activeService), this._hasBeenRendered = !0, Gt.onRender(this);
    }
  }, {
    key: "disconnectedCallback",
    value: function() {
      or.chat = void 0;
    }
  }]);
}(Lo);
K([W("object")], z.prototype, "connect");
K([W("object")], z.prototype, "directConnection");
K([W("object")], z.prototype, "webModel");
K([W("object")], z.prototype, "requestBodyLimits");
K([W("function")], z.prototype, "requestInterceptor");
K([W("function")], z.prototype, "responseInterceptor");
K([W("function")], z.prototype, "validateInput");
K([W("function")], z.prototype, "loadHistory");
K([W("object")], z.prototype, "chatStyle");
K([W("object")], z.prototype, "attachmentContainerStyle");
K([W("object")], z.prototype, "dropupStyles");
K([W("object")], z.prototype, "inputAreaStyle");
K([W("object")], z.prototype, "textInput");
K([W("object")], z.prototype, "submitButtonStyles");
K([W("string")], z.prototype, "auxiliaryStyle");
K([W("array")], z.prototype, "history");
K([W("object")], z.prototype, "introMessage");
K([W("object")], z.prototype, "avatars");
K([W("object")], z.prototype, "names");
K([W("boolean")], z.prototype, "displayLoadingBubble");
K([W("object")], z.prototype, "errorMessages");
K([W("object")], z.prototype, "messageStyles");
K([W("object")], z.prototype, "textToSpeech");
K([W("object")], z.prototype, "speechToText");
K([W("object")], z.prototype, "images");
K([W("object")], z.prototype, "gifs");
K([W("object")], z.prototype, "camera");
K([W("object")], z.prototype, "audio");
K([W("object")], z.prototype, "microphone");
K([W("object")], z.prototype, "mixedFiles");
K([W("object")], z.prototype, "dragAndDrop");
K([W("object")], z.prototype, "introPanelStyle");
K([W("object")], z.prototype, "htmlClassUtilities");
K([W("object")], z.prototype, "remarkable");
K([W("function")], z.prototype, "onMessage");
K([W("function")], z.prototype, "onClearMessages");
K([W("function")], z.prototype, "onComponentRender");
K([W("function")], z.prototype, "onError");
K([W("object")], z.prototype, "demo");
K([W("object")], z.prototype, "_insertKeyViewStyles");
customElements.define("deep-chat", z);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Su = /* @__PURE__ */ new Set(["children", "localName", "ref", "style", "className"]), ma = /* @__PURE__ */ new WeakMap(), va = (r, i, e, t, n) => {
  const a = n == null ? void 0 : n[i];
  a === void 0 ? (r[i] = e, e == null && i in HTMLElement.prototype && r.removeAttribute(i)) : e !== t && ((s, o, l) => {
    let u = ma.get(s);
    u === void 0 && ma.set(s, u = /* @__PURE__ */ new Map());
    let c = u.get(o);
    l !== void 0 ? c === void 0 ? (u.set(o, c = { handleEvent: l }), s.addEventListener(o, c)) : c.handleEvent = l : c !== void 0 && (u.delete(o), s.removeEventListener(o, c));
  })(r, a, e);
}, _u = ({ react: r, tagName: i, elementClass: e, events: t, displayName: n }) => {
  const a = new Set(Object.keys(t ?? {})), s = r.forwardRef((o, l) => {
    const u = r.useRef(/* @__PURE__ */ new Map()), c = r.useRef(null), d = {}, h = {};
    for (const [p, m] of Object.entries(o)) Su.has(p) ? d[p === "className" ? "class" : p] = m : a.has(p) || p in e.prototype ? h[p] = m : d[p] = m;
    return r.useLayoutEffect(() => {
      if (c.current === null) return;
      const p = /* @__PURE__ */ new Map();
      for (const m in h) va(c.current, m, o[m], u.current.get(m), t), u.current.delete(m), p.set(m, o[m]);
      for (const [m, g] of u.current) va(c.current, m, void 0, g, t);
      u.current = p;
    }), r.useLayoutEffect(() => {
      var p;
      (p = c.current) == null || p.removeAttribute("defer-hydration");
    }, []), d.suppressHydrationWarning = !0, r.createElement(i, { ...d, ref: r.useCallback((p) => {
      c.current = p, typeof l == "function" ? l(p) : l !== null && (l.current = p);
    }, [l]) });
  });
  return s.displayName = n ?? e.name, s;
}, Eu = _u({
  tagName: "deep-chat",
  elementClass: z,
  react: hi,
  events: {
    onactivate: "activate",
    onchange: "change"
  }
}), Cu = ({ apiUrl: r, title: i = "SalesAI Navigator Chatbot" }) => /* @__PURE__ */ vn.jsxs("div", { className: "chatbot-container", children: [
  /* @__PURE__ */ vn.jsx("div", { className: "chatbot-header", children: i }),
  /* @__PURE__ */ vn.jsx(
    Eu,
    {
      style: { width: "100%", height: "400px" },
      request: { url: r, method: "POST" }
    }
  )
] });
export {
  Cu as default
};
