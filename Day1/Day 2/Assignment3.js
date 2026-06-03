// 1. Create an array colors with 5 color names and log the third element
const colors = ["Red", "Blue", "Green", "Yellow", "Black"];
console.log(colors[2]); // Green

// 2. Create an object book
const book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  pages: 208,
  publishedYear: 1988
};

// 3. Add isRead property immutably
const updatedBook = {
  ...book,
  isRead: true
};

// 4. Create an array of 3 student objects
const students = [
  { name: "John", grade: "A" },
  { name: "Emma", grade: "B" },
  { name: "Alex", grade: "A+" }
];

// 5. Create a nested company object
const company = {
  name: "Tech Solutions",
  location: "Kathmandu",
  employees: ["Ram", "Sita", "Hari"]
};

// 6. Increase each number by 5 immutably
const numbers = [10, 20, 30];
const increasedNumbers = numbers.map(num => num + 5);

// 7. Create a car object and add color immutably
const car = {
  brand: "Toyota",
  model: "Corolla"
};

const updatedCar = {
  ...car,
  color: "White"
};

// 8. Add a new item at the beginning of shoppingList immutably
const shoppingList = ["Milk", "Bread", "Eggs"];
const updatedShoppingList = ["Rice", ...shoppingList];

// 9. Create a profile object with nested address
const profile = {
  name: "Jophina",
  address: {
    city: "Pokhara",
    country: "Nepal"
  }
};

// 10. Create a new array with only name and price properties
const products = [
  { name: "Laptop", price: 800, brand: "Dell" },
  { name: "Phone", price: 500, brand: "Samsung" },
  { name: "Tablet", price: 300, brand: "Apple" }
];

const productInfo = products.map(product => ({
  name: product.name,
  price: product.price
}));

console.log(updatedBook);
console.log(students);
console.log(company);
console.log(increasedNumbers);
console.log(updatedCar);
console.log(updatedShoppingList);
console.log(profile);
console.log(productInfo);