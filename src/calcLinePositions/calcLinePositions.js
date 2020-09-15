import { calcInPathPoints } from "./calcInPathPoints";


export const calcLinePositions = (args) => {

    const { context, svgElement, options, text, lineHeight, charWidth } = args;
    const bbox = svgElement.getBBox();
    const safetyMargin = 5;

    let padding = {
        top: options.paddingTop || options.padding,
        left: options.paddingLeft || options.padding || safetyMargin,
        bottom: options.paddingBottom || options.padding,
        right: options.paddingRight || options.padding || safetyMargin
    };

    let yOffset = padding.top || 0;
    let firstWord = text.substr(0, text.match(/\s/).index);
    let minWidth = firstWord.length * charWidth || 0;

    let linePositions = [];

    while (yOffset + lineHeight <= bbox.height) {
        let lineData = calcInPathPoints({ ...args, padding, bbox, minWidth, lineHeight, yOffset })
        yOffset = lineData.y + lineHeight;
        linePositions.push(lineData);
    }

    return linePositions;
}

export default calcLinePositions;