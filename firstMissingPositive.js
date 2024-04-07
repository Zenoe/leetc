var firstMissingPositive = function (nums) {
  let ans = 1;
  let maxInt = 0;
  let dict = {};
  for (let el of nums) {
    if (el > maxInt) {
      maxInt = el;
      dict[el] = true;
      continue;
    }
    if (el > 0) {
      dict[el] = true;
    }
  }

  for (let i = 1; i <= maxInt; i++) {
    if (!dict[i]) {
      return i;
    }
  }
  return maxInt + 1;
};

var firstMissingPositive = function (nums) {
  let n = nums.length;
  var swap = (i, j) => {
    let t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
  };

  for (let i = 0; i < n; i++) {
    while (
      nums[i] > 0 &&
      nums[i] < n &&
      nums[i] !== i + 1 &&
      nums[i] !== nums[nums[i] - 1]
    ) {
      swap(i, nums[i] - 1);
    }
  }
  // for (let i = 0; i < n; i++) {
  //   if (nums[i] > 0 && nums[i] < n && nums[i] !== i + 1) {
  //     swap(i, nums[i] - 1);
  //   }
  // }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
};
var firstMissingPositive = function (nums) {
  // for (i = 0; i < nums.length; i++) {
  //   if (nums[i] < 0) nums[i] = 0;
  // }
  for (i = 0; i < nums.length; i++) {
    const val = Math.abs(nums[i]);
    if (1 <= val && val <= nums.length) {
      if (nums[val - 1] === 0) nums[val - 1] = -val;
      else nums[val - 1] = -Math.abs(nums[val - 1]);
    }
    console.log(nums);
  }
  for (i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) return i + 1;
  }
  return nums.length + 1;
};
console.log(firstMissingPositive([4, -3, 2, -8, 5, 9, 1]));
return;
// expect 6
console.log(
  firstMissingPositive([
    -3, 9, 16, 4, 5, 16, -4, 9, 26, 2, 1, 19, -1, 25, 7, 22, 2, -7, 14, 2, 5,
    -6, 1, 17, 3, 24, -4, 17, 15,
  ]),
);
