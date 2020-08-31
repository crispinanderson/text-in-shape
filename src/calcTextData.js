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
    let lineHeight = tempText.getBBox().height;
    tempText.textContent = '';


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

        if (i === 0) {
            tempText.textContent = paragraph[0]
            let minWidth = tempText.getBBox().width;
            tempText.textContent = '';
            lineData = calcLineData(context, lineHeight, bbox, yOffset, padding, minWidth, path)
        }
        else {
            //Do not pass a minChars length for subsequent paragraphs 
            lineData = calcLineData(context, lineHeight, bbox, yOffset, padding, null, path)
        }



        for (let j = 0; j < paragraph.length; j++) {

            if (lineData.y <= bbox.height - padding.bottom) {
                let word = paragraph[j];

                if (j !== 0) tempText.textContent += ' ';
                tempText.textContent += word;

                //If the paragraph will overrun the shape, split to a new line
                if (tempText.getBBox().width > lineData.width) {

                    tempText.textContent = tempText.textContent.replace(' ' + word, '')

                    //Store the line data
                    items.push({
                        ...lineData,
                        textWidth: tempText.getBBox().width,
                        textContent: tempText.textContent
                    })

                    //create a new line
                    tempText.textContent = j < paragraph.length - 1 ? word + ' ' : word;
                    yOffset += lineHeight;
                    lineData = { ...calcLineData(context, lineHeight, bbox, yOffset, padding) };

                }

                //Else the end of the paragraph is reached
                else if (j === paragraph.length - 1) {

                    //Store the line data
                    items.push({
                        ...lineData,
                        textWidth: tempText.getBBox().width,
                        textContent: tempText.textContent
                    })

                    //increase the lineOffset & reset the textContent
                    yOffset += lineHeight;
                    tempText.textContent = '';

                }
            }
            else {
                //If the whole text does not fit in the shape the append '...' to the end
                let lastLine = items[items.length - 1];

                //Add the punctuation
                tempText.textContent += '...';

                if (tempText.getBBox().width > lastLine.width) {
                    lastLine.textContent = lastLine.textContent.trim().replace(/\s(\w+)$/, '...')
                }
                else {
                    tempText.textContent = lastLine.textContent + '...';
                    lastLine.textContent = lastLine.textContent + '...';
                }

                lastLine.textWidth = tempText.getBBox().width;
                break;
            }

        }
    }

    tempText.remove();

    return items;
};

//Calculates the x, y position and width of each line from a given yOffset position
//Relies on context.isPointInPath to calculate
const calcLineData = (context, lineHeight, bbox, yOffset, padding, minWidth = 0, path) => {

    let xOffset = 0, wOffset = 0;

    const inPath = {
        topRight: false,
        topLeft: false,
        bottomRight: false,
        bottomLeft: false
    }

    if (yOffset + lineHeight <= bbox.height) {

        while ((!inPath.topLeft || !inPath.bottomLeft) && xOffset <= bbox.width) {
            if (path) {
                if (context.isPointInPath(path, bbox.x + xOffset, bbox.y + yOffset)) inPath.topLeft = true;
                if (context.isPointInPath(path, bbox.x + xOffset, bbox.y + yOffset + lineHeight)) inPath.bottomLeft = true;
            }
            else {
                if (context.isPointInPath(bbox.x + xOffset, bbox.y + yOffset)) inPath.topLeft = true;
                if (context.isPointInPath(bbox.x + xOffset, bbox.y + yOffset + lineHeight)) inPath.bottomLeft = true;
            }


            xOffset += 1;

        }

        while ((!inPath.topRight || !inPath.bottomRight) && wOffset >= 0 - bbox.width) {
            if (path) {
                if (context.isPointInPath(path, bbox.x + bbox.width + wOffset, bbox.y + yOffset)) inPath.topRight = true;
                if (context.isPointInPath(path, bbox.x + bbox.width + wOffset, bbox.y + yOffset + lineHeight)) inPath.bottomRight = true;
            }
            else {
                if (context.isPointInPath(bbox.x + bbox.width + wOffset, bbox.y + yOffset)) inPath.topRight = true;
                if (context.isPointInPath(bbox.x + bbox.width + wOffset, bbox.y + yOffset + lineHeight)) inPath.bottomRight = true;
            }


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

        //If all points could not be calculated, increment by 1x and retry
        else if (!inPath.topLeft || !inPath.topRight || !inPath.bottomRight || !inPath.bottomLeft) {
            nextLineOffset += 1;
            return calcLineData(context, lineHeight, bbox, nextLineOffset, padding, minWidth, path,);
        }



    }



    return {};

}



