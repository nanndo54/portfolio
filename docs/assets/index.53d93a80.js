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
  u as d,
  R as i,
  c as p,
  a as m,
  b as u,
  r as h,
  d as f,
  P as y
} from './vendor.13d3f801.js'
let g
const b = {}
var E = 'Loader_base_1',
  v = 'Loader_loader_11',
  w = 'Loader_dark_25'
function O() {
  const { theme: e } = d(({ app: e }) => e)
  return i.createElement(
    'div',
    { className: `${E} ${'dark' === e ? w : ''}` },
    i.createElement('div', { className: v })
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
      if (void 0 === g) {
        const e = document.createElement('link').relList
        g = e && e.supports && e.supports('modulepreload') ? 'modulepreload' : 'preload'
      }
      return Promise.all(
        t.map((e) => {
          if (e in b) return
          b[e] = !0
          const t = e.endsWith('.css'),
            r = t ? '[rel="stylesheet"]' : ''
          if (document.querySelector(`link[href="${e}"]${r}`)) return
          const o = document.createElement('link')
          return (
            (o.rel = t ? 'stylesheet' : g),
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
      () => import('./App.81dd7b94.js'),
      [
        '/portfolio/assets/App.81dd7b94.js',
        '/portfolio/assets/App.010a9ef3.css',
        '/portfolio/assets/vendor.13d3f801.js'
      ]
    )
  )
f.render(
  i.createElement(
    i.StrictMode,
    null,
    i.createElement(
      y,
      { store: L },
      i.createElement(
        h.exports.Suspense,
        { fallback: i.createElement(O, null) },
        i.createElement(S, null)
      )
    )
  ),
  document.getElementById('root')
)
export { _ as d }
