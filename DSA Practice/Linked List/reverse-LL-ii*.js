// Given the head of a singly linked list and two integers left and right where left <= right, reverse
// the nodes of the list from position left to position right, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

//   1       =>  2  =>  3  =>    4    =>  5
// revs_prev    revs         revs_end   revs_end_next

// https://leetcode.com/problems/reverse-linked-list-ii/description/
// https://youtu.be/D1sVh6dTSIk?si=rYtuigUzRRB5aCNc&t=700



const reverse = (head) => {
  let prev = null,
    curr = head,
    next = head;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

var reverseBetween = function (head, left, right) {
  if (left === right) return head;
  let revs = null,
    revs_prev = null,
    revs_end = null,
    revs_end_next = null;

  let curr = head,
    i = 1;
  while (curr && i <= right) {
    if (i < left) revs_prev = curr;
    if (i === right) {
      revs_end = curr;
      revs_end_next = curr.next;
    }
    if (i === left) revs = curr;

    curr = curr.next;
    i += 1;
  }

  revs_end.next = null;
  revs_end = reverse(revs);

  if (revs_prev) revs_prev.next = revs_end;
  else head = revs_end;

  revs.next = revs_end_next;

  return head;
};
