let leftOperand = "";
let rightOperand = "";
let operator = "";

const container = document.querySelector(".container");
const display = document.querySelector(".display");
const leftColumn = document.querySelector(".left-column");
const rightColumn = document.querySelector(".right-column");

init();

function operate(operator, leftOperand, rightOperand) {
    if (operator === "+") return add(leftOperand, rightOperand);
    else if (operator === "-") return subtract(leftOperand, rightOperand);
    else if (operator === "*") return multiply(leftOperand, rightOperand);
    else if (operator === "/") return divide(leftOperand, rightOperand);
    else console.log("Error, invalid operation");
}

function add(a, b) {
    return Number(a) + Number(b);
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
    const displayText = document.createElement("div");
    displayText.textContent = 0;
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
        digitButton.addEventListener("click", () => addDigitToDisplay(digitButton))
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

    equals.addEventListener("click", () => {
        const result = operate(operator, leftOperand, rightOperand);
        display.firstChild.textContent = result;
        leftOperand = result;
        console.log("leftOperand:", leftOperand);
        rightOperand = "";
        console.log("rightOperand:", rightOperand);
        operator = "";
        console.log("operator:", operator);
    });
    zero.addEventListener("click", () => addDigitToDisplay(zero));

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

    plus.addEventListener("click", () => {
        operator = plus.textContent;
        console.log(" operator is +")
    });
    minus.addEventListener("click", () => {
        operator = minus.textContent;
        console.log(" operator is -")
    });
    multiply.addEventListener("click", () => {
        operator = multiply.textContent;
        console.log(" operator is *")
    });
    divide.addEventListener("click", () => {
        operator = divide.textContent;
        console.log(" operator is /")
    });
    clear.addEventListener("click", () => {
        operator = "";
        leftOperand = "";
        rightOperand = "";
        display.firstChild.textContent = "0";
        console.log("Memory is cleared");
    });


    const rightColumnButtons = [plus, minus, multiply, divide, clear];
    rightColumnButtons.forEach(item => {
        item.style.cssText = "width: 100px; height: 100px";
        rightColumn.append(item);
    });
}

function addDigitToDisplay(digitBtn) {
    if (operator) {
        rightOperand += digitBtn.textContent;
        display.firstChild.textContent = rightOperand;
        console.log("right operand: " + rightOperand);
    }
    else {
        leftOperand += digitBtn.textContent;
        display.firstChild.textContent = leftOperand;
        console.log("left operand: " + leftOperand);
    }
}