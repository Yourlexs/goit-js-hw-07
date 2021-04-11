const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);


function onInputBlur(event) {
    
    if (Number(event.target.value.length) === Number(event.target.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.contains('invalid') ? inputEl.classList.remove('invalid') : false;
    }

    if (Number(event.target.value.length) !== Number(event.target.dataset.length)) {
        inputEl.classList.add('invalid');
        inputEl.classList.contains('valid') ? inputEl.classList.remove('valid') : false;
    }
    
}