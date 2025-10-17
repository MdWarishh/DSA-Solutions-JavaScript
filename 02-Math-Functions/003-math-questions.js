
//!        Math problems & solutions


//Note: Try solving it yourself first

//------------------------------------------

//?  1)  Calculate compound intrest

//Compound intrest formula: 
//  cp = A - p
// A = p * (1 + r/100)^ t
// cp = p * (1 + r/100)^ t - p

/*
let p = Number(prompt("Enter principle"))
let r =  Number(prompt("Enter a rate"))
let t =  Number(prompt("Enter time"))

console.log(p * Math.pow(1 + r/100, t) - p);
*/

//------------------------------------------------

//?  2)  Generate OTP

// console.log(Math.floor(Math.random() * 9000 + 1000));

//Works: 
// step-1) Math.random() generates no. between 0 to 1
// step-2) after multiply by 9000 Math.random() * 9000 it generates value between 0 to 9000
// step-3) but we want 4-digit otp so we add 1000 for generating 4 digits
// Math.random() * 9000 + 1000
// step-4) for removing decimal we can use Math.floor or Math.trunc so we use Math.floor
// Math.floor(Math.random() * 9000 + 1000)

//I hope everthing is clear

//------------------------------------------

//? 3)  Area of Triangle by heron's formula

//Heron's formula:  sqrt of s * (s-a) * (s-b) * (s-c)
// s = (a + b + c)/2

// In heron's formula there is a condition, if we add two sides of triangle the answer will always greater than both parameter.
// if the addition of two parameters comes equals or smaller than third parameter then the formula is not possible 
// so first we give the condition if the condition true then the formula will work

/*
let a = Number(prompt("Enter Number a"))
let b = Number(prompt("Enter Number b"))
let c = Number(prompt("Enter Number c"))

if(a+b<=c || b+c<=a || a+c<=b){
    console.log("Not Possible");
}else{
    // first we find s
    let s = (a+b+c)/2;
    console.log(Math.sqrt(s * (s-a) * (s-b) * (s-c)));
}
*/

//--------------------------------------------------------

//? 4) Circumference of circle

// circumference of circle = 2 *PI * r
// for PI we use Math.PI 
/*
let r = Number(prompt("Enter a radius(r)"));

console.log( 2 * Math.PI * r );
 */

// Here Math.PI is a property not a function and its value never change thats why we don't use like this Math.PI()

//-----------------------------------------------------

//? 5)  Convert Celsius to Fahrenheit and vice versa.

// Farenheit = Celcius * 9/5 + 32
/*
let c = Number(prompt("Enter Celcius"));

console.log(c * 9/5 + 32);
 */

//---------------------------------------------------

// I hope you will understand the questions and practice more questions for better understanding