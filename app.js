let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newgamebth=document.querySelector(".new");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
let count=0;
const winingpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];

const resetGame=()=>{
    turnO=true;
    enableboxes( );
    count=0;
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText="O";
            turnO = false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
        count++;
        let iswinner=checkWinner();

        if(count===9 && !iswinner){
            gamedraw();
        }
    });
 });

 const gamedraw=( )=>{
    msg.innerText="Game was a draw"
    msgContainer.classList.remove("hide");
    disableboxes();
 };

 const disableboxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
 };
 const enableboxes=()=>{
    for( let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 };

 const showWinner=(winner)=>{
    msg.innerText=`congratulations,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
 };

const checkWinner=() =>{
    for ( let pattern of winingpattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
           if(pos1val===pos2val && pos2val===pos3val){
              console.log("winner",pos1val);
              showWinner(pos1val);
            }
        }
    }
 };

newgamebth.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
