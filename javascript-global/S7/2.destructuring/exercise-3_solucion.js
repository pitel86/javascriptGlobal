const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const {race, name} = animalFunction();
console.log(name);
console.log(race);