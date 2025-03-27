// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
// For example, the following two linked lists begin to intersect at node c1:
// The test cases are generated such that there are no cycles anywhere in the entire linked structure.
// Note that the linked lists must retain their original structure after the function returns.

// https://leetcode.com/problems/intersection-of-two-linked-lists/description/
// https://www.youtube.com/watch?v=D0X0BONOQhI

const getIntersectionNode = (headA, headB) => {
  // Does not intersect
  if (!headA || !headB) return null;
  let currA = headA,
    currB = headB;

  // Loop till both the pointers are equal
  // If any pointer reaches the end start from the other pointer
  while (currA !== currB) {
    currA = currA === null ? headB : currA.next;
    currB = currB === null ? headA : currB.next;
  }

  return currA;
};
