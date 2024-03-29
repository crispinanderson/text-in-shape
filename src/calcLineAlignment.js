export const calcLineAlignment = (options, lineData) => {
    switch (options.align) {
        case 'center':
            return lineData.map((thisLine) => {
                return { ...thisLine, x: thisLine.x + ((thisLine.width - thisLine.textWidth) / 2) }
            });
        case 'right':
            return lineData.map((thisLine) => {
                return { ...thisLine, x: thisLine.x + thisLine.width - thisLine.textWidth }
            });
        default:
            return lineData
    }

}