import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

import { AboutPage } from '@/components/pages/about/AboutPage'
import { getAboutPage } from '@/sanity/loader/loadQuery'
const HomePagePreview = dynamic(
  () => import('@/components/pages/home/HomePagePreview'),
)

export default async function IndexRoute() {
  const initial = await getAboutPage()

  if (draftMode().isEnabled) {
    return <HomePagePreview initial={initial} />
  }

  if (!initial.data) {
    return redirect('/')
  }

  return <AboutPage data={initial.data} />
}
