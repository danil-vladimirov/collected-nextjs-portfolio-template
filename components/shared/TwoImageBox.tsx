import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/utils'

interface ImageBoxProps {
  leftImage?: { asset?: any; lqip?: any }
  rightImage?: { asset?: any; lqip?: any }
  alt?: string
  width?: number
  height?: number
  sizes?: string
  classesWrapper?: string
  caption?: string
  previewLeftImageUrl?: any
  previewRightImageUrl?: any
}

export default function ImageBox({
  leftImage,
  rightImage,
  alt = 'Project image',
  width = 3500,
  height = 2000,
  sizes = '(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw',
  classesWrapper,
  caption,
  previewLeftImageUrl = leftImage?.lqip,
  previewRightImageUrl = rightImage?.lqip,
}: ImageBoxProps) {
  const leftImageUrl =
    leftImage &&
    urlForImage(leftImage)?.height(height).width(width).fit('crop').url()

  const rightImageUrl =
    rightImage &&
    urlForImage(rightImage)?.height(height).width(width).fit('crop').url()

  return (
    <div className="mt-5 md:mt-10">
      <div className="grid gap-5 grid-cols-1 xl:grid-cols-2">
        <div
          className={`w-full overflow-hidden rounded-[3px] ${classesWrapper}`}
        >
          {leftImageUrl && (
            <Image
              className="absolute h-full w-full"
              alt={alt}
              style={{
                width: '100%',
                height: 'auto',
              }}
              width={500}
              height={300}
              sizes={sizes}
              src={leftImageUrl}
              placeholder="blur"
              blurDataURL={previewLeftImageUrl}
            />
          )}
        </div>
        <div
          className={`w-full overflow-hidden rounded-[3px] ${classesWrapper}`}
        >
          {rightImageUrl && (
            <Image
              className="absolute h-full w-full"
              alt={alt}
              style={{
                width: '100%',
                height: 'auto',
              }}
              width={500}
              height={300}
              sizes={sizes}
              src={rightImageUrl}
              placeholder="blur"
              blurDataURL={previewRightImageUrl}
            />
          )}
        </div>
      </div>
      {caption && (
        <div className="mt-2 md:mt-4 text-lg md:text-2xl">{caption}</div>
      )}
    </div>
  )
}
