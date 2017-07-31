function add10(x){
    return x+10;
}

var arr = [1,2,3,4,5];

var a = map(add10, arr);

console.log(arr + " " + "исходный массив");
console.log(a);
