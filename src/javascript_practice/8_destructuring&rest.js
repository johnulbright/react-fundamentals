//slow way
const array=['thing',23,false,{hit:"home run"},[1,2,3,4,undefined],NaN];

let stringVar=array[0];
let numVar=array[1];
let objVar=array[3];
let nanVar=array[array.length-1];

console.log(stringVar,numVar,objVar,nanVar);

let [string,num,,obj,,nan]=array;
console.log(string,num,obj,nan);

let newArr=['a',1,undefined,...array]
console.log(newArr);


const testObj={
    testString:'stringy thingy',
    testNum:23,
    testBool:true,
    testObject:{key:"woinfao"},
    testArr:[1,2,3,4,undefined],
    testNan:NaN
};

let {testString,testNum,testBool,testArr,}=testObj;
console.log(testString,testNum,testBool,testArr);

let newObj={newString:"more strings",newNumber:14,...testObj};
console.log(newObj);