/*! For license information please see main.94fb0415.js.LICENSE.txt */
!(function () {
  var e = {
      6300: function (e) {
        "use strict";
        e.exports = function e(t, n) {
          if (t === n) return !0;
          if (t && n && "object" == typeof t && "object" == typeof n) {
            if (t.constructor !== n.constructor) return !1;
            var i, o, r;
            if (Array.isArray(t)) {
              if ((i = t.length) != n.length) return !1;
              for (o = i; 0 !== o--; ) if (!e(t[o], n[o])) return !1;
              return !0;
            }
            if (t.constructor === RegExp)
              return t.source === n.source && t.flags === n.flags;
            if (t.valueOf !== Object.prototype.valueOf)
              return t.valueOf() === n.valueOf();
            if (t.toString !== Object.prototype.toString)
              return t.toString() === n.toString();
            if ((i = (r = Object.keys(t)).length) !== Object.keys(n).length)
              return !1;
            for (o = i; 0 !== o--; )
              if (!Object.prototype.hasOwnProperty.call(n, r[o])) return !1;
            for (o = i; 0 !== o--; ) {
              var a = r[o];
              if (("_owner" !== a || !t.$$typeof) && !e(t[a], n[a])) return !1;
            }
            return !0;
          }
          return t !== t && n !== n;
        };
      },
      4463: function (e, t, n) {
        "use strict";
        var i = n(2791),
          o = n(5296);
        function r(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var a = new Set(),
          s = {};
        function l(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
        }
        var u = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          h =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          f = {};
        function v(e, t, n, i, o, r, a) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = i),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = r),
            (this.removeEmptyString = a);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function m(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, i) {
          var o = g.hasOwnProperty(t) ? g[t] : null;
          (null !== o
            ? 0 !== o.type
            : i ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, i) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, i) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !i &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, i)
              )
                return !0;
              if (i) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, i) && (n = null),
            i || null === o
              ? (function (e) {
                  return (
                    !!d.call(f, e) ||
                    (!d.call(p, e) &&
                      (h.test(e) ? (f[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
              : ((t = o.attributeName),
                (i = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (o = o.type) || (4 === o && !0 === n)
                        ? ""
                        : "" + n),
                    i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, m);
            g[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, m);
              g[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, m);
            g[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          S = Symbol.for("react.element"),
          _ = Symbol.for("react.portal"),
          P = Symbol.for("react.fragment"),
          x = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          k = Symbol.for("react.provider"),
          O = Symbol.for("react.context"),
          E = Symbol.for("react.forward_ref"),
          M = Symbol.for("react.suspense"),
          R = Symbol.for("react.suspense_list"),
          T = Symbol.for("react.memo"),
          A = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var V = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var L = Symbol.iterator;
        function z(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (L && e[L]) || e["@@iterator"])
            ? e
            : null;
        }
        var I,
          j = Object.assign;
        function G(e) {
          if (void 0 === I)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              I = (t && t[1]) || "";
            }
          return "\n" + I + e;
        }
        var D = !1;
        function F(e, t) {
          if (!e || D) return "";
          D = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (c) {
                  var i = c;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (c) {
                  i = c;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (c) {
                i = c;
              }
              e();
            }
          } catch (c) {
            if (c && i && "string" === typeof c.stack) {
              for (
                var o = c.stack.split("\n"),
                  r = i.stack.split("\n"),
                  a = o.length - 1,
                  s = r.length - 1;
                1 <= a && 0 <= s && o[a] !== r[s];

              )
                s--;
              for (; 1 <= a && 0 <= s; a--, s--)
                if (o[a] !== r[s]) {
                  if (1 !== a || 1 !== s)
                    do {
                      if ((a--, 0 > --s || o[a] !== r[s])) {
                        var l = "\n" + o[a].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= a && 0 <= s);
                  break;
                }
            }
          } finally {
            (D = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? G(e) : "";
        }
        function N(e) {
          switch (e.tag) {
            case 5:
              return G(e.type);
            case 16:
              return G("Lazy");
            case 13:
              return G("Suspense");
            case 19:
              return G("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = F(e.type, !1));
            case 11:
              return (e = F(e.type.render, !1));
            case 1:
              return (e = F(e.type, !0));
            default:
              return "";
          }
        }
        function H(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case P:
              return "Fragment";
            case _:
              return "Portal";
            case C:
              return "Profiler";
            case x:
              return "StrictMode";
            case M:
              return "Suspense";
            case R:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case O:
                return (e.displayName || "Context") + ".Consumer";
              case k:
                return (e._context.displayName || "Context") + ".Provider";
              case E:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case T:
                return null !== (t = e.displayName || null)
                  ? t
                  : H(e.type) || "Memo";
              case A:
                (t = e._payload), (e = e._init);
                try {
                  return H(e(t));
                } catch (n) {}
            }
          return null;
        }
        function B(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return H(t);
            case 8:
              return t === x ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function U(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function $(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                i = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var o = n.get,
                  r = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (i = "" + e), r.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return i;
                    },
                    setValue: function (e) {
                      i = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            i = "";
          return (
            e && (i = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = i) !== n && (t.setValue(e), !0)
          );
        }
        function Q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function K(e, t) {
          var n = t.checked;
          return j({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            i = null != t.checked ? t.checked : t.defaultChecked;
          (n = U(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: i,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          X(e, t);
          var n = U(t.value),
            i = t.type;
          if (null != n)
            "number" === i
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === i || "reset" === i)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, U(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var i = t.type;
            if (
              !(
                ("submit" !== i && "reset" !== i) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, i) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && i && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + U(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (i && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function ie(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(r(91));
          return j({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function oe(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(r(92));
              if (te(n)) {
                if (1 < n.length) throw Error(r(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: U(n) };
        }
        function re(e, t) {
          var n = U(t.value),
            i = U(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != i && (e.defaultValue = "" + i);
        }
        function ae(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function se(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function le(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? se(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ce,
          ue,
          de =
            ((ue = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, i) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ue(e, t);
                  });
                }
              : ue);
        function he(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          fe = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var i = 0 === n.indexOf("--"),
                o = ve(n, t[n], i);
              "float" === n && (n = "cssFloat"),
                i ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(pe).forEach(function (e) {
          fe.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ye = j(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function me(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(r(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(r(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(r(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(r(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function Se(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var _e = null,
          Pe = null,
          xe = null;
        function Ce(e) {
          if ((e = wo(e))) {
            if ("function" !== typeof _e) throw Error(r(280));
            var t = e.stateNode;
            t && ((t = _o(t)), _e(e.stateNode, e.type, t));
          }
        }
        function ke(e) {
          Pe ? (xe ? xe.push(e) : (xe = [e])) : (Pe = e);
        }
        function Oe() {
          if (Pe) {
            var e = Pe,
              t = xe;
            if (((xe = Pe = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function Ee(e, t) {
          return e(t);
        }
        function Me() {}
        var Re = !1;
        function Te(e, t, n) {
          if (Re) return e(t, n);
          Re = !0;
          try {
            return Ee(e, t, n);
          } finally {
            (Re = !1), (null !== Pe || null !== xe) && (Me(), Oe());
          }
        }
        function Ae(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var i = _o(n);
          if (null === i) return null;
          n = i[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (i = !i.disabled) ||
                (i = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !i);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(r(231, t, typeof n));
          return n;
        }
        var Ve = !1;
        if (u)
          try {
            var Le = {};
            Object.defineProperty(Le, "passive", {
              get: function () {
                Ve = !0;
              },
            }),
              window.addEventListener("test", Le, Le),
              window.removeEventListener("test", Le, Le);
          } catch (ue) {
            Ve = !1;
          }
        function ze(e, t, n, i, o, r, a, s, l) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (u) {
            this.onError(u);
          }
        }
        var Ie = !1,
          je = null,
          Ge = !1,
          De = null,
          Fe = {
            onError: function (e) {
              (Ie = !0), (je = e);
            },
          };
        function Ne(e, t, n, i, o, r, a, s, l) {
          (Ie = !1), (je = null), ze.apply(Fe, arguments);
        }
        function He(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Be(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ue(e) {
          if (He(e) !== e) throw Error(r(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = He(e))) throw Error(r(188));
                return t !== e ? null : e;
              }
              for (var n = e, i = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var a = o.alternate;
                if (null === a) {
                  if (null !== (i = o.return)) {
                    n = i;
                    continue;
                  }
                  break;
                }
                if (o.child === a.child) {
                  for (a = o.child; a; ) {
                    if (a === n) return Ue(o), e;
                    if (a === i) return Ue(o), t;
                    a = a.sibling;
                  }
                  throw Error(r(188));
                }
                if (n.return !== i.return) (n = o), (i = a);
                else {
                  for (var s = !1, l = o.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = o), (i = a);
                      break;
                    }
                    if (l === i) {
                      (s = !0), (i = o), (n = a);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = a.child; l; ) {
                      if (l === n) {
                        (s = !0), (n = a), (i = o);
                        break;
                      }
                      if (l === i) {
                        (s = !0), (i = a), (n = o);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(r(189));
                  }
                }
                if (n.alternate !== i) throw Error(r(190));
              }
              if (3 !== n.tag) throw Error(r(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? $e(e)
            : null;
        }
        function $e(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = $e(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = o.unstable_scheduleCallback,
          Qe = o.unstable_cancelCallback,
          Ke = o.unstable_shouldYield,
          Ye = o.unstable_requestPaint,
          Xe = o.unstable_now,
          Ze = o.unstable_getCurrentPriorityLevel,
          Je = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          nt = o.unstable_LowPriority,
          it = o.unstable_IdlePriority,
          ot = null,
          rt = null;
        var at = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((st(e) / lt) | 0)) | 0;
              },
          st = Math.log,
          lt = Math.LN2;
        var ct = 64,
          ut = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ht(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var i = 0,
            o = e.suspendedLanes,
            r = e.pingedLanes,
            a = 268435455 & n;
          if (0 !== a) {
            var s = a & ~o;
            0 !== s ? (i = dt(s)) : 0 !== (r &= a) && (i = dt(r));
          } else 0 !== (a = n & ~o) ? (i = dt(a)) : 0 !== r && (i = dt(r));
          if (0 === i) return 0;
          if (
            0 !== t &&
            t !== i &&
            0 === (t & o) &&
            ((o = i & -i) >= (r = t & -t) || (16 === o && 0 !== (4194240 & r)))
          )
            return t;
          if ((0 !== (4 & i) && (i |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= i; 0 < t; )
              (o = 1 << (n = 31 - at(t))), (i |= e[n]), (t &= ~o);
          return i;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ft(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = ct;
          return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - at(t))] = n);
        }
        function mt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var i = 31 - at(n),
              o = 1 << i;
            (o & t) | (e[i] & t) && (e[i] |= t), (n &= ~o);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var St,
          _t,
          Pt,
          xt,
          Ct,
          kt = !1,
          Ot = [],
          Et = null,
          Mt = null,
          Rt = null,
          Tt = new Map(),
          At = new Map(),
          Vt = [],
          Lt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function zt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Et = null;
              break;
            case "dragenter":
            case "dragleave":
              Mt = null;
              break;
            case "mouseover":
            case "mouseout":
              Rt = null;
              break;
            case "pointerover":
            case "pointerout":
              Tt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              At.delete(t.pointerId);
          }
        }
        function It(e, t, n, i, o, r) {
          return null === e || e.nativeEvent !== r
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: i,
                nativeEvent: r,
                targetContainers: [o],
              }),
              null !== t && null !== (t = wo(t)) && _t(t),
              e)
            : ((e.eventSystemFlags |= i),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function jt(e) {
          var t = bo(e.target);
          if (null !== t) {
            var n = He(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Be(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      Pt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Gt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = wo(n)) && _t(t), (e.blockedOn = n), !1;
            var i = new (n = e.nativeEvent).constructor(n.type, n);
            (we = i), n.target.dispatchEvent(i), (we = null), t.shift();
          }
          return !0;
        }
        function Dt(e, t, n) {
          Gt(e) && n.delete(t);
        }
        function Ft() {
          (kt = !1),
            null !== Et && Gt(Et) && (Et = null),
            null !== Mt && Gt(Mt) && (Mt = null),
            null !== Rt && Gt(Rt) && (Rt = null),
            Tt.forEach(Dt),
            At.forEach(Dt);
        }
        function Nt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            kt ||
              ((kt = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, Ft)));
        }
        function Ht(e) {
          function t(t) {
            return Nt(t, e);
          }
          if (0 < Ot.length) {
            Nt(Ot[0], e);
            for (var n = 1; n < Ot.length; n++) {
              var i = Ot[n];
              i.blockedOn === e && (i.blockedOn = null);
            }
          }
          for (
            null !== Et && Nt(Et, e),
              null !== Mt && Nt(Mt, e),
              null !== Rt && Nt(Rt, e),
              Tt.forEach(t),
              At.forEach(t),
              n = 0;
            n < Vt.length;
            n++
          )
            (i = Vt[n]).blockedOn === e && (i.blockedOn = null);
          for (; 0 < Vt.length && null === (n = Vt[0]).blockedOn; )
            jt(n), null === n.blockedOn && Vt.shift();
        }
        var Bt = w.ReactCurrentBatchConfig,
          Ut = !0;
        function Wt(e, t, n, i) {
          var o = bt,
            r = Bt.transition;
          Bt.transition = null;
          try {
            (bt = 1), qt(e, t, n, i);
          } finally {
            (bt = o), (Bt.transition = r);
          }
        }
        function $t(e, t, n, i) {
          var o = bt,
            r = Bt.transition;
          Bt.transition = null;
          try {
            (bt = 4), qt(e, t, n, i);
          } finally {
            (bt = o), (Bt.transition = r);
          }
        }
        function qt(e, t, n, i) {
          if (Ut) {
            var o = Kt(e, t, n, i);
            if (null === o) Ui(e, t, i, Qt, n), zt(e, i);
            else if (
              (function (e, t, n, i, o) {
                switch (t) {
                  case "focusin":
                    return (Et = It(Et, e, t, n, i, o)), !0;
                  case "dragenter":
                    return (Mt = It(Mt, e, t, n, i, o)), !0;
                  case "mouseover":
                    return (Rt = It(Rt, e, t, n, i, o)), !0;
                  case "pointerover":
                    var r = o.pointerId;
                    return Tt.set(r, It(Tt.get(r) || null, e, t, n, i, o)), !0;
                  case "gotpointercapture":
                    return (
                      (r = o.pointerId),
                      At.set(r, It(At.get(r) || null, e, t, n, i, o)),
                      !0
                    );
                }
                return !1;
              })(o, e, t, n, i)
            )
              i.stopPropagation();
            else if ((zt(e, i), 4 & t && -1 < Lt.indexOf(e))) {
              for (; null !== o; ) {
                var r = wo(o);
                if (
                  (null !== r && St(r),
                  null === (r = Kt(e, t, n, i)) && Ui(e, t, i, Qt, n),
                  r === o)
                )
                  break;
                o = r;
              }
              null !== o && i.stopPropagation();
            } else Ui(e, t, i, null, n);
          }
        }
        var Qt = null;
        function Kt(e, t, n, i) {
          if (((Qt = null), null !== (e = bo((e = Se(i))))))
            if (null === (t = He(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Be(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Qt = e), null;
        }
        function Yt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case it:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Zt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Zt,
            i = n.length,
            o = "value" in Xt ? Xt.value : Xt.textContent,
            r = o.length;
          for (e = 0; e < i && n[e] === o[e]; e++);
          var a = i - e;
          for (t = 1; t <= a && n[i - t] === o[r - t]; t++);
          return (Jt = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function on() {
          return !1;
        }
        function rn(e) {
          function t(t, n, i, o, r) {
            for (var a in ((this._reactName = t),
            (this._targetInst = i),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = r),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(o) : o[a]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? nn
                : on),
              (this.isPropagationStopped = on),
              this
            );
          }
          return (
            j(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var an,
          sn,
          ln,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          un = rn(cn),
          dn = j({}, cn, { view: 0, detail: 0 }),
          hn = rn(dn),
          pn = j({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ln &&
                    (ln && "mousemove" === e.type
                      ? ((an = e.screenX - ln.screenX),
                        (sn = e.screenY - ln.screenY))
                      : (sn = an = 0),
                    (ln = e)),
                  an);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          fn = rn(pn),
          vn = rn(j({}, pn, { dataTransfer: 0 })),
          gn = rn(j({}, dn, { relatedTarget: 0 })),
          yn = rn(
            j({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          mn = j({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = rn(mn),
          wn = rn(j({}, cn, { data: 0 })),
          Sn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          _n = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Pn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function xn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Pn[e]) && !!t[e];
        }
        function Cn() {
          return xn;
        }
        var kn = j({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = Sn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? _n[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          On = rn(kn),
          En = rn(
            j({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Mn = rn(
            j({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          Rn = rn(
            j({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Tn = j({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          An = rn(Tn),
          Vn = [9, 13, 27, 32],
          Ln = u && "CompositionEvent" in window,
          zn = null;
        u && "documentMode" in document && (zn = document.documentMode);
        var In = u && "TextEvent" in window && !zn,
          jn = u && (!Ln || (zn && 8 < zn && 11 >= zn)),
          Gn = String.fromCharCode(32),
          Dn = !1;
        function Fn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Vn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Nn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Hn = !1;
        var Bn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Un(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Bn[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, i) {
          ke(i),
            0 < (t = $i(t, "onChange")).length &&
              ((n = new un("onChange", "change", null, n, i)),
              e.push({ event: n, listeners: t }));
        }
        var $n = null,
          qn = null;
        function Qn(e) {
          Gi(e, 0);
        }
        function Kn(e) {
          if (q(So(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (u) {
          var Zn;
          if (u) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var ei = document.createElement("div");
              ei.setAttribute("oninput", "return;"),
                (Jn = "function" === typeof ei.oninput);
            }
            Zn = Jn;
          } else Zn = !1;
          Xn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function ti() {
          $n && ($n.detachEvent("onpropertychange", ni), (qn = $n = null));
        }
        function ni(e) {
          if ("value" === e.propertyName && Kn(qn)) {
            var t = [];
            Wn(t, qn, e, Se(e)), Te(Qn, t);
          }
        }
        function ii(e, t, n) {
          "focusin" === e
            ? (ti(), (qn = n), ($n = t).attachEvent("onpropertychange", ni))
            : "focusout" === e && ti();
        }
        function oi(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Kn(qn);
        }
        function ri(e, t) {
          if ("click" === e) return Kn(t);
        }
        function ai(e, t) {
          if ("input" === e || "change" === e) return Kn(t);
        }
        var si =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function li(e, t) {
          if (si(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            i = Object.keys(t);
          if (n.length !== i.length) return !1;
          for (i = 0; i < n.length; i++) {
            var o = n[i];
            if (!d.call(t, o) || !si(e[o], t[o])) return !1;
          }
          return !0;
        }
        function ci(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function ui(e, t) {
          var n,
            i = ci(e);
          for (e = 0; i; ) {
            if (3 === i.nodeType) {
              if (((n = e + i.textContent.length), e <= t && n >= t))
                return { node: i, offset: t - e };
              e = n;
            }
            e: {
              for (; i; ) {
                if (i.nextSibling) {
                  i = i.nextSibling;
                  break e;
                }
                i = i.parentNode;
              }
              i = void 0;
            }
            i = ci(i);
          }
        }
        function di(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? di(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function hi() {
          for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (i) {
              n = !1;
            }
            if (!n) break;
            t = Q((e = t.contentWindow).document);
          }
          return t;
        }
        function pi(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function fi(e) {
          var t = hi(),
            n = e.focusedElem,
            i = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            di(n.ownerDocument.documentElement, n)
          ) {
            if (null !== i && pi(n))
              if (
                ((t = i.start),
                void 0 === (e = i.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var o = n.textContent.length,
                  r = Math.min(i.start, o);
                (i = void 0 === i.end ? r : Math.min(i.end, o)),
                  !e.extend && r > i && ((o = i), (i = r), (r = o)),
                  (o = ui(n, r));
                var a = ui(n, i);
                o &&
                  a &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== a.node ||
                    e.focusOffset !== a.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  r > i
                    ? (e.addRange(t), e.extend(a.node, a.offset))
                    : (t.setEnd(a.node, a.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vi = u && "documentMode" in document && 11 >= document.documentMode,
          gi = null,
          yi = null,
          mi = null,
          bi = !1;
        function wi(e, t, n) {
          var i =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          bi ||
            null == gi ||
            gi !== Q(i) ||
            ("selectionStart" in (i = gi) && pi(i)
              ? (i = { start: i.selectionStart, end: i.selectionEnd })
              : (i = {
                  anchorNode: (i = (
                    (i.ownerDocument && i.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: i.anchorOffset,
                  focusNode: i.focusNode,
                  focusOffset: i.focusOffset,
                }),
            (mi && li(mi, i)) ||
              ((mi = i),
              0 < (i = $i(yi, "onSelect")).length &&
                ((t = new un("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: i }),
                (t.target = gi))));
        }
        function Si(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var _i = {
            animationend: Si("Animation", "AnimationEnd"),
            animationiteration: Si("Animation", "AnimationIteration"),
            animationstart: Si("Animation", "AnimationStart"),
            transitionend: Si("Transition", "TransitionEnd"),
          },
          Pi = {},
          xi = {};
        function Ci(e) {
          if (Pi[e]) return Pi[e];
          if (!_i[e]) return e;
          var t,
            n = _i[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in xi) return (Pi[e] = n[t]);
          return e;
        }
        u &&
          ((xi = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete _i.animationend.animation,
            delete _i.animationiteration.animation,
            delete _i.animationstart.animation),
          "TransitionEvent" in window || delete _i.transitionend.transition);
        var ki = Ci("animationend"),
          Oi = Ci("animationiteration"),
          Ei = Ci("animationstart"),
          Mi = Ci("transitionend"),
          Ri = new Map(),
          Ti =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Ai(e, t) {
          Ri.set(e, t), l(t, [e]);
        }
        for (var Vi = 0; Vi < Ti.length; Vi++) {
          var Li = Ti[Vi];
          Ai(Li.toLowerCase(), "on" + (Li[0].toUpperCase() + Li.slice(1)));
        }
        Ai(ki, "onAnimationEnd"),
          Ai(Oi, "onAnimationIteration"),
          Ai(Ei, "onAnimationStart"),
          Ai("dblclick", "onDoubleClick"),
          Ai("focusin", "onFocus"),
          Ai("focusout", "onBlur"),
          Ai(Mi, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          l(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          l(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          l("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          l(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var zi =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Ii = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(zi)
          );
        function ji(e, t, n) {
          var i = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, i, o, a, s, l, c) {
              if ((Ne.apply(this, arguments), Ie)) {
                if (!Ie) throw Error(r(198));
                var u = je;
                (Ie = !1), (je = null), Ge || ((Ge = !0), (De = u));
              }
            })(i, t, void 0, e),
            (e.currentTarget = null);
        }
        function Gi(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var i = e[n],
              o = i.event;
            i = i.listeners;
            e: {
              var r = void 0;
              if (t)
                for (var a = i.length - 1; 0 <= a; a--) {
                  var s = i[a],
                    l = s.instance,
                    c = s.currentTarget;
                  if (((s = s.listener), l !== r && o.isPropagationStopped()))
                    break e;
                  ji(o, s, c), (r = l);
                }
              else
                for (a = 0; a < i.length; a++) {
                  if (
                    ((l = (s = i[a]).instance),
                    (c = s.currentTarget),
                    (s = s.listener),
                    l !== r && o.isPropagationStopped())
                  )
                    break e;
                  ji(o, s, c), (r = l);
                }
            }
          }
          if (Ge) throw ((e = De), (Ge = !1), (De = null), e);
        }
        function Di(e, t) {
          var n = t[go];
          void 0 === n && (n = t[go] = new Set());
          var i = e + "__bubble";
          n.has(i) || (Bi(t, e, 2, !1), n.add(i));
        }
        function Fi(e, t, n) {
          var i = 0;
          t && (i |= 4), Bi(n, e, i, t);
        }
        var Ni = "_reactListening" + Math.random().toString(36).slice(2);
        function Hi(e) {
          if (!e[Ni]) {
            (e[Ni] = !0),
              a.forEach(function (t) {
                "selectionchange" !== t &&
                  (Ii.has(t) || Fi(t, !1, e), Fi(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ni] || ((t[Ni] = !0), Fi("selectionchange", !1, t));
          }
        }
        function Bi(e, t, n, i) {
          switch (Yt(t)) {
            case 1:
              var o = Wt;
              break;
            case 4:
              o = $t;
              break;
            default:
              o = qt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Ve ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (o = !0),
            i
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function Ui(e, t, n, i, o) {
          var r = i;
          if (0 === (1 & t) && 0 === (2 & t) && null !== i)
            e: for (;;) {
              if (null === i) return;
              var a = i.tag;
              if (3 === a || 4 === a) {
                var s = i.stateNode.containerInfo;
                if (s === o || (8 === s.nodeType && s.parentNode === o)) break;
                if (4 === a)
                  for (a = i.return; null !== a; ) {
                    var l = a.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = a.stateNode.containerInfo) === o ||
                        (8 === l.nodeType && l.parentNode === o))
                    )
                      return;
                    a = a.return;
                  }
                for (; null !== s; ) {
                  if (null === (a = bo(s))) return;
                  if (5 === (l = a.tag) || 6 === l) {
                    i = r = a;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              i = i.return;
            }
          Te(function () {
            var i = r,
              o = Se(n),
              a = [];
            e: {
              var s = Ri.get(e);
              if (void 0 !== s) {
                var l = un,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = On;
                    break;
                  case "focusin":
                    (c = "focus"), (l = gn);
                    break;
                  case "focusout":
                    (c = "blur"), (l = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = fn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = Mn;
                    break;
                  case ki:
                  case Oi:
                  case Ei:
                    l = yn;
                    break;
                  case Mi:
                    l = Rn;
                    break;
                  case "scroll":
                    l = hn;
                    break;
                  case "wheel":
                    l = An;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = En;
                }
                var u = 0 !== (4 & t),
                  d = !u && "scroll" === e,
                  h = u ? (null !== s ? s + "Capture" : null) : s;
                u = [];
                for (var p, f = i; null !== f; ) {
                  var v = (p = f).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== h &&
                        null != (v = Ae(f, h)) &&
                        u.push(Wi(f, v, p))),
                    d)
                  )
                    break;
                  f = f.return;
                }
                0 < u.length &&
                  ((s = new l(s, c, null, n, o)),
                  a.push({ event: s, listeners: u }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!bo(c) && !c[vo])) &&
                  (l || s) &&
                  ((s =
                    o.window === o
                      ? o
                      : (s = o.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = i),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? bo(c)
                          : null) &&
                        (c !== (d = He(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((l = null), (c = i)),
                  l !== c))
              ) {
                if (
                  ((u = fn),
                  (v = "onMouseLeave"),
                  (h = "onMouseEnter"),
                  (f = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((u = En),
                    (v = "onPointerLeave"),
                    (h = "onPointerEnter"),
                    (f = "pointer")),
                  (d = null == l ? s : So(l)),
                  (p = null == c ? s : So(c)),
                  ((s = new u(v, f + "leave", l, n, o)).target = d),
                  (s.relatedTarget = p),
                  (v = null),
                  bo(o) === i &&
                    (((u = new u(h, f + "enter", c, n, o)).target = p),
                    (u.relatedTarget = d),
                    (v = u)),
                  (d = v),
                  l && c)
                )
                  e: {
                    for (h = c, f = 0, p = u = l; p; p = qi(p)) f++;
                    for (p = 0, v = h; v; v = qi(v)) p++;
                    for (; 0 < f - p; ) (u = qi(u)), f--;
                    for (; 0 < p - f; ) (h = qi(h)), p--;
                    for (; f--; ) {
                      if (u === h || (null !== h && u === h.alternate)) break e;
                      (u = qi(u)), (h = qi(h));
                    }
                    u = null;
                  }
                else u = null;
                null !== l && Qi(a, s, l, u, !1),
                  null !== c && null !== d && Qi(a, d, c, u, !0);
              }
              if (
                "select" ===
                  (l =
                    (s = i ? So(i) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === l && "file" === s.type)
              )
                var g = Yn;
              else if (Un(s))
                if (Xn) g = ai;
                else {
                  g = oi;
                  var y = ii;
                }
              else
                (l = s.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) &&
                  (g = ri);
              switch (
                (g && (g = g(e, i))
                  ? Wn(a, g, n, o)
                  : (y && y(e, s, i),
                    "focusout" === e &&
                      (y = s._wrapperState) &&
                      y.controlled &&
                      "number" === s.type &&
                      ee(s, "number", s.value)),
                (y = i ? So(i) : window),
                e)
              ) {
                case "focusin":
                  (Un(y) || "true" === y.contentEditable) &&
                    ((gi = y), (yi = i), (mi = null));
                  break;
                case "focusout":
                  mi = yi = gi = null;
                  break;
                case "mousedown":
                  bi = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (bi = !1), wi(a, n, o);
                  break;
                case "selectionchange":
                  if (vi) break;
                case "keydown":
                case "keyup":
                  wi(a, n, o);
              }
              var m;
              if (Ln)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Hn
                  ? Fn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (jn &&
                  "ko" !== n.locale &&
                  (Hn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Hn && (m = en())
                    : ((Zt = "value" in (Xt = o) ? Xt.value : Xt.textContent),
                      (Hn = !0))),
                0 < (y = $i(i, b)).length &&
                  ((b = new wn(b, e, null, n, o)),
                  a.push({ event: b, listeners: y }),
                  m ? (b.data = m) : null !== (m = Nn(n)) && (b.data = m))),
                (m = In
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Nn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Dn = !0), Gn);
                        case "textInput":
                          return (e = t.data) === Gn && Dn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Hn)
                        return "compositionend" === e || (!Ln && Fn(e, t))
                          ? ((e = en()), (Jt = Zt = Xt = null), (Hn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return jn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (i = $i(i, "onBeforeInput")).length &&
                  ((o = new wn("onBeforeInput", "beforeinput", null, n, o)),
                  a.push({ event: o, listeners: i }),
                  (o.data = m));
            }
            Gi(a, t);
          });
        }
        function Wi(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function $i(e, t) {
          for (var n = t + "Capture", i = []; null !== e; ) {
            var o = e,
              r = o.stateNode;
            5 === o.tag &&
              null !== r &&
              ((o = r),
              null != (r = Ae(e, n)) && i.unshift(Wi(e, r, o)),
              null != (r = Ae(e, t)) && i.push(Wi(e, r, o))),
              (e = e.return);
          }
          return i;
        }
        function qi(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Qi(e, t, n, i, o) {
          for (var r = t._reactName, a = []; null !== n && n !== i; ) {
            var s = n,
              l = s.alternate,
              c = s.stateNode;
            if (null !== l && l === i) break;
            5 === s.tag &&
              null !== c &&
              ((s = c),
              o
                ? null != (l = Ae(n, r)) && a.unshift(Wi(n, l, s))
                : o || (null != (l = Ae(n, r)) && a.push(Wi(n, l, s)))),
              (n = n.return);
          }
          0 !== a.length && e.push({ event: t, listeners: a });
        }
        var Ki = /\r\n?/g,
          Yi = /\u0000|\uFFFD/g;
        function Xi(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Ki, "\n")
            .replace(Yi, "");
        }
        function Zi(e, t, n) {
          if (((t = Xi(t)), Xi(e) !== t && n)) throw Error(r(425));
        }
        function Ji() {}
        var eo = null,
          to = null;
        function no(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var io = "function" === typeof setTimeout ? setTimeout : void 0,
          oo = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ro = "function" === typeof Promise ? Promise : void 0,
          ao =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ro
              ? function (e) {
                  return ro.resolve(null).then(e).catch(so);
                }
              : io;
        function so(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function lo(e, t) {
          var n = t,
            i = 0;
          do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ("/$" === (n = o.data)) {
                if (0 === i) return e.removeChild(o), void Ht(t);
                i--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || i++;
            n = o;
          } while (n);
          Ht(t);
        }
        function co(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function uo(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var ho = Math.random().toString(36).slice(2),
          po = "__reactFiber$" + ho,
          fo = "__reactProps$" + ho,
          vo = "__reactContainer$" + ho,
          go = "__reactEvents$" + ho,
          yo = "__reactListeners$" + ho,
          mo = "__reactHandles$" + ho;
        function bo(e) {
          var t = e[po];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[vo] || n[po])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = uo(e); null !== e; ) {
                  if ((n = e[po])) return n;
                  e = uo(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function wo(e) {
          return !(e = e[po] || e[vo]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function So(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(r(33));
        }
        function _o(e) {
          return e[fo] || null;
        }
        var Po = [],
          xo = -1;
        function Co(e) {
          return { current: e };
        }
        function ko(e) {
          0 > xo || ((e.current = Po[xo]), (Po[xo] = null), xo--);
        }
        function Oo(e, t) {
          xo++, (Po[xo] = e.current), (e.current = t);
        }
        var Eo = {},
          Mo = Co(Eo),
          Ro = Co(!1),
          To = Eo;
        function Ao(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Eo;
          var i = e.stateNode;
          if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
            return i.__reactInternalMemoizedMaskedChildContext;
          var o,
            r = {};
          for (o in n) r[o] = t[o];
          return (
            i &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = r)),
            r
          );
        }
        function Vo(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Lo() {
          ko(Ro), ko(Mo);
        }
        function zo(e, t, n) {
          if (Mo.current !== Eo) throw Error(r(168));
          Oo(Mo, t), Oo(Ro, n);
        }
        function Io(e, t, n) {
          var i = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof i.getChildContext)
          )
            return n;
          for (var o in (i = i.getChildContext()))
            if (!(o in t)) throw Error(r(108, B(e) || "Unknown", o));
          return j({}, n, i);
        }
        function jo(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Eo),
            (To = Mo.current),
            Oo(Mo, e),
            Oo(Ro, Ro.current),
            !0
          );
        }
        function Go(e, t, n) {
          var i = e.stateNode;
          if (!i) throw Error(r(169));
          n
            ? ((e = Io(e, t, To)),
              (i.__reactInternalMemoizedMergedChildContext = e),
              ko(Ro),
              ko(Mo),
              Oo(Mo, e))
            : ko(Ro),
            Oo(Ro, n);
        }
        var Do = null,
          Fo = !1,
          No = !1;
        function Ho(e) {
          null === Do ? (Do = [e]) : Do.push(e);
        }
        function Bo() {
          if (!No && null !== Do) {
            No = !0;
            var e = 0,
              t = bt;
            try {
              var n = Do;
              for (bt = 1; e < n.length; e++) {
                var i = n[e];
                do {
                  i = i(!0);
                } while (null !== i);
              }
              (Do = null), (Fo = !1);
            } catch (o) {
              throw (null !== Do && (Do = Do.slice(e + 1)), qe(Je, Bo), o);
            } finally {
              (bt = t), (No = !1);
            }
          }
          return null;
        }
        var Uo = [],
          Wo = 0,
          $o = null,
          qo = 0,
          Qo = [],
          Ko = 0,
          Yo = null,
          Xo = 1,
          Zo = "";
        function Jo(e, t) {
          (Uo[Wo++] = qo), (Uo[Wo++] = $o), ($o = e), (qo = t);
        }
        function er(e, t, n) {
          (Qo[Ko++] = Xo), (Qo[Ko++] = Zo), (Qo[Ko++] = Yo), (Yo = e);
          var i = Xo;
          e = Zo;
          var o = 32 - at(i) - 1;
          (i &= ~(1 << o)), (n += 1);
          var r = 32 - at(t) + o;
          if (30 < r) {
            var a = o - (o % 5);
            (r = (i & ((1 << a) - 1)).toString(32)),
              (i >>= a),
              (o -= a),
              (Xo = (1 << (32 - at(t) + o)) | (n << o) | i),
              (Zo = r + e);
          } else (Xo = (1 << r) | (n << o) | i), (Zo = e);
        }
        function tr(e) {
          null !== e.return && (Jo(e, 1), er(e, 1, 0));
        }
        function nr(e) {
          for (; e === $o; )
            ($o = Uo[--Wo]), (Uo[Wo] = null), (qo = Uo[--Wo]), (Uo[Wo] = null);
          for (; e === Yo; )
            (Yo = Qo[--Ko]),
              (Qo[Ko] = null),
              (Zo = Qo[--Ko]),
              (Qo[Ko] = null),
              (Xo = Qo[--Ko]),
              (Qo[Ko] = null);
        }
        var ir = null,
          or = null,
          rr = !1,
          ar = null;
        function sr(e, t) {
          var n = Ac(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function lr(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ir = e), (or = co(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ir = e), (or = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Yo ? { id: Xo, overflow: Zo } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ac(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ir = e),
                (or = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function cr(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ur(e) {
          if (rr) {
            var t = or;
            if (t) {
              var n = t;
              if (!lr(e, t)) {
                if (cr(e)) throw Error(r(418));
                t = co(n.nextSibling);
                var i = ir;
                t && lr(e, t)
                  ? sr(i, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (rr = !1), (ir = e));
              }
            } else {
              if (cr(e)) throw Error(r(418));
              (e.flags = (-4097 & e.flags) | 2), (rr = !1), (ir = e);
            }
          }
        }
        function dr(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ir = e;
        }
        function hr(e) {
          if (e !== ir) return !1;
          if (!rr) return dr(e), (rr = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !no(e.type, e.memoizedProps)),
            t && (t = or))
          ) {
            if (cr(e)) throw (pr(), Error(r(418)));
            for (; t; ) sr(e, t), (t = co(t.nextSibling));
          }
          if ((dr(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(r(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      or = co(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              or = null;
            }
          } else or = ir ? co(e.stateNode.nextSibling) : null;
          return !0;
        }
        function pr() {
          for (var e = or; e; ) e = co(e.nextSibling);
        }
        function fr() {
          (or = ir = null), (rr = !1);
        }
        function vr(e) {
          null === ar ? (ar = [e]) : ar.push(e);
        }
        var gr = w.ReactCurrentBatchConfig;
        function yr(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = j({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var mr = Co(null),
          br = null,
          wr = null,
          Sr = null;
        function _r() {
          Sr = wr = br = null;
        }
        function Pr(e) {
          var t = mr.current;
          ko(mr), (e._currentValue = t);
        }
        function xr(e, t, n) {
          for (; null !== e; ) {
            var i = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== i && (i.childLanes |= t))
                : null !== i && (i.childLanes & t) !== t && (i.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Cr(e, t) {
          (br = e),
            (Sr = wr = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (ws = !0), (e.firstContext = null));
        }
        function kr(e) {
          var t = e._currentValue;
          if (Sr !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wr)
            ) {
              if (null === br) throw Error(r(308));
              (wr = e), (br.dependencies = { lanes: 0, firstContext: e });
            } else wr = wr.next = e;
          return t;
        }
        var Or = null;
        function Er(e) {
          null === Or ? (Or = [e]) : Or.push(e);
        }
        function Mr(e, t, n, i) {
          var o = t.interleaved;
          return (
            null === o
              ? ((n.next = n), Er(t))
              : ((n.next = o.next), (o.next = n)),
            (t.interleaved = n),
            Rr(e, i)
          );
        }
        function Rr(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Tr = !1;
        function Ar(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Vr(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Lr(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function zr(e, t, n) {
          var i = e.updateQueue;
          if (null === i) return null;
          if (((i = i.shared), 0 !== (2 & Ml))) {
            var o = i.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (i.pending = t),
              Rr(e, n)
            );
          }
          return (
            null === (o = i.interleaved)
              ? ((t.next = t), Er(i))
              : ((t.next = o.next), (o.next = t)),
            (i.interleaved = t),
            Rr(e, n)
          );
        }
        function Ir(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var i = t.lanes;
            (n |= i &= e.pendingLanes), (t.lanes = n), mt(e, n);
          }
        }
        function jr(e, t) {
          var n = e.updateQueue,
            i = e.alternate;
          if (null !== i && n === (i = i.updateQueue)) {
            var o = null,
              r = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var a = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === r ? (o = r = a) : (r = r.next = a), (n = n.next);
              } while (null !== n);
              null === r ? (o = r = t) : (r = r.next = t);
            } else o = r = t;
            return (
              (n = {
                baseState: i.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: r,
                shared: i.shared,
                effects: i.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Gr(e, t, n, i) {
          var o = e.updateQueue;
          Tr = !1;
          var r = o.firstBaseUpdate,
            a = o.lastBaseUpdate,
            s = o.shared.pending;
          if (null !== s) {
            o.shared.pending = null;
            var l = s,
              c = l.next;
            (l.next = null), null === a ? (r = c) : (a.next = c), (a = l);
            var u = e.alternate;
            null !== u &&
              (s = (u = u.updateQueue).lastBaseUpdate) !== a &&
              (null === s ? (u.firstBaseUpdate = c) : (s.next = c),
              (u.lastBaseUpdate = l));
          }
          if (null !== r) {
            var d = o.baseState;
            for (a = 0, u = c = l = null, s = r; ; ) {
              var h = s.lane,
                p = s.eventTime;
              if ((i & h) === h) {
                null !== u &&
                  (u = u.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                e: {
                  var f = e,
                    v = s;
                  switch (((h = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (f = v.payload)) {
                        d = f.call(p, d, h);
                        break e;
                      }
                      d = f;
                      break e;
                    case 3:
                      f.flags = (-65537 & f.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (h =
                            "function" === typeof (f = v.payload)
                              ? f.call(p, d, h)
                              : f) ||
                        void 0 === h
                      )
                        break e;
                      d = j({}, d, h);
                      break e;
                    case 2:
                      Tr = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (h = o.effects) ? (o.effects = [s]) : h.push(s));
              } else
                (p = {
                  eventTime: p,
                  lane: h,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === u ? ((c = u = p), (l = d)) : (u = u.next = p),
                  (a |= h);
              if (null === (s = s.next)) {
                if (null === (s = o.shared.pending)) break;
                (s = (h = s).next),
                  (h.next = null),
                  (o.lastBaseUpdate = h),
                  (o.shared.pending = null);
              }
            }
            if (
              (null === u && (l = d),
              (o.baseState = l),
              (o.firstBaseUpdate = c),
              (o.lastBaseUpdate = u),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (a |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === r && (o.shared.lanes = 0);
            (jl |= a), (e.lanes = a), (e.memoizedState = d);
          }
        }
        function Dr(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var i = e[t],
                o = i.callback;
              if (null !== o) {
                if (((i.callback = null), (i = n), "function" !== typeof o))
                  throw Error(r(191, o));
                o.call(i);
              }
            }
        }
        var Fr = new i.Component().refs;
        function Nr(e, t, n, i) {
          (n =
            null === (n = n(i, (t = e.memoizedState))) || void 0 === n
              ? t
              : j({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Hr = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && He(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var i = tc(),
              o = nc(e),
              r = Lr(i, o);
            (r.payload = t),
              void 0 !== n && null !== n && (r.callback = n),
              null !== (t = zr(e, r, o)) && (ic(t, e, o, i), Ir(t, e, o));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var i = tc(),
              o = nc(e),
              r = Lr(i, o);
            (r.tag = 1),
              (r.payload = t),
              void 0 !== n && null !== n && (r.callback = n),
              null !== (t = zr(e, r, o)) && (ic(t, e, o, i), Ir(t, e, o));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tc(),
              i = nc(e),
              o = Lr(n, i);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              null !== (t = zr(e, o, i)) && (ic(t, e, i, n), Ir(t, e, i));
          },
        };
        function Br(e, t, n, i, o, r, a) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(i, r, a)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !li(n, i) ||
                !li(o, r);
        }
        function Ur(e, t, n) {
          var i = !1,
            o = Eo,
            r = t.contextType;
          return (
            "object" === typeof r && null !== r
              ? (r = kr(r))
              : ((o = Vo(t) ? To : Mo.current),
                (r = (i = null !== (i = t.contextTypes) && void 0 !== i)
                  ? Ao(e, o)
                  : Eo)),
            (t = new t(n, r)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Hr),
            (e.stateNode = t),
            (t._reactInternals = e),
            i &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = r)),
            t
          );
        }
        function Wr(e, t, n, i) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, i),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, i),
            t.state !== e && Hr.enqueueReplaceState(t, t.state, null);
        }
        function $r(e, t, n, i) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = Fr), Ar(e);
          var r = t.contextType;
          "object" === typeof r && null !== r
            ? (o.context = kr(r))
            : ((r = Vo(t) ? To : Mo.current), (o.context = Ao(e, r))),
            (o.state = e.memoizedState),
            "function" === typeof (r = t.getDerivedStateFromProps) &&
              (Nr(e, t, r, n), (o.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof o.getSnapshotBeforeUpdate ||
              ("function" !== typeof o.UNSAFE_componentWillMount &&
                "function" !== typeof o.componentWillMount) ||
              ((t = o.state),
              "function" === typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" === typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && Hr.enqueueReplaceState(o, o.state, null),
              Gr(e, n, o, i),
              (o.state = e.memoizedState)),
            "function" === typeof o.componentDidMount && (e.flags |= 4194308);
        }
        function qr(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(r(309));
                var i = n.stateNode;
              }
              if (!i) throw Error(r(147, e));
              var o = i,
                a = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === a
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs;
                    t === Fr && (t = o.refs = {}),
                      null === e ? delete t[a] : (t[a] = e);
                  }),
                  (t._stringRef = a),
                  t);
            }
            if ("string" !== typeof e) throw Error(r(284));
            if (!n._owner) throw Error(r(290, e));
          }
          return e;
        }
        function Qr(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              r(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Kr(e) {
          return (0, e._init)(e._payload);
        }
        function Yr(e) {
          function t(t, n) {
            if (e) {
              var i = t.deletions;
              null === i ? ((t.deletions = [n]), (t.flags |= 16)) : i.push(n);
            }
          }
          function n(n, i) {
            if (!e) return null;
            for (; null !== i; ) t(n, i), (i = i.sibling);
            return null;
          }
          function i(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Lc(e, t)).index = 0), (e.sibling = null), e;
          }
          function a(t, n, i) {
            return (
              (t.index = i),
              e
                ? null !== (i = t.alternate)
                  ? (i = i.index) < n
                    ? ((t.flags |= 2), n)
                    : i
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function l(e, t, n, i) {
            return null === t || 6 !== t.tag
              ? (((t = Gc(n, e.mode, i)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function c(e, t, n, i) {
            var r = n.type;
            return r === P
              ? d(e, t, n.props.children, i, n.key)
              : null !== t &&
                (t.elementType === r ||
                  ("object" === typeof r &&
                    null !== r &&
                    r.$$typeof === A &&
                    Kr(r) === t.type))
              ? (((i = o(t, n.props)).ref = qr(e, t, n)), (i.return = e), i)
              : (((i = zc(n.type, n.key, n.props, null, e.mode, i)).ref = qr(
                  e,
                  t,
                  n
                )),
                (i.return = e),
                i);
          }
          function u(e, t, n, i) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Dc(n, e.mode, i)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, i, r) {
            return null === t || 7 !== t.tag
              ? (((t = Ic(n, e.mode, i, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function h(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Gc("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case S:
                  return (
                    ((n = zc(t.type, t.key, t.props, null, e.mode, n)).ref = qr(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case _:
                  return ((t = Dc(t, e.mode, n)).return = e), t;
                case A:
                  return h(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || z(t))
                return ((t = Ic(t, e.mode, n, null)).return = e), t;
              Qr(e, t);
            }
            return null;
          }
          function p(e, t, n, i) {
            var o = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== o ? null : l(e, t, "" + n, i);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case S:
                  return n.key === o ? c(e, t, n, i) : null;
                case _:
                  return n.key === o ? u(e, t, n, i) : null;
                case A:
                  return p(e, t, (o = n._init)(n._payload), i);
              }
              if (te(n) || z(n)) return null !== o ? null : d(e, t, n, i, null);
              Qr(e, n);
            }
            return null;
          }
          function f(e, t, n, i, o) {
            if (("string" === typeof i && "" !== i) || "number" === typeof i)
              return l(t, (e = e.get(n) || null), "" + i, o);
            if ("object" === typeof i && null !== i) {
              switch (i.$$typeof) {
                case S:
                  return c(
                    t,
                    (e = e.get(null === i.key ? n : i.key) || null),
                    i,
                    o
                  );
                case _:
                  return u(
                    t,
                    (e = e.get(null === i.key ? n : i.key) || null),
                    i,
                    o
                  );
                case A:
                  return f(e, t, n, (0, i._init)(i._payload), o);
              }
              if (te(i) || z(i))
                return d(t, (e = e.get(n) || null), i, o, null);
              Qr(t, i);
            }
            return null;
          }
          function v(o, r, s, l) {
            for (
              var c = null, u = null, d = r, v = (r = 0), g = null;
              null !== d && v < s.length;
              v++
            ) {
              d.index > v ? ((g = d), (d = null)) : (g = d.sibling);
              var y = p(o, d, s[v], l);
              if (null === y) {
                null === d && (d = g);
                break;
              }
              e && d && null === y.alternate && t(o, d),
                (r = a(y, r, v)),
                null === u ? (c = y) : (u.sibling = y),
                (u = y),
                (d = g);
            }
            if (v === s.length) return n(o, d), rr && Jo(o, v), c;
            if (null === d) {
              for (; v < s.length; v++)
                null !== (d = h(o, s[v], l)) &&
                  ((r = a(d, r, v)),
                  null === u ? (c = d) : (u.sibling = d),
                  (u = d));
              return rr && Jo(o, v), c;
            }
            for (d = i(o, d); v < s.length; v++)
              null !== (g = f(d, o, v, s[v], l)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? v : g.key),
                (r = a(g, r, v)),
                null === u ? (c = g) : (u.sibling = g),
                (u = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(o, e);
                }),
              rr && Jo(o, v),
              c
            );
          }
          function g(o, s, l, c) {
            var u = z(l);
            if ("function" !== typeof u) throw Error(r(150));
            if (null == (l = u.call(l))) throw Error(r(151));
            for (
              var d = (u = null), v = s, g = (s = 0), y = null, m = l.next();
              null !== v && !m.done;
              g++, m = l.next()
            ) {
              v.index > g ? ((y = v), (v = null)) : (y = v.sibling);
              var b = p(o, v, m.value, c);
              if (null === b) {
                null === v && (v = y);
                break;
              }
              e && v && null === b.alternate && t(o, v),
                (s = a(b, s, g)),
                null === d ? (u = b) : (d.sibling = b),
                (d = b),
                (v = y);
            }
            if (m.done) return n(o, v), rr && Jo(o, g), u;
            if (null === v) {
              for (; !m.done; g++, m = l.next())
                null !== (m = h(o, m.value, c)) &&
                  ((s = a(m, s, g)),
                  null === d ? (u = m) : (d.sibling = m),
                  (d = m));
              return rr && Jo(o, g), u;
            }
            for (v = i(o, v); !m.done; g++, m = l.next())
              null !== (m = f(v, o, g, m.value, c)) &&
                (e &&
                  null !== m.alternate &&
                  v.delete(null === m.key ? g : m.key),
                (s = a(m, s, g)),
                null === d ? (u = m) : (d.sibling = m),
                (d = m));
            return (
              e &&
                v.forEach(function (e) {
                  return t(o, e);
                }),
              rr && Jo(o, g),
              u
            );
          }
          return function e(i, r, a, l) {
            if (
              ("object" === typeof a &&
                null !== a &&
                a.type === P &&
                null === a.key &&
                (a = a.props.children),
              "object" === typeof a && null !== a)
            ) {
              switch (a.$$typeof) {
                case S:
                  e: {
                    for (var c = a.key, u = r; null !== u; ) {
                      if (u.key === c) {
                        if ((c = a.type) === P) {
                          if (7 === u.tag) {
                            n(i, u.sibling),
                              ((r = o(u, a.props.children)).return = i),
                              (i = r);
                            break e;
                          }
                        } else if (
                          u.elementType === c ||
                          ("object" === typeof c &&
                            null !== c &&
                            c.$$typeof === A &&
                            Kr(c) === u.type)
                        ) {
                          n(i, u.sibling),
                            ((r = o(u, a.props)).ref = qr(i, u, a)),
                            (r.return = i),
                            (i = r);
                          break e;
                        }
                        n(i, u);
                        break;
                      }
                      t(i, u), (u = u.sibling);
                    }
                    a.type === P
                      ? (((r = Ic(a.props.children, i.mode, l, a.key)).return =
                          i),
                        (i = r))
                      : (((l = zc(
                          a.type,
                          a.key,
                          a.props,
                          null,
                          i.mode,
                          l
                        )).ref = qr(i, r, a)),
                        (l.return = i),
                        (i = l));
                  }
                  return s(i);
                case _:
                  e: {
                    for (u = a.key; null !== r; ) {
                      if (r.key === u) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === a.containerInfo &&
                          r.stateNode.implementation === a.implementation
                        ) {
                          n(i, r.sibling),
                            ((r = o(r, a.children || [])).return = i),
                            (i = r);
                          break e;
                        }
                        n(i, r);
                        break;
                      }
                      t(i, r), (r = r.sibling);
                    }
                    ((r = Dc(a, i.mode, l)).return = i), (i = r);
                  }
                  return s(i);
                case A:
                  return e(i, r, (u = a._init)(a._payload), l);
              }
              if (te(a)) return v(i, r, a, l);
              if (z(a)) return g(i, r, a, l);
              Qr(i, a);
            }
            return ("string" === typeof a && "" !== a) || "number" === typeof a
              ? ((a = "" + a),
                null !== r && 6 === r.tag
                  ? (n(i, r.sibling), ((r = o(r, a)).return = i), (i = r))
                  : (n(i, r), ((r = Gc(a, i.mode, l)).return = i), (i = r)),
                s(i))
              : n(i, r);
          };
        }
        var Xr = Yr(!0),
          Zr = Yr(!1),
          Jr = {},
          ea = Co(Jr),
          ta = Co(Jr),
          na = Co(Jr);
        function ia(e) {
          if (e === Jr) throw Error(r(174));
          return e;
        }
        function oa(e, t) {
          switch ((Oo(na, t), Oo(ta, e), Oo(ea, Jr), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
              break;
            default:
              t = le(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          ko(ea), Oo(ea, t);
        }
        function ra() {
          ko(ea), ko(ta), ko(na);
        }
        function aa(e) {
          ia(na.current);
          var t = ia(ea.current),
            n = le(t, e.type);
          t !== n && (Oo(ta, e), Oo(ea, n));
        }
        function sa(e) {
          ta.current === e && (ko(ea), ko(ta));
        }
        var la = Co(0);
        function ca(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ua = [];
        function da() {
          for (var e = 0; e < ua.length; e++)
            ua[e]._workInProgressVersionPrimary = null;
          ua.length = 0;
        }
        var ha = w.ReactCurrentDispatcher,
          pa = w.ReactCurrentBatchConfig,
          fa = 0,
          va = null,
          ga = null,
          ya = null,
          ma = !1,
          ba = !1,
          wa = 0,
          Sa = 0;
        function _a() {
          throw Error(r(321));
        }
        function Pa(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!si(e[n], t[n])) return !1;
          return !0;
        }
        function xa(e, t, n, i, o, a) {
          if (
            ((fa = a),
            (va = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ha.current = null === e || null === e.memoizedState ? ss : ls),
            (e = n(i, o)),
            ba)
          ) {
            a = 0;
            do {
              if (((ba = !1), (wa = 0), 25 <= a)) throw Error(r(301));
              (a += 1),
                (ya = ga = null),
                (t.updateQueue = null),
                (ha.current = cs),
                (e = n(i, o));
            } while (ba);
          }
          if (
            ((ha.current = as),
            (t = null !== ga && null !== ga.next),
            (fa = 0),
            (ya = ga = va = null),
            (ma = !1),
            t)
          )
            throw Error(r(300));
          return e;
        }
        function Ca() {
          var e = 0 !== wa;
          return (wa = 0), e;
        }
        function ka() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ya ? (va.memoizedState = ya = e) : (ya = ya.next = e), ya
          );
        }
        function Oa() {
          if (null === ga) {
            var e = va.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ga.next;
          var t = null === ya ? va.memoizedState : ya.next;
          if (null !== t) (ya = t), (ga = e);
          else {
            if (null === e) throw Error(r(310));
            (e = {
              memoizedState: (ga = e).memoizedState,
              baseState: ga.baseState,
              baseQueue: ga.baseQueue,
              queue: ga.queue,
              next: null,
            }),
              null === ya ? (va.memoizedState = ya = e) : (ya = ya.next = e);
          }
          return ya;
        }
        function Ea(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Ma(e) {
          var t = Oa(),
            n = t.queue;
          if (null === n) throw Error(r(311));
          n.lastRenderedReducer = e;
          var i = ga,
            o = i.baseQueue,
            a = n.pending;
          if (null !== a) {
            if (null !== o) {
              var s = o.next;
              (o.next = a.next), (a.next = s);
            }
            (i.baseQueue = o = a), (n.pending = null);
          }
          if (null !== o) {
            (a = o.next), (i = i.baseState);
            var l = (s = null),
              c = null,
              u = a;
            do {
              var d = u.lane;
              if ((fa & d) === d)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: u.action,
                      hasEagerState: u.hasEagerState,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (i = u.hasEagerState ? u.eagerState : e(i, u.action));
              else {
                var h = {
                  lane: d,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === c ? ((l = c = h), (s = i)) : (c = c.next = h),
                  (va.lanes |= d),
                  (jl |= d);
              }
              u = u.next;
            } while (null !== u && u !== a);
            null === c ? (s = i) : (c.next = l),
              si(i, t.memoizedState) || (ws = !0),
              (t.memoizedState = i),
              (t.baseState = s),
              (t.baseQueue = c),
              (n.lastRenderedState = i);
          }
          if (null !== (e = n.interleaved)) {
            o = e;
            do {
              (a = o.lane), (va.lanes |= a), (jl |= a), (o = o.next);
            } while (o !== e);
          } else null === o && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ra(e) {
          var t = Oa(),
            n = t.queue;
          if (null === n) throw Error(r(311));
          n.lastRenderedReducer = e;
          var i = n.dispatch,
            o = n.pending,
            a = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var s = (o = o.next);
            do {
              (a = e(a, s.action)), (s = s.next);
            } while (s !== o);
            si(a, t.memoizedState) || (ws = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (n.lastRenderedState = a);
          }
          return [a, i];
        }
        function Ta() {}
        function Aa(e, t) {
          var n = va,
            i = Oa(),
            o = t(),
            a = !si(i.memoizedState, o);
          if (
            (a && ((i.memoizedState = o), (ws = !0)),
            (i = i.queue),
            Ua(za.bind(null, n, i, e), [e]),
            i.getSnapshot !== t ||
              a ||
              (null !== ya && 1 & ya.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Da(9, La.bind(null, n, i, o, t), void 0, null),
              null === Rl)
            )
              throw Error(r(349));
            0 !== (30 & fa) || Va(n, t, o);
          }
          return o;
        }
        function Va(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = va.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (va.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function La(e, t, n, i) {
          (t.value = n), (t.getSnapshot = i), Ia(t) && ja(e);
        }
        function za(e, t, n) {
          return n(function () {
            Ia(t) && ja(e);
          });
        }
        function Ia(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !si(e, n);
          } catch (i) {
            return !0;
          }
        }
        function ja(e) {
          var t = Rr(e, 1);
          null !== t && ic(t, e, 1, -1);
        }
        function Ga(e) {
          var t = ka();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ea,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ns.bind(null, va, e)),
            [t.memoizedState, e]
          );
        }
        function Da(e, t, n, i) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: i, next: null }),
            null === (t = va.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (va.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e)),
            e
          );
        }
        function Fa() {
          return Oa().memoizedState;
        }
        function Na(e, t, n, i) {
          var o = ka();
          (va.flags |= e),
            (o.memoizedState = Da(1 | t, n, void 0, void 0 === i ? null : i));
        }
        function Ha(e, t, n, i) {
          var o = Oa();
          i = void 0 === i ? null : i;
          var r = void 0;
          if (null !== ga) {
            var a = ga.memoizedState;
            if (((r = a.destroy), null !== i && Pa(i, a.deps)))
              return void (o.memoizedState = Da(t, n, r, i));
          }
          (va.flags |= e), (o.memoizedState = Da(1 | t, n, r, i));
        }
        function Ba(e, t) {
          return Na(8390656, 8, e, t);
        }
        function Ua(e, t) {
          return Ha(2048, 8, e, t);
        }
        function Wa(e, t) {
          return Ha(4, 2, e, t);
        }
        function $a(e, t) {
          return Ha(4, 4, e, t);
        }
        function qa(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Qa(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Ha(4, 4, qa.bind(null, t, e), n)
          );
        }
        function Ka() {}
        function Ya(e, t) {
          var n = Oa();
          t = void 0 === t ? null : t;
          var i = n.memoizedState;
          return null !== i && null !== t && Pa(t, i[1])
            ? i[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Xa(e, t) {
          var n = Oa();
          t = void 0 === t ? null : t;
          var i = n.memoizedState;
          return null !== i && null !== t && Pa(t, i[1])
            ? i[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Za(e, t, n) {
          return 0 === (21 & fa)
            ? (e.baseState && ((e.baseState = !1), (ws = !0)),
              (e.memoizedState = n))
            : (si(n, t) ||
                ((n = vt()), (va.lanes |= n), (jl |= n), (e.baseState = !0)),
              t);
        }
        function Ja(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var i = pa.transition;
          pa.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pa.transition = i);
          }
        }
        function es() {
          return Oa().memoizedState;
        }
        function ts(e, t, n) {
          var i = nc(e);
          if (
            ((n = {
              lane: i,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            is(e))
          )
            os(t, n);
          else if (null !== (n = Mr(e, t, n, i))) {
            ic(n, e, i, tc()), rs(n, t, i);
          }
        }
        function ns(e, t, n) {
          var i = nc(e),
            o = {
              lane: i,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (is(e)) os(t, o);
          else {
            var r = e.alternate;
            if (
              0 === e.lanes &&
              (null === r || 0 === r.lanes) &&
              null !== (r = t.lastRenderedReducer)
            )
              try {
                var a = t.lastRenderedState,
                  s = r(a, n);
                if (((o.hasEagerState = !0), (o.eagerState = s), si(s, a))) {
                  var l = t.interleaved;
                  return (
                    null === l
                      ? ((o.next = o), Er(t))
                      : ((o.next = l.next), (l.next = o)),
                    void (t.interleaved = o)
                  );
                }
              } catch (c) {}
            null !== (n = Mr(e, t, o, i)) &&
              (ic(n, e, i, (o = tc())), rs(n, t, i));
          }
        }
        function is(e) {
          var t = e.alternate;
          return e === va || (null !== t && t === va);
        }
        function os(e, t) {
          ba = ma = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function rs(e, t, n) {
          if (0 !== (4194240 & n)) {
            var i = t.lanes;
            (n |= i &= e.pendingLanes), (t.lanes = n), mt(e, n);
          }
        }
        var as = {
            readContext: kr,
            useCallback: _a,
            useContext: _a,
            useEffect: _a,
            useImperativeHandle: _a,
            useInsertionEffect: _a,
            useLayoutEffect: _a,
            useMemo: _a,
            useReducer: _a,
            useRef: _a,
            useState: _a,
            useDebugValue: _a,
            useDeferredValue: _a,
            useTransition: _a,
            useMutableSource: _a,
            useSyncExternalStore: _a,
            useId: _a,
            unstable_isNewReconciler: !1,
          },
          ss = {
            readContext: kr,
            useCallback: function (e, t) {
              return (ka().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: kr,
            useEffect: Ba,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Na(4194308, 4, qa.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Na(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Na(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = ka();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var i = ka();
              return (
                (t = void 0 !== n ? n(t) : t),
                (i.memoizedState = i.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (i.queue = e),
                (e = e.dispatch = ts.bind(null, va, e)),
                [i.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (ka().memoizedState = e);
            },
            useState: Ga,
            useDebugValue: Ka,
            useDeferredValue: function (e) {
              return (ka().memoizedState = e);
            },
            useTransition: function () {
              var e = Ga(!1),
                t = e[0];
              return (
                (e = Ja.bind(null, e[1])), (ka().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var i = va,
                o = ka();
              if (rr) {
                if (void 0 === n) throw Error(r(407));
                n = n();
              } else {
                if (((n = t()), null === Rl)) throw Error(r(349));
                0 !== (30 & fa) || Va(i, t, n);
              }
              o.memoizedState = n;
              var a = { value: n, getSnapshot: t };
              return (
                (o.queue = a),
                Ba(za.bind(null, i, a, e), [e]),
                (i.flags |= 2048),
                Da(9, La.bind(null, i, a, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = ka(),
                t = Rl.identifierPrefix;
              if (rr) {
                var n = Zo;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Xo & ~(1 << (32 - at(Xo) - 1))).toString(32) + n)),
                  0 < (n = wa++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = Sa++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ls = {
            readContext: kr,
            useCallback: Ya,
            useContext: kr,
            useEffect: Ua,
            useImperativeHandle: Qa,
            useInsertionEffect: Wa,
            useLayoutEffect: $a,
            useMemo: Xa,
            useReducer: Ma,
            useRef: Fa,
            useState: function () {
              return Ma(Ea);
            },
            useDebugValue: Ka,
            useDeferredValue: function (e) {
              return Za(Oa(), ga.memoizedState, e);
            },
            useTransition: function () {
              return [Ma(Ea)[0], Oa().memoizedState];
            },
            useMutableSource: Ta,
            useSyncExternalStore: Aa,
            useId: es,
            unstable_isNewReconciler: !1,
          },
          cs = {
            readContext: kr,
            useCallback: Ya,
            useContext: kr,
            useEffect: Ua,
            useImperativeHandle: Qa,
            useInsertionEffect: Wa,
            useLayoutEffect: $a,
            useMemo: Xa,
            useReducer: Ra,
            useRef: Fa,
            useState: function () {
              return Ra(Ea);
            },
            useDebugValue: Ka,
            useDeferredValue: function (e) {
              var t = Oa();
              return null === ga
                ? (t.memoizedState = e)
                : Za(t, ga.memoizedState, e);
            },
            useTransition: function () {
              return [Ra(Ea)[0], Oa().memoizedState];
            },
            useMutableSource: Ta,
            useSyncExternalStore: Aa,
            useId: es,
            unstable_isNewReconciler: !1,
          };
        function us(e, t) {
          try {
            var n = "",
              i = t;
            do {
              (n += N(i)), (i = i.return);
            } while (i);
            var o = n;
          } catch (r) {
            o = "\nError generating stack: " + r.message + "\n" + r.stack;
          }
          return { value: e, source: t, stack: o, digest: null };
        }
        function ds(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function hs(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var ps = "function" === typeof WeakMap ? WeakMap : Map;
        function fs(e, t, n) {
          ((n = Lr(-1, n)).tag = 3), (n.payload = { element: null });
          var i = t.value;
          return (
            (n.callback = function () {
              Wl || ((Wl = !0), ($l = i)), hs(0, t);
            }),
            n
          );
        }
        function vs(e, t, n) {
          (n = Lr(-1, n)).tag = 3;
          var i = e.type.getDerivedStateFromError;
          if ("function" === typeof i) {
            var o = t.value;
            (n.payload = function () {
              return i(o);
            }),
              (n.callback = function () {
                hs(0, t);
              });
          }
          var r = e.stateNode;
          return (
            null !== r &&
              "function" === typeof r.componentDidCatch &&
              (n.callback = function () {
                hs(0, t),
                  "function" !== typeof i &&
                    (null === ql ? (ql = new Set([this])) : ql.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function gs(e, t, n) {
          var i = e.pingCache;
          if (null === i) {
            i = e.pingCache = new ps();
            var o = new Set();
            i.set(t, o);
          } else void 0 === (o = i.get(t)) && ((o = new Set()), i.set(t, o));
          o.has(n) || (o.add(n), (e = kc.bind(null, e, t, n)), t.then(e, e));
        }
        function ys(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function ms(e, t, n, i, o) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Lr(-1, 1)).tag = 2), zr(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = o), e);
        }
        var bs = w.ReactCurrentOwner,
          ws = !1;
        function Ss(e, t, n, i) {
          t.child = null === e ? Zr(t, null, n, i) : Xr(t, e.child, n, i);
        }
        function _s(e, t, n, i, o) {
          n = n.render;
          var r = t.ref;
          return (
            Cr(t, o),
            (i = xa(e, t, n, i, r, o)),
            (n = Ca()),
            null === e || ws
              ? (rr && n && tr(t), (t.flags |= 1), Ss(e, t, i, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Ws(e, t, o))
          );
        }
        function Ps(e, t, n, i, o) {
          if (null === e) {
            var r = n.type;
            return "function" !== typeof r ||
              Vc(r) ||
              void 0 !== r.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = zc(n.type, null, i, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = r), xs(e, t, r, i, o));
          }
          if (((r = e.child), 0 === (e.lanes & o))) {
            var a = r.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : li)(a, i) &&
              e.ref === t.ref
            )
              return Ws(e, t, o);
          }
          return (
            (t.flags |= 1),
            ((e = Lc(r, i)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function xs(e, t, n, i, o) {
          if (null !== e) {
            var r = e.memoizedProps;
            if (li(r, i) && e.ref === t.ref) {
              if (((ws = !1), (t.pendingProps = i = r), 0 === (e.lanes & o)))
                return (t.lanes = e.lanes), Ws(e, t, o);
              0 !== (131072 & e.flags) && (ws = !0);
            }
          }
          return Os(e, t, n, i, o);
        }
        function Cs(e, t, n) {
          var i = t.pendingProps,
            o = i.children,
            r = null !== e ? e.memoizedState : null;
          if ("hidden" === i.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Oo(Ll, Vl),
                (Vl |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== r ? r.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Oo(Ll, Vl),
                  (Vl |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (i = null !== r ? r.baseLanes : n),
                Oo(Ll, Vl),
                (Vl |= i);
            }
          else
            null !== r
              ? ((i = r.baseLanes | n), (t.memoizedState = null))
              : (i = n),
              Oo(Ll, Vl),
              (Vl |= i);
          return Ss(e, t, o, n), t.child;
        }
        function ks(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Os(e, t, n, i, o) {
          var r = Vo(n) ? To : Mo.current;
          return (
            (r = Ao(t, r)),
            Cr(t, o),
            (n = xa(e, t, n, i, r, o)),
            (i = Ca()),
            null === e || ws
              ? (rr && i && tr(t), (t.flags |= 1), Ss(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Ws(e, t, o))
          );
        }
        function Es(e, t, n, i, o) {
          if (Vo(n)) {
            var r = !0;
            jo(t);
          } else r = !1;
          if ((Cr(t, o), null === t.stateNode))
            Us(e, t), Ur(t, n, i), $r(t, n, i, o), (i = !0);
          else if (null === e) {
            var a = t.stateNode,
              s = t.memoizedProps;
            a.props = s;
            var l = a.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = kr(c))
              : (c = Ao(t, (c = Vo(n) ? To : Mo.current)));
            var u = n.getDerivedStateFromProps,
              d =
                "function" === typeof u ||
                "function" === typeof a.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof a.componentWillReceiveProps) ||
              ((s !== i || l !== c) && Wr(t, a, i, c)),
              (Tr = !1);
            var h = t.memoizedState;
            (a.state = h),
              Gr(t, i, a, o),
              (l = t.memoizedState),
              s !== i || h !== l || Ro.current || Tr
                ? ("function" === typeof u &&
                    (Nr(t, n, u, i), (l = t.memoizedState)),
                  (s = Tr || Br(t, n, s, i, h, l, c))
                    ? (d ||
                        ("function" !== typeof a.UNSAFE_componentWillMount &&
                          "function" !== typeof a.componentWillMount) ||
                        ("function" === typeof a.componentWillMount &&
                          a.componentWillMount(),
                        "function" === typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      "function" === typeof a.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof a.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = i),
                      (t.memoizedState = l)),
                  (a.props = i),
                  (a.state = l),
                  (a.context = c),
                  (i = s))
                : ("function" === typeof a.componentDidMount &&
                    (t.flags |= 4194308),
                  (i = !1));
          } else {
            (a = t.stateNode),
              Vr(e, t),
              (s = t.memoizedProps),
              (c = t.type === t.elementType ? s : yr(t.type, s)),
              (a.props = c),
              (d = t.pendingProps),
              (h = a.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = kr(l))
                : (l = Ao(t, (l = Vo(n) ? To : Mo.current)));
            var p = n.getDerivedStateFromProps;
            (u =
              "function" === typeof p ||
              "function" === typeof a.getSnapshotBeforeUpdate) ||
              ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof a.componentWillReceiveProps) ||
              ((s !== d || h !== l) && Wr(t, a, i, l)),
              (Tr = !1),
              (h = t.memoizedState),
              (a.state = h),
              Gr(t, i, a, o);
            var f = t.memoizedState;
            s !== d || h !== f || Ro.current || Tr
              ? ("function" === typeof p &&
                  (Nr(t, n, p, i), (f = t.memoizedState)),
                (c = Tr || Br(t, n, c, i, h, f, l) || !1)
                  ? (u ||
                      ("function" !== typeof a.UNSAFE_componentWillUpdate &&
                        "function" !== typeof a.componentWillUpdate) ||
                      ("function" === typeof a.componentWillUpdate &&
                        a.componentWillUpdate(i, f, l),
                      "function" === typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(i, f, l)),
                    "function" === typeof a.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof a.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof a.componentDidUpdate ||
                      (s === e.memoizedProps && h === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof a.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && h === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = i),
                    (t.memoizedState = f)),
                (a.props = i),
                (a.state = f),
                (a.context = l),
                (i = c))
              : ("function" !== typeof a.componentDidUpdate ||
                  (s === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof a.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 1024),
                (i = !1));
          }
          return Ms(e, t, n, i, r, o);
        }
        function Ms(e, t, n, i, o, r) {
          ks(e, t);
          var a = 0 !== (128 & t.flags);
          if (!i && !a) return o && Go(t, n, !1), Ws(e, t, r);
          (i = t.stateNode), (bs.current = t);
          var s =
            a && "function" !== typeof n.getDerivedStateFromError
              ? null
              : i.render();
          return (
            (t.flags |= 1),
            null !== e && a
              ? ((t.child = Xr(t, e.child, null, r)),
                (t.child = Xr(t, null, s, r)))
              : Ss(e, t, s, r),
            (t.memoizedState = i.state),
            o && Go(t, n, !0),
            t.child
          );
        }
        function Rs(e) {
          var t = e.stateNode;
          t.pendingContext
            ? zo(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && zo(0, t.context, !1),
            oa(e, t.containerInfo);
        }
        function Ts(e, t, n, i, o) {
          return fr(), vr(o), (t.flags |= 256), Ss(e, t, n, i), t.child;
        }
        var As,
          Vs,
          Ls,
          zs,
          Is = { dehydrated: null, treeContext: null, retryLane: 0 };
        function js(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Gs(e, t, n) {
          var i,
            o = t.pendingProps,
            a = la.current,
            s = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((i = l) ||
              (i = (null === e || null !== e.memoizedState) && 0 !== (2 & a)),
            i
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (a |= 1),
            Oo(la, 1 & a),
            null === e)
          )
            return (
              ur(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = o.children),
                  (e = o.fallback),
                  s
                    ? ((o = t.mode),
                      (s = t.child),
                      (l = { mode: "hidden", children: l }),
                      0 === (1 & o) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = l))
                        : (s = jc(l, o, 0, null)),
                      (e = Ic(e, o, n, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = js(n)),
                      (t.memoizedState = Is),
                      e)
                    : Ds(t, l))
            );
          if (null !== (a = e.memoizedState) && null !== (i = a.dehydrated))
            return (function (e, t, n, i, o, a, s) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fs(e, t, s, (i = ds(Error(r(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((a = i.fallback),
                    (o = t.mode),
                    (i = jc(
                      { mode: "visible", children: i.children },
                      o,
                      0,
                      null
                    )),
                    ((a = Ic(a, o, s, null)).flags |= 2),
                    (i.return = t),
                    (a.return = t),
                    (i.sibling = a),
                    (t.child = i),
                    0 !== (1 & t.mode) && Xr(t, e.child, null, s),
                    (t.child.memoizedState = js(s)),
                    (t.memoizedState = Is),
                    a);
              if (0 === (1 & t.mode)) return Fs(e, t, s, null);
              if ("$!" === o.data) {
                if ((i = o.nextSibling && o.nextSibling.dataset))
                  var l = i.dgst;
                return (
                  (i = l), Fs(e, t, s, (i = ds((a = Error(r(419))), i, void 0)))
                );
              }
              if (((l = 0 !== (s & e.childLanes)), ws || l)) {
                if (null !== (i = Rl)) {
                  switch (s & -s) {
                    case 4:
                      o = 2;
                      break;
                    case 16:
                      o = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      o = 32;
                      break;
                    case 536870912:
                      o = 268435456;
                      break;
                    default:
                      o = 0;
                  }
                  0 !== (o = 0 !== (o & (i.suspendedLanes | s)) ? 0 : o) &&
                    o !== a.retryLane &&
                    ((a.retryLane = o), Rr(e, o), ic(i, e, o, -1));
                }
                return gc(), Fs(e, t, s, (i = ds(Error(r(421)))));
              }
              return "$?" === o.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ec.bind(null, e)),
                  (o._reactRetry = t),
                  null)
                : ((e = a.treeContext),
                  (or = co(o.nextSibling)),
                  (ir = t),
                  (rr = !0),
                  (ar = null),
                  null !== e &&
                    ((Qo[Ko++] = Xo),
                    (Qo[Ko++] = Zo),
                    (Qo[Ko++] = Yo),
                    (Xo = e.id),
                    (Zo = e.overflow),
                    (Yo = t)),
                  (t = Ds(t, i.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, l, o, i, a, n);
          if (s) {
            (s = o.fallback), (l = t.mode), (i = (a = e.child).sibling);
            var c = { mode: "hidden", children: o.children };
            return (
              0 === (1 & l) && t.child !== a
                ? (((o = t.child).childLanes = 0),
                  (o.pendingProps = c),
                  (t.deletions = null))
                : ((o = Lc(a, c)).subtreeFlags = 14680064 & a.subtreeFlags),
              null !== i
                ? (s = Lc(i, s))
                : ((s = Ic(s, l, n, null)).flags |= 2),
              (s.return = t),
              (o.return = t),
              (o.sibling = s),
              (t.child = o),
              (o = s),
              (s = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? js(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (s.memoizedState = l),
              (s.childLanes = e.childLanes & ~n),
              (t.memoizedState = Is),
              o
            );
          }
          return (
            (e = (s = e.child).sibling),
            (o = Lc(s, { mode: "visible", children: o.children })),
            0 === (1 & t.mode) && (o.lanes = n),
            (o.return = t),
            (o.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = o),
            (t.memoizedState = null),
            o
          );
        }
        function Ds(e, t) {
          return (
            ((t = jc(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Fs(e, t, n, i) {
          return (
            null !== i && vr(i),
            Xr(t, e.child, null, n),
            ((e = Ds(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ns(e, t, n) {
          e.lanes |= t;
          var i = e.alternate;
          null !== i && (i.lanes |= t), xr(e.return, t, n);
        }
        function Hs(e, t, n, i, o) {
          var r = e.memoizedState;
          null === r
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: i,
                tail: n,
                tailMode: o,
              })
            : ((r.isBackwards = t),
              (r.rendering = null),
              (r.renderingStartTime = 0),
              (r.last = i),
              (r.tail = n),
              (r.tailMode = o));
        }
        function Bs(e, t, n) {
          var i = t.pendingProps,
            o = i.revealOrder,
            r = i.tail;
          if ((Ss(e, t, i.children, n), 0 !== (2 & (i = la.current))))
            (i = (1 & i) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ns(e, n, t);
                else if (19 === e.tag) Ns(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            i &= 1;
          }
          if ((Oo(la, i), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === ca(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  Hs(t, !1, o, n, r);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === ca(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Hs(t, !0, n, null, r);
                break;
              case "together":
                Hs(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Us(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Ws(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (jl |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(r(153));
          if (null !== t.child) {
            for (
              n = Lc((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Lc(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function $s(e, t) {
          if (!rr)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var i = null; null !== n; )
                  null !== n.alternate && (i = n), (n = n.sibling);
                null === i
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (i.sibling = null);
            }
        }
        function qs(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            i = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (i |= 14680064 & o.subtreeFlags),
                (i |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (i |= o.subtreeFlags),
                (i |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= i), (e.childLanes = n), t;
        }
        function Qs(e, t, n) {
          var i = t.pendingProps;
          switch ((nr(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return qs(t), null;
            case 1:
            case 17:
              return Vo(t.type) && Lo(), qs(t), null;
            case 3:
              return (
                (i = t.stateNode),
                ra(),
                ko(Ro),
                ko(Mo),
                da(),
                i.pendingContext &&
                  ((i.context = i.pendingContext), (i.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (hr(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ar && (sc(ar), (ar = null)))),
                Vs(e, t),
                qs(t),
                null
              );
            case 5:
              sa(t);
              var o = ia(na.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ls(e, t, n, i, o),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!i) {
                  if (null === t.stateNode) throw Error(r(166));
                  return qs(t), null;
                }
                if (((e = ia(ea.current)), hr(t))) {
                  (i = t.stateNode), (n = t.type);
                  var a = t.memoizedProps;
                  switch (
                    ((i[po] = t), (i[fo] = a), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Di("cancel", i), Di("close", i);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Di("load", i);
                      break;
                    case "video":
                    case "audio":
                      for (o = 0; o < zi.length; o++) Di(zi[o], i);
                      break;
                    case "source":
                      Di("error", i);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Di("error", i), Di("load", i);
                      break;
                    case "details":
                      Di("toggle", i);
                      break;
                    case "input":
                      Y(i, a), Di("invalid", i);
                      break;
                    case "select":
                      (i._wrapperState = { wasMultiple: !!a.multiple }),
                        Di("invalid", i);
                      break;
                    case "textarea":
                      oe(i, a), Di("invalid", i);
                  }
                  for (var l in (me(n, a), (o = null), a))
                    if (a.hasOwnProperty(l)) {
                      var c = a[l];
                      "children" === l
                        ? "string" === typeof c
                          ? i.textContent !== c &&
                            (!0 !== a.suppressHydrationWarning &&
                              Zi(i.textContent, c, e),
                            (o = ["children", c]))
                          : "number" === typeof c &&
                            i.textContent !== "" + c &&
                            (!0 !== a.suppressHydrationWarning &&
                              Zi(i.textContent, c, e),
                            (o = ["children", "" + c]))
                        : s.hasOwnProperty(l) &&
                          null != c &&
                          "onScroll" === l &&
                          Di("scroll", i);
                    }
                  switch (n) {
                    case "input":
                      $(i), J(i, a, !0);
                      break;
                    case "textarea":
                      $(i), ae(i);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof a.onClick && (i.onclick = Ji);
                  }
                  (i = o), (t.updateQueue = i), null !== i && (t.flags |= 4);
                } else {
                  (l = 9 === o.nodeType ? o : o.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = se(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = l.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof i.is
                        ? (e = l.createElement(n, { is: i.is }))
                        : ((e = l.createElement(n)),
                          "select" === n &&
                            ((l = e),
                            i.multiple
                              ? (l.multiple = !0)
                              : i.size && (l.size = i.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[po] = t),
                    (e[fo] = i),
                    As(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((l = be(n, i)), n)) {
                      case "dialog":
                        Di("cancel", e), Di("close", e), (o = i);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Di("load", e), (o = i);
                        break;
                      case "video":
                      case "audio":
                        for (o = 0; o < zi.length; o++) Di(zi[o], e);
                        o = i;
                        break;
                      case "source":
                        Di("error", e), (o = i);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Di("error", e), Di("load", e), (o = i);
                        break;
                      case "details":
                        Di("toggle", e), (o = i);
                        break;
                      case "input":
                        Y(e, i), (o = K(e, i)), Di("invalid", e);
                        break;
                      case "option":
                      default:
                        o = i;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!i.multiple }),
                          (o = j({}, i, { value: void 0 })),
                          Di("invalid", e);
                        break;
                      case "textarea":
                        oe(e, i), (o = ie(e, i)), Di("invalid", e);
                    }
                    for (a in (me(n, o), (c = o)))
                      if (c.hasOwnProperty(a)) {
                        var u = c[a];
                        "style" === a
                          ? ge(e, u)
                          : "dangerouslySetInnerHTML" === a
                          ? null != (u = u ? u.__html : void 0) && de(e, u)
                          : "children" === a
                          ? "string" === typeof u
                            ? ("textarea" !== n || "" !== u) && he(e, u)
                            : "number" === typeof u && he(e, "" + u)
                          : "suppressContentEditableWarning" !== a &&
                            "suppressHydrationWarning" !== a &&
                            "autoFocus" !== a &&
                            (s.hasOwnProperty(a)
                              ? null != u && "onScroll" === a && Di("scroll", e)
                              : null != u && b(e, a, u, l));
                      }
                    switch (n) {
                      case "input":
                        $(e), J(e, i, !1);
                        break;
                      case "textarea":
                        $(e), ae(e);
                        break;
                      case "option":
                        null != i.value &&
                          e.setAttribute("value", "" + U(i.value));
                        break;
                      case "select":
                        (e.multiple = !!i.multiple),
                          null != (a = i.value)
                            ? ne(e, !!i.multiple, a, !1)
                            : null != i.defaultValue &&
                              ne(e, !!i.multiple, i.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof o.onClick && (e.onclick = Ji);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        i = !!i.autoFocus;
                        break e;
                      case "img":
                        i = !0;
                        break e;
                      default:
                        i = !1;
                    }
                  }
                  i && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return qs(t), null;
            case 6:
              if (e && null != t.stateNode) zs(e, t, e.memoizedProps, i);
              else {
                if ("string" !== typeof i && null === t.stateNode)
                  throw Error(r(166));
                if (((n = ia(na.current)), ia(ea.current), hr(t))) {
                  if (
                    ((i = t.stateNode),
                    (n = t.memoizedProps),
                    (i[po] = t),
                    (a = i.nodeValue !== n) && null !== (e = ir))
                  )
                    switch (e.tag) {
                      case 3:
                        Zi(i.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zi(i.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  a && (t.flags |= 4);
                } else
                  ((i = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    i
                  ))[po] = t),
                    (t.stateNode = i);
              }
              return qs(t), null;
            case 13:
              if (
                (ko(la),
                (i = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  rr &&
                  null !== or &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  pr(), fr(), (t.flags |= 98560), (a = !1);
                else if (((a = hr(t)), null !== i && null !== i.dehydrated)) {
                  if (null === e) {
                    if (!a) throw Error(r(318));
                    if (
                      !(a =
                        null !== (a = t.memoizedState) ? a.dehydrated : null)
                    )
                      throw Error(r(317));
                    a[po] = t;
                  } else
                    fr(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  qs(t), (a = !1);
                } else null !== ar && (sc(ar), (ar = null)), (a = !0);
                if (!a) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((i = null !== i) !==
                    (null !== e && null !== e.memoizedState) &&
                    i &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & la.current)
                        ? 0 === zl && (zl = 3)
                        : gc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  qs(t),
                  null);
            case 4:
              return (
                ra(),
                Vs(e, t),
                null === e && Hi(t.stateNode.containerInfo),
                qs(t),
                null
              );
            case 10:
              return Pr(t.type._context), qs(t), null;
            case 19:
              if ((ko(la), null === (a = t.memoizedState))) return qs(t), null;
              if (((i = 0 !== (128 & t.flags)), null === (l = a.rendering)))
                if (i) $s(a, !1);
                else {
                  if (0 !== zl || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = ca(e))) {
                        for (
                          t.flags |= 128,
                            $s(a, !1),
                            null !== (i = l.updateQueue) &&
                              ((t.updateQueue = i), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            i = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = i),
                            ((a = n).flags &= 14680066),
                            null === (l = a.alternate)
                              ? ((a.childLanes = 0),
                                (a.lanes = e),
                                (a.child = null),
                                (a.subtreeFlags = 0),
                                (a.memoizedProps = null),
                                (a.memoizedState = null),
                                (a.updateQueue = null),
                                (a.dependencies = null),
                                (a.stateNode = null))
                              : ((a.childLanes = l.childLanes),
                                (a.lanes = l.lanes),
                                (a.child = l.child),
                                (a.subtreeFlags = 0),
                                (a.deletions = null),
                                (a.memoizedProps = l.memoizedProps),
                                (a.memoizedState = l.memoizedState),
                                (a.updateQueue = l.updateQueue),
                                (a.type = l.type),
                                (e = l.dependencies),
                                (a.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Oo(la, (1 & la.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== a.tail &&
                    Xe() > Bl &&
                    ((t.flags |= 128),
                    (i = !0),
                    $s(a, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!i)
                  if (null !== (e = ca(l))) {
                    if (
                      ((t.flags |= 128),
                      (i = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      $s(a, !0),
                      null === a.tail &&
                        "hidden" === a.tailMode &&
                        !l.alternate &&
                        !rr)
                    )
                      return qs(t), null;
                  } else
                    2 * Xe() - a.renderingStartTime > Bl &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (i = !0),
                      $s(a, !1),
                      (t.lanes = 4194304));
                a.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = a.last) ? (n.sibling = l) : (t.child = l),
                    (a.last = l));
              }
              return null !== a.tail
                ? ((t = a.tail),
                  (a.rendering = t),
                  (a.tail = t.sibling),
                  (a.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = la.current),
                  Oo(la, i ? (1 & n) | 2 : 1 & n),
                  t)
                : (qs(t), null);
            case 22:
            case 23:
              return (
                hc(),
                (i = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== i &&
                  (t.flags |= 8192),
                i && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Vl) &&
                    (qs(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : qs(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(r(156, t.tag));
        }
        function Ks(e, t) {
          switch ((nr(t), t.tag)) {
            case 1:
              return (
                Vo(t.type) && Lo(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ra(),
                ko(Ro),
                ko(Mo),
                da(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return sa(t), null;
            case 13:
              if (
                (ko(la),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(r(340));
                fr();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return ko(la), null;
            case 4:
              return ra(), null;
            case 10:
              return Pr(t.type._context), null;
            case 22:
            case 23:
              return hc(), null;
            default:
              return null;
          }
        }
        (As = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Vs = function () {}),
          (Ls = function (e, t, n, i) {
            var o = e.memoizedProps;
            if (o !== i) {
              (e = t.stateNode), ia(ea.current);
              var r,
                a = null;
              switch (n) {
                case "input":
                  (o = K(e, o)), (i = K(e, i)), (a = []);
                  break;
                case "select":
                  (o = j({}, o, { value: void 0 })),
                    (i = j({}, i, { value: void 0 })),
                    (a = []);
                  break;
                case "textarea":
                  (o = ie(e, o)), (i = ie(e, i)), (a = []);
                  break;
                default:
                  "function" !== typeof o.onClick &&
                    "function" === typeof i.onClick &&
                    (e.onclick = Ji);
              }
              for (u in (me(n, i), (n = null), o))
                if (!i.hasOwnProperty(u) && o.hasOwnProperty(u) && null != o[u])
                  if ("style" === u) {
                    var l = o[u];
                    for (r in l)
                      l.hasOwnProperty(r) && (n || (n = {}), (n[r] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== u &&
                      "children" !== u &&
                      "suppressContentEditableWarning" !== u &&
                      "suppressHydrationWarning" !== u &&
                      "autoFocus" !== u &&
                      (s.hasOwnProperty(u)
                        ? a || (a = [])
                        : (a = a || []).push(u, null));
              for (u in i) {
                var c = i[u];
                if (
                  ((l = null != o ? o[u] : void 0),
                  i.hasOwnProperty(u) && c !== l && (null != c || null != l))
                )
                  if ("style" === u)
                    if (l) {
                      for (r in l)
                        !l.hasOwnProperty(r) ||
                          (c && c.hasOwnProperty(r)) ||
                          (n || (n = {}), (n[r] = ""));
                      for (r in c)
                        c.hasOwnProperty(r) &&
                          l[r] !== c[r] &&
                          (n || (n = {}), (n[r] = c[r]));
                    } else n || (a || (a = []), a.push(u, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === u
                      ? ((c = c ? c.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != c && l !== c && (a = a || []).push(u, c))
                      : "children" === u
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (a = a || []).push(u, "" + c)
                      : "suppressContentEditableWarning" !== u &&
                        "suppressHydrationWarning" !== u &&
                        (s.hasOwnProperty(u)
                          ? (null != c && "onScroll" === u && Di("scroll", e),
                            a || l === c || (a = []))
                          : (a = a || []).push(u, c));
              }
              n && (a = a || []).push("style", n);
              var u = a;
              (t.updateQueue = u) && (t.flags |= 4);
            }
          }),
          (zs = function (e, t, n, i) {
            n !== i && (t.flags |= 4);
          });
        var Ys = !1,
          Xs = !1,
          Zs = "function" === typeof WeakSet ? WeakSet : Set,
          Js = null;
        function el(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (i) {
                Cc(e, t, i);
              }
            else n.current = null;
        }
        function tl(e, t, n) {
          try {
            n();
          } catch (i) {
            Cc(e, t, i);
          }
        }
        var nl = !1;
        function il(e, t, n) {
          var i = t.updateQueue;
          if (null !== (i = null !== i ? i.lastEffect : null)) {
            var o = (i = i.next);
            do {
              if ((o.tag & e) === e) {
                var r = o.destroy;
                (o.destroy = void 0), void 0 !== r && tl(t, n, r);
              }
              o = o.next;
            } while (o !== i);
          }
        }
        function ol(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var i = n.create;
                n.destroy = i();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function rl(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function al(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), al(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[po],
              delete t[fo],
              delete t[go],
              delete t[yo],
              delete t[mo]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function sl(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ll(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || sl(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function cl(e, t, n) {
          var i = e.tag;
          if (5 === i || 6 === i)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Ji));
          else if (4 !== i && null !== (e = e.child))
            for (cl(e, t, n), e = e.sibling; null !== e; )
              cl(e, t, n), (e = e.sibling);
        }
        function ul(e, t, n) {
          var i = e.tag;
          if (5 === i || 6 === i)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== i && null !== (e = e.child))
            for (ul(e, t, n), e = e.sibling; null !== e; )
              ul(e, t, n), (e = e.sibling);
        }
        var dl = null,
          hl = !1;
        function pl(e, t, n) {
          for (n = n.child; null !== n; ) fl(e, t, n), (n = n.sibling);
        }
        function fl(e, t, n) {
          if (rt && "function" === typeof rt.onCommitFiberUnmount)
            try {
              rt.onCommitFiberUnmount(ot, n);
            } catch (s) {}
          switch (n.tag) {
            case 5:
              Xs || el(n, t);
            case 6:
              var i = dl,
                o = hl;
              (dl = null),
                pl(e, t, n),
                (hl = o),
                null !== (dl = i) &&
                  (hl
                    ? ((e = dl),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : dl.removeChild(n.stateNode));
              break;
            case 18:
              null !== dl &&
                (hl
                  ? ((e = dl),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? lo(e.parentNode, n)
                      : 1 === e.nodeType && lo(e, n),
                    Ht(e))
                  : lo(dl, n.stateNode));
              break;
            case 4:
              (i = dl),
                (o = hl),
                (dl = n.stateNode.containerInfo),
                (hl = !0),
                pl(e, t, n),
                (dl = i),
                (hl = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xs &&
                null !== (i = n.updateQueue) &&
                null !== (i = i.lastEffect)
              ) {
                o = i = i.next;
                do {
                  var r = o,
                    a = r.destroy;
                  (r = r.tag),
                    void 0 !== a &&
                      (0 !== (2 & r) || 0 !== (4 & r)) &&
                      tl(n, t, a),
                    (o = o.next);
                } while (o !== i);
              }
              pl(e, t, n);
              break;
            case 1:
              if (
                !Xs &&
                (el(n, t),
                "function" === typeof (i = n.stateNode).componentWillUnmount)
              )
                try {
                  (i.props = n.memoizedProps),
                    (i.state = n.memoizedState),
                    i.componentWillUnmount();
                } catch (s) {
                  Cc(n, t, s);
                }
              pl(e, t, n);
              break;
            case 21:
              pl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xs = (i = Xs) || null !== n.memoizedState),
                  pl(e, t, n),
                  (Xs = i))
                : pl(e, t, n);
              break;
            default:
              pl(e, t, n);
          }
        }
        function vl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Zs()),
              t.forEach(function (t) {
                var i = Mc.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(i, i));
              });
          }
        }
        function gl(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var i = 0; i < n.length; i++) {
              var o = n[i];
              try {
                var a = e,
                  s = t,
                  l = s;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (dl = l.stateNode), (hl = !1);
                      break e;
                    case 3:
                    case 4:
                      (dl = l.stateNode.containerInfo), (hl = !0);
                      break e;
                  }
                  l = l.return;
                }
                if (null === dl) throw Error(r(160));
                fl(a, s, o), (dl = null), (hl = !1);
                var c = o.alternate;
                null !== c && (c.return = null), (o.return = null);
              } catch (u) {
                Cc(o, t, u);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) yl(t, e), (t = t.sibling);
        }
        function yl(e, t) {
          var n = e.alternate,
            i = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gl(t, e), ml(e), 4 & i)) {
                try {
                  il(3, e, e.return), ol(3, e);
                } catch (g) {
                  Cc(e, e.return, g);
                }
                try {
                  il(5, e, e.return);
                } catch (g) {
                  Cc(e, e.return, g);
                }
              }
              break;
            case 1:
              gl(t, e), ml(e), 512 & i && null !== n && el(n, n.return);
              break;
            case 5:
              if (
                (gl(t, e),
                ml(e),
                512 & i && null !== n && el(n, n.return),
                32 & e.flags)
              ) {
                var o = e.stateNode;
                try {
                  he(o, "");
                } catch (g) {
                  Cc(e, e.return, g);
                }
              }
              if (4 & i && null != (o = e.stateNode)) {
                var a = e.memoizedProps,
                  s = null !== n ? n.memoizedProps : a,
                  l = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    "input" === l &&
                      "radio" === a.type &&
                      null != a.name &&
                      X(o, a),
                      be(l, s);
                    var u = be(l, a);
                    for (s = 0; s < c.length; s += 2) {
                      var d = c[s],
                        h = c[s + 1];
                      "style" === d
                        ? ge(o, h)
                        : "dangerouslySetInnerHTML" === d
                        ? de(o, h)
                        : "children" === d
                        ? he(o, h)
                        : b(o, d, h, u);
                    }
                    switch (l) {
                      case "input":
                        Z(o, a);
                        break;
                      case "textarea":
                        re(o, a);
                        break;
                      case "select":
                        var p = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!a.multiple;
                        var f = a.value;
                        null != f
                          ? ne(o, !!a.multiple, f, !1)
                          : p !== !!a.multiple &&
                            (null != a.defaultValue
                              ? ne(o, !!a.multiple, a.defaultValue, !0)
                              : ne(o, !!a.multiple, a.multiple ? [] : "", !1));
                    }
                    o[fo] = a;
                  } catch (g) {
                    Cc(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((gl(t, e), ml(e), 4 & i)) {
                if (null === e.stateNode) throw Error(r(162));
                (o = e.stateNode), (a = e.memoizedProps);
                try {
                  o.nodeValue = a;
                } catch (g) {
                  Cc(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (gl(t, e),
                ml(e),
                4 & i && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ht(t.containerInfo);
                } catch (g) {
                  Cc(e, e.return, g);
                }
              break;
            case 4:
            default:
              gl(t, e), ml(e);
              break;
            case 13:
              gl(t, e),
                ml(e),
                8192 & (o = e.child).flags &&
                  ((a = null !== o.memoizedState),
                  (o.stateNode.isHidden = a),
                  !a ||
                    (null !== o.alternate &&
                      null !== o.alternate.memoizedState) ||
                    (Hl = Xe())),
                4 & i && vl(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xs = (u = Xs) || d), gl(t, e), (Xs = u))
                  : gl(t, e),
                ml(e),
                8192 & i)
              ) {
                if (
                  ((u = null !== e.memoizedState),
                  (e.stateNode.isHidden = u) && !d && 0 !== (1 & e.mode))
                )
                  for (Js = e, d = e.child; null !== d; ) {
                    for (h = Js = d; null !== Js; ) {
                      switch (((f = (p = Js).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          il(4, p, p.return);
                          break;
                        case 1:
                          el(p, p.return);
                          var v = p.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (i = p), (n = p.return);
                            try {
                              (t = i),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (g) {
                              Cc(i, n, g);
                            }
                          }
                          break;
                        case 5:
                          el(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            _l(h);
                            continue;
                          }
                      }
                      null !== f ? ((f.return = p), (Js = f)) : _l(h);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, h = e; ; ) {
                  if (5 === h.tag) {
                    if (null === d) {
                      d = h;
                      try {
                        (o = h.stateNode),
                          u
                            ? "function" === typeof (a = o.style).setProperty
                              ? a.setProperty("display", "none", "important")
                              : (a.display = "none")
                            : ((l = h.stateNode),
                              (s =
                                void 0 !== (c = h.memoizedProps.style) &&
                                null !== c &&
                                c.hasOwnProperty("display")
                                  ? c.display
                                  : null),
                              (l.style.display = ve("display", s)));
                      } catch (g) {
                        Cc(e, e.return, g);
                      }
                    }
                  } else if (6 === h.tag) {
                    if (null === d)
                      try {
                        h.stateNode.nodeValue = u ? "" : h.memoizedProps;
                      } catch (g) {
                        Cc(e, e.return, g);
                      }
                  } else if (
                    ((22 !== h.tag && 23 !== h.tag) ||
                      null === h.memoizedState ||
                      h === e) &&
                    null !== h.child
                  ) {
                    (h.child.return = h), (h = h.child);
                    continue;
                  }
                  if (h === e) break e;
                  for (; null === h.sibling; ) {
                    if (null === h.return || h.return === e) break e;
                    d === h && (d = null), (h = h.return);
                  }
                  d === h && (d = null),
                    (h.sibling.return = h.return),
                    (h = h.sibling);
                }
              }
              break;
            case 19:
              gl(t, e), ml(e), 4 & i && vl(e);
            case 21:
          }
        }
        function ml(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (sl(n)) {
                    var i = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(r(160));
              }
              switch (i.tag) {
                case 5:
                  var o = i.stateNode;
                  32 & i.flags && (he(o, ""), (i.flags &= -33)),
                    ul(e, ll(e), o);
                  break;
                case 3:
                case 4:
                  var a = i.stateNode.containerInfo;
                  cl(e, ll(e), a);
                  break;
                default:
                  throw Error(r(161));
              }
            } catch (s) {
              Cc(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bl(e, t, n) {
          (Js = e), wl(e, t, n);
        }
        function wl(e, t, n) {
          for (var i = 0 !== (1 & e.mode); null !== Js; ) {
            var o = Js,
              r = o.child;
            if (22 === o.tag && i) {
              var a = null !== o.memoizedState || Ys;
              if (!a) {
                var s = o.alternate,
                  l = (null !== s && null !== s.memoizedState) || Xs;
                s = Ys;
                var c = Xs;
                if (((Ys = a), (Xs = l) && !c))
                  for (Js = o; null !== Js; )
                    (l = (a = Js).child),
                      22 === a.tag && null !== a.memoizedState
                        ? Pl(o)
                        : null !== l
                        ? ((l.return = a), (Js = l))
                        : Pl(o);
                for (; null !== r; ) (Js = r), wl(r, t, n), (r = r.sibling);
                (Js = o), (Ys = s), (Xs = c);
              }
              Sl(e);
            } else
              0 !== (8772 & o.subtreeFlags) && null !== r
                ? ((r.return = o), (Js = r))
                : Sl(e);
          }
        }
        function Sl(e) {
          for (; null !== Js; ) {
            var t = Js;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xs || ol(5, t);
                      break;
                    case 1:
                      var i = t.stateNode;
                      if (4 & t.flags && !Xs)
                        if (null === n) i.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : yr(t.type, n.memoizedProps);
                          i.componentDidUpdate(
                            o,
                            n.memoizedState,
                            i.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var a = t.updateQueue;
                      null !== a && Dr(t, a, i);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Dr(t, s, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var u = t.alternate;
                        if (null !== u) {
                          var d = u.memoizedState;
                          if (null !== d) {
                            var h = d.dehydrated;
                            null !== h && Ht(h);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(r(163));
                  }
                Xs || (512 & t.flags && rl(t));
              } catch (p) {
                Cc(t, t.return, p);
              }
            }
            if (t === e) {
              Js = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Js = n);
              break;
            }
            Js = t.return;
          }
        }
        function _l(e) {
          for (; null !== Js; ) {
            var t = Js;
            if (t === e) {
              Js = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Js = n);
              break;
            }
            Js = t.return;
          }
        }
        function Pl(e) {
          for (; null !== Js; ) {
            var t = Js;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ol(4, t);
                  } catch (l) {
                    Cc(t, n, l);
                  }
                  break;
                case 1:
                  var i = t.stateNode;
                  if ("function" === typeof i.componentDidMount) {
                    var o = t.return;
                    try {
                      i.componentDidMount();
                    } catch (l) {
                      Cc(t, o, l);
                    }
                  }
                  var r = t.return;
                  try {
                    rl(t);
                  } catch (l) {
                    Cc(t, r, l);
                  }
                  break;
                case 5:
                  var a = t.return;
                  try {
                    rl(t);
                  } catch (l) {
                    Cc(t, a, l);
                  }
              }
            } catch (l) {
              Cc(t, t.return, l);
            }
            if (t === e) {
              Js = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              (s.return = t.return), (Js = s);
              break;
            }
            Js = t.return;
          }
        }
        var xl,
          Cl = Math.ceil,
          kl = w.ReactCurrentDispatcher,
          Ol = w.ReactCurrentOwner,
          El = w.ReactCurrentBatchConfig,
          Ml = 0,
          Rl = null,
          Tl = null,
          Al = 0,
          Vl = 0,
          Ll = Co(0),
          zl = 0,
          Il = null,
          jl = 0,
          Gl = 0,
          Dl = 0,
          Fl = null,
          Nl = null,
          Hl = 0,
          Bl = 1 / 0,
          Ul = null,
          Wl = !1,
          $l = null,
          ql = null,
          Ql = !1,
          Kl = null,
          Yl = 0,
          Xl = 0,
          Zl = null,
          Jl = -1,
          ec = 0;
        function tc() {
          return 0 !== (6 & Ml) ? Xe() : -1 !== Jl ? Jl : (Jl = Xe());
        }
        function nc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ml) && 0 !== Al
            ? Al & -Al
            : null !== gr.transition
            ? (0 === ec && (ec = vt()), ec)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function ic(e, t, n, i) {
          if (50 < Xl) throw ((Xl = 0), (Zl = null), Error(r(185)));
          yt(e, n, i),
            (0 !== (2 & Ml) && e === Rl) ||
              (e === Rl && (0 === (2 & Ml) && (Gl |= n), 4 === zl && lc(e, Al)),
              oc(e, i),
              1 === n &&
                0 === Ml &&
                0 === (1 & t.mode) &&
                ((Bl = Xe() + 500), Fo && Bo()));
        }
        function oc(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                i = e.pingedLanes,
                o = e.expirationTimes,
                r = e.pendingLanes;
              0 < r;

            ) {
              var a = 31 - at(r),
                s = 1 << a,
                l = o[a];
              -1 === l
                ? (0 !== (s & n) && 0 === (s & i)) || (o[a] = pt(s, t))
                : l <= t && (e.expiredLanes |= s),
                (r &= ~s);
            }
          })(e, t);
          var i = ht(e, e === Rl ? Al : 0);
          if (0 === i)
            null !== n && Qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = i & -i), e.callbackPriority !== t)) {
            if ((null != n && Qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fo = !0), Ho(e);
                  })(cc.bind(null, e))
                : Ho(cc.bind(null, e)),
                ao(function () {
                  0 === (6 & Ml) && Bo();
                }),
                (n = null);
            else {
              switch (wt(i)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = it;
              }
              n = Rc(n, rc.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function rc(e, t) {
          if (((Jl = -1), (ec = 0), 0 !== (6 & Ml))) throw Error(r(327));
          var n = e.callbackNode;
          if (Pc() && e.callbackNode !== n) return null;
          var i = ht(e, e === Rl ? Al : 0);
          if (0 === i) return null;
          if (0 !== (30 & i) || 0 !== (i & e.expiredLanes) || t) t = yc(e, i);
          else {
            t = i;
            var o = Ml;
            Ml |= 2;
            var a = vc();
            for (
              (Rl === e && Al === t) ||
              ((Ul = null), (Bl = Xe() + 500), pc(e, t));
              ;

            )
              try {
                bc();
                break;
              } catch (l) {
                fc(e, l);
              }
            _r(),
              (kl.current = a),
              (Ml = o),
              null !== Tl ? (t = 0) : ((Rl = null), (Al = 0), (t = zl));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (o = ft(e)) && ((i = o), (t = ac(e, o))),
              1 === t)
            )
              throw ((n = Il), pc(e, 0), lc(e, i), oc(e, Xe()), n);
            if (6 === t) lc(e, i);
            else {
              if (
                ((o = e.current.alternate),
                0 === (30 & i) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var i = 0; i < n.length; i++) {
                            var o = n[i],
                              r = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!si(r(), o)) return !1;
                            } catch (s) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) &&
                  (2 === (t = yc(e, i)) &&
                    0 !== (a = ft(e)) &&
                    ((i = a), (t = ac(e, a))),
                  1 === t))
              )
                throw ((n = Il), pc(e, 0), lc(e, i), oc(e, Xe()), n);
              switch (((e.finishedWork = o), (e.finishedLanes = i), t)) {
                case 0:
                case 1:
                  throw Error(r(345));
                case 2:
                case 5:
                  _c(e, Nl, Ul);
                  break;
                case 3:
                  if (
                    (lc(e, i),
                    (130023424 & i) === i && 10 < (t = Hl + 500 - Xe()))
                  ) {
                    if (0 !== ht(e, 0)) break;
                    if (((o = e.suspendedLanes) & i) !== i) {
                      tc(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = io(_c.bind(null, e, Nl, Ul), t);
                    break;
                  }
                  _c(e, Nl, Ul);
                  break;
                case 4:
                  if ((lc(e, i), (4194240 & i) === i)) break;
                  for (t = e.eventTimes, o = -1; 0 < i; ) {
                    var s = 31 - at(i);
                    (a = 1 << s), (s = t[s]) > o && (o = s), (i &= ~a);
                  }
                  if (
                    ((i = o),
                    10 <
                      (i =
                        (120 > (i = Xe() - i)
                          ? 120
                          : 480 > i
                          ? 480
                          : 1080 > i
                          ? 1080
                          : 1920 > i
                          ? 1920
                          : 3e3 > i
                          ? 3e3
                          : 4320 > i
                          ? 4320
                          : 1960 * Cl(i / 1960)) - i))
                  ) {
                    e.timeoutHandle = io(_c.bind(null, e, Nl, Ul), i);
                    break;
                  }
                  _c(e, Nl, Ul);
                  break;
                default:
                  throw Error(r(329));
              }
            }
          }
          return oc(e, Xe()), e.callbackNode === n ? rc.bind(null, e) : null;
        }
        function ac(e, t) {
          var n = Fl;
          return (
            e.current.memoizedState.isDehydrated && (pc(e, t).flags |= 256),
            2 !== (e = yc(e, t)) && ((t = Nl), (Nl = n), null !== t && sc(t)),
            e
          );
        }
        function sc(e) {
          null === Nl ? (Nl = e) : Nl.push.apply(Nl, e);
        }
        function lc(e, t) {
          for (
            t &= ~Dl,
              t &= ~Gl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - at(t),
              i = 1 << n;
            (e[n] = -1), (t &= ~i);
          }
        }
        function cc(e) {
          if (0 !== (6 & Ml)) throw Error(r(327));
          Pc();
          var t = ht(e, 0);
          if (0 === (1 & t)) return oc(e, Xe()), null;
          var n = yc(e, t);
          if (0 !== e.tag && 2 === n) {
            var i = ft(e);
            0 !== i && ((t = i), (n = ac(e, i)));
          }
          if (1 === n) throw ((n = Il), pc(e, 0), lc(e, t), oc(e, Xe()), n);
          if (6 === n) throw Error(r(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            _c(e, Nl, Ul),
            oc(e, Xe()),
            null
          );
        }
        function uc(e, t) {
          var n = Ml;
          Ml |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ml = n) && ((Bl = Xe() + 500), Fo && Bo());
          }
        }
        function dc(e) {
          null !== Kl && 0 === Kl.tag && 0 === (6 & Ml) && Pc();
          var t = Ml;
          Ml |= 1;
          var n = El.transition,
            i = bt;
          try {
            if (((El.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = i), (El.transition = n), 0 === (6 & (Ml = t)) && Bo();
          }
        }
        function hc() {
          (Vl = Ll.current), ko(Ll);
        }
        function pc(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), oo(n)), null !== Tl))
            for (n = Tl.return; null !== n; ) {
              var i = n;
              switch ((nr(i), i.tag)) {
                case 1:
                  null !== (i = i.type.childContextTypes) &&
                    void 0 !== i &&
                    Lo();
                  break;
                case 3:
                  ra(), ko(Ro), ko(Mo), da();
                  break;
                case 5:
                  sa(i);
                  break;
                case 4:
                  ra();
                  break;
                case 13:
                case 19:
                  ko(la);
                  break;
                case 10:
                  Pr(i.type._context);
                  break;
                case 22:
                case 23:
                  hc();
              }
              n = n.return;
            }
          if (
            ((Rl = e),
            (Tl = e = Lc(e.current, null)),
            (Al = Vl = t),
            (zl = 0),
            (Il = null),
            (Dl = Gl = jl = 0),
            (Nl = Fl = null),
            null !== Or)
          ) {
            for (t = 0; t < Or.length; t++)
              if (null !== (i = (n = Or[t]).interleaved)) {
                n.interleaved = null;
                var o = i.next,
                  r = n.pending;
                if (null !== r) {
                  var a = r.next;
                  (r.next = o), (i.next = a);
                }
                n.pending = i;
              }
            Or = null;
          }
          return e;
        }
        function fc(e, t) {
          for (;;) {
            var n = Tl;
            try {
              if ((_r(), (ha.current = as), ma)) {
                for (var i = va.memoizedState; null !== i; ) {
                  var o = i.queue;
                  null !== o && (o.pending = null), (i = i.next);
                }
                ma = !1;
              }
              if (
                ((fa = 0),
                (ya = ga = va = null),
                (ba = !1),
                (wa = 0),
                (Ol.current = null),
                null === n || null === n.return)
              ) {
                (zl = 1), (Il = t), (Tl = null);
                break;
              }
              e: {
                var a = e,
                  s = n.return,
                  l = n,
                  c = t;
                if (
                  ((t = Al),
                  (l.flags |= 32768),
                  null !== c &&
                    "object" === typeof c &&
                    "function" === typeof c.then)
                ) {
                  var u = c,
                    d = l,
                    h = d.tag;
                  if (0 === (1 & d.mode) && (0 === h || 11 === h || 15 === h)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var f = ys(s);
                  if (null !== f) {
                    (f.flags &= -257),
                      ms(f, s, l, 0, t),
                      1 & f.mode && gs(a, u, t),
                      (c = u);
                    var v = (t = f).updateQueue;
                    if (null === v) {
                      var g = new Set();
                      g.add(c), (t.updateQueue = g);
                    } else v.add(c);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    gs(a, u, t), gc();
                    break e;
                  }
                  c = Error(r(426));
                } else if (rr && 1 & l.mode) {
                  var y = ys(s);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      ms(y, s, l, 0, t),
                      vr(us(c, l));
                    break e;
                  }
                }
                (a = c = us(c, l)),
                  4 !== zl && (zl = 2),
                  null === Fl ? (Fl = [a]) : Fl.push(a),
                  (a = s);
                do {
                  switch (a.tag) {
                    case 3:
                      (a.flags |= 65536),
                        (t &= -t),
                        (a.lanes |= t),
                        jr(a, fs(0, c, t));
                      break e;
                    case 1:
                      l = c;
                      var m = a.type,
                        b = a.stateNode;
                      if (
                        0 === (128 & a.flags) &&
                        ("function" === typeof m.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === ql || !ql.has(b))))
                      ) {
                        (a.flags |= 65536),
                          (t &= -t),
                          (a.lanes |= t),
                          jr(a, vs(a, l, t));
                        break e;
                      }
                  }
                  a = a.return;
                } while (null !== a);
              }
              Sc(n);
            } catch (w) {
              (t = w), Tl === n && null !== n && (Tl = n = n.return);
              continue;
            }
            break;
          }
        }
        function vc() {
          var e = kl.current;
          return (kl.current = as), null === e ? as : e;
        }
        function gc() {
          (0 !== zl && 3 !== zl && 2 !== zl) || (zl = 4),
            null === Rl ||
              (0 === (268435455 & jl) && 0 === (268435455 & Gl)) ||
              lc(Rl, Al);
        }
        function yc(e, t) {
          var n = Ml;
          Ml |= 2;
          var i = vc();
          for ((Rl === e && Al === t) || ((Ul = null), pc(e, t)); ; )
            try {
              mc();
              break;
            } catch (o) {
              fc(e, o);
            }
          if ((_r(), (Ml = n), (kl.current = i), null !== Tl))
            throw Error(r(261));
          return (Rl = null), (Al = 0), zl;
        }
        function mc() {
          for (; null !== Tl; ) wc(Tl);
        }
        function bc() {
          for (; null !== Tl && !Ke(); ) wc(Tl);
        }
        function wc(e) {
          var t = xl(e.alternate, e, Vl);
          (e.memoizedProps = e.pendingProps),
            null === t ? Sc(e) : (Tl = t),
            (Ol.current = null);
        }
        function Sc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Qs(n, t, Vl))) return void (Tl = n);
            } else {
              if (null !== (n = Ks(n, t)))
                return (n.flags &= 32767), void (Tl = n);
              if (null === e) return (zl = 6), void (Tl = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Tl = t);
            Tl = t = e;
          } while (null !== t);
          0 === zl && (zl = 5);
        }
        function _c(e, t, n) {
          var i = bt,
            o = El.transition;
          try {
            (El.transition = null),
              (bt = 1),
              (function (e, t, n, i) {
                do {
                  Pc();
                } while (null !== Kl);
                if (0 !== (6 & Ml)) throw Error(r(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(r(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var a = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var i = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var o = 31 - at(n),
                        r = 1 << o;
                      (t[o] = 0), (i[o] = -1), (e[o] = -1), (n &= ~r);
                    }
                  })(e, a),
                  e === Rl && ((Tl = Rl = null), (Al = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ql ||
                    ((Ql = !0),
                    Rc(tt, function () {
                      return Pc(), null;
                    })),
                  (a = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || a)
                ) {
                  (a = El.transition), (El.transition = null);
                  var s = bt;
                  bt = 1;
                  var l = Ml;
                  (Ml |= 4),
                    (Ol.current = null),
                    (function (e, t) {
                      if (((eo = Ut), pi((e = hi())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var i =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (i && 0 !== i.rangeCount) {
                              n = i.anchorNode;
                              var o = i.anchorOffset,
                                a = i.focusNode;
                              i = i.focusOffset;
                              try {
                                n.nodeType, a.nodeType;
                              } catch (S) {
                                n = null;
                                break e;
                              }
                              var s = 0,
                                l = -1,
                                c = -1,
                                u = 0,
                                d = 0,
                                h = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var f;
                                  h !== n ||
                                    (0 !== o && 3 !== h.nodeType) ||
                                    (l = s + o),
                                    h !== a ||
                                      (0 !== i && 3 !== h.nodeType) ||
                                      (c = s + i),
                                    3 === h.nodeType &&
                                      (s += h.nodeValue.length),
                                    null !== (f = h.firstChild);

                                )
                                  (p = h), (h = f);
                                for (;;) {
                                  if (h === e) break t;
                                  if (
                                    (p === n && ++u === o && (l = s),
                                    p === a && ++d === i && (c = s),
                                    null !== (f = h.nextSibling))
                                  )
                                    break;
                                  p = (h = p).parentNode;
                                }
                                h = f;
                              }
                              n =
                                -1 === l || -1 === c
                                  ? null
                                  : { start: l, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        to = { focusedElem: e, selectionRange: n },
                          Ut = !1,
                          Js = t;
                        null !== Js;

                      )
                        if (
                          ((e = (t = Js).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Js = e);
                        else
                          for (; null !== Js; ) {
                            t = Js;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var g = v.memoizedProps,
                                        y = v.memoizedState,
                                        m = t.stateNode,
                                        b = m.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : yr(t.type, g),
                                          y
                                        );
                                      m.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(r(163));
                                }
                            } catch (S) {
                              Cc(t, t.return, S);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Js = e);
                              break;
                            }
                            Js = t.return;
                          }
                      (v = nl), (nl = !1);
                    })(e, n),
                    yl(n, e),
                    fi(to),
                    (Ut = !!eo),
                    (to = eo = null),
                    (e.current = n),
                    bl(n, e, o),
                    Ye(),
                    (Ml = l),
                    (bt = s),
                    (El.transition = a);
                } else e.current = n;
                if (
                  (Ql && ((Ql = !1), (Kl = e), (Yl = o)),
                  (a = e.pendingLanes),
                  0 === a && (ql = null),
                  (function (e) {
                    if (rt && "function" === typeof rt.onCommitFiberRoot)
                      try {
                        rt.onCommitFiberRoot(
                          ot,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  oc(e, Xe()),
                  null !== t)
                )
                  for (i = e.onRecoverableError, n = 0; n < t.length; n++)
                    (o = t[n]),
                      i(o.value, { componentStack: o.stack, digest: o.digest });
                if (Wl) throw ((Wl = !1), (e = $l), ($l = null), e);
                0 !== (1 & Yl) && 0 !== e.tag && Pc(),
                  (a = e.pendingLanes),
                  0 !== (1 & a)
                    ? e === Zl
                      ? Xl++
                      : ((Xl = 0), (Zl = e))
                    : (Xl = 0),
                  Bo();
              })(e, t, n, i);
          } finally {
            (El.transition = o), (bt = i);
          }
          return null;
        }
        function Pc() {
          if (null !== Kl) {
            var e = wt(Yl),
              t = El.transition,
              n = bt;
            try {
              if (((El.transition = null), (bt = 16 > e ? 16 : e), null === Kl))
                var i = !1;
              else {
                if (((e = Kl), (Kl = null), (Yl = 0), 0 !== (6 & Ml)))
                  throw Error(r(331));
                var o = Ml;
                for (Ml |= 4, Js = e.current; null !== Js; ) {
                  var a = Js,
                    s = a.child;
                  if (0 !== (16 & Js.flags)) {
                    var l = a.deletions;
                    if (null !== l) {
                      for (var c = 0; c < l.length; c++) {
                        var u = l[c];
                        for (Js = u; null !== Js; ) {
                          var d = Js;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              il(8, d, a);
                          }
                          var h = d.child;
                          if (null !== h) (h.return = d), (Js = h);
                          else
                            for (; null !== Js; ) {
                              var p = (d = Js).sibling,
                                f = d.return;
                              if ((al(d), d === u)) {
                                Js = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = f), (Js = p);
                                break;
                              }
                              Js = f;
                            }
                        }
                      }
                      var v = a.alternate;
                      if (null !== v) {
                        var g = v.child;
                        if (null !== g) {
                          v.child = null;
                          do {
                            var y = g.sibling;
                            (g.sibling = null), (g = y);
                          } while (null !== g);
                        }
                      }
                      Js = a;
                    }
                  }
                  if (0 !== (2064 & a.subtreeFlags) && null !== s)
                    (s.return = a), (Js = s);
                  else
                    e: for (; null !== Js; ) {
                      if (0 !== (2048 & (a = Js).flags))
                        switch (a.tag) {
                          case 0:
                          case 11:
                          case 15:
                            il(9, a, a.return);
                        }
                      var m = a.sibling;
                      if (null !== m) {
                        (m.return = a.return), (Js = m);
                        break e;
                      }
                      Js = a.return;
                    }
                }
                var b = e.current;
                for (Js = b; null !== Js; ) {
                  var w = (s = Js).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== w)
                    (w.return = s), (Js = w);
                  else
                    e: for (s = b; null !== Js; ) {
                      if (0 !== (2048 & (l = Js).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ol(9, l);
                          }
                        } catch (_) {
                          Cc(l, l.return, _);
                        }
                      if (l === s) {
                        Js = null;
                        break e;
                      }
                      var S = l.sibling;
                      if (null !== S) {
                        (S.return = l.return), (Js = S);
                        break e;
                      }
                      Js = l.return;
                    }
                }
                if (
                  ((Ml = o),
                  Bo(),
                  rt && "function" === typeof rt.onPostCommitFiberRoot)
                )
                  try {
                    rt.onPostCommitFiberRoot(ot, e);
                  } catch (_) {}
                i = !0;
              }
              return i;
            } finally {
              (bt = n), (El.transition = t);
            }
          }
          return !1;
        }
        function xc(e, t, n) {
          (e = zr(e, (t = fs(0, (t = us(n, t)), 1)), 1)),
            (t = tc()),
            null !== e && (yt(e, 1, t), oc(e, t));
        }
        function Cc(e, t, n) {
          if (3 === e.tag) xc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                xc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var i = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof i.componentDidCatch &&
                    (null === ql || !ql.has(i)))
                ) {
                  (t = zr(t, (e = vs(t, (e = us(n, e)), 1)), 1)),
                    (e = tc()),
                    null !== t && (yt(t, 1, e), oc(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function kc(e, t, n) {
          var i = e.pingCache;
          null !== i && i.delete(t),
            (t = tc()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Rl === e &&
              (Al & n) === n &&
              (4 === zl ||
              (3 === zl && (130023424 & Al) === Al && 500 > Xe() - Hl)
                ? pc(e, 0)
                : (Dl |= n)),
            oc(e, t);
        }
        function Oc(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ut), 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
          var n = tc();
          null !== (e = Rr(e, t)) && (yt(e, t, n), oc(e, n));
        }
        function Ec(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Oc(e, n);
        }
        function Mc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var i = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              i = e.stateNode;
              break;
            default:
              throw Error(r(314));
          }
          null !== i && i.delete(t), Oc(e, n);
        }
        function Rc(e, t) {
          return qe(e, t);
        }
        function Tc(e, t, n, i) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = i),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ac(e, t, n, i) {
          return new Tc(e, t, n, i);
        }
        function Vc(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Lc(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ac(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function zc(e, t, n, i, o, a) {
          var s = 2;
          if (((i = e), "function" === typeof e)) Vc(e) && (s = 1);
          else if ("string" === typeof e) s = 5;
          else
            e: switch (e) {
              case P:
                return Ic(n.children, o, a, t);
              case x:
                (s = 8), (o |= 8);
                break;
              case C:
                return (
                  ((e = Ac(12, n, t, 2 | o)).elementType = C), (e.lanes = a), e
                );
              case M:
                return (
                  ((e = Ac(13, n, t, o)).elementType = M), (e.lanes = a), e
                );
              case R:
                return (
                  ((e = Ac(19, n, t, o)).elementType = R), (e.lanes = a), e
                );
              case V:
                return jc(n, o, a, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case k:
                      s = 10;
                      break e;
                    case O:
                      s = 9;
                      break e;
                    case E:
                      s = 11;
                      break e;
                    case T:
                      s = 14;
                      break e;
                    case A:
                      (s = 16), (i = null);
                      break e;
                  }
                throw Error(r(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ac(s, n, t, o)).elementType = e),
            (t.type = i),
            (t.lanes = a),
            t
          );
        }
        function Ic(e, t, n, i) {
          return ((e = Ac(7, e, i, t)).lanes = n), e;
        }
        function jc(e, t, n, i) {
          return (
            ((e = Ac(22, e, i, t)).elementType = V),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Gc(e, t, n) {
          return ((e = Ac(6, e, null, t)).lanes = n), e;
        }
        function Dc(e, t, n) {
          return (
            ((t = Ac(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Fc(e, t, n, i, o) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = i),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Nc(e, t, n, i, o, r, a, s, l) {
          return (
            (e = new Fc(e, t, n, s, l)),
            1 === t ? ((t = 1), !0 === r && (t |= 8)) : (t = 0),
            (r = Ac(3, null, null, t)),
            (e.current = r),
            (r.stateNode = e),
            (r.memoizedState = {
              element: i,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ar(r),
            e
          );
        }
        function Hc(e) {
          if (!e) return Eo;
          e: {
            if (He((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(r(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Vo(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(r(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Vo(n)) return Io(e, n, t);
          }
          return t;
        }
        function Bc(e, t, n, i, o, r, a, s, l) {
          return (
            ((e = Nc(n, i, !0, e, 0, r, 0, s, l)).context = Hc(null)),
            (n = e.current),
            ((r = Lr((i = tc()), (o = nc(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            zr(n, r, o),
            (e.current.lanes = o),
            yt(e, o, i),
            oc(e, i),
            e
          );
        }
        function Uc(e, t, n, i) {
          var o = t.current,
            r = tc(),
            a = nc(o);
          return (
            (n = Hc(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Lr(r, a)).payload = { element: e }),
            null !== (i = void 0 === i ? null : i) && (t.callback = i),
            null !== (e = zr(o, t, a)) && (ic(e, o, a, r), Ir(e, o, a)),
            a
          );
        }
        function Wc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function $c(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qc(e, t) {
          $c(e, t), (e = e.alternate) && $c(e, t);
        }
        xl = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ro.current) ws = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (ws = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Rs(t), fr();
                        break;
                      case 5:
                        aa(t);
                        break;
                      case 1:
                        Vo(t.type) && jo(t);
                        break;
                      case 4:
                        oa(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var i = t.type._context,
                          o = t.memoizedProps.value;
                        Oo(mr, i._currentValue), (i._currentValue = o);
                        break;
                      case 13:
                        if (null !== (i = t.memoizedState))
                          return null !== i.dehydrated
                            ? (Oo(la, 1 & la.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Gs(e, t, n)
                            : (Oo(la, 1 & la.current),
                              null !== (e = Ws(e, t, n)) ? e.sibling : null);
                        Oo(la, 1 & la.current);
                        break;
                      case 19:
                        if (
                          ((i = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (i) return Bs(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null),
                            (o.tail = null),
                            (o.lastEffect = null)),
                          Oo(la, la.current),
                          i)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Cs(e, t, n);
                    }
                    return Ws(e, t, n);
                  })(e, t, n)
                );
              ws = 0 !== (131072 & e.flags);
            }
          else (ws = !1), rr && 0 !== (1048576 & t.flags) && er(t, qo, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var i = t.type;
              Us(e, t), (e = t.pendingProps);
              var o = Ao(t, Mo.current);
              Cr(t, n), (o = xa(null, t, i, e, o, n));
              var a = Ca();
              return (
                (t.flags |= 1),
                "object" === typeof o &&
                null !== o &&
                "function" === typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Vo(i) ? ((a = !0), jo(t)) : (a = !1),
                    (t.memoizedState =
                      null !== o.state && void 0 !== o.state ? o.state : null),
                    Ar(t),
                    (o.updater = Hr),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    $r(t, i, e, n),
                    (t = Ms(null, t, i, !0, a, n)))
                  : ((t.tag = 0),
                    rr && a && tr(t),
                    Ss(null, t, o, n),
                    (t = t.child)),
                t
              );
            case 16:
              i = t.elementType;
              e: {
                switch (
                  (Us(e, t),
                  (e = t.pendingProps),
                  (i = (o = i._init)(i._payload)),
                  (t.type = i),
                  (o = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Vc(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === E) return 11;
                        if (e === T) return 14;
                      }
                      return 2;
                    })(i)),
                  (e = yr(i, e)),
                  o)
                ) {
                  case 0:
                    t = Os(null, t, i, e, n);
                    break e;
                  case 1:
                    t = Es(null, t, i, e, n);
                    break e;
                  case 11:
                    t = _s(null, t, i, e, n);
                    break e;
                  case 14:
                    t = Ps(null, t, i, yr(i.type, e), n);
                    break e;
                }
                throw Error(r(306, i, ""));
              }
              return t;
            case 0:
              return (
                (i = t.type),
                (o = t.pendingProps),
                Os(e, t, i, (o = t.elementType === i ? o : yr(i, o)), n)
              );
            case 1:
              return (
                (i = t.type),
                (o = t.pendingProps),
                Es(e, t, i, (o = t.elementType === i ? o : yr(i, o)), n)
              );
            case 3:
              e: {
                if ((Rs(t), null === e)) throw Error(r(387));
                (i = t.pendingProps),
                  (o = (a = t.memoizedState).element),
                  Vr(e, t),
                  Gr(t, i, null, n);
                var s = t.memoizedState;
                if (((i = s.element), a.isDehydrated)) {
                  if (
                    ((a = {
                      element: i,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    }),
                    (t.updateQueue.baseState = a),
                    (t.memoizedState = a),
                    256 & t.flags)
                  ) {
                    t = Ts(e, t, i, n, (o = us(Error(r(423)), t)));
                    break e;
                  }
                  if (i !== o) {
                    t = Ts(e, t, i, n, (o = us(Error(r(424)), t)));
                    break e;
                  }
                  for (
                    or = co(t.stateNode.containerInfo.firstChild),
                      ir = t,
                      rr = !0,
                      ar = null,
                      n = Zr(t, null, i, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((fr(), i === o)) {
                    t = Ws(e, t, n);
                    break e;
                  }
                  Ss(e, t, i, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                aa(t),
                null === e && ur(t),
                (i = t.type),
                (o = t.pendingProps),
                (a = null !== e ? e.memoizedProps : null),
                (s = o.children),
                no(i, o)
                  ? (s = null)
                  : null !== a && no(i, a) && (t.flags |= 32),
                ks(e, t),
                Ss(e, t, s, n),
                t.child
              );
            case 6:
              return null === e && ur(t), null;
            case 13:
              return Gs(e, t, n);
            case 4:
              return (
                oa(t, t.stateNode.containerInfo),
                (i = t.pendingProps),
                null === e ? (t.child = Xr(t, null, i, n)) : Ss(e, t, i, n),
                t.child
              );
            case 11:
              return (
                (i = t.type),
                (o = t.pendingProps),
                _s(e, t, i, (o = t.elementType === i ? o : yr(i, o)), n)
              );
            case 7:
              return Ss(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Ss(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((i = t.type._context),
                  (o = t.pendingProps),
                  (a = t.memoizedProps),
                  (s = o.value),
                  Oo(mr, i._currentValue),
                  (i._currentValue = s),
                  null !== a)
                )
                  if (si(a.value, s)) {
                    if (a.children === o.children && !Ro.current) {
                      t = Ws(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (a = t.child) && (a.return = t);
                      null !== a;

                    ) {
                      var l = a.dependencies;
                      if (null !== l) {
                        s = a.child;
                        for (var c = l.firstContext; null !== c; ) {
                          if (c.context === i) {
                            if (1 === a.tag) {
                              (c = Lr(-1, n & -n)).tag = 2;
                              var u = a.updateQueue;
                              if (null !== u) {
                                var d = (u = u.shared).pending;
                                null === d
                                  ? (c.next = c)
                                  : ((c.next = d.next), (d.next = c)),
                                  (u.pending = c);
                              }
                            }
                            (a.lanes |= n),
                              null !== (c = a.alternate) && (c.lanes |= n),
                              xr(a.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === a.tag)
                        s = a.type === t.type ? null : a.child;
                      else if (18 === a.tag) {
                        if (null === (s = a.return)) throw Error(r(341));
                        (s.lanes |= n),
                          null !== (l = s.alternate) && (l.lanes |= n),
                          xr(s, n, t),
                          (s = a.sibling);
                      } else s = a.child;
                      if (null !== s) s.return = a;
                      else
                        for (s = a; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (a = s.sibling)) {
                            (a.return = s.return), (s = a);
                            break;
                          }
                          s = s.return;
                        }
                      a = s;
                    }
                Ss(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (i = t.pendingProps.children),
                Cr(t, n),
                (i = i((o = kr(o)))),
                (t.flags |= 1),
                Ss(e, t, i, n),
                t.child
              );
            case 14:
              return (
                (o = yr((i = t.type), t.pendingProps)),
                Ps(e, t, i, (o = yr(i.type, o)), n)
              );
            case 15:
              return xs(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (i = t.type),
                (o = t.pendingProps),
                (o = t.elementType === i ? o : yr(i, o)),
                Us(e, t),
                (t.tag = 1),
                Vo(i) ? ((e = !0), jo(t)) : (e = !1),
                Cr(t, n),
                Ur(t, i, o),
                $r(t, i, o, n),
                Ms(null, t, i, !0, e, n)
              );
            case 19:
              return Bs(e, t, n);
            case 22:
              return Cs(e, t, n);
          }
          throw Error(r(156, t.tag));
        };
        var Qc =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Kc(e) {
          this._internalRoot = e;
        }
        function Yc(e) {
          this._internalRoot = e;
        }
        function Xc(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Jc() {}
        function eu(e, t, n, i, o) {
          var r = n._reactRootContainer;
          if (r) {
            var a = r;
            if ("function" === typeof o) {
              var s = o;
              o = function () {
                var e = Wc(a);
                s.call(e);
              };
            }
            Uc(t, a, e, o);
          } else
            a = (function (e, t, n, i, o) {
              if (o) {
                if ("function" === typeof i) {
                  var r = i;
                  i = function () {
                    var e = Wc(a);
                    r.call(e);
                  };
                }
                var a = Bc(t, i, e, 0, null, !1, 0, "", Jc);
                return (
                  (e._reactRootContainer = a),
                  (e[vo] = a.current),
                  Hi(8 === e.nodeType ? e.parentNode : e),
                  dc(),
                  a
                );
              }
              for (; (o = e.lastChild); ) e.removeChild(o);
              if ("function" === typeof i) {
                var s = i;
                i = function () {
                  var e = Wc(l);
                  s.call(e);
                };
              }
              var l = Nc(e, 0, !1, null, 0, !1, 0, "", Jc);
              return (
                (e._reactRootContainer = l),
                (e[vo] = l.current),
                Hi(8 === e.nodeType ? e.parentNode : e),
                dc(function () {
                  Uc(t, l, n, i);
                }),
                l
              );
            })(n, t, e, o, i);
          return Wc(a);
        }
        (Yc.prototype.render = Kc.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(r(409));
            Uc(e, t, null, null);
          }),
          (Yc.prototype.unmount = Kc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                dc(function () {
                  Uc(null, e, null, null);
                }),
                  (t[vo] = null);
              }
            }),
          (Yc.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = xt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Vt.length && 0 !== t && t < Vt[n].priority;
                n++
              );
              Vt.splice(n, 0, e), 0 === n && jt(e);
            }
          }),
          (St = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (mt(t, 1 | n),
                    oc(t, Xe()),
                    0 === (6 & Ml) && ((Bl = Xe() + 500), Bo()));
                }
                break;
              case 13:
                dc(function () {
                  var t = Rr(e, 1);
                  if (null !== t) {
                    var n = tc();
                    ic(t, e, 1, n);
                  }
                }),
                  qc(e, 1);
            }
          }),
          (_t = function (e) {
            if (13 === e.tag) {
              var t = Rr(e, 134217728);
              if (null !== t) ic(t, e, 134217728, tc());
              qc(e, 134217728);
            }
          }),
          (Pt = function (e) {
            if (13 === e.tag) {
              var t = nc(e),
                n = Rr(e, t);
              if (null !== n) ic(n, e, t, tc());
              qc(e, t);
            }
          }),
          (xt = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (_e = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var i = n[t];
                    if (i !== e && i.form === e.form) {
                      var o = _o(i);
                      if (!o) throw Error(r(90));
                      q(i), Z(i, o);
                    }
                  }
                }
                break;
              case "textarea":
                re(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ee = uc),
          (Me = dc);
        var tu = {
            usingClientEntryPoint: !1,
            Events: [wo, So, _o, ke, Oe, uc],
          },
          nu = {
            findFiberByHostInstance: bo,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          iu = {
            bundleType: nu.bundleType,
            version: nu.version,
            rendererPackageName: nu.rendererPackageName,
            rendererConfig: nu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ou = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ou.isDisabled && ou.supportsFiber)
            try {
              (ot = ou.inject(iu)), (rt = ou);
            } catch (ue) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tu),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xc(t)) throw Error(r(200));
            return (function (e, t, n) {
              var i =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: _,
                key: null == i ? null : "" + i,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xc(e)) throw Error(r(299));
            var n = !1,
              i = "",
              o = Qc;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (i = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Nc(e, 1, !1, null, 0, n, 0, i, o)),
              (e[vo] = t.current),
              Hi(8 === e.nodeType ? e.parentNode : e),
              new Kc(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(r(188));
              throw ((e = Object.keys(e).join(",")), Error(r(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return dc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zc(t)) throw Error(r(200));
            return eu(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xc(e)) throw Error(r(405));
            var i = (null != n && n.hydratedSources) || null,
              o = !1,
              a = "",
              s = Qc;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
              (t = Bc(t, null, e, 1, null != n ? n : null, o, 0, a, s)),
              (e[vo] = t.current),
              Hi(e),
              i)
            )
              for (e = 0; e < i.length; e++)
                (o = (o = (n = i[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
            return new Yc(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zc(t)) throw Error(r(200));
            return eu(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zc(e)) throw Error(r(40));
            return (
              !!e._reactRootContainer &&
              (dc(function () {
                eu(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[vo] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
            if (!Zc(n)) throw Error(r(200));
            if (null == e || void 0 === e._reactInternals) throw Error(r(38));
            return eu(e, t, n, !1, i);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      1250: function (e, t, n) {
        "use strict";
        var i = n(4164);
        (t.s = i.createRoot), i.hydrateRoot;
      },
      4164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(4463));
      },
      8840: function (e, t, n) {
        (() => {
          var e = {
              757: (e, t, n) => {
                e.exports = n(666);
              },
              666: (e) => {
                var t = (function (e) {
                  "use strict";
                  var t,
                    n = Object.prototype,
                    i = n.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    r = o.iterator || "@@iterator",
                    a = o.asyncIterator || "@@asyncIterator",
                    s = o.toStringTag || "@@toStringTag";
                  function l(e, t, n) {
                    return (
                      Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      }),
                      e[t]
                    );
                  }
                  try {
                    l({}, "");
                  } catch (e) {
                    l = function (e, t, n) {
                      return (e[t] = n);
                    };
                  }
                  function c(e, t, n, i) {
                    var o = t && t.prototype instanceof g ? t : g,
                      r = Object.create(o.prototype),
                      a = new E(i || []);
                    return (
                      (r._invoke = (function (e, t, n) {
                        var i = d;
                        return function (o, r) {
                          if (i === p)
                            throw new Error("Generator is already running");
                          if (i === f) {
                            if ("throw" === o) throw r;
                            return R();
                          }
                          for (n.method = o, n.arg = r; ; ) {
                            var a = n.delegate;
                            if (a) {
                              var s = C(a, n);
                              if (s) {
                                if (s === v) continue;
                                return s;
                              }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                              if (i === d) throw ((i = f), n.arg);
                              n.dispatchException(n.arg);
                            } else
                              "return" === n.method &&
                                n.abrupt("return", n.arg);
                            i = p;
                            var l = u(e, t, n);
                            if ("normal" === l.type) {
                              if (((i = n.done ? f : h), l.arg === v)) continue;
                              return { value: l.arg, done: n.done };
                            }
                            "throw" === l.type &&
                              ((i = f), (n.method = "throw"), (n.arg = l.arg));
                          }
                        };
                      })(e, n, a)),
                      r
                    );
                  }
                  function u(e, t, n) {
                    try {
                      return { type: "normal", arg: e.call(t, n) };
                    } catch (e) {
                      return { type: "throw", arg: e };
                    }
                  }
                  e.wrap = c;
                  var d = "suspendedStart",
                    h = "suspendedYield",
                    p = "executing",
                    f = "completed",
                    v = {};
                  function g() {}
                  function y() {}
                  function m() {}
                  var b = {};
                  b[r] = function () {
                    return this;
                  };
                  var w = Object.getPrototypeOf,
                    S = w && w(w(M([])));
                  S && S !== n && i.call(S, r) && (b = S);
                  var _ = (m.prototype = g.prototype = Object.create(b));
                  function P(e) {
                    ["next", "throw", "return"].forEach(function (t) {
                      l(e, t, function (e) {
                        return this._invoke(t, e);
                      });
                    });
                  }
                  function x(e, t) {
                    function n(o, r, a, s) {
                      var l = u(e[o], e, r);
                      if ("throw" !== l.type) {
                        var c = l.arg,
                          d = c.value;
                        return d && "object" == typeof d && i.call(d, "__await")
                          ? t.resolve(d.__await).then(
                              function (e) {
                                n("next", e, a, s);
                              },
                              function (e) {
                                n("throw", e, a, s);
                              }
                            )
                          : t.resolve(d).then(
                              function (e) {
                                (c.value = e), a(c);
                              },
                              function (e) {
                                return n("throw", e, a, s);
                              }
                            );
                      }
                      s(l.arg);
                    }
                    var o;
                    this._invoke = function (e, i) {
                      function r() {
                        return new t(function (t, o) {
                          n(e, i, t, o);
                        });
                      }
                      return (o = o ? o.then(r, r) : r());
                    };
                  }
                  function C(e, n) {
                    var i = e.iterator[n.method];
                    if (i === t) {
                      if (((n.delegate = null), "throw" === n.method)) {
                        if (
                          e.iterator.return &&
                          ((n.method = "return"),
                          (n.arg = t),
                          C(e, n),
                          "throw" === n.method)
                        )
                          return v;
                        (n.method = "throw"),
                          (n.arg = new TypeError(
                            "The iterator does not provide a 'throw' method"
                          ));
                      }
                      return v;
                    }
                    var o = u(i, e.iterator, n.arg);
                    if ("throw" === o.type)
                      return (
                        (n.method = "throw"),
                        (n.arg = o.arg),
                        (n.delegate = null),
                        v
                      );
                    var r = o.arg;
                    return r
                      ? r.done
                        ? ((n[e.resultName] = r.value),
                          (n.next = e.nextLoc),
                          "return" !== n.method &&
                            ((n.method = "next"), (n.arg = t)),
                          (n.delegate = null),
                          v)
                        : r
                      : ((n.method = "throw"),
                        (n.arg = new TypeError(
                          "iterator result is not an object"
                        )),
                        (n.delegate = null),
                        v);
                  }
                  function k(e) {
                    var t = { tryLoc: e[0] };
                    1 in e && (t.catchLoc = e[1]),
                      2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                      this.tryEntries.push(t);
                  }
                  function O(e) {
                    var t = e.completion || {};
                    (t.type = "normal"), delete t.arg, (e.completion = t);
                  }
                  function E(e) {
                    (this.tryEntries = [{ tryLoc: "root" }]),
                      e.forEach(k, this),
                      this.reset(!0);
                  }
                  function M(e) {
                    if (e) {
                      var n = e[r];
                      if (n) return n.call(e);
                      if ("function" == typeof e.next) return e;
                      if (!isNaN(e.length)) {
                        var o = -1,
                          a = function n() {
                            for (; ++o < e.length; )
                              if (i.call(e, o))
                                return (n.value = e[o]), (n.done = !1), n;
                            return (n.value = t), (n.done = !0), n;
                          };
                        return (a.next = a);
                      }
                    }
                    return { next: R };
                  }
                  function R() {
                    return { value: t, done: !0 };
                  }
                  return (
                    (y.prototype = _.constructor = m),
                    (m.constructor = y),
                    (y.displayName = l(m, s, "GeneratorFunction")),
                    (e.isGeneratorFunction = function (e) {
                      var t = "function" == typeof e && e.constructor;
                      return (
                        !!t &&
                        (t === y ||
                          "GeneratorFunction" === (t.displayName || t.name))
                      );
                    }),
                    (e.mark = function (e) {
                      return (
                        Object.setPrototypeOf
                          ? Object.setPrototypeOf(e, m)
                          : ((e.__proto__ = m), l(e, s, "GeneratorFunction")),
                        (e.prototype = Object.create(_)),
                        e
                      );
                    }),
                    (e.awrap = function (e) {
                      return { __await: e };
                    }),
                    P(x.prototype),
                    (x.prototype[a] = function () {
                      return this;
                    }),
                    (e.AsyncIterator = x),
                    (e.async = function (t, n, i, o, r) {
                      void 0 === r && (r = Promise);
                      var a = new x(c(t, n, i, o), r);
                      return e.isGeneratorFunction(n)
                        ? a
                        : a.next().then(function (e) {
                            return e.done ? e.value : a.next();
                          });
                    }),
                    P(_),
                    l(_, s, "Generator"),
                    (_[r] = function () {
                      return this;
                    }),
                    (_.toString = function () {
                      return "[object Generator]";
                    }),
                    (e.keys = function (e) {
                      var t = [];
                      for (var n in e) t.push(n);
                      return (
                        t.reverse(),
                        function n() {
                          for (; t.length; ) {
                            var i = t.pop();
                            if (i in e) return (n.value = i), (n.done = !1), n;
                          }
                          return (n.done = !0), n;
                        }
                      );
                    }),
                    (e.values = M),
                    (E.prototype = {
                      constructor: E,
                      reset: function (e) {
                        if (
                          ((this.prev = 0),
                          (this.next = 0),
                          (this.sent = this._sent = t),
                          (this.done = !1),
                          (this.delegate = null),
                          (this.method = "next"),
                          (this.arg = t),
                          this.tryEntries.forEach(O),
                          !e)
                        )
                          for (var n in this)
                            "t" === n.charAt(0) &&
                              i.call(this, n) &&
                              !isNaN(+n.slice(1)) &&
                              (this[n] = t);
                      },
                      stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                      },
                      dispatchException: function (e) {
                        if (this.done) throw e;
                        var n = this;
                        function o(i, o) {
                          return (
                            (s.type = "throw"),
                            (s.arg = e),
                            (n.next = i),
                            o && ((n.method = "next"), (n.arg = t)),
                            !!o
                          );
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                          var a = this.tryEntries[r],
                            s = a.completion;
                          if ("root" === a.tryLoc) return o("end");
                          if (a.tryLoc <= this.prev) {
                            var l = i.call(a, "catchLoc"),
                              c = i.call(a, "finallyLoc");
                            if (l && c) {
                              if (this.prev < a.catchLoc)
                                return o(a.catchLoc, !0);
                              if (this.prev < a.finallyLoc)
                                return o(a.finallyLoc);
                            } else if (l) {
                              if (this.prev < a.catchLoc)
                                return o(a.catchLoc, !0);
                            } else {
                              if (!c)
                                throw new Error(
                                  "try statement without catch or finally"
                                );
                              if (this.prev < a.finallyLoc)
                                return o(a.finallyLoc);
                            }
                          }
                        }
                      },
                      abrupt: function (e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                          var o = this.tryEntries[n];
                          if (
                            o.tryLoc <= this.prev &&
                            i.call(o, "finallyLoc") &&
                            this.prev < o.finallyLoc
                          ) {
                            var r = o;
                            break;
                          }
                        }
                        r &&
                          ("break" === e || "continue" === e) &&
                          r.tryLoc <= t &&
                          t <= r.finallyLoc &&
                          (r = null);
                        var a = r ? r.completion : {};
                        return (
                          (a.type = e),
                          (a.arg = t),
                          r
                            ? ((this.method = "next"),
                              (this.next = r.finallyLoc),
                              v)
                            : this.complete(a)
                        );
                      },
                      complete: function (e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return (
                          "break" === e.type || "continue" === e.type
                            ? (this.next = e.arg)
                            : "return" === e.type
                            ? ((this.rval = this.arg = e.arg),
                              (this.method = "return"),
                              (this.next = "end"))
                            : "normal" === e.type && t && (this.next = t),
                          v
                        );
                      },
                      finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                          var n = this.tryEntries[t];
                          if (n.finallyLoc === e)
                            return (
                              this.complete(n.completion, n.afterLoc), O(n), v
                            );
                        }
                      },
                      catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                          var n = this.tryEntries[t];
                          if (n.tryLoc === e) {
                            var i = n.completion;
                            if ("throw" === i.type) {
                              var o = i.arg;
                              O(n);
                            }
                            return o;
                          }
                        }
                        throw new Error("illegal catch attempt");
                      },
                      delegateYield: function (e, n, i) {
                        return (
                          (this.delegate = {
                            iterator: M(e),
                            resultName: n,
                            nextLoc: i,
                          }),
                          "next" === this.method && (this.arg = t),
                          v
                        );
                      },
                    }),
                    e
                  );
                })(e.exports);
                try {
                  regeneratorRuntime = t;
                } catch (e) {
                  Function("r", "regeneratorRuntime = r")(t);
                }
              },
            },
            i = {};
          function o(t) {
            var n = i[t];
            if (void 0 !== n) return n.exports;
            var r = (i[t] = { exports: {} });
            return e[t](r, r.exports, o), r.exports;
          }
          (o.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return o.d(t, { a: t }), t;
          }),
            (o.d = (e, t) => {
              for (var n in t)
                o.o(t, n) &&
                  !o.o(e, n) &&
                  Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            }),
            (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
            (o.r = (e) => {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            });
          var r = {};
          (() => {
            "use strict";
            function t(e) {
              return (t = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
            }
            function i(e, n) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(e, n) &&
                null !== (e = t(e));

              );
              return e;
            }
            function a() {
              return (a =
                "undefined" != typeof Reflect && Reflect.get
                  ? Reflect.get
                  : function (e, t, n) {
                      var o = i(e, t);
                      if (o) {
                        var r = Object.getOwnPropertyDescriptor(o, t);
                        return r.get
                          ? r.get.call(arguments.length < 3 ? e : n)
                          : r.value;
                      }
                    }).apply(this, arguments);
            }
            function s(e, t) {
              return (s =
                Object.setPrototypeOf ||
                function (e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
            }
            function l(e) {
              return (l =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    })(e);
            }
            function c(e, t) {
              if (t && ("object" === l(t) || "function" == typeof t)) return t;
              if (void 0 !== t)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e);
            }
            o.r(r), o.d(r, { Particles: () => m, default: () => b });
            var u = o(757),
              d = o.n(u);
            const h = n(2791);
            var p = o.n(h);
            const f = n(813),
              v = n(6300);
            var g = o.n(v),
              y = function (e, t, n, i) {
                return new (n || (n = Promise))(function (o, r) {
                  function a(e) {
                    try {
                      l(i.next(e));
                    } catch (e) {
                      r(e);
                    }
                  }
                  function s(e) {
                    try {
                      l(i.throw(e));
                    } catch (e) {
                      r(e);
                    }
                  }
                  function l(e) {
                    var t;
                    e.done
                      ? o(e.value)
                      : ((t = e.value),
                        t instanceof n
                          ? t
                          : new n(function (e) {
                              e(t);
                            })).then(a, s);
                  }
                  l((i = i.apply(e, t || [])).next());
                });
              },
              m = (function (n) {
                !(function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  Object.defineProperty(e, "prototype", {
                    value: Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    }),
                    writable: !1,
                  }),
                    t && s(e, t);
                })(h, n);
                var i,
                  o,
                  r,
                  l,
                  u =
                    ((r = h),
                    (l = (function () {
                      if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                      if (Reflect.construct.sham) return !1;
                      if ("function" == typeof Proxy) return !0;
                      try {
                        return (
                          Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {})
                          ),
                          !0
                        );
                      } catch (e) {
                        return !1;
                      }
                    })()),
                    function () {
                      var e,
                        n = t(r);
                      if (l) {
                        var i = t(this).constructor;
                        e = Reflect.construct(n, arguments, i);
                      } else e = n.apply(this, arguments);
                      return c(this, e);
                    });
                function h(e) {
                  var t;
                  return (
                    (function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, h),
                    ((t = u.call(this, e)).state = { library: void 0 }),
                    t
                  );
                }
                return (
                  (i = h),
                  (o = [
                    {
                      key: "destroy",
                      value: function () {
                        this.state.library &&
                          (this.state.library.destroy(),
                          this.setState({ library: void 0 }));
                      },
                    },
                    {
                      key: "shouldComponentUpdate",
                      value: function (e) {
                        return !g()(e, this.props);
                      },
                    },
                    {
                      key: "componentDidUpdate",
                      value: function () {
                        this.refresh();
                      },
                    },
                    {
                      key: "forceUpdate",
                      value: function () {
                        var e = this;
                        this.refresh().then(function () {
                          a(t(h.prototype), "forceUpdate", e).call(e);
                        });
                      },
                    },
                    {
                      key: "componentDidMount",
                      value: function () {
                        y(
                          this,
                          void 0,
                          void 0,
                          d().mark(function e() {
                            return d().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (!this.props.init) {
                                        e.next = 3;
                                        break;
                                      }
                                      return (
                                        (e.next = 3),
                                        this.props.init(f.tsParticles)
                                      );
                                    case 3:
                                      return (e.next = 5), this.loadParticles();
                                    case 5:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this
                            );
                          })
                        );
                      },
                    },
                    {
                      key: "componentWillUnmount",
                      value: function () {
                        this.destroy();
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e = this.props,
                          t = e.width,
                          n = e.height,
                          i = e.className,
                          o = e.canvasClassName,
                          r = e.id;
                        return p().createElement(
                          "div",
                          { className: i, id: r },
                          p().createElement("canvas", {
                            className: o,
                            style: Object.assign(
                              Object.assign({}, this.props.style),
                              { width: t, height: n }
                            ),
                          })
                        );
                      },
                    },
                    {
                      key: "refresh",
                      value: function () {
                        return y(
                          this,
                          void 0,
                          void 0,
                          d().mark(function e() {
                            return d().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        this.destroy(),
                                        (e.next = 3),
                                        this.loadParticles()
                                      );
                                    case 3:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this
                            );
                          })
                        );
                      },
                    },
                    {
                      key: "loadParticles",
                      value: function () {
                        var e;
                        return y(
                          this,
                          void 0,
                          void 0,
                          d().mark(function t() {
                            var n,
                              i,
                              o = this;
                            return d().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (
                                        ((n = function (e) {
                                          return y(
                                            o,
                                            void 0,
                                            void 0,
                                            d().mark(function t() {
                                              return d().wrap(
                                                function (t) {
                                                  for (;;)
                                                    switch ((t.prev = t.next)) {
                                                      case 0:
                                                        if (
                                                          (this.props
                                                            .container &&
                                                            (this.props.container.current =
                                                              e),
                                                          this.setState({
                                                            library: e,
                                                          }),
                                                          !this.props.loaded)
                                                        ) {
                                                          t.next = 5;
                                                          break;
                                                        }
                                                        return (
                                                          (t.next = 5),
                                                          this.props.loaded(e)
                                                        );
                                                      case 5:
                                                      case "end":
                                                        return t.stop();
                                                    }
                                                },
                                                t,
                                                this
                                              );
                                            })
                                          );
                                        }),
                                        !this.props.url)
                                      ) {
                                        t.next = 7;
                                        break;
                                      }
                                      return (
                                        (t.next = 4),
                                        f.tsParticles.loadJSON(
                                          this.props.id,
                                          this.props.url
                                        )
                                      );
                                    case 4:
                                      (t.t0 = t.sent), (t.next = 10);
                                      break;
                                    case 7:
                                      return (
                                        (t.next = 9),
                                        f.tsParticles.load(
                                          this.props.id,
                                          null !== (e = this.props.params) &&
                                            void 0 !== e
                                            ? e
                                            : this.props.options
                                        )
                                      );
                                    case 9:
                                      t.t0 = t.sent;
                                    case 10:
                                      return (i = t.t0), (t.next = 13), n(i);
                                    case 13:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              this
                            );
                          })
                        );
                      },
                    },
                  ]) &&
                    (function (e, t) {
                      for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        (i.enumerable = i.enumerable || !1),
                          (i.configurable = !0),
                          "value" in i && (i.writable = !0),
                          Object.defineProperty(e, i.key, i);
                      }
                    })(i.prototype, o),
                  Object.defineProperty(i, "prototype", { writable: !1 }),
                  h
                );
              })(h.Component);
            m.defaultProps = {
              width: "100%",
              height: "100%",
              options: {},
              style: {},
              url: void 0,
              id: "tsparticles",
            };
            const b = m;
          })();
          var a = t;
          for (var s in r) a[s] = r[s];
          r.__esModule && Object.defineProperty(a, "__esModule", { value: !0 });
        })();
      },
      1118: function (e, t, n) {
        const i = n(8840);
        for (let o in i) i.default[o] = i[o];
        e.exports = i.default;
      },
      6374: function (e, t, n) {
        "use strict";
        var i = n(2791),
          o = Symbol.for("react.element"),
          r = Symbol.for("react.fragment"),
          a = Object.prototype.hasOwnProperty,
          s =
            i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var i,
            r = {},
            c = null,
            u = null;
          for (i in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (u = t.ref),
          t))
            a.call(t, i) && !l.hasOwnProperty(i) && (r[i] = t[i]);
          if (e && e.defaultProps)
            for (i in (t = e.defaultProps)) void 0 === r[i] && (r[i] = t[i]);
          return {
            $$typeof: o,
            type: e,
            key: c,
            ref: u,
            props: r,
            _owner: s.current,
          };
        }
        (t.Fragment = r), (t.jsx = c), (t.jsxs = c);
      },
      9117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          i = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          r = Symbol.for("react.strict_mode"),
          a = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          h = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var f = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          g = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || f);
        }
        function m() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || f);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (m.prototype = y.prototype);
        var w = (b.prototype = new m());
        (w.constructor = b), v(w, y.prototype), (w.isPureReactComponent = !0);
        var S = Array.isArray,
          _ = Object.prototype.hasOwnProperty,
          P = { current: null },
          x = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, i) {
          var o,
            r = {},
            a = null,
            s = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (a = "" + t.key),
            t))
              _.call(t, o) && !x.hasOwnProperty(o) && (r[o] = t[o]);
          var l = arguments.length - 2;
          if (1 === l) r.children = i;
          else if (1 < l) {
            for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
            r.children = c;
          }
          if (e && e.defaultProps)
            for (o in (l = e.defaultProps)) void 0 === r[o] && (r[o] = l[o]);
          return {
            $$typeof: n,
            type: e,
            key: a,
            ref: s,
            props: r,
            _owner: P.current,
          };
        }
        function k(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var O = /\/+/g;
        function E(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function M(e, t, o, r, a) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (s) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case i:
                    l = !0;
                }
            }
          if (l)
            return (
              (a = a((l = e))),
              (e = "" === r ? "." + E(l, 0) : r),
              S(a)
                ? ((o = ""),
                  null != e && (o = e.replace(O, "$&/") + "/"),
                  M(a, t, o, "", function (e) {
                    return e;
                  }))
                : null != a &&
                  (k(a) &&
                    (a = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      a,
                      o +
                        (!a.key || (l && l.key === a.key)
                          ? ""
                          : ("" + a.key).replace(O, "$&/") + "/") +
                        e
                    )),
                  t.push(a)),
              1
            );
          if (((l = 0), (r = "" === r ? "." : r + ":"), S(e)))
            for (var c = 0; c < e.length; c++) {
              var u = r + E((s = e[c]), c);
              l += M(s, t, o, u, a);
            }
          else if (
            ((u = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof u)
          )
            for (e = u.call(e), c = 0; !(s = e.next()).done; )
              l += M((s = s.value), t, o, (u = r + E(s, c++)), a);
          else if ("object" === s)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return l;
        }
        function R(e, t, n) {
          if (null == e) return e;
          var i = [],
            o = 0;
          return (
            M(e, i, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            i
          );
        }
        function T(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var A = { current: null },
          V = { transition: null },
          L = {
            ReactCurrentDispatcher: A,
            ReactCurrentBatchConfig: V,
            ReactCurrentOwner: P,
          };
        (t.Children = {
          map: R,
          forEach: function (e, t, n) {
            R(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              R(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              R(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!k(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = o),
          (t.Profiler = a),
          (t.PureComponent = b),
          (t.StrictMode = r),
          (t.Suspense = u),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
          (t.cloneElement = function (e, t, i) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var o = v({}, e.props),
              r = e.key,
              a = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((a = t.ref), (s = P.current)),
                void 0 !== t.key && (r = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (c in t)
                _.call(t, c) &&
                  !x.hasOwnProperty(c) &&
                  (o[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) o.children = i;
            else if (1 < c) {
              l = Array(c);
              for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
              o.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: r,
              ref: a,
              props: o,
              _owner: s,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = k),
          (t.lazy = function (e) {
            return {
              $$typeof: h,
              _payload: { _status: -1, _result: e },
              _init: T,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = V.transition;
            V.transition = {};
            try {
              e();
            } finally {
              V.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return A.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return A.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return A.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return A.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return A.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return A.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return A.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return A.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return A.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return A.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return A.current.useRef(e);
          }),
          (t.useState = function (e) {
            return A.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return A.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return A.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      2791: function (e, t, n) {
        "use strict";
        e.exports = n(9117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(6374);
      },
      6813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var i = (n - 1) >>> 1,
              o = e[i];
            if (!(0 < r(o, t))) break e;
            (e[i] = t), (e[n] = o), (n = i);
          }
        }
        function i(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var i = 0, o = e.length, a = o >>> 1; i < a; ) {
              var s = 2 * (i + 1) - 1,
                l = e[s],
                c = s + 1,
                u = e[c];
              if (0 > r(l, n))
                c < o && 0 > r(u, l)
                  ? ((e[i] = u), (e[c] = n), (i = c))
                  : ((e[i] = l), (e[s] = n), (i = s));
              else {
                if (!(c < o && 0 > r(u, n))) break e;
                (e[i] = u), (e[c] = n), (i = c);
              }
            }
          }
          return t;
        }
        function r(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var a = performance;
          t.unstable_now = function () {
            return a.now();
          };
        } else {
          var s = Date,
            l = s.now();
          t.unstable_now = function () {
            return s.now() - l;
          };
        }
        var c = [],
          u = [],
          d = 1,
          h = null,
          p = 3,
          f = !1,
          v = !1,
          g = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          m = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = i(u); null !== t; ) {
            if (null === t.callback) o(u);
            else {
              if (!(t.startTime <= e)) break;
              o(u), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = i(u);
          }
        }
        function S(e) {
          if (((g = !1), w(e), !v))
            if (null !== i(c)) (v = !0), V(_);
            else {
              var t = i(u);
              null !== t && L(S, t.startTime - e);
            }
        }
        function _(e, n) {
          (v = !1), g && ((g = !1), m(k), (k = -1)), (f = !0);
          var r = p;
          try {
            for (
              w(n), h = i(c);
              null !== h && (!(h.expirationTime > n) || (e && !M()));

            ) {
              var a = h.callback;
              if ("function" === typeof a) {
                (h.callback = null), (p = h.priorityLevel);
                var s = a(h.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof s
                    ? (h.callback = s)
                    : h === i(c) && o(c),
                  w(n);
              } else o(c);
              h = i(c);
            }
            if (null !== h) var l = !0;
            else {
              var d = i(u);
              null !== d && L(S, d.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (h = null), (p = r), (f = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var P,
          x = !1,
          C = null,
          k = -1,
          O = 5,
          E = -1;
        function M() {
          return !(t.unstable_now() - E < O);
        }
        function R() {
          if (null !== C) {
            var e = t.unstable_now();
            E = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? P() : ((x = !1), (C = null));
            }
          } else x = !1;
        }
        if ("function" === typeof b)
          P = function () {
            b(R);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var T = new MessageChannel(),
            A = T.port2;
          (T.port1.onmessage = R),
            (P = function () {
              A.postMessage(null);
            });
        } else
          P = function () {
            y(R, 0);
          };
        function V(e) {
          (C = e), x || ((x = !0), P());
        }
        function L(e, n) {
          k = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || f || ((v = !0), V(_));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (O = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return i(c);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, r) {
            var a = t.unstable_now();
            switch (
              ("object" === typeof r && null !== r
                ? (r = "number" === typeof (r = r.delay) && 0 < r ? a + r : a)
                : (r = a),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: o,
                priorityLevel: e,
                startTime: r,
                expirationTime: (s = r + s),
                sortIndex: -1,
              }),
              r > a
                ? ((e.sortIndex = r),
                  n(u, e),
                  null === i(c) &&
                    e === i(u) &&
                    (g ? (m(k), (k = -1)) : (g = !0), L(S, r - a)))
                : ((e.sortIndex = s), n(c, e), v || f || ((v = !0), V(_))),
              e
            );
          }),
          (t.unstable_shouldYield = M),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      5296: function (e, t, n) {
        "use strict";
        e.exports = n(6813);
      },
      9613: function (e) {
        e.exports = function (e, t, n, i) {
          var o = n ? n.call(i, e, t) : void 0;
          if (void 0 !== o) return !!o;
          if (e === t) return !0;
          if ("object" !== typeof e || !e || "object" !== typeof t || !t)
            return !1;
          var r = Object.keys(e),
            a = Object.keys(t);
          if (r.length !== a.length) return !1;
          for (
            var s = Object.prototype.hasOwnProperty.bind(t), l = 0;
            l < r.length;
            l++
          ) {
            var c = r[l];
            if (!s(c)) return !1;
            var u = e[c],
              d = t[c];
            if (
              !1 === (o = n ? n.call(i, u, d, c) : void 0) ||
              (void 0 === o && u !== d)
            )
              return !1;
          }
          return !0;
        };
      },
      7427: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Canvas = void 0);
        const i = n(233),
          o = n(6923),
          r = n(9425),
          a = n(5745);
        t.Canvas = class {
          constructor(e) {
            (this.container = e),
              (this.size = { height: 0, width: 0 }),
              (this.context = null),
              (this.generatedCanvas = !1);
          }
          init() {
            this.resize(),
              this.initStyle(),
              this.initCover(),
              this.initTrail(),
              this.initBackground(),
              this.paint();
          }
          loadCanvas(e) {
            var t;
            this.generatedCanvas &&
              (null === (t = this.element) || void 0 === t || t.remove()),
              (this.generatedCanvas =
                e.dataset && r.Constants.generatedAttribute in e.dataset
                  ? "true" === e.dataset[r.Constants.generatedAttribute]
                  : this.generatedCanvas),
              (this.element = e),
              (this.originalStyle = (0, a.deepExtend)({}, this.element.style)),
              (this.size.height = e.offsetHeight),
              (this.size.width = e.offsetWidth),
              (this.context = this.element.getContext("2d")),
              this.container.retina.init(),
              this.initBackground();
          }
          destroy() {
            var e;
            this.generatedCanvas &&
              (null === (e = this.element) || void 0 === e || e.remove()),
              this.draw((e) => {
                (0, i.clear)(e, this.size);
              });
          }
          paint() {
            const e = this.container.actualOptions;
            this.draw((t) => {
              e.backgroundMask.enable && e.backgroundMask.cover
                ? ((0, i.clear)(t, this.size),
                  this.paintBase(this.coverColorStyle))
                : this.paintBase();
            });
          }
          clear() {
            const e = this.container.actualOptions,
              t = e.particles.move.trail;
            e.backgroundMask.enable
              ? this.paint()
              : t.enable && t.length > 0 && this.trailFillColor
              ? this.paintBase(
                  (0, o.getStyleFromRgb)(this.trailFillColor, 1 / t.length)
                )
              : this.draw((e) => {
                  (0, i.clear)(e, this.size);
                });
          }
          async windowResize() {
            if (!this.element) return;
            this.resize();
            const e = this.container,
              t = e.updateActualOptions();
            e.particles.setDensity();
            for (const [, n] of e.plugins) void 0 !== n.resize && n.resize();
            t && (await e.refresh());
          }
          resize() {
            if (!this.element) return;
            const e = this.container,
              t = e.retina.pixelRatio,
              n = e.canvas.size,
              i = this.element.offsetWidth * t,
              o = this.element.offsetHeight * t;
            if (
              o === n.height &&
              i === n.width &&
              o === this.element.height &&
              i === this.element.width
            )
              return;
            const r = Object.assign({}, n);
            (this.element.width = n.width = this.element.offsetWidth * t),
              (this.element.height = n.height = this.element.offsetHeight * t),
              this.container.started &&
                (this.resizeFactor = {
                  width: n.width / r.width,
                  height: n.height / r.height,
                });
          }
          drawConnectLine(e, t) {
            this.draw((n) => {
              var o;
              const r = this.lineStyle(e, t);
              if (!r) return;
              const a = e.getPosition(),
                s = t.getPosition();
              (0, i.drawConnectLine)(
                n,
                null !== (o = e.retina.linksWidth) && void 0 !== o
                  ? o
                  : this.container.retina.linksWidth,
                r,
                a,
                s
              );
            });
          }
          drawGrabLine(e, t, n, o) {
            const r = this.container;
            this.draw((a) => {
              var s;
              const l = e.getPosition();
              (0, i.drawGrabLine)(
                a,
                null !== (s = e.retina.linksWidth) && void 0 !== s
                  ? s
                  : r.retina.linksWidth,
                l,
                o,
                t,
                n
              );
            });
          }
          drawParticle(e, t) {
            var n, r, a, s, l, c;
            if (e.spawning || e.destroyed) return;
            const u = e.getRadius();
            if (u <= 0) return;
            const d = e.getFillColor(),
              h = null !== (n = e.getStrokeColor()) && void 0 !== n ? n : d;
            if (!d && !h) return;
            let [p, f] = this.getPluginParticleColors(e);
            (p && f) || (p || (p = d || void 0), f || (f = h || void 0));
            const v = this.container.actualOptions,
              g = e.options.zIndex,
              y = (1 - e.zIndexFactor) ** g.opacityRate,
              m =
                null !==
                  (s =
                    null !== (r = e.bubble.opacity) && void 0 !== r
                      ? r
                      : null === (a = e.opacity) || void 0 === a
                      ? void 0
                      : a.value) && void 0 !== s
                  ? s
                  : 1,
              b =
                null !==
                  (c =
                    null === (l = e.stroke) || void 0 === l
                      ? void 0
                      : l.opacity) && void 0 !== c
                  ? c
                  : m,
              w = m * y,
              S = b * y,
              _ = { fill: p ? (0, o.getStyleFromHsl)(p, w) : void 0 };
            (_.stroke = f ? (0, o.getStyleFromHsl)(f, S) : _.fill),
              this.draw((n) => {
                const o = (1 - e.zIndexFactor) ** g.sizeRate,
                  r = this.container;
                for (const t of r.particles.updaters)
                  if ((t.beforeDraw && t.beforeDraw(e), t.getColorStyles)) {
                    const { fill: i, stroke: o } = t.getColorStyles(e, n, u, w);
                    i && (_.fill = i), o && (_.stroke = o);
                  }
                (0, i.drawParticle)(
                  r,
                  n,
                  e,
                  t,
                  _,
                  v.backgroundMask.enable,
                  v.backgroundMask.composite,
                  u * o,
                  w,
                  e.options.shadow
                );
                for (const t of r.particles.updaters)
                  t.afterDraw && t.afterDraw(e);
              });
          }
          drawPlugin(e, t) {
            this.draw((n) => {
              (0, i.drawPlugin)(n, e, t);
            });
          }
          drawParticlePlugin(e, t, n) {
            this.draw((o) => {
              (0, i.drawParticlePlugin)(o, e, t, n);
            });
          }
          initBackground() {
            const e = this.container.actualOptions.background,
              t = this.element,
              n = null === t || void 0 === t ? void 0 : t.style;
            if (n) {
              if (e.color) {
                const t = (0, o.colorToRgb)(e.color);
                n.backgroundColor = t
                  ? (0, o.getStyleFromRgb)(t, e.opacity)
                  : "";
              } else n.backgroundColor = "";
              (n.backgroundImage = e.image || ""),
                (n.backgroundPosition = e.position || ""),
                (n.backgroundRepeat = e.repeat || ""),
                (n.backgroundSize = e.size || "");
            }
          }
          draw(e) {
            if (this.context) return e(this.context);
          }
          initCover() {
            const e = this.container.actualOptions.backgroundMask.cover,
              t = e.color,
              n = (0, o.colorToRgb)(t);
            if (n) {
              const t = { r: n.r, g: n.g, b: n.b, a: e.opacity };
              this.coverColorStyle = (0, o.getStyleFromRgb)(t, t.a);
            }
          }
          initTrail() {
            const e = this.container.actualOptions,
              t = e.particles.move.trail,
              n = (0, o.colorToRgb)(t.fillColor);
            if (n) {
              const t = e.particles.move.trail;
              this.trailFillColor = { r: n.r, g: n.g, b: n.b, a: 1 / t.length };
            }
          }
          getPluginParticleColors(e) {
            let t, n;
            for (const [, i] of this.container.plugins)
              if (
                (!t &&
                  i.particleFillColor &&
                  (t = (0, o.colorToHsl)(i.particleFillColor(e))),
                !n &&
                  i.particleStrokeColor &&
                  (n = (0, o.colorToHsl)(i.particleStrokeColor(e))),
                t && n)
              )
                break;
            return [t, n];
          }
          initStyle() {
            const e = this.element,
              t = this.container.actualOptions;
            if (!e) return;
            const n = this.originalStyle;
            t.fullScreen.enable
              ? ((this.originalStyle = (0, a.deepExtend)({}, e.style)),
                e.style.setProperty("position", "fixed", "important"),
                e.style.setProperty(
                  "z-index",
                  t.fullScreen.zIndex.toString(10),
                  "important"
                ),
                e.style.setProperty("top", "0", "important"),
                e.style.setProperty("left", "0", "important"),
                e.style.setProperty("width", "100%", "important"),
                e.style.setProperty("height", "100%", "important"))
              : n &&
                ((e.style.position = n.position),
                (e.style.zIndex = n.zIndex),
                (e.style.top = n.top),
                (e.style.left = n.left),
                (e.style.width = n.width),
                (e.style.height = n.height));
            for (const i in t.style) {
              if (!i || !t.style) continue;
              const n = t.style[i];
              n && e.style.setProperty(i, n, "important");
            }
          }
          paintBase(e) {
            this.draw((t) => {
              (0, i.paintBase)(t, this.size, e);
            });
          }
          lineStyle(e, t) {
            return this.draw((n) => {
              const o =
                this.container.actualOptions.interactivity.modes.connect;
              return (0, i.gradient)(n, e, t, o.links.opacity);
            });
          }
        };
      },
      232: function (e, t, n) {
        "use strict";
        var i,
          o =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, n, i, o) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !o)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" === typeof t ? e !== t || !o : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              return (
                "a" === i ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n
              );
            },
          r =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, n, i) {
              if ("a" === n && !i)
                throw new TypeError(
                  "Private accessor was defined without a getter"
                );
              if ("function" === typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError(
                  "Cannot read private member from an object whose class did not declare it"
                );
              return "m" === n
                ? i
                : "a" === n
                ? i.call(e)
                : i
                ? i.value
                : t.get(e);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Container = void 0);
        const a = n(5745),
          s = n(7427),
          l = n(8393),
          c = n(8486),
          u = n(8315),
          d = n(9983),
          h = n(8137),
          p = n(3542),
          f = n(4407);
        (t.Container = class {
          constructor(e, t, n) {
            (this.id = t),
              i.set(this, void 0),
              o(this, i, e, "f"),
              (this.fpsLimit = 120),
              (this.duration = 0),
              (this.lifeTime = 0),
              (this.firstStart = !0),
              (this.started = !1),
              (this.destroyed = !1),
              (this.paused = !0),
              (this.lastFrameTime = 0),
              (this.zLayers = 100),
              (this.pageHidden = !1),
              (this._sourceOptions = n),
              (this._initialSourceOptions = n),
              (this.retina = new h.Retina(this)),
              (this.canvas = new s.Canvas(this)),
              (this.particles = new d.Particles(r(this, i, "f"), this)),
              (this.drawer = new c.FrameManager(this));
            for (
              var a = arguments.length, f = new Array(a > 3 ? a - 3 : 0), v = 3;
              v < a;
              v++
            )
              f[v - 3] = arguments[v];
            (this.presets = f),
              (this.pathGenerator = {
                generate: () => {
                  const e = p.Vector.create(0, 0);
                  return (
                    (e.length = Math.random()),
                    (e.angle = Math.random() * Math.PI * 2),
                    e
                  );
                },
                init: () => {},
                update: () => {},
              }),
              (this.interactivity = { mouse: { clicking: !1, inside: !1 } }),
              (this.plugins = new Map()),
              (this.drawers = new Map()),
              (this.density = 1),
              (this._options = new u.Options(r(this, i, "f"))),
              (this.actualOptions = new u.Options(r(this, i, "f"))),
              (this.eventListeners = new l.EventListeners(this)),
              "undefined" !== typeof IntersectionObserver &&
                IntersectionObserver &&
                (this.intersectionObserver = new IntersectionObserver((e) =>
                  this.intersectionManager(e)
                ));
          }
          get options() {
            return this._options;
          }
          get sourceOptions() {
            return this._sourceOptions;
          }
          play(e) {
            const t = this.paused || e;
            if (!this.firstStart || this.actualOptions.autoPlay) {
              if ((this.paused && (this.paused = !1), t))
                for (const [, e] of this.plugins) e.play && e.play();
              this.draw(t || !1);
            } else this.firstStart = !1;
          }
          pause() {
            if (
              (void 0 !== this.drawAnimationFrame &&
                ((0, a.cancelAnimation)()(this.drawAnimationFrame),
                delete this.drawAnimationFrame),
              !this.paused)
            ) {
              for (const [, e] of this.plugins) e.pause && e.pause();
              this.pageHidden || (this.paused = !0);
            }
          }
          draw(e) {
            let t = e;
            this.drawAnimationFrame = (0, a.animate)()(async (e) => {
              t && ((this.lastFrameTime = void 0), (t = !1)),
                await this.drawer.nextFrame(e);
            });
          }
          getAnimationStatus() {
            return !this.paused && !this.pageHidden;
          }
          setNoise(e, t, n) {
            this.setPath(e, t, n);
          }
          setPath(e, t, n) {
            var i, o, r;
            if (e)
              if ("function" === typeof e)
                (this.pathGenerator.generate = e),
                  t && (this.pathGenerator.init = t),
                  n && (this.pathGenerator.update = n);
              else {
                const t = this.pathGenerator;
                (this.pathGenerator = e),
                  (i = this.pathGenerator).generate ||
                    (i.generate = t.generate),
                  (o = this.pathGenerator).init || (o.init = t.init),
                  (r = this.pathGenerator).update || (r.update = t.update);
              }
          }
          destroy() {
            this.stop(), this.canvas.destroy();
            for (const [, e] of this.drawers) e.destroy && e.destroy(this);
            for (const e of this.drawers.keys()) this.drawers.delete(e);
            this.destroyed = !0;
          }
          exportImg(e) {
            this.exportImage(e);
          }
          exportImage(e, t, n) {
            var i;
            return null === (i = this.canvas.element) || void 0 === i
              ? void 0
              : i.toBlob(e, null !== t && void 0 !== t ? t : "image/png", n);
          }
          exportConfiguration() {
            return JSON.stringify(this.actualOptions, void 0, 2);
          }
          refresh() {
            return this.stop(), this.start();
          }
          reset() {
            return (
              (this._options = new u.Options(r(this, i, "f"))), this.refresh()
            );
          }
          stop() {
            if (this.started) {
              (this.firstStart = !0),
                (this.started = !1),
                this.eventListeners.removeListeners(),
                this.pause(),
                this.particles.clear(),
                this.canvas.clear(),
                this.interactivity.element instanceof HTMLElement &&
                  this.intersectionObserver &&
                  this.intersectionObserver.unobserve(
                    this.interactivity.element
                  );
              for (const [, e] of this.plugins) e.stop && e.stop();
              for (const e of this.plugins.keys()) this.plugins.delete(e);
              (this.particles.linksColors = new Map()),
                delete this.particles.grabLineColor,
                delete this.particles.linksColor,
                (this._sourceOptions = this._options);
            }
          }
          async loadTheme(e) {
            (this.currentTheme = e), await this.refresh();
          }
          async start() {
            if (!this.started) {
              await this.init(),
                (this.started = !0),
                this.eventListeners.addListeners(),
                this.interactivity.element instanceof HTMLElement &&
                  this.intersectionObserver &&
                  this.intersectionObserver.observe(this.interactivity.element);
              for (const [, e] of this.plugins)
                void 0 !== e.startAsync
                  ? await e.startAsync()
                  : void 0 !== e.start && e.start();
              this.play();
            }
          }
          addClickHandler(e) {
            const t = this.interactivity.element;
            if (!t) return;
            const n = (t, n, i) => {
              if (this.destroyed) return;
              const o = this.retina.pixelRatio,
                r = { x: n.x * o, y: n.y * o },
                a = this.particles.quadTree.queryCircle(r, i * o);
              e(t, a);
            };
            let i = !1,
              o = !1;
            t.addEventListener("click", (e) => {
              if (this.destroyed) return;
              const t = e,
                i = { x: t.offsetX || t.clientX, y: t.offsetY || t.clientY };
              n(e, i, 1);
            }),
              t.addEventListener("touchstart", () => {
                this.destroyed || ((i = !0), (o = !1));
              }),
              t.addEventListener("touchmove", () => {
                this.destroyed || (o = !0);
              }),
              t.addEventListener("touchend", (e) => {
                var t, r, a;
                if (!this.destroyed) {
                  if (i && !o) {
                    const i = e;
                    let o = i.touches[i.touches.length - 1];
                    if (
                      !o &&
                      ((o = i.changedTouches[i.changedTouches.length - 1]), !o)
                    )
                      return;
                    const s =
                        null === (t = this.canvas.element) || void 0 === t
                          ? void 0
                          : t.getBoundingClientRect(),
                      l = {
                        x:
                          o.clientX -
                          (null !==
                            (r =
                              null === s || void 0 === s ? void 0 : s.left) &&
                          void 0 !== r
                            ? r
                            : 0),
                        y:
                          o.clientY -
                          (null !==
                            (a = null === s || void 0 === s ? void 0 : s.top) &&
                          void 0 !== a
                            ? a
                            : 0),
                      };
                    n(e, l, Math.max(o.radiusX, o.radiusY));
                  }
                  (i = !1), (o = !1);
                }
              }),
              t.addEventListener("touchcancel", () => {
                this.destroyed || ((i = !1), (o = !1));
              });
          }
          handleClickMode(e) {
            this.particles.handleClickMode(e);
            for (const [, t] of this.plugins)
              t.handleClickMode && t.handleClickMode(e);
          }
          updateActualOptions() {
            this.actualOptions.responsive = [];
            const e = this.actualOptions.setResponsive(
              this.canvas.size.width,
              this.retina.pixelRatio,
              this._options
            );
            return (
              this.actualOptions.setTheme(this.currentTheme),
              this.responsiveMaxWidth != e &&
                ((this.responsiveMaxWidth = e), !0)
            );
          }
          async init() {
            this._options = new u.Options(r(this, i, "f"));
            for (const o of this.presets)
              this._options.load(r(this, i, "f").plugins.getPreset(o));
            const e = r(this, i, "f").plugins.getSupportedShapes();
            for (const o of e) {
              const e = r(this, i, "f").plugins.getShapeDrawer(o);
              e && this.drawers.set(o, e);
            }
            this._options.load(this._initialSourceOptions),
              this._options.load(this._sourceOptions),
              (this.actualOptions = new u.Options(r(this, i, "f"))),
              this.actualOptions.load(this._options),
              this.retina.init(),
              this.canvas.init(),
              this.updateActualOptions(),
              this.canvas.initBackground(),
              this.canvas.resize(),
              (this.zLayers = this.actualOptions.zLayers),
              (this.duration = (0, f.getRangeValue)(
                this.actualOptions.duration
              )),
              (this.lifeTime = 0),
              (this.fpsLimit =
                this.actualOptions.fpsLimit > 0
                  ? this.actualOptions.fpsLimit
                  : 120);
            const t = r(this, i, "f").plugins.getAvailablePlugins(this);
            for (const [i, o] of t) this.plugins.set(i, o);
            for (const [, i] of this.drawers) i.init && (await i.init(this));
            for (const [, i] of this.plugins)
              i.init
                ? i.init(this.actualOptions)
                : void 0 !== i.initAsync &&
                  (await i.initAsync(this.actualOptions));
            const n = this.actualOptions.particles.move.path;
            n.generator &&
              this.setPath(
                r(this, i, "f").plugins.getPathGenerator(n.generator)
              ),
              this.particles.init(),
              this.particles.setDensity();
            for (const [, i] of this.plugins)
              void 0 !== i.particlesSetup && i.particlesSetup();
          }
          intersectionManager(e) {
            if (this.actualOptions.pauseOnOutsideViewport)
              for (const t of e)
                t.target === this.interactivity.element &&
                  (t.isIntersecting ? this.play() : this.pause());
          }
        }),
          (i = new WeakMap());
      },
      7758: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      1902: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      6810: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      4560: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      2758: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      308: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      3407: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      2874: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      5943: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      3781: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      8167: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      7978: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      5419: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      700: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      5595: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      3981: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      2397: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      3395: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      2909: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      8893: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      9202: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      9987: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      4410: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      1332: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      1918: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      4342: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      7144: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      4831: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      3261: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      3851: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      8260: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      2808: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      3266: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      9570: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      6878: function (e, t, n) {
        "use strict";
        var i,
          o =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, n, i, o) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !o)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" === typeof t ? e !== t || !o : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              return (
                "a" === i ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n
              );
            },
          r =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, n, i) {
              if ("a" === n && !i)
                throw new TypeError(
                  "Private accessor was defined without a getter"
                );
              if ("function" === typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError(
                  "Cannot read private member from an object whose class did not declare it"
                );
              return "m" === n
                ? i
                : "a" === n
                ? i.call(e)
                : i
                ? i.value
                : t.get(e);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Loader = void 0);
        const a = n(9425),
          s = n(232),
          l = n(5745);
        (t.Loader = class {
          constructor(e) {
            i.set(this, void 0), o(this, i, e, "f");
          }
          dom() {
            return r(this, i, "f").domArray;
          }
          domItem(e) {
            const t = this.dom(),
              n = t[e];
            if (n && !n.destroyed) return n;
            t.splice(e, 1);
          }
          async loadOptions(e) {
            var t, n, o;
            const c =
                null !== (t = e.tagId) && void 0 !== t
                  ? t
                  : `tsparticles${Math.floor(1e4 * Math.random())}`,
              { options: u, index: d } = e;
            let h =
              null !== (n = e.element) && void 0 !== n
                ? n
                : document.getElementById(c);
            h ||
              ((h = document.createElement("div")),
              (h.id = c),
              null === (o = document.querySelector("body")) ||
                void 0 === o ||
                o.append(h));
            const p = u instanceof Array ? (0, l.itemFromArray)(u, d) : u,
              f = this.dom(),
              v = f.findIndex((e) => e.id === c);
            if (v >= 0) {
              const e = this.domItem(v);
              e && !e.destroyed && (e.destroy(), f.splice(v, 1));
            }
            let g;
            if ("canvas" === h.tagName.toLowerCase())
              (g = h), (g.dataset[a.Constants.generatedAttribute] = "false");
            else {
              const e = h.getElementsByTagName("canvas");
              e.length
                ? ((g = e[0]),
                  (g.dataset[a.Constants.generatedAttribute] = "false"))
                : ((g = document.createElement("canvas")),
                  (g.dataset[a.Constants.generatedAttribute] = "true"),
                  (g.style.width = "100%"),
                  (g.style.height = "100%"),
                  h.appendChild(g));
            }
            const y = new s.Container(r(this, i, "f"), c, p);
            return (
              v >= 0 ? f.splice(v, 0, y) : f.push(y),
              y.canvas.loadCanvas(g),
              await y.start(),
              y
            );
          }
          async loadRemoteOptions(e) {
            const { url: t, index: n } = e,
              i = t instanceof Array ? (0, l.itemFromArray)(t, n) : t;
            if (!i) return;
            const o = await fetch(i);
            if (!o.ok)
              return (
                (r = o.status),
                console.error(`Error tsParticles - fetch status: ${r}`),
                void console.error("Error tsParticles - File config not found")
              );
            var r;
            const a = await o.json();
            return this.loadOptions({
              tagId: e.tagId,
              element: e.element,
              index: n,
              options: a,
            });
          }
          load(e, t, n) {
            const i = { index: n };
            return (
              "string" === typeof e ? (i.tagId = e) : (i.options = e),
              "number" === typeof t
                ? (i.index = null !== t && void 0 !== t ? t : i.index)
                : (i.options = null !== t && void 0 !== t ? t : i.options),
              this.loadOptions(i)
            );
          }
          async set(e, t, n, i) {
            const o = { index: i };
            return (
              "string" === typeof e ? (o.tagId = e) : (o.element = e),
              t instanceof HTMLElement ? (o.element = t) : (o.options = t),
              "number" === typeof n
                ? (o.index = n)
                : (o.options = null !== n && void 0 !== n ? n : o.options),
              this.loadOptions(o)
            );
          }
          async loadJSON(e, t, n) {
            let i, o;
            return (
              "number" === typeof t || void 0 === t
                ? (i = e)
                : ((o = e), (i = t)),
              this.loadRemoteOptions({ tagId: o, url: i, index: n })
            );
          }
          async setJSON(e, t, n, i) {
            let o, r, a, s;
            return (
              e instanceof HTMLElement
                ? ((s = e), (o = t), (a = n))
                : ((r = e), (s = t), (o = n), (a = i)),
              this.loadRemoteOptions({ tagId: r, url: o, index: a, element: s })
            );
          }
          setOnClickHandler(e) {
            const t = this.dom();
            if (!t.length)
              throw new Error(
                "Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()"
              );
            for (const n of t) n.addClickHandler(e);
          }
        }),
          (i = new WeakMap());
      },
      6730: function (e, t, n) {
        "use strict";
        var i,
          o =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, n, i, o) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !o)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" === typeof t ? e !== t || !o : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              return (
                "a" === i ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n
              );
            },
          r =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, n, i) {
              if ("a" === n && !i)
                throw new TypeError(
                  "Private accessor was defined without a getter"
                );
              if ("function" === typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError(
                  "Cannot read private member from an object whose class did not declare it"
                );
              return "m" === n
                ? i
                : "a" === n
                ? i.call(e)
                : i
                ? i.value
                : t.get(e);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Particle = void 0);
        const a = n(4407),
          s = n(6923),
          l = n(5745),
          c = n(7604),
          u = n(6584),
          d = n(3542),
          h = n(7638),
          p = n(233),
          f = (e) => {
            ((0, l.isInArray)(e.outMode, e.checkModes) ||
              (0, l.isInArray)(e.outMode, e.checkModes)) &&
              (e.coord > e.maxCoord - 2 * e.radius
                ? e.setCb(-e.radius)
                : e.coord < 2 * e.radius && e.setCb(e.radius));
          };
        (t.Particle = class {
          constructor(e, t, n, h, p, f) {
            var v, g, y, m, b, w, S;
            (this.id = t),
              (this.container = n),
              (this.group = f),
              i.set(this, void 0),
              o(this, i, e, "f"),
              (this.fill = !0),
              (this.close = !0),
              (this.lastPathTime = 0),
              (this.destroyed = !1),
              (this.unbreakable = !1),
              (this.splitCount = 0),
              (this.misplaced = !1),
              (this.retina = { maxDistance: {} }),
              (this.ignoresResizeRatio = !0);
            const _ = n.retina.pixelRatio,
              P = n.actualOptions,
              x = new c.ParticlesOptions();
            x.load(P.particles);
            const C = x.shape.type,
              k = x.reduceDuplicates;
            if (
              ((this.shape =
                C instanceof Array ? (0, l.itemFromArray)(C, this.id, k) : C),
              null === p || void 0 === p ? void 0 : p.shape)
            ) {
              if (p.shape.type) {
                const e = p.shape.type;
                this.shape =
                  e instanceof Array ? (0, l.itemFromArray)(e, this.id, k) : e;
              }
              const e = new u.Shape();
              e.load(p.shape),
                this.shape && (this.shapeData = this.loadShapeData(e, k));
            } else this.shapeData = this.loadShapeData(x.shape, k);
            void 0 !== p && x.load(p),
              void 0 !==
                (null === (v = this.shapeData) || void 0 === v
                  ? void 0
                  : v.particles) &&
                x.load(
                  null === (g = this.shapeData) || void 0 === g
                    ? void 0
                    : g.particles
                ),
              (this.fill =
                null !==
                  (m =
                    null === (y = this.shapeData) || void 0 === y
                      ? void 0
                      : y.fill) && void 0 !== m
                  ? m
                  : this.fill),
              (this.close =
                null !==
                  (w =
                    null === (b = this.shapeData) || void 0 === b
                      ? void 0
                      : b.close) && void 0 !== w
                  ? w
                  : this.close),
              (this.options = x),
              (this.pathDelay =
                1e3 * (0, a.getValue)(this.options.move.path.delay));
            const O = (0, a.getRangeValue)(this.options.zIndex.value);
            n.retina.initParticle(this);
            const E = this.options.size,
              M = E.value;
            this.size = {
              enable: E.animation.enable,
              value: (0, a.getValue)(E) * n.retina.pixelRatio,
              max: (0, a.getRangeMax)(M) * _,
              min: (0, a.getRangeMin)(M) * _,
              loops: 0,
              maxLoops: (0, a.getRangeValue)(E.animation.count),
            };
            const R = E.animation;
            if (R.enable) {
              switch (((this.size.status = 0), R.startValue)) {
                case "min":
                  (this.size.value = this.size.min), (this.size.status = 0);
                  break;
                case "random":
                  (this.size.value = (0, a.randomInRange)(this.size) * _),
                    (this.size.status = Math.random() >= 0.5 ? 0 : 1);
                  break;
                default:
                  (this.size.value = this.size.max), (this.size.status = 1);
              }
              (this.size.velocity =
                ((null !== (S = this.retina.sizeAnimationSpeed) && void 0 !== S
                  ? S
                  : n.retina.sizeAnimationSpeed) /
                  100) *
                n.retina.reduceFactor),
                R.sync || (this.size.velocity *= Math.random());
            }
            (this.direction = (0, a.getParticleDirectionAngle)(
              this.options.move.direction
            )),
              (this.bubble = { inRange: !1 }),
              (this.initialVelocity = this.calculateVelocity()),
              (this.velocity = this.initialVelocity.copy()),
              (this.moveDecay =
                1 - (0, a.getRangeValue)(this.options.move.decay));
            const T = this.options.move.gravity;
            (this.gravity = {
              enable: T.enable,
              acceleration: (0, a.getRangeValue)(T.acceleration),
              inverse: T.inverse,
            }),
              (this.position = this.calcPosition(
                n,
                h,
                (0, a.clamp)(O, 0, n.zLayers)
              )),
              (this.initialPosition = this.position.copy()),
              (this.offset = d.Vector.origin);
            const A = n.particles;
            (A.needsSort = A.needsSort || A.lastZIndex < this.position.z),
              (A.lastZIndex = this.position.z),
              (this.zIndexFactor = this.position.z / n.zLayers),
              (this.sides = 24);
            let V = n.drawers.get(this.shape);
            V ||
              ((V = r(this, i, "f").plugins.getShapeDrawer(this.shape)),
              V && n.drawers.set(this.shape, V)),
              (null === V || void 0 === V ? void 0 : V.loadShape) &&
                (null === V || void 0 === V || V.loadShape(this));
            const L = null === V || void 0 === V ? void 0 : V.getSidesCount;
            L && (this.sides = L(this)),
              (this.life = this.loadLife()),
              (this.spawning = this.life.delay > 0),
              (this.shadowColor = (0, s.colorToRgb)(this.options.shadow.color));
            for (const i of n.particles.updaters) i.init && i.init(this);
            V && V.particleInit && V.particleInit(n, this);
            for (const [, i] of n.plugins)
              i.particleCreated && i.particleCreated(this);
          }
          isVisible() {
            return !this.destroyed && !this.spawning && this.isInsideCanvas();
          }
          isInsideCanvas() {
            const e = this.getRadius(),
              t = this.container.canvas.size;
            return (
              this.position.x >= -e &&
              this.position.y >= -e &&
              this.position.y <= t.height + e &&
              this.position.x <= t.width + e
            );
          }
          draw(e) {
            const t = this.container;
            for (const [, n] of t.plugins)
              t.canvas.drawParticlePlugin(n, this, e);
            t.canvas.drawParticle(this, e);
          }
          getPosition() {
            return {
              x: this.position.x + this.offset.x,
              y: this.position.y + this.offset.y,
              z: this.position.z,
            };
          }
          getRadius() {
            var e;
            return null !== (e = this.bubble.radius) && void 0 !== e
              ? e
              : this.size.value;
          }
          getMass() {
            return (this.getRadius() ** 2 * Math.PI) / 2;
          }
          getFillColor() {
            var e, t;
            const n =
              null !== (e = this.bubble.color) && void 0 !== e
                ? e
                : (0, s.getHslFromAnimation)(this.color);
            if (n && this.roll && (this.backColor || this.roll.alter)) {
              const e = "both" === this.options.roll.mode ? 2 : 1,
                i = "horizontal" === this.options.roll.mode ? Math.PI / 2 : 0;
              if (
                Math.floor(
                  ((null !== (t = this.roll.angle) && void 0 !== t ? t : 0) +
                    i) /
                    (Math.PI / e)
                ) % 2
              ) {
                if (this.backColor) return this.backColor;
                if (this.roll.alter)
                  return (0, p.alterHsl)(
                    n,
                    this.roll.alter.type,
                    this.roll.alter.value
                  );
              }
            }
            return n;
          }
          getStrokeColor() {
            var e, t;
            return null !==
              (t =
                null !== (e = this.bubble.color) && void 0 !== e
                  ? e
                  : (0, s.getHslFromAnimation)(this.strokeColor)) &&
              void 0 !== t
              ? t
              : this.getFillColor();
          }
          destroy(e) {
            if (
              ((this.destroyed = !0),
              (this.bubble.inRange = !1),
              this.unbreakable)
            )
              return;
            (this.destroyed = !0), (this.bubble.inRange = !1);
            for (const [, t] of this.container.plugins)
              t.particleDestroyed && t.particleDestroyed(this, e);
            if (e) return;
            "split" === this.options.destroy.mode && this.split();
          }
          reset() {
            this.opacity && (this.opacity.loops = 0), (this.size.loops = 0);
          }
          split() {
            const e = this.options.destroy.split;
            if (e.count >= 0 && this.splitCount++ > e.count) return;
            const t = (0, a.getRangeValue)(e.rate.value);
            for (let n = 0; n < t; n++)
              this.container.particles.addSplitParticle(this);
          }
          calcPosition(e, t, n) {
            let i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0;
            var o, r, s, l;
            for (const [, a] of e.plugins) {
              const e =
                void 0 !== a.particlePosition
                  ? a.particlePosition(t, this)
                  : void 0;
              if (void 0 !== e) return h.Vector3d.create(e.x, e.y, n);
            }
            const c = e.canvas.size,
              u = (0, a.calcExactPositionOrRandomFromSize)({
                size: c,
                position: t,
              }),
              d = h.Vector3d.create(u.x, u.y, n),
              p = this.getRadius(),
              v = this.options.move.outModes,
              g = (t) => {
                f({
                  outMode: t,
                  checkModes: ["bounce", "bounce-horizontal"],
                  coord: d.x,
                  maxCoord: e.canvas.size.width,
                  setCb: (e) => (d.x += e),
                  radius: p,
                });
              },
              y = (t) => {
                f({
                  outMode: t,
                  checkModes: ["bounce", "bounce-vertical"],
                  coord: d.y,
                  maxCoord: e.canvas.size.height,
                  setCb: (e) => (d.y += e),
                  radius: p,
                });
              };
            return (
              g(null !== (o = v.left) && void 0 !== o ? o : v.default),
              g(null !== (r = v.right) && void 0 !== r ? r : v.default),
              y(null !== (s = v.top) && void 0 !== s ? s : v.default),
              y(null !== (l = v.bottom) && void 0 !== l ? l : v.default),
              this.checkOverlap(d, i)
                ? this.calcPosition(e, void 0, n, i + 1)
                : d
            );
          }
          checkOverlap(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            const n = this.options.collisions,
              i = this.getRadius();
            if (!n.enable) return !1;
            const o = n.overlap;
            if (o.enable) return !1;
            const r = o.retries;
            if (r >= 0 && t > r)
              throw new Error("Particle is overlapping and can't be placed");
            let s = !1;
            for (const l of this.container.particles.array)
              if ((0, a.getDistance)(e, l.position) < i + l.getRadius()) {
                s = !0;
                break;
              }
            return s;
          }
          calculateVelocity() {
            const e = (0, a.getParticleBaseVelocity)(this.direction).copy(),
              t = this.options.move,
              n = (Math.PI / 180) * (0, a.getRangeValue)(t.angle.value),
              i = (Math.PI / 180) * (0, a.getRangeValue)(t.angle.offset),
              o = { left: i - n / 2, right: i + n / 2 };
            return (
              t.straight ||
                (e.angle += (0, a.randomInRange)(
                  (0, a.setRangeValue)(o.left, o.right)
                )),
              t.random &&
                "number" === typeof t.speed &&
                (e.length *= Math.random()),
              e
            );
          }
          loadShapeData(e, t) {
            const n = e.options[this.shape];
            if (n)
              return (0, l.deepExtend)(
                {},
                n instanceof Array ? (0, l.itemFromArray)(n, this.id, t) : n
              );
          }
          loadLife() {
            const e = this.container,
              t = this.options,
              n = t.life,
              i = {
                delay: e.retina.reduceFactor
                  ? (((0, a.getRangeValue)(n.delay.value) *
                      (n.delay.sync ? 1 : Math.random())) /
                      e.retina.reduceFactor) *
                    1e3
                  : 0,
                delayTime: 0,
                duration: e.retina.reduceFactor
                  ? (((0, a.getRangeValue)(n.duration.value) *
                      (n.duration.sync ? 1 : Math.random())) /
                      e.retina.reduceFactor) *
                    1e3
                  : 0,
                time: 0,
                count: t.life.count,
              };
            return (
              i.duration <= 0 && (i.duration = -1),
              i.count <= 0 && (i.count = -1),
              i
            );
          }
        }),
          (i = new WeakMap());
      },
      9983: function (e, t, n) {
        "use strict";
        var i,
          o =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, n, i, o) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !o)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" === typeof t ? e !== t || !o : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              return (
                "a" === i ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n
              );
            },
          r =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, n, i) {
              if ("a" === n && !i)
                throw new TypeError(
                  "Private accessor was defined without a getter"
                );
              if ("function" === typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError(
                  "Cannot read private member from an object whose class did not declare it"
                );
              return "m" === n
                ? i
                : "a" === n
                ? i.call(e)
                : i
                ? i.value
                : t.get(e);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Particles = void 0);
        const a = n(4407),
          s = n(4781),
          l = n(6730),
          c = n(7604),
          u = n(9704),
          d = n(3187),
          h = n(24);
        (t.Particles = class {
          constructor(e, t) {
            (this.container = t),
              i.set(this, void 0),
              o(this, i, e, "f"),
              (this.nextId = 0),
              (this.array = []),
              (this.zArray = []),
              (this.limit = 0),
              (this.needsSort = !1),
              (this.lastZIndex = 0),
              (this.freqs = { links: new Map(), triangles: new Map() }),
              (this.interactionManager = new s.InteractionManager(
                r(this, i, "f"),
                t
              ));
            const n = this.container.canvas.size;
            (this.linksColors = new Map()),
              (this.quadTree = new d.QuadTree(
                new h.Rectangle(
                  -n.width / 4,
                  -n.height / 4,
                  (3 * n.width) / 2,
                  (3 * n.height) / 2
                ),
                4
              )),
              (this.movers = r(this, i, "f").plugins.getMovers(t, !0)),
              (this.updaters = r(this, i, "f").plugins.getUpdaters(t, !0));
          }
          get count() {
            return this.array.length;
          }
          init() {
            var e;
            const t = this.container,
              n = t.actualOptions;
            (this.lastZIndex = 0),
              (this.needsSort = !1),
              (this.freqs.links = new Map()),
              (this.freqs.triangles = new Map());
            let o = !1;
            (this.updaters = r(this, i, "f").plugins.getUpdaters(t, !0)),
              this.interactionManager.init();
            for (const [, i] of t.plugins)
              if (
                (void 0 !== i.particlesInitialization &&
                  (o = i.particlesInitialization()),
                o)
              )
                break;
            if ((this.addManualParticles(), !o)) {
              for (const t in n.particles.groups) {
                const i = n.particles.groups[t];
                for (
                  let o = this.count, r = 0;
                  r <
                    (null === (e = i.number) || void 0 === e
                      ? void 0
                      : e.value) && o < n.particles.number.value;
                  o++, r++
                )
                  this.addParticle(void 0, i, t);
              }
              for (let e = this.count; e < n.particles.number.value; e++)
                this.addParticle();
            }
            t.pathGenerator.init(t);
          }
          async redraw() {
            this.clear(), this.init(), await this.draw({ value: 0, factor: 0 });
          }
          removeAt(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1,
              n = arguments.length > 2 ? arguments[2] : void 0,
              i = arguments.length > 3 ? arguments[3] : void 0;
            if (!(e >= 0 && e <= this.count)) return;
            let o = 0;
            for (let r = e; o < t && r < this.count; r++) {
              const e = this.array[r];
              if (!e || e.group !== n) continue;
              e.destroy(i), this.array.splice(r--, 1);
              const t = this.zArray.indexOf(e);
              this.zArray.splice(t, 1), o++;
            }
          }
          remove(e, t, n) {
            this.removeAt(this.array.indexOf(e), void 0, t, n);
          }
          async update(e) {
            const t = this.container,
              n = [];
            t.pathGenerator.update();
            for (const [, i] of t.plugins) void 0 !== i.update && i.update(e);
            for (const i of this.array) {
              const o = t.canvas.resizeFactor;
              o &&
                !i.ignoresResizeRatio &&
                ((i.position.x *= o.width), (i.position.y *= o.height)),
                (i.ignoresResizeRatio = !1),
                (i.bubble.inRange = !1);
              for (const [, t] of this.container.plugins) {
                if (i.destroyed) break;
                t.particleUpdate && t.particleUpdate(i, e);
              }
              for (const t of this.movers) t.isEnabled(i) && t.move(i, e);
              i.destroyed
                ? n.push(i)
                : this.quadTree.insert(new u.Point(i.getPosition(), i));
            }
            for (const i of n) this.remove(i);
            await this.interactionManager.externalInteract(e);
            for (const i of t.particles.array) {
              for (const t of this.updaters) t.update(i, e);
              i.destroyed ||
                i.spawning ||
                (await this.interactionManager.particlesInteract(i, e));
            }
            delete t.canvas.resizeFactor;
          }
          async draw(e) {
            const t = this.container,
              n = this.container.canvas.size;
            (this.quadTree = new d.QuadTree(
              new h.Rectangle(
                -n.width / 4,
                -n.height / 4,
                (3 * n.width) / 2,
                (3 * n.height) / 2
              ),
              4
            )),
              t.canvas.clear(),
              await this.update(e),
              this.needsSort &&
                (this.zArray.sort(
                  (e, t) => t.position.z - e.position.z || e.id - t.id
                ),
                (this.lastZIndex =
                  this.zArray[this.zArray.length - 1].position.z),
                (this.needsSort = !1));
            for (const [, i] of t.plugins) t.canvas.drawPlugin(i, e);
            for (const i of this.zArray) i.draw(e);
          }
          clear() {
            (this.array = []), (this.zArray = []);
          }
          push(e, t, n, i) {
            this.pushing = !0;
            for (let o = 0; o < e; o++)
              this.addParticle(
                null === t || void 0 === t ? void 0 : t.position,
                n,
                i
              );
            this.pushing = !1;
          }
          addParticle(e, t, n) {
            const i = this.container,
              o = i.actualOptions.particles.number.limit * i.density;
            if (o > 0) {
              const e = this.count + 1 - o;
              e > 0 && this.removeQuantity(e);
            }
            return this.pushParticle(e, t, n);
          }
          addSplitParticle(e) {
            const t = e.options.destroy.split,
              n = new c.ParticlesOptions();
            n.load(e.options);
            const i = (0, a.getRangeValue)(t.factor.value);
            n.color.load({ value: { hsl: e.getFillColor() } }),
              "number" === typeof n.size.value
                ? (n.size.value /= i)
                : ((n.size.value.min /= i), (n.size.value.max /= i)),
              n.load(t.particles);
            const o = t.sizeOffset
                ? (0, a.setRangeValue)(-e.size.value, e.size.value)
                : 0,
              r = {
                x: e.position.x + (0, a.randomInRange)(o),
                y: e.position.y + (0, a.randomInRange)(o),
              };
            return this.pushParticle(
              r,
              n,
              e.group,
              (t) =>
                !(t.size.value < 0.5) &&
                ((t.velocity.length = (0, a.randomInRange)(
                  (0, a.setRangeValue)(e.velocity.length, t.velocity.length)
                )),
                (t.splitCount = e.splitCount + 1),
                (t.unbreakable = !0),
                setTimeout(() => {
                  t.unbreakable = !1;
                }, 500),
                !0)
            );
          }
          removeQuantity(e, t) {
            this.removeAt(0, e, t);
          }
          getLinkFrequency(e, t) {
            const n = (0, a.setRangeValue)(e.id, t.id),
              i = `${(0, a.getRangeMin)(n)}_${(0, a.getRangeMax)(n)}`;
            let o = this.freqs.links.get(i);
            return (
              void 0 === o && ((o = Math.random()), this.freqs.links.set(i, o)),
              o
            );
          }
          getTriangleFrequency(e, t, n) {
            let [i, o, r] = [e.id, t.id, n.id];
            i > o && ([o, i] = [i, o]),
              o > r && ([r, o] = [o, r]),
              i > r && ([r, i] = [i, r]);
            const a = `${i}_${o}_${r}`;
            let s = this.freqs.triangles.get(a);
            return (
              void 0 === s &&
                ((s = Math.random()), this.freqs.triangles.set(a, s)),
              s
            );
          }
          addManualParticles() {
            const e = this.container,
              t = e.actualOptions;
            for (const n of t.manualParticles)
              this.addParticle(
                (0, a.calcPositionFromSize)({
                  size: e.canvas.size,
                  position: n.position,
                }),
                n.options
              );
          }
          setDensity() {
            const e = this.container.actualOptions;
            for (const t in e.particles.groups)
              this.applyDensity(e.particles.groups[t], 0, t);
            this.applyDensity(e.particles, e.manualParticles.length);
          }
          handleClickMode(e) {
            this.interactionManager.handleClickMode(e);
          }
          applyDensity(e, t, n) {
            var i;
            if (
              !(null === (i = e.number.density) || void 0 === i
                ? void 0
                : i.enable)
            )
              return;
            const o = e.number,
              r = this.initDensityFactor(o.density),
              a = o.value,
              s = o.limit > 0 ? o.limit : a,
              l = Math.min(a, s) * r + t,
              c = Math.min(
                this.count,
                this.array.filter((e) => e.group === n).length
              );
            (this.limit = o.limit * r),
              c < l
                ? this.push(Math.abs(l - c), void 0, e, n)
                : c > l && this.removeQuantity(c - l, n);
          }
          initDensityFactor(e) {
            const t = this.container;
            if (!t.canvas.element || !e.enable) return 1;
            const n = t.canvas.element,
              i = t.retina.pixelRatio;
            return (n.width * n.height) / (e.factor * i ** 2 * e.area);
          }
          pushParticle(e, t, n, o) {
            try {
              const a = new l.Particle(
                r(this, i, "f"),
                this.nextId,
                this.container,
                e,
                t,
                n
              );
              let s = !0;
              if ((o && (s = o(a)), !s)) return;
              return this.array.push(a), this.zArray.push(a), this.nextId++, a;
            } catch (a) {
              return void console.warn(`error adding particle: ${a}`);
            }
          }
        }),
          (i = new WeakMap());
      },
      8137: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Retina = void 0);
        const i = n(4407),
          o = n(5745);
        t.Retina = class {
          constructor(e) {
            this.container = e;
          }
          init() {
            const e = this.container,
              t = e.actualOptions;
            this.pixelRatio =
              !t.detectRetina || (0, o.isSsr)() ? 1 : window.devicePixelRatio;
            const n = this.container.actualOptions.motion;
            if (n && (n.disable || n.reduce.value))
              if (
                (0, o.isSsr)() ||
                "undefined" === typeof matchMedia ||
                !matchMedia
              )
                this.reduceFactor = 1;
              else {
                const t = matchMedia("(prefers-reduced-motion: reduce)");
                if (t) {
                  this.handleMotionChange(t);
                  const n = () => {
                    this.handleMotionChange(t), e.refresh().catch(() => {});
                  };
                  void 0 !== t.addEventListener
                    ? t.addEventListener("change", n)
                    : void 0 !== t.addListener && t.addListener(n);
                }
              }
            else this.reduceFactor = 1;
            const r = this.pixelRatio;
            if (e.canvas.element) {
              const t = e.canvas.element;
              (e.canvas.size.width = t.offsetWidth * r),
                (e.canvas.size.height = t.offsetHeight * r);
            }
            const a = t.particles;
            (this.attractDistance =
              (0, i.getRangeValue)(a.move.attract.distance) * r),
              (this.linksDistance = a.links.distance * r),
              (this.linksWidth = a.links.width * r),
              (this.sizeAnimationSpeed =
                (0, i.getRangeValue)(a.size.animation.speed) * r),
              (this.maxSpeed =
                (0, i.getRangeValue)(a.move.gravity.maxSpeed) * r);
            const s = t.interactivity.modes;
            (this.connectModeDistance = s.connect.distance * r),
              (this.connectModeRadius = s.connect.radius * r),
              (this.grabModeDistance = s.grab.distance * r),
              (this.repulseModeDistance = s.repulse.distance * r),
              (this.bounceModeDistance = s.bounce.distance * r),
              (this.attractModeDistance = s.attract.distance * r),
              (this.slowModeRadius = s.slow.radius * r),
              (this.bubbleModeDistance = s.bubble.distance * r),
              s.bubble.size && (this.bubbleModeSize = s.bubble.size * r);
          }
          initParticle(e) {
            const t = e.options,
              n = this.pixelRatio,
              o = t.move.distance,
              r = e.retina;
            (r.attractDistance =
              (0, i.getRangeValue)(t.move.attract.distance) * n),
              (r.linksDistance = t.links.distance * n),
              (r.linksWidth = t.links.width * n),
              (r.moveDrift = (0, i.getRangeValue)(t.move.drift) * n),
              (r.moveSpeed = (0, i.getRangeValue)(t.move.speed) * n),
              (r.sizeAnimationSpeed =
                (0, i.getRangeValue)(t.size.animation.speed) * n);
            const a = r.maxDistance;
            (a.horizontal =
              void 0 !== o.horizontal ? o.horizontal * n : void 0),
              (a.vertical = void 0 !== o.vertical ? o.vertical * n : void 0),
              (r.maxSpeed = (0, i.getRangeValue)(t.move.gravity.maxSpeed) * n);
          }
          handleMotionChange(e) {
            const t = this.container.actualOptions;
            if (e.matches) {
              const e = t.motion;
              this.reduceFactor = e.disable
                ? 0
                : e.reduce.value
                ? 1 / e.reduce.factor
                : 1;
            } else this.reduceFactor = 1;
          }
        };
      },
      3195: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Circle = void 0);
        const i = n(2747),
          o = n(4407);
        class r extends i.Range {
          constructor(e, t, n) {
            super(e, t), (this.radius = n);
          }
          contains(e) {
            return (0, o.getDistance)(e, this.position) <= this.radius;
          }
          intersects(e) {
            const t = e,
              n = e,
              i = this.position,
              o = e.position,
              r = Math.abs(o.x - i.x),
              a = Math.abs(o.y - i.y),
              s = this.radius;
            if (void 0 !== n.radius) {
              return s + n.radius > Math.sqrt(r * r + a + a);
            }
            if (void 0 !== t.size) {
              const e = t.size.width,
                n = t.size.height,
                i = Math.pow(r - e, 2) + Math.pow(a - n, 2);
              return (
                !(r > s + e || a > s + n) && (r <= e || a <= n || i <= s * s)
              );
            }
            return !1;
          }
        }
        t.Circle = r;
      },
      6939: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CircleWarp = void 0);
        const i = n(3195),
          o = n(24);
        class r extends i.Circle {
          constructor(e, t, n, i) {
            super(e, t, n),
              (this.canvasSize = i),
              (this.canvasSize = Object.assign({}, i));
          }
          contains(e) {
            if (super.contains(e)) return !0;
            const t = { x: e.x - this.canvasSize.width, y: e.y };
            if (super.contains(t)) return !0;
            const n = {
              x: e.x - this.canvasSize.width,
              y: e.y - this.canvasSize.height,
            };
            if (super.contains(n)) return !0;
            const i = { x: e.x, y: e.y - this.canvasSize.height };
            return super.contains(i);
          }
          intersects(e) {
            if (super.intersects(e)) return !0;
            const t = e,
              n = e,
              r = {
                x: e.position.x - this.canvasSize.width,
                y: e.position.y - this.canvasSize.height,
              };
            if (void 0 !== n.radius) {
              const e = new i.Circle(r.x, r.y, 2 * n.radius);
              return super.intersects(e);
            }
            if (void 0 !== t.size) {
              const e = new o.Rectangle(
                r.x,
                r.y,
                2 * t.size.width,
                2 * t.size.height
              );
              return super.intersects(e);
            }
            return !1;
          }
        }
        t.CircleWarp = r;
      },
      9425: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Constants = void 0);
        class n {}
        (t.Constants = n),
          (n.generatedAttribute = "generated"),
          (n.randomColorValue = "random"),
          (n.midColorValue = "mid"),
          (n.touchEndEvent = "touchend"),
          (n.mouseDownEvent = "mousedown"),
          (n.mouseUpEvent = "mouseup"),
          (n.mouseMoveEvent = "mousemove"),
          (n.touchStartEvent = "touchstart"),
          (n.touchMoveEvent = "touchmove"),
          (n.mouseLeaveEvent = "mouseleave"),
          (n.mouseOutEvent = "mouseout"),
          (n.touchCancelEvent = "touchcancel"),
          (n.resizeEvent = "resize"),
          (n.visibilityChangeEvent = "visibilitychange"),
          (n.noPolygonDataLoaded = "No polygon data loaded."),
          (n.noPolygonFound =
            "No polygon found, you need to specify SVG url in config.");
      },
      8393: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EventListeners = void 0);
        const i = n(9425),
          o = n(5745);
        function r(e, t, n, i, o) {
          if (i) {
            let i = { passive: !0 };
            "boolean" === typeof o ? (i.capture = o) : void 0 !== o && (i = o),
              e.addEventListener(t, n, i);
          } else {
            const i = o;
            e.removeEventListener(t, n, i);
          }
        }
        t.EventListeners = class {
          constructor(e) {
            (this.container = e),
              (this.canPush = !0),
              (this.mouseMoveHandler = (e) => this.mouseTouchMove(e)),
              (this.touchStartHandler = (e) => this.mouseTouchMove(e)),
              (this.touchMoveHandler = (e) => this.mouseTouchMove(e)),
              (this.touchEndHandler = () => this.mouseTouchFinish()),
              (this.mouseLeaveHandler = () => this.mouseTouchFinish()),
              (this.touchCancelHandler = () => this.mouseTouchFinish()),
              (this.touchEndClickHandler = (e) => this.mouseTouchClick(e)),
              (this.mouseUpHandler = (e) => this.mouseTouchClick(e)),
              (this.mouseDownHandler = () => this.mouseDown()),
              (this.visibilityChangeHandler = () =>
                this.handleVisibilityChange()),
              (this.themeChangeHandler = (e) => this.handleThemeChange(e)),
              (this.oldThemeChangeHandler = (e) => this.handleThemeChange(e)),
              (this.resizeHandler = () => this.handleWindowResize());
          }
          addListeners() {
            this.manageListeners(!0);
          }
          removeListeners() {
            this.manageListeners(!1);
          }
          manageListeners(e) {
            var t;
            const n = this.container,
              a = n.actualOptions,
              s = a.interactivity.detectsOn;
            let l = i.Constants.mouseLeaveEvent;
            if ("window" === s)
              (n.interactivity.element = window),
                (l = i.Constants.mouseOutEvent);
            else if ("parent" === s && n.canvas.element) {
              const e = n.canvas.element;
              n.interactivity.element =
                null !== (t = e.parentElement) && void 0 !== t
                  ? t
                  : e.parentNode;
            } else n.interactivity.element = n.canvas.element;
            const c =
              !(0, o.isSsr)() &&
              "undefined" !== typeof matchMedia &&
              matchMedia("(prefers-color-scheme: dark)");
            c &&
              (void 0 !== c.addEventListener
                ? r(c, "change", this.themeChangeHandler, e)
                : void 0 !== c.addListener &&
                  (e
                    ? c.addListener(this.oldThemeChangeHandler)
                    : c.removeListener(this.oldThemeChangeHandler)));
            const u = n.interactivity.element;
            if (!u) return;
            const d = u;
            (a.interactivity.events.onHover.enable ||
              a.interactivity.events.onClick.enable) &&
              (r(u, i.Constants.mouseMoveEvent, this.mouseMoveHandler, e),
              r(u, i.Constants.touchStartEvent, this.touchStartHandler, e),
              r(u, i.Constants.touchMoveEvent, this.touchMoveHandler, e),
              a.interactivity.events.onClick.enable
                ? (r(
                    u,
                    i.Constants.touchEndEvent,
                    this.touchEndClickHandler,
                    e
                  ),
                  r(u, i.Constants.mouseUpEvent, this.mouseUpHandler, e),
                  r(u, i.Constants.mouseDownEvent, this.mouseDownHandler, e))
                : r(u, i.Constants.touchEndEvent, this.touchEndHandler, e),
              r(u, l, this.mouseLeaveHandler, e),
              r(u, i.Constants.touchCancelEvent, this.touchCancelHandler, e)),
              n.canvas.element &&
                (n.canvas.element.style.pointerEvents =
                  d === n.canvas.element ? "initial" : "none"),
              a.interactivity.events.resize &&
                ("undefined" !== typeof ResizeObserver
                  ? this.resizeObserver && !e
                    ? (n.canvas.element &&
                        this.resizeObserver.unobserve(n.canvas.element),
                      this.resizeObserver.disconnect(),
                      delete this.resizeObserver)
                    : !this.resizeObserver &&
                      e &&
                      n.canvas.element &&
                      ((this.resizeObserver = new ResizeObserver((e) => {
                        e.find((e) => e.target === n.canvas.element) &&
                          this.handleWindowResize();
                      })),
                      this.resizeObserver.observe(n.canvas.element))
                  : r(window, i.Constants.resizeEvent, this.resizeHandler, e)),
              document &&
                r(
                  document,
                  i.Constants.visibilityChangeEvent,
                  this.visibilityChangeHandler,
                  e,
                  !1
                );
          }
          handleWindowResize() {
            this.resizeTimeout &&
              (clearTimeout(this.resizeTimeout), delete this.resizeTimeout),
              (this.resizeTimeout = setTimeout(async () => {
                var e;
                return await (null === (e = this.container.canvas) ||
                void 0 === e
                  ? void 0
                  : e.windowResize());
              }, 500));
          }
          handleVisibilityChange() {
            const e = this.container,
              t = e.actualOptions;
            this.mouseTouchFinish(),
              t.pauseOnBlur &&
                ((
                  null === document || void 0 === document
                    ? void 0
                    : document.hidden
                )
                  ? ((e.pageHidden = !0), e.pause())
                  : ((e.pageHidden = !1),
                    e.getAnimationStatus() ? e.play(!0) : e.draw(!0)));
          }
          mouseDown() {
            const e = this.container.interactivity;
            if (e) {
              const t = e.mouse;
              (t.clicking = !0), (t.downPosition = t.position);
            }
          }
          mouseTouchMove(e) {
            var t, n, o, r, a, s, l;
            const c = this.container,
              u = c.actualOptions;
            if (
              !(null === (t = c.interactivity) || void 0 === t
                ? void 0
                : t.element)
            )
              return;
            let d;
            c.interactivity.mouse.inside = !0;
            const h = c.canvas.element;
            if (e.type.startsWith("mouse")) {
              this.canPush = !0;
              const t = e;
              if (c.interactivity.element === window) {
                if (h) {
                  const e = h.getBoundingClientRect();
                  d = { x: t.clientX - e.left, y: t.clientY - e.top };
                }
              } else if ("parent" === u.interactivity.detectsOn) {
                const e = t.target,
                  i = t.currentTarget,
                  r = c.canvas.element;
                if (e && i && r) {
                  const n = e.getBoundingClientRect(),
                    o = i.getBoundingClientRect(),
                    a = r.getBoundingClientRect();
                  d = {
                    x: t.offsetX + 2 * n.left - (o.left + a.left),
                    y: t.offsetY + 2 * n.top - (o.top + a.top),
                  };
                } else
                  d = {
                    x: null !== (n = t.offsetX) && void 0 !== n ? n : t.clientX,
                    y: null !== (o = t.offsetY) && void 0 !== o ? o : t.clientY,
                  };
              } else
                t.target === c.canvas.element &&
                  (d = {
                    x: null !== (r = t.offsetX) && void 0 !== r ? r : t.clientX,
                    y: null !== (a = t.offsetY) && void 0 !== a ? a : t.clientY,
                  });
            } else {
              this.canPush = "touchmove" !== e.type;
              const t = e,
                n = t.touches[t.touches.length - 1],
                i =
                  null === h || void 0 === h
                    ? void 0
                    : h.getBoundingClientRect();
              d = {
                x:
                  n.clientX -
                  (null !==
                    (s = null === i || void 0 === i ? void 0 : i.left) &&
                  void 0 !== s
                    ? s
                    : 0),
                y:
                  n.clientY -
                  (null !== (l = null === i || void 0 === i ? void 0 : i.top) &&
                  void 0 !== l
                    ? l
                    : 0),
              };
            }
            const p = c.retina.pixelRatio;
            d && ((d.x *= p), (d.y *= p)),
              (c.interactivity.mouse.position = d),
              (c.interactivity.status = i.Constants.mouseMoveEvent);
          }
          mouseTouchFinish() {
            const e = this.container.interactivity;
            if (!e) return;
            const t = e.mouse;
            delete t.position,
              delete t.clickPosition,
              delete t.downPosition,
              (e.status = i.Constants.mouseLeaveEvent),
              (t.inside = !1),
              (t.clicking = !1);
          }
          mouseTouchClick(e) {
            const t = this.container,
              n = t.actualOptions,
              i = t.interactivity.mouse;
            i.inside = !0;
            let o = !1;
            const r = i.position;
            if (r && n.interactivity.events.onClick.enable) {
              for (const [, e] of t.plugins)
                if (e.clickPositionValid && ((o = e.clickPositionValid(r)), o))
                  break;
              o || this.doMouseTouchClick(e), (i.clicking = !1);
            }
          }
          doMouseTouchClick(e) {
            const t = this.container,
              n = t.actualOptions;
            if (this.canPush) {
              const e = t.interactivity.mouse.position;
              if (!e) return;
              (t.interactivity.mouse.clickPosition = { x: e.x, y: e.y }),
                (t.interactivity.mouse.clickTime = new Date().getTime());
              const i = n.interactivity.events.onClick;
              if (i.mode instanceof Array)
                for (const t of i.mode) this.handleClickMode(t);
              else this.handleClickMode(i.mode);
            }
            "touchend" === e.type &&
              setTimeout(() => this.mouseTouchFinish(), 500);
          }
          handleThemeChange(e) {
            const t = e.matches
                ? this.container.options.defaultDarkTheme
                : this.container.options.defaultLightTheme,
              n = this.container.options.themes.find((e) => e.name === t);
            n && n.default.auto && this.container.loadTheme(t);
          }
          handleClickMode(e) {
            this.container.handleClickMode(e);
          }
        };
      },
      4106: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ExternalInteractorBase = void 0);
        t.ExternalInteractorBase = class {
          constructor(e) {
            (this.container = e), (this.type = 0);
          }
        };
      },
      8486: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FrameManager = void 0);
        t.FrameManager = class {
          constructor(e) {
            this.container = e;
          }
          async nextFrame(e) {
            var t;
            try {
              const n = this.container;
              if (
                void 0 !== n.lastFrameTime &&
                e < n.lastFrameTime + 1e3 / n.fpsLimit
              )
                return void n.draw(!1);
              (null !== (t = n.lastFrameTime) && void 0 !== t) ||
                (n.lastFrameTime = e);
              const i = e - n.lastFrameTime,
                o = { value: i, factor: (60 * i) / 1e3 };
              if (((n.lifeTime += o.value), (n.lastFrameTime = e), i > 1e3))
                return void n.draw(!1);
              if (
                (await n.particles.draw(o),
                n.duration > 0 && n.lifeTime > n.duration)
              )
                return void n.destroy();
              n.getAnimationStatus() && n.draw(!1);
            } catch (n) {
              console.error("tsParticles error in animation loop", n);
            }
          }
        };
      },
      4781: function (e, t) {
        "use strict";
        var n,
          i =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, n, i, o) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !o)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" === typeof t ? e !== t || !o : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              return (
                "a" === i ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n
              );
            },
          o =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, n, i) {
              if ("a" === n && !i)
                throw new TypeError(
                  "Private accessor was defined without a getter"
                );
              if ("function" === typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError(
                  "Cannot read private member from an object whose class did not declare it"
                );
              return "m" === n
                ? i
                : "a" === n
                ? i.call(e)
                : i
                ? i.value
                : t.get(e);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.InteractionManager = void 0);
        (t.InteractionManager = class {
          constructor(e, t) {
            (this.container = t),
              n.set(this, void 0),
              i(this, n, e, "f"),
              (this.externalInteractors = []),
              (this.particleInteractors = []),
              this.init();
          }
          init() {
            const e = o(this, n, "f").plugins.getInteractors(
              this.container,
              !0
            );
            (this.externalInteractors = []), (this.particleInteractors = []);
            for (const t of e)
              switch (t.type) {
                case 0:
                  this.externalInteractors.push(t);
                  break;
                case 1:
                  this.particleInteractors.push(t);
              }
          }
          async externalInteract(e) {
            for (const t of this.externalInteractors)
              t.isEnabled() && (await t.interact(e));
          }
          async particlesInteract(e, t) {
            for (const n of this.externalInteractors) n.reset(e);
            for (const n of this.particleInteractors)
              n.isEnabled(e) && (await n.interact(e, t));
          }
          handleClickMode(e) {
            for (const t of this.externalInteractors)
              t.handleClickMode && t.handleClickMode(e);
          }
        }),
          (n = new WeakMap());
      },
      5561: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ParticlesInteractorBase = void 0);
        t.ParticlesInteractorBase = class {
          constructor(e) {
            (this.container = e), (this.type = 1);
          }
        };
      },
      9860: function (e, t) {
        "use strict";
        var n,
          i =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, n, i, o) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !o)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" === typeof t ? e !== t || !o : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              return (
                "a" === i ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n
              );
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Plugins = void 0);
        (t.Plugins = class {
          constructor(e) {
            n.set(this, void 0),
              i(this, n, e, "f"),
              (this.plugins = []),
              (this.interactorsInitializers = new Map()),
              (this.moversInitializers = new Map()),
              (this.updatersInitializers = new Map()),
              (this.interactors = new Map()),
              (this.movers = new Map()),
              (this.updaters = new Map()),
              (this.presets = new Map()),
              (this.drawers = new Map()),
              (this.pathGenerators = new Map());
          }
          getPlugin(e) {
            return this.plugins.find((t) => t.id === e);
          }
          addPlugin(e) {
            this.getPlugin(e.id) || this.plugins.push(e);
          }
          getAvailablePlugins(e) {
            const t = new Map();
            for (const n of this.plugins)
              n.needsPlugin(e.actualOptions) && t.set(n.id, n.getPlugin(e));
            return t;
          }
          loadOptions(e, t) {
            for (const n of this.plugins) n.loadOptions(e, t);
          }
          getPreset(e) {
            return this.presets.get(e);
          }
          addPreset(e, t) {
            (!(
              arguments.length > 2 &&
              void 0 !== arguments[2] &&
              arguments[2]
            ) &&
              this.getPreset(e)) ||
              this.presets.set(e, t);
          }
          getShapeDrawer(e) {
            return this.drawers.get(e);
          }
          addShapeDrawer(e, t) {
            this.getShapeDrawer(e) || this.drawers.set(e, t);
          }
          getSupportedShapes() {
            return this.drawers.keys();
          }
          getPathGenerator(e) {
            return this.pathGenerators.get(e);
          }
          addPathGenerator(e, t) {
            this.getPathGenerator(e) || this.pathGenerators.set(e, t);
          }
          getInteractors(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = this.interactors.get(e);
            return (
              (n && !t) ||
                ((n = [...this.interactorsInitializers.values()].map((t) =>
                  t(e)
                )),
                this.interactors.set(e, n)),
              n
            );
          }
          addInteractor(e, t) {
            this.interactorsInitializers.set(e, t);
          }
          getUpdaters(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = this.updaters.get(e);
            return (
              (n && !t) ||
                ((n = [...this.updatersInitializers.values()].map((t) => t(e))),
                this.updaters.set(e, n)),
              n
            );
          }
          addParticleUpdater(e, t) {
            this.updatersInitializers.set(e, t);
          }
          getMovers(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = this.movers.get(e);
            return (
              (n && !t) ||
                ((n = [...this.moversInitializers.values()].map((t) => t(e))),
                this.movers.set(e, n)),
              n
            );
          }
          addParticleMover(e, t) {
            this.moversInitializers.set(e, t);
          }
        }),
          (n = new WeakMap());
      },
      9704: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Point = void 0);
        t.Point = class {
          constructor(e, t) {
            (this.position = e), (this.particle = t);
          }
        };
      },
      3187: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.QuadTree = void 0);
        const i = n(3195),
          o = n(6939),
          r = n(24),
          a = n(4407);
        class s {
          constructor(e, t) {
            (this.rectangle = e),
              (this.capacity = t),
              (this.points = []),
              (this.divided = !1);
          }
          insert(e) {
            var t, n, i, o, r;
            return (
              !!this.rectangle.contains(e.position) &&
              (this.points.length < this.capacity
                ? (this.points.push(e), !0)
                : (this.divided || this.subdivide(),
                  null !==
                    (r =
                      (null === (t = this.northEast) || void 0 === t
                        ? void 0
                        : t.insert(e)) ||
                      (null === (n = this.northWest) || void 0 === n
                        ? void 0
                        : n.insert(e)) ||
                      (null === (i = this.southEast) || void 0 === i
                        ? void 0
                        : i.insert(e)) ||
                      (null === (o = this.southWest) || void 0 === o
                        ? void 0
                        : o.insert(e))) &&
                    void 0 !== r &&
                    r))
            );
          }
          queryCircle(e, t) {
            return this.query(new i.Circle(e.x, e.y, t));
          }
          queryCircleWarp(e, t, n) {
            const i = n,
              r = n;
            return this.query(
              new o.CircleWarp(
                e.x,
                e.y,
                t,
                void 0 !== i.canvas ? i.canvas.size : r
              )
            );
          }
          queryRectangle(e, t) {
            return this.query(new r.Rectangle(e.x, e.y, t.width, t.height));
          }
          query(e, t) {
            var n, i, o, r;
            const s = null !== t && void 0 !== t ? t : [];
            if (!e.intersects(this.rectangle)) return [];
            for (const l of this.points)
              (!e.contains(l.position) &&
                (0, a.getDistance)(e.position, l.position) >
                  l.particle.getRadius()) ||
                s.push(l.particle);
            return (
              this.divided &&
                (null === (n = this.northEast) || void 0 === n || n.query(e, s),
                null === (i = this.northWest) || void 0 === i || i.query(e, s),
                null === (o = this.southEast) || void 0 === o || o.query(e, s),
                null === (r = this.southWest) || void 0 === r || r.query(e, s)),
              s
            );
          }
          subdivide() {
            const e = this.rectangle.position.x,
              t = this.rectangle.position.y,
              n = this.rectangle.size.width,
              i = this.rectangle.size.height,
              o = this.capacity;
            (this.northEast = new s(new r.Rectangle(e, t, n / 2, i / 2), o)),
              (this.northWest = new s(
                new r.Rectangle(e + n / 2, t, n / 2, i / 2),
                o
              )),
              (this.southEast = new s(
                new r.Rectangle(e, t + i / 2, n / 2, i / 2),
                o
              )),
              (this.southWest = new s(
                new r.Rectangle(e + n / 2, t + i / 2, n / 2, i / 2),
                o
              )),
              (this.divided = !0);
          }
        }
        t.QuadTree = s;
      },
      2747: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Range = void 0);
        t.Range = class {
          constructor(e, t) {
            this.position = { x: e, y: t };
          }
        };
      },
      24: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Rectangle = void 0);
        const i = n(2747);
        class o extends i.Range {
          constructor(e, t, n, i) {
            super(e, t), (this.size = { height: i, width: n });
          }
          contains(e) {
            const t = this.size.width,
              n = this.size.height,
              i = this.position;
            return e.x >= i.x && e.x <= i.x + t && e.y >= i.y && e.y <= i.y + n;
          }
          intersects(e) {
            const t = e,
              n = e,
              i = this.size.width,
              o = this.size.height,
              r = this.position,
              a = e.position;
            if (void 0 !== n.radius) return n.intersects(this);
            if (!t.size) return !1;
            const s = t.size,
              l = s.width,
              c = s.height;
            return (
              a.x < r.x + i && a.x + l > r.x && a.y < r.y + o && a.y + c > r.y
            );
          }
        }
        t.Rectangle = o;
      },
      3542: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Vector = void 0);
        class n {
          constructor(e, t) {
            if ("number" !== typeof e && e) (this.x = e.x), (this.y = e.y);
            else {
              if (void 0 === e || void 0 === t)
                throw new Error(
                  "tsParticles - Vector not initialized correctly"
                );
              (this.x = e), (this.y = t);
            }
          }
          static clone(e) {
            return n.create(e.x, e.y);
          }
          static create(e, t) {
            return new n(e, t);
          }
          static get origin() {
            return n.create(0, 0);
          }
          get angle() {
            return Math.atan2(this.y, this.x);
          }
          set angle(e) {
            this.updateFromAngle(e, this.length);
          }
          get length() {
            return Math.sqrt(this.getLengthSq());
          }
          set length(e) {
            this.updateFromAngle(this.angle, e);
          }
          add(e) {
            return n.create(this.x + e.x, this.y + e.y);
          }
          addTo(e) {
            (this.x += e.x), (this.y += e.y);
          }
          sub(e) {
            return n.create(this.x - e.x, this.y - e.y);
          }
          subFrom(e) {
            (this.x -= e.x), (this.y -= e.y);
          }
          mult(e) {
            return n.create(this.x * e, this.y * e);
          }
          multTo(e) {
            (this.x *= e), (this.y *= e);
          }
          div(e) {
            return n.create(this.x / e, this.y / e);
          }
          divTo(e) {
            (this.x /= e), (this.y /= e);
          }
          distanceTo(e) {
            return this.sub(e).length;
          }
          getLengthSq() {
            return this.x ** 2 + this.y ** 2;
          }
          distanceToSq(e) {
            return this.sub(e).getLengthSq();
          }
          manhattanDistanceTo(e) {
            return Math.abs(e.x - this.x) + Math.abs(e.y - this.y);
          }
          copy() {
            return n.clone(this);
          }
          setTo(e) {
            (this.x = e.x), (this.y = e.y);
          }
          rotate(e) {
            return n.create(
              this.x * Math.cos(e) - this.y * Math.sin(e),
              this.x * Math.sin(e) + this.y * Math.cos(e)
            );
          }
          updateFromAngle(e, t) {
            (this.x = Math.cos(e) * t), (this.y = Math.sin(e) * t);
          }
        }
        t.Vector = n;
      },
      7638: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Vector3d = void 0);
        const i = n(3542);
        class o extends i.Vector {
          constructor(e, t, n) {
            if ((super(e, t), "number" !== typeof e && e)) this.z = e.z;
            else {
              if (void 0 === n)
                throw new Error(
                  "tsParticles - Vector not initialized correctly"
                );
              this.z = n;
            }
          }
          static clone(e) {
            return o.create(e.x, e.y, e.z);
          }
          static create(e, t, n) {
            return new o(e, t, n);
          }
          static get origin() {
            return o.create(0, 0, 0);
          }
          add(e) {
            return e instanceof o
              ? o.create(this.x + e.x, this.y + e.y, this.z + e.z)
              : super.add(e);
          }
          addTo(e) {
            super.addTo(e), e instanceof o && (this.z += e.z);
          }
          sub(e) {
            return e instanceof o
              ? o.create(this.x - e.x, this.y - e.y, this.z - e.z)
              : super.sub(e);
          }
          subFrom(e) {
            super.subFrom(e), e instanceof o && (this.z -= e.z);
          }
          mult(e) {
            return o.create(this.x * e, this.y * e, this.z * e);
          }
          multTo(e) {
            super.multTo(e), (this.z *= e);
          }
          div(e) {
            return o.create(this.x / e, this.y / e, this.z / e);
          }
          divTo(e) {
            super.divTo(e), (this.z /= e);
          }
          copy() {
            return o.clone(this);
          }
          setTo(e) {
            super.setTo(e);
            const t = e;
            void 0 !== t.z && (this.z = t.z);
          }
        }
        t.Vector3d = o;
      },
      1872: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      9940: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      8694: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      7546: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      3574: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      7832: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      3301: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      5496: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      7648: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      3869: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      3064: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      6659: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      9603: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      7200: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      445: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      6086: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      377: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      3670: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      3976: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      9978: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      1736: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      7190: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      9742: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      8226: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      2210: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Attractor = void 0);
        const i = n(4407),
          o = n(3195),
          r = n(9425),
          a = n(4106),
          s = n(3542),
          l = n(5745);
        class c extends a.ExternalInteractorBase {
          constructor(e) {
            super(e),
              e.attract || (e.attract = { particles: [] }),
              (this.handleClickMode = (t) => {
                const n = this.container.actualOptions;
                if ("attract" === t) {
                  e.attract || (e.attract = { particles: [] }),
                    (e.attract.clicking = !0),
                    (e.attract.count = 0);
                  for (const t of e.attract.particles)
                    t.velocity.setTo(t.initialVelocity);
                  (e.attract.particles = []),
                    (e.attract.finish = !1),
                    setTimeout(() => {
                      e.destroyed ||
                        (e.attract || (e.attract = { particles: [] }),
                        (e.attract.clicking = !1));
                    }, 1e3 * n.interactivity.modes.attract.duration);
                }
              });
          }
          isEnabled() {
            const e = this.container,
              t = e.actualOptions,
              n = e.interactivity.mouse,
              i = t.interactivity.events;
            if (
              (!n.position || !i.onHover.enable) &&
              (!n.clickPosition || !i.onClick.enable)
            )
              return !1;
            const o = i.onHover.mode,
              r = i.onClick.mode;
            return (
              (0, l.isInArray)("attract", o) || (0, l.isInArray)("attract", r)
            );
          }
          reset() {}
          async interact() {
            const e = this.container,
              t = e.actualOptions,
              n = e.interactivity.status === r.Constants.mouseMoveEvent,
              i = t.interactivity.events,
              o = i.onHover.enable,
              a = i.onHover.mode,
              s = i.onClick.enable,
              c = i.onClick.mode;
            n && o && (0, l.isInArray)("attract", a)
              ? this.hoverAttract()
              : s && (0, l.isInArray)("attract", c) && this.clickAttract();
          }
          hoverAttract() {
            const e = this.container,
              t = e.interactivity.mouse.position;
            if (!t) return;
            const n = e.retina.attractModeDistance;
            this.processAttract(t, n, new o.Circle(t.x, t.y, n));
          }
          processAttract(e, t, n) {
            const o = this.container,
              r = o.actualOptions.interactivity.modes.attract,
              a = o.particles.quadTree.query(n);
            for (const l of a) {
              const {
                  dx: n,
                  dy: o,
                  distance: a,
                } = (0, i.getDistances)(l.position, e),
                c = r.speed * r.factor,
                u = (0, i.clamp)(
                  (0, i.calcEasing)(1 - a / t, r.easing) * c,
                  0,
                  r.maxSpeed
                ),
                d = s.Vector.create(
                  0 === a ? c : (n / a) * u,
                  0 === a ? c : (o / a) * u
                );
              l.position.subFrom(d);
            }
          }
          clickAttract() {
            const e = this.container;
            if (
              (e.attract || (e.attract = { particles: [] }),
              e.attract.finish ||
                (e.attract.count || (e.attract.count = 0),
                e.attract.count++,
                e.attract.count === e.particles.count &&
                  (e.attract.finish = !0)),
              e.attract.clicking)
            ) {
              const t = e.interactivity.mouse.clickPosition;
              if (!t) return;
              const n = e.retina.attractModeDistance;
              this.processAttract(t, n, new o.Circle(t.x, t.y, n));
            } else !1 === e.attract.clicking && (e.attract.particles = []);
          }
        }
        t.Attractor = c;
      },
      4757: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadExternalAttractInteraction = void 0);
        const i = n(2210);
        t.loadExternalAttractInteraction = async function (e) {
          await e.addInteractor("externalAttract", (e) => new i.Attractor(e));
        };
      },
      6569: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Bouncer = void 0);
        const i = n(5745),
          o = n(3195),
          r = n(9425),
          a = n(4106),
          s = n(24),
          l = n(3542);
        class c extends a.ExternalInteractorBase {
          constructor(e) {
            super(e);
          }
          isEnabled() {
            const e = this.container,
              t = e.actualOptions,
              n = e.interactivity.mouse,
              o = t.interactivity.events,
              r = o.onDiv;
            return (
              (n.position &&
                o.onHover.enable &&
                (0, i.isInArray)("bounce", o.onHover.mode)) ||
              (0, i.isDivModeEnabled)("bounce", r)
            );
          }
          async interact() {
            const e = this.container,
              t = e.actualOptions.interactivity.events,
              n = e.interactivity.status === r.Constants.mouseMoveEvent,
              o = t.onHover.enable,
              a = t.onHover.mode,
              s = t.onDiv;
            n && o && (0, i.isInArray)("bounce", a)
              ? this.processMouseBounce()
              : (0, i.divModeExecute)("bounce", s, (e, t) =>
                  this.singleSelectorBounce(e, t)
                );
          }
          reset() {}
          processMouseBounce() {
            const e = this.container,
              t = 10 * e.retina.pixelRatio,
              n = e.interactivity.mouse.position,
              i = e.retina.bounceModeDistance;
            n && this.processBounce(n, i, new o.Circle(n.x, n.y, i + t));
          }
          singleSelectorBounce(e, t) {
            const n = this.container,
              i = document.querySelectorAll(e);
            i.length &&
              i.forEach((e) => {
                const i = e,
                  r = n.retina.pixelRatio,
                  a = {
                    x: (i.offsetLeft + i.offsetWidth / 2) * r,
                    y: (i.offsetTop + i.offsetHeight / 2) * r,
                  },
                  l = (i.offsetWidth / 2) * r,
                  c = 10 * r,
                  u =
                    "circle" === t.type
                      ? new o.Circle(a.x, a.y, l + c)
                      : new s.Rectangle(
                          i.offsetLeft * r - c,
                          i.offsetTop * r - c,
                          i.offsetWidth * r + 2 * c,
                          i.offsetHeight * r + 2 * c
                        );
                this.processBounce(a, l, u);
              });
          }
          processBounce(e, t, n) {
            const r = this.container.particles.quadTree.query(n);
            for (const a of r)
              n instanceof o.Circle
                ? (0, i.circleBounce)((0, i.circleBounceDataFromParticle)(a), {
                    position: e,
                    radius: t,
                    mass: (t ** 2 * Math.PI) / 2,
                    velocity: l.Vector.origin,
                    factor: l.Vector.origin,
                  })
                : n instanceof s.Rectangle &&
                  (0, i.rectBounce)(a, (0, i.calculateBounds)(e, t));
          }
        }
        t.Bouncer = c;
      },
      9464: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadExternalBounceInteraction = void 0);
        const i = n(6569);
        t.loadExternalBounceInteraction = async function (e) {
          await e.addInteractor("externalBounce", (e) => new i.Bouncer(e));
        };
      },
      6273: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Bubbler = void 0);
        const i = n(4407),
          o = n(6923),
          r = n(5745),
          a = n(3195),
          s = n(9425),
          l = n(4106),
          c = n(24);
        function u(e, t, n, o) {
          if (t >= n) {
            const r = e + (t - n) * o;
            return (0, i.clamp)(r, e, t);
          }
          if (t < n) {
            const r = e - (n - t) * o;
            return (0, i.clamp)(r, t, e);
          }
        }
        class d extends l.ExternalInteractorBase {
          constructor(e) {
            super(e),
              e.bubble || (e.bubble = {}),
              (this.handleClickMode = (t) => {
                "bubble" === t &&
                  (e.bubble || (e.bubble = {}), (e.bubble.clicking = !0));
              });
          }
          isEnabled() {
            const e = this.container,
              t = e.actualOptions,
              n = e.interactivity.mouse,
              i = t.interactivity.events,
              o = i.onDiv,
              a = (0, r.isDivModeEnabled)("bubble", o);
            if (
              !(
                a ||
                (i.onHover.enable && n.position) ||
                (i.onClick.enable && n.clickPosition)
              )
            )
              return !1;
            const s = i.onHover.mode,
              l = i.onClick.mode;
            return (
              (0, r.isInArray)("bubble", s) ||
              (0, r.isInArray)("bubble", l) ||
              a
            );
          }
          reset(e, t) {
            (e.bubble.inRange && !t) ||
              (delete e.bubble.div,
              delete e.bubble.opacity,
              delete e.bubble.radius,
              delete e.bubble.color);
          }
          async interact() {
            const e = this.container.actualOptions.interactivity.events,
              t = e.onHover,
              n = e.onClick,
              i = t.enable,
              o = t.mode,
              a = n.enable,
              s = n.mode,
              l = e.onDiv;
            i && (0, r.isInArray)("bubble", o)
              ? this.hoverBubble()
              : a && (0, r.isInArray)("bubble", s)
              ? this.clickBubble()
              : (0, r.divModeExecute)("bubble", l, (e, t) =>
                  this.singleSelectorHover(e, t)
                );
          }
          singleSelectorHover(e, t) {
            const n = this.container,
              i = document.querySelectorAll(e);
            i.length &&
              i.forEach((e) => {
                const i = e,
                  o = n.retina.pixelRatio,
                  s = {
                    x: (i.offsetLeft + i.offsetWidth / 2) * o,
                    y: (i.offsetTop + i.offsetHeight / 2) * o,
                  },
                  l = (i.offsetWidth / 2) * o,
                  u =
                    "circle" === t.type
                      ? new a.Circle(s.x, s.y, l)
                      : new c.Rectangle(
                          i.offsetLeft * o,
                          i.offsetTop * o,
                          i.offsetWidth * o,
                          i.offsetHeight * o
                        ),
                  d = n.particles.quadTree.query(u);
                for (const t of d) {
                  if (!u.contains(t.getPosition())) continue;
                  t.bubble.inRange = !0;
                  const e = n.actualOptions.interactivity.modes.bubble.divs,
                    o = (0, r.divMode)(e, i);
                  (t.bubble.div && t.bubble.div === i) ||
                    (this.reset(t, !0), (t.bubble.div = i)),
                    this.hoverBubbleSize(t, 1, o),
                    this.hoverBubbleOpacity(t, 1, o),
                    this.hoverBubbleColor(t, 1, o);
                }
              });
          }
          process(e, t, n, i) {
            const o = this.container,
              r = i.bubbleObj.optValue;
            if (void 0 === r) return;
            const a = o.actualOptions.interactivity.modes.bubble.duration,
              s = o.retina.bubbleModeDistance,
              l = i.particlesObj.optValue,
              c = i.bubbleObj.value,
              u = i.particlesObj.value || 0,
              d = i.type;
            if (r !== l)
              if ((o.bubble || (o.bubble = {}), o.bubble.durationEnd))
                c &&
                  ("size" === d && delete e.bubble.radius,
                  "opacity" === d && delete e.bubble.opacity);
              else if (t <= s) {
                if ((null !== c && void 0 !== c ? c : u) !== r) {
                  const t = u - (n * (u - r)) / a;
                  "size" === d && (e.bubble.radius = t),
                    "opacity" === d && (e.bubble.opacity = t);
                }
              } else
                "size" === d && delete e.bubble.radius,
                  "opacity" === d && delete e.bubble.opacity;
          }
          clickBubble() {
            var e, t;
            const n = this.container,
              o = n.actualOptions,
              r = n.interactivity.mouse.clickPosition;
            if (!r) return;
            n.bubble || (n.bubble = {});
            const a = n.retina.bubbleModeDistance,
              s = n.particles.quadTree.queryCircle(r, a);
            for (const l of s) {
              if (!n.bubble.clicking) continue;
              l.bubble.inRange = !n.bubble.durationEnd;
              const a = l.getPosition(),
                s = (0, i.getDistance)(a, r),
                c =
                  (new Date().getTime() -
                    (n.interactivity.mouse.clickTime || 0)) /
                  1e3;
              c > o.interactivity.modes.bubble.duration &&
                (n.bubble.durationEnd = !0),
                c > 2 * o.interactivity.modes.bubble.duration &&
                  ((n.bubble.clicking = !1), (n.bubble.durationEnd = !1));
              const u = {
                bubbleObj: {
                  optValue: n.retina.bubbleModeSize,
                  value: l.bubble.radius,
                },
                particlesObj: {
                  optValue:
                    (0, i.getRangeMax)(l.options.size.value) *
                    n.retina.pixelRatio,
                  value: l.size.value,
                },
                type: "size",
              };
              this.process(l, s, c, u);
              const d = {
                bubbleObj: {
                  optValue: o.interactivity.modes.bubble.opacity,
                  value: l.bubble.opacity,
                },
                particlesObj: {
                  optValue: (0, i.getRangeMax)(l.options.opacity.value),
                  value:
                    null !==
                      (t =
                        null === (e = l.opacity) || void 0 === e
                          ? void 0
                          : e.value) && void 0 !== t
                      ? t
                      : 1,
                },
                type: "opacity",
              };
              this.process(l, s, c, d),
                n.bubble.durationEnd
                  ? delete l.bubble.color
                  : s <= n.retina.bubbleModeDistance
                  ? this.hoverBubbleColor(l, s)
                  : delete l.bubble.color;
            }
          }
          hoverBubble() {
            const e = this.container,
              t = e.interactivity.mouse.position;
            if (void 0 === t) return;
            const n = e.retina.bubbleModeDistance,
              o = e.particles.quadTree.queryCircle(t, n);
            for (const r of o) {
              r.bubble.inRange = !0;
              const o = r.getPosition(),
                a = (0, i.getDistance)(o, t),
                l = 1 - a / n;
              a <= n
                ? l >= 0 &&
                  e.interactivity.status === s.Constants.mouseMoveEvent &&
                  (this.hoverBubbleSize(r, l),
                  this.hoverBubbleOpacity(r, l),
                  this.hoverBubbleColor(r, l))
                : this.reset(r),
                e.interactivity.status === s.Constants.mouseLeaveEvent &&
                  this.reset(r);
            }
          }
          hoverBubbleSize(e, t, n) {
            const o = this.container,
              r = (null === n || void 0 === n ? void 0 : n.size)
                ? n.size * o.retina.pixelRatio
                : o.retina.bubbleModeSize;
            if (void 0 === r) return;
            const a =
                (0, i.getRangeMax)(e.options.size.value) * o.retina.pixelRatio,
              s = u(e.size.value, r, a, t);
            void 0 !== s && (e.bubble.radius = s);
          }
          hoverBubbleOpacity(e, t, n) {
            var o, r, a;
            const s = this.container.actualOptions,
              l =
                null !==
                  (o = null === n || void 0 === n ? void 0 : n.opacity) &&
                void 0 !== o
                  ? o
                  : s.interactivity.modes.bubble.opacity;
            if (!l) return;
            const c = e.options.opacity.value,
              d = u(
                null !==
                  (a =
                    null === (r = e.opacity) || void 0 === r
                      ? void 0
                      : r.value) && void 0 !== a
                  ? a
                  : 1,
                l,
                (0, i.getRangeMax)(c),
                t
              );
            void 0 !== d && (e.bubble.opacity = d);
          }
          hoverBubbleColor(e, t, n) {
            const i = this.container.actualOptions,
              a = null !== n && void 0 !== n ? n : i.interactivity.modes.bubble;
            if (!e.bubble.finalColor) {
              const t = a.color;
              if (!t) return;
              const n = t instanceof Array ? (0, r.itemFromArray)(t) : t;
              e.bubble.finalColor = (0, o.colorToHsl)(n);
            }
            if (e.bubble.finalColor)
              if (a.mix) {
                e.bubble.color = void 0;
                const n = e.getFillColor();
                e.bubble.color = n
                  ? (0, o.rgbToHsl)(
                      (0, o.colorMix)(n, e.bubble.finalColor, 1 - t, t)
                    )
                  : e.bubble.finalColor;
              } else e.bubble.color = e.bubble.finalColor;
          }
        }
        t.Bubbler = d;
      },
      1589: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadExternalBubbleInteraction = void 0);
        const i = n(6273);
        t.loadExternalBubbleInteraction = async function (e) {
          await e.addInteractor("externalBubble", (e) => new i.Bubbler(e));
        };
      },
      8769: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Connector = void 0);
        const i = n(4106),
          o = n(5745);
        class r extends i.ExternalInteractorBase {
          constructor(e) {
            super(e);
          }
          isEnabled() {
            const e = this.container,
              t = e.interactivity.mouse,
              n = e.actualOptions.interactivity.events;
            return (
              !(!n.onHover.enable || !t.position) &&
              (0, o.isInArray)("connect", n.onHover.mode)
            );
          }
          reset() {}
          async interact() {
            const e = this.container;
            if (
              e.actualOptions.interactivity.events.onHover.enable &&
              "mousemove" === e.interactivity.status
            ) {
              const t = e.interactivity.mouse.position;
              if (!t) return;
              const n = Math.abs(e.retina.connectModeRadius),
                i = e.particles.quadTree.queryCircle(t, n);
              let o = 0;
              for (const r of i) {
                const t = r.getPosition();
                for (const n of i.slice(o + 1)) {
                  const i = n.getPosition(),
                    o = Math.abs(e.retina.connectModeDistance),
                    a = Math.abs(t.x - i.x),
                    s = Math.abs(t.y - i.y);
                  a < o && s < o && e.canvas.drawConnectLine(r, n);
                }
                ++o;
              }
            }
          }
        }
        t.Connector = r;
      },
      502: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadExternalConnectInteraction = void 0);
        const i = n(8769);
        t.loadExternalConnectInteraction = async function (e) {
          await e.addInteractor("externalConnect", (e) => new i.Connector(e));
        };
      },
      4070: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Grabber = void 0);
        const i = n(6923),
          o = n(9425),
          r = n(4106),
          a = n(4407),
          s = n(5745);
        class l extends r.ExternalInteractorBase {
          constructor(e) {
            super(e);
          }
          isEnabled() {
            const e = this.container,
              t = e.interactivity.mouse,
              n = e.actualOptions.interactivity.events;
            return (
              n.onHover.enable &&
              !!t.position &&
              (0, s.isInArray)("grab", n.onHover.mode)
            );
          }
          reset() {}
          async interact() {
            var e;
            const t = this.container,
              n = t.actualOptions,
              r = n.interactivity;
            if (
              !r.events.onHover.enable ||
              t.interactivity.status !== o.Constants.mouseMoveEvent
            )
              return;
            const s = t.interactivity.mouse.position;
            if (!s) return;
            const l = t.retina.grabModeDistance,
              c = t.particles.quadTree.queryCircle(s, l);
            for (const o of c) {
              const c = o.getPosition(),
                u = (0, a.getDistance)(c, s);
              if (u > l) continue;
              const d = r.modes.grab.links,
                h = d.opacity,
                p = h - (u * h) / l;
              if (p <= 0) continue;
              const f =
                null !== (e = d.color) && void 0 !== e
                  ? e
                  : o.options.links.color;
              if (!t.particles.grabLineColor) {
                const e = n.interactivity.modes.grab.links;
                t.particles.grabLineColor = (0, i.getLinkRandomColor)(
                  f,
                  e.blink,
                  e.consent
                );
              }
              const v = (0, i.getLinkColor)(
                o,
                void 0,
                t.particles.grabLineColor
              );
              if (!v) return;
              t.canvas.drawGrabLine(o, v, p, s);
            }
          }
        }
        t.Grabber = l;
      },
      1502: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadExternalGrabInteraction = void 0);
        const i = n(4070);
        t.loadExternalGrabInteraction = async function (e) {
          await e.addInteractor("externalGrab", (e) => new i.Grabber(e));
        };
      },
      8870: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Pauser = void 0);
        const i = n(4106);
        class o extends i.ExternalInteractorBase {
          constructor(e) {
            super(e),
              (this.handleClickMode = (e) => {
                if ("pause" !== e) return;
                const t = this.container;
                t.getAnimationStatus() ? t.pause() : t.play();
              });
          }
          isEnabled() {
            return !0;
          }
          reset() {}
          async interact() {}
        }
        t.Pauser = o;
      },
      8489: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadExternalPauseInteraction = void 0);
        const i = n(8870);
        t.loadExternalPauseInteraction = async function (e) {
          await e.addInteractor("externalPause", (e) => new i.Pauser(e));
        };
      },
      2242: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Pusher = void 0);
        const i = n(4106),
          o = n(5745);
        class r extends i.ExternalInteractorBase {
          constructor(e) {
            super(e),
              (this.handleClickMode = (e) => {
                if ("push" !== e) return;
                const t = this.container,
                  n = t.actualOptions,
                  i = n.interactivity.modes.push.quantity;
                if (i <= 0) return;
                const r = n.interactivity.modes.push,
                  a = (0, o.itemFromArray)([void 0, ...r.groups]),
                  s =
                    void 0 !== a ? t.actualOptions.particles.groups[a] : void 0;
                t.particles.push(i, t.interactivity.mouse, s, a);
              });
          }
          isEnabled() {
            return !0;
          }
          reset() {}
          async interact() {}
        }
        t.Pusher = r;
      },
      7591: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadExternalPushInteraction = void 0);
        const i = n(2242);
        t.loadExternalPushInteraction = async function (e) {
          await e.addInteractor("externalPush", (e) => new i.Pusher(e));
        };
      },
      6941: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Remover = void 0);
        const i = n(4106);
        class o extends i.ExternalInteractorBase {
          constructor(e) {
            super(e),
              (this.handleClickMode = (e) => {
                if ("remove" !== e) return;
                const t = this.container,
                  n = t.actualOptions.interactivity.modes.remove.quantity;
                t.particles.removeQuantity(n);
              });
          }
          isEnabled() {
            return !0;
          }
          reset() {}
          async interact() {}
        }
        t.Remover = o;
      },
      1794: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadExternalRemoveInteraction = void 0);
        const i = n(6941);
        t.loadExternalRemoveInteraction = async function (e) {
          await e.addInteractor("externalRemove", (e) => new i.Remover(e));
        };
      },
      4983: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Repulser = void 0);
        const i = n(4407),
          o = n(5745),
          r = n(3195),
          a = n(9425),
          s = n(4106),
          l = n(24),
          c = n(3542);
        class u extends s.ExternalInteractorBase {
          constructor(e) {
            super(e),
              e.repulse || (e.repulse = { particles: [] }),
              (this.handleClickMode = (t) => {
                const n = this.container.actualOptions;
                if ("repulse" === t) {
                  e.repulse || (e.repulse = { particles: [] }),
                    (e.repulse.clicking = !0),
                    (e.repulse.count = 0);
                  for (const t of e.repulse.particles)
                    t.velocity.setTo(t.initialVelocity);
                  (e.repulse.particles = []),
                    (e.repulse.finish = !1),
                    setTimeout(() => {
                      e.destroyed ||
                        (e.repulse || (e.repulse = { particles: [] }),
                        (e.repulse.clicking = !1));
                    }, 1e3 * n.interactivity.modes.repulse.duration);
                }
              });
          }
          isEnabled() {
            const e = this.container,
              t = e.actualOptions,
              n = e.interactivity.mouse,
              i = t.interactivity.events,
              r = i.onDiv,
              a = (0, o.isDivModeEnabled)("repulse", r);
            if (
              !(
                a ||
                (i.onHover.enable && n.position) ||
                (i.onClick.enable && n.clickPosition)
              )
            )
              return !1;
            const s = i.onHover.mode,
              l = i.onClick.mode;
            return (
              (0, o.isInArray)("repulse", s) ||
              (0, o.isInArray)("repulse", l) ||
              a
            );
          }
          reset() {}
          async interact() {
            const e = this.container,
              t = e.actualOptions,
              n = e.interactivity.status === a.Constants.mouseMoveEvent,
              i = t.interactivity.events,
              r = i.onHover.enable,
              s = i.onHover.mode,
              l = i.onClick.enable,
              c = i.onClick.mode,
              u = i.onDiv;
            n && r && (0, o.isInArray)("repulse", s)
              ? this.hoverRepulse()
              : l && (0, o.isInArray)("repulse", c)
              ? this.clickRepulse()
              : (0, o.divModeExecute)("repulse", u, (e, t) =>
                  this.singleSelectorRepulse(e, t)
                );
          }
          singleSelectorRepulse(e, t) {
            const n = this.container,
              i = document.querySelectorAll(e);
            i.length &&
              i.forEach((e) => {
                const i = e,
                  a = n.retina.pixelRatio,
                  s = {
                    x: (i.offsetLeft + i.offsetWidth / 2) * a,
                    y: (i.offsetTop + i.offsetHeight / 2) * a,
                  },
                  c = (i.offsetWidth / 2) * a,
                  u =
                    "circle" === t.type
                      ? new r.Circle(s.x, s.y, c)
                      : new l.Rectangle(
                          i.offsetLeft * a,
                          i.offsetTop * a,
                          i.offsetWidth * a,
                          i.offsetHeight * a
                        ),
                  d = n.actualOptions.interactivity.modes.repulse.divs,
                  h = (0, o.divMode)(d, i);
                this.processRepulse(s, c, u, h);
              });
          }
          hoverRepulse() {
            const e = this.container,
              t = e.interactivity.mouse.position;
            if (!t) return;
            const n = e.retina.repulseModeDistance;
            this.processRepulse(t, n, new r.Circle(t.x, t.y, n));
          }
          processRepulse(e, t, n, o) {
            var r;
            const a = this.container,
              s = a.particles.quadTree.query(n),
              l = a.actualOptions.interactivity.modes.repulse;
            for (const u of s) {
              const {
                  dx: n,
                  dy: a,
                  distance: s,
                } = (0, i.getDistances)(u.position, e),
                d =
                  (null !==
                    (r = null === o || void 0 === o ? void 0 : o.speed) &&
                  void 0 !== r
                    ? r
                    : l.speed) * l.factor,
                h = (0, i.clamp)(
                  (0, i.calcEasing)(1 - s / t, l.easing) * d,
                  0,
                  l.maxSpeed
                ),
                p = c.Vector.create(
                  0 === s ? d : (n / s) * h,
                  0 === s ? d : (a / s) * h
                );
              u.position.addTo(p);
            }
          }
          clickRepulse() {
            const e = this.container;
            if (
              (e.repulse || (e.repulse = { particles: [] }),
              e.repulse.finish ||
                (e.repulse.count || (e.repulse.count = 0),
                e.repulse.count++,
                e.repulse.count === e.particles.count &&
                  (e.repulse.finish = !0)),
              e.repulse.clicking)
            ) {
              const t = e.retina.repulseModeDistance,
                n = Math.pow(t / 6, 3),
                o = e.interactivity.mouse.clickPosition;
              if (void 0 === o) return;
              const a = new r.Circle(o.x, o.y, n),
                s = e.particles.quadTree.query(a);
              for (const r of s) {
                const {
                    dx: t,
                    dy: a,
                    distance: s,
                  } = (0, i.getDistances)(o, r.position),
                  l = s ** 2,
                  u =
                    (-n * e.actualOptions.interactivity.modes.repulse.speed) /
                    l;
                if (l <= n) {
                  e.repulse.particles.push(r);
                  const n = c.Vector.create(t, a);
                  (n.length = u), r.velocity.setTo(n);
                }
              }
            } else if (!1 === e.repulse.clicking) {
              for (const t of e.repulse.particles)
                t.velocity.setTo(t.initialVelocity);
              e.repulse.particles = [];
            }
          }
        }
        t.Repulser = u;
      },
      7843: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadExternalRepulseInteraction = void 0);
        const i = n(4983);
        t.loadExternalRepulseInteraction = async function (e) {
          await e.addInteractor("externalRepulse", (e) => new i.Repulser(e));
        };
      },
      9656: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TrailMaker = void 0);
        const i = n(4106),
          o = n(5745);
        class r extends i.ExternalInteractorBase {
          constructor(e) {
            super(e), (this.delay = 0);
          }
          async interact(e) {
            var t, n, i, o;
            if (!this.container.retina.reduceFactor) return;
            const r = this.container,
              a = r.actualOptions.interactivity.modes.trail,
              s = (1e3 * a.delay) / this.container.retina.reduceFactor;
            if ((this.delay < s && (this.delay += e.value), this.delay < s))
              return;
            let l = !0;
            a.pauseOnStop &&
              (r.interactivity.mouse.position === this.lastPosition ||
                ((null === (t = r.interactivity.mouse.position) || void 0 === t
                  ? void 0
                  : t.x) ===
                  (null === (n = this.lastPosition) || void 0 === n
                    ? void 0
                    : n.x) &&
                  (null === (i = r.interactivity.mouse.position) || void 0 === i
                    ? void 0
                    : i.y) ===
                    (null === (o = this.lastPosition) || void 0 === o
                      ? void 0
                      : o.y))) &&
              (l = !1),
              r.interactivity.mouse.position
                ? (this.lastPosition = {
                    x: r.interactivity.mouse.position.x,
                    y: r.interactivity.mouse.position.y,
                  })
                : delete this.lastPosition,
              l &&
                r.particles.push(
                  a.quantity,
                  r.interactivity.mouse,
                  a.particles
                ),
              (this.delay -= s);
          }
          isEnabled() {
            const e = this.container,
              t = e.actualOptions,
              n = e.interactivity.mouse,
              i = t.interactivity.events;
            return (
              (n.clicking &&
                n.inside &&
                !!n.position &&
                (0, o.isInArray)("trail", i.onClick.mode)) ||
              (n.inside &&
                !!n.position &&
                (0, o.isInArray)("trail", i.onHover.mode))
            );
          }
          reset() {}
        }
        t.TrailMaker = r;
      },
      5722: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadExternalTrailInteraction = void 0);
        const i = n(9656);
        t.loadExternalTrailInteraction = async function (e) {
          await e.addInteractor("externalTrail", (e) => new i.TrailMaker(e));
        };
      },
      814: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Attractor = void 0);
        const i = n(5561),
          o = n(4407);
        class r extends i.ParticlesInteractorBase {
          constructor(e) {
            super(e);
          }
          async interact(e) {
            var t;
            const n = this.container,
              i =
                null !== (t = e.retina.attractDistance) && void 0 !== t
                  ? t
                  : n.retina.attractDistance,
              r = e.getPosition(),
              a = n.particles.quadTree.queryCircle(r, i);
            for (const s of a) {
              if (
                e === s ||
                !s.options.move.attract.enable ||
                s.destroyed ||
                s.spawning
              )
                continue;
              const t = s.getPosition(),
                { dx: n, dy: i } = (0, o.getDistances)(r, t),
                a = e.options.move.attract.rotate,
                l = n / (1e3 * a.x),
                c = i / (1e3 * a.y),
                u = s.size.value / e.size.value,
                d = 1 / u;
              (e.velocity.x -= l * u),
                (e.velocity.y -= c * u),
                (s.velocity.x += l * d),
                (s.velocity.y += c * d);
            }
          }
          isEnabled(e) {
            return e.options.move.attract.enable;
          }
          reset() {}
        }
        t.Attractor = r;
      },
      6369: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadParticlesAttractInteraction = void 0);
        const i = n(814);
        t.loadParticlesAttractInteraction = async function (e) {
          await e.addInteractor("particlesAttract", (e) => new i.Attractor(e));
        };
      },
      1436: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Collider = void 0);
        const i = n(5745),
          o = n(4407),
          r = n(5561);
        function a(e, t) {
          (0, i.circleBounce)(
            (0, i.circleBounceDataFromParticle)(e),
            (0, i.circleBounceDataFromParticle)(t)
          );
        }
        class s extends r.ParticlesInteractorBase {
          constructor(e) {
            super(e);
          }
          isEnabled(e) {
            return e.options.collisions.enable;
          }
          reset() {}
          async interact(e) {
            const t = this.container,
              n = e.getPosition(),
              i = e.getRadius(),
              r = t.particles.quadTree.queryCircle(n, 2 * i);
            for (const a of r) {
              if (
                e === a ||
                !a.options.collisions.enable ||
                e.options.collisions.mode !== a.options.collisions.mode ||
                a.destroyed ||
                a.spawning
              )
                continue;
              const t = a.getPosition();
              if (Math.round(n.z) !== Math.round(t.z)) continue;
              (0, o.getDistance)(n, t) <= i + a.getRadius() &&
                this.resolveCollision(e, a);
            }
          }
          resolveCollision(e, t) {
            switch (e.options.collisions.mode) {
              case "absorb":
                this.absorb(e, t);
                break;
              case "bounce":
                a(e, t);
                break;
              case "destroy":
                !(function (e, t) {
                  e.unbreakable || t.unbreakable || a(e, t),
                    void 0 === e.getRadius() && void 0 !== t.getRadius()
                      ? e.destroy()
                      : void 0 !== e.getRadius() && void 0 === t.getRadius()
                      ? t.destroy()
                      : void 0 !== e.getRadius() &&
                        void 0 !== t.getRadius() &&
                        (e.getRadius() >= t.getRadius()
                          ? t.destroy()
                          : e.destroy());
                })(e, t);
            }
          }
          absorb(e, t) {
            const n = this.container,
              i = n.fpsLimit / 1e3;
            if (void 0 === e.getRadius() && void 0 !== t.getRadius())
              e.destroy();
            else if (void 0 !== e.getRadius() && void 0 === t.getRadius())
              t.destroy();
            else if (void 0 !== e.getRadius() && void 0 !== t.getRadius())
              if (e.getRadius() >= t.getRadius()) {
                const r =
                  (0, o.clamp)(
                    e.getRadius() / t.getRadius(),
                    0,
                    t.getRadius()
                  ) * i;
                (e.size.value += r),
                  (t.size.value -= r),
                  t.getRadius() <= n.retina.pixelRatio &&
                    ((t.size.value = 0), t.destroy());
              } else {
                const r =
                  (0, o.clamp)(
                    t.getRadius() / e.getRadius(),
                    0,
                    e.getRadius()
                  ) * i;
                (e.size.value -= r),
                  (t.size.value += r),
                  e.getRadius() <= n.retina.pixelRatio &&
                    ((e.size.value = 0), e.destroy());
              }
          }
        }
        t.Collider = s;
      },
      5133: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadParticlesCollisionsInteraction = void 0);
        const i = n(1436);
        t.loadParticlesCollisionsInteraction = async function (e) {
          await e.addInteractor(
            "particlesCollisions",
            (e) => new i.Collider(e)
          );
        };
      },
      6121: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LinkInstance = void 0);
        const i = n(6923),
          o = n(233),
          r = n(4407);
        t.LinkInstance = class {
          constructor(e) {
            this.container = e;
          }
          particleCreated(e) {
            e.links = [];
          }
          particleDestroyed(e) {
            e.links = [];
          }
          drawParticle(e, t) {
            const n = t,
              i = this.container,
              o = i.particles,
              r = t.options;
            if (n.links.length <= 0) return;
            e.save();
            const a = n.links.filter(
              (e) =>
                i.particles.getLinkFrequency(n, e.destination) <=
                r.links.frequency
            );
            for (const s of a) {
              const e = s.destination;
              if (r.links.triangles.enable) {
                const t = a.map((e) => e.destination),
                  l = e.links.filter(
                    (n) =>
                      i.particles.getLinkFrequency(e, n.destination) <=
                        e.options.links.frequency &&
                      t.indexOf(n.destination) >= 0
                  );
                if (l.length)
                  for (const i of l) {
                    const t = i.destination;
                    o.getTriangleFrequency(n, e, t) >
                      r.links.triangles.frequency ||
                      this.drawLinkTriangle(n, s, i);
                  }
              }
              s.opacity > 0 &&
                i.retina.linksWidth > 0 &&
                this.drawLinkLine(n, s);
            }
            e.restore();
          }
          drawLinkTriangle(e, t, n) {
            var a;
            const s = this.container,
              l = s.actualOptions,
              c = t.destination,
              u = n.destination,
              d = e.options.links.triangles,
              h =
                null !== (a = d.opacity) && void 0 !== a
                  ? a
                  : (t.opacity + n.opacity) / 2;
            if (h <= 0) return;
            const p = e.getPosition(),
              f = c.getPosition(),
              v = u.getPosition();
            s.canvas.draw((t) => {
              if (
                (0, r.getDistance)(p, f) > s.retina.linksDistance ||
                (0, r.getDistance)(v, f) > s.retina.linksDistance ||
                (0, r.getDistance)(v, p) > s.retina.linksDistance
              )
                return;
              let n = (0, i.colorToRgb)(d.color);
              if (!n) {
                const t = e.options.links,
                  o =
                    void 0 !== t.id
                      ? s.particles.linksColors.get(t.id)
                      : s.particles.linksColor;
                n = (0, i.getLinkColor)(e, c, o);
              }
              n &&
                (0, o.drawLinkTriangle)(
                  t,
                  p,
                  f,
                  v,
                  l.backgroundMask.enable,
                  l.backgroundMask.composite,
                  n,
                  h
                );
            });
          }
          drawLinkLine(e, t) {
            const n = this.container,
              a = n.actualOptions,
              s = t.destination,
              l = e.getPosition(),
              c = s.getPosition();
            let u = t.opacity;
            n.canvas.draw((t) => {
              var d, h;
              let p;
              const f = e.options.twinkle.lines;
              if (f.enable) {
                const e = f.frequency,
                  t = (0, i.colorToRgb)(f.color);
                Math.random() < e &&
                  t &&
                  ((p = t), (u = (0, r.getRangeValue)(f.opacity)));
              }
              if (!p) {
                const t = e.options.links,
                  o =
                    void 0 !== t.id
                      ? n.particles.linksColors.get(t.id)
                      : n.particles.linksColor;
                p = (0, i.getLinkColor)(e, s, o);
              }
              if (!p) return;
              const v =
                  null !== (d = e.retina.linksWidth) && void 0 !== d
                    ? d
                    : n.retina.linksWidth,
                g =
                  null !== (h = e.retina.linksDistance) && void 0 !== h
                    ? h
                    : n.retina.linksDistance;
              (0, o.drawLinkLine)(
                t,
                v,
                l,
                c,
                g,
                n.canvas.size,
                e.options.links.warp,
                a.backgroundMask.enable,
                a.backgroundMask.composite,
                p,
                u,
                e.options.links.shadow
              );
            });
          }
        };
      },
      9938: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Linker = void 0);
        const i = n(3195),
          o = n(6939),
          r = n(5561),
          a = n(4407),
          s = n(6923);
        function l(e, t, n, i, o) {
          let r = (0, a.getDistance)(e, t);
          if (!o || r <= n) return r;
          const s = { x: t.x - i.width, y: t.y };
          if (((r = (0, a.getDistance)(e, s)), r <= n)) return r;
          const l = { x: t.x - i.width, y: t.y - i.height };
          if (((r = (0, a.getDistance)(e, l)), r <= n)) return r;
          const c = { x: t.x, y: t.y - i.height };
          return (r = (0, a.getDistance)(e, c)), r;
        }
        class c extends r.ParticlesInteractorBase {
          constructor(e) {
            super(e);
          }
          isEnabled(e) {
            return e.options.links.enable;
          }
          reset() {}
          async interact(e) {
            var t;
            e.links = [];
            const n = e.getPosition(),
              r = this.container,
              a = r.canvas.size;
            if (n.x < 0 || n.y < 0 || n.x > a.width || n.y > a.height) return;
            const s = e.options.links,
              c = s.opacity,
              u =
                null !== (t = e.retina.linksDistance) && void 0 !== t
                  ? t
                  : r.retina.linksDistance,
              d = s.warp,
              h = d
                ? new o.CircleWarp(n.x, n.y, u, a)
                : new i.Circle(n.x, n.y, u),
              p = r.particles.quadTree.query(h);
            for (const i of p) {
              const t = i.options.links;
              if (
                e === i ||
                !t.enable ||
                s.id !== t.id ||
                i.spawning ||
                i.destroyed ||
                -1 !== e.links.map((e) => e.destination).indexOf(i) ||
                -1 !== i.links.map((e) => e.destination).indexOf(e)
              )
                continue;
              const o = i.getPosition();
              if (o.x < 0 || o.y < 0 || o.x > a.width || o.y > a.height)
                continue;
              const r = l(n, o, u, a, d && t.warp);
              if (r > u) return;
              const h = (1 - r / u) * c;
              this.setColor(e), e.links.push({ destination: i, opacity: h });
            }
          }
          setColor(e) {
            const t = this.container,
              n = e.options.links;
            let i =
              void 0 === n.id
                ? t.particles.linksColor
                : t.particles.linksColors.get(n.id);
            if (!i) {
              const e = n.color;
              (i = (0, s.getLinkRandomColor)(e, n.blink, n.consent)),
                void 0 === n.id
                  ? (t.particles.linksColor = i)
                  : t.particles.linksColors.set(n.id, i);
            }
          }
        }
        t.Linker = c;
      },
      4517: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadParticlesLinksInteraction = void 0);
        const i = n(2348),
          o = n(1176);
        t.loadParticlesLinksInteraction = async function (e) {
          await (0, i.loadInteraction)(e), await (0, o.loadPlugin)(e);
        };
      },
      2348: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadInteraction = void 0);
        const i = n(9938);
        t.loadInteraction = async function (e) {
          await e.addInteractor("particlesLinks", (e) => new i.Linker(e));
        };
      },
      1176: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadPlugin = void 0);
        const i = n(6121);
        class o {
          constructor() {
            this.id = "links";
          }
          getPlugin(e) {
            return new i.LinkInstance(e);
          }
          needsPlugin() {
            return !0;
          }
          loadOptions() {}
        }
        t.loadPlugin = async function (e) {
          const t = new o();
          await e.addPlugin(t);
        };
      },
      9908: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BaseMover = void 0);
        const i = n(9495),
          o = n(4407);
        t.BaseMover = class {
          init(e) {
            var t;
            const n = e.container,
              i = e.options.move.spin;
            if (i.enable) {
              const r =
                  null !== (t = i.position) && void 0 !== t
                    ? t
                    : { x: 50, y: 50 },
                a = {
                  x: (r.x / 100) * n.canvas.size.width,
                  y: (r.y / 100) * n.canvas.size.height,
                },
                s = e.getPosition(),
                l = (0, o.getDistance)(s, a),
                c = (0, o.getRangeValue)(i.acceleration);
              (e.retina.spinAcceleration = c * n.retina.pixelRatio),
                (e.spin = {
                  center: a,
                  direction:
                    e.velocity.x >= 0 ? "clockwise" : "counter-clockwise",
                  angle: e.velocity.angle,
                  radius: l,
                  acceleration: e.retina.spinAcceleration,
                });
            }
          }
          isEnabled(e) {
            return !e.destroyed && e.options.move.enable;
          }
          move(e, t) {
            var n, r, a, s, l;
            const c = e.options,
              u = c.move;
            if (!u.enable) return;
            const d = e.container,
              h = (0, i.getProximitySpeedFactor)(e),
              p =
                (null !== (n = (s = e.retina).moveSpeed) && void 0 !== n
                  ? n
                  : (s.moveSpeed =
                      (0, o.getRangeValue)(u.speed) * d.retina.pixelRatio)) *
                d.retina.reduceFactor,
              f =
                null !== (r = (l = e.retina).moveDrift) && void 0 !== r
                  ? r
                  : (l.moveDrift =
                      (0, o.getRangeValue)(e.options.move.drift) *
                      d.retina.pixelRatio),
              v = (0, o.getRangeMax)(c.size.value) * d.retina.pixelRatio,
              g =
                (p * ((u.size ? e.getRadius() / v : 1) * h * (t.factor || 1))) /
                2;
            (0, i.applyPath)(e, t);
            const y = e.gravity,
              m = y.enable && y.inverse ? -1 : 1;
            y.enable &&
              g &&
              (e.velocity.y += (m * (y.acceleration * t.factor)) / (60 * g)),
              f && g && (e.velocity.x += (f * t.factor) / (60 * g));
            const b = e.moveDecay;
            1 != b && e.velocity.multTo(b);
            const w = e.velocity.mult(g),
              S =
                null !== (a = e.retina.maxSpeed) && void 0 !== a
                  ? a
                  : d.retina.maxSpeed;
            y.enable &&
              S > 0 &&
              ((!y.inverse && w.y >= 0 && w.y >= S) ||
                (y.inverse && w.y <= 0 && w.y <= -S)) &&
              ((w.y = m * S), g && (e.velocity.y = w.y / g));
            const _ = e.options.zIndex,
              P = (1 - e.zIndexFactor) ** _.velocityRate;
            u.spin.enable
              ? (0, i.spin)(e, g)
              : (1 != P && w.multTo(P),
                e.position.addTo(w),
                u.vibrate &&
                  ((e.position.x += Math.sin(
                    e.position.x * Math.cos(e.position.y)
                  )),
                  (e.position.y += Math.cos(
                    e.position.y * Math.sin(e.position.x)
                  )))),
              (0, i.applyDistance)(e);
          }
        };
      },
      9495: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getProximitySpeedFactor =
            t.applyPath =
            t.spin =
            t.applyDistance =
              void 0);
        const i = n(4407),
          o = n(5745);
        (t.applyDistance = function (e) {
          const t = e.initialPosition,
            { dx: n, dy: o } = (0, i.getDistances)(t, e.position),
            r = Math.abs(n),
            a = Math.abs(o),
            s = e.retina.maxDistance.horizontal,
            l = e.retina.maxDistance.vertical;
          if (s || l)
            if (((s && r >= s) || (l && a >= l)) && !e.misplaced)
              (e.misplaced = (!!s && r > s) || (!!l && a > l)),
                s && (e.velocity.x = e.velocity.y / 2 - e.velocity.x),
                l && (e.velocity.y = e.velocity.x / 2 - e.velocity.y);
            else if ((!s || r < s) && (!l || a < l) && e.misplaced)
              e.misplaced = !1;
            else if (e.misplaced) {
              const n = e.position,
                i = e.velocity;
              s &&
                ((n.x < t.x && i.x < 0) || (n.x > t.x && i.x > 0)) &&
                (i.x *= -Math.random()),
                l &&
                  ((n.y < t.y && i.y < 0) || (n.y > t.y && i.y > 0)) &&
                  (i.y *= -Math.random());
            }
        }),
          (t.spin = function (e, t) {
            const n = e.container;
            if (!e.spin) return;
            const i = {
              x: "clockwise" === e.spin.direction ? Math.cos : Math.sin,
              y: "clockwise" === e.spin.direction ? Math.sin : Math.cos,
            };
            (e.position.x =
              e.spin.center.x + e.spin.radius * i.x(e.spin.angle)),
              (e.position.y =
                e.spin.center.y + e.spin.radius * i.y(e.spin.angle)),
              (e.spin.radius += e.spin.acceleration);
            const o = Math.max(n.canvas.size.width, n.canvas.size.height);
            e.spin.radius > o / 2
              ? ((e.spin.radius = o / 2), (e.spin.acceleration *= -1))
              : e.spin.radius < 0 &&
                ((e.spin.radius = 0), (e.spin.acceleration *= -1)),
              (e.spin.angle += (t / 100) * (1 - e.spin.radius / o));
          }),
          (t.applyPath = function (e, t) {
            const n = e.options.move.path;
            if (!n.enable) return;
            const o = e.container;
            if (e.lastPathTime <= e.pathDelay)
              return void (e.lastPathTime += t.value);
            const r = o.pathGenerator.generate(e);
            e.velocity.addTo(r),
              n.clamp &&
                ((e.velocity.x = (0, i.clamp)(e.velocity.x, -1, 1)),
                (e.velocity.y = (0, i.clamp)(e.velocity.y, -1, 1))),
              (e.lastPathTime -= e.pathDelay);
          }),
          (t.getProximitySpeedFactor = function (e) {
            const t = e.container,
              n = t.actualOptions;
            if (!(0, o.isInArray)("slow", n.interactivity.events.onHover.mode))
              return 1;
            const r = e.container.interactivity.mouse.position;
            if (!r) return 1;
            const a = e.getPosition(),
              s = (0, i.getDistance)(r, a),
              l = t.retina.slowModeRadius;
            return s > l ? 1 : (s / l || 0) / n.interactivity.modes.slow.factor;
          });
      },
      6278: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadBaseMover = void 0);
        const i = n(9908);
        t.loadBaseMover = async function (e) {
          e.addMover("base", () => new i.BaseMover());
        };
      },
      6827: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ParallaxMover = void 0);
        const i = n(5745);
        t.ParallaxMover = class {
          init() {}
          isEnabled(e) {
            return (
              !(0, i.isSsr)() &&
              !e.destroyed &&
              e.container.actualOptions.interactivity.events.onHover.parallax
                .enable
            );
          }
          move(e) {
            const t = e.container,
              n = t.actualOptions;
            if (
              (0, i.isSsr)() ||
              !n.interactivity.events.onHover.parallax.enable
            )
              return;
            const o = n.interactivity.events.onHover.parallax.force,
              r = t.interactivity.mouse.position;
            if (!r) return;
            const a = t.canvas.size.width / 2,
              s = t.canvas.size.height / 2,
              l = n.interactivity.events.onHover.parallax.smooth,
              c = e.getRadius() / o,
              u = (r.x - a) * c,
              d = (r.y - s) * c;
            (e.offset.x += (u - e.offset.x) / l),
              (e.offset.y += (d - e.offset.y) / l);
          }
        };
      },
      7988: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadParallaxMover = void 0);
        const i = n(6827);
        t.loadParallaxMover = async function (e) {
          e.addMover("parallax", () => new i.ParallaxMover());
        };
      },
      1272: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AnimatableColor = void 0);
        const i = n(3691),
          o = n(1834);
        class r extends o.OptionsColor {
          constructor() {
            super(), (this.animation = new i.HslAnimation());
          }
          static create(e, t) {
            const n = new r();
            return (
              n.load(e),
              void 0 !== t &&
                ("string" === typeof t || t instanceof Array
                  ? n.load({ value: t })
                  : n.load(t)),
              n
            );
          }
          load(e) {
            if ((super.load(e), !e)) return;
            const t = e.animation;
            void 0 !== t &&
              (void 0 !== t.enable
                ? this.animation.h.load(t)
                : this.animation.load(e.animation));
          }
        }
        t.AnimatableColor = r;
      },
      1083: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GradientColorOpacityAnimation =
            t.GradientAngleAnimation =
            t.AnimatableGradientColor =
            t.GradientColorOpacity =
            t.GradientAngle =
            t.AnimatableGradient =
              void 0);
        const i = n(1272),
          o = n(4407);
        t.AnimatableGradient = class {
          constructor() {
            (this.angle = new r()), (this.colors = []), (this.type = "random");
          }
          load(e) {
            e &&
              (this.angle.load(e.angle),
              void 0 !== e.colors &&
                (this.colors = e.colors.map((e) => {
                  const t = new s();
                  return t.load(e), t;
                })),
              void 0 !== e.type && (this.type = e.type));
          }
        };
        class r {
          constructor() {
            (this.value = 0),
              (this.animation = new l()),
              (this.direction = "clockwise");
          }
          load(e) {
            e &&
              (this.animation.load(e.animation),
              void 0 !== e.value && (this.value = e.value),
              void 0 !== e.direction && (this.direction = e.direction));
          }
        }
        t.GradientAngle = r;
        class a {
          constructor() {
            (this.value = 0), (this.animation = new c());
          }
          load(e) {
            e &&
              (this.animation.load(e.animation),
              void 0 !== e.value &&
                (this.value = (0, o.setRangeValue)(e.value)));
          }
        }
        t.GradientColorOpacity = a;
        class s {
          constructor() {
            (this.stop = 0), (this.value = new i.AnimatableColor());
          }
          load(e) {
            e &&
              (void 0 !== e.stop && (this.stop = e.stop),
              (this.value = i.AnimatableColor.create(this.value, e.value)),
              void 0 !== e.opacity &&
                ((this.opacity = new a()),
                "number" === typeof e.opacity
                  ? (this.opacity.value = e.opacity)
                  : this.opacity.load(e.opacity)));
          }
        }
        t.AnimatableGradientColor = s;
        class l {
          constructor() {
            (this.count = 0),
              (this.enable = !1),
              (this.speed = 0),
              (this.sync = !1);
          }
          load(e) {
            e &&
              (void 0 !== e.count &&
                (this.count = (0, o.setRangeValue)(e.count)),
              void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.speed &&
                (this.speed = (0, o.setRangeValue)(e.speed)),
              void 0 !== e.sync && (this.sync = e.sync));
          }
        }
        t.GradientAngleAnimation = l;
        class c {
          constructor() {
            (this.count = 0),
              (this.enable = !1),
              (this.speed = 0),
              (this.sync = !1),
              (this.startValue = "random");
          }
          load(e) {
            e &&
              (void 0 !== e.count &&
                (this.count = (0, o.setRangeValue)(e.count)),
              void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.speed &&
                (this.speed = (0, o.setRangeValue)(e.speed)),
              void 0 !== e.sync && (this.sync = e.sync),
              void 0 !== e.startValue && (this.startValue = e.startValue));
          }
        }
        t.GradientColorOpacityAnimation = c;
      },
      4231: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AnimationOptions = void 0);
        const i = n(4407);
        t.AnimationOptions = class {
          constructor() {
            (this.count = 0),
              (this.enable = !1),
              (this.speed = 1),
              (this.sync = !1);
          }
          load(e) {
            e &&
              (void 0 !== e.count &&
                (this.count = (0, i.setRangeValue)(e.count)),
              void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.speed &&
                (this.speed = (0, i.setRangeValue)(e.speed)),
              void 0 !== e.sync && (this.sync = e.sync));
          }
        };
      },
      7727: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Background = void 0);
        const i = n(1834);
        t.Background = class {
          constructor() {
            (this.color = new i.OptionsColor()),
              (this.color.value = ""),
              (this.image = ""),
              (this.position = ""),
              (this.repeat = ""),
              (this.size = ""),
              (this.opacity = 1);
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.color &&
                (this.color = i.OptionsColor.create(this.color, e.color)),
              void 0 !== e.image && (this.image = e.image),
              void 0 !== e.position && (this.position = e.position),
              void 0 !== e.repeat && (this.repeat = e.repeat),
              void 0 !== e.size && (this.size = e.size),
              void 0 !== e.opacity && (this.opacity = e.opacity));
          }
        };
      },
      5168: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BackgroundMask = void 0);
        const i = n(5815);
        t.BackgroundMask = class {
          constructor() {
            (this.composite = "destination-out"),
              (this.cover = new i.BackgroundMaskCover()),
              (this.enable = !1);
          }
          load(e) {
            if (void 0 !== e) {
              if (
                (void 0 !== e.composite && (this.composite = e.composite),
                void 0 !== e.cover)
              ) {
                const t = e.cover,
                  n =
                    "string" === typeof e.cover ? { color: e.cover } : e.cover;
                this.cover.load(void 0 !== t.color ? t : { color: n });
              }
              void 0 !== e.enable && (this.enable = e.enable);
            }
          }
        };
      },
      5815: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BackgroundMaskCover = void 0);
        const i = n(1834);
        t.BackgroundMaskCover = class {
          constructor() {
            (this.color = new i.OptionsColor()), (this.opacity = 1);
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.color &&
                (this.color = i.OptionsColor.create(this.color, e.color)),
              void 0 !== e.opacity && (this.opacity = e.opacity));
          }
        };
      },
      5230: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ColorAnimation = void 0);
        const i = n(4407);
        t.ColorAnimation = class {
          constructor() {
            (this.count = 0),
              (this.enable = !1),
              (this.offset = 0),
              (this.speed = 1),
              (this.sync = !0);
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.count &&
                (this.count = (0, i.setRangeValue)(e.count)),
              void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.offset &&
                (this.offset = (0, i.setRangeValue)(e.offset)),
              void 0 !== e.speed &&
                (this.speed = (0, i.setRangeValue)(e.speed)),
              void 0 !== e.sync && (this.sync = e.sync));
          }
        };
      },
      9575: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FullScreen = void 0);
        t.FullScreen = class {
          constructor() {
            (this.enable = !0), (this.zIndex = 0);
          }
          load(e) {
            e &&
              (void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.zIndex && (this.zIndex = e.zIndex));
          }
        };
      },
      3691: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.HslAnimation = void 0);
        const i = n(5230);
        t.HslAnimation = class {
          constructor() {
            (this.h = new i.ColorAnimation()),
              (this.s = new i.ColorAnimation()),
              (this.l = new i.ColorAnimation());
          }
          load(e) {
            e && (this.h.load(e.h), this.s.load(e.s), this.l.load(e.l));
          }
        };
      },
      8351: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ClickEvent = void 0);
        t.ClickEvent = class {
          constructor() {
            (this.enable = !1), (this.mode = []);
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.mode && (this.mode = e.mode));
          }
        };
      },
      4519: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DivEvent = void 0);
        t.DivEvent = class {
          constructor() {
            (this.selectors = []),
              (this.enable = !1),
              (this.mode = []),
              (this.type = "circle");
          }
          get elementId() {
            return this.ids;
          }
          set elementId(e) {
            this.ids = e;
          }
          get el() {
            return this.elementId;
          }
          set el(e) {
            this.elementId = e;
          }
          get ids() {
            return this.selectors instanceof Array
              ? this.selectors.map((e) => e.replace("#", ""))
              : this.selectors.replace("#", "");
          }
          set ids(e) {
            this.selectors =
              e instanceof Array ? e.map((e) => `#${e}`) : `#${e}`;
          }
          load(e) {
            var t, n;
            if (void 0 === e) return;
            const i =
              null !==
                (n = null !== (t = e.ids) && void 0 !== t ? t : e.elementId) &&
              void 0 !== n
                ? n
                : e.el;
            void 0 !== i && (this.ids = i),
              void 0 !== e.selectors && (this.selectors = e.selectors),
              void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.mode && (this.mode = e.mode),
              void 0 !== e.type && (this.type = e.type);
          }
        };
      },
      9710: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Events = void 0);
        const i = n(8351),
          o = n(4519),
          r = n(891);
        t.Events = class {
          constructor() {
            (this.onClick = new i.ClickEvent()),
              (this.onDiv = new o.DivEvent()),
              (this.onHover = new r.HoverEvent()),
              (this.resize = !0);
          }
          get onclick() {
            return this.onClick;
          }
          set onclick(e) {
            this.onClick = e;
          }
          get ondiv() {
            return this.onDiv;
          }
          set ondiv(e) {
            this.onDiv = e;
          }
          get onhover() {
            return this.onHover;
          }
          set onhover(e) {
            this.onHover = e;
          }
          load(e) {
            var t, n, i;
            if (void 0 === e) return;
            this.onClick.load(
              null !== (t = e.onClick) && void 0 !== t ? t : e.onclick
            );
            const r = null !== (n = e.onDiv) && void 0 !== n ? n : e.ondiv;
            void 0 !== r &&
              (r instanceof Array
                ? (this.onDiv = r.map((e) => {
                    const t = new o.DivEvent();
                    return t.load(e), t;
                  }))
                : ((this.onDiv = new o.DivEvent()), this.onDiv.load(r))),
              this.onHover.load(
                null !== (i = e.onHover) && void 0 !== i ? i : e.onhover
              ),
              void 0 !== e.resize && (this.resize = e.resize);
          }
        };
      },
      891: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.HoverEvent = void 0);
        const i = n(1148);
        t.HoverEvent = class {
          constructor() {
            (this.enable = !1),
              (this.mode = []),
              (this.parallax = new i.Parallax());
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.mode && (this.mode = e.mode),
              this.parallax.load(e.parallax));
          }
        };
      },
      1148: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Parallax = void 0);
        t.Parallax = class {
          constructor() {
            (this.enable = !1), (this.force = 2), (this.smooth = 10);
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.force && (this.force = e.force),
              void 0 !== e.smooth && (this.smooth = e.smooth));
          }
        };
      },
      3823: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Interactivity = void 0);
        const i = n(9710),
          o = n(2666);
        t.Interactivity = class {
          constructor() {
            (this.detectsOn = "window"),
              (this.events = new i.Events()),
              (this.modes = new o.Modes());
          }
          get detect_on() {
            return this.detectsOn;
          }
          set detect_on(e) {
            this.detectsOn = e;
          }
          load(e) {
            var t, n, i;
            if (void 0 === e) return;
            const o =
              null !== (t = e.detectsOn) && void 0 !== t ? t : e.detect_on;
            void 0 !== o && (this.detectsOn = o),
              this.events.load(e.events),
              this.modes.load(e.modes),
              !0 ===
                (null ===
                  (i =
                    null === (n = e.modes) || void 0 === n ? void 0 : n.slow) ||
                void 0 === i
                  ? void 0
                  : i.active) &&
                (this.events.onHover.mode instanceof Array
                  ? this.events.onHover.mode.indexOf("slow") < 0 &&
                    this.events.onHover.mode.push("slow")
                  : "slow" !== this.events.onHover.mode &&
                    (this.events.onHover.mode = [
                      this.events.onHover.mode,
                      "slow",
                    ]));
          }
        };
      },
      4869: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Attract = void 0);
        t.Attract = class {
          constructor() {
            (this.distance = 200),
              (this.duration = 0.4),
              (this.easing = "ease-out-quad"),
              (this.factor = 1),
              (this.maxSpeed = 50),
              (this.speed = 1);
          }
          load(e) {
            e &&
              (void 0 !== e.distance && (this.distance = e.distance),
              void 0 !== e.duration && (this.duration = e.duration),
              void 0 !== e.easing && (this.easing = e.easing),
              void 0 !== e.factor && (this.factor = e.factor),
              void 0 !== e.maxSpeed && (this.maxSpeed = e.maxSpeed),
              void 0 !== e.speed && (this.speed = e.speed));
          }
        };
      },
      2796: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Bounce = void 0);
        t.Bounce = class {
          constructor() {
            this.distance = 200;
          }
          load(e) {
            e && void 0 !== e.distance && (this.distance = e.distance);
          }
        };
      },
      2817: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Bubble = void 0);
        const i = n(1733),
          o = n(4172);
        class r extends i.BubbleBase {
          load(e) {
            super.load(e),
              void 0 !== e &&
                void 0 !== e.divs &&
                (e.divs instanceof Array
                  ? (this.divs = e.divs.map((e) => {
                      const t = new o.BubbleDiv();
                      return t.load(e), t;
                    }))
                  : ((this.divs instanceof Array || !this.divs) &&
                      (this.divs = new o.BubbleDiv()),
                    this.divs.load(e.divs)));
          }
        }
        t.Bubble = r;
      },
      1733: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BubbleBase = void 0);
        const i = n(1834);
        t.BubbleBase = class {
          constructor() {
            (this.distance = 200), (this.duration = 0.4), (this.mix = !1);
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.distance && (this.distance = e.distance),
              void 0 !== e.duration && (this.duration = e.duration),
              void 0 !== e.mix && (this.mix = e.mix),
              void 0 !== e.opacity && (this.opacity = e.opacity),
              void 0 !== e.color &&
                (e.color instanceof Array
                  ? (this.color = e.color.map((e) =>
                      i.OptionsColor.create(void 0, e)
                    ))
                  : (this.color instanceof Array &&
                      (this.color = new i.OptionsColor()),
                    (this.color = i.OptionsColor.create(this.color, e.color)))),
              void 0 !== e.size && (this.size = e.size));
          }
        };
      },
      4172: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BubbleDiv = void 0);
        const i = n(1733);
        class o extends i.BubbleBase {
          constructor() {
            super(), (this.selectors = []);
          }
          get ids() {
            return this.selectors instanceof Array
              ? this.selectors.map((e) => e.replace("#", ""))
              : this.selectors.replace("#", "");
          }
          set ids(e) {
            this.selectors =
              e instanceof Array ? e.map((e) => `#${e}`) : `#${e}`;
          }
          load(e) {
            super.load(e),
              void 0 !== e &&
                (void 0 !== e.ids && (this.ids = e.ids),
                void 0 !== e.selectors && (this.selectors = e.selectors));
          }
        }
        t.BubbleDiv = o;
      },
      6677: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Connect = void 0);
        const i = n(271);
        t.Connect = class {
          constructor() {
            (this.distance = 80),
              (this.links = new i.ConnectLinks()),
              (this.radius = 60);
          }
          get line_linked() {
            return this.links;
          }
          set line_linked(e) {
            this.links = e;
          }
          get lineLinked() {
            return this.links;
          }
          set lineLinked(e) {
            this.links = e;
          }
          load(e) {
            var t, n;
            void 0 !== e &&
              (void 0 !== e.distance && (this.distance = e.distance),
              this.links.load(
                null !==
                  (n =
                    null !== (t = e.links) && void 0 !== t
                      ? t
                      : e.lineLinked) && void 0 !== n
                  ? n
                  : e.line_linked
              ),
              void 0 !== e.radius && (this.radius = e.radius));
          }
        };
      },
      271: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ConnectLinks = void 0);
        t.ConnectLinks = class {
          constructor() {
            this.opacity = 0.5;
          }
          load(e) {
            void 0 !== e && void 0 !== e.opacity && (this.opacity = e.opacity);
          }
        };
      },
      3797: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Grab = void 0);
        const i = n(9358);
        t.Grab = class {
          constructor() {
            (this.distance = 100), (this.links = new i.GrabLinks());
          }
          get line_linked() {
            return this.links;
          }
          set line_linked(e) {
            this.links = e;
          }
          get lineLinked() {
            return this.links;
          }
          set lineLinked(e) {
            this.links = e;
          }
          load(e) {
            var t, n;
            void 0 !== e &&
              (void 0 !== e.distance && (this.distance = e.distance),
              this.links.load(
                null !==
                  (n =
                    null !== (t = e.links) && void 0 !== t
                      ? t
                      : e.lineLinked) && void 0 !== n
                  ? n
                  : e.line_linked
              ));
          }
        };
      },
      9358: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GrabLinks = void 0);
        const i = n(1834);
        t.GrabLinks = class {
          constructor() {
            (this.blink = !1), (this.consent = !1), (this.opacity = 1);
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.blink && (this.blink = e.blink),
              void 0 !== e.color &&
                (this.color = i.OptionsColor.create(this.color, e.color)),
              void 0 !== e.consent && (this.consent = e.consent),
              void 0 !== e.opacity && (this.opacity = e.opacity));
          }
        };
      },
      3689: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Light = void 0);
        const i = n(6896),
          o = n(2587);
        t.Light = class {
          constructor() {
            (this.area = new i.LightArea()),
              (this.shadow = new o.LightShadow());
          }
          load(e) {
            void 0 !== e &&
              (this.area.load(e.area), this.shadow.load(e.shadow));
          }
        };
      },
      6896: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LightArea = void 0);
        const i = n(850);
        t.LightArea = class {
          constructor() {
            (this.gradient = new i.LightGradient()), (this.radius = 1e3);
          }
          load(e) {
            void 0 !== e &&
              (this.gradient.load(e.gradient),
              void 0 !== e.radius && (this.radius = e.radius));
          }
        };
      },
      850: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LightGradient = void 0);
        const i = n(1834);
        t.LightGradient = class {
          constructor() {
            (this.start = new i.OptionsColor()),
              (this.stop = new i.OptionsColor()),
              (this.start.value = "#ffffff"),
              (this.stop.value = "#000000");
          }
          load(e) {
            void 0 !== e &&
              ((this.start = i.OptionsColor.create(this.start, e.start)),
              (this.stop = i.OptionsColor.create(this.stop, e.stop)));
          }
        };
      },
      2587: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LightShadow = void 0);
        const i = n(1834);
        t.LightShadow = class {
          constructor() {
            (this.color = new i.OptionsColor()),
              (this.color.value = "#000000"),
              (this.length = 2e3);
          }
          load(e) {
            void 0 !== e &&
              ((this.color = i.OptionsColor.create(this.color, e.color)),
              void 0 !== e.length && (this.length = e.length));
          }
        };
      },
      2666: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Modes = void 0);
        const i = n(4869),
          o = n(2796),
          r = n(2817),
          a = n(6677),
          s = n(3797),
          l = n(3689),
          c = n(5458),
          u = n(9517),
          d = n(3054),
          h = n(5260),
          p = n(4899);
        t.Modes = class {
          constructor() {
            (this.attract = new i.Attract()),
              (this.bounce = new o.Bounce()),
              (this.bubble = new r.Bubble()),
              (this.connect = new a.Connect()),
              (this.grab = new s.Grab()),
              (this.light = new l.Light()),
              (this.push = new c.Push()),
              (this.remove = new u.Remove()),
              (this.repulse = new d.Repulse()),
              (this.slow = new h.Slow()),
              (this.trail = new p.Trail());
          }
          load(e) {
            void 0 !== e &&
              (this.attract.load(e.attract),
              this.bubble.load(e.bubble),
              this.connect.load(e.connect),
              this.grab.load(e.grab),
              this.light.load(e.light),
              this.push.load(e.push),
              this.remove.load(e.remove),
              this.repulse.load(e.repulse),
              this.slow.load(e.slow),
              this.trail.load(e.trail));
          }
        };
      },
      5458: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Push = void 0);
        t.Push = class {
          constructor() {
            (this.default = !0), (this.groups = []), (this.quantity = 4);
          }
          get particles_nb() {
            return this.quantity;
          }
          set particles_nb(e) {
            this.quantity = e;
          }
          load(e) {
            var t;
            if (void 0 === e) return;
            void 0 !== e.default && (this.default = e.default),
              void 0 !== e.groups && (this.groups = e.groups.map((e) => e)),
              this.groups.length || (this.default = !0);
            const n =
              null !== (t = e.quantity) && void 0 !== t ? t : e.particles_nb;
            void 0 !== n && (this.quantity = n);
          }
        };
      },
      9517: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Remove = void 0);
        t.Remove = class {
          constructor() {
            this.quantity = 2;
          }
          get particles_nb() {
            return this.quantity;
          }
          set particles_nb(e) {
            this.quantity = e;
          }
          load(e) {
            var t;
            if (void 0 === e) return;
            const n =
              null !== (t = e.quantity) && void 0 !== t ? t : e.particles_nb;
            void 0 !== n && (this.quantity = n);
          }
        };
      },
      3054: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Repulse = void 0);
        const i = n(2058),
          o = n(7605);
        class r extends i.RepulseBase {
          load(e) {
            super.load(e),
              void 0 !== (null === e || void 0 === e ? void 0 : e.divs) &&
                (e.divs instanceof Array
                  ? (this.divs = e.divs.map((e) => {
                      const t = new o.RepulseDiv();
                      return t.load(e), t;
                    }))
                  : ((this.divs instanceof Array || !this.divs) &&
                      (this.divs = new o.RepulseDiv()),
                    this.divs.load(e.divs)));
          }
        }
        t.Repulse = r;
      },
      2058: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.RepulseBase = void 0);
        t.RepulseBase = class {
          constructor() {
            (this.distance = 200),
              (this.duration = 0.4),
              (this.factor = 100),
              (this.speed = 1),
              (this.maxSpeed = 50),
              (this.easing = "ease-out-quad");
          }
          load(e) {
            e &&
              (void 0 !== e.distance && (this.distance = e.distance),
              void 0 !== e.duration && (this.duration = e.duration),
              void 0 !== e.easing && (this.easing = e.easing),
              void 0 !== e.factor && (this.factor = e.factor),
              void 0 !== e.speed && (this.speed = e.speed),
              void 0 !== e.maxSpeed && (this.maxSpeed = e.maxSpeed));
          }
        };
      },
      7605: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.RepulseDiv = void 0);
        const i = n(2058);
        class o extends i.RepulseBase {
          constructor() {
            super(), (this.selectors = []);
          }
          get ids() {
            return this.selectors instanceof Array
              ? this.selectors.map((e) => e.replace("#", ""))
              : this.selectors.replace("#", "");
          }
          set ids(e) {
            this.selectors =
              e instanceof Array ? e.map(() => `#${e}`) : `#${e}`;
          }
          load(e) {
            super.load(e),
              void 0 !== e &&
                (void 0 !== e.ids && (this.ids = e.ids),
                void 0 !== e.selectors && (this.selectors = e.selectors));
          }
        }
        t.RepulseDiv = o;
      },
      5260: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Slow = void 0);
        t.Slow = class {
          constructor() {
            (this.factor = 3), (this.radius = 200);
          }
          get active() {
            return !1;
          }
          set active(e) {}
          load(e) {
            void 0 !== e &&
              (void 0 !== e.factor && (this.factor = e.factor),
              void 0 !== e.radius && (this.radius = e.radius));
          }
        };
      },
      4899: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Trail = void 0);
        const i = n(5745);
        t.Trail = class {
          constructor() {
            (this.delay = 1), (this.pauseOnStop = !1), (this.quantity = 1);
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.delay && (this.delay = e.delay),
              void 0 !== e.quantity && (this.quantity = e.quantity),
              void 0 !== e.particles &&
                (this.particles = (0, i.deepExtend)({}, e.particles)),
              void 0 !== e.pauseOnStop && (this.pauseOnStop = e.pauseOnStop));
          }
        };
      },
      5368: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ManualParticle = void 0);
        const i = n(5745);
        t.ManualParticle = class {
          load(e) {
            var t, n;
            e &&
              (void 0 !== e.position &&
                (this.position = {
                  x: null !== (t = e.position.x) && void 0 !== t ? t : 50,
                  y: null !== (n = e.position.y) && void 0 !== n ? n : 50,
                }),
              void 0 !== e.options &&
                (this.options = (0, i.deepExtend)({}, e.options)));
          }
        };
      },
      4990: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Motion = void 0);
        const i = n(2820);
        t.Motion = class {
          constructor() {
            (this.disable = !1), (this.reduce = new i.MotionReduce());
          }
          load(e) {
            e &&
              (void 0 !== e.disable && (this.disable = e.disable),
              this.reduce.load(e.reduce));
          }
        };
      },
      2820: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MotionReduce = void 0);
        t.MotionReduce = class {
          constructor() {
            (this.factor = 4), (this.value = !0);
          }
          load(e) {
            e &&
              (void 0 !== e.factor && (this.factor = e.factor),
              void 0 !== e.value && (this.value = e.value));
          }
        };
      },
      8315: function (e, t, n) {
        "use strict";
        var i,
          o,
          r,
          a =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, n, i, o) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !o)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" === typeof t ? e !== t || !o : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              return (
                "a" === i ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n
              );
            },
          s =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, n, i) {
              if ("a" === n && !i)
                throw new TypeError(
                  "Private accessor was defined without a getter"
                );
              if ("function" === typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError(
                  "Cannot read private member from an object whose class did not declare it"
                );
              return "m" === n
                ? i
                : "a" === n
                ? i.call(e)
                : i
                ? i.value
                : t.get(e);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Options = void 0);
        const l = n(7727),
          c = n(5168),
          u = n(9575),
          d = n(3823),
          h = n(5368),
          p = n(4990),
          f = n(7604),
          v = n(9715),
          g = n(6215),
          y = n(5745);
        (t.Options = class {
          constructor(e) {
            i.add(this),
              o.set(this, void 0),
              a(this, o, e, "f"),
              (this.autoPlay = !0),
              (this.background = new l.Background()),
              (this.backgroundMask = new c.BackgroundMask()),
              (this.fullScreen = new u.FullScreen()),
              (this.detectRetina = !0),
              (this.duration = 0),
              (this.fpsLimit = 120),
              (this.interactivity = new d.Interactivity()),
              (this.manualParticles = []),
              (this.motion = new p.Motion()),
              (this.particles = new f.ParticlesOptions()),
              (this.pauseOnBlur = !0),
              (this.pauseOnOutsideViewport = !0),
              (this.responsive = []),
              (this.style = {}),
              (this.themes = []),
              (this.zLayers = 100);
          }
          get fps_limit() {
            return this.fpsLimit;
          }
          set fps_limit(e) {
            this.fpsLimit = e;
          }
          get retina_detect() {
            return this.detectRetina;
          }
          set retina_detect(e) {
            this.detectRetina = e;
          }
          get backgroundMode() {
            return this.fullScreen;
          }
          set backgroundMode(e) {
            this.fullScreen.load(e);
          }
          load(e) {
            var t, n, a, l, c;
            if (void 0 === e) return;
            if (void 0 !== e.preset)
              if (e.preset instanceof Array)
                for (const i of e.preset) this.importPreset(i);
              else this.importPreset(e.preset);
            void 0 !== e.autoPlay && (this.autoPlay = e.autoPlay);
            const u =
              null !== (t = e.detectRetina) && void 0 !== t
                ? t
                : e.retina_detect;
            void 0 !== u && (this.detectRetina = u),
              void 0 !== e.duration && (this.duration = e.duration);
            const d =
              null !== (n = e.fpsLimit) && void 0 !== n ? n : e.fps_limit;
            void 0 !== d && (this.fpsLimit = d),
              void 0 !== e.pauseOnBlur && (this.pauseOnBlur = e.pauseOnBlur),
              void 0 !== e.pauseOnOutsideViewport &&
                (this.pauseOnOutsideViewport = e.pauseOnOutsideViewport),
              void 0 !== e.zLayers && (this.zLayers = e.zLayers),
              this.background.load(e.background);
            const p =
              null !== (a = e.fullScreen) && void 0 !== a
                ? a
                : e.backgroundMode;
            if (
              ("boolean" === typeof p
                ? (this.fullScreen.enable = p)
                : this.fullScreen.load(p),
              this.backgroundMask.load(e.backgroundMask),
              this.interactivity.load(e.interactivity),
              void 0 !== e.manualParticles &&
                (this.manualParticles = e.manualParticles.map((e) => {
                  const t = new h.ManualParticle();
                  return t.load(e), t;
                })),
              this.motion.load(e.motion),
              this.particles.load(e.particles),
              (this.style = (0, y.deepExtend)(this.style, e.style)),
              s(this, o, "f").plugins.loadOptions(this, e),
              void 0 !== e.responsive)
            )
              for (const i of e.responsive) {
                const e = new v.Responsive();
                e.load(i), this.responsive.push(e);
              }
            if (
              (this.responsive.sort((e, t) => e.maxWidth - t.maxWidth),
              void 0 !== e.themes)
            )
              for (const i of e.themes) {
                const e = new g.Theme();
                e.load(i), this.themes.push(e);
              }
            (this.defaultDarkTheme =
              null === (l = s(this, i, "m", r).call(this, "dark")) ||
              void 0 === l
                ? void 0
                : l.name),
              (this.defaultLightTheme =
                null === (c = s(this, i, "m", r).call(this, "light")) ||
                void 0 === c
                  ? void 0
                  : c.name);
          }
          setTheme(e) {
            if (e) {
              const t = this.themes.find((t) => t.name === e);
              t && this.load(t.options);
            } else {
              const e =
                  "undefined" !== typeof matchMedia &&
                  matchMedia("(prefers-color-scheme: dark)"),
                t = e && e.matches,
                n = s(this, i, "m", r).call(this, t ? "dark" : "light");
              n && this.load(n.options);
            }
          }
          setResponsive(e, t, n) {
            this.load(n);
            const i = this.responsive.find((n) =>
              "screen" === n.mode && screen
                ? n.maxWidth * t > screen.availWidth
                : n.maxWidth * t > e
            );
            return (
              this.load(null === i || void 0 === i ? void 0 : i.options),
              null === i || void 0 === i ? void 0 : i.maxWidth
            );
          }
          importPreset(e) {
            this.load(s(this, o, "f").plugins.getPreset(e));
          }
        }),
          (o = new WeakMap()),
          (i = new WeakSet()),
          (r = function (e) {
            var t;
            return null !==
              (t = this.themes.find(
                (t) => t.default.value && t.default.mode === e
              )) && void 0 !== t
              ? t
              : this.themes.find(
                  (e) => e.default.value && "any" === e.default.mode
                );
          });
      },
      1834: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.OptionsColor = void 0);
        class n {
          constructor() {
            this.value = "#fff";
          }
          static create(e, t) {
            const i = new n();
            return (
              i.load(e),
              void 0 !== t &&
                ("string" === typeof t || t instanceof Array
                  ? i.load({ value: t })
                  : i.load(t)),
              i
            );
          }
          load(e) {
            void 0 !== (null === e || void 0 === e ? void 0 : e.value) &&
              (this.value = e.value);
          }
        }
        t.OptionsColor = n;
      },
      7969: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Bounce = void 0);
        const i = n(9814);
        t.Bounce = class {
          constructor() {
            (this.horizontal = new i.BounceFactor()),
              (this.vertical = new i.BounceFactor());
          }
          load(e) {
            e &&
              (this.horizontal.load(e.horizontal),
              this.vertical.load(e.vertical));
          }
        };
      },
      9814: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BounceFactor = void 0);
        const i = n(4001);
        class o extends i.ValueWithRandom {
          constructor() {
            super(), (this.random.minimumValue = 0.1), (this.value = 1);
          }
        }
        t.BounceFactor = o;
      },
      7367: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Collisions = void 0);
        const i = n(7969),
          o = n(3820);
        t.Collisions = class {
          constructor() {
            (this.bounce = new i.Bounce()),
              (this.enable = !1),
              (this.mode = "bounce"),
              (this.overlap = new o.CollisionsOverlap());
          }
          load(e) {
            void 0 !== e &&
              (this.bounce.load(e.bounce),
              void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.mode && (this.mode = e.mode),
              this.overlap.load(e.overlap));
          }
        };
      },
      3820: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CollisionsOverlap = void 0);
        t.CollisionsOverlap = class {
          constructor() {
            (this.enable = !0), (this.retries = 0);
          }
          load(e) {
            e &&
              (void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.retries && (this.retries = e.retries));
          }
        };
      },
      4417: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Destroy = void 0);
        const i = n(3070);
        t.Destroy = class {
          constructor() {
            (this.mode = "none"), (this.split = new i.Split());
          }
          load(e) {
            e &&
              (void 0 !== e.mode && (this.mode = e.mode),
              this.split.load(e.split));
          }
        };
      },
      3070: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Split = void 0);
        const i = n(8254),
          o = n(862),
          r = n(5745);
        t.Split = class {
          constructor() {
            (this.count = 1),
              (this.factor = new i.SplitFactor()),
              (this.rate = new o.SplitRate()),
              (this.sizeOffset = !0);
          }
          load(e) {
            e &&
              (void 0 !== e.count && (this.count = e.count),
              this.factor.load(e.factor),
              this.rate.load(e.rate),
              void 0 !== e.particles &&
                (this.particles = (0, r.deepExtend)({}, e.particles)),
              void 0 !== e.sizeOffset && (this.sizeOffset = e.sizeOffset));
          }
        };
      },
      8254: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SplitFactor = void 0);
        const i = n(4001);
        class o extends i.ValueWithRandom {
          constructor() {
            super(), (this.value = 3);
          }
        }
        t.SplitFactor = o;
      },
      862: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SplitRate = void 0);
        const i = n(4001);
        class o extends i.ValueWithRandom {
          constructor() {
            super(), (this.value = { min: 4, max: 9 });
          }
        }
        t.SplitRate = o;
      },
      8729: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Life = void 0);
        const i = n(7306),
          o = n(9991);
        t.Life = class {
          constructor() {
            (this.count = 0),
              (this.delay = new i.LifeDelay()),
              (this.duration = new o.LifeDuration());
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.count && (this.count = e.count),
              this.delay.load(e.delay),
              this.duration.load(e.duration));
          }
        };
      },
      7306: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LifeDelay = void 0);
        const i = n(4001);
        class o extends i.ValueWithRandom {
          constructor() {
            super(), (this.sync = !1);
          }
          load(e) {
            e && (super.load(e), void 0 !== e.sync && (this.sync = e.sync));
          }
        }
        t.LifeDelay = o;
      },
      9991: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LifeDuration = void 0);
        const i = n(4001);
        class o extends i.ValueWithRandom {
          constructor() {
            super(), (this.random.minimumValue = 1e-4), (this.sync = !1);
          }
          load(e) {
            void 0 !== e &&
              (super.load(e), void 0 !== e.sync && (this.sync = e.sync));
          }
        }
        t.LifeDuration = o;
      },
      2496: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Links = void 0);
        const i = n(1631),
          o = n(825),
          r = n(1834);
        t.Links = class {
          constructor() {
            (this.blink = !1),
              (this.color = new r.OptionsColor()),
              (this.consent = !1),
              (this.distance = 100),
              (this.enable = !1),
              (this.frequency = 1),
              (this.opacity = 1),
              (this.shadow = new i.LinksShadow()),
              (this.triangles = new o.LinksTriangle()),
              (this.width = 1),
              (this.warp = !1);
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.id && (this.id = e.id),
              void 0 !== e.blink && (this.blink = e.blink),
              (this.color = r.OptionsColor.create(this.color, e.color)),
              void 0 !== e.consent && (this.consent = e.consent),
              void 0 !== e.distance && (this.distance = e.distance),
              void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.frequency && (this.frequency = e.frequency),
              void 0 !== e.opacity && (this.opacity = e.opacity),
              this.shadow.load(e.shadow),
              this.triangles.load(e.triangles),
              void 0 !== e.width && (this.width = e.width),
              void 0 !== e.warp && (this.warp = e.warp));
          }
        };
      },
      1631: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LinksShadow = void 0);
        const i = n(1834);
        t.LinksShadow = class {
          constructor() {
            (this.blur = 5),
              (this.color = new i.OptionsColor()),
              (this.enable = !1),
              (this.color.value = "#00ff00");
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.blur && (this.blur = e.blur),
              (this.color = i.OptionsColor.create(this.color, e.color)),
              void 0 !== e.enable && (this.enable = e.enable));
          }
        };
      },
      825: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LinksTriangle = void 0);
        const i = n(1834);
        t.LinksTriangle = class {
          constructor() {
            (this.enable = !1), (this.frequency = 1);
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.color &&
                (this.color = i.OptionsColor.create(this.color, e.color)),
              void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.frequency && (this.frequency = e.frequency),
              void 0 !== e.opacity && (this.opacity = e.opacity));
          }
        };
      },
      4469: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Attract = void 0);
        const i = n(4407);
        t.Attract = class {
          constructor() {
            (this.distance = 200),
              (this.enable = !1),
              (this.rotate = { x: 3e3, y: 3e3 });
          }
          get rotateX() {
            return this.rotate.x;
          }
          set rotateX(e) {
            this.rotate.x = e;
          }
          get rotateY() {
            return this.rotate.y;
          }
          set rotateY(e) {
            this.rotate.y = e;
          }
          load(e) {
            var t, n, o, r;
            if (!e) return;
            void 0 !== e.distance &&
              (this.distance = (0, i.setRangeValue)(e.distance)),
              void 0 !== e.enable && (this.enable = e.enable);
            const a =
              null !==
                (n = null === (t = e.rotate) || void 0 === t ? void 0 : t.x) &&
              void 0 !== n
                ? n
                : e.rotateX;
            void 0 !== a && (this.rotate.x = a);
            const s =
              null !==
                (r = null === (o = e.rotate) || void 0 === o ? void 0 : o.y) &&
              void 0 !== r
                ? r
                : e.rotateY;
            void 0 !== s && (this.rotate.y = s);
          }
        };
      },
      2079: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Move = void 0);
        const i = n(4469),
          o = n(4142),
          r = n(1452),
          a = n(2728),
          s = n(8415),
          l = n(2631),
          c = n(4998),
          u = n(5745),
          d = n(4407);
        t.Move = class {
          constructor() {
            (this.angle = new o.MoveAngle()),
              (this.attract = new i.Attract()),
              (this.decay = 0),
              (this.distance = {}),
              (this.direction = "none"),
              (this.drift = 0),
              (this.enable = !1),
              (this.gravity = new r.MoveGravity()),
              (this.path = new s.Path()),
              (this.outModes = new a.OutModes()),
              (this.random = !1),
              (this.size = !1),
              (this.speed = 2),
              (this.spin = new l.Spin()),
              (this.straight = !1),
              (this.trail = new c.Trail()),
              (this.vibrate = !1),
              (this.warp = !1);
          }
          get collisions() {
            return !1;
          }
          set collisions(e) {}
          get bounce() {
            return this.collisions;
          }
          set bounce(e) {
            this.collisions = e;
          }
          get out_mode() {
            return this.outMode;
          }
          set out_mode(e) {
            this.outMode = e;
          }
          get outMode() {
            return this.outModes.default;
          }
          set outMode(e) {
            this.outModes.default = e;
          }
          get noise() {
            return this.path;
          }
          set noise(e) {
            this.path = e;
          }
          load(e) {
            var t, n, i;
            if (void 0 === e) return;
            void 0 !== e.angle &&
              ("number" === typeof e.angle
                ? (this.angle.value = e.angle)
                : this.angle.load(e.angle)),
              this.attract.load(e.attract),
              void 0 !== e.decay && (this.decay = e.decay),
              void 0 !== e.direction && (this.direction = e.direction),
              void 0 !== e.distance &&
                (this.distance =
                  "number" === typeof e.distance
                    ? { horizontal: e.distance, vertical: e.distance }
                    : (0, u.deepExtend)({}, e.distance)),
              void 0 !== e.drift &&
                (this.drift = (0, d.setRangeValue)(e.drift)),
              void 0 !== e.enable && (this.enable = e.enable),
              this.gravity.load(e.gravity);
            const o = null !== (t = e.outMode) && void 0 !== t ? t : e.out_mode;
            (void 0 === e.outModes && void 0 === o) ||
              ("string" === typeof e.outModes ||
              (void 0 === e.outModes && void 0 !== o)
                ? this.outModes.load({
                    default: null !== (n = e.outModes) && void 0 !== n ? n : o,
                  })
                : this.outModes.load(e.outModes)),
              this.path.load(
                null !== (i = e.path) && void 0 !== i ? i : e.noise
              ),
              void 0 !== e.random && (this.random = e.random),
              void 0 !== e.size && (this.size = e.size),
              void 0 !== e.speed &&
                (this.speed = (0, d.setRangeValue)(e.speed)),
              this.spin.load(e.spin),
              void 0 !== e.straight && (this.straight = e.straight),
              this.trail.load(e.trail),
              void 0 !== e.vibrate && (this.vibrate = e.vibrate),
              void 0 !== e.warp && (this.warp = e.warp);
          }
        };
      },
      4142: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MoveAngle = void 0);
        const i = n(4407);
        t.MoveAngle = class {
          constructor() {
            (this.offset = 0), (this.value = 90);
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.offset &&
                (this.offset = (0, i.setRangeValue)(e.offset)),
              void 0 !== e.value &&
                (this.value = (0, i.setRangeValue)(e.value)));
          }
        };
      },
      1452: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MoveGravity = void 0);
        const i = n(4407);
        t.MoveGravity = class {
          constructor() {
            (this.acceleration = 9.81),
              (this.enable = !1),
              (this.inverse = !1),
              (this.maxSpeed = 50);
          }
          load(e) {
            e &&
              (void 0 !== e.acceleration &&
                (this.acceleration = (0, i.setRangeValue)(e.acceleration)),
              void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.inverse && (this.inverse = e.inverse),
              void 0 !== e.maxSpeed &&
                (this.maxSpeed = (0, i.setRangeValue)(e.maxSpeed)));
          }
        };
      },
      2728: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.OutModes = void 0);
        t.OutModes = class {
          constructor() {
            this.default = "out";
          }
          load(e) {
            var t, n, i, o;
            e &&
              (void 0 !== e.default && (this.default = e.default),
              (this.bottom =
                null !== (t = e.bottom) && void 0 !== t ? t : e.default),
              (this.left =
                null !== (n = e.left) && void 0 !== n ? n : e.default),
              (this.right =
                null !== (i = e.right) && void 0 !== i ? i : e.default),
              (this.top =
                null !== (o = e.top) && void 0 !== o ? o : e.default));
          }
        };
      },
      8415: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Path = void 0);
        const i = n(9933),
          o = n(5745);
        t.Path = class {
          constructor() {
            (this.clamp = !0),
              (this.delay = new i.PathDelay()),
              (this.enable = !1),
              (this.options = {});
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.clamp && (this.clamp = e.clamp),
              this.delay.load(e.delay),
              void 0 !== e.enable && (this.enable = e.enable),
              (this.generator = e.generator),
              e.options &&
                (this.options = (0, o.deepExtend)(this.options, e.options)));
          }
        };
      },
      9933: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PathDelay = void 0);
        const i = n(4001);
        class o extends i.ValueWithRandom {
          constructor() {
            super();
          }
        }
        t.PathDelay = o;
      },
      2631: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Spin = void 0);
        const i = n(5745),
          o = n(4407);
        t.Spin = class {
          constructor() {
            (this.acceleration = 0), (this.enable = !1);
          }
          load(e) {
            e &&
              (void 0 !== e.acceleration &&
                (this.acceleration = (0, o.setRangeValue)(e.acceleration)),
              void 0 !== e.enable && (this.enable = e.enable),
              (this.position = e.position
                ? (0, i.deepExtend)({}, e.position)
                : void 0));
          }
        };
      },
      4998: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Trail = void 0);
        const i = n(1834);
        t.Trail = class {
          constructor() {
            (this.enable = !1),
              (this.length = 10),
              (this.fillColor = new i.OptionsColor()),
              (this.fillColor.value = "#000000");
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.enable && (this.enable = e.enable),
              (this.fillColor = i.OptionsColor.create(
                this.fillColor,
                e.fillColor
              )),
              void 0 !== e.length && (this.length = e.length));
          }
        };
      },
      4566: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Density = void 0);
        t.Density = class {
          constructor() {
            (this.enable = !1), (this.area = 800), (this.factor = 1e3);
          }
          get value_area() {
            return this.area;
          }
          set value_area(e) {
            this.area = e;
          }
          load(e) {
            var t;
            if (void 0 === e) return;
            void 0 !== e.enable && (this.enable = e.enable);
            const n = null !== (t = e.area) && void 0 !== t ? t : e.value_area;
            void 0 !== n && (this.area = n),
              void 0 !== e.factor && (this.factor = e.factor);
          }
        };
      },
      8475: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ParticlesNumber = void 0);
        const i = n(4566);
        t.ParticlesNumber = class {
          constructor() {
            (this.density = new i.Density()),
              (this.limit = 0),
              (this.value = 100);
          }
          get max() {
            return this.limit;
          }
          set max(e) {
            this.limit = e;
          }
          load(e) {
            var t;
            if (void 0 === e) return;
            this.density.load(e.density);
            const n = null !== (t = e.limit) && void 0 !== t ? t : e.max;
            void 0 !== n && (this.limit = n),
              void 0 !== e.value && (this.value = e.value);
          }
        };
      },
      3138: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Opacity = void 0);
        const i = n(6996),
          o = n(4001),
          r = n(4407);
        class a extends o.ValueWithRandom {
          constructor() {
            super(),
              (this.animation = new i.OpacityAnimation()),
              (this.random.minimumValue = 0.1),
              (this.value = 1);
          }
          get anim() {
            return this.animation;
          }
          set anim(e) {
            this.animation = e;
          }
          load(e) {
            var t;
            if (!e) return;
            super.load(e);
            const n = null !== (t = e.animation) && void 0 !== t ? t : e.anim;
            void 0 !== n &&
              (this.animation.load(n),
              (this.value = (0, r.setRangeValue)(
                this.value,
                this.animation.enable ? this.animation.minimumValue : void 0
              )));
          }
        }
        t.Opacity = a;
      },
      6996: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.OpacityAnimation = void 0);
        const i = n(4231);
        class o extends i.AnimationOptions {
          constructor() {
            super(),
              (this.destroy = "none"),
              (this.enable = !1),
              (this.speed = 2),
              (this.startValue = "random"),
              (this.sync = !1);
          }
          get opacity_min() {
            return this.minimumValue;
          }
          set opacity_min(e) {
            this.minimumValue = e;
          }
          load(e) {
            var t;
            void 0 !== e &&
              (super.load(e),
              void 0 !== e.destroy && (this.destroy = e.destroy),
              void 0 !== e.enable && (this.enable = e.enable),
              (this.minimumValue =
                null !== (t = e.minimumValue) && void 0 !== t
                  ? t
                  : e.opacity_min),
              void 0 !== e.speed && (this.speed = e.speed),
              void 0 !== e.startValue && (this.startValue = e.startValue),
              void 0 !== e.sync && (this.sync = e.sync));
          }
        }
        t.OpacityAnimation = o;
      },
      6889: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Orbit = void 0);
        const i = n(4231),
          o = n(1834),
          r = n(2657),
          a = n(4407);
        t.Orbit = class {
          constructor() {
            (this.animation = new i.AnimationOptions()),
              (this.enable = !1),
              (this.opacity = 1),
              (this.rotation = new r.OrbitRotation()),
              (this.width = 1);
          }
          load(e) {
            void 0 !== e &&
              (this.animation.load(e.animation),
              this.rotation.load(e.rotation),
              void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.opacity &&
                (this.opacity = (0, a.setRangeValue)(e.opacity)),
              void 0 !== e.width &&
                (this.width = (0, a.setRangeValue)(e.width)),
              void 0 !== e.radius &&
                (this.radius = (0, a.setRangeValue)(e.radius)),
              void 0 !== e.color &&
                (this.color = o.OptionsColor.create(this.color, e.color)));
          }
        };
      },
      2657: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.OrbitRotation = void 0);
        const i = n(4001);
        class o extends i.ValueWithRandom {
          constructor() {
            super(),
              (this.value = 45),
              (this.random.enable = !1),
              (this.random.minimumValue = 0);
          }
          load(e) {
            void 0 !== e && super.load(e);
          }
        }
        t.OrbitRotation = o;
      },
      7604: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ParticlesOptions = void 0);
        const i = n(1272),
          o = n(1083),
          r = n(7969),
          a = n(7367),
          s = n(4417),
          l = n(8729),
          c = n(2496),
          u = n(2079),
          d = n(3138),
          h = n(6889),
          p = n(8475),
          f = n(7620),
          v = n(1774),
          g = n(7687),
          y = n(1642),
          m = n(6584),
          b = n(9904),
          w = n(2574),
          S = n(4495),
          _ = n(9166),
          P = n(6666),
          x = n(9992),
          C = n(5745);
        t.ParticlesOptions = class {
          constructor() {
            (this.bounce = new r.Bounce()),
              (this.collisions = new a.Collisions()),
              (this.color = new i.AnimatableColor()),
              (this.destroy = new s.Destroy()),
              (this.gradient = []),
              (this.groups = {}),
              (this.life = new l.Life()),
              (this.links = new c.Links()),
              (this.move = new u.Move()),
              (this.number = new p.ParticlesNumber()),
              (this.opacity = new d.Opacity()),
              (this.orbit = new h.Orbit()),
              (this.reduceDuplicates = !1),
              (this.repulse = new f.Repulse()),
              (this.roll = new v.Roll()),
              (this.rotate = new g.Rotate()),
              (this.shadow = new y.Shadow()),
              (this.shape = new m.Shape()),
              (this.size = new b.Size()),
              (this.stroke = new w.Stroke()),
              (this.tilt = new S.Tilt()),
              (this.twinkle = new _.Twinkle()),
              (this.wobble = new P.Wobble()),
              (this.zIndex = new x.ZIndex());
          }
          get line_linked() {
            return this.links;
          }
          set line_linked(e) {
            this.links = e;
          }
          get lineLinked() {
            return this.links;
          }
          set lineLinked(e) {
            this.links = e;
          }
          load(e) {
            var t, n, r, a, s, l, c, u;
            if (void 0 === e) return;
            this.bounce.load(e.bounce),
              this.color.load(i.AnimatableColor.create(this.color, e.color)),
              this.destroy.load(e.destroy),
              this.life.load(e.life);
            const d =
              null !==
                (n =
                  null !== (t = e.links) && void 0 !== t ? t : e.lineLinked) &&
              void 0 !== n
                ? n
                : e.line_linked;
            if ((void 0 !== d && this.links.load(d), void 0 !== e.groups))
              for (const i in e.groups) {
                const t = e.groups[i];
                void 0 !== t &&
                  (this.groups[i] = (0, C.deepExtend)(
                    null !== (r = this.groups[i]) && void 0 !== r ? r : {},
                    t
                  ));
              }
            this.move.load(e.move),
              this.number.load(e.number),
              this.opacity.load(e.opacity),
              this.orbit.load(e.orbit),
              void 0 !== e.reduceDuplicates &&
                (this.reduceDuplicates = e.reduceDuplicates),
              this.repulse.load(e.repulse),
              this.roll.load(e.roll),
              this.rotate.load(e.rotate),
              this.shape.load(e.shape),
              this.size.load(e.size),
              this.shadow.load(e.shadow),
              this.tilt.load(e.tilt),
              this.twinkle.load(e.twinkle),
              this.wobble.load(e.wobble),
              this.zIndex.load(e.zIndex);
            const h =
              null !==
                (s =
                  null === (a = e.move) || void 0 === a
                    ? void 0
                    : a.collisions) && void 0 !== s
                ? s
                : null === (l = e.move) || void 0 === l
                ? void 0
                : l.bounce;
            void 0 !== h && (this.collisions.enable = h),
              this.collisions.load(e.collisions);
            const p =
              null !== (c = e.stroke) && void 0 !== c
                ? c
                : null === (u = e.shape) || void 0 === u
                ? void 0
                : u.stroke;
            p &&
              (p instanceof Array
                ? (this.stroke = p.map((e) => {
                    const t = new w.Stroke();
                    return t.load(e), t;
                  }))
                : (this.stroke instanceof Array &&
                    (this.stroke = new w.Stroke()),
                  this.stroke.load(p)));
            const f = e.gradient;
            f &&
              (f instanceof Array
                ? (this.gradient = f.map((e) => {
                    const t = new o.AnimatableGradient();
                    return t.load(e), t;
                  }))
                : (this.gradient instanceof Array &&
                    (this.gradient = new o.AnimatableGradient()),
                  this.gradient.load(f)));
          }
        };
      },
      7620: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Repulse = void 0);
        const i = n(4001),
          o = n(4407);
        class r extends i.ValueWithRandom {
          constructor() {
            super(),
              (this.enabled = !1),
              (this.distance = 1),
              (this.duration = 1),
              (this.factor = 1),
              (this.speed = 1);
          }
          load(e) {
            super.load(e),
              e &&
                (void 0 !== e.enabled && (this.enabled = e.enabled),
                void 0 !== e.distance &&
                  (this.distance = (0, o.setRangeValue)(e.distance)),
                void 0 !== e.duration &&
                  (this.duration = (0, o.setRangeValue)(e.duration)),
                void 0 !== e.factor &&
                  (this.factor = (0, o.setRangeValue)(e.factor)),
                void 0 !== e.speed &&
                  (this.speed = (0, o.setRangeValue)(e.speed)));
          }
        }
        t.Repulse = r;
      },
      1774: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Roll = void 0);
        const i = n(1834),
          o = n(3222),
          r = n(4407);
        t.Roll = class {
          constructor() {
            (this.darken = new o.RollLight()),
              (this.enable = !1),
              (this.enlighten = new o.RollLight()),
              (this.mode = "vertical"),
              (this.speed = 25);
          }
          load(e) {
            e &&
              (void 0 !== e.backColor &&
                (this.backColor = i.OptionsColor.create(
                  this.backColor,
                  e.backColor
                )),
              this.darken.load(e.darken),
              void 0 !== e.enable && (this.enable = e.enable),
              this.enlighten.load(e.enlighten),
              void 0 !== e.mode && (this.mode = e.mode),
              void 0 !== e.speed &&
                (this.speed = (0, r.setRangeValue)(e.speed)));
          }
        };
      },
      3222: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.RollLight = void 0);
        const i = n(4407);
        t.RollLight = class {
          constructor() {
            (this.enable = !1), (this.value = 0);
          }
          load(e) {
            e &&
              (void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.value &&
                (this.value = (0, i.setRangeValue)(e.value)));
          }
        };
      },
      7687: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Rotate = void 0);
        const i = n(6880),
          o = n(4001);
        class r extends o.ValueWithRandom {
          constructor() {
            super(),
              (this.animation = new i.RotateAnimation()),
              (this.direction = "clockwise"),
              (this.path = !1),
              (this.value = 0);
          }
          load(e) {
            e &&
              (super.load(e),
              void 0 !== e.direction && (this.direction = e.direction),
              this.animation.load(e.animation),
              void 0 !== e.path && (this.path = e.path));
          }
        }
        t.Rotate = r;
      },
      6880: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.RotateAnimation = void 0);
        const i = n(4407);
        t.RotateAnimation = class {
          constructor() {
            (this.enable = !1), (this.speed = 0), (this.sync = !1);
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.speed &&
                (this.speed = (0, i.setRangeValue)(e.speed)),
              void 0 !== e.sync && (this.sync = e.sync));
          }
        };
      },
      1642: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Shadow = void 0);
        const i = n(1834);
        t.Shadow = class {
          constructor() {
            (this.blur = 0),
              (this.color = new i.OptionsColor()),
              (this.enable = !1),
              (this.offset = { x: 0, y: 0 }),
              (this.color.value = "#000000");
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.blur && (this.blur = e.blur),
              (this.color = i.OptionsColor.create(this.color, e.color)),
              void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.offset &&
                (void 0 !== e.offset.x && (this.offset.x = e.offset.x),
                void 0 !== e.offset.y && (this.offset.y = e.offset.y)));
          }
        };
      },
      6584: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Shape = void 0);
        const i = n(5745);
        t.Shape = class {
          constructor() {
            (this.options = {}), (this.type = "circle");
          }
          get image() {
            var e;
            return null !== (e = this.options.image) && void 0 !== e
              ? e
              : this.options.images;
          }
          set image(e) {
            (this.options.image = e), (this.options.images = e);
          }
          get custom() {
            return this.options;
          }
          set custom(e) {
            this.options = e;
          }
          get images() {
            return this.image;
          }
          set images(e) {
            this.image = e;
          }
          get stroke() {
            return [];
          }
          set stroke(e) {}
          get character() {
            var e;
            return null !== (e = this.options.character) && void 0 !== e
              ? e
              : this.options.char;
          }
          set character(e) {
            (this.options.character = e), (this.options.char = e);
          }
          get polygon() {
            var e;
            return null !== (e = this.options.polygon) && void 0 !== e
              ? e
              : this.options.star;
          }
          set polygon(e) {
            (this.options.polygon = e), (this.options.star = e);
          }
          load(e) {
            var t, n, o;
            if (void 0 === e) return;
            const r = null !== (t = e.options) && void 0 !== t ? t : e.custom;
            if (void 0 !== r)
              for (const a in r) {
                const e = r[a];
                void 0 !== e &&
                  (this.options[a] = (0, i.deepExtend)(
                    null !== (n = this.options[a]) && void 0 !== n ? n : {},
                    e
                  ));
              }
            this.loadShape(e.character, "character", "char", !0),
              this.loadShape(e.polygon, "polygon", "star", !1),
              this.loadShape(
                null !== (o = e.image) && void 0 !== o ? o : e.images,
                "image",
                "images",
                !0
              ),
              void 0 !== e.type && (this.type = e.type);
          }
          loadShape(e, t, n, o) {
            var r, a, s, l;
            void 0 !== e &&
              (e instanceof Array
                ? (this.options[t] instanceof Array ||
                    ((this.options[t] = []),
                    (this.options[n] && !o) || (this.options[n] = [])),
                  (this.options[t] = (0, i.deepExtend)(
                    null !== (r = this.options[t]) && void 0 !== r ? r : [],
                    e
                  )),
                  (this.options[n] && !o) ||
                    (this.options[n] = (0, i.deepExtend)(
                      null !== (a = this.options[n]) && void 0 !== a ? a : [],
                      e
                    )))
                : (this.options[t] instanceof Array &&
                    ((this.options[t] = {}),
                    (this.options[n] && !o) || (this.options[n] = {})),
                  (this.options[t] = (0, i.deepExtend)(
                    null !== (s = this.options[t]) && void 0 !== s ? s : {},
                    e
                  )),
                  (this.options[n] && !o) ||
                    (this.options[n] = (0, i.deepExtend)(
                      null !== (l = this.options[n]) && void 0 !== l ? l : {},
                      e
                    ))));
          }
        };
      },
      9904: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Size = void 0);
        const i = n(4875),
          o = n(4001),
          r = n(4407);
        class a extends o.ValueWithRandom {
          constructor() {
            super(),
              (this.animation = new i.SizeAnimation()),
              (this.random.minimumValue = 1),
              (this.value = 3);
          }
          get anim() {
            return this.animation;
          }
          set anim(e) {
            this.animation = e;
          }
          load(e) {
            var t;
            if (!e) return;
            super.load(e);
            const n = null !== (t = e.animation) && void 0 !== t ? t : e.anim;
            void 0 !== n &&
              (this.animation.load(n),
              (this.value = (0, r.setRangeValue)(
                this.value,
                this.animation.enable ? this.animation.minimumValue : void 0
              )));
          }
        }
        t.Size = a;
      },
      4875: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SizeAnimation = void 0);
        const i = n(4231);
        class o extends i.AnimationOptions {
          constructor() {
            super(),
              (this.destroy = "none"),
              (this.enable = !1),
              (this.speed = 5),
              (this.startValue = "random"),
              (this.sync = !1);
          }
          get size_min() {
            return this.minimumValue;
          }
          set size_min(e) {
            this.minimumValue = e;
          }
          load(e) {
            var t;
            void 0 !== e &&
              (super.load(e),
              void 0 !== e.destroy && (this.destroy = e.destroy),
              void 0 !== e.enable && (this.enable = e.enable),
              (this.minimumValue =
                null !== (t = e.minimumValue) && void 0 !== t ? t : e.size_min),
              void 0 !== e.speed && (this.speed = e.speed),
              void 0 !== e.startValue && (this.startValue = e.startValue),
              void 0 !== e.sync && (this.sync = e.sync));
          }
        }
        t.SizeAnimation = o;
      },
      2574: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Stroke = void 0);
        const i = n(1272);
        t.Stroke = class {
          constructor() {
            this.width = 0;
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.color &&
                (this.color = i.AnimatableColor.create(this.color, e.color)),
              void 0 !== e.width && (this.width = e.width),
              void 0 !== e.opacity && (this.opacity = e.opacity));
          }
        };
      },
      4495: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Tilt = void 0);
        const i = n(5250),
          o = n(4001);
        class r extends o.ValueWithRandom {
          constructor() {
            super(),
              (this.animation = new i.TiltAnimation()),
              (this.direction = "clockwise"),
              (this.enable = !1),
              (this.value = 0);
          }
          load(e) {
            e &&
              (super.load(e),
              this.animation.load(e.animation),
              void 0 !== e.direction && (this.direction = e.direction),
              void 0 !== e.enable && (this.enable = e.enable));
          }
        }
        t.Tilt = r;
      },
      5250: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TiltAnimation = void 0);
        const i = n(4407);
        t.TiltAnimation = class {
          constructor() {
            (this.enable = !1), (this.speed = 0), (this.sync = !1);
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.speed &&
                (this.speed = (0, i.setRangeValue)(e.speed)),
              void 0 !== e.sync && (this.sync = e.sync));
          }
        };
      },
      9166: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Twinkle = void 0);
        const i = n(3468);
        t.Twinkle = class {
          constructor() {
            (this.lines = new i.TwinkleValues()),
              (this.particles = new i.TwinkleValues());
          }
          load(e) {
            void 0 !== e &&
              (this.lines.load(e.lines), this.particles.load(e.particles));
          }
        };
      },
      3468: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TwinkleValues = void 0);
        const i = n(1834),
          o = n(4407);
        t.TwinkleValues = class {
          constructor() {
            (this.enable = !1), (this.frequency = 0.05), (this.opacity = 1);
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.color &&
                (this.color = i.OptionsColor.create(this.color, e.color)),
              void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.frequency && (this.frequency = e.frequency),
              void 0 !== e.opacity &&
                (this.opacity = (0, o.setRangeValue)(e.opacity)));
          }
        };
      },
      6666: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Wobble = void 0);
        const i = n(4407);
        t.Wobble = class {
          constructor() {
            (this.distance = 5), (this.enable = !1), (this.speed = 50);
          }
          load(e) {
            e &&
              (void 0 !== e.distance &&
                (this.distance = (0, i.setRangeValue)(e.distance)),
              void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.speed &&
                (this.speed = (0, i.setRangeValue)(e.speed)));
          }
        };
      },
      9992: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ZIndex = void 0);
        const i = n(4001);
        class o extends i.ValueWithRandom {
          constructor() {
            super(),
              (this.opacityRate = 1),
              (this.sizeRate = 1),
              (this.velocityRate = 1);
          }
          load(e) {
            super.load(e),
              e &&
                (void 0 !== e.opacityRate && (this.opacityRate = e.opacityRate),
                void 0 !== e.sizeRate && (this.sizeRate = e.sizeRate),
                void 0 !== e.velocityRate &&
                  (this.velocityRate = e.velocityRate));
          }
        }
        t.ZIndex = o;
      },
      8252: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Random = void 0);
        t.Random = class {
          constructor() {
            (this.enable = !1), (this.minimumValue = 0);
          }
          load(e) {
            e &&
              (void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.minimumValue &&
                (this.minimumValue = e.minimumValue));
          }
        };
      },
      9715: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Responsive = void 0);
        const i = n(5745);
        t.Responsive = class {
          constructor() {
            (this.maxWidth = 1 / 0),
              (this.options = {}),
              (this.mode = "canvas");
          }
          load(e) {
            e &&
              (void 0 !== e.maxWidth && (this.maxWidth = e.maxWidth),
              void 0 !== e.mode &&
                ("screen" === e.mode
                  ? (this.mode = "screen")
                  : (this.mode = "canvas")),
              void 0 !== e.options &&
                (this.options = (0, i.deepExtend)({}, e.options)));
          }
        };
      },
      6215: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Theme = void 0);
        const i = n(3284),
          o = n(5745);
        t.Theme = class {
          constructor() {
            (this.name = ""), (this.default = new i.ThemeDefault());
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.name && (this.name = e.name),
              this.default.load(e.default),
              void 0 !== e.options &&
                (this.options = (0, o.deepExtend)({}, e.options)));
          }
        };
      },
      3284: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ThemeDefault = void 0);
        t.ThemeDefault = class {
          constructor() {
            (this.auto = !1), (this.mode = "any"), (this.value = !1);
          }
          load(e) {
            e &&
              (void 0 !== e.auto && (this.auto = e.auto),
              void 0 !== e.mode && (this.mode = e.mode),
              void 0 !== e.value && (this.value = e.value));
          }
        };
      },
      4001: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ValueWithRandom = void 0);
        const i = n(8252),
          o = n(4407);
        t.ValueWithRandom = class {
          constructor() {
            (this.random = new i.Random()), (this.value = 0);
          }
          load(e) {
            e &&
              ("boolean" === typeof e.random
                ? (this.random.enable = e.random)
                : this.random.load(e.random),
              void 0 !== e.value &&
                (this.value = (0, o.setRangeValue)(
                  e.value,
                  this.random.enable ? this.random.minimumValue : void 0
                )));
          }
        };
      },
      4968: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      796: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AbsorberInstance = void 0);
        const i = n(4407),
          o = n(6923),
          r = n(3324),
          a = n(3542),
          s = n(5745);
        t.AbsorberInstance = class {
          constructor(e, t, n, s) {
            var l, c, u;
            (this.absorbers = e),
              (this.container = t),
              (this.initialPosition = s ? a.Vector.create(s.x, s.y) : void 0),
              n instanceof r.Absorber
                ? (this.options = n)
                : ((this.options = new r.Absorber()), this.options.load(n)),
              (this.dragging = !1),
              (this.name = this.options.name),
              (this.opacity = this.options.opacity),
              (this.size =
                (0, i.getRangeValue)(this.options.size.value) *
                t.retina.pixelRatio),
              (this.mass =
                this.size * this.options.size.density * t.retina.reduceFactor);
            const d = this.options.size.limit;
            (this.limit = {
              radius: d.radius * t.retina.pixelRatio * t.retina.reduceFactor,
              mass: d.mass,
            }),
              (this.color =
                null !== (l = (0, o.colorToRgb)(this.options.color)) &&
                void 0 !== l
                  ? l
                  : { b: 0, g: 0, r: 0 }),
              (this.position =
                null !==
                  (u =
                    null === (c = this.initialPosition) || void 0 === c
                      ? void 0
                      : c.copy()) && void 0 !== u
                  ? u
                  : this.calcPosition());
          }
          attract(e) {
            const t = this.container,
              n = this.options;
            if (n.draggable) {
              const e = t.interactivity.mouse;
              if (e.clicking && e.downPosition) {
                (0, i.getDistance)(this.position, e.downPosition) <=
                  this.size && (this.dragging = !0);
              } else this.dragging = !1;
              this.dragging &&
                e.position &&
                ((this.position.x = e.position.x),
                (this.position.y = e.position.y));
            }
            const o = e.getPosition(),
              {
                dx: r,
                dy: s,
                distance: l,
              } = (0, i.getDistances)(this.position, o),
              c = a.Vector.create(r, s);
            if (
              ((c.length =
                (this.mass / Math.pow(l, 2)) * t.retina.reduceFactor),
              l < this.size + e.getRadius())
            ) {
              const i = 0.033 * e.getRadius() * t.retina.pixelRatio;
              (this.size > e.getRadius() && l < this.size - e.getRadius()) ||
              (void 0 !== e.absorberOrbit && e.absorberOrbit.length < 0)
                ? n.destroy
                  ? e.destroy()
                  : ((e.needsNewPosition = !0),
                    this.updateParticlePosition(e, c))
                : (n.destroy && (e.size.value -= i),
                  this.updateParticlePosition(e, c)),
                (this.limit.radius <= 0 || this.size < this.limit.radius) &&
                  (this.size += i),
                (this.limit.mass <= 0 || this.mass < this.limit.mass) &&
                  (this.mass +=
                    i * this.options.size.density * t.retina.reduceFactor);
            } else this.updateParticlePosition(e, c);
          }
          resize() {
            const e = this.initialPosition;
            this.position =
              e && (0, s.isPointInside)(e, this.container.canvas.size)
                ? e
                : this.calcPosition();
          }
          draw(e) {
            e.translate(this.position.x, this.position.y),
              e.beginPath(),
              e.arc(0, 0, this.size, 0, 2 * Math.PI, !1),
              e.closePath(),
              (e.fillStyle = (0, o.getStyleFromRgb)(this.color, this.opacity)),
              e.fill();
          }
          calcPosition() {
            const e = (0, i.calcPositionOrRandomFromSizeRanged)({
              size: this.container.canvas.size,
              position: this.options.position,
            });
            return a.Vector.create(e.x, e.y);
          }
          updateParticlePosition(e, t) {
            var n;
            if (e.destroyed) return;
            const o = this.container,
              r = o.canvas.size;
            if (e.needsNewPosition) {
              const t = (0, i.calcPositionOrRandomFromSize)({ size: r });
              e.position.setTo(t),
                e.velocity.setTo(e.initialVelocity),
                (e.absorberOrbit = void 0),
                (e.needsNewPosition = !1);
            }
            if (this.options.orbits) {
              if (
                (void 0 === e.absorberOrbit &&
                  ((e.absorberOrbit = a.Vector.create(0, 0)),
                  (e.absorberOrbit.length = (0, i.getDistance)(
                    e.getPosition(),
                    this.position
                  )),
                  (e.absorberOrbit.angle = Math.random() * Math.PI * 2)),
                e.absorberOrbit.length <= this.size && !this.options.destroy)
              ) {
                const t = Math.min(r.width, r.height);
                e.absorberOrbit.length = t * (0.2 * Math.random() - 0.1 + 1);
              }
              void 0 === e.absorberOrbitDirection &&
                (e.absorberOrbitDirection =
                  e.velocity.x >= 0 ? "clockwise" : "counter-clockwise");
              const s = e.absorberOrbit.length,
                l = e.absorberOrbit.angle,
                c = e.absorberOrbitDirection;
              e.velocity.setTo(a.Vector.origin);
              const u = {
                x: "clockwise" === c ? Math.cos : Math.sin,
                y: "clockwise" === c ? Math.sin : Math.cos,
              };
              (e.position.x = this.position.x + s * u.x(l)),
                (e.position.y = this.position.y + s * u.y(l)),
                (e.absorberOrbit.length -= t.length),
                (e.absorberOrbit.angle +=
                  (((null !== (n = e.retina.moveSpeed) && void 0 !== n
                    ? n
                    : 0) *
                    o.retina.pixelRatio) /
                    100) *
                  o.retina.reduceFactor);
            } else {
              const n = a.Vector.origin;
              (n.length = t.length), (n.angle = t.angle), e.velocity.addTo(n);
            }
          }
        };
      },
      9399: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Absorbers = void 0);
        const i = n(3324),
          o = n(796),
          r = n(5745);
        t.Absorbers = class {
          constructor(e) {
            (this.container = e),
              (this.array = []),
              (this.absorbers = []),
              (this.interactivityAbsorbers = []);
            const t = e;
            (t.getAbsorber = (e) =>
              void 0 === e || "number" === typeof e
                ? this.array[e || 0]
                : this.array.find((t) => t.name === e)),
              (t.addAbsorber = (e, t) => this.addAbsorber(e, t));
          }
          init(e) {
            var t, n;
            if (!e) return;
            e.absorbers &&
              (e.absorbers instanceof Array
                ? (this.absorbers = e.absorbers.map((e) => {
                    const t = new i.Absorber();
                    return t.load(e), t;
                  }))
                : (this.absorbers instanceof Array &&
                    (this.absorbers = new i.Absorber()),
                  this.absorbers.load(e.absorbers)));
            const o =
              null ===
                (n =
                  null === (t = e.interactivity) || void 0 === t
                    ? void 0
                    : t.modes) || void 0 === n
                ? void 0
                : n.absorbers;
            if (
              (o &&
                (o instanceof Array
                  ? (this.interactivityAbsorbers = o.map((e) => {
                      const t = new i.Absorber();
                      return t.load(e), t;
                    }))
                  : (this.interactivityAbsorbers instanceof Array &&
                      (this.interactivityAbsorbers = new i.Absorber()),
                    this.interactivityAbsorbers.load(o))),
              this.absorbers instanceof Array)
            )
              for (const i of this.absorbers) this.addAbsorber(i);
            else this.addAbsorber(this.absorbers);
          }
          particleUpdate(e) {
            for (const t of this.array) if ((t.attract(e), e.destroyed)) break;
          }
          draw(e) {
            for (const t of this.array) e.save(), t.draw(e), e.restore();
          }
          stop() {
            this.array = [];
          }
          resize() {
            for (const e of this.array) e.resize();
          }
          handleClickMode(e) {
            const t = this.absorbers,
              n = this.interactivityAbsorbers;
            if ("absorber" === e) {
              let e;
              n instanceof Array
                ? n.length > 0 && (e = (0, r.itemFromArray)(n))
                : (e = n);
              const i =
                  null !== e && void 0 !== e
                    ? e
                    : t instanceof Array
                    ? (0, r.itemFromArray)(t)
                    : t,
                o = this.container.interactivity.mouse.clickPosition;
              this.addAbsorber(i, o);
            }
          }
          addAbsorber(e, t) {
            const n = new o.AbsorberInstance(this, this.container, e, t);
            return this.array.push(n), n;
          }
          removeAbsorber(e) {
            const t = this.array.indexOf(e);
            t >= 0 && this.array.splice(t, 1);
          }
        };
      },
      8250: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      3324: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Absorber = void 0);
        const i = n(8662),
          o = n(1834),
          r = n(4407);
        t.Absorber = class {
          constructor() {
            (this.color = new o.OptionsColor()),
              (this.color.value = "#000000"),
              (this.draggable = !1),
              (this.opacity = 1),
              (this.destroy = !0),
              (this.orbits = !1),
              (this.size = new i.AbsorberSize());
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.color &&
                (this.color = o.OptionsColor.create(this.color, e.color)),
              void 0 !== e.draggable && (this.draggable = e.draggable),
              (this.name = e.name),
              void 0 !== e.opacity && (this.opacity = e.opacity),
              void 0 !== e.position &&
                ((this.position = {}),
                void 0 !== e.position.x &&
                  (this.position.x = (0, r.setRangeValue)(e.position.x)),
                void 0 !== e.position.y &&
                  (this.position.y = (0, r.setRangeValue)(e.position.y))),
              void 0 !== e.size && this.size.load(e.size),
              void 0 !== e.destroy && (this.destroy = e.destroy),
              void 0 !== e.orbits && (this.orbits = e.orbits));
          }
        };
      },
      8662: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AbsorberSize = void 0);
        const i = n(7824),
          o = n(4001);
        class r extends o.ValueWithRandom {
          constructor() {
            super(),
              (this.density = 5),
              (this.random.minimumValue = 1),
              (this.value = 50),
              (this.limit = new i.AbsorberSizeLimit());
          }
          load(e) {
            e &&
              (super.load(e),
              void 0 !== e.density && (this.density = e.density),
              "number" === typeof e.limit
                ? (this.limit.radius = e.limit)
                : this.limit.load(e.limit));
          }
        }
        t.AbsorberSize = r;
      },
      7824: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AbsorberSizeLimit = void 0);
        t.AbsorberSizeLimit = class {
          constructor() {
            (this.radius = 0), (this.mass = 0);
          }
          load(e) {
            e &&
              (void 0 !== e.mass && (this.mass = e.mass),
              void 0 !== e.radius && (this.radius = e.radius));
          }
        };
      },
      7677: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      3945: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var o = Object.getOwnPropertyDescriptor(t, n);
                  (o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, o);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadAbsorbersPlugin = void 0);
        const r = n(3324),
          a = n(9399),
          s = n(5745);
        class l {
          constructor() {
            this.id = "absorbers";
          }
          getPlugin(e) {
            return new a.Absorbers(e);
          }
          needsPlugin(e) {
            var t, n, i;
            if (void 0 === e) return !1;
            const o = e.absorbers;
            return o instanceof Array
              ? !!o.length
              : !!o ||
                  !(
                    !(null ===
                      (i =
                        null ===
                          (n =
                            null === (t = e.interactivity) || void 0 === t
                              ? void 0
                              : t.events) || void 0 === n
                          ? void 0
                          : n.onClick) || void 0 === i
                      ? void 0
                      : i.mode) ||
                    !(0, s.isInArray)(
                      "absorber",
                      e.interactivity.events.onClick.mode
                    )
                  );
          }
          loadOptions(e, t) {
            var n, i;
            if (!this.needsPlugin(e) && !this.needsPlugin(t)) return;
            const o = e;
            if (null === t || void 0 === t ? void 0 : t.absorbers)
              if (
                (null === t || void 0 === t ? void 0 : t.absorbers) instanceof
                Array
              )
                o.absorbers =
                  null === t || void 0 === t
                    ? void 0
                    : t.absorbers.map((e) => {
                        const t = new r.Absorber();
                        return t.load(e), t;
                      });
              else {
                let e = o.absorbers;
                void 0 === (null === e || void 0 === e ? void 0 : e.load) &&
                  (o.absorbers = e = new r.Absorber()),
                  e.load(null === t || void 0 === t ? void 0 : t.absorbers);
              }
            const a =
              null ===
                (i =
                  null ===
                    (n =
                      null === t || void 0 === t ? void 0 : t.interactivity) ||
                  void 0 === n
                    ? void 0
                    : n.modes) || void 0 === i
                ? void 0
                : i.absorbers;
            if (a)
              if (a instanceof Array)
                o.interactivity.modes.absorbers = a.map((e) => {
                  const t = new r.Absorber();
                  return t.load(e), t;
                });
              else {
                let e = o.interactivity.modes.absorbers;
                void 0 === (null === e || void 0 === e ? void 0 : e.load) &&
                  (o.interactivity.modes.absorbers = e = new r.Absorber()),
                  e.load(a);
              }
          }
        }
        (t.loadAbsorbersPlugin = async function (e) {
          const t = new l();
          await e.addPlugin(t);
        }),
          o(n(8250), t),
          o(n(7677), t);
      },
      8425: function (e, t, n) {
        "use strict";
        var i,
          o,
          r,
          a =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, n, i, o) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !o)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" === typeof t ? e !== t || !o : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              return (
                "a" === i ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n
              );
            },
          s =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, n, i) {
              if ("a" === n && !i)
                throw new TypeError(
                  "Private accessor was defined without a getter"
                );
              if ("function" === typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError(
                  "Cannot read private member from an object whose class did not declare it"
                );
              return "m" === n
                ? i
                : "a" === n
                ? i.call(e)
                : i
                ? i.value
                : t.get(e);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EmitterInstance = void 0);
        const l = n(4407),
          c = n(5745),
          u = n(6907),
          d = n(295),
          h = n(6923);
        (t.EmitterInstance = class {
          constructor(e, t, n, l, p) {
            var f, v, g, y, m, b, w, S;
            (this.emitters = t),
              (this.container = n),
              i.set(this, void 0),
              o.set(this, void 0),
              r.set(this, void 0),
              a(this, r, e, "f"),
              (this.currentDuration = 0),
              (this.currentEmitDelay = 0),
              (this.currentSpawnDelay = 0),
              (this.initialPosition = p),
              l instanceof u.Emitter
                ? (this.options = l)
                : ((this.options = new u.Emitter()), this.options.load(l)),
              (this.spawnDelay =
                (1e3 *
                  (null !== (f = this.options.life.delay) && void 0 !== f
                    ? f
                    : 0)) /
                this.container.retina.reduceFactor),
              (this.position =
                null !== (v = this.initialPosition) && void 0 !== v
                  ? v
                  : this.calcPosition()),
              (this.name = this.options.name),
              (this.shape =
                null === (g = s(this, r, "f").emitterShapeManager) ||
                void 0 === g
                  ? void 0
                  : g.getShape(this.options.shape)),
              (this.fill = this.options.fill),
              a(this, i, !this.options.life.wait, "f"),
              a(this, o, !1, "f");
            let _ = (0, c.deepExtend)({}, this.options.particles);
            (null !== _ && void 0 !== _) || (_ = {}),
              (null !== (y = _.move) && void 0 !== y) || (_.move = {}),
              (null !== (m = (S = _.move).direction) && void 0 !== m) ||
                (S.direction = this.options.direction),
              this.options.spawnColor &&
                (this.spawnColor = (0, h.colorToHsl)(this.options.spawnColor)),
              (this.paused = !this.options.autoPlay),
              (this.particlesOptions = _),
              (this.size =
                null !== (b = this.options.size) && void 0 !== b
                  ? b
                  : (() => {
                      const e = new d.EmitterSize();
                      return (
                        e.load({ height: 0, mode: "percent", width: 0 }), e
                      );
                    })()),
              (this.lifeCount =
                null !== (w = this.options.life.count) && void 0 !== w
                  ? w
                  : -1),
              (this.immortal = this.lifeCount <= 0),
              this.play();
          }
          externalPlay() {
            (this.paused = !1), this.play();
          }
          externalPause() {
            (this.paused = !0), this.pause();
          }
          play() {
            var e;
            if (
              !this.paused &&
              this.container.retina.reduceFactor &&
              (this.lifeCount > 0 ||
                this.immortal ||
                !this.options.life.count) &&
              (s(this, i, "f") ||
                this.currentSpawnDelay >=
                  (null !== (e = this.spawnDelay) && void 0 !== e ? e : 0))
            ) {
              if (void 0 === this.emitDelay) {
                const e = (0, l.getRangeValue)(this.options.rate.delay);
                this.emitDelay = (1e3 * e) / this.container.retina.reduceFactor;
              }
              (this.lifeCount > 0 || this.immortal) && this.prepareToDie();
            }
          }
          pause() {
            this.paused || delete this.emitDelay;
          }
          resize() {
            const e = this.initialPosition;
            this.position =
              e && (0, c.isPointInside)(e, this.container.canvas.size)
                ? e
                : this.calcPosition();
          }
          update(e) {
            var t, n, r;
            this.paused ||
              (s(this, i, "f") &&
                (a(this, i, !1, "f"),
                (this.currentSpawnDelay =
                  null !== (t = this.spawnDelay) && void 0 !== t ? t : 0),
                (this.currentEmitDelay =
                  null !== (n = this.emitDelay) && void 0 !== n ? n : 0)),
              s(this, o, "f") ||
                (a(this, o, !0, "f"),
                this.emitParticles(this.options.startCount)),
              void 0 !== this.duration &&
                ((this.currentDuration += e.value),
                this.currentDuration >= this.duration &&
                  (this.pause(),
                  void 0 !== this.spawnDelay && delete this.spawnDelay,
                  this.immortal || this.lifeCount--,
                  this.lifeCount > 0 || this.immortal
                    ? ((this.position = this.calcPosition()),
                      (this.spawnDelay =
                        (1e3 *
                          (null !== (r = this.options.life.delay) &&
                          void 0 !== r
                            ? r
                            : 0)) /
                        this.container.retina.reduceFactor))
                    : this.destroy(),
                  (this.currentDuration -= this.duration),
                  delete this.duration)),
              void 0 !== this.spawnDelay &&
                ((this.currentSpawnDelay += e.value),
                this.currentSpawnDelay >= this.spawnDelay &&
                  (this.play(),
                  (this.currentSpawnDelay -= this.currentSpawnDelay),
                  delete this.spawnDelay)),
              void 0 !== this.emitDelay &&
                ((this.currentEmitDelay += e.value),
                this.currentEmitDelay >= this.emitDelay &&
                  (this.emit(), (this.currentEmitDelay -= this.emitDelay))));
          }
          getPosition() {
            if (this.options.domId) {
              const e = this.container,
                t = document.getElementById(this.options.domId);
              if (t) {
                const n = t.getBoundingClientRect();
                return {
                  x: (n.x + n.width / 2) * e.retina.pixelRatio,
                  y: (n.y + n.height / 2) * e.retina.pixelRatio,
                };
              }
            }
            return this.position;
          }
          getSize() {
            const e = this.container;
            if (this.options.domId) {
              const t = document.getElementById(this.options.domId);
              if (t) {
                const n = t.getBoundingClientRect();
                return {
                  width: n.width * e.retina.pixelRatio,
                  height: n.height * e.retina.pixelRatio,
                };
              }
            }
            return {
              width:
                "percent" === this.size.mode
                  ? (e.canvas.size.width * this.size.width) / 100
                  : this.size.width,
              height:
                "percent" === this.size.mode
                  ? (e.canvas.size.height * this.size.height) / 100
                  : this.size.height,
            };
          }
          prepareToDie() {
            var e;
            if (this.paused) return;
            const t =
              null === (e = this.options.life) || void 0 === e
                ? void 0
                : e.duration;
            this.container.retina.reduceFactor &&
              (this.lifeCount > 0 || this.immortal) &&
              void 0 !== t &&
              t > 0 &&
              (this.duration = 1e3 * t);
          }
          destroy() {
            this.emitters.removeEmitter(this);
          }
          calcPosition() {
            return (0, l.calcPositionOrRandomFromSizeRanged)({
              size: this.container.canvas.size,
              position: this.options.position,
            });
          }
          emit() {
            if (this.paused) return;
            const e = (0, l.getRangeValue)(this.options.rate.quantity);
            this.emitParticles(e);
          }
          emitParticles(e) {
            var t, n, i;
            const o = this.getPosition(),
              r = this.getSize();
            for (let a = 0; a < e; a++) {
              const e = (0, c.deepExtend)({}, this.particlesOptions);
              if (this.spawnColor) {
                const n =
                  null === (t = this.options.spawnColor) || void 0 === t
                    ? void 0
                    : t.animation;
                n &&
                  ((this.spawnColor.h = this.setColorAnimation(
                    n.h,
                    this.spawnColor.h,
                    360
                  )),
                  (this.spawnColor.s = this.setColorAnimation(
                    n.s,
                    this.spawnColor.s,
                    100
                  )),
                  (this.spawnColor.l = this.setColorAnimation(
                    n.l,
                    this.spawnColor.l,
                    100
                  ))),
                  e.color
                    ? (e.color.value = this.spawnColor)
                    : (e.color = { value: this.spawnColor });
              }
              if (!o) return;
              const a =
                null !==
                  (i =
                    null === (n = this.shape) || void 0 === n
                      ? void 0
                      : n.randomPosition(o, r, this.fill)) && void 0 !== i
                  ? i
                  : o;
              this.container.particles.addParticle(a, e);
            }
          }
          setColorAnimation(e, t, n) {
            var i;
            const o = this.container;
            if (!e.enable) return t;
            const r = (0, l.randomInRange)(e.offset),
              a =
                (1e3 * (0, l.getRangeValue)(this.options.rate.delay)) /
                o.retina.reduceFactor;
            return (
              (t +
                ((0, l.getRangeValue)(
                  null !== (i = e.speed) && void 0 !== i ? i : 0
                ) *
                  o.fpsLimit) /
                  a +
                3.6 * r) %
              n
            );
          }
        }),
          (i = new WeakMap()),
          (o = new WeakMap()),
          (r = new WeakMap());
      },
      5062: function (e, t, n) {
        "use strict";
        var i,
          o =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, n, i, o) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !o)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" === typeof t ? e !== t || !o : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              return (
                "a" === i ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n
              );
            },
          r =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, n, i) {
              if ("a" === n && !i)
                throw new TypeError(
                  "Private accessor was defined without a getter"
                );
              if ("function" === typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError(
                  "Cannot read private member from an object whose class did not declare it"
                );
              return "m" === n
                ? i
                : "a" === n
                ? i.call(e)
                : i
                ? i.value
                : t.get(e);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Emitters = void 0);
        const a = n(5745),
          s = n(6907),
          l = n(8425);
        (t.Emitters = class {
          constructor(e, t) {
            (this.container = t),
              i.set(this, void 0),
              o(this, i, e, "f"),
              (this.array = []),
              (this.emitters = []),
              (this.interactivityEmitters = []);
            const n = t;
            (n.getEmitter = (e) =>
              void 0 === e || "number" === typeof e
                ? this.array[e || 0]
                : this.array.find((t) => t.name === e)),
              (n.addEmitter = (e, t) => this.addEmitter(e, t)),
              (n.removeEmitter = (e) => {
                const t = n.getEmitter(e);
                t && this.removeEmitter(t);
              }),
              (n.playEmitter = (e) => {
                const t = n.getEmitter(e);
                t && t.externalPlay();
              }),
              (n.pauseEmitter = (e) => {
                const t = n.getEmitter(e);
                t && t.externalPause();
              });
          }
          init(e) {
            var t, n;
            if (!e) return;
            e.emitters &&
              (e.emitters instanceof Array
                ? (this.emitters = e.emitters.map((e) => {
                    const t = new s.Emitter();
                    return t.load(e), t;
                  }))
                : (this.emitters instanceof Array &&
                    (this.emitters = new s.Emitter()),
                  this.emitters.load(e.emitters)));
            const i =
              null ===
                (n =
                  null === (t = e.interactivity) || void 0 === t
                    ? void 0
                    : t.modes) || void 0 === n
                ? void 0
                : n.emitters;
            if (
              (i &&
                (i instanceof Array
                  ? (this.interactivityEmitters = i.map((e) => {
                      const t = new s.Emitter();
                      return t.load(e), t;
                    }))
                  : (this.interactivityEmitters instanceof Array &&
                      (this.interactivityEmitters = new s.Emitter()),
                    this.interactivityEmitters.load(i))),
              this.emitters instanceof Array)
            )
              for (const o of this.emitters) this.addEmitter(o);
            else this.addEmitter(this.emitters);
          }
          play() {
            for (const e of this.array) e.play();
          }
          pause() {
            for (const e of this.array) e.pause();
          }
          stop() {
            this.array = [];
          }
          update(e) {
            for (const t of this.array) t.update(e);
          }
          handleClickMode(e) {
            const t = this.emitters,
              n = this.interactivityEmitters;
            if ("emitter" === e) {
              let e;
              n instanceof Array
                ? n.length > 0 && (e = (0, a.itemFromArray)(n))
                : (e = n);
              const i =
                  null !== e && void 0 !== e
                    ? e
                    : t instanceof Array
                    ? (0, a.itemFromArray)(t)
                    : t,
                o = this.container.interactivity.mouse.clickPosition;
              this.addEmitter((0, a.deepExtend)({}, i), o);
            }
          }
          resize() {
            for (const e of this.array) e.resize();
          }
          addEmitter(e, t) {
            const n = new s.Emitter();
            n.load(e);
            const o = new l.EmitterInstance(
              r(this, i, "f"),
              this,
              this.container,
              n,
              t
            );
            return this.array.push(o), o;
          }
          removeEmitter(e) {
            const t = this.array.indexOf(e);
            t >= 0 && this.array.splice(t, 1);
          }
        }),
          (i = new WeakMap());
      },
      1005: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      9950: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      8850: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      6907: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Emitter = void 0);
        const i = n(1272),
          o = n(2081),
          r = n(2150),
          a = n(295),
          s = n(5745),
          l = n(4407);
        t.Emitter = class {
          constructor() {
            (this.autoPlay = !0),
              (this.fill = !0),
              (this.life = new o.EmitterLife()),
              (this.rate = new r.EmitterRate()),
              (this.shape = "square"),
              (this.startCount = 0);
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.autoPlay && (this.autoPlay = e.autoPlay),
              void 0 !== e.size &&
                (void 0 === this.size && (this.size = new a.EmitterSize()),
                this.size.load(e.size)),
              void 0 !== e.direction && (this.direction = e.direction),
              (this.domId = e.domId),
              void 0 !== e.fill && (this.fill = e.fill),
              this.life.load(e.life),
              (this.name = e.name),
              void 0 !== e.particles &&
                (this.particles = (0, s.deepExtend)({}, e.particles)),
              this.rate.load(e.rate),
              void 0 !== e.shape && (this.shape = e.shape),
              void 0 !== e.position &&
                ((this.position = {}),
                void 0 !== e.position.x &&
                  (this.position.x = (0, l.setRangeValue)(e.position.x)),
                void 0 !== e.position.y &&
                  (this.position.y = (0, l.setRangeValue)(e.position.y))),
              void 0 !== e.spawnColor &&
                (void 0 === this.spawnColor &&
                  (this.spawnColor = new i.AnimatableColor()),
                this.spawnColor.load(e.spawnColor)),
              void 0 !== e.startCount && (this.startCount = e.startCount));
          }
        };
      },
      2081: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EmitterLife = void 0);
        t.EmitterLife = class {
          constructor() {
            this.wait = !1;
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.count && (this.count = e.count),
              void 0 !== e.delay && (this.delay = e.delay),
              void 0 !== e.duration && (this.duration = e.duration),
              void 0 !== e.wait && (this.wait = e.wait));
          }
        };
      },
      2150: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EmitterRate = void 0);
        const i = n(4407);
        t.EmitterRate = class {
          constructor() {
            (this.quantity = 1), (this.delay = 0.1);
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.quantity &&
                (this.quantity = (0, i.setRangeValue)(e.quantity)),
              void 0 !== e.delay &&
                (this.delay = (0, i.setRangeValue)(e.delay)));
          }
        };
      },
      295: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EmitterSize = void 0);
        t.EmitterSize = class {
          constructor() {
            (this.mode = "percent"), (this.height = 0), (this.width = 0);
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.mode && (this.mode = e.mode),
              void 0 !== e.height && (this.height = e.height),
              void 0 !== e.width && (this.width = e.width));
          }
        };
      },
      6275: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      4347: function (e, t) {
        "use strict";
        var n,
          i =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, n, i, o) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !o)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" === typeof t ? e !== t || !o : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              return (
                "a" === i ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n
              );
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ShapeManager = void 0);
        const o = new Map();
        (t.ShapeManager = class {
          constructor(e) {
            n.set(this, void 0), i(this, n, e, "f");
          }
          addShape(e, t) {
            this.getShape(e) || o.set(e, t);
          }
          getShape(e) {
            return o.get(e);
          }
          getSupportedShapes() {
            return o.keys();
          }
        }),
          (n = new WeakMap());
      },
      4127: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CircleShape = void 0);
        t.CircleShape = class {
          randomPosition(e, t, n) {
            const [i, o] = [t.width / 2, t.height / 2],
              r = ((e, t) => {
                const n = Math.random() / 4,
                  i = Math.atan((t / e) * Math.tan(2 * Math.PI * n)),
                  o = Math.random();
                return o < 0.25
                  ? i
                  : o < 0.5
                  ? Math.PI - i
                  : o < 0.75
                  ? Math.PI + i
                  : -i;
              })(i, o),
              a =
                ((u = r),
                ((l = i) * (c = o)) /
                  Math.sqrt((c * Math.cos(u)) ** 2 + (l * Math.sin(u)) ** 2)),
              s = n ? a * Math.sqrt(Math.random()) : a;
            var l, c, u;
            return { x: e.x + s * Math.cos(r), y: e.y + s * Math.sin(r) };
          }
        };
      },
      1302: function (e, t) {
        "use strict";
        function n(e, t) {
          return e + t * (Math.random() - 0.5);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SquareShape = void 0);
        t.SquareShape = class {
          randomPosition(e, t, i) {
            if (i) return { x: n(e.x, t.width), y: n(e.y, t.height) };
            {
              const n = t.width / 2,
                i = t.height / 2,
                o = Math.floor(4 * Math.random()),
                r = 2 * (Math.random() - 0.5);
              switch (o) {
                case 0:
                  return { x: e.x + r * n, y: e.y - i };
                case 1:
                  return { x: e.x - n, y: e.y + r * i };
                case 2:
                  return { x: e.x + r * n, y: e.y + i };
                default:
                  return { x: e.x + n, y: e.y + r * i };
              }
            }
          }
        };
      },
      5610: function (e, t, n) {
        "use strict";
        var i,
          o =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var o = Object.getOwnPropertyDescriptor(t, n);
                  (o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, o);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  o(t, e, n);
            },
          a =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, n, i, o) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !o)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" === typeof t ? e !== t || !o : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              return (
                "a" === i ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n
              );
            },
          s =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, n, i) {
              if ("a" === n && !i)
                throw new TypeError(
                  "Private accessor was defined without a getter"
                );
              if ("function" === typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError(
                  "Cannot read private member from an object whose class did not declare it"
                );
              return "m" === n
                ? i
                : "a" === n
                ? i.call(e)
                : i
                ? i.value
                : t.get(e);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadEmittersPlugin = void 0);
        const l = n(4127),
          c = n(6907),
          u = n(5062),
          d = n(4347),
          h = n(1302),
          p = n(5745);
        class f {
          constructor(e) {
            i.set(this, void 0), a(this, i, e, "f"), (this.id = "emitters");
          }
          getPlugin(e) {
            return new u.Emitters(s(this, i, "f"), e);
          }
          needsPlugin(e) {
            var t, n, i;
            if (void 0 === e) return !1;
            const o = e.emitters;
            return (
              (o instanceof Array && !!o.length) ||
              void 0 !== o ||
              (!!(null ===
                (i =
                  null ===
                    (n =
                      null === (t = e.interactivity) || void 0 === t
                        ? void 0
                        : t.events) || void 0 === n
                    ? void 0
                    : n.onClick) || void 0 === i
                ? void 0
                : i.mode) &&
                (0, p.isInArray)(
                  "emitter",
                  e.interactivity.events.onClick.mode
                ))
            );
          }
          loadOptions(e, t) {
            var n, i;
            if (!this.needsPlugin(e) && !this.needsPlugin(t)) return;
            const o = e;
            if (null === t || void 0 === t ? void 0 : t.emitters)
              if (
                (null === t || void 0 === t ? void 0 : t.emitters) instanceof
                Array
              )
                o.emitters =
                  null === t || void 0 === t
                    ? void 0
                    : t.emitters.map((e) => {
                        const t = new c.Emitter();
                        return t.load(e), t;
                      });
              else {
                let e = o.emitters;
                void 0 === (null === e || void 0 === e ? void 0 : e.load) &&
                  (o.emitters = e = new c.Emitter()),
                  e.load(null === t || void 0 === t ? void 0 : t.emitters);
              }
            const r =
              null ===
                (i =
                  null ===
                    (n =
                      null === t || void 0 === t ? void 0 : t.interactivity) ||
                  void 0 === n
                    ? void 0
                    : n.modes) || void 0 === i
                ? void 0
                : i.emitters;
            if (r)
              if (r instanceof Array)
                o.interactivity.modes.emitters = r.map((e) => {
                  const t = new c.Emitter();
                  return t.load(e), t;
                });
              else {
                let e = o.interactivity.modes.emitters;
                void 0 === (null === e || void 0 === e ? void 0 : e.load) &&
                  (o.interactivity.modes.emitters = e = new c.Emitter()),
                  e.load(r);
              }
          }
        }
        (i = new WeakMap()),
          (t.loadEmittersPlugin = async function (e) {
            e.emitterShapeManager ||
              (e.emitterShapeManager = new d.ShapeManager(e)),
              e.addEmitterShape ||
                (e.addEmitterShape = (t, n) => {
                  var i;
                  null === (i = e.emitterShapeManager) ||
                    void 0 === i ||
                    i.addShape(t, n);
                });
            const t = new f(e);
            await e.addPlugin(t),
              e.addEmitterShape("circle", new l.CircleShape()),
              e.addEmitterShape("square", new h.SquareShape());
          }),
          r(n(1005), t),
          r(n(9950), t),
          r(n(8850), t),
          r(n(6275), t);
      },
      8242: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      3193: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      7406: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      6297: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PolygonMask = void 0);
        const i = n(7319),
          o = n(6935),
          r = n(1193),
          a = n(1349),
          s = n(5745);
        t.PolygonMask = class {
          constructor() {
            (this.draw = new i.PolygonMaskDraw()),
              (this.enable = !1),
              (this.inline = new o.PolygonMaskInline()),
              (this.move = new a.PolygonMaskMove()),
              (this.scale = 1),
              (this.type = "none");
          }
          get inlineArrangement() {
            return this.inline.arrangement;
          }
          set inlineArrangement(e) {
            this.inline.arrangement = e;
          }
          load(e) {
            var t;
            if (!e) return;
            this.draw.load(e.draw);
            const n =
              null !== (t = e.inline) && void 0 !== t
                ? t
                : { arrangement: e.inlineArrangement };
            void 0 !== n && this.inline.load(n),
              this.move.load(e.move),
              void 0 !== e.scale && (this.scale = e.scale),
              void 0 !== e.type && (this.type = e.type),
              void 0 !== e.enable
                ? (this.enable = e.enable)
                : (this.enable = "none" !== this.type),
              void 0 !== e.url && (this.url = e.url),
              void 0 !== e.data &&
                ("string" === typeof e.data
                  ? (this.data = e.data)
                  : ((this.data = new r.PolygonMaskLocalSvg()),
                    this.data.load(e.data))),
              void 0 !== e.position &&
                (this.position = (0, s.deepExtend)({}, e.position));
          }
        };
      },
      7319: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PolygonMaskDraw = void 0);
        const i = n(1834),
          o = n(301);
        t.PolygonMaskDraw = class {
          constructor() {
            (this.enable = !1), (this.stroke = new o.PolygonMaskDrawStroke());
          }
          get lineWidth() {
            return this.stroke.width;
          }
          set lineWidth(e) {
            this.stroke.width = e;
          }
          get lineColor() {
            return this.stroke.color;
          }
          set lineColor(e) {
            this.stroke.color = i.OptionsColor.create(this.stroke.color, e);
          }
          load(e) {
            var t;
            if (!e) return;
            void 0 !== e.enable && (this.enable = e.enable);
            const n =
              null !== (t = e.stroke) && void 0 !== t
                ? t
                : { color: e.lineColor, width: e.lineWidth };
            this.stroke.load(n);
          }
        };
      },
      301: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PolygonMaskDrawStroke = void 0);
        const i = n(1834),
          o = n(6923);
        t.PolygonMaskDrawStroke = class {
          constructor() {
            (this.color = new i.OptionsColor()),
              (this.width = 0.5),
              (this.opacity = 1);
          }
          load(e) {
            var t;
            e &&
              ((this.color = i.OptionsColor.create(this.color, e.color)),
              "string" === typeof this.color.value &&
                (this.opacity =
                  null !== (t = (0, o.stringToAlpha)(this.color.value)) &&
                  void 0 !== t
                    ? t
                    : this.opacity),
              void 0 !== e.opacity && (this.opacity = e.opacity),
              void 0 !== e.width && (this.width = e.width));
          }
        };
      },
      6935: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PolygonMaskInline = void 0);
        t.PolygonMaskInline = class {
          constructor() {
            this.arrangement = "one-per-point";
          }
          load(e) {
            e && void 0 !== e.arrangement && (this.arrangement = e.arrangement);
          }
        };
      },
      1193: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PolygonMaskLocalSvg = void 0);
        t.PolygonMaskLocalSvg = class {
          constructor() {
            (this.path = []), (this.size = { height: 0, width: 0 });
          }
          load(e) {
            e &&
              (void 0 !== e.path && (this.path = e.path),
              void 0 !== e.size &&
                (void 0 !== e.size.width && (this.size.width = e.size.width),
                void 0 !== e.size.height &&
                  (this.size.height = e.size.height)));
          }
        };
      },
      1349: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PolygonMaskMove = void 0);
        t.PolygonMaskMove = class {
          constructor() {
            (this.radius = 10), (this.type = "path");
          }
          load(e) {
            e &&
              (void 0 !== e.radius && (this.radius = e.radius),
              void 0 !== e.type && (this.type = e.type));
          }
        };
      },
      3111: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      6194: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PolygonMaskInstance = void 0);
        const i = n(263),
          o = n(5745),
          r = n(4407),
          a = n(9425),
          s = n(6297);
        t.PolygonMaskInstance = class {
          constructor(e) {
            (this.container = e),
              (this.dimension = { height: 0, width: 0 }),
              (this.path2DSupported = !!window.Path2D),
              (this.options = new s.PolygonMask()),
              (this.polygonMaskMoveRadius =
                this.options.move.radius * e.retina.pixelRatio);
          }
          async initAsync(e) {
            this.options.load(null === e || void 0 === e ? void 0 : e.polygon);
            const t = this.options;
            (this.polygonMaskMoveRadius =
              t.move.radius * this.container.retina.pixelRatio),
              t.enable && (await this.initRawData());
          }
          resize() {
            const e = this.container,
              t = this.options;
            t.enable &&
              "none" !== t.type &&
              (this.redrawTimeout && clearTimeout(this.redrawTimeout),
              (this.redrawTimeout = window.setTimeout(async () => {
                await this.initRawData(!0), await e.particles.redraw();
              }, 250)));
          }
          stop() {
            delete this.raw, delete this.paths;
          }
          particlesInitialization() {
            const e = this.options;
            return (
              !(
                !e.enable ||
                "inline" !== e.type ||
                ("one-per-point" !== e.inline.arrangement &&
                  "per-point" !== e.inline.arrangement)
              ) && (this.drawPoints(), !0)
            );
          }
          particlePosition(e) {
            var t, n;
            if (
              this.options.enable &&
              (null !==
                (n =
                  null === (t = this.raw) || void 0 === t
                    ? void 0
                    : t.length) && void 0 !== n
                ? n
                : 0) > 0
            )
              return (0, o.deepExtend)({}, e || this.randomPoint());
          }
          particleBounce(e, t, n) {
            return this.polygonBounce(e, t, n);
          }
          clickPositionValid(e) {
            const t = this.options;
            return (
              t.enable &&
              "none" !== t.type &&
              "inline" !== t.type &&
              this.checkInsidePolygon(e)
            );
          }
          draw(e) {
            var t;
            if (
              !(null === (t = this.paths) || void 0 === t ? void 0 : t.length)
            )
              return;
            const n = this.options,
              o = n.draw;
            if (!n.enable || !o.enable) return;
            const r = this.raw;
            for (const a of this.paths) {
              const t = a.path2d,
                n = this.path2DSupported;
              e &&
                (n && t && this.offset
                  ? (0, i.drawPolygonMaskPath)(e, t, o.stroke, this.offset)
                  : r && (0, i.drawPolygonMask)(e, r, o.stroke));
            }
          }
          polygonBounce(e, t, n) {
            const o = this.options;
            if (!this.raw || !o.enable || "top" !== n) return !1;
            if ("inside" === o.type || "outside" === o.type) {
              let t, n, o;
              const a = e.getPosition(),
                s = e.getRadius();
              for (
                let l = 0, c = this.raw.length - 1;
                l < this.raw.length;
                c = l++
              ) {
                const u = this.raw[l],
                  d = this.raw[c];
                t = (0, i.calcClosestPtOnSegment)(u, d, a);
                const h = (0, r.getDistances)(a, t);
                if ((([n, o] = [h.dx, h.dy]), h.distance < s))
                  return (0, i.segmentBounce)(u, d, e.velocity), !0;
              }
              if (
                t &&
                void 0 !== n &&
                void 0 !== o &&
                !this.checkInsidePolygon(a)
              ) {
                const n = { x: 1, y: 1 };
                return (
                  e.position.x >= t.x && (n.x = -1),
                  e.position.y >= t.y && (n.y = -1),
                  (e.position.x = t.x + 2 * s * n.x),
                  (e.position.y = t.y + 2 * s * n.y),
                  e.velocity.mult(-1),
                  !0
                );
              }
            } else if ("inline" === o.type && e.initialPosition) {
              if (
                (0, r.getDistance)(e.initialPosition, e.getPosition()) >
                this.polygonMaskMoveRadius
              )
                return (
                  (e.velocity.x = e.velocity.y / 2 - e.velocity.x),
                  (e.velocity.y = e.velocity.x / 2 - e.velocity.y),
                  !0
                );
            }
            return !1;
          }
          checkInsidePolygon(e) {
            var t, n;
            const i = this.container,
              o = this.options;
            if (!o.enable || "none" === o.type || "inline" === o.type)
              return !0;
            if (!this.raw) throw new Error(a.Constants.noPolygonFound);
            const r = i.canvas.size,
              s =
                null !== (t = null === e || void 0 === e ? void 0 : e.x) &&
                void 0 !== t
                  ? t
                  : Math.random() * r.width,
              l =
                null !== (n = null === e || void 0 === e ? void 0 : e.y) &&
                void 0 !== n
                  ? n
                  : Math.random() * r.height;
            let c = !1;
            for (
              let a = 0, u = this.raw.length - 1;
              a < this.raw.length;
              u = a++
            ) {
              const e = this.raw[a],
                t = this.raw[u];
              e.y > l !== t.y > l &&
                s < ((t.x - e.x) * (l - e.y)) / (t.y - e.y) + e.x &&
                (c = !c);
            }
            return "inside" === o.type ? c : "outside" === o.type && !c;
          }
          parseSvgPath(e, t) {
            var n, o, r;
            const a = null !== t && void 0 !== t && t;
            if (void 0 !== this.paths && !a) return this.raw;
            const s = this.container,
              l = this.options,
              c = new DOMParser().parseFromString(e, "image/svg+xml"),
              u = c.getElementsByTagName("svg")[0];
            let d = u.getElementsByTagName("path");
            d.length || (d = c.getElementsByTagName("path")), (this.paths = []);
            for (let i = 0; i < d.length; i++) {
              const e = d.item(i);
              e && this.paths.push({ element: e, length: e.getTotalLength() });
            }
            const h = s.retina.pixelRatio,
              p = l.scale / h;
            (this.dimension.width =
              parseFloat(
                null !== (n = u.getAttribute("width")) && void 0 !== n ? n : "0"
              ) * p),
              (this.dimension.height =
                parseFloat(
                  null !== (o = u.getAttribute("height")) && void 0 !== o
                    ? o
                    : "0"
                ) * p);
            const f =
              null !== (r = l.position) && void 0 !== r ? r : { x: 50, y: 50 };
            return (
              (this.offset = {
                x:
                  (s.canvas.size.width * f.x) / (100 * h) -
                  this.dimension.width / 2,
                y:
                  (s.canvas.size.height * f.y) / (100 * h) -
                  this.dimension.height / 2,
              }),
              (0, i.parsePaths)(this.paths, p, this.offset)
            );
          }
          async downloadSvgPath(e, t) {
            const n = this.options,
              i = e || n.url,
              o = null !== t && void 0 !== t && t;
            if (!i || (void 0 !== this.paths && !o)) return this.raw;
            const r = await fetch(i);
            if (!r.ok)
              throw new Error(
                "tsParticles Error - Error occurred during polygon mask download"
              );
            return this.parseSvgPath(await r.text(), t);
          }
          drawPoints() {
            if (this.raw)
              for (const e of this.raw)
                this.container.particles.addParticle({ x: e.x, y: e.y });
          }
          randomPoint() {
            const e = this.container,
              t = this.options;
            let n;
            if ("inline" === t.type)
              switch (t.inline.arrangement) {
                case "random-point":
                  n = this.getRandomPoint();
                  break;
                case "random-length":
                  n = this.getRandomPointByLength();
                  break;
                case "equidistant":
                  n = this.getEquidistantPointByIndex(e.particles.count);
                  break;
                default:
                  n = this.getPointByIndex(e.particles.count);
              }
            else
              n = {
                x: Math.random() * e.canvas.size.width,
                y: Math.random() * e.canvas.size.height,
              };
            return this.checkInsidePolygon(n) ? n : this.randomPoint();
          }
          getRandomPoint() {
            if (!this.raw || !this.raw.length)
              throw new Error(a.Constants.noPolygonDataLoaded);
            const e = (0, o.itemFromArray)(this.raw);
            return { x: e.x, y: e.y };
          }
          getRandomPointByLength() {
            var e, t, n;
            const i = this.options;
            if (
              !this.raw ||
              !this.raw.length ||
              !(null === (e = this.paths) || void 0 === e ? void 0 : e.length)
            )
              throw new Error(a.Constants.noPolygonDataLoaded);
            const r = (0, o.itemFromArray)(this.paths),
              s = Math.floor(Math.random() * r.length) + 1,
              l = r.element.getPointAtLength(s);
            return {
              x:
                l.x * i.scale +
                ((null === (t = this.offset) || void 0 === t ? void 0 : t.x) ||
                  0),
              y:
                l.y * i.scale +
                ((null === (n = this.offset) || void 0 === n ? void 0 : n.y) ||
                  0),
            };
          }
          getEquidistantPointByIndex(e) {
            var t, n, i, o, r, s, l;
            const c = this.container.actualOptions,
              u = this.options;
            if (
              !this.raw ||
              !this.raw.length ||
              !(null === (t = this.paths) || void 0 === t ? void 0 : t.length)
            )
              throw new Error(a.Constants.noPolygonDataLoaded);
            let d,
              h = 0;
            const p =
              this.paths.reduce((e, t) => e + t.length, 0) /
              c.particles.number.value;
            for (const a of this.paths) {
              const t = p * e - h;
              if (t <= a.length) {
                d = a.element.getPointAtLength(t);
                break;
              }
              h += a.length;
            }
            return {
              x:
                (null !== (n = null === d || void 0 === d ? void 0 : d.x) &&
                void 0 !== n
                  ? n
                  : 0) *
                  u.scale +
                (null !==
                  (o =
                    null === (i = this.offset) || void 0 === i
                      ? void 0
                      : i.x) && void 0 !== o
                  ? o
                  : 0),
              y:
                (null !== (r = null === d || void 0 === d ? void 0 : d.y) &&
                void 0 !== r
                  ? r
                  : 0) *
                  u.scale +
                (null !==
                  (l =
                    null === (s = this.offset) || void 0 === s
                      ? void 0
                      : s.y) && void 0 !== l
                  ? l
                  : 0),
            };
          }
          getPointByIndex(e) {
            if (!this.raw || !this.raw.length)
              throw new Error(a.Constants.noPolygonDataLoaded);
            const t = this.raw[e % this.raw.length];
            return { x: t.x, y: t.y };
          }
          createPath2D() {
            var e, t;
            const n = this.options;
            if (
              this.path2DSupported &&
              (null === (e = this.paths) || void 0 === e ? void 0 : e.length)
            )
              for (const i of this.paths) {
                const e =
                  null === (t = i.element) || void 0 === t
                    ? void 0
                    : t.getAttribute("d");
                if (e) {
                  const t = new Path2D(e),
                    o = document
                      .createElementNS("http://www.w3.org/2000/svg", "svg")
                      .createSVGMatrix(),
                    r = new Path2D(),
                    a = o.scale(n.scale);
                  r.addPath
                    ? (r.addPath(t, a), (i.path2d = r))
                    : delete i.path2d;
                } else delete i.path2d;
                !i.path2d &&
                  this.raw &&
                  ((i.path2d = new Path2D()),
                  i.path2d.moveTo(this.raw[0].x, this.raw[0].y),
                  this.raw.forEach((e, t) => {
                    var n;
                    t > 0 &&
                      (null === (n = i.path2d) ||
                        void 0 === n ||
                        n.lineTo(e.x, e.y));
                  }),
                  i.path2d.closePath());
              }
          }
          async initRawData(e) {
            const t = this.options;
            if (t.url) this.raw = await this.downloadSvgPath(t.url, e);
            else if (t.data) {
              const n = t.data;
              let i;
              if ("string" !== typeof n) {
                const e =
                  n.path instanceof Array
                    ? n.path.map((e) => `<path d="${e}" />`).join("")
                    : `<path d="${n.path}" />`;
                i = `<svg ${'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'} width="${
                  n.size.width
                }" height="${n.size.height}">${e}</svg>`;
              } else i = n;
              this.raw = this.parseSvgPath(i, e);
            }
            this.createPath2D();
          }
        };
      },
      263: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.segmentBounce =
            t.calcClosestPtOnSegment =
            t.parsePaths =
            t.drawPolygonMaskPath =
            t.drawPolygonMask =
              void 0);
        const i = n(6923),
          o = n(3542),
          r = n(4407);
        (t.drawPolygonMask = function (e, t, n) {
          const o = (0, i.colorToRgb)(n.color);
          if (o) {
            e.beginPath(), e.moveTo(t[0].x, t[0].y);
            for (const n of t) e.lineTo(n.x, n.y);
            e.closePath(),
              (e.strokeStyle = (0, i.getStyleFromRgb)(o)),
              (e.lineWidth = n.width),
              e.stroke();
          }
        }),
          (t.drawPolygonMaskPath = function (e, t, n, o) {
            e.translate(o.x, o.y);
            const r = (0, i.colorToRgb)(n.color);
            r &&
              ((e.strokeStyle = (0, i.getStyleFromRgb)(r, n.opacity)),
              (e.lineWidth = n.width),
              e.stroke(t));
          }),
          (t.parsePaths = function (e, t, n) {
            var i;
            const o = [];
            for (const r of e) {
              const e = r.element.pathSegList,
                a =
                  null !==
                    (i =
                      null === e || void 0 === e ? void 0 : e.numberOfItems) &&
                  void 0 !== i
                    ? i
                    : 0,
                s = { x: 0, y: 0 };
              for (let i = 0; i < a; i++) {
                const r = null === e || void 0 === e ? void 0 : e.getItem(i),
                  a = window.SVGPathSeg;
                switch (null === r || void 0 === r ? void 0 : r.pathSegType) {
                  case a.PATHSEG_MOVETO_ABS:
                  case a.PATHSEG_LINETO_ABS:
                  case a.PATHSEG_CURVETO_CUBIC_ABS:
                  case a.PATHSEG_CURVETO_QUADRATIC_ABS:
                  case a.PATHSEG_ARC_ABS:
                  case a.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                  case a.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: {
                    const e = r;
                    (s.x = e.x), (s.y = e.y);
                    break;
                  }
                  case a.PATHSEG_LINETO_HORIZONTAL_ABS:
                    s.x = r.x;
                    break;
                  case a.PATHSEG_LINETO_VERTICAL_ABS:
                    s.y = r.y;
                    break;
                  case a.PATHSEG_LINETO_REL:
                  case a.PATHSEG_MOVETO_REL:
                  case a.PATHSEG_CURVETO_CUBIC_REL:
                  case a.PATHSEG_CURVETO_QUADRATIC_REL:
                  case a.PATHSEG_ARC_REL:
                  case a.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                  case a.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: {
                    const e = r;
                    (s.x += e.x), (s.y += e.y);
                    break;
                  }
                  case a.PATHSEG_LINETO_HORIZONTAL_REL:
                    s.x += r.x;
                    break;
                  case a.PATHSEG_LINETO_VERTICAL_REL:
                    s.y += r.y;
                    break;
                  case a.PATHSEG_UNKNOWN:
                  case a.PATHSEG_CLOSEPATH:
                    continue;
                }
                o.push({ x: s.x * t + n.x, y: s.y * t + n.y });
              }
            }
            return o;
          }),
          (t.calcClosestPtOnSegment = function (e, t, n) {
            const { dx: i, dy: o } = (0, r.getDistances)(n, e),
              { dx: a, dy: s } = (0, r.getDistances)(t, e),
              l = (i * a + o * s) / (a ** 2 + s ** 2),
              c = {
                x: e.x + a * l,
                y: e.x + s * l,
                isOnSegment: l >= 0 && l <= 1,
              };
            return (
              l < 0
                ? ((c.x = e.x), (c.y = e.y))
                : l > 1 && ((c.x = t.x), (c.y = t.y)),
              c
            );
          }),
          (t.segmentBounce = function (e, t, n) {
            const { dx: i, dy: a } = (0, r.getDistances)(e, t),
              s = Math.atan2(a, i),
              l = o.Vector.create(Math.sin(s), -Math.cos(s)),
              c = 2 * (n.x * l.x + n.y * l.y);
            l.multTo(c), n.subFrom(l);
          });
      },
      8264: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var o = Object.getOwnPropertyDescriptor(t, n);
                  (o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, o);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e.default = t;
                }),
          r =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  "default" !== n &&
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    i(t, e, n);
              return o(t, e), t;
            },
          a =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadPolygonMaskPlugin = void 0);
        const s = n(6297),
          l = n(6194),
          c = n(5745);
        class u {
          constructor() {
            this.id = "polygonMask";
          }
          getPlugin(e) {
            return new l.PolygonMaskInstance(e);
          }
          needsPlugin(e) {
            var t, n, i;
            return null !==
              (n =
                null ===
                  (t = null === e || void 0 === e ? void 0 : e.polygon) ||
                void 0 === t
                  ? void 0
                  : t.enable) && void 0 !== n
              ? n
              : void 0 !==
                  (null ===
                    (i = null === e || void 0 === e ? void 0 : e.polygon) ||
                  void 0 === i
                    ? void 0
                    : i.type) && "none" !== e.polygon.type;
          }
          loadOptions(e, t) {
            if (!this.needsPlugin(t)) return;
            const n = e;
            let i = n.polygon;
            void 0 === (null === i || void 0 === i ? void 0 : i.load) &&
              (n.polygon = i = new s.PolygonMask()),
              i.load(null === t || void 0 === t ? void 0 : t.polygon);
          }
        }
        (t.loadPolygonMaskPlugin = async function (e) {
          (0, c.isSsr)() ||
            "SVGPathSeg" in window ||
            (await Promise.resolve().then(() => r(n(5480))));
          const t = new u();
          await e.addPlugin(t);
        }),
          a(n(8242), t),
          a(n(3193), t),
          a(n(7406), t),
          a(n(3111), t);
      },
      5480: function () {
        "use strict";
        !(function () {
          try {
            if ("undefined" === typeof window) return;
            "SVGPathSeg" in window ||
              ((window.SVGPathSeg = function (e, t, n) {
                (this.pathSegType = e),
                  (this.pathSegTypeAsLetter = t),
                  (this._owningPathSegList = n);
              }),
              (window.SVGPathSeg.prototype.classname = "SVGPathSeg"),
              (window.SVGPathSeg.PATHSEG_UNKNOWN = 0),
              (window.SVGPathSeg.PATHSEG_CLOSEPATH = 1),
              (window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2),
              (window.SVGPathSeg.PATHSEG_MOVETO_REL = 3),
              (window.SVGPathSeg.PATHSEG_LINETO_ABS = 4),
              (window.SVGPathSeg.PATHSEG_LINETO_REL = 5),
              (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6),
              (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7),
              (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8),
              (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9),
              (window.SVGPathSeg.PATHSEG_ARC_ABS = 10),
              (window.SVGPathSeg.PATHSEG_ARC_REL = 11),
              (window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12),
              (window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13),
              (window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14),
              (window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15),
              (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16),
              (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17),
              (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18),
              (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19),
              (window.SVGPathSeg.prototype._segmentChanged = function () {
                this._owningPathSegList &&
                  this._owningPathSegList.segmentChanged(this);
              }),
              (window.SVGPathSegClosePath = function (e) {
                window.SVGPathSeg.call(
                  this,
                  window.SVGPathSeg.PATHSEG_CLOSEPATH,
                  "z",
                  e
                );
              }),
              (window.SVGPathSegClosePath.prototype = Object.create(
                window.SVGPathSeg.prototype
              )),
              (window.SVGPathSegClosePath.prototype.toString = function () {
                return "[object SVGPathSegClosePath]";
              }),
              (window.SVGPathSegClosePath.prototype._asPathString =
                function () {
                  return this.pathSegTypeAsLetter;
                }),
              (window.SVGPathSegClosePath.prototype.clone = function () {
                return new window.SVGPathSegClosePath(void 0);
              }),
              (window.SVGPathSegMovetoAbs = function (e, t, n) {
                window.SVGPathSeg.call(
                  this,
                  window.SVGPathSeg.PATHSEG_MOVETO_ABS,
                  "M",
                  e
                ),
                  (this._x = t),
                  (this._y = n);
              }),
              (window.SVGPathSegMovetoAbs.prototype = Object.create(
                window.SVGPathSeg.prototype
              )),
              (window.SVGPathSegMovetoAbs.prototype.toString = function () {
                return "[object SVGPathSegMovetoAbs]";
              }),
              (window.SVGPathSegMovetoAbs.prototype._asPathString =
                function () {
                  return (
                    this.pathSegTypeAsLetter + " " + this._x + " " + this._y
                  );
                }),
              (window.SVGPathSegMovetoAbs.prototype.clone = function () {
                return new window.SVGPathSegMovetoAbs(void 0, this._x, this._y);
              }),
              Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", {
                get: function () {
                  return this._x;
                },
                set: function (e) {
                  (this._x = e), this._segmentChanged();
                },
                enumerable: !0,
              }),
              Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", {
                get: function () {
                  return this._y;
                },
                set: function (e) {
                  (this._y = e), this._segmentChanged();
                },
                enumerable: !0,
              }),
              (window.SVGPathSegMovetoRel = function (e, t, n) {
                window.SVGPathSeg.call(
                  this,
                  window.SVGPathSeg.PATHSEG_MOVETO_REL,
                  "m",
                  e
                ),
                  (this._x = t),
                  (this._y = n);
              }),
              (window.SVGPathSegMovetoRel.prototype = Object.create(
                window.SVGPathSeg.prototype
              )),
              (window.SVGPathSegMovetoRel.prototype.toString = function () {
                return "[object SVGPathSegMovetoRel]";
              }),
              (window.SVGPathSegMovetoRel.prototype._asPathString =
                function () {
                  return (
                    this.pathSegTypeAsLetter + " " + this._x + " " + this._y
                  );
                }),
              (window.SVGPathSegMovetoRel.prototype.clone = function () {
                return new window.SVGPathSegMovetoRel(void 0, this._x, this._y);
              }),
              Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", {
                get: function () {
                  return this._x;
                },
                set: function (e) {
                  (this._x = e), this._segmentChanged();
                },
                enumerable: !0,
              }),
              Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", {
                get: function () {
                  return this._y;
                },
                set: function (e) {
                  (this._y = e), this._segmentChanged();
                },
                enumerable: !0,
              }),
              (window.SVGPathSegLinetoAbs = function (e, t, n) {
                window.SVGPathSeg.call(
                  this,
                  window.SVGPathSeg.PATHSEG_LINETO_ABS,
                  "L",
                  e
                ),
                  (this._x = t),
                  (this._y = n);
              }),
              (window.SVGPathSegLinetoAbs.prototype = Object.create(
                window.SVGPathSeg.prototype
              )),
              (window.SVGPathSegLinetoAbs.prototype.toString = function () {
                return "[object SVGPathSegLinetoAbs]";
              }),
              (window.SVGPathSegLinetoAbs.prototype._asPathString =
                function () {
                  return (
                    this.pathSegTypeAsLetter + " " + this._x + " " + this._y
                  );
                }),
              (window.SVGPathSegLinetoAbs.prototype.clone = function () {
                return new window.SVGPathSegLinetoAbs(void 0, this._x, this._y);
              }),
              Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", {
                get: function () {
                  return this._x;
                },
                set: function (e) {
                  (this._x = e), this._segmentChanged();
                },
                enumerable: !0,
              }),
              Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", {
                get: function () {
                  return this._y;
                },
                set: function (e) {
                  (this._y = e), this._segmentChanged();
                },
                enumerable: !0,
              }),
              (window.SVGPathSegLinetoRel = function (e, t, n) {
                window.SVGPathSeg.call(
                  this,
                  window.SVGPathSeg.PATHSEG_LINETO_REL,
                  "l",
                  e
                ),
                  (this._x = t),
                  (this._y = n);
              }),
              (window.SVGPathSegLinetoRel.prototype = Object.create(
                window.SVGPathSeg.prototype
              )),
              (window.SVGPathSegLinetoRel.prototype.toString = function () {
                return "[object SVGPathSegLinetoRel]";
              }),
              (window.SVGPathSegLinetoRel.prototype._asPathString =
                function () {
                  return (
                    this.pathSegTypeAsLetter + " " + this._x + " " + this._y
                  );
                }),
              (window.SVGPathSegLinetoRel.prototype.clone = function () {
                return new window.SVGPathSegLinetoRel(void 0, this._x, this._y);
              }),
              Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", {
                get: function () {
                  return this._x;
                },
                set: function (e) {
                  (this._x = e), this._segmentChanged();
                },
                enumerable: !0,
              }),
              Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", {
                get: function () {
                  return this._y;
                },
                set: function (e) {
                  (this._y = e), this._segmentChanged();
                },
                enumerable: !0,
              }),
              (window.SVGPathSegCurvetoCubicAbs = function (
                e,
                t,
                n,
                i,
                o,
                r,
                a
              ) {
                window.SVGPathSeg.call(
                  this,
                  window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS,
                  "C",
                  e
                ),
                  (this._x = t),
                  (this._y = n),
                  (this._x1 = i),
                  (this._y1 = o),
                  (this._x2 = r),
                  (this._y2 = a);
              }),
              (window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(
                window.SVGPathSeg.prototype
              )),
              (window.SVGPathSegCurvetoCubicAbs.prototype.toString =
                function () {
                  return "[object SVGPathSegCurvetoCubicAbs]";
                }),
              (window.SVGPathSegCurvetoCubicAbs.prototype._asPathString =
                function () {
                  return (
                    this.pathSegTypeAsLetter +
                    " " +
                    this._x1 +
                    " " +
                    this._y1 +
                    " " +
                    this._x2 +
                    " " +
                    this._y2 +
                    " " +
                    this._x +
                    " " +
                    this._y
                  );
                }),
              (window.SVGPathSegCurvetoCubicAbs.prototype.clone = function () {
                return new window.SVGPathSegCurvetoCubicAbs(
                  void 0,
                  this._x,
                  this._y,
                  this._x1,
                  this._y1,
                  this._x2,
                  this._y2
                );
              }),
              Object.defineProperty(
                window.SVGPathSegCurvetoCubicAbs.prototype,
                "x",
                {
                  get: function () {
                    return this._x;
                  },
                  set: function (e) {
                    (this._x = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoCubicAbs.prototype,
                "y",
                {
                  get: function () {
                    return this._y;
                  },
                  set: function (e) {
                    (this._y = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoCubicAbs.prototype,
                "x1",
                {
                  get: function () {
                    return this._x1;
                  },
                  set: function (e) {
                    (this._x1 = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoCubicAbs.prototype,
                "y1",
                {
                  get: function () {
                    return this._y1;
                  },
                  set: function (e) {
                    (this._y1 = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoCubicAbs.prototype,
                "x2",
                {
                  get: function () {
                    return this._x2;
                  },
                  set: function (e) {
                    (this._x2 = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoCubicAbs.prototype,
                "y2",
                {
                  get: function () {
                    return this._y2;
                  },
                  set: function (e) {
                    (this._y2 = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              (window.SVGPathSegCurvetoCubicRel = function (
                e,
                t,
                n,
                i,
                o,
                r,
                a
              ) {
                window.SVGPathSeg.call(
                  this,
                  window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL,
                  "c",
                  e
                ),
                  (this._x = t),
                  (this._y = n),
                  (this._x1 = i),
                  (this._y1 = o),
                  (this._x2 = r),
                  (this._y2 = a);
              }),
              (window.SVGPathSegCurvetoCubicRel.prototype = Object.create(
                window.SVGPathSeg.prototype
              )),
              (window.SVGPathSegCurvetoCubicRel.prototype.toString =
                function () {
                  return "[object SVGPathSegCurvetoCubicRel]";
                }),
              (window.SVGPathSegCurvetoCubicRel.prototype._asPathString =
                function () {
                  return (
                    this.pathSegTypeAsLetter +
                    " " +
                    this._x1 +
                    " " +
                    this._y1 +
                    " " +
                    this._x2 +
                    " " +
                    this._y2 +
                    " " +
                    this._x +
                    " " +
                    this._y
                  );
                }),
              (window.SVGPathSegCurvetoCubicRel.prototype.clone = function () {
                return new window.SVGPathSegCurvetoCubicRel(
                  void 0,
                  this._x,
                  this._y,
                  this._x1,
                  this._y1,
                  this._x2,
                  this._y2
                );
              }),
              Object.defineProperty(
                window.SVGPathSegCurvetoCubicRel.prototype,
                "x",
                {
                  get: function () {
                    return this._x;
                  },
                  set: function (e) {
                    (this._x = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoCubicRel.prototype,
                "y",
                {
                  get: function () {
                    return this._y;
                  },
                  set: function (e) {
                    (this._y = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoCubicRel.prototype,
                "x1",
                {
                  get: function () {
                    return this._x1;
                  },
                  set: function (e) {
                    (this._x1 = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoCubicRel.prototype,
                "y1",
                {
                  get: function () {
                    return this._y1;
                  },
                  set: function (e) {
                    (this._y1 = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoCubicRel.prototype,
                "x2",
                {
                  get: function () {
                    return this._x2;
                  },
                  set: function (e) {
                    (this._x2 = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoCubicRel.prototype,
                "y2",
                {
                  get: function () {
                    return this._y2;
                  },
                  set: function (e) {
                    (this._y2 = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              (window.SVGPathSegCurvetoQuadraticAbs = function (e, t, n, i, o) {
                window.SVGPathSeg.call(
                  this,
                  window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS,
                  "Q",
                  e
                ),
                  (this._x = t),
                  (this._y = n),
                  (this._x1 = i),
                  (this._y1 = o);
              }),
              (window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(
                window.SVGPathSeg.prototype
              )),
              (window.SVGPathSegCurvetoQuadraticAbs.prototype.toString =
                function () {
                  return "[object SVGPathSegCurvetoQuadraticAbs]";
                }),
              (window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString =
                function () {
                  return (
                    this.pathSegTypeAsLetter +
                    " " +
                    this._x1 +
                    " " +
                    this._y1 +
                    " " +
                    this._x +
                    " " +
                    this._y
                  );
                }),
              (window.SVGPathSegCurvetoQuadraticAbs.prototype.clone =
                function () {
                  return new window.SVGPathSegCurvetoQuadraticAbs(
                    void 0,
                    this._x,
                    this._y,
                    this._x1,
                    this._y1
                  );
                }),
              Object.defineProperty(
                window.SVGPathSegCurvetoQuadraticAbs.prototype,
                "x",
                {
                  get: function () {
                    return this._x;
                  },
                  set: function (e) {
                    (this._x = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoQuadraticAbs.prototype,
                "y",
                {
                  get: function () {
                    return this._y;
                  },
                  set: function (e) {
                    (this._y = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoQuadraticAbs.prototype,
                "x1",
                {
                  get: function () {
                    return this._x1;
                  },
                  set: function (e) {
                    (this._x1 = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoQuadraticAbs.prototype,
                "y1",
                {
                  get: function () {
                    return this._y1;
                  },
                  set: function (e) {
                    (this._y1 = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              (window.SVGPathSegCurvetoQuadraticRel = function (e, t, n, i, o) {
                window.SVGPathSeg.call(
                  this,
                  window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL,
                  "q",
                  e
                ),
                  (this._x = t),
                  (this._y = n),
                  (this._x1 = i),
                  (this._y1 = o);
              }),
              (window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(
                window.SVGPathSeg.prototype
              )),
              (window.SVGPathSegCurvetoQuadraticRel.prototype.toString =
                function () {
                  return "[object SVGPathSegCurvetoQuadraticRel]";
                }),
              (window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString =
                function () {
                  return (
                    this.pathSegTypeAsLetter +
                    " " +
                    this._x1 +
                    " " +
                    this._y1 +
                    " " +
                    this._x +
                    " " +
                    this._y
                  );
                }),
              (window.SVGPathSegCurvetoQuadraticRel.prototype.clone =
                function () {
                  return new window.SVGPathSegCurvetoQuadraticRel(
                    void 0,
                    this._x,
                    this._y,
                    this._x1,
                    this._y1
                  );
                }),
              Object.defineProperty(
                window.SVGPathSegCurvetoQuadraticRel.prototype,
                "x",
                {
                  get: function () {
                    return this._x;
                  },
                  set: function (e) {
                    (this._x = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoQuadraticRel.prototype,
                "y",
                {
                  get: function () {
                    return this._y;
                  },
                  set: function (e) {
                    (this._y = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoQuadraticRel.prototype,
                "x1",
                {
                  get: function () {
                    return this._x1;
                  },
                  set: function (e) {
                    (this._x1 = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoQuadraticRel.prototype,
                "y1",
                {
                  get: function () {
                    return this._y1;
                  },
                  set: function (e) {
                    (this._y1 = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              (window.SVGPathSegArcAbs = function (e, t, n, i, o, r, a, s) {
                window.SVGPathSeg.call(
                  this,
                  window.SVGPathSeg.PATHSEG_ARC_ABS,
                  "A",
                  e
                ),
                  (this._x = t),
                  (this._y = n),
                  (this._r1 = i),
                  (this._r2 = o),
                  (this._angle = r),
                  (this._largeArcFlag = a),
                  (this._sweepFlag = s);
              }),
              (window.SVGPathSegArcAbs.prototype = Object.create(
                window.SVGPathSeg.prototype
              )),
              (window.SVGPathSegArcAbs.prototype.toString = function () {
                return "[object SVGPathSegArcAbs]";
              }),
              (window.SVGPathSegArcAbs.prototype._asPathString = function () {
                return (
                  this.pathSegTypeAsLetter +
                  " " +
                  this._r1 +
                  " " +
                  this._r2 +
                  " " +
                  this._angle +
                  " " +
                  (this._largeArcFlag ? "1" : "0") +
                  " " +
                  (this._sweepFlag ? "1" : "0") +
                  " " +
                  this._x +
                  " " +
                  this._y
                );
              }),
              (window.SVGPathSegArcAbs.prototype.clone = function () {
                return new window.SVGPathSegArcAbs(
                  void 0,
                  this._x,
                  this._y,
                  this._r1,
                  this._r2,
                  this._angle,
                  this._largeArcFlag,
                  this._sweepFlag
                );
              }),
              Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", {
                get: function () {
                  return this._x;
                },
                set: function (e) {
                  (this._x = e), this._segmentChanged();
                },
                enumerable: !0,
              }),
              Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", {
                get: function () {
                  return this._y;
                },
                set: function (e) {
                  (this._y = e), this._segmentChanged();
                },
                enumerable: !0,
              }),
              Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", {
                get: function () {
                  return this._r1;
                },
                set: function (e) {
                  (this._r1 = e), this._segmentChanged();
                },
                enumerable: !0,
              }),
              Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", {
                get: function () {
                  return this._r2;
                },
                set: function (e) {
                  (this._r2 = e), this._segmentChanged();
                },
                enumerable: !0,
              }),
              Object.defineProperty(
                window.SVGPathSegArcAbs.prototype,
                "angle",
                {
                  get: function () {
                    return this._angle;
                  },
                  set: function (e) {
                    (this._angle = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegArcAbs.prototype,
                "largeArcFlag",
                {
                  get: function () {
                    return this._largeArcFlag;
                  },
                  set: function (e) {
                    (this._largeArcFlag = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegArcAbs.prototype,
                "sweepFlag",
                {
                  get: function () {
                    return this._sweepFlag;
                  },
                  set: function (e) {
                    (this._sweepFlag = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              (window.SVGPathSegArcRel = function (e, t, n, i, o, r, a, s) {
                window.SVGPathSeg.call(
                  this,
                  window.SVGPathSeg.PATHSEG_ARC_REL,
                  "a",
                  e
                ),
                  (this._x = t),
                  (this._y = n),
                  (this._r1 = i),
                  (this._r2 = o),
                  (this._angle = r),
                  (this._largeArcFlag = a),
                  (this._sweepFlag = s);
              }),
              (window.SVGPathSegArcRel.prototype = Object.create(
                window.SVGPathSeg.prototype
              )),
              (window.SVGPathSegArcRel.prototype.toString = function () {
                return "[object SVGPathSegArcRel]";
              }),
              (window.SVGPathSegArcRel.prototype._asPathString = function () {
                return (
                  this.pathSegTypeAsLetter +
                  " " +
                  this._r1 +
                  " " +
                  this._r2 +
                  " " +
                  this._angle +
                  " " +
                  (this._largeArcFlag ? "1" : "0") +
                  " " +
                  (this._sweepFlag ? "1" : "0") +
                  " " +
                  this._x +
                  " " +
                  this._y
                );
              }),
              (window.SVGPathSegArcRel.prototype.clone = function () {
                return new window.SVGPathSegArcRel(
                  void 0,
                  this._x,
                  this._y,
                  this._r1,
                  this._r2,
                  this._angle,
                  this._largeArcFlag,
                  this._sweepFlag
                );
              }),
              Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", {
                get: function () {
                  return this._x;
                },
                set: function (e) {
                  (this._x = e), this._segmentChanged();
                },
                enumerable: !0,
              }),
              Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", {
                get: function () {
                  return this._y;
                },
                set: function (e) {
                  (this._y = e), this._segmentChanged();
                },
                enumerable: !0,
              }),
              Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", {
                get: function () {
                  return this._r1;
                },
                set: function (e) {
                  (this._r1 = e), this._segmentChanged();
                },
                enumerable: !0,
              }),
              Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", {
                get: function () {
                  return this._r2;
                },
                set: function (e) {
                  (this._r2 = e), this._segmentChanged();
                },
                enumerable: !0,
              }),
              Object.defineProperty(
                window.SVGPathSegArcRel.prototype,
                "angle",
                {
                  get: function () {
                    return this._angle;
                  },
                  set: function (e) {
                    (this._angle = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegArcRel.prototype,
                "largeArcFlag",
                {
                  get: function () {
                    return this._largeArcFlag;
                  },
                  set: function (e) {
                    (this._largeArcFlag = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegArcRel.prototype,
                "sweepFlag",
                {
                  get: function () {
                    return this._sweepFlag;
                  },
                  set: function (e) {
                    (this._sweepFlag = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              (window.SVGPathSegLinetoHorizontalAbs = function (e, t) {
                window.SVGPathSeg.call(
                  this,
                  window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS,
                  "H",
                  e
                ),
                  (this._x = t);
              }),
              (window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(
                window.SVGPathSeg.prototype
              )),
              (window.SVGPathSegLinetoHorizontalAbs.prototype.toString =
                function () {
                  return "[object SVGPathSegLinetoHorizontalAbs]";
                }),
              (window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString =
                function () {
                  return this.pathSegTypeAsLetter + " " + this._x;
                }),
              (window.SVGPathSegLinetoHorizontalAbs.prototype.clone =
                function () {
                  return new window.SVGPathSegLinetoHorizontalAbs(
                    void 0,
                    this._x
                  );
                }),
              Object.defineProperty(
                window.SVGPathSegLinetoHorizontalAbs.prototype,
                "x",
                {
                  get: function () {
                    return this._x;
                  },
                  set: function (e) {
                    (this._x = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              (window.SVGPathSegLinetoHorizontalRel = function (e, t) {
                window.SVGPathSeg.call(
                  this,
                  window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL,
                  "h",
                  e
                ),
                  (this._x = t);
              }),
              (window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(
                window.SVGPathSeg.prototype
              )),
              (window.SVGPathSegLinetoHorizontalRel.prototype.toString =
                function () {
                  return "[object SVGPathSegLinetoHorizontalRel]";
                }),
              (window.SVGPathSegLinetoHorizontalRel.prototype._asPathString =
                function () {
                  return this.pathSegTypeAsLetter + " " + this._x;
                }),
              (window.SVGPathSegLinetoHorizontalRel.prototype.clone =
                function () {
                  return new window.SVGPathSegLinetoHorizontalRel(
                    void 0,
                    this._x
                  );
                }),
              Object.defineProperty(
                window.SVGPathSegLinetoHorizontalRel.prototype,
                "x",
                {
                  get: function () {
                    return this._x;
                  },
                  set: function (e) {
                    (this._x = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              (window.SVGPathSegLinetoVerticalAbs = function (e, t) {
                window.SVGPathSeg.call(
                  this,
                  window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS,
                  "V",
                  e
                ),
                  (this._y = t);
              }),
              (window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(
                window.SVGPathSeg.prototype
              )),
              (window.SVGPathSegLinetoVerticalAbs.prototype.toString =
                function () {
                  return "[object SVGPathSegLinetoVerticalAbs]";
                }),
              (window.SVGPathSegLinetoVerticalAbs.prototype._asPathString =
                function () {
                  return this.pathSegTypeAsLetter + " " + this._y;
                }),
              (window.SVGPathSegLinetoVerticalAbs.prototype.clone =
                function () {
                  return new window.SVGPathSegLinetoVerticalAbs(
                    void 0,
                    this._y
                  );
                }),
              Object.defineProperty(
                window.SVGPathSegLinetoVerticalAbs.prototype,
                "y",
                {
                  get: function () {
                    return this._y;
                  },
                  set: function (e) {
                    (this._y = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              (window.SVGPathSegLinetoVerticalRel = function (e, t) {
                window.SVGPathSeg.call(
                  this,
                  window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL,
                  "v",
                  e
                ),
                  (this._y = t);
              }),
              (window.SVGPathSegLinetoVerticalRel.prototype = Object.create(
                window.SVGPathSeg.prototype
              )),
              (window.SVGPathSegLinetoVerticalRel.prototype.toString =
                function () {
                  return "[object SVGPathSegLinetoVerticalRel]";
                }),
              (window.SVGPathSegLinetoVerticalRel.prototype._asPathString =
                function () {
                  return this.pathSegTypeAsLetter + " " + this._y;
                }),
              (window.SVGPathSegLinetoVerticalRel.prototype.clone =
                function () {
                  return new window.SVGPathSegLinetoVerticalRel(
                    void 0,
                    this._y
                  );
                }),
              Object.defineProperty(
                window.SVGPathSegLinetoVerticalRel.prototype,
                "y",
                {
                  get: function () {
                    return this._y;
                  },
                  set: function (e) {
                    (this._y = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              (window.SVGPathSegCurvetoCubicSmoothAbs = function (
                e,
                t,
                n,
                i,
                o
              ) {
                window.SVGPathSeg.call(
                  this,
                  window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS,
                  "S",
                  e
                ),
                  (this._x = t),
                  (this._y = n),
                  (this._x2 = i),
                  (this._y2 = o);
              }),
              (window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(
                window.SVGPathSeg.prototype
              )),
              (window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString =
                function () {
                  return "[object SVGPathSegCurvetoCubicSmoothAbs]";
                }),
              (window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString =
                function () {
                  return (
                    this.pathSegTypeAsLetter +
                    " " +
                    this._x2 +
                    " " +
                    this._y2 +
                    " " +
                    this._x +
                    " " +
                    this._y
                  );
                }),
              (window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone =
                function () {
                  return new window.SVGPathSegCurvetoCubicSmoothAbs(
                    void 0,
                    this._x,
                    this._y,
                    this._x2,
                    this._y2
                  );
                }),
              Object.defineProperty(
                window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
                "x",
                {
                  get: function () {
                    return this._x;
                  },
                  set: function (e) {
                    (this._x = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
                "y",
                {
                  get: function () {
                    return this._y;
                  },
                  set: function (e) {
                    (this._y = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
                "x2",
                {
                  get: function () {
                    return this._x2;
                  },
                  set: function (e) {
                    (this._x2 = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
                "y2",
                {
                  get: function () {
                    return this._y2;
                  },
                  set: function (e) {
                    (this._y2 = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              (window.SVGPathSegCurvetoCubicSmoothRel = function (
                e,
                t,
                n,
                i,
                o
              ) {
                window.SVGPathSeg.call(
                  this,
                  window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL,
                  "s",
                  e
                ),
                  (this._x = t),
                  (this._y = n),
                  (this._x2 = i),
                  (this._y2 = o);
              }),
              (window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(
                window.SVGPathSeg.prototype
              )),
              (window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString =
                function () {
                  return "[object SVGPathSegCurvetoCubicSmoothRel]";
                }),
              (window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString =
                function () {
                  return (
                    this.pathSegTypeAsLetter +
                    " " +
                    this._x2 +
                    " " +
                    this._y2 +
                    " " +
                    this._x +
                    " " +
                    this._y
                  );
                }),
              (window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone =
                function () {
                  return new window.SVGPathSegCurvetoCubicSmoothRel(
                    void 0,
                    this._x,
                    this._y,
                    this._x2,
                    this._y2
                  );
                }),
              Object.defineProperty(
                window.SVGPathSegCurvetoCubicSmoothRel.prototype,
                "x",
                {
                  get: function () {
                    return this._x;
                  },
                  set: function (e) {
                    (this._x = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoCubicSmoothRel.prototype,
                "y",
                {
                  get: function () {
                    return this._y;
                  },
                  set: function (e) {
                    (this._y = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoCubicSmoothRel.prototype,
                "x2",
                {
                  get: function () {
                    return this._x2;
                  },
                  set: function (e) {
                    (this._x2 = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoCubicSmoothRel.prototype,
                "y2",
                {
                  get: function () {
                    return this._y2;
                  },
                  set: function (e) {
                    (this._y2 = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              (window.SVGPathSegCurvetoQuadraticSmoothAbs = function (e, t, n) {
                window.SVGPathSeg.call(
                  this,
                  window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS,
                  "T",
                  e
                ),
                  (this._x = t),
                  (this._y = n);
              }),
              (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype =
                Object.create(window.SVGPathSeg.prototype)),
              (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString =
                function () {
                  return "[object SVGPathSegCurvetoQuadraticSmoothAbs]";
                }),
              (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString =
                function () {
                  return (
                    this.pathSegTypeAsLetter + " " + this._x + " " + this._y
                  );
                }),
              (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone =
                function () {
                  return new window.SVGPathSegCurvetoQuadraticSmoothAbs(
                    void 0,
                    this._x,
                    this._y
                  );
                }),
              Object.defineProperty(
                window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,
                "x",
                {
                  get: function () {
                    return this._x;
                  },
                  set: function (e) {
                    (this._x = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,
                "y",
                {
                  get: function () {
                    return this._y;
                  },
                  set: function (e) {
                    (this._y = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              (window.SVGPathSegCurvetoQuadraticSmoothRel = function (e, t, n) {
                window.SVGPathSeg.call(
                  this,
                  window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL,
                  "t",
                  e
                ),
                  (this._x = t),
                  (this._y = n);
              }),
              (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype =
                Object.create(window.SVGPathSeg.prototype)),
              (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString =
                function () {
                  return "[object SVGPathSegCurvetoQuadraticSmoothRel]";
                }),
              (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString =
                function () {
                  return (
                    this.pathSegTypeAsLetter + " " + this._x + " " + this._y
                  );
                }),
              (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone =
                function () {
                  return new window.SVGPathSegCurvetoQuadraticSmoothRel(
                    void 0,
                    this._x,
                    this._y
                  );
                }),
              Object.defineProperty(
                window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,
                "x",
                {
                  get: function () {
                    return this._x;
                  },
                  set: function (e) {
                    (this._x = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,
                "y",
                {
                  get: function () {
                    return this._y;
                  },
                  set: function (e) {
                    (this._y = e), this._segmentChanged();
                  },
                  enumerable: !0,
                }
              ),
              (window.SVGPathElement.prototype.createSVGPathSegClosePath =
                function () {
                  return new window.SVGPathSegClosePath(void 0);
                }),
              (window.SVGPathElement.prototype.createSVGPathSegMovetoAbs =
                function (e, t) {
                  return new window.SVGPathSegMovetoAbs(void 0, e, t);
                }),
              (window.SVGPathElement.prototype.createSVGPathSegMovetoRel =
                function (e, t) {
                  return new window.SVGPathSegMovetoRel(void 0, e, t);
                }),
              (window.SVGPathElement.prototype.createSVGPathSegLinetoAbs =
                function (e, t) {
                  return new window.SVGPathSegLinetoAbs(void 0, e, t);
                }),
              (window.SVGPathElement.prototype.createSVGPathSegLinetoRel =
                function (e, t) {
                  return new window.SVGPathSegLinetoRel(void 0, e, t);
                }),
              (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs =
                function (e, t, n, i, o, r) {
                  return new window.SVGPathSegCurvetoCubicAbs(
                    void 0,
                    e,
                    t,
                    n,
                    i,
                    o,
                    r
                  );
                }),
              (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel =
                function (e, t, n, i, o, r) {
                  return new window.SVGPathSegCurvetoCubicRel(
                    void 0,
                    e,
                    t,
                    n,
                    i,
                    o,
                    r
                  );
                }),
              (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs =
                function (e, t, n, i) {
                  return new window.SVGPathSegCurvetoQuadraticAbs(
                    void 0,
                    e,
                    t,
                    n,
                    i
                  );
                }),
              (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel =
                function (e, t, n, i) {
                  return new window.SVGPathSegCurvetoQuadraticRel(
                    void 0,
                    e,
                    t,
                    n,
                    i
                  );
                }),
              (window.SVGPathElement.prototype.createSVGPathSegArcAbs =
                function (e, t, n, i, o, r, a) {
                  return new window.SVGPathSegArcAbs(
                    void 0,
                    e,
                    t,
                    n,
                    i,
                    o,
                    r,
                    a
                  );
                }),
              (window.SVGPathElement.prototype.createSVGPathSegArcRel =
                function (e, t, n, i, o, r, a) {
                  return new window.SVGPathSegArcRel(
                    void 0,
                    e,
                    t,
                    n,
                    i,
                    o,
                    r,
                    a
                  );
                }),
              (window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs =
                function (e) {
                  return new window.SVGPathSegLinetoHorizontalAbs(void 0, e);
                }),
              (window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel =
                function (e) {
                  return new window.SVGPathSegLinetoHorizontalRel(void 0, e);
                }),
              (window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs =
                function (e) {
                  return new window.SVGPathSegLinetoVerticalAbs(void 0, e);
                }),
              (window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel =
                function (e) {
                  return new window.SVGPathSegLinetoVerticalRel(void 0, e);
                }),
              (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs =
                function (e, t, n, i) {
                  return new window.SVGPathSegCurvetoCubicSmoothAbs(
                    void 0,
                    e,
                    t,
                    n,
                    i
                  );
                }),
              (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel =
                function (e, t, n, i) {
                  return new window.SVGPathSegCurvetoCubicSmoothRel(
                    void 0,
                    e,
                    t,
                    n,
                    i
                  );
                }),
              (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs =
                function (e, t) {
                  return new window.SVGPathSegCurvetoQuadraticSmoothAbs(
                    void 0,
                    e,
                    t
                  );
                }),
              (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel =
                function (e, t) {
                  return new window.SVGPathSegCurvetoQuadraticSmoothRel(
                    void 0,
                    e,
                    t
                  );
                }),
              "getPathSegAtLength" in window.SVGPathElement.prototype ||
                (window.SVGPathElement.prototype.getPathSegAtLength = function (
                  e
                ) {
                  if (void 0 === e || !isFinite(e)) throw "Invalid arguments.";
                  const t = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "path"
                  );
                  t.setAttribute("d", this.getAttribute("d"));
                  let n = t.pathSegList.numberOfItems - 1;
                  if (n <= 0) return 0;
                  do {
                    if ((t.pathSegList.removeItem(n), e > t.getTotalLength()))
                      break;
                    n--;
                  } while (n > 0);
                  return n;
                })),
              ("SVGPathSegList" in window &&
                "appendItem" in window.SVGPathSegList.prototype) ||
                ((window.SVGPathSegList = function (e) {
                  (this._pathElement = e),
                    (this._list = this._parsePath(
                      this._pathElement.getAttribute("d")
                    )),
                    (this._mutationObserverConfig = {
                      attributes: !0,
                      attributeFilter: ["d"],
                    }),
                    (this._pathElementMutationObserver = new MutationObserver(
                      this._updateListFromPathMutations.bind(this)
                    )),
                    this._pathElementMutationObserver.observe(
                      this._pathElement,
                      this._mutationObserverConfig
                    );
                }),
                (window.SVGPathSegList.prototype.classname = "SVGPathSegList"),
                Object.defineProperty(
                  window.SVGPathSegList.prototype,
                  "numberOfItems",
                  {
                    get: function () {
                      return (
                        this._checkPathSynchronizedToList(), this._list.length
                      );
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathSegList.prototype,
                  "length",
                  {
                    get: function () {
                      return (
                        this._checkPathSynchronizedToList(), this._list.length
                      );
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathElement.prototype,
                  "pathSegList",
                  {
                    get: function () {
                      return (
                        this._pathSegList ||
                          (this._pathSegList = new window.SVGPathSegList(this)),
                        this._pathSegList
                      );
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathElement.prototype,
                  "normalizedPathSegList",
                  {
                    get: function () {
                      return this.pathSegList;
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathElement.prototype,
                  "animatedPathSegList",
                  {
                    get: function () {
                      return this.pathSegList;
                    },
                    enumerable: !0,
                  }
                ),
                Object.defineProperty(
                  window.SVGPathElement.prototype,
                  "animatedNormalizedPathSegList",
                  {
                    get: function () {
                      return this.pathSegList;
                    },
                    enumerable: !0,
                  }
                ),
                (window.SVGPathSegList.prototype._checkPathSynchronizedToList =
                  function () {
                    this._updateListFromPathMutations(
                      this._pathElementMutationObserver.takeRecords()
                    );
                  }),
                (window.SVGPathSegList.prototype._updateListFromPathMutations =
                  function (e) {
                    if (!this._pathElement) return;
                    let t = !1;
                    e.forEach(function (e) {
                      "d" == e.attributeName && (t = !0);
                    }),
                      t &&
                        (this._list = this._parsePath(
                          this._pathElement.getAttribute("d")
                        ));
                  }),
                (window.SVGPathSegList.prototype._writeListToPath =
                  function () {
                    this._pathElementMutationObserver.disconnect(),
                      this._pathElement.setAttribute(
                        "d",
                        window.SVGPathSegList._pathSegArrayAsString(this._list)
                      ),
                      this._pathElementMutationObserver.observe(
                        this._pathElement,
                        this._mutationObserverConfig
                      );
                  }),
                (window.SVGPathSegList.prototype.segmentChanged = function (e) {
                  this._writeListToPath();
                }),
                (window.SVGPathSegList.prototype.clear = function () {
                  this._checkPathSynchronizedToList(),
                    this._list.forEach(function (e) {
                      e._owningPathSegList = null;
                    }),
                    (this._list = []),
                    this._writeListToPath();
                }),
                (window.SVGPathSegList.prototype.initialize = function (e) {
                  return (
                    this._checkPathSynchronizedToList(),
                    (this._list = [e]),
                    (e._owningPathSegList = this),
                    this._writeListToPath(),
                    e
                  );
                }),
                (window.SVGPathSegList.prototype._checkValidIndex = function (
                  e
                ) {
                  if (isNaN(e) || e < 0 || e >= this.numberOfItems)
                    throw "INDEX_SIZE_ERR";
                }),
                (window.SVGPathSegList.prototype.getItem = function (e) {
                  return (
                    this._checkPathSynchronizedToList(),
                    this._checkValidIndex(e),
                    this._list[e]
                  );
                }),
                (window.SVGPathSegList.prototype.insertItemBefore = function (
                  e,
                  t
                ) {
                  return (
                    this._checkPathSynchronizedToList(),
                    t > this.numberOfItems && (t = this.numberOfItems),
                    e._owningPathSegList && (e = e.clone()),
                    this._list.splice(t, 0, e),
                    (e._owningPathSegList = this),
                    this._writeListToPath(),
                    e
                  );
                }),
                (window.SVGPathSegList.prototype.replaceItem = function (e, t) {
                  return (
                    this._checkPathSynchronizedToList(),
                    e._owningPathSegList && (e = e.clone()),
                    this._checkValidIndex(t),
                    (this._list[t] = e),
                    (e._owningPathSegList = this),
                    this._writeListToPath(),
                    e
                  );
                }),
                (window.SVGPathSegList.prototype.removeItem = function (e) {
                  this._checkPathSynchronizedToList(), this._checkValidIndex(e);
                  const t = this._list[e];
                  return this._list.splice(e, 1), this._writeListToPath(), t;
                }),
                (window.SVGPathSegList.prototype.appendItem = function (e) {
                  return (
                    this._checkPathSynchronizedToList(),
                    e._owningPathSegList && (e = e.clone()),
                    this._list.push(e),
                    (e._owningPathSegList = this),
                    this._writeListToPath(),
                    e
                  );
                }),
                (window.SVGPathSegList._pathSegArrayAsString = function (e) {
                  let t = "",
                    n = !0;
                  return (
                    e.forEach(function (e) {
                      n
                        ? ((n = !1), (t += e._asPathString()))
                        : (t += " " + e._asPathString());
                    }),
                    t
                  );
                }),
                (window.SVGPathSegList.prototype._parsePath = function (e) {
                  if (!e || 0 == e.length) return [];
                  const t = this,
                    n = function () {
                      this.pathSegList = [];
                    };
                  n.prototype.appendSegment = function (e) {
                    this.pathSegList.push(e);
                  };
                  const i = function (e) {
                    (this._string = e),
                      (this._currentIndex = 0),
                      (this._endIndex = this._string.length),
                      (this._previousCommand =
                        window.SVGPathSeg.PATHSEG_UNKNOWN),
                      this._skipOptionalSpaces();
                  };
                  (i.prototype._isCurrentSpace = function () {
                    const e = this._string[this._currentIndex];
                    return (
                      e <= " " &&
                      (" " == e ||
                        "\n" == e ||
                        "\t" == e ||
                        "\r" == e ||
                        "\f" == e)
                    );
                  }),
                    (i.prototype._skipOptionalSpaces = function () {
                      for (
                        ;
                        this._currentIndex < this._endIndex &&
                        this._isCurrentSpace();

                      )
                        this._currentIndex++;
                      return this._currentIndex < this._endIndex;
                    }),
                    (i.prototype._skipOptionalSpacesOrDelimiter = function () {
                      return (
                        !(
                          this._currentIndex < this._endIndex &&
                          !this._isCurrentSpace() &&
                          "," != this._string.charAt(this._currentIndex)
                        ) &&
                        (this._skipOptionalSpaces() &&
                          this._currentIndex < this._endIndex &&
                          "," == this._string.charAt(this._currentIndex) &&
                          (this._currentIndex++, this._skipOptionalSpaces()),
                        this._currentIndex < this._endIndex)
                      );
                    }),
                    (i.prototype.hasMoreData = function () {
                      return this._currentIndex < this._endIndex;
                    }),
                    (i.prototype.peekSegmentType = function () {
                      const e = this._string[this._currentIndex];
                      return this._pathSegTypeFromChar(e);
                    }),
                    (i.prototype._pathSegTypeFromChar = function (e) {
                      switch (e) {
                        case "Z":
                        case "z":
                          return window.SVGPathSeg.PATHSEG_CLOSEPATH;
                        case "M":
                          return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
                        case "m":
                          return window.SVGPathSeg.PATHSEG_MOVETO_REL;
                        case "L":
                          return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                        case "l":
                          return window.SVGPathSeg.PATHSEG_LINETO_REL;
                        case "C":
                          return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                        case "c":
                          return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                        case "Q":
                          return window.SVGPathSeg
                            .PATHSEG_CURVETO_QUADRATIC_ABS;
                        case "q":
                          return window.SVGPathSeg
                            .PATHSEG_CURVETO_QUADRATIC_REL;
                        case "A":
                          return window.SVGPathSeg.PATHSEG_ARC_ABS;
                        case "a":
                          return window.SVGPathSeg.PATHSEG_ARC_REL;
                        case "H":
                          return window.SVGPathSeg
                            .PATHSEG_LINETO_HORIZONTAL_ABS;
                        case "h":
                          return window.SVGPathSeg
                            .PATHSEG_LINETO_HORIZONTAL_REL;
                        case "V":
                          return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                        case "v":
                          return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                        case "S":
                          return window.SVGPathSeg
                            .PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                        case "s":
                          return window.SVGPathSeg
                            .PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                        case "T":
                          return window.SVGPathSeg
                            .PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                        case "t":
                          return window.SVGPathSeg
                            .PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                        default:
                          return window.SVGPathSeg.PATHSEG_UNKNOWN;
                      }
                    }),
                    (i.prototype._nextCommandHelper = function (e, t) {
                      return ("+" == e ||
                        "-" == e ||
                        "." == e ||
                        (e >= "0" && e <= "9")) &&
                        t != window.SVGPathSeg.PATHSEG_CLOSEPATH
                        ? t == window.SVGPathSeg.PATHSEG_MOVETO_ABS
                          ? window.SVGPathSeg.PATHSEG_LINETO_ABS
                          : t == window.SVGPathSeg.PATHSEG_MOVETO_REL
                          ? window.SVGPathSeg.PATHSEG_LINETO_REL
                          : t
                        : window.SVGPathSeg.PATHSEG_UNKNOWN;
                    }),
                    (i.prototype.initialCommandIsMoveTo = function () {
                      if (!this.hasMoreData()) return !0;
                      const e = this.peekSegmentType();
                      return (
                        e == window.SVGPathSeg.PATHSEG_MOVETO_ABS ||
                        e == window.SVGPathSeg.PATHSEG_MOVETO_REL
                      );
                    }),
                    (i.prototype._parseNumber = function () {
                      let e = 0,
                        t = 0,
                        n = 1,
                        i = 0,
                        o = 1,
                        r = 1;
                      const a = this._currentIndex;
                      if (
                        (this._skipOptionalSpaces(),
                        this._currentIndex < this._endIndex &&
                        "+" == this._string.charAt(this._currentIndex)
                          ? this._currentIndex++
                          : this._currentIndex < this._endIndex &&
                            "-" == this._string.charAt(this._currentIndex) &&
                            (this._currentIndex++, (o = -1)),
                        this._currentIndex == this._endIndex ||
                          ((this._string.charAt(this._currentIndex) < "0" ||
                            this._string.charAt(this._currentIndex) > "9") &&
                            "." != this._string.charAt(this._currentIndex)))
                      )
                        return;
                      const s = this._currentIndex;
                      for (
                        ;
                        this._currentIndex < this._endIndex &&
                        this._string.charAt(this._currentIndex) >= "0" &&
                        this._string.charAt(this._currentIndex) <= "9";

                      )
                        this._currentIndex++;
                      if (this._currentIndex != s) {
                        let e = this._currentIndex - 1,
                          n = 1;
                        for (; e >= s; )
                          (t += n * (this._string.charAt(e--) - "0")),
                            (n *= 10);
                      }
                      if (
                        this._currentIndex < this._endIndex &&
                        "." == this._string.charAt(this._currentIndex)
                      ) {
                        if (
                          (this._currentIndex++,
                          this._currentIndex >= this._endIndex ||
                            this._string.charAt(this._currentIndex) < "0" ||
                            this._string.charAt(this._currentIndex) > "9")
                        )
                          return;
                        for (
                          ;
                          this._currentIndex < this._endIndex &&
                          this._string.charAt(this._currentIndex) >= "0" &&
                          this._string.charAt(this._currentIndex) <= "9";

                        )
                          (n *= 10),
                            (i +=
                              (this._string.charAt(this._currentIndex) - "0") /
                              n),
                            (this._currentIndex += 1);
                      }
                      if (
                        this._currentIndex != a &&
                        this._currentIndex + 1 < this._endIndex &&
                        ("e" == this._string.charAt(this._currentIndex) ||
                          "E" == this._string.charAt(this._currentIndex)) &&
                        "x" != this._string.charAt(this._currentIndex + 1) &&
                        "m" != this._string.charAt(this._currentIndex + 1)
                      ) {
                        if (
                          (this._currentIndex++,
                          "+" == this._string.charAt(this._currentIndex)
                            ? this._currentIndex++
                            : "-" == this._string.charAt(this._currentIndex) &&
                              (this._currentIndex++, (r = -1)),
                          this._currentIndex >= this._endIndex ||
                            this._string.charAt(this._currentIndex) < "0" ||
                            this._string.charAt(this._currentIndex) > "9")
                        )
                          return;
                        for (
                          ;
                          this._currentIndex < this._endIndex &&
                          this._string.charAt(this._currentIndex) >= "0" &&
                          this._string.charAt(this._currentIndex) <= "9";

                        )
                          (e *= 10),
                            (e +=
                              this._string.charAt(this._currentIndex) - "0"),
                            this._currentIndex++;
                      }
                      let l = t + i;
                      return (
                        (l *= o),
                        e && (l *= Math.pow(10, r * e)),
                        a != this._currentIndex
                          ? (this._skipOptionalSpacesOrDelimiter(), l)
                          : void 0
                      );
                    }),
                    (i.prototype._parseArcFlag = function () {
                      if (this._currentIndex >= this._endIndex) return;
                      let e = !1;
                      const t = this._string.charAt(this._currentIndex++);
                      if ("0" == t) e = !1;
                      else {
                        if ("1" != t) return;
                        e = !0;
                      }
                      return this._skipOptionalSpacesOrDelimiter(), e;
                    }),
                    (i.prototype.parseSegment = function () {
                      const e = this._string[this._currentIndex];
                      let n,
                        i = this._pathSegTypeFromChar(e);
                      if (i == window.SVGPathSeg.PATHSEG_UNKNOWN) {
                        if (
                          this._previousCommand ==
                          window.SVGPathSeg.PATHSEG_UNKNOWN
                        )
                          return null;
                        if (
                          ((i = this._nextCommandHelper(
                            e,
                            this._previousCommand
                          )),
                          i == window.SVGPathSeg.PATHSEG_UNKNOWN)
                        )
                          return null;
                      } else this._currentIndex++;
                      switch (((this._previousCommand = i), i)) {
                        case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                          return new window.SVGPathSegMovetoRel(
                            t,
                            this._parseNumber(),
                            this._parseNumber()
                          );
                        case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                          return new window.SVGPathSegMovetoAbs(
                            t,
                            this._parseNumber(),
                            this._parseNumber()
                          );
                        case window.SVGPathSeg.PATHSEG_LINETO_REL:
                          return new window.SVGPathSegLinetoRel(
                            t,
                            this._parseNumber(),
                            this._parseNumber()
                          );
                        case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                          return new window.SVGPathSegLinetoAbs(
                            t,
                            this._parseNumber(),
                            this._parseNumber()
                          );
                        case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                          return new window.SVGPathSegLinetoHorizontalRel(
                            t,
                            this._parseNumber()
                          );
                        case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                          return new window.SVGPathSegLinetoHorizontalAbs(
                            t,
                            this._parseNumber()
                          );
                        case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                          return new window.SVGPathSegLinetoVerticalRel(
                            t,
                            this._parseNumber()
                          );
                        case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                          return new window.SVGPathSegLinetoVerticalAbs(
                            t,
                            this._parseNumber()
                          );
                        case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                          return (
                            this._skipOptionalSpaces(),
                            new window.SVGPathSegClosePath(t)
                          );
                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                          return (
                            (n = {
                              x1: this._parseNumber(),
                              y1: this._parseNumber(),
                              x2: this._parseNumber(),
                              y2: this._parseNumber(),
                              x: this._parseNumber(),
                              y: this._parseNumber(),
                            }),
                            new window.SVGPathSegCurvetoCubicRel(
                              t,
                              n.x,
                              n.y,
                              n.x1,
                              n.y1,
                              n.x2,
                              n.y2
                            )
                          );
                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                          return (
                            (n = {
                              x1: this._parseNumber(),
                              y1: this._parseNumber(),
                              x2: this._parseNumber(),
                              y2: this._parseNumber(),
                              x: this._parseNumber(),
                              y: this._parseNumber(),
                            }),
                            new window.SVGPathSegCurvetoCubicAbs(
                              t,
                              n.x,
                              n.y,
                              n.x1,
                              n.y1,
                              n.x2,
                              n.y2
                            )
                          );
                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                          return (
                            (n = {
                              x2: this._parseNumber(),
                              y2: this._parseNumber(),
                              x: this._parseNumber(),
                              y: this._parseNumber(),
                            }),
                            new window.SVGPathSegCurvetoCubicSmoothRel(
                              t,
                              n.x,
                              n.y,
                              n.x2,
                              n.y2
                            )
                          );
                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                          return (
                            (n = {
                              x2: this._parseNumber(),
                              y2: this._parseNumber(),
                              x: this._parseNumber(),
                              y: this._parseNumber(),
                            }),
                            new window.SVGPathSegCurvetoCubicSmoothAbs(
                              t,
                              n.x,
                              n.y,
                              n.x2,
                              n.y2
                            )
                          );
                        case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                          return (
                            (n = {
                              x1: this._parseNumber(),
                              y1: this._parseNumber(),
                              x: this._parseNumber(),
                              y: this._parseNumber(),
                            }),
                            new window.SVGPathSegCurvetoQuadraticRel(
                              t,
                              n.x,
                              n.y,
                              n.x1,
                              n.y1
                            )
                          );
                        case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                          return (
                            (n = {
                              x1: this._parseNumber(),
                              y1: this._parseNumber(),
                              x: this._parseNumber(),
                              y: this._parseNumber(),
                            }),
                            new window.SVGPathSegCurvetoQuadraticAbs(
                              t,
                              n.x,
                              n.y,
                              n.x1,
                              n.y1
                            )
                          );
                        case window.SVGPathSeg
                          .PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                          return new window.SVGPathSegCurvetoQuadraticSmoothRel(
                            t,
                            this._parseNumber(),
                            this._parseNumber()
                          );
                        case window.SVGPathSeg
                          .PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                          return new window.SVGPathSegCurvetoQuadraticSmoothAbs(
                            t,
                            this._parseNumber(),
                            this._parseNumber()
                          );
                        case window.SVGPathSeg.PATHSEG_ARC_REL:
                          return (
                            (n = {
                              x1: this._parseNumber(),
                              y1: this._parseNumber(),
                              arcAngle: this._parseNumber(),
                              arcLarge: this._parseArcFlag(),
                              arcSweep: this._parseArcFlag(),
                              x: this._parseNumber(),
                              y: this._parseNumber(),
                            }),
                            new window.SVGPathSegArcRel(
                              t,
                              n.x,
                              n.y,
                              n.x1,
                              n.y1,
                              n.arcAngle,
                              n.arcLarge,
                              n.arcSweep
                            )
                          );
                        case window.SVGPathSeg.PATHSEG_ARC_ABS:
                          return (
                            (n = {
                              x1: this._parseNumber(),
                              y1: this._parseNumber(),
                              arcAngle: this._parseNumber(),
                              arcLarge: this._parseArcFlag(),
                              arcSweep: this._parseArcFlag(),
                              x: this._parseNumber(),
                              y: this._parseNumber(),
                            }),
                            new window.SVGPathSegArcAbs(
                              t,
                              n.x,
                              n.y,
                              n.x1,
                              n.y1,
                              n.arcAngle,
                              n.arcLarge,
                              n.arcSweep
                            )
                          );
                        default:
                          throw "Unknown path seg type.";
                      }
                    });
                  const o = new n(),
                    r = new i(e);
                  if (!r.initialCommandIsMoveTo()) return [];
                  for (; r.hasMoreData(); ) {
                    const e = r.parseSegment();
                    if (!e) return [];
                    o.appendSegment(e);
                  }
                  return o.pathSegList;
                }));
          } catch (e) {
            console.warn(
              "An error occurred in tsParticles pathseg polyfill. If the Polygon Mask is not working, please open an issue here: https://github.com/matteobruni/tsparticles",
              e
            );
          }
        })();
      },
      2783: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CircleDrawer = void 0);
        t.CircleDrawer = class {
          getSidesCount() {
            return 12;
          }
          draw(e, t, n) {
            e.arc(0, 0, n, 0, 2 * Math.PI, !1);
          }
        };
      },
      4039: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadCircleShape = void 0);
        const i = n(2783);
        t.loadCircleShape = async function (e) {
          await e.addShape("circle", new i.CircleDrawer());
        };
      },
      9975: function (e, t, n) {
        "use strict";
        var i,
          o =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, n, i, o) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !o)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" === typeof t ? e !== t || !o : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              return (
                "a" === i ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n
              );
            },
          r =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, n, i) {
              if ("a" === n && !i)
                throw new TypeError(
                  "Private accessor was defined without a getter"
                );
              if ("function" === typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError(
                  "Cannot read private member from an object whose class did not declare it"
                );
              return "m" === n
                ? i
                : "a" === n
                ? i.call(e)
                : i
                ? i.value
                : t.get(e);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ImageDrawer = void 0);
        const a = n(9453);
        (t.ImageDrawer = class {
          constructor() {
            i.set(this, void 0), o(this, i, [], "f");
          }
          getSidesCount() {
            return 12;
          }
          getImages(e) {
            const t = r(this, i, "f").find((t) => t.id === e.id);
            return (
              t ||
              (r(this, i, "f").push({ id: e.id, images: [] }),
              this.getImages(e))
            );
          }
          addImage(e, t) {
            const n = this.getImages(e);
            null === n || void 0 === n || n.images.push(t);
          }
          destroy() {
            o(this, i, [], "f");
          }
          draw(e, t, n, i) {
            var o, r;
            const a = t.image,
              s =
                null === (o = null === a || void 0 === a ? void 0 : a.data) ||
                void 0 === o
                  ? void 0
                  : o.element;
            if (!s) return;
            const l =
                null !== (r = null === a || void 0 === a ? void 0 : a.ratio) &&
                void 0 !== r
                  ? r
                  : 1,
              c = { x: -n, y: -n };
            ((null === a || void 0 === a ? void 0 : a.data.svgData) &&
              (null === a || void 0 === a ? void 0 : a.replaceColor)) ||
              (e.globalAlpha = i),
              e.drawImage(s, c.x, c.y, 2 * n, (2 * n) / l),
              ((null === a || void 0 === a ? void 0 : a.data.svgData) &&
                (null === a || void 0 === a ? void 0 : a.replaceColor)) ||
                (e.globalAlpha = 1);
          }
          loadShape(e) {
            var t, n, i;
            if ("image" !== e.shape && "images" !== e.shape) return;
            const o = this.getImages(e.container).images,
              r = e.shapeData,
              s = o.find((e) => e.source === r.src);
            let l;
            if (!s)
              return void this.loadImageShape(e.container, r).then(() => {
                this.loadShape(e);
              });
            if (s.error) return;
            const c = e.getFillColor();
            (l =
              s.svgData && r.replaceColor && c
                ? (0, a.replaceImageColor)(s, r, c, e)
                : {
                    data: s,
                    loaded: !0,
                    ratio: r.width / r.height,
                    replaceColor:
                      null !== (t = r.replaceColor) && void 0 !== t
                        ? t
                        : r.replace_color,
                    source: r.src,
                  }),
              l.ratio || (l.ratio = 1);
            const u = {
              image: l,
              fill: null !== (n = r.fill) && void 0 !== n ? n : e.fill,
              close: null !== (i = r.close) && void 0 !== i ? i : e.close,
            };
            (e.image = u.image), (e.fill = u.fill), (e.close = u.close);
          }
          async loadImageShape(e, t) {
            const n = t.src;
            if (!n) throw new Error("Error tsParticles - No image.src");
            try {
              const i = {
                source: n,
                type: n.substr(n.length - 3),
                error: !1,
                loading: !0,
              };
              this.addImage(e, i);
              const o = t.replaceColor ? a.downloadSvgImage : a.loadImage;
              await o(i);
            } catch (i) {
              throw new Error(`tsParticles error - ${t.src} not found`);
            }
          }
        }),
          (i = new WeakMap());
      },
      9453: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.replaceImageColor = t.downloadSvgImage = t.loadImage = void 0);
        const i = n(6923),
          o =
            /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
        async function r(e) {
          return new Promise((t) => {
            e.loading = !0;
            const n = new Image();
            n.addEventListener("load", () => {
              (e.element = n), (e.loading = !1), t();
            }),
              n.addEventListener("error", () => {
                (e.error = !0),
                  (e.loading = !1),
                  console.error(
                    `Error tsParticles - loading image: ${e.source}`
                  ),
                  t();
              }),
              (n.src = e.source);
          });
        }
        (t.loadImage = r),
          (t.downloadSvgImage = async function (e) {
            if ("svg" !== e.type) return void (await r(e));
            e.loading = !0;
            const t = await fetch(e.source);
            (e.loading = !1),
              t.ok ||
                (console.error("Error tsParticles - Image not found"),
                (e.error = !0)),
              e.error || (e.svgData = await t.text());
          }),
          (t.replaceImageColor = function (e, t, n, a) {
            var s, l, c;
            const u = (function (e, t, n) {
                const { svgData: r } = e;
                if (!r) return "";
                const a = (0, i.getStyleFromHsl)(t, n);
                if (r.includes("fill")) return r.replace(o, () => a);
                const s = r.indexOf(">");
                return `${r.substring(0, s)} fill="${a}"${r.substring(s)}`;
              })(
                e,
                n,
                null !==
                  (l =
                    null === (s = a.opacity) || void 0 === s
                      ? void 0
                      : s.value) && void 0 !== l
                  ? l
                  : 1
              ),
              d = new Blob([u], { type: "image/svg+xml" }),
              h = URL || window.URL || window.webkitURL || window,
              p = h.createObjectURL(d),
              f = new Image(),
              v = {
                data: Object.assign(Object.assign({}, e), { svgData: u }),
                ratio: t.width / t.height,
                replaceColor:
                  null !== (c = t.replaceColor) && void 0 !== c
                    ? c
                    : t.replace_color,
                source: t.src,
              };
            return (
              f.addEventListener("load", () => {
                const t = a.image;
                t && ((t.loaded = !0), (e.element = f)), h.revokeObjectURL(p);
              }),
              f.addEventListener("error", () => {
                h.revokeObjectURL(p);
                const t = Object.assign(Object.assign({}, e), {
                  error: !1,
                  loading: !0,
                });
                r(t).then(() => {
                  const n = a.image;
                  n && ((e.element = t.element), (n.loaded = !0));
                });
              }),
              (f.src = p),
              v
            );
          });
      },
      3260: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadImageShape = void 0);
        const i = n(9975);
        t.loadImageShape = async function (e) {
          const t = new i.ImageDrawer();
          await e.addShape("image", t), await e.addShape("images", t);
        };
      },
      4364: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LineDrawer = void 0);
        t.LineDrawer = class {
          getSidesCount() {
            return 1;
          }
          draw(e, t, n) {
            e.moveTo(-n / 2, 0), e.lineTo(n / 2, 0);
          }
        };
      },
      7437: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadLineShape = void 0);
        const i = n(4364);
        t.loadLineShape = async function (e) {
          await e.addShape("line", new i.LineDrawer());
        };
      },
      2013: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PolygonDrawer = void 0);
        const i = n(7578);
        class o extends i.PolygonDrawerBase {
          getSidesData(e, t) {
            var n, i;
            const o = e.shapeData,
              r =
                null !==
                  (i =
                    null !==
                      (n = null === o || void 0 === o ? void 0 : o.sides) &&
                    void 0 !== n
                      ? n
                      : null === o || void 0 === o
                      ? void 0
                      : o.nb_sides) && void 0 !== i
                  ? i
                  : 5;
            return {
              count: { denominator: 1, numerator: r },
              length: (2.66 * t) / (r / 3),
            };
          }
          getCenter(e, t) {
            return { x: -t / (this.getSidesCount(e) / 3.5), y: -t / 0.76 };
          }
        }
        t.PolygonDrawer = o;
      },
      7578: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PolygonDrawerBase = void 0);
        t.PolygonDrawerBase = class {
          getSidesCount(e) {
            var t, n;
            const i = e.shapeData;
            return null !==
              (n =
                null !== (t = null === i || void 0 === i ? void 0 : i.sides) &&
                void 0 !== t
                  ? t
                  : null === i || void 0 === i
                  ? void 0
                  : i.nb_sides) && void 0 !== n
              ? n
              : 5;
          }
          draw(e, t, n) {
            const i = this.getCenter(t, n),
              o = this.getSidesData(t, n),
              r = o.count.numerator * o.count.denominator,
              a = o.count.numerator / o.count.denominator,
              s = (180 * (a - 2)) / a,
              l = Math.PI - (Math.PI * s) / 180;
            if (e) {
              e.beginPath(), e.translate(i.x, i.y), e.moveTo(0, 0);
              for (let t = 0; t < r; t++)
                e.lineTo(o.length, 0), e.translate(o.length, 0), e.rotate(l);
            }
          }
        };
      },
      1128: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TriangleDrawer = void 0);
        const i = n(7578);
        class o extends i.PolygonDrawerBase {
          getSidesCount() {
            return 3;
          }
          getSidesData(e, t) {
            return { count: { denominator: 2, numerator: 3 }, length: 2 * t };
          }
          getCenter(e, t) {
            return { x: -t, y: t / 1.66 };
          }
        }
        t.TriangleDrawer = o;
      },
      1206: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadPolygonShape =
            t.loadTriangleShape =
            t.loadGenericPolygonShape =
              void 0);
        const i = n(2013),
          o = n(1128);
        async function r(e) {
          await e.addShape("polygon", new i.PolygonDrawer());
        }
        async function a(e) {
          await e.addShape("triangle", new o.TriangleDrawer());
        }
        (t.loadGenericPolygonShape = r),
          (t.loadTriangleShape = a),
          (t.loadPolygonShape = async function (e) {
            await r(e), await a(e);
          });
      },
      5494: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SquareDrawer = void 0);
        const n = Math.sqrt(2);
        t.SquareDrawer = class {
          getSidesCount() {
            return 4;
          }
          draw(e, t, i) {
            e.rect(-i / n, -i / n, (2 * i) / n, (2 * i) / n);
          }
        };
      },
      8292: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadSquareShape = void 0);
        const i = n(5494);
        t.loadSquareShape = async function (e) {
          const t = new i.SquareDrawer();
          await e.addShape("edge", t), await e.addShape("square", t);
        };
      },
      9865: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.StarDrawer = void 0);
        t.StarDrawer = class {
          getSidesCount(e) {
            var t, n;
            const i = e.shapeData;
            return null !==
              (n =
                null !== (t = null === i || void 0 === i ? void 0 : i.sides) &&
                void 0 !== t
                  ? t
                  : null === i || void 0 === i
                  ? void 0
                  : i.nb_sides) && void 0 !== n
              ? n
              : 5;
          }
          draw(e, t, n) {
            var i;
            const o = t.shapeData,
              r = this.getSidesCount(t),
              a =
                null !== (i = null === o || void 0 === o ? void 0 : o.inset) &&
                void 0 !== i
                  ? i
                  : 2;
            e.moveTo(0, 0 - n);
            for (let s = 0; s < r; s++)
              e.rotate(Math.PI / r),
                e.lineTo(0, 0 - n * a),
                e.rotate(Math.PI / r),
                e.lineTo(0, 0 - n);
          }
        };
      },
      3506: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadStarShape = void 0);
        const i = n(9865);
        t.loadStarShape = async function (e) {
          await e.addShape("star", new i.StarDrawer());
        };
      },
      6259: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TextDrawer = t.validTypes = void 0);
        const i = n(5745);
        t.validTypes = ["text", "character", "char"];
        t.TextDrawer = class {
          getSidesCount() {
            return 12;
          }
          async init(e) {
            const n = e.actualOptions;
            if (
              t.validTypes.find((e) =>
                (0, i.isInArray)(e, n.particles.shape.type)
              )
            ) {
              const e = t.validTypes
                .map((e) => n.particles.shape.options[e])
                .find((e) => !!e);
              if (e instanceof Array) {
                const t = [];
                for (const n of e) t.push((0, i.loadFont)(n));
                await Promise.allSettled(t);
              } else void 0 !== e && (await (0, i.loadFont)(e));
            }
          }
          draw(e, t, n, o) {
            var r, a, s;
            const l = t.shapeData;
            if (void 0 === l) return;
            const c = l.value;
            if (void 0 === c) return;
            const u = t;
            void 0 === u.text &&
              (u.text =
                c instanceof Array
                  ? (0, i.itemFromArray)(c, t.randomIndexData)
                  : c);
            const d = u.text,
              h = null !== (r = l.style) && void 0 !== r ? r : "",
              p = null !== (a = l.weight) && void 0 !== a ? a : "400",
              f = 2 * Math.round(n),
              v = null !== (s = l.font) && void 0 !== s ? s : "Verdana",
              g = t.fill,
              y = (d.length * n) / 2;
            e.font = `${h} ${p} ${f}px "${v}"`;
            const m = { x: -y, y: n / 2 };
            (e.globalAlpha = o),
              g ? e.fillText(d, m.x, m.y) : e.strokeText(d, m.x, m.y),
              (e.globalAlpha = 1);
          }
        };
      },
      826: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadTextShape = void 0);
        const i = n(6259);
        t.loadTextShape = async function (e) {
          const t = new i.TextDrawer();
          for (const n of i.validTypes) await e.addShape(n, t);
        };
      },
      343: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      9172: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      2770: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      1379: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      9433: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      9507: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      2196: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AngleUpdater = void 0);
        const i = n(4407);
        t.AngleUpdater = class {
          constructor(e) {
            this.container = e;
          }
          init(e) {
            const t = e.options.rotate;
            e.rotate = {
              enable: t.animation.enable,
              value: ((0, i.getRangeValue)(t.value) * Math.PI) / 180,
            };
            let n = t.direction;
            if ("random" === n) {
              n =
                Math.floor(2 * Math.random()) > 0
                  ? "counter-clockwise"
                  : "clockwise";
            }
            switch (n) {
              case "counter-clockwise":
              case "counterClockwise":
                e.rotate.status = 1;
                break;
              case "clockwise":
                e.rotate.status = 0;
            }
            const o = e.options.rotate.animation;
            o.enable &&
              ((e.rotate.velocity =
                ((0, i.getRangeValue)(o.speed) / 360) *
                this.container.retina.reduceFactor),
              o.sync || (e.rotate.velocity *= Math.random()));
          }
          isEnabled(e) {
            const t = e.options.rotate,
              n = t.animation;
            return !e.destroyed && !e.spawning && !t.path && n.enable;
          }
          update(e, t) {
            this.isEnabled(e) &&
              (function (e, t) {
                var n;
                const i = e.rotate;
                if (!i) return;
                const o = e.options.rotate.animation,
                  r =
                    (null !== (n = i.velocity) && void 0 !== n ? n : 0) *
                    t.factor,
                  a = 2 * Math.PI;
                o.enable &&
                  (0 === i.status
                    ? ((i.value += r), i.value > a && (i.value -= a))
                    : ((i.value -= r), i.value < 0 && (i.value += a)));
              })(e, t);
          }
        };
      },
      7067: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadAngleUpdater = void 0);
        const i = n(2196);
        t.loadAngleUpdater = async function (e) {
          await e.addParticleUpdater("angle", (e) => new i.AngleUpdater(e));
        };
      },
      2257: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ColorUpdater = void 0);
        const i = n(6923),
          o = n(4407);
        function r(e, t, n, i, r) {
          var a;
          const s = t;
          if (!s || !n.enable) return;
          const l = (0, o.randomInRange)(n.offset),
            c =
              (null !== (a = t.velocity) && void 0 !== a ? a : 0) * e.factor +
              3.6 * l;
          r && 0 !== s.status
            ? ((s.value -= c),
              s.value < 0 && ((s.status = 0), (s.value += s.value)))
            : ((s.value += c),
              r && s.value > i && ((s.status = 1), (s.value -= s.value % i))),
            s.value > i && (s.value %= i);
        }
        t.ColorUpdater = class {
          constructor(e) {
            this.container = e;
          }
          init(e) {
            const t = (0, i.colorToHsl)(
              e.options.color,
              e.id,
              e.options.reduceDuplicates
            );
            t &&
              (e.color = (0, i.getHslAnimationFromHsl)(
                t,
                e.options.color.animation,
                this.container.retina.reduceFactor
              ));
          }
          isEnabled(e) {
            var t, n, i;
            const o = e.options.color.animation;
            return (
              !e.destroyed &&
              !e.spawning &&
              ((void 0 !==
                (null === (t = e.color) || void 0 === t ? void 0 : t.h.value) &&
                o.h.enable) ||
                (void 0 !==
                  (null === (n = e.color) || void 0 === n
                    ? void 0
                    : n.s.value) &&
                  o.s.enable) ||
                (void 0 !==
                  (null === (i = e.color) || void 0 === i
                    ? void 0
                    : i.l.value) &&
                  o.l.enable))
            );
          }
          update(e, t) {
            !(function (e, t) {
              var n, i, o;
              const a = e.options.color.animation;
              void 0 !==
                (null === (n = e.color) || void 0 === n ? void 0 : n.h) &&
                r(t, e.color.h, a.h, 360, !1),
                void 0 !==
                  (null === (i = e.color) || void 0 === i ? void 0 : i.s) &&
                  r(t, e.color.s, a.s, 100, !0),
                void 0 !==
                  (null === (o = e.color) || void 0 === o ? void 0 : o.l) &&
                  r(t, e.color.l, a.l, 100, !0);
            })(e, t);
          }
        };
      },
      2464: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadColorUpdater = void 0);
        const i = n(2257);
        t.loadColorUpdater = async function (e) {
          await e.addParticleUpdater("color", (e) => new i.ColorUpdater(e));
        };
      },
      9354: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LifeUpdater = void 0);
        const i = n(4407);
        t.LifeUpdater = class {
          constructor(e) {
            this.container = e;
          }
          init() {}
          isEnabled(e) {
            return !e.destroyed;
          }
          update(e, t) {
            if (!this.isEnabled(e)) return;
            const n = e.life;
            let o = !1;
            if (e.spawning) {
              if (((n.delayTime += t.value), !(n.delayTime >= e.life.delay)))
                return;
              (o = !0), (e.spawning = !1), (n.delayTime = 0), (n.time = 0);
            }
            if (-1 === n.duration) return;
            if (e.spawning) return;
            if ((o ? (n.time = 0) : (n.time += t.value), n.time < n.duration))
              return;
            if (
              ((n.time = 0),
              e.life.count > 0 && e.life.count--,
              0 === e.life.count)
            )
              return void e.destroy();
            const r = this.container.canvas.size,
              a = (0, i.setRangeValue)(0, r.width),
              s = (0, i.setRangeValue)(0, r.width);
            (e.position.x = (0, i.randomInRange)(a)),
              (e.position.y = (0, i.randomInRange)(s)),
              (e.spawning = !0),
              (n.delayTime = 0),
              (n.time = 0),
              e.reset();
            const l = e.options.life;
            (n.delay = 1e3 * (0, i.getRangeValue)(l.delay.value)),
              (n.duration = 1e3 * (0, i.getRangeValue)(l.duration.value));
          }
        };
      },
      5946: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadLifeUpdater = void 0);
        const i = n(9354);
        t.loadLifeUpdater = async function (e) {
          await e.addParticleUpdater("life", (e) => new i.LifeUpdater(e));
        };
      },
      4973: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.OpacityUpdater = void 0);
        const i = n(4407);
        t.OpacityUpdater = class {
          constructor(e) {
            this.container = e;
          }
          init(e) {
            const t = e.options.opacity;
            e.opacity = {
              enable: t.animation.enable,
              max: (0, i.getRangeMax)(t.value),
              min: (0, i.getRangeMin)(t.value),
              value: (0, i.getRangeValue)(t.value),
              loops: 0,
              maxLoops: (0, i.getRangeValue)(t.animation.count),
            };
            const n = t.animation;
            if (n.enable) {
              e.opacity.status = 0;
              const o = t.value;
              switch (
                ((e.opacity.min = (0, i.getRangeMin)(o)),
                (e.opacity.max = (0, i.getRangeMax)(o)),
                n.startValue)
              ) {
                case "min":
                  (e.opacity.value = e.opacity.min), (e.opacity.status = 0);
                  break;
                case "random":
                  (e.opacity.value = (0, i.randomInRange)(e.opacity)),
                    (e.opacity.status = Math.random() >= 0.5 ? 0 : 1);
                  break;
                default:
                  (e.opacity.value = e.opacity.max), (e.opacity.status = 1);
              }
              (e.opacity.velocity =
                ((0, i.getRangeValue)(n.speed) / 100) *
                this.container.retina.reduceFactor),
                n.sync || (e.opacity.velocity *= Math.random());
            }
          }
          isEnabled(e) {
            var t, n, i, o;
            return (
              !e.destroyed &&
              !e.spawning &&
              !!e.opacity &&
              e.opacity.enable &&
              ((null !== (t = e.opacity.maxLoops) && void 0 !== t ? t : 0) <=
                0 ||
                ((null !== (n = e.opacity.maxLoops) && void 0 !== n ? n : 0) >
                  0 &&
                  (null !== (i = e.opacity.loops) && void 0 !== i ? i : 0) <
                    (null !== (o = e.opacity.maxLoops) && void 0 !== o
                      ? o
                      : 0)))
            );
          }
          update(e, t) {
            this.isEnabled(e) &&
              (function (e, t) {
                var n, o, r, a, s;
                if (!e.opacity) return;
                const l = e.opacity.min,
                  c = e.opacity.max;
                if (
                  !(
                    e.destroyed ||
                    !e.opacity.enable ||
                    ((null !== (n = e.opacity.maxLoops) && void 0 !== n
                      ? n
                      : 0) > 0 &&
                      (null !== (o = e.opacity.loops) && void 0 !== o ? o : 0) >
                        (null !== (r = e.opacity.maxLoops) && void 0 !== r
                          ? r
                          : 0))
                  )
                ) {
                  switch (e.opacity.status) {
                    case 0:
                      e.opacity.value >= c
                        ? ((e.opacity.status = 1),
                          e.opacity.loops || (e.opacity.loops = 0),
                          e.opacity.loops++)
                        : (e.opacity.value +=
                            (null !== (a = e.opacity.velocity) && void 0 !== a
                              ? a
                              : 0) * t.factor);
                      break;
                    case 1:
                      e.opacity.value <= l
                        ? ((e.opacity.status = 0),
                          e.opacity.loops || (e.opacity.loops = 0),
                          e.opacity.loops++)
                        : (e.opacity.value -=
                            (null !== (s = e.opacity.velocity) && void 0 !== s
                              ? s
                              : 0) * t.factor);
                  }
                  !(function (e, t, n, i) {
                    switch (e.options.opacity.animation.destroy) {
                      case "max":
                        t >= i && e.destroy();
                        break;
                      case "min":
                        t <= n && e.destroy();
                    }
                  })(e, e.opacity.value, l, c),
                    e.destroyed ||
                      (e.opacity.value = (0, i.clamp)(e.opacity.value, l, c));
                }
              })(e, t);
          }
        };
      },
      554: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadOpacityUpdater = void 0);
        const i = n(4973);
        t.loadOpacityUpdater = async function (e) {
          await e.addParticleUpdater("opacity", (e) => new i.OpacityUpdater(e));
        };
      },
      487: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.OutOfCanvasUpdater = void 0);
        const i = n(3048),
          o = n(5745);
        t.OutOfCanvasUpdater = class {
          constructor(e) {
            this.container = e;
          }
          init() {}
          isEnabled(e) {
            return !e.destroyed && !e.spawning;
          }
          update(e, t) {
            var n, i, o, r;
            const a = e.options.move.outModes;
            this.updateOutMode(
              e,
              t,
              null !== (n = a.bottom) && void 0 !== n ? n : a.default,
              "bottom"
            ),
              this.updateOutMode(
                e,
                t,
                null !== (i = a.left) && void 0 !== i ? i : a.default,
                "left"
              ),
              this.updateOutMode(
                e,
                t,
                null !== (o = a.right) && void 0 !== o ? o : a.default,
                "right"
              ),
              this.updateOutMode(
                e,
                t,
                null !== (r = a.top) && void 0 !== r ? r : a.default,
                "top"
              );
          }
          updateOutMode(e, t, n, i) {
            switch (n) {
              case "bounce":
              case "bounce-vertical":
              case "bounce-horizontal":
              case "bounceVertical":
              case "bounceHorizontal":
              case "split":
                this.bounce(e, t, i, n);
                break;
              case "destroy":
                this.destroy(e, i);
                break;
              case "out":
                this.out(e, i);
                break;
              default:
                this.none(e, i);
            }
          }
          destroy(e, t) {
            const n = this.container;
            (0, o.isPointInside)(e.position, n.canvas.size, e.getRadius(), t) ||
              n.particles.remove(e, void 0, !0);
          }
          out(e, t) {
            const n = this.container;
            if (
              (0, o.isPointInside)(e.position, n.canvas.size, e.getRadius(), t)
            )
              return;
            const i = e.options.move.warp,
              r = n.canvas.size,
              a = {
                bottom: r.height + e.getRadius() + e.offset.y,
                left: -e.getRadius() - e.offset.x,
                right: r.width + e.getRadius() + e.offset.x,
                top: -e.getRadius() - e.offset.y,
              },
              s = e.getRadius(),
              l = (0, o.calculateBounds)(e.position, s);
            "right" === t && l.left > r.width + e.offset.x
              ? ((e.position.x = a.left),
                (e.initialPosition.x = e.position.x),
                i ||
                  ((e.position.y = Math.random() * r.height),
                  (e.initialPosition.y = e.position.y)))
              : "left" === t &&
                l.right < -e.offset.x &&
                ((e.position.x = a.right),
                (e.initialPosition.x = e.position.x),
                i ||
                  ((e.position.y = Math.random() * r.height),
                  (e.initialPosition.y = e.position.y))),
              "bottom" === t && l.top > r.height + e.offset.y
                ? (i ||
                    ((e.position.x = Math.random() * r.width),
                    (e.initialPosition.x = e.position.x)),
                  (e.position.y = a.top),
                  (e.initialPosition.y = e.position.y))
                : "top" === t &&
                  l.bottom < -e.offset.y &&
                  (i ||
                    ((e.position.x = Math.random() * r.width),
                    (e.initialPosition.x = e.position.x)),
                  (e.position.y = a.bottom),
                  (e.initialPosition.y = e.position.y));
          }
          bounce(e, t, n, r) {
            const a = this.container;
            let s = !1;
            for (const [, i] of a.plugins)
              if (
                (void 0 !== i.particleBounce && (s = i.particleBounce(e, t, n)),
                s)
              )
                break;
            if (s) return;
            const l = e.getPosition(),
              c = e.offset,
              u = e.getRadius(),
              d = (0, o.calculateBounds)(l, u),
              h = a.canvas.size;
            (0, i.bounceHorizontal)({
              particle: e,
              outMode: r,
              direction: n,
              bounds: d,
              canvasSize: h,
              offset: c,
              size: u,
            }),
              (0, i.bounceVertical)({
                particle: e,
                outMode: r,
                direction: n,
                bounds: d,
                canvasSize: h,
                offset: c,
                size: u,
              });
          }
          none(e, t) {
            if (
              (e.options.move.distance.horizontal &&
                ("left" === t || "right" === t)) ||
              (e.options.move.distance.vertical &&
                ("top" === t || "bottom" === t))
            )
              return;
            const n = e.options.move.gravity,
              i = this.container,
              r = i.canvas.size,
              a = e.getRadius();
            if (n.enable) {
              const o = e.position;
              ((!n.inverse && o.y > r.height + a && "bottom" === t) ||
                (n.inverse && o.y < -a && "top" === t)) &&
                i.particles.remove(e);
            } else {
              if (
                (e.velocity.y > 0 && e.position.y <= r.height + a) ||
                (e.velocity.y < 0 && e.position.y >= -a) ||
                (e.velocity.x > 0 && e.position.x <= r.width + a) ||
                (e.velocity.x < 0 && e.position.x >= -a)
              )
                return;
              (0, o.isPointInside)(e.position, i.canvas.size, a, t) ||
                i.particles.remove(e);
            }
          }
        };
      },
      3048: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.bounceVertical = t.bounceHorizontal = void 0);
        const i = n(4407);
        (t.bounceHorizontal = function (e) {
          if (
            "bounce" !== e.outMode &&
            "bounce-horizontal" !== e.outMode &&
            "bounceHorizontal" !== e.outMode &&
            "split" !== e.outMode
          )
            return;
          const t = e.particle.velocity.x;
          let n = !1;
          if (
            ("right" === e.direction &&
              e.bounds.right >= e.canvasSize.width &&
              t > 0) ||
            ("left" === e.direction && e.bounds.left <= 0 && t < 0)
          ) {
            const t = (0, i.getRangeValue)(
              e.particle.options.bounce.horizontal.value
            );
            (e.particle.velocity.x *= -t), (n = !0);
          }
          if (!n) return;
          const o = e.offset.x + e.size;
          e.bounds.right >= e.canvasSize.width
            ? (e.particle.position.x = e.canvasSize.width - o)
            : e.bounds.left <= 0 && (e.particle.position.x = o),
            "split" === e.outMode && e.particle.destroy();
        }),
          (t.bounceVertical = function (e) {
            if (
              "bounce" === e.outMode ||
              "bounce-vertical" === e.outMode ||
              "bounceVertical" === e.outMode ||
              "split" === e.outMode
            ) {
              const t = e.particle.velocity.y;
              let n = !1;
              if (
                ("bottom" === e.direction &&
                  e.bounds.bottom >= e.canvasSize.height &&
                  t > 0) ||
                ("top" === e.direction && e.bounds.top <= 0 && t < 0)
              ) {
                const t = (0, i.getRangeValue)(
                  e.particle.options.bounce.vertical.value
                );
                (e.particle.velocity.y *= -t), (n = !0);
              }
              if (!n) return;
              const o = e.offset.y + e.size;
              e.bounds.bottom >= e.canvasSize.height
                ? (e.particle.position.y = e.canvasSize.height - o)
                : e.bounds.top <= 0 && (e.particle.position.y = o),
                "split" === e.outMode && e.particle.destroy();
            }
          });
      },
      7211: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadOutModesUpdater = void 0);
        const i = n(487);
        t.loadOutModesUpdater = async function (e) {
          await e.addParticleUpdater(
            "outModes",
            (e) => new i.OutOfCanvasUpdater(e)
          );
        };
      },
      9732: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.RollUpdater = void 0);
        const i = n(6923),
          o = n(4407);
        t.RollUpdater = class {
          init(e) {
            const t = e.options.roll;
            if (t.enable)
              if (
                ((e.roll = {
                  angle: Math.random() * Math.PI * 2,
                  speed: (0, o.getRangeValue)(t.speed) / 360,
                }),
                t.backColor)
              )
                e.backColor = (0, i.colorToHsl)(t.backColor);
              else if (t.darken.enable && t.enlighten.enable) {
                const n = Math.random() >= 0.5 ? "darken" : "enlighten";
                e.roll.alter = {
                  type: n,
                  value: (0, o.getRangeValue)(
                    "darken" === n ? t.darken.value : t.enlighten.value
                  ),
                };
              } else
                t.darken.enable
                  ? (e.roll.alter = {
                      type: "darken",
                      value: (0, o.getRangeValue)(t.darken.value),
                    })
                  : t.enlighten.enable &&
                    (e.roll.alter = {
                      type: "enlighten",
                      value: (0, o.getRangeValue)(t.enlighten.value),
                    });
            else e.roll = { angle: 0, speed: 0 };
          }
          isEnabled(e) {
            const t = e.options.roll;
            return !e.destroyed && !e.spawning && t.enable;
          }
          update(e, t) {
            this.isEnabled(e) &&
              (function (e, t) {
                const n = e.options.roll;
                if (!e.roll || !n.enable) return;
                const i = e.roll.speed * t.factor,
                  o = 2 * Math.PI;
                (e.roll.angle += i), e.roll.angle > o && (e.roll.angle -= o);
              })(e, t);
          }
        };
      },
      4209: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadRollUpdater = void 0);
        const i = n(9732);
        t.loadRollUpdater = async function (e) {
          await e.addParticleUpdater("roll", () => new i.RollUpdater());
        };
      },
      1479: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SizeUpdater = void 0);
        const i = n(4407);
        t.SizeUpdater = class {
          init() {}
          isEnabled(e) {
            var t, n, i, o;
            return (
              !e.destroyed &&
              !e.spawning &&
              e.size.enable &&
              ((null !== (t = e.size.maxLoops) && void 0 !== t ? t : 0) <= 0 ||
                ((null !== (n = e.size.maxLoops) && void 0 !== n ? n : 0) > 0 &&
                  (null !== (i = e.size.loops) && void 0 !== i ? i : 0) <
                    (null !== (o = e.size.maxLoops) && void 0 !== o ? o : 0)))
            );
          }
          update(e, t) {
            this.isEnabled(e) &&
              (function (e, t) {
                var n, o, r, a;
                const s =
                    (null !== (n = e.size.velocity) && void 0 !== n ? n : 0) *
                    t.factor,
                  l = e.size.min,
                  c = e.size.max;
                if (
                  !(
                    e.destroyed ||
                    !e.size.enable ||
                    ((null !== (o = e.size.maxLoops) && void 0 !== o ? o : 0) >
                      0 &&
                      (null !== (r = e.size.loops) && void 0 !== r ? r : 0) >
                        (null !== (a = e.size.maxLoops) && void 0 !== a
                          ? a
                          : 0))
                  )
                ) {
                  switch (e.size.status) {
                    case 0:
                      e.size.value >= c
                        ? ((e.size.status = 1),
                          e.size.loops || (e.size.loops = 0),
                          e.size.loops++)
                        : (e.size.value += s);
                      break;
                    case 1:
                      e.size.value <= l
                        ? ((e.size.status = 0),
                          e.size.loops || (e.size.loops = 0),
                          e.size.loops++)
                        : (e.size.value -= s);
                  }
                  !(function (e, t, n, i) {
                    switch (e.options.size.animation.destroy) {
                      case "max":
                        t >= i && e.destroy();
                        break;
                      case "min":
                        t <= n && e.destroy();
                    }
                  })(e, e.size.value, l, c),
                    e.destroyed ||
                      (e.size.value = (0, i.clamp)(e.size.value, l, c));
                }
              })(e, t);
          }
        };
      },
      5426: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadSizeUpdater = void 0);
        const i = n(1479);
        t.loadSizeUpdater = async function (e) {
          await e.addParticleUpdater("size", () => new i.SizeUpdater());
        };
      },
      8978: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.StrokeColorUpdater = void 0);
        const i = n(6923),
          o = n(5745),
          r = n(4407);
        function a(e, t, n, i, o) {
          var a;
          const s = t;
          if (!s || !s.enable) return;
          const l = (0, r.randomInRange)(n.offset),
            c =
              (null !== (a = t.velocity) && void 0 !== a ? a : 0) * e.factor +
              3.6 * l;
          o && 0 !== s.status
            ? ((s.value -= c),
              s.value < 0 && ((s.status = 0), (s.value += s.value)))
            : ((s.value += c),
              o && s.value > i && ((s.status = 1), (s.value -= s.value % i))),
            s.value > i && (s.value %= i);
        }
        t.StrokeColorUpdater = class {
          constructor(e) {
            this.container = e;
          }
          init(e) {
            var t, n;
            const r = this.container;
            (e.stroke =
              e.options.stroke instanceof Array
                ? (0, o.itemFromArray)(
                    e.options.stroke,
                    e.id,
                    e.options.reduceDuplicates
                  )
                : e.options.stroke),
              (e.strokeWidth = e.stroke.width * r.retina.pixelRatio);
            const a =
              null !== (t = (0, i.colorToHsl)(e.stroke.color)) && void 0 !== t
                ? t
                : e.getFillColor();
            a &&
              (e.strokeColor = (0, i.getHslAnimationFromHsl)(
                a,
                null === (n = e.stroke.color) || void 0 === n
                  ? void 0
                  : n.animation,
                r.retina.reduceFactor
              ));
          }
          isEnabled(e) {
            var t, n, i, o;
            const r =
              null === (t = e.stroke) || void 0 === t ? void 0 : t.color;
            return (
              !e.destroyed &&
              !e.spawning &&
              !!r &&
              ((void 0 !==
                (null === (n = e.strokeColor) || void 0 === n
                  ? void 0
                  : n.h.value) &&
                r.animation.h.enable) ||
                (void 0 !==
                  (null === (i = e.strokeColor) || void 0 === i
                    ? void 0
                    : i.s.value) &&
                  r.animation.s.enable) ||
                (void 0 !==
                  (null === (o = e.strokeColor) || void 0 === o
                    ? void 0
                    : o.l.value) &&
                  r.animation.l.enable))
            );
          }
          update(e, t) {
            this.isEnabled(e) &&
              (function (e, t) {
                var n, i, o, r, s, l, c, u, d, h;
                if (
                  !(null === (n = e.stroke) || void 0 === n ? void 0 : n.color)
                )
                  return;
                const p = e.stroke.color.animation,
                  f =
                    null !==
                      (o =
                        null === (i = e.strokeColor) || void 0 === i
                          ? void 0
                          : i.h) && void 0 !== o
                      ? o
                      : null === (r = e.color) || void 0 === r
                      ? void 0
                      : r.h;
                f && a(t, f, p.h, 360, !1);
                const v =
                  null !==
                    (l =
                      null === (s = e.strokeColor) || void 0 === s
                        ? void 0
                        : s.s) && void 0 !== l
                    ? l
                    : null === (c = e.color) || void 0 === c
                    ? void 0
                    : c.s;
                v && a(t, v, p.s, 100, !0);
                const g =
                  null !==
                    (d =
                      null === (u = e.strokeColor) || void 0 === u
                        ? void 0
                        : u.l) && void 0 !== d
                    ? d
                    : null === (h = e.color) || void 0 === h
                    ? void 0
                    : h.l;
                g && a(t, g, p.l, 100, !0);
              })(e, t);
          }
        };
      },
      8911: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadStrokeColorUpdater = void 0);
        const i = n(8978);
        t.loadStrokeColorUpdater = async function (e) {
          await e.addParticleUpdater(
            "strokeColor",
            (e) => new i.StrokeColorUpdater(e)
          );
        };
      },
      147: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TiltUpdater = void 0);
        const i = n(4407);
        t.TiltUpdater = class {
          constructor(e) {
            this.container = e;
          }
          init(e) {
            const t = e.options.tilt;
            e.tilt = {
              enable: t.enable,
              value: ((0, i.getRangeValue)(t.value) * Math.PI) / 180,
              sinDirection: Math.random() >= 0.5 ? 1 : -1,
              cosDirection: Math.random() >= 0.5 ? 1 : -1,
            };
            let n = t.direction;
            if ("random" === n) {
              n =
                Math.floor(2 * Math.random()) > 0
                  ? "counter-clockwise"
                  : "clockwise";
            }
            switch (n) {
              case "counter-clockwise":
              case "counterClockwise":
                e.tilt.status = 1;
                break;
              case "clockwise":
                e.tilt.status = 0;
            }
            const o = e.options.tilt.animation;
            o.enable &&
              ((e.tilt.velocity =
                ((0, i.getRangeValue)(o.speed) / 360) *
                this.container.retina.reduceFactor),
              o.sync || (e.tilt.velocity *= Math.random()));
          }
          isEnabled(e) {
            const t = e.options.tilt.animation;
            return !e.destroyed && !e.spawning && t.enable;
          }
          update(e, t) {
            this.isEnabled(e) &&
              (function (e, t) {
                var n;
                if (!e.tilt) return;
                const i = e.options.tilt.animation,
                  o =
                    (null !== (n = e.tilt.velocity) && void 0 !== n ? n : 0) *
                    t.factor,
                  r = 2 * Math.PI;
                i.enable &&
                  (0 === e.tilt.status
                    ? ((e.tilt.value += o),
                      e.tilt.value > r && (e.tilt.value -= r))
                    : ((e.tilt.value -= o),
                      e.tilt.value < 0 && (e.tilt.value += r)));
              })(e, t);
          }
        };
      },
      2660: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadTiltUpdater = void 0);
        const i = n(147);
        t.loadTiltUpdater = async function (e) {
          await e.addParticleUpdater("tilt", (e) => new i.TiltUpdater(e));
        };
      },
      9284: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TwinkleUpdater = void 0);
        const i = n(6923),
          o = n(4407);
        t.TwinkleUpdater = class {
          getColorStyles(e, t, n, r) {
            const a = e.options.twinkle.particles,
              s = a.enable && Math.random() < a.frequency,
              l = e.options.zIndex,
              c = (1 - e.zIndexFactor) ** l.opacityRate,
              u = s ? (0, o.getRangeValue)(a.opacity) * c : r,
              d = (0, i.colorToHsl)(a.color),
              h = d ? (0, i.getStyleFromHsl)(d, u) : void 0,
              p = {},
              f = s && h;
            return (p.fill = f ? h : void 0), (p.stroke = f ? h : void 0), p;
          }
          init() {}
          isEnabled(e) {
            return e.options.twinkle.particles.enable;
          }
          update() {}
        };
      },
      3518: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadTwinkleUpdater = void 0);
        const i = n(9284);
        t.loadTwinkleUpdater = async function (e) {
          await e.addParticleUpdater("twinkle", () => new i.TwinkleUpdater());
        };
      },
      5770: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.WobbleUpdater = void 0);
        const i = n(4407);
        t.WobbleUpdater = class {
          constructor(e) {
            this.container = e;
          }
          init(e) {
            const t = e.options.wobble;
            t.enable
              ? (e.wobble = {
                  angle: Math.random() * Math.PI * 2,
                  speed: (0, i.getRangeValue)(t.speed) / 360,
                })
              : (e.wobble = { angle: 0, speed: 0 }),
              (e.retina.wobbleDistance =
                (0, i.getRangeValue)(t.distance) *
                this.container.retina.pixelRatio);
          }
          isEnabled(e) {
            return !e.destroyed && !e.spawning && e.options.wobble.enable;
          }
          update(e, t) {
            this.isEnabled(e) &&
              (function (e, t) {
                var n;
                if (!e.options.wobble.enable || !e.wobble) return;
                const i = e.wobble.speed * t.factor,
                  o =
                    ((null !== (n = e.retina.wobbleDistance) && void 0 !== n
                      ? n
                      : 0) *
                      t.factor) /
                    (1e3 / 60),
                  r = 2 * Math.PI;
                (e.wobble.angle += i),
                  e.wobble.angle > r && (e.wobble.angle -= r),
                  (e.position.x += o * Math.cos(e.wobble.angle)),
                  (e.position.y += o * Math.abs(Math.sin(e.wobble.angle)));
              })(e, t);
          }
        };
      },
      2317: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadWobbleUpdater = void 0);
        const i = n(5770);
        t.loadWobbleUpdater = async function (e) {
          await e.addParticleUpdater("wobble", (e) => new i.WobbleUpdater(e));
        };
      },
      233: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.alterHsl =
            t.drawEllipse =
            t.drawParticlePlugin =
            t.drawPlugin =
            t.drawShapeAfterEffect =
            t.drawShape =
            t.drawParticle =
            t.drawGrabLine =
            t.gradient =
            t.drawConnectLine =
            t.drawLinkTriangle =
            t.drawLinkLine =
            t.clear =
            t.paintBase =
              void 0);
        const i = n(6923),
          o = n(4407);
        function r(e, t, n) {
          e.beginPath(), e.moveTo(t.x, t.y), e.lineTo(n.x, n.y), e.closePath();
        }
        function a(e, t, n, i, o, r) {
          if (!n.shape) return;
          const a = e.drawers.get(n.shape);
          a && a.draw(t, n, i, o, r, e.retina.pixelRatio);
        }
        function s(e, t, n, i, o, r) {
          if (!n.shape) return;
          const a = e.drawers.get(n.shape);
          (null === a || void 0 === a ? void 0 : a.afterEffect) &&
            a.afterEffect(t, n, i, o, r, e.retina.pixelRatio);
        }
        (t.paintBase = function (e, t, n) {
          e.save(),
            (e.fillStyle = null !== n && void 0 !== n ? n : "rgba(0,0,0,0)"),
            e.fillRect(0, 0, t.width, t.height),
            e.restore();
        }),
          (t.clear = function (e, t) {
            e.clearRect(0, 0, t.width, t.height);
          }),
          (t.drawLinkLine = function (e, t, n, a, s, l, c, u, d, h, p, f) {
            let v = !1;
            if ((0, o.getDistance)(n, a) <= s) r(e, n, a), (v = !0);
            else if (c) {
              let t, i;
              const c = { x: a.x - l.width, y: a.y },
                u = (0, o.getDistances)(n, c);
              if (u.distance <= s) {
                const e = n.y - (u.dy / u.dx) * n.x;
                (t = { x: 0, y: e }), (i = { x: l.width, y: e });
              } else {
                const e = { x: a.x, y: a.y - l.height },
                  r = (0, o.getDistances)(n, e);
                if (r.distance <= s) {
                  const e = -(n.y - (r.dy / r.dx) * n.x) / (r.dy / r.dx);
                  (t = { x: e, y: 0 }), (i = { x: e, y: l.height });
                } else {
                  const e = { x: a.x - l.width, y: a.y - l.height },
                    r = (0, o.getDistances)(n, e);
                  if (r.distance <= s) {
                    const e = n.y - (r.dy / r.dx) * n.x;
                    (t = { x: -e / (r.dy / r.dx), y: e }),
                      (i = { x: t.x + l.width, y: t.y + l.height });
                  }
                }
              }
              t && i && (r(e, n, t), r(e, a, i), (v = !0));
            }
            if (v) {
              if (
                ((e.lineWidth = t),
                u && (e.globalCompositeOperation = d),
                (e.strokeStyle = (0, i.getStyleFromRgb)(h, p)),
                f.enable)
              ) {
                const t = (0, i.colorToRgb)(f.color);
                t &&
                  ((e.shadowBlur = f.blur),
                  (e.shadowColor = (0, i.getStyleFromRgb)(t)));
              }
              e.stroke();
            }
          }),
          (t.drawLinkTriangle = function (e, t, n, o, r, a, s, l) {
            !(function (e, t, n, i) {
              e.beginPath(),
                e.moveTo(t.x, t.y),
                e.lineTo(n.x, n.y),
                e.lineTo(i.x, i.y),
                e.closePath();
            })(e, t, n, o),
              r && (e.globalCompositeOperation = a),
              (e.fillStyle = (0, i.getStyleFromRgb)(s, l)),
              e.fill();
          }),
          (t.drawConnectLine = function (e, t, n, i, o) {
            e.save(),
              r(e, i, o),
              (e.lineWidth = t),
              (e.strokeStyle = n),
              e.stroke(),
              e.restore();
          }),
          (t.gradient = function (e, t, n, o) {
            const r = Math.floor(n.getRadius() / t.getRadius()),
              a = t.getFillColor(),
              s = n.getFillColor();
            if (!a || !s) return;
            const l = t.getPosition(),
              c = n.getPosition(),
              u = (0, i.colorMix)(a, s, t.getRadius(), n.getRadius()),
              d = e.createLinearGradient(l.x, l.y, c.x, c.y);
            return (
              d.addColorStop(0, (0, i.getStyleFromHsl)(a, o)),
              d.addColorStop(r > 1 ? 1 : r, (0, i.getStyleFromRgb)(u, o)),
              d.addColorStop(1, (0, i.getStyleFromHsl)(s, o)),
              d
            );
          }),
          (t.drawGrabLine = function (e, t, n, o, a, s) {
            e.save(),
              r(e, n, o),
              (e.strokeStyle = (0, i.getStyleFromRgb)(a, s)),
              (e.lineWidth = t),
              e.stroke(),
              e.restore();
          }),
          (t.drawParticle = function (e, t, n, o, r, l, c, u, d, h) {
            var p, f, v, g;
            const y = n.getPosition(),
              m = n.options.tilt,
              b = n.options.roll;
            if ((t.save(), m.enable || b.enable)) {
              const e = b.enable && n.roll,
                i = m.enable && n.tilt,
                o = e && ("horizontal" === b.mode || "both" === b.mode),
                r = e && ("vertical" === b.mode || "both" === b.mode);
              t.setTransform(
                o ? Math.cos(n.roll.angle) : 1,
                i ? Math.cos(n.tilt.value) * n.tilt.cosDirection : 0,
                i ? Math.sin(n.tilt.value) * n.tilt.sinDirection : 0,
                r ? Math.sin(n.roll.angle) : 1,
                y.x,
                y.y
              );
            } else t.translate(y.x, y.y);
            t.beginPath();
            const w =
              (null !==
                (f =
                  null === (p = n.rotate) || void 0 === p ? void 0 : p.value) &&
              void 0 !== f
                ? f
                : 0) + (n.options.rotate.path ? n.velocity.angle : 0);
            0 !== w && t.rotate(w), l && (t.globalCompositeOperation = c);
            const S = n.shadowColor;
            h.enable &&
              S &&
              ((t.shadowBlur = h.blur),
              (t.shadowColor = (0, i.getStyleFromRgb)(S)),
              (t.shadowOffsetX = h.offset.x),
              (t.shadowOffsetY = h.offset.y)),
              r.fill && (t.fillStyle = r.fill);
            const _ = n.stroke;
            (t.lineWidth =
              null !== (v = n.strokeWidth) && void 0 !== v ? v : 0),
              r.stroke && (t.strokeStyle = r.stroke),
              a(e, t, n, u, d, o),
              (null !== (g = null === _ || void 0 === _ ? void 0 : _.width) &&
              void 0 !== g
                ? g
                : 0) > 0 && t.stroke(),
              n.close && t.closePath(),
              n.fill && t.fill(),
              t.restore(),
              t.save(),
              m.enable && n.tilt
                ? t.setTransform(
                    1,
                    Math.cos(n.tilt.value) * n.tilt.cosDirection,
                    Math.sin(n.tilt.value) * n.tilt.sinDirection,
                    1,
                    y.x,
                    y.y
                  )
                : t.translate(y.x, y.y),
              0 !== w && t.rotate(w),
              l && (t.globalCompositeOperation = c),
              s(e, t, n, u, d, o),
              t.restore();
          }),
          (t.drawShape = a),
          (t.drawShapeAfterEffect = s),
          (t.drawPlugin = function (e, t, n) {
            t.draw && (e.save(), t.draw(e, n), e.restore());
          }),
          (t.drawParticlePlugin = function (e, t, n, i) {
            t.drawParticle && (e.save(), t.drawParticle(e, n, i), e.restore());
          }),
          (t.drawEllipse = function (e, t, n, o, r, a, s, l, c) {
            if (a <= 0) return;
            const u = t.getPosition();
            n && (e.strokeStyle = (0, i.getStyleFromHsl)(n, r)),
              (e.lineWidth = a);
            const d = (s * Math.PI) / 180;
            e.beginPath(),
              e.ellipse(u.x, u.y, o / 2, 2 * o, d, l, c),
              e.stroke();
          }),
          (t.alterHsl = function (e, t, n) {
            return { h: e.h, s: e.s, l: e.l + ("darken" === t ? -1 : 1) * n };
          });
      },
      6923: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getHslAnimationFromHsl =
            t.getHslFromAnimation =
            t.getLinkRandomColor =
            t.getLinkColor =
            t.colorMix =
            t.getStyleFromHsv =
            t.getStyleFromHsl =
            t.getStyleFromRgb =
            t.getRandomRgbColor =
            t.rgbaToHsva =
            t.rgbToHsv =
            t.hsvaToRgba =
            t.hsvToRgb =
            t.hsvaToHsla =
            t.hsvToHsl =
            t.hslaToHsva =
            t.hslToHsv =
            t.hslaToRgba =
            t.hslToRgb =
            t.stringToRgb =
            t.stringToAlpha =
            t.rgbToHsl =
            t.colorToHsl =
            t.colorToRgb =
              void 0);
        const i = n(4407),
          o = n(9425),
          r = n(5745);
        function a(e, t, n) {
          let i = n;
          return (
            i < 0 && (i += 1),
            i > 1 && (i -= 1),
            i < 1 / 6
              ? e + 6 * (t - e) * i
              : i < 0.5
              ? t
              : i < 2 / 3
              ? e + (t - e) * (2 / 3 - i) * 6
              : e
          );
        }
        function s(e) {
          if (e.startsWith("rgb")) {
            const t =
              /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i.exec(
                e
              );
            return t
              ? {
                  a: t.length > 4 ? parseFloat(t[5]) : 1,
                  b: parseInt(t[3], 10),
                  g: parseInt(t[2], 10),
                  r: parseInt(t[1], 10),
                }
              : void 0;
          }
          if (e.startsWith("hsl")) {
            const t =
              /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(
                e
              );
            return t
              ? h({
                  a: t.length > 4 ? parseFloat(t[5]) : 1,
                  h: parseInt(t[1], 10),
                  l: parseInt(t[3], 10),
                  s: parseInt(t[2], 10),
                })
              : void 0;
          }
          if (e.startsWith("hsv")) {
            const t =
              /hsva?\(\s*(\d+)\xb0\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(
                e
              );
            return t
              ? g({
                  a: t.length > 4 ? parseFloat(t[5]) : 1,
                  h: parseInt(t[1], 10),
                  s: parseInt(t[2], 10),
                  v: parseInt(t[3], 10),
                })
              : void 0;
          }
          {
            const t = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
              n = e.replace(
                t,
                (e, t, n, i, o) =>
                  t + t + n + n + i + i + (void 0 !== o ? o + o : "")
              ),
              i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(
                n
              );
            return i
              ? {
                  a: void 0 !== i[4] ? parseInt(i[4], 16) / 255 : 1,
                  b: parseInt(i[3], 16),
                  g: parseInt(i[2], 16),
                  r: parseInt(i[1], 16),
                }
              : void 0;
          }
        }
        function l(e, t) {
          let n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          var i, a, s;
          if (void 0 === e) return;
          const c = "string" === typeof e ? { value: e } : e;
          let h;
          if ("string" === typeof c.value)
            h = c.value === o.Constants.randomColorValue ? m() : u(c.value);
          else if (c.value instanceof Array) {
            h = l({ value: (0, r.itemFromArray)(c.value, t, n) });
          } else {
            const e = c.value,
              t = null !== (i = e.rgb) && void 0 !== i ? i : c.value;
            if (void 0 !== t.r) h = t;
            else {
              const t = null !== (a = e.hsl) && void 0 !== a ? a : c.value;
              if (void 0 !== t.h && void 0 !== t.l) h = d(t);
              else {
                const t = null !== (s = e.hsv) && void 0 !== s ? s : c.value;
                void 0 !== t.h && void 0 !== t.v && (h = v(t));
              }
            }
          }
          return h;
        }
        function c(e) {
          const t = e.r / 255,
            n = e.g / 255,
            i = e.b / 255,
            o = Math.max(t, n, i),
            r = Math.min(t, n, i),
            a = { h: 0, l: (o + r) / 2, s: 0 };
          return (
            o !== r &&
              ((a.s = a.l < 0.5 ? (o - r) / (o + r) : (o - r) / (2 - o - r)),
              (a.h =
                t === o
                  ? (n - i) / (o - r)
                  : (a.h =
                      n === o
                        ? 2 + (i - t) / (o - r)
                        : 4 + (t - n) / (o - r)))),
            (a.l *= 100),
            (a.s *= 100),
            (a.h *= 60),
            a.h < 0 && (a.h += 360),
            a
          );
        }
        function u(e) {
          return s(e);
        }
        function d(e) {
          const t = { b: 0, g: 0, r: 0 },
            n = { h: e.h / 360, l: e.l / 100, s: e.s / 100 };
          if (0 === n.s) (t.b = n.l), (t.g = n.l), (t.r = n.l);
          else {
            const e = n.l < 0.5 ? n.l * (1 + n.s) : n.l + n.s - n.l * n.s,
              i = 2 * n.l - e;
            (t.r = a(i, e, n.h + 1 / 3)),
              (t.g = a(i, e, n.h)),
              (t.b = a(i, e, n.h - 1 / 3));
          }
          return (
            (t.r = Math.floor(255 * t.r)),
            (t.g = Math.floor(255 * t.g)),
            (t.b = Math.floor(255 * t.b)),
            t
          );
        }
        function h(e) {
          const t = d(e);
          return { a: e.a, b: t.b, g: t.g, r: t.r };
        }
        function p(e) {
          const t = e.l / 100,
            n = t + (e.s / 100) * Math.min(t, 1 - t),
            i = n ? 2 * (1 - t / n) : 0;
          return { h: e.h, s: 100 * i, v: 100 * n };
        }
        function f(e) {
          const t = e.v / 100,
            n = t * (1 - e.s / 100 / 2),
            i = 0 === n || 1 === n ? 0 : (t - n) / Math.min(n, 1 - n);
          return { h: e.h, l: 100 * n, s: 100 * i };
        }
        function v(e) {
          const t = { b: 0, g: 0, r: 0 },
            n = e.h / 60,
            i = e.s / 100,
            o = e.v / 100,
            r = o * i,
            a = r * (1 - Math.abs((n % 2) - 1));
          let s;
          if (
            (n >= 0 && n <= 1
              ? (s = { r: r, g: a, b: 0 })
              : n > 1 && n <= 2
              ? (s = { r: a, g: r, b: 0 })
              : n > 2 && n <= 3
              ? (s = { r: 0, g: r, b: a })
              : n > 3 && n <= 4
              ? (s = { r: 0, g: a, b: r })
              : n > 4 && n <= 5
              ? (s = { r: a, g: 0, b: r })
              : n > 5 && n <= 6 && (s = { r: r, g: 0, b: a }),
            s)
          ) {
            const e = o - r;
            (t.r = Math.floor(255 * (s.r + e))),
              (t.g = Math.floor(255 * (s.g + e))),
              (t.b = Math.floor(255 * (s.b + e)));
          }
          return t;
        }
        function g(e) {
          const t = v(e);
          return { a: e.a, b: t.b, g: t.g, r: t.r };
        }
        function y(e) {
          const t = { r: e.r / 255, g: e.g / 255, b: e.b / 255 },
            n = Math.max(t.r, t.g, t.b),
            i = n - Math.min(t.r, t.g, t.b);
          let o = 0;
          n === t.r
            ? (o = ((t.g - t.b) / i) * 60)
            : n === t.g
            ? (o = 60 * (2 + (t.b - t.r) / i))
            : n === t.b && (o = 60 * (4 + (t.r - t.g) / i));
          return { h: o, s: 100 * (n ? i / n : 0), v: 100 * n };
        }
        function m(e) {
          const t = null !== e && void 0 !== e ? e : 0;
          return {
            b: Math.floor((0, i.randomInRange)((0, i.setRangeValue)(t, 256))),
            g: Math.floor((0, i.randomInRange)((0, i.setRangeValue)(t, 256))),
            r: Math.floor((0, i.randomInRange)((0, i.setRangeValue)(t, 256))),
          };
        }
        function b(e, t) {
          return `hsla(${e.h}, ${e.s}%, ${e.l}%, ${
            null !== t && void 0 !== t ? t : 1
          })`;
        }
        function w(e, t, n, o) {
          let r = e,
            a = t;
          return (
            void 0 === r.r && (r = d(e)),
            void 0 === a.r && (a = d(t)),
            {
              b: (0, i.mix)(r.b, a.b, n, o),
              g: (0, i.mix)(r.g, a.g, n, o),
              r: (0, i.mix)(r.r, a.r, n, o),
            }
          );
        }
        function S(e, t, n) {
          if (((e.enable = t.enable), e.enable)) {
            if (
              ((e.velocity = ((0, i.getRangeValue)(t.speed) / 100) * n), t.sync)
            )
              return;
            (e.status = 0),
              (e.velocity *= Math.random()),
              e.value && (e.value *= Math.random());
          } else e.velocity = 0;
        }
        (t.colorToRgb = l),
          (t.colorToHsl = function (e, t) {
            const n = l(
              e,
              t,
              !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
            );
            return void 0 !== n ? c(n) : void 0;
          }),
          (t.rgbToHsl = c),
          (t.stringToAlpha = function (e) {
            var t;
            return null === (t = s(e)) || void 0 === t ? void 0 : t.a;
          }),
          (t.stringToRgb = u),
          (t.hslToRgb = d),
          (t.hslaToRgba = h),
          (t.hslToHsv = p),
          (t.hslaToHsva = function (e) {
            const t = p(e);
            return { a: e.a, h: t.h, s: t.s, v: t.v };
          }),
          (t.hsvToHsl = f),
          (t.hsvaToHsla = function (e) {
            const t = f(e);
            return { a: e.a, h: t.h, l: t.l, s: t.s };
          }),
          (t.hsvToRgb = v),
          (t.hsvaToRgba = g),
          (t.rgbToHsv = y),
          (t.rgbaToHsva = function (e) {
            const t = y(e);
            return { a: e.a, h: t.h, s: t.s, v: t.v };
          }),
          (t.getRandomRgbColor = m),
          (t.getStyleFromRgb = function (e, t) {
            return `rgba(${e.r}, ${e.g}, ${e.b}, ${
              null !== t && void 0 !== t ? t : 1
            })`;
          }),
          (t.getStyleFromHsl = b),
          (t.getStyleFromHsv = function (e, t) {
            return b(f(e), t);
          }),
          (t.colorMix = w),
          (t.getLinkColor = function (e, t, n) {
            var i, r;
            if (n === o.Constants.randomColorValue) return m();
            if ("mid" !== n) return n;
            {
              const n =
                  null !== (i = e.getFillColor()) && void 0 !== i
                    ? i
                    : e.getStrokeColor(),
                o =
                  null !==
                    (r =
                      null === t || void 0 === t ? void 0 : t.getFillColor()) &&
                  void 0 !== r
                    ? r
                    : null === t || void 0 === t
                    ? void 0
                    : t.getStrokeColor();
              if (n && o && t) return w(n, o, e.getRadius(), t.getRadius());
              {
                const e = null !== n && void 0 !== n ? n : o;
                if (e) return d(e);
              }
            }
          }),
          (t.getLinkRandomColor = function (e, t, n) {
            const i = "string" === typeof e ? e : e.value;
            return i === o.Constants.randomColorValue
              ? n
                ? l({ value: i })
                : t
                ? o.Constants.randomColorValue
                : o.Constants.midColorValue
              : l({ value: i });
          }),
          (t.getHslFromAnimation = function (e) {
            return void 0 !== e
              ? { h: e.h.value, s: e.s.value, l: e.l.value }
              : void 0;
          }),
          (t.getHslAnimationFromHsl = function (e, t, n) {
            const i = {
              h: { enable: !1, value: e.h },
              s: { enable: !1, value: e.s },
              l: { enable: !1, value: e.l },
            };
            return t && (S(i.h, t.h, n), S(i.s, t.s, n), S(i.l, t.l, n)), i;
          });
      },
      4407: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.calcExactPositionOrRandomFromSizeRanged =
            t.calcExactPositionOrRandomFromSize =
            t.calcPositionOrRandomFromSizeRanged =
            t.calcPositionOrRandomFromSize =
            t.calcPositionFromSize =
            t.calcEasing =
            t.collisionVelocity =
            t.getParticleBaseVelocity =
            t.getParticleDirectionAngle =
            t.getDistance =
            t.getDistances =
            t.getValue =
            t.setRangeValue =
            t.getRangeMax =
            t.getRangeMin =
            t.getRangeValue =
            t.randomInRange =
            t.mix =
            t.clamp =
              void 0);
        const i = n(3542);
        function o(e) {
          const t = s(e);
          let n = a(e);
          return t === n && (n = 0), Math.random() * (t - n) + n;
        }
        function r(e) {
          return "number" === typeof e ? e : o(e);
        }
        function a(e) {
          return "number" === typeof e ? e : e.min;
        }
        function s(e) {
          return "number" === typeof e ? e : e.max;
        }
        function l(e, t) {
          if (e === t || (void 0 === t && "number" === typeof e)) return e;
          const n = a(e),
            i = s(e);
          return void 0 !== t
            ? { min: Math.min(n, t), max: Math.max(i, t) }
            : l(n, i);
        }
        function c(e, t) {
          const n = e.x - t.x,
            i = e.y - t.y;
          return { dx: n, dy: i, distance: Math.sqrt(n * n + i * i) };
        }
        function u(e) {
          var t, n, i, o;
          return {
            x:
              ((null !==
                (n =
                  null === (t = e.position) || void 0 === t ? void 0 : t.x) &&
              void 0 !== n
                ? n
                : 100 * Math.random()) *
                e.size.width) /
              100,
            y:
              ((null !==
                (o =
                  null === (i = e.position) || void 0 === i ? void 0 : i.y) &&
              void 0 !== o
                ? o
                : 100 * Math.random()) *
                e.size.height) /
              100,
          };
        }
        function d(e) {
          var t, n, i, o;
          return {
            x:
              null !==
                (n =
                  null === (t = e.position) || void 0 === t ? void 0 : t.x) &&
              void 0 !== n
                ? n
                : Math.random() * e.size.width,
            y:
              null !==
                (o =
                  null === (i = e.position) || void 0 === i ? void 0 : i.y) &&
              void 0 !== o
                ? o
                : Math.random() * e.size.height,
          };
        }
        (t.clamp = function (e, t, n) {
          return Math.min(Math.max(e, t), n);
        }),
          (t.mix = function (e, t, n, i) {
            return Math.floor((e * n + t * i) / (n + i));
          }),
          (t.randomInRange = o),
          (t.getRangeValue = r),
          (t.getRangeMin = a),
          (t.getRangeMax = s),
          (t.setRangeValue = l),
          (t.getValue = function (e) {
            const t = e.random,
              { enable: n, minimumValue: i } =
                "boolean" === typeof t ? { enable: t, minimumValue: 0 } : t;
            return r(n ? l(e.value, i) : e.value);
          }),
          (t.getDistances = c),
          (t.getDistance = function (e, t) {
            return c(e, t).distance;
          }),
          (t.getParticleDirectionAngle = function (e) {
            if ("number" === typeof e) return (e * Math.PI) / 180;
            switch (e) {
              case "top":
                return -Math.PI / 2;
              case "top-right":
                return -Math.PI / 4;
              case "right":
                return 0;
              case "bottom-right":
                return Math.PI / 4;
              case "bottom":
                return Math.PI / 2;
              case "bottom-left":
                return (3 * Math.PI) / 4;
              case "left":
                return Math.PI;
              case "top-left":
                return (-3 * Math.PI) / 4;
              default:
                return Math.random() * Math.PI * 2;
            }
          }),
          (t.getParticleBaseVelocity = function (e) {
            const t = i.Vector.origin;
            return (t.length = 1), (t.angle = e), t;
          }),
          (t.collisionVelocity = function (e, t, n, o) {
            return i.Vector.create(
              (e.x * (n - o)) / (n + o) + (2 * t.x * o) / (n + o),
              e.y
            );
          }),
          (t.calcEasing = function (e, t) {
            switch (t) {
              case "ease-out-quad":
                return 1 - (1 - e) ** 2;
              case "ease-out-cubic":
                return 1 - (1 - e) ** 3;
              case "ease-out-quart":
                return 1 - (1 - e) ** 4;
              case "ease-out-quint":
                return 1 - (1 - e) ** 5;
              case "ease-out-expo":
                return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
              case "ease-out-sine":
                return Math.sin((e * Math.PI) / 2);
              case "ease-out-back": {
                const t = 1.70158;
                return (
                  1 + (t + 1) * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2)
                );
              }
              case "ease-out-circ":
                return Math.sqrt(1 - Math.pow(e - 1, 2));
              default:
                return e;
            }
          }),
          (t.calcPositionFromSize = function (e) {
            var t, n;
            return void 0 !==
              (null === (t = e.position) || void 0 === t ? void 0 : t.x) &&
              void 0 !==
                (null === (n = e.position) || void 0 === n ? void 0 : n.y)
              ? {
                  x: (e.position.x * e.size.width) / 100,
                  y: (e.position.y * e.size.height) / 100,
                }
              : void 0;
          }),
          (t.calcPositionOrRandomFromSize = u),
          (t.calcPositionOrRandomFromSizeRanged = function (e) {
            var t, n;
            const i = {
              x:
                void 0 !==
                (null === (t = e.position) || void 0 === t ? void 0 : t.x)
                  ? r(e.position.x)
                  : void 0,
              y:
                void 0 !==
                (null === (n = e.position) || void 0 === n ? void 0 : n.y)
                  ? r(e.position.y)
                  : void 0,
            };
            return u({ size: e.size, position: i });
          }),
          (t.calcExactPositionOrRandomFromSize = d),
          (t.calcExactPositionOrRandomFromSizeRanged = function (e) {
            var t, n;
            const i = {
              x:
                void 0 !==
                (null === (t = e.position) || void 0 === t ? void 0 : t.x)
                  ? r(e.position.x)
                  : void 0,
              y:
                void 0 !==
                (null === (n = e.position) || void 0 === n ? void 0 : n.y)
                  ? r(e.position.y)
                  : void 0,
            };
            return d({ size: e.size, position: i });
          });
      },
      5745: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.rectBounce =
            t.circleBounce =
            t.circleBounceDataFromParticle =
            t.divMode =
            t.singleDivModeExecute =
            t.divModeExecute =
            t.isDivModeEnabled =
            t.deepExtend =
            t.calculateBounds =
            t.areBoundsInside =
            t.isPointInside =
            t.itemFromArray =
            t.arrayRandomIndex =
            t.loadFont =
            t.isInArray =
            t.cancelAnimation =
            t.animate =
            t.isSsr =
              void 0);
        const i = n(4407),
          o = n(3542);
        function r(e, t, n, i, o, r) {
          const a = { bounced: !1 };
          return (
            t.min < i.min ||
              t.min > i.max ||
              t.max < i.min ||
              t.max > i.max ||
              (((e.max >= n.min && e.max <= (n.max + n.min) / 2 && o > 0) ||
                (e.min <= n.max && e.min > (n.max + n.min) / 2 && o < 0)) &&
                ((a.velocity = o * -r), (a.bounced = !0))),
            a
          );
        }
        function a(e, t) {
          if (!(t instanceof Array)) return e.matches(t);
          for (const n of t) if (e.matches(n)) return !0;
          return !1;
        }
        function s() {
          return (
            "undefined" === typeof window ||
            !window ||
            "undefined" === typeof window.document ||
            !window.document
          );
        }
        function l(e, t) {
          return e === t || (t instanceof Array && t.indexOf(e) > -1);
        }
        function c(e) {
          return Math.floor(Math.random() * e.length);
        }
        function u(e, t, n) {
          let i = !0;
          return (
            (n && "bottom" !== n) || (i = e.top < t.height),
            !i || (n && "left" !== n) || (i = e.right > 0),
            !i || (n && "right" !== n) || (i = e.left < t.width),
            !i || (n && "top" !== n) || (i = e.bottom > 0),
            i
          );
        }
        function d(e, t) {
          return {
            bottom: e.y + t,
            left: e.x - t,
            right: e.x + t,
            top: e.y - t,
          };
        }
        function h(e, t) {
          const n = e.selectors;
          if (n instanceof Array) for (const i of n) t(i, e);
          else t(n, e);
        }
        (t.isSsr = s),
          (t.animate = function () {
            return s()
              ? (e) => setTimeout(e)
              : (e) =>
                  (
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    window.setTimeout
                  )(e);
          }),
          (t.cancelAnimation = function () {
            return s()
              ? (e) => clearTimeout(e)
              : (e) =>
                  (
                    window.cancelAnimationFrame ||
                    window.webkitCancelRequestAnimationFrame ||
                    window.mozCancelRequestAnimationFrame ||
                    window.oCancelRequestAnimationFrame ||
                    window.msCancelRequestAnimationFrame ||
                    window.clearTimeout
                  )(e);
          }),
          (t.isInArray = l),
          (t.loadFont = async function (e) {
            var t, n;
            try {
              await document.fonts.load(
                `${null !== (t = e.weight) && void 0 !== t ? t : "400"} 36px '${
                  null !== (n = e.font) && void 0 !== n ? n : "Verdana"
                }'`
              );
            } catch (i) {}
          }),
          (t.arrayRandomIndex = c),
          (t.itemFromArray = function (e, t) {
            return e[
              void 0 !== t &&
              (!(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2])
                ? t % e.length
                : c(e)
            ];
          }),
          (t.isPointInside = function (e, t, n, i) {
            return u(d(e, null !== n && void 0 !== n ? n : 0), t, i);
          }),
          (t.areBoundsInside = u),
          (t.calculateBounds = d),
          (t.deepExtend = function e(t) {
            for (
              var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1;
              o < n;
              o++
            )
              i[o - 1] = arguments[o];
            for (const r of i) {
              if (void 0 === r || null === r) continue;
              if ("object" !== typeof r) {
                t = r;
                continue;
              }
              const n = Array.isArray(r);
              !n || ("object" === typeof t && t && Array.isArray(t))
                ? n ||
                  ("object" === typeof t && t && !Array.isArray(t)) ||
                  (t = {})
                : (t = []);
              for (const i in r) {
                if ("__proto__" === i) continue;
                const n = r[i],
                  o = "object" === typeof n,
                  a = t;
                a[i] =
                  o && Array.isArray(n) ? n.map((t) => e(a[i], t)) : e(a[i], n);
              }
            }
            return t;
          }),
          (t.isDivModeEnabled = function (e, t) {
            return t instanceof Array
              ? !!t.find((t) => t.enable && l(e, t.mode))
              : l(e, t.mode);
          }),
          (t.divModeExecute = function (e, t, n) {
            if (t instanceof Array)
              for (const i of t) {
                const t = i.mode;
                i.enable && l(e, t) && h(i, n);
              }
            else {
              const i = t.mode;
              t.enable && l(e, i) && h(t, n);
            }
          }),
          (t.singleDivModeExecute = h),
          (t.divMode = function (e, t) {
            if (t && e)
              return e instanceof Array
                ? e.find((e) => a(t, e.selectors))
                : a(t, e.selectors)
                ? e
                : void 0;
          }),
          (t.circleBounceDataFromParticle = function (e) {
            return {
              position: e.getPosition(),
              radius: e.getRadius(),
              mass: e.getMass(),
              velocity: e.velocity,
              factor: o.Vector.create(
                (0, i.getValue)(e.options.bounce.horizontal),
                (0, i.getValue)(e.options.bounce.vertical)
              ),
            };
          }),
          (t.circleBounce = function (e, t) {
            const { x: n, y: o } = e.velocity.sub(t.velocity),
              [r, a] = [e.position, t.position],
              { dx: s, dy: l } = (0, i.getDistances)(a, r);
            if (n * s + o * l < 0) return;
            const c = -Math.atan2(l, s),
              u = e.mass,
              d = t.mass,
              h = e.velocity.rotate(c),
              p = t.velocity.rotate(c),
              f = (0, i.collisionVelocity)(h, p, u, d),
              v = (0, i.collisionVelocity)(p, h, u, d),
              g = f.rotate(-c),
              y = v.rotate(-c);
            (e.velocity.x = g.x * e.factor.x),
              (e.velocity.y = g.y * e.factor.y),
              (t.velocity.x = y.x * t.factor.x),
              (t.velocity.y = y.y * t.factor.y);
          }),
          (t.rectBounce = function (e, t) {
            const n = d(e.getPosition(), e.getRadius()),
              o = r(
                { min: n.left, max: n.right },
                { min: n.top, max: n.bottom },
                { min: t.left, max: t.right },
                { min: t.top, max: t.bottom },
                e.velocity.x,
                (0, i.getValue)(e.options.bounce.horizontal)
              );
            o.bounced &&
              (void 0 !== o.velocity && (e.velocity.x = o.velocity),
              void 0 !== o.position && (e.position.x = o.position));
            const a = r(
              { min: n.top, max: n.bottom },
              { min: n.left, max: n.right },
              { min: t.top, max: t.bottom },
              { min: t.left, max: t.right },
              e.velocity.y,
              (0, i.getValue)(e.options.bounce.vertical)
            );
            a.bounced &&
              (void 0 !== a.velocity && (e.velocity.y = a.velocity),
              void 0 !== a.position && (e.position.y = a.position));
          });
      },
      1237: function (e, t, n) {
        "use strict";
        var i,
          o,
          r =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, n, i, o) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !o)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" === typeof t ? e !== t || !o : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              return (
                "a" === i ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n
              );
            },
          a =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, n, i) {
              if ("a" === n && !i)
                throw new TypeError(
                  "Private accessor was defined without a getter"
                );
              if ("function" === typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError(
                  "Cannot read private member from an object whose class did not declare it"
                );
              return "m" === n
                ? i
                : "a" === n
                ? i.call(e)
                : i
                ? i.value
                : t.get(e);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Engine = void 0);
        const s = n(6878),
          l = n(9860);
        (t.Engine = class {
          constructor() {
            i.set(this, void 0),
              o.set(this, void 0),
              r(this, i, !1, "f"),
              (this.domArray = []),
              r(this, o, new s.Loader(this), "f"),
              (this.plugins = new l.Plugins(this));
          }
          init() {
            a(this, i, "f") || r(this, i, !0, "f");
          }
          async loadFromArray(e, t, n) {
            return a(this, o, "f").load(e, t, n);
          }
          async load(e, t) {
            return a(this, o, "f").load(e, t);
          }
          async set(e, t, n) {
            return a(this, o, "f").set(e, t, n);
          }
          async loadJSON(e, t, n) {
            return a(this, o, "f").loadJSON(e, t, n);
          }
          async setJSON(e, t, n, i) {
            return a(this, o, "f").setJSON(e, t, n, i);
          }
          setOnClickHandler(e) {
            a(this, o, "f").setOnClickHandler(e);
          }
          dom() {
            return a(this, o, "f").dom();
          }
          domItem(e) {
            return a(this, o, "f").domItem(e);
          }
          async refresh() {
            for (const e of this.dom()) await e.refresh();
          }
          async addShape(e, t, n, i, o) {
            let r;
            (r =
              "function" === typeof t
                ? { afterEffect: i, destroy: o, draw: t, init: n }
                : t),
              this.plugins.addShapeDrawer(e, r),
              await this.refresh();
          }
          async addPreset(e, t) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this.plugins.addPreset(e, t, n), await this.refresh();
          }
          async addPlugin(e) {
            this.plugins.addPlugin(e), await this.refresh();
          }
          async addPathGenerator(e, t) {
            this.plugins.addPathGenerator(e, t), await this.refresh();
          }
          async addInteractor(e, t) {
            this.plugins.addInteractor(e, t), await this.refresh();
          }
          async addMover(e, t) {
            this.plugins.addParticleMover(e, t), await this.refresh();
          }
          async addParticleUpdater(e, t) {
            this.plugins.addParticleUpdater(e, t), await this.refresh();
          }
        }),
          (i = new WeakMap()),
          (o = new WeakMap());
      },
      7128: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadFull = void 0);
        const i = n(3945),
          o = n(5610),
          r = n(5722),
          a = n(8264),
          s = n(4209),
          l = n(8880),
          c = n(2660),
          u = n(3518),
          d = n(2317);
        t.loadFull = async function (e) {
          await (0, l.loadSlim)(e),
            await (0, s.loadRollUpdater)(e),
            await (0, c.loadTiltUpdater)(e),
            await (0, u.loadTwinkleUpdater)(e),
            await (0, d.loadWobbleUpdater)(e),
            await (0, r.loadExternalTrailInteraction)(e),
            await (0, i.loadAbsorbersPlugin)(e),
            await (0, o.loadEmittersPlugin)(e),
            await (0, a.loadPolygonMaskPlugin)(e);
        };
      },
      813: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var o = Object.getOwnPropertyDescriptor(t, n);
                  (o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, i, o);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.tsParticles =
            t.pJSDom =
            t.particlesJS =
            t.loadPolygonMaskPlugin =
            t.loadEmittersPlugin =
            t.loadAbsorbersPlugin =
            t.Main =
            t.Engine =
              void 0);
        const r = n(1237);
        Object.defineProperty(t, "Engine", {
          enumerable: !0,
          get: function () {
            return r.Engine;
          },
        }),
          Object.defineProperty(t, "Main", {
            enumerable: !0,
            get: function () {
              return r.Engine;
            },
          });
        const a = n(871),
          s = n(7128),
          l = new r.Engine();
        (t.tsParticles = l), l.init();
        const { particlesJS: c, pJSDom: u } = (0, a.initPjs)(l);
        (t.particlesJS = c),
          (t.pJSDom = u),
          (0, s.loadFull)(l),
          o(n(7758), t),
          o(n(1902), t),
          o(n(6810), t),
          o(n(4560), t),
          o(n(2758), t),
          o(n(308), t),
          o(n(3407), t),
          o(n(2874), t),
          o(n(5943), t),
          o(n(3781), t),
          o(n(8167), t),
          o(n(7978), t),
          o(n(5419), t),
          o(n(700), t),
          o(n(5595), t),
          o(n(3981), t),
          o(n(2397), t),
          o(n(3395), t),
          o(n(2909), t),
          o(n(4831), t),
          o(n(8893), t),
          o(n(9202), t),
          o(n(9987), t),
          o(n(4410), t),
          o(n(1332), t),
          o(n(1918), t),
          o(n(4342), t),
          o(n(7144), t),
          o(n(3261), t),
          o(n(3851), t),
          o(n(8260), t),
          o(n(2808), t),
          o(n(3266), t),
          o(n(9570), t),
          o(n(3195), t),
          o(n(6939), t),
          o(n(9425), t),
          o(n(8393), t),
          o(n(4106), t),
          o(n(8486), t),
          o(n(4781), t),
          o(n(5561), t),
          o(n(9860), t),
          o(n(9704), t),
          o(n(3187), t),
          o(n(2747), t),
          o(n(24), t),
          o(n(3542), t),
          o(n(7638), t),
          o(n(7427), t),
          o(n(232), t),
          o(n(6878), t),
          o(n(6730), t),
          o(n(9983), t),
          o(n(8137), t),
          o(n(9940), t),
          o(n(7546), t),
          o(n(8694), t),
          o(n(3574), t),
          o(n(3301), t),
          o(n(7648), t),
          o(n(3869), t),
          o(n(3064), t),
          o(n(5496), t),
          o(n(6659), t),
          o(n(7200), t),
          o(n(445), t),
          o(n(6086), t),
          o(n(9603), t),
          o(n(377), t),
          o(n(3670), t),
          o(n(1736), t),
          o(n(7190), t),
          o(n(9742), t),
          o(n(8226), t),
          o(n(3976), t),
          o(n(9978), t),
          o(n(1872), t),
          o(n(7832), t),
          o(n(8315), t),
          o(n(1834), t),
          o(n(4968), t),
          o(n(9172), t),
          o(n(2770), t),
          o(n(1379), t),
          o(n(9433), t),
          o(n(9507), t),
          o(n(343), t),
          o(n(233), t),
          o(n(6923), t),
          o(n(4407), t),
          o(n(5745), t);
        var d = n(3945);
        Object.defineProperty(t, "loadAbsorbersPlugin", {
          enumerable: !0,
          get: function () {
            return d.loadAbsorbersPlugin;
          },
        }),
          o(n(8250), t);
        var h = n(5610);
        Object.defineProperty(t, "loadEmittersPlugin", {
          enumerable: !0,
          get: function () {
            return h.loadEmittersPlugin;
          },
        }),
          o(n(9950), t),
          o(n(8850), t);
        var p = n(8264);
        Object.defineProperty(t, "loadPolygonMaskPlugin", {
          enumerable: !0,
          get: function () {
            return p.loadPolygonMaskPlugin;
          },
        }),
          o(n(8242), t),
          o(n(3193), t),
          o(n(7406), t);
      },
      871: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.initPjs = void 0);
        t.initPjs = (e) => {
          const t = (t, n) => e.load(t, n);
          (t.load = (t, n, i) => {
            e.loadJSON(t, n)
              .then((e) => {
                e && i(e);
              })
              .catch(() => {
                i(void 0);
              });
          }),
            (t.setOnClickHandler = (t) => {
              e.setOnClickHandler(t);
            });
          return { particlesJS: t, pJSDom: e.dom() };
        };
      },
      8880: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadSlim = void 0);
        const i = n(7067),
          o = n(6278),
          r = n(4039),
          a = n(2464),
          s = n(4757),
          l = n(9464),
          c = n(1589),
          u = n(502),
          d = n(1502),
          h = n(8489),
          p = n(7591),
          f = n(1794),
          v = n(7843),
          g = n(3260),
          y = n(5946),
          m = n(7437),
          b = n(554),
          w = n(7211),
          S = n(7988),
          _ = n(6369),
          P = n(5133),
          x = n(4517),
          C = n(1206),
          k = n(5426),
          O = n(8292),
          E = n(3506),
          M = n(8911),
          R = n(826);
        t.loadSlim = async function (e) {
          await (0, o.loadBaseMover)(e),
            await (0, S.loadParallaxMover)(e),
            await (0, s.loadExternalAttractInteraction)(e),
            await (0, l.loadExternalBounceInteraction)(e),
            await (0, c.loadExternalBubbleInteraction)(e),
            await (0, u.loadExternalConnectInteraction)(e),
            await (0, d.loadExternalGrabInteraction)(e),
            await (0, h.loadExternalPauseInteraction)(e),
            await (0, p.loadExternalPushInteraction)(e),
            await (0, f.loadExternalRemoveInteraction)(e),
            await (0, v.loadExternalRepulseInteraction)(e),
            await (0, _.loadParticlesAttractInteraction)(e),
            await (0, P.loadParticlesCollisionsInteraction)(e),
            await (0, x.loadParticlesLinksInteraction)(e),
            await (0, r.loadCircleShape)(e),
            await (0, g.loadImageShape)(e),
            await (0, m.loadLineShape)(e),
            await (0, C.loadPolygonShape)(e),
            await (0, O.loadSquareShape)(e),
            await (0, E.loadStarShape)(e),
            await (0, R.loadTextShape)(e),
            await (0, y.loadLifeUpdater)(e),
            await (0, b.loadOpacityUpdater)(e),
            await (0, k.loadSizeUpdater)(e),
            await (0, i.loadAngleUpdater)(e),
            await (0, a.loadColorUpdater)(e),
            await (0, M.loadStrokeColorUpdater)(e),
            await (0, w.loadOutModesUpdater)(e);
        };
      },
    },
    t = {};
  function n(i) {
    var o = t[i];
    if (void 0 !== o) return o.exports;
    var r = (t[i] = { exports: {} });
    return e[i].call(r.exports, r, r.exports, n), r.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var i in t)
        n.o(t, i) &&
          !n.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.nc = void 0),
    (function () {
      "use strict";
      var e = n(1250),
        t = n(2791);
      const i = {
          retinaDetect: !0,
          fpsLimit: 90,
          fullScreen: { enable: !1 },
          particles: {
            number: { value: 100, density: { enable: !0, area: 800 } },
            color: {
              value: [
                "ff2600",
                "ff8000",
                "ffd500",
                "22dd22",
                "00bfff",
                "c912ed",
              ],
            },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "000" },
              polygon: { sides: 5 },
              image: { src: "img/github.svg", width: 100, height: 100 },
            },
            opacity: {
              value: 0.9,
              random: !1,
              anim: { enable: !1, speed: 1, minimumValue: 0.5, sync: !1 },
            },
            size: {
              value: 4,
              random: { enable: !0, minimumValue: 2 },
              anim: { enable: !1, speed: 30, minimumValue: 0.1, sync: !0 },
            },
            links: {
              enable: !0,
              distance: 75,
              color: "999",
              opacity: 0.9,
              width: 1,
              consent: !1,
              blink: !1,
            },
            move: {
              enable: !0,
              speed: 2,
              direction: "none",
              random: !1,
              straight: !1,
              outMode: "bounce",
              bounce: !1,
              attract: { enable: !1, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onhover: { enable: !0, mode: "repulse" },
              onclick: { enable: !0, mode: "push" },
              resize: !0,
            },
            modes: {
              attract: { distance: 100, duration: 1, speed: 5 },
              bubble: { distance: 400, size: 40, duration: 2, opacity: 8 },
              grab: { distance: 400, links: { opacity: 1 } },
              push: { quantity: 3 },
              remove: { quantity: 2 },
              repulse: { distance: 100, duration: 1 },
            },
          },
          key: "3m@62^K^88745%",
        },
        o = {
          dark: {
            key: "dark",
            primaryTextColor: "#fff",
            secondaryTextColor: "#ffffffdd",
            tertiaryTextColor: "#ffffff99",
            background: "#000",
            shadowColor: "#0000007f",
          },
          light: {
            key: "light",
            primaryTextColor: "#000",
            secondaryTextColor: "#000000dd",
            tertiaryTextColor: "#00000099",
            background: "#fff",
            shadowColor: "#ffffff7f",
          },
        };
      var r = n(184);
      const a = { config: {}, isMobile: !1, theme: o.dark, setTheme: () => {} },
        s = "SET_THEME",
        l = (e, t) => (t.type === s ? { ...e, theme: o[t.value] } : e),
        c = (0, t.createContext)(a),
        u = (e) => {
          let { config: n, isMobile: i, children: u } = e;
          (a.config = n), (a.isMobile = i);
          const d = Object.keys(o),
            h = localStorage.getItem("theme");
          h && d.includes(h) && (a.theme = o[h]);
          const [p, f] = (0, t.useReducer)(l, a),
            v = {
              config: p.config,
              isMobile: p.isMobile,
              theme: p.theme,
              setTheme: (e) => {
                f({ type: s, value: e });
              },
            };
          return (0, r.jsx)(c.Provider, { value: v, children: u });
        };
      var d = function () {
        return (
          (d =
            Object.assign ||
            function (e) {
              for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }),
          d.apply(this, arguments)
        );
      };
      Object.create;
      function h(e, t, n) {
        if (n || 2 === arguments.length)
          for (var i, o = 0, r = t.length; o < r; o++)
            (!i && o in t) ||
              (i || (i = Array.prototype.slice.call(t, 0, o)), (i[o] = t[o]));
        return e.concat(i || Array.prototype.slice.call(t));
      }
      Object.create;
      var p = n(9613),
        f = n.n(p),
        v = "-ms-",
        g = "-moz-",
        y = "-webkit-",
        m = "comm",
        b = "rule",
        w = "decl",
        S = "@import",
        _ = "@keyframes",
        P = "@layer",
        x = Math.abs,
        C = String.fromCharCode,
        k = Object.assign;
      function O(e) {
        return e.trim();
      }
      function E(e, t) {
        return (e = t.exec(e)) ? e[0] : e;
      }
      function M(e, t, n) {
        return e.replace(t, n);
      }
      function R(e, t) {
        return e.indexOf(t);
      }
      function T(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function A(e, t, n) {
        return e.slice(t, n);
      }
      function V(e) {
        return e.length;
      }
      function L(e) {
        return e.length;
      }
      function z(e, t) {
        return t.push(e), e;
      }
      function I(e, t) {
        return e.filter(function (e) {
          return !E(e, t);
        });
      }
      var j = 1,
        G = 1,
        D = 0,
        F = 0,
        N = 0,
        H = "";
      function B(e, t, n, i, o, r, a, s) {
        return {
          value: e,
          root: t,
          parent: n,
          type: i,
          props: o,
          children: r,
          line: j,
          column: G,
          length: a,
          return: "",
          siblings: s,
        };
      }
      function U(e, t) {
        return k(
          B("", null, null, "", null, null, 0, e.siblings),
          e,
          { length: -e.length },
          t
        );
      }
      function W(e) {
        for (; e.root; ) e = U(e.root, { children: [e] });
        z(e, e.siblings);
      }
      function $() {
        return (N = F > 0 ? T(H, --F) : 0), G--, 10 === N && ((G = 1), j--), N;
      }
      function q() {
        return (N = F < D ? T(H, F++) : 0), G++, 10 === N && ((G = 1), j++), N;
      }
      function Q() {
        return T(H, F);
      }
      function K() {
        return F;
      }
      function Y(e, t) {
        return A(H, e, t);
      }
      function X(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function Z(e) {
        return (j = G = 1), (D = V((H = e))), (F = 0), [];
      }
      function J(e) {
        return (H = ""), e;
      }
      function ee(e) {
        return O(Y(F - 1, ie(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function te(e) {
        for (; (N = Q()) && N < 33; ) q();
        return X(e) > 2 || X(N) > 3 ? "" : " ";
      }
      function ne(e, t) {
        for (
          ;
          --t &&
          q() &&
          !(N < 48 || N > 102 || (N > 57 && N < 65) || (N > 70 && N < 97));

        );
        return Y(e, K() + (t < 6 && 32 == Q() && 32 == q()));
      }
      function ie(e) {
        for (; q(); )
          switch (N) {
            case e:
              return F;
            case 34:
            case 39:
              34 !== e && 39 !== e && ie(N);
              break;
            case 40:
              41 === e && ie(e);
              break;
            case 92:
              q();
          }
        return F;
      }
      function oe(e, t) {
        for (; q() && e + N !== 57 && (e + N !== 84 || 47 !== Q()); );
        return "/*" + Y(t, F - 1) + "*" + C(47 === e ? e : q());
      }
      function re(e) {
        for (; !X(Q()); ) q();
        return Y(e, F);
      }
      function ae(e, t) {
        for (var n = "", i = 0; i < e.length; i++) n += t(e[i], i, e, t) || "";
        return n;
      }
      function se(e, t, n, i) {
        switch (e.type) {
          case P:
            if (e.children.length) break;
          case S:
          case w:
            return (e.return = e.return || e.value);
          case m:
            return "";
          case _:
            return (e.return = e.value + "{" + ae(e.children, i) + "}");
          case b:
            if (!V((e.value = e.props.join(",")))) return "";
        }
        return V((n = ae(e.children, i)))
          ? (e.return = e.value + "{" + n + "}")
          : "";
      }
      function le(e, t, n) {
        switch (
          (function (e, t) {
            return 45 ^ T(e, 0)
              ? (((((((t << 2) ^ T(e, 0)) << 2) ^ T(e, 1)) << 2) ^ T(e, 2)) <<
                  2) ^
                  T(e, 3)
              : 0;
          })(e, t)
        ) {
          case 5103:
            return y + "print-" + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return y + e + e;
          case 4789:
            return g + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return y + e + g + e + v + e + e;
          case 5936:
            switch (T(e, t + 11)) {
              case 114:
                return y + e + v + M(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
              case 108:
                return y + e + v + M(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
              case 45:
                return y + e + v + M(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
            }
          case 6828:
          case 4268:
          case 2903:
            return y + e + v + e + e;
          case 6165:
            return y + e + v + "flex-" + e + e;
          case 5187:
            return (
              y +
              e +
              M(e, /(\w+).+(:[^]+)/, y + "box-$1$2" + v + "flex-$1$2") +
              e
            );
          case 5443:
            return (
              y +
              e +
              v +
              "flex-item-" +
              M(e, /flex-|-self/g, "") +
              (E(e, /flex-|baseline/)
                ? ""
                : v + "grid-row-" + M(e, /flex-|-self/g, "")) +
              e
            );
          case 4675:
            return (
              y +
              e +
              v +
              "flex-line-pack" +
              M(e, /align-content|flex-|-self/g, "") +
              e
            );
          case 5548:
            return y + e + v + M(e, "shrink", "negative") + e;
          case 5292:
            return y + e + v + M(e, "basis", "preferred-size") + e;
          case 6060:
            return (
              y +
              "box-" +
              M(e, "-grow", "") +
              y +
              e +
              v +
              M(e, "grow", "positive") +
              e
            );
          case 4554:
            return y + M(e, /([^-])(transform)/g, "$1" + y + "$2") + e;
          case 6187:
            return (
              M(
                M(M(e, /(zoom-|grab)/, y + "$1"), /(image-set)/, y + "$1"),
                e,
                ""
              ) + e
            );
          case 5495:
          case 3959:
            return M(e, /(image-set\([^]*)/, y + "$1$`$1");
          case 4968:
            return (
              M(
                M(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  y + "box-pack:$3" + v + "flex-pack:$3"
                ),
                /s.+-b[^;]+/,
                "justify"
              ) +
              y +
              e +
              e
            );
          case 4200:
            if (!E(e, /flex-|baseline/))
              return v + "grid-column-align" + A(e, t) + e;
            break;
          case 2592:
          case 3360:
            return v + M(e, "template-", "") + e;
          case 4384:
          case 3616:
            return n &&
              n.some(function (e, n) {
                return (t = n), E(e.props, /grid-\w+-end/);
              })
              ? ~R(e + (n = n[t].value), "span")
                ? e
                : v +
                  M(e, "-start", "") +
                  e +
                  v +
                  "grid-row-span:" +
                  (~R(n, "span") ? E(n, /\d+/) : +E(n, /\d+/) - +E(e, /\d+/)) +
                  ";"
              : v + M(e, "-start", "") + e;
          case 4896:
          case 4128:
            return n &&
              n.some(function (e) {
                return E(e.props, /grid-\w+-start/);
              })
              ? e
              : v + M(M(e, "-end", "-span"), "span ", "") + e;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return M(e, /(.+)-inline(.+)/, y + "$1$2") + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (V(e) - 1 - t > 6)
              switch (T(e, t + 1)) {
                case 109:
                  if (45 !== T(e, t + 4)) break;
                case 102:
                  return (
                    M(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      "$1" +
                        y +
                        "$2-$3$1" +
                        g +
                        (108 == T(e, t + 3) ? "$3" : "$2-$3")
                    ) + e
                  );
                case 115:
                  return ~R(e, "stretch")
                    ? le(M(e, "stretch", "fill-available"), t, n) + e
                    : e;
              }
            break;
          case 5152:
          case 5920:
            return M(
              e,
              /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
              function (t, n, i, o, r, a, s) {
                return (
                  v +
                  n +
                  ":" +
                  i +
                  s +
                  (o ? v + n + "-span:" + (r ? a : +a - +i) + s : "") +
                  e
                );
              }
            );
          case 4949:
            if (121 === T(e, t + 6)) return M(e, ":", ":" + y) + e;
            break;
          case 6444:
            switch (T(e, 45 === T(e, 14) ? 18 : 11)) {
              case 120:
                return (
                  M(
                    e,
                    /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                    "$1" +
                      y +
                      (45 === T(e, 14) ? "inline-" : "") +
                      "box$3$1" +
                      y +
                      "$2$3$1" +
                      v +
                      "$2box$3"
                  ) + e
                );
              case 100:
                return M(e, ":", ":" + v) + e;
            }
            break;
          case 5719:
          case 2647:
          case 2135:
          case 3927:
          case 2391:
            return M(e, "scroll-", "scroll-snap-") + e;
        }
        return e;
      }
      function ce(e, t, n, i) {
        if (e.length > -1 && !e.return)
          switch (e.type) {
            case w:
              return void (e.return = le(e.value, e.length, n));
            case _:
              return ae([U(e, { value: M(e.value, "@", "@" + y) })], i);
            case b:
              if (e.length)
                return (function (e, t) {
                  return e.map(t).join("");
                })((n = e.props), function (t) {
                  switch (E(t, (i = /(::plac\w+|:read-\w+)/))) {
                    case ":read-only":
                    case ":read-write":
                      W(U(e, { props: [M(t, /:(read-\w+)/, ":" + g + "$1")] })),
                        W(U(e, { props: [t] })),
                        k(e, { props: I(n, i) });
                      break;
                    case "::placeholder":
                      W(
                        U(e, {
                          props: [M(t, /:(plac\w+)/, ":" + y + "input-$1")],
                        })
                      ),
                        W(
                          U(e, { props: [M(t, /:(plac\w+)/, ":" + g + "$1")] })
                        ),
                        W(
                          U(e, { props: [M(t, /:(plac\w+)/, v + "input-$1")] })
                        ),
                        W(U(e, { props: [t] })),
                        k(e, { props: I(n, i) });
                  }
                  return "";
                });
          }
      }
      function ue(e) {
        return J(de("", null, null, null, [""], (e = Z(e)), 0, [0], e));
      }
      function de(e, t, n, i, o, r, a, s, l) {
        for (
          var c = 0,
            u = 0,
            d = a,
            h = 0,
            p = 0,
            f = 0,
            v = 1,
            g = 1,
            y = 1,
            m = 0,
            b = "",
            w = o,
            S = r,
            _ = i,
            P = b;
          g;

        )
          switch (((f = m), (m = q()))) {
            case 40:
              if (108 != f && 58 == T(P, d - 1)) {
                -1 != R((P += M(ee(m), "&", "&\f")), "&\f") && (y = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              P += ee(m);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              P += te(f);
              break;
            case 92:
              P += ne(K() - 1, 7);
              continue;
            case 47:
              switch (Q()) {
                case 42:
                case 47:
                  z(pe(oe(q(), K()), t, n, l), l);
                  break;
                default:
                  P += "/";
              }
              break;
            case 123 * v:
              s[c++] = V(P) * y;
            case 125 * v:
            case 59:
            case 0:
              switch (m) {
                case 0:
                case 125:
                  g = 0;
                case 59 + u:
                  -1 == y && (P = M(P, /\f/g, "")),
                    p > 0 &&
                      V(P) - d &&
                      z(
                        p > 32
                          ? fe(P + ";", i, n, d - 1, l)
                          : fe(M(P, " ", "") + ";", i, n, d - 2, l),
                        l
                      );
                  break;
                case 59:
                  P += ";";
                default:
                  if (
                    (z(
                      (_ = he(
                        P,
                        t,
                        n,
                        c,
                        u,
                        o,
                        s,
                        b,
                        (w = []),
                        (S = []),
                        d,
                        r
                      )),
                      r
                    ),
                    123 === m)
                  )
                    if (0 === u) de(P, t, _, _, w, r, d, s, S);
                    else
                      switch (99 === h && 110 === T(P, 3) ? 100 : h) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          de(
                            e,
                            _,
                            _,
                            i &&
                              z(
                                he(e, _, _, 0, 0, o, s, b, o, (w = []), d, S),
                                S
                              ),
                            o,
                            S,
                            d,
                            s,
                            i ? w : S
                          );
                          break;
                        default:
                          de(P, _, _, _, [""], S, 0, s, S);
                      }
              }
              (c = u = p = 0), (v = y = 1), (b = P = ""), (d = a);
              break;
            case 58:
              (d = 1 + V(P)), (p = f);
            default:
              if (v < 1)
                if (123 == m) --v;
                else if (125 == m && 0 == v++ && 125 == $()) continue;
              switch (((P += C(m)), m * v)) {
                case 38:
                  y = u > 0 ? 1 : ((P += "\f"), -1);
                  break;
                case 44:
                  (s[c++] = (V(P) - 1) * y), (y = 1);
                  break;
                case 64:
                  45 === Q() && (P += ee(q())),
                    (h = Q()),
                    (u = d = V((b = P += re(K())))),
                    m++;
                  break;
                case 45:
                  45 === f && 2 == V(P) && (v = 0);
              }
          }
        return r;
      }
      function he(e, t, n, i, o, r, a, s, l, c, u, d) {
        for (
          var h = o - 1, p = 0 === o ? r : [""], f = L(p), v = 0, g = 0, y = 0;
          v < i;
          ++v
        )
          for (
            var m = 0, w = A(e, h + 1, (h = x((g = a[v])))), S = e;
            m < f;
            ++m
          )
            (S = O(g > 0 ? p[m] + " " + w : M(w, /&\f/g, p[m]))) &&
              (l[y++] = S);
        return B(e, t, n, 0 === o ? b : s, l, c, u, d);
      }
      function pe(e, t, n, i) {
        return B(e, t, n, m, C(N), A(e, 2, -2), 0, i);
      }
      function fe(e, t, n, i, o) {
        return B(e, t, n, w, A(e, 0, i), A(e, i + 1, -1), i, o);
      }
      var ve = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        ge =
          ("undefined" != typeof process &&
            void 0 !==
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              } &&
            ({
              NODE_ENV: "production",
              PUBLIC_URL: "",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
            }.REACT_APP_SC_ATTR ||
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.SC_ATTR)) ||
          "data-styled",
        ye = "undefined" != typeof window && "HTMLElement" in window,
        me = Boolean(
          "boolean" == typeof SC_DISABLE_SPEEDY
            ? SC_DISABLE_SPEEDY
            : "undefined" != typeof process &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                } &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY &&
              "" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY
            ? "false" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY &&
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.REACT_APP_SC_DISABLE_SPEEDY
            : "undefined" != typeof process &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                } &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              "" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              "false" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.SC_DISABLE_SPEEDY
        ),
        be = (new Set(), Object.freeze([])),
        we = Object.freeze({});
      function Se(e, t, n) {
        return (
          void 0 === n && (n = we),
          (e.theme !== n.theme && e.theme) || t || n.theme
        );
      }
      var _e = new Set([
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "track",
          "u",
          "ul",
          "use",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "marker",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "tspan",
        ]),
        Pe = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        xe = /(^-|-$)/g;
      function Ce(e) {
        return e.replace(Pe, "-").replace(xe, "");
      }
      var ke = /(a)(d)/gi,
        Oe = function (e) {
          return String.fromCharCode(e + (e > 25 ? 39 : 97));
        };
      function Ee(e) {
        var t,
          n = "";
        for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Oe(t % 52) + n;
        return (Oe(t % 52) + n).replace(ke, "$1-$2");
      }
      var Me,
        Re = function (e, t) {
          for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
          return e;
        },
        Te = function (e) {
          return Re(5381, e);
        };
      function Ae(e) {
        return Ee(Te(e) >>> 0);
      }
      function Ve(e) {
        return e.displayName || e.name || "Component";
      }
      function Le(e) {
        return "string" == typeof e && !0;
      }
      var ze = "function" == typeof Symbol && Symbol.for,
        Ie = ze ? Symbol.for("react.memo") : 60115,
        je = ze ? Symbol.for("react.forward_ref") : 60112,
        Ge = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        De = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        Fe = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        Ne =
          (((Me = {})[je] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
          }),
          (Me[Ie] = Fe),
          Me);
      function He(e) {
        return ("type" in (t = e) && t.type.$$typeof) === Ie
          ? Fe
          : "$$typeof" in e
          ? Ne[e.$$typeof]
          : Ge;
        var t;
      }
      var Be = Object.defineProperty,
        Ue = Object.getOwnPropertyNames,
        We = Object.getOwnPropertySymbols,
        $e = Object.getOwnPropertyDescriptor,
        qe = Object.getPrototypeOf,
        Qe = Object.prototype;
      function Ke(e, t, n) {
        if ("string" != typeof t) {
          if (Qe) {
            var i = qe(t);
            i && i !== Qe && Ke(e, i, n);
          }
          var o = Ue(t);
          We && (o = o.concat(We(t)));
          for (var r = He(e), a = He(t), s = 0; s < o.length; ++s) {
            var l = o[s];
            if (!(l in De || (n && n[l]) || (a && l in a) || (r && l in r))) {
              var c = $e(t, l);
              try {
                Be(e, l, c);
              } catch (e) {}
            }
          }
        }
        return e;
      }
      function Ye(e) {
        return "function" == typeof e;
      }
      function Xe(e) {
        return "object" == typeof e && "styledComponentId" in e;
      }
      function Ze(e, t) {
        return e && t ? "".concat(e, " ").concat(t) : e || t || "";
      }
      function Je(e, t) {
        if (0 === e.length) return "";
        for (var n = e[0], i = 1; i < e.length; i++) n += t ? t + e[i] : e[i];
        return n;
      }
      function et(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          e.constructor.name === Object.name &&
          !("props" in e && e.$$typeof)
        );
      }
      function tt(e, t, n) {
        if ((void 0 === n && (n = !1), !n && !et(e) && !Array.isArray(e)))
          return t;
        if (Array.isArray(t))
          for (var i = 0; i < t.length; i++) e[i] = tt(e[i], t[i]);
        else if (et(t)) for (var i in t) e[i] = tt(e[i], t[i]);
        return e;
      }
      function nt(e, t) {
        Object.defineProperty(e, "toString", { value: t });
      }
      function it(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return new Error(
          "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
            .concat(e, " for more information.")
            .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
        );
      }
      var ot = (function () {
          function e(e) {
            (this.groupSizes = new Uint32Array(512)),
              (this.length = 512),
              (this.tag = e);
          }
          return (
            (e.prototype.indexOfGroup = function (e) {
              for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
              return t;
            }),
            (e.prototype.insertRules = function (e, t) {
              if (e >= this.groupSizes.length) {
                for (var n = this.groupSizes, i = n.length, o = i; e >= o; )
                  if ((o <<= 1) < 0) throw it(16, "".concat(e));
                (this.groupSizes = new Uint32Array(o)),
                  this.groupSizes.set(n),
                  (this.length = o);
                for (var r = i; r < o; r++) this.groupSizes[r] = 0;
              }
              for (
                var a = this.indexOfGroup(e + 1), s = ((r = 0), t.length);
                r < s;
                r++
              )
                this.tag.insertRule(a, t[r]) && (this.groupSizes[e]++, a++);
            }),
            (e.prototype.clearGroup = function (e) {
              if (e < this.length) {
                var t = this.groupSizes[e],
                  n = this.indexOfGroup(e),
                  i = n + t;
                this.groupSizes[e] = 0;
                for (var o = n; o < i; o++) this.tag.deleteRule(n);
              }
            }),
            (e.prototype.getGroup = function (e) {
              var t = "";
              if (e >= this.length || 0 === this.groupSizes[e]) return t;
              for (
                var n = this.groupSizes[e],
                  i = this.indexOfGroup(e),
                  o = i + n,
                  r = i;
                r < o;
                r++
              )
                t += "".concat(this.tag.getRule(r)).concat("/*!sc*/\n");
              return t;
            }),
            e
          );
        })(),
        rt = new Map(),
        at = new Map(),
        st = 1,
        lt = function (e) {
          if (rt.has(e)) return rt.get(e);
          for (; at.has(st); ) st++;
          var t = st++;
          return rt.set(e, t), at.set(t, e), t;
        },
        ct = function (e, t) {
          (st = t + 1), rt.set(e, t), at.set(t, e);
        },
        ut = "style["
          .concat(ge, "][")
          .concat("data-styled-version", '="')
          .concat("6.1.1", '"]'),
        dt = new RegExp(
          "^".concat(ge, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
        ),
        ht = function (e, t, n) {
          for (var i, o = n.split(","), r = 0, a = o.length; r < a; r++)
            (i = o[r]) && e.registerName(t, i);
        },
        pt = function (e, t) {
          for (
            var n,
              i = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(
                "/*!sc*/\n"
              ),
              o = [],
              r = 0,
              a = i.length;
            r < a;
            r++
          ) {
            var s = i[r].trim();
            if (s) {
              var l = s.match(dt);
              if (l) {
                var c = 0 | parseInt(l[1], 10),
                  u = l[2];
                0 !== c &&
                  (ct(u, c), ht(e, u, l[3]), e.getTag().insertRules(c, o)),
                  (o.length = 0);
              } else o.push(s);
            }
          }
        };
      function ft() {
        return n.nc;
      }
      var vt = function (e) {
          var t = document.head,
            n = e || t,
            i = document.createElement("style"),
            o = (function (e) {
              var t = Array.from(e.querySelectorAll("style[".concat(ge, "]")));
              return t[t.length - 1];
            })(n),
            r = void 0 !== o ? o.nextSibling : null;
          i.setAttribute(ge, "active"),
            i.setAttribute("data-styled-version", "6.1.1");
          var a = ft();
          return a && i.setAttribute("nonce", a), n.insertBefore(i, r), i;
        },
        gt = (function () {
          function e(e) {
            (this.element = vt(e)),
              this.element.appendChild(document.createTextNode("")),
              (this.sheet = (function (e) {
                if (e.sheet) return e.sheet;
                for (
                  var t = document.styleSheets, n = 0, i = t.length;
                  n < i;
                  n++
                ) {
                  var o = t[n];
                  if (o.ownerNode === e) return o;
                }
                throw it(17);
              })(this.element)),
              (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              try {
                return this.sheet.insertRule(t, e), this.length++, !0;
              } catch (e) {
                return !1;
              }
            }),
            (e.prototype.deleteRule = function (e) {
              this.sheet.deleteRule(e), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              var t = this.sheet.cssRules[e];
              return t && t.cssText ? t.cssText : "";
            }),
            e
          );
        })(),
        yt = (function () {
          function e(e) {
            (this.element = vt(e)),
              (this.nodes = this.element.childNodes),
              (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              if (e <= this.length && e >= 0) {
                var n = document.createTextNode(t);
                return (
                  this.element.insertBefore(n, this.nodes[e] || null),
                  this.length++,
                  !0
                );
              }
              return !1;
            }),
            (e.prototype.deleteRule = function (e) {
              this.element.removeChild(this.nodes[e]), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.nodes[e].textContent : "";
            }),
            e
          );
        })(),
        mt = (function () {
          function e(e) {
            (this.rules = []), (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              return (
                e <= this.length &&
                (this.rules.splice(e, 0, t), this.length++, !0)
              );
            }),
            (e.prototype.deleteRule = function (e) {
              this.rules.splice(e, 1), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.rules[e] : "";
            }),
            e
          );
        })(),
        bt = ye,
        wt = { isServer: !ye, useCSSOMInjection: !me },
        St = (function () {
          function e(e, t, n) {
            void 0 === e && (e = we), void 0 === t && (t = {});
            var i = this;
            (this.options = d(d({}, wt), e)),
              (this.gs = t),
              (this.names = new Map(n)),
              (this.server = !!e.isServer),
              !this.server &&
                ye &&
                bt &&
                ((bt = !1),
                (function (e) {
                  for (
                    var t = document.querySelectorAll(ut), n = 0, i = t.length;
                    n < i;
                    n++
                  ) {
                    var o = t[n];
                    o &&
                      "active" !== o.getAttribute(ge) &&
                      (pt(e, o), o.parentNode && o.parentNode.removeChild(o));
                  }
                })(this)),
              nt(this, function () {
                return (function (e) {
                  for (
                    var t = e.getTag(),
                      n = t.length,
                      i = "",
                      o = function (n) {
                        var o = (function (e) {
                          return at.get(e);
                        })(n);
                        if (void 0 === o) return "continue";
                        var r = e.names.get(o),
                          a = t.getGroup(n);
                        if (void 0 === r || 0 === a.length) return "continue";
                        var s = ""
                            .concat(ge, ".g")
                            .concat(n, '[id="')
                            .concat(o, '"]'),
                          l = "";
                        void 0 !== r &&
                          r.forEach(function (e) {
                            e.length > 0 && (l += "".concat(e, ","));
                          }),
                          (i += ""
                            .concat(a)
                            .concat(s, '{content:"')
                            .concat(l, '"}')
                            .concat("/*!sc*/\n"));
                      },
                      r = 0;
                    r < n;
                    r++
                  )
                    o(r);
                  return i;
                })(i);
              });
          }
          return (
            (e.registerId = function (e) {
              return lt(e);
            }),
            (e.prototype.reconstructWithOptions = function (t, n) {
              return (
                void 0 === n && (n = !0),
                new e(
                  d(d({}, this.options), t),
                  this.gs,
                  (n && this.names) || void 0
                )
              );
            }),
            (e.prototype.allocateGSInstance = function (e) {
              return (this.gs[e] = (this.gs[e] || 0) + 1);
            }),
            (e.prototype.getTag = function () {
              return (
                this.tag ||
                (this.tag =
                  ((e = (function (e) {
                    var t = e.useCSSOMInjection,
                      n = e.target;
                    return e.isServer ? new mt(n) : t ? new gt(n) : new yt(n);
                  })(this.options)),
                  new ot(e)))
              );
              var e;
            }),
            (e.prototype.hasNameForId = function (e, t) {
              return this.names.has(e) && this.names.get(e).has(t);
            }),
            (e.prototype.registerName = function (e, t) {
              if ((lt(e), this.names.has(e))) this.names.get(e).add(t);
              else {
                var n = new Set();
                n.add(t), this.names.set(e, n);
              }
            }),
            (e.prototype.insertRules = function (e, t, n) {
              this.registerName(e, t), this.getTag().insertRules(lt(e), n);
            }),
            (e.prototype.clearNames = function (e) {
              this.names.has(e) && this.names.get(e).clear();
            }),
            (e.prototype.clearRules = function (e) {
              this.getTag().clearGroup(lt(e)), this.clearNames(e);
            }),
            (e.prototype.clearTag = function () {
              this.tag = void 0;
            }),
            e
          );
        })(),
        _t = /&/g,
        Pt = /^\s*\/\/.*$/gm;
      function xt(e, t) {
        return e.map(function (e) {
          return (
            "rule" === e.type &&
              ((e.value = "".concat(t, " ").concat(e.value)),
              (e.value = e.value.replaceAll(",", ",".concat(t, " "))),
              (e.props = e.props.map(function (e) {
                return "".concat(t, " ").concat(e);
              }))),
            Array.isArray(e.children) &&
              "@keyframes" !== e.type &&
              (e.children = xt(e.children, t)),
            e
          );
        });
      }
      function Ct(e) {
        var t,
          n,
          i,
          o = void 0 === e ? we : e,
          r = o.options,
          a = void 0 === r ? we : r,
          s = o.plugins,
          l = void 0 === s ? be : s,
          c = function (e, i, o) {
            return o === n ||
              (o.startsWith(n) &&
                o.endsWith(n) &&
                o.replaceAll(n, "").length > 0)
              ? ".".concat(t)
              : e;
          },
          u = l.slice();
        u.push(function (e) {
          e.type === b &&
            e.value.includes("&") &&
            (e.props[0] = e.props[0].replace(_t, n).replace(i, c));
        }),
          a.prefix && u.push(ce),
          u.push(se);
        var d = function (e, o, r, s) {
          void 0 === o && (o = ""),
            void 0 === r && (r = ""),
            void 0 === s && (s = "&"),
            (t = s),
            (n = o),
            (i = new RegExp("\\".concat(n, "\\b"), "g"));
          var l = e.replace(Pt, ""),
            c = ue(
              r || o ? "".concat(r, " ").concat(o, " { ").concat(l, " }") : l
            );
          a.namespace && (c = xt(c, a.namespace));
          var d,
            h = [];
          return (
            ae(
              c,
              (function (e) {
                var t = L(e);
                return function (n, i, o, r) {
                  for (var a = "", s = 0; s < t; s++)
                    a += e[s](n, i, o, r) || "";
                  return a;
                };
              })(
                u.concat(
                  ((d = function (e) {
                    return h.push(e);
                  }),
                  function (e) {
                    e.root || ((e = e.return) && d(e));
                  })
                )
              )
            ),
            h
          );
        };
        return (
          (d.hash = l.length
            ? l
                .reduce(function (e, t) {
                  return t.name || it(15), Re(e, t.name);
                }, 5381)
                .toString()
            : ""),
          d
        );
      }
      var kt = new St(),
        Ot = Ct(),
        Et = t.createContext({
          shouldForwardProp: void 0,
          styleSheet: kt,
          stylis: Ot,
        }),
        Mt = (Et.Consumer, t.createContext(void 0));
      function Rt() {
        return (0, t.useContext)(Et);
      }
      function Tt(e) {
        var n = (0, t.useState)(e.stylisPlugins),
          i = n[0],
          o = n[1],
          r = Rt().styleSheet,
          a = (0, t.useMemo)(
            function () {
              var t = r;
              return (
                e.sheet
                  ? (t = e.sheet)
                  : e.target &&
                    (t = t.reconstructWithOptions({ target: e.target }, !1)),
                e.disableCSSOMInjection &&
                  (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })),
                t
              );
            },
            [e.disableCSSOMInjection, e.sheet, e.target, r]
          ),
          s = (0, t.useMemo)(
            function () {
              return Ct({
                options: {
                  namespace: e.namespace,
                  prefix: e.enableVendorPrefixes,
                },
                plugins: i,
              });
            },
            [e.enableVendorPrefixes, e.namespace, i]
          );
        (0, t.useEffect)(
          function () {
            f()(i, e.stylisPlugins) || o(e.stylisPlugins);
          },
          [e.stylisPlugins]
        );
        var l = (0, t.useMemo)(
          function () {
            return {
              shouldForwardProp: e.shouldForwardProp,
              styleSheet: a,
              stylis: s,
            };
          },
          [e.shouldForwardProp, a, s]
        );
        return t.createElement(
          Et.Provider,
          { value: l },
          t.createElement(Mt.Provider, { value: s }, e.children)
        );
      }
      var At = (function () {
          function e(e, t) {
            var n = this;
            (this.inject = function (e, t) {
              void 0 === t && (t = Ot);
              var i = n.name + t.hash;
              e.hasNameForId(n.id, i) ||
                e.insertRules(n.id, i, t(n.rules, i, "@keyframes"));
            }),
              (this.name = e),
              (this.id = "sc-keyframes-".concat(e)),
              (this.rules = t),
              nt(this, function () {
                throw it(12, String(n.name));
              });
          }
          return (
            (e.prototype.getName = function (e) {
              return void 0 === e && (e = Ot), this.name + e.hash;
            }),
            e
          );
        })(),
        Vt = function (e) {
          return e >= "A" && e <= "Z";
        };
      function Lt(e) {
        for (var t = "", n = 0; n < e.length; n++) {
          var i = e[n];
          if (1 === n && "-" === i && "-" === e[0]) return e;
          Vt(i) ? (t += "-" + i.toLowerCase()) : (t += i);
        }
        return t.startsWith("ms-") ? "-" + t : t;
      }
      var zt = function (e) {
          return null == e || !1 === e || "" === e;
        },
        It = function (e) {
          var t,
            n,
            i = [];
          for (var o in e) {
            var r = e[o];
            e.hasOwnProperty(o) &&
              !zt(r) &&
              ((Array.isArray(r) && r.isCss) || Ye(r)
                ? i.push("".concat(Lt(o), ":"), r, ";")
                : et(r)
                ? i.push.apply(
                    i,
                    h(h(["".concat(o, " {")], It(r), !1), ["}"], !1)
                  )
                : i.push(
                    ""
                      .concat(Lt(o), ": ")
                      .concat(
                        ((t = o),
                        null == (n = r) || "boolean" == typeof n || "" === n
                          ? ""
                          : "number" != typeof n ||
                            0 === n ||
                            t in ve ||
                            t.startsWith("--")
                          ? String(n).trim()
                          : "".concat(n, "px")),
                        ";"
                      )
                  ));
          }
          return i;
        };
      function jt(e, t, n, i) {
        return zt(e)
          ? []
          : Xe(e)
          ? [".".concat(e.styledComponentId)]
          : Ye(e)
          ? !Ye((o = e)) || (o.prototype && o.prototype.isReactComponent) || !t
            ? [e]
            : jt(e(t), t, n, i)
          : e instanceof At
          ? n
            ? (e.inject(n, i), [e.getName(i)])
            : [e]
          : et(e)
          ? It(e)
          : Array.isArray(e)
          ? Array.prototype.concat.apply(
              be,
              e.map(function (e) {
                return jt(e, t, n, i);
              })
            )
          : [e.toString()];
        var o;
      }
      function Gt(e) {
        for (var t = 0; t < e.length; t += 1) {
          var n = e[t];
          if (Ye(n) && !Xe(n)) return !1;
        }
        return !0;
      }
      var Dt = Te("6.1.1"),
        Ft = (function () {
          function e(e, t, n) {
            (this.rules = e),
              (this.staticRulesId = ""),
              (this.isStatic = (void 0 === n || n.isStatic) && Gt(e)),
              (this.componentId = t),
              (this.baseHash = Re(Dt, t)),
              (this.baseStyle = n),
              St.registerId(t);
          }
          return (
            (e.prototype.generateAndInjectStyles = function (e, t, n) {
              var i = this.baseStyle
                ? this.baseStyle.generateAndInjectStyles(e, t, n)
                : "";
              if (this.isStatic && !n.hash)
                if (
                  this.staticRulesId &&
                  t.hasNameForId(this.componentId, this.staticRulesId)
                )
                  i = Ze(i, this.staticRulesId);
                else {
                  var o = Je(jt(this.rules, e, t, n)),
                    r = Ee(Re(this.baseHash, o) >>> 0);
                  if (!t.hasNameForId(this.componentId, r)) {
                    var a = n(o, ".".concat(r), void 0, this.componentId);
                    t.insertRules(this.componentId, r, a);
                  }
                  (i = Ze(i, r)), (this.staticRulesId = r);
                }
              else {
                for (
                  var s = Re(this.baseHash, n.hash), l = "", c = 0;
                  c < this.rules.length;
                  c++
                ) {
                  var u = this.rules[c];
                  if ("string" == typeof u) l += u;
                  else if (u) {
                    var d = Je(jt(u, e, t, n));
                    (s = Re(s, d + c)), (l += d);
                  }
                }
                if (l) {
                  var h = Ee(s >>> 0);
                  t.hasNameForId(this.componentId, h) ||
                    t.insertRules(
                      this.componentId,
                      h,
                      n(l, ".".concat(h), void 0, this.componentId)
                    ),
                    (i = Ze(i, h));
                }
              }
              return i;
            }),
            e
          );
        })(),
        Nt = t.createContext(void 0);
      Nt.Consumer;
      var Ht = {};
      new Set();
      function Bt(e, n, i) {
        var o = Xe(e),
          r = e,
          a = !Le(e),
          s = n.attrs,
          l = void 0 === s ? be : s,
          c = n.componentId,
          u =
            void 0 === c
              ? (function (e, t) {
                  var n = "string" != typeof e ? "sc" : Ce(e);
                  Ht[n] = (Ht[n] || 0) + 1;
                  var i = "".concat(n, "-").concat(Ae("6.1.1" + n + Ht[n]));
                  return t ? "".concat(t, "-").concat(i) : i;
                })(n.displayName, n.parentComponentId)
              : c,
          h = n.displayName,
          p =
            void 0 === h
              ? (function (e) {
                  return Le(e)
                    ? "styled.".concat(e)
                    : "Styled(".concat(Ve(e), ")");
                })(e)
              : h,
          f =
            n.displayName && n.componentId
              ? "".concat(Ce(n.displayName), "-").concat(n.componentId)
              : n.componentId || u,
          v = o && r.attrs ? r.attrs.concat(l).filter(Boolean) : l,
          g = n.shouldForwardProp;
        if (o && r.shouldForwardProp) {
          var y = r.shouldForwardProp;
          if (n.shouldForwardProp) {
            var m = n.shouldForwardProp;
            g = function (e, t) {
              return y(e, t) && m(e, t);
            };
          } else g = y;
        }
        var b = new Ft(i, f, o ? r.componentStyle : void 0);
        function w(e, n) {
          return (function (e, n, i) {
            var o = e.attrs,
              r = e.componentStyle,
              a = e.defaultProps,
              s = e.foldedComponentIds,
              l = e.styledComponentId,
              c = e.target,
              u = t.useContext(Nt),
              h = Rt(),
              p = e.shouldForwardProp || h.shouldForwardProp,
              f = (function (e, t, n) {
                for (
                  var i,
                    o = d(d({}, t), { className: void 0, theme: n }),
                    r = 0;
                  r < e.length;
                  r += 1
                ) {
                  var a = Ye((i = e[r])) ? i(o) : i;
                  for (var s in a)
                    o[s] =
                      "className" === s
                        ? Ze(o[s], a[s])
                        : "style" === s
                        ? d(d({}, o[s]), a[s])
                        : a[s];
                }
                return (
                  t.className && (o.className = Ze(o.className, t.className)), o
                );
              })(o, n, Se(n, u, a) || we),
              v = f.as || c,
              g = {};
            for (var y in f)
              void 0 === f[y] ||
                "$" === y[0] ||
                "as" === y ||
                "theme" === y ||
                ("forwardedAs" === y
                  ? (g.as = f.forwardedAs)
                  : (p && !p(y, v)) || (g[y] = f[y]));
            var m = (function (e, t) {
                var n = Rt();
                return e.generateAndInjectStyles(t, n.styleSheet, n.stylis);
              })(r, f),
              b = Ze(s, l);
            return (
              m && (b += " " + m),
              f.className && (b += " " + f.className),
              (g[Le(v) && !_e.has(v) ? "class" : "className"] = b),
              (g.ref = i),
              (0, t.createElement)(v, g)
            );
          })(S, e, n);
        }
        w.displayName = p;
        var S = t.forwardRef(w);
        return (
          (S.attrs = v),
          (S.componentStyle = b),
          (S.displayName = p),
          (S.shouldForwardProp = g),
          (S.foldedComponentIds = o
            ? Ze(r.foldedComponentIds, r.styledComponentId)
            : ""),
          (S.styledComponentId = f),
          (S.target = o ? r.target : e),
          Object.defineProperty(S, "defaultProps", {
            get: function () {
              return this._foldedDefaultProps;
            },
            set: function (e) {
              this._foldedDefaultProps = o
                ? (function (e) {
                    for (var t = [], n = 1; n < arguments.length; n++)
                      t[n - 1] = arguments[n];
                    for (var i = 0, o = t; i < o.length; i++) tt(e, o[i], !0);
                    return e;
                  })({}, r.defaultProps, e)
                : e;
            },
          }),
          nt(S, function () {
            return ".".concat(S.styledComponentId);
          }),
          a &&
            Ke(S, e, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              shouldForwardProp: !0,
              styledComponentId: !0,
              target: !0,
            }),
          S
        );
      }
      function Ut(e, t) {
        for (var n = [e[0]], i = 0, o = t.length; i < o; i += 1)
          n.push(t[i], e[i + 1]);
        return n;
      }
      var Wt = function (e) {
        return Object.assign(e, { isCss: !0 });
      };
      function $t(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        if (Ye(e) || et(e)) return Wt(jt(Ut(be, h([e], t, !0))));
        var i = e;
        return 0 === t.length && 1 === i.length && "string" == typeof i[0]
          ? jt(i)
          : Wt(jt(Ut(i, t)));
      }
      function qt(e, t, n) {
        if ((void 0 === n && (n = we), !t)) throw it(1, t);
        var i = function (i) {
          for (var o = [], r = 1; r < arguments.length; r++)
            o[r - 1] = arguments[r];
          return e(t, n, $t.apply(void 0, h([i], o, !1)));
        };
        return (
          (i.attrs = function (i) {
            return qt(
              e,
              t,
              d(d({}, n), {
                attrs: Array.prototype.concat(n.attrs, i).filter(Boolean),
              })
            );
          }),
          (i.withConfig = function (i) {
            return qt(e, t, d(d({}, n), i));
          }),
          i
        );
      }
      var Qt = function (e) {
          return qt(Bt, e);
        },
        Kt = Qt;
      _e.forEach(function (e) {
        Kt[e] = Qt(e);
      });
      !(function () {
        function e(e, t) {
          (this.rules = e),
            (this.componentId = t),
            (this.isStatic = Gt(e)),
            St.registerId(this.componentId + 1);
        }
        (e.prototype.createStyles = function (e, t, n, i) {
          var o = i(Je(jt(this.rules, t, n, i)), ""),
            r = this.componentId + e;
          n.insertRules(r, r, o);
        }),
          (e.prototype.removeStyles = function (e, t) {
            t.clearRules(this.componentId + e);
          }),
          (e.prototype.renderStyles = function (e, t, n, i) {
            e > 2 && St.registerId(this.componentId + e),
              this.removeStyles(e, n),
              this.createStyles(e, t, n, i);
          });
      })();
      (function () {
        function e() {
          var e = this;
          (this._emitSheetCSS = function () {
            var t = e.instance.toString(),
              n = ft(),
              i = Je(
                [
                  n && 'nonce="'.concat(n, '"'),
                  "".concat(ge, '="true"'),
                  "".concat("data-styled-version", '="').concat("6.1.1", '"'),
                ].filter(Boolean),
                " "
              );
            return "<style ".concat(i, ">").concat(t, "</style>");
          }),
            (this.getStyleTags = function () {
              if (e.sealed) throw it(2);
              return e._emitSheetCSS();
            }),
            (this.getStyleElement = function () {
              var n;
              if (e.sealed) throw it(2);
              var i =
                  (((n = {})[ge] = ""),
                  (n["data-styled-version"] = "6.1.1"),
                  (n.dangerouslySetInnerHTML = {
                    __html: e.instance.toString(),
                  }),
                  n),
                o = ft();
              return (
                o && (i.nonce = o),
                [t.createElement("style", d({}, i, { key: "sc-0-0" }))]
              );
            }),
            (this.seal = function () {
              e.sealed = !0;
            }),
            (this.instance = new St({ isServer: !0 })),
            (this.sealed = !1);
        }
        (e.prototype.collectStyles = function (e) {
          if (this.sealed) throw it(2);
          return t.createElement(Tt, { sheet: this.instance }, e);
        }),
          (e.prototype.interleaveWithNodeStream = function (e) {
            throw it(3);
          });
      })(),
        "__sc-".concat(ge, "__");
      const Yt = Kt.div`
  a,
  a:active,
  a:hover {
    outline: 0;
  }

  .button-container {
    display: inline-block;
    height: 6rem;
    width: 6rem;
    margin: 0 1.75rem;
  }

  .button {
    transition: color 0.5s linear;
    height: 6rem;
    width: 6rem;
    color: ${(e) => {
      let { $theme: t } = e;
      return t.primaryTextColor;
    }};
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    position: relative;
    z-index: 1;
    border-radius: 25%;
  }

  .icon {
    height: 4.5rem;
    width: 4.5rem;
    padding: 1rem;
  }

  .icon_title {
    font-size: 1.25rem;
  }

  .button:hover {
    background-color: ${(e) => {
      let { $theme: t } = e;
      return t.shadowColor;
    }};
    box-shadow: 0 0 0.75rem 0.75rem rgba(128, 128, 128, 0.25);
  }

  .button:active {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  .button-container .icon_title {
    display: none;
  }

  .button-container:hover .icon_title {
    display: initial;
  }

  .button-container:hover .icon {
    display: none;
  }

  @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
    .button-container {
      height: 5rem;
      width: 5rem;
      margin: 0 0.8rem;
    }

    .button {
      height: 5rem;
      width: 5rem;
    }

    .icon {
      height: 4rem;
      width: 4rem;
      padding: 0.5rem;
    }

    .icon_title {
      font-size: 1rem;
    }
  }
`,
        Xt = () => {
          const { config: e, theme: n } = (0, t.useContext)(c);
          return (0, r.jsx)(Yt, {
            $theme: n,
            children: e.buttons.map((e) => {
              let { name: t, display: n, ariaLabel: i, icon: o, href: a } = e;
              return (0, r.jsx)(
                "span",
                {
                  className: "button-container",
                  children: (0, r.jsxs)("a", {
                    "data-v2": `button-${n}`,
                    className: "button",
                    "aria-label": i,
                    href: a,
                    rel: "noopener noreferrer",
                    target: "_blank",
                    children: [
                      (0, r.jsx)("div", { className: "icon", children: o }),
                      (0, r.jsx)("span", {
                        "data-v2": n,
                        className: "icon_title",
                        children: n,
                      }),
                    ],
                  }),
                },
                t
              );
            }),
          });
        },
        Zt = $t`
  transition: color 0.5s linear;
  font-weight: normal;
  position: relative;
  z-index: 1;
`,
        Jt = {
          Name: Kt.h1`
    ${Zt};
    font-size: 6rem;
    margin: 0;
    color: ${(e) => {
      let { $theme: t } = e;
      return t.primaryTextColor;
    }};
    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 4.5rem;
    }
  `,
          Title: Kt.h2`
    ${Zt};
    font-size: 3.5rem;
    margin: 4rem 0;
    color: ${(e) => {
      let { $theme: t } = e;
      return t.secondaryTextColor;
    }};
    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 2.5rem;
    }
  `,
        },
        en = () => {
          const { config: e, theme: n } = (0, t.useContext)(c);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(Jt.Name, {
                "data-v2": "name",
                $theme: n,
                children: e.name.display,
              }),
              (0, r.jsx)(Jt.Title, {
                "data-v2": "title",
                $theme: n,
                children: e.title.display,
              }),
            ],
          });
        },
        tn = {
          Container: Kt.footer`
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 0.75rem;
    padding-right: ${(e) => {
      let { $isMobile: t } = e;
      return t ? "1.5rem" : "1rem";
    }};
    z-index: 1;
  `,
          Text: Kt.p`
    transition: color 0.5s linear;
    color: ${(e) => {
      let { $theme: t } = e;
      return t.tertiaryTextColor;
    }};
  `,
          Link: Kt.a`
    transition: color 0.5s linear;
    color: ${(e) => {
      let { $theme: t } = e;
      return t.secondaryTextColor;
    }};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `,
        },
        nn = () => {
          const { isMobile: e, theme: n } = (0, t.useContext)(c);
          return (0, r.jsx)(tn.Container, {
            $isMobile: e,
            children: (0, r.jsxs)(tn.Text, {
              "data-v2": "footer",
              $theme: n,
              children: [
                "Designed and built by ",
                (0, r.jsx)(tn.Link, {
                  "data-v2": "creator",
                  "aria-label":
                    "OuldBelaidOussama's personal website (opens in new window)",
                  href: "https://www.OBelaidOussama.com/",
                  rel: "noopener noreferrer",
                  target: "_blank",
                  $theme: n,
                  children: "OuldBelaid Oussama",
                }),
                !e &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      " | ",
                      (0, r.jsx)(tn.Link, {
                        "data-v2": "source",
                        "aria-label":
                          "Source code for this website (opens in new window)",
                        href: "https://github.com/UBelaid",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        $theme: n,
                        children: "Source",
                      }),
                    ],
                  }),
              ],
            }),
          });
        };
      var on = n(1118),
        rn = n.n(on);
      const an = {
          Container: Kt.div`
    transition: background-color 0.5s linear;
    position: absolute;
    background-color: ${(e) => {
      let { $theme: t } = e;
      return t.background;
    }};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    z-index: 0;
  `,
        },
        sn = () => {
          const { theme: e } = (0, t.useContext)(c);
          return (0, r.jsx)(an.Container, {
            "data-v2": "particles",
            $theme: e,
            children: (0, r.jsx)(rn(), {
              width: "100vw",
              height: "100vh",
              options: i,
            }),
          });
        },
        ln = () =>
          (0, r.jsx)("svg", {
            "aria-label": "Email icon",
            role: "img",
            viewBox: "0 0 512 512",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              fill: "currentColor",
              d: "M464.004 4.326L15.986 262.714c-23 13.3-20.7 47.198 3.8 57.297l140.206 57.997v101.996c0 30.198 37.802 43.298 56.702 20.299l60.703-73.797L403.8 478.704c19.101 7.9 40.702-4.2 43.802-24.7l64.003-417.08c4.1-26.698-24.601-45.897-47.602-32.598zm-272.01 475.678v-88.796l54.501 22.499zm224.008-30.899l-206.208-85.196L409.302 128.12c4.8-5.6-2.9-13.199-8.5-8.4l-255.31 217.59-113.505-46.797L480.004 32.025z",
            }),
          }),
        cn = () =>
          (0, r.jsx)("svg", {
            "aria-label": "GitHub icon",
            role: "img",
            viewBox: "0 0 512 512",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              fill: "currentColor",
              d: "M296.133 354.174c49.885-5.891 102.942-24.029 102.942-110.192 0-24.49-8.624-44.448-22.67-59.869 2.266-5.89 9.515-28.114-2.734-58.947 0 0-18.139-5.898-60.759 22.669-18.139-4.983-38.09-8.163-56.682-8.163-19.053 0-39.011 3.18-56.697 8.163-43.082-28.567-61.22-22.669-61.22-22.669-12.241 30.833-4.983 53.057-2.718 58.947-14.061 15.42-22.677 35.379-22.677 59.869 0 86.163 53.057 104.301 102.942 110.192-6.344 5.452-12.241 15.873-14.507 30.387-12.702 5.438-45.808 15.873-65.758-18.592 0 0-11.795-21.31-34.012-22.669 0 0-22.224-.453-1.813 13.592 0 0 14.96 6.812 24.943 32.653 0 0 13.6 43.089 76.179 29.48v38.543c0 5.906-4.53 12.702-15.865 10.89C96.139 438.977 32.2 354.626 32.2 255.77c0-123.807 100.216-224.022 224.03-224.022 123.347 0 224.023 100.216 223.57 224.022 0 98.856-63.946 182.754-152.828 212.688-11.342 2.266-15.873-4.53-15.873-10.89V395.45c.001-20.873-6.811-34.465-14.966-41.276zM512 256.23C512 114.73 397.263 0 256.23 0 114.73 0 0 114.73 0 256.23 0 397.263 114.73 512 256.23 512 397.263 512 512 397.263 512 256.23z",
            }),
          }),
        un = () =>
          (0, r.jsx)("svg", {
            "aria-label": "LinkedIn icon",
            role: "img",
            viewBox: "0 0 512 512",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              fill: "currentColor",
              d: "M160.008 423h-70V197h70zm6.984-298.004c0-22.629-18.36-40.996-40.976-40.996C103.312 84 85 102.367 85 124.996 85 147.633 103.313 166 126.016 166c22.617 0 40.976-18.367 40.976-41.004zM422 298.664C422 237.996 409.184 193 338.312 193c-34.054 0-56.914 17.031-66.246 34.742H272V197h-68v226h68V310.79c0-29.388 7.48-57.856 43.906-57.856 35.93 0 37.094 33.605 37.094 59.722V423h69zM512 452V60c0-33.086-26.914-60-60-60H60C26.914 0 0 26.914 0 60v392c0 33.086 26.914 60 60 60h392c33.086 0 60-26.914 60-60zM455.26 32C466.694 32 480 45.305 480 56.74v398.52c0 11.435-13.305 24.74-24.74 24.74H56.74C45.306 480 32 466.695 32 455.26V56.74C32 45.306 45.305 32 56.74 32zM452 40",
            }),
          }),
        dn = () =>
          (0, r.jsx)("svg", {
            "aria-label": "Moon icon",
            role: "img",
            viewBox: "0 0 512 512",
            xmlns: "http://www.w3.org/2000/svg",
            height: "4.5em",
            width: "4.5em",
            children: (0, r.jsx)("path", {
              fill: "#F1C40F",
              d: "M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 29-80.788-15.022-88.919A257.936 257.936 0 00279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.69 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z",
            }),
          }),
        hn = () =>
          (0, r.jsx)("svg", {
            "aria-label": "Resume icon",
            role: "img",
            viewBox: "0 0 512 512",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              fill: "currentColor",
              d: "M433.9 97.95L350 14.05c-9-9-21.2-14.1-33.9-14.1H112c-26.5.1-48 21.6-48 48.1v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-332.1c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H320v-95.5c2.8.7 5.3 2.1 7.4 4.2zM400 480.05H112c-8.8 0-16-7.2-16-16v-416c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-48-244v8c0 6.6-5.4 12-12 12H172c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H172c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H172c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12z",
            }),
          }),
        pn = () =>
          (0, r.jsx)("svg", {
            "aria-label": "Sun icon",
            role: "img",
            viewBox: "0 0 512 512",
            xmlns: "http://www.w3.org/2000/svg",
            height: "4.5em",
            width: "4.5em",
            children: (0, r.jsx)("path", {
              fill: "#FF8C00",
              d: "M494.103 221.914l-59.788-40.498 13.697-70.996c2.6-13.2-1.6-26.8-11.097-36.399-9.598-9.5-23.196-13.699-36.193-11.1l-70.886 13.7-40.393-59.897c-15.097-22.299-51.89-22.299-66.986 0l-40.393 59.897-70.786-13.7c-13.297-2.499-26.795 1.6-36.293 11.2-9.498 9.6-13.697 23.1-11.097 36.299l13.697 70.996-59.788 40.498C6.599 229.514 0 242.014 0 255.513c0 13.499 6.699 25.998 17.797 33.498l59.788 40.498-13.697 70.996c-2.6 13.2 1.6 26.8 11.097 36.299 9.498 9.5 22.896 13.699 36.293 11.1l70.786-13.7 40.393 59.897C229.955 505.3 242.553 512 255.95 512c13.397 0 25.995-6.7 33.493-17.8l40.393-59.896 70.886 13.7c13.397 2.699 26.794-1.6 36.293-11.1 9.498-9.5 13.597-23.1 11.097-36.299l-13.697-70.996 59.788-40.498c11.098-7.5 17.797-20.1 17.797-33.498-.1-13.6-6.699-26.1-17.897-33.699zM381.226 307.51l17.596 91.196-90.982-17.6-51.89 76.897-51.89-76.997-90.882 17.6 17.596-91.196-76.785-51.997 76.785-51.998-17.596-91.195 90.982 17.599 51.79-76.797 51.89 76.897 90.982-17.6-17.596 91.096 76.785 51.998zM255.95 152.018c-57.289 0-103.98 46.697-103.98 103.995 0 57.297 46.691 103.994 103.98 103.994s103.98-46.697 103.98-103.995c0-57.297-46.691-103.994-103.98-103.994zm0 159.992c-30.894 0-55.989-25.099-55.989-55.997 0-30.899 25.095-55.998 55.989-55.998s55.99 25.099 55.99 55.998c0 30.898-25.096 55.997-55.99 55.997z",
            }),
          }),
        fn = {
          Container: Kt.div`
    position: fixed;
    z-index: 1;
    top: 1rem;
    right: 1rem;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    :active {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  `,
          Toggle: Kt.input`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  `,
          Switch: Kt.label`
    cursor: pointer;
    display: flex;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.75rem;
    background-color: ${(e) => {
      let { $theme: t } = e;
      return t.shadowColor;
    }};
    border-radius: 25%;
    box-shadow: 0 0 0.25rem 0.25rem rgba(128, 128, 128, 0.25);
    align-items: center;
    justify-content: center;
    transition: background-color 0.5s linear;
    font-size: 0.5rem;
  `,
          VisuallyHidden: Kt.span`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
    white-space: nowrap;
  `,
        },
        vn = () => {
          const { theme: e, setTheme: n } = (0, t.useContext)(c),
            i = "dark" === e.key,
            o = `Currently in ${i ? "dark" : "light"} mode, switch to ${
              i ? "light" : "dark"
            } mode`,
            a = "toggle-description";
          return (0, r.jsxs)(fn.Container, {
            children: [
              (0, r.jsx)(fn.VisuallyHidden, {
                id: a,
                children:
                  "Switch between dark and light mode for visual comfort.",
              }),
              (0, r.jsx)(fn.Toggle, {
                "data-v2": "toggle",
                id: "toggle",
                name: "toggle",
                type: "checkbox",
                checked: i,
                "aria-label": o,
                "aria-describedby": a,
                onChange: (e) => {
                  let { target: t } = e;
                  ((e) => {
                    const t = e ? "dark" : "light";
                    localStorage.setItem("theme", t), n(t);
                  })(t.checked);
                },
              }),
              (0, r.jsxs)(fn.Switch, {
                htmlFor: "toggle",
                $theme: e,
                children: [
                  (0, r.jsx)(fn.VisuallyHidden, { children: o }),
                  i ? (0, r.jsx)(dn, {}) : (0, r.jsx)(pn, {}),
                ],
              }),
            ],
          });
        },
        gn = {
          name: { display: "OuldBelaidOussama" },
          title: { display: "FullStack Developer" },
          buttons: [
            {
              name: "github",
              display: "GitHub",
              ariaLabel: "GitHub profile (opens in new window)",
              icon: (0, r.jsx)(cn, {}),
              href: "https://github.com/UBelaid",
            },
            {
              name: "linked-in",
              display: "LinkedIn",
              ariaLabel: "LinkedIn profile (opens in new window)",
              icon: (0, r.jsx)(un, {}),
              href: "https://www.linkedin.com/in/oussama-o-belaid0235676",
            },
            {
              name: "resume",
              display: "Resume",
              ariaLabel: "Resume in Google Drive (opens in new window)",
              icon: (0, r.jsx)(hn, {}),
              href: "https://drive.google.com/file/d/1wqGqzB7HMeE5UklGA25CSJ1KBKDCOyeB/view?usp=sharing",
            },
            {
              name: "email",
              display: "Email",
              ariaLabel: "Email contact (opens in new window)",
              icon: (0, r.jsx)(ln, {}),
              href: "mailto:ousama.o.belaid@gmail.com",
            },
          ],
        },
        yn = () => {
          const [e, n] = (0, t.useState)(!1),
            [i, o] = (0, t.useState)(!1);
          return (
            (0, t.useEffect)(() => {
              e ||
                (() => {
                  var e;
                  null !==
                    (e = window.matchMedia(
                      "(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)"
                    )) &&
                    void 0 !== e &&
                    e.matches &&
                    o(!0);
                  const t = localStorage.getItem("theme");
                  "true" === t
                    ? localStorage.setItem("theme", "dark")
                    : "false" === t && localStorage.setItem("theme", "light"),
                    n(!0);
                })();
            }, [e]),
            e
              ? (0, r.jsx)(u, {
                  config: gn,
                  isMobile: i,
                  children: (0, r.jsxs)("main", {
                    className: "app",
                    children: [
                      (0, r.jsx)(vn, {}),
                      (0, r.jsx)(en, {}),
                      (0, r.jsx)(Xt, {}),
                      (0, r.jsx)(nn, {}),
                      (0, r.jsx)(sn, {}),
                    ],
                  }),
                })
              : (0, r.jsx)(r.Fragment, {})
          );
        },
        mn = document.getElementById("root");
      if (!mn) throw new Error("Failed to get the root element.");
      (0, e.s)(mn).render(
        (0, r.jsx)(t.StrictMode, { children: (0, r.jsx)(yn, {}) })
      );
    })();
})();
//# sourceMappingURL=main.94fb0415.js.map
