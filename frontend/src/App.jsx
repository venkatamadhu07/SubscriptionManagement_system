import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider, useAuth } from "./context/AuthContext" // fixed path

// Import pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import UserDashboard from "./pages/UserDashboard"
import AdminDashboard from "./pages/AdminDashboard"
import Recommendations from "./pages/Recommendations"

// Import components
import Navbar from "./components/shared/Navbar"
import Sidebar from "./components/shared/Sidebar"

// Protected Route component
const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { isAuthenticated, isAdmin, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!isAuthenticated()) return <Navigate to="/login" replace />
  if (requireAdmin && !isAdmin()) return <Navigate to="/dashboard" replace />

  return children
}

// App Content
const AppContent = () => {
  const { isAuthenticated } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        {isAuthenticated() && <Sidebar />}
        <main className={`flex-1 ${isAuthenticated() ? "ml-64" : ""} transition-all duration-300`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute requireAdmin={true}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/recommendations"
              element={
                <ProtectedRoute>
                  <Recommendations />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

// Root App
const App = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
)

export default App
