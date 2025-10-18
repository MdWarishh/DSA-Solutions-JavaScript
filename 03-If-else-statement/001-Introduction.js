//!                 What Is if-else?

// if-else statements are decision-making structures in JavaScript.
// They allow your code to run certain blocks only when a condition is true.

// Think of it like this 
// “If something happens, do this. Otherwise, do something else.”

//-------------------
//*     Syntax
//-------------------

if (condition) {
  // code runs when condition is true
} else {
  // code runs when condition is false
}

//* Example 1 — (Simple if)

// let age = 20;

// if (age >= 18) {
//   console.log("You are an adult.");
// }

//Works: It checks your age if it is greater than or equal to 18 then it will print You are an adult.
//  Here, since age >= 18 is true, it executes the code inside the { }.

// Output:
// You are an adult.



//*   Example 2 — if-else

// let age = 15;

// if (age >= 18) {
//   console.log("You can vote.");
// } else {
//   console.log("You cannot vote yet.");
// }

// Works: It checks first, if your age: age>=18 the it will print You can vote but if this condition is not true then it will print "You can not vote yet"

//  Output:

// You cannot vote yet.

//*  Example 3 — if-else if-else

// Use this when you have multiple conditions to check.

// let marks = 85;

// if (marks >= 90) {
//   console.log("Grade: A+");
// } else if (marks >= 75) {
//   console.log("Grade: A");
// } else if (marks >= 60) {
//   console.log("Grade: B");
// } else {
//   console.log("Grade: C");
// }

//Works: It works same like if-else, It checks from start to bottom every condition and when a condition is true it gives answer without checking the next one

// Output:

// Grade: A


//  Flow:

// First if is checked

// If false → moves to else if

// Keeps checking until one is true

// If none are true → runs final else

    //?  If first condition is true like :
//     if(){
//     ...
// } else if(){
//     ....
// }else if()
// {
//     ..
// }else{

// }

//?  suppose the first condition is true and the third or second conditions are also true then what do you think what's will be the answer?
//? In that case: We already know that it checks condition from start to end line by line when it check tha first condition and the condition comes true then it will give the answer without checking the next condition no matter the other conditions are also true or false. 
    

//*  Example 4 — Nested if

// You can put an if inside another if.
// Used when one condition depends on another.

// let age = 25;
// let hasID = true;

// if (age >= 18) {
//   if (hasID) {
//     console.log("You can enter the club.");
//   } else {
//     console.log("You need an ID to enter.");
//   }
// } else {
//   console.log("You are underage.");
// }

//   Truthy & Falsy Values

// In JavaScript, conditions are evaluated as true or false.

//   Falsy values:

// false, 0, "", null, undefined, NaN


// Everything else is truthy.

// Example:

if ("hello") console.log("This runs!"); // truthy
if (0) console.log("This won’t run.");  // falsy

//   Short-Hand: Ternary Operator (optional pro tip)

// For simple if-else, use:

let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);


Output:

Adult


// Now that you’ve understood if-else completely,
// you can easily solve your today’s questions in next file...