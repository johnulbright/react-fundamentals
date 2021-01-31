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

class TrialUser extends User{  //see use on jeff
    trialEnding(){
        console.log("Your trial will be ending soon, "+this.name+". Would you like to join our program?")
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
//anonLady.trialEnding(); //shouldn't work...breaks code!

var jeff=new TrialUser("Jeff");
jeff.greet();
jeff.status();
jeff.trialEnding();

class BannedUser extends User{
  //  this.type="Banned";
    warning(){
        console.log(this.name+", you have been banned!");
    }
}

var gerald=new BannedUser("Gerald");
gerald.greet();
gerald.status();
gerald.warning();

console.log(gerald.name)