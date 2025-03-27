// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

const removeNthFromEnd = (head, n) => {
  let fast = head,
    slow = head;

  // Giving the fast pointer a head start
  for (let i = 0; i < n; i++) fast = fast.next;

  // Check if n is equal to the length of the LL
  if (!fast) return head.next;

  // After the head start when the fats pointer reaches the end the slow will be
  // on the node before the nth node
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  // Skip the nth node
  slow.next = slow.next.next;

  return head;
};
