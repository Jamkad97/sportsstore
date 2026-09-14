import { Category, Product, Supplier } from "./catalog_models";
<<<<<<< HEAD

export interface CatalogRepository {

    getProducts(): Promise<Product[]>;

    storeProduct(p: Product): Promise<Product>;

    getCategories() : Promise<Category[]>;

    storeCategory(c: Category): Promise<Category>;

    getSuppliers(): Promise<Supplier[]>;

=======
export interface CatalogRepository {
    getProducts(): Promise<Product[]>;
    storeProduct(p: Product): Promise<Product>;
    getCategories() : Promise<Category[]>;
    storeCategory(c: Category): Promise<Category>;
    getSuppliers(): Promise<Supplier[]>;
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
    storeSupplier(s: Supplier): Promise<Supplier>;
}
