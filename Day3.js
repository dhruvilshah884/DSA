// ****************Linked Lists***********************

// class node {
//   constructor(data) {
//     console.log("node created");
//     this.data = data;
//     this.next = null;

//   }
//   print() {
//     console.log(this.data);
//   }
// }

// There are three main types of linked lists:

// (1)  Singly Linked List (SLL)
// each node points to the next node
// last node 'next' is null
// traversal is one-way (from head to tail)
// 10 -> 20 -> 3 -> null

// (2)  Doubly Linked List
// each node points to the next and previous node
// allow bidirectional traversal
// null <- 10 <-> 20 <-> 30 -> null

// (3)  Circular Linked List
// // last node points to the need
// can be singly and doubly linked
// 10 -> 20 -> 30 -> 10

// | Type                 | Prev Pointer | Next Pointer | Looped? | Traversal      |
// | -------------------- | ------------ | ------------ | ------- | -------------- |
// | Singly Linked List   | ❌            | ✅            | ❌       | One-way        |
// | Doubly Linked List   | ✅            | ✅            | ❌       | Two-way        |
// | Circular Linked List | Maybe        | ✅/✅✅         | ✅       | One or Two-way |

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class SinglyLinkedList{
//    constructor(){
//     this.head = null
//     this.tail = null
//     this.length = 0
//    }
//    push(value){
//     const newNode = new Node(value)
//     console.log(newNode)
//     if(!this.head){
//         console.log("head is null" ,this.head)
//         this.head = newNode
//         console.log(this.head , "head")
//         this.tail = newNode
//         console.log(this.tail , "tail")
//     }else{
//         this.tail.next = newNode
//         console.log(this.tail.next , "tail.next")
//         this.tail = newNode
//         console.log(this.tail , "tail")
//     }
//     this.length++
//     return this
//    }
//    traverse(){
//     let curr = this.head
//     console.log(curr , "currr")
//     while(curr){
//         console.log(curr.data)
//         curr = curr.next
//     }
//    }
//    pop(){
//     if(!this.head) return undefined

//     let curr = this.head
//     console.log(curr , "curr")
//     let newTail = curr
//     console.log(newTail , "newTail")

//     while(curr.next){
//         newTail = curr
//         curr = curr.next
//     }
//     this.tail = newTail
//     this.tail.next = null
//     this.length--
//     if(this.length === 0){
//         this.head = null
//         this.tail = null
//     }
//     return curr
//    }

//    shift(){
//     if(!this.head) return undefined

//     const removedNode = this.head
//    }

// }
// let list = new SinglyLinkedList();
// list.push(10);
// list.push(20);
// list.push(30);

// list.traverse();
// list.pop();
// list.traverse();

// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.length = 0;
//   }
//   append(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//     } else {
//       let curr = this.head;
//       while (curr.next) {
//         curr = curr.next;
//       }
//       curr.next = newNode;
//     }
//     this.length++;
//   }
//   print() {
//     let curr = this.head;
//     let result = "";
//     while (curr) {
//       result += curr.value + " -> ";
//       curr = curr.next;
//     }
//     console.log(result + "null");
//   }

//   unshift(value) {
//     const newNode = new Node(value);
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//   }
//   shift() {
//     if (!this.head) return null;
//     const removed = this.head;
//     this.head = this.head.next;
//     this.length--;
//     return removed.value;
//   }

//   get(index) {
//     if (index < 0 || index >= this.length) return null;
//     let curr = this.head;
//     let count = 0;
//     while (count < index) {
//       curr = curr.next;
//       count++;
//     }
//   }

//   set(index, value) {
//     const node = this.get(index);
//     if (!node) return false;
//     node.value = value;
//     return true;
//   }
//   insert(index, value) {
//     if (index < 0 || index > this.length) return false;
//     if (index === 0) return !!this.unshift(value);
//     if (index === this.length) return !!this.append(value);

//     const newNode = new Node(value);
//     const prev = this.get(index - 1);
//     newNode.next = prev.next;
//     prev.next = newNode;
//     this.length++;
//     return true;
//   }
//   remove(index) {
//     if (index < 0 || index >= this.length) return undefined;
//     if (index === 0) return this.shift();
//     const prev = this.get(index - 1);
//     const removed = prev.next;
//     prev.next = removed.next;
//     this.length--;
//     return removed.value;
//   }
// }

// const list1 = new SinglyLinkedList();
// list1.append(10);
// list1.append(20);
// list1.append(30);
// list1.print();

// doubly linked list
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }
//     this.length++;
//   }
//   pop() {
//     if (!this.head) return undefined;
//     const removedNode = this.tail;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.tail = removedNode.prev;
//       this.tail.next = null;
//       removedNode.prev = null;
//     }
//     this.length--;
//     return removedNode.value;
//   }
//   unshift(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head.prev = newNode;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   shift() {
//     if (!this.head) return null;
//     const removed = this.head;
//     if (this.length === 1) {
//       this.head = this.tail = null;
//     } else {
//       this.head = removed.next;
//       this.head.prev = null;
//       removed.next = null;
//     }
//     this.length--;
//     return removed.value;
//   }
//   get(index) {
//     if (index < 0 || index >= this.length) return null;

//     let current;
//     if (index <= this.length / 2) {
//       current = this.head;
//       for (let i = 0; i < index; i++) current = current.next;
//     } else {
//       current = this.tail;
//       for (let i = this.length - 1; i > index; i--) current = current.prev;
//     }
//     return current;
//   }

//   set(index, value) {
//     const node = this.get(index);
//     if (node) {
//       node.value = value;
//       return true;
//     }
//     return false;
//   }
//   insert(index, value) {
//     if (index < 0 || index > this.length) return false;
//     if (index === 0) return !!this.unshift(value);
//     if (index === this.length) return !!this.push(value);

//     const newNode = new Node(value);
//     const before = this.get(index - 1);
//     const after = before.next;

//     before.next = newNode;
//     newNode.prev = before;

//     newNode.next = after;
//     after.prev = newNode;

//     this.length++;
//     return true;
//   }
//   remove(index) {
//     if (index < 0 || index >= this.length) return null;
//     if (index === 0) return this.shift();
//     if (index === this.length - 1) return this.pop();

//     const removed = this.get(index);
//     const before = removed.prev;
//     const after = removed.next;

//     before.next = after;
//     after.prev = before;

//     removed.next = null;
//     removed.prev = null;

//     this.length--;
//     return removed.value;
//   }
//   printForward() {
//     let current = this.head;
//     let output = "";
//     while (current) {
//       output += current.value + " <-> ";
//       current = current.next;
//     }
//     console.log(output + "null");
//   }

//   printBackward() {
//     let current = this.tail;
//     let output = "";
//     while (current) {
//       output += current.value + " <-> ";
//       current = current.prev;
//     }
//     console.log(output + "null");
//   }
// }
// const dll = new DoublyLinkedList();
// dll.push(10);
// dll.push(20);
// dll.push(30);
// dll.unshift(5);
// dll.insert(2, 15);
// dll.set(1, 12);
// dll.remove(3);
// dll.printForward(); // 5 <-> 12 <-> 15 <-> 30 <-> null
// dll.printBackward(); // 30 <-> 15 <-> 12 <-> 5 <-> null

// Circular Linked List?
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
  const newNode = new Node(value);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    newNode.next = this.head; // circular link
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
    this.tail.next = this.head; // maintain circle
  }

  this.length++;
}

prepend(value) {
  const newNode = new Node(value);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    newNode.next = this.head;
  } else {
    newNode.next = this.head;
    this.head = newNode;
    this.tail.next = this.head; // update tail to point to new head
  }

  this.length++;
}
delete(value) {
  if (!this.head) return;

  let current = this.head;
  let prev = this.tail;
  let found = false;

  for (let i = 0; i < this.length; i++) {
    if (current.value === value) {
      found = true;
      if (current === this.head) {
        this.head = this.head.next;
        this.tail.next = this.head;
      } else {
        prev.next = current.next;
        if (current === this.tail) {
          this.tail = prev;
        }
      }
      this.length--;
      break;
    }

    prev = current;
    current = current.next;
  }

  if (!found) console.log("Value not found.");
}
    print() {
  if (!this.head) return console.log("List is empty");

  let result = "";
  let current = this.head;
  let count = 0;

  while (count < this.length) {
    result += current.value + " -> ";
    current = current.next;
    count++;
  }

  result += "(back to head)";
  console.log(result);
}

}
const cll = new CircularLinkedList();
cll.append(10);
cll.append(20);
cll.append(30);
cll.prepend(5);
cll.delete(20);
cll.print(); // 5 -> 10 -> 30 -> (back to head)
