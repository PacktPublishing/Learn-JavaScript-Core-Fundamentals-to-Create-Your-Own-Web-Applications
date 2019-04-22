const obj = {a:1,b:2,c:3};
console.log(obj);
for(let prop in obj){
    console.log(prop,obj[prop]);
}
const arr = ['a','b','c'];
for(let w =0; w < arr.length; w++){
    console.log(w,arr[w]);
}

for(el in arr){
    console.log(el,arr[el]);
}

arr.forEach(function(el,index,array){
    console.log(array);
    console.log(index,el);
})