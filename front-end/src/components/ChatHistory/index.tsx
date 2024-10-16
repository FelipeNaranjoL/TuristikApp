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
          </div>
        </div>
      ))}
    </>
  );
};

export default ChatHistory;
