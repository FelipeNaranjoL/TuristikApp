let isInitialized = false;

export function initializeVoice() {
    if (isInitialized) return;

    //let voices: SpeechSynthesisVoice[] = [];
    const utterance = new SpeechSynthesisUtterance();

    function textToSpeak(container: HTMLElement) {
        utterance.text = container.textContent || '';
        window.speechSynthesis.speak(utterance);
    }

    document.addEventListener("DOMContentLoaded", () => {
        window.speechSynthesis.addEventListener("voiceschanged", () => {
            //voices = window.speechSynthesis.getVoices();
        });
    });

    document.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        if (target.closest(".btn-voice")) {
            const container = target.closest("div")?.querySelector("p") as HTMLElement;
            if (container) {
                textToSpeak(container);
            }
        }
    });

    isInitialized = true;
}
