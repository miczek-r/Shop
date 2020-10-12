export class Product {
    public id:number;
    public manufacturer:string;
    public model:string;
    public price:number;
    public stashQuantity:number;
    constructor(id,manufacturer,model,price,stashQuantity){
        this.id=id;
        this.manufacturer=manufacturer;
        this.model=model;
        this.price=price;
        this.stashQuantity=stashQuantity;
    }
    
}
