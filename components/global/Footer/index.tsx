import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import {
  getHomePageTitle,
  loadHomePage,
  loadSettings,
} from '@/sanity/loader/loadQuery'

import FooterLayout from './FooterLayout'
const FooterPreview = dynamic(() => import('./FooterPreview'))

export async function Footer() {
  const initial = await loadSettings()
  const [{ data: title }, { data: homePage }] = await Promise.all([
    getHomePageTitle(),
    loadHomePage(),
  ])

  if (draftMode().isEnabled) {
    return <FooterPreview initial={initial} />
  }

  return <FooterLayout data={initial.data} title={title} homepage={homePage} />
}
