import { calcSentenceWidth } from "./utils";

export const calcTextJustification = (options, lineData) => {
    if (options.justifyText) {
        return lineData.map((thisLine) => {
            return {
                ...thisLine,
                textWidth: calcSentenceWidth(thisLine.textContent, options),
                style: {
                    ...thisLine.style,
                    letterSpacing: (thisLine.width - thisLine.textWidth) / thisLine.textContent.length + 'px'
                }
            }
        })
    }
    return lineData
}