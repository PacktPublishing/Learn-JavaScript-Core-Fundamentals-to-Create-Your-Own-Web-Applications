
let numMiles = prompt("How many Miles?");
numMiles = Number(numMiles);
console.log(numMiles);
let kiloValue = numMiles * 1.60934;
console.log(kiloValue);
let message = `${numMiles} Miles is ${kiloValue} Kilometers`;
console.log(message);