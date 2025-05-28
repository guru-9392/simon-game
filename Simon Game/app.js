let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let maxscore=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        console.log("game was started");
        levelup();
    }
});
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}

function userflash(btn){
    btn.classList.add("userflash"); 
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let ranind=Math.floor(Math.random()*3);
    let rancol=btns[ranind];
    let ranbtn=document.querySelector(`.${rancol}`);
    gameseq.push(rancol);
    console.log(gameseq);
    gameflash(ranbtn);
}
function checkans(ind){
    if(userseq[ind]===gameseq[ind]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your Score was<b>${level}</b><br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        maxscore=Math.max(level,maxscore);
        let max=document.querySelector("h2");
        max.innerHTML=`your high score is ${maxscore-1} <br>your score is ${level-1} <br> press any key to enter the new game`;
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="burlywood";
        },300);
        reset();
    }
}

function btnpress(){
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
 function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
 }