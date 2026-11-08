"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdminCatalogRoutes = void 0;
const models_1 = require("../../data/orm/models");
const createAdminCatalogRoutes = (router) => {
    router.get("/table", async (req, resp) => {
        const products = await models_1.ProductModel.findAll({
            include: [
                { model: models_1.SupplierModel, as: "supplier" },
                { model: models_1.CategoryModel, as: "category" }
            ],
            raw: true, nest: true
        });
        resp.render("admin/product_table", { products });
    });
};
exports.createAdminCatalogRoutes = createAdminCatalogRoutes;
