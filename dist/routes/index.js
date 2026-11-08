"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoutes = void 0;
const express_1 = require("express");
const admin_catalog_routes_1 = require("./admin/admin_catalog_routes");
const createRoutes = (app) => {
    app.use((req, resp, next) => {
        resp.locals.layout = false;
        next();
    });
    const cat_router = (0, express_1.Router)();
    (0, admin_catalog_routes_1.createAdminCatalogRoutes)(cat_router);
    app.use("/api/products", cat_router);
    app.get("/admin", (req, resp) => resp.render("admin/admin_layout"));
};
exports.createRoutes = createRoutes;
