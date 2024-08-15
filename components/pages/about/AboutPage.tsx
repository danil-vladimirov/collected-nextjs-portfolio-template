import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import AboutImageBox from '@/components/shared/AboutImageBox'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import type { AboutPayload } from '@/types'

export interface AboutPageProps {
  data: AboutPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function AboutPage({ data }: AboutPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { title, overview, aboutImage, aboutLinks } = data ?? {}

  return (
    <div className="h-full mt-4 grid gap-5 grid-cols-1 xl:grid-cols-2">
      <div className="w-full">
        {/* Title */}
        <div>{title && title}</div>

        {overview && (
          <div className="mt-2 text-2xl md:text-3xl">
            <CustomPortableText value={overview} />
          </div>
        )}

        <div className="mt-10 flex flex-col">
          {/* Links */}
          {aboutLinks &&
            aboutLinks.map((aboutLink, key) => {
              return (
                <div key={key} className="flex flex-wrap">
                  <Link
                    target="_blank"
                    className={`flex flex-wrap text-xl text-secondary underline md:text-2xl`}
                    href={aboutLink.url!}
                  >
                    {aboutLink.title}
                  </Link>
                </div>
              )
            })}
        </div>
      </div>

      <div className="w-full">
        {/* About image */}
        {aboutImage && (
          <AboutImageBox
            image={aboutImage}
            alt={`About image`}
            classesWrapper="relative"
          />
        )}
      </div>
    </div>
  )
}

export default AboutPage
