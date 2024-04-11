// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log( isSum50)

let n5 = 20;
let n6= 10;
let n7 = 15;
let n8 = 8;
let issum60 =(n5+n6+n7+n8) ==60;
console.log(issum60)




// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd)
let isitodd = (n5 % 2) + (n6 % 2) + (n7 % 2) + (n8 % 2) >= 2;
console.log(isitodd)

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25 )




const isOver20 = n5 > 20 || n6 > 20 || n7 > 20 || n8 > 20;
console.log(isOver20)
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique)


// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log(isValid )



// Finally, log the results.
console.log(isValid);"true"

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
// check all the numbers are divisible by 5//
  let divby5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0
  console.log(divby5)

  //Check if the first number is larger than the last. //

  let Biggerfirst = n1 > n4
  console.log(Biggerfirst )

  /**Accomplish the following arithmetic chain:
Subtract the first number from the second number. 
Multiply the result by the third number.
Find the remainder of dividing the result by the fourth number.
*/

  let diff = (n2-n1)
  console.log(diff)

  let multiple = diff * n4
  console.log(multiple)
   
  let remainder = multiple % n4
  console.log(remainder)

  /**Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons.  */


  const isNotOver25 = n1<25 || n2<25 || n3 < 25 || n4 < 25;
  console.log(isNotOver25)

  const isvalid = isSum50 && isTwoOdd && isNotOver25 && isUnique;
  console.log(isvalid)


// let speed =s, Total cost = t, budget=b, cost/galloon= c, miles/gallon= m, Total distance=d, gallon= g, total gallons= tg
/** gallons usedin an hour at specific speed= g=s/m (speed/miles per gallon ) 
 * totalgallon(tg) = g/s*d
 * 
 * 
*/

//Fuel needed to cover distance at specific speed (s)= 
// when traveling at 60 mph, we get 28 mpg, so fuel needed to cover 60 miles is (60/28)

let S1 = 55;
let M1= 30;
let G1= S1 / M1 ;
console.log(`gallons needed to go 55 miles in an hour : ${G1}`)//1.83 gallons needed to go 55mph at 3ompg
// to go 55 mph @ 30 mpg ,you need 1.83 gallons/hour,then to go 1500 miles we would need 1.83*1500/55
let TG1= (G1 * 1500) / S1 ;
console.log(`total fuel needed to go 1500 miles at 55 mpg and fuel efficiency of 30 mph : ${TG1}`)
/**to go 1500 miles at 55mph speed and fuel efficiency of 30mpg, total fuel needed is 50 gallons,
 * to calculate toatl cost for this trip we have to multiply total gallons by average cost of fuel i.e $3/gallon*/
 let TC1 = TG1 * 3;
 console.log(`the total cost of trip at 55mph and 30mpg : $${TC1}`)

let totalBudjet = 175
 if (TC1 <= 175) {
  console.log("within budget")
 }
// TTH = Toatal Trip Hours?
 let TTH1 = 1500 / S1;
 console.log(`Total Trip-1 Hours = ${TTH1}`)// 27.27 hours


 let S2 = 60;
 let M2= 28;
 let G2= S2 / M2 ;
 console.log(`gallons needed to go 60 miles in an hour : ${G2}`)//2.14 gallons needed to go 60 mph at 28 mpg
 // to go 60 mph @ 28 mpg ,you need 2.14 gallons/hour,then to go 1500 miles we would need 2.14*1500/60
 let TG2= (G2 * 1500) / S2 ;
 console.log(`total fuel needed to go 1500 miles at 55 mpg and fuel efficiency of 30 mph : ${TG2}`)
 /**to go 1500 miles at 60 mph speed and fuel efficiency of 28 mpg, total fuel needed is 53.57 gallons,
  * to calculate toatl cost for this trip we have to multiply total gallons by average cost of fuel i.e $3/gallon*/
  let TC2 = TG2 * 3;
  console.log(`the total cost of trip at 60mph and 28 mpg : $${TC2}`)

 if (TC2 <= 175) {
  console.log("within budget")
 }

 let TTH2 = 1500 / S2;
 console.log(`Total Trip-2 Hours = ${TTH2}`)// 25 hours


  let S3 = 75;
 let M3= 23;
 let G3= S3 / M3 ;
 console.log(`gallons needed to go 75 miles in an hour : ${G3}`)
 //3.2 gallons needed to go 75 mph at 23 mpg
 // to go 75 mph @ 23 mpg ,you need 3.2 gallons/hour,then to go 1500 miles we would need 3.2*1500/75
 let TG3= (G3 * 1500) / S3 ;
 console.log(`total fuel needed to go 1500 miles at 55 mpg and fuel efficiency of 30 mph:${TG3}`)
 /**to go 1500 miles at 75 mph speed and fuel efficiency of 23 mpg, total fuel needed is 65.21 gallons,
  * to calculate toatl cost for this trip we have to multiply total gallons by average cost of fuel i.e $3/gallon*/
  let TC3 = TG3 * 3;
  console.log(`the total cost of trip at 60mph and 28 mpg : $${TC3}`)

  if (TC3 <= 175) {
    console.log("within budget")
   } else {
   console.log(" Out of Budget ")}

   let TTH3 = 1500 / S3;
 console.log(`Total Trip-3 Hours = ${TTH3}`)//  20 hours





/**
let S2= 60;
let M2 = 28;
let G2 = S2 / M2;

let S3= 75;
let M3 = 23;
let G3 = S3 / M3;


let 
let  
let fuel = m
let
let x= s/m

let totalgallon = (x*d)/s

//Total fuel needed for the trip, where s = speed of travel
let totalfuel = (x*d)/s

//Total fuel expenses, where c = cost per gallon
let totalcost = totalgallon * c 

//Total duration of the trip, where d= distance and s= speed of travel 
let totaltime = d/s





let */







