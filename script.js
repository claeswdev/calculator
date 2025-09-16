let leftOperand = 0;
let rightOperand = 0;
let operator = "";

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

function operate(operator, leftOperand, rightOperand) {
    switch (operator) {
        case "+": return add(leftOperand, rightOperand);
        case "-": return subtract(leftOperand, rightOperand);
        case "*": return multiply(leftOperand, rightOperand);
        case "/": return divide(leftOperand, rightOperand);
        default: console.log("Error. Not a valid operator");
    }
}

console.log("10 + 5 = ", operate("+", 10, 5));
console.log("10 - 5 = ", operate("-", 10, 5));
console.log("10 * 5 = ", operate("*", 10, 5));
console.log("10 / 5 = ", operate("/", 10, 5));
console.log("10 % 5 = ", operate("%", 10, 5));
