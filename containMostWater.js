/**
 * @param {number[]} height
 * @return {number}
 */
// TLE
var maxArea0 = function (height) {
  let maxArea = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = 1; j < height.length; j++) {
      const availH = Math.min(height[i], height[j]);
      const area = availH * (j - i);
      console.log(i, j, availH);
      if (area > maxArea) maxArea = area;
    }
  }

  return maxArea;
};

// TEL
var maxArea1 = function (height) {
  let maxArea = 0;
  for (let i = 0; i < height.length - 1; i++) {
    let flag;
    for (let j = 1; j < height.length; j++) {
      let area;
      if (height[j] >= height[i]) {
        flag = true;
        if (j + 1 < height.length) {
          continue;
        } else {
          area = height[i] * (j - i);
          if (area > maxArea) maxArea = area;
        }
      } else {
        area = height[j] * (j - i);
        if (area > maxArea) maxArea = area;
        if (flag) {
          area = height[i] * (j - 1 - i);
          if (area > maxArea) maxArea = area;
          flag = false;
        }
      }
    }
  }

  return maxArea;
};

var maxArea = function (height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    // let step = Math.abs(right - left);
    let area = (right - left) * Math.min(height[left], height[right]);

    if (area > maxArea) maxArea = area;
    if (height[right] < height[left]) {
      right--;
    } else {
      left++;
    }
  }
  return maxArea;
};

// expect 200
console.log(maxArea([1, 8, 100, 2, 100, 4, 8, 3, 7]));

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
