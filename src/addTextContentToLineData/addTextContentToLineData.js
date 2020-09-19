

import { appendContPuncuation } from './appendContPuncuation';
import { calcSentenceWidth } from '../utils';

export const addTextContentToLineData = ({ text, lineData, options }) => {

    const paragraphs = text.length ? text.split('\n').map((str) => str.trim(' ')).map((txt) => txt.split(' ')) : [];
    let p = 0;
    let w = 0;

    let padding = {
        top: options.paddingTop || options.padding,
        left: options.paddingLeft || options.padding,
        bottom: options.paddingBottom || options.padding,
        right: options.paddingRight || options.padding
    };


    //Map a text content & textWidth to each line and filter out unused line data
    return lineData.map((thisLine, lineIndex) => {
        let textContent = '';

        if (p < paragraphs.length) {

            let words = paragraphs[p];

            while (w < words.length) {

                let word = words[w];

                //Add a space before each word except a line first word
                textContent += textContent.length > 0 ? ' ' + word : word;

                //If the tempText is longer than thisLine width
                if (calcSentenceWidth(textContent, options) > thisLine.width) {
                    //remove the last word addded
                    textContent = textContent.replace(' ' + word, '');

                    //When on the last line if all text does not fit then append with '...' punctuation
                    if (lineIndex === lineData.length - 1) {
                        return appendContPuncuation({ ...thisLine, textContent, textWidth: calcSentenceWidth(textContent, { ...options, padding }) }, { ...options, padding })
                    }

                    return { ...thisLine, textContent, textWidth: calcSentenceWidth(textContent, { ...options, padding }) }
                }

                //If all the words have been added to the textContent - move to next paragraph
                if (w === words.length - 1) {
                    //Reset word index and inc to next paragraph
                    w = 0;
                    p++;

                    //Add the tempTextContent to the lineData
                    return { ...thisLine, textContent, textWidth: calcSentenceWidth(textContent, { ...options, padding }) }
                }



                //Select the next word
                w++;



            }

        }

        //Default return w empty textContent
        return null;

    }).filter((data) => data !== null)

}


export default addTextContentToLineData;




