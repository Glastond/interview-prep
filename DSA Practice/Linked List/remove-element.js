// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
// https://leetcode.com/problems/remove-linked-list-elements/description/

// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

const removeElements = (head, val) => {
  let temp = new ListNode(0),
    curr = temp;
  temp.next = head;

  while (curr.next !== null) {
    if (curr.next.val === val) curr.next = curr.next.next;
    else curr = curr.next;
  }

  return temp.next;
};
