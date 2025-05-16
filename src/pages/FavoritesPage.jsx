"use client"

import { Link } from "react-router-dom"
import { useFavorites } from "../contexts/FavoritesContext"
import { useCart } from "../contexts/CartContext"
import "../styles/FavoritesPage.css"

const FavoritesPage = () => {
  const { favorites, removeFromFavorites, clearFavorites } = useFavorites()
  const { addToCart } = useCart()

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 })
  }

  if (favorites.length === 0) {
    return (
      <div className="empty-favorites">
        <div className="empty-favorites-icon">
          <i className="fa-regular fa-heart"></i>
        </div>
        <h2>Sua lista de favoritos está vazia</h2>
        <p>Adicione produtos aos seus favoritos para encontrá-los facilmente depois.</p>
        <Link to="/" className="continue-shopping-button">
          <i className="fa-solid fa-arrow-left"></i> Explorar Produtos
        </Link>
      </div>
    )
  }

  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <h1>
          <i className="fa-solid fa-heart"></i> Meus Favoritos
        </h1>
        <button className="clear-favorites-button" onClick={clearFavorites}>
          <i className="fa-solid fa-trash-can"></i> Limpar Favoritos
        </button>
      </div>

      <div className="favorites-grid">
        {favorites.map((product) => (
          <div key={product.id} className="favorite-card">
            <button
              className="remove-favorite-button"
              onClick={() => removeFromFavorites(product.id)}
              aria-label="Remover dos favoritos"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <Link to={`/produto/${product.id}`} className="favorite-link">
              <div className="favorite-image">
                <img src={product.image || "/placeholder.png"} alt={product.name} />
              </div>
              <div className="favorite-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span className="favorite-price">R$ {product.price.toFixed(2)}</span>
              </div>
            </Link>

            <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
              <i className="fa-solid fa-cart-plus"></i> Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FavoritesPage
