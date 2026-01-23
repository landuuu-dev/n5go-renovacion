import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

export default function N8nChat() {
  useEffect(() => {
    createChat({
      webhookUrl:
        "https://n8n-latest-883i.onrender.com/webhook/cb579a0a-7f52-4cdf-b132-003a5908b054/chat",

      mode: "window", // 👈 ventana flotante
      showWelcomeScreen: false,

      initialMessages: ["Hola 👋", "¿En qué puedo ayudarte?"],

      i18n: {
        en: {
          title: "N5 Go",
          subtitle: "Soporte automático",
          footer: "",
          getStarted: "Nueva conversación",
          inputPlaceholder: "Escribe tu mensaje...",
          closeButtonTooltip: "Cerrar chat",
        },
      },
    });
  }, []);

  return null; // 👈 no renderiza nada en React
}
