const instructors = [
  { name: "John", specialty: "Physics", medals: 7 },
  { name: "Paul", specialty: "Math", medals: 9 },
  { name: "Mark", specialty: "Chemistry", medals: 3 },
  { name: "Lester", specialty: "Engineering", medals: 2 },
  { name: "Greta", specialty: "Medicine", medals: 14 },
];

//Slow method
let instructor_names1 = [];
for (let i = 0; i < instructors.length; i++) {
  if (instructors[i].medals >= 5) {
    instructor_names1.push(instructors[i].name);
  }
}
console.log(instructor_names1);


//Fast method using filter
const instructor_names2=instructors.filter(i => i.medals>=5);
console.log(instructor_names2);

const onlyMark=instructors.filter(i=>i.name=="Mark");
console.log(onlyMark);