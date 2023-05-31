import '#assets/css/index.css'

import { hydrateRoot } from 'react-dom/client'
import { PageShell } from './PageShell'

async function render(pageContext) {
  const { Page, pageProps } = pageContext
  if (!Page)
    throw new Error('Client-side render() hook expects pageContext.Page to be defined')
  const root = document.querySelector('main')
  if (!root) throw new Error('DOM element main not found')
  hydrateRoot(
    root,
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )
}

export { render }
