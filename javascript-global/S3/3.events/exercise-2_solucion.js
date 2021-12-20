var myInput = document.querySelector('input');

function focusInMyInput() {
    console.log(this.value);
}

myInput.addEventListener('focus',focusInMyInput);