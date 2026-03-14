// ======================================
// Basic Object Types in TypeScript
// ======================================

// In TypeScript we can define the structure (shape) of an object.

let user: { name: string; age: number };

user = {
  name: "Atharv",
  age: 25,
};

// This means:
// user must have:
// name → string
// age  → number



// ======================================
// Invalid Example
// ======================================

// user = {
//   name: "Atharv"
// };
// ❌ Error: Property 'age' is missing



// ======================================
// Extra Property Error
// ======================================

// user = {
//   name: "Atharv",
//   age: 25,
//   city: "Delhi"
// };
// ❌ Error because 'city' is not defined in the type



// ======================================
// Inline Object Type
// ======================================

let car: { brand: string; price: number };

car = {
  brand: "BMW",
  price: 5000000,
};

console.log(car);

// Writing inline object types repeatedly becomes messy.
// That is why we usually use Type Aliases or Interfaces.



// ======================================
// Nested Objects
// ======================================

let nestedUser: {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
};

nestedUser = {
  name: "Atharv",
  age: 25,
  address: {
    city: "Hyderabad",
    country: "India",
  },
};



// Accessing nested properties

console.log(nestedUser.address.city);



// ======================================
// Optional Properties
// ======================================

// Sometimes properties may or may not exist.
// We use ?

let optionalUser: {
  name: string;
  age?: number;
};

let user1 = {
  name: "Atharv",
};

let user2 = {
  name: "Atharv",
  age: 25,
};



// ======================================
// Real Use Case (API Response)
// ======================================

type ApiUser = {
  id: number;
  name: string;
  email?: string;
};



// ======================================
// Readonly Properties
// ======================================

let readonlyUser: {
  readonly id: number;
  name: string;
};

readonlyUser = {
  id: 1,
  name: "Atharv",
};

// readonlyUser.id = 2;
// ❌ Error: Cannot assign to 'id' because it is read-only



// ======================================
// Object Type Inference
// ======================================

// TypeScript can infer object types automatically.

let inferredUser = {
  name: "Atharv",
  age: 25,
};

// inferred type:
// {
//   name: string
//   age: number
// }



// ======================================
// Using Object Types in Functions
// ======================================

function printUser(user: { name: string; age: number }) {
  console.log(user.name);
}

printUser({
  name: "Atharv",
  age: 25,
});



// ======================================
// Object Arrays
// ======================================

// Very common in APIs

let users: { name: string; age: number }[] = [
  { name: "Atharv", age: 25 },
  { name: "Rahul", age: 30 },
];

console.log(users);



// ======================================
// Index Signatures
// ======================================

// Used when object keys are dynamic

let scores: {
  [key: string]: number;
};

scores = {
  math: 90,
  science: 85,
  english: 95,
};

console.log(scores);



// ======================================
// Real Example (API Response Structure)
// ======================================

type User = {
  id: number;
  name: string;
  email?: string;
  address: {
    city: string;
    country: string;
  };
};

let apiUser: User = {
  id: 1,
  name: "Atharv",
  address: {
    city: "Hyderabad",
    country: "India",
  },
};



// ======================================
// Object Type vs Type Alias
// ======================================

// Instead of writing inline object types:

// let user: {
//   name: string
//   age: number
// }

// We usually define a reusable type:

type UserProfile = {
  name: string;
  age: number;
};

let profile: UserProfile;

profile = {
  name: "Atharv",
  age: 25,
};

console.log(profile);



// ======================================
// Summary
// ======================================

// Object Types allow us to define the structure of objects.

// Key features:
// - Inline object types
// - Nested objects
// - Optional properties (?)
// - Readonly properties
// - Object arrays
// - Index signatures
// - Type inference
// - Reusable types with Type Aliases