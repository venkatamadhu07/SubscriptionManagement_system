import React, { createContext, useContext, useState, useEffect } from 'react'

// Create AuthContext
const AuthContext = createContext()

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  // Login function
  const login = async (email, password, role) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Dummy admin credentials
      const dummyAdmin = {
        email: 'admin@example.com',
        password: 'admin123',
        role: 'admin',
        name: 'Admin'
      }

      // If admin credentials, log in as admin
      if (email === dummyAdmin.email && password === dummyAdmin.password) {
        const adminData = {
          id: Date.now(),
          email: dummyAdmin.email,
          role: dummyAdmin.role,
          name: dummyAdmin.name,
          loginTime: new Date().toISOString(),
          avatar: `https://ui-avatars.com/api/?name=Admin&background=random`
        }
        setUser(adminData)
        localStorage.setItem('user', JSON.stringify(adminData))
        return { success: true, role: 'admin', user: adminData }
      }

      // Normal user login
      const userData = {
        id: Date.now(),
        email,
        role: role || 'user', // default to user
        name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
        loginTime: new Date().toISOString(),
        avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=random`,
        subscriptionCount: role === 'user' ? Math.floor(Math.random() * 8) + 2 : 0,
        monthlySpending: role === 'user' ? Math.floor(Math.random() * 200) + 50 : 0
      }

      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
      return { success: true, role: 'user', user: userData }
    } catch (error) {
      return { success: false, error: 'Login failed' }
    }
  }

  // Register function
  const register = async (name, email, password, role) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Mock user data
      const userData = {
        id: Date.now(),
        name,
        email,
        role,
        registrationTime: new Date().toISOString()
      }

      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
      return { success: true, user: userData }
    } catch (error) {
      return { success: false, error: 'Registration failed' }
    }
  }

  // Logout function
  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  // Check if user is admin
  const isAdmin = () => {
    return user && user.role === 'admin'
  }

  // Check if user is logged in
  const isAuthenticated = () => {
    return user !== null
  }

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAdmin,
    isAuthenticated
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
