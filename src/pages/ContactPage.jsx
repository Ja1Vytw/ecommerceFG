"use client"

import { useState } from "react"
import "../styles/ContactPage.css"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui seria implementada a lógica de envio do formulário
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false)
    }, 5000)
  }

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Entre em Contato</h1>
        <p>Estamos prontos para atender você e tirar todas as suas dúvidas</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="info-content">
              <h3>Endereço</h3>
              <p>Rua Cotia, 145 - Bom Pastor</p>
              <p>Santo André - SP - 09051-550</p>
              <a
                href="https://maps.google.com/?q=Rua+Cotia,+145+-+Bom+Pastor,+Santo+André+-+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="info-link"
              >
                <i className="fa-solid fa-map-location-dot"></i> Ver no Google Maps
              </a>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="info-content">
              <h3>Telefones</h3>
              <p>
                <a href="tel:+551128353637">(11) 2835-3637</a>
              </p>
              <p>
                <a href="tel:+551128667864">(11) 2866-7864</a>
              </p>
              <p>
                <a href="https://wa.me/5511980355509" target="_blank" rel="noopener noreferrer" className="info-link">
                  <i className="fa-brands fa-whatsapp"></i> (11) 9.8035-5509
                </a>
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="info-content">
              <h3>E-mail</h3>
              <p>
                <a href="mailto:contato@fgfabricadegesso.com.br">contato@fgfabricadegesso.com.br</a>
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <i className="fa-solid fa-clock"></i>
            </div>
            <div className="info-content">
              <h3>Horário de Funcionamento</h3>
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 13h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>

          <div className="social-media-section">
            <h3>Redes Sociais</h3>
            <div className="social-icons">
              <a
                href="https://facebook.com/fgfabricadegesso"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon facebook"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://instagram.com/fgfabricadegesso"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://wa.me/5511980355509"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon whatsapp"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="https://youtube.com/fgfabricadegesso"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon youtube"
                aria-label="YouTube"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Envie sua Mensagem</h2>
          <p>Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>

          {formSubmitted ? (
            <div className="form-success-message">
              <i className="fa-solid fa-circle-check"></i>
              <h3>Mensagem enviada com sucesso!</h3>
              <p>Agradecemos seu contato. Retornaremos em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">
                  <i className="fa-solid fa-user"></i> Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="fa-solid fa-envelope"></i> E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Seu e-mail"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="fa-solid fa-phone"></i> Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  <i className="fa-solid fa-tag"></i> Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Assunto da mensagem"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <i className="fa-solid fa-message"></i> Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Digite sua mensagem aqui..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                <i className="fa-solid fa-paper-plane"></i> Enviar Mensagem
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="map-section">
        <h2>Nossa Localização</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.3106445250313!2d-46.5384!3d-23.6543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42a2a7c6d877%3A0x83a0d0c5f5a7ce54!2sR.%20Cotia%2C%20145%20-%20Bom%20Pastor%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009051-550!5e0!3m2!1spt-BR!2sbr!4v1715869500000!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização FG Fábrica de Gesso"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
