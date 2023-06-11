import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { User } from 'types'

const initialState: User = {
  _id: '',
  email: '',
  active: false,
  semesters: [],
  username: '',
  image: '',
  activeSemester: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state = action.payload
      return state
    },
  },
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer
