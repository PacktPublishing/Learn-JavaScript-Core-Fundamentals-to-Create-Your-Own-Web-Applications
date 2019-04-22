let num1 = 100;
let num2 = 200;
console.log(multiplier(num1, num2));

function multiplier(a, b) {
    let temp = a * b;
    return temp;
}
let multiplier2 = function (a, b) {
    let temp = a * b;
    return temp;
}
console.log(multiplier2(num1, num2));