"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageSizeOptions = void 0;
const getData = (options) => {
    return { ...options.data.root, ...options.hash };
};
// ...other helpers omitted for brevity...
const pageSizeOptions = (options) => {
    const { pageSize } = getData(options);
    let output = "";
    [3, 6, 9].forEach(size => {
        output += options.fn({
            size,
            selected: pageSize === size ? "selected" : ""
        });
    });
    return output;
};
exports.pageSizeOptions = pageSizeOptions;
