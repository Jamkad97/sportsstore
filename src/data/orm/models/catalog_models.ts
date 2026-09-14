<<<<<<< HEAD
import { Model, CreationOptional, ForeignKey, InferAttributes, 
    InferCreationAttributes  } from "sequelize";

export class ProductModel extends Model<InferAttributes<ProductModel>, 
        InferCreationAttributes<ProductModel>> {

    declare id?: CreationOptional<number>;

    declare name: string;
    declare description: string;
    declare price: number;

    declare categoryId: ForeignKey<CategoryModel["id"]>;
    declare supplierId: ForeignKey<SupplierModel["id"]>;

    declare category?: InferAttributes<CategoryModel>
    declare supplier?: InferAttributes<SupplierModel>
}

export class CategoryModel extends Model<InferAttributes<CategoryModel>, 
        InferCreationAttributes<CategoryModel>>   {

    declare id?: CreationOptional<number>;
    declare name: string;
    
    declare products?:  InferAttributes<ProductModel>[];
}

export class SupplierModel extends Model<InferAttributes<SupplierModel>, 
        InferCreationAttributes<SupplierModel>>  {

    declare id?: CreationOptional<number>;   
    declare name: string;

=======
import { Model, CreationOptional, ForeignKey, InferAttributes,
    InferCreationAttributes  } from "sequelize";
export class ProductModel extends Model<InferAttributes<ProductModel>,
        InferCreationAttributes<ProductModel>> {
    declare id?: CreationOptional<number>;
    declare name: string;
    declare description: string;
    declare price: number;
    declare categoryId: ForeignKey<CategoryModel["id"]>;
    declare supplierId: ForeignKey<SupplierModel["id"]>;
    declare category?: InferAttributes<CategoryModel>
    declare supplier?: InferAttributes<SupplierModel>
}
export class CategoryModel extends Model<InferAttributes<CategoryModel>,
        InferCreationAttributes<CategoryModel>>   {
    declare id?: CreationOptional<number>;
    declare name: string;
   
    declare products?:  InferAttributes<ProductModel>[];
}
export class SupplierModel extends Model<InferAttributes<SupplierModel>,
        InferCreationAttributes<SupplierModel>>  {
    declare id?: CreationOptional<number>;  
    declare name: string;
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
    declare products?:  InferAttributes<ProductModel>[];
}
