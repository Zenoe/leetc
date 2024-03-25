var insertionNotGood = (nums) => {
  // p point to the last idx of the sorted
  let p = 0;
  for (let i = 1; i < nums.length; i++) {
    // current num to be compared
    let current = nums[i];
    let j = 0;
    for (; j <= p; j++) {
      if (nums[j] > current) {
        for (let k = i; k > j; k--) {
          nums[k] = nums[k - 1];
        }
        nums[j] = current;

        p++;
        break;
      }
    }
  }
  console.log(nums);
};

// attention
var insertion = (nums) => {
  // p point to the last idx of the sorted
  let p = 0;
  for (let i = 1; i < nums.length; i++) {
    // current num to be compared
    let current = nums[i];
    let j = i - 1;
    while (current < nums[j] && j >= 0) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = current;
  }
  console.log(nums);
};

var selection = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    let min = nums[i];
    let minidx = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < min) {
        minidx = j;
        min = nums[j];
      }
    }
    if (minidx !== i) {
      var t = nums[i];
      nums[i] = nums[minidx];
      nums[minidx] = t;
    }
  }
  // console.log(nums);
};

var bubble = (nums) => {
  do {
    var swap = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        swap = true;
        let t = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = t;
      }
    }
  } while (swap);
  console.log(nums);
};

// selection([4, 3, 2, 1, 6, 7, 9, 0]);
// bubble([4, 4, 3, 2, 1, 0, 8, 6, 7, 9, 0]);
insertion([4, 4, 3, 2, 1, 0, 8, 6, 7, 9, 0]);
insertion([4, 4, 3, 2, 1, 0, 2, 3]);
