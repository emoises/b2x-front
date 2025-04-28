// src/redux/auth/auth.store.ts

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authAPI } from '../services/auth.service'
import axios from 'axios'


interface User {
  id: string
  email: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}


const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
}

export const loginAsync = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await authAPI.post('/login', credentials)
      return response.data.user // Supondo que response.data contenha { id, email }
    } catch (error: any) {
      return rejectWithValue(error.response.data || 'Erro ao fazer login')
    }
  }
)

export const loadUserAsync = createAsyncThunk<User, void, { rejectValue: string }>(
  'auth/loadUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authAPI.get('/me')
      return response.data
    } catch (error: any) {
      console.error('Erro na chamada /me:', error.response?.data)
      return rejectWithValue(error.response?.data?.message || 'Erro desconhecido')
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null
      state.isAuthenticated = false
      state.loading = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginAsync.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false
        state.user = action.payload
        state.isAuthenticated = true
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      .addCase(loadUserAsync.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loadUserAsync.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false
        state.user = action.payload
        state.isAuthenticated = true
      })
      .addCase(loadUserAsync.rejected, (state, action) => {
        state.loading = false
        state.error = 'Erro ao carregar usuário'
      })
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
