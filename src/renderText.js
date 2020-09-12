import { applyStyle } from "./utils";

export const renderText = (SVGElement, renderData, options) => {


    const bbox = SVGElement.getBBox();
    const parent = SVGElement.parentNode;
    const margin = {
        y: +window.getComputedStyle(document.body).marginTop.replace('px', ''),
        x: +window.getComputedStyle(document.body).marginLeft.replace('px', '')
    }

    const textGrp = document.createElementNS("http://www.w3.org/2000/svg", "text");
    applyStyle(textGrp, options.style)

    const svgGrp = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgGrp.style.transform = `matrix(1, 0, 0, 1, ${bbox.x - margin.x}, ${bbox.y - margin.y} )`;
    svgGrp.appendChild(textGrp);

    renderData.forEach((lineData) => {
        const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        tspan.setAttribute('x', lineData.x);
        tspan.setAttribute('y', lineData.y);
        tspan.textContent = lineData.textContent;

        if (lineData.style) {
            Object.entries(lineData.style).forEach(([key, value]) => {
                tspan.style[key] = value
            })
        }

        textGrp.appendChild(tspan)
    })

    parent.appendChild(svgGrp)
}

