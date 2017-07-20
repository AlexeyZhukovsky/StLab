(function(){

    

    var click = function(){

        var calc = new Calc();
        var mathExp = document.getElementById("mathExp").value;
        var result = calc.calculate(mathExp);
        console.log(mathExp + " = " + result);

    }

    document.getElementById("btn").onclick = click;

})();