var convert0 = function (s, numRows) {
  /* better. not mine */
  if (numRows === 1 || numRows >= s.length) return s;
  let result = "";
  const n = s.length;
  const cycleLen = 2 * numRows - 2;
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j + i < n; j += cycleLen) {
      result += s[j + i];
      if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < n) {
        result += s[j + cycleLen - i];
      }
    }
  }
  return result;
};

var convert1 = function (s, numRows) {
  if (numRows === 1) return s;
  const result = [];
  // put this line outside of loop
  const cycle = 2 * numRows - 2;
  for (let i = 0; i < numRows; i++) {
    let j = 0;
    while (true) {
      const idx = i + j * cycle;
      if (idx < s.length) {
        result.push(s[idx]);
        if (i > 0 && i < numRows - 1) {
          idxMiddle = idx + 2 * (numRows - i - 1);
          if (idxMiddle < s.length) result.push(s[idxMiddle]);
          else break;
        }
      } else {
        break;
      }
      j++;
    }
  }
  return result.join("");
};

var convert = function (s, numRows) {
  if (numRows === 1) return s;
  let result = Array(numRows).fill("");

  let currow = 0;
  let dir = -1;
  for (let char of s) {
    result[currow] += char;
    if (currow === 0 || currow === numRows - 1) {
      dir = -dir;
    }
    currow += dir;
  }
  return result.join("");
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));

// PAHNAPLSIIGYIR
// PINALSIGYAHRPI
