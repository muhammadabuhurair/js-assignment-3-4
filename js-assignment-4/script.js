// ===============================
// JavaScript Assignment #4
// Logical Operators
// ===============================

// ---------- Step 2: Logical AND (&&) ----------
console.log("----- Logical AND (&&) -----");

let age = 20;
let feePaid = true;

// && returns true only if BOTH conditions are true
// age >= 18 is true AND feePaid is true -> Allowed
if (age >= 18 && feePaid) {
  console.log("Student is Allowed to enter the exam.");
} else {
  console.log("Student is Not Allowed to enter the exam.");
}

// ---------- Step 3: Logical OR (||) ----------
console.log("----- Logical OR (||) -----");

let emailCorrect = false;
let phoneCorrect = true;

// || returns true if AT LEAST ONE condition is true
// emailCorrect is false, but phoneCorrect is true -> Login allowed
if (emailCorrect || phoneCorrect) {
  console.log("Login Successful.");
} else {
  console.log("Login Failed.");
}

// ---------- Step 4: Logical NOT (!) ----------
console.log("----- Logical NOT (!) -----");

let isBlocked = false;

// ! reverses the value: !false becomes true
// isBlocked is false, so !isBlocked is true -> Access allowed
if (!isBlocked) {
  console.log("Access Allowed.");
} else {
  console.log("Access Denied.");
}

// ---------- Step 5: Combine Logical Operators ----------
console.log("----- Combined Logical Operators -----");

let isLoggedIn = true;
let isPremium = false;
let hasCoupon = true;

// User must be logged in AND (premium member OR have a coupon)
// isLoggedIn is true, isPremium is false but hasCoupon is true
// (false || true) = true, then true && true = true -> Discount given
if (isLoggedIn && (isPremium || hasCoupon)) {
  console.log("Special Discount Applied.");
} else {
  console.log("No Discount.");
}

// ---------- Step 6: Practice Task ----------
console.log("----- Practice Task: Changing Values -----");

// Test 1: age = 16, feePaid = true
// 16 >= 18 is false, so (false && true) = false -> Not Allowed
// && needs BOTH conditions to be true, and the age condition fails.
let age1 = 16;
let feePaid1 = true;
console.log("Test 1 (age 16, fee paid):", age1 >= 18 && feePaid1); // false

// Test 2: age = 25, feePaid = false
// 25 >= 18 is true, but feePaid is false, so (true && false) = false
// The fee is not paid, so the student cannot enter.
let age2 = 25;
let feePaid2 = false;
console.log("Test 2 (age 25, fee not paid):", age2 >= 18 && feePaid2); // false

// Test 3: emailCorrect = false, phoneCorrect = false
// (false || false) = false -> Login fails
// || needs at least ONE true value, but both are false.
console.log("Test 3 (both wrong):", false || false); // false

// Test 4: isBlocked = true
// !true = false -> Access Denied
// The NOT operator reverses true into false.
let isBlocked2 = true;
console.log("Test 4 (user blocked, access?):", !isBlocked2); // false

// Test 5: isLoggedIn = false, isPremium = true, hasCoupon = true
// (true || true) = true, but false && true = false -> No discount
// The user is not logged in, so && fails even though the OR part is true.
let loggedIn2 = false;
console.log("Test 5 (not logged in):", loggedIn2 && (true || true)); // false

// Test 6: isLoggedIn = true, isPremium = true, hasCoupon = false
// (true || false) = true, and true && true = true -> Discount given
// Being premium is enough, a coupon is not needed.
console.log("Test 6 (logged in, premium, no coupon):", true && (true || false)); // true
