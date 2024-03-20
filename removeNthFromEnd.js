/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// use an extra array to store the list
var removeNthFromEnd0 = function (head, n) {
  let p = head;
  // let len = 0
  const nodes = [];
  while (p) {
    nodes.push(p);
    p = p.next;
  }
  let pos = nodes.length - n;
  if (pos === 0) return head.next;
  // if (pos === nodes.length) {
  if (pos + 1 === nodes.length) {
    nodes[pos - 1].next = null;
  } else {
    nodes[pos - 1].next = nodes[pos + 1];
  }
  return head;
};

// use two pointers
// attention
var removeNthFromEnd = function (head, n) {
  let [p, q] = [head, head];
  // let p = new ListNode(0);
  for (let i = 0; i < n; i++) {
    q = q.next;
  }

  // impt
  if (!q) return head.next;

  // while (q) {
  while (q.next) {
    q = q.next;
    p = p.next;
  }

  // p does not move, remove the head
  // if (p === head) {
  //   return head.next;
  // }

  p.next = p.next.next;
  return head;
};
