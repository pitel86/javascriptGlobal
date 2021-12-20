const myDivs$$ = document.querySelectorAll('.b-square');
const myScore$$ = document.querySelector('[data-function="score"]');
const myTime$$ = document.querySelector('[data-function="time-left"]');
let hittedDigg = false;

for (let i = 0; i < myDivs$$.length; i++) {
    const myDiv$$ = myDivs$$[i];
    myDiv$$.addEventListener('click',()=>{hitDiv(myDiv$$)});
}

let randomInterval = setInterval(() => {randomPosition()}, 500);
let timeInterval = setInterval(() => {discountTime()}, 1000);

function hitDiv(myDiv$$) {
    if(myDiv$$.classList.contains('b-mole') && !hittedDigg){
        hittedDigg = true;
        myScore$$.innerHTML = Number(myScore$$.textContent) + 1;
    }
}

function randomPosition() {
    hittedDigg = false;
    let myDiv$$ = document.querySelector('.b-mole');
    if(myDiv$$ !== null){
        myDiv$$.classList.remove('b-mole');
    }
    randomDiv = Math.floor(Math.random() * myDivs$$.length);
    myDivs$$[randomDiv].classList.add('b-mole');    
}

function discountTime() {
    myTime$$.innerHTML = Number(myTime$$.textContent) - 1;
    if(myTime$$.textContent == "0"){
        clearInterval(randomInterval);
        clearInterval(timeInterval);
        alert(`El tiempo acabó: has conseguido ${myScore$$.textContent} puntos`)
    }
}