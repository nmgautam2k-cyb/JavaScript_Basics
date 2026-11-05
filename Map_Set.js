/*Method	         Purpose
Map - stores unique key and values
Set - stores unique value only

set(key, value) 	Adds or updates a key-value pair
get(key)	        Returns the value of a key
has(key)	        Checks whether a key exists
delete(key)	        Removes a particular key
clear()         	Removes all entries
size	            Returns the number of entries


let students= new Map();          //creates space for object
students.set("name","Gautam");    //Sets - adds or updates key and value pairs
students.set("Age",22);
students.set("Active",true);
let obj={id:10};
students.set(obj,"Object key");

/*
console.log(students.get("Age"));  //Returns the value of the key
console.log(students.get(obj));
console.log(students.get("Active"));

console.log(students.has("name"));  //Checks whether key exists
console.log(students.has("Age"));   //Exists -  True
console.log(students.has("dept"));  //False

students.delete("Age");             //Deletes the key and value
students.delete("Object key");
console.log(students);

//students.clear();
//console.log(students);             //Clears all entries

console.log(students.size);            //Returns Size

//Iteration
for(let members of students){        //To print whole entries
    console.log(members); 
}

for(let keys of students.keys()){         //to print keys
    console.log(keys);
}
for(let mem of students.values()){         //to print Values
    console.log(values);
}

/*
//Set - cannot add duplicates                        
let category= new Set();
category.add("Shirts");
category.add("T-shirts");
category.add("Pants");
category.add("Mobile");
category.add("Mobile");          //Duplicates is not allowed on Sets

console.log(category);
console.log(category.has("Shirts"));
category.delete("Pants");          //Delete
console.log(category);

//category.clear();
//console.log(category);           //Clears all entries

let res=category.values();
console.log(res.next().value);     //Gives one by one value

//WeakMap                //First we have to Create obejct and then set values for that object
let user= new WeakMap();
let product1={id:1};
let product2={name:"Gautam's"};
let product3={id:3};
user.set(product1,"Laptop");
user.set(product2,"Mobile");
user.set(product3,"Tab");

console.log(user.get(product2));
console.log(user.get(product1));
console.log(user.get(product2));

console.log(product2.name);          //Access name which is associated in object

//WeakSet

let set=new WeakSet();

let user1={name:"john"};
let user2={name:"Doe"};

set.add(user1);
set.add(user2);

console.log(set.has(user1));        
*/

//Object.keys(), Object.values, Object.entires
let students={
    name:"Gautam",
    age:23,
    dep:"MCA"
};
console.log(Object.keys(students));  //displays keys
/*
//Object.values

console.log(Object.values(students)); //displays values
 
//Object Entries
console.log(Object.entries(students));  //display all key and values
*/

//using Loops
for(let key of Object.keys(students)){
    console.log(key);
}

for(let value of Object.values(students)){
    console.log(value);
}
for(let entries of Object.entries(students)){
    console.log(entries);
}
