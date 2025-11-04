import { api } from './index'

interface LoginResponse {
  user_id: string
  email: string
  access_token: string
}

export const authApi = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>('/auth/login', { email, password })
    
    // Store token securely
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('access_token', response.access_token)
      sessionStorage.setItem('user', JSON.stringify({
        user_id: response.user_id,
        email: response.email
      }))
    }
    
    return response
  },

  logout: () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('access_token')
      sessionStorage.removeItem('user')
    }
  },

  getUser: () => {
    if (typeof window === 'undefined') return null
    const user = sessionStorage.getItem('user')
    return user ? JSON.parse(user) : null
  },

  isAuthenticated: () => {
    if (typeof window === 'undefined') return false
    return !!sessionStorage.getItem('access_token')
  }
}