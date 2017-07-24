(function(){

        var click = function(){

        var treeJSON = JSON.parse(document.getElementById("treeJSON").value);
        var tree = new Tree(treeJSON);
        var search = document.getElementById("search").value;
        var result = tree.searchElement(search);
        console.log(result);

    }

    document.getElementById("btn").onclick = click;

})();
