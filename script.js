let leftOperand = "";
let rightOperand = "";
let operator = "";

const container = document.querySelector(".container");
const leftColumn = document.querySelector(".left-column");
const rightColumn = document.querySelector(".right-column");

init();

function operate(operator, leftOperand, rightOperand) {
    switch (operator) {
        case "+": return add(leftOperand, rightOperand);
        case "-": return subtract(leftOperand, rightOperand);
        case "*": return multiply(leftOperand, rightOperand);
        case "/": return divide(leftOperand, rightOperand);
        default: console.log("Error. Not a valid operator");
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) alert("You can't divide by 0!");
    return a / b;
}

function init() {
    const display = document.createElement("div");
    const displayText = document.createElement("div");
    displayText.textContent = 123.45;
    display.style.cssText = "width: 300px; height: 100px; display: flex; justify-content: flex-end; align-items: center; font-size: 48px; padding-right: 8px;"
    display.appendChild(displayText);
    leftColumn.appendChild(display);
    
    seedDigitButtons();
    seedBottomRow();
    seedRightColumn();
}

function seedDigitButtons() {
    for (let i = 9; i >= 1; i--) {
        const digitButton = document.createElement("button");
        digitButton.textContent = i;
        digitButton.style.cssText = "width: 100px; height: 100px;";
        digitButton.addEventListener("click", () => {
            if (operator) rightOperand += digitButton.textContent;
            else leftOperand += digitButton.textContent;
            console.log("left operand: " + leftOperand);
        })
        leftColumn.append(digitButton);
    }
}

function seedBottomRow() {
    const equals = document.createElement("button");
    const zero = document.createElement("button");
    const comma = document.createElement("button");

    equals.textContent = "=";
    zero.textContent = "0";
    comma.textContent = ".";

    const bottomRow = [equals, zero, comma];
    bottomRow.forEach(item => {
        item.style.cssText = "width: 100px; height: 100px";
        leftColumn.append(item);
    })
}

function seedRightColumn() {
    const plus = document.createElement("button");
    const minus = document.createElement("button");
    const multiply = document.createElement("button");
    const divide = document.createElement("button");
    const clear = document.createElement("button");

    plus.textContent = "+";
    minus.textContent = "-";
    multiply.textContent = "*";
    divide.textContent = "/";
    clear.textContent = "C";

    const rightColumnButtons = [plus, minus, multiply, divide, clear];
    rightColumnButtons.forEach(item => {
        item.style.cssText = "width: 100px; height: 100px";
        rightColumn.append(item);
    });
}