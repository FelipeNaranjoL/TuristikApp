// src/components/ChatHistory.tsx
import React from "react";
import ReactMarkdown from "react-markdown";

// Definimos la interfaz para las propiedades que se espera recibir
interface ChatHistoryProps {
  chatHistory: {
    type: string;
    message: string;
  }[];
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ chatHistory }) => {
  // Función para leer el mensaje en voz alta
  const readAloud = (message: string) => {
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = "es-ES"; // Configura el idioma a español
    speechSynthesis.speak(utterance);
  };

  return (
    <>
      {chatHistory.map((message, index) => (
        <div
          key={index}
          className={`flex items-start py-2 px-4 rounded-lg ${message.type === "user"
              ? "bg-gray-100 text-gray-800"
              : "bg-blue-100 text-blue-800"
            }`}
        >
          {message.type === "user" && (
            <span className="mr-2 font-bold text-gray-600">Tu:</span>
          )}
          <div>
            <ReactMarkdown>{message.message}</ReactMarkdown>
            {/* Botón de leer en voz alta solo para respuestas del bot */}
            {message.type === "bot" && (
              <button
                onClick={() => readAloud(message.message)}
                className="mt-2 px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Leer respuesta
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ChatHistory;
