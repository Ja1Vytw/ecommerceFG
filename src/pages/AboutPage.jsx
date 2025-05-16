import "../styles/AboutPage.css"

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>Sobre a FG Fábrica de Gesso</h1>
        <p>Conheça nossa história, valores e compromisso com a qualidade</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <div className="about-image">
            <img src="/placeholder.png?height=500&width=800" alt="Fachada da FG Fábrica de Gesso" />
          </div>
          <div className="about-text">
            <h2>Nossa História</h2>
            <p>
              Fundada em 1995 em Santo André, a FG Fábrica de Gesso nasceu do sonho de oferecer produtos de gesso de
              alta qualidade para o mercado da construção civil. O que começou como uma pequena fábrica familiar, hoje
              se tornou referência no ABC Paulista e região metropolitana de São Paulo.
            </p>
            <p>
              Ao longo desses mais de 25 anos, investimos constantemente em tecnologia, processos de fabricação e
              capacitação de nossa equipe. Nosso compromisso com a excelência nos permitiu crescer de forma sustentável,
              sempre mantendo o atendimento personalizado que nos diferencia no mercado.
            </p>
          </div>
        </div>

        <div className="values-section">
          <h2>Nossos Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fa-solid fa-medal"></i>
              </div>
              <h3>Qualidade</h3>
              <p>
                Comprometimento com a excelência em todos os nossos produtos e serviços, utilizando matérias-primas
                selecionadas e processos rigorosos de fabricação.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <h3>Confiança</h3>
              <p>
                Construímos relacionamentos duradouros baseados na transparência, honestidade e cumprimento de prazos e
                compromissos.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <h3>Inovação</h3>
              <p>
                Buscamos constantemente novas soluções e tecnologias para aprimorar nossos produtos e atender às
                necessidades em constante evolução do mercado.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fa-solid fa-leaf"></i>
              </div>
              <h3>Sustentabilidade</h3>
              <p>
                Compromisso com práticas ambientalmente responsáveis, minimizando o impacto de nossas operações e
                promovendo o uso consciente de recursos.
              </p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2>Nossa Equipe</h2>
          <p>
            Contamos com uma equipe de profissionais altamente qualificados e experientes, desde a produção até o
            atendimento ao cliente. Nossos colaboradores são treinados constantemente para oferecer o melhor serviço e
            orientação técnica para cada projeto.
          </p>
          <div className="team-image">
            <img src="/placeholder.png?height=400&width=800" alt="Equipe da FG Fábrica de Gesso" />
          </div>
        </div>

        <div className="facilities-section">
          <h2>Nossas Instalações</h2>
          <div className="facilities-grid">
            <div className="facility-card">
              <img src="/placeholder.png?height=300&width=400" alt="Fábrica FG Gesso" />
              <h3>Fábrica</h3>
              <p>
                Nossa unidade de produção conta com equipamentos modernos e processos otimizados para garantir produtos
                de alta qualidade.
              </p>
            </div>
            <div className="facility-card">
              <img src="/placeholder.png?height=300&width=400" alt="Showroom FG Gesso" />
              <h3>Showroom</h3>
              <p>
                Espaço dedicado para que nossos clientes possam conhecer de perto toda nossa linha de produtos e receber
                orientação especializada.
              </p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Venha nos Conhecer</h2>
          <p>
            Estamos localizados na Rua Cotia, 145 - Bom Pastor, Santo André - SP. Nossa equipe está pronta para atender
            você e oferecer as melhores soluções para seu projeto.
          </p>
          <div className="cta-buttons">
            <a href="/contato" className="primary-button">
              <i className="fa-solid fa-envelope"></i> Entre em Contato
            </a>
            <a
              href="https://maps.google.com/?q=Rua+Cotia,+145+-+Bom+Pastor,+Santo+André+-+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              <i className="fa-solid fa-map-location-dot"></i> Ver no Mapa
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
