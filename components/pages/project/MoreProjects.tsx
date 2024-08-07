import Link from 'next/link'

import ImageBox from '@/components/shared/ImageBox'
import { resolveHref } from '@/sanity/lib/utils'
import type { ShowcaseProject } from '@/types'

interface ProjectProps {
  previous: ShowcaseProject
  next: ShowcaseProject
}

export function MoreProjects(props: ProjectProps) {
  const { previous, next } = props

  return (
    <div className="flex justify-between gap-x-5 pt-8 md:pt-20">
      {/* Previous project */}
      <div className="w-full">
        {previous && (
          <Link href={resolveHref(previous?._type, previous?.slug) ?? {}}>
            <div className={`flex flex-col gap-x-5`}>
              <div className="flex">
                <div className="flex flex-wrap justify-between mt-2 mb-2 w-full text-sm md:text-2xl flex-strech">
                  {/* Title */}
                  <div className="flex">← {previous.title}</div>
                </div>
              </div>
              <div className="w-3/4 md:w-2/4">
                <ImageBox
                  image={previous.coverImage}
                  alt={`Cover image from ${previous.title}`}
                  classesWrapper="relative aspect-[16/9]"
                />
              </div>
            </div>
          </Link>
        )}
      </div>

      {/* Next project */}
      <div className="w-full">
        {next && (
          <Link href={resolveHref(next?._type, next?.slug) ?? {}}>
            <div className={`flex flex-col gap-x-5 items-end`}>
              <div className="flex">
                <div className="flex flex-wrap justify-between mt-2 mb-2 w-full text-sm md:text-2xl flex-strech">
                  {/* Title */}
                  <div className="flex">{next.title} →</div>
                </div>
              </div>
              <div className="w-3/4 md:w-2/4">
                <ImageBox
                  image={next.coverImage}
                  alt={`Cover image from ${next.title}`}
                  classesWrapper="relative aspect-[16/9]"
                />
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}
