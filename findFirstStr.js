var strStr0 = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    let j = 0;
    for (; j < needle.length && i < haystack.length; j++) {
      if (haystack[i] === needle[j]) {
        i++;
        // j++
      } else {
        i = i - j;
        break;
      }
    }

    if (j === needle.length) {
      return i - needle.length;
    }
  }
  return -1;
};

// simpler
// not change the value of i in the second loop, just add j to get the desire position
var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    let j = 0;
    for (; j < needle.length && i < haystack.length; j++) {
      if (haystack[i + j] === needle[j]) {
        continue;
        // i++;
        // j++
      } else {
        // i = i - j;
        break;
      }
    }

    if (j === needle.length) {
      return i;
    }
  }
  return -1;
};

// expect 4
console.log(strStr("mississippi", "issip"));
