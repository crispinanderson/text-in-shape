import { svgElementToCanvas, destroyCanvas } from "./svgElementToCanvas";
import { calcLineAlignment } from "./calcLineAlignment";
import { calcTextJustification } from "./calcTextJustification";
import { calcLinePositions } from "./calcLinePositions";
import { addTextContentToLineData } from "./addTextContentToLineData";
import { getLineHeight } from './utils';

export const createRenderData = (text, svgElement, options) => {
    const context = svgElementToCanvas(svgElement);
    const lineHeight = getLineHeight(options);
    const lineData = calcLinePositions({ lineHeight, context, svgElement, options, text });
    const lineDataWithText = addTextContentToLineData({ lineHeight, text, lineData, options });
    const lineDataJustified = options.justifyText ? calcTextJustification(options, lineDataWithText) : lineDataWithText;
    const lineDataAligned = options.justifyText ? lineDataJustified : calcLineAlignment(options, lineDataJustified);
    destroyCanvas();

    return lineDataAligned;
} 