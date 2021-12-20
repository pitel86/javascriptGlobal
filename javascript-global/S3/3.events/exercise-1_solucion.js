let myButton = document.querySelector('#btnToClick');

function pulsame(event) {
    console.log(event);
}

myButton.addEventListener('click', pulsame);