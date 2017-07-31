function cond(x){
    return x%2 == 0;
}

var arr = [1,2,3,4,5,18,7,156,333,10];

var a = filter(arr, cond);

console.log(arr + " " + "исходный массив");
console.log(a);
