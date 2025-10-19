
//?   Accept a year and check if it a leap year or not (google to find out  what's a leap year)

// 1) if a year is divisible by only 4 then it's a leap year
// 2) But here's a condition If a year is divisible by 4 and is also divisible by 100, then it must be divisible by 400 to be a leap year.

//  On condition 1 we check a year if it is divisible by 4 or not if it is divisible by 4 then we check if it is also divisible by 100 if the year is divisible by 4 but not by 100 like 2008 or 2020 then it's a leap year

// but on the other hand in 2nd condition if the year is divisible by 4 and also divisible by 100 the it have to be divided by 400 if it is not divided by 400 then it's not a leap year


// Let me explain you: Understand this , let we take a year like 2024 it is divisible by 4 but not by 100 then we will not check for 400 and we say it is a leap year, but on the other hand if we take 1700 it is divisible by 4 and is also divisible by 100 but it is not divisible by 400 so it is not a leap year. And if we take 2000 or 1600 it is clearly divisible by 4 , 100 and 400 then it is a leap year.

//* Now solve this

let year = Number(prompt("Enter a year to check if it's a leap year or not"));
 
let isLeap = false;

// if(year % 4 == 0){
//     //first we check if it is divisible by 4 or not
//     if(year % 100 == 0){
//         // if year is divisible by 4 then we check if it is also divisible by 100 or not, And if it is not divisible by 100 then in else we return isLeap = true
//         if(year % 400 == 0){
//             // after finding the year is divisible by 100 then we check if it is also divisible by 400 or not if it is also divisible by 400 then leap year but if it's not divisible by 400 then it will return isLeap = false
//             isLeap = true
//                 }else{
//                     //here we return if the year is not divisible by 400
//                     isLeap = false
//                 }
//     }else{
//         // here we return and not check the next condition if the year is not divisible by 100
//         isLeap = true        
//     }
// }else{
//     // here we return if the year is not divisible by 4 
//     isLeap = false
// }

// console.log(isLeap);

//I hope you understand

// method js

if(year % 4 == 0 && year %100 != 0){
    console.log('Leap Year');    
}else if(year % 400 ==0){
    console.log("It is a leap year");
}