import { renderText } from "./renderText";
import { createRenderData } from "./createRenderData";

const defaultOptions = {
    padding: 0,
    justify: 'top',
    align: 'center',
    lineJustify: false,
    style: {},
}

export const SVGTextInShape = (text, SVGElement, userOptions = {}) => {

    const options = {
        ...defaultOptions,
        ...userOptions
    }

    const renderData = createRenderData(text, SVGElement, options);
    renderText(SVGElement, renderData, options);
}

export default SVGTextInShape;
