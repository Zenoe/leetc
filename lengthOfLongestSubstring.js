var checkExist = (left, right, s, ch) => {
  for (let i = left; i <= right; i++) {
    if (s[i] === ch) {
      return i;
    }
  }
  return -1;
};
var lengthOfLongestSubstring = function (s) {
  if (s.length == 0) return 0;
  if (s.length === 1) return 1;
  let left = 0;
  let right = 0;
  let maxLen = 1;
  const lens = [];
  for (let i = 1; i < s.length; i++) {
    const k = checkExist(left, right, s, s[i]);
    right = i;

    if (k === -1) {
      maxLen += 1;
    } else {
      // save locol max len
      lens.push(maxLen);
      left = k + 1;
      maxLen = right - left + 1;
    }
  }
  //
  if (lens.length === 0) return maxLen;

  // console.log(lens, maxLen);
  for (let i of lens) {
    if (i > maxLen) maxLen = i;
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring("au"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbbb"));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("aab"));
