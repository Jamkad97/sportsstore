"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selected = exports.disabled = exports.buttonClass = void 0;
const buttonClass = (btn, mode) => btn == mode ? "btn-secondary" : "btn-outline-secondary";
exports.buttonClass = buttonClass;
const disabled = (val) => val == "ID" ? "disabled" : "";
exports.disabled = disabled;
const selected = (val1, val2) => val1 == val2 ? "selected" : "";
exports.selected = selected;
