// all in nums are distinct values
var search0 = function (nums, target) {
  var bsearch = (nums, s, e, val) => {
    if (s > e) return -1;
    let mid = (s + e) >> 1;
    if (nums[mid] === val) {
      return mid;
    }
    if (nums[mid] < val) {
      return bsearch(nums, mid + 1, e, val);
    } else {
      return bsearch(nums, s, mid - 1, val);
    }
  };

  var pivoitBsearch = (s, e) => {
    if (s > e) return -1;
    let mid = (s + e) >> 1;
    if (nums[mid] === target) {
      return mid;
    }

    // if (nums[s] < nums[mid]) {
    // change from < to <= eliminates the else-part
    if (nums[s] <= nums[mid]) {
      if (nums[mid] < nums[e]) {
        // impt
        // case that strictly in ascending order array
        return bsearch(nums, s, e, target);
      }
      if (target < nums[mid] && target >= nums[s]) {
        return bsearch(nums, s, mid - 1, target);
      } else {
        return pivoitBsearch(mid + 1, e);
      }
    } else if (nums[s] > nums[mid]) {
      // piviot value is in the left half
      if (target > nums[mid] && target <= nums[e]) {
        return bsearch(nums, mid + 1, e, target);
      } else {
        return pivoitBsearch(s, mid - 1);
      }
    }
    // else-part
    // else {
    //   // mid ===s, means there are only two element in nums
    //   // only need to compare target with the other value nums[e]
    //   if (target === nums[e]) return e;
    //   else return -1;
    // }
  };
  return pivoitBsearch(0, nums.length - 1);
};
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] === target) return mid;

    // impt < lost the case of nums[left] == nums[mid]
    // if (nums[left] < nums[mid]) {
    if (nums[left] <= nums[mid]) {
      // sorted in left half
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        // in other half
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

console.log(search([1, 3, 5], 2));
console.log(search([1, 3, 5], 5));

console.log(search([3, 1], 1));

console.log(search([1, 3], 2));
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
