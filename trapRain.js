// my brute force solution
var trap = function (height) {
  let area = 0;
  let leftBorder = 0;
  for (let i = 1; i < height.length - 1; i++) {
    // not work for [6, 1, 0, 0, 2, 7]
    // if (height[i - 1] > height[i] && height[i + 1] > height[i]) {
    if (height[i - 1] >= height[i] && height[i + 1] >= height[i]) {
      // search max of the left
      let leftMax = height[i];
      let p = i - 1;
      let left = p;
      while (p >= leftBorder) {
        if (height[p] > leftMax) {
          leftMax = height[p];
          left = p;
        }
        p--;
      }
      // console.log(left, leftMax);
      // search right
      let rightMax = height[i];
      let q = i + 1;
      let right = q;
      while (q < height.length) {
        // if (height[q] > rightMax) {
        // [4, 2, 0, 3, 2, 4, 3, 4]
        if (height[q] >= rightMax) {
          rightMax = height[q];
          right = q;
          // if (rightMax > leftMax) {
          if (rightMax >= leftMax) {
            // console.log(rightMax, q);
            leftBorder = q;
            let landArea = 0;
            // this loop may be optimized?
            for (let k = left; k <= q; k++) {
              if (height[k] > leftMax) {
                landArea += leftMax;
              } else landArea += height[k];
            }
            area += leftMax * (q - left + 1) - landArea;
            // console.log("area:", area);

            // i = leftBorder + 1;
            i = leftBorder;

            break;
          }
        }
        q++;
      }
      if (q === height.length) {
        landArea = 0;
        for (let k = left; k <= right; k++) {
          if (height[k] > rightMax) {
            // [5, 4, 1, 2]
            // more than one element is greater than rightMax
            landArea += rightMax;
          } else landArea += height[k];
        }
        area += rightMax * (right - left + 1) - landArea;
        // console.log("left, right, area :", left, right, area);

        // break;
        // can not break, [9, 6, 8, 8, 5, 6, 3]
        // i = idx at 8
        i = right;
        // must change leftBorder here to start to iterate from i
        leftBorder = right;
      }
    }
  }
  return area;
};
var trapOther = function (height) {
  if (height.length === 0) return 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let totalWater = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        totalWater += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        totalWater += rightMax - height[right];
      }
      right--;
    }
  }

  return totalWater;
};

// got the hint water[i]= min (max_left_height,max_right_height)-arr[i]
var trap = function (height) {
  if (height.length === 0) return 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let area = 0;
  while (left <= right) {
    //
    if (height[left] >= leftMax) {
      leftMax = height[left];
      left++;
      continue;
    }
    if (height[right] >= rightMax) {
      rightMax = height[right];
      right--;
      continue;
    }
    // if(height[left] <leftMax){
    if (leftMax <= rightMax) {
      area += leftMax - height[left];
      left++;
    } else {
      // leftMax > rightMax
      // ipmt. calcute from the other direction
      area += rightMax - height[right];
      right--;
    }
    // }
  }
  return area;
};
// 11
console.log(trap([2, 6, 3, 8, 2, 7, 2, 5, 0]));

// 3
console.log(trap([9, 6, 8, 8, 5, 6, 3]));
// 23
console.log(trap([0, 5, 6, 4, 6, 1, 0, 0, 2, 7]));

// 26
console.log(trap([0, 1, 2, 0, 3, 0, 1, 2, 0, 0, 4, 2, 1, 2, 5, 0, 1, 2, 0, 2]));

// expect 10
console.log(trap([4, 2, 0, 3, 2, 4, 3, 4]));
// 6
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// 9
console.log(trap([4, 2, 0, 3, 2, 5]));
// 1
console.log(trap([5, 4, 1, 2]));
console.log(trap([]));
