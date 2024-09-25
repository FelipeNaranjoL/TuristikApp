export const cambiarTamanoFuente = (incremento: number, selector: string) => {
    const elementos = document.querySelectorAll(selector);
    elementos.forEach((elemento: Element) => {
        const currentFontSize = window.getComputedStyle(elemento).fontSize;
        const newFontSize = parseFloat(currentFontSize) + incremento;
        (elemento as HTMLElement).style.fontSize = `${newFontSize}px`;
    });
};
