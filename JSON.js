//JSON is a text format used to store and exchange date between applications Especially frotend and backend
//Difference between obejct nad JSON is (For JSON we want to declare a variable name, and IN JSON we use double quotes for keys too)

//Object Example
/*
let user={
    name:"gautam",
    Age:22,
    dept:"MCA"
}

//JSON
{
"name":"Gautam",
"age":22,
"dept":MCA
}
*/

//JSON METHODS
//JSON.stringify() - Converts value into JSON string
//When we send JS Object data to backend or storing it as JSON text we use JSON.stringify()
 let user1={
    name:"Gautam",
    Age:22,
    dept:"MCA"
}
let res=JSON.stringify(user1);
console.log(res);                 //Converts Object into String
console.log(typeof res);          //String

//JSON.parse - Converts JSON String back to JS value(object)
let res2=JSON.parse(res);
console.log(res2);                //Converts back to Object
console.log(typeof res2);         //Object

//toJSON - Instead of converting entire object to JSON string we use toJSON() to specify which property has to change as string
let bio={
    name:"Gautam",
    Age:22,

    toJSON(){
        return this.name;
    }
};
console.log(JSON.stringify(bio));  //converts only name into string without doing entire object
