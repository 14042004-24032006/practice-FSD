 const listItem=document.getElementById("item");

 async function load(){
    const res=await fetch("http://localhost:3000");
    const data=await res.json();

    data.forEach(item => {
        const li=document.createElement("li");
        li.textContent=item;
        listItem.appendChild(li);
    });
 }
 load();

const inputBox=document.getElementById("inputitem");
const additem=document.getElementById("btnadd");
const delitem=document.getElementById("btndel");
//add item
additem.addEventListener("click",()=>{
    const value=inputBox.value.trim();
    if(value===""){
        alert("Enter the item name");
        return;
    }
    const li=document.createElement("li");
    li.textContent=value;
    listItem.appendChild(li);
    inputBox.value="";

});
//delete item
delitem.addEventListener("click",()=>{
    const last=listItem.lastElementChild;
    if(last){
        last.remove();
    }
})


