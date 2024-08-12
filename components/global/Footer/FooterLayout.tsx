import type { HomePagePayload, SettingsPayload } from '@/types'

interface FooterProps {
  data: SettingsPayload
  title: string | null
  homepage: HomePagePayload | null
}
export default function Footer(props: FooterProps) {
  const {} = props ?? {}
  const title = props.title
  const lastUpdated = props.homepage?._updatedAt ?? ''
  const displayLastUpdate = props.data?.displayLastUpdated
  return (
    <footer className="bottom-0 grid grid-cols-1 md:grid-cols-3 items-center mt-12 gap-3 md:gap-x-5 px-4 md:px-5 py-2 md:py-5 lg:px-5">
      <div className="text-xl text-center md:text-left md:text-2xl">
        {title && (
          <div>
            © {title} {new Date().getFullYear()}
          </div>
        )}
      </div>
      {displayLastUpdate == true ? (
        <div className="text-sm text-center md:text-sm">
          <div>Last updated:</div>
          {new Date(lastUpdated).toLocaleString('en-GB', {
            dateStyle: 'long',
            timeStyle: 'short',
          })}
        </div>
      ) : null}
    </footer>
  )
}
