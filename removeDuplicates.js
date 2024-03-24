/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicatesOther1 = function (nums) {
  let k = 1;
  const length = nums.length;

  for (let i = 1; i < length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

var removeDuplicates1 = function (nums) {
  // k point to position after the last index of new nums
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    let j = i;
    while (nums[j] === nums[i - 1]) {
      j++;
    }
    if (j >= nums.length) break;
    if (j > i) {
      // nums[k++] = nums[j];
      // i = j-1;
      // j point to the number does not equal to its previous one
      i = j;
    }

    // must move k in every loop. think about array of unique elements
    // impt [1, 2, 2, 4]
    nums[k] = nums[j];

    // [1,2,3,3]
    k++;
  }

  console.log(nums);
  return k;
};

// need an extra array
var removeDuplicates0 = function (nums) {
  let temp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
    } else {
      temp.push(nums[i]);
    }
  }
  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }

  console.log(nums);
  return temp.length;
};
var removeDuplicates = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      continue;
    }
    nums[count++] = nums[i];
  }
  return count;
};

console.log(removeDuplicates([1, 2, 2, 2]));
console.log(removeDuplicates([1, 2, 2, 4]));
console.log(removeDuplicates([1, 1, 2, 3]));
console.log(removeDuplicates([1, 1, 2, 2, 3, 3]));
console.log(removeDuplicates([1, 2]));
console.log(removeDuplicates([1]));
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([0, 0, 0, 1, 1, 2, 2, 3, 3, 4]));
