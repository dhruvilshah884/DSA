// ****************String***********************


// let name = "John Doe";
// let name1 = 'John Doe';
// let name2 = `John Doe`;


// let str = "Hello, World!";
// console.log(str[0])
// console.log(str.charAt(1))

// let str = "code"

// for(let i =0;i<str.length;i++){
//     console.log(str[i])
// }

// let str1 = "javascript"
// console.log(str1.length)
// console.log(str1.slice(0,4))
// console.log(str1.substring(0,4))
// console.log(str1.split(""))


// for loop 

// let str = "javascript"

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
// }


// for (let char of str){
//     console.log(char)
// }

// let i =0

// while(i<str.length){
//     console.log(str[i])
//     i++
// }

// reversed a string 
// let a = "javascript"
// let b = ""

// for(let i =a.length - 1 ;i>=0;i--){
//    b += a[i]
// }
// console.log(b)

// . Convert All Vowels to Uppercase

// let str = "javascript"
// let newStr = ""

// for (let char of str){
//     if("aeiou".includes(char)){
//         newStr += char.toUpperCase()
//     }else{
//         newStr += char
//     }
// }
// console.log(newStr)

// Count the number of vowels in a string

// let str = "javascript"
// let count = 0

// for(let char of str){
//     if("aeiou".includes(char)){
//         count++
//     }
// }
// console.log(count)

// Print only consonants from a string

// let a = "javascript"
// let b = ""

// for(let char of a){
//     if("aeiou".includes(char)){
//         continue
//     }else{
//         b += char
//     }
// }
// console.log(b)
// reate a new string with every character doubled (e.g., "hi" → "hhii")

// let str = "hi"
// let newStr = ""

// for(let char of str){
//     newStr += char + char
// }
// console.log(newStr)


// let messy = "   hello world   ";

// // console.log(str.replaceAll(" ","-"))
// // console.log(str.replace("cats","dogs"))

// // console.log(str.toLowerCase())
// // console.log(str.toUpperCase())
// console.log(messy.trim())
// console.log(messy.trimStart())
// console.log(messy.trimEnd())

// let sentence = "this is a string";

// let words = sentence.split(" ");
// console.log(words.join("-"))

// console.log("ha".repeat(3))
// console.log("42".padStart(5,"0"))
// console.log("42".padEnd(5,"0"))

// Capitalize the first letter of each word in a sentence
// let str = "this is a string";
// let words = str.split(" ");
// for (let i = 0; i < words.length; i++) {
//   words[i] = words[i][0].toUpperCase() + words[i].slice(1);
// }
// console.log(words.join(" "));

// Mask all digits except the last 4 in a phone number: 1234567890 → ******7890

// let a = "1234567890"
// let b = "*".repeat(a.length - 4) + a.slice(-4)
// console.log(b)

// let a = "1234567890"
// let b = ""
// for(let i =0;i<a.length;i++){
//     if(a.length - i > 4){
//         b += "*"
//     }else{
//         b += a[i]
//     }
// }
// console.log(b)
// Convert ' heLLo WoRLd ' → 'Hello World'

// let a = " heLLo WoRLd "
// let b = a.trim()
// let c = b.toLowerCase()
// console.log(c)

// interview style questions 

// reverse string 
function reversed(str){
    return str.split("").reverse().join("")
}
console.log(reversed("hello"))

// check for palindrome 

function isPalindrome(str){
    return str === str.split("").reverse().join("")
}
console.log(isPalindrome("hello"))

// count vowels

let a = "hello"
let count = 0

for(let char of a){
    if("aeiou".includes(char)){
        count++
    }
}
console.log(count)

// medium level 

// Anagram Check

function isAnagram(str1 , str2){
    return str1.split("").sort().join("") === str2.split("").sort().join("")
}
console.log(isAnagram("hello","olleh"))

// . Find First Non-Repeating Character

function firstNonRepeatChar(str){
    for(let chat of str){
        if(str.indexOf(chat) === str.lastIndexOf(chat)){
            return chat
        }
    }
    return null
}
console.log(firstNonRepeatChar("aabbcdd"))

// Character Frequency Map

function charFre(str){
    const freqMap = {}

    for(let char of str){
        console.log([char])
        freqMap[char] = (freqMap[char] || 0) + 1
    }
    return freqMap
}
console.log(charFre("hello"))

// hard level

//  Longest Substring Without Repeating Characters

function longestSub(s){
    let map = new Map()
    let maxLength = 0
    let start = 0

    for(let end = 0; end < s.length;end++){
        if(map.has(s[end])){
            start = Math.max(map.get(s[end]) +  1 , start)
        }
        map.set(s[end],end)
        maxLength = Math.max(maxLength , end - start + 1)
    }
    return maxLength
}
console.log(longestSub("abcabcbb"))

// Check if One String is Rotation of Another

function isRotation(str1,str2){
    if(str1.length !== str2.length){
        return false
    }
    console.log(str1 + str1)
    return (str1 + str1).includes(str2)
}
console.log(isRotation("hello","lohel"))


// Compress a String (Basic Run Length Encoding)

function compress(str){
    let res = ""
    let count = 1

    for(let i =0 ; i<str.length;i++){
        console.log(str[i])
        console.log(str[i+1])
        if(str[i] === str[i+1]){
            count++
        }else{
            res += str[i] + count
            count = 1
        }
    }
    return res
}
console.log(compress("aaabbbcc"))

// regex 
let str =  "My phone is 9876543210";

let pattern = /\d{10}/;
console.log(pattern.test(str));
console.log(str.match(pattern)); 
console.log(str.replace(pattern,"**********"));

// Extract hashtags from a tweet: "#fun #coding" → ["#fun", "#coding"]

let att = "#fun #coding"
let btt = att.split(" ")
console.log(btt)

// Convert "hello world" → "Hello World" using .split(), .map(), .join()

let strrrr = "hello world"
let arr = strrrr.split(" ")
console.log(arr)
let newArrrrrrrrr = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1))
console.log(newArrrrrrrrr.join(" "))