let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 1");
  }, 3000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 2");
  }, 3000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 3");
  }, 3000);
});

let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 4");
  }, 3000);
});

const arr = [promise1, promise2, promise3, promise4];

function myAll(promises) {
  let resolvedPromises = 0,
    result = [];

  return new Promise(function (resolve, reject) {
    try {
      promises.forEach(async (promise, idx) => {
        const response = await promise;

        resolvedPromises += 1;

        result.push(response);

        if (resolvedPromises === promises.length) resolve(result);
      });
    } catch (error) {
      reject(error);
    }
  });
}

myAll(arr).then((res) => console.log(res));
