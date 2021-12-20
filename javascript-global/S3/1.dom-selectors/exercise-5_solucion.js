//Dado el siguiente html usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
let myElements = document.querySelectorAll('[data-function="testMe"]');
for (let i = 0; i < myElements.length; i++) {
    console.log(myElements[i]);
    
}