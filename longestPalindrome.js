var longestPalindromeErr = function (s) {
  /*
   * 22202022 error
   */
  if (s.length === 1) return s;
  let cur = 0;
  let targetL = 0;
  // let targetR = 0;
  let maxLen = 1;
  while (cur < s.length) {
    let left = cur;
    let right = cur;
    // expand to both direction
    while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
        left -= 1;
        right += 1;
      } else if (s[left] === s[cur] && s[left] === s[left + 1]) {
        left -= 1;
      } else if (s[cur] === s[right] && s[right] === s[right - 1]) {
        right += 1;
      } else {
        break;
      }
    }

    // in case of "bb" where left<0 but right <s.length
    while (right < s.length) {
      if (s[right] === s[cur] && s[right] === s[right - 1]) {
        right++;
      } else {
        break;
      }
    }

    let len = 1;

    left += 1;
    right -= 1;
    len = right - left + 1;

    if (maxLen < len) {
      maxLen = len;
      targetR = right;
      targetL = left;
    }
    cur++;
  }
  return s.slice(targetL, targetR + 1);
};

var longestPalindrome0 = function (s) {
  if (s.length === 1) return s;
  let cur = 0;
  let targetL = 0;
  // let targetR = 0;
  let maxLen = 1;
  while (cur < s.length) {
    let left = cur - 1;
    let right = cur + 1;
    // to make sure all the chars are of the same( 22202022 => 22202022)
    let lconsistent = true;
    let rconsistent = true;
    // expand to both direction
    while (left >= 0 && right < s.length) {
      if (lconsistent && s[left] !== s[cur]) {
        lconsistent = false;
      }
      if (rconsistent && s[right] !== s[cur]) {
        rconsistent = false;
      }

      if (s[left] === s[right]) {
        left -= 1;
        right += 1;
      } else if (s[left] === s[cur] && lconsistent) {
        left -= 1;
      } else if (s[cur] === s[right] && rconsistent) {
        right += 1;
      } else {
        break;
      }
    }

    // in case of "bb" where left<0 but right <s.length
    while (right < s.length) {
      if (s[right] === s[cur] && s[right] === s[right - 1]) {
        right++;
      } else {
        break;
      }
    }

    left += 1;
    right -= 1;
    let len = right - left + 1;

    if (maxLen < len) {
      maxLen = len;
      // targetR = right;
      targetL = left;
    }
    cur++;
  }
  return s.slice(targetL, targetL + maxLen);
};

var longestPalindrome = function (s) {
  if (s.length === 1) return s;
  let cur = 0;
  let targetL = 0;
  let maxLen = 1;
  while (cur < s.length) {
    let left = cur - 1;
    let right = cur + 1;
    // if (s[cur] === s[right]) right++; (sooos ==> ooo)
    // ipmt
    while (s[cur] === s[right]) right++;

    while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
        left -= 1;
        right += 1;
      } else {
        break;
      }
    }

    // in case of "bb" where left<0 but right <s.length
    while (right < s.length) {
      if (s[right] === s[cur] && s[right] === s[right - 1]) {
        right++;
      } else {
        break;
      }
    }

    left += 1;
    right -= 1;
    let len = right - left + 1;

    if (maxLen < len) {
      maxLen = len;
      // targetR = right;
      targetL = left;
    }
    cur++;
  }
  return s.slice(targetL, targetL + maxLen);
};

console.log(longestPalindrome("sooos"));
console.log(longestPalindrome("sooosbppb"));
console.log(longestPalindrome("222020221"));
console.log(longestPalindrome("bb"));
console.log(longestPalindrome("ccc"));

console.log(longestPalindrome("daa"));
console.log(longestPalindrome("aad"));

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("bbbbb"));
console.log(longestPalindrome("aaaabbbbaaad"));
console.log(longestPalindrome("daaaabbbbaaad"));
console.log(longestPalindrome("daaaabbbbaaadaaaaaaaaaaaaaaaaaaaaaaaaaaa"));

console.log(
  longestPalindrome(
    "azwdzwmwcqzgcobeeiphemqbjtxzwkhiqpbrprocbppbxrnsxnwgikiaqutwpftbiinlnpyqstkiqzbggcsdzzjbrkfmhgtnbujzszxsycmvipjtktpebaafycngqasbbhxaeawwmkjcziybxowkaibqnndcjbsoehtamhspnidjylyisiaewmypfyiqtwlmejkpzlieolfdjnxntonnzfgcqlcfpoxcwqctalwrgwhvqvtrpwemxhirpgizjffqgntsmvzldpjfijdncexbwtxnmbnoykxshkqbounzrewkpqjxocvaufnhunsmsazgibxedtopnccriwcfzeomsrrangufkjfzipkmwfbmkarnyyrgdsooosgqlkzvorrrsaveuoxjeajvbdpgxlcrtqomliphnlehgrzgwujogxteyulphhuhwyoyvcxqatfkboahfqhjgujcaapoyqtsdqfwnijlkknuralezqmcryvkankszmzpgqutojoyzsnyfwsyeqqzrlhzbc",
  ),
);
