// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

// https://leetcode.com/problems/rotate-list/description/
// https://youtu.be/D1sVh6dTSIk?si=e1Y753PthUPWF0-j&t=851

var rotateRight = function (head, k) {
  if (!head) return head;
  let old_tail = head,
    n = 0;

  // Find n (number of nodes in a LL)
  while (old_tail.next) {
    old_tail = old_tail.next;
    n += 1;
  }

  n += 1;
  // if k and n are similar return the head as is as it does not require any processing
  if (k === n) return head;
  // If k > n adjust it by mod Operation
  if (k > n) k %= n;

  // Complete the loop in the LL
  old_tail.next = head;

  let new_head,
    new_tail = head,
    i = 0;

  // Find new tail
  while (i < n - k - 1) {
    new_tail = new_tail.next;
    i += 1;
  }

  // assign the value to new head
  new_head = new_tail.next;
  new_tail.next = null;

  return new_head;
};
