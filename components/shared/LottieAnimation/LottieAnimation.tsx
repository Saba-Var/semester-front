import { LottieAnimationProps } from './types.d'
import Lottie from 'react-lottie'

const LottieAnimation: React.FC<LottieAnimationProps> = (props) => {
  const { animationData, styles, disableLoop } = props

  return (
    <Lottie
      style={{ height: '100%', width: '100%', cursor: 'default', ...styles }}
      isClickToPauseDisabled
      options={{
        loop: disableLoop ? false : true,
        autoplay: true,
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }}
    />
  )
}

export default LottieAnimation
