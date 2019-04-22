const numArray = [4, 543, 12, 34, 234, 54, 2, 3, 443, 434334, 3255];
let mapArray = numArray.map(function (x) {
    console.log(x);
    return x * 50;
})
console.log(mapArray);