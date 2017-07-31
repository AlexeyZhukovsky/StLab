function condition(cur, index, arr){
    if(cur%2 == 0) return cur;
    else return false;
}

var arr = [1,5,3,4,5,18];
var arr2 = [1,5,3,7,5,19];

var a = findFirst(arr, condition);
var b = findFirst(arr2, condition);

console.log(arr + " " + "исходный массив");
console.log(a);

console.log(arr2 + " " + "исходный массив");
console.log(b);
