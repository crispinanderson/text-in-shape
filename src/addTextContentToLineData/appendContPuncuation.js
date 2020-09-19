import { calcSentenceWidth } from "../utils";


export const appendContPuncuation = (lineData, options) => {
    let appended = { ...lineData };

    //Add the punctuation
    appended.textContent = !appended.textContent.includes('...') ? appended.textContent += '...' : appended.textContent;
    appended.textWidth = calcSentenceWidth(appended.textContent, options);

    //If the length would overrun the container with the punction added, remove the last word
    if (calcSentenceWidth(appended.textContent, options) > appended.width) {

        appended.textContent = appended.textContent.trim().replace(/\w([^\w+]*)$/, '');
        appended.textContent = appended.textContent.trim().replace(/\s(\w+)$/, '...');
        appended.textWidth = calcSentenceWidth(appended.textContent, options);

        //Recursively test theat the line does not overrun - remove words as neccesary
        return appendContPuncuation(appended, options)
    }

    return appended;
}