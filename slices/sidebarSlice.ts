import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isDesktopSideBarOpen: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setIsSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isDesktopSideBarOpen = action.payload
      localStorage.setItem(
        'isDesktopSideBarOpen',
        JSON.stringify(action.payload)
      )
    },
  },
})

export const { setIsSidebarOpen } = sidebarSlice.actions

export default sidebarSlice.reducer
