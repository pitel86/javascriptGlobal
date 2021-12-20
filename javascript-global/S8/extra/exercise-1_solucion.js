const baseUrl = "https://breakingbadapi.com/api/characters";

const apiConsult = () => {
  fetch(baseUrl)
    .then((res) => res.json())
    .then((myJson) => {
      drawPeople(myJson);
    });
};

const drawPeople = (people) => {
  for (let i = 0; i < people.length; i++) {
    let person = people[i];
    //console.log(person);
    let myDiv$$ = document.createElement("div");
    myDiv$$.innerHTML = `
        <h3>${person.name}</h3>
        <img src="${person.img}" style="max-width:300px">
    `;
    document.body.appendChild(myDiv$$);
  }
};

apiConsult();
