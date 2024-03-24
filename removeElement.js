/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement0 = function (nums, val) {
  var count = 0;
  for (let i = 0; i < nums.length; i++) {
    while (i < nums.length) {
      if (nums[i] !== val) {
        break;
      }
      i++;
    }
    // i === length or nums[i] != val
    if (i === nums.length) {
      return count;
    }
    nums[count] = nums[i];
    count++;
  }
  return count;
};

// simpler
var removeElement = function (nums, val) {
  var count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
};
