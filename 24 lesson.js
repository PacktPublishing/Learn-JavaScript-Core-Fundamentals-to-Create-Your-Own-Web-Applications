const btns = document.querySelectorAll('button');
console.log(btns);
let var1, var2, var3;
var1 = var2 = var3 = 0;
btns[0].onclick = message1;
btns[1].onclick = message2;
btns[2].onclick = message3;

function message1() {
    var1++;
    message();
}

function message2() {
    var2++;
    message();
}

function message3() {
    var3++;
    message();
}

function message() {
    console.log(var1 + ' ' + var2 + ' ' + var3);
}