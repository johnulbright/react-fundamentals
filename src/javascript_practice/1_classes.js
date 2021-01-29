//ES6 JS Classes

class User {
    constructor(name){
        this.name=name;
        this.type="Trial User";
    }
    //Method 1
    greet(){
        console.log("Welcome back, "+this.name);
    }
    //Method 2
    status(){
        console.log("Current status: "+this.type);
    }
}

//Instance of the class/new object
var anonDude= new User("Anonymous Dude");
//We can now use the instance and the . operator to access the two methods.
anonDude.greet();
anonDude.status();

var anonLady = new User("Anonymous Lady")
anonLady.greet();
anonLady.status();

var jeff=new User("Jeff");
jeff.greet();
jeff.status();

