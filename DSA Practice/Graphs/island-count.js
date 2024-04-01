// Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land.
// The function should return the number of islands on the grid.
// An island is a vertically or horizontally connected region of land.
// https://www.structy.net/problems/island-count

// let a point be (r,c)
// Moving top would be (r-1, c)
// Moving right would be (r, c+1)
// Moving left would be (r, c-1)
// Moving bottom would be (r+1, c)

// Time Complexity : O(rc)
// Space Complexity : O(rc)

const islandCount = (grid) => {
  let count = 0;
  const visited = new Set();

  //   Iterate through every cell
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (explore(grid, r, c, visited) === true) count++;
    }
  }

  return count;
};

const explore = (grid, r, c, visited) => {
  // Check if the row and column are in bounds
  const rowInBound = r >= 0 && r < grid.length;
  const columnInBound = c >= 0 && c < grid[0].length;
  if (!rowInBound || !columnInBound) return false;

  //   Return false if you encounter water
  if (grid[r][c] === "W") return false;

  //   Convert the [r,c] pair to string as .has cannot compare reference types hence needs to be converted to string
  const pos = r + "," + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  //   Explore all directions
  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c + 1, visited);
  explore(grid, r, c - 1, visited);

  //   Return true when all directions are explored
  return true;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(islandCount(grid)); // -> 3
