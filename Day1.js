// tc and sc 
// time complexity is the amount of time taken by an algorithm to run, as a function of the length of the input.
// space complexity is the amount of memory taken by an algorithm to run, as a function of the length of the input.

// 1. O(1) - Constant Time Complexity
// 2. O(log n) - Logarithmic Time Complexity    
// 3. O(n) - Linear Time Complexity
// 4. O(n log n) - Linearithmic Time Complexity
// 5. O(n^2) - Quadratic Time Complexity
// 6. O(n^3) - Cubic Time Complexity
// 7. O(2^n) - Exponential Time Complexity
// 8. O(n!) - Factorial Time Complexity

// 1. O(1) - Constant Time Complexity
// example - finding the first element of an array
// 2. O(log n) - Logarithmic Time Complexity
// example - binary search
// (3) O(n) - Linear Time Complexity
// example - finding the sum of all elements in an array
// (4)  O(n log n) - Linearithmic Time Complexity
// example - merge sort
// (5) O(n^2) - Quadratic Time Complexity
// example - bubble sort
// (6) O(n^3) - Cubic Time Complexity
// example - matrix multiplication
// (7) O(2^n) - Exponential Time Complexity
// example - fibonacci series
// (8) O(n!) - Factorial Time Complexity
// example - permutation


// ****************Array***********************
// 1d array and 2d array 


// ****************1d array***********************

// let a = [1,2,3,4,5];

// console.log(a[1])

// for(let i =0;i<a.length;i++){
//     console.log(a[i])
// }

// *****************2d array***********************

// let a = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// console.log(a[1][1])

// console.log(a[2][2])


// for(let i =0;i<a.length;i++){
//     for(let j =0;j<a[0].length;j++){
//         console.log(a[i][j])
//     }
// }

// Mutating Array Methods
// push , pop , shift , unshift , splice , sort , reverse

// const a = [1,2,3,4,5];
// push
// a.push(6);
// a.pop()
// a.shift()
// a.unshift(0)
// a.splice(1,2)
// a.splice(1,0,100)
// a.sort()
// a.reverse()

// console.log(a)


// practice 
// let colors = ["Red", "Green", "Blue"];
// Add "Yellow" at the end

// colors.push("Yellow");

// Remove the first color
// colors.shift()

// Insert "Pink" at index 1

// colors.splice(1,0,"pink")

// console.log(colors);


// Non-Mutating Array Methods in JavaScript
// slice , concat , includes , indexOf , join , toString

// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// let vegetables = ["Carrot", "Potato", "Onion"];


// console.log(fruits.slice(1,3))

// console.log(fruits.concat(vegetables))

// console.log(fruits.includes("Apple"))

// console.log(fruits.indexOf("Mango"))

// console.log(fruits.join("-"))

// console.log(fruits.toString())


// practice 

// let names = ["Alice", "Bob", "Charlie", "David"];
// let add = ["Eve", "Frank"];


// 1. Slice out "Bob" and "Charlie"


// console.log(names.slice(1,3))

// 2. Concatenate "Eve" and "Frank" to the end of the array

// console.log(names.concat(add))

// 3. Check if "Alice" is in the array

// console.log(names.includes("Alice"))

// 4. Convert array into a string with " | " as separator

// console.log(names.join(" | "))


// Looping Through Arrays in JavaScript 🔁
// for loop , for of loop , for each , map 

// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// let a = [1,2,3,4,5]

// for loop 
// for(let i =0;i<fruits.length;i++){
//     console.log(fruits[i])
// }

// for of loop

// for(let fruit of fruits){
//     console.log(fruit)
// }

// fruits.forEach((fruit)=>{
//     console.log(fruit)
// })

// map 

// let b = a.map((ele)=>{
//     return ele*2
// })

// console.log(b)

// practice
// let scores = [75, 88, 92, 64];


// 1. Use a for loop to print all scores

// for(let i =0;i<scores.length;i++){
//     console.log(scores[i])
// }

// 2. Use forEach to print "Score: <value>"

// scores.forEach((score , index)=>{
//     console.log(`Score: ${score} index : ${index}`)
// })
// 3. Use map to create a new array with scores + 5 (bonus)

// let a = scores.map((Score)=>{
//     return Score+5
// })
// console.log(a)


//  Searching & Filtering Arrays in JavaScript

// find , findindex , filter , includes , some , every

// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// let numbers = [5, 12, 8, 130, 44];

// let res = numbers.find((num)=>{
//     return num>10
// })
// console.log(res)

// let res1 = numbers.findIndex(num => num>100)
// console.log(res1)

// filter 

// let filterd = numbers.filter(num => num>10)
// console.log(filterd)

// some 
// let res = numbers.some(num => num>100)
// console.log(res)

// every 

// let res1 = numbers.every(num => num>4)
// console.log(res1)

// practice 

// let marks = [45, 78, 90, 34, 88, 55];

// 1. Find the first mark above 80
// 2. Filter all marks >= 50
// 3. Check if all marks are above 30
// 4. Check if at least one mark is above 90


// let res = marks.find(mark => mark>80)
// console.log(res)

// let res1 = marks.filter(mark => mark>=50)
// console.log(res1)

// let res2 = marks.every(mark => mark>30)
// console.log(res2)

// let res3 = marks.some(mark => mark>90)
// console.log(res3)


// Sorting & Reversing Arrays in JavaScript 🔃

// let fruits = ["Banana", "Apple", "Mango"];
// fruits.sort()
// console.log(fruits)

// let nums = [100, 20, 5, 10];

// nums.sort((A,b)=>{
//     return A-b
// })
// console.log(nums)

// nums.sort((A,b)=>{
//     return A + b
// })
// console.log(nums)

// reverse
// let names = ["Alice", "Bob", "Charlie"];

// console.log(names.reverse())

// // sort and reverse
// let points = [40, 100, 1, 5, 25, 10];

// points.sort((a,b)=>{
//     return a-b
// }).reverse()
// console.log(points)

// practice

// let marks = [50, 90, 30, 70, 80];
// 1. Sort the marks in ascending order
// 2. Sort the marks in descending order
// 3. Reverse the array without sorting

// marks.sort((a,b)=>{
//     return a+b
// })
// console.log(marks)

// marks.sort((a,b)=>{
//     return b-a
// })
// console.log(marks)

// console.log(marks.reverse())

// map(), filter(), and reduce() in JavaScript 🚀

// let nums = [1, 2, 3, 4];
// // map


// let a = nums.map((num)=>{
//     return num*2
// })
// console.log(a)

// filter
// let ages = [12, 18, 25, 30];

// let a = ages.filter((age)=>{
//     return age>=18
//     })
//     console.log(a)

// reduce
// let numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce((acc, curr)=>acc + curr,0)
// console.log(sum)

// practice

// let scores = [45, 67, 89, 32, 100];

// // 1. Use map() to add 5 bonus marks to each score
// // 2. Use filter() to get all scores >= 50
// // 3. Use reduce() to get the total score


// let a = scores.map((score)=>{
//     return score+5
// })
// console.log(a)

// let b = scores.filter((score)=>{
//     return score>=50
// })
// console.log(b)

// let c = scores.reduce((acc, curr)=>{
//     return acc + curr
// },0)
// console.log(c)
// Array Destructuring & Spread Operator in JavaScript ✨

// let numbers = [10, 20, 30];

// let [a,b,c] = numbers
// console.log(a, b, c)

// let [first , ,third] = [1,2,4]
// console.log(first, third)

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1]

// console.log(arr2)

// let a = [1,2,3]
// let b = [4,5,6]
// let c = [...a,...b]
// console.log(c)

// function sum(a,b,c){
//     return a+b+c
// }

// let value = [1,2,3]


// console.log(sum(...value))

// let [firstScore , ...rest] = [10, 20, 30, 40, 50];

// console.log(firstScore)
// console.log(rest)

// practice

// 1. Destructure the first two elements from [100, 200, 300]
// 2. Combine two arrays using the spread operator
// 3. Use rest to separate first and remaining scores from an array


// let [a , b] = [100, 200, 300]
// console.log(a,b)

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr3 = [...arr1,...arr2]
// console.log(arr3)

// let [first , ...rest] = [10, 20, 30, 40, 50];
// console.log(first)
// console.log(rest)

// Advanced Arrays (Multidimensional, Flattening, etc.) 🔥

// . Multidimensional Arrays (2D Arrays)

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// for(let row of matrix){
//     for(let value of row){
//         console.log(value)
//     }
// }

// let nested = [1, [2, 3], [4, [5, 6]]];

// console.log(nested.flat())

// console.log(nested.flat(2))

// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 }
// ];


// let result = users.filter((user)=>{
//     return user.age > 24
// })
// console.log(result)

// let names = users.map((user)=>{
//     return user.name
// })
// console.log(names)

// let nums = [1, 2, 3, 4, 5];

// let total = nums.filter(num => num % 2 !=0)
// .map(n=>n * 2)
// .reduce((a,b)=> a + b)
// console.log(total)

// practice

// 1. Create a 2D array of 3 rows and 3 columns
// 2. Access the middle element
// 3. Flatten a nested array with flat(2)
// 4. From an array of student objects, get students with marks > 80

// answer (1)

// let arr = [
//     [1,2,3],
//     [3,4,5],
//     [7,8,9]
// ]

// let arr1 = [1, [2, 3], [4, [5, 6]]];

// console.log(arr)
// // access the middle element
// console.log(arr1.flat())
// console.log(arr1.flat(2))

// const students = [
//     {name:"Dhruvil",marks:90},
//     {name:"padshala",marks:95},
//     {name:"sagar",marks:100}
// ]

// let a = students.filter((arr)=>{
//     return arr.marks > 90
// })

// console.log(a)

// practice set 
// begineer level
// let a = [1,2,3,4,5]
// console.log(a.reverse())
// // Find the maximum number in an array
// let arr = [1, 2, 3, 4, 5];
// let max = arr.reduce((acc,curr)=>{
//     return Math.max(acc,curr)
// })
// console.log(max)

// Check if an array contains a specific value

// let a = [1,2,3,4,5]
// console.log(a.includes(1))

// Remove duplicates from an array

// let a = [1,2,3,4,5,1,2,3,4,5]
// let b = [...new Set(a)]
// console.log(b)

// Find the sum of all elements

// let a = [1,2,3,4,5]
// let sum = a.reduce((acc,curr)=>{
//     return acc + curr
// },0)
// console.log(sum)


// intermediate level
// Rotate an array by k steps

// let a = [1,2,3,4,5]
// let k = 2

// for(let i =0;i<k;i++){
//     let last = a.pop()
//     a.unshift(last)
// }
// console.log(a)

// Find all even numbers in an array

// let a = [1,2,3,4,5]

// let b = a.filter((num)=>{
//     return num%2 == 0
// })
// console.log(b)
// Find the second largest number

// let a = [1,2,3,4,5]

// let b = a.sort((a,b)=>{
//     return b-a
// })
// console.log(b[1])

// Count frequency of each element

// Input: [1, 2, 2, 3] → Output: {1:1, 2:2, 3:1}

// let a = [1, 2, 2, 3]

// let b = {}

// let c = a.forEach((num)=>{
//     if(b[num]){
//         b[num]++
//     }else{
//         b[num] = 1
//     }
// })
// console.log(b)

// Flatten a deeply nested array
// Use recursion or flat(Infinity)

// let a = [1, [2, [3, [4, [5]]]]];

// let b = a.flat(Infinity)
// console.log(b)

// advanced level

// Group elements by property
// Group users by age, category, etc.

// let users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 22 },
//     { name: "David", age: 25 },
//     { name: "Eve", age: 30 }
//   ];
//     let b = users.reduce((acc,curr)=>{
//         if(acc[curr.age]){
//             acc[curr.age].push(curr)
//         }else{
//             acc[curr.age] = [curr]
//         }
//         return acc
//     },{})
//     console.log(b)


// Custom sort an array of objects
// Sort products by price, students by marks

// let a = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 22 },
//     { name: "David", age: 25 },
//     { name: "Eve", age: 30 }
//   ];

//   let b = a.sort((a,b)=>{
//     return a.age - b.age
//   })
//   console.log(b)

// Remove falsy values from an array

// Input: [0, null, false, 'a'] → Output: ['a']
// Use filter(Boolean)

// let a = [0, null, false, 'a']

// let b = a.filter(Boolean)
// console.log(b)


// chunk an array into smaller arrays

// Input: [1,2,3,4,5], size=2 → [[1,2],[3,4],[5]]

// function chunkArray(arr , size){
//     let result = []

//     for(let i =0;i<arr.length ; i+=size){
//         let chunk = arr.slice(i,i+size)
//         result.push(chunk)
//     }
//     return result
// }
// console.log(chunkArray([1,2,3,4,5],2))
// Find pairs that sum to a target value
// Input: [1,2,3,4], target=5 → Output: [[1,4],[2,3]]

// let a = [1,2,3,4]

// let target = 5

// let b = []

// for(let i =0;i<a.length;i++){
//     for(let j =i+1;j<a.length;j++){
//         if(a[i] + a[j] == target){
//             b.push([a[i],a[j]])
//         }
//     }
// }
// console.log(b)


