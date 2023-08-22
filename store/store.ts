import { sidebarSliceReducer, authSliceReducer, slideOverReducer } from 'slices'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

const reducer = combineReducers({
  authentication: authSliceReducer,
  sidebar: sidebarSliceReducer,
  slideOver: slideOverReducer,
})

const store = configureStore({
  reducer,
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
