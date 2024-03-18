/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinationsBacktracking = function (digits) {
  // 1. Base case: If the input string is empty, return an empty array.
  if (!digits) return [];

  // 2. Create a mapping object to associate digits with corresponding letters.
  const mapping = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  // 3. Initialize an empty array to store the results.
  const result = [];

  // 4. Helper function to backtrack and generate combinations recursively
  function backtracking(comb, index) {
    // 4.1. Base case: If the index reaches the end of the digits string,
    // add the current combination to the results array and return.
    if (comb.length === digits.length) {
      return result.push(comb.slice());
    }

    // 4.2. Get the current digit and its corresponding letters from the mapping.
    let digit = digits[index];
    let letters = mapping[digit];

    // 4.3. Loop through each letter for the current digit.
    for (let letter of letters) {
      // 4.4. Append the current letter to the current combination.
      comb += letter;

      // 4.5. Recursively call backtrack with the updated combination and incremented index.
      backtracking(comb, index + 1);
      // 4.6. Remove the appended letter after the recursion call to backtrack
      // and explore other combinations.
      comb = comb.slice(0, -1);
    }
  }

  // 5. Start the backtracking process from the beginning (index 0).
  backtracking("", 0);

  // 6. Return the final array of all possible letter combinations.
  return result;
};
var letterCombinations = function (digits) {
  var comb = (a, b) => {
    const result = [];
    for (let i of a) {
      for (let j of b) {
        result.push(i + j);
      }
    }
    return result;
  };
  // var dic = {
  //   2: ["a", "b", "c"],
  //   3: ["d", "e", "f"],
  //   4: ["g", "h", "i"],
  //   5: ["j", "k", "l"],
  //   6: ["m", "n", "o"],
  //   7: ["p", "q", "r", "s"],
  //   8: ["t", "u", "v"],
  //   9: ["w", "x", "y", "z"],
  // };

  var dic = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  if (digits.length === 0) {
    return [];
  }
  if (digits.length === 1) {
    // return dic[digits]
    // make 'abc' ===> ['a','b','c']
    return [...dic[digits]];
  }
  result = dic[digits[0]];
  for (let i = 1; i < digits.length; i++) {
    const substr = digits.substring(0, i + 1);
    const vals = dic[substr];
    if (vals !== undefined) {
      result = vals;
    } else {
      result = comb(result, dic[digits[i]]);
      dic[substr] = result;
    }
  }
  return result;
};

console.log(letterCombinations("234"));
console.log(letterCombinations("23"));
console.log(letterCombinations("2"));
console.log(letterCombinations(""));
