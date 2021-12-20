const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let newUl$$ = document.createElement('ul');
let myDiv$$ = document.querySelector('[data-function="printHere"]');

for (let i = 0; i < cars.length; i++) {
    let newLi$$ = document.createElement('li');
    newLi$$.textContent = cars[i];
    newUl$$.appendChild(newLi$$);
}

myDiv$$.appendChild(newUl$$);