import { LottieAnimationProps } from './types.d'
import Lottie from 'react-lottie'

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  disableLoop = false,
  animationData,
  style = {},
}) => {
  return (
    <Lottie
      style={{
        height: '100%',
        width: '100%',
        cursor: 'default',
        ...style,
      }}
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
