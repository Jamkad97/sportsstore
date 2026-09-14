import { Express } from "express";
import { getConfig } from "../config";
import { engine } from "express-handlebars";
import * as env_helpers from "./env";
<<<<<<< HEAD

const location = getConfig("templates:location");
const config = getConfig("templates:config");

export const createTemplates = (app: Express) => {

=======
const location = getConfig("templates:location");
const config = getConfig("templates:config");
export const createTemplates = (app: Express) => {
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
    app.set("views", location);
    app.engine("handlebars", engine({
        ...config, helpers: {...env_helpers }
    }));
    app.set("view engine", "handlebars");
}
