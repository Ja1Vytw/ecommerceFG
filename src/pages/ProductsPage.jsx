"use client"

import { useState, useEffect } from "react"
import ProductCard from "../components/ProductCard"
import "../styles/ProductsPage.css"

const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: [0, 1000],
    sortBy: "featured",
    searchQuery: "",
  })
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    // Simulating API call to fetch products and categories
    const fetchData = async () => {
      try {
        // In a real app, this would be an API call
        setTimeout(() => {
          const mockCategories = [
            { id: "all", name: "Todos os Produtos" },
            { id: 1, name: "Placas de Gesso", slug: "placas-de-gesso" },
            { id: 2, name: "Molduras", slug: "molduras" },
            { id: 3, name: "Sancas", slug: "sancas" },
            { id: 4, name: "Revestimentos", slug: "revestimentos" },
            { id: 5, name: "Ferramentas", slug: "ferramentas" },
            { id: 6, name: "Acessórios", slug: "acessorios" },
          ]

          const mockProducts = [
            {
              id: 1,
              name: "Placa de Gesso Standard",
              description: "Placa de gesso para forro e parede, 60x60cm",
              price: 25.9,
              image: "/placeholder.png?height=300&width=300",
              category: 1,
              rating: 4.5,
              reviews: 28,
              stock: 120,
              featured: true,
            },
            {
              id: 2,
              name: "Moldura Decorativa M01",
              description: "Moldura decorativa para teto, 2m de comprimento",
              price: 45.5,
              oldPrice: 55.9,
              image: "/placeholder.png?height=300&width=300",
              category: 2,
              rating: 4.8,
              reviews: 42,
              stock: 85,
              featured: true,
            },
            {
              id: 3,
              name: "Sanca de Gesso S03",
              description: "Sanca de gesso para iluminação indireta, 2m",
              price: 89.9,
              image: "/placeholder.png?height=300&width=300",
              category: 3,
              rating: 4.7,
              reviews: 36,
              stock: 50,
              featured: true,
            },
            {
              id: 4,
              name: "Revestimento 3D Ondas",
              description: "Placa de gesso 3D modelo ondas, 50x50cm",
              price: 35.9,
              image: "/placeholder.png?height=300&width=300",
              category: 4,
              rating: 4.6,
              reviews: 19,
              stock: 75,
              featured: false,
            },
            {
              id: 5,
              name: "Placa de Gesso Resistente à Umidade",
              description: "Placa de gesso para áreas úmidas, 60x60cm",
              price: 32.9,
              image: "/placeholder.png?height=300&width=300",
              category: 1,
              rating: 4.4,
              reviews: 15,
              stock: 90,
              featured: false,
            },
            {
              id: 6,
              name: "Moldura Clássica M05",
              description: "Moldura estilo clássico para teto, 2m",
              price: 65.9,
              oldPrice: 75.9,
              image: "/placeholder.png?height=300&width=300",
              category: 2,
              rating: 4.9,
              reviews: 31,
              stock: 40,
              featured: true,
            },
            {
              id: 7,
              name: "Sanca Moderna S07",
              description: "Sanca de gesso estilo moderno, 2m",
              price: 99.9,
              image: "/placeholder.png?height=300&width=300",
              category: 3,
              rating: 4.7,
              reviews: 24,
              stock: 35,
              featured: false,
            },
            {
              id: 8,
              name: "Revestimento 3D Quadrados",
              description: "Placa de gesso 3D modelo quadrados, 50x50cm",
              price: 39.9,
              image: "/placeholder.png?height=300&width=300",
              category: 4,
              rating: 4.5,
              reviews: 17,
              stock: 60,
              featured: false,
            },
            {
              id: 9,
              name: "Espátula Profissional 10cm",
              description: "Espátula de aço inox para aplicação de gesso",
              price: 29.9,
              image: "/placeholder.png?height=300&width=300",
              category: 5,
              rating: 4.8,
              reviews: 45,
              stock: 100,
              featured: true,
            },
            {
              id: 10,
              name: "Desempenadeira de Aço 30cm",
              description: "Desempenadeira para acabamento em gesso",
              price: 42.5,
              image: "/placeholder.png?height=300&width=300",
              category: 5,
              rating: 4.6,
              reviews: 38,
              stock: 75,
              featured: false,
            },
            {
              id: 11,
              name: "Parafusos para Drywall 100un",
              description: "Parafusos específicos para fixação de placas de gesso",
              price: 15.9,
              image: "/placeholder.png?height=300&width=300",
              category: 6,
              rating: 4.7,
              reviews: 52,
              stock: 200,
              featured: false,
            },
            {
              id: 12,
              name: "Fita para Juntas 50m",
              description: "Fita para tratamento de juntas em placas de gesso",
              price: 18.5,
              image: "/placeholder.png?height=300&width=300",
              category: 6,
              rating: 4.5,
              reviews: 29,
              stock: 150,
              featured: true,
            },
          ]

          setCategories(mockCategories)
          setProducts(mockProducts)
          setFilteredProducts(mockProducts)
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Error fetching data:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    // Apply filters whenever filters state changes
    if (products.length > 0) {
      let result = [...products]

      // Filter by category
      if (filters.category !== "all") {
        result = result.filter((product) => product.category === Number(filters.category))
      }

      // Filter by price range
      result = result.filter(
        (product) => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1],
      )

      // Filter by search query
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase()
        result = result.filter(
          (product) => product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query),
        )
      }

      // Sort products
      switch (filters.sortBy) {
        case "price-asc":
          result.sort((a, b) => a.price - b.price)
          break
        case "price-desc":
          result.sort((a, b) => b.price - a.price)
          break
        case "name-asc":
          result.sort((a, b) => a.name.localeCompare(b.name))
          break
        case "name-desc":
          result.sort((a, b) => b.name.localeCompare(a.name))
          break
        case "rating":
          result.sort((a, b) => b.rating - a.rating)
          break
        case "featured":
        default:
          result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
          break
      }

      setFilteredProducts(result)
    }
  }, [filters, products])

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target
    const index = name === "minPrice" ? 0 : 1
    const newRange = [...filters.priceRange]
    newRange[index] = Number(value)
    setFilters((prev) => ({
      ...prev,
      priceRange: newRange,
    }))
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    // Search is already handled by the useEffect
  }

  const toggleFilters = () => {
    setShowFilters(!showFilters)
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Carregando produtos...</p>
      </div>
    )
  }

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Produtos</h1>
        <p>Encontre os melhores produtos para seus projetos em gesso</p>

        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            name="searchQuery"
            value={filters.searchQuery}
            onChange={handleFilterChange}
            placeholder="Buscar produtos..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>

      <div className="products-container">
        <button className="filter-toggle" onClick={toggleFilters}>
          <i className="fa-solid fa-filter"></i> {showFilters ? "Ocultar Filtros" : "Mostrar Filtros"}
        </button>

        <div className={`filters-sidebar ${showFilters ? "show" : ""}`}>
          <div className="filter-section">
            <h3>Categorias</h3>
            <div className="filter-options">
              {categories.map((category) => (
                <div className="filter-option" key={category.id}>
                  <input
                    type="radio"
                    id={`category-${category.id}`}
                    name="category"
                    value={category.id}
                    checked={filters.category === category.id.toString()}
                    onChange={handleFilterChange}
                  />
                  <label htmlFor={`category-${category.id}`}>{category.name}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3>Faixa de Preço</h3>
            <div className="price-range-inputs">
              <div className="price-input">
                <label htmlFor="minPrice">Min:</label>
                <input
                  type="number"
                  id="minPrice"
                  name="minPrice"
                  min="0"
                  max={filters.priceRange[1]}
                  value={filters.priceRange[0]}
                  onChange={handlePriceRangeChange}
                />
              </div>
              <div className="price-input">
                <label htmlFor="maxPrice">Max:</label>
                <input
                  type="number"
                  id="maxPrice"
                  name="maxPrice"
                  min={filters.priceRange[0]}
                  value={filters.priceRange[1]}
                  onChange={handlePriceRangeChange}
                />
              </div>
            </div>
            <div className="price-range-slider">
              <input
                type="range"
                min="0"
                max="1000"
                value={filters.priceRange[0]}
                onChange={(e) => handlePriceRangeChange({ target: { name: "minPrice", value: e.target.value } })}
              />
              <input
                type="range"
                min="0"
                max="1000"
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceRangeChange({ target: { name: "maxPrice", value: e.target.value } })}
              />
            </div>
          </div>

          <div className="filter-section">
            <h3>Ordenar por</h3>
            <select name="sortBy" value={filters.sortBy} onChange={handleFilterChange} className="sort-select">
              <option value="featured">Destaque</option>
              <option value="price-asc">Menor Preço</option>
              <option value="price-desc">Maior Preço</option>
              <option value="name-asc">Nome (A-Z)</option>
              <option value="name-desc">Nome (Z-A)</option>
              <option value="rating">Avaliação</option>
            </select>
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <div className="no-products-found">
              <i className="fa-solid fa-face-frown"></i>
              <h3>Nenhum produto encontrado</h3>
              <p>Tente ajustar seus filtros ou buscar por outro termo.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
