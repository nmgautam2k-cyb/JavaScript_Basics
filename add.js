function add(name, age) {
    return `User name is ${name} and his age is ${age}`;
}

module.exports = add;

//login demo testing
let name='gautam'
let age=22;
function login(name,age){
    if(name=='gautam' && age==22){
        console.log("login successful");
    }
    else{
        console.log("please try again");
    }
}
login(name,age);

module.export=login;