"use client"

import { Link } from "react-router-dom"
import { useCart } from "../contexts/CartContext"
import { useFavorites } from "../contexts/FavoritesContext"
import "../styles/ProductCard.css"

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  const handleToggleFavorite = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (isFavorite(product.id)) {
      removeFromFavorites(product.id)
    } else {
      addToFavorites(product)
    }
  }

  const favoriteClass = isFavorite(product.id) ? "favorited" : ""

  // Generate star rating
  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<i key={i} className="fa-solid fa-star"></i>)
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<i key={i} className="fa-solid fa-star-half-stroke"></i>)
      } else {
        stars.push(<i key={i} className="fa-regular fa-star"></i>)
      }
    }

    return stars
  }

  return (
    <div className="product-card">
      <Link to={`/produto/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.image || "/placeholder.png"} alt={product.name} />
          <button
            className={`favorite-button ${favoriteClass}`}
            onClick={handleToggleFavorite}
            aria-label={isFavorite(product.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          >
            <i className={`fa-heart ${isFavorite(product.id) ? "fa-solid" : "fa-regular"}`}></i>
          </button>
          {product.oldPrice && (
            <div className="discount-badge">
              {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
            </div>
          )}
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>

          <div className="product-rating">
            <div className="stars">{renderStars(product.rating || 4.5)}</div>
            <span className="reviews-count">({product.reviews || 0})</span>
          </div>

          <div className="product-price">
            {product.oldPrice && <span className="old-price">R$ {product.oldPrice.toFixed(2)}</span>}
            <span className="current-price">R$ {product.price.toFixed(2)}</span>
          </div>

          <div className="product-stock">
            <i className="fa-solid fa-box"></i>{" "}
            {product.stock > 10 ? "Em estoque" : `Apenas ${product.stock || 0} restantes`}
          </div>
        </div>
      </Link>
      <div className="card-footer">
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          <i className="fa-solid fa-cart-plus"></i> Adicionar ao Carrinho
        </button>
      </div>
    </div>
  )
}

export default ProductCard
