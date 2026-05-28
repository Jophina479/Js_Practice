console.log("Hello, this is my first JS code!");

// Variables: var, let, const
var a = "hello";
console.log(a);

a = 10; // var allows reassignment
console.log(a);

let b = true;
console.log(b);

const c = 14.578;
console.log(c);

// --- Function Scope Examples ---
function add(a, b) {
    return a + b;
}
let res = add(6, 7);
console.log("res:", res);

// --- Arrow Function & Scope ---
let multiply = (a, b, c) => {
    console.log("multiply res:", a * b * c);
    
    // Block scope example
    if (true) {
        console.log("inside if");
        var y = "welcome"; // var is function-scoped
        let z = "home";    // let is block-scoped (not accessible outside this if)
    }
    console.log("y =", y); // This works because 'var' ignores the 'if' block
    // console.log(z); // This would throw an error!
};

multiply(34, 34, 45);

let mymessage = "always be disciplined";
let name = "rem bahadur";

// --- Traditional way of appending data ---
// Fixed variable names (removed spaces)
let fullmessage = "my message: " + mymessage + " " + name; 
console.log(fullmessage);

// --- Using Template Literals ---
// Removed the newline/space between $ and {}
let fullmessageusingTL = `my message = ${mymessage} ${name.toUpperCase()}`;
console.log(fullmessageusingTL);

// --- Default Parameters ---
let calculate = (x, y = 1) => {
    return x / y;
};

let calculateRes = calculate(67); // Uses default y = 1
console.log("calculate result =", calculateRes);

let res2 = calculate(45, 25);
console.log("calculate result 2 =", res2);

