class customer{
    constructor(name,email,billDate,phone,billAmount){
        this.name=name;
        this.email=email;
        this.billDate=billDate;
        this.phone=phone;
        this.billAmount=billAmount;
    }
   /* constuctor(){
        this.customers=[];
    }

    addEmployee(cust){
        if(cust==null)
            throw "Customer not created"
        this.customers.push(emp);
    }*/

    checkname(){
        if(length(this.name)>5){
            return "less than 5 letters"
        }else{
            return "more than 5 letters"
        }
    }

    display(){
        return 'Customer details:${this.name],${this.email},${this.billDate},${this.phone},${this.billAmount}';
    }
}

