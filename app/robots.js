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
        disallow: '/'
      }
    ],
    sitemap: 'https://nanndo54.dev/sitemap.xml'
  }
}
