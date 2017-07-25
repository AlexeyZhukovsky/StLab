(function(){

    var arraySorter = new ArraySorter();

    var clickHendler = function(){

        var originStringArray = document.getElementById("originArray").value;
        var sortMethod = document.getElementById("sortMethod").value;

        if (sortMethod == 1){
            var sortedArray = arraySorter.bableSort(originStringArray);
        }
        else if (sortMethod == 2){
            var sortedArray = arraySorter.quickSort(originStringArray);
        }
        else if (sortMethod == 3){
            var sortedArray = arraySorter.shellSort(originStringArray);
        }
        else if (sortMethod == 4){
            var sortedArray = arraySorter.countingSort(originStringArray);
        }
                
        console.log(sortedArray, sortMethod);
    }

    document.getElementById("btn").onclick = clickHendler;

})();



