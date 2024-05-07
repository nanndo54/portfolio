export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/en'
      },
      {
        userAgent: '*',
        allow: '/es'
      },
      {
        userAgent: '*',
        allow: '/cv/'
      },
      {
        userAgent: '*',
        allow: '/splash/'
      },
      {
        userAgent: '*',
        disallow: '/static/'
      }
    ],
    sitemap: 'https://nanndo54.dev/sitemap.xml'
  }
}
