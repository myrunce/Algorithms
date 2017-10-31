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
  if (this.root === null) {
     this.root = new Node(value);
    return;
  }
  else {
    let current = this.root;
    while(current) {
      if (value < current.value) {
        console.log('less than')
        if(current.left === null) {
          current.left = new Node(value);
          return;
        }
        else {
          this.left = current;
        }
      }
      else if (value > current.value) {
        if (current.right === null) {
          current.right = new Node(value);
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
myBst.add(9);
myBst.add(3);
console.log(myBst);