import React from 'react'

const useMedia = (screen) => {
  const [media, setMedia] = React.useState(false)

  React.useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth < screen) {
      setMedia(true)
    } else {
      setMedia(false)
    }
  }, [media, screen])

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      console.log('mudou')
    })
  }, [])

  return { media }
}

export default useMedia
