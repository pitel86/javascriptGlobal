var input$$ = document.querySelector('[data-function="questions-number"]');
var startButton$$ = document.querySelector('[data-function="start-game"]');
var checkButton$$ = document.querySelector('[data-function="check-game"]');
var gameDiv$$ = document.querySelector('[data-function="gameboard"]');
var resultDiv$$ = document.querySelector('[data-function="result"]');
gameDiv$$.className = "gameboard";
let questions = [];
let replies = [];

startButton$$.addEventListener("click", () => {
  resetGame();
  startGame();
});

checkButton$$.addEventListener("click", () => {
  checkReplies();
});

const startGame = async () => {
  const res = await fetch(
    `https://opentdb.com/api.php?type=multiple&amount=${input$$.value}`
  );
  const apiInfo = await res.json();
  drawQuestions(apiInfo.results);
};

const resetGame = () => {
  questions = [];
  replies = [];
  gameDiv$$.innerHTML = "";
  resultDiv$$.innerHTML = "";
};

const drawQuestions = async (questionsResult) => {
  console.log(questionsResult);
  for (let i = 0; i < questionsResult.length; i++) {
    const question = questionsResult[i];

    question.answers = [
      question.correct_answer,
      ...question.incorrect_answers,
    ].sort(() => Math.random() - 0.5);
    questions.push(question);

    let myDiv$$ = document.createElement("div");
    myDiv$$.className = 'question';
    let myh4$$ = document.createElement("h4");
    myh4$$.textContent = question.question;
    myDiv$$.appendChild(myh4$$);
    for (let j = 0; j < question.answers.length; j++) {
      const answer = question.answers[j];

      let myp$$ = document.createElement("p");
      myp$$.textContent = answer;
      if(question.correct_answer == answer){
          myp$$.classList.add('correct');
      }
      myp$$.addEventListener("click", () => {
        let oldAnswer$$ =  myDiv$$.querySelector('.check');
          if(oldAnswer$$){
              oldAnswer$$.classList.remove('check');
          }
        myp$$.className = 'check';
        getReply(myp$$, i);
      });
      myDiv$$.appendChild(myp$$);
    }
    gameDiv$$.appendChild(myDiv$$);
  }
  console.log(questions);
};

const getReply = (myp$$, i) => {
  replies[i] = myp$$.textContent;
  console.log(replies);
};

const checkReplies = () => {
  let count = 0;
  let checked = document.querySelectorAll('.check');
  let corrected = document.querySelectorAll('.correct');
  console.log(corrected)
  for (let i = 0; i < corrected.length; i++) {
    corrected[i].classList.add('true');
  }
  for (let i = 0; i < replies.length; i++) {
    const reply = replies[i];
    if (reply === questions[i].correct_answer) {
      checked[i].classList.add('true');
      count++;
    }else{
        checked[i].classList.add('false');
    }
  }
  let myP$$ = document.createElement("p");
  myP$$.textContent = `Juego terminado. Has acertado ${count} preguntas y fallado ${
    questions.length - count
  }`;
  resultDiv$$.appendChild(myP$$);
};
