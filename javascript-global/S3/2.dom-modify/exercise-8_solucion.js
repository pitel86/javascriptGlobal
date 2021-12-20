let myDivs = document.querySelectorAll('div');
let myP = document.createElement('p');
myP.textContent = "Voy en medio!";

document.body.insertBefore(myP,myDivs[1])