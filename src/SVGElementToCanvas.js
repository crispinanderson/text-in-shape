import { getSVGMasterLayer } from "./utils";


export const newCanvas = (SVGElement) => {
    const canvas = document.createElement('canvas');
    const svgMaster = getSVGMasterLayer(SVGElement);
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

/* const drawPath = (SVGElement, context) => {
    const d = SVGElement.getAttribute("d").trim(' ');
    const path = new Path2D(d);
    context.closePath(path);
    context.fillStyle = "#FF0000";
    context.fill(path);

    return { context, path };
} */


export const drawPolygon = (SVGElement, context) => {

    //Get the polygon points attribute and split to an array
    const p = SVGElement.getAttribute("points").trim(' ').split(" ").map((point) => point.trim(' '));
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

export const drawRect = (SVGElement, context) => {

    const bbox = SVGElement.getBBox();

    const x = +bbox.x;
    const y = +bbox.y;
    const h = +bbox.height;
    const w = +bbox.width;

    context.rect(x, y, w, h);
    context.fillStyle = "#FF0000";
    context.fill();

    return context;
};

export const drawCircle = (SVGElement, context) => {

    const x = +SVGElement.getAttribute("cx");
    const y = +SVGElement.getAttribute("cy");
    const r = +SVGElement.getAttribute("r");

    context.arc(x, y, r, 0, 2 * Math.PI);
    context.fillStyle = "#FF0000";
    context.fill();

    return context;

};

export const SVGElementToCanvas = (SVGElement) => {
    const context = newCanvas(SVGElement);

    switch (SVGElement.tagName) {

        /* case 'path':
            return drawPath(SVGElement, context); */

        case 'polygon':
            return drawPolygon(SVGElement, context);

        case 'rect':
            return drawRect(SVGElement, context);

        case 'circle':
            return drawCircle(SVGElement, context);

        default: throw 'svg-text-in-shape only supports SVG circle, rect & polygon'

    }

}


