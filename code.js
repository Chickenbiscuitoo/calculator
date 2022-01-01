function add (n1, n2) {
    return n1 + n2;
}

function subtract (n1, n2) {
    return n1 - n2;
}

function multiply (n1, n2) {
    return n1 * n2;
}

function divide (n1, n2) {
    return n1 / n2;
}

function operate (n1, operator, n2) {
    if (operator === '+') {
        return add(n1, n2);
    }
    if (operator === '-') {
        return subtract(n1, n2);
    }
    if (operator === '*') {
        return multiply(n1, n2);
    }
    if (operator === '/') {
        return divide(n1, n2);
    }
}

const calcBtnList = document.getElementsByClassName('calcBtn');
const btnNumList = document.getElementsByClassName('btnNum');
const display = document.getElementById('display');
const displaySolution = document.getElementById('displaySolution');

let displayValue = '';

for (let c = 0; c < calcBtnList.length; c++) {
    calcBtnList[c].addEventListener('click', () => {
        displayValue += calcBtnList[c].innerHTML;
        display.innerHTML = displayValue;
    })
}

const btnClear = document.getElementById('btnClear');
btnClear.addEventListener('click', () => {
    displayValue = '';

    display.innerHTML = displayValue;
})

const btnDelete = document.getElementById('btnDelete');
btnDelete.addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1);
    display.innerHTML = displayValue;
})

const btnEquals = document.getElementById('btnEquals');
btnEquals.addEventListener('click', () => {
    const operateValue = displayValue.split(" ")

    solution = operate(Number(operateValue[0]), operateValue[1], Number(operateValue[2]));

    if (operateValue.length > 3) {
        for (let i = 3; i < operateValue.length; i += 2) {
            solution = operate(solution, operateValue[i], Number(operateValue[i+1]));
        }
    }

    displaySolution.innerHTML = solution;
})