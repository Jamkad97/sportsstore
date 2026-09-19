import { HelperOptions }  from "handlebars";
import { stringify } from "querystring";
import { escape } from "querystring";
const getData = (options:HelperOptions) => {
     return {...options.data.root, ...options.hash}
};
export const highlight = (value: string, options: HelperOptions) => {
    const { searchTerm } = getData(options);
    if (searchTerm && searchTerm !== "") {
        const regexp = new RegExp(searchTerm, "ig");
        const mod = value.replaceAll(regexp, "<strong>$&</strong>");
        return new Handlebars.SafeString(mod);      
    }
    return value;
}
const formatter = new Intl.NumberFormat("en-us", {
    style: "currency", currency: "USD"
})
export const currency = (value: number) => {
    return formatter.format(value);
}