const userAnwsers = [];

const confirmExample = (description) => {
    return confirm(description)
}

const promptExample = (description) => {
    return prompt(description)
}

const father = (description, callback) => {
    userAnwsers.push(callback(description));
}

father("hola", confirmExample);
father("hola", promptExample);

father("adios",confirmExample);
father("adios",promptExample);

console.log(userAnwsers);