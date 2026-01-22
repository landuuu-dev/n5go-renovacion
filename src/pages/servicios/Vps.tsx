import "./estiloServicio/Service.css";

export const Vps: React.FC = () => {
  return (
    <section className="soporte-container">
      <div className="soporte-header">
        <h2>
          Servidor Privado Virtual – <span className="highlight">VPS</span>
        </h2>
        <blockquote className="soporte-quote">
          <p>
            <strong>
              Potencia, control y escalabilidad para tu proyecto online
            </strong>
          </p>
        </blockquote>
        <p className="soporte-description">
          ¿Tu sitio web está creciendo? El hosting compartido ya no es
          suficiente. Con nuestros VPS de alto rendimiento, obtienes recursos
          dedicados, mayor velocidad y control total sobre tu servidor. Un VPS
          te permite mejorar el rendimiento de tus aplicaciones y adaptar el
          entorno exactamente a tus necesidades.
          <strong>¿Qué te ofrece nuestro VPS?</strong>
        </p>
      </div>
      <div className="contenedorLista">
        <ul className="check-list">
          <li>
            <strong>Rendimiento superior: </strong> Recursos garantizados (CPU,
            RAM y almacenamiento) para una mayor velocidad y estabilidad.
          </li>
          <li>
            <strong>Control total: </strong> Acceso root completo para instalar,
            configurar y personalizar tu servidor según tus requerimientos.
          </li>
          <li>
            <strong>Escalabilidad sin límites: </strong> Amplía tus recursos
            fácilmente a medida que tu negocio crece, sin interrupciones.
          </li>
          <li>
            <strong>Mayor seguridad: </strong> Entorno aislado que protege tus
            datos y reduce riesgos frente a otros usuarios.
          </li>
          <li>
            <strong>Flexibilidad total: </strong> Ideal para sitios de alto
            tráfico, tiendas online, aplicaciones web y entornos de desarrollo.
          </li>
        </ul>
      </div>

      <blockquote className="soporte-quote">
        <p>
          <strong>
            ¿Listo para experimentar la diferencia que un VPS de alto
            rendimiento puede hacer por tu presencia online?
          </strong>
        </p>
      </blockquote>

      <div className="precios-flex">
        {/* Tarjeta hosting start */}
        <div
          className="precio-card-vps"
          style={{ border: "2px solid #4c2bd6" }}
        >
          <h3>Valor VPS</h3>
          <div className="precio-valor-container">
            <span className="precio-sub">Desde</span>
            <span className="precio-monto">2,5</span>
            <span className="precio-sub">U.F./mes</span>
          </div>
          <p>
            <strong>10% dcto.</strong> al pagar el año
          </p>
          <ul className="check-list-precios">
            <li>Almacenamiento SSD</li>
            <li>4 GB de RAM</li>
            <li>50 GB espacio en disco</li>
            <li>4 TB ancho de banda</li>
            <li>Backups semanales</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
