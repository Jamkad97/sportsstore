import { HelperOptions } from "handlebars";
import { stringify, escape } from "querystring";

const getData = (options: HelperOptions) => {
    return { ...options.data.root, ...options.hash };
};

// ...other helpers omitted for brevity...

export const pageSizeOptions = (options: HelperOptions) => {
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