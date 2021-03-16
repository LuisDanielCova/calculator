function add(a, b){
    return Math.round((a + b) * 10) / 10;
}

function subtract(a, b){
    return Math.round((a - b) * 10) / 10;
}

function multiply(a, b){
    return Math.round((a * b) * 10) / 10;
}

function divide(a, b){
    if(b === 0){
        alert(`Don't try to create a paradox`);
    }else{
        return Math.round((a / b) * 10) / 10;
    }
}

function operate(operator, a, b){
    switch(operator){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case `/`:
            return divide(a, b);
    }
}

function clear(){
    firstInput = ``;
    secondInput = ``;
    operator = ``;
    inputFlag = false;
    equalFlag = false;
    pointFlag = false;
}

let firstInput = ``;
let operator = ``;
let secondInput = ``;
let inputFlag;
let equalFlag;
let pointFlag;

let numberButtons = document.querySelectorAll(`.number`);
numberButtons.forEach(btn => btn.addEventListener(`click`, function(){
    let displayText = document.querySelector(`p`);
    if(equalFlag){
        displayText.textContent = "";
        equalFlag = false;
        displayText.textContent = btn.textContent;
    }else if(secondInput !== `` && inputFlag !== true){
        firstInput = +displayText.textContent;
        displayText.textContent = btn.textContent;
        inputFlag = true;
    }else if(displayText.textContent.length < 9){
        displayText.textContent += btn.textContent;
    }

}));

let operatorButtons = document.querySelectorAll(`.operator`);
operatorButtons.forEach(btn => btn.addEventListener(`click`, function(){
    let displayText = document.querySelector(`p`);
    if(firstInput === ``){
        firstInput = +displayText.textContent;
        operator = btn.textContent;
        displayText.textContent = ``;
        pointFlag = false;
    }else{
        secondInput = +displayText.textContent;
        displayText.textContent = operate(operator, firstInput, secondInput);
        operator = btn.textContent;
        inputFlag = false;
        pointFlag = false;
    }
}));

let equalButton = document.getElementById(`equal`);
equalButton.addEventListener(`click`, function(){
    let displayText = document.querySelector(`p`);
    secondInput = +displayText.textContent;
    displayText.textContent = operate(operator, firstInput, secondInput);
    clear();
    equalFlag = true;
});

let clearButton = document.getElementById(`clear`);
clearButton.addEventListener(`click`, () => {
    clear();
    let displayText = document.querySelector(`p`);
    displayText.textContent = ``;
});

let pointButton = document.getElementById(`point`);
pointButton.addEventListener(`click`, function(){
    if(!pointFlag){
        let displayText = document.querySelector(`p`);
        displayText.textContent += pointButton.textContent;
        pointFlag = true;
    }
});

let backspaceButton = document.getElementById(`backspace`);
backspaceButton.addEventListener(`click`, () => {
    if(!equalFlag){
        let displayText = document.querySelector(`p`);
        let displayArray = displayText.textContent.split("");
        displayArray.pop();
        displayText.textContent = displayArray.join("");
    }
});