let boxes=document.querySelectorAll(".box");
let newgame=document.querySelector(".new-game");
let resetgame=document.querySelector(".reset-btn");
let winner=document.querySelector(".msg");

let turnO=true;

const patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

const showWinner = (pattern1) =>{
    winner.classList.remove("hide");
    newgame.classList.remove("hide");
     winner.innerText=`the winner is ${pattern1}`;
     console.log(pattern1)
}

const reset = () =>{
    for(let box of boxes){
        box.innerText="";
        newgame.classList.add("hide");
        winner.classList.add("hide");
    }
}

const ngame = () =>{
    for(let box of boxes){
        box.innerText="";
        winner.classList.add("hide");
    }
}
const checkWinner = () => {
     for(let pattern of patterns ){
       let pattern1=boxes[pattern[0]].innerText;
       let pattern2=boxes[pattern[1]].innerText;
       let pattern3=boxes[pattern[2]].innerText;
       if(pattern1!=""&&pattern2!=""&&pattern3!=""){
        if(pattern1===pattern2&&pattern2==pattern3){
            showWinner(pattern1);
        }
       }
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
        box.disabled=false;
    })
})

resetgame.addEventListener("click",reset);
newgame.addEventListener("click",ngame);
