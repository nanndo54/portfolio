var e = Object.defineProperty,
  t = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  l = (t, r, o) =>
    r in t
      ? e(t, r, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[r] = o),
  s = (e, t) => {
    for (var r in t || (t = {})) a.call(t, r) && l(e, r, t[r])
    if (o) for (var r of o(t)) n.call(t, r) && l(e, r, t[r])
    return e
  },
  c = (e, o) => t(e, r(o))
import {
  u as i,
  R as d,
  c as p,
  a as m,
  b as u,
  r as h,
  d as f,
  P as y
} from './vendor.24f937d2.js'
let b
const g = {}
var E = 'Loader_base_1',
  v = 'Loader_loader_12',
  w = 'Loader_dark_26'
function O() {
  const { theme: e } = i(({ app: e }) => e)
  return d.createElement(
    'div',
    { className: `${E} ${'dark' === e ? w : ''}` },
    d.createElement('div', { className: v })
  )
}
var _ = '/portfolio/assets/default-technology-icon.149cf7f0.png'
const P = { theme: localStorage.getItem('theme') || 'ligth' },
  j = {
    show: !1,
    name: 'NoName',
    color: '#FFF',
    image: _,
    descriptiion: 'NoDescription'
  },
  k = { app: P, modal: j },
  L = m(
    p({
      app: (e = P, t) => {
        switch (t.type) {
          case '@app/toggleTheme': {
            const t = 'ligth' === e.theme ? 'dark' : 'ligth',
              r = c(s({}, e), { theme: t })
            return localStorage.setItem('theme', t), r
          }
          default:
            return e
        }
      },
      modal: (e = j, t) => {
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
    k,
    u()
  ),
  S = h.exports.lazy(() =>
    (function (e, t) {
      if (!t) return e()
      if (void 0 === b) {
        const e = document.createElement('link').relList
        b = e && e.supports && e.supports('modulepreload') ? 'modulepreload' : 'preload'
      }
      return Promise.all(
        t.map((e) => {
          if (e in g) return
          g[e] = !0
          const t = e.endsWith('.css'),
            r = t ? '[rel="stylesheet"]' : ''
          if (document.querySelector(`link[href="${e}"]${r}`)) return
          const o = document.createElement('link')
          return (
            (o.rel = t ? 'stylesheet' : b),
            t || ((o.as = 'script'), (o.crossOrigin = '')),
            (o.href = e),
            document.head.appendChild(o),
            t
              ? new Promise((e, t) => {
                  o.addEventListener('load', e), o.addEventListener('error', t)
                })
              : void 0
          )
        })
      ).then(() => e())
    })(
      () => import('./App.82a7bacb.js'),
      [
        '/portfolio/assets/App.82a7bacb.js',
        '/portfolio/assets/App.082842b4.css',
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
      { store: L },
      d.createElement(
        h.exports.Suspense,
        { fallback: d.createElement(O, null) },
        d.createElement(S, null)
      )
    )
  ),
  document.getElementById('root')
)
export { _ as d }
