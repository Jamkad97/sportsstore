"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCatalogRoutes = void 0;
const createCatalogRoutes = (app) => {
    app.get("/", (req, resp) => {
        resp.send("Hello, SportsStore Route");
    });
};
exports.createCatalogRoutes = createCatalogRoutes;
