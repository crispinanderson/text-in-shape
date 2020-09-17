export const getSVGMasterLayer = (svgElement) => {
    return Array.from(document.querySelectorAll('svg'))
        .filter((elem) => elem.innerHTML.includes(`id="${svgElement.id}"`))[0]
}

export const applyStyle = (elem, style) => {
    Object.entries(style).forEach(([key, value]) => {
        elem.style[key] = value
    })
}

export const calcSentenceWidth = (text, options) => {
    let tempText = document.createElement("span");
    document.body.appendChild(tempText);

    //Apply any styling for correct sizing
    applyStyle(tempText, options.style);

    //Set textContent to get lineHeight and charachter width
    tempText.textContent = text;
    const width = tempText.getBoundingClientRect().width;

    tempText.remove();

    return width;

}