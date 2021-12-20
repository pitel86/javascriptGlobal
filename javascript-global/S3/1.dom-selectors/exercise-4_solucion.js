//Dado el siguiente html usa querySelector para mostrar por consola todos los elementos con la clase .pokemon
let myPokes = document.querySelectorAll('.pokemon');
for (let i = 0; i < myPokes.length; i++) {
    console.log(myPokes[i]);    
}
