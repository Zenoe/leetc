// TLE
var canJump = function (nums) {
  var dp = (cur) => {
    if (cur === nums.length - 1) {
      return true;
    }
    if (cur > nums.length - 1) {
      return false;
    }
    for (let i = 1; i <= nums[cur]; i++) {
      if (cur + i >= nums.length) break;
      let ret = dp(cur + i);
      if (ret === true) return true;
      else continue;
    }
    return false;
  };

  return dp(0);
};

var canJump = function (nums) {
  var dp = (cur) => {
    if (cur === nums.length - 1) {
      return true;
    }
    if (cur > nums.length - 1) {
      return false;
    }
    let dis = nums.length - cur - 1;
    if (dis <= nums[cur]) {
      return true;
    }
    for (let i = nums[cur]; i >= 1; i--) {
      if (cur + i >= nums.length) continue;
      let ret = dp(cur + i);
      if (ret === true) return true;
      else continue;
    }
    return false;
  };

  return dp(0);
};

var canJump = function (nums) {
  if (nums.length === 1) return true;
  let reach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (reach < 0) {
      return false;
    }

    reach = Math.max(nums[i], reach);
    reach--;
  }
  return true;
};

// dp other
var canJump = function (nums) {
  if (nums.length === 1) return true;
  const dp = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    if (dp[nums.length - 1]) return true;

    // if(dp[i] === 0) means i can not be reached
    if (i !== 0 && dp[i] === 0) continue;
    for (let j = 1; j <= nums[i]; j++) {
      dp[i + j]++;
    }
  }

  // console.log(dp);
  return false;
};

var canJumpOtherHashMap = function (nums) {
  const hashMap = new Map();
  function isPossible(nums, idx) {
    if (hashMap.has(idx)) return hashMap.get(idx);

    let result = false;
    if (idx + nums[idx] >= nums.length - 1) {
      result = true;
    } else {
      for (let i = idx + 1; i <= idx + nums[idx] && !result; ++i) {
        result = isPossible(nums, i);
      }
    }

    hashMap.set(idx, result);

    return result;
  }

  const result = isPossible(nums, 0);
  hashMap.clear();
  return result;
};
console.log(canJump([2, 0, 0]));
// true
console.log(canJump([1, 1, 2, 2, 0, 1, 1]));

console.log(canJump([1, 1, 1, 1, 4]));
console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([3, 2, 1, 1, 1, 4]));
