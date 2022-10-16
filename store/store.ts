import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { authSliceReducer } from 'slices'

const reducer = combineReducers({
  authentication: authSliceReducer,
})

const store = configureStore({
  reducer,
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
