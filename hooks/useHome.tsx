import { useState } from 'react'

const useHome = () => {
  const [blurContent, setBlurContent] = useState(false)

  return { blurContent, setBlurContent }
}

export default useHome
