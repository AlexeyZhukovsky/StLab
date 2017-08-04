function curry(func){       
   var arg = arguments;
   var carryArg = [];
   for (var i = 1; i < arg.length; i++){
       carryArg[i-1] = arg[i];
   }
   return function(){
       var argArray = Array.prototype.slice.call(arguments, 0);
       curryArg = carryArg.concat(argArray);
       return func.apply(this, curryArg);
   }
}