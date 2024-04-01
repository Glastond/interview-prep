class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(value) {
    const node = this.root;

    // Check if root exists
    if (node === null) {
      this.root = new Node(value);
      return;
    } else {
      // If Root exists
      const searchTree = (node) => {
        if (value < node.data) {
          // If left node does not exist than assign the new node
          if (node.left === null) {
            node.left = new Node(value);
            return;
          } else {
            // Search for an eligible node
            return searchTree(node.left);
          }
        } else if (value > node.data) {
          // If right node does not exist than assign the new node
          if (node.right === null) {
            node.right = new Node(value);
            return;
          } else {
            // Search for an eligible node
            return searchTree(node.right);
          }
        } else {
          // If the value is equal
          return;
        }
      };

      searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  isPresent(target) {
    let current = this.root;

    while (current !== null) {
      if (current.data === target) {
        return true;
      }
      if (target < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  find(target) {
    let current = this.root;

    while (current !== null) {
      if (current.data === target) {
        return current;
      }
      if (target < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }
}
