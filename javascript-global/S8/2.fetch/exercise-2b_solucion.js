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
      crearP(countries, name)
    });
}

function crearP(countries, name) {
    for (let i = 0; i < countries.length; i++) {
      let myp$$ = document.createElement("p");
      let percent = Math.floor(countries[i].probability * 100);
      myp$$.innerHTML = `El nombre ${name} tiene un ${percent}  porciento de ser de  ${countries[i].country_id}`;
      document.body.appendChild(myp$$);
    }
}
