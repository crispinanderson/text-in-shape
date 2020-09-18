import { getSVGMasterLayer } from "./utils";


export const newCanvas = (svgElement) => {
    const canvas = document.createElement('canvas');
    const svgMaster = getSVGMasterLayer(svgElement);
    canvas.width = svgMaster.getBBox().width;
    canvas.height = svgMaster.getBBox().height;
    const foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    foreignObject.id = 'temp_canvas';
    foreignObject.style.width = svgMaster.getBBox().width;
    foreignObject.style.height = svgMaster.getBBox().height;
    foreignObject.appendChild(canvas);
    svgMaster.appendChild(foreignObject);
    return canvas.getContext('2d');
}

export const destroyCanvas = () => {
    document.getElementById('temp_canvas').remove()
}

/* const drawPath = (svgElement, context) => {
    const d = svgElement.getAttribute("d").trim(' ');
    const path = new Path2D(d);
    context.closePath(path);
    context.fillStyle = "#FF0000";
    context.fill(path);

    return { context, path };
} */


export const drawPolygon = (svgElement, context) => {

    //Get the polygon points attribute and split to an array
    const p = svgElement.getAttribute("points").trim(' ').split(" ").map((point) => point.trim(' '));
    let pos;

    //Loop through each point pair [x, y]
    for (let i = 0; i < p.length; i++) {

        //Split x and y values
        pos = p[i].split(",").map((p) => +p);

        if (pos[0] !== NaN) {
            if (i === 0) {
                context.beginPath();
                context.moveTo(pos[0], pos[1]);
            }
            else {
                context.lineTo(pos[0], pos[1]);
            }
        }
        else {
            throw 'Something went wrong when converting Polygon received ' + pos[0] + ', ' + pos[1];
        }

    }

    context.closePath();
    context.fillStyle = "#FF0000";
    context.fill();

    return context;
};

export const drawRect = (svgElement, context) => {

    const bbox = svgElement.getBBox();

    const x = +bbox.x;
    const y = +bbox.y;
    const h = +bbox.height;
    const w = +bbox.width;

    context.rect(x, y, w, h);
    context.fillStyle = "#FF0000";
    context.fill();

    return context;
};

export const drawCircle = (svgElement, context) => {

    const x = +svgElement.getAttribute("cx");
    const y = +svgElement.getAttribute("cy");
    const r = +svgElement.getAttribute("r");

    context.arc(x, y, r, 0, 2 * Math.PI);
    context.fillStyle = "#FF0000";
    context.fill();

    return context;

};

export const svgElementToCanvas = (svgElement) => {
    const context = newCanvas(svgElement);

    switch (svgElement.tagName) {

        /* case 'path':
            return drawPath(svgElement, context); */

        case 'polygon':
            return drawPolygon(svgElement, context);

        case 'rect':
            return drawRect(svgElement, context);

        case 'circle':
            return drawCircle(svgElement, context);

        default: throw 'svg-text-in-shape only supports SVG circle, rect & polygon'

    }

}


