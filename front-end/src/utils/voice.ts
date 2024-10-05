let isInitialized = false; // Variable para evitar múltiples inicializaciones

export function initializeVoice() {
    if (isInitialized) return; // Si ya está inicializado, no vuelve a hacerlo

    let voices: SpeechSynthesisVoice[] = []; // Almacena las voces disponibles
    const utterance = new SpeechSynthesisUtterance(); // Objeto para manejar el habla

    // Función para convertir el texto en voz
    function textToSpeak(container: HTMLElement) {
        utterance.text = container.textContent || ''; // Obtiene el contenido de texto del contenedor
        window.speechSynthesis.speak(utterance); // Reproduce el texto usando la síntesis de voz
    }

    // Espera hasta que el DOM esté completamente cargado
    document.addEventListener("DOMContentLoaded", () => {
        // Evento que se dispara cuando cambian las voces del sistema
        window.speechSynthesis.addEventListener("voiceschanged", () => {
            voices = window.speechSynthesis.getVoices(); // Obtiene las voces disponibles
            // console.log(voices); // Opción para mostrar las voces en la consola

            voices.forEach((el) => {
                const option = document.createElement("option"); // Crea un nuevo elemento option
                option.value = el.name; // Establece el nombre de la voz como valor
                option.textContent = `${el.name} - ${el.lang}`; // Muestra el nombre y el idioma de la voz
                // Se puede añadir esta opción a un elemento select si es necesario
            });
        });
    });

    // Añadir un event listener a los botones una única vez
    document.addEventListener("click", (e) => {
        if ((e.target as HTMLElement).closest(".btn-voice")) { // Verifica si se ha hecho click en el botón de voz
            const container = (e.target as HTMLElement).closest(".experience-slide-text") as HTMLElement; // Obtiene el contenedor más cercano con el texto
            textToSpeak(container); // Convierte el texto del contenedor en voz
        }
    });

    isInitialized = true; // Marcar como inicializado para evitar múltiples inicializaciones
}
