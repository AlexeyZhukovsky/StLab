function add(a,b){
    return a+b;
}

var arr = [1,2,5,6,8,15,20];

var a = fold(arr, add);
var b = fold(arr, add, 100);

console.log(a);
console.log(b);