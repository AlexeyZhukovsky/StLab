function map(func, arr){       
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr[i] = func(arr[i]);
    }
    return newArr;
}