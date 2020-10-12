export class Customer {
    public Id:number;
    public FirstName:string;
    public LastName:string;
    public Email:string;
    constructor(id,fn,ln,e){
        this.Id=id;
        this.FirstName=fn;
        this.LastName=ln;
        this.Email=e;
    }
    
}
