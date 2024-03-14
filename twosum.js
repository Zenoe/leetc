var twoSum = function (nums, target) {
  let myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const leftover = target - nums[i];
    const j = myMap.get(leftover);

    if (j !== undefined) {
      return [i, j];
    } else {
      myMap.set(nums[i], i);
    }
  }
};

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));
