let game=[];
let user=[];
let level=0;
let gameStarted=false;

document.addEventListener("click",function(){
    if(gameStarted==false){
        gameStarted=true;
        levelUp();
    }
    }
);

let a=document.querySelector("#a");
let b=document.querySelector("#b");
let c=document.querySelector("#c");
let d=document.querySelector("#d");

a.addEventListener("click",function(){
    if(gameStarted==true){
        pressbtn(a)  
        checkAns(user.length-1)
        console.log(user)    
    }
    userflash(a)
    console.log("button one was clicked");
});

b.addEventListener("click",function(){
    if(gameStarted==true){
        pressbtn(b) 
        checkAns(user.length-1) 
        console.log(user)  
    }
    userflash(b)
    console.log("button two was clicked");
});

c.addEventListener("click",function(){
    if(gameStarted==true){
        pressbtn(c) 
        checkAns(user.length-1)
        console.log(user)   
    }
    userflash(c)
    console.log("button three was clicked");
});

d.addEventListener("click",function(){
    if(gameStarted==true){
        pressbtn(d)  
        checkAns(user.length-1)
        console.log(user)  
    }
    userflash(d)
    console.log("button four was clicked");
});


function levelUp(){
    user=[];
    level++;
    let h3=document.querySelector('h3');
    h3.innerText=`level ${level}`;
    // gameBegin(level);
    randomTile();
}

function randomTile(){
let n=Math.floor(Math.random()*4)+1;
game.push(n);
if(n==1){
    gameflash(a);
}
else if(n==2){
    gameflash(b);
}
else if(n==3){
    gameflash(c);
}
else if(n==4){
    gameflash(d);
}}

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
     btn.classList.remove("flash");
    },250);
 }
 function userflash(btn){
    btn.classList.add("greenflash");
    setTimeout(function(){
     btn.classList.remove("greenflash");
    },250);
 }

 function pressbtn(btn){
    gameflash(btn)
   if(btn==a){
    user.push(1);
   }
   else if(btn==b){
   user.push(2)
   }
   else if(btn==c){
    user.push(3)
    }   
    else if(btn==d){
        user.push(4)
        }
 }
function checkAns(idx){
console.log("current level:",level)
if(game[idx]===user[idx]){
    if(user.length==game.length){
        setTimeout(levelUp,1000);
    }
     }
     else{
        let h3=document.querySelector('h3');
        h3.innerHTML=`khel khatam betaa! press any key to start. score:${level*10}`; 
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"},150);
        reset();
     }
}
function reset(){
    game=[];
    user=[];
    gameStarted=false;
    level=0;
}
