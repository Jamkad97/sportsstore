import { Router } from "express";
import { CategoryModel, ProductModel, SupplierModel }
    from "../../data/orm/models";
import { ProductDTOValidator, getData, isValid } from "../../data/validation";
   
export const createAdminCatalogRoutes = (router: Router) => {
    router.get("/table", async (req, resp) => {
        const products = await ProductModel.findAll({
                include: [
                    {model: SupplierModel, as: "supplier" },
                    {model: CategoryModel, as: "category" }],
                raw: true, nest: true
        });
        resp.render("admin/product_table", { products });
    });
    router.get("/create", async (req, resp) => {
        const data = {
            product: {},
            suppliers: await SupplierModel.findAll({raw: true}),
            categories: await CategoryModel.findAll({raw: true}),
            create: true
        };
        resp.render("admin/product_editor", data);
    });
    router.post("/create", async (req, resp) => {
        const validation = await ProductDTOValidator.validate(req.body);
        if (isValid(validation)) {
            await ProductModel.create(getData(validation));
            resp.redirect(303, "/api/products/table");
        } else {
            resp.render("admin/product_editor", {
                product: validation,
                suppliers: await SupplierModel.findAll({raw: true}),
                categories: await CategoryModel.findAll({raw: true}),
                create: true
            })
        }
    });     
}
