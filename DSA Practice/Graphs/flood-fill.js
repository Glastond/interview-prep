// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].
// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel,
// plus any pixels connected 4-directionally to those pixels (also with the same color), and so on.
// Replace the color of all of the aforementioned pixels with color.
// Return the modified image after performing the flood fill.

// https://leetcode.com/problems/flood-fill/description/
// https://www.youtube.com/watch?v=aehEcTEPtCs

var floodFill = function (image, sr, sc, color) {
  // Check if the sr and sc already have the color
  if (image[sr][sc] === color) return image;

  //   Perform DFS
  fill(image, sr, sc, image[sr][sc], color);

  return image;
};

const fill = (image, sr, sc, ogColor, newColor) => {
  // Check if the index is out of bound or the value on image[sr][sc] is not the ogColor
  if (
    sr < 0 ||
    sc < 0 ||
    sr >= image.length ||
    sc >= image[0].length ||
    image[sr][sc] !== ogColor
  )
    return;

  image[sr][sc] = newColor;

  // Traverse the image in all 4 directions
  fill(image, sr - 1, sc, ogColor, newColor);
  fill(image, sr + 1, sc, ogColor, newColor);
  fill(image, sr, sc - 1, ogColor, newColor);
  fill(image, sr, sc + 1, ogColor, newColor);
};
