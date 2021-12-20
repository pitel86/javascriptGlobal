var myInput = document.querySelector('input');

function inputInMyInput() {
    console.log(this.value);
}

myInput.addEventListener('input',inputInMyInput);