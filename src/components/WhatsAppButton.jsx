import "../styles/WhatsAppButton.css"

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511980355509"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  )
}

export default WhatsAppButton
