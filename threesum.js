var threeSumAcc = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    m = {};
    for (let j = i + 1; j < nums.length; j++) {
      // find two sum equals to -nums[i] from [i+1,]
      if (m[-nums[i] - nums[j]] >= 0) {
        result.push([nums[i], nums[j], nums[m[-nums[i] - nums[j]]]]);
        while (j + 1 < nums.length && nums[j] === nums[j + 1]) j++;
      }
      m[nums[j]] = j;
    }
  }
  return result;
};

var threeSum0 = function (nums) {
  nums = nums.sort((a, b) => a - b);

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let dup = false;
          for (let kk = 0; kk < result.length; kk++) {
            if (result[kk][0] === nums[i] && result[kk][1] === nums[j]) {
              dup = true;
              break;
            }
          }
          if (!dup) {
            result.push([nums[i], nums[j], nums[k]]);
          }
        }
      }
    }
  }
  return result;
};

var threeSum1 = function (nums) {
  // js sort alphabetically by default, must supply sort func
  nums = nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    // avoid duplicated
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      // avoid duplicated
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      if (nums[i] + nums[j] > 0) break;
      for (let k = j + 1; k < nums.length; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) continue;
        // console.log("k:", nums[i], nums[j], nums[k]);
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
          break;
        }
      }
    }
  }
  return result;
};

// accepted
var threeSum2 = function (nums) {
  // js sort alphabetically by default, must supply sort func
  const result = [];
  // do not define dict here
  // const dict = {};
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    // avoid duplicated
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const sum = 0 - nums[i];
    // select two element from nums[i+1:] adds to sum
    const dict = {};

    for (let j = i + 1; j < nums.length; j++) {
      const leftover = sum - nums[j];
      if (dict[leftover] >= 0) {
        result.push([nums[i], nums[j], nums[dict[leftover]]]);
        // avoid duplicated results
        while (j + 1 < nums.length && nums[j] === nums[j + 1]) j++;
      }

      dict[nums[j]] = j;
      // if (j > i + 2 && nums[j] === nums[j - 1]) continue;
    }
  }
  return result;
};

var threeSum = function (nums) {
  const result = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    // avoid duplicated
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const s = nums[l] + nums[r] + nums[i];
      if (s === 0) {
        result.push([nums[i], nums[l], nums[r]]);
        while (nums[l] === nums[l + 1]) l++;
        while (nums[r] === nums[r - 1]) r--;

        // impt
        l++;
        r--;
      } else if (s > 0) {
        r -= 1;
      } else {
        l += 1;
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0, 0]));
// console.log(threeSum([-2, 0, 1, 1, 2]));
// console.log(threeSum([-2, 0, 1, 1, 1, 0, 0, 0, 0, 0, 2]));
nums = [13, 6, -11, -11, 5, -15, -14, 5, -5, -2];
console.log(threeSum(nums));
console.log(threeSumAcc(nums));
// nums = [
//   13, 6, -11, -11, 5, -15, -14, 5, -5, -2, 0, 3, -8, -10, -7, 11, -5, -10, -5,
// ];

// nums = [
//   13, 6, -11, -11, 5, -15, -14, 5, -5, -2, 0, 3, -8, -10, -7, 11, -5, -10, -5,
//   -7, -6, 2, 5, 3, 2, 7, 7, 3, -10, -2, 2, -12, -11, -1, 14, 10, -9, -15, -8,
// ];
// console.log(threeSum(nums).length);
// console.log(threeSumAcc(nums).length);

nums = [
  -13, 5, 13, 12, -2, -11, -1, 12, -3, 0, -3, -7, -7, -5, -3, -15, -2, 14, 14,
  13, 6, -11, -11, 5, -15, -14, 5, -5, -2, 0, 3, -8, -10, -7, 11, -5, -10, -5,
  -7, -6, 2, 5, 3, 2, 7, 7, 3, -10, -2, 2, -12, -11, -1, 14, 10, -9, -15, -8,
  -7, -9, 7, 3, -2, 5, 11, -13, -15, 8, -3, -7, -12, 7, 5, -2, -6, -3, -10, 4,
  2, -5, 14, -3, -1, -10, -3, -14, -4, -3, -7, -4, 3, 8, 14, 9, -2, 10, 11, -10,
  -4, -15, -9, -1, -1, 3, 4, 1, 8, 1,
];

console.log(threeSum(nums).length);
console.log(threeSumAcc(nums).length);
