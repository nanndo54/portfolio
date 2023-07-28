export const passToClient = ['pageProps', 'urlPathname']

import ReactDOMServer from 'react-dom/server'
import { PageShell } from './PageShell'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'

import logo from '#/assets/svg/logo.svg'

async function render(pageContext) {
  const { Page, pageProps } = pageContext

  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'Pablo Cabrera | Portfolio'
  const desc =
    (documentProps && documentProps.description) ||
    "My personal portfolio. Hi! I'm Pablo Cabrera (pabloc54), FullStack Web Developer at your dispose"

  const documentHtml = escapeInject`<!DOCTYPE html>
  <html lang="en" translate="no">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-9XT17RG3ZV"></script>
      <meta
        name="description"
        content="${desc}"
      />
      <meta name="keyword" content="portfolio, frontend, javascript, developer" />
      <meta property="og:title" content="Pablo Cabrera | Portfolio" />
      <meta
        property="og:description"
        content="My personal portfolio. Hi! I'm Pablo Cabrera (pabloc54), FullStack Developer at your dispose"
      />
      <meta property="og:url" content="https://pabloc54.dev" />
      <meta property="og:type" content="website" />
      <link rel="icon" type="image/svg+xml" href="${logo}" />
      <script>
        window.dataLayer = window.dataLayer || []
        function gtag() {
          dataLayer.push(arguments)
        }
        gtag('js', new Date())
        gtag('config', 'G-9XT17RG3ZV')
      </script>
    </head>
    <body>
      <main>${dangerouslySkipEscape(pageHtml)}</main>
    </body>
  </html>`

  return {
    documentHtml,
    pageContext: {}
  }
}

export { render }
