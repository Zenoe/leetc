var myAtoiNotMine = function (s) {
  let neg = 0;
  const li = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let = sStriped = s.trim();
  if (sStriped[0] == "-") {
    neg = 1;
    sStriped = sStriped.slice(1);
  } else if (sStriped[0] == "+") {
    sStriped = sStriped.slice(1);
  }
  let ans = 0;
  let increment = 1;
  for (i = sStriped.length; i >= 0; i--) {
    num = li[sStriped[i]];
    if (num !== undefined) {
      num *= increment;
      ans += num;
      increment *= 10;
    } else {
      ans = 0;
      increment = 1;
    }
  }
  if (ans >= Math.pow(2, 31)) {
    if (neg == 1) {
      ans = Math.pow(2, 31);
    } else {
      ans = Math.pow(2, 31) - 1;
    }
  }
  if (neg) {
    ans *= -1;
  }
  return ans;
};

var myAtoi = function (s) {
  s = s.trim();
  let op = 1;
  if (s[0] === "-") {
    op = -1;
    s = s.substring(1);
  } else if (s[0] === "+") {
    s = s.substring(1);
  }
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] > "9" || s[i] < "0") {
      break;
    } else {
      res = res * 10 + (s[i] - "0");
    }
  }
  // >= not >
  if (res >= Math.pow(2, 31)) {
    if (op === -1) {
      res = Math.pow(2, 31);
    } else {
      res = Math.pow(2, 31) - 1;
    }
  }
  res = res * op;
  return res;
};
console.log(myAtoi("129 4"));
console.log(myAtoi("12 4"));
console.log(myAtoi("1 2"));
console.log(myAtoi("12"));
console.log(myAtoi("-343 555"));
console.log(myAtoi("-34u3 555"));
