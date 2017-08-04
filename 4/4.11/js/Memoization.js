function memoization(func) {       
    var cache = {};
    return function() {
        var args = Array.prototype.slice.call(arguments);
        if (!(args in cache)) {
            return cache[args] = func.apply(this, args);
        }
        return cache[args];
    };
}

