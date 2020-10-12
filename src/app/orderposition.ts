import { Product } from './product';

export class Orderposition {
    id:number;
    orderId:number;
    productId:number;
    products:Product;
    quantity:number;
    constructor(id:number,orderId:number,productId:number,quantity:number){
        this.id=id;
        this.orderId=orderId;
        this.productId=productId;
        this.quantity=quantity;
    }
}
