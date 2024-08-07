import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/utils'

interface ImageBoxProps {
  image?: { asset?: any; lqip?: any }
  alt?: string
  width?: number
  height?: number
  size?: string
  classesWrapper?: string
  previewImageUrl?: any
}

export default function ImageBox({
  image,
  alt = 'About image',
  width = 3500,
  height = 2000,
  size = '(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw',
  classesWrapper,
  previewImageUrl = image?.lqip,
}: ImageBoxProps) {
  const imageUrl = image && urlForImage(image)?.url()

  return (
    <div className={`w-full overflow-hidden rounded-[3px] ${classesWrapper}`}>
      {imageUrl && (
        <Image
          alt={alt}
          width={width}
          height={height}
          style={{
            width: '100%',
            height: 'auto',
          }}
          sizes={size}
          src={imageUrl}
          placeholder="blur"
          blurDataURL={previewImageUrl}
        />
      )}
    </div>
  )
}
