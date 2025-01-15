import { Request, Response } from "express";
import { CreateProductInputDto, CreateProductOutputDto, CreateProductUsecase } from "../../../../../usecases/create-product/create-product.usecase";
import { HttpMethod, Route } from "../routes";

export type CreateProductResponseDto = {
    id: string;
};

export class CreateProductRoute implements Route {
    private constructor(
        private readonly path: string,
        private readonly method: HttpMethod,
        private readonly createProductService: CreateProductUsecase
    ){}

    public static create(createProductService: CreateProductUsecase) {
        return new CreateProductRoute(
            "/new-product",
            HttpMethod.POST,
            createProductService
        );
    };

    public getHandler() {
        return async (req: Request, res: Response) => {
            const { name, price } = req.body;
            
            const input: CreateProductInputDto = {
                name,
                price
            };

            const output: CreateProductOutputDto = await this.createProductService.execute(input);

            const resBody = this.present(output);

            res.status(201).json(resBody).send();
        };
    };

    public getPath():string {
        return this.path;
    };

    public getMethod(): HttpMethod {
        return this.method;
    };

    private present(input: CreateProductResponseDto): CreateProductResponseDto {
        const res = {id: input.id};

        return res;
    };
};