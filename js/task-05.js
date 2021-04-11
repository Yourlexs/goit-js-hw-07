const inputNameEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');
console.log(inputNameEl);
console.log(nameEl);

inputNameEl.addEventListener('input', onInputChange);

function onInputChange() {
    if (!inputNameEl.value) {
        nameEl.textContent = 'незнакомец'
    }
    nameEl.textContent = inputNameEl.value;
}