// Fibonacci series => 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
const fibonacciNumber = (n) => {
  if (n <= 1) return n;

  return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
};

// console.log(fibonacciNumber(6));

// Without recursion
const fibb = (n) => {
  if (n <= 1) return n;

  const arr = [0, 1];
  for (let i = 2; i <= n; i++) arr.push(arr[i - 1] + arr[i - 2]);

  return arr[n];
};

// console.log(fibb(5));
