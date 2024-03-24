var printlist = (h) => {
  while (h) {
    console.log(h.val);
    h = h.next;
  }
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseList = (h, k) => {
  if (k === 1) return h;

  var p = h;
  var newH = p;
  var np = p.next;

  // impt
  p.next = null;
  var nnp = np.next;
  np.next = newH;
  newH = np;
  var count = 2;
  p = nnp;
  while (count < k && p) {
    var np = p.next;
    p.next = newH;
    newH = p;
    p = np;
    count++;
  }

  return newH;
};
var reverseKGroup0 = function (head, k) {
  var reverseList = (h, k) => {
    if (k === 1) return h;

    var p = h;
    var nh = p.next;
    var nnh = nh.next;
    nh.next = p;
    p.next = null;
    var count = 2;
    var newH = nh;
    while (count++ < k && nnh) {
      var t = nnh.next;
      nnh.next = nh;
      newH = nnh;
      nh = nnh;
      nnh = t;
    }
    return newH;
  };

  var p = head;
  var sectionHead = null;
  var ret = null;
  var h;
  var a = null;
  var b = null;
  for (let i = 0; i < k; i++) {
    if (i === 0) {
      if (sectionHead) {
        if (ret === null) ret = sectionHead;
        //else if (preh) preh.next = sectionHead;
        console.log(sectionHead.val);
        if (b) {
          a.next = sectionHead;
          a = b;
        }
        //if (b) console.log("b:", b.val);
        // if (preh) console.log('preh:', preh.val)
      }
      h = p;
    }

    if (p) p = p.next;
    else {
      // h point to the rest of the list, count does not exceed k
      a.next = h;
      break;
    }

    if (i === k - 1) {
      sectionHead = reverseList(h, k);
      if (a === null) a = h;
      else {
        b = h;
      }

      // i++ in the next loop
      i = -1;
      // console.log(h.val);
    }

    // if (p) p = p.next;
    // else break;
  }
  //console.log(h.val)
  return ret;
};
// more concise
var reverseKGroup = function (head, k) {
  var reverseList = (h, k) => {
    if (k === 1) return h;

    var p = h;
    var newH = p;
    var np = p.next;

    // impt
    p.next = null;
    var nnp = np.next;
    np.next = newH;
    newH = np;
    var count = 2;
    p = nnp;
    while (count < k && p) {
      var np = p.next;
      p.next = newH;
      newH = p;
      p = np;
      count++;
    }

    return newH;
  };

  var p = head;
  var sectionHead = null;
  var h;
  var curh = h;
  var preh = null;
  for (let i = 0; i < k; i++) {
    if (i === 0) {
      // if (sectionHead) {
      //   console.log(sectionHead.val);
      // }
      h = p;
      preh = curh;
      curh = h;
      preh.next = sectionHead;
    }

    if (p) p = p.next;
    else {
      preh.next = curh;
      break;
    }

    if (i === k - 1) {
      sectionHead = reverseList(h, k);

      // i++ in the next loop
      i = -1;
      // console.log(h.val);
    }

    // if (p) p = p.next;
    // else break;
  }
};

var n1 = new ListNode(1);
var n2 = new ListNode(2);
var n3 = new ListNode(3);
var n4 = new ListNode(4);
var n5 = new ListNode(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = null;

// reverseKGroup(n1, 3);
var h = reverseList(n1, 2);
printlist(h);
