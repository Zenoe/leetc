/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let ans = 0;
  let store = [];
  let open = 0;
  let close = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      // must be a '(' or a ')' before
      if (store.length === 0) continue;
      if (open === close) {
        if (ans < store.length) ans = store.length;
        store = [];
        continue;
      }
      if (open > close) {
        close++;
        store.push(s[i]);
      }
      // no way open < close
    } else {
      // s[i]="("
      // if (open === s.length / 2) {
      if (open === s.length - i) {
        // should not be more open parent
        store = [s[i]];
        open = 1;
      } else {
        store.push(s[i]);
        open++;
      }
    }
  }
  if (open - close === 1 && store.pop() === "(") {
    console.log("xxxx");
    if (ans < store.length) ans = store.length;
  } else {
    // open === close
  }

  if (ans < store.length) ans = store.length;
  console.log(store);
  console.log(ans);
  return ans;
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
console.log(longestValidParentheses("()(())"));
console.log(longestValidParentheses("()(()"));
console.log(longestValidParentheses(")()())"));
console.log(longestValidParentheses("(()"));
// console.log(longestValidParentheses(""));
