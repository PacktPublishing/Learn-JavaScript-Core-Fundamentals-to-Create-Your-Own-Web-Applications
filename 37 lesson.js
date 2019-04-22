const myArray = ["a", "hello", 4, 8, 2, "world", "javascript", "course", 99, 1];
const myArray2 = [5, 341, 6324, 7, 432, 12, 8, 130, 44];
let result = myArray2.filter(function (num) {
    console.log(num);
    return num > 75;
})
console.log(result);