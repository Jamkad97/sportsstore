"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currency = exports.highlight = void 0;
const getData = (options) => {
    return { ...options.data.root, ...options.hash };
};
const highlight = (value, options) => {
    const { searchTerm } = getData(options);
    if (searchTerm && searchTerm !== "") {
        const regexp = new RegExp(searchTerm, "ig");
        const mod = value.replaceAll(regexp, "<strong>$&</strong>");
        return new Handlebars.SafeString(mod);
    }
    return value;
};
exports.highlight = highlight;
const formatter = new Intl.NumberFormat("en-us", {
    style: "currency", currency: "USD"
});
const currency = (value) => {
    return formatter.format(value);
};
exports.currency = currency;
