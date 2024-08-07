import TwoImageBox from '@/components/shared/TwoImageBox'

const Image = ({ data = {} }) => {
  const { photoOne, photoTwo, caption } = data

  if (!photoOne) return null
  return (
    
    <div className="divider">
          <TwoImageBox
            leftImage={photoOne}
            rightImage={photoTwo}
            caption={caption}
            classesWrapper="relative aspect-[16/9]"
          />
    </div>
  )
}

export default Image