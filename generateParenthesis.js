/**
 * @param {number} n
 * @return {string[]}
 */

// low efficiency
var generateParenthesis1 = function (n) {
  var isValid = function (s) {
    var stack = [];
    var dic = {
      "(": ")",
      "[": "]",
      "{": "}",
    };
    for (let ch of s) {
      if (ch === "(" || ch === "[" || ch === "{") {
        stack.push(ch);
      } else {
        if (stack.length < 1) {
          return false;
        }
        var i = stack.pop();
        if (dic[i] !== ch) {
          return false;
        }
      }
    }
    return stack.length === 0;
  };

  const result = [];
  function backtracking(comb, index) {
    if (index === 2 * n) {
      return result.push(comb.slice());
    }

    comb += "(";
    let len = comb.length;
    backtracking(comb, index + 1);
    comb = comb.slice(0, -1);
    comb += ")";
    backtracking(comb, index + 1);
  }
  backtracking("(", 1);

  // return result;
  return result.filter((i) => isValid(i));
};

var generateParenthesisOther = function (n, open = n, close = n, memo = {}) {
  if (`${open},${close}` in memo) return memo[`${open},${close}`];

  if (open === 0) {
    memo[`${open},${close}`] = [")".repeat(close)];
    return memo[`${open},${close}`];
  }
  if (open === close) {
    memo[`${open},${close}`] = generateParenthesis(
      n,
      open - 1,
      close,
      memo,
    ).map((str) => "(" + str);
    return memo[`${open},${close}`];
  }

  memo[`${open},${close}`] = [
    ...generateParenthesis(n, open - 1, close, memo).map((str) => "(" + str),
    ...generateParenthesis(n, open, close - 1, memo).map((str) => ")" + str),
  ];

  return memo[`${open},${close}`];
};

// cleaner than  my backtrack version
var generateParenthesisBackTrackOther = function (n) {
  let stack = [];
  let res = [];

  function backTrack(openN, closedN) {
    if (openN === closedN && closedN === n) {
      res.push(stack.join(""));
      return;
    }
    if (openN < n) {
      stack.push("(");
      backTrack(openN + 1, closedN);
      stack.pop();
    }
    if (closedN < openN) {
      stack.push(")");
      backTrack(openN, closedN + 1);
      stack.pop();
    }
  }
  backTrack(0, 0);
  return res;
};
// good!
// add constraints when growing comb string
var generateParenthesis = function (n) {
  const result = [];
  const size = 2 * n;
  function backtracking(comb, index, open, close) {
    if (index === size) {
      return result.push(comb.slice());
    }

    if (open < n) {
      comb += "(";
      backtracking(comb, index + 1, open + 1, close);
    }

    // actually: if (open < close) {
    if (open !== close) {
      if (open < n) comb = comb.slice(0, -1);
      comb += ")";
      backtracking(comb, index + 1, open, close + 1);
    }
  }
  backtracking("(", 1, 1, 0);

  return result;
};

// console.log(generateParenthesis(1));
console.log(generateParenthesis(4));
console.log(generateParenthesis(3));
console.log(generateParenthesis(2));
// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
