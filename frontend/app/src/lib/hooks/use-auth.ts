'use client'
import { useState, useEffect } from 'react'
import { authApi } from '../api/auth'

interface User {
  user_id: string
  email: string
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const storedUser = authApi.getUser()
    if (storedUser) {
      setUser(storedUser)
    }
  }, [])

  const login = async (email: string, password: string) => {
    setLoading(true)
    try {
      const response = await authApi.login(email, password)
      setUser({ user_id: response.user_id, email: response.email })
      return response
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    authApi.logout()
    setUser(null)
  }

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: authApi.isAuthenticated()
  }
}