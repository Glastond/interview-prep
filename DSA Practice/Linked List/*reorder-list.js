// You are given the head of a singly linked-list. The list can be represented as:
// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

// Example 1:
// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// https://leetcode.com/problems/reorder-list/description/
// https://www.youtube.com/watch?v=S5bfdUTrKLM

const reorderList = (head) => {
  let slow = head,
    fast = head.next;

  // Find middle of the LL
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Beginning of the second half of the LL
  let second = slow.next,
    prev = null;    // End of second half
  slow.next = null; // End of first half

  // Reverse second half so that it becomes easier to traverse in the opposite direction
  while (second) {
    const temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }
  second = prev;

  // Merge 2 half's
  let first = head;

  // looping based on second half as it can be shorter
  while (second) {
    // Storing the reference before breaking the links
    const tmp1 = first.next,
      tmp2 = second.next;
    first.next = second;
    second.next = tmp1;
    first = tmp1;
    second = tmp2;
  }
};
