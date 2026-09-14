import { CategoryModel, ProductModel, SupplierModel } from "./models";
import { BaseRepo, Constructor } from "./core"
<<<<<<< HEAD

export function AddQueries<TBase extends Constructor<BaseRepo>>(Base: TBase) {
    return class extends Base {

=======
export function AddQueries<TBase extends Constructor<BaseRepo>>(Base: TBase) {
    return class extends Base {
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
        getProducts() {
            return ProductModel.findAll({
                include: [
                    {model: SupplierModel, as: "supplier" },
                    {model: CategoryModel, as: "category"}],
                raw: true, nest: true
            });
        }
<<<<<<< HEAD
    
=======
   
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
        getCategories() {
            return CategoryModel.findAll({
                raw: true, nest: true
            })
        }
<<<<<<< HEAD
    
=======
   
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
        getSuppliers() {
            return SupplierModel.findAll({
                raw: true, nest:true
            });
<<<<<<< HEAD
        }        
=======
        }       
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
    }
}
