// Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land.
// The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.
// You may assume that the grid contains at least one island.
// https://www.structy.net/problems/minimum-island

// let a point be (r,c)
// Moving top would be (r-1, c)
// Moving right would be (r, c+1)
// Moving left would be (r, c-1)
// Moving bottom would be (r+1, c)

// Time Complexity : O(rc)
// Space Complexity : O(rc)

const minimumIsland = (grid) => {
  let min = Infinity;
  const visited = new Set();

  //   Iterate through every cell
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      let size = exploreSize(grid, r, c, visited);
      if (size) min = Math.min(min, size);
    }
  }

  return min;
};

const exploreSize = (grid, r, c, visited) => {
  // Check if the row and column are in bounds
  const rowInBound = r >= 0 && r < grid.length;
  const columnInBound = c >= 0 && c < grid[0].length;
  if (!rowInBound || !columnInBound) return 0;

  //   Return 0 if you encounter water
  if (grid[r][c] === "W") return 0;

  //   Convert the [r,c] pair to string as .has cannot compare reference types hence needs to be converted to string
  const pos = r + "," + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;
  //   Explore all directions
  size += exploreSize(grid, r - 1, c, visited);
  size += exploreSize(grid, r + 1, c, visited);
  size += exploreSize(grid, r, c + 1, visited);
  size += exploreSize(grid, r, c - 1, visited);

  //   Return size when all directions are explored
  return size;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(minimumIsland(grid)); // -> 2
