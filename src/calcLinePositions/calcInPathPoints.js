//Calculates the x, y position and width of each line from a given yOffset position
//Relies on context.isPointInPath to calculate - must be calcualted in the DOM - SORRY!
export const calcInPathPoints = (args) => {

    const { context, lineHeight, bbox, yOffset, padding, minWidth } = args;
    let xOffset = 0, wOffset = 0;

    const inPath = {
        topRight: false,
        topLeft: false,
        bottomRight: false,
        bottomLeft: false
    }

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

    let lineData = {
        x: xOffset + padding.left,
        y: yOffset,
        width: bbox.width + wOffset - xOffset - padding.right,
        height: lineHeight
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
            return calcInPathPoints({ ...args, yOffset: yOffset + 1 });
        }

    }

    //Else If all points could not be calculated, increment by 1px and retry
    else if (!inPath.topLeft || !inPath.topRight || !inPath.bottomRight || !inPath.bottomLeft) {
        return calcInPathPoints({ ...args, yOffset: yOffset + 1 });
    }


}