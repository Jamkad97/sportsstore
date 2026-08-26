import { Express } from "express";
import { catalog_repository } from "../data";
export const createCatalogRoutes = (app: Express) => {
    app.get("/", async (req, resp) => {
        const products = await catalog_repository.getProducts();
        resp.render("index", { products });
    })
}
