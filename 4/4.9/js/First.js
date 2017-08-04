function findFirst(arr, condition){  
    function process(elem, index){
        if (index === arr.length) return undefined;
        else if (elem == false){
            let elem = condition(arr[index], index, arr);
            return process(elem, ++index);
        }  
        else return elem;
    }
    return process(false, 1);
}