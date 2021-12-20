const baseUrl = "https://api.nationalize.io";
let input$$ = document.querySelector("input");
let button$$ = document.querySelector("button");

button$$.addEventListener("click", () => apiConsult(input$$.value));

function apiConsult(value) {
  fetch(`${baseUrl}?name=${value}`)
    .then((res) => res.json())
    .then((myJson) => {
      const countries = myJson.country;
      const name = myJson.name;
      console.log(countries);
      crearP(countries, name);
    });
}

function crearP(countries, name) {
  for (let i = 0; i < countries.length; i++) {
    let myP$$ = document.createElement("p");
    let percent = Math.floor(countries[i].probability * 100);
    myP$$.innerHTML = `El nombre ${name} tiene un ${percent}  porciento de ser de  ${countries[i].country_id} `;
    let myButton$$ = document.createElement("button");
    myButton$$.textContent = "X";
    myButton$$.addEventListener("click", () => {
      myP$$.remove();
    });
    myP$$.appendChild(myButton$$);
    document.body.appendChild(myP$$);
  }
}
