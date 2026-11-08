"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdminRoutes = void 0;
const express_1 = require("express");
const admin_catalog_routes_1 = require("./admin/admin_catalog_routes");
const admin_order_routes_1 = require("./admin/admin_order_routes");
const createAdminRoutes = (app) => {
    app.use((req, resp, next) => {
        resp.locals.layout = false;
        next();
    });
    const cat_router = (0, express_1.Router)();
    (0, admin_catalog_routes_1.createAdminCatalogRoutes)(cat_router);
    app.use("/api/products", cat_router);
    const order_router = (0, express_1.Router)();
    (0, admin_order_routes_1.createAdminOrderRoutes)(order_router);
    app.use("/api/orders", order_router);
    app.get("/admin", (req, resp) => resp.redirect("/admin/products"));
    app.get("/admin/products", (req, resp) => {
        resp.locals.content = "/api/products/table";
        resp.render("admin/admin_layout");
    });
    app.get("/admin/products/edit/:id", (req, resp) => {
        resp.locals.content = `/api/products/edit/${req.params.id}`;
        resp.render("admin/admin_layout");
    });
    app.get("/admin/orders", (req, resp) => {
        resp.locals.content = "/api/orders/table";
        resp.render("admin/admin_layout");
    });
};
exports.createAdminRoutes = createAdminRoutes;
