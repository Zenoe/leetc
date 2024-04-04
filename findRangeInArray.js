var searchRange = function (nums, target) {
  let ansL = -1;
  let ansR = -1;

  let left = 0;
  let right = nums.length - 1;
  let idx = 0;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] === target) {
      idx = mid;
      break;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (left > right) {
    return [ansL, ansR];
  }

  ansL = idx;
  ansR = idx;
  // first occurrence
  // find the first target in nums[0,,,idx)
  left = 0;
  right = idx - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] === target) {
      ansL = mid;
      right = mid - 1;
    } // nums[mid] < target
    else {
      left = mid + 1;
    }
  }

  left = idx + 1;
  right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] === target) {
      ansR = mid;
      left = mid + 1;
    } // nums[mid] > target
    else {
      right = mid - 1;
    }
  }
  return [ansL, ansR];
};

console.log(searchRange([2, 2, 2, 2, 2, 2, 2, 2], 1));
console.log(searchRange([2, 2, 2, 2, 2, 2, 2, 2], 2));
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));
