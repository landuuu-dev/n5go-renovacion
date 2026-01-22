import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import "../estilos/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* FILA SUPERIOR: INFORMACIÓN Y REDES */}
        <div className="footer-main">
          <div className="footer-info">
            <h3 className="footer-tagline">
              ¡Potencia tu empresa con soluciones IT! 💻🔐
            </h3>
            <p className="footer-description">
              En <strong>N5 Go</strong> brindamos servicios de informática
              profesionales para que tu negocio funcione sin problemas.
            </p>
          </div>

          <div className="footer-socials">
            <a
              href="https://www.facebook.com/profile.php?id=61577471519254"
              className="social-icon facebook"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.instagram.com/n5go.cl/"
              className="social-icon instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/channel/UCOfl9BNFysZ_g-yTkRhJZxA"
              className="social-icon youtube"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/company/105850730/"
              className="social-icon linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* FILA INFERIOR: COPYRIGHT Y DIRECCIÓN */}
        <div className="footer-bottom">
          <div className="copyright-text">
            <p>
              © 2025 <strong>N5 Go</strong>. Todos los derechos reservados.
            </p>
          </div>
          <div className="contact-details">
            <p>Exequiel Fernández 3735, Macul.</p>
            <p>
              Teléfono: <a href="tel:+56224063737">56 22406 3737</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
