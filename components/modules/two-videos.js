import TwoVideoBox from '@/components/shared/TwoVideoBox'

const TwoVideos = ({ data = {} }) => {
  const { videoOneLink, videoTwoLink, caption } = data

  if (!videoOneLink) return null
  return (
    
    <div className="divider">
          <TwoVideoBox
            videoOneLink={videoOneLink}
            videoTwoLink={videoTwoLink}
            caption={caption}
          />
    </div>
  )
}

export default TwoVideos