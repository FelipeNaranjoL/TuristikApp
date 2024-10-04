// appLogic.ts
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Define el tipo Message
type Message = {
    type: "user" | "bot";
    message: string;
};

export const useChatbotLogic = (lugar: string) => { // Acepta 'lugar' como argumento
    const [userInput, setUserInput] = useState<string>("");
    const [chatHistory, setChatHistory] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Inicializa la API de Gemini
    const genAI = new GoogleGenerativeAI("AIzaSyCxmhyZ2LqDmuNfx-pbJxUEqO4S9xzrBUo");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Inicializa el chat con el historial vacío
    const chat = model.startChat({
        history: [], // Comenzamos con un historial vacío
    });

    // Función para manejar la entrada del usuario
    const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
    };

    // Función para enviar el mensaje del usuario a Gemini
    const sendMessage = async () => {
        if (userInput.trim() === "") return;

        setIsLoading(true);
        try {
            // Agrega el mensaje del usuario al historial de chat
            const userMessage: Message = { type: "user", message: userInput };
            setChatHistory((prev) => [...prev, userMessage]);

            // Envía el mensaje a la API con el historial de conversación y el lugar
            const result = await chat.sendMessage(`
        El usuario es un turista que está visitando ${lugar}. Ofrece información sobre restaurantes, bares, plazas, lugares de interés y datos históricos de ${lugar}.
        Responde de manera detallada y útil, y mantén el contexto de la conversación. 
        Historial de la conversación hasta ahora, ten en cuenta que esta en Santiago de Chile: 
        ${chatHistory.map(msg => `${msg.type === "user" ? "Turista" : "Bot"}: ${msg.message}`).join("\n")}
        Mensaje del turista: ${userInput}
      `);

            const responseText = result.response.text();

            // Agrega la respuesta del bot al historial de chat
            const botMessage: Message = { type: "bot", message: responseText };
            setChatHistory((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Error enviando mensaje:", error);
        } finally {
            setUserInput("");
            setIsLoading(false);
        }
    };

    // Función para limpiar el historial de chat
    const clearChat = () => {
        setChatHistory([]);
    };

    return {
        userInput,
        chatHistory,
        isLoading,
        handleUserInput,
        sendMessage,
        clearChat,
    };
};
