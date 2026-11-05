//Destruction assignment allows you to extract the values from array ot properties from objects and stores them into a seperate variable
//Destruction uusing Objects
/*
let student={
    name:"gautam",
    age: 22,
    dept:"MCA",
    status:"Single"
}
//without destruction
//console.log(student.name);
//console.log(student.age);
//console.log(student["status"])

//with destruction
let {name,age,dept,status}=student;

console.log(name);
console.log(dept);

//Renaming key
let {name:StudentName,price}=student;
console.log(StudentName);
*/

//ARRAY DESTRUCTION
let products=["Shirts","Pants","T-shirts","Hoodies"];

let [p1,p2,p3,p4]=products;
console.log(p1);
console.log(p2);

//Skipping values
let [q1, ,q3]=products;
console.log(q1);
console.log(q3);

//update
let {e1,e2,e3,e4,e5="Jacket"}=products;
console.log(e5);