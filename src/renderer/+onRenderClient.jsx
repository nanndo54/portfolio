import '#/styles/index.css'

import { hydrateRoot } from 'react-dom/client'

async function render(pageContext) {
  const { Page, pageProps } = pageContext
  const root = document.querySelector('main')

  hydrateRoot(root, <Page {...pageProps} />)
}

export default render
