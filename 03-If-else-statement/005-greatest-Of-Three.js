
//?   Accept three numbers and print the greatest among them

let a = Number(prompt("Enter first number"))
let b = Number(prompt("Enter second number"))
let c = Number(prompt("Enter third number"))

if(a>b && a >c){
    console.log(a + ", is greatest");
}else if(b>a && b>c){
    console.log(b + ", is greatest");
}else{
    console.log(c + ", is greatest");
    
}