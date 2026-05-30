// Task 10 – Merge and Destructure Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergedObject = { ...obj1, ...obj2 };

const { a, d } = mergedObject;

console.log(a);
console.log(d);
