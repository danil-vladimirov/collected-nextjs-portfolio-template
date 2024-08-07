import { CustomPortableText } from '@/components/shared/CustomPortableText'

interface HeaderProps {
  description?: any
}
export function Header(props: HeaderProps) {
  const { description } = props
  if (!description) {
    return null
  }
  return (
    <div className="w-5/6 md:w-4/5">
      {description && (
        <div className="mt-4 text-3xl md:text-4.5xl">
          {description.displayText == true && (
            <CustomPortableText value={description.text} />
          )}
        </div>
      )}
    </div>
  )
}