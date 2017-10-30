// Binary Search Tree add

function BST() {
  this.root = null;
}

function Node(value) {
  this.value = value
  this.left = null;
  this.right = null;
}

BST.prototype.add = function(value) {
  let current = this.root;
  if (this.root === null) {
    this.root = new Node(value);
    return;
  }
  else {
    let node = new Node(value);
    while(current) {
      if (current.value < node.value){
        if(current.left === null) {
          current.left = node;
          return;
        }
        else {
          this.left = current;
        }
      }
      else if (current.value > node.value) {
        if (current.right === null) {
          current.right = node;
          return;
        }
        else {
          current.right = current;
        }
      }
      else {
        return "value already in tree";
      }
    }
  }
}

let myBst = new BST();
myBst.add(5);
myBst.add(7);
console.log(myBst.root);