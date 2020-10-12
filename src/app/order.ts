import { Orderposition } from './orderposition';

export class Order {
    id:number;
    date:string;
    customerId:number;
    orderPositions:Orderposition[];
    constructor(id:number,date:string,customerId:number){
        this.id=id;
        this.date=date;
        this.customerId=customerId;
    }
}
