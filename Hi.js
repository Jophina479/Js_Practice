let ages = [50, 45, 67, 89];

// Standard comma separation
console.log("value of index 0:", ages[0]); 

// Correct template literal syntax: ${ages[1]}
console.log(`value of index 1: ${ages[1]}`); 

let obj = {
    name: "miau",
    age: 67,
    // Since you had two numbers, I put them in an array
    marks: [67, 67], 
    is_active: false
};

// Fixed: Use curly braces ${} for template literals, not parentheses $()
// Bracket notation
console.log(`name: ${obj["name"]}`);

// Dot notation
console.log(`marks: ${obj.marks}`);