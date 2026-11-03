const inputbox=document.getElementById("inputBox");
const inputbtn=document.getElementById("inputBtn");
const foodContainer=document.getElementById("food-container");

inputbtn.addEventListener("click",()=>{
    foodContainer.innerHTML+=`<li class="items">${inputbox.value}</li>`
})
