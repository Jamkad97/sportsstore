export interface  Product {
    id?: number;
    name: string;
    description: string;
    price: number;
<<<<<<< HEAD
    
    category?: Category;
    supplier?: Supplier;
}

export interface Category {
    id?: number;
    name: string;

    products?: Product[];
}

export interface Supplier {
    id?: number;
    name: string;
    
=======
   
    category?: Category;
    supplier?: Supplier;
}
export interface Category {
    id?: number;
    name: string;
    products?: Product[];
}
export interface Supplier {
    id?: number;
    name: string;
   
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
    products?: Product[];
}
