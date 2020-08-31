import { SVGElementToCanvas, destroyCanvas } from "./SVGElementToCanvas";
import { calcTextData } from "./calcTextData";
import { calcLineAlignment } from "./calcLineAlignment";
import { calcLineJustification } from "./calcLineJustification";

export const createRenderData = (text, SVGElement, options) => {
    const { context, path } = SVGElementToCanvas(SVGElement);
    const textData = calcTextData(text, SVGElement, context, options, path);
    const alignedTextData = textData.map((lineData) => calcLineAlignment(options, lineData));
    const justifiedText = options.lineJustify ? alignedTextData.map((lineData) => calcLineJustification(options, lineData)) : alignedTextData;
    destroyCanvas();

    return justifiedText;
} 