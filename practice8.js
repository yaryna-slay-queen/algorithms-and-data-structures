class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Клас Бінарного дерева
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    let current = this.root;

    while (current !== null) {
      if (value === current.value) {
        return true;
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  remove(value) {
    this.root = this._removeNode(this.root, value);
  }

  _removeNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this._removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this._removeNode(node.right, value);
      return node;
    } else {

      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }

      let minRightNode = this._findMinNode(node.right);
      node.value = minRightNode.value;
      node.right = this._removeNode(node.right, minRightNode.value);
      return node;
    }
  }

  _findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  printAll() {
    const result = [];
    this._inOrder(this.root, result);
    console.log("Усі елементи дерева:", result.length > 0 ? result.join(" -> ") : "Дерево порожнє");
  }

  _inOrder(node, result) {
    if (node !== null) {
      this._inOrder(node.left, result);
      result.push(node.value);
      this._inOrder(node.right, result);
    }
  }

  findMin() {
    if (this.root === null) return null;
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }

  findMax() {
    if (this.root === null) return null;
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.value;
  }

  count() {
    return this._countNodes(this.root);
  }

  _countNodes(node) {
    if (node === null) {
      return 0;
    }
    return 1 + this._countNodes(node.left) + this._countNodes(node.right);
  }
}

const bst = new BinarySearchTree();

[3, 1, 9, 1, 7, 10, 6, 8].forEach(num => bst.insert(num));

bst.printAll();
console.log("Кількість елементів:", bst.count());
console.log("Найменший елемент:", bst.findMin());
console.log("Найбільший елемент:", bst.findMax());

console.log("Чи є число 7 у дереві?", bst.contains(7));
console.log("Чи є число 99 у дереві?", bst.contains(99));


console.log("\nВидалення елементу 3:");
bst.remove(3);

bst.printAll();
console.log("Новий корінь дерева:", bst.root.value);
console.log("Кількість елементів після видалення:", bst.count());