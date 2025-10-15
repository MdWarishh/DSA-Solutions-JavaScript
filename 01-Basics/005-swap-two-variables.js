//Swap two variables via 3 methods

//? Listen there are five methods to swap two variables in js, but we will see only three methods here. After operators we will see more methods to swap two variables.

// Method 1: Using a temporary variable
let a = 10;
let b = 20;
console.log("Before swapping: a =", a, "b =", b);

let temp = a;
a = b;
b = temp;

console.log("After swapping using method 1: a =", a, "b =", b);

// explanation: we store the value of a in temp variable, then we assign the value of b to a, and finally we assign the value of temp to b. So the values of a and b are swapped. It is very simple method to swap two variables.
// but it uses extra space for temp variable. So if you want to swap two variables without using extra space then you can use the second method.



// Method 2: Using arithmetic operations

x = 13;
y = 69;
console.log("Before swapping: x =", x, "y =", y);

//now 
x = x + y; //82
y = x - y; //13
x = x - y; //69

console.log("After swapping using method 2: x =", x, "y =", y);

// explanation: if we add x(13) + Y(69) then the sum will be stored in x(82)

// now after new value of x(82) we find the new value of y: if we subtract the new value of x(82) with y(69) then the answer will be the old value of x(13) means now new value of y = 13

// now for making the new value of x: we subtract the new value of x(82) which we make in starting of this with the new value of y(13) then the answer will be the old value of y(69) means now new value of x = 69

// I hope you understand the logic behind this method.
//------------------------------
// Note: This method may cause overflow if the values of x and y are very large. So be careful while using this method.
//------------------------------


// you are going to lauugh on this method for being too easy that it doesn't take  any time and you don't have to think hard for it is going to swap in just a blink of an eye.

//Method 3: Using destructuring assignment (ES6 feature)
let p = 45;
let q = 99;
console.log("Before swapping: p =", p, "q =", q);

[p, q] = [q, p];

console.log("After swapping using method 3: p =", p, "q =", q);

//as i said this method is too easy and takes very less time to swap two variables.
// here we are using array destructuring to swap the values of p and q.
// we create an array with the values of q and p and then we destructure it to assign the values to p and q.
// so the values of p and q are swapped without using any temporary variable or arithmetic operations.
// this method is very concise and easy to understand. So prefer this method over the other two methods if you are using ES6 or later versions of js.