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

let a = 5;
let b = 10;

console.log("5 + 10 = ", add(a, b));
console.log("5 - 10 = ", subtract(a, b));
console.log("5 * 10 = ", multiply(a, b));
console.log("5 / 10 = ", divide(a, b));