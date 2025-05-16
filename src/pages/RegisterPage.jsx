"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/RegisterPage.css"

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    cpf: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui seria implementada a lógica de registro
    console.log("Register attempt:", formData)
  }

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-header">
          <h1>Criar uma conta</h1>
          <p>Preencha os campos abaixo para se cadastrar na FG Fábrica de Gesso</p>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">
                <i className="fa-solid fa-user"></i> Nome completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <i className="fa-solid fa-envelope"></i> E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu e-mail"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">
                <i className="fa-solid fa-lock"></i> Senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Sua senha"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">
                <i className="fa-solid fa-lock"></i> Confirmar senha
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirme sua senha"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">
                <i className="fa-solid fa-phone"></i> Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cpf">
                <i className="fa-solid fa-id-card"></i> CPF
              </label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                placeholder="000.000.000-00"
                required
              />
            </div>
          </div>

          <div className="terms-agreement">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              Concordo com os <Link to="/termos">Termos de Uso</Link> e{" "}
              <Link to="/privacidade">Política de Privacidade</Link>
            </label>
          </div>

          <button type="submit" className="register-button">
            <i className="fa-solid fa-user-plus"></i> Criar Conta
          </button>
        </form>

        <div className="login-section">
          <p>Já tem uma conta?</p>
          <Link to="/login" className="login-link">
            <i className="fa-solid fa-right-to-bracket"></i> Fazer Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
