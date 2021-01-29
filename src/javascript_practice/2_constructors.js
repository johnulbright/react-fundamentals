class User{
    constructor(first, last,e){
        this.f=first;
        this.l=last;
        this.email=e;
    }
}

var userOne=new User("John","Ulbright","fake@email.com");
console.log(userOne.first); //undefined
console.log(userOne.f); //John
console.log(userOne.l); //Ulbright
console.log(userOne.e); //undefined
console.log(userOne.email); //fake@email.com
console.log(userOne);

class Car{
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
    }
}

let myCar=new Car("Subaru","Outback",2012);
console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.year);
console.log(myCar);

let proto = Object.getPrototypeOf(User);
console.log(proto);
