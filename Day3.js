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


class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class SinglyLinkedList{
   constructor(){
    this.head = null
    this.tail = null
    this.length = 0
   }
   push(value){
    const newNode = new Node(value)
    console.log(newNode)
    if(!this.head){
        console.log("head is null" ,this.head) 
        this.head = newNode
        console.log(this.head , "head")
        this.tail = newNode
        console.log(this.tail , "tail")
    }else{
        this.tail.next = newNode
        console.log(this.tail.next , "tail.next")
        this.tail = newNode
        console.log(this.tail , "tail")
    }
    this.length++
    return this
   }
   traverse(){
    let curr = this.head
    console.log(curr , "currr")
    while(curr){
        console.log(curr.data)
        curr = curr.next
    }
   }
   pop(){
    if(!this.head) return undefined

    let curr = this.head
    console.log(curr , "curr")
    let newTail = curr
    console.log(newTail , "newTail")

    while(curr.next){
        newTail = curr
        curr = curr.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if(this.length === 0){
        this.head = null
        this.tail = null
    }
    return curr
   }

   shift(){
    if(!this.head) return undefined

    const removedNode = this.head
   }

}
let list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);

list.traverse();
list.pop();
list.traverse();