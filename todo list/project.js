const addbtn = document.getElementById("addbtn");
const clearbtn = document.getElementById("clearbtn");
const todolist = document.getElementById("todolist");
const todoinput = document.getElementById("todoinput");
const tick = document.getElementById("tick");
const chngmode = document.getElementById("chngmode");
todoinput.addEventListener("input", (e) => {
    const value = e.target.value.trim();
    
})


addbtn.addEventListener("click" , (e)=>{
    e.preventDefault(); // Prevent form submission
    const li = document.createElement("li");
    li.textContent= todoinput.value; 
    li.className = "text-secondary text-xl  mt-2";

const check = document.createElement("input");
check.type = "checkbox";
check.className = "ml-1 mt-2 accent-green-600";

li.appendChild(check);
todolist.appendChild(li);
})

clearbtn.addEventListener("click" , ()=>{
    
    todolist.innerHTML = ""; 
    todoinput.value="";
})

// tick.addEventListener("click",()=>{
//     todolist.classList.toggle("line-through");
// })





todoinput.addEventListener("keydown" , (e) =>{
    if(e.key ==="Enter"){
        e.preventDefault();
        addbtn.click();
    }
})



chngmode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
})
//agr user se add krwana h toh html me basic structure bna lo or js me jaake nyaa eleement create krlo



// const btn = fore(btn);