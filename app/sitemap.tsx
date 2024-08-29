import type { MetadataRoute } from 'next'

import { loadHomePage } from '@/sanity/loader/loadQuery'

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL // Get published domain from Vercel

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const homepage = await loadHomePage()
  // Home page
  const defaultUrls: MetadataRoute.Sitemap = [
    {
      url: `https://${baseUrl}`,
      changeFrequency: 'weekly',
      priority: 1,
      lastModified: homepage.data?._updatedAt || new Date(),
    },
  ]
  // Get links to published projects at Home page
  const publishedProjects = homepage.data?.showcaseProjects || []
  const projectLinks: MetadataRoute.Sitemap = publishedProjects.map((page) => ({
    url: `https://${baseUrl}/${page?.slug}`,
    changeFrequency: 'weekly',
    priority: 0.7,
    lastModified: page?._updatedAt,
  }))

  return [...defaultUrls, ...projectLinks]
}
