function fold(arr, callback, init = null) {    
    function process(cur, index) {
     if (index === arr.length) return cur;
     else {
      let next = callback(cur, arr[index], index, arr);
      return process(next, index + 1);
     }
    }
    return process(init, 0);
}