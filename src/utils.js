export const getSVGMasterLayer = (SVGElement) => {
    return Array.from(document.querySelectorAll('svg'))
        .filter((elem) => elem.innerHTML.includes(`id="${SVGElement.id}"`))[0]
}

export const applyStyle = (elem, style) => {
    Object.entries(style).forEach(([key, value]) => {
        elem.style[key] = value
    })
}