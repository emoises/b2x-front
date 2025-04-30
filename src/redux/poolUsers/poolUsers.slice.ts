// src/redux/auth/auth.store.ts

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { poolUsersAPI } from '../../services/poolUsers.service'

export interface PoolUser {
  name: string
  status: 'active' | 'inactive'
  activityType: string
  daysOfActivity: string[]
  managerId: string
  managerEmail: string
  createdAt: string
}

export interface PoolUserState {
  users: PoolUser[] | null
  loading: boolean
  error: null | string
}


const initialState: PoolUserState = {
  users: null,
  loading: false,
  error: null,
}

export const getPoolUsers = createAsyncThunk(
  'pool-users/',
  async (params: { managerEmail: string }, { rejectWithValue }) => {
    try {
      console.log('Params', params)
      const response = await poolUsersAPI.get('/', { params });
      console.log(response.data)
      return response.data // Supondo que response.data contenha { id, email }
    } catch (error: any) {
      return rejectWithValue(error.response.data || 'Erro ao fazer login')
    }
  }
)

const poolUsersSlice = createSlice({
  name: 'pool-users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPoolUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getPoolUsers.fulfilled, (state, action: PayloadAction<PoolUser[]>) => {
        state.loading = false
        state.users = action.payload
      })
      .addCase(getPoolUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export default poolUsersSlice.reducer
