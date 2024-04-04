/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function (board) {
  // let blocks = new Array(9)
  //   .fill(0)
  //   .map((_) => new Array(9).fill(0).map((_) => new Array(0)));
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // blocks[i][j] = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (board[i][j] !== ".") {
        // dict[board[i][j]].x.push(i);
        // dict[board[i][j]].y.push(j);
      }
    }
  }
  // console.log(blocks);
  return true;
};

var isValidSudoku0 = function (board) {
  let dict = [
    { x: [], y: [] },
    { x: [], y: [] },
    { x: [], y: [] },
    { x: [], y: [] },
    { x: [], y: [] },
    { x: [], y: [] },
    { x: [], y: [] },
    { x: [], y: [] },
    { x: [], y: [] },
    { x: [], y: [] },
  ];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== ".") {
        dict[board[i][j]].x.push(i);
        dict[board[i][j]].y.push(j);
      }
    }
  }
  for (let item of dict) {
    let tx = [...item.x];
    let ty = [...item.y];

    // no need to sort if check repeation by using map
    tx.sort((a, b) => a - b);
    ty.sort((a, b) => a - b);

    for (let i = 0; i < tx.length - 1; i++) {
      if (item.x[i] === tx[i + 1]) {
        return false;
      }
      if (ty[i] === ty[i + 1]) {
        return false;
      }
    }
  }
  for (let item of dict) {
    for (let i = 0; i < item.x.length; i++) {
      item.x[i] = Math.floor(item.x[i] / 3);
      item.y[i] = Math.floor(item.y[i] / 3);
    }
  }
  for (let item of dict) {
    // impt  check repeation by using map
    var m = new Map();
    for (let i = 0; i < item.x.length; i++) {
      // console.log(item.x[i], item.y[i]);
      if (m.has(`${item.x[i]}${item.y[i]}`)) {
        // console.log(item.x[i], item.y[i]);
        return false;
      }
      m.set(`${item.x[i]}${item.y[i]}`, 0);

      // if (item.x[i] === item.x[i + 1] && item.y[i] === item.y[i + 1]) {
      //   return false;
      // }
    }
  }
  return true;
};

var board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

// false
board = [
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["5", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", "7", "1", ".", ".", ".", "4", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "5"],
  ["8", "5", ".", ".", ".", "3", ".", ".", "."],
  [".", ".", "4", ".", ".", "7", ".", "5", "6"],
  [".", ".", ".", ".", ".", ".", "8", ".", "."],
  [".", ".", ".", "2", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "6", ".", ".", "."],
];
console.log(isValidSudoku(board));

board = [
  [0, 0, 0, 1, 1, 1, 2, 2, 2],
  [0, 0, 0, 1, 1, 1, 2, 2, 2],
  [0, 0, 0, 1, 1, 1, 2, 2, 2],
  [3, 3, 3, 4, 4, 4, 5, 5, 5],
  [3, 3, 3, 4, 4, 4, 5, 5, 5],
  [3, 3, 3, 4, 4, 4, 5, 5, 5],
  [6, 6, 6, 7, 7, 7, 8, 8, 8],
  [6, 6, 6, 7, 7, 7, 8, 8, 8],
  [6, 6, 6, 7, 7, 7, 8, 8, 8],
];
