const INF = 2147483647;

const testMatrix = [
  [INF, -1, 0, INF],
  [INF, INF, INF, 0],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
];

const WALL = -1;
const GATE = 0;
const EMPTY = 2147483647;
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const dfs = (grid, row, col, count) => {
  if (
    row < 0 ||
    col < 0 ||
    row >= grid.length ||
    col >= grid[0].length ||
    count > grid[row][col]  // 
  )
    return;

  grid[row][col] = count;

  for (let i = 0; i < directions.length; i++) {
    const currDirection = directions[i];

    const nextRow = row + currDirection[0];
    const nextCol = col + currDirection[1];

    dfs(grid, nextRow, nextCol, count + 1);
  }
};

const wallsAndGates = (rooms) => {
  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[0].length; col++) {
      if (rooms[row][col] === GATE) dfs(rooms, col, row, 0);
    }
  }

  return rooms;
};

wallsAndGates(testMatrix);

console.log(testMatrix);
