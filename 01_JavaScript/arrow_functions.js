// Arrow Functions in JavaScript

const getRectangleArea = (width, height) => width * height;

console.log(getRectangleArea(5, 10));

// Callback function using Arrow Function

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers);

// Using Arriow Function with 'this'
const person = {
  name: "John",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  greetArrow: () => {
    console.log(`Hello, my name is ${this.name}`); // 'this' does not refer to person
  },
};

person.greet(); // Regular function call
person.greetArrow(); // Arrow function call, 'this' is not bound to person
