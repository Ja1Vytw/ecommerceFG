import { Link } from "react-router-dom"
import "../styles/Footer.css"
import StorefrontImage from "../assets/storefront.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contato</h3>
          <div className="store-info">
            <div className="storefront-image">
              <img src={StorefrontImage || "/placeholder.png"} alt="Fachada da FG Fábrica de Gesso" />
            </div>
            <div className="address-info">
              <p className="company-name">FG Fábrica de Gesso</p>
              <p>
                <i className="fa-solid fa-location-dot"></i> Rua Cotia, 145 - Bom Pastor
              </p>
              <p>Santo André - SP - 09051-550</p>
              <p>
                <a href="https://wa.me/5511980355509" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-whatsapp"></i> (11) 9.8035-5509
                </a>
              </p>
              <p>
                <i className="fa-solid fa-phone"></i> (11) 2835-3637
              </p>
              <p>
                <i className="fa-solid fa-phone"></i> (11) 2866-7864
              </p>
              <p>
                <a href="mailto:contato@fgfabricadegesso.com.br">
                  <i className="fa-solid fa-envelope"></i> contato@fgfabricadegesso.com.br
                </a>
              </p>
              <p>
                <a
                  href="https://maps.google.com/?q=Rua+Cotia,+145+-+Bom+Pastor,+Santo+André+-+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-map-location-dot"></i> Ver no Google Maps
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>Navegação</h3>
          <ul>
            <li>
              <Link to="/">
                <i className="fa-solid fa-house"></i> Início
              </Link>
            </li>
            <li>
              <Link to="/produtos">
                <i className="fa-solid fa-boxes-stacked"></i> Produtos
              </Link>
            </li>
            <li>
              <Link to="/sobre">
                <i className="fa-solid fa-building"></i> Sobre Nós
              </Link>
            </li>
            <li>
              <Link to="/contato">
                <i className="fa-solid fa-envelope"></i> Contato
              </Link>
            </li>
            <li>
              <Link to="/faq">
                <i className="fa-solid fa-circle-question"></i> FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Rede Social</h3>
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
          </div>
          <div className="whatsapp-info">
            <p>Tire suas dúvidas através do WhatsApp</p>
            <a href="https://wa.me/5511980355509" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp"></i> Fale Conosco
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FG Fábrica de Gesso - Todos os direitos reservados</p>
      </div>
    </footer>
  )
}

export default Footer
