const arr = [1, 2, 4, 5, 6];

// arr.forEach((el, idx) => console.log(el, idx));


Array.prototype.myForEach = function(cb){
    const array = this;

    for(let i = 0; i < array.length; i++){
        cb(array[i], i)
        // cb.call(array, array[i], i)
    }
}

arr.myForEach((el, idx) => console.log(el, idx));
