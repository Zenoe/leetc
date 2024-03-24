/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list2.next, list1);
    return list2;
  }
};

var mergeKLists = function (lists) {
  // must return null instead of []
  // if (lists.length === 0) return [];
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];
  var halflists = [];
  for (let i = 0; i < lists.length - 1; i += 2) {
    mergedList = mergeTwoLists(lists[i], lists[i + 1]);
    halflists.push(mergedList);
  }
  // ipmt
  if (lists.length % 2 === 1) halflists.push(lists[lists.length - 1]);

  mergeKLists(halflists);
};
