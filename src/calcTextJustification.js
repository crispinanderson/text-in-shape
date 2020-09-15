export const calcTextJustification = (options, lineData) => {
    if (options.justifyText) {
        return lineData.map((thisLine) => {
            return {
                ...thisLine,
                style: {
                    letterSpacing: (thisLine.width - thisLine.textWidth) / thisLine.textContent.length + 'px'
                }
            }
        })
    }
    return lineData
}