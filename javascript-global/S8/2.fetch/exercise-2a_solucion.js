const baseUrl = 'https://api.nationalize.io';
let input$$ = document.querySelector('input');
let button$$ = document.querySelector('button');

button$$.addEventListener('click', ()=> apiConsult(input$$.value));

function apiConsult(value) {
    fetch(`${baseUrl}?name=${value}`)
      .then((res) => res.json())
      .then((myJson) => console.log(myJson));    
}
