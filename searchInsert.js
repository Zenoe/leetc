// int searchInsert(vector<int>& nums, int target) {
//         int low=0;
//         int high=nums.size();
//         int mid;
//         if(target>nums[high-1]){
//             return high;
//         }
//         while(low<=high){
//               mid=(low+high)/2;
//             if(nums[mid]==target){
//                 return mid;
//             }

//             if(target<nums[mid]){
//             high=mid-1;
//             }else{
//             low=mid+1;
//             }

//         }
//          return  low;
//     }
var searchInsert = function (nums, target) {
  // if(nums.length === 2){
  //   if(nums[0] === target) return 0
  //   if(nums[1] === target) return 1
  //   // if
  // }

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    if (left === right) {
      if (nums[left] < target) {
        return left + 1;
      } else if (nums[left] > target) {
        return left;
      } else if (nums[left] === target) {
        return left;
      }
      break;
    }
    let mid = (left + right) >> 1;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    // console.log(left, right);
    //
  }
  // left > right
  // the case of [1,3] 0, get left=0, right = -1
  return left;
};

// learn
var searchInsertOther = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (target == nums[mid]) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  // why?
  return end + 1;
};
console.log(searchInsert([1, 3], 0));
console.log(searchInsert([1, 3], 4));
console.log(searchInsert([1, 2, 3], 0));
console.log(searchInsert([1, 2, 3], 4));
console.log(searchInsert([1, 2, 3, 4], 5));
console.log(searchInsert([1, 2, 3, 4], 0));
console.log(searchInsert([1], 1));
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 0));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 2));
