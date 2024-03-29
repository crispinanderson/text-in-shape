(() => { "use strict"; var t = { d: (e, r) => { for (var n in r) t.o(r, n) && !t.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: r[n] }) }, o: (t, e) => Object.prototype.hasOwnProperty.call(t, e), r: t => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) } },
        e = {};

    function r(t, e) { var r = Object.keys(t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), r.push.apply(r, n) } return r }

    function n(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? r(Object(n), !0).forEach((function(e) { o(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

    function o(t, e, r) { return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t }

    function i(t, e) {
        (null == e || e > t.length) && (e = t.length); for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]; return n }
    t.r(e), t.d(e, { default: () => k, textInShape: () => T }); var c = function(t, e) { Object.entries(e).forEach((function(e) { var r, n, o = (n = 2, function(t) { if (Array.isArray(t)) return t }(r = e) || function(t, e) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) { var r = [],
                                n = !0,
                                o = !1,
                                i = void 0; try { for (var c, a = t[Symbol.iterator](); !(n = (c = a.next()).done) && (r.push(c.value), !e || r.length !== e); n = !0); } catch (t) { o = !0, i = t } finally { try { n || null == a.return || a.return() } finally { if (o) throw i } } return r } }(r, n) || function(t, e) { if (t) { if ("string" == typeof t) return i(t, e); var r = Object.prototype.toString.call(t).slice(8, -1); return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? i(t, e) : void 0 } }(r, n) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()),
                    c = o[0],
                    a = o[1];
                t.style[c] = a })) },
        a = function(t, e) { var r = document.createElement("span");
            document.body.appendChild(r), c(r, n(n({}, e.style), {}, { whiteSpace: "nowrap" })), r.textContent = t; var o = r.getBoundingClientRect().width; return r.remove(), o };

    function u(t, e) {
        (null == e || e > t.length) && (e = t.length); for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]; return n } var l = function(t, e, r) { var n = t.getBBox(),
                o = t.parentNode,
                i = document.createElementNS("http://www.w3.org/2000/svg", "text");
            i.id = "text-in-" + t.id, c(i, r.style); var a = document.createElementNS("http://www.w3.org/2000/svg", "g");
            a.style.transform = "matrix(1, 0, 0, 1, ".concat(n.x, ", ").concat(n.y, " )"), a.appendChild(i), e.forEach((function(t) { var e = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                e.setAttribute("x", t.x), e.setAttribute("y", t.y + t.height), e.textContent = t.textContent, t.style && Object.entries(t.style).forEach((function(t) { var r, n, o = (n = 2, function(t) { if (Array.isArray(t)) return t }(r = t) || function(t, e) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) { var r = [],
                                    n = !0,
                                    o = !1,
                                    i = void 0; try { for (var c, a = t[Symbol.iterator](); !(n = (c = a.next()).done) && (r.push(c.value), !e || r.length !== e); n = !0); } catch (t) { o = !0, i = t } finally { try { n || null == a.return || a.return() } finally { if (o) throw i } } return r } }(r, n) || function(t, e) { if (t) { if ("string" == typeof t) return u(t, e); var r = Object.prototype.toString.call(t).slice(8, -1); return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? u(t, e) : void 0 } }(r, n) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()),
                        i = o[0],
                        c = o[1];
                    e.style[i] = c })), i.appendChild(e) })), o.appendChild(a) },
        p = function(t) { var e = function(t) { var e = document.createElement("canvas"),
                    r = function(t) { return Array.from(document.querySelectorAll("svg")).filter((function(e) { return e.innerHTML.includes('id="'.concat(t.id, '"')) }))[0] }(t);
                e.width = r.getBBox().width, e.height = r.getBBox().height; var n = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"); return n.id = "temp_canvas", n.style.width = r.getBBox().width, n.style.height = r.getBBox().height, n.appendChild(e), r.appendChild(n), e.getContext("2d") }(t); switch (t.tagName) {
                case "polygon":
                    return function(t, e) { for (var r, n = t.getAttribute("points").trim(" ").split(" ").map((function(t) { return t.trim(" ") })), o = 0; o < n.length; o++) { if (NaN === (r = n[o].split(",").map((function(t) { return +t })))[0]) throw "Something went wrong when converting Polygon received " + r[0] + ", " + r[1];
                            0 === o ? (e.beginPath(), e.moveTo(r[0], r[1])) : e.lineTo(r[0], r[1]) } return e.closePath(), e.fillStyle = "#FF0000", e.fill(), e }(t, e);
                case "rect":
                    return function(t, e) { var r = t.getBBox(),
                            n = +r.x,
                            o = +r.y,
                            i = +r.height,
                            c = +r.width; return e.rect(n, o, c, i), e.fillStyle = "#FF0000", e.fill(), e }(t, e);
                case "circle":
                    return function(t, e) { var r = +t.getAttribute("cx"),
                            n = +t.getAttribute("cy"),
                            o = +t.getAttribute("r"); return e.arc(r, n, o, 0, 2 * Math.PI), e.fillStyle = "#FF0000", e.fill(), e }(t, e);
                default:
                    throw "svg-text-in-shape only supports SVG circle, rect & polygon" } };

    function f(t, e) { var r = Object.keys(t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), r.push.apply(r, n) } return r }

    function b(t) { for (var e = 1; e < arguments.length; e++) { var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? f(Object(r), !0).forEach((function(e) { s(t, e, r[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e)) })) } return t }

    function s(t, e, r) { return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t }

    function y(t, e) { var r = Object.keys(t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), r.push.apply(r, n) } return r }

    function g(t) { for (var e = 1; e < arguments.length; e++) { var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? y(Object(r), !0).forEach((function(e) { d(t, e, r[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e)) })) } return t }

    function d(t, e, r) { return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t }

    function h(t, e) { var r = Object.keys(t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), r.push.apply(r, n) } return r }

    function O(t) { for (var e = 1; e < arguments.length; e++) { var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? h(Object(r), !0).forEach((function(e) { m(t, e, r[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e)) })) } return t }

    function m(t, e, r) { return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t } var j = function t(e) { for (var r = e.context, n = e.lineHeight, o = e.bbox, i = e.yOffset, c = e.padding, a = e.minWidth, u = 0, l = 0, p = { topRight: !1, topLeft: !1, bottomRight: !1, bottomLeft: !1 };
            (!p.topLeft || !p.bottomLeft) && u <= o.width;) r.isPointInPath(o.x + u, o.y + i) && (p.topLeft = !0), r.isPointInPath(o.x + u, o.y + i + n) && (p.bottomLeft = !0), u += 1; for (;
            (!p.topRight || !p.bottomRight) && l >= 0 - o.width;) r.isPointInPath(o.x + o.width + l, o.y + i) && (p.topRight = !0), r.isPointInPath(o.x + o.width + l, o.y + i + n) && (p.bottomRight = !0), l -= 1; var f = { x: u + c.left, y: i, width: o.width + l - u - c.right - c.left, height: n }; return p.topLeft && p.topRight && p.bottomRight && p.bottomLeft ? f.width >= a ? f : t(O(O({}, e), {}, { yOffset: i + 1 })) : p.topLeft && p.topRight && p.bottomRight && p.bottomLeft ? void 0 : t(O(O({}, e), {}, { yOffset: i + 1 })) };

    function v(t, e) { var r = Object.keys(t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), r.push.apply(r, n) } return r }

    function w(t) { for (var e = 1; e < arguments.length; e++) { var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? v(Object(r), !0).forEach((function(e) { P(t, e, r[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e)) })) } return t }

    function P(t, e, r) { return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t }

    function x(t, e) { var r = Object.keys(t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), r.push.apply(r, n) } return r }

    function S(t, e, r) { return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t } var D = function t(e, r) { var n = function(t) { for (var e = 1; e < arguments.length; e++) { var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? x(Object(r), !0).forEach((function(e) { S(t, e, r[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e)) })) } return t }({}, e); return n.textContent = n.textContent.includes("...") ? n.textContent : n.textContent += "...", n.textWidth = a(n.textContent, r), a(n.textContent, r) > n.width ? (n.textContent = n.textContent.trim().replace(/\w([^\w+]*)$/, ""), n.textContent = n.textContent.trim().replace(/\s(\w+)$/, "..."), n.textWidth = a(n.textContent, r), t(n, r)) : n };

    function C(t, e) { var r = Object.keys(t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), r.push.apply(r, n) } return r }

    function E(t) { for (var e = 1; e < arguments.length; e++) { var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? C(Object(r), !0).forEach((function(e) { A(t, e, r[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e)) })) } return t }

    function A(t, e, r) { return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t } var B = function(t, e, r) { var n = p(e),
            o = function(t) { var e = document.createElement("span");
                document.body.appendChild(e), c(e, t.style), e.textContent = "MW"; var r = e.getBoundingClientRect().height; return e.remove(), r }(r),
            i = function(t) { t.context; for (var e = t.svgElement, r = t.options, n = t.text, o = t.lineHeight, i = (t.charWidths, e.getBBox()), c = { top: r.paddingTop || r.padding, left: r.paddingLeft + 0 || r.padding + 0 || 0, bottom: r.paddingBottom || r.padding, right: r.paddingRight + 0 || r.padding + 0 || 0 }, u = c.top || 0, l = n.substr(0, n.match(/\s/).index), p = a(l, r), f = []; u + o + c.bottom <= i.height;) { var b = j(w(w({}, t), {}, { padding: c, bbox: i, minWidth: p, lineHeight: o, yOffset: u }));
                    u = b.y + o, f.push(b) } return f }({ lineHeight: o, context: n, svgElement: e, options: r, text: t }),
            u = function(t) { var e = t.text,
                    r = t.lineData,
                    n = t.options,
                    o = e.length ? e.split("\n").map((function(t) { return t.trim(" ") })).map((function(t) { return t.split(" ") })) : [],
                    i = 0,
                    c = 0,
                    u = { top: n.paddingTop || n.padding, left: n.paddingLeft || n.padding, bottom: n.paddingBottom || n.padding, right: n.paddingRight || n.padding }; return r.map((function(t, e) { var l = ""; if (i < o.length)
                        for (var p = o[i]; c < p.length;) { var f = p[c]; if (l += l.length > 0 ? " " + f : f, a(l, n) > t.width) return l = l.replace(" " + f, ""), e === r.length - 1 ? D(E(E({}, t), {}, { textContent: l, textWidth: a(l, E(E({}, n), {}, { padding: u })) }), E(E({}, n), {}, { padding: u })) : E(E({}, t), {}, { textContent: l, textWidth: a(l, E(E({}, n), {}, { padding: u })) }); if (c === p.length - 1) return c = 0, i++, E(E({}, t), {}, { textContent: l, textWidth: a(l, E(E({}, n), {}, { padding: u })) });
                            c++ }
                    return null })).filter((function(t) { return null !== t })) }({ lineHeight: o, text: t, lineData: i, options: r }),
            l = r.justifyText ? function(t, e) { return t.justifyText ? e.map((function(e) { return g(g({}, e), {}, { textWidth: a(e.textContent, t), style: g(g({}, e.style), {}, { letterSpacing: (e.width - e.textWidth) / e.textContent.length + "px" }) }) })) : e }(r, u) : u,
            f = r.justifyText ? l : function(t, e) { switch (t.align) {
                    case "center":
                        return e.map((function(t) { return b(b({}, t), {}, { x: t.x + (t.width - t.textWidth) / 2 }) }));
                    case "right":
                        return e.map((function(t) { return b(b({}, t), {}, { x: t.x + t.width - t.textWidth }) }));
                    default:
                        return e } }(r, l); return document.getElementById("temp_canvas").remove(), f };

    function R(t, e) { var r = Object.keys(t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), r.push.apply(r, n) } return r }

    function I(t) { for (var e = 1; e < arguments.length; e++) { var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? R(Object(r), !0).forEach((function(e) { L(t, e, r[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : R(Object(r)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e)) })) } return t }

    function L(t, e, r) { return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t } var W = { padding: 0, justify: "top", align: "center", lineJustify: !1, hideShape: !1, style: {} },
        T = function(t, e) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                n = I(I({}, W), r),
                o = B(t, e, n);
            l(e, o, n), n.hideShape && e.setAttribute("visibility", "hidden") }; const k = T;
    module.exports = e })();