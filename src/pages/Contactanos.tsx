import React, { useState } from "react";
import "./Contactanos.css";

export const Contactanos: React.FC = () => {
  const [mensajeCopiado, setMensajeCopiado] = useState<string | null>(null);
  // Estado para la opción seleccionada
  const [servicioSeleccionado, setServicioSeleccionado] = useState<string>("");

  const mostrarAviso = (label: string) => {
    setMensajeCopiado(`${label} copiado`);
    setTimeout(() => setMensajeCopiado(null), 2000);
  };

  const copyToClipboard = (text: string, label: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(() => mostrarAviso(label))
        .catch(() => fallbackCopy(text, label));
    } else {
      fallbackCopy(text, label);
    }
  };

  const fallbackCopy = (text: string, label: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const successful = document.execCommand("copy");
      if (successful) mostrarAviso(label);
    } catch (err) {
      console.error("Error fatal al copiar", err);
    }
    document.body.removeChild(textArea);
  };

  const servicios = [
    "Soporte Computacional",
    "Data Center",
    "Servidor Virtual Privado",
    "Correos Corporativos",
    "Soluciones Informáticas",
    "Seguridad Informática",
    "Agente de IA",
    "Servidores fisicos",
  ];

  return (
    <section className="soporte-container">
      {mensajeCopiado && <div className="toast-copiado">{mensajeCopiado}</div>}

      <div className="soporte-header">
        <h2>Contáctenos</h2>
        <p className="soporte-description">
          Haga clic sobre los datos para copiarlos automáticamente.
        </p>
      </div>

      <div className="contacto-info-superior">
        <div
          className="info-item-superior"
          onClick={() =>
            copyToClipboard("Exequiel Fernández 3735, Macul", "Dirección")
          }
        >
          <strong>Dirección:</strong>
          <span className="copy-text">Exequiel Fernández 3735, Macul.</span>
        </div>

        <div
          className="info-item-superior"
          onClick={() => copyToClipboard("info@n5go.cl", "Email")}
        >
          <strong>Email:</strong>
          <span className="copy-text">info@n5go.cl, pablo@n5go.cl</span>
        </div>

        <div
          className="info-item-superior"
          onClick={() => copyToClipboard("+56224063737", "Teléfono")}
        >
          <strong>Teléfono:</strong>
          <span className="copy-text">+562 2406 3737</span>
        </div>
      </div>

      <form className="contacto-form-full" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>
            Nombre <span className="required">*</span>
          </label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>
            Email <span className="required">*</span>
          </label>
          <input type="email" required />
        </div>

        <div className="form-group">
          <label>
            Mensaje <span className="required">*</span>
          </label>
          <textarea rows={4} required></textarea>
        </div>

        {/* NUEVAS OPCIONES MÚLTIPLES */}
        <div className="form-group">
          <label>
            Servicio de interés <span className="required">*</span>
          </label>
          <div className="radio-group">
            {servicios.map((servicio) => (
              <label key={servicio} className="radio-label">
                <input
                  type="radio"
                  name="servicio"
                  value={servicio}
                  checked={servicioSeleccionado === servicio}
                  onChange={(e) => setServicioSeleccionado(e.target.value)}
                  required
                />
                {servicio}
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="btn-enviar">
          Enviar Mensaje
        </button>
      </form>
    </section>
  );
};
