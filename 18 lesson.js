let myTime = 22;
let output;
if (myTime < 11) {
    output = "Good Morning";
}
else if (myTime >= 11 && myTime <= 17) {
    output = "Good Afternoon";
}
else if (myTime > 17 && myTime < 23) {
    output = "Good Evening";
}
else {
    output = "I'm sleeping";
}
console.log(output);