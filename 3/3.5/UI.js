(function(){

    var click = function(){
        
        var originStringArray = document.getElementById("originArray").value;
        var searchMethod = document.getElementById("searchMethod").value;
        var maxSum = new MaxSum();

        if (searchMethod == 1)
        {
            var result = maxSum.slowMethod(originStringArray);
        }
        else if (searchMethod == 2)
        {
            var result = maxSum.fastMethod(originStringArray);
        }
           
        
        console.log(result, searchMethod);

    }

    document.getElementById("btn").onclick = click;


})();