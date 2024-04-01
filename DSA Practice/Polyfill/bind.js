// Polyfill for bind

Function.prototype.mybind = function (...args) {
  const fn = this;
  const params1 = args.slice(1);
  return function (...params2) {
    fn.apply(args[0], [...params1, ...params2]);
  };
};

const newFn = printName.mybind(person1, "Mumbai");
newFn("India");
