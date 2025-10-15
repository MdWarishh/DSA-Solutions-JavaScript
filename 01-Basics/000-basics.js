// in js we can assign data without declaring any variable. 
// but it is not a good practice to do so.

// example: 
a = 10;
console.log(a); // 10

// now if we try to access a variable that is not declared or assigned, it will throw an error.
// console.log(b); // ReferenceError: b is not defined
// to avoid this, we should always declare variables using var, let or const keywords.

// !  In js we can declare variables using var, let or const keywords.
// *  var: function scoped, can be re-declared and updated.
// *  let: block scoped, cannot be re-declared but can be updated.
// * const: block scoped, cannot be re-declared or updated.

// Using var to declare variables  
var x = 5;
console.log(x); // 5

// but in js when we use (var) we can assign value and after we can declare it
// example:
y = 10;
var y;
console.log(y); // 10

// and it will work fine. but it is not a good practice to do so.
// because it can lead to confusion and bugs in the code.
// so always declare variables before using them.

// but when we use (let) or (const) it will throw an error if we try to assign value before declaring it.
// example:
//  z = 15; // ReferenceError: Cannot access 'z' before initialization
// let z;
// console.log(z); // undefined

// so thats all about variable declaration in js.
// always declare variables before using them to avoid confusion and bugs in the code.
// and prefer using (let) and (const) over (var) to avoid scope issues.

