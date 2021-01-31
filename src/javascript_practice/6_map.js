const instructors=[
    {name:"John", specialty:"Physics"},
    {name:"Paul", specialty:"Math"},
    {name:"Mark", specialty:"Chemistry"},
    {name:"Lester", specialty:"Engineering"},
    {name:"Greta", specialty:"Medicine"},
]

//Method 1: Slow, by iterating over the orig array in a for loop
let instructor_names1=[];
for (let i=0;i<instructors.length;i++){
    instructor_names1[i]=instructors[i].name;
}
console.log(instructor_names1);

//Method2a: Fast, using .map()
const instructor_names2=instructors.map(instructor=>instructor.name);
console.log(instructor_names2);

//Method2b: Fast, using .map() and shorter parameter name
const instructor_names3=instructors.map(i=>i.name);
console.log(instructor_names3);


const instructor_info=instructors.map(instructor=>`${instructor.name}: ${instructor.specialty}`);
console.log(instructor_info);


var kvArray=[
    {key:1, value: 10},
    {key:2, value: 15},
    {key:3, value: 17},
];

console.log(kvArray);

var reformattedArray=kvArray.map(obj => {
    var rObj={}
    rObj[obj.key]=obj.value;
    console.log(rObj);
    return rObj;
})