import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  sidebarSliceReducer,
  authSliceReducer,
  userSliceReducer,
  slideOverReducer,
} from 'slices'

const reducer = combineReducers({
  authentication: authSliceReducer,
  sidebar: sidebarSliceReducer,
  slideOver: slideOverReducer,
  user: userSliceReducer,
})

const store = configureStore({
  reducer,
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
