export type ProductProps = {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export class Product {
    private constructor(private props: ProductProps) {
        this.validate();
    }

    public static create(name: string, price: number) {
        return new Product({
            id: crypto.randomUUID().toString(),
            name,
            price,
            quantity: 0
        });
    }

    public static with(props: ProductProps) {
        return new Product(props);
    }

    private validate() {
        if(this.props.quantity < 0){
            throw new Error("Product quantity cannot be negative");
        }
    }

    public get id() {
        return this.props.id;
    }

    public get name() {
        return this.props.name;
    }

    public get price() {
        return this.props.price;
    }

    public get quantity() {
        return this.props.quantity;
    }

    public increaseQuantity(quantity: number) {
        if(quantity > 0){
            this.props.quantity += quantity;
        }
        else{
            throw new Error("You cannot increase a product quantity by a negative value");
        }
    }

    public decreaseQuantity(quantity: number) {
        if(quantity > 0){
            this.props.quantity += quantity;
        }
        else{
            throw new Error("You cannot decrease a product quantity by a positive value");
        }
    }
}