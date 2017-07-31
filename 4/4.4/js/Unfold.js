function unfold(callback, init) {  
    function process(cur, elem) {
        if (elem == false) return cur;
        else{
            let y = callback(elem);
            cur.push(y);
            return process(cur, y);
        }
        
    }
    return process(cur = [], init);
}