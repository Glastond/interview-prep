const getData = () => {
  console.log("Fetching Data");
};

const debounce = (fn, delay) => {
  let timer;
  return function () {
    let context = this,
      args = arguments;

    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
};

const debouncedGetData = debounce(getData, 300);
