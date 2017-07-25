var MaxSum = function(){
    "use strict";
    var self = this;

    var parseArray = function(str){
        var arrayOfStr = str.split(/\s/);
        var arrayOfNumber = arrayOfStr.map(parseFloat);
        return arrayOfNumber;
    };

    var slow = function(arr){
        var maxValue = 0;
        for(var i = 0; i < arr.length; i++){
            var sum = 0;
            for(var j = i; j<arr.length; j++){
                sum += arr[j];
                maxValue = Math.max(sum, maxValue);
            }
        }
        return maxValue;
    };

    var fast = function(arr){
        var maxValue = 0;
        var posSum = 0;
        for (var i = 0 ; i < arr.length; i++ ){
            posSum += arr[i];
            maxValue = Math.max(posSum, maxValue);
            if(posSum < 0){posSum=0}
        }
        return maxValue;
    };

    self.slowMethod = function(str){
       var result = slow(parseArray(str));
       return result;
    };

    self.fastMethod = function(str){
        var result = fast(parseArray(str));
        return result;
    };

}
