export const appendContPuncuation = (lineData) => {
    let appended = { ...lineData };
    const charWidth = appended.textWidth / appended.textContent.length;

    //Add the punctuation
    const puncuatedText = !appended.textContent.includes('...') ? appended.textContent += '...' : appended.textContent;

    //If the length would overrun the container with the punction added, remove the last word
    if (puncuatedText.length * charWidth > appended.width) {
        appended.textContent = appended.textContent.trim().replace(/\w([^\w+]*)$/, '');
        appended.textContent = appended.textContent.trim().replace(/\s(\w+)$/, '...');
        appended.textWidth = puncuatedText.length * charWidth;

        //Recursively test theat the line does not overrun - remove words as neccesary
        return appendContPuncuation(appended)
    }

    return appended;
}