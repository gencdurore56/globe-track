/* 
   Filename: SophisticatedCode.js
   Content: A sophisticated, elaborate, and complex JavaScript code that demonstrates various functionalities. 
*/

// Object to represent a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Object to represent a car
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  startEngine() {
    console.log(`Starting the ${this.make} ${this.model}'s engine...`);
  }
  
  drive() {
    console.log(`Driving the ${this.make} ${this.model}...`);
  }
}

// Function to calculate the factorial of a number recursively
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Array to store example data
const data = [
  { name: "John", age: 25 },
  { name: "Emma", age: 30 },
  { name: "Alex", age: 35 },
  { name: "Sophia", age: 28 },
];

// Loop through the data array and create Person objects
const people = [];
for (let i = 0; i < data.length; i++) {
  const { name, age } = data[i];
  const person = new Person(name, age);
  people.push(person);
}

// Function to filter people older than a certain age
function filterPeopleByAge(people, age) {
  return people.filter(person => person.age > age);
}

// Calculate and display the factorials of numbers from 1 to 10
console.log("Factorials:");
for (let i = 1; i <= 10; i++) {
  const fact = factorial(i);
  console.log(`Factorial of ${i} is ${fact}`);
}

// Start the engine and drive some cars
const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Ford", "Mustang");

car1.startEngine();
car1.drive();

car2.startEngine();
car2.drive();

// Filter people older than 30 and greet them
const filteredPeople = filterPeopleByAge(people, 30);
console.log("Filtered People:");
filteredPeople.forEach(person => person.greet());