/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // oops!!
  // nums = nums.sort((a, b) => a < b);
  nums = nums.sort((a, b) => a - b);

  // better to init first gap value in the way
  // let closestSum = nums[0] + nums[1] + nums[2]
  let gap = 1000000;
  let sum = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    let leftover = target - nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let diff = leftover - nums[left] - nums[right];
      if (diff > 0) {
        if (gap > diff) {
          gap = diff;
          sum = nums[left] + nums[right] + nums[i];
        }
        left++;
      } else if (diff < 0) {
        if (gap > -diff) {
          gap = -diff;
          sum = nums[left] + nums[right] + nums[i];
        }

        right--;
      } else {
        return nums[left] + nums[right] + nums[i];
      }
    }
  }
  return sum;
};

console.log(threeSumClosest([0, 1, 2], 3));
console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([0, 0, 0], 1));
console.log(threeSumClosest([0, 3, 5, -8, 4], 5));

nums = [-267, -883, 450, 170];
// expect -980
console.log(threeSumClosest(nums, -8224));

// expect -2895
nums = [
  558, 316, -411, 160, 801, 568, -124, -589, 32, 897, -33, -767, -528, -180,
  916, 813, 351, 642, -373, -919, 666, 973, -165, 831, -67, -934, -659, -18,
  273, 201, 728, 988, -926, 409, -573, 575, -502, 745, 724, 989, -464, 903, 975,
  980, 824, -197, -261, -761, 966, 799, -379, 96, 9, -680, -15, 476, 220, -647,
  365, 518, -479, -443, 337, -364, 968, -617, 862, -281, -936, -526, 196, 829,
  -191, 643, -473, 557, -870, 553, -506, 774, 784, -344, -452, 510, 219, -785,
  -1, 711, -759, -830, 10, 612, -450, -784, 53, 976, -314, -908, 463, -408,
  -846, 261, 689, -856, -687, -949, -163, -621, -233, 847, -682, -805, -711,
  286, 40, -831, -12, 952, -878, -226, 739, 11, -342, 74, -933, -770, -840, 265,
  702, 572, -453, -295, 704, -249, -835, 191, 404, 984, -820, 321, 632, -689,
  285, -877, -643, -451, -625, 84, 889, 620, -658, 861, -397, -952, 695, -386,
  31, 827, -539, -350, 588, 846, -142, 314, 909, 937, 625, -230, -553, 403,
  -763, 413, 904, -994, 272, -426, 104, -715, -159, -270, 716, 819, 806, 891,
  -47, -100, 440, -339, 918, -577, 508, -554, -478, 120, -943, 25, -600, -626,
  336, -567, 473, 531, 195, -259, -267, -883, 450, 170, 733, 491, 602,
];

console.log(threeSumClosest(nums, -8224));
nums = [
  -43, 57, -71, 47, 3, 30, -85, 6, 60, -59, 0, -46, -40, -73, 53, 68, -82, -54,
  88, 73, 20, -89, -22, 39, 55, -26, 95, -87, -57, -86, 28, -37, 43, -27, -24,
  -88, -35, 82, -3, 39, -85, -46, 37, 45, -24, 35, -49, -27, -96, 89, 87, -62,
  85, -44, 64, 78, 14, 59, -55, -10, 0, 98, 50, -75, 11, 97, -72, 85, -68, -76,
  44, -12, 76, 76, 8, -75, -64, -57, 29, -24, 27, -3, -45, -87, 48, 10, -13, 17,
  94, -85, 11, -42, -98, 89, 97, -66, 66, 88, -89, 90, -68, -62, -21, 2, 37,
  -15, -13, -24, -23, 3, -58, -9, -71, 0, 37, -28, 22, 52, -34, 24, -8, -20, 29,
  -98, 55, 4, 36, -3, -9, 98, -26, 17, 82, 23, 56, 54, 53, 51, -50, 0, -15, -50,
  84, -90, 90, 72, -46, -96, -56, -76, -32, -8, -69, -32, -41, -56, 69, -40,
  -25, -44, 49, -62, 36, -55, 41, 36, -60, 90, 37, 13, 87, 66, -40, 40, -35,
  -11, 31, -45, -62, 92, 96, 8, -4, -50, 87, -17, -64, 95, -89, 68, -51, -40,
  -85, 15, 50, -15, 0, -67, -55, 45, 11, -80, -45, -10, -8, 90, -23, -41, 80,
  19, 29, 7,
];
// expect 255
// console.log(threeSumClosest(nums, 255));
