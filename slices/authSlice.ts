import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { AuthState } from 'types'

const initialState: AuthState = {
  accessToken: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    },
  },
})

export const { setAccessToken } = authSlice.actions

export default authSlice.reducer
