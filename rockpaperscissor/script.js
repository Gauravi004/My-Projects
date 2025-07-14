let userscore=0;
let computerscore=0; 
let msgcont =document.querySelector(".msgcontainer");
let msg= document.querySelector("#msg");
let user = document.querySelector("#user-score");
let computer = document.querySelector("#computer-score");
// user.innerText = userscore;
// computer.innerText = computerscore;

const choices = document.querySelectorAll(".choice");

const genComputerChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randomnumber = Math.floor(Math.random()*3); 
    return options[randomnumber];
}

const playgame= (userchoice)=>{
console.log("User choice:", userchoice);
const computerchoice = genComputerChoice();
console.log("Computer choice:", computerchoice);
if(userchoice === computerchoice){
    msg.innerText = "It's a tie..Try again!🤝";
    msg.style.backgroundColor="#388697"

}
else if(userchoice === "rock" && computerchoice === "scissors" || 
        userchoice === "paper" && computerchoice === "rock" ||
        userchoice === "scissors" && computerchoice === "paper"){
    msg.innerText = `You win! your🎉${userchoice} beats ${computerchoice}`;
    msg.style.backgroundColor = "#52B788";
    userscore++;
    user.innerText = userscore;
}
else{
    msg.innerText = `You lose!😥${computerchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "#D80032";
    computerscore++;
    computer.innerText = computerscore;
}
}
 choices.forEach((choice)=>{
    choice.addEventListener("click", () =>{
         const userchoice = choice.getAttribute("id");
         
     playgame(userchoice)

    });
 })