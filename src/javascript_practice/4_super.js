//ES6 JS Classes

class User {
    constructor(username, password){
        this.username=username;
        this.password=password;
        this.type="Trial User";
    }
    //Method 1
    greet(){
        console.log("Welcome back, "+this.username);
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

class BronzeLevelUser extends User{
    constructor(username,password,ccinfo){
        super (username, password);
        this.type="Bronze User"
        this.ccinfo=ccinfo
    }
    getInfo(){
        console.log(this.username, this.password,this.type, this.ccinfo);
    }
}

var bronzeGuy=new BronzeLevelUser("Bronze Dude", "bronze1234","41029731097");
bronzeGuy.greet();
bronzeGuy.status();
bronzeGuy.getInfo();
console.log(bronzeGuy);
