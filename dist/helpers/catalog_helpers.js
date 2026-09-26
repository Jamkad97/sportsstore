"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currency = exports.highlight = exports.categoryButton = exports.pageSizeOptions = exports.pageButtons = exports.escapeUrl = exports.navigationUrl = void 0;
const handlebars_1 = __importDefault(require("handlebars"));
const querystring_1 = require("querystring");
const getData = (options) => {
    return { ...options.data.root, ...options.hash };
};
const navigationUrl = (options) => {
    const data = getData(options);
    return ("/?" +
        (0, querystring_1.stringify)({
            page: data.page ?? 1,
            pageSize: data.pageSize ?? 3,
            category: data.category,
            searchTerm: data.searchTerm,
        }));
};
exports.navigationUrl = navigationUrl;
const escapeUrl = (url) => {
    return escape(url);
};
exports.escapeUrl = escapeUrl;
const pageButtons = (options) => {
    const { page, totalPages } = getData(options);
    let output = "";
    for (let index = 1; index <= totalPages; index++) {
        output += options.fn({
            index,
            selected: index === page
        });
    }
    return output;
};
exports.pageButtons = pageButtons;
const pageSizeOptions = (options) => {
    const { pageSize } = getData(options);
    let output = "";
    [3, 6, 9].forEach(size => {
        output += options.fn({
            size,
            selected: size === pageSize ? "selected" : ""
        });
    });
    return output;
};
exports.pageSizeOptions = pageSizeOptions;
const categoryButton = (options) => {
    const { category, categories } = getData(options);
    let output = "";
    categories.forEach((item) => {
        output += options.fn({
            ...item,
            selected: item.id === category
        });
    });
    return output;
};
exports.categoryButton = categoryButton;
const highlight = (value, options) => {
    const { searchTerm } = getData(options);
    if (searchTerm && searchTerm !== "") {
        const regexp = new RegExp(searchTerm, "ig");
        const modified = value.replace(regexp, "<strong>$&</strong>");
        return new handlebars_1.default.SafeString(modified);
    }
    return value;
};
exports.highlight = highlight;
const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});
const currency = (value) => {
    return formatter.format(value);
};
exports.currency = currency;
