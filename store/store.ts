import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { authSliceReducer, userSliceReducer } from 'slices'

const reducer = combineReducers({
  authentication: authSliceReducer,
  user: userSliceReducer,
})

const store = configureStore({
  reducer,
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
