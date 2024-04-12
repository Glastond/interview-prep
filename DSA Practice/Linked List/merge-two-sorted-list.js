// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
// https://leetcode.com/problems/merge-two-sorted-lists/description/

const mergeTwoLists = (list1, list2) => {
  let list3 = new ListNode(null, null),
    prev = list3;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      list3.next = list1;
      list1 = list1.next;
    } else {
      list3.next = list2;
      list2 = list2.next;
    }
    list3 = list3.next;
  }

  if (list1 === null) list3.next = list2;
  if (list2 === null) list3.next = list1;

  return prev.next;
};
