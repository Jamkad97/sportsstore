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
            raw: true,
            nest: true
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
    router.get("/edit/:id", async (req, resp) => {
        const product = await models_1.ProductModel.findByPk(req.params.id, {
            raw: true
        });
        if (product == null) {
            resp.sendStatus(404);
            return;
        }
        resp.render("admin/product_editor", {
            product,
            suppliers: await models_1.SupplierModel.findAll({ raw: true }),
            categories: await models_1.CategoryModel.findAll({ raw: true }),
            create: false
        });
    });
    router.get("/edit/:id", async (req, resp) => {
        console.log("EDIT ROUTE REACHED:", req.params.id);
        try {
            const product = await models_1.ProductModel.findByPk(req.params.id, {
                raw: true
            });
            console.log("PRODUCT FOUND:", product);
            if (product === null) {
                resp.status(404).send("Product not found");
                return;
            }
            const suppliers = await models_1.SupplierModel.findAll({
                raw: true
            });
            console.log("SUPPLIERS LOADED");
            const categories = await models_1.CategoryModel.findAll({
                raw: true
            });
            console.log("CATEGORIES LOADED");
            resp.render("admin/product_editor", {
                product,
                suppliers,
                categories,
                create: false
            });
        }
        catch (error) {
            console.error("EDIT PRODUCT ERROR:", error);
            resp.status(500).send(error instanceof Error
                ? error.message
                : String(error));
        }
    });
    router.delete("/:id", async (req, resp) => {
        const product = await models_1.ProductModel.findByPk(req.params.id);
        if (product == null) {
            resp.sendStatus(404);
            return;
        }
        await product.destroy();
        resp.sendStatus(200);
    });
};
exports.createAdminCatalogRoutes = createAdminCatalogRoutes;
