import { getSVGMasterLayer, applyStyle } from "./utils";


export const calcTextData = (text, SVGElement, context, options, path) => {

    const items = [];
    const bbox = SVGElement.getBBox();

    //creates a 2d array of lines -> words
    const paragraphs = text.split('\n').map((str) => str.trim(' ')).map((txt) => txt.split(' '));
    let svg = getSVGMasterLayer(SVGElement);
    let tempText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    svg.appendChild(tempText);

    //Apply any styling for correct sizing
    applyStyle(tempText, options.style);


    //Set textContent to get lineHeight and remove
    tempText.textContent = 'Test';
    const lineHeight = tempText.getBBox().height;
    const charWidth = tempText.getBBox().width / tempText.textContent.length;
    tempText.textContent = '';
    tempText.remove();


    let padding = {
        top: options.paddingTop || options.padding,
        left: options.paddingLeft || options.padding,
        bottom: options.paddingBottom || options.padding,
        right: options.paddingRight || options.padding
    };

    let yOffset = padding.top;

    for (let i = 0; i < paragraphs.length; i++) {
        let lineData;
        let paragraph = paragraphs[i];
        let tempTextStore = '';

        //Ensure the first paragraph/line can display the entire first word
        if (i === 0) {
            tempTextStore += ' ' + paragraph[0];
            let minWidth = tempTextStore.length * charWidth;
            tempTextStore = '';
            lineData = calcLineData(context, lineHeight, bbox, yOffset, padding, minWidth, path)
        }
        else {
            //Do not pass a minChars length for subsequent paragraphs 
            lineData = calcLineData(context, lineHeight, bbox, yOffset, padding, null, path)
        }

        if (lineData.y <= bbox.height - padding.bottom) {

            for (let j = 0; j < paragraph.length; j++) {

                if (lineData.y <= bbox.height - padding.bottom) {
                    let word = paragraph[j];

                    //Add a space before each word except a sentence first
                    if (j !== 0) {
                        tempTextStore += ' ';
                    }

                    tempTextStore += word;

                    //If the paragraph will overrun the shape, split to a new line
                    if (tempTextStore.length * charWidth > lineData.width) {

                        tempTextStore = tempTextStore.replace(' ' + word, '')

                        //Store the line data
                        items.push({
                            ...lineData,
                            textWidth: tempTextStore.length * charWidth,
                            textContent: tempTextStore
                        })

                        //create a new line
                        tempTextStore = word//j < paragraph.length - 1 ? word + ' ' : word;
                        yOffset = lineData.y;
                        lineData = { ...calcLineData(context, lineHeight, bbox, yOffset, padding) };


                    }

                    //Else the end of the paragraph is reached
                    else if (j === paragraph.length - 1) {

                        //Store the line data
                        items.push({
                            ...lineData,
                            textWidth: tempTextStore.length * charWidth,
                            textContent: tempTextStore
                        })

                        //increase the lineOffset & reset the tempTextStore
                        yOffset = lineData.y;
                        tempTextStore = '';
                    }
                }
                else {
                    break;
                }
            }


        }

        else {
            //If the whole text does not fit in the shape the append '...' to the end
            let lastLine = items[items.length - 1];

            function addContPunctuation(data) {
                const edited = { ...data }
                //Add the punctuation
                const puncTextStore = !edited.textContent.includes('...') ? edited.textContent += '...' : edited.textContent;

                if (puncTextStore.length * charWidth > edited.width) {
                    edited.textContent = edited.textContent.trim().replace(/\w([^\w+]*)$/, '');
                    edited.textContent = edited.textContent.trim().replace(/\s(\w+)$/, '...');
                    edited.textWidth = puncTextStore.length * charWidth;
                    return addContPunctuation(edited)
                }

                return edited;
            }

            items[items.length - 1] = addContPunctuation(lastLine);
            break;
        }


    }

    return items;
};

//Calculates the x, y position and width of each line from a given yOffset position
//Relies on context.isPointInPath to calculate
const calcLineData = (context, lineHeight, bbox, yOffset, padding, minWidth = 0) => {

    let xOffset = 0, wOffset = 0;

    const inPath = {
        topRight: false,
        topLeft: false,
        bottomRight: false,
        bottomLeft: false
    }

    if (yOffset + lineHeight <= bbox.height) {

        while ((!inPath.topLeft || !inPath.bottomLeft) && xOffset <= bbox.width) {
            if (context.isPointInPath(bbox.x + xOffset, bbox.y + yOffset)) inPath.topLeft = true;
            if (context.isPointInPath(bbox.x + xOffset, bbox.y + yOffset + lineHeight)) inPath.bottomLeft = true;
            xOffset += 1;

        }

        while ((!inPath.topRight || !inPath.bottomRight) && wOffset >= 0 - bbox.width) {
            if (context.isPointInPath(bbox.x + bbox.width + wOffset, bbox.y + yOffset)) inPath.topRight = true;
            if (context.isPointInPath(bbox.x + bbox.width + wOffset, bbox.y + yOffset + lineHeight)) inPath.bottomRight = true;
            wOffset -= 1;

        }

        let nextLineOffset = yOffset;

        let lineData = {
            x: xOffset + padding.left,
            y: yOffset + lineHeight,
            width: bbox.width + wOffset - xOffset - padding.right,
            height: lineHeight,
            minWidth
        }



        //Calculate if the lineData satisfies minWidth and all corner points can be calculated
        //If all points are calculated
        if (inPath.topLeft && inPath.topRight && inPath.bottomRight && inPath.bottomLeft) {

            //If a minWidth is passed and the line is above this value 
            //then the yOffset does not increment and we return the calculated lineData
            if (lineData.width >= minWidth) {
                return lineData;
            }
            else {
                //Else increment the yOffset by 1px and re-calculate
                nextLineOffset += 1;
                return calcLineData(context, lineHeight, bbox, nextLineOffset, padding, minWidth, path);
            }

        }

        //Else If all points could not be calculated, increment by 1px and retry
        else if (!inPath.topLeft || !inPath.topRight || !inPath.bottomRight || !inPath.bottomLeft) {
            nextLineOffset += 1;
            return calcLineData(context, lineHeight, bbox, nextLineOffset, padding, minWidth, path);
        }



    }



    return {};

}



