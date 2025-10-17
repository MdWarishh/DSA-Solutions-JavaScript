        //?  Operators :-
// Operators are special symbols that perform operations on operands (values and variables).

// In JavaScript, there are several types of operators, including:
// 1. Arithmetic Operators: +, -, *, /, %, ++, --
// 2. Relational Operators: ==, ===, !=, !==, >, <, >=, <=
// 3. Logical Operators: &&, ||, !
//4. Unary Operators: -, ++, --, typeof, delete

//*  Arithmetic Operators:
// ? 1. Addition (+): Adds two operands.
//?  2. Subtraction (-): Subtracts the second operand from the first.
//?  3. Multiplication (*): Multiplies two operands.

// The upper 3 are the most commonly used arithmetic operators. And we already used that in previous files. And they are very easy to understand.
// So let's see the other arithmetic operators which are not commonly used but still important to know.

// ? 4. Division (/): Divides the first operand by the second. It returns the quotient.

console.log(10/2); // it will return 5

// we all know that  when we divide any number the quotient is the answer and the remainder is the left over part.

// And when we divide 10 by 2 the quotient is 5 and the remainder is 0. So the answer will be 5.

// but what if we divide 10 by 3. Let's see
console.log(10/3); // it will return 3.3333333333333335

// so the answer is 3.3333333333333335. Here the quotient is 3 and the remainder is 1. So the answer will be in decimal form.

//but here is a problem, integer divided by intejer should return integer but here it is returning decimal. 
// But in other language like java or c++ if we divide integer by integer it will always return integer. But in js it is not like that.
// So to solve this problem we have two methods.

// * Method 1: We can use Math.floor() method to round down the decimal to the nearest integer.

console.log(Math.floor(10/3)); // it will return 3

//* Method 2: We can use parseInt() method to convert the decimal to integer.
console.log(parseInt(10/3)); // it will return 3

//------------------------------

//? 5. Modulus (%): Returns the remainder of the division of the first operand by the second.

console.log(10 % 3); // it will return 1
// here when we divide 10 by 3 the quotient is 3 and the remainder is 1. So the answer will be 1.

console.log(10 % 2); // it will return 0
// here when we divide 10 by 2 the quotient is 5 and the remainder is 0. So the answer will be 0.

//explanation: In modulus first we divide the integers as we did in divide but in this case the quotient is not the answer but the remainder is the answer, yes you heard it right the remainder is the answer.



//* Relational Operator:
//Relational operators will always returns in boolean
// boolean means it's True or it's False.
//for example:
console.log(10 > 9); //True
console.log(10 < 9); //False
console.log(10 >= 12); //False
console.log(10 >= 10); //True
console.log(10 >= 4); //True
console.log(10 <= 12); //True
console.log(10 <= 10); //True
console.log(10 <= 4); //False

//------

console.log(10 == 10); // true
console.log(10 == "10"); // true  //This is wrong 
// double == only chechs value
// but in DSA and other programming language we always check type also
// but in js it is not like that
// here 10 is number and "10" is string
// so they are not same
//but js only checks value not type and that is wrong so remember whenever you have to check equality always use triple ===
// or you can say for checking type and value both we use ===
// so to solve this problem we use ===

console.log(10 === "10"); //false
console.log(10 === 10); //true

console.log(10 != 4); //true
console.log(10 != 10); //false
// this sign != means not equal to
// (10 != 4) 10 is not equals to 4 and that is true so it will return true
// (10 != 10) 10 is not equals to 10 and that is false so it will return false

//---------------------------------


//*   Logical Operators:
// We use logical operators when we have to check combinaiton of conditions or can say multiple conditions
// It will also return boolean value True or False

// There are three logical operators in js
// 1. AND (&&)
// 2. OR (||)
// 3. NOT (!)

//? 1. AND (&&): It returns true if both the operands are true. If any one of the operand is false then it will return false.

console.log(10 > 5 && 10 > 3); //true
// here both the conditions are true so it will return true
// && (AND): It checks condition from left to right if both the conditions are true then it will return true otherwise false
// first it checks 10 > 5 which is true then it checks 10 > 3 or if the first condition is false then it will not check the second condition and directly return false

console.log(10 > 15 && 10 < 3); //false
// here first condition is false so it will return false without checking the second condition
 // because in AND if any one of the condition is false then it will return false

 // you can compare more than two conditions also
console.log(10 > 5 && 10 < 20 && 10 != 5); //true
// here all the conditions are true so it will return true
console.log(10 > 5 && 10 < 20 && 10 == 5); //false

// you can compare any number of conditions any value of conditions also string or boolean
console.log(10 > 5 && "hello" === "hello" && true); //true
console.log(10 > 5 && "hello" === "hello" && false); //false


//? 2. OR ( ||| ): It returns true if any one of the operand is true. If both the operands are false then it will return false.
console.log(10 > 5 || 10 < 3); //true
// here first condition is true so it will return true without checking the second condition
// because in OR if any one of the condition is true then it will return true

console.log(10 < 5 || 10 < 3); //false
// here both the conditions are false so it will return false   

// if there are many conditions and if any one those conditions is true then it will return true and if all the conditions are false then it will return false
console.log(10 < 5 || 10 < 3 || 10 != 5 || 10 === 10); //true
console.log(10 < 5 || 10 < 3 || 10 == 5 || "hello" === "Hello"); //false  

//? 3. NOT (!): It returns true if the operand is false and returns false if the operand is true. It is used to reverse the logical state of its operand.
console.log(!true); // it returns false
console.log(!false); // it returns true

console.log(10 != 10);  // false
// coz 10 is equals to 10 but here it says 10 is not equals to 10 so it return false



//* 4. Unary Operators:   

// Unary Operator is an operator that works on only one operand (one value or variable).
//An operator that does something with just one thing
// It performs an operation like increasing, decreasing, or changing the sign of that single value

//? It have to types: Increment and Decrement
//Increment means Increasing
//Decrement means Decreasing

// People got confused in Post Increment, Pre Increment & Post Decrement, Pre Decrement.
// But it's not that hard it is very simple and easy if you focus little bit.

//-----------------------------------

// For example to understand concept:
// Let there are two people A and B. A is going to Dominos and B is going to Dhaba.
//In Dominos A have to pay first then after payment A get to eat.
//In Dhaba first B eat as much as he can and then rest there until he satisfies after that B pays the bill.

//?  So here what we understand- In Dominos A first change(pay) after that he use(eat): [ change => use ] (This is pre-increment/decrement)

//?  And In Dhaba B first use(eat) after that he change(pay):               [ use => change ] (This is post-increment/decrement)

//So first talking about this
//!  [ change => use ] (This is pre-increment/decrement)

let m = 10;
let n = ++m;

// value of m is 10 as you see
// bu the moment we come to n we see here (++m)pre Increment and in the upper example of pre increment first we change and then use (change => use) 

// so first we go to m and change the value of m and now its 11 coz it's pre increment now come to formula (change => use) as we see we have change the value of m from 10 to 11 now we can use it

// so when we console them now value of m is 11 and the value of n is also 11 coz we increment m from 10 to 11.
//I hope you understand

console.log("m", m); //11
console.log("n",n);  //11

//! [ use => change ] (This is post-increment/decrement)

let p = 10;
let q = p++;

// now we see the value of p is 10 and when we come to q its value is p++ means post increment 
//And above example we see in post increment/decrement we use this formula:

// [ use => change ]  means first we use the value and then change it.

// so comes to q we use the value of p here, how q = 10 after user it we increased the value of p from 10 to 11 
// now the value of p is 11
//after changed we print it

console.log("p", p); //11
console.log("q", q); //10


//--------------------------

// Now lets see one more time but we use decrement


//!  [ change => use ] (This is pre-decrement)

let e = 10;
let f = --e;

// value of e is 10 as you see
// bu the moment we come to f we see here (--e)pre decrement and in the upper example of pre increment first we change and then use (change => use) 

// so first we go to e and change the value of e and now its 9 coz it's pre decrement now come to formula (change => use) as we change the value of e from 10 to 9 now we can use it in f 

// here value of e becomes 9 and now we can use it so the final answer of e is 9 as well as f is also 9

console.log("e", e); //9
console.log("f",f);  //9

//! [ use => change ] (This is post-decrement)

let j = 10;
let k = j--;

// now we see the value of j is 10 and when we come to k its value is j++ means post increment 

//And above example we see in post increment/decrement we use this formula:

// [ use => change ]  means first we use the value and then change it.

// so comes to k we use the value of j here, now q = 10 after used its value we decreased the value of j from 10 to 9
// now the value of j is 9
//after changed we print it

console.log("j", j); //9
console.log("k", k); //10


//! now

let z = 20;

console.log(z++ + ++z); //42

// lets understand it how its done
//in this equation z++ + ++z first is z++ so as we see above examples z++ is post increment so first we use it after using we changed it
// z++ = 20 
// now change the value of z to 21.

// second is ++z this is pre increment so first we change it and then use
// value of z is 21 but in ++z we first change the value to 22 after changing its value we used it so the new value of z is 22
// ++z = 22

// after understanding its concept lets add the value 
// z++ + ++z 
// (z++ = 20 ), (++z = 22)
// 20 + 22 = 42

//-----------------------------------

//! Important notes:

//---------------------------------
// Never apply on constanst it gives syntax error

// let c = ++10;
 // this is syntax error
//-----------------------------------
let h = 12;
// let i = ++(++h); 
// This is also a syntax error
//reason: i = ++(++h) first we solve brackets so the value of h will come 13
// now after solving brackets the answer is i = ++(13)
// as i said if we give increment or decrement on constants it will give syntax error
//---------------------------------------

let w = true;
w++;
console.log(w);
// Is this valid code ?
// If you ask in c++ or java about this code then it's a error but in js this code is not error it will give 2

//--------Basics completed Now move to the next part.
