"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCatalogRoutes = void 0;
const data_1 = require("../data");
const createCatalogRoutes = (app) => {
    app.get("/", async (req, resp) => {
        const products = await data_1.catalog_repository.getProducts();
        resp.render("index", { products });
    });
};
exports.createCatalogRoutes = createCatalogRoutes;
