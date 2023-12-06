import express from 'express'
import compression from 'compression'
import sirv from 'sirv'
import path from 'path'
import { fileURLToPath } from 'url'

import { renderPage } from 'vike/server'

const isProduction = process.env.NODE_ENV === 'production'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = `${__dirname}/..`

startServer()

function wwwRedirect(req, res, next) {
  if (req.headers.host.slice(0, 4) === 'www.') {
    const newHost = req.headers.host.slice(4)
    return res.redirect(301, `${req.protocol}://${newHost}${req.originalUrl}`)
  }
  next()
}

async function startServer() {
  const app = express()

  app.use(compression())
  app.set('trust proxy', true)
  app.use(wwwRedirect)

  if (isProduction) {
    app.use(sirv(`${root}/dist/client`))
  } else {
    const vite = await import('vite')
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true }
      })
    ).middlewares
    app.use(viteDevMiddleware)
  }

  app.get('/', async (req, res, next) => {
    const pageContextInit = {
      urlOriginal: req.originalUrl
    }
    const pageContext = await renderPage(pageContextInit)
    const { httpResponse } = pageContext
    if (!httpResponse) return next()
    const { body, statusCode, headers, earlyHints } = httpResponse
    if (res.writeEarlyHints)
      res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) })
    res.status(statusCode)
    headers.forEach(([name, value]) => res.setHeader(name, value))

    res.send(body)
  })

  const port = process.env.PORT || 3000
  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}
