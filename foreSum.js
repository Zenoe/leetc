/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

var fourSumKSumOthers = function (nums, target) {
  const results = [];
  nums.sort((a, b) => a - b);

  const kSum = (start, k, target, current) => {
    if (
      start === nums.length ||
      nums[start] * k > target ||
      target > nums[nums.length - 1] * k
    )
      return;
    if (k === 2) {
      let lo = start,
        hi = nums.length - 1;
      while (lo < hi) {
        const sum = nums[lo] + nums[hi];
        if (sum === target) {
          results.push([...current, nums[lo], nums[hi]]);
          while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
          while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
          lo++;
          hi--;
        } else if (sum < target) {
          lo++;
        } else {
          hi--;
        }
      }
    } else {
      for (let i = start; i < nums.length; i++) {
        if (i === start || nums[i] !== nums[i - 1]) {
          kSum(i + 1, k - 1, target - nums[i], [...current, nums[i]]);
        }
      }
    }
  };

  kSum(0, 4, target, []);
  return results;
};

var fourSum = function (nums, target) {
  const resutl = [];
  if (nums.length < 4) return resutl;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      // lost [-1,-1,1,1] in [-2, -1, -1, 1, 1, 2, 2]
      // if (j > 1 && nums[j] === nums[j - 1]) continue;
      //
      // repeated [-3,0,1,2] in [4, -3, 0, 0, 1, 2]
      // if (j > 1 && nums[j] === nums[j - 1] && nums[i - 1] === nums[i - 2]) continue;
      //
      // j-i > 1
      // A or B
      if (j > 1 && j - i > 1 && nums[j] === nums[j - 1]) continue;

      const diff = target - nums[i] - nums[j];
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        // console.log(left, right, diff);
        const s = nums[left] + nums[right];
        if (s > diff) {
          right--;
        } else if (s < diff) {
          left++;
        } else {
          resutl.push([nums[i], nums[j], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;

          right--;
          left++;
        }
      }
      // A or B
      // while (nums[j + 1] === nums[j]) {
      //   if (j + 1 < nums.length - 2) {
      //     j++;
      //   } else {
      //     break;
      //   }
      // }
    }
    // while (nums[i + 1] === nums[i]) {
    //   if (i + 1 < nums.length - 3) {
    //     i++;
    //   }
    // }
  }
  return resutl;
};

var fourSum = function (nums, target) {
  const resutl = [];
  if (nums.length < 4) return resutl;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let leftSum = target - nums[i];
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let t0 = leftSum - nums[j];
      let dict = {};
      for (let k = j + 1; k < nums.length; k++) {
        let t = t0 - nums[k];
        if (dict[t]) {
          resutl.push([nums[i], nums[j], nums[k], t]);
          while (k < nums.length - 1) {
            if (nums[k] === nums[k + 1]) {
              k += 1;
            } else break;
          }
        } else {
          dict[nums[k]] = k;
        }
      }
    }
  }
  return resutl;
};

// my ksum
var fourSum = function (nums, target) {
  const resutl = [];
  if (nums.length < 4) return resutl;
  nums.sort((a, b) => a - b);
  var ksum = (k, start, target) => {
    if (k === 2) {
      let comb = [];
      let left = start;
      let right = nums.length - 1;
      while (left < right) {
        // better to compare target with (nums[left] + nums[right]);
        // don't have to calc the diff
        let diff = target - (nums[left] + nums[right]);
        if (diff === 0) {
          comb.push([nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;
          // this two line is impt
          left++;
          right--;
        } else if (diff > 0) {
          left++;
        } else {
          right--;
        }
      }
      return comb;
    } else {
      let comb = [];
      for (let i = start; i < nums.length - (k - 1); i++) {
        if (i > start && nums[i] === nums[i - 1]) continue;
        let tmp = ksum(k - 1, i + 1, target - nums[i]);
        for (let el of tmp) {
          comb.push([nums[i], ...el]);
        }
      }
      return comb;
    }
  };

  return ksum(4, 0, target);
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
// expect [[-4,-3,3,4],[-4,-2,2,4],[-4,-1,1,4],[-4,-1,2,3],[-4,0,0,4],[-4,0,1,3],[-3,-2,1,4],[-3,-2,2,3],[-3,-1,0,4],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// console.log(fourSum([-4, -3, -2, -1, 0, 0, 1, 2, 3, 4], 0));
console.log(fourSum([4, -3, 0, 0, 1, 2], 0));

// expect [[-2,-1,1,2],[-1,-1,1,1]]
console.log(fourSum([-2, -1, -1, 1, 1, 2, 2], 0));

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
