import { applyStyle } from "./utils";

export const getLineHeight = (svgElement, options) => {

    let tempText = document.createElement("span");
    document.body.appendChild(tempText);

    //Apply any styling for correct sizing
    applyStyle(tempText, options.style);

    //MW are typically the largest chars
    tempText.textContent = 'MW';
    const lineHeight = tempText.getBoundingClientRect().height;

    tempText.remove();
    return { lineHeight };
}