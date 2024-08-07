'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { aboutPageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { AboutPayload } from '@/types'

import AboutPage from './AboutPage'

type Props = {
  initial: QueryResponseInitial<AboutPayload | null>
}

export default function AboutPagePreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<AboutPayload | null>(
    aboutPageQuery,
    {},
    { initial },
  )

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your About document to see the preview!
      </div>
    )
  }

  return <AboutPage data={data} encodeDataAttribute={encodeDataAttribute} />
}
