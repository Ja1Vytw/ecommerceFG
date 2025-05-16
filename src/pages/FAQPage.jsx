"use client"

import { useState } from "react"
import "../styles/FAQPage.css"

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqItems = [
    {
      question: "Os produtos estão disponíveis para pronta entrega?",
      answer:
        "Sim! Todos os produtos disponíveis em nossa loja virtual estão em estoque e prontos para envio imediato ou retirada presencial.",
    },
    {
      question: "Posso retirar na loja física?",
      answer: 'Claro! É só selecionar a opção "Retirada na loja" no momento do checkout.',
    },
    {
      question: "A FG vende gesso online?",
      answer:
        "Não. Nosso e-commerce é exclusivo para ferramentas e acessórios. O gesso continua disponível apenas para venda presencial na loja física.",
    },
    {
      question: "Quais são as opções de entrega?",
      answer:
        "Você pode escolher entre entrega em domicílio (via transportadora ou motoboy, dependendo da região) ou retirada presencial na loja, conforme sua preferência.",
    },
    {
      question: "Qual o prazo de entrega?",
      answer:
        "O prazo de entrega varia de acordo com a sua localização. Para a região do ABC Paulista, geralmente entregamos em até 2 dias úteis. Para outras regiões de São Paulo, o prazo é de 3 a 5 dias úteis. Para demais localidades, o prazo pode variar de 5 a 10 dias úteis.",
    },
    {
      question: "Como faço para acompanhar meu pedido?",
      answer:
        "Após a confirmação do pagamento, você receberá um e-mail com o código de rastreamento. Você também pode acompanhar o status do seu pedido na área 'Meus Pedidos' do seu perfil em nosso site.",
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer:
        "Aceitamos cartões de crédito (parcelamento em até 12x), cartão de débito, boleto bancário, PIX e transferência bancária.",
    },
    {
      question: "Posso trocar ou devolver um produto?",
      answer:
        "Sim. De acordo com o Código de Defesa do Consumidor, você tem até 7 dias após o recebimento para solicitar a troca ou devolução do produto. O produto deve estar em sua embalagem original e sem sinais de uso.",
    },
    {
      question: "A FG Fábrica de Gesso oferece instalação dos produtos?",
      answer:
        "Sim, oferecemos serviço de instalação para alguns produtos. Entre em contato conosco para verificar disponibilidade e valores para a sua região.",
    },
    {
      question: "Vocês emitem nota fiscal?",
      answer: "Sim, emitimos nota fiscal para todas as vendas, seja para pessoa física ou jurídica.",
    },
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="faq-page">
      <div className="faq-header">
        <h1>Dúvidas Frequentes</h1>
        <p>
          Separamos aqui as perguntas mais comuns dos nossos clientes para facilitar sua experiência de compra na FG
          Fábrica de Gesso. Caso ainda tenha alguma dúvida, estamos prontos para te atender pelo WhatsApp!
        </p>
      </div>

      <div className="faq-container">
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleAccordion(index)}>
                <h3>{item.question}</h3>
                <span className="faq-icon">
                  <i className={`fa-solid ${activeIndex === index ? "fa-minus" : "fa-plus"}`}></i>
                </span>
              </div>
              <div className={`faq-answer ${activeIndex === index ? "show" : ""}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-contact">
          <h2>Ainda tem dúvidas?</h2>
          <p>Entre em contato conosco por um dos canais abaixo:</p>
          <div className="contact-options">
            <a
              href="https://wa.me/5511980355509"
              className="contact-option whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
            <a href="tel:+551128353637" className="contact-option phone">
              <i className="fa-solid fa-phone"></i>
              <span>Telefone</span>
            </a>
            <a href="/contato" className="contact-option email">
              <i className="fa-solid fa-envelope"></i>
              <span>Formulário de Contato</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQPage
