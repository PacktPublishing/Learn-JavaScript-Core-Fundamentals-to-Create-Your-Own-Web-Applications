adder1(100, 100);
adder1();
adder2(100, 100);
adder2(100);
adder3(100, 100);
adder3(100);

function adder1(numOne = 100, numTwo = 5) {
    console.log("number 1 " + numOne);
    console.log("number 2 " + numTwo);
}

function adder2(numOne, numTwo) {
    numTwo = numTwo || 5;
    console.log("number 1 " + numOne);
    console.log("number 2 " + numTwo);
}

function adder3(numOne, numTwo) {
    numTwo = typeof numTwo !== 'undefined' ? numTwo : 5;
    console.log("number 1 " + numOne);
    console.log("number 2 " + numTwo);
}