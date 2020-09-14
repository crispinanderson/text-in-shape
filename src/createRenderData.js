import { svgElementToCanvas, destroyCanvas } from "./svgElementToCanvas";
import { calcLineAlignment } from "./calcLineAlignment";
import { calcLineJustification } from "./calcLineJustification";
import { getStyledFontDimensions } from "./getStyledFontDimensions";
import { calcLinePositions } from "./calcLineData";

export const createRenderData = (text, svgElement, options) => {
    const context = svgElementToCanvas(svgElement);
    const fontDims = getStyledFontDimensions(svgElement, options);
    const lineData = calcLinePositions({ ...fontDims, context, svgElement, options, text });
    const lineDataWithText = addTextContentToLineData({ ...fontDims, text, lineData });
    const lineDataAligned = calcLineAlignment(options, thisLine);
    const lineDataJustified = options.lineJustify ? lineDataAligned.map((thisLine) => calcLineJustification(options, thisLine)) : lineDataAligned;
    destroyCanvas();

    return lineDataJustified;
} 