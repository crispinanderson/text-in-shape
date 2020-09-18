import { calcInPathPoints } from "./calcInPathPoints";
import { calcSentenceWidth } from "../utils";



export const calcLinePositions = (args) => {

    const { context, svgElement, options, text, lineHeight, charWidths } = args;
    const bbox = svgElement.getBBox();
    const safetyMargin = 0;

    let padding = {
        top: options.paddingTop || options.padding,
        left: options.paddingLeft + safetyMargin || options.padding + safetyMargin || safetyMargin,
        bottom: options.paddingBottom || options.padding,
        right: options.paddingRight + safetyMargin || options.padding + safetyMargin || safetyMargin
    };

    let yOffset = padding.top || 0;
    let firstWord = text.substr(0, text.match(/\s/).index);
    let minWidth = calcSentenceWidth(firstWord, options);

    let linePositions = [];

    while (yOffset + lineHeight + padding.bottom <= bbox.height) {
        let lineData = calcInPathPoints({ ...args, padding, bbox, minWidth, lineHeight, yOffset })
        yOffset = lineData.y + lineHeight;
        linePositions.push(lineData);
    }

    return linePositions;
}

export default calcLinePositions;