"use client"

import { Link } from "react-router-dom"
import { useCart } from "../contexts/CartContext"
import "../styles/CartPage.css"

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, getCartTotal } = useCart()

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity)
    }
  }

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-icon">
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <h2>Seu carrinho está vazio</h2>
        <p>Adicione produtos ao seu carrinho para continuar.</p>
        <Link to="/" className="continue-shopping-button">
          <i className="fa-solid fa-arrow-left"></i> Continuar Comprando
        </Link>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h1>
        <i className="fa-solid fa-cart-shopping"></i> Meu Carrinho
      </h1>

      <div className="cart-container">
        <div className="cart-items">
          <div className="cart-header">
            <span className="product-col">Produto</span>
            <span className="price-col">Preço</span>
            <span className="quantity-col">Quantidade</span>
            <span className="subtotal-col">Subtotal</span>
            <span className="actions-col"></span>
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="product-col">
                <div className="product-image">
                  <img src={item.image || "/placeholder.png"} alt={item.name} />
                </div>
                <div className="product-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>

              <div className="price-col">
                <span>R$ {item.price.toFixed(2)}</span>
              </div>

              <div className="quantity-col">
                <div className="quantity-input-container">
                  <button
                    className="quantity-button"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, Number.parseInt(e.target.value))}
                    min="1"
                  />
                  <button className="quantity-button" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>

              <div className="subtotal-col">
                <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
              </div>

              <div className="actions-col">
                <button
                  className="remove-item-button"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remover item"
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Resumo do Pedido</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>R$ {getCartTotal().toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Frete</span>
            <span>Calculado no checkout</span>
          </div>

          <div className="coupon-input">
            <input type="text" placeholder="Código do cupom" />
            <button>
              <i className="fa-solid fa-tag"></i> Aplicar
            </button>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>R$ {getCartTotal().toFixed(2)}</span>
          </div>

          <button className="checkout-button">
            <i className="fa-solid fa-credit-card"></i> Finalizar Compra
          </button>

          <div className="cart-actions">
            <button className="clear-cart-button" onClick={clearCart}>
              <i className="fa-solid fa-trash-can"></i> Limpar Carrinho
            </button>
            <Link to="/" className="continue-shopping-link">
              <i className="fa-solid fa-arrow-left"></i> Continuar Comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
