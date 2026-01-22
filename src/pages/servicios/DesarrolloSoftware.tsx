import "./estiloServicio/Service.css";

export const DesarrolloSoftware: React.FC = () => {
  return (
    <section className="soporte-container">
      <div className="soporte-header">
        <h2>
          Desarrollo de <span className="highlight">Software</span>
        </h2>
        <blockquote className="soporte-quote">
          <p>
            <strong>¡Tu tranquilidad digital empresarial comienza aquí!</strong>
          </p>
        </blockquote>
        <p className="soporte-description">
          ¿Necesitas una solución tecnológica única que impulse tu negocio? En
          <span className="n5go-brand">N5 Go,</span> transformamos tus ideas en
          realidad digital. Nuestro servicio de{" "}
          <strong>desarrollo de software a la medida </strong>
          te ofrece programas, proyectos y soluciones informáticas creadas
          específicamente para tus necesidades. Aunque nos especializamos en
          <strong> PHP </strong>para desarrollar aplicaciones web robustas y
          dinámicas, nuestro equipo domina una variedad de lenguajes de
          programación, lo que nos permite construir la herramienta perfecta
          para ti, sin importar la complejidad del proyecto.
        </p>

        <blockquote className="soporte-quote">
          <p>
            <strong>
              Cuéntanos tu idea y deja que nuestro equipo técnico construya el
              futuro de tu empresa.
            </strong>
          </p>
        </blockquote>
      </div>

      <div className="imagen-centrada-container">
        <img
          src="https://n5go.cl/wp-content/uploads/2025/06/Crea_una_imagen_con_una_caja_de_la_que_salen_multiples_servicios_de_informatica_en_forma_de_iconos__los_servicios_deben_estar_relacionados_con_Data_Center__Servidor_virtual__Soporte_de_computacion__ba.png"
          alt="Servicios N5 Go"
          className="imagen-servicios"
        />
      </div>
    </section>
  );
};
