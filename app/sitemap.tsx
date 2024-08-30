import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'

import { loadHomePage } from '@/sanity/loader/loadQuery'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = headers()
  const host = headersList.get('host')
  const homepage = await loadHomePage()
  // Home page
  const defaultUrls: MetadataRoute.Sitemap = [
    {
      url: `https://${host}`,
      changeFrequency: 'weekly',
      priority: 1,
      lastModified: homepage.data?._updatedAt || new Date(),
    },
  ]
  // Get links to published projects at Home page
  const publishedProjects = homepage.data?.showcaseProjects || []
  const projectLinks: MetadataRoute.Sitemap = publishedProjects.map((page) => ({
    url: `https://${host}/${page?.slug}`,
    changeFrequency: 'weekly',
    priority: 0.7,
    lastModified: page?._updatedAt,
  }))

  return [...defaultUrls, ...projectLinks]
}
