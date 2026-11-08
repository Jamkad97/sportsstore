import { Router } from "express";
import {
    CategoryModel,
    ProductModel,
    SupplierModel
} from "../../data/orm/models";

import {
    ProductDTOValidator,
    getData,
    isValid
} from "../../data/validation";

export const createAdminCatalogRoutes = (router: Router) => {
    router.get("/table", async (req, resp) => {
        const products = await ProductModel.findAll({
            include: [
                { model: SupplierModel, as: "supplier" },
                { model: CategoryModel, as: "category" }
            ],
            raw: true,
            nest: true
        });

        resp.render("admin/product_table", { products });
    });
    router.get("/create", async (req, resp) => {
        const data = {
            product: {},
            suppliers: await SupplierModel.findAll({ raw: true }),
            categories: await CategoryModel.findAll({ raw: true }),
            create: true
        };

        resp.render("admin/product_editor", data);
    });
    router.post("/create", async (req, resp) => {
        const validation =
            await ProductDTOValidator.validate(req.body);

        if (isValid(validation)) {
            await ProductModel.create(getData(validation));

            resp.redirect(303, "/api/products/table");
        } else {
            resp.render("admin/product_editor", {
                product: validation,
                suppliers:
                    await SupplierModel.findAll({ raw: true }),
                categories:
                    await CategoryModel.findAll({ raw: true }),
                create: true
            });
        }
    });
    router.get("/edit/:id", async (req, resp) => {
        const product = await ProductModel.findByPk(req.params.id, {
            raw: true
        });

        if (product == null) {
            resp.sendStatus(404);
            return;
        }

        resp.render("admin/product_editor", {
            product,
            suppliers:
                await SupplierModel.findAll({ raw: true }),
            categories:
                await CategoryModel.findAll({ raw: true }),
            create: false
        });
    });
    router.get("/edit/:id", async (req, resp) => {
    console.log("EDIT ROUTE REACHED:", req.params.id);

    try {
        const product = await ProductModel.findByPk(req.params.id, {
            raw: true
        });

        console.log("PRODUCT FOUND:", product);

        if (product === null) {
            resp.status(404).send("Product not found");
            return;
        }

        const suppliers = await SupplierModel.findAll({
            raw: true
        });

        console.log("SUPPLIERS LOADED");

        const categories = await CategoryModel.findAll({
            raw: true
        });

        console.log("CATEGORIES LOADED");

        resp.render("admin/product_editor", {
            product,
            suppliers,
            categories,
            create: false
        });
    } catch (error) {
        console.error("EDIT PRODUCT ERROR:", error);

        resp.status(500).send(
            error instanceof Error
                ? error.message
                : String(error)
        );
    }
});
    router.delete("/:id", async (req, resp) => {
        const product =
            await ProductModel.findByPk(req.params.id);

        if (product == null) {
            resp.sendStatus(404);
            return;
        }

        await product.destroy();

        resp.sendStatus(200);
    });
};