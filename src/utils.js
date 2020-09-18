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

    //Apply any styling for correct sizing --> whiteSpace: nowrap, stop text wrapping which could report incorrect width
    applyStyle(tempText, { ...options.style, whiteSpace: 'nowrap' });

    //Set textContent to get lineHeight and charachter width
    tempText.textContent = text;
    const width = tempText.getBoundingClientRect().width;

    tempText.remove();

    return width;

}

export const getLineHeight = (options) => {

    let tempText = document.createElement("span");
    document.body.appendChild(tempText);

    //Apply any styling for correct sizing
    applyStyle(tempText, options.style);

    //MW are typically the largest chars
    tempText.textContent = 'MW';
    const lineHeight = tempText.getBoundingClientRect().height;

    tempText.remove();
    return lineHeight;
}