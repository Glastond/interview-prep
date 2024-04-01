// https://leetcode.com/problems/container-with-most-water/description/

// Brute Force O(n^2)
// const maxArea = (height) => {
//   let maxVol = -1;

//   for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       const minHeight = Math.min(height[i], height[j]);
//       const currVol = minHeight * (j - i);
//       if (currVol > maxVol) maxVol = currVol;
//     }
//   }

//   return maxVol;
// };

const maxArea = (height) => {
  let left = 0,
    right = height.length - 1,
    max = 0;

  while (left < right) {
    const currArea = Math.min(height[left], height[right]) * (right - left);

    max = Math.max(currArea, max);

    if (height[right] > height[left]) left++;
    else right--;
  }

  return max;
};

console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));
