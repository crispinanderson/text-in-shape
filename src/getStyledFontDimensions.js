import { getSVGMasterLayer, applyStyle } from "./utils";

export const getStyledFontDimensions = (svgElement, options) => {

    let tempText = document.createElement("span");
    document.body.appendChild(tempText);

    //Apply any styling for correct sizing
    applyStyle(tempText, options.style);


    //Set textContent to get lineHeight and charachter width
    tempText.textContent = 'Test';
    const lineHeight = tempText.getBoundingClientRect().height;
    const charWidth = tempText.getBoundingClientRect().width / tempText.textContent.length;
    tempText.remove();

    return { lineHeight, charWidth };
}