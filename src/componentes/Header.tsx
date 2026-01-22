import { useState } from "react";
import { Link } from "react-router-dom";
import "../estilos/Header.css"; // IMPORTANTE: Importar el CSS aquí
import logoEmpresa from "../assets/logo.png"; // Ajusta la ruta a tu logo

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Lado izquierdo: Logo */}
      <Link to="/" className="logo-link">
        <img src={logoEmpresa} alt="Logo Empresa" />
      </Link>

      {/* Lado derecho: Links */}
      <div className="nav-links">
        <Link to="/" className="nav-item hide-mobile">
          Inicio
        </Link>

        <div
          className="dropdown-wrapper"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button className="dropdown-button">
            Servicios {isOpen ? "▴" : "▾"}
          </button>

          {isOpen && (
            <div className="dropdown-content">
              <Link
                to="/servicios/SoporteMantenimiento"
                onClick={() => setIsOpen(false)}
              >
                Soporte y Mantenimiento
              </Link>
              <Link to="/servicios/DataCenter" onClick={() => setIsOpen(false)}>
                Data Center
              </Link>
              <Link to="/servicios/Vps" onClick={() => setIsOpen(false)}>
                Servidores VPS
              </Link>
              <Link
                to="/servicios/DesarrolloSoftware"
                onClick={() => setIsOpen(false)}
              >
                Desarrollo de Software
              </Link>
              <Link
                to="/servicios/CorreosEmpresariales"
                onClick={() => setIsOpen(false)}
              >
                Correos Empresariales
              </Link>

              <Link to="/servicios/AgenteIa" onClick={() => setIsOpen(false)}>
                Agente IA
              </Link>
            </div>
          )}
        </div>

        <div className="nav-links">
          <Link to="/Contactanos" className="nav-item">
            Contactanos
          </Link>
        </div>
      </div>
    </nav>
  );
};
