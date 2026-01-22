import "./estiloServicio/Service.css";

export const DataCenter: React.FC = () => {
  return (
    <section className="soporte-container">
      <div className="soporte-header">
        <h2>
          Data <span className="highlight">Center</span>
        </h2>
        <blockquote className="soporte-quote">
          <p>
            <strong>
              Descubre la tranquilidad de confiar tus servidores a expertos.
            </strong>
          </p>
        </blockquote>
        <p className="soporte-description">
          Nuestro Data Center de vanguardia te ofrece un entorno seguro, robusto
          y altamente conectado para alojar tus equipos y datos críticos. Al
          elegirnos, obtendrás:
        </p>
      </div>
      <div className="contenedorLista">
        <ul className="check-list">
          <li>
            <strong>Seguridad física: </strong> Acceso restringido, vigilancia
            24/7, sistemas de detección para proteger tu inversión.
          </li>
          <li>
            <strong>Conectividad de alta velocidad y redundancia: </strong>{" "}
            Proveedores de internet y una infraestructura de red redundante
            garantizan una conexión estable y de alto rendimiento para tus
            aplicaciones y usuarios.
          </li>
          <li>
            <strong>Climatización y control ambiental óptimos: </strong>{" "}
            Mantenemos una temperatura y humedad controladas para asegurar el
            funcionamiento eficiente y prolongar la vida útil de tus equipos.
          </li>
          <li>
            <strong>Suministro eléctrico continuo y protegido: </strong>{" "}
            Sistemas UPS (Uninterruptible Power Supply) y un generador de
            respaldo para evitar interrupciones por cortes de energía,
            asegurando la disponibilidad constante de tus servicios.
          </li>
          <li>
            <strong>Soporte técnico especializado: </strong> Un equipo de
            profesionales altamente capacitados está disponible para brindarte
            asistencia técnica cuando la necesites, resolviendo cualquier
            eventualidad de manera rápida y eficiente.
          </li>
          <li>
            <strong>Escalabilidad y flexibilidad a tu medida: </strong> Adapta
            tu espacio y recursos según las necesidades cambiantes de tu
            negocio, sin las complicaciones de expandir tu propia
            infraestructura.
          </li>
          <li>
            <strong>Reducción significativa de costos: </strong> Olvídate de las
            inversiones iniciales en infraestructura, mantenimiento,
            refrigeración y personal especializado. Nuestro servicio optimiza
            tus gastos operativos.
          </li>
        </ul>
      </div>

      <div className="precios-flex">
        {/* Tarjeta hosting start */}
        <div className="precio-card">
          <h3>Hosting Start</h3>
          <div className="precio-valor-container">
            <span className="precio-sub">Valor</span>
            <span className="precio-monto">$5.000</span>
            <span className="precio-sub">/mes</span>
          </div>
          <p>
            <strong>10% dcto.</strong> pagando el año
          </p>
          <ul className="check-list-precios">
            <li>Espacio disco 250MB</li>
            <li>1 Sitio web</li>
            <li>25 Cuentas de correo</li>
            <li>1 Base de datos</li>
            <li>DNS y Certificado SSL</li>
          </ul>
        </div>

        {/* Tarjeta hosting full */}
        <div className="precio-card" style={{ border: "2px solid #4c2bd6" }}>
          {" "}
          {/* Destacada */}
          <h3>Hosting Full</h3>
          <div className="precio-valor-container">
            <span className="precio-sub">Valor</span>
            <span className="precio-monto">3.5</span>
            <span className="precio-sub">U.F. /mes</span>
          </div>
          <p>
            <strong>Precio especial</strong> empresas
          </p>
          <ul className="check-list-precios">
            <li>Espacio disco 500GB</li>
            <li>Sitios web ilimitados</li>
            <li>500 cuentas de correo</li>
            <li>BD ilimitadas</li>
            <li>Soporte remoto y cPanel</li>
          </ul>
        </div>

        {/* Tarjeta housing */}
        <div className="precio-card">
          <h3>Housing</h3>
          <div className="precio-valor-container">
            <span className="precio-sub">Valor</span>
            <span className="precio-monto">2.5</span>
            <span className="precio-sub">U.F. /mes</span>
          </div>
          <p>
            <strong>Aloje</strong> su propio servidor
          </p>
          <ul className="check-list-precios">
            <li>Energía ininterrumpida</li>
            <li>Climatización eficiente</li>
            <li>Alta conectividad</li>
            <li>Seguridad 24/7</li>
            <li>Manos Remotas</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
