
//?    1) Problem Statement: Indian Currency Notes Breakdown

//   Try to solve it by yourself. This is practice questions

// You need to write a program where the user inputs an amount in Indian
// Rupees, and the program should output the number of currency notes
// required to make up that amount using the largest denominations first.

// Denominations Available (Indian Rupees): ₹2000, ₹500, ₹200, ₹100, ₹50,
// ₹20, ₹10, ₹5, ₹2, ₹1

// Example 1:

// Input:
// Amount: 4327

// Output:
// ₹2000 x 2
// ₹500 x 0
// ₹200 x 1
// ₹100 x 1
// ₹50 x 0
// ₹20 x 1
// ₹10 x 0
// ₹5 x 1
// ₹2 x 1
// ₹1 x 0

//*   1st method
// let amount = Number(prompt("Enter your amount"));
// let note2000 = 0, note500 = 0, note200 = 0, note100 = 0, note50 = 0,
//     note20 = 0, note10 = 0, note5 = 0, note2 = 0, note1 = 0;



//     if (amount >= 2000) {
//   note2000 = Math.floor(amount / 2000);
//   amount = amount % 2000;
// }

// if (amount >= 500) {
//   note500 = Math.floor(amount / 500);
//   amount = amount % 500;
// }

// if (amount >= 200) {
//   note200 = Math.floor(amount / 200);
//   amount = amount % 200;
// }

// if (amount >= 100) {
//   note100 = Math.floor(amount / 100);
//   amount = amount % 100;
// }

// if (amount >= 50) {
//   note50 = Math.floor(amount / 50);
//   amount = amount % 50;
// }

// if (amount >= 20) {
//   note20 = Math.floor(amount / 20);
//   amount = amount % 20;
// }

// if (amount >= 10) {
//   note10 = Math.floor(amount / 10);
//   amount = amount % 10;
// }

// if (amount >= 5) {
//   note5 = Math.floor(amount / 5);
//   amount = amount % 5;
// }

// if (amount >= 2) {
//   note2 = Math.floor(amount / 2);
//   amount = amount % 2;
// }

// if (amount >= 1) {
//   note1 = amount; // remaining will always be less than 1
// }

// console.log(`₹2000 x ${note2000}`);
// console.log(`₹500 x ${note500}`);
// console.log(`₹200 x ${note200}`);
// console.log(`₹100 x ${note100}`);
// console.log(`₹50 x ${note50}`);
// console.log(`₹20 x ${note20}`);
// console.log(`₹10 x ${note10}`);
// console.log(`₹5 x ${note5}`);
// console.log(`₹2 x ${note2}`);
// console.log(`₹1 x ${note1}`);



//*  2nd method

let amount = parseInt(prompt("Enter the amount: "));

let note2000, note500, note200, note100, note50, note20, note10, note5, note2, note1;

if (amount >= 2000) {
  note2000 = Math.floor(amount / 2000);
  amount = amount % 2000;
  console.log(`₹2000 x ${note2000}`);
}

if (amount >= 500) {
  note500 = Math.floor(amount / 500);
  amount = amount % 500;
  console.log(`₹500 x ${note500}`);
}

if (amount >= 200) {
  note200 = Math.floor(amount / 200);
  amount = amount % 200;
  console.log(`₹200 x ${note200}`);
}

if (amount >= 100) {
  note100 = Math.floor(amount / 100);
  amount = amount % 100;
  console.log(`₹100 x ${note100}`);
}

if (amount >= 50) {
  note50 = Math.floor(amount / 50);
  amount = amount % 50;
  console.log(`₹50 x ${note50}`);
}

if (amount >= 20) {
  note20 = Math.floor(amount / 20);
  amount = amount % 20;
  console.log(`₹20 x ${note20}`);
}

if (amount >= 10) {
  note10 = Math.floor(amount / 10);
  amount = amount % 10;
  console.log(`₹10 x ${note10}`);
}

if (amount >= 5) {
  note5 = Math.floor(amount / 5);
  amount = amount % 5;
  console.log(`₹5 x ${note5}`);
}

if (amount >= 2) {
  note2 = Math.floor(amount / 2);
  amount = amount % 2;
  console.log(`₹2 x ${note2}`);
}

if (amount >= 1) {
  note1 = amount; // whatever remains is ₹1
  console.log(`₹1 x ${note1}`);
} else if (amount == 0) {
  console.log("No ₹1 notes needed");
}
