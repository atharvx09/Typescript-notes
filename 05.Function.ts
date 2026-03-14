// ======================================
// Functions in TypeScript
// ======================================

// A TypeScript function defines:
// parameters → types
// return value → type

function add(a: number, b: number): number {
    return a + b;
  }
  
  console.log(add(10, 20)); // 30
  
  // Breakdown:
  // a: number → parameter type
  // b: number → parameter type
  // : number  → return type
  
  
  
  // ======================================
  // Type Safety Example
  // ======================================
  
  // add(10, "20")
  // ❌ Error: Argument of type 'string' is not assignable to type 'number'
  
  
  
  // ======================================
  // Function Type
  // ======================================
  
  // Sometimes we define the type of a function variable.
  
  let multiply: (a: number, b: number) => number;
  
  multiply = (a, b) => {
    return a * b;
  };
  
  console.log(multiply(5, 4));
  
  
  
  // ======================================
  // Optional Parameters
  // ======================================
  
  // Optional parameters use ?
  
  function greet(name: string, age?: number) {
    console.log(name, age);
  }
  
  greet("Atharv");
  greet("Atharv", 25);
  
  // Rule:
  // Optional parameters must come AFTER required parameters
  
  
  
  // ======================================
  // Default Parameters
  // ======================================
  
  // Default value is used when argument is not passed
  
  function greetUser(name: string = "Guest") {
    console.log("Hello", name);
  }
  
  greetUser();
  
  
  
  function multiplyNumbers(a: number, b: number = 2): number {
    return a * b;
  }
  
  console.log(multiplyNumbers(10));
  
  
  
  // ======================================
  // Rest Parameters
  // ======================================
  
  // Rest parameters allow multiple arguments
  
  function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4)); // 10
  
  
  
  // ======================================
  // Void Return Type
  // ======================================
  
  // If a function returns nothing, we use void
  
  function logMessage(message: string): void {
    console.log(message);
  }
  
  logMessage("Hello TypeScript");
  
  
  
  // ======================================
  // Function Returning Objects
  // ======================================
  
  function createUser(name: string, age: number): { name: string; age: number } {
    return {
      name,
      age,
    };
  }
  
  console.log(createUser("Atharv", 25));
  
  
  
  // ======================================
  // Arrow Functions in TypeScript
  // ======================================
  
  const addNumbers = (a: number, b: number): number => {
    return a + b;
  };
  
  console.log(addNumbers(5, 5));
  
  
  // Short version
  
  const addShort = (a: number, b: number): number => a + b;
  
  console.log(addShort(10, 5));
  
  
  
  // ======================================
  // Functions as Parameters (Callbacks)
  // ======================================
  
  function processNumbers(
    numbers: number[],
    callback: (num: number) => number
  ) {
    return numbers.map(callback);
  }
  
  console.log(processNumbers([1, 2, 3], (num) => num * 2));
  
  
  
  // ======================================
  // Function Overloading
  // ======================================
  
  // Multiple function signatures
  
  function combine(a: number, b: number): number;
  function combine(a: string, b: string): string;
  
  function combine(a: any, b: any) {
    return a + b;
  }
  
  console.log(combine(10, 20));
  console.log(combine("Hello ", "World"));
  
  
  
  // ======================================
  // Real Example (React Event Handler)
  // ======================================
  
  // Example used in React projects
  
  /*
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    console.log("Button clicked");
  };
  */
  
  
  
  // ======================================
  // Summary
  // ======================================
  
  // Basic function
  // function add(a:number,b:number):number
  
  // Function type
  // (a:number,b:number) => number
  
  // Optional parameter
  // age?:number
  
  // Default parameter
  // age = 18
  
  // Rest parameter
  // ...numbers:number[]
  
  // Void return
  // ():void