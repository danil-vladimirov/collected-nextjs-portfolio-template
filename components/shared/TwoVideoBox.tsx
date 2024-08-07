'use client'

import { useEffect, useState } from 'react'
import React from 'react'
import ReactPlayer from 'react-player'

interface VideoBoxProps {
  videoOneLink?: any
  videoTwoLink?: any
  caption?: string
}

export default function VideoBox({
  videoOneLink,
  videoTwoLink,
  caption,
}: VideoBoxProps) {
  const videoUrlOne = videoOneLink
  const videoUrlTwo = videoTwoLink
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="mt-5 md:mt-10">
      <div className="grid gap-5 grid-cols-1 xl:grid-cols-2">
        <div
          className={`w-full overflow-hidden rounded-[3px] bg-gray-50 aspect-video`}
        >
          {isClient ? (
            <ReactPlayer
              url={videoUrlOne}
              width="100%"
              height="100%"
              controls={true}
            />
          ) : (
            ''
          )}
        </div>
        <div
          className={`w-full overflow-hidden rounded-[3px] bg-gray-50 aspect-video`}
        >
          {isClient ? (
            <ReactPlayer
              url={videoUrlTwo}
              width="100%"
              height="100%"
              controls={true}
            />
          ) : (
            ''
          )}
        </div>
      </div>
      {caption && (
        <div className="mt-2 md:mt-4 text-lg md:text-2xl">{caption}</div>
      )}
    </div>
  )
}
