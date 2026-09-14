import { DataTypes, Sequelize } from "sequelize";
import { CategoryModel, ProductModel, SupplierModel } from "./catalog_models";
<<<<<<< HEAD

const primaryKey = {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
};

export const initializeCatalogModels = (sequelize: Sequelize) => {

    ProductModel.init({
        ...primaryKey,
        name: { type: DataTypes.STRING},        
        description: { type: DataTypes.STRING},
        price: { type: DataTypes.DECIMAL(10, 2) }
    }, { sequelize })

=======
const primaryKey = {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
};
export const initializeCatalogModels = (sequelize: Sequelize) => {
    ProductModel.init({
        ...primaryKey,
        name: { type: DataTypes.STRING},       
        description: { type: DataTypes.STRING},
        price: { type: DataTypes.DECIMAL(10, 2) }
    }, { sequelize })
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
    CategoryModel.init({
        ...primaryKey,
        name: { type: DataTypes.STRING}
    }, { sequelize });
<<<<<<< HEAD

=======
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
    SupplierModel.init({
        ...primaryKey,
        name: { type: DataTypes.STRING}
    }, { sequelize})
<<<<<<< HEAD

    ProductModel.belongsTo(CategoryModel, 
        { foreignKey: "categoryId", as: "category"});    
    ProductModel.belongsTo(SupplierModel, 
        { foreignKey: "supplierId", as: "supplier"});
    CategoryModel.hasMany(ProductModel, 
        { foreignKey: "categoryId", as: "products"});
    SupplierModel.hasMany(ProductModel, 
=======
    ProductModel.belongsTo(CategoryModel,
        { foreignKey: "categoryId", as: "category"});   
    ProductModel.belongsTo(SupplierModel,
        { foreignKey: "supplierId", as: "supplier"});
    CategoryModel.hasMany(ProductModel,
        { foreignKey: "categoryId", as: "products"});
    SupplierModel.hasMany(ProductModel,
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
        { foreignKey: "supplierId", as: "products"});
}
