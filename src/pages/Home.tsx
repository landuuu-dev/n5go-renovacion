import { Link } from "react-router-dom";
import "../estilos/Home.css";
// Importamos el nuevo SVG
import iconoCorreo from "../assets/correo.svg";
import soporteComputacional from "../assets/mundo.svg";
import dataCenter from "../assets/datacenter.svg";
import vps from "../assets/laptop.svg";
import solucionesInformaticas from "../assets/engranaje.svg";
import agenteIa from "../assets/agenteIA.svg";
import compa from "../assets/compañerismo.svg";
import configuracion from "../assets/configuracion-engranaje-solo.svg";
import medalla from "../assets/medalla.svg";
import backgroundCTA from "../assets/background-contactanos.png";
import videoFondo from "../assets/data-center-nuevo.mp4";

export const Home = () => {
  return (
    <>
      {/* SECCIÓN HERO (VIDEO) */}
      <section className="hero" style={{ width: "100%" }}>
        <div className="hero-content">
          <h2 className="hero-subtitle">¿Problemas tecnológicos?</h2>
          <h1 className="hero-title">Somos tu aliado tecnológico confiable</h1>

          <div className="hero-quote">
            <p>
              <span className="brand-highlight">N5 Go</span>, tu aliado
              tecnológico integral. Soporte computacional experto, Data Center,
              soluciones informáticas y servidores virtuales ágiles para
              impulsar el éxito de tu empresa. ¡Potencia tu negocio con
              nosotros!
            </p>
          </div>
          <Link to="/Contactanos" className="button-item-contactanos">
            Contactanos
          </Link>
        </div>

        <div className="hero-video" style={{ width: "100%" }}>
          <video autoPlay loop muted playsInline src={videoFondo}>
            Tu navegador no soporta videos.
          </video>
          <div className="video-overlay"></div>
        </div>
      </section>
      <div className="home-container">
        {/* SECCIÓN DE SERVICIOS DESTACADOS */}
        <section className="services-section">
          <h2 className="title-service">Nuestros servicios</h2>
          <div className="services-grid">
            {/* Card 1: Soporte */}
            <Link to="/servicios/SoporteMantenimiento" className="service-card">
              <div className="service-icon">
                <img src={soporteComputacional} alt="Icono Soporte" />
              </div>
              <h3>Soporte Computacional</h3>
              <p>
                Diagnosticamos y solucionamos fallas de hardware o software en
                tus equipos para que tu operación nunca se detenga.
              </p>
              <span className="service-link">Saber más →</span>
            </Link>

            {/* Card 2: Data Center */}
            <Link to="/servicios/DataCenter" className="service-card">
              <div className="service-icon">
                <img src={dataCenter} alt="Icono Data Center" />
              </div>
              <h3>Data Center</h3>
              <p>
                Infraestructura IT segura y económica. Ofrecemos espacio
                dedicado y protección de alto nivel para tus sistemas críticos.
              </p>
              <span className="service-link">Saber más →</span>
            </Link>

            {/* Card 3: VPS (Corregido el título) */}
            <Link to="/servicios/Vps" className="service-card">
              <div className="service-icon">
                <img src={vps} alt="Icono VPS" />
              </div>
              <h3>Servidores VPS</h3>
              <p>
                Servidores privados virtuales con la potencia y el control que
                tu negocio necesita para escalar con total flexibilidad.
              </p>
              <span className="service-link">Saber más →</span>
            </Link>

            {/* Card 4: Software */}
            <Link to="/servicios/DesarrolloSoftware" className="service-card">
              <div className="service-icon">
                <img src={solucionesInformaticas} alt="Icono Software" />
              </div>
              <h3>Soluciones informáticas</h3>
              <p>
                Diseñamos soluciones digitales a medida que optimizan tus
                procesos internos y potencian tus resultados comerciales.
              </p>
              <span className="service-link">Saber más →</span>
            </Link>

            {/* Card 5: IA */}
            <Link to="/servicios/AgenteIa" className="service-card">
              <div className="service-icon">
                <img src={agenteIa} alt="Icono IA" />
              </div>
              <h3>Agentes de IA</h3>
              <p>
                Implementamos agentes inteligentes y flujos automatizados para
                ahorrar tiempo, minimizar errores y maximizar la eficiencia.
              </p>
              <span className="service-link">Saber más →</span>
            </Link>

            {/* Card 6: Correos */}
            <Link to="/servicios/CorreosEmpresariales" className="service-card">
              <div className="service-icon">
                <img src={iconoCorreo} alt="Icono Correos" />
              </div>
              <h3>Correos Corporativos</h3>
              <p>
                Proyecta profesionalismo y seguridad con correos electrónicos
                personalizados bajo tu propio dominio empresarial.
              </p>
              <span className="service-link">Saber más →</span>
            </Link>
          </div>
        </section>
        {/* SECCIÓN ¿POR QUÉ ELEGIRNOS? */}
        <section className="why-choose-us">
          <div className="why-container">
            {/* Imagen a la izquierda */}
            <div className="why-image">
              <img
                src="https://n5go.cl/wp-content/uploads/2025/05/pexels-canvastudio-3194519-scaled.jpg"
                alt="Equipo trabajando"
              />
            </div>

            {/* Contenido a la derecha */}
            <div className="why-content">
              <h2 className="why-title">¿Por qué elegir N5 Go?</h2>

              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon-small">
                    <img src={configuracion} alt="Icono engranaje" />
                  </div>
                  <div className="benefit-text">
                    <h3>Soluciones rápidas y eficaces</h3>
                    <p>
                      Minimizamos el tiempo de inactividad para que tu negocio
                      siga avanzando.
                    </p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon-small">
                    <img src={compa} alt="Icono ayuda mutua" />
                  </div>
                  <div className="benefit-text">
                    <h3>Soporte profesional y personalizado</h3>
                    <p>
                      Entendemos las necesidades únicas de cada empresa y nos
                      adaptamos a ellas.
                    </p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon-small">
                    <img src={medalla} alt="Icono medalla" />
                  </div>
                  <div className="benefit-text">
                    <h3>Tranquilidad total</h3>
                    <p>
                      Con nosotros, puedes enfocarte en lo que realmente
                      importa: ¡El éxito de tu negocio!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN CALL TO ACTION (CONTACTO) */}
        <section className="cta-section">
          <div
            className="cta-container"
            style={{ backgroundImage: `url(${backgroundCTA})` }}
          >
            {/* Quitamos el overlay morado de aquí */}
            <div className="cta-content">
              <h2 className="cta-title">
                ¡Construyamos algo increíble juntos! Contáctanos y demos vida a
                tus ideas
              </h2>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
