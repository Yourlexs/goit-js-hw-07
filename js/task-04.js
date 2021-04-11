const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const counter = document.querySelector('#value');

let counterValue = 0;

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

function increment() {
    counterValue += 1;
    counter.textContent = counterValue;
}

function decrement () {
    counterValue -= 1;
    counter.textContent = counterValue;
}
