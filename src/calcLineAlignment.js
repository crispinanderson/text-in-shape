export const calcLineAlignment = (options, lineData) => {
    switch (options.align) {
        case 'center':
            return { ...lineData, x: lineData.x + (lineData.width - lineData.textWidth) / 2 };
        case 'right':
            return { ...lineData, x: lineData.x + lineData.width - lineData.textWidth };
        default:
            return lineData
    }

}