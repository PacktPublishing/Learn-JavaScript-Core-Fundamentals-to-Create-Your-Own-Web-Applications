let secretNumber = 5;
let guess;
guesser();

function guesser() {
    guess = prompt("Guess the Number");
    let guessNumber = Number(guess);
    if (guessNumber === secretNumber) {
        console.log("You got it");
        return;
    }
    else {
        let message = (guessNumber < secretNumber) ? "higher" : "lower";
        console.log("wrong GO " + message);
        guesser();
    }
}