import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css"; // Asegúrate de que la ruta sea correcta

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <span className="notfound-badge">Error 404</span>
        <h1>¡Oops! Página No Encontrada</h1>
        <p className="notfound-message">
          Parece que te has desviado un poco de la ruta. La página que buscas no
          existe o ha sido movida.
        </p>

        <div className="notfound-actions">
          <button
            className="btn-notfound primary-btn"
            onClick={() => navigate("/")}
          >
            Volver a Inicio
          </button>
          <button
            className="btn-notfound secondary-btn"
            onClick={() => navigate("/Contactanos")}
          >
            Contactar Soporte
          </button>
        </div>

        <div className="notfound-illustration">
          {/* Puedes poner aquí un icono SVG o una imagen de un servidor "perdido" o similar */}
          <span
            role="img"
            aria-label="Rocket lost in space"
            className="lost-icon"
          >
            🛰️
          </span>
          <p>Mientras tanto, ¿por qué no exploramos nuestros servicios?</p>
        </div>
      </div>
    </div>
  );
};
