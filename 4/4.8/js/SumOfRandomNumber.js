var randomArr = [];

function add(a,b){
    return a+b;
}

for (var i = 0; i<9; i++ ){
    randomArr[i] = Math.random()*100;
}

var a = fold(randomArr, add);

console.log(randomArr + " " + "исходный рандомный массив");
console.log(a);

