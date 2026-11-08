"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdminCatalogRoutes = void 0;
const models_1 = require("../../data/orm/models");
const validation_1 = require("../../data/validation");
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
    router.get("/create", async (req, resp) => {
        const data = {
            product: {},
            suppliers: await models_1.SupplierModel.findAll({ raw: true }),
            categories: await models_1.CategoryModel.findAll({ raw: true }),
            create: true
        };
        resp.render("admin/product_editor", data);
    });
    router.post("/create", async (req, resp) => {
        const validation = await validation_1.ProductDTOValidator.validate(req.body);
        if ((0, validation_1.isValid)(validation)) {
            await models_1.ProductModel.create((0, validation_1.getData)(validation));
            resp.redirect(303, "/api/products/table");
        }
        else {
            resp.render("admin/product_editor", {
                product: validation,
                suppliers: await models_1.SupplierModel.findAll({ raw: true }),
                categories: await models_1.CategoryModel.findAll({ raw: true }),
                create: true
            });
        }
    });
};
exports.createAdminCatalogRoutes = createAdminCatalogRoutes;
