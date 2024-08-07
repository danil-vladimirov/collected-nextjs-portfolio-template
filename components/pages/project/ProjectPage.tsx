import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { Module } from '@/components/modules'
import { MoreProjects } from '@/components/pages/project/MoreProjects'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import type { ProjectPayload } from '@/types'
import type { HomePagePayload } from '@/types'

export interface ProjectPageProps {
  data: ProjectPayload | null
  moreProjects: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function ProjectPage({
  data,
  moreProjects,
  encodeDataAttribute,
}: ProjectPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { year, overview, site, title, content, slug } = data ?? {}

  // Get a list of showcased projects
  const { showcaseProjects = [] } = moreProjects ?? {}

  // Get previous and next project
  const projects = showcaseProjects
  const currentProjectIndex = projects.findIndex(
    (project) => project.slug === slug,
  )
  const prevProject = projects[currentProjectIndex - 1] || null
  const nextProject = projects[currentProjectIndex + 1] || null

  return (
    <div>
      <div className="mb-10 md:mb-20 space-y-6">
        <div className="flex flex-wrap justify-between flex-col md:flex-row">
          <div className="w-full lg:w-2/4">
            {/* Title */}
            {title && <div className="text-2xl md:text-4xl">{title}</div>}
            {/* Year */}
            {year && <div className="md:mt-2 text-lg md:text-2xl">{year}</div>}
          </div>
          <div className="w-full lg:w-2/4">
            {/* Overview */}
            {overview && (
              <div className="mt-4 text-xl md:text-2xl">
                <CustomPortableText value={overview} />
              </div>
            )}
            {/* Site */}
            {site && (
              <div className="mt-3">
                {site && (
                  <Link
                    target="_blank"
                    className="text-xl break-words md:text-2xl underline"
                    href={site.url}
                  >
                    {site.urltitle}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>

        <div>
          {/* Display project content by type */}
          {content?.map((content, key) => (
            <Module key={key} content={content} />
          ))}
        </div>

        {/* Previous and next project links */}
        {projects && <MoreProjects previous={prevProject} next={nextProject} />}
      </div>
    </div>
  )
}

export default ProjectPage
