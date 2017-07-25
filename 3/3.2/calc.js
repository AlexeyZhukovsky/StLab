var Calc = function(){

    "use strict";

    var self = this;
    var mulAndDivSearch = function(str){
        var s, r;
        var mulAndDiv = str.match(/\d+\.\d+[*,/]\d+\.\d+|\d+\.\d+[*,/]\d+|\d+[*,/]\d+\.\d+|\d+[*,/]\d+/);
        if (mulAndDiv != null){
            if (/\*/.test(mulAndDiv)){
                s = mulAndDiv[0].split(/\*/);
                r = s[0]*s[1];
                str = str.replace(/\d+\.\d+\*\d+\.\d+|\d+\.\d+\*\d+|\d+\*\d+\.\d+|\d+\*\d+/,r);
            }
            else{
                s = mulAndDiv[0].split(/\//);
                r = s[0]/s[1];
                str = str.replace(/\d+\.\d+\/\d+\.\d+|\d+\.\d+\/\d+|\d+\/\d+\.\d+|\d+\/\d+/,r);
            }
            return mulAndDivSearch(str);
        }
        return str;
    };

    var sumAndSubSearch = function(str){
        var s, r;
        var sumAndSub = str.match(/\d+\.\d+[+,-]\d+\.\d+|\d+\.\d+[+,-]\d+|\d+[+,-]\d+\.\d+|\d+[+,-]\d+/);
        if (sumAndSub != null){
            if (/\+/.test(sumAndSub)){
                s = sumAndSub[0].split(/\+/);
                r = (+s[0])+(+s[1]);
                str = str.replace(/\d+\.\d+\+\d+\.\d+|\d+\.\d+\+\d+|\d+\+\d+\.\d+|\d+\+\d+/,r);
            }
            else{
                s = sumAndSub[0].split(/\-/);
                r = (+s[0])-(+s[1]);
                str = str.replace(/\d+\.\d+\-\d+\.\d+|\d+\.\d+\-\d+|\d+\-\d+\.\d+|\d+\-\d+/,r);
            }
            return sumAndSubSearch(str);
        }
        return str;
    };

    var bracketsSearch = function(str){
        var bracketsExp = str.match(/\(([^()]*)\)/);
        if (bracketsExp != null){
                var calculateOfBrackets = self.calculate(bracketsExp[1]);
                str = str.replace(/\([0-9.,\+\-\*\/]+\)/,calculateOfBrackets);
                return bracketsSearch(str);
            }
        return str;
    };

    self.calculate = function(str){
        str = bracketsSearch(str);
        str = mulAndDivSearch(str);
        str = sumAndSubSearch(str);
        return str;
    };

};
