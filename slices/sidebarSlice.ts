import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isDesktopSideBarOpen: '',
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setIsSidebarOpen: (state, action: PayloadAction<string>) => {
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
