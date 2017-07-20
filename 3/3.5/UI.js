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
            
        }
           
        
        console.log(result, searchMethod);

    }

    document.getElementById("btn").onclick = click;


})();