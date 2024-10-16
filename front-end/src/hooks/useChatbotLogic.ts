// appLogic.ts
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Define el tipo Message para representar los mensajes del chat
type Message = {
    type: "user" | "bot";  // Tipos de mensajes: "user" (usuario) o "bot" (IA)
    message: string;  // Contenido del mensaje
};

// Hook personalizado para la lógica del chatbot
export const useChatbotLogic = (lugar: string) => { // Acepta 'lugar' como argumento
    const [userInput, setUserInput] = useState<string>("");  // Estado para la entrada del usuario
    const [chatHistory, setChatHistory] = useState<Message[]>([]);  // Historial del chat
    const [isLoading, setIsLoading] = useState<boolean>(false);  // Estado de carga

    // Inicializa la API de Gemini con una clave específica
    const genAI = new GoogleGenerativeAI("AIzaSyCNyqsLwbHEUNcyGp8GH-k13oJnxYDK-u4");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Inicializa el chat con un historial vacío
    const chat = model.startChat({
        history: [], // Historial vacío al iniciar
    });

    // Función para manejar la entrada del usuario
    const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);  // Actualiza el estado de la entrada
    };

    // Función para enviar el mensaje del usuario a Gemini
    const sendMessage = async () => {
        if (userInput.trim() === "") return;  // Si el campo de entrada está vacío, no envía nada

        setIsLoading(true);  // Cambia el estado a "cargando"
        try {
            // Agrega el mensaje del usuario al historial de chat
            const userMessage: Message = { type: "user", message: userInput };
            setChatHistory((prev) => [...prev, userMessage]);  // Actualiza el historial de chat

            // Envía el mensaje a la API de Gemini junto con el historial de chat y el lugar
            const result = await chat.sendMessage(`
                El usuario es un turista que está visitando ${lugar}. Ofrece información sobre restaurantes, bares, plazas, lugares de interés y datos históricos de ${lugar}.
                Responde de manera detallada y útil, y mantén el contexto de la conversación. 
                Historial de la conversación hasta ahora, ten en cuenta que esta en Santiago de Chile: 
                ${chatHistory.map(msg => `${msg.type === "user" ? "Turista" : "Bot"}: ${msg.message}`).join("\n")}
                Mensaje del turista: ${userInput}
            `);

            const responseText = result.response.text();  // Obtiene la respuesta de la IA

            // Agrega la respuesta del bot al historial de chat
            const botMessage: Message = { type: "bot", message: responseText };
            setChatHistory((prev) => [...prev, botMessage]);  // Actualiza el historial de chat
        } catch (error) {
            console.error("Error enviando mensaje:", error);  // Maneja errores en el envío
        } finally {
            setUserInput("");  // Limpia el campo de entrada del usuario
            setIsLoading(false);  // Cambia el estado de carga a "false"
        }
    };

    // Función para limpiar el historial de chat
    const clearChat = () => {
        setChatHistory([]);  // Limpia el historial de chat
    };

    // Retorna los datos y funciones necesarios para el componente de chat
    return {
        userInput,         // Entrada del usuario
        chatHistory,       // Historial del chat
        isLoading,         // Estado de carga
        handleUserInput,   // Función para manejar la entrada del usuario
        sendMessage,       // Función para enviar mensajes a Gemini
        clearChat,         // Función para limpiar el chat
    };
};
