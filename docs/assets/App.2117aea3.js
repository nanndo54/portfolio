var e = Object.defineProperty,
  t = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  a = (t, r, n) =>
    r in t
      ? e(t, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[r] = n),
  i = (e, t) => {
    for (var r in t || (t = {})) o.call(t, r) && a(e, r, t[r])
    if (n) for (var r of n(t)) s.call(t, r) && a(e, r, t[r])
    return e
  },
  c = (e, n) => t(e, r(n))
import { r as l, e as u, R as d, u as p, f as h } from './vendor.24f937d2.js'
var m = 'App_base_1',
  g = 'App_sections_8'
var f = {
  base: 'Navbar_base_1',
  'appear-navbar': 'Navbar_appear-navbar_1',
  items: 'Navbar_items_19'
}
let y = N()
const b = (e) => O(e, y)
let v = N()
b.write = (e) => O(e, v)
let _ = N()
b.onStart = (e) => O(e, _)
let w = N()
b.onFrame = (e) => O(e, w)
let x = N()
b.onFinish = (e) => O(e, x)
let E = []
b.setTimeout = (e, t) => {
  let r = b.now() + t,
    n = () => {
      let e = E.findIndex((e) => e.cancel == n)
      ~e && E.splice(e, 1), (T.count -= ~e ? 1 : 0)
    },
    o = { time: r, handler: e, cancel: n }
  return E.splice(k(r), 0, o), (T.count += 1), j(), o
}
let k = (e) => ~(~E.findIndex((t) => t.time > e) || ~E.length)
;(b.cancel = (e) => {
  y.delete(e), v.delete(e)
}),
  (b.sync = (e) => {
    ;(S = !0), b.batchedUpdates(e), (S = !1)
  }),
  (b.throttle = (e) => {
    let t
    function r() {
      try {
        e(...t)
      } finally {
        t = null
      }
    }
    function n(...e) {
      ;(t = e), b.onStart(r)
    }
    return (
      (n.handler = e),
      (n.cancel = () => {
        _.delete(r), (t = null)
      }),
      n
    )
  })
let P = 'undefined' != typeof window ? window.requestAnimationFrame : () => {}
;(b.use = (e) => (P = e)),
  (b.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
  (b.batchedUpdates = (e) => e()),
  (b.catch = console.error),
  (b.frameLoop = 'always'),
  (b.advance = () => {
    'demand' !== b.frameLoop
      ? console.warn(
          'Cannot call the manual advancement of rafz whilst frameLoop is not set as demand'
        )
      : R()
  })
let C = -1,
  S = !1
function O(e, t) {
  S ? (t.delete(e), e(0)) : (t.add(e), j())
}
function j() {
  C < 0 && ((C = 0), 'demand' !== b.frameLoop && P(A))
}
function A() {
  ~C && (P(A), b.batchedUpdates(R))
}
function R() {
  let e = C
  C = b.now()
  let t = k(C)
  t && (I(E.splice(0, t), (e) => e.handler()), (T.count -= t)),
    _.flush(),
    y.flush(e ? Math.min(64, C - e) : 16.667),
    w.flush(),
    v.flush(),
    x.flush()
}
function N() {
  let e = new Set(),
    t = e
  return {
    add(r) {
      ;(T.count += t != e || e.has(r) ? 0 : 1), e.add(r)
    },
    delete: (r) => ((T.count -= t == e && e.has(r) ? 1 : 0), e.delete(r)),
    flush(r) {
      t.size &&
        ((e = new Set()),
        (T.count -= t.size),
        I(t, (t) => t(r) && e.add(t)),
        (T.count += e.size),
        (t = e))
    }
  }
}
function I(e, t) {
  e.forEach((e) => {
    try {
      t(e)
    } catch (r) {
      b.catch(r)
    }
  })
}
const T = {
  count: 0,
  clear() {
    ;(C = -1),
      (E = []),
      (_ = N()),
      (y = N()),
      (w = N()),
      (v = N()),
      (x = N()),
      (T.count = 0)
  }
}
function V() {}
const M = {
  arr: Array.isArray,
  obj: (e) => !!e && 'Object' === e.constructor.name,
  fun: (e) => 'function' == typeof e,
  str: (e) => 'string' == typeof e,
  num: (e) => 'number' == typeof e,
  und: (e) => void 0 === e
}
function $(e, t) {
  if (M.arr(e)) {
    if (!M.arr(t) || e.length !== t.length) return !1
    for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1
    return !0
  }
  return e === t
}
const q = (e, t) => e.forEach(t)
function F(e, t, r) {
  for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
}
const z = (e) => (M.und(e) ? [] : M.arr(e) ? e : [e])
function L(e, t) {
  if (e.size) {
    const r = Array.from(e)
    e.clear(), q(r, t)
  }
}
const U = (e, ...t) => L(e, (e) => e(...t))
let Q,
  G,
  B = null,
  D = !1,
  J = V
var W = Object.freeze({
  __proto__: null,
  get createStringInterpolator() {
    return Q
  },
  get to() {
    return G
  },
  get colors() {
    return B
  },
  get skipAnimation() {
    return D
  },
  get willAdvance() {
    return J
  },
  assign: (e) => {
    e.to && (G = e.to),
      e.now && (b.now = e.now),
      void 0 !== e.colors && (B = e.colors),
      null != e.skipAnimation && (D = e.skipAnimation),
      e.createStringInterpolator && (Q = e.createStringInterpolator),
      e.requestAnimationFrame && b.use(e.requestAnimationFrame),
      e.batchedUpdates && (b.batchedUpdates = e.batchedUpdates),
      e.willAdvance && (J = e.willAdvance),
      e.frameLoop && (b.frameLoop = e.frameLoop)
  }
})
const H = new Set()
let K = [],
  X = [],
  Y = 0
const Z = {
  get idle() {
    return !H.size && !K.length
  },
  start(e) {
    Y > e.priority ? (H.add(e), b.onStart(ee)) : (te(e), b(ne))
  },
  advance: ne,
  sort(e) {
    if (Y) b.onFrame(() => Z.sort(e))
    else {
      const t = K.indexOf(e)
      ~t && (K.splice(t, 1), re(e))
    }
  },
  clear() {
    ;(K = []), H.clear()
  }
}
function ee() {
  H.forEach(te), H.clear(), b(ne)
}
function te(e) {
  K.includes(e) || re(e)
}
function re(e) {
  K.splice(
    (function (e, t) {
      const r = e.findIndex(t)
      return r < 0 ? e.length : r
    })(K, (t) => t.priority > e.priority),
    0,
    e
  )
}
function ne(e) {
  const t = X
  for (let r = 0; r < K.length; r++) {
    const n = K[r]
    ;(Y = n.priority), n.idle || (J(n), n.advance(e), n.idle || t.push(n))
  }
  return (Y = 0), (X = K), (X.length = 0), (K = t), K.length > 0
}
const oe = '[-+]?\\d*\\.?\\d+'
function se(...e) {
  return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)'
}
const ae = new RegExp('rgb' + se(oe, oe, oe)),
  ie = new RegExp('rgba' + se(oe, oe, oe, oe)),
  ce = new RegExp('hsl' + se(oe, '[-+]?\\d*\\.?\\d+%', '[-+]?\\d*\\.?\\d+%')),
  le = new RegExp('hsla' + se(oe, '[-+]?\\d*\\.?\\d+%', '[-+]?\\d*\\.?\\d+%', oe)),
  ue = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  de = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  pe = /^#([0-9a-fA-F]{6})$/,
  he = /^#([0-9a-fA-F]{8})$/
function me(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? e + 6 * (t - e) * r
      : r < 0.5
      ? t
      : r < 2 / 3
      ? e + (t - e) * (2 / 3 - r) * 6
      : e
  )
}
function ge(e, t, r) {
  const n = r < 0.5 ? r * (1 + t) : r + t - r * t,
    o = 2 * r - n,
    s = me(o, n, e + 1 / 3),
    a = me(o, n, e),
    i = me(o, n, e - 1 / 3)
  return (
    (Math.round(255 * s) << 24) | (Math.round(255 * a) << 16) | (Math.round(255 * i) << 8)
  )
}
function fe(e) {
  const t = parseInt(e, 10)
  return t < 0 ? 0 : t > 255 ? 255 : t
}
function ye(e) {
  return (((parseFloat(e) % 360) + 360) % 360) / 360
}
function be(e) {
  const t = parseFloat(e)
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
}
function ve(e) {
  const t = parseFloat(e)
  return t < 0 ? 0 : t > 100 ? 1 : t / 100
}
function _e(e) {
  let t = (function (e) {
    let t
    return 'number' == typeof e
      ? e >>> 0 === e && e >= 0 && e <= 4294967295
        ? e
        : null
      : (t = pe.exec(e))
      ? parseInt(t[1] + 'ff', 16) >>> 0
      : B && void 0 !== B[e]
      ? B[e]
      : (t = ae.exec(e))
      ? ((fe(t[1]) << 24) | (fe(t[2]) << 16) | (fe(t[3]) << 8) | 255) >>> 0
      : (t = ie.exec(e))
      ? ((fe(t[1]) << 24) | (fe(t[2]) << 16) | (fe(t[3]) << 8) | be(t[4])) >>> 0
      : (t = ue.exec(e))
      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
      : (t = he.exec(e))
      ? parseInt(t[1], 16) >>> 0
      : (t = de.exec(e))
      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
      : (t = ce.exec(e))
      ? (255 | ge(ye(t[1]), ve(t[2]), ve(t[3]))) >>> 0
      : (t = le.exec(e))
      ? (ge(ye(t[1]), ve(t[2]), ve(t[3])) | be(t[4])) >>> 0
      : null
  })(e)
  return null === t
    ? e
    : ((t = t || 0),
      `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${
        (255 & t) / 255
      })`)
}
const we = (e, t, r) => {
  if (M.fun(e)) return e
  if (M.arr(e)) return we({ range: e, output: t, extrapolate: r })
  if (M.str(e.output[0])) return Q(e)
  const n = e,
    o = n.output,
    s = n.range || [0, 1],
    a = n.extrapolateLeft || n.extrapolate || 'extend',
    i = n.extrapolateRight || n.extrapolate || 'extend',
    c = n.easing || ((e) => e)
  return (e) => {
    const t = (function (e, t) {
      for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
      return r - 1
    })(e, s)
    return (function (e, t, r, n, o, s, a, i, c) {
      let l = c ? c(e) : e
      if (l < t) {
        if ('identity' === a) return l
        'clamp' === a && (l = t)
      }
      if (l > r) {
        if ('identity' === i) return l
        'clamp' === i && (l = r)
      }
      if (n === o) return n
      if (t === r) return e <= t ? n : o
      t === -1 / 0 ? (l = -l) : r === 1 / 0 ? (l -= t) : (l = (l - t) / (r - t))
      ;(l = s(l)),
        n === -1 / 0 ? (l = -l) : o === 1 / 0 ? (l += n) : (l = l * (o - n) + n)
      return l
    })(e, s[t], s[t + 1], o[t], o[t + 1], c, a, i, n.map)
  }
}
function xe() {
  return (xe =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t]
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
      }
      return e
    }).apply(this, arguments)
}
const Ee = Symbol.for('FluidValue.get'),
  ke = Symbol.for('FluidValue.observers'),
  Pe = (e) => Boolean(e && e[Ee]),
  Ce = (e) => (e && e[Ee] ? e[Ee]() : e),
  Se = (e) => e[ke] || null
function Oe(e, t) {
  let r = e[ke]
  r &&
    r.forEach((e) => {
      !(function (e, t) {
        e.eventObserved ? e.eventObserved(t) : e(t)
      })(e, t)
    })
}
class je {
  constructor(e) {
    if (((this[Ee] = void 0), (this[ke] = void 0), !e && !(e = this.get)))
      throw Error('Unknown getter')
    Ae(this, e)
  }
}
const Ae = (e, t) => Ie(e, Ee, t)
function Re(e, t) {
  if (e[Ee]) {
    let r = e[ke]
    r || Ie(e, ke, (r = new Set())),
      r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
  }
  return t
}
function Ne(e, t) {
  let r = e[ke]
  if (r && r.has(t)) {
    const n = r.size - 1
    n ? r.delete(t) : (e[ke] = null), e.observerRemoved && e.observerRemoved(n, t)
  }
}
const Ie = (e, t, r) =>
    Object.defineProperty(e, t, { value: r, writable: !0, configurable: !0 }),
  Te = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  Ve =
    /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi
let Me
const $e = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  qe = (e, t, r, n, o) =>
    `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
  Fe = (e) => {
    Me || (Me = B ? new RegExp(`(${Object.keys(B).join('|')})(?!\\w)`, 'g') : /^\b$/)
    const t = e.output.map((e) => Ce(e).replace(Ve, _e).replace(Me, _e)),
      r = t.map((e) => e.match(Te).map(Number)),
      n = r[0]
        .map((e, t) =>
          r.map((e) => {
            if (!(t in e)) throw Error('The arity of each "output" value must be equal')
            return e[t]
          })
        )
        .map((t) => we(xe({}, e, { output: t })))
    return (e) => {
      let r = 0
      return t[0].replace(Te, () => String(n[r++](e))).replace($e, qe)
    }
  },
  ze = 'react-spring: ',
  Le = (e) => {
    const t = e
    let r = !1
    if ('function' != typeof t)
      throw new TypeError(`${ze}once requires a function parameter`)
    return (...e) => {
      r || (t(...e), (r = !0))
    }
  },
  Ue = Le(console.warn)
const Qe = Le(console.warn)
function Ge(e) {
  return M.str(e) && ('#' == e[0] || /\d/.test(e) || e in (B || {}))
}
const Be = (e) => l.exports.useEffect(e, De),
  De = []
function Je() {
  const e = l.exports.useState()[1],
    t = l.exports.useState(We)[0]
  return (
    Be(t.unmount),
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
function He(e) {
  const t = l.exports.useRef()
  return (
    l.exports.useEffect(() => {
      t.current = e
    }),
    t.current
  )
}
const Ke =
    'undefined' != typeof window && window.document && window.document.createElement
      ? l.exports.useLayoutEffect
      : l.exports.useEffect,
  Xe = Symbol.for('Animated:node'),
  Ye = (e) => e && e[Xe],
  Ze = (e, t) => {
    return (
      (r = e),
      (n = Xe),
      (o = t),
      Object.defineProperty(r, n, { value: o, writable: !0, configurable: !0 })
    )
    var r, n, o
  },
  et = (e) => e && e[Xe] && e[Xe].getPayload()
class tt {
  constructor() {
    ;(this.payload = void 0), Ze(this, this)
  }
  getPayload() {
    return this.payload || []
  }
}
class rt extends tt {
  constructor(e) {
    super(),
      (this.done = !0),
      (this.elapsedTime = void 0),
      (this.lastPosition = void 0),
      (this.lastVelocity = void 0),
      (this.v0 = void 0),
      (this.durationProgress = 0),
      (this._value = e),
      M.num(this._value) && (this.lastPosition = this._value)
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
      M.num(e) &&
        ((this.lastPosition = e),
        t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
      this._value !== e && ((this._value = e), !0)
    )
  }
  reset() {
    const { done: e } = this
    ;(this.done = !1),
      M.num(this._value) &&
        ((this.elapsedTime = 0),
        (this.durationProgress = 0),
        (this.lastPosition = this._value),
        e && (this.lastVelocity = null),
        (this.v0 = null))
  }
}
class nt extends rt {
  constructor(e) {
    super(0),
      (this._string = null),
      (this._toString = void 0),
      (this._toString = we({ output: [e, e] }))
  }
  static create(e) {
    return new nt(e)
  }
  getValue() {
    let e = this._string
    return null == e ? (this._string = this._toString(this._value)) : e
  }
  setValue(e) {
    if (M.str(e)) {
      if (e == this._string) return !1
      ;(this._string = e), (this._value = 1)
    } else {
      if (!super.setValue(e)) return !1
      this._string = null
    }
    return !0
  }
  reset(e) {
    e && (this._toString = we({ output: [this.getValue(), e] })),
      (this._value = 0),
      super.reset()
  }
}
const ot = { dependencies: null }
class st extends tt {
  constructor(e) {
    super(), (this.source = e), this.setValue(e)
  }
  getValue(e) {
    const t = {}
    return (
      F(this.source, (r, n) => {
        var o
        ;(o = r) && o[Xe] === o
          ? (t[n] = r.getValue(e))
          : Pe(r)
          ? (t[n] = Ce(r))
          : e || (t[n] = r)
      }),
      t
    )
  }
  setValue(e) {
    ;(this.source = e), (this.payload = this._makePayload(e))
  }
  reset() {
    this.payload && q(this.payload, (e) => e.reset())
  }
  _makePayload(e) {
    if (e) {
      const t = new Set()
      return F(e, this._addToPayload, t), Array.from(t)
    }
  }
  _addToPayload(e) {
    ot.dependencies && Pe(e) && ot.dependencies.add(e)
    const t = et(e)
    t && q(t, (e) => this.add(e))
  }
}
class at extends st {
  constructor(e) {
    super(e)
  }
  static create(e) {
    return new at(e)
  }
  getValue() {
    return this.source.map((e) => e.getValue())
  }
  setValue(e) {
    const t = this.getPayload()
    return e.length == t.length
      ? t.map((t, r) => t.setValue(e[r])).some(Boolean)
      : (super.setValue(e.map(it)), !0)
  }
}
function it(e) {
  return (Ge(e) ? nt : rt).create(e)
}
function ct(e) {
  const t = Ye(e)
  return t ? t.constructor : M.arr(e) ? at : Ge(e) ? nt : rt
}
function lt() {
  return (lt =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t]
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
      }
      return e
    }).apply(this, arguments)
}
const ut = (e, t) => {
  const r = !M.fun(e) || (e.prototype && e.prototype.isReactComponent)
  return l.exports.forwardRef((n, o) => {
    const s = l.exports.useRef(null),
      a =
        r &&
        l.exports.useCallback(
          (e) => {
            s.current = (function (e, t) {
              e && (M.fun(e) ? e(t) : (e.current = t))
              return t
            })(o, e)
          },
          [o]
        ),
      [i, c] = (function (e, t) {
        const r = new Set()
        ;(ot.dependencies = r),
          e.style && (e = lt({}, e, { style: t.createAnimatedStyle(e.style) }))
        return (e = new st(e)), (ot.dependencies = null), [e, r]
      })(n, t),
      u = Je(),
      d = () => {
        const e = s.current
        if (r && !e) return
        !1 === (!!e && t.applyAnimatedValues(e, i.getValue(!0))) && u()
      },
      p = new dt(d, c),
      h = l.exports.useRef()
    Ke(() => {
      const e = h.current
      ;(h.current = p),
        q(c, (e) => Re(e, p)),
        e && (q(e.deps, (t) => Ne(t, e)), b.cancel(e.update))
    }),
      l.exports.useEffect(d, []),
      Be(() => () => {
        const e = h.current
        q(e.deps, (t) => Ne(t, e))
      })
    const m = t.getComponentProps(i.getValue())
    return l.exports.createElement(e, lt({}, m, { ref: a }))
  })
}
class dt {
  constructor(e, t) {
    ;(this.update = e), (this.deps = t)
  }
  eventObserved(e) {
    'change' == e.type && b.write(this.update)
  }
}
const pt = Symbol.for('AnimatedComponent'),
  ht = (e) =>
    M.str(e)
      ? e
      : e && M.str(e.displayName)
      ? e.displayName
      : (M.fun(e) && e.name) || null
function mt() {
  return (mt =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t]
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
      }
      return e
    }).apply(this, arguments)
}
function gt(e, ...t) {
  return M.fun(e) ? e(...t) : e
}
const ft = (e, t) => !0 === e || !!(t && e && (M.fun(e) ? e(t) : z(e).includes(t))),
  yt = (e, t) => (M.obj(e) ? t && e[t] : e),
  bt = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
  vt = (e) => e,
  _t = (e, t = vt) => {
    let r = wt
    e.default && !0 !== e.default && ((e = e.default), (r = Object.keys(e)))
    const n = {}
    for (const o of r) {
      const r = t(e[o], o)
      M.und(r) || (n[o] = r)
    }
    return n
  },
  wt = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
  xt = {
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
function Et(e) {
  const t = (function (e) {
    const t = {}
    let r = 0
    if (
      (F(e, (e, n) => {
        xt[n] || ((t[n] = e), r++)
      }),
      r)
    )
      return t
  })(e)
  if (t) {
    const r = { to: t }
    return F(e, (e, n) => n in t || (r[n] = e)), r
  }
  return mt({}, e)
}
function kt(e) {
  return (
    (e = Ce(e)),
    M.arr(e)
      ? e.map(kt)
      : Ge(e)
      ? W.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
      : e
  )
}
function Pt(e) {
  for (const t in e) return !0
  return !1
}
function Ct(e) {
  return M.fun(e) || (M.arr(e) && M.obj(e[0]))
}
function St(e, t) {
  var r
  null == (r = e.ref) || r.delete(e), null == t || t.delete(e)
}
function Ot(e, t) {
  var r
  t && e.ref !== t && (null == (r = e.ref) || r.delete(e), t.add(e), (e.ref = t))
}
const jt = mt(
  {},
  { tension: 170, friction: 26 },
  { mass: 1, damping: 1, easing: (e) => e, clamp: !1 }
)
class At {
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
      Object.assign(this, jt)
  }
}
function Rt(e, t) {
  if (M.und(t.decay)) {
    const r = !M.und(t.tension) || !M.und(t.friction)
    ;(!r && M.und(t.frequency) && M.und(t.damping) && M.und(t.mass)) ||
      ((e.duration = void 0), (e.decay = void 0)),
      r && (e.frequency = void 0)
  } else e.duration = void 0
}
const Nt = []
class It {
  constructor() {
    ;(this.changed = !1),
      (this.values = Nt),
      (this.toValues = null),
      (this.fromValues = Nt),
      (this.to = void 0),
      (this.from = void 0),
      (this.config = new At()),
      (this.immediate = !1)
  }
}
function Tt(e, { key: t, props: r, defaultProps: n, state: o, actions: s }) {
  return new Promise((a, i) => {
    var c
    let l,
      u,
      d = ft(null != (c = r.cancel) ? c : null == n ? void 0 : n.cancel, t)
    if (d) m()
    else {
      M.und(r.pause) || (o.paused = ft(r.pause, t))
      let e = null == n ? void 0 : n.pause
      !0 !== e && (e = o.paused || ft(e, t)),
        (l = gt(r.delay || 0, t)),
        e ? (o.resumeQueue.add(h), s.pause()) : (s.resume(), h())
    }
    function p() {
      o.resumeQueue.add(h), o.timeouts.delete(u), u.cancel(), (l = u.time - b.now())
    }
    function h() {
      l > 0 ? ((u = b.setTimeout(m, l)), o.pauseQueue.add(p), o.timeouts.add(u)) : m()
    }
    function m() {
      o.pauseQueue.delete(p), o.timeouts.delete(u), e <= (o.cancelId || 0) && (d = !0)
      try {
        s.start(mt({}, r, { callId: e, cancel: d }), a)
      } catch (t) {
        i(t)
      }
    }
  })
}
const Vt = (e, t) =>
    1 == t.length
      ? t[0]
      : t.some((e) => e.cancelled)
      ? qt(e.get())
      : t.every((e) => e.noop)
      ? Mt(e.get())
      : $t(
          e.get(),
          t.every((e) => e.finished)
        ),
  Mt = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
  $t = (e, t, r = !1) => ({ value: e, finished: t, cancelled: r }),
  qt = (e) => ({ value: e, cancelled: !0, finished: !1 })
function Ft(e, t, r, n) {
  const { callId: o, parentId: s, onRest: a } = t,
    { asyncTo: i, promise: c } = r
  return s || e !== i || t.reset
    ? (r.promise = (async () => {
        ;(r.asyncId = o), (r.asyncTo = e)
        const l = _t(t, (e, t) => ('onRest' === t ? void 0 : e))
        let u, d
        const p = new Promise((e, t) => ((u = e), (d = t))),
          h = (e) => {
            const t = (o <= (r.cancelId || 0) && qt(n)) || (o !== r.asyncId && $t(n, !1))
            if (t) throw ((e.result = t), d(e), e)
          },
          m = (e, t) => {
            const s = new Lt(),
              a = new Ut()
            return (async () => {
              if (W.skipAnimation) throw (zt(r), (a.result = $t(n, !1)), d(a), a)
              h(s)
              const i = M.obj(e) ? mt({}, e) : mt({}, t, { to: e })
              ;(i.parentId = o),
                F(l, (e, t) => {
                  M.und(i[t]) && (i[t] = e)
                })
              const c = await n.start(i)
              return (
                h(s),
                r.paused &&
                  (await new Promise((e) => {
                    r.resumeQueue.add(e)
                  })),
                c
              )
            })()
          }
        let g
        if (W.skipAnimation) return zt(r), $t(n, !1)
        try {
          let t
          ;(t = M.arr(e)
            ? (async (e) => {
                for (const t of e) await m(t)
              })(e)
            : Promise.resolve(e(m, n.stop.bind(n)))),
            await Promise.all([t.then(u), p]),
            (g = $t(n.get(), !0, !1))
        } catch (f) {
          if (f instanceof Lt) g = f.result
          else {
            if (!(f instanceof Ut)) throw f
            g = f.result
          }
        } finally {
          o == r.asyncId &&
            ((r.asyncId = s), (r.asyncTo = s ? i : void 0), (r.promise = s ? c : void 0))
        }
        return (
          M.fun(a) &&
            b.batchedUpdates(() => {
              a(g, n, n.item)
            }),
          g
        )
      })())
    : c
}
function zt(e, t) {
  L(e.timeouts, (e) => e.cancel()),
    e.pauseQueue.clear(),
    e.resumeQueue.clear(),
    (e.asyncId = e.asyncTo = e.promise = void 0),
    t && (e.cancelId = t)
}
class Lt extends Error {
  constructor() {
    super(
      'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.'
    ),
      (this.result = void 0)
  }
}
class Ut extends Error {
  constructor() {
    super('SkipAnimationSignal'), (this.result = void 0)
  }
}
const Qt = (e) => e instanceof Bt
let Gt = 1
class Bt extends je {
  constructor(...e) {
    super(...e), (this.id = Gt++), (this.key = void 0), (this._priority = 0)
  }
  get priority() {
    return this._priority
  }
  set priority(e) {
    this._priority != e && ((this._priority = e), this._onPriorityChange(e))
  }
  get() {
    const e = Ye(this)
    return e && e.getValue()
  }
  to(...e) {
    return W.to(this, e)
  }
  interpolate(...e) {
    return (
      Ue(`${ze}The "interpolate" function is deprecated in v9 (use "to" instead)`),
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
    this.idle || Z.sort(this), Oe(this, { type: 'priority', parent: this, priority: e })
  }
}
const Dt = Symbol.for('SpringPhase'),
  Jt = (e) => (1 & e[Dt]) > 0,
  Wt = (e) => (2 & e[Dt]) > 0,
  Ht = (e) => (4 & e[Dt]) > 0,
  Kt = (e, t) => (t ? (e[Dt] |= 3) : (e[Dt] &= -3)),
  Xt = (e, t) => (t ? (e[Dt] |= 4) : (e[Dt] &= -5))
class Yt extends Bt {
  constructor(e, t) {
    if (
      (super(),
      (this.key = void 0),
      (this.animation = new It()),
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
      !M.und(e) || !M.und(t))
    ) {
      const r = M.obj(e) ? mt({}, e) : mt({}, t, { from: e })
      M.und(r.default) && (r.default = !0), this.start(r)
    }
  }
  get idle() {
    return !(Wt(this) || this._state.asyncTo) || Ht(this)
  }
  get goal() {
    return Ce(this.animation.to)
  }
  get velocity() {
    const e = Ye(this)
    return e instanceof rt
      ? e.lastVelocity || 0
      : e.getPayload().map((e) => e.lastVelocity || 0)
  }
  get hasAnimated() {
    return Jt(this)
  }
  get isAnimating() {
    return Wt(this)
  }
  get isPaused() {
    return Ht(this)
  }
  advance(e) {
    let t = !0,
      r = !1
    const n = this.animation
    let { config: o, toValues: s } = n
    const a = et(n.to)
    !a && Pe(n.to) && (s = z(Ce(n.to))),
      n.values.forEach((i, c) => {
        if (i.done) return
        const l = i.constructor == nt ? 1 : a ? a[c].lastPosition : s[c]
        let u = n.immediate,
          d = l
        if (!u) {
          if (((d = i.lastPosition), o.tension <= 0)) return void (i.done = !0)
          let t = (i.elapsedTime += e)
          const r = n.fromValues[c],
            s =
              null != i.v0
                ? i.v0
                : (i.v0 = M.arr(o.velocity) ? o.velocity[c] : o.velocity)
          let a
          if (M.und(o.duration))
            if (o.decay) {
              const e = !0 === o.decay ? 0.998 : o.decay,
                n = Math.exp(-(1 - e) * t)
              ;(d = r + (s / (1 - e)) * (1 - n)),
                (u = Math.abs(i.lastPosition - d) < 0.1),
                (a = s * n)
            } else {
              a = null == i.lastVelocity ? s : i.lastVelocity
              const t =
                  o.precision || (r == l ? 0.005 : Math.min(1, 0.001 * Math.abs(l - r))),
                n = o.restVelocity || t / 10,
                c = o.clamp ? 0 : o.bounce,
                p = !M.und(c),
                h = r == l ? i.v0 > 0 : r < l
              let m,
                g = !1
              const f = 1,
                y = Math.ceil(e / f)
              for (
                let e = 0;
                e < y && ((m = Math.abs(a) > n), m || ((u = Math.abs(l - d) <= t), !u));
                ++e
              ) {
                p && ((g = d == l || d > l == h), g && ((a = -a * c), (d = l)))
                ;(a +=
                  ((1e-6 * -o.tension * (d - l) + 0.001 * -o.friction * a) / o.mass) * f),
                  (d += a * f)
              }
            }
          else {
            let n = 1
            o.duration > 0 &&
              (this._memoizedDuration !== o.duration &&
                ((this._memoizedDuration = o.duration),
                i.durationProgress > 0 &&
                  ((i.elapsedTime = o.duration * i.durationProgress),
                  (t = i.elapsedTime += e))),
              (n = (o.progress || 0) + t / this._memoizedDuration),
              (n = n > 1 ? 1 : n < 0 ? 0 : n),
              (i.durationProgress = n)),
              (d = r + o.easing(n) * (l - r)),
              (a = (d - i.lastPosition) / e),
              (u = 1 == n)
          }
          ;(i.lastVelocity = a),
            Number.isNaN(d) && (console.warn('Got NaN while animating:', this), (u = !0))
        }
        a && !a[c].done && (u = !1),
          u ? (i.done = !0) : (t = !1),
          i.setValue(d, o.round) && (r = !0)
      })
    const i = Ye(this),
      c = i.getValue()
    if (t) {
      const e = Ce(n.to)
      ;(c === e && !r) || o.decay
        ? r && o.decay && this._onChange(c)
        : (i.setValue(e), this._onChange(e)),
        this._stop()
    } else r && this._onChange(c)
  }
  set(e) {
    return (
      b.batchedUpdates(() => {
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
      b.batchedUpdates(() => {
        this._onStart(), t.decay || this._set(e, !1), this._stop()
      })
    }
    return this
  }
  update(e) {
    return (this.queue || (this.queue = [])).push(e), this
  }
  start(e, t) {
    let r
    return (
      M.und(e)
        ? ((r = this.queue || []), (this.queue = []))
        : (r = [M.obj(e) ? e : mt({}, t, { to: e })]),
      Promise.all(r.map((e) => this._update(e))).then((e) => Vt(this, e))
    )
  }
  stop(e) {
    const { to: t } = this.animation
    return (
      this._focus(this.get()),
      zt(this._state, e && this._lastCallId),
      b.batchedUpdates(() => this._stop(t, e)),
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
    let { to: r, from: n } = e
    ;(r = M.obj(r) ? r[t] : r),
      (null == r || Ct(r)) && (r = void 0),
      (n = M.obj(n) ? n[t] : n),
      null == n && (n = void 0)
    const o = { to: r, from: n }
    return (
      Jt(this) ||
        (e.reverse && ([r, n] = [n, r]),
        (n = Ce(n)),
        M.und(n) ? Ye(this) || this._set(r) : this._set(n)),
      o
    )
  }
  _update(e, t) {
    let r = mt({}, e)
    const { key: n, defaultProps: o } = this
    r.default &&
      Object.assign(
        o,
        _t(r, (e, t) => (/^on/.test(t) ? yt(e, n) : e))
      ),
      sr(this, r, 'onProps'),
      ar(this, 'onProps', r, this)
    const s = this._prepareNode(r)
    if (Object.isFrozen(this))
      throw Error(
        'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?'
      )
    const a = this._state
    return Tt(++this._lastCallId, {
      key: n,
      props: r,
      defaultProps: o,
      state: a,
      actions: {
        pause: () => {
          Ht(this) ||
            (Xt(this, !0),
            U(a.pauseQueue),
            ar(this, 'onPause', $t(this, Zt(this, this.animation.to)), this))
        },
        resume: () => {
          Ht(this) &&
            (Xt(this, !1),
            Wt(this) && this._resume(),
            U(a.resumeQueue),
            ar(this, 'onResume', $t(this, Zt(this, this.animation.to)), this))
        },
        start: this._merge.bind(this, s)
      }
    }).then((e) => {
      if (r.loop && e.finished && (!t || !e.noop)) {
        const e = er(r)
        if (e) return this._update(e, !0)
      }
      return e
    })
  }
  _merge(e, t, r) {
    if (t.cancel) return this.stop(!0), r(qt(this))
    const n = !M.und(e.to),
      o = !M.und(e.from)
    if (n || o) {
      if (!(t.callId > this._lastToId)) return r(qt(this))
      this._lastToId = t.callId
    }
    const { key: s, defaultProps: a, animation: i } = this,
      { to: c, from: l } = i
    let { to: u = c, from: d = l } = e
    !o || n || (t.default && !M.und(u)) || (u = d), t.reverse && ([u, d] = [d, u])
    const p = !$(d, l)
    p && (i.from = d), (d = Ce(d))
    const h = !$(u, c)
    h && this._focus(u)
    const m = Ct(t.to),
      { config: g } = i,
      { decay: f, velocity: y } = g
    ;(n || o) && (g.velocity = 0),
      t.config &&
        !m &&
        (function (e, t, r) {
          r && (Rt((r = mt({}, r)), t), (t = mt({}, r, t))), Rt(e, t), Object.assign(e, t)
          for (const a in jt) null == e[a] && (e[a] = jt[a])
          let { mass: n, frequency: o, damping: s } = e
          M.und(o) ||
            (o < 0.01 && (o = 0.01),
            s < 0 && (s = 0),
            (e.tension = Math.pow((2 * Math.PI) / o, 2) * n),
            (e.friction = (4 * Math.PI * s * n) / o))
        })(g, gt(t.config, s), t.config !== a.config ? gt(a.config, s) : void 0)
    let v = Ye(this)
    if (!v || M.und(u)) return r($t(this, !0))
    const _ = M.und(t.reset) ? o && !t.default : !M.und(d) && ft(t.reset, s),
      w = _ ? d : this.get(),
      x = kt(u),
      E = M.num(x) || M.arr(x) || Ge(x),
      k = !m && (!E || ft(a.immediate || t.immediate, s))
    if (h) {
      const e = ct(u)
      if (e !== v.constructor) {
        if (!k)
          throw Error(
            `Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`
          )
        v = this._set(x)
      }
    }
    const P = v.constructor
    let C = Pe(u),
      S = !1
    if (!C) {
      const e = _ || (!Jt(this) && p)
      ;(h || e) && ((S = $(kt(w), x)), (C = !S)),
        (($(i.immediate, k) || k) && $(g.decay, f) && $(g.velocity, y)) || (C = !0)
    }
    if (
      (S && Wt(this) && (i.changed && !_ ? (C = !0) : C || this._stop(c)),
      !m &&
        ((C || Pe(c)) &&
          ((i.values = v.getPayload()),
          (i.toValues = Pe(u) ? null : P == nt ? [1] : z(x))),
        i.immediate != k && ((i.immediate = k), k || _ || this._set(c)),
        C))
    ) {
      const { onRest: e } = i
      q(or, (e) => sr(this, t, e))
      const n = $t(this, Zt(this, c))
      U(this._pendingCalls, n),
        this._pendingCalls.add(r),
        i.changed &&
          b.batchedUpdates(() => {
            ;(i.changed = !_),
              null == e || e(n, this),
              _ ? gt(a.onRest, n) : null == i.onStart || i.onStart(n, this)
          })
    }
    _ && this._set(w),
      m
        ? r(Ft(t.to, t, this._state, this))
        : C
        ? this._start()
        : Wt(this) && !h
        ? this._pendingCalls.add(r)
        : r(Mt(w))
  }
  _focus(e) {
    const t = this.animation
    e !== t.to && (Se(this) && this._detach(), (t.to = e), Se(this) && this._attach())
  }
  _attach() {
    let e = 0
    const { to: t } = this.animation
    Pe(t) && (Re(t, this), Qt(t) && (e = t.priority + 1)), (this.priority = e)
  }
  _detach() {
    const { to: e } = this.animation
    Pe(e) && Ne(e, this)
  }
  _set(e, t = !0) {
    const r = Ce(e)
    if (!M.und(r)) {
      const e = Ye(this)
      if (!e || !$(r, e.getValue())) {
        const n = ct(r)
        e && e.constructor == n ? e.setValue(r) : Ze(this, n.create(r)),
          e &&
            b.batchedUpdates(() => {
              this._onChange(r, t)
            })
      }
    }
    return Ye(this)
  }
  _onStart() {
    const e = this.animation
    e.changed || ((e.changed = !0), ar(this, 'onStart', $t(this, Zt(this, e.to)), this))
  }
  _onChange(e, t) {
    t || (this._onStart(), gt(this.animation.onChange, e, this)),
      gt(this.defaultProps.onChange, e, this),
      super._onChange(e, t)
  }
  _start() {
    const e = this.animation
    Ye(this).reset(Ce(e.to)),
      e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
      Wt(this) || (Kt(this, !0), Ht(this) || this._resume())
  }
  _resume() {
    W.skipAnimation ? this.finish() : Z.start(this)
  }
  _stop(e, t) {
    if (Wt(this)) {
      Kt(this, !1)
      const r = this.animation
      q(r.values, (e) => {
        e.done = !0
      }),
        r.toValues && (r.onChange = r.onPause = r.onResume = void 0),
        Oe(this, { type: 'idle', parent: this })
      const n = t ? qt(this.get()) : $t(this.get(), Zt(this, null != e ? e : r.to))
      U(this._pendingCalls, n),
        r.changed && ((r.changed = !1), ar(this, 'onRest', n, this))
    }
  }
}
function Zt(e, t) {
  const r = kt(t)
  return $(kt(e.get()), r)
}
function er(e, t = e.loop, r = e.to) {
  let n = gt(t)
  if (n) {
    const o = !0 !== n && Et(n),
      s = (o || e).reverse,
      a = !o || o.reset
    return tr(
      mt(
        {},
        e,
        {
          loop: t,
          default: !1,
          pause: void 0,
          to: !s || Ct(r) ? r : void 0,
          from: a ? e.from : void 0,
          reset: a
        },
        o
      )
    )
  }
}
function tr(e) {
  const { to: t, from: r } = (e = Et(e)),
    n = new Set()
  return (
    M.obj(t) && nr(t, n),
    M.obj(r) && nr(r, n),
    (e.keys = n.size ? Array.from(n) : null),
    e
  )
}
function rr(e) {
  const t = tr(e)
  return M.und(t.default) && (t.default = _t(t)), t
}
function nr(e, t) {
  F(e, (e, r) => null != e && t.add(r))
}
const or = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume']
function sr(e, t, r) {
  e.animation[r] = t[r] !== bt(t, r) ? yt(t[r], e.key) : void 0
}
function ar(e, t, ...r) {
  var n, o, s, a
  null == (n = (o = e.animation)[t]) || n.call(o, ...r),
    null == (s = (a = e.defaultProps)[t]) || s.call(a, ...r)
}
const ir = ['onStart', 'onChange', 'onRest']
let cr = 1
class lr {
  constructor(e, t) {
    ;(this.id = cr++),
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
      e && this.start(mt({ default: !0 }, e))
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
    return this.each((t, r) => (e[r] = t.get())), e
  }
  set(e) {
    for (const t in e) {
      const r = e[t]
      M.und(r) || this.springs[t].set(r)
    }
  }
  update(e) {
    return e && this.queue.push(tr(e)), this
  }
  start(e) {
    let { queue: t } = this
    return (
      e ? (t = z(e).map(tr)) : (this.queue = []),
      this._flush ? this._flush(this, t) : (fr(this, t), ur(this, t))
    )
  }
  stop(e, t) {
    if ((e !== !!e && (t = e), t)) {
      const r = this.springs
      q(z(t), (t) => r[t].stop(!!e))
    } else zt(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e))
    return this
  }
  pause(e) {
    if (M.und(e)) this.start({ pause: !0 })
    else {
      const t = this.springs
      q(z(e), (e) => t[e].pause())
    }
    return this
  }
  resume(e) {
    if (M.und(e)) this.start({ pause: !1 })
    else {
      const t = this.springs
      q(z(e), (e) => t[e].resume())
    }
    return this
  }
  each(e) {
    F(this.springs, e)
  }
  _onFrame() {
    const { onStart: e, onChange: t, onRest: r } = this._events,
      n = this._active.size > 0,
      o = this._changed.size > 0
    ;((n && !this._started) || (o && !this._started)) &&
      ((this._started = !0),
      L(e, ([e, t]) => {
        ;(t.value = this.get()), e(t, this, this._item)
      }))
    const s = !n && this._started,
      a = o || (s && r.size) ? this.get() : null
    o &&
      t.size &&
      L(t, ([e, t]) => {
        ;(t.value = a), e(t, this, this._item)
      }),
      s &&
        ((this._started = !1),
        L(r, ([e, t]) => {
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
    b.onFrame(this._onFrame)
  }
}
function ur(e, t) {
  return Promise.all(t.map((t) => dr(e, t))).then((t) => Vt(e, t))
}
async function dr(e, t, r) {
  const { keys: n, to: o, from: s, loop: a, onRest: i, onResolve: c } = t,
    l = M.obj(t.default) && t.default
  a && (t.loop = !1), !1 === o && (t.to = null), !1 === s && (t.from = null)
  const u = M.arr(o) || M.fun(o) ? o : void 0
  u
    ? ((t.to = void 0), (t.onRest = void 0), l && (l.onRest = void 0))
    : q(ir, (r) => {
        const n = t[r]
        if (M.fun(n)) {
          const o = e._events[r]
          ;(t[r] = ({ finished: e, cancelled: t }) => {
            const r = o.get(n)
            r
              ? (e || (r.finished = !1), t && (r.cancelled = !0))
              : o.set(n, { value: null, finished: e || !1, cancelled: t || !1 })
          }),
            l && (l[r] = t[r])
        }
      })
  const d = e._state
  t.pause === !d.paused
    ? ((d.paused = t.pause), U(t.pause ? d.pauseQueue : d.resumeQueue))
    : d.paused && (t.pause = !0)
  const p = (n || Object.keys(e.springs)).map((r) => e.springs[r].start(t)),
    h = !0 === t.cancel || !0 === bt(t, 'cancel')
  ;(u || (h && d.asyncId)) &&
    p.push(
      Tt(++e._lastAsyncId, {
        props: t,
        state: d,
        actions: {
          pause: V,
          resume: V,
          start(t, r) {
            h ? (zt(d, e._lastAsyncId), r(qt(e))) : ((t.onRest = i), r(Ft(u, t, d, e)))
          }
        }
      })
    ),
    d.paused &&
      (await new Promise((e) => {
        d.resumeQueue.add(e)
      }))
  const m = Vt(e, await Promise.all(p))
  if (a && m.finished && (!r || !m.noop)) {
    const r = er(t, a, o)
    if (r) return fr(e, [r]), dr(e, r, !0)
  }
  return c && b.batchedUpdates(() => c(m, e, e.item)), m
}
function pr(e, t) {
  const r = mt({}, e.springs)
  return (
    t &&
      q(z(t), (e) => {
        M.und(e.keys) && (e = tr(e)),
          M.obj(e.to) || (e = mt({}, e, { to: void 0 })),
          gr(r, e, (e) => mr(e))
      }),
    hr(e, r),
    r
  )
}
function hr(e, t) {
  F(t, (t, r) => {
    e.springs[r] || ((e.springs[r] = t), Re(t, e))
  })
}
function mr(e, t) {
  const r = new Yt()
  return (r.key = e), t && Re(r, t), r
}
function gr(e, t, r) {
  t.keys &&
    q(t.keys, (n) => {
      ;(e[n] || (e[n] = r(n)))._prepareNode(t)
    })
}
function fr(e, t) {
  q(t, (t) => {
    gr(e.springs, t, (t) => mr(t, e))
  })
}
const yr = ['children'],
  br = (e) => {
    let { children: t } = e,
      r = (function (e, t) {
        if (null == e) return {}
        var r,
          n,
          o = {},
          s = Object.keys(e)
        for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
        return o
      })(e, yr)
    const n = l.exports.useContext(vr),
      o = r.pause || !!n.pause,
      s = r.immediate || !!n.immediate
    r = (function (e, t) {
      const [r] = l.exports.useState(() => ({ inputs: t, result: e() })),
        n = l.exports.useRef(),
        o = n.current
      let s = o
      s
        ? Boolean(
            t &&
              s.inputs &&
              (function (e, t) {
                if (e.length !== t.length) return !1
                for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1
                return !0
              })(t, s.inputs)
          ) || (s = { inputs: t, result: e() })
        : (s = r)
      return (
        l.exports.useEffect(() => {
          ;(n.current = s), o == r && (r.inputs = r.result = void 0)
        }, [s]),
        s.result
      )
    })(() => ({ pause: o, immediate: s }), [o, s])
    const { Provider: a } = vr
    return l.exports.createElement(a, { value: r }, t)
  },
  vr =
    ((_r = br),
    (wr = {}),
    Object.assign(_r, l.exports.createContext(wr)),
    (_r.Provider._context = _r),
    (_r.Consumer._context = _r),
    _r)
var _r, wr
;(br.Provider = vr.Provider), (br.Consumer = vr.Consumer)
const xr = () => {
  const e = [],
    t = function (t) {
      Qe(
        `${ze}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
      )
      const n = []
      return (
        q(e, (e, o) => {
          if (M.und(t)) n.push(e.start())
          else {
            const s = r(t, e, o)
            s && n.push(e.start(s))
          }
        }),
        n
      )
    }
  ;(t.current = e),
    (t.add = function (t) {
      e.includes(t) || e.push(t)
    }),
    (t.delete = function (t) {
      const r = e.indexOf(t)
      ~r && e.splice(r, 1)
    }),
    (t.pause = function () {
      return q(e, (e) => e.pause(...arguments)), this
    }),
    (t.resume = function () {
      return q(e, (e) => e.resume(...arguments)), this
    }),
    (t.set = function (t) {
      q(e, (e) => e.set(t))
    }),
    (t.start = function (t) {
      const r = []
      return (
        q(e, (e, n) => {
          if (M.und(t)) r.push(e.start())
          else {
            const o = this._getProps(t, e, n)
            o && r.push(e.start(o))
          }
        }),
        r
      )
    }),
    (t.stop = function () {
      return q(e, (e) => e.stop(...arguments)), this
    }),
    (t.update = function (t) {
      return q(e, (e, r) => e.update(this._getProps(t, e, r))), this
    })
  const r = function (e, t, r) {
    return M.fun(e) ? e(r, t) : e
  }
  return (t._getProps = r), t
}
function Er(e, t, r) {
  const n = M.fun(t) && t
  n && !r && (r = [])
  const o = l.exports.useMemo(() => (n || 3 == arguments.length ? xr() : void 0), []),
    s = l.exports.useRef(0),
    a = Je(),
    i = l.exports.useMemo(
      () => ({
        ctrls: [],
        queue: [],
        flush(e, t) {
          const r = pr(e, t)
          return s.current > 0 &&
            !i.queue.length &&
            !Object.keys(r).some((t) => !e.springs[t])
            ? ur(e, t)
            : new Promise((n) => {
                hr(e, r),
                  i.queue.push(() => {
                    n(ur(e, t))
                  }),
                  a()
              })
        }
      }),
      []
    ),
    c = l.exports.useRef([...i.ctrls]),
    u = [],
    d = He(e) || 0
  function p(e, r) {
    for (let o = e; o < r; o++) {
      const e = c.current[o] || (c.current[o] = new lr(null, i.flush)),
        r = n ? n(o, e) : t[o]
      r && (u[o] = rr(r))
    }
  }
  l.exports.useMemo(() => {
    q(c.current.slice(e, d), (e) => {
      St(e, o), e.stop(!0)
    }),
      (c.current.length = e),
      p(d, e)
  }, [e]),
    l.exports.useMemo(() => {
      p(0, Math.min(d, e))
    }, r)
  const h = c.current.map((e, t) => pr(e, u[t])),
    m = l.exports.useContext(br),
    g = He(m),
    f = m !== g && Pt(m)
  Ke(() => {
    s.current++, (i.ctrls = c.current)
    const { queue: e } = i
    e.length && ((i.queue = []), q(e, (e) => e())),
      q(c.current, (e, t) => {
        null == o || o.add(e), f && e.start({ default: m })
        const r = u[t]
        r && (Ot(e, r.ref), e.ref ? e.queue.push(r) : e.start(r))
      })
  }),
    Be(() => () => {
      q(i.ctrls, (e) => e.stop(!0))
    })
  const y = h.map((e) => mt({}, e))
  return o ? [y, o] : y
}
function kr(e, t) {
  const r = M.fun(e),
    [[n], o] = Er(1, r ? e : [e], r ? t || [] : t)
  return r || 2 == arguments.length ? [n, o] : n
}
let Pr
var Cr
;((Cr = Pr || (Pr = {})).MOUNT = 'mount'),
  (Cr.ENTER = 'enter'),
  (Cr.UPDATE = 'update'),
  (Cr.LEAVE = 'leave')
class Sr extends Bt {
  constructor(e, t) {
    super(),
      (this.key = void 0),
      (this.idle = !0),
      (this.calc = void 0),
      (this._active = new Set()),
      (this.source = e),
      (this.calc = we(...t))
    const r = this._get(),
      n = ct(r)
    Ze(this, n.create(r))
  }
  advance(e) {
    const t = this._get()
    $(t, this.get()) || (Ye(this).setValue(t), this._onChange(t, this.idle)),
      !this.idle && jr(this._active) && Ar(this)
  }
  _get() {
    const e = M.arr(this.source) ? this.source.map(Ce) : z(Ce(this.source))
    return this.calc(...e)
  }
  _start() {
    this.idle &&
      !jr(this._active) &&
      ((this.idle = !1),
      q(et(this), (e) => {
        e.done = !1
      }),
      W.skipAnimation
        ? (b.batchedUpdates(() => this.advance()), Ar(this))
        : Z.start(this))
  }
  _attach() {
    let e = 1
    q(z(this.source), (t) => {
      Pe(t) && Re(t, this),
        Qt(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1)))
    }),
      (this.priority = e),
      this._start()
  }
  _detach() {
    q(z(this.source), (e) => {
      Pe(e) && Ne(e, this)
    }),
      this._active.clear(),
      Ar(this)
  }
  eventObserved(e) {
    'change' == e.type
      ? e.idle
        ? this.advance()
        : (this._active.add(e.parent), this._start())
      : 'idle' == e.type
      ? this._active.delete(e.parent)
      : 'priority' == e.type &&
        (this.priority = z(this.source).reduce(
          (e, t) => Math.max(e, (Qt(t) ? t.priority : 0) + 1),
          0
        ))
  }
}
function Or(e) {
  return !1 !== e.idle
}
function jr(e) {
  return !e.size || Array.from(e).every(Or)
}
function Ar(e) {
  e.idle ||
    ((e.idle = !0),
    q(et(e), (e) => {
      e.done = !0
    }),
    Oe(e, { type: 'idle', parent: e }))
}
function Rr(e, t) {
  if (null == e) return {}
  var r,
    n,
    o = {},
    s = Object.keys(e)
  for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
  return o
}
W.assign({ createStringInterpolator: Fe, to: (e, t) => new Sr(e, t) })
const Nr = ['style', 'children', 'scrollTop', 'scrollLeft'],
  Ir = /^--/
function Tr(e, t) {
  return null == t || 'boolean' == typeof t || '' === t
    ? ''
    : 'number' != typeof t || 0 === t || Ir.test(e) || (Mr.hasOwnProperty(e) && Mr[e])
    ? ('' + t).trim()
    : t + 'px'
}
const Vr = {}
let Mr = {
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
const $r = ['Webkit', 'Ms', 'Moz', 'O']
Mr = Object.keys(Mr).reduce(
  (e, t) => (
    $r.forEach(
      (r) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t])
    ),
    e
  ),
  Mr
)
const qr = ['x', 'y', 'z'],
  Fr = /^(matrix|translate|scale|rotate|skew)/,
  zr = /^(translate)/,
  Lr = /^(rotate|skew)/,
  Ur = (e, t) => (M.num(e) && 0 !== e ? e + t : e),
  Qr = (e, t) =>
    M.arr(e) ? e.every((e) => Qr(e, t)) : M.num(e) ? e === t : parseFloat(e) === t
class Gr extends st {
  constructor(e) {
    let { x: t, y: r, z: n } = e,
      o = Rr(e, qr)
    const s = [],
      a = []
    ;(t || r || n) &&
      (s.push([t || 0, r || 0, n || 0]),
      a.push((e) => [`translate3d(${e.map((e) => Ur(e, 'px')).join(',')})`, Qr(e, 0)])),
      F(o, (e, t) => {
        if ('transform' === t) s.push([e || '']), a.push((e) => [e, '' === e])
        else if (Fr.test(t)) {
          if ((delete o[t], M.und(e))) return
          const r = zr.test(t) ? 'px' : Lr.test(t) ? 'deg' : ''
          s.push(z(e)),
            a.push(
              'rotate3d' === t
                ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${Ur(o, r)})`, Qr(o, 0)]
                : (e) => [
                    `${t}(${e.map((e) => Ur(e, r)).join(',')})`,
                    Qr(e, t.startsWith('scale') ? 1 : 0)
                  ]
            )
        }
      }),
      s.length && (o.transform = new Br(s, a)),
      super(o)
  }
}
class Br extends je {
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
      q(this.inputs, (r, n) => {
        const o = Ce(r[0]),
          [s, a] = this.transforms[n](M.arr(o) ? o : r.map(Ce))
        ;(e += ' ' + s), (t = t && a)
      }),
      t ? 'none' : e
    )
  }
  observerAdded(e) {
    1 == e && q(this.inputs, (e) => q(e, (e) => Pe(e) && Re(e, this)))
  }
  observerRemoved(e) {
    0 == e && q(this.inputs, (e) => q(e, (e) => Pe(e) && Ne(e, this)))
  }
  eventObserved(e) {
    'change' == e.type && (this._value = null), Oe(this, e)
  }
}
const Dr = ['scrollTop', 'scrollLeft']
W.assign({
  batchedUpdates: u.exports.unstable_batchedUpdates,
  createStringInterpolator: Fe,
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
const Jr = ((
    e,
    {
      applyAnimatedValues: t = () => !1,
      createAnimatedStyle: r = (e) => new st(e),
      getComponentProps: n = (e) => e
    } = {}
  ) => {
    const o = { applyAnimatedValues: t, createAnimatedStyle: r, getComponentProps: n },
      s = (e) => {
        const t = ht(e) || 'Anonymous'
        return (
          ((e = M.str(e)
            ? s[e] || (s[e] = ut(e, o))
            : e[pt] || (e[pt] = ut(e, o))).displayName = `Animated(${t})`),
          e
        )
      }
    return (
      F(e, (t, r) => {
        M.arr(e) && (r = ht(t)), (s[r] = s(t))
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
        const r =
            'filter' === e.nodeName ||
            (e.parentNode && 'filter' === e.parentNode.nodeName),
          n = t,
          { style: o, children: s, scrollTop: a, scrollLeft: i } = n,
          c = Rr(n, Nr),
          l = Object.values(c),
          u = Object.keys(c).map((t) =>
            r || e.hasAttribute(t)
              ? t
              : Vr[t] || (Vr[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase()))
          )
        void 0 !== s && (e.textContent = s)
        for (let d in o)
          if (o.hasOwnProperty(d)) {
            const t = Tr(d, o[d])
            Ir.test(d) ? e.style.setProperty(d, t) : (e.style[d] = t)
          }
        u.forEach((t, r) => {
          e.setAttribute(t, l[r])
        }),
          void 0 !== a && (e.scrollTop = a),
          void 0 !== i && (e.scrollLeft = i)
      },
      createAnimatedStyle: (e) => new Gr(e),
      getComponentProps: (e) => Rr(e, Dr)
    }
  ).animated,
  Wr = {
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
let Hr = 0
const Kr = (e) => {
  var t = e,
    {
      onChange: r,
      checked: a = !1,
      size: u = 24,
      animationProperties: p = Wr,
      moonColor: h = 'white',
      sunColor: m = 'black',
      style: g
    } = t,
    f = ((e, t) => {
      var r = {}
      for (var a in e) o.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a])
      if (null != e && n)
        for (var a of n(e)) t.indexOf(a) < 0 && s.call(e, a) && (r[a] = e[a])
      return r
    })(t, [
      'onChange',
      'checked',
      'size',
      'animationProperties',
      'moonColor',
      'sunColor',
      'style'
    ])
  const [y, b] = l.exports.useState(0)
  l.exports.useEffect(() => {
    ;(Hr += 1), b(Hr)
  }, [b])
  const v = l.exports.useMemo(() => (p !== Wr ? Object.assign(Wr, p) : p), [p]),
    { circle: _, svg: w, lines: x, mask: E } = v[a ? 'dark' : 'light'],
    k = kr(c(i({}, w), { config: p.springConfig })),
    P = kr(c(i({}, _), { config: p.springConfig })),
    C = kr(c(i({}, E), { config: p.springConfig })),
    S = kr(c(i({}, x), { config: p.springConfig })),
    O = `circle-mask-${y}`
  return d.createElement(
    Jr.svg,
    i(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: u,
        height: u,
        viewBox: '0 0 24 24',
        color: a ? h : m,
        fill: 'none',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        stroke: 'currentColor',
        onClick: () => r(!a),
        style: i(i({ cursor: 'pointer' }, k), g)
      },
      f
    ),
    d.createElement(
      'mask',
      { id: O },
      d.createElement('rect', {
        x: '0',
        y: '0',
        width: '100%',
        height: '100%',
        fill: 'white'
      }),
      d.createElement(Jr.circle, { style: C, r: '9', fill: 'black' })
    ),
    d.createElement(Jr.circle, {
      cx: '12',
      cy: '12',
      fill: a ? h : m,
      style: P,
      mask: `url(#${O})`
    }),
    d.createElement(
      Jr.g,
      { stroke: 'currentColor', style: S },
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
function Xr() {
  const { theme: e } = p(({ app: e }) => e),
    t = h()
  return d.createElement(
    'nav',
    { className: f.base },
    d.createElement(
      'div',
      { className: f.items },
      d.createElement(Kr, {
        checked: 'light' === e,
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
var Yr = 'Footer_base_1'
function Zr() {
  return d.createElement(
    'footer',
    { className: Yr },
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
var en = 'Modal_base_1',
  tn = 'Modal_show_23',
  rn = 'Modal_close_38'
var nn = 'Skill_base_1',
  on = 'Skill_icon_8',
  sn = 'Skill_big_32'
function an({ name: e, description: t, color: r, image: n, big: o = !1 }) {
  const s = h()
  return d.createElement(
    'div',
    {
      className: `${nn} ${o ? sn : ''}`,
      onClick: () => {
        s({
          type: '@modal/show',
          payload: { name: e, color: r, image: n, description: t }
        })
      }
    },
    d.createElement(
      'div',
      { className: on },
      d.createElement('img', { src: n, alt: `${e} icon` })
    ),
    d.createElement('span', null, e)
  )
}
var cn = 'Section_base_1',
  ln = 'Section_animated_10',
  un = 'Section_shadow_17'
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
var dn = function () {
  return (dn =
    Object.assign ||
    function (e) {
      for (var t, r = 1, n = arguments.length; r < n; r++)
        for (var o in (t = arguments[r]))
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
      return e
    }).apply(this, arguments)
}
var pn = function (e) {
  var t = e.animate,
    r = e.backgroundColor,
    n = e.backgroundOpacity,
    o = e.baseUrl,
    s = e.children,
    a = e.foregroundColor,
    i = e.foregroundOpacity,
    c = e.gradientRatio,
    u = e.uniqueKey,
    d = e.interval,
    p = e.rtl,
    h = e.speed,
    m = e.style,
    g = e.title,
    f = (function (e, t) {
      var r = {}
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
          t.indexOf(n[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
            (r[n[o]] = e[n[o]])
      }
      return r
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
    y = u || Math.random().toString(36).substring(6),
    b = y + '-diff',
    v = y + '-animated-diff',
    _ = y + '-aria',
    w = p ? { transform: 'scaleX(-1)' } : null,
    x = '0; ' + d + '; 1',
    E = h + 's'
  return l.exports.createElement(
    'svg',
    dn({ 'aria-labelledby': _, role: 'img', style: dn(dn({}, m), w) }, f),
    g ? l.exports.createElement('title', { id: _ }, g) : null,
    l.exports.createElement('rect', {
      role: 'presentation',
      x: '0',
      y: '0',
      width: '100%',
      height: '100%',
      clipPath: 'url(' + o + '#' + b + ')',
      style: { fill: 'url(' + o + '#' + v + ')' }
    }),
    l.exports.createElement(
      'defs',
      null,
      l.exports.createElement('clipPath', { id: b }, s),
      l.exports.createElement(
        'linearGradient',
        { id: v },
        l.exports.createElement(
          'stop',
          { offset: '0%', stopColor: r, stopOpacity: n },
          t &&
            l.exports.createElement('animate', {
              attributeName: 'offset',
              values: -c + '; ' + -c + '; 1',
              keyTimes: x,
              dur: E,
              repeatCount: 'indefinite'
            })
        ),
        l.exports.createElement(
          'stop',
          { offset: '50%', stopColor: a, stopOpacity: i },
          t &&
            l.exports.createElement('animate', {
              attributeName: 'offset',
              values: -c / 2 + '; ' + -c / 2 + '; ' + (1 + c / 2),
              keyTimes: x,
              dur: E,
              repeatCount: 'indefinite'
            })
        ),
        l.exports.createElement(
          'stop',
          { offset: '100%', stopColor: r, stopOpacity: n },
          t &&
            l.exports.createElement('animate', {
              attributeName: 'offset',
              values: '0; 0; ' + (1 + c),
              keyTimes: x,
              dur: E,
              repeatCount: 'indefinite'
            })
        )
      )
    )
  )
}
pn.defaultProps = {
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
var hn = function (e) {
    return e.children
      ? l.exports.createElement(pn, dn({}, e))
      : l.exports.createElement(mn, dn({}, e))
  },
  mn = function (e) {
    return l.exports.createElement(
      hn,
      dn({ viewBox: '0 0 476 124' }, e),
      l.exports.createElement('rect', {
        x: '48',
        y: '8',
        width: '88',
        height: '6',
        rx: '3'
      }),
      l.exports.createElement('rect', {
        x: '48',
        y: '26',
        width: '52',
        height: '6',
        rx: '3'
      }),
      l.exports.createElement('rect', {
        x: '0',
        y: '56',
        width: '410',
        height: '6',
        rx: '3'
      }),
      l.exports.createElement('rect', {
        x: '0',
        y: '72',
        width: '380',
        height: '6',
        rx: '3'
      }),
      l.exports.createElement('rect', {
        x: '0',
        y: '88',
        width: '178',
        height: '6',
        rx: '3'
      }),
      l.exports.createElement('circle', { cx: '20', cy: '20', r: '20' })
    )
  },
  gn = hn
function fn() {
  return d.createElement(
    gn,
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
function yn({
  shadow: e = !0,
  animated: t = !0,
  fallback: r = !0,
  children: n,
  onClick: o
}) {
  const s = l.exports.useRef(null),
    a = (function (e, t, r) {
      const [n, o] = l.exports.useState(r),
        s = ([e]) => {
          ;(null == e ? void 0 : e.isIntersecting) && o(!0)
        }
      return (
        l.exports.useEffect(() => {
          const r = !!window.IntersectionObserver,
            o = null == e ? void 0 : e.current
          if (n || !r || !o) return
          const a = new IntersectionObserver(s, t)
          return a.observe(o), () => a.disconnect()
        }, [e, t]),
        n
      )
    })(s, { threshold: 0.4, fallback: r }),
    i = `${cn} ${e ? un : ''} ${r ? (t && a ? ln : '') : t ? ln : ''}`
  return d.createElement(
    d.Fragment,
    null,
    d.createElement(
      'section',
      { className: i, ref: s, onClick: o },
      r && !a ? d.createElement(fn, null) : n
    )
  )
}
function bn() {
  const { show: e, name: t, color: r, image: n, description: o } = p(({ modal: e }) => e),
    s = h(),
    a = () => {
      s({ type: '@modal/hide' })
    },
    i = (e) => {
      27 === (e.charCode || e.keyCode) && a()
    }
  return (
    l.exports.useEffect(() => {
      e
        ? document.body.addEventListener('keydown', i)
        : document.body.removeEventListener('keydown', i)
    }, [e]),
    d.createElement(
      'div',
      { className: `${en} ${e ? tn : ''}`, onClick: a },
      d.createElement(
        yn,
        {
          onClick: (e) => {
            e.stopPropagation()
          }
        },
        d.createElement('div', { className: `${rn} unselectable`, onClick: a }, '✕'),
        d.createElement(an, { name: t, color: r, image: n, big: !0 }),
        d.createElement('p', { className: 'center' }, o)
      )
    )
  )
}
var vn = {
  base: 'GoToButton_base_1',
  up: 'GoToButton_up_19',
  icon: 'GoToButton_icon_32',
  'appear-button': 'GoToButton_appear-button_1',
  dot1: 'GoToButton_dot1_52',
  dot2: 'GoToButton_dot2_60',
  dot3: 'GoToButton_dot3_68'
}
function _n({ direction: e = 'down', label: t }) {
  return d.createElement(
    'div',
    {
      className: `${vn.base} ${'down' === e ? vn.down : vn.up}`,
      onClick: (t) =>
        ((e, t) => {
          const r = document.getElementById('base'),
            n = e.target.getBoundingClientRect(),
            o = 'down' === t ? r.scrollTop + n.y + 50 : 0
          r.scrollTo({ top: o, behavior: 'smooth' })
        })(t, e)
    },
    'up' === e && d.createElement('p', null, t),
    d.createElement(
      'div',
      { className: vn.icon },
      d.createElement('div', { className: vn.dot1 }),
      d.createElement('div', { className: vn.dot2 }),
      d.createElement('div', { className: vn.dot3 })
    ),
    'down' === e && d.createElement('p', null, t)
  )
}
var wn = 'Avatar_base_1'
function xn() {
  return d.createElement(
    'header',
    { id: 'profile', className: wn },
    d.createElement('img', {
      src: '/portfolio/assets/profile-photo.a60c8890.jpg',
      alt: 'me',
      loading: 'eager'
    })
  )
}
function En() {
  return d.createElement(
    yn,
    { shadow: !1, fallback: !1 },
    d.createElement(xn, null),
    d.createElement('h1', null, 'Pablo Cabrera (pabloc54)'),
    d.createElement('p', { className: 'small' }, '(En busca de trabajo)'),
    d.createElement(
      'p',
      { className: 'center' },
      '¡Hola! Soy un Desarrollador Web Fullstack de seniority Junior, con amplios conocimientos en tecnologías web y diseño'
    ),
    d.createElement(
      'p',
      { className: 'center' },
      '¡Te invito a conocer más de mí y mis proyectos más abajo!'
    )
  )
}
var kn = 'AboutMeSection_inline_1'
function Pn() {
  return d.createElement(
    yn,
    null,
    d.createElement('h2', null, 'Acerca de mí'),
    d.createElement(
      'div',
      { className: kn },
      d.createElement('img', {
        src: '/portfolio/assets/guatemala.c57d17f5.jpg',
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
      { className: kn },
      d.createElement(
        'p',
        null,
        'Estoy cursando un grado de ingeniería en ciencias y sistemas, gracias al cual he desarrollado una gran habilidad en el desarrollo de software, y gran pasión en todo lo relacionado con la tecnología 💻.'
      ),
      d.createElement('img', {
        src: '/portfolio/assets/ingenieria.74cc3978.jpg',
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
var Cn = 'SkillsSection_subsection_1',
  Sn = 'SkillsSection_skills_5'
const On = {
  FrontEnd: [
    {
      name: 'HTML',
      description: 'desc',
      color: '#e56128',
      image: '/portfolio/assets/html-icon.e1bb9061.svg'
    },
    {
      name: 'CSS',
      description: 'desc',
      color: '#3399ff',
      image: '/portfolio/assets/css-icon.bc7a8cb8.svg'
    },
    {
      name: 'JavaScript',
      description: 'desc',
      color: '#ead41c',
      image: '/portfolio/assets/javascript-icon.dd689822.svg'
    },
    {
      name: 'ReactJS',
      description: 'desc',
      color: '#61dbfb',
      image: '/portfolio/assets/reactjs-icon.e8f9b857.svg'
    },
    {
      name: 'Redux',
      description: 'desc',
      color: '#764abc',
      image: '/portfolio/assets/redux-icon.f5f8094e.svg'
    }
  ],
  BackEnd: [
    {
      name: 'ExpressJS',
      description: 'desc',
      color: '#88c043',
      image: '/portfolio/assets/express-icon.44e8ea18.svg'
    },
    {
      name: 'Go',
      description: 'desc',
      color: '#6ad7e5',
      image: '/portfolio/assets/go-icon.b88ef4ed.svg'
    },
    {
      name: 'Python',
      description: 'desc',
      color: '#3478ae',
      image: '/portfolio/assets/python-icon.64c6d516.svg'
    },
    {
      name: 'MongoDB',
      description: 'desc',
      color: '#4cb03e',
      image: '/portfolio/assets/mongodb-icon.64a21d47.svg'
    },
    {
      name: 'MySQL',
      description: 'desc',
      color: '#5d87a1',
      image: '/portfolio/assets/mysql-icon.d33f9bfd.svg'
    },
    {
      name: 'Oracle PL/SQL',
      description: 'desc',
      color: '#8ea5af',
      image: '/portfolio/assets/oraclesql-icon.426376ff.svg'
    }
  ],
  Otras: [
    {
      name: 'AWS',
      description: 'desc',
      color: '#ff9900',
      image: '/portfolio/assets/aws-icon.dbfb8d7b.svg'
    },
    {
      name: 'Oracle Cloud',
      description: 'desc',
      color: '#ea060d',
      image: '/portfolio/assets/oraclecloud-icon.72ca79b4.svg'
    }
  ]
}
function jn() {
  return d.createElement(
    yn,
    null,
    d.createElement('h2', null, 'Habilidades'),
    d.createElement('p', null, 'Haz click para más detalles'),
    Object.entries(On).map(([e, t]) =>
      d.createElement(
        'div',
        { className: Cn, key: e },
        d.createElement('h3', null, e),
        d.createElement(
          'div',
          { className: Sn },
          t.map((e, t) => d.createElement(an, i({ key: t }, e)))
        )
      )
    )
  )
}
var An = 'ProjectsSection_projects_1'
var Rn = 'Project_base_1',
  Nn = 'Project_expanded_17',
  In = 'Project_down_40'
function Tn({ name: e, description: t, technologies: r = [] }) {
  const [n, o] = l.exports.useState(!1)
  return d.createElement(
    'div',
    { className: `${Rn} ${n ? Nn : ''}` },
    d.createElement(
      'div',
      {
        className: `${In} unselectable`,
        onClick: () => {
          o(!n)
        }
      },
      '❯'
    ),
    d.createElement('h3', null, e),
    d.createElement('p', null, t),
    d.createElement('p', null, r.join(', '))
  )
}
const Vn = [
  {
    name: 'Typesty',
    description:
      'descripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion larga',
    url: 'https://github.com/PabloC54/OLC1-Typesty',
    technologies: ['ReactJS', 'Jison'],
    deployed: !1
  },
  {
    name: 'Regexive',
    description:
      'descripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion larga',
    url: 'https://github.com/PabloC54/OLC1-Regexive',
    technologies: ['Java'],
    deployed: !1
  },
  {
    name: 'Quiniela APP',
    description:
      'descripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion largadescripcion larga',
    url: 'https://github.com/PabloC54/MIA-Quiniela-app',
    technologies: ['ReactJS', 'GoLang', 'Oracle'],
    deployed: !1
  }
]
function Mn() {
  return d.createElement(
    yn,
    null,
    d.createElement('h2', null, 'Proyectos'),
    d.createElement(
      'div',
      { className: An },
      Vn.map((e, t) => d.createElement(Tn, i({ key: t }, e)))
    )
  )
}
function $n() {
  return d.createElement(
    yn,
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
const qn = {
  light: {
    'background-color': 'rgb(230, 230, 240)',
    'font-color': 'rgb(30, 30, 40)',
    'navbar-background-color': 'rgb(215, 215, 240)',
    'navbar-decoration-color': 'rgb(55, 55, 75)',
    'section-background-color': 'rgb(225, 225, 235)',
    'small-font-color': 'rgb(75, 75, 85)',
    'link-font-color': 'rgb(90, 90, 230)',
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
function Fn() {
  const { theme: e } = p(({ app: e }) => e)
  var t
  return (
    (t = e),
    l.exports.useLayoutEffect(() => {
      const e = qn[t]
      console.log(t, e)
      for (const t in e) document.documentElement.style.setProperty(`--${t}`, e[t])
    }, [t]),
    d.createElement(
      'div',
      { className: m, id: 'base' },
      d.createElement(bn, null),
      d.createElement(Xr, null),
      d.createElement(
        'div',
        { className: g },
        d.createElement(En, null),
        d.createElement(_n, { direction: 'down', label: 'acerca de mí' }),
        d.createElement(Pn, null),
        d.createElement(_n, { direction: 'down', label: 'habilidades' }),
        d.createElement(jn, null),
        d.createElement(_n, { direction: 'down', label: 'proyectos' }),
        d.createElement(Mn, null),
        d.createElement($n, null),
        d.createElement(_n, { direction: 'up', label: 'inicio' })
      ),
      d.createElement(Zr, null)
    )
  )
}
export { Fn as default }
