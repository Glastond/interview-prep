// Given the head of a singly linked list, reverse the list, and return the reversed list.
// https://leetcode.com/problems/reverse-linked-list/description/

const reverseList = (head) => {
  if (!head) return head;
  let prev = null,
    next = head.next,
    current = head;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};
