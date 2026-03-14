// ===============================
// TypeScript Primitive Types
// ===============================

// The core primitive types in TypeScript are:

// string
// number
// boolean
// null
// undefined
// symbol
// bigint



// ===============================
// string
// ===============================

// The string type represents text data.

let username: string = "Atharv";
let city: string = "Hyderabad";
let message: string = `Hello ${username}`;

console.log(message);


// String Methods

let text: string = "typescript";

console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("type"));



// ===============================
// number
// ===============================

// The number type represents all numeric values.

// JavaScript and TypeScript use ONE type for all numbers.

// Includes:
// - integers
// - floating point numbers
// - negative numbers
// - NaN
// - Infinity

let age: number = 25;
let price: number = 99.99;
let temperature: number = -5;


// Numeric Operations

let a: number = 10;
let b: number = 5;

let sum: number = a + b;
let multiply: number = a * b;

console.log(sum);
console.log(multiply);


// Special Numbers

let notANumber: number = NaN;
let infinityValue: number = Infinity;



// ===============================
// boolean
// ===============================

// Boolean represents true or false values.

let isActive: boolean = true;
let isLoggedIn: boolean = false;


// Boolean in Conditions

let isAdmin: boolean = true;

if (isAdmin) {
  console.log("Access granted");
}


// Boolean from Expressions

let userAge: number = 20;

let isAdult: boolean = userAge >= 18;

console.log(isAdult);



// ===============================
// null
// ===============================

// null represents an intentional absence of value.

let selectedUser: null = null;


// Union Example

let currentUser: string | null = null;

currentUser = "Atharv";


// Example function returning null

function getUser(): string | null {
  return null;
}



// ===============================
// undefined
// ===============================

// undefined means a variable exists but has no value yet.

let value: undefined = undefined;


// TypeScript usually infers undefined automatically

let data;
console.log(data);


// Functions that do not return anything

function logMessage(): void {
  console.log("Hello");
}



// ===============================
// Difference between null and undefined
// ===============================

// null → intentional absence of value
// undefined → variable declared but not assigned

let user= null;
let userAge2;

console.log(user);
console.log(userAge2);



// ===============================
// symbol
// ===============================

// symbol represents a unique and immutable value.

let id1: symbol = Symbol("id");
let id2: symbol = Symbol("id");

console.log(id1 === id2); // false


// Using Symbol as object key

const ID = Symbol("id");

const userObj = {
  name: "Atharv",
  [ID]: 123
};

console.log(userObj);



// ===============================
// bigint
// ===============================

// bigint is used for very large integers
// beyond the safe integer limit of JavaScript.

let bigNumber: bigint = 9007199254740991n;


// BigInt operations

let bigA: bigint = 100n;
let bigB: bigint = 50n;

let result: bigint = bigA + bigB;

console.log(result);


// Important Rule:
// number and bigint cannot be mixed

// let x: bigint = 100n;
// let y: number = 10;
// x + y; // Error



// ===============================
// Type Inference
// ===============================

// TypeScript automatically detects types.

let inferredName = "Atharv"; // string
let inferredAge = 25; // number

console.log(inferredName, inferredAge);



// ===============================
// When to Explicitly Write Types
// ===============================

// 1. Function parameters

function greet(name: string) {
  console.log("Hello " + name);
}

greet("Atharv");


// 2. Complex objects

type User = {
  name: string;
  age: number;
};

const userExample: User = {
  name: "Atharv",
  age: 25
};

console.log(userExample);



// ===============================
// Quick Summary
// ===============================

// string  → text
// number  → numeric values
// boolean → true / false
// null    → intentional empty value
// undefined → value not assigned
// symbol  → unique identifiers
// bigint  → very large integers