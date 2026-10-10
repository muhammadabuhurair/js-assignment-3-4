// ===============================
// JavaScript Assignment #3
// Operators & Expressions
// ===============================

// ---------- Step 2: Arithmetic Operators ----------
console.log("----- Arithmetic Operators -----");

let a = 20;
let b = 6;

// Addition (+) adds two numbers
console.log("Addition (a + b):", a + b);

// Subtraction (-) subtracts the second number from the first
console.log("Subtraction (a - b):", a - b);

// Multiplication (*) multiplies two numbers
console.log("Multiplication (a * b):", a * b);

// Division (/) divides the first number by the second
console.log("Division (a / b):", a / b);

// Modulus (%) gives the remainder after division
console.log("Modulus (a % b):", a % b);

// ---------- Step 3: Assignment Operators ----------
console.log("----- Assignment Operators -----");

// = assigns a value to a variable
let num = 10;
console.log("Start with = :", num);

// += adds the right value to the variable and stores the result
num += 5;
console.log("After num += 5 :", num);

// -= subtracts the right value from the variable and stores the result
num -= 3;
console.log("After num -= 3 :", num);

// *= multiplies the variable by the right value and stores the result
num *= 2;
console.log("After num *= 2 :", num);

// /= divides the variable by the right value and stores the result
num /= 4;
console.log("After num /= 4 :", num);

// ---------- Step 4: Comparison Operators ----------
console.log("----- Comparison Operators -----");

let x = 15;
let y = "15";

// == checks only the value (type is converted automatically)
console.log("x == y  (Equal to):", x == y);

// === checks both value AND type
console.log("x === y (Strict equal to):", x === y);

// != checks if the values are not equal
console.log("x != y  (Not equal):", x != y);

let p = 25;
let q = 10;

// > checks if left value is greater than right value
console.log("p > q  (Greater than):", p > q);

// < checks if left value is less than right value
console.log("p < q  (Less than):", p < q);

// >= checks if left value is greater than or equal to right value
console.log("p >= q (Greater than or equal to):", p >= q);

// <= checks if left value is less than or equal to right value
console.log("p <= q (Less than or equal to):", p <= q);

// ---------- Step 5: Expressions ----------
console.log("----- Expressions -----");

// Expression 1: Total price = price x quantity
let price = 250;
let quantity = 4;
let totalPrice = price * quantity;
console.log("Total Price (price * quantity):", totalPrice);

// Expression 2: Final score = marks1 + marks2 + marks3
let marks1 = 78;
let marks2 = 85;
let marks3 = 90;
let finalScore = marks1 + marks2 + marks3;
console.log("Final Score (marks1 + marks2 + marks3):", finalScore);

// Expression 3: Average score = total marks divided by number of subjects
let average = (marks1 + marks2 + marks3) / 3;
console.log("Average Score:", average);

// Expression 4: Price after 10% discount
let discountedPrice = totalPrice - (totalPrice * 10) / 100;
console.log("Price after 10% discount:", discountedPrice);

// ---------- Step 6: Practice Task ----------
console.log("----- Practice Task: == vs === -----");

console.log('"10" == 10  :', "10" == 10); // true
console.log('"10" === 10 :', "10" === 10); // false

// My understanding:
// == (loose equality) compares only the VALUES. Before comparing, JavaScript
// converts the string "10" into the number 10, so the result is true.
//
// === (strict equality) compares BOTH the value AND the data type.
// "10" is a string and 10 is a number, so their types are different
// and the result is false.
//
