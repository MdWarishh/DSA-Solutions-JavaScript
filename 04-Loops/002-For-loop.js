
//*            For - Loop

//-------------------------------

// A for loop is used when you know how many times you want to repeat something.
// It’s like saying:

// “Do this task 5 times.”

// Instead of writing code again and again, you put it inside a loop — and it repeats automatically.

//-----------------------------------

// In for loop there're three parameters

//  1) declare / initialize
//  2)  condition
//  3)   update / change

//  Basic syntax:

    // for (initialization; condition; update) {
  // code to repeat
// }

// Example:

for (let i = 1; i <= 5; i++) {
  console.log("Hello World");
}

//        Part	                   Meaning                         	Example
//    Initialization	  Set the starting point               	let i = 1
//     Condition     	Check before each loop                      i <= 5
//      Update	       Change the value after each run      	i++ (add 1)