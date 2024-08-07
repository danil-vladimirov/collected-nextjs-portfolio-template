import SingleVideo from '@/components/shared/SingleVideo'

const Video = ({ data = {} }) => {
  const { videoLink, caption } = data

  if (!videoLink) return null
  return (
    
    <div className="divider">
          <SingleVideo
            videoLink={videoLink}
            caption={caption}
          />
    </div>
  )
}

export default Video