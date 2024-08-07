import ImageBox from '@/components/shared/ImageBox'
import type { ShowcaseProject } from '@/types'

interface ProjectProps {
  project: ShowcaseProject
}

export function ProjectListItem(props: ProjectProps) {
  const { project } = props

  return (
    <div className={`flex flex-col gap-x-5`}>
      <div className="w-full">
        <ImageBox
          image={project.coverImage}
          alt={`Cover image from ${project.title}`}
          classesWrapper="relative aspect-[16/9]"
        />
      </div>
      <div className="flex">
        <TextBox project={project} />
      </div>
    </div>
  )
}

function TextBox({ project }: { project: ShowcaseProject }) {
  return (
    <div className="flex flex-wrap justify-between mt-2 mb-2 w-full text-lg md:text-2xl flex-strech">
      {/* Title */}
      <div className="flex">
        {project.title}
      </div>
      {/* Year */}
      <div className="flex">
        {project.year}
      </div>
    </div>
  )
}
