// -
// 2^31 <= x <= 2^31 - 1

var reverseNotMine = function (x) {
  let result = 0;
  let num = Math.abs(x);
  while (num !== 0) {
    result = result * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return result > 0x7fffffff ? 0 : x < 0 ? -result : result;
};

var reverse = function (x) {
  if (x === 0) return 0;
  let y = x;
  if (x < 0) y = -x;
  const s = y.toString();

  // parseInt elimnates prefix zeros
  // while (s[r] === "0") r--;
  // const t = s.length - r - 1;

  // let res = s
  //   .substring(0, s.length)
  //   .split("")
  //   .reduce((acc, char) => char + acc, "");
  let res = "";
  for (let i = s.length - 1; i >= 0; i--) {
    res = `${res}${s[i]}`;
  }

  // attention!! better
  if (Math.abs(res) > Math.pow(2, 31)) {
    return 0;
  }
  // not better
  // if (x > 0) {
  //   if (res.length === 10 && res > "2147483647") {
  //     return "0";
  //   }
  // } else {
  //   if (res.length === 10 && res > "2147483648") {
  //     return "0";
  //   }
  // }

  res = parseInt(res);
  if (x < 0) {
    res = -res;
  }
  return res;
};
console.log(reverse(321));
console.log(reverse(-321));
console.log(reverse(120));
console.log(reverse(1111111123));
console.log(reverse(1111111121));
console.log(reverse(-2147483412));
