function lazy(fn){      
    return fn.bind.apply(fn, arguments);
}