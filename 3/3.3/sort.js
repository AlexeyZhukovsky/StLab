var ArraySorter = function () {
    var self = this;

    var localVariable = 5;

    self.bubbleSort = function () {

    };
};

var arraySorter = new ArraySorter();
arraySorter.bubbleSort();






(function() {
    var arraySorter = new ArraySorter();

    document.getElementById("btn").onclick = function () {
        // arraySorter.bubbleSort();
        console.log(sortedArray);
    }
})();






var sorting =  sorting || {};


parseArray = function(str){
    var originString = str;
    var arrStr = originString.split(/\s/);
    var arrNumber = arrStr.map(parseFloat); 
    return arrNumber; 
};

var originStringArray = document.getElementById("originArray").value;
var unsortedArray = parseArray(originStringArray);
var sortedArray;

sorting.bubble = function(array)
{      
    // console.log(array);
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
    // console.log(array);
    return array;
};

sorting.quick = function(array)
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
    return sorting.quick(a).concat( p, sorting.quick(b) );
};

sorting.shell = function(array)
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
    return array;
};

sorting.counting = function(array)
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
    return supportArray;
};

var sortMe
thod = document.getElementById("sortMethod").value;
    if (sortMethod == 1)
    {
        sortedArray = sorting.bubble(unsortedArray);
    }
    else if (sortMethod == 2)
    {
        sortedArray = sorting.quick(unsortedArray);
    }
    else if (sortMethod == 3)
    {
        sortedArray = sorting.shell(unsortedArray);
    }
    else if (sortMethod == 4)
    {
        sortedArray = sorting.counting(unsortedArray);
    }
