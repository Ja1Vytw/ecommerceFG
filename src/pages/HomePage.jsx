"use client"

import { useState, useEffect } from "react"
import HomeCarousel from "../components/HomeCarousel"
import CategorySection from "../components/CategorySection"
import "../styles/HomePage.css"

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulating API call to fetch products and categories
    const fetchData = async () => {
      try {
        // In a real app, this would be an API call
        setTimeout(() => {
          const mockCategories = [
            { id: 1, name: "Placas de Gesso", slug: "placas-de-gesso", icon: "fa-solid fa-square" },
            { id: 2, name: "Molduras", slug: "molduras", icon: "fa-solid fa-border-all" },
            { id: 3, name: "Sancas", slug: "sancas", icon: "fa-solid fa-archway" },
            { id: 4, name: "Revestimentos", slug: "revestimentos", icon: "fa-solid fa-grip" },
            { id: 5, name: "Ferramentas", slug: "ferramentas", icon: "fa-solid fa-screwdriver-wrench" },
            { id: 6, name: "Acessórios", slug: "acessorios", icon: "fa-solid fa-puzzle-piece" },
          ]

          const mockProducts = {
            featured: [
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
              },
            ],
            tools: [
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
              },
              {
                id: 13,
                name: 'Colher de Pedreiro 8"',
                description: "Colher de pedreiro para aplicação de massa",
                price: 35.9,
                image: "/placeholder.png?height=300&width=300",
                category: 5,
                rating: 4.7,
                reviews: 29,
                stock: 60,
              },
              {
                id: 14,
                name: "Nível de Alumínio 30cm",
                description: "Nível para medição precisa",
                price: 28.9,
                image: "/placeholder.png?height=300&width=300",
                category: 5,
                rating: 4.5,
                reviews: 22,
                stock: 45,
              },
            ],
            plates: [
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
              },
              {
                id: 15,
                name: "Placa de Gesso Acústica",
                description: "Placa com isolamento acústico, 60x60cm",
                price: 45.9,
                image: "/placeholder.png?height=300&width=300",
                category: 1,
                rating: 4.9,
                reviews: 18,
                stock: 40,
              },
              {
                id: 16,
                name: "Placa de Gesso Drywall",
                description: "Placa para divisórias e forros, 120x240cm",
                price: 89.9,
                image: "/placeholder.png?height=300&width=300",
                category: 1,
                rating: 4.7,
                reviews: 32,
                stock: 75,
              },
            ],
            onSale: [
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
              },
              {
                id: 17,
                name: "Revestimento 3D Tijolos",
                description: "Placa decorativa modelo tijolos, 50x50cm",
                price: 29.9,
                oldPrice: 39.9,
                image: "/placeholder.png?height=300&width=300",
                category: 4,
                rating: 4.6,
                reviews: 27,
                stock: 55,
              },
              {
                id: 18,
                name: "Kit Ferramentas Básicas",
                description: "Kit com 5 ferramentas essenciais",
                price: 99.9,
                oldPrice: 129.9,
                image: "/placeholder.png?height=300&width=300",
                category: 5,
                rating: 4.8,
                reviews: 36,
                stock: 25,
              },
            ],
          }

          setCategories(mockCategories)
          setFeaturedProducts(mockProducts)
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Error fetching data:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Carregando produtos...</p>
      </div>
    )
  }

  return (
    <div className="home-page">
      <HomeCarousel />

      <div className="home-content">
        <CategorySection
          title="Produtos em Destaque"
          products={featuredProducts.featured}
          viewAllLink="/produtos?destaque=true"
          icon="fa-solid fa-star"
        />

        <CategorySection
          title="Ferramentas Profissionais"
          products={featuredProducts.tools}
          viewAllLink="/produtos?categoria=5"
          icon="fa-solid fa-screwdriver-wrench"
        />

        <CategorySection
          title="Placas de Gesso"
          products={featuredProducts.plates}
          viewAllLink="/produtos?categoria=1"
          icon="fa-solid fa-square"
        />

        <CategorySection
          title="Ofertas Imperdíveis"
          products={featuredProducts.onSale}
          viewAllLink="/produtos?promocao=true"
          icon="fa-solid fa-tag"
        />
      </div>
    </div>
  )
}

export default HomePage
