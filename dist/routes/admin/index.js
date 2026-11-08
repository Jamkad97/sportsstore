"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdminRoutes = void 0;
const createAdminRoutes = (app) => {
    app.use((req, resp, next) => {
        resp.locals.layout = false;
        next();
    });
    app.get("/admin", (req, resp) => resp.render("admin/admin_layout"));
};
exports.createAdminRoutes = createAdminRoutes;
