"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Usuários pré-definidos para teste
  const predefinedUsers = [
    {
      email: "admin@admin.com",
      password: "admin",
      name: "Administrador",
      role: "admin",
    },
    {
      email: "funci@funci.com",
      password: "funcionario",
      name: "Funcionário",
      role: "employee",
    },
    {
      email: "user@user.com",
      password: "user",
      name: "Usuário",
      role: "customer",
    },
  ]

  useEffect(() => {
    // Verificar se há um usuário logado no localStorage
    const savedUser = localStorage.getItem("currentUser")
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser))
      } catch (error) {
        console.error("Erro ao carregar usuário:", error)
      }
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    const user = predefinedUsers.find(
      (user) => user.email.toLowerCase() === email.toLowerCase() && user.password === password,
    )

    if (user) {
      const userInfo = { ...user }
      delete userInfo.password // Não armazenar a senha
      setCurrentUser(userInfo)
      localStorage.setItem("currentUser", JSON.stringify(userInfo))
      return { success: true, user: userInfo }
    }

    return { success: false, message: "Email ou senha incorretos" }
  }

  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem("currentUser")
  }

  const isAdmin = () => {
    return currentUser?.role === "admin"
  }

  const isEmployee = () => {
    return currentUser?.role === "employee" || currentUser?.role === "admin"
  }

  const isCustomer = () => {
    return currentUser?.role === "customer"
  }

  const value = {
    currentUser,
    login,
    logout,
    isAdmin,
    isEmployee,
    isCustomer,
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
