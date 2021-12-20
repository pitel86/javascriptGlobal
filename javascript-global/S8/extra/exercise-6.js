const characterDiv$$ = document.querySelector(".characters");
const battleDiv$$ = document.querySelector(".battle");
const turnsDiv$$ = document.querySelector(".turns");
const winnerDiv$$ = document.querySelector(".winner");
let randomTurn;
let character1;
let character2;

const apiConsult = async () => {
  const res = await fetch("http://localhost:3000/characters");
  const characters = await res.json();

  drawCharacters(characters);
};

const drawCharacters = (characters) => {
  for (let i = 0; i < characters.length; i++) {
    const character = characters[i];
    const newcharacterDiv$$ = document.createElement("div");
    newcharacterDiv$$.innerHTML = `
          <div class="divImg"><img src="${character.avatar}" ></div>
          <h3>${character.name}</h3>
          <p class="vida vida1">Vida: ${character.vitality}</p>
          <p class="critico">Critico: ${character.critic}</p>
          <p class="defensa">Defensa: ${character.defense}</p>
      `;
    newcharacterDiv$$.addEventListener("click", () => {
      selectCharacter(character);
    });
    characterDiv$$.appendChild(newcharacterDiv$$);
  }
};

const selectCharacter = (character) => {
  if (character1 === undefined) {
    character1 = character;
  } else if (character2 === undefined) {
    character2 = character;
  }
  if (character1 !== undefined && character2 !== undefined) {
    console.log(character1, character2);
    randomTurn = Math.floor(Math.random() * 2) + 1;
    battle();
  }
};

const battle = () => {
  characterDiv$$.innerHTML = "";
  battleDiv$$.innerHTML = `<div>
    <div class="divImg"><img src="${character1.avatar}" ></div>
    <h3>${character1.name}</h3>
    <p class="vida vida1">Vida: ${character1.vitality}</p>
    <p class="critico">Critico: ${character1.critic}</p>
    <p class="defensa">Defensa: ${character1.defense}</p>
    </div>
    <div>
    <div class="divImg"><img src="${character2.avatar}" ></div>
    <h3>${character2.name}</h3>
    <p class="vida vida2">Vida: ${character2.vitality}</p>
    <p class="critico">Critico: ${character2.critic}</p>
    <p class="defensa">Defensa: ${character2.defense}</p>
    </div>`;

  turnBattle();
};

const turnBattle = () => {
  randomTurn == 1
    ? attackCharacter(character1, character2)
    : attackCharacter(character2, character1);
};

const messageToBattle = (message) => {
  myp$$ = document.createElement("p");
  myp$$.innerHTML = message;
  turnsDiv$$.appendChild(myp$$);
};

const changeTurn = () => {
  randomTurn == 1 ? (randomTurn = 2) : (randomTurn = 1);
};

const attackCharacter = (characterAttack, characterDefense) => {
  let totalDamage = 0;
  let textDamage = `<h4>Le toca al jugador  ${randomTurn}</h4>`;
  for (let i = 0; i < characterAttack.damage.length; i++) {
    const dice = characterAttack.damage[i];
    let positionD = dice.indexOf("d");
    let numDice = dice.slice(0, positionD);
    let attackDice = dice.slice(positionD + 1);

    textDamage += `<p>Dado ${i + 1}: <b>${dice}</b></p>`;

    for (let j = 0; j < numDice; j++) {
      let dadoDamage = Math.floor(Math.random() * attackDice) + 1;
      dadoDamage == characterAttack.critic ? dadoDamage * 2 : dadoDamage;
      textDamage += `Tirada ${j + 1}: <b>${dadoDamage}</b>`;
      j + 1 != numDice ? (textDamage += ", ") : textDamage;
      totalDamage += dadoDamage;
    }
  }

  let reciveDamage = totalDamage - characterDefense.defense;
  characterDefense.vitality -= reciveDamage;
  textDamage += `<p></p>Ataque total: <b>${totalDamage}</b>,  
                    Defensa: <b>${characterDefense.defense}</b>,  
                    Pierde:  <b>${reciveDamage}</b>, 
                    Vida Restante del defensor: <b>${characterDefense.vitality}</b>
                </p>`;
  messageToBattle(textDamage);
  if (characterDefense.vitality <= 0) {
    winner(`Ha ganado el ${characterAttack.name}`);
  } else {
    changeTurn();
    setTimeout(() => {
      turnBattle();
    }, 1000);
  }
};

const winner = (text) => {
  myh3$$ = document.createElement("h3");
  myh3$$.innerHTML = text;
  myButton$$ = document.createElement("button");
  myButton$$.textContent = "Empezar de nuevo";
  myButton$$.addEventListener("click", () => reset());

  winnerDiv$$.appendChild(myh3$$);
  winnerDiv$$.appendChild(myButton$$);
};

const reset = () => {
  character1 = undefined;
  character2 = undefined;
  characterDiv$$.innerHTML = "";
  battleDiv$$.innerHTML = "";
  turnsDiv$$.innerHTML = "";
  winnerDiv$$.innerHTML = "";
  apiConsult();
};

apiConsult();
