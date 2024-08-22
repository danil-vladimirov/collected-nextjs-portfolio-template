import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { HomePage } from '@/components/pages/home/HomePage'
import { studioUrl } from '@/sanity/lib/api'
import { loadHomePage } from '@/sanity/loader/loadQuery'
const HomePagePreview = dynamic(
  () => import('@/components/pages/home/HomePagePreview'),
)

export default async function IndexRoute() {
  const initial = await loadHomePage()

  if (draftMode().isEnabled) {
    return <HomePagePreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className="text-center text-2xl">
        Congrats! You created your website, now you can go to your Studio and{' '}
        <Link href={`${studioUrl}/structure/home`} className="underline">
          start editing your homepage
        </Link>
        !
      </div>
    )
  }

  return <HomePage data={initial.data} />
}
