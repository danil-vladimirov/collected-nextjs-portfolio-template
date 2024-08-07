/**
 * Sets up the Presentation Resolver API,
 * see https://www.sanity.io/docs/presentation-resolver-api for more information.
 */

import { defineDocuments, defineLocations } from 'sanity/presentation'

import { resolveHref } from '@/sanity/lib/utils'

export const mainDocuments = defineDocuments([
  {
    route: '/projects/:slug',
    filter: `_type == "project" && slug.current == $slug`,
  },
])

export const locations = {
  settings: defineLocations({
    message: 'This settings are used on all pages. When edited do not forget to publish your changes',
    tone: 'caution',
  }),
  home: defineLocations({
    message: 'These settings are used for your Home page. When edited do not forget to publish your changes',
    tone: 'positive',
  }),
  about: defineLocations({
    message: '(Optional page) This fields are used for the About page. After you published your changes add a link in your Menu links section at Settings tab',
    tone: 'positive',
  }),
  project: defineLocations({
    select: { title: 'title', slug: 'slug.current' },
    resolve: (doc) => ({
      message: 'This is your project page. After you published your project go to Home tab and add your project to Projects list',
      tone: 'positive',
      locations: [
        {
          title: doc?.title || 'Untitled',
          href: resolveHref('project', doc?.slug)!,
        },
      ],
    }),
  }),
}
