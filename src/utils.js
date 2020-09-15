export const getSVGMasterLayer = (svgElement) => {
    return Array.from(document.querySelectorAll('svg'))
        .filter((elem) => elem.innerHTML.includes(`id="${svgElement.id}"`))[0]
}

export const applyStyle = (elem, style) => {
    Object.entries(style).forEach(([key, value]) => {
        elem.style[key] = value
    })
}

export const calcSentenceWidth = (text, charWidths) => {
    return text.split('').reduce((acc, c) => {
        let charWidth = charWidths[c] || charWidths[0];
        return acc + charWidth
    }, 0)
}