var e = Object.defineProperty,
  t = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  l = (t, r, a) =>
    r in t
      ? e(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[r] = a),
  s = (e, t) => {
    for (var r in t || (t = {})) o.call(t, r) && l(e, r, t[r])
    if (a) for (var r of a(t)) n.call(t, r) && l(e, r, t[r])
    return e
  },
  c = (e, a) => t(e, r(a))
import {
  u as i,
  R as d,
  c as m,
  a as p,
  b as u,
  r as h,
  d as f,
  P as y
} from './vendor.24f937d2.js'
let E
const b = {}
var g = 'Loader_base_1',
  v = 'Loader_loader_12',
  w = 'Loader_dark_26'
function O() {
  const { theme: e } = i(({ app: e }) => e)
  return d.createElement(
    'div',
    { className: `${g} ${'dark' === e ? w : ''}` },
    d.createElement('div', { className: v })
  )
}
const _ = { theme: localStorage.getItem('theme') || 'light' },
  P = {
    show: !1,
    name: 'NoName',
    color: '#FFF',
    image: '',
    descriptiion: 'NoDescription'
  },
  j = { app: _, modal: P },
  k = p(
    m({
      app: (e = _, t) => {
        switch (t.type) {
          case '@app/toggleTheme': {
            const t = 'light' === e.theme ? 'dark' : 'light',
              r = c(s({}, e), { theme: t })
            return localStorage.setItem('theme', t), r
          }
          default:
            return e
        }
      },
      modal: (e = P, t) => {
        switch (t.type) {
          case '@modal/show':
            return s({ show: !0 }, t.payload)
          case '@modal/hide':
            return c(s({}, e), { show: !1 })
          default:
            return e
        }
      }
    }),
    j,
    u()
  ),
  L = h.exports.lazy(() =>
    (function (e, t) {
      if (!t) return e()
      if (void 0 === E) {
        const e = document.createElement('link').relList
        E = e && e.supports && e.supports('modulepreload') ? 'modulepreload' : 'preload'
      }
      return Promise.all(
        t.map((e) => {
          if (e in b) return
          b[e] = !0
          const t = e.endsWith('.css'),
            r = t ? '[rel="stylesheet"]' : ''
          if (document.querySelector(`link[href="${e}"]${r}`)) return
          const a = document.createElement('link')
          return (
            (a.rel = t ? 'stylesheet' : E),
            t || ((a.as = 'script'), (a.crossOrigin = '')),
            (a.href = e),
            document.head.appendChild(a),
            t
              ? new Promise((e, t) => {
                  a.addEventListener('load', e), a.addEventListener('error', t)
                })
              : void 0
          )
        })
      ).then(() => e())
    })(
      () => import('./App.2117aea3.js'),
      [
        '/portfolio/assets/App.2117aea3.js',
        '/portfolio/assets/App.ff88fcb5.css',
        '/portfolio/assets/vendor.24f937d2.js'
      ]
    )
  )
f.render(
  d.createElement(
    d.StrictMode,
    null,
    d.createElement(
      y,
      { store: k },
      d.createElement(
        h.exports.Suspense,
        { fallback: d.createElement(O, null) },
        d.createElement(L, null)
      )
    )
  ),
  document.getElementById('root')
)