class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(node_val) {
    let new_node = new Node(node_val);
    if (this.length === 0) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      let current_last_node = this.tail;
      current_last_node.next = new_node;
      new_node.prev = current_last_node;
      this.tail = new_node;
    }
    this.length += 1;
  }
}

let dls_1 = new DLL();

dls_1.push(10);
dls_1.push(11);
dls_1.push(12);

console.log(dls_1);
