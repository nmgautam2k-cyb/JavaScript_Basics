let user=prompt("Enter Your Name");
console.log(user);



var name="Gautam"
console.log(name);


{
let name2="Gautam";

    console.log(name2);
}
    

//Error(Varible is not defined)
{
    let name3="Gautam"
}
console.log(name3);

//Error
//(Already declared.We cannot create two variable with same name using let inside same scope)


let name5="Gautam"
name5="Sabeek"

console.log(name5);

//Overrided with different scope
let name6="Gautam"
{
    let name6="sabeek"
    console.log(name6);
}