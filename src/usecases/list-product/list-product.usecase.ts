import { Product } from "../../domain/product/entitys/product.entity";
import { ProductInterface } from "../../domain/product/interfaces/product-interface";
import { Usecase } from "../usecase";

export type ListProductInputDto = void;

export type ListProductOutputDto = {
    products:{
        id: string;
        name: string;
        price: number;
        quantity: number;
    }[];
}

export class ListProductUsecase implements Usecase<ListProductInputDto, ListProductOutputDto> {
    private constructor(private readonly productInterface: ProductInterface){}
    
    public static create(productInterface: ProductInterface){
        return new ListProductUsecase(productInterface);
    }

    public async execute(input: void): Promise<ListProductOutputDto> {
        const aProducts = await this.productInterface.list();

        const output = this.presentOutput(aProducts);

        return output;
    }

    private presentOutput(products: Product[]): ListProductOutputDto {
        const output = {
            products: products.map((p) => {
                return {
                    id: p.id,
                    name: p.name,
                    price: p.price,
                    quantity: p.quantity,
                };
            }),
        };

        return output
    }
}