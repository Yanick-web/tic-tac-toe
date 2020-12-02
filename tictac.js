// TAC GAME BEGINS HERE
let boxes = document.querySelectorAll('.game div');
const start = document.querySelector('.start-game');
const player_X = document.querySelector('.x-tac');
const x_span = document.querySelector('.x-tac span')
const player_O = document.querySelector('.o-tac');
const xWinSpan = document.querySelector('#xwin');
const oWinSpan = document.querySelector('#owin');
const draws = document.querySelector('#draw');

let content;
let  P1 = false, P2 = false;
let color;
let xa = []; // tracks x wins
let oa = []; // tracks o wins
let da = []; // tracks draws



// TAC EVENT HANDLERS
player_X.addEventListener('click', function(event){
    
    P1 = true;
    content = 'X';
    color = 'crimson';

  
});
player_O.addEventListener('click', (event)=>{
    P2 = true;
    content = 'O';
    color = 'darkblue';
});

start.addEventListener('click', ()=>{

    resetGame();
})

for ( let box of boxes){
    box.addEventListener('click', function(){
        this.style.backgroundColor = color;
        this.textContent = content;

        checkForWin();

let player = checkForWin();

if(player=== 'X'){
xa.push(player);

} 

if(player=== 'O'){
oa.push(player);

} 

if(player=== 'none'){
da.push('n');

} 

        displayWin(player);

    });
}

//updating scores
setInterval(() => {
    let numb1 = xa.length;
    let numb2 = oa.length;
    let numb3 = da.length;
    xWinSpan.textContent = `X = ${numb1}`;
    oWinSpan.textContent = `O = ${numb2}`;
    draws.textContent = `Draws = ${numb3}`;
}, 500);

//functions
function checkForWin(){
    let winner;
    let Oboxes = [];
    let Xboxes = [];
for(let i = 0; i < boxes.length; i++ ){
 

//
    if(boxes[i].textContent === 'O' ){
    const name = boxes[i].getAttribute('class');
    Oboxes.push(name);    
   }

       if(boxes[i].textContent === 'X' ){
   const name = boxes[i].getAttribute('class');
    Xboxes.push(name);
    }

    }
//checking Oboxes and Xboxes
(function case1() {
let countO = 0;
let countX = 0;
for (let i = 0; i < Oboxes.length; i++) {
if(Oboxes[i] === 'box1'){countO++;}
if(Oboxes[i] === 'box2'){countO++;}
if(Oboxes[i] === 'box3'){countO++;}
if(countO == 3){
    console.log('O wins');
    winner = 'O';
}
}

for (let i = 0; i < Xboxes.length; i++) {
if(Xboxes[i] === 'box1'){countX++;}
if(Xboxes[i] === 'box2'){countX++;}
if(Xboxes[i] === 'box3'){countX++;}
if(countX == 3){
    winner = 'X';
}
}
})();

//case 2
(function case2() {
let countO = 0;
let countX = 0;
for (let i = 0; i < Oboxes.length; i++) {
if(Oboxes[i] === 'box4'){countO++;}
if(Oboxes[i] === 'box5'){countO++;}
if(Oboxes[i] === 'box6'){countO++;}
if(countO == 3){
    winner = 'O';
}
}

for (let i = 0; i < Xboxes.length; i++) {
if(Xboxes[i] === 'box4'){countX++;}
if(Xboxes[i] === 'box5'){countX++;}
if(Xboxes[i] === 'box6'){countX++;}
if(countX == 3){
    winner = 'X';
}
}
})();

//case 3
(function case3() {
let countO = 0;
let countX = 0;
for (let i = 0; i < Oboxes.length; i++) {
if(Oboxes[i] === 'box7'){countO++;}
if(Oboxes[i] === 'box8'){countO++;}
if(Oboxes[i] === 'box9'){countO++;}
if(countO == 3){
winner = 'O';
}
}

for (let i = 0; i < Xboxes.length; i++) {
if(Xboxes[i] === 'box7'){countX++;}
if(Xboxes[i] === 'box8'){countX++;}
if(Xboxes[i] === 'box9'){countX++;}
if(countX == 3){
    winner = 'X';
}
}
})();

//case4
(function case4() {
let countO = 0;
let countX = 0;
for (let i = 0; i < Oboxes.length; i++) {
if(Oboxes[i] === 'box1'){countO++;}
if(Oboxes[i] === 'box4'){countO++;}
if(Oboxes[i] === 'box7'){countO++;}
if(countO == 3){
    winner = 'O';
}
}

for (let i = 0; i < Xboxes.length; i++) {
if(Xboxes[i] === 'box1'){countX++;}
if(Xboxes[i] === 'box4'){countX++;}
if(Xboxes[i] === 'box7'){countX++;}
if(countX == 3){
    winner = 'X';
}
}
})();

//case5 
(function case5() {
let countO = 0;
let countX = 0;
for (let i = 0; i < Oboxes.length; i++) {
if(Oboxes[i] === 'box2'){countO++;}
if(Oboxes[i] === 'box5'){countO++;}
if(Oboxes[i] === 'box8'){countO++;}
if(countO == 3){
 winner = 'O';

}
}

for (let i = 0; i < Xboxes.length; i++) {
if(Xboxes[i] === 'box2'){countX++;}
if(Xboxes[i] === 'box5'){countX++;}
if(Xboxes[i] === 'box8'){countX++;}
if(countX == 3){
    winner = 'X';
}
}
})();

//case 6
(function case6() {
let countO = 0;
let countX = 0;
for (let i = 0; i < Oboxes.length; i++) {
if(Oboxes[i] === 'box3'){countO++;}
if(Oboxes[i] === 'box6'){countO++;}
if(Oboxes[i] === 'box9'){countO++;}
if(countO == 3){
winner = 'O';
}
}

for (let i = 0; i < Xboxes.length; i++) {
if(Xboxes[i] === 'box3'){countX++;}
if(Xboxes[i] === 'box6'){countX++;}
if(Xboxes[i] === 'box9'){countX++;}
if(countX == 3){
    winner = 'X';
}
}
})();

//case 7
(function case7() {
let countO = 0;
let countX = 0;
for (let i = 0; i < Oboxes.length; i++) {
if(Oboxes[i] === 'box1'){countO++;}
if(Oboxes[i] === 'box5'){countO++;}
if(Oboxes[i] === 'box9'){countO++;}
if(countO == 3){
winner = 'O';
}
}

for (let i = 0; i < Xboxes.length; i++) {
if(Xboxes[i] === 'box1'){countX++;}
if(Xboxes[i] === 'box5'){countX++;}
if(Xboxes[i] === 'box9'){countX++;}
if(countX == 3){
    winner = 'X';
}
}
})();

//case 8
(function case8() {
let countO = 0;
let countX = 0;
for (let i = 0; i < Oboxes.length; i++) {
if(Oboxes[i] === 'box3'){countO++;}
if(Oboxes[i] === 'box5'){countO++;}
if(Oboxes[i] === 'box7'){countO++;}
if(countO == 3){
    winner = 'O';
}
}

for (let i = 0; i < Xboxes.length; i++) {
if(Xboxes[i] === 'box3'){countX++;}
if(Xboxes[i] === 'box5'){countX++;}
if(Xboxes[i] === 'box7'){countX++;}
if(countX == 3){
  winner = 'X';
}
}
})();

//loosing case
(function loss(){
    let sum = Oboxes.length + Xboxes.length;
if(sum == 9 && (winner !== 'X'&& winner !== 'O')){
    winner = 'none';

}
})();


return winner;
}


//displaying the winner
function displayWin(player){

    //winner 'O'/'X'/none
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const reset = document.createElement('button');
    reset.textContent = 'Play Again';
    reset.addEventListener('click', function() {
        resetGame();
        div.classList.toggle('remove');
        setTimeout(() => {
            document.body.removeChild(div);
        }, 1000);
        console.log('restarting the game');
    });
    div.setAttribute('class', 'win');
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(reset);
    

    if(player === 'X'){
        h1.textContent = "X wins";
        p.textContent = 'X wins the game';
        document.body.appendChild(div);
        console.log(' X  wins');
    }
    if(player === 'O'){
        h1.textContent = "O wins";
        p.textContent = 'O wins the game';
        document.body.appendChild(div);
        console.log('O  wins');
    }
    if(player === 'none'){
        h1.textContent = "DRAW GAME";
        p.textContent = 'X and O both draw';
        document.body.appendChild(div);
        console.log("draw game"); 
    }



}


function resetGame(){
    P1 = P2 = false;
    color = 'white';

xWinSpan.textContent = `X = ${xa.length}`;
oWinSpan.textContent = `O = ${oa.length}`;
draws.textContent = `Draws = ${da.length}`;
        boxes.forEach(function(box) {
        box.textContent = '-';
        box.style.backgroundColor = color;

    });

}
