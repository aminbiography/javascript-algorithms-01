<p align="center">
  <img src="https://raw.githubusercontent.com/aminbiography/javascript-algorithms-practice-01/refs/heads/main/JavaScript.png" alt="JavaScript Logo" width="100">
</p> 

# JavaScript Algorithms

A collection of beginner-friendly JavaScript algorithm examples for practicing problem-solving, understanding programming logic, and strengthening core JavaScript skills.

## Introduction

This repository contains practical JavaScript implementations of common programming algorithms and problem-solving exercises. It provides examples of mathematical operations, string manipulation, array processing, sorting, and searching techniques.

Each example demonstrates a specific problem-solving approach using JavaScript functions and built-in methods.

## Algorithms Covered

The repository currently includes 15 examples:

1. **Factorial of a Number** – Calculate the factorial using recursion.
2. **Fibonacci Sequence** – Generate Fibonacci numbers using a loop.
3. **Prime Number Checker** – Determine whether a number is prime.
4. **Palindrome Checker** – Check whether a string reads the same forward and backward.
5. **Sum of an Array** – Calculate the sum of array elements.
6. **Reverse an Array** – Reverse the order of array elements.
7. **Find Maximum in an Array** – Identify the largest number in an array.
8. **Find Minimum in an Array** – Identify the smallest number in an array.
9. **Bubble Sort** – Sort array elements using the bubble sort algorithm.
10. **Linear Search** – Find a target value through sequential searching.
11. **Binary Search** – Find a target value using binary search.
12. **Count Occurrences in an Array** – Count how many times a value appears.
13. **Remove Duplicates from an Array** – Remove repeated values using a `Set`.
14. **Merge Two Arrays** – Combine two arrays using the spread operator.
15. **Even or Odd Checker** – Determine whether a number is even or odd.

## Technologies Used

- JavaScript (ES6+)
- JavaScript Functions
- Arrays and Strings
- Loops and Conditional Statements
- Recursion
- Array Methods
- Built-in JavaScript Objects and Methods

## Repository Structure

```text
javascript-algorithms-01/
├── js-c-1.js
├── jsp.js
└── README.md
```

<h1>JavaScript Algorithms</h1>

```
//0 1. Factorial of a Number
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// 02. Fibonacci Sequence
function fibonacci(n) {
    let a = 0, b = 1;
    let result = [];
    while (n > 0) {
        result.push(a);
        [a, b] = [b, a + b];
        n--;
    }
    return result;
}
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// 03. Prime Number Checker
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // true

// 04. Palindrome Checker
function isPalindrome(str) {
    let cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
console.log(isPalindrome('racecar')); // true

// 05. Sum of an Array
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumArray([1, 2, 3, 4])); // 10

// 06. Reverse an Array
function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]

// 07. Find Maximum in an Array
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([1, 2, 3, 4, 5])); // 5

// 08. Find Minimum in an Array
function findMin(arr) {
    return Math.min(...arr);
}
console.log(findMin([1, 2, 3, 4, 5])); // 1

// 09. Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]

// 10. Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1; // not found
}
console.log(linearSearch([1, 2, 3, 4, 5], 3)); // 2

// 11. Binary Search
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1; // not found
}
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2

// 12. Count Occurrences in Array
function countOccurrences(arr, val) {
    return arr.filter(item => item === val).length;
}
console.log(countOccurrences([1, 2, 3, 3, 3, 4], 3)); // 3

// 13. Remove Duplicates from an Array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]

// 14. Merge Two Arrays
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2], [3, 4])); // [1, 2, 3, 4]

// 15. Check if a Number is Even or Odd
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(5)); // false
```

---

## Learning Approach

The examples focus on practicing fundamental algorithmic concepts through small, understandable JavaScript functions.

They provide opportunities to explore:

- Logical thinking and problem-solving
- Function implementation
- Iteration and recursion
- Array and string manipulation
- Sorting and searching techniques
- JavaScript built-in methods

## How to Use

1. Clone or download this repository.
2. Open the JavaScript files in your preferred code editor.
3. Review the algorithm implementations.
4. Run the examples using a JavaScript runtime such as Node.js or a browser console.
5. Modify the inputs and experiment with different test cases.

## Purpose

This repository is maintained as a JavaScript learning and practice resource. Its purpose is to strengthen programming fundamentals and build a foundation for understanding algorithms and problem-solving techniques.

## Author

**Mohammad Aminul Islam**

---

#JavaScript #JavaScriptAlgorithms #Algorithms #ProblemSolving #CodingPractice #JavaScriptBasics #ES6 #ArrayMethods #SortingAlgorithms #SearchingAlgorithms #Recursion #WebDevelopment #ProgrammingFundamentals #LearnJavaScript
