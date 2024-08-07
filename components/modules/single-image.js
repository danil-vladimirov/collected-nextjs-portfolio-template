import SingleImage from '@/components/shared/SingleImage'

const Image = ({ data = {} }) => {
  const { photo, caption } = data

  if (!photo) return null
  return (
    
    <div className="divider">
          <SingleImage
            image={photo}
            caption={caption}
            classesWrapper="relative"
          />
    </div>
  )
}

export default Image