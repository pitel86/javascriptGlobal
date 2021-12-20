let myDivs = document.querySelectorAll('.fn-insert-here');
for (let i = 0; i < myDivs.length; i++) {
    let myP = document.createElement('p');
    myP.textContent = "Voy dentro!";
    myDivs[i].appendChild(myP);
    
}
