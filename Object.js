//Objects
const student={
    Name:"gautam",
    Age:22,
    Dept:"MCA"
};
/*
//Access Keys
let keys=Object.keys(student);
console.log(keys);

//Access Values
let values=Object.values(student);
console.log(values);

//Entries
let entries=Object.entries(student);
console.log(entries);


/*
//Dot Notation
console.log(student.Name);
//Bracket Notation
console.log(student["Name"]);


//Checks whether the property exists
console.log("Age" in student);


//Add new properties
student.department="MCA";
console.log(student);


//Delete properties
delete student.Dept;
console.log(student);


//Constructor is a function where we can create multiple objects with same structure
function student1(name, age){
    this.name=name;
    this.age=age;
}
const s1=new student1("Gautam",22)
const s2=new student1("Gokul",23);

console.log(s1);
console.log(s2);


//Optional Chaining is used to access an object's properties safely without any error even if the property is null or undefinerd
const student3={
    name:"Gautam",
    age:33
};
console.log(student3?.department);


 //Object Referenence(Assigning one object to another variable is known as Object Reference)
 const student2=student;
 console.log(student2);
 console.log(student2.Name);

 student2.Name="Gokul";
 console.log(student2.Name);
 console.log(student.Name);    //student.Name is overrided when i replace name in student2's object

//Object Copying(Seperate object instead of sharing same refernce)
const student3={...student};
student3.Name="Sabeek";
console.log(student3.Name);
console.log(student.Name);


//Spread Operator is used for shallow copy but if the object has nested key and values, it wont work. So we use Deep copy
//Deep Copy
*/
const student4={
    Name:"Hari",
    Address:{
        City:"salem",
        DoorNum:224,
    }
};
/*
console.log(student4.Address.DoorNum);

//Using Spread Operaor
let student5={...student4};

student5.Name="Chandru"
console.log(student5.Name);

student5.Address.City="chennai";
console.log(student5);

console.log(student4.Address.City);  //student4's City also changed ,To overcome this we use Deep copy
*/

//Deep Copy - Gives seperate copy with seperate reference
let student5 =structuredClone(student4);
student5.Address.DoorNum=444;
console.log(student5.Address.DoorNum);

console.log(student4.Address.DoorNum);



