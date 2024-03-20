// impt backward
var romanToInt = function (s) {
  let dic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = dic[s[s.length - 1]];
  for (let i = s.length - 2; i >= 0; i--) {
    if (dic[s[i]] < dic[s[i + 1]]) result -= dic[s[i]];
    else result += dic[s[i]];
  }
  return result;
};

console.log(romanToInt("II"));
console.log(romanToInt("XI"));
console.log(romanToInt("IX"));
console.log(romanToInt("IV"));
