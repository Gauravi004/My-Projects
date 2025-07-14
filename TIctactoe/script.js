let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newgame = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let turno = true; 
let count=0;
const winpattern = [[0,1,2],
                    [0,3,6],
                    [0,4,8],
                    [1,4,7],
                    [2,5,8],
                    [2,4,6],
                    [3,4,5],
                    [6,7,8]];
const nowinner =  () =>{
    msg.innerText = 'No Winner! It\'s a Draw! 🤝';
    msgcontainer.classList.remove("hide");
}
boxes.forEach((box) =>{
    
    box.addEventListener("click", ()=>{
        
    console.log("Clicked");
    if(turno){
        box.innerText ="O"
        box.style.color = "#F0A500";
        turno= false;

    }
    else{
        box.innerText = "X"
        box.style.color = "#DDE392";
        turno = true;
    }
    box.disabled = true;
    count++;
    let iswinner =checkwinner();
    if(count===9 && !iswinner){
        nowinner();
    }
    
    
   
});

});

const showwinner = (winner) =>{
    msg.innerText = `Yayy ${winner} Wins Congratulations!🥳`;
    msgcontainer.classList.remove("hide");


    
}

const checkwinner= () => {
for(let i = 0; i < winpattern.length; i++){
    let [a,b,c] = winpattern[i];
    if(boxes [a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText && boxes[a].innerText !== ""){
       
         boxes[a].style.backgroundColor = "#7D8570";
         boxes[b].style.backgroundColor = "#7D8570";
        boxes[c].style.backgroundColor = "#7D8570";
        showwinner(boxes[a].innerText);
        return true;
    }
  

}
   return false;
};


resetbtn.addEventListener("click" , () =>{
    boxes.forEach((box) =>{
        box.innerText="";
        box.disabled = false;
        box.style.backgroundColor ="#646F58";
    });
turno = true;
count = 0;
msgcontainer.classList.add("hide");
});

newgame.addEventListener("click" , ()=>{
    boxes.forEach((box) =>{
        box.innerText="";
        box.disabled = false;
        box.style.backgroundColor ="#646F58";
    });
    turno = true;
    count = 0;
    msgcontainer.classList.add("hide");
});