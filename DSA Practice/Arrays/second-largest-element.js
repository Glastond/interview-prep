// [2,45,67,34,23,67]

// Brute force method O(nlogn)
// const secondLargest = (arr) => {
//   const uniqueArr = Array.from(new Set(arr));
//   uniqueArr.sort((a, b) => b - a);

//   return uniqueArr[1];
// };

// Optimal solution O(n)
const secondLargest = (arr) => {
  let largest = Number.NEGATIVE_INFINITY,
    secondLargest = Number.NEGATIVE_INFINITY;

  arr.forEach((element) => {
    if (element > largest) {
      secondLargest = largest;
      largest = element;
    } else if (element > secondLargest && element < largest) {
      secondLargest = element;
    }
  });

  return secondLargest;
};

console.log(secondLargest([2, 45, 67, 34, 23, 67]));
