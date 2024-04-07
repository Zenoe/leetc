// TLE
var combinationSum2 = function (candidates, target) {
  var ksum = (k, start, target) => {
    if (k === 2) {
      let comb = [];
      let left = start;
      let right = candidates.length - 1;
      while (left < right) {
        // better to compare target with (candidates[left] + candidates[right]);
        // don't have to calc the diff
        let diff = target - (candidates[left] + candidates[right]);
        if (diff === 0) {
          comb.push([candidates[left], candidates[right]]);
          while (candidates[left] === candidates[left + 1]) left++;
          while (candidates[right] === candidates[right - 1]) right--;
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
      for (let i = start; i < candidates.length - (k - 1); i++) {
        if (i > start && candidates[i] === candidates[i - 1]) continue;
        let tmp = ksum(k - 1, i + 1, target - candidates[i]);
        for (let el of tmp) {
          comb.push([candidates[i], ...el]);
        }
      }
      return comb;
    }
  };

  candidates.sort((a, b) => a - b);
  let ans = [];
  let left = 0;
  let right = candidates.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (candidates[mid] === target) {
      ans.push([candidates[mid]]);
      break;
    } else if (candidates[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  for (let i = 2; i <= candidates.length; i++) {
    let t = ksum(i, 0, target);
    for (let el of t) {
      ans.push(el);
    }
  }
  return ans;
};
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let ans = [];
  var backtrack = (acc, start, current) => {
    if (acc === target) {
      ans.push([...current]);
      return;
    }
    if (acc > target) return;
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      current.push(candidates[i]);
      backtrack(acc + candidates[i], i + 1, current);
      current.pop();
    }
  };

  backtrack(0, 0, []);
  return ans;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
