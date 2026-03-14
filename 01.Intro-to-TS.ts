// ===============================
// What is TypeScript?
// ===============================

// TypeScript is an open-source programming language developed by Microsoft.
// It builds on top of JavaScript and adds static typing and better tooling.

// Key Idea:
// TypeScript = JavaScript + Types + Compile Step



// ===============================
// How TypeScript Works
// ===============================

// TypeScript Code (.ts / .tsx)
//        ↓
// TypeScript Compiler (tsc)
//        ↓
// JavaScript Code (.js)
//        ↓
// Browser / Node.js runs it



// ===============================
// Why TypeScript is Used
// ===============================



// 1️⃣ Catch Errors Early

let age: number = 25;

// age = "hello"; 
// Error: Type 'string' is not assignable to type 'number'



// ===============================
// 2️⃣ Better Code Autocomplete
// ===============================

const user = {
  name: "Atharv",
  age: 25
};

// Editors can suggest properties like:
// user.name
// user.age

console.log(user.name);



// ===============================
// 3️⃣ Safer Refactoring
// ===============================

// TypeScript helps ensure that renaming properties
// across large codebases does not break functionality.

type User = {
  name: string;
  age: number;
};

const user1: User = {
  name: "Atharv",
  age: 25
};



// ===============================
// 4️⃣ Self-Documenting Code
// ===============================

// Types clearly show expected inputs and outputs.

function createUser(name: string, age: number) {
  return {
    name,
    age
  };
}

const newUser = createUser("Rahul", 30);



// ===============================
// Static Typing vs Dynamic Typing
// ===============================



// Dynamic Typing (JavaScript)
// Types are determined at runtime

let dynamicValue: any = 10;

dynamicValue = "hello";
dynamicValue = true;



// Static Typing (TypeScript)
// Types are defined during development

let value: number = 10;

// value = "hello";
// Error: Type 'string' is not assignable to type 'number'



// ===============================
// Example: Type Safety
// ===============================

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3));

// console.log(add(2, "3"));
// Error in TypeScript



// ===============================
// tsconfig.json
// ===============================

// tsconfig.json is the configuration file
// for the TypeScript compiler.

// It controls:
// - how TypeScript compiles code
// - which files to include
// - compiler rules



// Example tsconfig settings (conceptual example)

const tsconfigExample = {
  compilerOptions: {
    target: "ES2020",
    module: "CommonJS",
    strict: true,
    outDir: "./dist"
  }
};

console.log(tsconfigExample.compilerOptions.target);