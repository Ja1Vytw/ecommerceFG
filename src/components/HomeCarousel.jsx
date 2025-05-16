"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/HomeCarousel.css"

const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: "/src/assets/carousel-ferramentas.png",
      title: "Ferramentas Elétricas",
      description: "As melhores ferramentas para o melhor acabamento",
      link: "/produtos?categoria=ferramentas-eletricas",
      buttonText: "Comprar Agora",
    },
    {
      id: 2,
      image: "/placeholder.png?height=600&width=1200",
      title: "Placas de Gesso",
      description: "Qualidade e durabilidade para seu projeto",
      link: "/produtos?categoria=1",
      buttonText: "Ver Produtos",
    },
    {
      id: 3,
      image: "/placeholder.png?height=600&width=1200",
      title: "Molduras Decorativas",
      description: "Elegância e sofisticação para seu ambiente",
      link: "/produtos?categoria=2",
      buttonText: "Conheça Nossa Linha",
    },
    {
      id: 4,
      image: "/placeholder.png?height=600&width=1200",
      title: "Promoções Especiais",
      description: "Aproveite nossos descontos imperdíveis",
      link: "/produtos?promocao=true",
      buttonText: "Ver Ofertas",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <div className="carousel-container">
      <div className="carousel-slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})` }}
          >
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <Link to={slide.link} className="slide-button">
                {slide.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control prev" onClick={prevSlide} aria-label="Slide anterior">
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button className="carousel-control next" onClick={nextSlide} aria-label="Próximo slide">
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default HomeCarousel
