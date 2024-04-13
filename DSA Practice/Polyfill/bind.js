const printAdd = (city, country) =>{
    console.log(`Hi I am from ${city}, ${country}`);
}

// printAdd("Mumbai", "India")

const newFn = printAdd.bind(this, "Mexico")

// newFn("USA")


Function.prototype.myBind = function(...args){
    const context = args[0], fn = this, args1 = args.slice(1);

    return function(...args2){
        fn.apply(context, [...args1, ...args2])
    }
}

const newFn1 = printAdd.myBind(this, "Mexico")

newFn1("USA")
