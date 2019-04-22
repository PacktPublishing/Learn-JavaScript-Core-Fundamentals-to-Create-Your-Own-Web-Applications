let userAge = prompt("how old are you?");
console.log(userAge);
userAge = Number(userAge);
let message = (userAge >= 17) ? "allow" : "deny";
console.log(message);
let member = "Laurence5";
let userMember = (member == "Laurence");
if (userAge >= 17 && userMember) {
    console.log("Yes allow");
}
else {
    console.log("no deny");
}