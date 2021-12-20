const imgXUrl = "./public/exercise-4/x.png";
const imgSkullUrl = "./public/exercise-4/skull.png";
const imgChestUrl = "./public/exercise-4/chest.png";

let myTbody$$ = document.querySelector('[data-function="board"]');
let attemps$$ = document.querySelector('[data-function="attempts"]');
let myButton$$ = document.createElement("button");
let numAttemps = 0;

let numRows = 0;
let numColumns = 0;
let randomRow = 0;
let randomColumn = 0;
let hayGanador = false;

function drawGame() {
  numRows = prompt("Dime número de filas");
  numColumns = prompt("Dime número de columnas");
  setZero();
  setWinner();
  for (let i = 0; i < numRows; i++) {
    myTr$$ = document.createElement("tr");
    for (let j = 0; j < numColumns; j++) {
      let myTd$$ = document.createElement("td");
      let myImg$$ = document.createElement("img");
      myImg$$.setAttribute("src", imgXUrl);
      myImg$$.addEventListener("click", () => isGood(myImg$$, i, j));
      myTd$$.appendChild(myImg$$);
      myTr$$.appendChild(myTd$$);
    }
    myTbody$$.appendChild(myTr$$);
  }
}

function setZero() {
  myTbody$$.innerHTML = "";
  myButton$$.remove();
  numAttemps = 0;
  attemps$$.innerHTML = 0;
  hayGanador = false;
}

function setWinner() {
  randomRow = Math.floor(Math.random() * numRows);
  randomColumn = Math.floor(Math.random() * numColumns);
}

function isGood(myImg$$, x, y) {
  //console.log(myImg$$, x, y);
  if (x == randomRow && y == randomColumn) {
    myImg$$.setAttribute("src", imgChestUrl);
    myButton$$.innerText = "Reiniciar";
    myButton$$.addEventListener("click", drawGame);
    document.body.appendChild(myButton$$);
    hayGanador = true;
    alert("You WIN");
  } else {
    if(!hayGanador){
      attemps$$.innerHTML = ++numAttemps;
      myImg$$.setAttribute("src", imgSkullUrl);
    }
  }
}

drawGame();
