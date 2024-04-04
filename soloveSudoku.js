var solveSudoku = function (board) {
  var isValidSudoku = function (board, i, j, val) {
    for (let k = 0; k < 9; k++) {
      if (board[i][k] === val) {
        return false;
      }
    }
    for (let k = 0; k < 9; k++) {
      if (board[k][j] === val) {
        return false;
      }
    }
    let row = Math.floor(i / 3) * 3;
    let col = Math.floor(j / 3) * 3;
    for (let r = row; r < row + 3; r++) {
      for (let c = col; c < col + 3; c++) {
        if (board[r][c] === val) return false;
      }
    }
    return true;
  };

  var backtrack1 = (board, i, j) => {
    if (j === 9) {
      j = 0;
      i += 1;
      backtrack(board, i, j);
    }
    if (i === 9) return true;
    if (board[i][j] === ".") {
      for (let k = 1; k <= 9; k++) {
        if (isValidSudoku(board, i, j, `${k}`)) {
          board[i][j] = `${k}`;

          if (!backtrack(board, i, j + 1)) {
            board[i][j] = ".";
          }
        }
      }
    } else {
      return backtrack(board, i, j + 1);
    }
  };
  var backtrack = (board, i, j, flag) => {
    if (j === 9) {
      i += 1;
      j = 0;
      backtrack(board, i, j);
    }
    if (i === 9) return true;
    if (board[i][j] === ".") {
      for (let k = 1; k <= 9; k++) {
        if (isValidSudoku(board, i, j, `${k}`)) {
          board[i][j] = `${k}`;

          if (!backtrack(board, i, j + 1)) {
            board[i][j] = ".";
          }
        }
      }
    } else {
      return backtrack(board, i, j + 1);
    }
  };
  backtrack(board, 0, 0);
  // backTrack(board, 0, 0);
};

var board = [
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

solveSudoku(board);
console.log(board);
