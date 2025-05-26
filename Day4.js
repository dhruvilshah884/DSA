// ****************Stack and queue***********************

// stack
// stack is a linear data structure that follows the lifo principal
// lifo => last in first out

//  Real-Life Examples:
// A stack of plates 📚🍽️

// Browser back button history ↩️

// Undo operations in editors ↩️

// Call stack in JavaScript 🧠

// stack operations
// push , pop , peek , isEmpty , size , print

// class Stack{
//     constructor(){
//         this.items = []
//     }

//     push(item){
//         this.items.push(item)
//     }
//     pop(){
//         if(this.isEmpty()) return "Stack is empty"
//         return this.items.pop()
//     }
//     peek(){
//         if(this.isEmpty()) return "Stack is empty"
//         return this.items[this.items.length - 1]
//     }
//     isEmpty(){
//         return this.items.length === 0
//     }
//     size(){
//         return this.items.length
//     }
//     print(){
//         console.log(this.items.join(" "))
//     }
// }

// let stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)

// stack.print()
// console.log(stack.pop())
// console.log(stack.peek())
// console.log(stack.isEmpty())

// practice

// Given a string containing just '(', ')', '{', '}', '[', ']', determine if the input string is valid.
// A string is valid if:

// Open brackets are closed by the same type of brackets.

// Open brackets are closed in the correct order.

// function isValid(s) {
//   const stack = [];

//   const map = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//   };

//   for (let char of s) {
//     if (char === "(" || char === "{" || char === "[") {
//         console.log(stack , "stack before")
//       stack.push(char);
//       console.log(stack , "stack after")
//     } else {
//         console.log(stack , "stackk")
//       if (stack.pop() !== map[char]) return false;
//     }
//   }
//   return stack.length === 0;
// }
// console.log(isValid("()[]{}"));
// console.log(isValid("([)]"));

class MinStack {
  constructor() {
    this.stack = [];
    this.MinStack = [];
  }

  push(val) {
    this.stack.push(val);

    if (
      this.MinStack.length === 0 ||
      val <= this.MinStack[this.MinStack.length - 1]
    ) {
      this.MinStack.push(val);
    }
  }
  pop() {
    const popped = this.stack.pop();
    if (popped === this.MinStack(this.MinStack.length - 1)) {
      this.MinStack.pop();
    }
    return popped;
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.MinStack[this.MinStack.length - 1];
  }
}
let minStack = new MinStack();
minStack.push(3);
minStack.push(5);
minStack.push(2);
minStack.push(1);
minStack.push(4);
console.log(minStack.MinStack);

// Evaluate an arithmetic expression in postfix notation.

// function evalRPN(tokens){
//     const stack = []

//     for(let token of tokens){
//         if(!isNaN(token)){
//             console.log(token , "token")
//             stack.push(Number(token))
//         }else{
//             const b = stack.pop()
//             console.log(b , "b")
//             const a = stack.pop()
//             console.log(a , "a")
//             switch(token){
//                 case "+":stack.push(a + b);break
//                 case "-":stack.push(a - b);break
//                 case "*":stack.push(a * b);break
//                  case '/': stack.push(Math.trunc(a / b)); break;
//             }
//         }
//     }
//     return stack.pop()
// }
// console.log(evalRPN(["2","1","+","3","*"]))

// For each element in the array, find the next greater element.
// Input: [4, 5, 2, 25] → Output: [5, 25, 25, -1]

// function nextGreaterElement(arr){
//     const stack = []
//     const result = new Array(arr.length).fill(-1)

//     for(let i = 0;i<arr.length;i++){
//         while(stack.length && arr[i] > arr[stack[stack.length - 1]]){
//             const index = stack.pop()
//             result[index] = arr[i]
//         }
//         stack.push(i)
//     }
//     return result
// }
// console.log(nextGreaterElement([4, 5, 2, 25]))

// queue

// queue is a linear data structure that follows the fifo principal
// fifo

// Real-Life Examples:
// Queue at a restaurant 🍽
// People standing in line 🧍‍♂️🧍‍♀️
// Printer job queue 🖨️
// Customer support call center 🎧
// Task queues in async processing 🧠️

// enqueue , dequeue , peek , isEmpty , size , print
// enqueue is like push
// dequeue is like shift
// front is return  element in the first indexedDB
// isEmpty is check if the queue is empty
// size is check the size of the queue
// print is print the queue

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items.shift();
  }
  front() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.join(" "));
  }
}
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.isEmpty());
console.log(queue.size());

// circle queue
class CircularQueue {
  constructor(k) {
    this.queue = new Array(k);
    this.front = -1;
    this.rear = -1;
    this.size = k;
  }
  enqueue(value) {
    if ((this.rear + 1) % this.size === this.front) {
      console.log("Queue is full");
      return;
    }
    if (this.front === -1) return (this.front = 0);
    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = value;
    return true;
  }

  dequeue(){
    if(this.front === -1) return false
    if(this.front === this.rear){
        this.front = this.rear = -1
    }else{
        this.front = (this.front + 1) % this.size
    }
    return true
  }

  Front(){
    return this.front === -1 ? -1 : this.queue[this.front]
  }
  Rear(){
    return this.rear === -1 ? -1 : this.queue[this.rear]
  }
  isEmpty(){
    return this.front === -1
  }
  isFull(){
    return (this.rear + 1) % this.size === this.front
  }


}
