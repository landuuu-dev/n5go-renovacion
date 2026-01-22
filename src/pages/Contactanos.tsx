import React, { useState } from "react";
import "./Contactanos.css";

export const Contactanos: React.FC = () => {
  const [mensajeCopiado, setMensajeCopiado] = useState<string | null>(null);

  const mostrarAviso = (label: string) => {
    setMensajeCopiado(`${label} copiado`);
    setTimeout(() => setMensajeCopiado(null), 2000);
  };

  // Esta función es la que garantiza el copiado
  const copyToClipboard = (text: string, label: string) => {
    // Intento 1: API Moderna (Solo funciona en HTTPS/Localhost)
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(() => mostrarAviso(label))
        .catch(() => fallbackCopy(text, label));
    } else {
      // Intento 2: Método manual (Funciona siempre)
      fallbackCopy(text, label);
    }
  };

  const fallbackCopy = (text: string, label: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Aseguramos que el textarea no se vea pero esté en el DOM
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    document.body.appendChild(textArea);

    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        mostrarAviso(label);
      }
    } catch (err) {
      console.error("Error fatal al copiar", err);
    }

    document.body.removeChild(textArea);
  };

  return (
    <section className="soporte-container">
      {/* Mensaje flotante que confirma el copiado */}
      {mensajeCopiado && <div className="toast-copiado">{mensajeCopiado}</div>}

      <div className="soporte-header">
        <h2>
          Contácte<span className="highlight">nos</span>
        </h2>
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
        <button type="submit" className="btn-enviar">
          Enviar Mensaje
        </button>
      </form>
    </section>
  );
};
