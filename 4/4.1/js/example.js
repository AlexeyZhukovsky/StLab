function mul(a,b){
    return a * b;
}

var mul2 = partial(mul,2);

var a = mul2(5);
var b = mul2(10);

console.log(a);
console.log(b);