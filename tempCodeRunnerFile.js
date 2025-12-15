
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
