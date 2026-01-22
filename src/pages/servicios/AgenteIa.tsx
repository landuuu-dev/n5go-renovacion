import React from "react";
import "./estiloServicio/AgenteIa.css";
import { useNavigate } from "react-router-dom";

export const AgenteIa: React.FC = () => {
  const navigate = useNavigate();
  const caracteristicas = [
    {
      titulo: "Atención 24/7",
      descripcion:
        "Nuestros agentes no descansan. Atienden consultas y resuelven dudas en tiempo real, cualquier día a cualquier hora.",
      icono: "🕒",
    },
    {
      titulo: "Integración Omnicanal",
      descripcion:
        "Conecta tu IA con WhatsApp, Web, Instagram y sistemas internos de gestión (CRM) de forma fluida.",
      icono: "🔗",
    },
    {
      titulo: "Aprendizaje Continuo",
      descripcion:
        "El agente evoluciona con cada interacción, mejorando su precisión y lenguaje para adaptarse a tu marca.",
      icono: "🧠",
    },
    {
      titulo: "Reducción de Costos",
      descripcion:
        "Automatiza hasta el 80% de las consultas repetitivas, permitiendo que tu equipo humano se enfoque en tareas críticas.",
      icono: "📉",
    },
  ];

  return (
    <div className="agente-container">
      <div className="agente-header">
        <span className="badge-ia">Soluciones Avanzadas</span>
        <h1>
          Agentes de{" "}
          <span className="highlight-purple">Inteligencia Artificial</span>
        </h1>
        <p className="agente-subtitle">
          Transformamos la interacción con tus clientes mediante asistentes
          inteligentes capaces de razonar, aprender y ejecutar acciones
          complejas.
        </p>
      </div>

      <div className="agente-grid">
        {caracteristicas.map((item, index) => (
          <div className="agente-card" key={index}>
            <div className="card-icon">{item.icono}</div>
            <h3>{item.titulo}</h3>
            <p>{item.descripcion}</p>
          </div>
        ))}
      </div>

      <div className="ia-footer-banner">
        <div className="banner-content">
          <h2>¿Listo para automatizar tu negocio?</h2>
          <p>Implementa un agente personalizado en menos de lo que imaginas.</p>
          <button
            onClick={() => navigate("/Contactanos")}
            className="btn-agente"
          >
            Contactanos
          </button>
        </div>
      </div>
    </div>
  );
};
