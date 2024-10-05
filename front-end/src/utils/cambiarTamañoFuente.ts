// Función para cambiar el tamaño de la fuente de los elementos seleccionados
export const cambiarTamanoFuente = (incremento: number, selector: string) => {
    // Selecciona todos los elementos que coincidan con el selector
    const elementos = document.querySelectorAll(selector);

    // Itera sobre cada elemento encontrado
    elementos.forEach((elemento: Element) => {
        // Obtiene el tamaño de fuente actual del elemento
        const currentFontSize = window.getComputedStyle(elemento).fontSize;

        // Calcula el nuevo tamaño de fuente sumando el incremento al tamaño actual
        const newFontSize = parseFloat(currentFontSize) + incremento;

        // Aplica el nuevo tamaño de fuente al estilo del elemento
        (elemento as HTMLElement).style.fontSize = `${newFontSize}px`;
    });
};
