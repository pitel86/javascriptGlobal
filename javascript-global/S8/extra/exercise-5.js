const baseUrl = 'https://opentdb.com/api.php?type=multiple&amount=';
let questionsAnswered = [];
const gameBoard$$ = document.querySelector('[data-function="gameboard"]');

const startGame = () => {
    resetGame();
    const input$$ = document.querySelector('[data-function="questions-number"]');

    fetch(baseUrl + input$$.value).then(res => res.json()).then(res => {
        createQuestions(res.results)
    })
}

const resetGame =() => {
    questionsAnswered = [];
    gameBoard$$.innerHTML = '';
}

const createQuestions = (questions) => {
    for (let index = 0; index < questions.length; index++) {
        const question = questions[index];

        const h4$$ = document.createElement('h4');
        h4$$.textContent = question.question;

        gameBoard$$.appendChild(h4$$);
        createAnwsers([question.correct_answer, ...question.incorrect_answers], question.correct_answer, index);
    }
}

const createAnwsers = (answers, correctAnswer, questionIndex) => {
    for (let index = 0; index < answers.length; index++) {
        const answer = answers[index];
        const p$$ = document.createElement('p');
        p$$.textContent = answer;
        p$$.addEventListener('click', () => { checkAnswer(answer, correctAnswer, questionIndex)})
        gameBoard$$.appendChild(p$$);
    }
}

const checkAnswer = (answer, correctAnswer, questionIndex) => {
    questionsAnswered[questionIndex] = answer === correctAnswer;
    console.log(questionsAnswered);
    // IGUAL
    // if (answer === correctAnswer) {
    //     questionsAnswered[questionIndex] = true;
    // } else{
    //     questionsAnswered[questionIndex] = false;
    // }
}

const checkGame = () => {
    const results = questionsAnswered.reduce((accumulator, questionAnswered) => {
        return { correctResult: questionAnswered ? accumulator.correctResult + 1 : accumulator.correctResult, incorrectResult: !questionAnswered ? accumulator.incorrectResult + 1 : accumulator.incorrectResult }
    }, { correctResult: 0, incorrectResult: 0 })

    const p$$ = document.createElement(`p`);
    p$$.textContent = `You have ${results.correctResult} correct answers and ${results.incorrectResult} incorrect answers.` 
    gameBoard$$.appendChild(p$$);
}
// IGUAL
// const checkGameWithFor = () => {
//     let correctResult = 0;
//     let incorrectResult = 0;
//     for (const questionAnswered of questionsAnswered) {
//         if(questionAnswered){
//             correctResult++;
//         } else {
//             incorrectResult++;
//         }
//     }

//     const p$$ = document.createElement(`p`);
//     p$$.textContent = `You have ${correctResult} correct answers and ${incorrectResult} incorrect answers.` 
//     gameBoard$$.appendChild(p$$);
// }

const button$ = document.querySelector('[data-function="start-game"]');

button$.addEventListener('click', startGame);

const checkButton$ = document.querySelector('[data-function="check-game"]');

checkButton$.addEventListener('click', checkGame);

