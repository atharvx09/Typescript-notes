// ======================================
// Arrays in TypeScript
// ======================================

// An array stores multiple values of the same type.
// TypeScript allows us to enforce the type of elements inside the array.

// Syntax
// type[]

let numbers: number[] = [1, 2, 3];

console.log(numbers);


// ======================================
// Generic Syntax for Arrays
// ======================================

// TypeScript also supports generic array syntax.

let numbersGeneric: Array<number> = [1, 2, 3];

console.log(numbersGeneric);


// Both syntaxes are identical

// number[]        → Most common
// Array<number>   → Generic syntax



// ======================================
// Object Array
// ======================================

// Very common in real-world applications

type User = {
  name: string;
  age: number;
};

let users: User[] = [
  { name: "Atharv", age: 25 },
  { name: "Rahul", age: 30 },
];

console.log(users);



// ======================================
// Tuple Types
// ======================================

// A tuple is an array with:
// 1. Fixed length
// 2. Specific types at each position

// Example

let user: [string, number] = ["Atharv", 25];

// index 0 → string
// index 1 → number

console.log(user);



// ======================================
// Tuple Destructuring
// ======================================

// You can extract values from tuples easily

let userTuple: [string, number] = ["Atharv", 25];

let [name, age] = userTuple;

console.log(name);
console.log(age);



// ======================================
// Tuple with Optional Values
// ======================================

let user1: [string, number?] = ["Atharv"];
let user2: [string, number?] = ["Atharv", 25];

console.log(user1);
console.log(user2);



// ======================================
// Readonly Tuples
// ======================================

// readonly prevents modification

let point: readonly [number, number] = [10, 20];

// point[0] = 50; // ❌ Error

console.log(point);



// ======================================
// Difference Between Arrays and Tuples
// ======================================

// Arrays
let arrNumbers: number[] = [1, 2, 3];

// Tuples
let tupleExample: [string, number] = ["Atharv", 25];



// Array vs Tuple

/*
Array
- Same type elements
- Dynamic length
- Order not important

Tuple
- Different types allowed
- Fixed length
- Order matters
*/



// ======================================
// When to Use Tuples
// ======================================

// Use tuples when:
// - Data structure is fixed
// - Order matters
// - Returning multiple values from a function

function getUser(): [string, number] {
  return ["Atharv", 25];
}

let userData = getUser();

console.log(userData);



// ======================================
// Type Inference Example
// ======================================

// What will be the type?

let arr = [1, "hello"];

// TypeScript infers:

// (string | number)[]

console.log(arr);