import { Sequelize } from "sequelize";
import { initializeCatalogModels } from "./catalog_helpers";
<<<<<<< HEAD

export { ProductModel, CategoryModel, SupplierModel } from "./catalog_models";

=======
export { ProductModel, CategoryModel, SupplierModel } from "./catalog_models";
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
export const initializeModels = (sequelize: Sequelize) => {
    initializeCatalogModels(sequelize);
}
