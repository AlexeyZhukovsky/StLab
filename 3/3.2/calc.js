var Calc = function()
{
    var self = this;
// aaa = "12+7*11-6/3+2";

// var divPattern = /\d+\/\d+/;
// var mulPattern = /\d+\*\d+/;
// var sumPattern = /\d+\+\d+/;
// var subPattern = /\d+\-\d+/;


// regForFloat /\d+\.\d+\/\d+\.\d+|\d+\/\d+/g
// /\d+\.\d+[*,/]\d+\.\d+|\d+[*,/]\d+/
// \d+\.\d+[*,/]\d+|\d+[*,/]\d+\.\d+|\d+[*,/]\d+|\d+\.\d+[*,/]\d+\.\d+
// \d+\.\d+\/\d+\.\d+|\d+\.\d+\/\d+|\d+\/\d+\.\d+|\d+\/\d+

mulAndDivSearch = function(str){
this.str = str;
mulAndDiv = str.match(/\d+\.\d+[*,/]\d+\.\d+|\d+\.\d+[*,/]\d+|\d+[*,/]\d+\.\d+|\d+[*,/]\d+/);
// mulAndDiv = str.match(/\d+\.\d+[*,/]\d+|\d+[*,/]\d+\.\d+|\d+[*,/]\d+|\d+\.\d+[*,/]\d+\.\d+/);
// mulAndDiv = str.match(/\d+\.\d+[*,/]\d+\.\d+|\d+[*,/]\d+/);
// mulAndDiv = str.match(/\d+[*,/]\d+/);
if (mulAndDiv != null){
    if (/\*/.test(mulAndDiv))
        {
            s = mulAndDiv[0].split(/\*/);
            r = s[0]*s[1];
            str = str.replace(/\d+\.\d+\*\d+\.\d+|\d+\.\d+\*\d+|\d+\*\d+\.\d+|\d+\*\d+/,r);
            // str = str.replace(/\d+\.\d+\*\d+|\d+\*\d+\.\d+|\d+\*\d+|\d+\.\d+\*\d+\.\d+/,r);
            // str = str.replace(/\d+\.\d+\*\d+\.\d+|\d+\*\d+/,r);
            // str = str.replace(/\d+\*\d+/,r);
        }
        else 
        {
            s = mulAndDiv[0].split(/\//);
            r = s[0]/s[1];
            str = str.replace(/\d+\.\d+\/\d+\.\d+|\d+\.\d+\/\d+|\d+\/\d+\.\d+|\d+\/\d+/,r);
            // str = str.replace(/\d+\.\d+\/\d+|\d+\/\d+\.\d+|\d+\/\d+|\d+\.\d+\/\d+\.\d+/,r);
            // str = str.replace(/\d+\.\d+\/\d+\.\d+|\d+\/\d+/,r);
            // str = str.replace(/\d+\/\d+/,r);
        }
       return mulAndDivSearch(str);
}
return str;
};



sumAndSubSearch = function(str){
this.str = str;
sumAndSub = str.match(/\d+\.\d+[+,-]\d+\.\d+|\d+\.\d+[+,-]\d+|\d+[+,-]\d+\.\d+|\d+[+,-]\d+/);
// sumAndSub = str.match(/\d+[+,-]\d+/);
if (sumAndSub != null){
    if (/\+/.test(sumAndSub))
        {
            s = sumAndSub[0].split(/\+/);
            r = (+s[0])+(+s[1]);
            str = str.replace(/\d+\.\d+\+\d+\.\d+|\d+\.\d+\+\d+|\d+\+\d+\.\d+|\d+\+\d+/,r);
            // str = str.replace(/\d+\+\d+/,r);
        }
        else 
        {
            s = sumAndSub[0].split(/\-/);
            r = (+s[0])-(+s[1]);
            str = str.replace(/\d+\.\d+\-\d+\.\d+|\d+\.\d+\-\d+|\d+\-\d+\.\d+|\d+\-\d+/,r);
            // str = str.replace(/\d+\-\d+/,r);
        }
        
       return sumAndSubSearch(str);
}
return str;
};

bracketsSearch = function(str)
{
    this.str = str;
    // bracketsExp = str.match(/\([0-9.,\+\-\*\/]+\)/);
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

// sumAndSub = aaa.match(/\d+[+,-]\d+/);

// if (/\+/.test(sumAndSub))
//     {
//         s = sumAndSub[0].split(/\+/);
//         r = s[0]+s[1];
//         aaa = aaa.replace(/\d+\+\d+/,r);
//     }
//     else 
//     {
//         s = mulAndSub[0].split(/\-/);
//         r = s[0]-s[1];
//         aaa = aaa.replace(/\d+\-\d+/,r);
//     }


// b = aaa.match(/\d+\/\d+/);
// s = b[0].split(/\//);
// r = s[0]/s[1];
// d = aaa.replace(/\d+\/\d+/,r);

// /\d+\/\\d+/


// console.log(b);
// console.log(s);
// console.log(r);
// console.log(d);
// console.log(mulAndDiv);
// console.log(aaa);