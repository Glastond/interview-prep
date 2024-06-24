// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
// https://leetcode.com/problems/same-tree/description/

// Recursive
var isSameTree = function(p, q) {
    if(!p && !q) return true;
    if(!p || !q) return false;

    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

// Iterative
var isSameTree1 = function(p, q) {
    // Create queues for both trees.
    const queue1 = [p];
    const queue2 = [q];

    while (queue1.length > 0 && queue2.length > 0) {
        const node1 = queue1.shift();
        const node2 = queue2.shift();

        if (!node1 && !node2) {
            continue;
        }
        // If the values of the current nodes are not equal, the trees are not identical.
        if (!node1 || !node2 || node1.val !== node2.val) {
            return false;
        }

        // Add the left and right children of both nodes to their respective queues.
        queue1.push(node1.left);
        queue1.push(node1.right);
        queue2.push(node2.left);
        queue2.push(node2.right);
    }

    // If both queues are empty, the trees are identical.
    return queue1.length === 0 && queue2.length === 0;
}