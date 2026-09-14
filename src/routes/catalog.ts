import { Express } from "express";
import { catalog_repository } from "../data";
<<<<<<< HEAD

export const createCatalogRoutes = (app: Express) => {

=======
export const createCatalogRoutes = (app: Express) => {
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
    app.get("/", async (req, resp) => {
        const products = await catalog_repository.getProducts();
        resp.render("index", { products });
    })
<<<<<<< HEAD

    // app.get("/err", (req, resp) => {
    //     throw new Error ("Something bad happened");
    // });
    
    // app.get("/asyncerr", async (req, resp) => {
    //     throw new Error ("Something bad happened asynchronously");
    // });
=======
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
}
