export const charWidths = {
    "0": 20, "1": 20, "2": 20, "3": 20, "4": 20, "5": 20, "6": 20, "7": 20, "8": 20, "9": 20, "!": 13.328125, "#": 20, "$": 20, "%": 33.328125, "&": 31.125, "'": 7.21875, "(": 13.328125, ")": 13.328125, "*": 20, "+": 22.5625, ",": 10, "-": 13.328125, ".": 10, "/": 11.125, ":": 11.125, ";": 11.125, "<": 22.5625, "=": 22.5625, ">": 22.5625, "?": 17.765625, "@": 36.84375, "A": 28.890625, "B": 26.6875, "C": 26.6875, "D": 28.890625, "E": 24.4375, "F": 22.25, "G": 28.890625, "H": 28.890625, "I": 13.328125, "J": 15.578125, "K": 28.890625, "L": 24.4375, "M": 35.578125, "N": 28.890625, "O": 28.890625, "P": 22.25, "Q": 28.890625, "R": 26.6875, "S": 22.25, "T": 24.4375, "U": 28.890625, "V": 28.890625, "W": 37.765625, "X": 28.890625, "Y": 28.890625, "Z": 24.4375, "[": 13.328125, "]": 13.328125, "^": 18.78125, "`": 13.328125, "a": 17.765625, "b": 20, "c": 17.765625, "d": 20, "e": 17.765625, "f": 13.328125, "g": 20, "h": 20, "i": 11.125, "j": 11.125, "k": 20, "l": 11.125, "m": 31.125, "n": 20, "o": 20, "p": 20, "q": 20, "r": 13.328125, "s": 15.578125, "t": 11.125, "u": 20, "v": 20, "w": 28.890625, "x": 20, "y": 20, "z": 17.765625, "{": 19.203125, "|": 8.015625, "}": 19.203125, "~": 21.640625, "_": 20
};

export const mockLineData = ({ length = 20, width = 500, lineHeight = 55, options = {} }) => {
    let lineData = Array(length).fill({
        y: options && options.padding ? options.padding.top || 0 : 0,
        x: 0,
        width,
        height: lineHeight
    });
    lineData.forEach((l, i) => {
        lineData[i] = {
            ...l,
            y: i > 0 ? lineData[i - 1].y + lineHeight : 0
        }
    });

    return lineData;
}

export const polygonMockData = () => {
    return [{ x: 259, y: 34, width: 86.4000244140625, height: 46 },
    { x: 196, y: 80, width: 212.4000244140625, height: 46 },
    { x: 133, y: 126, width: 338.4000244140625, height: 46 },
    { x: 69, y: 172, width: 466.4000244140625, height: 46 },
    { x: 22, y: 218, width: 560.4000244140625, height: 46 },
    { x: 36, y: 264, width: 532.4000244140625, height: 46 },
    { x: 51, y: 310, width: 502.4000244140625, height: 46 },
    { x: 66, y: 356, width: 472.4000244140625, height: 46 },
    { x: 81, y: 402, width: 442.4000244140625, height: 46 },
    { x: 96, y: 448, width: 412.4000244140625, height: 46 },
    { x: 111, y: 494, width: 382.4000244140625, height: 46 }]


}

export const circleMockData = () => {
    return [{ x: 258, y: 4, width: 89, height: 46 },
    { x: 141, y: 50, width: 323, height: 46 },
    { x: 87, y: 96, width: 431, height: 46 },
    { x: 51, y: 142, width: 503, height: 46 },
    { x: 28, y: 188, width: 549, height: 46 },
    { x: 14, y: 234, width: 577, height: 46 },
    { x: 8, y: 280, width: 589, height: 46 },
    { x: 15, y: 326, width: 575, height: 46 },
    { x: 31, y: 372, width: 543, height: 46 },
    { x: 55, y: 418, width: 495, height: 46 },
    { x: 92, y: 464, width: 421, height: 46 },
    { x: 150, y: 510, width: 305, height: 46 }]
}

export const rectMockData = () => {
    return [{ x: 6, y: 0, width: 593, height: 46 },
    { x: 6, y: 46, width: 593, height: 46 },
    { x: 6, y: 92, width: 593, height: 46 },
    { x: 6, y: 138, width: 593, height: 46 },
    { x: 6, y: 184, width: 593, height: 46 },
    { x: 6, y: 230, width: 593, height: 46 },
    { x: 6, y: 276, width: 593, height: 46 },
    { x: 6, y: 322, width: 593, height: 46 },
    { x: 6, y: 368, width: 593, height: 46 },
    { x: 6, y: 414, width: 593, height: 46 },
    { x: 6, y: 460, width: 593, height: 46 },
    { x: 6, y: 506, width: 593, height: 46 },
    { x: 6, y: 552, width: 593, height: 46 }]
}

export default { mockLineData, polygonMockData, circleMockData, rectMockData };