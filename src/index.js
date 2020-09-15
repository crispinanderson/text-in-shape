import { renderText, renderGuides } from "./renderText";
import { createRenderData } from "./createRenderData";

const defaultOptions = {
    padding: 0,
    justify: 'top',
    align: 'center',
    lineJustify: false,
    style: {},
}

export const SVGTextInShape = (text, svgElement, userOptions = {}) => {

    const options = {
        ...defaultOptions,
        ...userOptions
    }

    const renderData = createRenderData(text, svgElement, options);
    renderText(svgElement, renderData, options);
    /* renderGuides(svgElement, renderData, options); */
}

export default SVGTextInShape;
