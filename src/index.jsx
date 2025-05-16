import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { CartProvider } from "./contexts/CartContext"
import { FavoritesProvider } from "./contexts/FavoritesContext"
import "./styles/index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <CartProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </CartProvider>
  </React.StrictMode>,
)
