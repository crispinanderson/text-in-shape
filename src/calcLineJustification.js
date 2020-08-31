export const calcLineJustification = (options, lineData) => {
    if (options.justifyText) {
        return {
            ...lineData,
            style: {
                letterSpacing: (lineData.width - lineData.textWidth) / lineData.textContent.length + 'px'
            }
        }
    }
    return lineData
}