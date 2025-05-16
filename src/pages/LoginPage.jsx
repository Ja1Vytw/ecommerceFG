"use client"

import { useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import "../styles/LoginPage.css"

const LoginPage = () => {
  const [isEmployeeLogin, setIsEmployeeLogin] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // Get the redirect path from location state or default to home
  const from = location.state?.from?.pathname || "/"

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    const result = login(email, password)

    if (result.success) {
      // Redirect based on user role
      if (result.user.role === "admin") {
        navigate("/admin")
      } else if (result.user.role === "employee") {
        navigate("/funcionario")
      } else {
        // For regular users, redirect to the page they were trying to access or home
        navigate(from)
      }
    } else {
      setError(result.message || "Falha no login. Verifique suas credenciais.")
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-tabs">
          <button
            className={`tab-button ${!isEmployeeLogin ? "active" : ""}`}
            onClick={() => setIsEmployeeLogin(false)}
          >
            <i className="fa-solid fa-user"></i> Cliente
          </button>
          <button className={`tab-button ${isEmployeeLogin ? "active" : ""}`} onClick={() => setIsEmployeeLogin(true)}>
            <i className="fa-solid fa-id-card"></i> Funcionário
          </button>
        </div>

        <div className="login-header">
          <h1>{isEmployeeLogin ? "Área do Funcionário" : "Entrar na sua conta"}</h1>
          <p>
            {isEmployeeLogin
              ? "Acesse o sistema interno da FG Fábrica de Gesso"
              : "Faça login para acompanhar seus pedidos e favoritos"}
          </p>
        </div>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">
              <i className="fa-solid fa-envelope"></i> E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu e-mail"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <i className="fa-solid fa-lock"></i> Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha"
              required
            />
          </div>

          {isEmployeeLogin && (
            <div className="employee-notice">
              <i className="fa-solid fa-circle-info"></i>
              <p>
                Esta área é exclusiva para funcionários da FG Fábrica de Gesso. Se você é cliente, utilize a aba
                "Cliente".
              </p>
            </div>
          )}

          <div className="test-credentials">
            <h3>Credenciais para teste:</h3>
            <p>
              <strong>Admin:</strong> admin@admin.com / senha
            </p>
            <p>
              <strong>Funcionário:</strong> funci@funci.com / senha
            </p>
            <p>
              <strong>Cliente:</strong> user@user.com / senha
            </p>
          </div>

          <div className="form-actions">
            <button type="submit" className="login-button">
              <i className="fa-solid fa-right-to-bracket"></i> {isEmployeeLogin ? "Acessar Sistema" : "Entrar"}
            </button>
            {!isEmployeeLogin && (
              <Link to="/forgot-password" className="forgot-password-link">
                Esqueceu sua senha?
              </Link>
            )}
          </div>
        </form>

        {!isEmployeeLogin && (
          <div className="register-section">
            <p>Ainda não tem uma conta?</p>
            <Link to="/registro" className="register-button">
              <i className="fa-solid fa-user-plus"></i> Criar Conta
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default LoginPage
