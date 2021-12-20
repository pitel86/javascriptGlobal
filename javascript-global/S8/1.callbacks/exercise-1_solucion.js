
const numbersList = [];

function sum(a,b){
    return a + b;
}

function substract(a,b){
    return a- b;
}

function father(a, b, callback){
    const result = callback(a,b);
    numbersList.push(result);
}

father(2,4,sum);
father(3,4,substract);
father(2,3,sum);
father(6,4,substract);
father(7,4,sum);

console.log (numbersList);