class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = this.head;
      this.length = 1;
    } else {
      this.length += 1;
      this.tail.next = node;
      this.tail = node;
    }
  }

  pop() {
    let node = this.head;
    let current = null;

    while (node.next) {
      current = node;
      node = node.next;
    }

    node = null;
    this.tail = current;
    current.next = null;
    this.length--;
  }

   moveToNode(index) {
  let node = this.head;
    console.log("iterate");
    while (index >= 1) {
      node = node.next;
      index--;
    }
    return node;
  }

  get(index) {
    if (index === 0) {
      return this.head;
    } else if (index === this.length - 1) {
      return this.tail;
    } else if (index >= this.length || index < 0) {
      return null;
    } else {
      //   let node = this.head;
      //   console.log("iterate");
      //   while (index >= 1) {
      //     node = node.next;
      //     index--;
      //   }
      return this.moveToNode(index);
    }
  }

  set (index, val) {

     if (index === 0) {
       return this.head.value = val;
     } else if (index === this.length - 1) {
       return this.tail.value = val;
     } else if (index >= this.length || index < 0) {
       return null;
     } else {
       //   let node = this.head;
       //   console.log("iterate");
       //   while (index >= 1) {
       //     node = node.next;
       //     index--;
       //   }
       return this.moveToNode(index).value = val
     }

  }
}

let sll = new SinglyLinkedList();

sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);

console.log(sll);

console.log(sll.pop());

console.log(sll);

sll.push(5);
sll.push(6);
sll.push(7);

console.log(sll.get(0));
console.log(sll.get(2));
console.log(sll.get(1));
console.log(sll.get(4));

sll.set(4,10)

console.log(sll.get(4));

console.log(sll);