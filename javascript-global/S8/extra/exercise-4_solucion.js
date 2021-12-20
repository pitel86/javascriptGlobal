const planetDiv$$ = document.querySelector('[data-function="planets"]');
const charactersDiv$$ = document.querySelector('[data-function="characters"]');

const getPlanets = async () => {
  const res = await fetch("http://localhost:3000/planets");
  const planets = await res.json();
  console.log(planets);
  drawPlanets(planets);
};
const getCharacters = async (idPlanet) => {
  charactersDiv$$.innerHTML = "";
  const res = await fetch(
    `http://localhost:3000/characters?idPlanet=${idPlanet}`
  );
  const characters = await res.json();
  console.log(characters);
  drawSearch();
  drawCharacters(characters);
};

const getCharacter = async (name) => {
  charactersDiv$$.innerHTML = "";
  const res = await fetch(
    `http://localhost:3000/characters?name=${name}`
  );
  const characters = await res.json();
  console.log(characters);
  drawSearch();
  drawCharacters(characters);
};

const drawPlanets = (planets) => {
  for (let i = 0; i < planets.length; i++) {
    const planet = planets[i];
    const newPlanetDiv$$ = document.createElement("div");
    newPlanetDiv$$.innerHTML = `
        <h3>${planet.name}</h3>
        <img src="${planet.image}" style="max-height:200px; margin:10px;">
    `;
    newPlanetDiv$$.addEventListener("click", () => {
      getCharacters(planet.id);
    });
    planetDiv$$.appendChild(newPlanetDiv$$);
  }
};

const drawCharacters = (characters) => {
  for (let i = 0; i < characters.length; i++) {
    const character = characters[i];
    const newCharacterDiv$$ = document.createElement("div");
    newCharacterDiv$$.innerHTML = `
            <h3>${character.name}</h3>
            <img src="${character.avatar}" style="max-height:400px; margin:10px;">
            <p>${character.description}</p>
        `;
    charactersDiv$$.appendChild(newCharacterDiv$$);
  }
};

const drawSearch = () => {
  const input$$ = document.createElement("input");
  const button$$ = document.createElement("button");
  button$$.textContent = 'buscar';
  button$$.addEventListener("click", () => {
    getCharacter(input$$.value);
  });
  charactersDiv$$.appendChild(input$$);
  charactersDiv$$.appendChild(button$$);
};

getPlanets();
