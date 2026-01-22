import "./estiloServicio/Service.css";

const SoporteMantenimiento: React.FC = () => {
  return (
    <section className="soporte-container">
      <div className="soporte-header">
        <h2>
          Soporte y mantenimiento de{" "}
          <span className="highlight">Equipos Tecnológicos</span>
        </h2>
        <blockquote className="soporte-quote">
          <p>
            <strong>¡Tu tranquilidad digital empresarial comienza aquí!</strong>
          </p>
        </blockquote>
        <p className="soporte-description">
          En <span className="n5go-brand">N5 Go</span>, En N5 Go ayudamos a que
          tu empresa trabaje sin problemas tecnológicos, ofreciendo soporte
          computacional confiable y eficiente.
        </p>
      </div>

      <div className="contenedorLista">
        <ul className="check-list">
          <li>
            <strong>Nos encargamos del mantenimiento de impresoras, </strong>{" "}
            solucionando las fallas, asegurando que siempre estén operativas.
          </li>
          <li>
            <strong>Optimizamos la conectividad a internet, </strong> redes,
            Wi-Fi y cableado para que tu negocio cuente con una conexión rápida,
            estable y segura.
          </li>
        </ul>
      </div>

      <p>
        <strong>
          Ofrecemos licencias de software original adaptadas a las necesidades
          de tu empresa:
        </strong>
      </p>
      <div className="contenedorLista">
        <ul className="check-list">
          <li>
            <strong>Windows</strong>
          </li>
          <li>
            <strong>Microsoft office</strong>
          </li>
          <li>
            <strong>Software especializados</strong>
          </li>
        </ul>
      </div>
      <p>Realizamos la instalación remota de forma rápida y segura.</p>

      <p className="soporte-description">
        <span className="n5go-brand">
          ¡No esperes que los problemas tecnológicos te detengan!
        </span>{" "}
        Contactanos hoy mismo para una consulta gratuita y descubre como
        impulsar tu empresa.
      </p>

      <div className="precios-flex">
        {/* Tarjeta Mantención */}
        <div
          className="precio-card-vps"
          style={{ border: "2px solid #4c2bd6" }}
        >
          <h3>Mantención</h3>
          <div className="precio-valor-container">
            <span className="precio-sub">Valor</span>
            <span className="precio-monto">1</span>
            <span className="precio-sub">U.F. la hora</span>
          </div>
          <p>
            <strong>Remota</strong>, previa evaluación
          </p>
          <ul className="check-list-precios">
            <li>Actualizamos sitios</li>
            <li>Reparación de fallas</li>
          </ul>
        </div>

        {/* Tarjeta Outsourcing */}
        <div
          className="precio-card-vps"
          style={{ border: "2px solid #4c2bd6" }}
        >
          <h3>Outsourcing</h3>
          <div className="precio-valor-container">
            <span className="precio-sub">Valor</span>
            <span className="precio-monto">10</span>
            <span className="precio-sub">U.F. /mes</span>
          </div>
          <p>
            <strong>Presencial</strong>, previa evaluación
          </p>
          <ul className="check-list-precios">
            <li>Mantención preventiva</li>
            <li>Preparación de PC’s</li>
            <li>Revisión de impresoras</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SoporteMantenimiento;
