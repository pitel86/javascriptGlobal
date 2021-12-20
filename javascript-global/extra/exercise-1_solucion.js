
let cardArray = [
  {
    id: 1,
    name: "earth",
    img: "public/exercise-1/earth.svg",
  },
  {
    id: 2,
    name: "jupiter",
    img: "public/exercise-1/jupiter.svg",
  },
  {
    id: 3,
    name: "mars",
    img: "public/exercise-1/mars.svg",
  },
  {
    id: 4,
    name: "mercury",
    img: "public/exercise-1/mercury.svg",
  },
  {
    id: 5,
    name: "saturn",
    img: "public/exercise-1/saturn.svg",
  },
  {
    id: 6,
    name: "uranus",
    img: "public/exercise-1/uranus.svg",
  },
  {
    id: 7,
    name: "earth",
    img: "public/exercise-1/earth.svg",
  },
  {
    id: 8,
    name: "jupiter",
    img: "public/exercise-1/jupiter.svg",
  },
  {
    id: 9,
    name: "mars",
    img: "public/exercise-1/mars.svg",
  },
  {
    id: 10,
    name: "mercury",
    img: "public/exercise-1/mercury.svg",
  },
  {
    id: 11,
    name: "saturn",
    img: "public/exercise-1/saturn.svg",
  },
  {
    id: 12,
    name: "uranus",
    img: "public/exercise-1/uranus.svg",
  },
];

const universeImg = "public/exercise-1/universe.svg";
const tickImg = "public/exercise-1/tick.svg";

let card1;
let card2;

let attemps$$ = document.querySelector('[data-function="attempts"]');
let score$$ = document.querySelector('[data-function="score"]');
let attemps = 0;
let score = 0;

const drawCards = () => {
  cardArray = cardArray.sort(() => Math.random() - 0.5);
  let cardGrid$$ = document.querySelector(".b-grid");
  for (const card of cardArray) {
    let img$$ = document.createElement("img");
    img$$.setAttribute("src", universeImg);
    img$$.addEventListener("click", () => checkCard(img$$, card));
    cardGrid$$.appendChild(img$$);
  }
};

const checkCard = (img$$, card) => {
  console.log("Entro: ", card1, card2);
  console.log(img$$.getAttribute("src"));
  if (img$$.getAttribute("src") !== tickImg) {
    if (card1 === undefined) {
      card1 = { img$$, ...card };
      console.log("card1: ", card1);
      img$$.setAttribute("src", card.img);
    } else if (card2 === undefined) {
      if(card1.img$$ != img$$){
        card2 = { img$$, ...card };
        console.log("card2: ", card2);
        img$$.setAttribute("src", card.img);
      }
    }
    setTimeout(() => {
      if (card1 !== undefined && card2 !== undefined) {
        if (card1.name == card2.name) {
          card1.img$$.setAttribute("src", tickImg);
          card2.img$$.setAttribute("src", tickImg);
          score$$.innerHTML = ++score;
          attemps$$.innerHTML = ++attemps;
          card1 = undefined;
          card2 = undefined;
        } else {
          attemps$$.innerHTML = ++attemps;
          card1.img$$.setAttribute("src", universeImg);
          card2.img$$.setAttribute("src", universeImg);
          card1 = undefined;
          card2 = undefined;
        }
      }
    }, 1500);
  }
};

drawCards();
