const theList = ['Laurence', 'one', 'Svekis', true, 35, null, undefined, {
    test: 'one'
    , score: 55
        }, ['one', 'two']];
let temp = Array.isArray(theList);
theList[1] = "Hello World";
temp = theList.indexOf(35);
theList.push("pushed"); //add to end
temp = theList.pop(); //remove last item
temp = theList.shift();
temp = theList.unshift("unshift"); //add to front of array
temp = theList.splice(1, 2);
console.log(theList);
console.log(temp);