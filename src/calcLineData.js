import { calcInPathPoints } from "./calcInPathPoints";


export const calcLineData = ({ context, svgElement, options, text, lineHeight, charWidth }) => {

    const bbox = svgElement.getBBox();

    let yOffset = 0;
    let padding = {
        top: options.paddingTop || options.padding,
        left: options.paddingLeft || options.padding,
        bottom: options.paddingBottom || options.padding,
        right: options.paddingRight || options.padding
    };

    let yOffset = padding.top || 0;
    let firstWord = text.substr(0, text.match(/\s/).index);
    let minWidth = firstWord.length * charWidth || 0;

    let linePositions = [];

    while (yOffset + lineHeight <= bbox.height) {
        let lineData = calcInPathPoints({ ...arguments, padding, bbox, minWidth, lineHeight })
        yOffset = lineData.y;
        linePositions.push(lineData);
    }

    return linePositions;
}