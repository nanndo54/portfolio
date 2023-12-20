import ReactDOMServer from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'

async function render(pageContext) {
  const { Page, pageProps } = pageContext

  const pageHtml = ReactDOMServer.renderToString(<Page {...pageProps} />)

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
      <meta name="color-scheme" content="dark light">
      <link rel="icon" type="image/svg+xml" href="/src/assets/svg/logo.svg" />
      <meta name="theme-color" content="#2784ee">
      <meta name="apple-mobile-web-app-status-bar-style" content="#2784ee">
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

export default render
