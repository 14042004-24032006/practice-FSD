// //Arrow function
// const greet=()=>{
//     console.log("i m arrow function");
// };
// greet();

// //backticks
// console.log(`the value of ${2+5}`);
// let name="poova";
// console.log(`welcome ${name} let continue the process`);

// //deconstruction
// const user={Name:"poova",age:20};
// const{ Name ,age}=user;
// console.log(Name,age);

// //DOM
// document.getElementById("title").innerHTML="updated title!";

// document.getElementById("title").textContent="hello";

// const li=document.createElement("li");
// li.textContent="New item";
// document.getElementById("list").appendChild(li);

// document.getElementById("inputBox").addEventListener("input",(e)=>{
//    console.log(e.target.value)
// })

// Get DOM elements
const inputBox = document.getElementById("name");
const addBtn = document.getElementById("btnadd");
const delBtn = document.getElementById("btndel");
const listItem = document.getElementById("item");

// Add item
addBtn.addEventListener("click", () => {
    const value = inputBox.value.trim();
    if (value === "") {
        alert("Please enter a name");
        return;
    }
    const li = document.createElement("li");
    li.textContent = value;
    listItem.appendChild(li);
    inputBox.value = ""; // clear input
});

// Delete last item
delBtn.addEventListener("click", () => {
    const last = listItem.lastElementChild;
    if (last){ 
        last.remove();
    }
});
