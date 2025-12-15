let car={
    brand:"Toyota",
    mode:"sedan",
    price:30000
}
console.log(car);
car.price=28000;
console.log(car);
car.color="red";
console.log(car);
delete car.mode;
console.log(car);

let student=[{
    name:"abrar",
    age:21,
    cgpa:3.75
},
{
    name:"sabbir",
    age:22,
    cgpa:3.85
},
{
    name:"jamal",
    age:23,
    cgpa:3.95
}];
let key=Object.keys(student[0]);
console.log(key);
student.forEach(stud=> {
console.log(`${stud.name}|${stud.age}|${stud.cgpa}`);
// console.log(stud.age,stud.name,stud.cgpa);
});
