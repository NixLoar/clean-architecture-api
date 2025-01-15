import { Product } from "../entitys/product.entity";

export interface ProductInterface {
    save(product: Product): Promise<void>;
    list(): Promise<Product[]>;
}