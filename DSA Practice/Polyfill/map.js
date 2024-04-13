const arr = [1, 2, 4, 5, 6];

// console.log(arr.map((el) => el * 2));


Array.prototype.myMap = function(cb) {
    const res = [], arr = this;

    arr.forEach(el => res.push(cb(el)))

    return res;
}

console.log(arr.myMap((el) => el * 2));
