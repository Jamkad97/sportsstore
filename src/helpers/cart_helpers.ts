import { encode } from "punycode";
import { Cart } from "../data/cart_models";
export const countCartItems = (cart: Cart) : number =>
    cart.lines.reduce((total, line) => total + line.quantity, 0);
export const escapeUrl = (url: string) => {
    return encodeURIComponent(url);
}