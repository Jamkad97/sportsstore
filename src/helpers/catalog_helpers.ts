import Handlebars, { HelperOptions } from "handlebars";
import { stringify } from "querystring";

const getData = (options: HelperOptions) => {
    return { ...options.data.root, ...options.hash };
};

export const navigationUrl = (options: HelperOptions) => {
    const data = getData(options);

    return (
        "/?" +
        stringify({
            page: data.page ?? 1,
            pageSize: data.pageSize ?? 3,
            category: data.category,
            searchTerm: data.searchTerm,
        })
    );
};

export const escapeUrl = (url: string) => {
    return escape(url);
};

export const pageButtons = (options: HelperOptions) => {
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

export const pageSizeOptions = (options: HelperOptions) => {
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

export const categoryButton = (options: HelperOptions) => {
    const { category, categories } = getData(options);
    let output = "";

    categories.forEach((item: any) => {
        output += options.fn({
            ...item,
            selected: item.id === category
    });
});

return output;
};

export const highlight = (
    value: string,
    options: HelperOptions
) => {
    const { searchTerm } = getData(options);

    if (searchTerm && searchTerm !== "") {
        const regexp = new RegExp(searchTerm, "ig");
        const modified = value.replace(
            regexp,
            "<strong>$&</strong>"
        );

        return new Handlebars.SafeString(modified);
    }

    return value;
};

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});

export const currency = (value: number) => {
    return formatter.format(value);
};
