const isPalindromeNotMine = function (x) {
  if (x < 0 || (x !== 0 && x % 10 == 0)) {
    return false;
  }
  let half = 0;
  while (x > half) {
    half = half * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x == half || x == Math.floor(half / 10);
};

var isPalindromeBetterNotMine = function (x) {
  var reverse = 0;
  var copy = x;

  //The loop break when the copy of original number becomes zero
  //Also negative number cannot be a palindrome
  while (copy > 0) {
    const digit = copy % 10;
    reverse = reverse * 10 + digit;
    // ~~  is a bitwise operator that is used to perform a fast alternative to Math.floor() for converting a
    // floating-point number to an integer. When you apply the double tilde to a number,
    // it effectively performs a bitwise NOT operation twice, which results in converting the number to a 32-bit integer.
    copy = ~~(copy / 10);
  }

  return reverse == x;
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  const digcount = Math.floor(Math.log10(x)) + 1;
  let mid = digcount >> 1;
  if (digcount % 2 === 0) {
    mid -= 1;
  }
  // console.log(digcount, mid);
  let exp = digcount - 1;
  for (let i = digcount - 1; i > mid; i--) {
    let fac = 10 ** exp;
    let a = Math.floor(x / fac);
    let b = x % 10;
    // console.log(a, b);
    if (a !== b) return false;
    x = x - a * fac;
    x = Math.floor(x / 10);
    exp = exp - 2;
  }
  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(1221));
console.log(isPalindrome(2456));
console.log(isPalindrome(2456542));
console.log(isPalindrome(24565423));
