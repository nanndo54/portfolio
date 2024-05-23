import bundleAnalyzer from '@next/bundle-analyzer'
import withPlaiceholder from '@plaiceholder/next'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  'preset-default',
                  'removeXMLNS',
                  'removeUnknownsAndDefaults',
                  'prefixIds'
                ]
              }
            }
          }
        ]
      }
    )

    fileLoaderRule.exclude = /\.svg$/i

    return config
  }
}

export default withPlaiceholder(withBundleAnalyzer(nextConfig))
