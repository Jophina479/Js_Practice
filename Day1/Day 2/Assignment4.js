// 1. Use map to double all numbers in [1, 2, 3, 4, 5]
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// 2. Use filter to get all even numbers from [1, 2, 3, 4, 5, 6]
const evenNumbers = [1, 2, 3, 4, 5, 6].filter(num => num % 2 === 0);
console.log(evenNumbers);

// 3. Use reduce to calculate the sum of [10, 20, 30, 40]
const sum = [10, 20, 30, 40].reduce((total, num) => total + num, 0);
console.log(sum);

// 4. Use find to get the first object with age > 18
const users = [
  { name: "John", age: 16 },
  { name: "Emma", age: 20 },
  { name: "Alex", age: 25 }
];

const adult = users.find(user => user.age > 18);
console.log(adult);

// 5. Use forEach to log each element with its index
["apple", "banana", "orange"].forEach((fruit, index) => {
  console.log(index, fruit);
});

// 6. Use map to extract only names from an array of user objects
const userList = [
  { name: "John", age: 20 },
  { name: "Emma", age: 22 },
  { name: "Alex", age: 18 }
];

const names = userList.map(user => user.name);
console.log(names);

// 7. Use filter to get products with price < 100
const products = [
  { name: "Pen", price: 20 },
  { name: "Bag", price: 150 },
  { name: "Book", price: 80 }
];

const cheapProducts = products.filter(product => product.price < 100);
console.log(cheapProducts);

// 8. Use reduce to find the maximum value
const maxValue = [12, 45, 7, 89, 23].reduce(
  (max, num) => (num > max ? num : max)
);
console.log(maxValue);

// 9. Use map and filter together to get names of adults in uppercase
const people = [
  { name: "John", age: 16 },
  { name: "Emma", age: 20 },
  { name: "Alex", age: 25 }
];

const adultNames = people
  .filter(person => person.age >= 18)
  .map(person => person.name.toUpperCase());

console.log(adultNames);

// 10. Use forEach to build an HTML unordered list string
const items = ["Apple", "Banana", "Orange"];

let html = "<ul>";

items.forEach(item => {
  html += `<li>${item}</li>`;
});

html += "</ul>";

console.log(html);