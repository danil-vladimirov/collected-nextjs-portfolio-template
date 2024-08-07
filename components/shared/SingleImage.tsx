import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/utils'

interface ImageBoxProps {
  image?: { asset?: any; lqip?: any }
  alt?: string
  width?: number
  height?: number
  size?: string
  classesWrapper?: string
  caption?: string
  previewImageUrl?: any
}

export default function ImageBox({
  image,
  alt = 'Cover image',
  width = 3500,
  height = 2000,
  size = '(min-width: 940px) 60vw, 100vw',
  classesWrapper,
  caption,
  previewImageUrl = image?.lqip,
}: ImageBoxProps) {
  const imageUrl = image && urlForImage(image)?.url()

  return (
    <div className="mt-5 md:mt-10">
      <div className={`w-full overflow-hidden rounded-[3px] ${classesWrapper}`}>
        {imageUrl && (
          <Image
            alt={alt}
            sizes={size}
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={width}
            height={height}
            src={imageUrl}
            placeholder="blur"
            blurDataURL={previewImageUrl}
          />
        )}
      </div>
      {caption && (
        <div className="mt-2 md:mt-4 text-lg md:text-2xl">{caption}</div>
      )}
    </div>
  )
}
