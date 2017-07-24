var Calc = function()
{
    var self = this;

    mulAndDivSearch = function(str){
    this.str = str;
    mulAndDiv = str.match(/\d+\.\d+[*,/]\d+\.\d+|\d+\.\d+[*,/]\d+|\d+[*,/]\d+\.\d+|\d+[*,/]\d+/);
        if (mulAndDiv != null){
            if (/\*/.test(mulAndDiv))
            {
                s = mulAndDiv[0].split(/\*/);
                r = s[0]*s[1];
                str = str.replace(/\d+\.\d+\*\d+\.\d+|\d+\.\d+\*\d+|\d+\*\d+\.\d+|\d+\*\d+/,r);

            }
            else
            {
                s = mulAndDiv[0].split(/\//);
                r = s[0]/s[1];
                str = str.replace(/\d+\.\d+\/\d+\.\d+|\d+\.\d+\/\d+|\d+\/\d+\.\d+|\d+\/\d+/,r);

            }
            return mulAndDivSearch(str);
        }
        return str;
    };

    sumAndSubSearch = function(str){
    this.str = str;
    sumAndSub = str.match(/\d+\.\d+[+,-]\d+\.\d+|\d+\.\d+[+,-]\d+|\d+[+,-]\d+\.\d+|\d+[+,-]\d+/);
        if (sumAndSub != null){
            if (/\+/.test(sumAndSub))
            {
                s = sumAndSub[0].split(/\+/);
                r = (+s[0])+(+s[1]);
                str = str.replace(/\d+\.\d+\+\d+\.\d+|\d+\.\d+\+\d+|\d+\+\d+\.\d+|\d+\+\d+/,r);
            }
            else
            {
                s = sumAndSub[0].split(/\-/);
                r = (+s[0])-(+s[1]);
                str = str.replace(/\d+\.\d+\-\d+\.\d+|\d+\.\d+\-\d+|\d+\-\d+\.\d+|\d+\-\d+/,r);
            }
            return sumAndSubSearch(str);
        }
        return str;
    };

    bracketsSearch = function(str)
    {
        this.str = str;
        bracketsExp = str.match(/\(([^()]*)\)/);
        if (bracketsExp != null)
            {
                var calculateOfBrackets = self.calculate(bracketsExp[1]);
                str = str.replace(/\([0-9.,\+\-\*\/]+\)/,calculateOfBrackets);
                return bracketsSearch(str);
            }
        return str;
    }

    self.calculate = function(str)
    {
        this.str = str;
        str = bracketsSearch(str);
        str = mulAndDivSearch(str);
        str = sumAndSubSearch(str);
        return str;
    };

};
