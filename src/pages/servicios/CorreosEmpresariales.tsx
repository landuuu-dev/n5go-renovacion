import "./estiloServicio/Service.css";

export const CorreosEmpresariales: React.FC = () => {
  return (
    <section className="soporte-container">
      <div className="soporte-header">
        <h2>
          Correos <span className="highlight">Corporativos</span>
        </h2>
        <blockquote className="soporte-quote">
          <p>
            <strong>
              Impulsa la Identidad de tu Negocio con Correos Corporativos
            </strong>
          </p>
        </blockquote>
        <p className="soporte-description">
          ¿Sabías que un correo personalizado genera hasta 9 veces más confianza
          que uno genérico? No permitas que una dirección{" "}
          <strong>@gmail o @outlook </strong>
          opaque el profesionalismo de tu trabajo.
        </p>
      </div>

      <div className="contenedorLista">
        <ul className="check-list">
          <li>
            <strong>Profesionalismo Inmediato: </strong>Refuerza tu marca en
            cada mensaje enviado con el formato nombre@tuempresa.cl.
          </li>
          <li>
            <strong>Autoridad y Confianza: </strong>Diferénciate de la
            competencia y proyecta la seguridad que tus clientes buscan.
          </li>
          <li>
            <strong>Control Total: </strong> Crea cuentas para todo tu equipo
            (ventas@, contacto@, gerencia@) y mantén la comunicación organizada.
          </li>
        </ul>
      </div>

      {/**TARJETAS SECCION */}
      <div className="precios-flex">
        {/* Tarjeta Plan inicial */}
        <div
          className="precio-card-vps"
          style={{ border: "2px solid #4c2bd6" }}
        >
          <h3>Plan Inicial</h3>
          <div className="precio-valor-container">
            <span className="precio-sub">U.F</span>
            <span className="precio-monto">1</span>
            <span className="precio-sub">/mes</span>
          </div>
          <p>
            Almacenamiento <strong>10 GB</strong>,
          </p>
          <ul className="check-list-precios">
            <li>Cuentas de correo ilimitadas</li>
            <li>Dominio corporativo personalizado</li>
            <li>Ideal emprendimientos</li>
            <li>Soporte técnico básico</li>
            <li>Webmail y acceso POP3/IMAP</li>
            <li>Respaldo Mensual</li>
          </ul>
        </div>

        {/* Tarjeta Plan Pyme */}
        <div
          className="precio-card-vps"
          style={{ border: "2px solid #4c2bd6" }}
        >
          <h3>Plan Pyme</h3>
          <div className="precio-valor-container">
            <span className="precio-sub">U.F</span>
            <span className="precio-monto">2.5</span>
            <span className="precio-sub">/mes</span>
          </div>
          <p>
            Almacenamiento <strong>100 GB</strong>,
          </p>
          <ul className="check-list-precios">
            <li>Cuentas de correo ilimitadas</li>
            <li>Dominio corporativo personalizado</li>
            <li>Ideal para pymes en crecimiento</li>
            <li>Soporte técnico avanzado</li>
            <li>Webmail y acceso POP3/IMAP</li>
            <li>10x mas capacidad que el plan inicial</li>
            <li>Respaldo quincenal</li>
          </ul>
        </div>

        {/* Tarjeta Plan empresa */}
        <div className="precio-card-vps">
          <h3>Plan Empresa</h3>
          <div className="precio-valor-container">
            <span className="precio-sub">U.F</span>
            <span className="precio-monto">6.5</span>
            <span className="precio-sub">/mes</span>
          </div>
          <p>
            Almacenamiento <strong>1 TB</strong>,
          </p>
          <ul className="check-list-precios">
            <li>Cuentas de correo ilimitadas</li>
            <li>Dominio corporativo personalizado</li>
            <li>Ideal para empresas grandes y medianas</li>
            <li>Soporte técnico preferente</li>
            <li>Webmail y acceso POP3/IMAP</li>
            <li>100x mas capacidad que el plan inicial</li>
            <li>Maxima capacidad sin limites de usuario</li>
            <li>Respaldo quincenal</li>
          </ul>
        </div>
      </div>

      <p>
        Ventaja diferenciadora de <span className="n5go-brand">N5 Go</span>:
        Cobramos por espacio disponible, no por cuenta creada → el cliente puede
        crear ilimitadas cuentas de correo dentro del almacenamiento contratado,
        lo que es una propuesta de valor mucho más competitiva que competidores
        que cobran por usuario.
      </p>
    </section>
  );
};
