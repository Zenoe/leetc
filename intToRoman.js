/**
 * @param {number} num
 * @return {string}
 */
var intToRomanNotMine = function (num) {
  var obj = {};
  obj["M"] = Math.floor(num / 1000);
  num %= 1000;
  obj["CM"] = Math.floor(num / 900);
  num %= 900;
  obj["D"] = Math.floor(num / 500);
  num %= 500;
  obj["CD"] = Math.floor(num / 400);
  num %= 400;
  obj["C"] = Math.floor(num / 100);
  num %= 100;
  obj["XC"] = Math.floor(num / 90);
  num %= 90;
  obj["L"] = Math.floor(num / 50);
  num %= 50;
  obj["XL"] = Math.floor(num / 40);
  num %= 40;
  obj["X"] = Math.floor(num / 10);
  num %= 10;
  obj["IX"] = Math.floor(num / 9);
  num %= 9;
  obj["V"] = Math.floor(num / 5);
  num %= 5;
  obj["IV"] = Math.floor(num / 4);
  obj["I"] = num % 4;

  var result = "";
  for (var ch in obj) {
    // attention new
    result += ch.repeat(obj[ch]);
  }
  return result;
};
const map = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

/**
 * @param {number} num
 * @return {string}
 */
var intToRomanOther = function (num) {
  let result = "";
  for (let i in map) {
    const count = num / map[i];
    if (count < 1) continue;
    for (let j = 0; j < Math.floor(count); j++) {
      result += i;
      num -= map[i];
    }
    if (num === 0) return result;
  }
  return result;
};

var intToRoman = function (num) {
  // dic.key is sorted alphebaticlly by default ?
  // can also define two separated array to store keys and values
  let dic = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  let result = "";
  let fixValus = Object.keys(dic);
  for (let i = fixValus.length - 1; i >= 0; i--) {
    // for (let v of fixValus) {
    let v = fixValus[i];
    while (num >= v) {
      result += dic[v];
      num -= v;
    }
    if (num === 0) {
      return result;
    }
  }
  return result;
};

// console.log(intToRoman(3));
console.log(intToRoman(58));
