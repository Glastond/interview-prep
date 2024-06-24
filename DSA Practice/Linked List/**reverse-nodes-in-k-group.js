// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

// https://leetcode.com/problems/reverse-nodes-in-k-group/description/
// https://www.youtube.com/watch?v=1UOPsfP85V4

// Returns the Kth element of the current group
const getKthElement = (curr, k) => {
  while (curr && k > 0) {
    curr = curr.next;
    k -= 1;
  }

  return curr;
};

var reverseKGroup = function (head, k) {
  let dummy = new ListNode(null, head),
    groupPrev = dummy;

  while (true) {
    let kth = getKthElement(groupPrev, k);

    // Group has less than k elements
    if (!kth) break;

    let groupNext = kth.next;
    // Reverse Group
    let prev = groupNext,
      curr = groupPrev.next,
      next = curr.next;

    while (curr !== groupNext) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    // Store the reference
    const temp = groupPrev.next;
    // As the link is reversed the next will point to the last element of the OG group
    groupPrev.next = kth;
    // Update the groupPrev with the first element of the OG group
    groupPrev = temp;
  }

  return dummy.next;
};
