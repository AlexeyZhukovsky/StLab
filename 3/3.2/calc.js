var Calc = function()
{
    var self = this;
// aaa = "12+7*11-6/3+2";

// var divPattern = /\d+\/\d+/;
// var mulPattern = /\d+\*\d+/;
// var sumPattern = /\d+\+\d+/;
// var subPattern = /\d+\-\d+/;

mulAndDivSearch = function(str){
this.str = str;
mulAndDiv = str.match(/\d+[*,/]\d+/);
if (mulAndDiv != null){
    if (/\*/.test(mulAndDiv))
        {
            s = mulAndDiv[0].split(/\*/);
            r = s[0]*s[1];
            str = str.replace(/\d+\*\d+/,r);
        }
        else 
        {
            s = mulAndDiv[0].split(/\//);
            r = s[0]/s[1];
            str = str.replace(/\d+\/\d+/,r);
        }
       return mulAndDivSearch(str);
}
return;
};



sumAndSubSearch = function(str){
this.str = str;
sumAndSub = str.match(/\d+[+,-]\d+/);
if (sumAndSub != null){
    if (/\+/.test(sumAndSub))
        {
            s = sumAndSub[0].split(/\+/);
            r = (+s[0])+(+s[1]);
            str = str.replace(/\d+\+\d+/,r);
        }
        else 
        {
            s = sumAndSub[0].split(/\-/);
            r = (+s[0])-(+s[1]);
            str = str.replace(/\d+\-\d+/,r);
        }
        
       return sumAndSubSearch(str);
}
return;
};

self.calculate = function(str)
{   
    this.str = str;
    mulAndDivSearch(str);
    sumAndSubSearch(str);
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