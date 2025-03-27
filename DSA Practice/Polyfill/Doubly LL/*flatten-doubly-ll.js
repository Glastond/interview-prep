// You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer.
// This child pointer may or may not point to a separate doubly linked list, also containing these special nodes.
// These child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below.

// Given the head of the first level of the list, flatten the list so that all the nodes appear in a single-level, doubly linked list.
// Let curr be a node with a child list. The nodes in the child list should appear after curr and before curr.next in the flattened list.

// Return the head of the flattened list. The nodes in the list must have all of their child pointers set to null.

// https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/description/
// https://udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22228238#notes

const flatten = (head) => {
  if (!head) return head;
  let curr = head;

  while (curr) {
    // Has a child
    if (curr.child) {
      // save reference for the tail
      let tail = curr.child;

      while (tail.next !== null) {
        tail = tail.next;
      }

      //   Point tail to the curr next pointer
      tail.next = curr.next;
      //   To handle cases when the last node(tail) has a child
      // In that case it (null) wont have a prev pointer
      if (tail.next !== null) curr.next.prev = tail;
      curr.next = curr.child;
      curr.next.prev = curr;
      curr.child = null;
    }

    curr = curr.next;
  }

  return head;
};
