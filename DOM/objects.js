/*
const user={
    name:"Gautam",
    age:22,
    dept:"MCA",
    city:"Salem",

    greetuser(){
        return `Hello my name is ${this.name} and my age is ${this.age}`;
    }
};

const person=user.greetuser();
document.body.innerHTML=`<h1>${person}</h1>`
*/
const user2={
    name:"Gokul",
    age:26,
    dept:"MBA",
    city:"Salem",

    greetuser2(){
        return `Hello my name is ${this.name} and my age is ${this.age} and im from ${this.city}`;
    }
};

const nameInput= prompt("Enter your name");
const AgeInput=prompt("Enter your age");
const cityInput=prompt("Enter city");

user2.name=nameInput;
user2.age=AgeInput;
user2.city=cityInput;

document.body.innerHTML=`<h1>${user2.greetuser2()}<h1>`;

