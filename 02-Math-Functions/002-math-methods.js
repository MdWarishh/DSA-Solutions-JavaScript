/*
          Math Methods in JavaScript (with Real Examples)

Math methods are built-in functions that make number operations easy.
Let’s explore some commonly used ones with real-world use cases.
*/


// ------------------------------
//*     Math.ceil()
// ------------------------------
console.log("Math.ceil()");
console.log("Ceil of 4.1 =", Math.ceil(4.1)); // 5
console.log("Ceil of -4.1 =", Math.ceil(-4.1)); // -4
console.log("Ceil of 4.001 =", Math.ceil(4.0)); // 4

//how ceil works: whenever we use Math.ceil method it gives the maximum output or we can say that it drags the number to the the means if the no. is 1.1 then it gives 2 or if the no. is 1.9 it gives the output 2, if you write some number after the point the output will come maximum. but if write 0 after the point the answer changes we will  see it in further lectures.

//  Real-life Example:
let boxes = 23;
let perTruck = 10;
console.log("Trucks needed:", Math.ceil(boxes / perTruck)); // 3
// You need at least full trucks for transport, noone can use half truck


// ------------------------------
//*    Math.floor()
// ------------------------------
// It is oppisite of ceil method, like ceil drags the no. to the top floor drags the no. to bottom.

console.log("Math.floor()");
console.log("Floor of 12.9 =", Math.floor(12.9)); // 12
console.log("Floor of -8.9 =", Math.floor(-8.9)); // -9

//How it works: It drags the no. to its lowest form or we can say that it gives the minimum value no matter what you write after the point

// Real-life Example:
// When you sell 52.9kg rice bags, you can only fill 52 full bags
let rice = 52.9;
console.log("Full bags:", Math.floor(rice)); // 52


// ------------------------------
//*     Math.round()
// ------------------------------
console.log("Math.round()");
console.log("Round 4.6 =", Math.round(4.6)); // 5
console.log("Round 4.4 =", Math.round(4.4)); // 4

//How it works: Whenever we take .5 or  above .5 then Math.round works like cein means it gives the maxium output but if we take .4 or below .4 then Math.round behaves like floor and gives the minimum output

//  Real-life Example:
// Rounding a bill amount
let bill = 199.75;
console.log("Final Bill:", Math.round(bill)); // 200



// ------------------------------
//*   Math.abs()
// ------------------------------
console.log("Math.abs()");
console.log("Absolute of -9 =", Math.abs(-9)); // 9

//How it works: It makes your six pack abs, just kidding. It covert negative value to positive. And if you ask what will it do with positive value? It will not change the positive value.


//  Real-life Example:
// Calculating difference in scores
let teamA = 56, teamB = 72;
console.log("Score Difference:", Math.abs(teamA - teamB)); // 16


// ------------------------------
//*   Math.trunc()
// ------------------------------
console.log("Math.trunc()");
console.log("Trunc of 4.9878 =", Math.trunc(4.9878)); // 4
console.log("Trunc of -4.9 =", Math.trunc(-4.9)); // -4

//How it works: It removes all the values after decimal

//  Real-life Example:
// Showing only integer part of a rating
let rating = 4.7;
console.log("Display rating:", Math.trunc(rating)); // 4


// ------------------------------
// *   Math.pow() & Math.sqrt()
// ------------------------------
console.log("Math.pow()");
console.log("2³ =", Math.pow(2, 3));  // 8

//pow means power
// How it works:  Math.pow - It takes two parameters, first on whom the power is to be applied and second how much power is to be applied.
// Suppose I want to give 5 to the power of 2 (5^2), then I will give 5 in the first parameter and 2 in the second parameter.
//  Math.pow(5, 2) answer will 25.


// ------------------------------
//*   Math.sqrt() & Math.cbrt()
// ------------------------------

console.log("Math.sqrt & Math.cbrt");
console.log("square root of 25", Math.sqrt(25));  // 5  
console.log("cube root of 27", Math.cbrt(27)); //3


// sqrt means square root
//How it works: It takes a number and return its square root, if you give random number like 40 then you know there is no perfect square root of 40 so it will return in floating means point.

//cbrt means cube root
//How it works: It takes a number and return its cube root, if you give random number like 20 then you know there is no perfect cube root of 20 so it will return in floating means point.




// ------------------------------
//*    Math.min() & Math.max()
// ------------------------------
console.log("Math.min() & Math.max()");

console.log("Lowest Score:", Math.min(45, 78, 23, 90, 67)); // 23
console.log("Highest Score:", Math.max(45, 78, 23, 90, 67)); // 90

//How both works: No matter how much value you gave them Math.min() return minimum value and Math.max() returns maximum value 


// ------------------------------
//*    Math.random()
// ------------------------------
console.log("Math.random()");
console.log("Random number (0–1):", Math.random());

//How it works: You don't have to give any value to random coz It always reutrns value between 0 to 1.



// ------------------------------
//*    .toFixed()
// ------------------------------
let a = 345.6427823
console.log("use of .toFixed()");
console.log(a.toFixed(3));  //345.643

//How it works:  You gave the number in toFIxed(here) that how many number you want after point.






// ------------------------------
//  Quick Challenge (for practice)
// ------------------------------
/*
1️⃣ Generate 5 random numbers between 10 and 50.
2️⃣ Find the smallest and largest among them.
3️⃣ Round each number to the nearest integer.
*/

//  Try solving it yourself first before checking others’ code 


// ------------------------------
// ✅ Summary
// ------------------------------
/*
✅ Math.ceil() → round up
✅ Math.floor() → round down
✅ Math.round() → nearest integer
✅ Math.trunc() → remove decimal part
✅ Math.random() → random number 0–1
✅ Math.abs() → absolute value (Convert negative to positive)
✅ Math.pow() / Math.sqrt() → power & root
✅ Math.min() / Math.max() → find smallest/largest
*/