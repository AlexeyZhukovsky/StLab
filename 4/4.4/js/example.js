function dec(x){
    if(x>0) return --x
        else return false;
}

var a = unfold(dec, 10);

console.log(a);
