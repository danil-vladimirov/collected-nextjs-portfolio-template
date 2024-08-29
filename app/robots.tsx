import type { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL // Get published domain from Vercel

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `https://${baseUrl}/sitemap.xml`,
  }
}
