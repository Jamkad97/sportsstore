import { Express, Router } from "express";
import { createAdminCatalogRoutes } from "./admin_catalog_routes";

export const createAdminRoutes = (app: Express) => {
    app.use((req, resp, next) => {
        resp.locals.layout = false;
        next();
    });

    const cat_router = Router();

    createAdminCatalogRoutes(cat_router);

    app.use("/api/products", cat_router);

    app.get("/admin", (req, resp) =>
        resp.render("admin/admin_layout")
    );
};