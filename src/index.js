import { renderText } from "./renderText";
import { createRenderData } from "./createRenderData";

const defaultOptions = {
    padding: 0,
    justify: 'top',
    align: 'center',
    lineJustify: false,
    style: {},
}

export const textInShape = (text, svgElement, userOptions = {}) => {

    const options = {
        ...defaultOptions,
        ...userOptions
    }

    const renderData = createRenderData(text, svgElement, options);
    renderText(svgElement, renderData, options);

}

export default textInShape;
