import { applyStyle } from "./utils";

export const getStyledFontDimensions = (svgElement, options) => {

    const charWidths = {};

    let tempText = document.createElement("span");
    document.body.appendChild(tempText);

    //Apply any styling for correct sizing
    applyStyle(tempText, options.style);

    let i = 32;
    while (i < 127) {

        let char = String.fromCharCode(i);
        tempText.textContent = char;
        charWidths[char] = tempText.getBoundingClientRect().width;

        i++;
    }

    //Set textContent to get lineHeight and charachter width
    tempText.textContent = 'MW';
    const lineHeight = tempText.getBoundingClientRect().height;

    tempText.remove();
    return { lineHeight, charWidths };
}