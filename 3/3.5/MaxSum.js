var MaxSum = function(){
    var self = this;

    var parseArray = function(str){
        this.str = str;
        var arrayOfStr = str.split(/\s/);
        var arrayOfNumber = arrayOfStr.map(parseFloat); 
        return arrayOfNumber; 
    };
    
    slow = function(arr){
        var maxValue = 0;
        for(var i = 0; i < arr.length; i++){
            var sum = 0;
            for(var j = i; j<arr.length; j++){
                sum += arr[j];
                maxValue = Math.max(sum, maxValue);
            }
        }
        return maxValue;
    }

    self.slowMethod = function(str){
       var result = slow(parseArray(str));
       return result;

    }

}