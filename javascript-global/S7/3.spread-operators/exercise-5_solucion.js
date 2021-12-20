const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

const newColors = [...colors];
newColors.splice(2,1);

console.log(colors);
console.log(newColors);