function mul(a,b,c){
    return a * b *c;
}

var mul3 = curry(mul,3);
var mul3_5 = curry(mul,3,5);

var a = mul3(3,4);
var b = mul3_5(4);

console.log(a);
console.log(b);