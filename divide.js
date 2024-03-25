var divide0LET = function (dividend, divisor) {
  let resultOp = true;
  if (dividend > 0) {
    if (divisor > 0) {
      resultOp = true;
    } else {
      resultOp = false;
    }
  } else {
    if (divisor > 0) {
      resultOp = false;
    } else {
      resultOp = true;
    }
    dividend = -dividend;
  }
  divisor = Math.abs(divisor);
  let result = 0;
  dividend -= divisor;
  while (dividend >= 0) {
    result += 1;
    dividend -= divisor;
  }

  if (result >= 2 ** 31) {
    result = 2 ** 31;
    if (resultOp) {
      return 2 ** 31 - 1;
    } else {
      return -(2 ** 31);
    }
  }
  if (resultOp) return result;
  else return -result;
};

// more elegant, though the algoritm is the same with mine
var divideOther = function (dividend, divisor) {
  const isNegative = Math.sign(dividend) !== Math.sign(divisor);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let q = 0;

  while (dividend >= divisor) {
    let x = divisor;
    let pow = 1;
    while (x + x <= dividend) {
      x += x;
      pow += pow;
    }
    dividend -= x;
    q += pow;
  }

  if (isNegative) {
    return q > 2 ** 31 ? -(2 ** 31) : -q;
  }

  return q > 2 ** 31 - 1 ? 2 ** 31 - 1 : q;
};

var divide = function (dividend, divisor) {
  let isPositive = Math.sign(dividend) === Math.sign(divisor);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let result = 0;
  let factor = 1;
  let mulDivisor = divisor;
  while (1) {
    dividend -= mulDivisor;
    if (dividend >= 0) {
      result += factor;
      mulDivisor += mulDivisor;
      factor += factor;
    } else {
      // impt
      if (mulDivisor !== divisor) {
        dividend += mulDivisor;
        mulDivisor = divisor;
        factor = 1;
      } else break;
    }
  }

  if (result >= 2 ** 31) {
    result = 2 ** 31;
    if (isPositive) {
      return 2 ** 31 - 1;
    } else {
      return -(2 ** 31);
    }
  }
  if (isPositive) return result;
  else return -result;
};

console.log(divide(2147483647, 1));
console.log(divide(1, 1));
console.log(divide(1, -1));
console.log(divide(7, -3));

console.log(divide(10, 3));
console.log(divide(7, -2));
