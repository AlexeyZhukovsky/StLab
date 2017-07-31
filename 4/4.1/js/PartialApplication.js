function partial(func){     

    var args = Array.prototype.slice.call(arguments);
    var funcContext = args.shift();
    return function(){
        return func.apply(funcContext, args.concat(Array.prototype.slice.call(arguments)));
    }

}