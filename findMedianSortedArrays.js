/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// keep the overall run complexity to be O(log(m+n))
// O(m+n)
var findMedianSortedArrays = function (nums1, nums2) {
  // const size = nums1.length + nums2.length;
  const comb = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      comb.push(nums1[i]);
      i++;
    } else {
      comb.push(nums2[j]);
      j++;
    }
  }
  while (i < nums1.length) {
    comb.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    comb.push(nums2[j]);
    j++;
  }

  console.log(comb);
  if (comb.length % 2 === 0) {
    return (comb[comb.length >> 1] + comb[(comb.length >> 1) - 1]) / 2;
  } else {
    return comb[Math.floor(comb.length / 2)];
  }
};

var findMedianSortedArraysCut = function (nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  if (m > n) return findMedianSortedArrays(nums2, nums1);

  let lo = 0;
  let hi = n * 2;
  // not (m+n)/2
  // let leftsize = (m + n + 1) / 2;
  while (lo <= hi) {
    let mid2 = (lo + hi) >> 1;
    let mid1 = m + n - mid2;
    const L1 = mid1 === 0 ? Number.MIN_VALUE : nums1[(mid1 - 1) >> 1];
    const R1 = mid1 === 2 * m ? Number.MAX_VALUE : nums1[mid1 >> 1];

    const L2 = mid2 === 0 ? Number.MIN_VALUE : nums2[(mid2 - 1) >> 1];
    const R2 = mid2 === 2 * n ? Number.MAX_VALUE : nums2[mid2 >> 1];
    if (L1 > R2) {
      lo = mid2 + 1;
    } else if (L2 > R1) {
      hi = mid2 - 1;
    } else {
      console.log(L1, R1, L2, R2);
      return (Math.max(L1, L2) + Math.min(R1, R2)) / 2;
    }
  }
  return -1;
};

// hard attention
var findMedianSortedArraysErr = function (nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;

  if (m > n) return findMedianSortedArrays(nums2, nums1);

  let lo = 0;
  let hi = n;
  let leftsize = (m + n) >> 1;
  while (lo <= hi) {
    let mid2 = (lo + hi) >> 1;
    let mid1 = leftsize - mid2;
    let L1 = mid1 === 0 ? -Infinity : nums1[mid1 - 1];
    let R1 = mid1 === m ? Infinity : nums1[mid1];

    let L2 = mid2 === 0 ? -Infinity : nums2[mid2 - 1];
    let R2 = mid2 === n ? Infinity : nums2[mid2];
    if (L1 > R2) {
      lo = mid2 + 1;
    } else if (L2 > R1) {
      hi = mid2 - 1;
    } else {
      if ((m + n) % 2 === 0) {
        return (Math.max(L1, L2) + Math.min(R1, R2)) / 2;
      } else {
        return Math.min(R1, R2);
      }
    }
  }
  return -1;
};

var findMedianSortedArraysOK = function (nums1, nums2) {
  let n1 = nums1.length;
  let n2 = nums2.length;

  if (n1 > n2) return findMedianSortedArrays(nums2, nums1);

  let n = n1 + n2;
  let leftsize = (n1 + n2 + 1) >> 1;
  let lo = 0;
  let hi = n1;
  while (lo <= hi) {
    let mid1 = (lo + hi) >> 1;
    let mid2 = leftsize - mid1;

    let L1 = mid1 === 0 ? -Infinity : nums1[mid1 - 1];
    let R1 = mid1 === n1 ? Infinity : nums1[mid1];

    let L2 = mid2 === 0 ? -Infinity : nums2[mid2 - 1];
    let R2 = mid2 === n2 ? Infinity : nums2[mid2];

    if (L1 > R2) {
      hi = mid1 - 1;
    } else if (L2 > R1) {
      lo = mid1 + 1;
    } else {
      if (n % 2 === 0) {
        return (Math.max(L1, L2) + Math.min(R1, R2)) / 2;
      } else {
        // return Math.min(R1, R2);
        return Math.max(L1, L2);
      }
    }
  }
  return -1;
};

console.log(findMedianSortedArrays([1], [2, 3, 4, 5]));
console.log(findMedianSortedArrays([1], [2, 3, 4, 5, 6]));
console.log(findMedianSortedArrays([], [0]));
console.log(findMedianSortedArrays([], [1, 2, 3, 4, 5, 6]));
console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1], []));
console.log(findMedianSortedArrays([1, 2], [3]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
