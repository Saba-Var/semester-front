import { useTranslation } from 'next-i18next'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

const useSlideOver = () => {
  const { t } = useTranslation()
  const { isDesktopSideBarOpen } = useSelector(
    (state: RootState) => state.sidebar
  )

  return { t, isDesktopSideBarOpen }
}

export default useSlideOver
