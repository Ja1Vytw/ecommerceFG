"use client"

import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import "../../styles/employee/EmployeeDashboard.css"

const EmployeeDashboard = () => {
  const { currentUser } = useAuth()

  return (
    <div className="employee-dashboard">
      <div className="employee-header">
        <h1>Painel do Funcionário</h1>
        <p>Bem-vindo, {currentUser.name}!</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fa-solid fa-box"></i>
          </div>
          <div className="stat-content">
            <h3>Produtos</h3>
            <p className="stat-value">124</p>
            <p className="stat-label">Total de produtos</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fa-solid fa-shopping-cart"></i>
          </div>
          <div className="stat-content">
            <h3>Pedidos</h3>
            <p className="stat-value">37</p>
            <p className="stat-label">Pedidos pendentes</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fa-solid fa-tag"></i>
          </div>
          <div className="stat-content">
            <h3>Promoções</h3>
            <p className="stat-value">12</p>
            <p className="stat-label">Promoções ativas</p>
          </div>
        </div>
      </div>

      <div className="employee-actions">
        <Link to="/funcionario/produtos" className="employee-action-card">
          <div className="action-icon">
            <i className="fa-solid fa-boxes-stacked"></i>
          </div>
          <div className="action-content">
            <h3>Gerenciar Produtos</h3>
            <p>Adicionar, editar ou remover produtos do catálogo</p>
          </div>
        </Link>

        <Link to="/funcionario/promocoes" className="employee-action-card">
          <div className="action-icon">
            <i className="fa-solid fa-percent"></i>
          </div>
          <div className="action-content">
            <h3>Gerenciar Promoções</h3>
            <p>Criar e gerenciar promoções e cupons de desconto</p>
          </div>
        </Link>

        <Link to="/funcionario/pedidos" className="employee-action-card">
          <div className="action-icon">
            <i className="fa-solid fa-clipboard-list"></i>
          </div>
          <div className="action-content">
            <h3>Gerenciar Pedidos</h3>
            <p>Visualizar e atualizar status de pedidos</p>
          </div>
        </Link>
      </div>

      <div className="recent-activity">
        <h2>Atividade Recente</h2>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="activity-content">
              <p className="activity-text">Novo pedido #1234 realizado</p>
              <p className="activity-time">Há 5 minutos</p>
            </div>
          </div>

          <div className="activity-item">
            <div className="activity-icon">
              <i className="fa-solid fa-box"></i>
            </div>
            <div className="activity-content">
              <p className="activity-text">Produto "Furadeira Elétrica" atualizado</p>
              <p className="activity-time">Há 2 horas</p>
            </div>
          </div>

          <div className="activity-item">
            <div className="activity-icon">
              <i className="fa-solid fa-tag"></i>
            </div>
            <div className="activity-content">
              <p className="activity-text">Nova promoção "Ferramentas Elétricas" criada</p>
              <p className="activity-time">Há 1 dia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard
