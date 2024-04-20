// TLE
var jump = function (nums) {
  let miniStep = Number.MAX_VALUE;
  var dp = (cur, step) => {
    step++;
    if (cur === nums.length - 1) {
      miniStep = Math.min(miniStep, step);
      return;
    }
    if (cur > nums.length - 1) {
      return;
    }
    for (let i = 1; i <= nums[cur]; i++) {
      if (cur + i >= nums.length) break;
      dp(cur + i, step);
    }
  };

  dp(0, 0);
  return miniStep - 1;
};

var jump = function (nums) {
  if (nums.length === 1) return 0;
  let jump = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] + i >= nums.length - 1) {
      return jump + 1;
    }
    // find next i greedy
    // always search for the next position i where one could jump max distance
    let j = 1;
    let k = nums[i];
    // let maxReach = nums[i] + i;
    let maxReach = nums[i] + nums[nums[i] + i];
    while (j < nums[i]) {
      // if (nums[i + j] - 1 > maxReach) {
      if (nums[i + j] + j > maxReach) {
        // maxReach = nums[i + j] - 1;
        maxReach = nums[i + j] + j;
        k = j;
      }
      j++;
    }
    i += k;
    i--;
    jump++;
  }
  return jump;
};

// learn
var jumpOther = function (nums) {
  const n = nums.length;
  let curEnd = 0;
  let maxReach = 0;
  let jumps = 0;

  for (let i = 0; i < n - 1; i++) {
    maxReach = Math.max(maxReach, i + nums[i]);

    if (i === curEnd) {
      jumps++;
      curEnd = maxReach;
    }
  }

  return jumps;
};
// var jump = function (nums) {
//   let miniStep = Number.MAX_VALUE;
//   let memo = new Array(nums.length - 1).fill(0);

//   const calcMiniJump = (  )
//   console.log(memo);
//   return memo[nums.length - 2];
// };

var jump = function (nums) {
  if (nums.length === 1) return 0;
  let jump = 1;
  let curEnd = nums[0];
  let maxReach = nums[0];
  // for (let i = 0; i < nums.length; i++) {
  for (let i = 0; i < nums.length - 1; i++) {
    maxReach = Math.max(maxReach, i + nums[i]);
    // when finishing iterate current Max range, finish a jump too
    // After finishing iterating up to the current maximum range, also make a jump
    if (i === curEnd) {
      curEnd = maxReach;
      jump++;
    }
  }
  return jump;
};
// console.log(jump([2, 3, 1, 1, 4]));
// return;
// 3
console.log(jump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]));
// return;
console.log(jump([3, 1, 1, 1, 1]));
// return;
console.log(jump([2, 2, 0, 1]));
// return;
console.log(jump([1, 1, 1]));
// expect 3
console.log(jump([1, 1, 1, 1]));
console.log(jump([2, 1, 1]));
console.log(jump([1, 1]));
console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));
// 5
console.log(
  jump([
    5, 6, 4, 4, 6, 9, 4, 4, 7, 4, 4, 8, 2, 6, 8, 1, 5, 9, 6, 5, 2, 7, 9, 7, 9,
    6, 9, 4, 1, 6, 8, 8, 4, 4, 2, 0, 3, 8, 5,
  ]),
);
