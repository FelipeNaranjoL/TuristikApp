import React from "react";
import { useChatbotLogic } from "../hooks/useChatbotLogic";
import ChatHistory from "./ChatHistory";
import Loading from "./Loading";

interface ChatProps {
    lugar: string; // Lugar que se pasa como prop
}

const Chat: React.FC<ChatProps> = ({ lugar }) => {
    const { userInput, chatHistory, isLoading, handleUserInput, sendMessage, clearChat } = useChatbotLogic(lugar);

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Chatbot Turístico</h2>
                <div className="bg-gray-100 rounded-lg p-3 mb-4 h-64 overflow-y-auto">
                    <ChatHistory chatHistory={chatHistory} />
                    <Loading isLoading={isLoading} />
                </div>
                <div className="flex space-x-2 mb-2">
                    <input
                        type="text"
                        value={userInput}
                        onChange={handleUserInput}
                        placeholder="Escribe tu mensaje..."
                        className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        onClick={clearChat}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                        Limpiar Chat
                    </button>
                    <button
                        onClick={sendMessage}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={isLoading}
                    >
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
