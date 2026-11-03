const Inputbox=document.getElementById("taskInput");
const addbtn=document.getElementById("add-button");
const taskContainer=document.getElementById("taskcontainer");
addbtn.addEventListener("click",()=>{
    const taskValue=Inputbox.value.trim();
   
    const newtask=document.createElement("div");
    newtask.className="task";

    const tasktext=document.createElement("span");
    tasktext.textContent=taskValue;

    const deleteButton=document.createElement("button");
    deleteButton.textContent="Delete";
    deleteButton.className="delete-button";

    deleteButton.addEventListener("click",()=>{
        newtask.remove();
    });
    newtask.appendChild(tasktext);
    newtask.appendChild(deleteButton);
    taskContainer.appendChild(newtask);
    Inputbox.value="";
});