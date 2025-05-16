"use client"

import { createContext, useContext, useState, useEffect } from "react"

const FavoritesContext = createContext()

export const useFavorites = () => useContext(FavoritesContext)

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites")
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites))
      } catch (error) {
        console.error("Error parsing favorites from localStorage:", error)
      }
    }
  }, [])

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => {
      // Check if product is already in favorites
      if (prevFavorites.some((item) => item.id === product.id)) {
        return prevFavorites
      }
      return [...prevFavorites, product]
    })
  }

  const removeFromFavorites = (productId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== productId))
  }

  const clearFavorites = () => {
    setFavorites([])
  }

  const isFavorite = (productId) => {
    return favorites.some((item) => item.id === productId)
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        clearFavorites,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}
