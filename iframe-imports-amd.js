!function (t) {
  var e = {};function i(s) {
    if (e[s]) return e[s].exports;var o = e[s] = { i: s, l: !1, exports: {} };return t[s].call(o.exports, o, o.exports, i), o.l = !0, o.exports;
  }i.m = t, i.c = e, i.d = function (t, e, s) {
    i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
  }, i.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
  }, i.t = function (t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;if (4 & e && "object" == typeof t && t && t.__esModule) return t;var s = Object.create(null);if (i.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var o in t) i.d(s, o, function (e) {
      return t[e];
    }.bind(null, o));return s;
  }, i.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };return i.d(e, "a", e), e;
  }, i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, i.p = "", i(i.s = 0);
}([function (t, e, i) {
  "use strict";
  i.r(e);
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const s = new WeakMap(),
        o = t => "function" == typeof t && s.has(t),
        n = void 0 !== window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
        r = (t, e, i = null) => {
    let s = e;for (; s !== i;) {
      const e = s.nextSibling;t.removeChild(s), s = e;
    }
  },
        a = {},
        l = `{{lit-${String(Math.random()).slice(2)}}}`,
        d = `\x3c!--${l}--\x3e`,
        c = new RegExp(`${l}|${d}`),
        p = (() => {
    const t = document.createElement("div");return t.setAttribute("style", "{{bad value}}"), "{{bad value}}" !== t.getAttribute("style");
  })();class h {
    constructor(t, e) {
      this.parts = [], this.element = e;let i = -1,
          s = 0;const o = [],
            n = e => {
        const r = e.content,
              a = document.createTreeWalker(r, 133, null, !1);let d, h;for (; a.nextNode();) {
          i++, d = h;const e = h = a.currentNode;if (1 === e.nodeType) {
            if (e.hasAttributes()) {
              const o = e.attributes;let n = 0;for (let t = 0; t < o.length; t++) o[t].value.indexOf(l) >= 0 && n++;for (; n-- > 0;) {
                const o = t.strings[s],
                      n = f.exec(o)[2],
                      r = p && "style" === n ? "style$" : /^[a-zA-Z-]*$/.test(n) ? n : n.toLowerCase(),
                      a = e.getAttribute(r).split(c);this.parts.push({ type: "attribute", index: i, name: n, strings: a }), e.removeAttribute(r), s += a.length - 1;
              }
            }"TEMPLATE" === e.tagName && n(e);
          } else if (3 === e.nodeType) {
            const t = e.nodeValue;if (t.indexOf(l) < 0) continue;const n = e.parentNode,
                  r = t.split(c),
                  a = r.length - 1;s += a;for (let t = 0; t < a; t++) n.insertBefore("" === r[t] ? m() : document.createTextNode(r[t]), e), this.parts.push({ type: "node", index: i++ });n.insertBefore("" === r[a] ? m() : document.createTextNode(r[a]), e), o.push(e);
          } else if (8 === e.nodeType) if (e.nodeValue === l) {
            const t = e.parentNode,
                  n = e.previousSibling;null === n || n !== d || n.nodeType !== Node.TEXT_NODE ? t.insertBefore(m(), e) : i--, this.parts.push({ type: "node", index: i++ }), o.push(e), null === e.nextSibling ? t.insertBefore(m(), e) : i--, h = d, s++;
          } else {
            let t = -1;for (; -1 !== (t = e.nodeValue.indexOf(l, t + 1));) this.parts.push({ type: "node", index: -1 });
          }
        }
      };n(e);for (const t of o) t.parentNode.removeChild(t);
    }
  }const u = t => -1 !== t.index,
        m = () => document.createComment(""),
        f = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  class g {
    constructor(t, e, i) {
      this._parts = [], this.template = t, this.processor = e, this.options = i;
    }update(t) {
      let e = 0;for (const i of this._parts) void 0 !== i && i.setValue(t[e]), e++;for (const t of this._parts) void 0 !== t && t.commit();
    }_clone() {
      const t = n ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
            e = this.template.parts;let i = 0,
          s = 0;const o = t => {
        const n = document.createTreeWalker(t, 133, null, !1);let r = n.nextNode();for (; i < e.length && null !== r;) {
          const t = e[i];if (u(t)) {
            if (s === t.index) {
              if ("node" === t.type) {
                const t = this.processor.handleTextExpression(this.options);t.insertAfterNode(r), this._parts.push(t);
              } else this._parts.push(...this.processor.handleAttributeExpressions(r, t.name, t.strings, this.options));i++;
            } else s++, "TEMPLATE" === r.nodeName && o(r.content), r = n.nextNode();
          } else this._parts.push(void 0), i++;
        }
      };return o(t), n && (document.adoptNode(t), customElements.upgrade(t)), t;
    }
  }
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */class y {
    constructor(t, e, i, s) {
      this.strings = t, this.values = e, this.type = i, this.processor = s;
    }getHTML() {
      const t = this.strings.length - 1;let e = "",
          i = !0;for (let s = 0; s < t; s++) {
        const t = this.strings[s];e += t;const o = t.lastIndexOf(">");!(i = (o > -1 || i) && -1 === t.indexOf("<", o + 1)) && p && (e = e.replace(f, (t, e, i, s) => "style" === i ? `${e}style$${s}` : t)), e += i ? d : l;
      }return e += this.strings[t];
    }getTemplateElement() {
      const t = document.createElement("template");return t.innerHTML = this.getHTML(), t;
    }
  }
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const v = t => null === t || !("object" == typeof t || "function" == typeof t);class _ {
    constructor(t, e, i) {
      this.dirty = !0, this.element = t, this.name = e, this.strings = i, this.parts = [];for (let t = 0; t < i.length - 1; t++) this.parts[t] = this._createPart();
    }_createPart() {
      return new b(this);
    }_getValue() {
      const t = this.strings,
            e = t.length - 1;let i = "";for (let s = 0; s < e; s++) {
        i += t[s];const e = this.parts[s];if (void 0 !== e) {
          const t = e.value;if (null != t && (Array.isArray(t) || "string" != typeof t && t[Symbol.iterator])) for (const e of t) i += "string" == typeof e ? e : String(e);else i += "string" == typeof t ? t : String(t);
        }
      }return i += t[e];
    }commit() {
      this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
    }
  }class b {
    constructor(t) {
      this.value = void 0, this.committer = t;
    }setValue(t) {
      t === a || v(t) && t === this.value || (this.value = t, o(t) || (this.committer.dirty = !0));
    }commit() {
      for (; o(this.value);) {
        const t = this.value;this.value = a, t(this);
      }this.value !== a && this.committer.commit();
    }
  }class w {
    constructor(t) {
      this.value = void 0, this._pendingValue = void 0, this.options = t;
    }appendInto(t) {
      this.startNode = t.appendChild(m()), this.endNode = t.appendChild(m());
    }insertAfterNode(t) {
      this.startNode = t, this.endNode = t.nextSibling;
    }appendIntoPart(t) {
      t._insert(this.startNode = m()), t._insert(this.endNode = m());
    }insertAfterPart(t) {
      t._insert(this.startNode = m()), this.endNode = t.endNode, t.endNode = this.startNode;
    }setValue(t) {
      this._pendingValue = t;
    }commit() {
      for (; o(this._pendingValue);) {
        const t = this._pendingValue;this._pendingValue = a, t(this);
      }const t = this._pendingValue;t !== a && (v(t) ? t !== this.value && this._commitText(t) : t instanceof y ? this._commitTemplateResult(t) : t instanceof Node ? this._commitNode(t) : Array.isArray(t) || t[Symbol.iterator] ? this._commitIterable(t) : void 0 !== t.then ? this._commitPromise(t) : this._commitText(t));
    }_insert(t) {
      this.endNode.parentNode.insertBefore(t, this.endNode);
    }_commitNode(t) {
      this.value !== t && (this.clear(), this._insert(t), this.value = t);
    }_commitText(t) {
      const e = this.startNode.nextSibling;t = null == t ? "" : t, e === this.endNode.previousSibling && e.nodeType === Node.TEXT_NODE ? e.textContent = t : this._commitNode(document.createTextNode("string" == typeof t ? t : String(t))), this.value = t;
    }_commitTemplateResult(t) {
      const e = this.options.templateFactory(t);if (this.value && this.value.template === e) this.value.update(t.values);else {
        const i = new g(e, t.processor, this.options),
              s = i._clone();i.update(t.values), this._commitNode(s), this.value = i;
      }
    }_commitIterable(t) {
      Array.isArray(this.value) || (this.value = [], this.clear());const e = this.value;let i,
          s = 0;for (const o of t) void 0 === (i = e[s]) && (i = new w(this.options), e.push(i), 0 === s ? i.appendIntoPart(this) : i.insertAfterPart(e[s - 1])), i.setValue(o), i.commit(), s++;s < e.length && (e.length = s, this.clear(i && i.endNode));
    }_commitPromise(t) {
      this.value = t, t.then(e => {
        this.value === t && (this.setValue(e), this.commit());
      });
    }clear(t = this.startNode) {
      r(this.startNode.parentNode, t.nextSibling, this.endNode);
    }
  }class x {
    constructor(t, e, i) {
      if (this.value = void 0, this._pendingValue = void 0, 2 !== i.length || "" !== i[0] || "" !== i[1]) throw new Error("Boolean attributes can only contain a single expression");this.element = t, this.name = e, this.strings = i;
    }setValue(t) {
      this._pendingValue = t;
    }commit() {
      for (; o(this._pendingValue);) {
        const t = this._pendingValue;this._pendingValue = a, t(this);
      }if (this._pendingValue === a) return;const t = !!this._pendingValue;this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name)), this.value = t, this._pendingValue = a;
    }
  }class S extends _ {
    constructor(t, e, i) {
      super(t, e, i), this.single = 2 === i.length && "" === i[0] && "" === i[1];
    }_createPart() {
      return new P(this);
    }_getValue() {
      return this.single ? this.parts[0].value : super._getValue();
    }commit() {
      this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
    }
  }class P extends b {}let N = !1;try {
    const t = { get capture() {
        return N = !0, !1;
      } };window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
  } catch (t) {}class T {
    constructor(t, e, i) {
      this.value = void 0, this._pendingValue = void 0, this.element = t, this.eventName = e, this.eventContext = i;
    }setValue(t) {
      this._pendingValue = t;
    }commit() {
      for (; o(this._pendingValue);) {
        const t = this._pendingValue;this._pendingValue = a, t(this);
      }if (this._pendingValue === a) return;const t = this._pendingValue,
            e = this.value,
            i = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive),
            s = null != t && (null == e || i);i && this.element.removeEventListener(this.eventName, this, this._options), this._options = $(t), s && this.element.addEventListener(this.eventName, this, this._options), this.value = t, this._pendingValue = a;
    }handleEvent(t) {
      ("function" == typeof this.value ? this.value : "function" == typeof this.value.handleEvent ? this.value.handleEvent : () => null).call(this.eventContext || this.element, t);
    }
  }const $ = t => t && (N ? { capture: t.capture, passive: t.passive, once: t.once } : t.capture);
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */const E = new class {
    handleAttributeExpressions(t, e, i, s) {
      const o = e[0];return "." === o ? new S(t, e.slice(1), i).parts : "@" === o ? [new T(t, e.slice(1), s.eventContext)] : "?" === o ? [new x(t, e.slice(1), i)] : new _(t, e, i).parts;
    }handleTextExpression(t) {
      return new w(t);
    }
  }();
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */function C(t) {
    let e = A.get(t.type);void 0 === e && (e = new Map(), A.set(t.type, e));let i = e.get(t.strings);return void 0 === i && (i = new h(t, t.getTemplateElement()), e.set(t.strings, i)), i;
  }const A = new Map(),
        V = new WeakMap(),
        O = (t, ...e) => new y(t, e, "html", E),
        M = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT;
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */function R(t, e) {
    const { element: { content: i }, parts: s } = t,
          o = document.createTreeWalker(i, M, null, !1);let n = k(s),
        r = s[n],
        a = -1,
        l = 0;const d = [];let c = null;for (; o.nextNode();) {
      a++;const t = o.currentNode;for (t.previousSibling === c && (c = null), e.has(t) && (d.push(t), null === c && (c = t)), null !== c && l++; void 0 !== r && r.index === a;) r.index = null !== c ? -1 : r.index - l, r = s[n = k(s, n)];
    }d.forEach(t => t.parentNode.removeChild(t));
  }const U = t => {
    let e = t.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? 0 : 1;const i = document.createTreeWalker(t, M, null, !1);for (; i.nextNode();) e++;return e;
  },
        k = (t, e = -1) => {
    for (let i = e + 1; i < t.length; i++) {
      const e = t[i];if (u(e)) return i;
    }return -1;
  };
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const j = (t, e) => `${t}--${e}`;let L = !0;void 0 === window.ShadyCSS ? L = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."), L = !1);const z = ["html", "svg"],
        F = new Set(),
        q = (t, e, i) => {
    F.add(i);const s = t.querySelectorAll("style");if (0 === s.length) return;const o = document.createElement("style");for (let t = 0; t < s.length; t++) {
      const e = s[t];e.parentNode.removeChild(e), o.textContent += e.textContent;
    }if ((t => {
      z.forEach(e => {
        const i = A.get(j(e, t));void 0 !== i && i.forEach(t => {
          const { element: { content: e } } = t,
                i = new Set();Array.from(e.querySelectorAll("style")).forEach(t => {
            i.add(t);
          }), R(t, i);
        });
      });
    })(i), function (t, e, i = null) {
      const { element: { content: s }, parts: o } = t;if (null === i || void 0 === i) return void s.appendChild(e);const n = document.createTreeWalker(s, M, null, !1);let r = k(o),
          a = 0,
          l = -1;for (; n.nextNode();) for (l++, n.currentNode === i && (a = U(e), i.parentNode.insertBefore(e, i)); -1 !== r && o[r].index === l;) {
        if (a > 0) {
          for (; -1 !== r;) o[r].index += a, r = k(o, r);return;
        }r = k(o, r);
      }
    }(e, o, e.element.content.firstChild), window.ShadyCSS.prepareTemplateStyles(e.element, i), window.ShadyCSS.nativeShadow) {
      const i = e.element.content.querySelector("style");t.insertBefore(i.cloneNode(!0), t.firstChild);
    } else {
      e.element.content.insertBefore(o, e.element.content.firstChild);const t = new Set();t.add(o), R(e, t);
    }
  },
        I = t => null !== t,
        B = t => t ? "" : null,
        W = (t, e) => e !== t && (e == e || t == t),
        H = { attribute: !0, type: String, reflect: !1, hasChanged: W },
        D = new Promise(t => t(!0)),
        X = 1,
        G = 4,
        Z = 8;class J extends HTMLElement {
    constructor() {
      super(), this._updateState = 0, this._instanceProperties = void 0, this._updatePromise = D, this._changedProperties = new Map(), this._reflectingProperties = void 0, this.initialize();
    }static get observedAttributes() {
      this._finalize();const t = [];for (const [e, i] of this._classProperties) {
        const s = this._attributeNameForProperty(e, i);void 0 !== s && (this._attributeToPropertyMap.set(s, e), t.push(s));
      }return t;
    }static createProperty(t, e = H) {
      if (!this.hasOwnProperty("_classProperties")) {
        this._classProperties = new Map();const t = Object.getPrototypeOf(this)._classProperties;void 0 !== t && t.forEach((t, e) => this._classProperties.set(e, t));
      }if (this._classProperties.set(t, e), this.prototype.hasOwnProperty(t)) return;const i = "symbol" == typeof t ? Symbol() : `__${t}`;Object.defineProperty(this.prototype, t, { get() {
          return this[i];
        }, set(s) {
          const o = this[t];this[i] = s, this._requestPropertyUpdate(t, o, e);
        }, configurable: !0, enumerable: !0 });
    }static _finalize() {
      if (this.hasOwnProperty("_finalized") && this._finalized) return;const t = Object.getPrototypeOf(this);"function" == typeof t._finalize && t._finalize(), this._finalized = !0, this._attributeToPropertyMap = new Map();const e = this.properties,
            i = [...Object.getOwnPropertyNames(e), ...("function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : [])];for (const t of i) this.createProperty(t, e[t]);
    }static _attributeNameForProperty(t, e) {
      const i = void 0 !== e && e.attribute;return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }static _valueHasChanged(t, e, i = W) {
      return i(t, e);
    }static _propertyValueFromAttribute(t, e) {
      const i = e && e.type;if (void 0 === i) return t;const s = i === Boolean ? I : "function" == typeof i ? i : i.fromAttribute;return s ? s(t) : t;
    }static _propertyValueToAttribute(t, e) {
      if (void 0 === e || void 0 === e.reflect) return;return (e.type === Boolean ? B : e.type && e.type.toAttribute || String)(t);
    }initialize() {
      this.renderRoot = this.createRenderRoot(), this._saveInstanceProperties();
    }_saveInstanceProperties() {
      for (const [t] of this.constructor._classProperties) if (this.hasOwnProperty(t)) {
        const e = this[t];delete this[t], this._instanceProperties || (this._instanceProperties = new Map()), this._instanceProperties.set(t, e);
      }
    }_applyInstanceProperties() {
      for (const [t, e] of this._instanceProperties) this[t] = e;this._instanceProperties = void 0;
    }createRenderRoot() {
      return this.attachShadow({ mode: "open" });
    }connectedCallback() {
      this._updateState & X ? void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this) : this.requestUpdate();
    }disconnectedCallback() {}attributeChangedCallback(t, e, i) {
      e !== i && this._attributeToProperty(t, i);
    }_propertyToAttribute(t, e, i = H) {
      const s = this.constructor,
            o = s._propertyValueToAttribute(e, i);if (void 0 !== o) {
        const e = s._attributeNameForProperty(t, i);void 0 !== e && (this._updateState = this._updateState | Z, null === o ? this.removeAttribute(e) : this.setAttribute(e, o), this._updateState = this._updateState & ~Z);
      }
    }_attributeToProperty(t, e) {
      if (!(this._updateState & Z)) {
        const i = this.constructor,
              s = i._attributeToPropertyMap.get(t);if (void 0 !== s) {
          const t = i._classProperties.get(s);this[s] = i._propertyValueFromAttribute(e, t);
        }
      }
    }requestUpdate(t, e) {
      if (void 0 !== t) {
        const i = this.constructor._classProperties.get(t) || H;return this._requestPropertyUpdate(t, e, i);
      }return this._invalidate();
    }_requestPropertyUpdate(t, e, i) {
      return this.constructor._valueHasChanged(this[t], e, i.hasChanged) ? (this._changedProperties.has(t) || this._changedProperties.set(t, e), !0 === i.reflect && (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map()), this._reflectingProperties.set(t, i)), this._invalidate()) : this.updateComplete;
    }async _invalidate() {
      if (!this._hasRequestedUpdate) {
        let t;this._updateState = this._updateState | G;const e = this._updatePromise;this._updatePromise = new Promise(e => t = e), await e, this._validate(), t(!this._hasRequestedUpdate);
      }return this.updateComplete;
    }get _hasRequestedUpdate() {
      return this._updateState & G;
    }_validate() {
      if (this._instanceProperties && this._applyInstanceProperties(), this.shouldUpdate(this._changedProperties)) {
        const t = this._changedProperties;this.update(t), this._markUpdated(), this._updateState & X || (this._updateState = this._updateState | X, this.firstUpdated(t)), this.updated(t);
      } else this._markUpdated();
    }_markUpdated() {
      this._changedProperties = new Map(), this._updateState = this._updateState & ~G;
    }get updateComplete() {
      return this._updatePromise;
    }shouldUpdate(t) {
      return !0;
    }update(t) {
      if (void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0) {
        for (const [t, e] of this._reflectingProperties) this._propertyToAttribute(t, this[t], e);this._reflectingProperties = void 0;
      }
    }updated(t) {}firstUpdated(t) {}
  }J._attributeToPropertyMap = new Map(), J._finalized = !0, J._classProperties = new Map(), J.properties = {};
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  K((t, e) => t.querySelector(e)), K((t, e) => t.querySelectorAll(e));function K(t) {
    return e => (i, s) => {
      Object.defineProperty(i, s, { get() {
          return t(this.renderRoot, e);
        }, enumerable: !0, configurable: !0 });
    };
  }
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  class Q extends J {
    update(t) {
      super.update(t);const e = this.render();e instanceof y && this.constructor.render(e, this.renderRoot, { scopeName: this.localName, eventContext: this });
    }render() {}
  }Q.render = (t, e, i) => {
    const s = i.scopeName,
          o = V.has(e);if (((t, e, i) => {
      let s = V.get(e);void 0 === s && (r(e, e.firstChild), V.set(e, s = new w(Object.assign({ templateFactory: C }, i))), s.appendInto(e)), s.setValue(t), s.commit();
    })(t, e, Object.assign({ templateFactory: (t => e => {
        const i = j(e.type, t);let s = A.get(i);void 0 === s && (s = new Map(), A.set(i, s));let o = s.get(e.strings);if (void 0 === o) {
          const i = e.getTemplateElement();L && window.ShadyCSS.prepareTemplateDom(i, t), o = new h(e, i), s.set(e.strings, o);
        }return o;
      })(s) }, i)), e instanceof ShadowRoot && L && t instanceof y) {
      if (!F.has(s)) {
        const t = V.get(e).value;q(e, t.template, s);
      }o || window.ShadyCSS.styleElement(e.host);
    }
  };class Y extends Q {
    render() {
      const { data: t } = this;let e = `${window.cloudinaryURL}/image/upload/c_scale,f_auto,w_64/v${t.version}/${t.public_id}.${t.format}`,
          i = `${window.cloudinaryURL}/image/upload/f_auto/v${t.version}/${t.public_id}.${t.format}`;"svg" === t.format && (i = `${window.cloudinaryURL}/image/upload/v${t.version}/${t.public_id}.${t.format}`);let s = "100%";return O`
      <style>
        :host {
          display: block;
          position:relative;
          box-sizing:border-box;
        }

        img {
          position: absolute;
          top:0;
          left:0;
          width: 100%;
          display:block;
        }

        picture {
          display: flex;
          position:relative;
          width:100%;
          overflow:hidden;
        }

        picture[loading] {
          background:#e2e2e2;
        }

        #placeholder {
          filter:blur(5px);
          transition: opacity 0.5s;
        }

        #image {
          transition: opacity 0.7s;
        }

        [loading] {
          opacity:0;
        }
      </style>
      <picture loading style="padding-bottom: ${s = t.width < t.height ? "" + t.width / t.height * 100 : "" + t.height / t.width * 100}%">
        <img id="placeholder" loading src=${e}>
        <img id="image" loading src=${i}>
      </picture>
`;
    }static get is() {
      return "ht-wysiwyg-image";
    }static get properties() {
      return { data: { type: Object } };
    }firstUpdated() {
      this.shadowRoot.querySelector("picture").removeAttribute("loading", ""), this.shadowRoot.querySelectorAll("img").forEach(t => {
        t.addEventListener("load", t => {
          t.target.removeAttribute("loading", "");
        });
      });
    }
  }customElements.define(Y.is, Y);class tt extends Q {
    render() {
      const { data: t } = this;return O`
      <style>
        :host {
          display: block;
          position:relative;
          box-sizing:border-box;
        }
      </style>
      <div id="container">
        <video width="100%" height="auto" autoplay loop muted="muted" poster=${`${window.cloudinaryURL}/image/upload/v${t.version}/${t.public_id}.jpg`}>
            <source type="video/mp4" src=${`${window.cloudinaryURL}/image/upload/v${t.version}/${t.public_id}.mp4`}>
            <source type="video/webm" src=${`${window.cloudinaryURL}/image/upload/v${t.version}/${t.public_id}.webm`}>
        </video>
      </div>
`;
    }static get is() {
      return "ht-wysiwyg-gif";
    }static get properties() {
      return { data: { type: Object } };
    }
  }customElements.define(tt.is, tt);class et extends Q {
    render() {
      const { data: t } = this;return O`
      <style>
        :host {
          display: block;
          position:relative;
          box-sizing:border-box;
        }
      </style>
      <div id="container">
        <video width="100%" height="auto" controls="controls" poster=${`${window.cloudinaryURL}/video/upload/v${t.version}/${t.public_id}.jpg`}>
            <source type="video/mp4" src=${`${window.cloudinaryURL}/video/upload/v${t.version}/${t.public_id}.mp4`}>
            <source type="video/webm" src=${`${window.cloudinaryURL}/video/upload/v${t.version}/${t.public_id}.webm`}>
        </video>
      </div>
`;
    }static get is() {
      return "ht-wysiwyg-video";
    }static get properties() {
      return { data: { type: Object } };
    }
  }customElements.define(et.is, et);class it extends Q {
    render() {
      const { data: t } = this;return O`
      <style>
        :host {
          display: block;
          position:relative;
          box-sizing:border-box;
          overflow:hidden;
        }

        iframe {
          display:block;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          height: 100%;
          width: 100%;
          position: absolute;
        }

        #container {
          display: block;
          padding-bottom: 56.25%;
          max-height: 56.25%;
          height: 100%;
          width: 100%;
          background:black;
        }
      </style>
      <div id="container">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${t.videoID}?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>
      </div>
`;
    }static get is() {
      return "ht-wysiwyg-youtube";
    }static get properties() {
      return { data: { type: String } };
    }
  }customElements.define(it.is, it);
}]);
