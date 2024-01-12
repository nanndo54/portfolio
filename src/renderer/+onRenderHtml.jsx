import ReactDOMServer from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'

import logoIcon from '#/assets/icons/general/logo.svg'

async function render(pageContext) {
  const { Page, pageProps } = pageContext

  const pageHtml = ReactDOMServer.renderToString(<Page {...pageProps} />)

  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'Pablo Cabrera | Portfolio'
  const desc =
    (documentProps && documentProps.description) ||
    "My personal portfolio. Hi! I'm Pablo Cabrera (nanndo54), FullStack Web Developer at your dispose"

  const documentHtml = escapeInject`<!DOCTYPE html>
  <html lang="en" translate="no">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="${desc}"
      />
      <meta name="keyword" content="portfolio, frontend, javascript, developer" />
      <meta property="og:title" content="Pablo Cabrera | Portfolio" />
      <meta
        property="og:description"
        content="My personal portfolio. Hi! I'm Pablo Cabrera (nanndo54), FullStack Developer at your dispose"
      />
      <meta property="og:url" content="https://nanndo54.dev" />
      <meta property="og:type" content="website" />
      <meta name="color-scheme" content="dark light">
      <link rel="icon" type="image/svg+xml" href="${logoIcon}" />
      <meta name="theme-color" content="#7c7edf">
      <meta name="apple-mobile-web-app-status-bar-style" content="#7c7edf">

      <title>${title}</title>
    </head>
    <body top>
      <main>${dangerouslySkipEscape(pageHtml)}</main>
    </body>
  </html>`

  return {
    documentHtml,
    pageContext: {}
  }
}

export default render
