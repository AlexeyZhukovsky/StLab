(function(){

    var calc = new Calc();

    var clickHendler = function(){

        var mathExp = document.getElementById("mathExp").value;
        var result = calc.calculate(mathExp);
        console.log(mathExp + " = " + result);
    }

    document.getElementById("btn").onclick = clickHendler;

})();