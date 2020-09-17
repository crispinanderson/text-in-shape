import { svgElementToCanvas, destroyCanvas } from "./svgElementToCanvas";
import { calcLineAlignment } from "./calcLineAlignment";
import { calcTextJustification } from "./calcTextJustification";
import { getLineHeight } from "./getStyledFontDimensions";
import { calcLinePositions } from "./calcLinePositions";
import { addTextContentToLineData } from "./addTextContentToLineData";

export const createRenderData = (text, svgElement, options) => {
    const context = svgElementToCanvas(svgElement);
    const fontDims = getLineHeight(svgElement, options);
    const lineData = calcLinePositions({ ...fontDims, context, svgElement, options, text });
    const lineDataWithText = addTextContentToLineData({ ...fontDims, text, lineData, options });
    const lineDataAligned = calcLineAlignment(options, lineDataWithText);
    const lineDataJustified = options.justifyText ? calcTextJustification(lineDataAligned) : lineDataAligned;
    destroyCanvas();

    return lineDataJustified;
} 