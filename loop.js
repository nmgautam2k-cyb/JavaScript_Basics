console.info("Application started successfully");
console.log("hell0");

/*
//While
let a=10;
while(a>0){
    console.log("hello");
    a--
}

//for of
let arr=[12,"gautam",54,null];

for(let arr1 of arr){
    console.log(arr1);
}

///for in (Properties and values)

const z={
    name:"gautam",
    age:22,
    dept:"MCA"
};

 for(let key in z){
    console.log(key);
    console.log(key + ":" +z[key]); //z[key] gives property value
 }


 let arr3=[12,"gautam",54,null];
    for(index in arr3){
         console.log(index);
    }

//Break and Continue
*/
for(let i=1;i<=10;i++){         //break
    if(i==5){
        break;
    }
    console.log(i);
}

for(let i=0;i<=10;i++){           //continue
    if(i==4){
        continue;
    }
    console.log(i);
}
