//* string + string = string(concatenation)
// concatination means when two strings are added together, they are joined end to end. In other words they are combined to form a single string.

let a = "Hello";
let b = "World";
console.log(a + b);
// HelloWorld

//Now, the question is if we add two strings how can we identify that the answer is a string and not an integer?
// The simple way to know that is by looking at the console if the answer in black color then it is a string but if it is in blue color then it is an integer.
 //now second way to know that is by using typeof operator.
console.log(typeof (a + b)); // it will return string

//* string + integer = string(concatenation)
let c = "100";
let d = 50;
console.log(c + d);
// 10050
console.log(typeof (c + d)); // it will return string

// ------------------------------
//! Now understand it, whatever you add to a string it will always return a string whether it is a string or an integer.
//------------------------------

//* integer + string = string(concatenation)
let e = 30;
let f = "70";
console.log(e + f);
// 3070
console.log(typeof (e + f)); // it will return string

//* integer + integer = integer(Arithmetic addition)
let g = 40;
let h = 60;
console.log(g + h); //100

// and now the answer is int so you can check it on console that it is in blue color
console.log(typeof (g + h)); // it will return number

