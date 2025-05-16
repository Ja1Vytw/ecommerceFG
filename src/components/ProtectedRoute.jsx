"use client"

import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const ProtectedRoute = ({ children, requiredRole }) => {
  const { currentUser, isAdmin, isEmployee } = useAuth()

  if (!currentUser) {
    // Usuário não está logado
    return <Navigate to="/login" replace />
  }

  if (requiredRole === "admin" && !isAdmin()) {
    // Rota requer admin, mas usuário não é admin
    return <Navigate to="/" replace />
  }

  if (requiredRole === "employee" && !isEmployee()) {
    // Rota requer funcionário, mas usuário não é funcionário nem admin
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute
