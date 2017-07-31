function filter(arr, condition){       
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (condition(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}