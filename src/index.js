let button = document.querySelector('#button');
console.log({button});
console.log(button.classList);
button.addEventListener('click', () => {
    if(button.classList.contains('is-primary')) {
        //button.classList.toggle('is-success');
        button.classList.replace('is-primary', 'is-success');
    } else {
        //button.classList.toggle('is-success');
        button.classList.replace('is-success', 'is-primary');
    }
});

let textInput = document.querySelector('#text');
let reverseText = document.querySelector('#reverse-text');
textInput.addEventListener('input', () => {
    let value = textInput.value;
    reverseText.innerText = value.split('').reverse().join('');
});