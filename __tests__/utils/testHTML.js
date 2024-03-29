export const testHTML = `<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>svg-text-in-shape - simple tool to wrap text in a shape</title>
</head>

<body>
    <div id="root">
        <svg id="svg_master" viewBox="0 0 1400 1500">
            <polygon id="polygon" fill="#FFFCD7" stroke="black" stroke-width="4px"
                points="299.7,0 599.4,217.7 484.9,570 114.5,570 0,217.7 " />

            <rect id="rect" x="50" y="700" width="600" height="600" fill="#FFFCD7" stroke="black" stroke-width="4px" />

            <circle id="circle" cx="1000" cy="320" r="300" fill="#FFFCD7" stroke="black" stroke-width="4px" />
            <path id="path" fill="#FEFBD9" stroke="#000000" stroke-width="4"
                d="M788.4,1259.1l-67.2-3.1l165.5-587.3l434.5,473.3l-146.5,90 c-158.2,0-286.2,56.8-286.2,127.1C833.1,1359.1,788.4,1314.3,788.4,1259.1z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1"
            x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512"
            xml:space="preserve">
            <g>
                <g>
                    <g>
                        <path
                            d="M459.5,479.9c-9.8,5.2-18.2,9.7-35.9,9.8c81.2-258.8,90.8-188.6,0.7-237c-8.7-89.6,21.8-147-51.4-141.4     c-0.4-92.8,14-61.4-105.7-66.8V0h-22.3v44.5c-129.5,2.9-102.8-19-105.7,66.8c-51.9-3.3-51,24.3-50.1,60.2     c-1.4,36.8,2.9,86.1-1.8,81.4c-94.4,48.1-75.6-15,1.2,236.8c-38.4-0.9-40-22.6-82.9-22.3v22.3c23.1-0.1,32.9,8.7,46,14.6     c31.5,15.3,69.9,5.4,89.6-7.5C194.4,473,210.3,513,252.7,512c41.2,1.3,46.5-16.8,75.3-21.5c17.5-2.6,34,1.5,42.7,6.4     c76.7,40.4,95-9.8,135.7-7.1v-22.3C482.8,467.5,470.4,474.1,459.5,479.9z" />
                        <polygon fill="#FFFFFF" points="464.9,295.4 456.9,319.4 267.1,232.2 267.1,206.4    " />
                        <rect x="161.4" y="66.8" fill="#FFFFFF" width="189.2" height="44.5" />
                        <path fill="#FFFFFF"
                            d="M111.3,144.7c-1.8-20.6,65.6-7.8,86.4-11.1c92.4,0,153.2,0,190,0c18.6,1.5,11.7,14,13,33.9     c0,28.9,0,74.5,0,74.6l-140.1-63.1c-2.9-1.3-6.2-1.3-9.1,0l-140.1,63.1L111.3,144.7L111.3,144.7z" />
                        <polygon fill="#FFFFFF" points="47.1,295.4 244.9,206.4 244.9,232.2 55.1,319.4    " />
                        <path id="hull" fill="#FFFFFF"
                            d="M401.1,486.6c-96.6-48.8-95.1,9-154,2.7c-11-1.1-16.9-3.9-24.3-7.6     c-80.2-43.2-112.2,25.1-114.6-3c-10.3-31.6-48.1-143.1-45.9-138.2c6-2.7,182.4-83.8,182.5-83.9c-0.1,0,21.9,0,22.3,0l182.7,83.9     L401.1,486.6z" />
                        <rect x="133.6" y="150.3" width="244.9" height="22.3" />
                        <rect x="356.2" y="183.7" width="22.3" height="22.3" />
                        <rect x="133.6" y="183.7" width="22.3" height="22.3" />
                        <rect x="244.9" y="77.9" width="22.3" height="22.3" />
                        <rect x="278.3" y="77.9" width="22.3" height="22.3" />
                        <rect x="211.5" y="77.9" width="22.3" height="22.3" />
                        <rect x="178.1" y="77.9" width="22.3" height="22.3" />
                        <rect x="311.7" y="77.9" width="22.3" height="22.3" />
                    </g>
                </g>
            </g>
        </svg>


    </div>
    <script src="./build/index.js"></script>
</body>

</html>`;