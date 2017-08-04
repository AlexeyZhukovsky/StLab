var b = 5;

function add(a){
    return a+b;
}

var a = memoization(add);

console.log(a(1));
b++;
console.log(a(1));
