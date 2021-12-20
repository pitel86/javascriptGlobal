const alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true }, { name: 'Lucia Aranda', T1: true, T2: false, T3: true }, { name: 'Abel Cabeza', T1: false, T2: true, T3: true }, { name: 'Alfredo Blanco', T1: false, T2: false, T3: false }, { name: 'Raquel Benito', T1: true, T2: true, T3: true }
]

for (let index = 0; index < alumns.length; index++) {
     pepe = alumns[index];

    let approvedCount = 0;
    approvedCount = pepe.T1 ? approvedCount + 1 : approvedCount;
    approvedCount = pepe.T2 ? approvedCount + 1 : approvedCount;
    approvedCount = pepe.T3 ? approvedCount + 1 : approvedCount;
    // approvedCount = pepe.T1 === true ? approvedCount + 1 : approvedCount;
    // approvedCount = pepe.T2 === true ? approvedCount + 1 : approvedCount;
    // approvedCount = pepe.T3 === true ? approvedCount + 1 : approvedCount;

    pepe.isApproved = approvedCount >= 2 ? true : false;
}

console.log(alumns);