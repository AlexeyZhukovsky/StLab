var arr = [1, 23, 2, 6, 12, 7, 42];

function cond(x){
    return x%2 == 0;
}

function add(a,b)
{
    return a+b;
}

var a = (fold((r = filter(arr, cond)),add))/r.length; 

console.log(a);