/* Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si   introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'. */

const streamers = [
    { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
    { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
    { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
    { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
  ];
  const ul$$ = document.createElement("ul");
  
  const runSearch = () => {
    const search = streamers.filter((streamer) =>
      streamer.name.toLowerCase().includes(selectedInput$$.value.toLowerCase())
    );
    let ulContent = "";
    for (const result of search) {
        ulContent += `<li>${result.name}</li>`;
    }
    ul$$.innerHTML = ulContent;
  };
  
  const selectedInput$$ = document.body.querySelector(
    '[data-function="toFilterStreamers"]'
  );
  
  selectedInput$$.addEventListener("input", runSearch);
  
  document.body.appendChild(ul$$);
  