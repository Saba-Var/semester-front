import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSlideOverOpen: false,
  identifier: '',
}

export const slideOverSlice = createSlice({
  name: 'slideOver',
  initialState,
  reducers: {
    setIsSlideOverOpen: (
      state,
      action: PayloadAction<{ isSlideOverOpen: boolean; identifier: string }>
    ) => {
      state = action.payload
    },
  },
})

export const { setIsSlideOverOpen } = slideOverSlice.actions

export default slideOverSlice.reducer
