"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useCart } from "../contexts/CartContext"
import { useFavorites } from "../contexts/FavoritesContext"
import { useAuth } from "../contexts/AuthContext"
import "../styles/Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false)
  const { cartItems } = useCart()
  const { favorites } = useFavorites()
  const { currentUser, logout, isAdmin, isEmployee } = useAuth()
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen)
  }

  const toggleCategoryMenu = () => {
    setIsCategoryMenuOpen(!isCategoryMenuOpen)
  }

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  const categories = [
    { id: "brocas-discos-lixas", name: "Brocas, Discos e Lixas", path: "/produtos?categoria=brocas-discos-lixas" },
    { id: "ferramentas-eletricas", name: "Ferramentas Elétricas", path: "/produtos?categoria=ferramentas-eletricas" },
    { id: "ferramentas-manuais", name: "Ferramentas Manuais", path: "/produtos?categoria=ferramentas-manuais" },
    { id: "todas-ferramentas", name: "Todas Ferramentas", path: "/produtos" },
    { id: "trenas-niveis", name: "Trenas, Níveis a Laser e Mais", path: "/produtos?categoria=trenas-niveis" },
    { id: "promocoes", name: "Últimas Ofertas: Promoções", path: "/produtos?promocao=true" },
  ]

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <img src="/src/assets/logo.png" alt="FG Fábrica de Gesso" className="logo-image" />
          </Link>
        </div>

        <div className="search-container">
          <form className="search-form">
            <input type="text" placeholder="O que você procura?" className="search-input" />
            <button type="submit" className="search-button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>

        <div className="mobile-menu-button" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li className="category-menu-container">
              <button className="category-menu-button" onClick={toggleCategoryMenu}>
                <i className="fa-solid fa-list"></i> Categorias
                <i className={`fa-solid fa-chevron-down ${isCategoryMenuOpen ? "rotate" : ""}`}></i>
              </button>
              {isCategoryMenuOpen && (
                <div className="category-dropdown">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={category.path}
                      className="category-item"
                      onClick={() => {
                        setIsCategoryMenuOpen(false)
                        setIsMenuOpen(false)
                      }}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
            <li>
              <Link to="/sobre" onClick={() => setIsMenuOpen(false)}>
                <i className="fa-solid fa-building"></i> Sobre Nós
              </Link>
            </li>
            <li>
              <Link to="/contato" onClick={() => setIsMenuOpen(false)}>
                <i className="fa-solid fa-envelope"></i> Contato
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          {currentUser ? (
            <div className="user-menu-container">
              <button className="user-button" onClick={toggleUserMenu}>
                <span className="user-name">{currentUser.name}</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              {isUserMenuOpen && (
                <div className="user-dropdown">
                  {isAdmin() && (
                    <Link to="/admin" className="dropdown-item" onClick={() => setIsUserMenuOpen(false)}>
                      <i className="fa-solid fa-gauge-high"></i> Painel Admin
                    </Link>
                  )}
                  {isEmployee() && !isAdmin() && (
                    <Link to="/funcionario" className="dropdown-item" onClick={() => setIsUserMenuOpen(false)}>
                      <i className="fa-solid fa-gauge-high"></i> Painel Funcionário
                    </Link>
                  )}
                  <Link to="/minha-conta" className="dropdown-item" onClick={() => setIsUserMenuOpen(false)}>
                    <i className="fa-solid fa-user"></i> Minha Conta
                  </Link>
                  <Link to="/meus-pedidos" className="dropdown-item" onClick={() => setIsUserMenuOpen(false)}>
                    <i className="fa-solid fa-box"></i> Meus Pedidos
                  </Link>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item logout-button" onClick={handleLogout}>
                    <i className="fa-solid fa-sign-out-alt"></i> Sair
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="icon-button login-button">
              <i className="fa-solid fa-user"></i>
            </Link>
          )}
          <Link to="/favoritos" className="icon-button favorites-button">
            <i className="fa-heart fa-regular"></i>
            {favorites.length > 0 && <span className="badge">{favorites.length}</span>}
          </Link>
          <Link to="/carrinho" className="icon-button cart-button">
            <i className="fa-solid fa-cart-shopping"></i>
            {cartItems.length > 0 && <span className="badge">{cartItems.length}</span>}
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
