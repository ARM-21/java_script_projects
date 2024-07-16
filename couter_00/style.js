let addButton = document.querySelector('.buttons button');
let subButton = document.querySelector('.subButton');
let counter = document.querySelector('.counter');
let resetButton = document.querySelector('.reset-button');
let userInput = document.querySelector('span span input');

addButton.addEventListener('click',(e)=>{
counter.innerText = parseInt(counter.innerText) + parseInt(userInput.value);

})

subButton.addEventListener('click',(e)=>{
counter.innerText = parseInt(counter.innerText) - parseInt(userInput.value);
})

resetButton.addEventListener('click',()=>{
    counter.innerText = 0;
})