const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
let newUl$$ = document.createElement('ul');

for (let i = 0; i < countries.length; i++) {
    let newLi$$ = document.createElement('li');
    newLi$$.textContent = countries[i];
    newUl$$.appendChild(newLi$$);
}

document.body.appendChild(newUl$$);