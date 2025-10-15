// sum of two numbers with message

let a = 5;
let b= 36;

console.log("Sum of" + a + "and" + b + "is" + a + b);
// ------------------------------
//  It will return Sum of 5 and 36 is 536
//------------------------------
//Now you will thing why and how it will return this answer.
// The reason is that when we add a string with an integer it will always return a string(concatenation).
// but you will ask why it is not returning 41. When a + b is integer then why it is not returning 41.
// The answer is that the operations are performed from left to right.
// So first it will add "Sum of" and a.

//------------------------------
// Now let me explain something to you.
//* when you have to add some number like 1 + 2 + 3 you will think first you will add 1 and 2 then the answer will be 3 and then you will add 3 + 3 and the answer will be 6. Right?
// Thats how normally our brain works.
//And that is how it works in js also.
//------------------------------

// In code it will solve like this
// it will first check two operands and one operator from left to right.
// it doesnot matter its string or integer.
// for example: 23 + "34" in this it will first check two operands 23 and "34" is operands and + is operator.
// so it will add 23 + "34" and the answer will be "2334" because one operand is string so it will return string.

//! Now in our case it will first check "Sum of" + a 
// so it will add "Sum of" + 5 and the answer will be "Sum of 5" because one operand is string so it will return string.
// now the expression will be "Sum of 5" + "and" + b + "is" + a + b
// now it will check "Sum of 5" + "and"
// so the answer will be "Sum of 5 and" because both operands are string so it will return string.
// now the expression will be "Sum of 5 and" + b + "is" + a + b
// now it will check "Sum of 5 and" + 36    
// so the answer will be "Sum of 5 and 36" because one operand is string so it will return string.
// now the expression will be "Sum of 5 and 36" + "is" + a + b
// now it will check "Sum of 5 and 36" + "is"
// so the answer will be "Sum of 5 and 36 is" because both operands are string so it will return string.
// now the expression will be "Sum of 5 and 36 is" + a + b
// now it will check "Sum of 5 and 36 is" + 5
// so the answer will be "Sum of 5 and 36 is 5" because one operand is string so it will return string.
// now the expression will be "Sum of 5 and 36 is 5" + b
// now it will check "Sum of 5 and 36 is 5" + 36
// so the answer will be "Sum of 5 and 36 is 536" because one operand is string so it will return string.
// now the expression will be "Sum of 5 and 36 is 536"
// and this is the final answer.
//? I hope you understand now.

//------------------------------
//! Now understand it, whatever you add to a string it will always return a string whether it is a string or an integer.
//------------------------------

//!Now the question is how to get the correct answer.
//  Remember in school there is a formula of BODMAS.
// BODMAS means Brackets, Orders (i.e. powers and square roots, etc.), Division and Multiplication, Addition and Subtraction
// So we have to use brackets here to get the correct answer.
// So the correct expression will be like this

console.log("Sum of" + a + "and" + b + "is" + (a + b));
// it will return Sum of 5 and 36 is 41
// because now it will first solve the expression inside the brackets (a + b) which is (5 + 36) and the answer will be 41.


//Now if we change the expression like this
console.log(a + b + "is the sum of" + a + "and" + b);
// it will return 41 is the sum of 5 and 36
// because now it will first check a + b which is 5 + 36 and the answer will be 41.
// now the expression will be 41 + "is the sum of" + a + "and" + b
// and you know the process now.


//?   Type coercion in js
// Type coercion is the process of converting a value from one type to another.
// In js type coercion is done automatically when we perform operations on different types of values.

//* For example as we know if we add a string and an integer, js will convert the integer to a string and then perform the concatenation.

//* Similarly when we subtract, multiply or divide or mod, a string from an integer, js will convert the string to an integer and then perform the subtraction.

// for example 
let m = "50";
let n = 10;
console.log(m - n); // 40
// here js will convert the string "50" to an integer 50 and then perform the subtraction 50 - 10 = 40
console.log(typeof (m - n)); // it will return number

console.log(m * n); // 500
// here js will convert the string "50" to an integer 50 and then perform the multiplication 50 * 10 = 500

console.log(typeof (m * n)); // it will return number   

console.log(m / n); // 5
// here js will convert the string "50" to an integer 50 and then perform the division 50 / 10 = 5

console.log(m % n); // 0
// here js will convert the string "50" to an integer 50 and then perform the modulus 50 % 10 = 0
console.log(typeof (m % n)); // it will return number

// so if we try to perform subtraction, multiplication, division or modulus with a string that can be converted to an integer, it will return the correct answer.
// but only in addition it will return concatenation.


//* And if the string cannot be converted to an integer, js will return NaN (Not a Number) when we try to perform subtraction, multiplication, division or modulus.

let p = "Hello";
let q = 10;
console.log(p - q); // NaN
console.log(p * q); // NaN
console.log(p / q); // NaN

// here js cannot convert the string "Hello" to an integer so it will return NaN
console.log(typeof (p - q)); // it will return number
// because NaN is of type number

// so if we try to perform subtraction, multiplication, division or modulus with a string that cannot be converted to an integer, it will return NaN.

//? I hope you understand now.