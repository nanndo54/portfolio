var e = Object.defineProperty,
  t = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  a = (t, n, r) =>
    n in t
      ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[n] = r),
  i = (e, t) => {
    for (var n in t || (t = {})) o.call(t, n) && a(e, n, t[n])
    if (r) for (var n of r(t)) s.call(t, n) && a(e, n, t[n])
    return e
  },
  l = (e, r) => t(e, n(r))
import { r as c, e as u, R as d, u as A, f as h } from './vendor.24f937d2.js'
import { d as p } from './index.33a00d95.js'
var g = 'App_base_1',
  m = 'App_sections_8'
var f = {
  base: 'Navbar_base_1',
  'appear-navbar': 'Navbar_appear-navbar_1',
  items: 'Navbar_items_19'
}
let b = R()
const y = (e) => O(e, b)
let w = R()
y.write = (e) => O(e, w)
let v = R()
y.onStart = (e) => O(e, v)
let E = R()
y.onFrame = (e) => O(e, E)
let C = R()
y.onFinish = (e) => O(e, C)
let k = []
y.setTimeout = (e, t) => {
  let n = y.now() + t,
    r = () => {
      let e = k.findIndex((e) => e.cancel == r)
      ~e && k.splice(e, 1), (q.count -= ~e ? 1 : 0)
    },
    o = { time: n, handler: e, cancel: r }
  return k.splice(Q(n), 0, o), (q.count += 1), I(), o
}
let Q = (e) => ~(~k.findIndex((t) => t.time > e) || ~k.length)
;(y.cancel = (e) => {
  b.delete(e), w.delete(e)
}),
  (y.sync = (e) => {
    ;(D = !0), y.batchedUpdates(e), (D = !1)
  }),
  (y.throttle = (e) => {
    let t
    function n() {
      try {
        e(...t)
      } finally {
        t = null
      }
    }
    function r(...e) {
      ;(t = e), y.onStart(n)
    }
    return (
      (r.handler = e),
      (r.cancel = () => {
        v.delete(n), (t = null)
      }),
      r
    )
  })
let B = 'undefined' != typeof window ? window.requestAnimationFrame : () => {}
;(y.use = (e) => (B = e)),
  (y.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
  (y.batchedUpdates = (e) => e()),
  (y.catch = console.error),
  (y.frameLoop = 'always'),
  (y.advance = () => {
    'demand' !== y.frameLoop
      ? console.warn(
          'Cannot call the manual advancement of rafz whilst frameLoop is not set as demand'
        )
      : P()
  })
let x = -1,
  D = !1
function O(e, t) {
  D ? (t.delete(e), e(0)) : (t.add(e), I())
}
function I() {
  x < 0 && ((x = 0), 'demand' !== y.frameLoop && B(S))
}
function S() {
  ~x && (B(S), y.batchedUpdates(P))
}
function P() {
  let e = x
  x = y.now()
  let t = Q(x)
  t && (U(k.splice(0, t), (e) => e.handler()), (q.count -= t)),
    v.flush(),
    b.flush(e ? Math.min(64, x - e) : 16.667),
    E.flush(),
    w.flush(),
    C.flush()
}
function R() {
  let e = new Set(),
    t = e
  return {
    add(n) {
      ;(q.count += t != e || e.has(n) ? 0 : 1), e.add(n)
    },
    delete: (n) => ((q.count -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
    flush(n) {
      t.size &&
        ((e = new Set()),
        (q.count -= t.size),
        U(t, (t) => t(n) && e.add(t)),
        (q.count += e.size),
        (t = e))
    }
  }
}
function U(e, t) {
  e.forEach((e) => {
    try {
      t(e)
    } catch (n) {
      y.catch(n)
    }
  })
}
const q = {
  count: 0,
  clear() {
    ;(x = -1),
      (k = []),
      (v = R()),
      (b = R()),
      (E = R()),
      (w = R()),
      (C = R()),
      (q.count = 0)
  }
}
function F() {}
const L = {
  arr: Array.isArray,
  obj: (e) => !!e && 'Object' === e.constructor.name,
  fun: (e) => 'function' == typeof e,
  str: (e) => 'string' == typeof e,
  num: (e) => 'number' == typeof e,
  und: (e) => void 0 === e
}
function H(e, t) {
  if (L.arr(e)) {
    if (!L.arr(t) || e.length !== t.length) return !1
    for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1
    return !0
  }
  return e === t
}
const N = (e, t) => e.forEach(t)
function K(e, t, n) {
  for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r)
}
const J = (e) => (L.und(e) ? [] : L.arr(e) ? e : [e])
function j(e, t) {
  if (e.size) {
    const n = Array.from(e)
    e.clear(), N(n, t)
  }
}
const X = (e, ...t) => j(e, (e) => e(...t))
let Y,
  V,
  M = null,
  T = !1,
  G = F
var W = Object.freeze({
  __proto__: null,
  get createStringInterpolator() {
    return Y
  },
  get to() {
    return V
  },
  get colors() {
    return M
  },
  get skipAnimation() {
    return T
  },
  get willAdvance() {
    return G
  },
  assign: (e) => {
    e.to && (V = e.to),
      e.now && (y.now = e.now),
      void 0 !== e.colors && (M = e.colors),
      null != e.skipAnimation && (T = e.skipAnimation),
      e.createStringInterpolator && (Y = e.createStringInterpolator),
      e.requestAnimationFrame && y.use(e.requestAnimationFrame),
      e.batchedUpdates && (y.batchedUpdates = e.batchedUpdates),
      e.willAdvance && (G = e.willAdvance),
      e.frameLoop && (y.frameLoop = e.frameLoop)
  }
})
const Z = new Set()
let z = [],
  _ = [],
  $ = 0
const ee = {
  get idle() {
    return !Z.size && !z.length
  },
  start(e) {
    $ > e.priority ? (Z.add(e), y.onStart(te)) : (ne(e), y(oe))
  },
  advance: oe,
  sort(e) {
    if ($) y.onFrame(() => ee.sort(e))
    else {
      const t = z.indexOf(e)
      ~t && (z.splice(t, 1), re(e))
    }
  },
  clear() {
    ;(z = []), Z.clear()
  }
}
function te() {
  Z.forEach(ne), Z.clear(), y(oe)
}
function ne(e) {
  z.includes(e) || re(e)
}
function re(e) {
  z.splice(
    (function (e, t) {
      const n = e.findIndex(t)
      return n < 0 ? e.length : n
    })(z, (t) => t.priority > e.priority),
    0,
    e
  )
}
function oe(e) {
  const t = _
  for (let n = 0; n < z.length; n++) {
    const r = z[n]
    ;($ = r.priority), r.idle || (G(r), r.advance(e), r.idle || t.push(r))
  }
  return ($ = 0), (_ = z), (_.length = 0), (z = t), z.length > 0
}
const se = '[-+]?\\d*\\.?\\d+'
function ae(...e) {
  return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)'
}
const ie = new RegExp('rgb' + ae(se, se, se)),
  le = new RegExp('rgba' + ae(se, se, se, se)),
  ce = new RegExp('hsl' + ae(se, '[-+]?\\d*\\.?\\d+%', '[-+]?\\d*\\.?\\d+%')),
  ue = new RegExp('hsla' + ae(se, '[-+]?\\d*\\.?\\d+%', '[-+]?\\d*\\.?\\d+%', se)),
  de = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  Ae = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  he = /^#([0-9a-fA-F]{6})$/,
  pe = /^#([0-9a-fA-F]{8})$/
function ge(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + 6 * (t - e) * n
      : n < 0.5
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  )
}
function me(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
    o = 2 * n - r,
    s = ge(o, r, e + 1 / 3),
    a = ge(o, r, e),
    i = ge(o, r, e - 1 / 3)
  return (
    (Math.round(255 * s) << 24) | (Math.round(255 * a) << 16) | (Math.round(255 * i) << 8)
  )
}
function fe(e) {
  const t = parseInt(e, 10)
  return t < 0 ? 0 : t > 255 ? 255 : t
}
function be(e) {
  return (((parseFloat(e) % 360) + 360) % 360) / 360
}
function ye(e) {
  const t = parseFloat(e)
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
}
function we(e) {
  const t = parseFloat(e)
  return t < 0 ? 0 : t > 100 ? 1 : t / 100
}
function ve(e) {
  let t = (function (e) {
    let t
    return 'number' == typeof e
      ? e >>> 0 === e && e >= 0 && e <= 4294967295
        ? e
        : null
      : (t = he.exec(e))
      ? parseInt(t[1] + 'ff', 16) >>> 0
      : M && void 0 !== M[e]
      ? M[e]
      : (t = ie.exec(e))
      ? ((fe(t[1]) << 24) | (fe(t[2]) << 16) | (fe(t[3]) << 8) | 255) >>> 0
      : (t = le.exec(e))
      ? ((fe(t[1]) << 24) | (fe(t[2]) << 16) | (fe(t[3]) << 8) | ye(t[4])) >>> 0
      : (t = de.exec(e))
      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
      : (t = pe.exec(e))
      ? parseInt(t[1], 16) >>> 0
      : (t = Ae.exec(e))
      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
      : (t = ce.exec(e))
      ? (255 | me(be(t[1]), we(t[2]), we(t[3]))) >>> 0
      : (t = ue.exec(e))
      ? (me(be(t[1]), we(t[2]), we(t[3])) | ye(t[4])) >>> 0
      : null
  })(e)
  return null === t
    ? e
    : ((t = t || 0),
      `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${
        (255 & t) / 255
      })`)
}
const Ee = (e, t, n) => {
  if (L.fun(e)) return e
  if (L.arr(e)) return Ee({ range: e, output: t, extrapolate: n })
  if (L.str(e.output[0])) return Y(e)
  const r = e,
    o = r.output,
    s = r.range || [0, 1],
    a = r.extrapolateLeft || r.extrapolate || 'extend',
    i = r.extrapolateRight || r.extrapolate || 'extend',
    l = r.easing || ((e) => e)
  return (e) => {
    const t = (function (e, t) {
      for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
      return n - 1
    })(e, s)
    return (function (e, t, n, r, o, s, a, i, l) {
      let c = l ? l(e) : e
      if (c < t) {
        if ('identity' === a) return c
        'clamp' === a && (c = t)
      }
      if (c > n) {
        if ('identity' === i) return c
        'clamp' === i && (c = n)
      }
      if (r === o) return r
      if (t === n) return e <= t ? r : o
      t === -1 / 0 ? (c = -c) : n === 1 / 0 ? (c -= t) : (c = (c - t) / (n - t))
      ;(c = s(c)),
        r === -1 / 0 ? (c = -c) : o === 1 / 0 ? (c += r) : (c = c * (o - r) + r)
      return c
    })(e, s[t], s[t + 1], o[t], o[t + 1], l, a, i, r.map)
  }
}
function Ce() {
  return (Ce =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
}
const ke = Symbol.for('FluidValue.get'),
  Qe = Symbol.for('FluidValue.observers'),
  Be = (e) => Boolean(e && e[ke]),
  xe = (e) => (e && e[ke] ? e[ke]() : e),
  De = (e) => e[Qe] || null
function Oe(e, t) {
  let n = e[Qe]
  n &&
    n.forEach((e) => {
      !(function (e, t) {
        e.eventObserved ? e.eventObserved(t) : e(t)
      })(e, t)
    })
}
class Ie {
  constructor(e) {
    if (((this[ke] = void 0), (this[Qe] = void 0), !e && !(e = this.get)))
      throw Error('Unknown getter')
    Se(this, e)
  }
}
const Se = (e, t) => Ue(e, ke, t)
function Pe(e, t) {
  if (e[ke]) {
    let n = e[Qe]
    n || Ue(e, Qe, (n = new Set())),
      n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
  }
  return t
}
function Re(e, t) {
  let n = e[Qe]
  if (n && n.has(t)) {
    const r = n.size - 1
    r ? n.delete(t) : (e[Qe] = null), e.observerRemoved && e.observerRemoved(r, t)
  }
}
const Ue = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  qe = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  Fe =
    /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi
let Le
const He = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  Ne = (e, t, n, r, o) =>
    `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,
  Ke = (e) => {
    Le || (Le = M ? new RegExp(`(${Object.keys(M).join('|')})(?!\\w)`, 'g') : /^\b$/)
    const t = e.output.map((e) => xe(e).replace(Fe, ve).replace(Le, ve)),
      n = t.map((e) => e.match(qe).map(Number)),
      r = n[0]
        .map((e, t) =>
          n.map((e) => {
            if (!(t in e)) throw Error('The arity of each "output" value must be equal')
            return e[t]
          })
        )
        .map((t) => Ee(Ce({}, e, { output: t })))
    return (e) => {
      let n = 0
      return t[0].replace(qe, () => String(r[n++](e))).replace(He, Ne)
    }
  },
  Je = 'react-spring: ',
  je = (e) => {
    const t = e
    let n = !1
    if ('function' != typeof t)
      throw new TypeError(`${Je}once requires a function parameter`)
    return (...e) => {
      n || (t(...e), (n = !0))
    }
  },
  Xe = je(console.warn)
const Ye = je(console.warn)
function Ve(e) {
  return L.str(e) && ('#' == e[0] || /\d/.test(e) || e in (M || {}))
}
const Me = (e) => c.exports.useEffect(e, Te),
  Te = []
function Ge() {
  const e = c.exports.useState()[1],
    t = c.exports.useState(We)[0]
  return (
    Me(t.unmount),
    () => {
      t.current && e({})
    }
  )
}
function We() {
  const e = {
    current: !0,
    unmount: () => () => {
      e.current = !1
    }
  }
  return e
}
function Ze(e) {
  const t = c.exports.useRef()
  return (
    c.exports.useEffect(() => {
      t.current = e
    }),
    t.current
  )
}
const ze =
    'undefined' != typeof window && window.document && window.document.createElement
      ? c.exports.useLayoutEffect
      : c.exports.useEffect,
  _e = Symbol.for('Animated:node'),
  $e = (e) => e && e[_e],
  et = (e, t) => {
    return (
      (n = e),
      (r = _e),
      (o = t),
      Object.defineProperty(n, r, { value: o, writable: !0, configurable: !0 })
    )
    var n, r, o
  },
  tt = (e) => e && e[_e] && e[_e].getPayload()
class nt {
  constructor() {
    ;(this.payload = void 0), et(this, this)
  }
  getPayload() {
    return this.payload || []
  }
}
class rt extends nt {
  constructor(e) {
    super(),
      (this.done = !0),
      (this.elapsedTime = void 0),
      (this.lastPosition = void 0),
      (this.lastVelocity = void 0),
      (this.v0 = void 0),
      (this.durationProgress = 0),
      (this._value = e),
      L.num(this._value) && (this.lastPosition = this._value)
  }
  static create(e) {
    return new rt(e)
  }
  getPayload() {
    return [this]
  }
  getValue() {
    return this._value
  }
  setValue(e, t) {
    return (
      L.num(e) &&
        ((this.lastPosition = e),
        t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
      this._value !== e && ((this._value = e), !0)
    )
  }
  reset() {
    const { done: e } = this
    ;(this.done = !1),
      L.num(this._value) &&
        ((this.elapsedTime = 0),
        (this.durationProgress = 0),
        (this.lastPosition = this._value),
        e && (this.lastVelocity = null),
        (this.v0 = null))
  }
}
class ot extends rt {
  constructor(e) {
    super(0),
      (this._string = null),
      (this._toString = void 0),
      (this._toString = Ee({ output: [e, e] }))
  }
  static create(e) {
    return new ot(e)
  }
  getValue() {
    let e = this._string
    return null == e ? (this._string = this._toString(this._value)) : e
  }
  setValue(e) {
    if (L.str(e)) {
      if (e == this._string) return !1
      ;(this._string = e), (this._value = 1)
    } else {
      if (!super.setValue(e)) return !1
      this._string = null
    }
    return !0
  }
  reset(e) {
    e && (this._toString = Ee({ output: [this.getValue(), e] })),
      (this._value = 0),
      super.reset()
  }
}
const st = { dependencies: null }
class at extends nt {
  constructor(e) {
    super(), (this.source = e), this.setValue(e)
  }
  getValue(e) {
    const t = {}
    return (
      K(this.source, (n, r) => {
        var o
        ;(o = n) && o[_e] === o
          ? (t[r] = n.getValue(e))
          : Be(n)
          ? (t[r] = xe(n))
          : e || (t[r] = n)
      }),
      t
    )
  }
  setValue(e) {
    ;(this.source = e), (this.payload = this._makePayload(e))
  }
  reset() {
    this.payload && N(this.payload, (e) => e.reset())
  }
  _makePayload(e) {
    if (e) {
      const t = new Set()
      return K(e, this._addToPayload, t), Array.from(t)
    }
  }
  _addToPayload(e) {
    st.dependencies && Be(e) && st.dependencies.add(e)
    const t = tt(e)
    t && N(t, (e) => this.add(e))
  }
}
class it extends at {
  constructor(e) {
    super(e)
  }
  static create(e) {
    return new it(e)
  }
  getValue() {
    return this.source.map((e) => e.getValue())
  }
  setValue(e) {
    const t = this.getPayload()
    return e.length == t.length
      ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
      : (super.setValue(e.map(lt)), !0)
  }
}
function lt(e) {
  return (Ve(e) ? ot : rt).create(e)
}
function ct(e) {
  const t = $e(e)
  return t ? t.constructor : L.arr(e) ? it : Ve(e) ? ot : rt
}
function ut() {
  return (ut =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
}
const dt = (e, t) => {
  const n = !L.fun(e) || (e.prototype && e.prototype.isReactComponent)
  return c.exports.forwardRef((r, o) => {
    const s = c.exports.useRef(null),
      a =
        n &&
        c.exports.useCallback(
          (e) => {
            s.current = (function (e, t) {
              e && (L.fun(e) ? e(t) : (e.current = t))
              return t
            })(o, e)
          },
          [o]
        ),
      [i, l] = (function (e, t) {
        const n = new Set()
        ;(st.dependencies = n),
          e.style && (e = ut({}, e, { style: t.createAnimatedStyle(e.style) }))
        return (e = new at(e)), (st.dependencies = null), [e, n]
      })(r, t),
      u = Ge(),
      d = () => {
        const e = s.current
        if (n && !e) return
        !1 === (!!e && t.applyAnimatedValues(e, i.getValue(!0))) && u()
      },
      A = new At(d, l),
      h = c.exports.useRef()
    ze(() => {
      const e = h.current
      ;(h.current = A),
        N(l, (e) => Pe(e, A)),
        e && (N(e.deps, (t) => Re(t, e)), y.cancel(e.update))
    }),
      c.exports.useEffect(d, []),
      Me(() => () => {
        const e = h.current
        N(e.deps, (t) => Re(t, e))
      })
    const p = t.getComponentProps(i.getValue())
    return c.exports.createElement(e, ut({}, p, { ref: a }))
  })
}
class At {
  constructor(e, t) {
    ;(this.update = e), (this.deps = t)
  }
  eventObserved(e) {
    'change' == e.type && y.write(this.update)
  }
}
const ht = Symbol.for('AnimatedComponent'),
  pt = (e) =>
    L.str(e)
      ? e
      : e && L.str(e.displayName)
      ? e.displayName
      : (L.fun(e) && e.name) || null
function gt() {
  return (gt =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
}
function mt(e, ...t) {
  return L.fun(e) ? e(...t) : e
}
const ft = (e, t) => !0 === e || !!(t && e && (L.fun(e) ? e(t) : J(e).includes(t))),
  bt = (e, t) => (L.obj(e) ? t && e[t] : e),
  yt = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
  wt = (e) => e,
  vt = (e, t = wt) => {
    let n = Et
    e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)))
    const r = {}
    for (const o of n) {
      const n = t(e[o], o)
      L.und(n) || (r[o] = n)
    }
    return r
  },
  Et = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
  Ct = {
    config: 1,
    from: 1,
    to: 1,
    ref: 1,
    loop: 1,
    reset: 1,
    pause: 1,
    cancel: 1,
    reverse: 1,
    immediate: 1,
    default: 1,
    delay: 1,
    onProps: 1,
    onStart: 1,
    onChange: 1,
    onPause: 1,
    onResume: 1,
    onRest: 1,
    onResolve: 1,
    items: 1,
    trail: 1,
    sort: 1,
    expires: 1,
    initial: 1,
    enter: 1,
    update: 1,
    leave: 1,
    children: 1,
    onDestroyed: 1,
    keys: 1,
    callId: 1,
    parentId: 1
  }
function kt(e) {
  const t = (function (e) {
    const t = {}
    let n = 0
    if (
      (K(e, (e, r) => {
        Ct[r] || ((t[r] = e), n++)
      }),
      n)
    )
      return t
  })(e)
  if (t) {
    const n = { to: t }
    return K(e, (e, r) => r in t || (n[r] = e)), n
  }
  return gt({}, e)
}
function Qt(e) {
  return (
    (e = xe(e)),
    L.arr(e)
      ? e.map(Qt)
      : Ve(e)
      ? W.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
      : e
  )
}
function Bt(e) {
  for (const t in e) return !0
  return !1
}
function xt(e) {
  return L.fun(e) || (L.arr(e) && L.obj(e[0]))
}
function Dt(e, t) {
  var n
  null == (n = e.ref) || n.delete(e), null == t || t.delete(e)
}
function Ot(e, t) {
  var n
  t && e.ref !== t && (null == (n = e.ref) || n.delete(e), t.add(e), (e.ref = t))
}
const It = gt(
  {},
  { tension: 170, friction: 26 },
  { mass: 1, damping: 1, easing: (e) => e, clamp: !1 }
)
class St {
  constructor() {
    ;(this.tension = void 0),
      (this.friction = void 0),
      (this.frequency = void 0),
      (this.damping = void 0),
      (this.mass = void 0),
      (this.velocity = 0),
      (this.restVelocity = void 0),
      (this.precision = void 0),
      (this.progress = void 0),
      (this.duration = void 0),
      (this.easing = void 0),
      (this.clamp = void 0),
      (this.bounce = void 0),
      (this.decay = void 0),
      (this.round = void 0),
      Object.assign(this, It)
  }
}
function Pt(e, t) {
  if (L.und(t.decay)) {
    const n = !L.und(t.tension) || !L.und(t.friction)
    ;(!n && L.und(t.frequency) && L.und(t.damping) && L.und(t.mass)) ||
      ((e.duration = void 0), (e.decay = void 0)),
      n && (e.frequency = void 0)
  } else e.duration = void 0
}
const Rt = []
class Ut {
  constructor() {
    ;(this.changed = !1),
      (this.values = Rt),
      (this.toValues = null),
      (this.fromValues = Rt),
      (this.to = void 0),
      (this.from = void 0),
      (this.config = new St()),
      (this.immediate = !1)
  }
}
function qt(e, { key: t, props: n, defaultProps: r, state: o, actions: s }) {
  return new Promise((a, i) => {
    var l
    let c,
      u,
      d = ft(null != (l = n.cancel) ? l : null == r ? void 0 : r.cancel, t)
    if (d) p()
    else {
      L.und(n.pause) || (o.paused = ft(n.pause, t))
      let e = null == r ? void 0 : r.pause
      !0 !== e && (e = o.paused || ft(e, t)),
        (c = mt(n.delay || 0, t)),
        e ? (o.resumeQueue.add(h), s.pause()) : (s.resume(), h())
    }
    function A() {
      o.resumeQueue.add(h), o.timeouts.delete(u), u.cancel(), (c = u.time - y.now())
    }
    function h() {
      c > 0 ? ((u = y.setTimeout(p, c)), o.pauseQueue.add(A), o.timeouts.add(u)) : p()
    }
    function p() {
      o.pauseQueue.delete(A), o.timeouts.delete(u), e <= (o.cancelId || 0) && (d = !0)
      try {
        s.start(gt({}, n, { callId: e, cancel: d }), a)
      } catch (t) {
        i(t)
      }
    }
  })
}
const Ft = (e, t) =>
    1 == t.length
      ? t[0]
      : t.some((e) => e.cancelled)
      ? Nt(e.get())
      : t.every((e) => e.noop)
      ? Lt(e.get())
      : Ht(
          e.get(),
          t.every((e) => e.finished)
        ),
  Lt = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
  Ht = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
  Nt = (e) => ({ value: e, cancelled: !0, finished: !1 })
function Kt(e, t, n, r) {
  const { callId: o, parentId: s, onRest: a } = t,
    { asyncTo: i, promise: l } = n
  return s || e !== i || t.reset
    ? (n.promise = (async () => {
        ;(n.asyncId = o), (n.asyncTo = e)
        const c = vt(t, (e, t) => ('onRest' === t ? void 0 : e))
        let u, d
        const A = new Promise((e, t) => ((u = e), (d = t))),
          h = (e) => {
            const t = (o <= (n.cancelId || 0) && Nt(r)) || (o !== n.asyncId && Ht(r, !1))
            if (t) throw ((e.result = t), d(e), e)
          },
          p = (e, t) => {
            const s = new jt(),
              a = new Xt()
            return (async () => {
              if (W.skipAnimation) throw (Jt(n), (a.result = Ht(r, !1)), d(a), a)
              h(s)
              const i = L.obj(e) ? gt({}, e) : gt({}, t, { to: e })
              ;(i.parentId = o),
                K(c, (e, t) => {
                  L.und(i[t]) && (i[t] = e)
                })
              const l = await r.start(i)
              return (
                h(s),
                n.paused &&
                  (await new Promise((e) => {
                    n.resumeQueue.add(e)
                  })),
                l
              )
            })()
          }
        let g
        if (W.skipAnimation) return Jt(n), Ht(r, !1)
        try {
          let t
          ;(t = L.arr(e)
            ? (async (e) => {
                for (const t of e) await p(t)
              })(e)
            : Promise.resolve(e(p, r.stop.bind(r)))),
            await Promise.all([t.then(u), A]),
            (g = Ht(r.get(), !0, !1))
        } catch (m) {
          if (m instanceof jt) g = m.result
          else {
            if (!(m instanceof Xt)) throw m
            g = m.result
          }
        } finally {
          o == n.asyncId &&
            ((n.asyncId = s), (n.asyncTo = s ? i : void 0), (n.promise = s ? l : void 0))
        }
        return (
          L.fun(a) &&
            y.batchedUpdates(() => {
              a(g, r, r.item)
            }),
          g
        )
      })())
    : l
}
function Jt(e, t) {
  j(e.timeouts, (e) => e.cancel()),
    e.pauseQueue.clear(),
    e.resumeQueue.clear(),
    (e.asyncId = e.asyncTo = e.promise = void 0),
    t && (e.cancelId = t)
}
class jt extends Error {
  constructor() {
    super(
      'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.'
    ),
      (this.result = void 0)
  }
}
class Xt extends Error {
  constructor() {
    super('SkipAnimationSignal'), (this.result = void 0)
  }
}
const Yt = (e) => e instanceof Mt
let Vt = 1
class Mt extends Ie {
  constructor(...e) {
    super(...e), (this.id = Vt++), (this.key = void 0), (this._priority = 0)
  }
  get priority() {
    return this._priority
  }
  set priority(e) {
    this._priority != e && ((this._priority = e), this._onPriorityChange(e))
  }
  get() {
    const e = $e(this)
    return e && e.getValue()
  }
  to(...e) {
    return W.to(this, e)
  }
  interpolate(...e) {
    return (
      Xe(`${Je}The "interpolate" function is deprecated in v9 (use "to" instead)`),
      W.to(this, e)
    )
  }
  toJSON() {
    return this.get()
  }
  observerAdded(e) {
    1 == e && this._attach()
  }
  observerRemoved(e) {
    0 == e && this._detach()
  }
  _attach() {}
  _detach() {}
  _onChange(e, t = !1) {
    Oe(this, { type: 'change', parent: this, value: e, idle: t })
  }
  _onPriorityChange(e) {
    this.idle || ee.sort(this), Oe(this, { type: 'priority', parent: this, priority: e })
  }
}
const Tt = Symbol.for('SpringPhase'),
  Gt = (e) => (1 & e[Tt]) > 0,
  Wt = (e) => (2 & e[Tt]) > 0,
  Zt = (e) => (4 & e[Tt]) > 0,
  zt = (e, t) => (t ? (e[Tt] |= 3) : (e[Tt] &= -3)),
  _t = (e, t) => (t ? (e[Tt] |= 4) : (e[Tt] &= -5))
class $t extends Mt {
  constructor(e, t) {
    if (
      (super(),
      (this.key = void 0),
      (this.animation = new Ut()),
      (this.queue = void 0),
      (this.defaultProps = {}),
      (this._state = {
        paused: !1,
        pauseQueue: new Set(),
        resumeQueue: new Set(),
        timeouts: new Set()
      }),
      (this._pendingCalls = new Set()),
      (this._lastCallId = 0),
      (this._lastToId = 0),
      (this._memoizedDuration = 0),
      !L.und(e) || !L.und(t))
    ) {
      const n = L.obj(e) ? gt({}, e) : gt({}, t, { from: e })
      L.und(n.default) && (n.default = !0), this.start(n)
    }
  }
  get idle() {
    return !(Wt(this) || this._state.asyncTo) || Zt(this)
  }
  get goal() {
    return xe(this.animation.to)
  }
  get velocity() {
    const e = $e(this)
    return e instanceof rt
      ? e.lastVelocity || 0
      : e.getPayload().map((e) => e.lastVelocity || 0)
  }
  get hasAnimated() {
    return Gt(this)
  }
  get isAnimating() {
    return Wt(this)
  }
  get isPaused() {
    return Zt(this)
  }
  advance(e) {
    let t = !0,
      n = !1
    const r = this.animation
    let { config: o, toValues: s } = r
    const a = tt(r.to)
    !a && Be(r.to) && (s = J(xe(r.to))),
      r.values.forEach((i, l) => {
        if (i.done) return
        const c = i.constructor == ot ? 1 : a ? a[l].lastPosition : s[l]
        let u = r.immediate,
          d = c
        if (!u) {
          if (((d = i.lastPosition), o.tension <= 0)) return void (i.done = !0)
          let t = (i.elapsedTime += e)
          const n = r.fromValues[l],
            s =
              null != i.v0
                ? i.v0
                : (i.v0 = L.arr(o.velocity) ? o.velocity[l] : o.velocity)
          let a
          if (L.und(o.duration))
            if (o.decay) {
              const e = !0 === o.decay ? 0.998 : o.decay,
                r = Math.exp(-(1 - e) * t)
              ;(d = n + (s / (1 - e)) * (1 - r)),
                (u = Math.abs(i.lastPosition - d) < 0.1),
                (a = s * r)
            } else {
              a = null == i.lastVelocity ? s : i.lastVelocity
              const t =
                  o.precision || (n == c ? 0.005 : Math.min(1, 0.001 * Math.abs(c - n))),
                r = o.restVelocity || t / 10,
                l = o.clamp ? 0 : o.bounce,
                A = !L.und(l),
                h = n == c ? i.v0 > 0 : n < c
              let p,
                g = !1
              const m = 1,
                f = Math.ceil(e / m)
              for (
                let e = 0;
                e < f && ((p = Math.abs(a) > r), p || ((u = Math.abs(c - d) <= t), !u));
                ++e
              ) {
                A && ((g = d == c || d > c == h), g && ((a = -a * l), (d = c)))
                ;(a +=
                  ((1e-6 * -o.tension * (d - c) + 0.001 * -o.friction * a) / o.mass) * m),
                  (d += a * m)
              }
            }
          else {
            let r = 1
            o.duration > 0 &&
              (this._memoizedDuration !== o.duration &&
                ((this._memoizedDuration = o.duration),
                i.durationProgress > 0 &&
                  ((i.elapsedTime = o.duration * i.durationProgress),
                  (t = i.elapsedTime += e))),
              (r = (o.progress || 0) + t / this._memoizedDuration),
              (r = r > 1 ? 1 : r < 0 ? 0 : r),
              (i.durationProgress = r)),
              (d = n + o.easing(r) * (c - n)),
              (a = (d - i.lastPosition) / e),
              (u = 1 == r)
          }
          ;(i.lastVelocity = a),
            Number.isNaN(d) && (console.warn('Got NaN while animating:', this), (u = !0))
        }
        a && !a[l].done && (u = !1),
          u ? (i.done = !0) : (t = !1),
          i.setValue(d, o.round) && (n = !0)
      })
    const i = $e(this),
      l = i.getValue()
    if (t) {
      const e = xe(r.to)
      ;(l === e && !n) || o.decay
        ? n && o.decay && this._onChange(l)
        : (i.setValue(e), this._onChange(e)),
        this._stop()
    } else n && this._onChange(l)
  }
  set(e) {
    return (
      y.batchedUpdates(() => {
        this._stop(), this._focus(e), this._set(e)
      }),
      this
    )
  }
  pause() {
    this._update({ pause: !0 })
  }
  resume() {
    this._update({ pause: !1 })
  }
  finish() {
    if (Wt(this)) {
      const { to: e, config: t } = this.animation
      y.batchedUpdates(() => {
        this._onStart(), t.decay || this._set(e, !1), this._stop()
      })
    }
    return this
  }
  update(e) {
    return (this.queue || (this.queue = [])).push(e), this
  }
  start(e, t) {
    let n
    return (
      L.und(e)
        ? ((n = this.queue || []), (this.queue = []))
        : (n = [L.obj(e) ? e : gt({}, t, { to: e })]),
      Promise.all(n.map((e) => this._update(e))).then((e) => Ft(this, e))
    )
  }
  stop(e) {
    const { to: t } = this.animation
    return (
      this._focus(this.get()),
      Jt(this._state, e && this._lastCallId),
      y.batchedUpdates(() => this._stop(t, e)),
      this
    )
  }
  reset() {
    this._update({ reset: !0 })
  }
  eventObserved(e) {
    'change' == e.type
      ? this._start()
      : 'priority' == e.type && (this.priority = e.priority + 1)
  }
  _prepareNode(e) {
    const t = this.key || ''
    let { to: n, from: r } = e
    ;(n = L.obj(n) ? n[t] : n),
      (null == n || xt(n)) && (n = void 0),
      (r = L.obj(r) ? r[t] : r),
      null == r && (r = void 0)
    const o = { to: n, from: r }
    return (
      Gt(this) ||
        (e.reverse && ([n, r] = [r, n]),
        (r = xe(r)),
        L.und(r) ? $e(this) || this._set(n) : this._set(r)),
      o
    )
  }
  _update(e, t) {
    let n = gt({}, e)
    const { key: r, defaultProps: o } = this
    n.default &&
      Object.assign(
        o,
        vt(n, (e, t) => (/^on/.test(t) ? bt(e, r) : e))
      ),
      an(this, n, 'onProps'),
      ln(this, 'onProps', n, this)
    const s = this._prepareNode(n)
    if (Object.isFrozen(this))
      throw Error(
        'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?'
      )
    const a = this._state
    return qt(++this._lastCallId, {
      key: r,
      props: n,
      defaultProps: o,
      state: a,
      actions: {
        pause: () => {
          Zt(this) ||
            (_t(this, !0),
            X(a.pauseQueue),
            ln(this, 'onPause', Ht(this, en(this, this.animation.to)), this))
        },
        resume: () => {
          Zt(this) &&
            (_t(this, !1),
            Wt(this) && this._resume(),
            X(a.resumeQueue),
            ln(this, 'onResume', Ht(this, en(this, this.animation.to)), this))
        },
        start: this._merge.bind(this, s)
      }
    }).then((e) => {
      if (n.loop && e.finished && (!t || !e.noop)) {
        const e = tn(n)
        if (e) return this._update(e, !0)
      }
      return e
    })
  }
  _merge(e, t, n) {
    if (t.cancel) return this.stop(!0), n(Nt(this))
    const r = !L.und(e.to),
      o = !L.und(e.from)
    if (r || o) {
      if (!(t.callId > this._lastToId)) return n(Nt(this))
      this._lastToId = t.callId
    }
    const { key: s, defaultProps: a, animation: i } = this,
      { to: l, from: c } = i
    let { to: u = l, from: d = c } = e
    !o || r || (t.default && !L.und(u)) || (u = d), t.reverse && ([u, d] = [d, u])
    const A = !H(d, c)
    A && (i.from = d), (d = xe(d))
    const h = !H(u, l)
    h && this._focus(u)
    const p = xt(t.to),
      { config: g } = i,
      { decay: m, velocity: f } = g
    ;(r || o) && (g.velocity = 0),
      t.config &&
        !p &&
        (function (e, t, n) {
          n && (Pt((n = gt({}, n)), t), (t = gt({}, n, t))), Pt(e, t), Object.assign(e, t)
          for (const a in It) null == e[a] && (e[a] = It[a])
          let { mass: r, frequency: o, damping: s } = e
          L.und(o) ||
            (o < 0.01 && (o = 0.01),
            s < 0 && (s = 0),
            (e.tension = Math.pow((2 * Math.PI) / o, 2) * r),
            (e.friction = (4 * Math.PI * s * r) / o))
        })(g, mt(t.config, s), t.config !== a.config ? mt(a.config, s) : void 0)
    let b = $e(this)
    if (!b || L.und(u)) return n(Ht(this, !0))
    const w = L.und(t.reset) ? o && !t.default : !L.und(d) && ft(t.reset, s),
      v = w ? d : this.get(),
      E = Qt(u),
      C = L.num(E) || L.arr(E) || Ve(E),
      k = !p && (!C || ft(a.immediate || t.immediate, s))
    if (h) {
      const e = ct(u)
      if (e !== b.constructor) {
        if (!k)
          throw Error(
            `Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`
          )
        b = this._set(E)
      }
    }
    const Q = b.constructor
    let B = Be(u),
      x = !1
    if (!B) {
      const e = w || (!Gt(this) && A)
      ;(h || e) && ((x = H(Qt(v), E)), (B = !x)),
        ((H(i.immediate, k) || k) && H(g.decay, m) && H(g.velocity, f)) || (B = !0)
    }
    if (
      (x && Wt(this) && (i.changed && !w ? (B = !0) : B || this._stop(l)),
      !p &&
        ((B || Be(l)) &&
          ((i.values = b.getPayload()),
          (i.toValues = Be(u) ? null : Q == ot ? [1] : J(E))),
        i.immediate != k && ((i.immediate = k), k || w || this._set(l)),
        B))
    ) {
      const { onRest: e } = i
      N(sn, (e) => an(this, t, e))
      const r = Ht(this, en(this, l))
      X(this._pendingCalls, r),
        this._pendingCalls.add(n),
        i.changed &&
          y.batchedUpdates(() => {
            ;(i.changed = !w),
              null == e || e(r, this),
              w ? mt(a.onRest, r) : null == i.onStart || i.onStart(r, this)
          })
    }
    w && this._set(v),
      p
        ? n(Kt(t.to, t, this._state, this))
        : B
        ? this._start()
        : Wt(this) && !h
        ? this._pendingCalls.add(n)
        : n(Lt(v))
  }
  _focus(e) {
    const t = this.animation
    e !== t.to && (De(this) && this._detach(), (t.to = e), De(this) && this._attach())
  }
  _attach() {
    let e = 0
    const { to: t } = this.animation
    Be(t) && (Pe(t, this), Yt(t) && (e = t.priority + 1)), (this.priority = e)
  }
  _detach() {
    const { to: e } = this.animation
    Be(e) && Re(e, this)
  }
  _set(e, t = !0) {
    const n = xe(e)
    if (!L.und(n)) {
      const e = $e(this)
      if (!e || !H(n, e.getValue())) {
        const r = ct(n)
        e && e.constructor == r ? e.setValue(n) : et(this, r.create(n)),
          e &&
            y.batchedUpdates(() => {
              this._onChange(n, t)
            })
      }
    }
    return $e(this)
  }
  _onStart() {
    const e = this.animation
    e.changed || ((e.changed = !0), ln(this, 'onStart', Ht(this, en(this, e.to)), this))
  }
  _onChange(e, t) {
    t || (this._onStart(), mt(this.animation.onChange, e, this)),
      mt(this.defaultProps.onChange, e, this),
      super._onChange(e, t)
  }
  _start() {
    const e = this.animation
    $e(this).reset(xe(e.to)),
      e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
      Wt(this) || (zt(this, !0), Zt(this) || this._resume())
  }
  _resume() {
    W.skipAnimation ? this.finish() : ee.start(this)
  }
  _stop(e, t) {
    if (Wt(this)) {
      zt(this, !1)
      const n = this.animation
      N(n.values, (e) => {
        e.done = !0
      }),
        n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
        Oe(this, { type: 'idle', parent: this })
      const r = t ? Nt(this.get()) : Ht(this.get(), en(this, null != e ? e : n.to))
      X(this._pendingCalls, r),
        n.changed && ((n.changed = !1), ln(this, 'onRest', r, this))
    }
  }
}
function en(e, t) {
  const n = Qt(t)
  return H(Qt(e.get()), n)
}
function tn(e, t = e.loop, n = e.to) {
  let r = mt(t)
  if (r) {
    const o = !0 !== r && kt(r),
      s = (o || e).reverse,
      a = !o || o.reset
    return nn(
      gt(
        {},
        e,
        {
          loop: t,
          default: !1,
          pause: void 0,
          to: !s || xt(n) ? n : void 0,
          from: a ? e.from : void 0,
          reset: a
        },
        o
      )
    )
  }
}
function nn(e) {
  const { to: t, from: n } = (e = kt(e)),
    r = new Set()
  return (
    L.obj(t) && on(t, r),
    L.obj(n) && on(n, r),
    (e.keys = r.size ? Array.from(r) : null),
    e
  )
}
function rn(e) {
  const t = nn(e)
  return L.und(t.default) && (t.default = vt(t)), t
}
function on(e, t) {
  K(e, (e, n) => null != e && t.add(n))
}
const sn = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume']
function an(e, t, n) {
  e.animation[n] = t[n] !== yt(t, n) ? bt(t[n], e.key) : void 0
}
function ln(e, t, ...n) {
  var r, o, s, a
  null == (r = (o = e.animation)[t]) || r.call(o, ...n),
    null == (s = (a = e.defaultProps)[t]) || s.call(a, ...n)
}
const cn = ['onStart', 'onChange', 'onRest']
let un = 1
class dn {
  constructor(e, t) {
    ;(this.id = un++),
      (this.springs = {}),
      (this.queue = []),
      (this.ref = void 0),
      (this._flush = void 0),
      (this._initialProps = void 0),
      (this._lastAsyncId = 0),
      (this._active = new Set()),
      (this._changed = new Set()),
      (this._started = !1),
      (this._item = void 0),
      (this._state = {
        paused: !1,
        pauseQueue: new Set(),
        resumeQueue: new Set(),
        timeouts: new Set()
      }),
      (this._events = { onStart: new Map(), onChange: new Map(), onRest: new Map() }),
      (this._onFrame = this._onFrame.bind(this)),
      t && (this._flush = t),
      e && this.start(gt({ default: !0 }, e))
  }
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((e) => e.idle)
  }
  get item() {
    return this._item
  }
  set item(e) {
    this._item = e
  }
  get() {
    const e = {}
    return this.each((t, n) => (e[n] = t.get())), e
  }
  set(e) {
    for (const t in e) {
      const n = e[t]
      L.und(n) || this.springs[t].set(n)
    }
  }
  update(e) {
    return e && this.queue.push(nn(e)), this
  }
  start(e) {
    let { queue: t } = this
    return (
      e ? (t = J(e).map(nn)) : (this.queue = []),
      this._flush ? this._flush(this, t) : (bn(this, t), An(this, t))
    )
  }
  stop(e, t) {
    if ((e !== !!e && (t = e), t)) {
      const n = this.springs
      N(J(t), (t) => n[t].stop(!!e))
    } else Jt(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e))
    return this
  }
  pause(e) {
    if (L.und(e)) this.start({ pause: !0 })
    else {
      const t = this.springs
      N(J(e), (e) => t[e].pause())
    }
    return this
  }
  resume(e) {
    if (L.und(e)) this.start({ pause: !1 })
    else {
      const t = this.springs
      N(J(e), (e) => t[e].resume())
    }
    return this
  }
  each(e) {
    K(this.springs, e)
  }
  _onFrame() {
    const { onStart: e, onChange: t, onRest: n } = this._events,
      r = this._active.size > 0,
      o = this._changed.size > 0
    ;((r && !this._started) || (o && !this._started)) &&
      ((this._started = !0),
      j(e, ([e, t]) => {
        ;(t.value = this.get()), e(t, this, this._item)
      }))
    const s = !r && this._started,
      a = o || (s && n.size) ? this.get() : null
    o &&
      t.size &&
      j(t, ([e, t]) => {
        ;(t.value = a), e(t, this, this._item)
      }),
      s &&
        ((this._started = !1),
        j(n, ([e, t]) => {
          ;(t.value = a), e(t, this, this._item)
        }))
  }
  eventObserved(e) {
    if ('change' == e.type)
      this._changed.add(e.parent), e.idle || this._active.add(e.parent)
    else {
      if ('idle' != e.type) return
      this._active.delete(e.parent)
    }
    y.onFrame(this._onFrame)
  }
}
function An(e, t) {
  return Promise.all(t.map((t) => hn(e, t))).then((t) => Ft(e, t))
}
async function hn(e, t, n) {
  const { keys: r, to: o, from: s, loop: a, onRest: i, onResolve: l } = t,
    c = L.obj(t.default) && t.default
  a && (t.loop = !1), !1 === o && (t.to = null), !1 === s && (t.from = null)
  const u = L.arr(o) || L.fun(o) ? o : void 0
  u
    ? ((t.to = void 0), (t.onRest = void 0), c && (c.onRest = void 0))
    : N(cn, (n) => {
        const r = t[n]
        if (L.fun(r)) {
          const o = e._events[n]
          ;(t[n] = ({ finished: e, cancelled: t }) => {
            const n = o.get(r)
            n
              ? (e || (n.finished = !1), t && (n.cancelled = !0))
              : o.set(r, { value: null, finished: e || !1, cancelled: t || !1 })
          }),
            c && (c[n] = t[n])
        }
      })
  const d = e._state
  t.pause === !d.paused
    ? ((d.paused = t.pause), X(t.pause ? d.pauseQueue : d.resumeQueue))
    : d.paused && (t.pause = !0)
  const A = (r || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
    h = !0 === t.cancel || !0 === yt(t, 'cancel')
  ;(u || (h && d.asyncId)) &&
    A.push(
      qt(++e._lastAsyncId, {
        props: t,
        state: d,
        actions: {
          pause: F,
          resume: F,
          start(t, n) {
            h ? (Jt(d, e._lastAsyncId), n(Nt(e))) : ((t.onRest = i), n(Kt(u, t, d, e)))
          }
        }
      })
    ),
    d.paused &&
      (await new Promise((e) => {
        d.resumeQueue.add(e)
      }))
  const p = Ft(e, await Promise.all(A))
  if (a && p.finished && (!n || !p.noop)) {
    const n = tn(t, a, o)
    if (n) return bn(e, [n]), hn(e, n, !0)
  }
  return l && y.batchedUpdates(() => l(p, e, e.item)), p
}
function pn(e, t) {
  const n = gt({}, e.springs)
  return (
    t &&
      N(J(t), (e) => {
        L.und(e.keys) && (e = nn(e)),
          L.obj(e.to) || (e = gt({}, e, { to: void 0 })),
          fn(n, e, (e) => mn(e))
      }),
    gn(e, n),
    n
  )
}
function gn(e, t) {
  K(t, (t, n) => {
    e.springs[n] || ((e.springs[n] = t), Pe(t, e))
  })
}
function mn(e, t) {
  const n = new $t()
  return (n.key = e), t && Pe(n, t), n
}
function fn(e, t, n) {
  t.keys &&
    N(t.keys, (r) => {
      ;(e[r] || (e[r] = n(r)))._prepareNode(t)
    })
}
function bn(e, t) {
  N(t, (t) => {
    fn(e.springs, t, (t) => mn(t, e))
  })
}
const yn = ['children'],
  wn = (e) => {
    let { children: t } = e,
      n = (function (e, t) {
        if (null == e) return {}
        var n,
          r,
          o = {},
          s = Object.keys(e)
        for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
        return o
      })(e, yn)
    const r = c.exports.useContext(vn),
      o = n.pause || !!r.pause,
      s = n.immediate || !!r.immediate
    n = (function (e, t) {
      const [n] = c.exports.useState(() => ({ inputs: t, result: e() })),
        r = c.exports.useRef(),
        o = r.current
      let s = o
      s
        ? Boolean(
            t &&
              s.inputs &&
              (function (e, t) {
                if (e.length !== t.length) return !1
                for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1
                return !0
              })(t, s.inputs)
          ) || (s = { inputs: t, result: e() })
        : (s = n)
      return (
        c.exports.useEffect(() => {
          ;(r.current = s), o == n && (n.inputs = n.result = void 0)
        }, [s]),
        s.result
      )
    })(() => ({ pause: o, immediate: s }), [o, s])
    const { Provider: a } = vn
    return c.exports.createElement(a, { value: n }, t)
  },
  vn =
    ((En = wn),
    (Cn = {}),
    Object.assign(En, c.exports.createContext(Cn)),
    (En.Provider._context = En),
    (En.Consumer._context = En),
    En)
var En, Cn
;(wn.Provider = vn.Provider), (wn.Consumer = vn.Consumer)
const kn = () => {
  const e = [],
    t = function (t) {
      Ye(
        `${Je}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
      )
      const r = []
      return (
        N(e, (e, o) => {
          if (L.und(t)) r.push(e.start())
          else {
            const s = n(t, e, o)
            s && r.push(e.start(s))
          }
        }),
        r
      )
    }
  ;(t.current = e),
    (t.add = function (t) {
      e.includes(t) || e.push(t)
    }),
    (t.delete = function (t) {
      const n = e.indexOf(t)
      ~n && e.splice(n, 1)
    }),
    (t.pause = function () {
      return N(e, (e) => e.pause(...arguments)), this
    }),
    (t.resume = function () {
      return N(e, (e) => e.resume(...arguments)), this
    }),
    (t.set = function (t) {
      N(e, (e) => e.set(t))
    }),
    (t.start = function (t) {
      const n = []
      return (
        N(e, (e, r) => {
          if (L.und(t)) n.push(e.start())
          else {
            const o = this._getProps(t, e, r)
            o && n.push(e.start(o))
          }
        }),
        n
      )
    }),
    (t.stop = function () {
      return N(e, (e) => e.stop(...arguments)), this
    }),
    (t.update = function (t) {
      return N(e, (e, n) => e.update(this._getProps(t, e, n))), this
    })
  const n = function (e, t, n) {
    return L.fun(e) ? e(n, t) : e
  }
  return (t._getProps = n), t
}
function Qn(e, t, n) {
  const r = L.fun(t) && t
  r && !n && (n = [])
  const o = c.exports.useMemo(() => (r || 3 == arguments.length ? kn() : void 0), []),
    s = c.exports.useRef(0),
    a = Ge(),
    i = c.exports.useMemo(
      () => ({
        ctrls: [],
        queue: [],
        flush(e, t) {
          const n = pn(e, t)
          return s.current > 0 &&
            !i.queue.length &&
            !Object.keys(n).some((t) => !e.springs[t])
            ? An(e, t)
            : new Promise((r) => {
                gn(e, n),
                  i.queue.push(() => {
                    r(An(e, t))
                  }),
                  a()
              })
        }
      }),
      []
    ),
    l = c.exports.useRef([...i.ctrls]),
    u = [],
    d = Ze(e) || 0
  function A(e, n) {
    for (let o = e; o < n; o++) {
      const e = l.current[o] || (l.current[o] = new dn(null, i.flush)),
        n = r ? r(o, e) : t[o]
      n && (u[o] = rn(n))
    }
  }
  c.exports.useMemo(() => {
    N(l.current.slice(e, d), (e) => {
      Dt(e, o), e.stop(!0)
    }),
      (l.current.length = e),
      A(d, e)
  }, [e]),
    c.exports.useMemo(() => {
      A(0, Math.min(d, e))
    }, n)
  const h = l.current.map((e, t) => pn(e, u[t])),
    p = c.exports.useContext(wn),
    g = Ze(p),
    m = p !== g && Bt(p)
  ze(() => {
    s.current++, (i.ctrls = l.current)
    const { queue: e } = i
    e.length && ((i.queue = []), N(e, (e) => e())),
      N(l.current, (e, t) => {
        null == o || o.add(e), m && e.start({ default: p })
        const n = u[t]
        n && (Ot(e, n.ref), e.ref ? e.queue.push(n) : e.start(n))
      })
  }),
    Me(() => () => {
      N(i.ctrls, (e) => e.stop(!0))
    })
  const f = h.map((e) => gt({}, e))
  return o ? [f, o] : f
}
function Bn(e, t) {
  const n = L.fun(e),
    [[r], o] = Qn(1, n ? e : [e], n ? t || [] : t)
  return n || 2 == arguments.length ? [r, o] : r
}
let xn
var Dn
;((Dn = xn || (xn = {})).MOUNT = 'mount'),
  (Dn.ENTER = 'enter'),
  (Dn.UPDATE = 'update'),
  (Dn.LEAVE = 'leave')
class On extends Mt {
  constructor(e, t) {
    super(),
      (this.key = void 0),
      (this.idle = !0),
      (this.calc = void 0),
      (this._active = new Set()),
      (this.source = e),
      (this.calc = Ee(...t))
    const n = this._get(),
      r = ct(n)
    et(this, r.create(n))
  }
  advance(e) {
    const t = this._get()
    H(t, this.get()) || ($e(this).setValue(t), this._onChange(t, this.idle)),
      !this.idle && Sn(this._active) && Pn(this)
  }
  _get() {
    const e = L.arr(this.source) ? this.source.map(xe) : J(xe(this.source))
    return this.calc(...e)
  }
  _start() {
    this.idle &&
      !Sn(this._active) &&
      ((this.idle = !1),
      N(tt(this), (e) => {
        e.done = !1
      }),
      W.skipAnimation
        ? (y.batchedUpdates(() => this.advance()), Pn(this))
        : ee.start(this))
  }
  _attach() {
    let e = 1
    N(J(this.source), (t) => {
      Be(t) && Pe(t, this),
        Yt(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1)))
    }),
      (this.priority = e),
      this._start()
  }
  _detach() {
    N(J(this.source), (e) => {
      Be(e) && Re(e, this)
    }),
      this._active.clear(),
      Pn(this)
  }
  eventObserved(e) {
    'change' == e.type
      ? e.idle
        ? this.advance()
        : (this._active.add(e.parent), this._start())
      : 'idle' == e.type
      ? this._active.delete(e.parent)
      : 'priority' == e.type &&
        (this.priority = J(this.source).reduce(
          (e, t) => Math.max(e, (Yt(t) ? t.priority : 0) + 1),
          0
        ))
  }
}
function In(e) {
  return !1 !== e.idle
}
function Sn(e) {
  return !e.size || Array.from(e).every(In)
}
function Pn(e) {
  e.idle ||
    ((e.idle = !0),
    N(tt(e), (e) => {
      e.done = !0
    }),
    Oe(e, { type: 'idle', parent: e }))
}
function Rn(e, t) {
  if (null == e) return {}
  var n,
    r,
    o = {},
    s = Object.keys(e)
  for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
  return o
}
W.assign({ createStringInterpolator: Ke, to: (e, t) => new On(e, t) })
const Un = ['style', 'children', 'scrollTop', 'scrollLeft'],
  qn = /^--/
function Fn(e, t) {
  return null == t || 'boolean' == typeof t || '' === t
    ? ''
    : 'number' != typeof t || 0 === t || qn.test(e) || (Hn.hasOwnProperty(e) && Hn[e])
    ? ('' + t).trim()
    : t + 'px'
}
const Ln = {}
let Hn = {
  animationIterationCount: !0,
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
  strokeWidth: !0
}
const Nn = ['Webkit', 'Ms', 'Moz', 'O']
Hn = Object.keys(Hn).reduce(
  (e, t) => (
    Nn.forEach(
      (n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])
    ),
    e
  ),
  Hn
)
const Kn = ['x', 'y', 'z'],
  Jn = /^(matrix|translate|scale|rotate|skew)/,
  jn = /^(translate)/,
  Xn = /^(rotate|skew)/,
  Yn = (e, t) => (L.num(e) && 0 !== e ? e + t : e),
  Vn = (e, t) =>
    L.arr(e) ? e.every((e) => Vn(e, t)) : L.num(e) ? e === t : parseFloat(e) === t
class Mn extends at {
  constructor(e) {
    let { x: t, y: n, z: r } = e,
      o = Rn(e, Kn)
    const s = [],
      a = []
    ;(t || n || r) &&
      (s.push([t || 0, n || 0, r || 0]),
      a.push((e) => [`translate3d(${e.map((e) => Yn(e, 'px')).join(',')})`, Vn(e, 0)])),
      K(o, (e, t) => {
        if ('transform' === t) s.push([e || '']), a.push((e) => [e, '' === e])
        else if (Jn.test(t)) {
          if ((delete o[t], L.und(e))) return
          const n = jn.test(t) ? 'px' : Xn.test(t) ? 'deg' : ''
          s.push(J(e)),
            a.push(
              'rotate3d' === t
                ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${Yn(o, n)})`, Vn(o, 0)]
                : (e) => [
                    `${t}(${e.map((e) => Yn(e, n)).join(',')})`,
                    Vn(e, t.startsWith('scale') ? 1 : 0)
                  ]
            )
        }
      }),
      s.length && (o.transform = new Tn(s, a)),
      super(o)
  }
}
class Tn extends Ie {
  constructor(e, t) {
    super(), (this._value = null), (this.inputs = e), (this.transforms = t)
  }
  get() {
    return this._value || (this._value = this._get())
  }
  _get() {
    let e = '',
      t = !0
    return (
      N(this.inputs, (n, r) => {
        const o = xe(n[0]),
          [s, a] = this.transforms[r](L.arr(o) ? o : n.map(xe))
        ;(e += ' ' + s), (t = t && a)
      }),
      t ? 'none' : e
    )
  }
  observerAdded(e) {
    1 == e && N(this.inputs, (e) => N(e, (e) => Be(e) && Pe(e, this)))
  }
  observerRemoved(e) {
    0 == e && N(this.inputs, (e) => N(e, (e) => Be(e) && Re(e, this)))
  }
  eventObserved(e) {
    'change' == e.type && (this._value = null), Oe(this, e)
  }
}
const Gn = ['scrollTop', 'scrollLeft']
W.assign({
  batchedUpdates: u.exports.unstable_batchedUpdates,
  createStringInterpolator: Ke,
  colors: {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199
  }
})
const Wn = ((
    e,
    {
      applyAnimatedValues: t = () => !1,
      createAnimatedStyle: n = (e) => new at(e),
      getComponentProps: r = (e) => e
    } = {}
  ) => {
    const o = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
      s = (e) => {
        const t = pt(e) || 'Anonymous'
        return (
          ((e = L.str(e)
            ? s[e] || (s[e] = dt(e, o))
            : e[ht] || (e[ht] = dt(e, o))).displayName = `Animated(${t})`),
          e
        )
      }
    return (
      K(e, (t, n) => {
        L.arr(e) && (n = pt(t)), (s[n] = s(t))
      }),
      { animated: s }
    )
  })(
    [
      'a',
      'abbr',
      'address',
      'area',
      'article',
      'aside',
      'audio',
      'b',
      'base',
      'bdi',
      'bdo',
      'big',
      'blockquote',
      'body',
      'br',
      'button',
      'canvas',
      'caption',
      'cite',
      'code',
      'col',
      'colgroup',
      'data',
      'datalist',
      'dd',
      'del',
      'details',
      'dfn',
      'dialog',
      'div',
      'dl',
      'dt',
      'em',
      'embed',
      'fieldset',
      'figcaption',
      'figure',
      'footer',
      'form',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'head',
      'header',
      'hgroup',
      'hr',
      'html',
      'i',
      'iframe',
      'img',
      'input',
      'ins',
      'kbd',
      'keygen',
      'label',
      'legend',
      'li',
      'link',
      'main',
      'map',
      'mark',
      'menu',
      'menuitem',
      'meta',
      'meter',
      'nav',
      'noscript',
      'object',
      'ol',
      'optgroup',
      'option',
      'output',
      'p',
      'param',
      'picture',
      'pre',
      'progress',
      'q',
      'rp',
      'rt',
      'ruby',
      's',
      'samp',
      'script',
      'section',
      'select',
      'small',
      'source',
      'span',
      'strong',
      'style',
      'sub',
      'summary',
      'sup',
      'table',
      'tbody',
      'td',
      'textarea',
      'tfoot',
      'th',
      'thead',
      'time',
      'title',
      'tr',
      'track',
      'u',
      'ul',
      'var',
      'video',
      'wbr',
      'circle',
      'clipPath',
      'defs',
      'ellipse',
      'foreignObject',
      'g',
      'image',
      'line',
      'linearGradient',
      'mask',
      'path',
      'pattern',
      'polygon',
      'polyline',
      'radialGradient',
      'rect',
      'stop',
      'svg',
      'text',
      'tspan'
    ],
    {
      applyAnimatedValues: function (e, t) {
        if (!e.nodeType || !e.setAttribute) return !1
        const n =
            'filter' === e.nodeName ||
            (e.parentNode && 'filter' === e.parentNode.nodeName),
          r = t,
          { style: o, children: s, scrollTop: a, scrollLeft: i } = r,
          l = Rn(r, Un),
          c = Object.values(l),
          u = Object.keys(l).map((t) =>
            n || e.hasAttribute(t)
              ? t
              : Ln[t] || (Ln[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase()))
          )
        void 0 !== s && (e.textContent = s)
        for (let d in o)
          if (o.hasOwnProperty(d)) {
            const t = Fn(d, o[d])
            qn.test(d) ? e.style.setProperty(d, t) : (e.style[d] = t)
          }
        u.forEach((t, n) => {
          e.setAttribute(t, c[n])
        }),
          void 0 !== a && (e.scrollTop = a),
          void 0 !== i && (e.scrollLeft = i)
      },
      createAnimatedStyle: (e) => new Mn(e),
      getComponentProps: (e) => Rn(e, Gn)
    }
  ).animated,
  Zn = {
    dark: {
      circle: { r: 9 },
      mask: { cx: '50%', cy: '23%' },
      svg: { transform: 'rotate(40deg)' },
      lines: { opacity: 0 }
    },
    light: {
      circle: { r: 5 },
      mask: { cx: '100%', cy: '0%' },
      svg: { transform: 'rotate(90deg)' },
      lines: { opacity: 1 }
    },
    springConfig: { mass: 4, tension: 250, friction: 35 }
  }
let zn = 0
const _n = (e) => {
  var t = e,
    {
      onChange: n,
      checked: a = !1,
      size: u = 24,
      animationProperties: A = Zn,
      moonColor: h = 'white',
      sunColor: p = 'black',
      style: g
    } = t,
    m = ((e, t) => {
      var n = {}
      for (var a in e) o.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a])
      if (null != e && r)
        for (var a of r(e)) t.indexOf(a) < 0 && s.call(e, a) && (n[a] = e[a])
      return n
    })(t, [
      'onChange',
      'checked',
      'size',
      'animationProperties',
      'moonColor',
      'sunColor',
      'style'
    ])
  const [f, b] = c.exports.useState(0)
  c.exports.useEffect(() => {
    ;(zn += 1), b(zn)
  }, [b])
  const y = c.exports.useMemo(() => (A !== Zn ? Object.assign(Zn, A) : A), [A]),
    { circle: w, svg: v, lines: E, mask: C } = y[a ? 'dark' : 'light'],
    k = Bn(l(i({}, v), { config: A.springConfig })),
    Q = Bn(l(i({}, w), { config: A.springConfig })),
    B = Bn(l(i({}, C), { config: A.springConfig })),
    x = Bn(l(i({}, E), { config: A.springConfig })),
    D = `circle-mask-${f}`
  return d.createElement(
    Wn.svg,
    i(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: u,
        height: u,
        viewBox: '0 0 24 24',
        color: a ? h : p,
        fill: 'none',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        stroke: 'currentColor',
        onClick: () => n(!a),
        style: i(i({ cursor: 'pointer' }, k), g)
      },
      m
    ),
    d.createElement(
      'mask',
      { id: D },
      d.createElement('rect', {
        x: '0',
        y: '0',
        width: '100%',
        height: '100%',
        fill: 'white'
      }),
      d.createElement(Wn.circle, { style: B, r: '9', fill: 'black' })
    ),
    d.createElement(Wn.circle, {
      cx: '12',
      cy: '12',
      fill: a ? h : p,
      style: Q,
      mask: `url(#${D})`
    }),
    d.createElement(
      Wn.g,
      { stroke: 'currentColor', style: x },
      d.createElement('line', { x1: '12', y1: '1', x2: '12', y2: '3' }),
      d.createElement('line', { x1: '12', y1: '21', x2: '12', y2: '23' }),
      d.createElement('line', { x1: '4.22', y1: '4.22', x2: '5.64', y2: '5.64' }),
      d.createElement('line', { x1: '18.36', y1: '18.36', x2: '19.78', y2: '19.78' }),
      d.createElement('line', { x1: '1', y1: '12', x2: '3', y2: '12' }),
      d.createElement('line', { x1: '21', y1: '12', x2: '23', y2: '12' }),
      d.createElement('line', { x1: '4.22', y1: '19.78', x2: '5.64', y2: '18.36' }),
      d.createElement('line', { x1: '18.36', y1: '5.64', x2: '19.78', y2: '4.22' })
    )
  )
}
function $n() {
  const { theme: e } = A(({ app: e }) => e),
    t = h()
  return d.createElement(
    'nav',
    { className: f.base },
    d.createElement(
      'div',
      { className: f.items },
      d.createElement(_n, {
        checked: 'ligth' === e,
        onChange: () => {
          t({ type: '@app/toggleTheme' })
        },
        moonColor: 'var(--font-color)',
        sunColor: 'var(--font-color)'
      }),
      d.createElement('span', { className: f.language }, 'es')
    ),
    d.createElement(
      'a',
      {
        className: 'button',
        href: 'https://www.linkedin.com/in/pablo-cabrera-2a567b209/'
      },
      '¡Contáctame!'
    )
  )
}
var er = 'Footer_base_1'
function tr() {
  return d.createElement(
    'footer',
    { className: er },
    d.createElement(
      'div',
      null,
      d.createElement(
        'p',
        null,
        'Source: ',
        d.createElement('a', { href: 'https://github.com/pabloc54/portfolio' }, 'GitHub')
      )
    )
  )
}
var nr = 'Modal_base_1',
  rr = 'Modal_show_19',
  or = 'Modal_close_33'
var sr = 'Skill_base_1',
  ar = 'Skill_icon_9',
  ir = 'Skill_big_33'
function lr({ name: e = 'NoName', color: t = 'red', image: n = p, big: r = !1 }) {
  const o = h(),
    s = { border: `3px solid ${t}` }
  return d.createElement(
    'div',
    {
      className: `${sr} ${r ? ir : ''}`,
      onClick: () => {
        o({
          type: '@modal/show',
          payload: { name: e, color: t, image: n, description: `me gusta mucho ${e}` }
        })
      }
    },
    d.createElement(
      'div',
      { className: ar, style: s },
      d.createElement('img', { src: n, alt: `${e} icon` })
    ),
    d.createElement('span', null, e)
  )
}
var cr = 'Section_base_1',
  ur = 'Section_animated_10',
  dr = 'Section_shadow_17'
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Ar = function () {
  return (Ar =
    Object.assign ||
    function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var o in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
      return e
    }).apply(this, arguments)
}
var hr = function (e) {
  var t = e.animate,
    n = e.backgroundColor,
    r = e.backgroundOpacity,
    o = e.baseUrl,
    s = e.children,
    a = e.foregroundColor,
    i = e.foregroundOpacity,
    l = e.gradientRatio,
    u = e.uniqueKey,
    d = e.interval,
    A = e.rtl,
    h = e.speed,
    p = e.style,
    g = e.title,
    m = (function (e, t) {
      var n = {}
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r])
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]])
      }
      return n
    })(e, [
      'animate',
      'backgroundColor',
      'backgroundOpacity',
      'baseUrl',
      'children',
      'foregroundColor',
      'foregroundOpacity',
      'gradientRatio',
      'uniqueKey',
      'interval',
      'rtl',
      'speed',
      'style',
      'title'
    ]),
    f = u || Math.random().toString(36).substring(6),
    b = f + '-diff',
    y = f + '-animated-diff',
    w = f + '-aria',
    v = A ? { transform: 'scaleX(-1)' } : null,
    E = '0; ' + d + '; 1',
    C = h + 's'
  return c.exports.createElement(
    'svg',
    Ar({ 'aria-labelledby': w, role: 'img', style: Ar(Ar({}, p), v) }, m),
    g ? c.exports.createElement('title', { id: w }, g) : null,
    c.exports.createElement('rect', {
      role: 'presentation',
      x: '0',
      y: '0',
      width: '100%',
      height: '100%',
      clipPath: 'url(' + o + '#' + b + ')',
      style: { fill: 'url(' + o + '#' + y + ')' }
    }),
    c.exports.createElement(
      'defs',
      null,
      c.exports.createElement('clipPath', { id: b }, s),
      c.exports.createElement(
        'linearGradient',
        { id: y },
        c.exports.createElement(
          'stop',
          { offset: '0%', stopColor: n, stopOpacity: r },
          t &&
            c.exports.createElement('animate', {
              attributeName: 'offset',
              values: -l + '; ' + -l + '; 1',
              keyTimes: E,
              dur: C,
              repeatCount: 'indefinite'
            })
        ),
        c.exports.createElement(
          'stop',
          { offset: '50%', stopColor: a, stopOpacity: i },
          t &&
            c.exports.createElement('animate', {
              attributeName: 'offset',
              values: -l / 2 + '; ' + -l / 2 + '; ' + (1 + l / 2),
              keyTimes: E,
              dur: C,
              repeatCount: 'indefinite'
            })
        ),
        c.exports.createElement(
          'stop',
          { offset: '100%', stopColor: n, stopOpacity: r },
          t &&
            c.exports.createElement('animate', {
              attributeName: 'offset',
              values: '0; 0; ' + (1 + l),
              keyTimes: E,
              dur: C,
              repeatCount: 'indefinite'
            })
        )
      )
    )
  )
}
hr.defaultProps = {
  animate: !0,
  backgroundColor: '#f5f6f7',
  backgroundOpacity: 1,
  baseUrl: '',
  foregroundColor: '#eee',
  foregroundOpacity: 1,
  gradientRatio: 2,
  id: null,
  interval: 0.25,
  rtl: !1,
  speed: 1.2,
  style: {},
  title: 'Loading...'
}
var pr = function (e) {
    return e.children
      ? c.exports.createElement(hr, Ar({}, e))
      : c.exports.createElement(gr, Ar({}, e))
  },
  gr = function (e) {
    return c.exports.createElement(
      pr,
      Ar({ viewBox: '0 0 476 124' }, e),
      c.exports.createElement('rect', {
        x: '48',
        y: '8',
        width: '88',
        height: '6',
        rx: '3'
      }),
      c.exports.createElement('rect', {
        x: '48',
        y: '26',
        width: '52',
        height: '6',
        rx: '3'
      }),
      c.exports.createElement('rect', {
        x: '0',
        y: '56',
        width: '410',
        height: '6',
        rx: '3'
      }),
      c.exports.createElement('rect', {
        x: '0',
        y: '72',
        width: '380',
        height: '6',
        rx: '3'
      }),
      c.exports.createElement('rect', {
        x: '0',
        y: '88',
        width: '178',
        height: '6',
        rx: '3'
      }),
      c.exports.createElement('circle', { cx: '20', cy: '20', r: '20' })
    )
  },
  mr = pr
function fr() {
  return d.createElement(
    mr,
    {
      speed: 2,
      width: '100%',
      height: 350,
      backgroundColor: 'var(--shadow-color)',
      foregroundColor: 'var(--section-background-color)'
    },
    d.createElement('rect', {
      x: 'calc(50% - 100px)',
      y: '35',
      rx: '3',
      ry: '3',
      width: '200',
      height: '25'
    }),
    d.createElement('rect', {
      x: '0',
      y: '100',
      rx: '3',
      ry: '3',
      width: '100%',
      height: '7'
    }),
    d.createElement('rect', {
      x: '0',
      y: '125',
      rx: '3',
      ry: '3',
      width: '95%',
      height: '7'
    }),
    d.createElement('rect', {
      x: '0',
      y: '150',
      rx: '3',
      ry: '3',
      width: '95%',
      height: '7'
    }),
    d.createElement('rect', {
      x: '0',
      y: '175',
      rx: '3',
      ry: '3',
      width: '70%',
      height: '7'
    }),
    d.createElement('rect', {
      x: '0',
      y: '225',
      rx: '3',
      ry: '3',
      width: '100%',
      height: '7'
    }),
    d.createElement('rect', {
      x: '0',
      y: '250',
      rx: '3',
      ry: '3',
      width: '100%',
      height: '7'
    }),
    d.createElement('rect', {
      x: '0',
      y: '275',
      rx: '3',
      ry: '3',
      width: '95%',
      height: '7'
    }),
    d.createElement('rect', {
      x: '0',
      y: '300',
      rx: '3',
      ry: '3',
      width: '50%',
      height: '7'
    })
  )
}
function br({
  shadow: e = !0,
  animated: t = !0,
  fallback: n = !0,
  className: r = '',
  children: o,
  onClick: s
}) {
  const a = c.exports.useRef(null),
    i = (function (e, t, n) {
      const [r, o] = c.exports.useState(n),
        s = ([e]) => {
          ;(null == e ? void 0 : e.isIntersecting) && o(!0)
        }
      return (
        c.exports.useEffect(() => {
          const n = !!window.IntersectionObserver,
            o = null == e ? void 0 : e.current
          if (r || !n || !o) return
          const a = new IntersectionObserver(s, t)
          return a.observe(o), () => a.disconnect()
        }, [e, t]),
        r
      )
    })(a, { threshold: 1, fallback: n })
  return (
    (r = ` ${r} ${cr} ${e ? dr : ''} ${n ? (t && i ? ur : '') : t ? ur : ''}`),
    d.createElement(
      d.Fragment,
      null,
      d.createElement(
        'section',
        { className: r, ref: a, onClick: s },
        n && !i ? d.createElement(fr, null) : o
      )
    )
  )
}
function yr() {
  const { show: e, name: t, color: n, image: r, description: o } = A(({ modal: e }) => e),
    s = h(),
    a = () => {
      s({ type: '@modal/hide' })
    },
    i = (e) => {
      27 === (e.charCode || e.keyCode) && a()
    }
  return (
    c.exports.useEffect(() => {
      e
        ? document.body.addEventListener('keydown', i)
        : document.body.removeEventListener('keydown', i)
    }, [e]),
    d.createElement(
      'div',
      { className: `${nr} ${e ? rr : ''}`, onClick: a },
      d.createElement(
        br,
        {
          onClick: (e) => {
            e.stopPropagation()
          }
        },
        d.createElement('div', { className: `${or} unselectable`, onClick: a }, '✕'),
        d.createElement(lr, { name: t, color: n, image: r, big: !0 }),
        d.createElement('p', { className: 'center' }, o)
      )
    )
  )
}
var wr = {
  base: 'GoToButton_base_1',
  'appear-button': 'GoToButton_appear-button_1',
  up: 'GoToButton_up_28',
  dot1: 'GoToButton_dot1_51',
  dot2: 'GoToButton_dot2_59',
  dot3: 'GoToButton_dot3_67'
}
function vr({ direction: e = 'down' }) {
  return d.createElement(
    'div',
    {
      className: `${wr.base} ${'down' === e ? wr.down : wr.up}`,
      onClick: (t) =>
        ((e, t) => {
          const n = document.getElementById('base'),
            r = e.target.getBoundingClientRect(),
            o = 'down' === t ? n.scrollTop + r.y + 15 : 0
          n.scrollTo({ top: o, behavior: 'smooth' })
        })(t, e)
    },
    'up' === e && d.createElement('p', { className: wr.text }, 'top'),
    d.createElement('div', { className: wr.dot1 }),
    d.createElement('div', { className: wr.dot2 }),
    d.createElement('div', { className: wr.dot3 }),
    'down' === e && d.createElement('p', { className: wr.text }, 'sig')
  )
}
var Er = 'WelcomeSection_base_1'
var Cr = 'Avatar_base_1'
function kr() {
  return d.createElement(
    'header',
    { id: 'profile', className: Cr },
    d.createElement('img', {
      src: '/portfolio/assets/profile-photo.eb465021.jpg',
      alt: 'me',
      loading: 'eager'
    })
  )
}
function Qr() {
  return d.createElement(
    br,
    { className: Er, shadow: !1, fallback: !1 },
    d.createElement(kr, null),
    d.createElement('h1', null, 'Pablo Cabrera (pabloc54)'),
    d.createElement('p', { className: 'small' }, '(En busca de trabajo)'),
    d.createElement(
      'p',
      { className: 'center' },
      '¡Hola! Soy un Desarrollador Fullstack de Guatemala 🇬🇹 de seniority Junior, con amplios conocimientos en tecnologías web y diseño.'
    ),
    d.createElement(
      'p',
      { className: 'center' },
      '¡Te invito a conocer más de mí y de mis proyectos más abajo!'
    )
  )
}
var Br = 'AboutMeSection_inline_1'
function xr() {
  return d.createElement(
    br,
    null,
    d.createElement('h2', null, 'Acerca de mí'),
    d.createElement(
      'div',
      { className: Br },
      d.createElement('img', {
        src: '/portfolio/assets/guatemala.b2e2ed1e.jpg',
        alt: 'Guatemala'
      }),
      d.createElement(
        'p',
        null,
        'Resido en la capital de Guatemala, lugar de volcanes, de gran clima y gente alegre 🕺. Por supuesto, estoy abierto a trabajar con equipos de otros países mediante teletrabajo.'
      )
    ),
    d.createElement(
      'div',
      { className: Br },
      d.createElement(
        'p',
        null,
        'Estoy cursando un grado de ingeniería en ciencias y sistemas, gracias al cual he desarrollado una gran habilidad en el desarrollo de software, y gran pasión en todo lo relacionado con la tecnología 💻.'
      ),
      d.createElement('img', {
        src: '/portfolio/assets/ingenieria.a4994abd.jpg',
        alt: 'my faculty'
      })
    ),
    d.createElement(
      'p',
      null,
      'Me aficionan los deportes, los videojuegos de muchos generos y disfruto de realizar actividades en exteriores.'
    )
  )
}
var Dr = { skills: 'SkillsSection_skills_1' }
const Or = {
  frontend: [
    { name: 'HTML', color: '#e56128', image: '/portfolio/assets/html-icon.082c2c7a.png' },
    {
      name: 'CSS',
      color: '#3399ff',
      image:
        'data:image/png;base64,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'
    },
    {
      name: 'JavaScript',
      color: '#ead41c',
      image:
        'data:image/png;base64,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'
    },
    {
      name: 'ReactJS',
      color: '#61dbfb',
      image: '/portfolio/assets/react-icon.5de2bcd9.png'
    },
    {
      name: 'Redux',
      color: '#764abc',
      image: '/portfolio/assets/redux-icon.e2062ada.png'
    }
  ],
  backend: [
    {
      name: 'ExpressJS',
      color: '#88c043',
      image: '/portfolio/assets/express-icon.7121cad2.png'
    },
    {
      name: 'Go',
      color: '#6ad7e5',
      image:
        'data:image/png;base64,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'
    },
    {
      name: 'Python',
      color: '#3478ae',
      image:
        'data:image/png;base64,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'
    },
    {
      name: 'MongoDB',
      color: '#4cb03e',
      image:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAORUlEQVR4Xu2deVQT1x7HE6xatFaraW21r2qxlqICEtlMhAmBAAZQ1IQlBFS0FmrrVnuqfbV57VFPbUVFheeCFjAsAUVJQsISEpAYCATFhdrFpa97bV1a22pVeCee0oNUJMtk8rsz5N/87m/5/j5zJ5m5c4dO6/9QWgE6pavvL57WDwDFIaAsAMwW5hD3i2PYI2893rgjSfoLVTmgLACTvh3DCGj03dRBc5EdjC2rodFpnVSEgLIAJJTOcy+cf+gTc9Mnn3121NnJX1/pB4AqCnTS6AmlkcsKBapMc8nzD/KiS5OqFFQpv3udlJwBolQYWxGpO9ZdCL6UPVIparhKNQgoB0CCnOdeGF11b+rv/onMY8eokhvk/QCQVYFOGj2ujO9ePFfZ3luJ/Cz2SGU6tWYByswA8aVh04vmVzc/jO+wnOnLqhe1ZNPotA6yHgc966IEAOKCKHZ+ouK+c35vDQ7O8QqpW9Smo8rfQlIDIJFIXM692BJUlKDQWnNEs/czAxoWmoxUgIC0AJibf9ajaWaJUKWzpvldtqH7vHxqFredsGUsSmNIC8D8kgisVKC26sjv2bjA3VNfMiw9fQ6lhlqbKykBiJLP9FNEH2uyVowH2bNyPN31qac+xcMXRB+kA0AgCxlbIqz9Gk+x521/ftKh5Rc+x9MnFF+kAmD8xfGPMlsmvn9IUPMG3gJ7aif+6xTnC1zBwjtHW/yRBgCBTDCgw+VywqH5unxbhOhrDCfHJ+uxO/Q18qWm3/uyRel70gCQIAtlFwprLPqvb2uDOPt91zFU4zeXlJTctdUHtHGkACBaFjRBLqy/QIS4ITk+c0cNcysvEZIDAuQB4FXyhg69dlNSFleP+3m/N6BCc718alLIcY0AeQDmyDgvHxFqdxNx9HeP4aYfPfo864cfiY6LdzykAYgtCnqpLL6+17t7eIvV3V9YDnP97a+GbdJJdHccGcfRvpEFIPD4s66jvpqQoYg79oqjRerNf9Reb75iyckKZ8XHIy6yAMwpxLAjCTq7LvXiISBWwHxSl2j6CQ9fzvCBJABzyrARR2J1IJZvhe73fefq7Y4PTEtNt53RQHtjIglArDRYUCaqk9lbPF7jefsDAqoWNeJy7wGvnCz1gxwAWAHG0CXqLltaIFF23trxT5zkXLpGVDy84iAHQFQRtlgRr9uLlwB4+QnPCYirTG0EMytZWhdSAEQXYAw5wKO/S2xurh9Dk2L82VLxIdghA4D5Zs8fHd8tV8Q3bIEg3INyiMgNfEWdYiD8opQ9eiADgNdxr7FtM9rA344NlYWOqBHWXLenKUSORQaA6AKWUJ6oLyZSHFtiReSxFqvF+v2oLChFAoDo3dFD5Evlv9nSEGeMee7L4SP/N+46iOsUfdWPBAD8w7wpyrlVp/sqBsr3YQf8+dULm5C4RIwGAAWsFcpE/VYoDbYkD0yGDdMJdTcssXWmDXgAIg9GPq5KUiHzo+rvv4Q5fjM0qUaDM5trSWzwAMTv9ZxZtORUvSXFQLLh5fpJqpKN70H/MQgegJii4M3l8XVrIDXX0lxmHcCeqVio+95Se2fYgQYAO4CN0C2EcdfPlubE7vMTli02ltgylqgxoAGIkAbNUovqlUSJgXecsAMB/61e0JgO+TQAFgDmbuZA01LTn3g3hWh/sXm80WXJVWDXDoIFYIVkxIhtkmtIXEx5GFQxecHC8uQ6sKcBsACEF7G9KuMbThJ9xDoiHnM3cxDUFUNgAQiR+glqRUbk7q8/CCDxh26j89ecB3kaAAmAQOYx6JfbwzdXigzLHXFEEu2Tn8MKUabqnb6A9UF1gwSAm+s3SpNiRHalbU+hZ+0LeqcitX4DxH8DIAF4sWnchE/9vyTkWT+iZoOYHNbj5an6X4mKZ2kckADMKg4JqoirrbO0CBTsfI66vdA6+/wX0HKFCYAUW1Ah0h2AJpY9+UQcYPHVC/XgbhGDBCA4j7m2Ltm00R7BoY3l7vVdrlnSfG9zakgfeABIaC4cN58dWnFrOiSh7M0Fy/bcoks7Rdgj7JbmCw6AmBzWsPJUPSnf4BGYETjEsMrwh6XNIcIOHAAhuYFja1MM4Ff/2tKcsBzW2OpU/be2jHXUGHAAcIv8JmnijaTcl4+TNd1dm94CqjZwAPCk/swqUVOLo4h3pl9B5iT/ktc/Mzozh56xwQGAKXxDdVHN1ZBEwiuXiOyZEeq0Y5V4+cPDDzgAZst4cUeFVUV4FAfNx9x9HNHhxdoCSHmBA2CeLGz5IWH1Nkgi4ZWLIDdsRUlK9Xa8/OHhBxwAwhL+OplAuQGP4qD5EB6MWidLUmyClBc4AASy6PUlQvl/IImEVy4JB6PfK0ySv4uXPzz8gAMg8VD0uoJ5clLOAPG5/I1FKcq38WgcXj7AASAsjXhdNl8N6jyJl9gJH/M3FC5Q/hsvf3j4AQfAfCk3vlSkKcSjOGg+4g7y3y1OUr4HKS9wAAjzfMJlya1qSCLhlUtcbtSbxSmKD/Hyh4cfcAD4qzzYTZHtDt32HQ/hbPExNy9i8eFkdY4tYx01BhwAnPxpXlrxCVIsB+/ZtJj8oNnl4vpyRzXTFr/gAOBKfZ/XiJrP21IM9DHReRxMnqwFtdQNHACRsplPqoTHQK6htxewGVLvacdFJ0HNbuAA8JB5DGoXtt+yV2yI47lZvm6a9GZQq53BAWBuHFfK3KIRmVZBbKI9OcXmchllKRpQG0mCBIAnDUirEjVm2SM2xLGYBBsI7QUTIAGYU8jhHknQ1kBsoq05BWd7ra9La3vf1vGOGgcSgMSdL40rWPbJJUcV7Qy/kXsDU1RLDHnOiP2wmCAB4OXxhlYlV4HfYs2aZobnBzArxY2t1owhwhYkAObCIwpZK9UJ+gwiRCAiBj+LPVKZ3gBuwwuwAPAK2f5VCQ2NRDTH0TE4WX4bGYxx6yG+bBIsAHwp+wmlqOGKo5tDhH9utl+0Js2oICKWtTHAAoBpsUeGfHfno4rEBuQ3ieBu9XXTrIR1AagLFLAAmBOMLJ7JUsUda7CWamj22AHMVbdQdxNaXuZ8QAOAabFHdRwdqGfprG0iJ2v6Um16yx5rxxFlDxqAe7NAQdBqVWL9R0QJgncciNf/u9cIHoDAyqnuhvDTn+DdGML8SWgDaBJaB2HxrAwEHgBaJ40eWuifUZPYtMLK2pxuHrrde07N8pNHnZ7IQxKAD4D5olA+hqnFzn9PsLWN5O50Z2iWnQN1969nDUgAgO3CHtO9qgO3w9bDgOBm+SzTpLfushYaou2RAMAsSng+a2alWI/MiyOCdng+X//aqYtEN9TaeMgAECgLdDUIDb9bW6Az7EN2MdcGXY7eLJFIwP74Q+JCUM/mcQv8PTWJTW3OaKo1MSN3MyeqlpqQWNiKzAxgboBEInHRT1Rvqk5qfNOahhBpy9np8zbjKbcPIN74eZAOSAFgLmDOx1Pcjiw4A27HzS5xw7cyx1SuNH1HJHT2xEIOAHOxIXkBC2qTG8HtJBqyk5leu8yUbU9DiB6LJABQbxWHZwSOqlxlQOoWNpIAmI8STOrrrRM1nyD6iOktHrbHN0z3cjNyC1mRBUAgEwz4+daXwlqx0embLgVlTntj9JVbO0ok7ci95ApZAO4diZ00Opbv874uudWpu26ws6aObEg/DW69nyWzI9oAmE8FMt+ndcJmp/3qDtruPal++cnPLREbog3yAJhFjZKG+ClEtU1ECxywdcq8xpVnDhMdF894pADAfIGo0U0dpRY3EnbrlbXTc+XNgQN3QX0dnKWQkAKAe/8KtNgjg765KapKavzY0uJttWNt99w09E/ahqo1p36z1QeUcaQB4K8fhQPCpf4rKpOaHLaEjL3Da8/pG5feur72OpI/+nqCRy4AaDSa+bGyuy5XV2uSmh2y2SR3ox9Ds84IepGHNbML6QAwFx8qCx3eeev6ao24+R1rxOjLlrmVOcaE0HX+vuoxf09KAMyFxRyNGfbrL9++pRW3rLNEiL5sAjO8njWsavumLzvUvictAOZGRFZEDr59+fLampQWu/bn9d825emmFWd+QK25luRLagDMAghkga5Xbt1N04iNWywRpLsNO3PqricY4yXyRDlpXmNL+h+BD2ryxM8nDh5vHBlXIzLmWgpBcKbn2zd+v7HL9NaF65aOQdGO9DNAV1PMF4uMk2p4FYkNqr4aFbrdf86dq65KaPv59JW3Ld9TBoAucWJz2ZPKUhp6fXPXzkPrmMvmbQS3k4ctzbVkDOUAMIuyWpoatEWU848dO2vr8vf8xBj8mnCyELnbupY0+0E2lARgpSZ57FZu3j9eTqnVF4s5rLiDtoqJ4jhKApBZkTmY0fFnRmLUG/e9n7i1tTjYxycOmYdP8ACOkgCYhStWbXs9LnLFfW8maWo66uvvP5uUL63sDRbKAlCuzp4XE5FW2l0Yg0HhERgYhe6j6DZMCZQFQFG5f0ZU+CJ9d82MRuUzfn78723QEdkhlAWgsm3vhHCvJfft3K3VyoZxOEJSbVDZF5mUBeDHHy8+/dRTE/5eS2gyqfb4+DSl0enwH+jsq6nWfE9ZALTaAgaHk3i5S6xTJ2syPL1DV1sjHhlsKQtAdYtseNh04bWuJp45U7dtypTglWRoqjU1UBaAlhb5ENojgzKne4enmgVrb6/f5uER1A+ANfSgbGsGYMAA1+3TpoUuNtfx2Wf67BdemPEqnU7vRLkua3On7Axw/LjMdbDr8A3MaeH3jvpLl07sGzfuWhqdzrljrYgo21MWgM7OTnpTm5oV4B157yWVX1wwbXSbcH49nS68i3JDrc2dsgB0CdVytvq5wR2Dpru4DD43eXJAu7UCom5PeQBQb6C9+fcDYK+CiI/vBwDxBtqb/v8Be70zvWW8ctoAAAAASUVORK5CYII='
    },
    {
      name: 'MySQL',
      color: '#5d87a1',
      image:
        'data:image/png;base64,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'
    },
    {
      name: 'Oracle SQL',
      color: '#8ea5af',
      image: '/portfolio/assets/oraclesql-icon.10796314.png'
    }
  ],
  other: [
    { name: 'AWS', color: '#ff9900', image: '/portfolio/assets/aws-icon.625ddacd.png' },
    {
      name: 'Oracle Cloud',
      color: '#ea060d',
      image:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAKLUlEQVR4Xu2df7BVVRXHP+fcX+/xQEZ+CEGkEKBlCkVMZan4AzQNnUqosdGEhigLpRQMbczkh0KDUhiKBZg5WZJNYaMoBgYalhCQmQUIGMlvSuQ93ru/zmn2ffdezjvc97w/nu3d7HX+u+futdda3/U56+y97x/XQS6rFXCszl6SRwCwHAIBQACwXAHL05cOIABYroDl6UsHEAAsV8Dy9KUDCACWK2B5+tIBBADLFbA8fekAAoDlClievnQAAcByBSxPXzqAAGC5ApanLx1AALBcAcvTlw4gAFiugOXpSwcQACxXwPL0pQMIAJYrYHn60gEEAMsVsDx96QACgOUKWJ6+dAABwHIFLE9fOoAAYLkClqcvHUAAsFwBy9OXDiAAWK6A5elLBxAALFfA8vSlAwgAlitgefrSAQQAyxWwPH3pAAKA5QpYnr50AAHAcgUsT186gABguQKWpy8dQACwXAHL05cOIABYroDl6ZfsAD44DviWa1NW+v/vWp0AgA/urTD5LlhUlgKBQfPhW5fTa9EZHDpawjYBtFQ6pxo/AOfQbvwZwI8rsV9Ow5hxND2tbOa68dtv8VIzK7FXxZ2DO/U2vHsqscuPVdreD3xFfY5DSwrqq5inlMnkCU7088v8zKhy53Mh60F0D3QZg/PqcNddd46XXRUG4DZgVrmTtjfuV9HEPZ/OJG8OdZGqAQj5KWvdokB2IBu0PQPO+TusLye/J4hOG0tmXjljw2N8iDjgdTYAQ2D4NthUTUzQ+heB4+Gx/rC5H27kYfzPFcWcTOSZxWRHVzl5e2bBYnUKAAvd+IwpXurut4tzOM7OzfinlRhXDkDNQN3b+Sj1/emw5R8wPP9dsQPEoCVdQwf4m1s/9f1e873VxJSA55Nwbt720VtgywL4ThISjmpzV+EufRzvuuDkT9L1lMtoPBi89xhExgHPgXMQ/HHg50nnAL273uf856E7/cxnCzY9Yd8h6JfvBGEAyilEbqqFNEyYQtPSwrw+RMNPdzDOf8W7jn93qvEXpcS6w40tvMNL39CekA+TmHotyTZCD4eBm2GX6ipBu+XgjA91mdC8RQDyr7+qXgEDYdhO2BycexQMXAOvV7NWmwQLfgQ3vqIAyE9aXPD9xI3P+aKXUq+Cqq6tsfqPDE03v1gwPphInN47mdwKVA1AOEZAdQC1JjjhysORLnxxKu6SXxKfM5KW1wr3DiROGnJK8q3tYeOdp42qG7jrOfX0Fy615phUlRCtRp0CAIEF+USc3y3Fv7iGmNqYOre6sSVzvPREdXcwzvbt+ENqnXwK0RULyYxV83wId8dGvMFObh3UZhFYdgdQ8+yMNdw4MN20IB9buwBMdmLPLvbTFwVyyHW5653oU/f7mUuC98N5PoQ7/Tq8uR2NqVCbmgG4PZq45M5McmUnxtQWgO7QeAQa1N398YZhfVJNf6kwyVJPYXgBpor9jneATbEuIz+YPvanQkCHqX9PT5p3q8/57ZpamOWuHrDq3zAmFHyxE75MfNhZpGrVomYAJjixNcv8dG61P8+N3zndS/2hyvrkdkPhSxUmuN+v6KlsL5ASK/CaALiP+vFfp7n4Ts/PX+qconivOxw+Ar2CMb4R6TK2f/bYisK9EmuJztaiZgBC9amq9h+AbX+Fof8zAPKOwmK26QAbIH4x9HsTdlWS1V1u/NEZXurqsM2X3NiiJV76qx21ynAX6A1vHoSTAzbvGAA1nAPUfCDX0aLZCb4CtkHdEEhWUpAOxnYIQGGvvA8a+kJjBT5P6FJ7unXr1e/o0eKO5UIYvBqKi77AE+82Qs9ucKBwb1Gk7prrsy2PhKE9j/jZa0m9XEFcpYYWO0ACWpJVbAMnEnl2Kdncmma+WzezH+7+NNnAdiQCEYhC2sfz1Tal8J7zwOnrZ7ZflMmsbi8PJeZeoK8a8D6cVa/ih9+L1WigTty+rQxHOO7Ojb43KLwGKNHG2yW9P87hQ/h3JWF+OBj1VJ8K+/4Jp6jvBsGuS93Y00kv2hQDP9LaQ/0szcTcWO5p3+T5575AptgSC+D/MBqf+7VMaroaMy4S/+PybOqj1SQfsKkZgNEweRU80FFnqyXGE7aBwGXAU9VOuht6DIDDBfuxuDc8gbewDAAULJs3+t6wgu2DbuKmSV7y3o72usvc+LwJXmpaCYEqbZ3Ofhr69KFpX2GuF4hf9XFSj1erRXAbWG0HKPE6/T4wtYaY2pjmABhJZO1LZAsnRaykbuYAWmYdON5N+D14dwQ+F2bZALERrYch/haiY4aTKW5ZeuO8dRC/e35smzVABws51bpVx8hdn3IiT/7Wz15eKuFXIH5m4JX1XtwfvIZ3oxq7P9owuk+m6ZlyhXo52vWCszKNz/WDHXtgYMFuPPx8Olx7FPwLIFOqA+XvFRfUAWDbnASm8rstdYDUO3+YVuogSXU1dXRbGPdWJH7FldnjIF7tRJ//pp+58MNQPO8oN8/wuOD79IQnJtHqoLh16sCJk2zd54evKMdPysreBu5wY18e5KUXFyZLQEodW4Ynj0MqBbEST3/AtP2o11N308domV0YodYl3wXmtP5wE5xXOS9Xi9x0LXCyA+pHpNyPQeoBUXlUU6hk67F0LfXJud0LfXrAkWAMbRZU05zoiu/5rQc4nXB1o+3irmwAlO/VMOJC2FCIQx0574WT+kKTuvebSP1nrsw2B9tzf2BPFXEXhf0Ezrp1+OerJ3gozrat+IOrmE91y/PPg3VO6y+qBQCqmQp1XHtmHpwVbvyWK8r4HaSUo5XRLrMvzRzLrcvaBUB9saau7rQXU96sGV7qC5VGfDbu6414t+6An5WwrQiAvL16La0NzvVgtG70pEzLeicA1zUkHvgpyeAWsOzQd5MYPIDktoLBG7EuI/qnj/1Zfd5Fl3dNdZqX/Nr3P1nuhL3g0CHoHRhf6VqkaDoS9+aX8NosfHdD/SNEZ88g841yY8qPK3nG0ykHPxUGIsMNUkAAMKgYOkIRAHSobpBPAcCgYugIRQDQobpBPgUAg4qhIxQBQIfqBvkUAAwqho5QBAAdqhvkUwAwqBg6QhEAdKhukE8BwKBi6AhFANChukE+BQCDiqEjFAFAh+oG+RQADCqGjlAEAB2qG+RTADCoGDpCEQB0qG6QTwHAoGLoCEUA0KG6QT4FAIOKoSMUAUCH6gb5FAAMKoaOUAQAHaob5FMAMKgYOkIRAHSobpBPAcCgYugIRQDQobpBPgUAg4qhIxQBQIfqBvkUAAwqho5QBAAdqhvkUwAwqBg6QhEAdKhukE8BwKBi6AhFANChukE+BQCDiqEjFAFAh+oG+RQADCqGjlAEAB2qG+RTADCoGDpCEQB0qG6QTwHAoGLoCEUA0KG6QT4FAIOKoSMUAUCH6gb5FAAMKoaOUAQAHaob5FMAMKgYOkIRAHSobpBPAcCgYugIRQDQobpBPgUAg4qhIxQBQIfqBvkUAAwqho5Q/gu2OXNvO+M8iQAAAABJRU5ErkJggg=='
    }
  ]
}
function Ir() {
  return d.createElement(
    br,
    null,
    d.createElement('h2', null, 'Habilidades'),
    d.createElement('p', { className: 'small' }, '(Haz click para más detalles)'),
    d.createElement(
      'div',
      { className: Dr.base },
      Object.entries(Or).map(([e, t]) =>
        d.createElement(
          'div',
          { key: e },
          d.createElement('h3', null, e),
          d.createElement(
            'div',
            { className: Dr.skills },
            t.map((e, t) => d.createElement(lr, i({ key: t }, e)))
          )
        )
      )
    )
  )
}
var Sr = 'ProjectsSection_projects_1'
var Pr = 'Project_base_1',
  Rr = 'Project_expanded_29',
  Ur = 'Project_down_33'
function qr({ name: e, description: t, technologies: n = [] }) {
  const [r, o] = c.exports.useState(!1)
  return d.createElement(
    'div',
    { className: `${Pr} ${r ? Rr : ''}` },
    d.createElement(
      'div',
      {
        className: `${Ur} unselectable`,
        onClick: () => {
          o(!r)
        }
      },
      '↴'
    ),
    d.createElement('h3', null, e),
    d.createElement('p', null, t),
    d.createElement('p', null, n.join(', '))
  )
}
function Fr() {
  const e =
    'este es un proyecto complicado este es un proyecto complicado este es un proyecto  sdksjdksjdto complicadoeste es un proyecto complicado'
  return d.createElement(
    br,
    null,
    d.createElement('h2', null, 'Proyectos'),
    d.createElement(
      'div',
      { className: Sr },
      d.createElement(qr, { name: 'Testing avanzado', url: '#', description: e }),
      d.createElement(qr, { name: 'Proyecto nuevo', url: '#', description: e })
    )
  )
}
function Lr() {
  return d.createElement(
    br,
    { shadow: !1, fallback: !1 },
    d.createElement('h2', null, '¿Te gusta lo que ves?'),
    d.createElement(
      'p',
      { className: 'center' },
      '¡Te invito a mandarme un mensaje por',
      ' ',
      d.createElement(
        'a',
        { href: 'https://www.linkedin.com/in/pablo-cabrera-2a567b209/' },
        'LinkedIn'
      ),
      '! 📨'
    ),
    d.createElement(
      'p',
      { className: 'center small' },
      '... o ',
      d.createElement(
        'a',
        { href: 'mailto:pablofernando54@outlook.com' },
        'mandame un email'
      ),
      ' a pablofernando54@outlook.com.'
    )
  )
}
const Hr = {
  ligth: {
    'background-color': 'rgb(230, 230, 240)',
    'font-color': 'rgb(30, 30, 40)',
    'navbar-background-color': 'rgb(215, 215, 240)',
    'navbar-decoration-color': 'rgb(55, 55, 75)',
    'section-background-color': 'rgb(225, 225, 235)',
    'small-font-color': 'rgb(75, 75, 85)',
    'link-font-color': 'rgb(100, 125, 255)',
    'link-decoration-color': 'rgb(60, 70, 180)',
    'icon-filter': 'none',
    'modal-outside': 'rgba(35, 35, 45, 0.5)',
    'shadow-color': 'rgba(45, 45, 60, 0.1)',
    'avatar-background-color': 'var(--section-background-color)',
    'button-color': 'var(--font-color)',
    'button-font-color': 'var(--background-color)',
    'footer-background-color': 'var(--font-color)',
    'footer-font-color': 'var(--background-color)',
    'scrollbar-color': 'var(--font-color)',
    'scrollbar-track-color': 'var(--background-color)'
  },
  dark: {
    'background-color': 'rgb(30, 30, 35)',
    'font-color': 'rgb(210, 210, 220)',
    'navbar-background-color': 'rgb(40, 40, 45)',
    'navbar-decoration-color': 'rgb(80, 90, 190)',
    'section-background-color': 'rgb(35, 35, 40)',
    'small-font-color': 'rgb(175, 175, 185)',
    'link-font-color': 'rgb(70, 90, 190)',
    'link-decoration-color': 'rgb(60, 70, 180)',
    'icon-filter': 'invert(85%)',
    'modal-outside': 'rgba(35, 35, 45, 0.5)',
    'shadow-color': 'rgba(110, 110, 120, 0.2)',
    'avatar-background-color': 'var(--section-background-color)',
    'button-color': 'rgb(80, 90, 190)',
    'button-font-color': 'var(--background-color)',
    'footer-background-color': 'var(--navbar-background-color)',
    'footer-font-color': 'var(--font-color)',
    'scrollbar-color': 'var(--font-color)',
    'scrollbar-track-color': 'var(--background-color)'
  }
}
function Nr() {
  const { theme: e } = A(({ app: e }) => e)
  var t
  return (
    (t = e),
    c.exports.useLayoutEffect(() => {
      const e = Hr[t]
      for (const t in e) document.documentElement.style.setProperty(`--${t}`, e[t])
    }, [t]),
    d.createElement(
      'div',
      { className: g, id: 'base' },
      d.createElement(yr, null),
      d.createElement($n, null),
      d.createElement(
        'div',
        { className: m },
        d.createElement(Qr, null),
        d.createElement(vr, { direction: 'down' }),
        d.createElement(xr, null),
        d.createElement(vr, { direction: 'down' }),
        d.createElement(Ir, null),
        d.createElement(vr, { direction: 'down' }),
        d.createElement(Fr, null),
        d.createElement(Lr, null),
        d.createElement(vr, { direction: 'up' })
      ),
      d.createElement(tr, null)
    )
  )
}
export { Nr as default }
