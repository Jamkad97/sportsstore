import { Express } from "express";
import { createCatalogRoutes } from "./catalog";
<<<<<<< HEAD

export const createRoutes = (app: Express) => {

=======
export const createRoutes = (app: Express) => {
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
    createCatalogRoutes(app);
}
