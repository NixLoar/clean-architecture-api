import { PrismaClient } from "@prisma/client";
import { ProductInterface } from "../../../domain/product/interfaces/product-interface";
import { Product } from "../../../domain/product/entitys/product.entity";

export class ProductRepositoryPrisma implements ProductInterface {
    private constructor(private readonly prismaClient: PrismaClient) {}

    public static create(PrismaClient: PrismaClient) {
        return new ProductRepositoryPrisma(PrismaClient);
    }

    public async save(product: Product): Promise<void> {
        const data = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity
        };

        await this.prismaClient.product.create({
            data
        });
    }

    public async list(): Promise<Product[]> {
        const products = await this.prismaClient.product.findMany();

        const productLIst = products.map((p) => {
            const product = Product.with({
                id: p.id,
                name: p.name,
                price: p.price,
                quantity: p.quantity
            });

            return product;
        })

        return productLIst;
    }
}