/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head === null) return null;
  if (head.next === null) return head;
  var p = head;
  var ret = head.next;
  var q;
  var last = null;
  while (p && p.next) {
    q = p.next;
    p.next = q.next;
    q.next = p;
    // impt last point to node of the end of the previous pairs
    if (last !== null) {
      last.next = q;
    }
    last = p;
    p = p.next;
  }

  // oops! here point to the first node of last pair
  // return head.next

  return ret;
};
