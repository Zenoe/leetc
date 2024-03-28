/**
 * @param {string} s
 * @return {number}
 */
var longestValidParenthesesOther2 = function (s) {
  // Variable to store the longest valid parentheses
  let count = 0;
  // Left counter will count the number of '('
  let left = 0;
  // Right counter will count the number of ')'
  let right = 0;
  // Loop through the string from left to right.
  // This will take care of extra right parentheses
  for (let i = 0; i < s.length; i++) {
    // Current character
    let c = s[i];
    if (c === "(") {
      left++;
    }
    if (c === ")") {
      right++;
    }
    // If both left and right are equal,
    // it means we have a valid substring
    if (left === right) {
      count = Math.max(count, left + right);
    }
    // If right is greater than left,
    // it means we need to set both
    // counters to zero
    if (right > left) {
      left = right = 0;
    }
  }
  console.log("cout1:", count);
  // Reset left and right
  left = right = 0;
  // Follow the same approach but now loop the string
  // from right to left. This will take care of extra
  // left parentheses
  for (let i = s.length - 1; i >= 0; i--) {
    // Current character
    let c = s[i];
    if (c === "(") {
      left++;
    }
    if (c === ")") {
      right++;
    }
    // If both left and right are equal,
    // it means we have a valid substring
    if (left === right) {
      count = Math.max(count, left + right);
    }
    // If right is greater than left,
    // it means we need to set both
    // counters to zero
    if (left > right) {
      left = right = 0;
    }
  }
  console.log("cout2:", count);
  return count;
};

// inspired by a glance of the title of someone else's solution: convert to consecutive 1s
var longestValidParentheses = function (s) {
  let store = [];
  for (let e of s) {
    if (e === "(") {
      store.push(e);
    } else {
      // search in store from end, the first parent element
      let k = store.length - 1;
      while (k >= 0) {
        if (store[k] !== 1) break;
        k--;
      }
      // if (store[store.length - 1] === "(") {
      if (store[k] === "(") {
        // store.pop();
        store[k] = 1;
      } else {
        store.push(e);
      }
    }
  }

  let oneCount = 0;
  let maxOnes = 0;
  for (let e of store) {
    if (e === 1) {
      oneCount++;
    } else {
      // learn, use Math.max to make code more simple
      maxOnes = Math.max(maxOnes, oneCount);
      oneCount = 0;
      // if (oneCount > maxOnes) {
      //   maxOnes = oneCount;
      // }
    }
  }
  // if (oneCount > maxOnes) {
  //   maxOnes = oneCount;
  // }
  maxOnes = Math.max(maxOnes, oneCount);

  return 2 * maxOnes;
};

// attention need to be rewrote by m
var longestValidParenthesesOther = function (s) {
  let maxCnt = 0;
  let stack = [-1]; // Initialize stack with -1 to handle edge cases
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i); // Push index of "(" to stack
    } else {
      stack.pop(); // Pop the top element as ")"
      if (stack.length === 0) {
        stack.push(i); // Push current index to start a new sequence
      } else {
        console.log(i - stack.at(-1));
        maxCnt = Math.max(maxCnt, i - stack[stack.length - 1]); // Calculate current length of valid sequence
      }
    }
  }
  return maxCnt;
};

console.log(longestValidParentheses(")("));
console.log(longestValidParentheses("()(())"));
console.log(longestValidParentheses("()(()"));
console.log(longestValidParentheses(")()())"));
console.log(longestValidParentheses("(()"));
// console.log(longestValidParentheses(""));
