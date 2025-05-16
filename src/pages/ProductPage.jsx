"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { useCart } from "../contexts/CartContext"
import { useFavorites } from "../contexts/FavoritesContext"
import "../styles/ProductPage.css"

const ProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)
  const { addToCart } = useCart()
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()

  useEffect(() => {
    // Simulating API call to fetch product details
    const fetchProduct = async () => {
      try {
        // In a real app, this would be an API call
        setTimeout(() => {
          // Mock product data
          const mockProduct = {
            id: Number.parseInt(id),
            name: "Placa de Gesso Standard",
            description:
              "Placa de gesso para forro e parede, ideal para ambientes internos. Fabricada com material de alta qualidade, oferece excelente acabamento e durabilidade.",
            price: 25.9,
            image: "/placeholder.png?height=500&width=500",
            category: 1,
            details: ["Dimensões: 60x60cm", "Espessura: 12mm", "Cor: Branco", "Peso: 7kg", "Material: Gesso natural"],
            relatedProducts: [
              {
                id: 5,
                name: "Placa de Gesso Resistente à Umidade",
                description: "Placa de gesso para áreas úmidas, 60x60cm",
                price: 32.9,
                image: "/placeholder.png?height=300&width=300",
                category: 1,
              },
              {
                id: 9,
                name: "Placa de Gesso Acústica",
                description: "Placa de gesso com propriedades acústicas, 60x60cm",
                price: 45.9,
                image: "/placeholder.png?height=300&width=300",
                category: 1,
              },
            ],
          }

          setProduct(mockProduct)
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Error fetching product:", error)
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const handleQuantityChange = (e) => {
    const value = Number.parseInt(e.target.value)
    if (value > 0) {
      setQuantity(value)
    }
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity })
    }
  }

  const handleToggleFavorite = () => {
    if (product) {
      if (isFavorite(product.id)) {
        removeFromFavorites(product.id)
      } else {
        addToFavorites(product)
      }
    }
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Carregando produto...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="error-container">
        <h2>Produto não encontrado</h2>
        <p>O produto que você está procurando não existe ou foi removido.</p>
      </div>
    )
  }

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-image-container">
          <img src={product.image || "/placeholder.png"} alt={product.name} className="product-main-image" />
        </div>

        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-description">{product.description}</p>

          <div className="product-price-container">
            <span className="product-price">R$ {product.price.toFixed(2)}</span>
            {product.oldPrice && <span className="product-old-price">R$ {product.oldPrice.toFixed(2)}</span>}
          </div>

          <div className="product-actions">
            <div className="quantity-selector">
              <label htmlFor="quantity">Quantidade:</label>
              <div className="quantity-input-container">
                <button className="quantity-button" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                  <i className="fa-solid fa-minus"></i>
                </button>
                <input type="number" id="quantity" value={quantity} onChange={handleQuantityChange} min="1" />
                <button className="quantity-button" onClick={() => setQuantity(quantity + 1)}>
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>

            <div className="action-buttons">
              <button className="add-to-cart-button" onClick={handleAddToCart}>
                <i className="fa-solid fa-cart-plus"></i> Adicionar ao Carrinho
              </button>

              <button
                className={`favorite-button ${isFavorite(product.id) ? "favorited" : ""}`}
                onClick={handleToggleFavorite}
              >
                <i className={`fa-heart ${isFavorite(product.id) ? "fa-solid" : "fa-regular"}`}></i>
                {isFavorite(product.id) ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
              </button>
            </div>
          </div>

          <div className="product-specifications">
            <h3>Especificações</h3>
            <ul>
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <div className="related-products">
          <h2>Produtos Relacionados</h2>
          <div className="related-products-grid">
            {product.relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="related-product-card">
                <img src={relatedProduct.image || "/placeholder.png"} alt={relatedProduct.name} />
                <h3>{relatedProduct.name}</h3>
                <p>{relatedProduct.description}</p>
                <span className="related-product-price">R$ {relatedProduct.price.toFixed(2)}</span>
                <Link to={`/produto/${relatedProduct.id}`} className="view-product-button">
                  <i className="fa-solid fa-eye"></i> Ver Produto
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductPage
