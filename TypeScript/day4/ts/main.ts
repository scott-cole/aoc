const input = await Deno.readTextFile("input.txt");

const grid = input.split("\n");


const right = (i: number, j: number) => {
  try {
    return grid[i][j] + grid[i][j + 1] + grid[i][j + 2] + grid[i][j + 3];
  } catch {
    return "";
  }
};

const down = (i: number, j: number) => {
  try {
    return grid[i][j] + grid[i + 1][j] + grid[i + 2][j] + grid[i + 3][j];
  } catch {
    return "";
  }
};

const left = (i: number, j: number) => {
  try {
    return grid[i][j] + grid[i][j - 1] + grid[i][j - 2] + grid[i][j - 3];
  } catch {
    return "";
  }
};

const up = (i: number, j: number) => {
  try {
    return grid[i][j] + grid[i - 1][j] + grid[i - 2][j] + grid[i - 3][j];
  } catch {
    return "";
  }
};

const upRight = (i: number, j: number) => {
  try {
    return grid[i][j] + grid[i -1][j + 1] + grid[i - 2][j + 2] + grid[i - 3][j +3];
  } catch {
    return "";
  }
};

const upLeft = (i: number, j: number) => {
  try {
    return grid[i][j] + grid[i - 1][j - 1] + grid[i - 2][j - 2] + grid[i - 3][j - 3];
  } catch {
    return "";
  }
};

const downLeft = (i: number, j: number) => {
  try {
    return grid[i][j] + grid[i + 1][j - 1] + grid[i + 2][j - 2] + grid[i + 3][j - 3];
  } catch {
    return "";
  }
};

const downRight = (i: number, j: number) => {
  try {
    return grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2] + grid[i + 3][j + 3];
  } catch {
    return "";
  }
};

let total = 0;

for ( let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    right(i, j) === "XMAS" && total++;
    down(i, j) === "XMAS" && total++;
    left(i, j) === "XMAS" && total++;
    up(i, j) === "XMAS" && total++;
    upRight(i, j) === "XMAS" && total++;
    upLeft(i, j) === "XMAS" && total++;
    downRight(i, j) === "XMAS" && total++;
    downLeft(i, j) === "XMAS" && total++;
  }
}

console.log(total);