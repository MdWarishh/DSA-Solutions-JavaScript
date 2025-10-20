
//?     Shop discount - Description on Graphic 
 //         Amount             Discount
 //         0-5000                    0%
 //      5001-7000                 5%
 //      7001-9000                10%
 //    more than 9000           20%

 //Here's  a question says if you are going to a show and buy anything under Rs.5000 then you will get a discount of 0% but if buy something between   Rs.5001 to Rs.7000 then you will get a discount of 5%
// And if you something between Rs.7001 to Rs.9000 then you will get a discount of 10% and if buy something more than Rs.9000 then you will get 20% of total discount


// let amount = Number(prompt('Enter a amount'));

// 1st method 
//  if( amount >= 0 && amount <= 5000){
//                console.log( "There is no dicount for you" );
//  }else if( amount >= 5001 && amount <= 7000 ){
//            console.log("You will get a discount of 5%, original price =" + amount +"New bill  =   "   + (  amount - amount * 5 / 100)  + "is your discounted bill");
           
//  }else if( amount >= 7001 && amount <= 9000){
//     console.log(("You will get a discount of 10%, Original price = " + amount +"Discounted price = " + (   amount - amount * 10/ 100)));
    
//  }else if( amount > 9000){
//     console.log(("You will get a discount of 20%, Original price = " + amount +"Discounted price = " + (  amount -  amount *  20 / 100)));
    
//  }


//2nd method

let amount = Number(prompt('Enter a amount'));

dic = 0;

if(amount >=0 && amount <= 5000) dis = 0;
else if(amount > 5000 && amount <= 7000) dis = 5;
else if( amount > 7000 && amount <= 9000) dis = 10;
else if(amount > 9000) dis = 20;
else console.log("Invalid input");

console.log("amount = " + amount + "Discounted ammount = " + (amount - (amount * dis) /100));
