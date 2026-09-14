import { Transaction } from "sequelize";
import { Category, Product, Supplier } from "../catalog_models";
import { CategoryModel, ProductModel, SupplierModel } from "./models";
import { BaseRepo, Constructor } from "./core"
<<<<<<< HEAD

export function AddStorage<TBase extends Constructor<BaseRepo>>(Base: TBase)  {
    return class extends Base {

        storeProduct(p: Product) {
            return  this.sequelize.transaction(async (transaction) => {
    
=======
export function AddStorage<TBase extends Constructor<BaseRepo>>(Base: TBase)  {
    return class extends Base {
        storeProduct(p: Product) {
            return  this.sequelize.transaction(async (transaction) => {
   
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
                if (p.category) {
                    p.category = await this.storeCategory(p.category)
                }
                if (p.supplier) {
                    p.supplier = await this.storeSupplier(p.supplier);
                }
<<<<<<< HEAD
                
=======
               
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
                const [stored] = await ProductModel.upsert({
                    id: p.id, name: p.name, description: p.description,
                    price: p.price, categoryId: p.category?.id,
                    supplierId: p.supplier?.id
                }, { transaction });
                return stored;
            });
        }
<<<<<<< HEAD
    
=======
   
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
        async storeCategory(c: Category, transaction?: Transaction) {
            const [stored] = await CategoryModel.upsert({
                id: c.id, name: c.name
            }, { transaction});
            return stored;
        }
<<<<<<< HEAD
    
=======
   
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
        async storeSupplier(s: Supplier, transaction?: Transaction) {
            const [stored] = await SupplierModel.upsert({
                id: s.id, name: s.name
            }, {transaction});
            return stored;
<<<<<<< HEAD
        }       
=======
        }      
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
    }
}
