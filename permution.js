//  learn spread operator
// each time pick one from the array to be the first element, permute the rest element array
var permuteOther = function (nums) {
  function findPermutation(nums) {
    const per = [];
    if (nums.length === 1) {
      return [nums];
    }
    for (let i = 0; i < nums.length; i++) {
      const currentEle = nums[i];
      const rem = [...nums.slice(0, i), ...nums.slice(i + 1)];
      for (const permutation of findPermutation(rem)) {
        const bb = [currentEle, ...permutation];
        per.push(bb);
      }
    }
    return per;
  }

  return findPermutation(nums);
};

// OK but time inefficient recursive
var permute = function (nums) {
  var perm = (start, end) => {
    if (start === end) {
      return [[nums[start]]];
    }
    var subPem = perm(start + 1, end);
    var res = [];
    for (let subArr of subPem) {
      for (let i = 0; i <= subArr.length; i++) {
        var tmpArr = new Array(subArr.length + 1);
        tmpArr[i] = nums[start];
        let p = 0;
        for (let k = 0; k < subArr.length + 1; k++) {
          if (tmpArr[k] === undefined) {
            tmpArr[k] = subArr[p++];
          } else continue;
        }
        res.push(tmpArr);
      }
    }
    return res;
  };

  return perm(0, nums.length - 1);
};

// backtrack, inspiring by peeking other's answer
// pop is the key
var permute = function (nums) {
  var ans = [];
  var backtrack = (accu) => {
    if (accu.length === nums.length) {
      ans.push(accu.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!accu.includes(nums[i])) {
        accu.push(nums[i]);
        backtrack(accu);
        accu.pop();
      }
    }
  };

  backtrack([]);
  return ans;
};

console.log(permute([1]));
console.log(permute([1, 2]));
console.log(permute([1, 2, 3]));
console.log(permute([1, 2, 3, 4]));
