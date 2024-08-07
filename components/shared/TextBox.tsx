import { CustomPortableText } from '@/components/shared/CustomPortableText'

interface TextBoxProps {
  description?: any[]
}
export default function Header(props: TextBoxProps) {
  const { description } = props
  if (!description) {
    return null
  }
  return (
    <div className="my-10 md:my-28 px-8 md:px-28">
      {/* Description */}
      {description && (
        <div className="text-center text-xl md:text-4xl">
          <CustomPortableText value={description} />
        </div>
      )}
    </div>
  )
}
