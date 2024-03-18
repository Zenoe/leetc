/**
 * @param {string} s
 * @return {boolean}
 */
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

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
