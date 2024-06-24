const original = { a: 1, b: { c: 2 } };

function deepClone(obj){
    if(obj === null || typeof obj !== 'object')
        return obj

    const clonedObj = Array.isArray(obj) ? [] : {};

    for(let key in obj)
        clonedObj[key] = deepClone(obj[key])

    return clonedObj;
}
const _deepClone = deepClone(original);

console.log(_deepClone.b === original.b);