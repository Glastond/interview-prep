const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(arr.reduce((acc, curr) => acc + curr, 0));

Array.prototype.myReduce = function(cb, init){
    let res = init, arr = this;

    arr.forEach(el => {
        res = cb(res, el)
    })

    return res;
}

console.log(arr.myReduce((acc, curr) => acc + curr, 0));
