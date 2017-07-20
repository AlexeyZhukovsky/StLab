var ArraySorter = function()
{
    var self = this;

var parseArray = function(str){
    this.str = str;
    var arrayOfStr = str.split(/\s/);
    var arrayOfNumber = arrayOfStr.map(parseFloat); 
    return arrayOfNumber; 
};

var bubble = function(array)
    {      
    var n = array.length;
    for (var i = 0; i < n-1; i++)
    {
        for (var j = 0; j < n-1-i; j++)
        {
            if (array[j+1] < array[j])
            {
                var t = array[j+1];
                array[j+1] = array[j];
                array[j] = t; 
            }
        }
    }
    console.log("bubble sort")
    return array;
    };

var quick = function(array)
    {
    if (array.length == 0) return [];
    var a = [];
    var b = [];
    var p = array[0];
    for (var i = 1; i < array.length; i++)
    { 
        if (array[ i ] < p) 
        {
            a[a.length] = array[ i ];
        }    
        else
        { 
            b[b.length] = array[ i ];
        }
    }
    console.log("quick sort")
    return quick(a).concat( p, quick(b));
    };

var shell = function(array)
    {
    var n = array.length, i = Math.floor(n/2);
    while (i > 0)
    { 
        for (var j = 0; j < n; j++)
        { 
            var k = j; 
            var t = array[j];
            while (k >= i && array[k-i] > t)
            { 
                array[k] = array[k-i]; k -= i;
            }
            array[k] = t;
        }
        i = (i==2) ? 1 : Math.floor(i*5/11);
    }
    console.log("shell sort")
    return array;
    };

var counting = function(array)
    {   
    var n = array.length;
    var count = [];
    var supportArray = [];
    for (var i = 0; i < n; i++)
    {
        count[ i ] = 0;
    }    
    for (var i = 0; i < n-1; i++)
    { 
        for (var j = i+1; j < n; j++)
        { 
            if (array[ i ] < array[j])
            { 
                count[j]++;
            }    
            else
            {
                count[ i ]++;
            }    
        }
    }
    for (var i = 0; i < n; i++)
    {
        supportArray[count[ i ]] = array[ i ];
    }
    console.log("counting sort")    
    return supportArray;
    };
  

    self.bableSort = function(string)
    {
        var sortedArr = bubble(parseArray(string));
        return sortedArr;
    }

    self.quickSort = function(string)
    {
        var sortedArr = quick(parseArray(string));
        return sortedArr;
    }

    self.shellSort = function(string)
    {
        var sortedArr = shell(parseArray(string));
        return sortedArr;
    }

    self.countingSort = function(string)
    {
        var sortedArr = counting(parseArray(string));
        return sortedArr;
    }
}