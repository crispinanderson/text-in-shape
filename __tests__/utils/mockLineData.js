
export const mockLineData = ({ length = 20, width = 500, lineHeight = 55, options = {} }) => {
    let lineData = Array(length).fill({
        y: options && options.padding ? options.padding.top || 0 : 0,
        x: 0,
        width,
        height: lineHeight
    });
    lineData.forEach((l, i) => {
        lineData[i] = {
            ...l,
            y: i > 0 ? lineData[i - 1].y + lineHeight : 0
        }
    });

    return lineData;
}

export default mockLineData;