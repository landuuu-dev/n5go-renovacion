import React from "react";
import "./estiloServicio/Servidores.css";
import { useNavigate } from "react-router-dom";
import backgroundServidores from "../../assets/servidores.png";

export const Servidores: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="servidores-container">
      <div className="servidores-header">
        <span className="badge-servidores">Hardware Dedicado</span>
        <h1>
          Servidores físicos de{" "}
          <span className="highlight-purple">Alto Rendimiento</span>
        </h1>

        <div className="servidores-intro">
          <p>
            ¿Cansado de las limitaciones del hosting compartido? ¿Necesitas{" "}
            <strong>rendimiento puro</strong> y{" "}
            <strong>flexibilidad ilimitada</strong> para tus proyectos más
            ambiciosos? ¡En <span className="n5go-brand">N5 Go</span>, te
            ofrecemos la solución definitiva! Somos tu socio estratégico en el{" "}
            <strong>arriendo de servidores físicos dedicados</strong>,
            brindándote la potencia y la estabilidad que solo un hardware
            exclusivo puede ofrecer.
          </p>

          <div className="quote-banner">
            Con <span className="n5go-brand">N5 Go</span>, obtendrás un{" "}
            <strong>servidor físico</strong> solo para ti, garantizando la{" "}
            <strong>máxima velocidad</strong> y <strong>disponibilidad</strong>{" "}
            para tus aplicaciones más exigentes.
          </div>

          <p>
            Desde <strong>sitios web de alto tráfico</strong> y{" "}
            <strong>bases de datos complejas</strong> hasta{" "}
            <strong>aplicaciones empresariales críticas</strong> y{" "}
            <strong>entornos de desarrollo</strong>, nuestros servidores están
            optimizados para el <strong>rendimiento superior</strong>.
          </p>

          <p className="extra-info">
            Pero eso no es todo. Entendemos que cada proyecto es único. Por eso,
            te ofrecemos la{" "}
            <strong>posibilidad de múltiples direcciones IP</strong> para que
            puedas gestionar y escalar tus iniciativas con total libertad.
            ¿Necesitas IPs dedicadas para <strong>SEO</strong>,{" "}
            <strong>testing</strong>, <strong>VPNs</strong> o{" "}
            <strong>proyectos multidominio</strong>? ¡Con{" "}
            <span className="n5go-brand">N5 Go</span>, la flexibilidad es tuya!
          </p>
        </div>
      </div>
      <div className="img-container-centrado">
        <img
          src={backgroundServidores}
          alt="Servidores N5 Go"
          className="img-servidores-directa"
        />
      </div>

      <div className="servidores-footer-cta">
        <h2>¿Necesitas una configuración a medida?</h2>
        <p>
          Entendemos que cada proyecto es único. Gestiona y escala tus
          iniciativas con total libertad.
        </p>
        <button
          className="btn-servidores"
          onClick={() => navigate("/contacto")}
        >
          Cotizar Servidor Dedicado
        </button>
      </div>
    </div>
  );
};
