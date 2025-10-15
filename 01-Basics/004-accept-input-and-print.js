//! Accept input and print the answer

// as of now we are giving the values of a and b directly in the code
// but in real life scenario we have to take input from the user
// and then we have to print the answer
// for that we use diiferent methods for accepting input and printing output

//------------------------------
// in js we can use prompt() method to take input from the user
// and we can use alert() or console.log() method to print the output
//------------------------------

//* let's see if you are making a sign in page there you have to take input from the user like give me your name, age etc and that space is blank where user will enter his age or name whatever i ask in input field. but if you already fill that space with some value like name = "John" or age = 25 then it will not be input it will be a fixed value. And any user who wants to signin will not be able to change that value because it is already fixed in the code. And that is wrong user have to fill that space with his own value. So for that we see how to take input from the user.

// let age = prompt("Enter your age:");

// console.log(age);

// when you open console it ask your age then you enter your age and press enter then it will print your age in console.
// but the problem is whatever you enter in prompt it will always take it as a string.
// for example if you enter 25 it will take it as "25" string not as 25 integer.
// so if you want to take input as integer then you have to convert it into integer.


let age = Number(prompt("Enter your age:"));
console.log(age);
console.log(typeof age); // it will return number

// now if you enter 25 it will take it as 25 integer not as "25" string.
// and now you can use this age variable in your code as an integer.

// there are more methods to convert string to integer like 

// parseInt() method
let age1 = parseInt(prompt("Enter your age:"));
console.log(age1);
console.log(typeof age1); // it will return number

