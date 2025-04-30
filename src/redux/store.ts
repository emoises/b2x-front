// src/redux/store.ts

import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/auth.slice'
import poolUsersReducer from './poolUsers/poolUsers.slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    poolUsers: poolUsersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
