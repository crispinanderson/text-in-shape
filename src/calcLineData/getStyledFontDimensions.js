import { getSVGMasterLayer, applyStyle } from "../../utils";

export const getStyledFontDimensions = (svgElement, options) => {
    let svg = getSVGMasterLayer(svgElement);
    let tempText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    svg.appendChild(tempText);

    //Apply any styling for correct sizing
    applyStyle(tempText, options.style);


    //Set textContent to get lineHeight and charachter width
    tempText.textContent = 'Test';
    const lineHeight = tempText.getBBox().height;
    const charWidth = tempText.getBBox().width / tempText.textContent.length;
    tempText.textContent = '';
    tempText.remove();
    return { lineHeight, charWidth };
}