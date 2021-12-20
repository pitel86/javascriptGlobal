/*const runTimeOut = () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    promise.then(() => {console.log('Time out!')})
};*/

const runTimeOut = async () => {
    await new Promise((resolve) =>{
        setTimeout(() => {
            resolve();
        }, 2000);
    })

    console.log('Time Out!');

};

runTimeOut();
console.log("pepe");