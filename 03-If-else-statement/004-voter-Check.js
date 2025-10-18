
//?   Accept name and age from the user. Check if the user is a valid voter or not.

let name = prompt("Enter your name")
let age = Number(prompt("Enter Your Age"))

// If user age is more than 18 

if(age >= 18 && age <=100){
    console.log(name + ", is a valid voter")
}else{
    console.log(name + ", is not a valid voter");
    
}