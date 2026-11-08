import { Express } from "express";
export const createAdminRoutes = (app: Express) => {
    app.use((req, resp, next) => {
        resp.locals.layout = false;
        next();
    })
    app.get("/admin", (req, resp) => resp.render("admin/admin_layout"));
}