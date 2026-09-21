"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeUrl = exports.countCartItems = void 0;
const countCartItems = (cart) => cart.lines.reduce((total, line) => total + line.quantity, 0);
exports.countCartItems = countCartItems;
const escapeUrl = (url) => {
    return encodeURIComponent(url);
};
exports.escapeUrl = escapeUrl;
