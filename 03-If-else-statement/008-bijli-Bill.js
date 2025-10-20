
//?     Bijli Bill - Description on Graphic

 //           Unit                     Price
 //        up to 100            Rs. 4.2/unit
 //        101-200              Rs. 6/unit
 //        201-400              Rs. 8/unit
 //    more than 400        Rs. 13/unit

 // If you are thinking that this question is same as last one then you are wrong, this question logic is whole different than the last one


// Suppose your Bijli Bill come 76 Unit then it's clear up there that if Unit comes under 100 you have to give 4.2/unit so, you multiply 76 * 4.2 and you gave the price
// but if the unit aomes 150 unit, here's many people get wrong and multiply 150 * 6/unit but this is wrong. On the upper graph it clearly says that if unit is under 100 you have to pay 4.2 and if unit is more that 100 and less than 200 you have to pay 6/unit
// here your unit is 150.
// So you divide it by parts like first 100 + 50 (for clear logic)
// now you can clearly see that your first 100 is under 100 so you have to multiply it by 4.2/unit but the next 50 is after 100 unit right, here 101 to 150  so you multiply those remaining 50 to 6/unit and then after you find both answers add them the price of 150 unit comes. (100*4.2 + 50*6 = 420 + 300 = 720)

//----------------

//And that same logic you put in if there is more biiger unit like if your unit comes 450 then first you divided its part to every unit condition like 0 - 100 for 4.2/unit and 101 - 200 for 6/unit 201- 400 for 8/unit and 401 - 450 for 13/unit
//now solving it

// =>  (100 * 4.2) + (100*6) + (200*8) + (50*13)

// Now if your'e thinking that why i multiple 100 & 200 to every no. then watch the graph the difference of 0 to 100 is 100 same as 101 to 200 is also 100.
// and the unit is 450 so i parted them for every range of units 100 for 4.2,  next 100 means 101 to 200 for 6 (according to graph), after that 201 to 400 difference is 200 (for 8) and last 400 to 450 gap is 50 (for 13)

//i hope you understand the logic  if not then message me 

//*Now lets solve it


let unit = Number(prompt("Enter a unit"))
let amount = 0;

// if(unit>0 && unit<=100){
//     amount = unit * 4.2;
// }else if(unit>100 && unit <=200){
//     amount = (100*4.2) + (unit - 100) *6
// }else if(unit > 200 && unit <= 400){
//     amount = (100*4.2) + (100*6) + (unit-200) * 8
// }else if(unit > 400){
//     amount = (100*4.2) + (100*6) + (200 * 8) + (unit - 400) * 13
// }

// console.log(amount);

//This is top to bottom approach it's not much better coz it have repeted lines
//so here's we will approach bottom to top (from graph) 

if(unit>400){
    amount = (unit - 400) * 13
    unit = 400
}
if(unit > 200 && unit <= 400){
    amount = amount + (unit - 200) * 8
    unit = 200
}
if(unit > 100 && unit <= 200){
    amount = amount +  (unit - 100) * 6
    unit = 100
}
if(unit > 0 && unit <= 100){
    amount = amount +  (unit) * 4.2
}
console.log(amount);





