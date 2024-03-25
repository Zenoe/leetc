/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var findIdx = (nums, start, end, val) => {
  // Find, within the array and between the start and end indices (inclusive), the minimum value that is greater than val
  let diff = Number.MAX_VALUE;
  let ans = -1;
  for (let i = start; i <= end; i++) {
    // impt
    if (nums[i] > val) {
      let t = nums[i] - val;
      if (t < diff) {
        ans = i;
        diff = t;
      }
    }
  }
  return ans;
};

var sortSubArray = (nums, start, end) => {
  var q = start;
  for (let i = start + 1; i <= end; i++) {
    let current = nums[i];
    let j = i - 1;
    while (nums[j] > current && j >= start) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = current;
  }
};

var nextPermutation = function (nums) {
  let e = nums.length - 1;
  let i = nums.length - 2;
  for (; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      // assign nums[i] to be min of all vlues in nums[i+1,...e] that larger than nums[i]
      let idx = findIdx(nums, i + 1, e, nums[i]);
      let t = nums[i];
      nums[i] = nums[idx];
      nums[idx] = t;
      // sortSubArray(nums, i + 1, e);
      break;
    }
  }
  sortSubArray(nums, i + 1, e);
};

var nextPermutation = function (nums) {
  let e = nums.length - 1;
  let i = nums.length - 2;
  for (; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      // assign nums[i] to be min of all vlues in nums[i+1,...e] that larger than nums[i]
      // nums[i+1,...,e] are in decending order
      let k = e;
      // find the smallest one larger than nums[i]
      for (; k >= i + 1; k--) {
        if (nums[k] > nums[i]) break;
      }

      let t = nums[i];
      nums[i] = nums[k];
      nums[k] = t;
      // sortSubArray(nums, i + 1, e);
      break;
    }
  }

  let l = i + 1,
    r = e;
  // reverse nums[i+1, e] to sort it in accending roder
  while (l < r) {
    let t = nums[l];
    nums[l] = nums[r];
    nums[r] = t;
    l++;
    r--;
  }
  // sortSubArray(nums, i + 1, e);
};

nums = [2, 3, 1];
// nums = [1, 3, 2];
nextPermutation(nums);
console.log(nums);
// nums = [3, 1, 4, 2, 9, 6, 5, 6, 9, 5, 6, 8, 1];
// sortSubArray(nums, 2, 4);
