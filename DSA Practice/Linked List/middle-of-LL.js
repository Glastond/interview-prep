// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.
// https://leetcode.com/problems/middle-of-the-linked-list/description/

const middleNode = (head) => {
  let slow = head,
    fast = head;

  while (fast?.next) {
    slow = slow.next;
    fast = fast.next?.next;
  }

  return slow;
};
