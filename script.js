// 1. Write a js program to find maximum between two numbers.
//var Number1 =+  prompt("Enter the First Number")
//var Number2 =+ prompt("Enter the Second Number")
//if(  Number1 >  Number2){
//    console.log(" The Number1 is Maximum");
//}
//else if (Number2 > Number1) {
//    console.log(" The Number2 is Minimum");
//}


//-------------------------------------------------------------------//

//2. Write a js program to find maximum between three numbers.

//var  Number1 =+ prompt("Enter the First Number")
//var  Number2 =+ prompt("Enter the Second Number")
//var  Number3 =+ prompt("Enter the Third Number")
//if( Number1 > Number2 && Number1 > Number3){
//  console.log(  "First Number is maximum")
//}
//else if( Number3 > Number1 && Number3 > Number2){
//  console.log(  "Third Number is Maximum")
//}
//else{ console.log(  "Second Number is Maximum")}

//------------------------------------------------------------------------------//

//3. Write a js program to check whether a number is negative, positive or zero.

//var Weather_temperature = + prompt("Enter the Temperature in Number")
//if (Weather_temperature <= 3){
//    console.log("The Temperature is cold")
//}
//else if (Weather_temperature <= 10){
//   console.log("The Temperature is cold")
//}
//else if (Weather_temperature <= 24){
//    console.log("The Temperature is Normal")
//}
//else if (Weather_temperature <= 40){
//    console.log("The Temperature is hot")
//}
// if (Weather_temperature >= 40){
//    console.log("The Temperature is very hot")
//}
//--------------------------------------------------------------------------------------------//

//4. Write a js program to check whether a number is divisible by 5 and 11 or not.

//var weather_number =+ prompt( "Enter temperature")
//if( weather_number %5==0){
//    console.log("Number is divided by 5" )
//}
//else if ( weather_number %11==0){
//    console.log("Number is divided by 11")
//}
//else{
//    console.log(" Number is  not divided by 5 or 11")
//}


//--------------------------------------------------------------------------------------//

//5. Write a js program to check whether a number is even or odd.

//var weather_number =+ prompt("Enter temperature")
//if(weather_number %2==0){
//    console.log( "Number is even")
//}
//else {
//    console.log("number is odd")
//}
//----------------------------------------------------------------------------//

//6. Write a js program to check whether a year is leap year or not.
//var LeapYearOrNot =+ prompt("Enter the Year Number to check whether a year is leap year or not.")
//if (LeapYearOrNot %4==0){
//    console.log( "whether a year is leap year ")
//}
//else{
//    console.log("whether a year is  not leap year ")
//}

//---------------------------------------------------------------------------------------------------------------//

//7. Write a js program to check whether a character is alphabet or not.

// var WeatherCharacter =  prompt(" Enter a character to check whether a character is alphabet or not")
// if ( WeatherCharacter  >= 'a' && WeatherCharacter <= 'z'  || WeatherCharacter >= 'A' && WeatherCharacter <='Z'){
//     console.log(" Character is  Alphabet")
// }
// else{ 
//     console.log("Character is  not Alphabet")
// }
//--------------------------------------------------------------------------------------------////  8. Write a js program to input any alphabet and check whether it is vowel or consonant.

// function vowelOrConsonant(alphabet){
//   var result = alphabet 
//  if(result == 'a' || result == 'e' || result == 'i' || result == 'o' || result == 'u'){
//     console.log(`"${result}" is a Vowel`)
//  }else{
//    console.log(`${result} is a Consonant`)
//  }
// }
// var checkVowelOrConsonant = prompt('Enter Alphabet to Check it is Vowel OR Consonant')
// vowelOrConsonant(checkVowelOrConsonant)

 // ---------------------------------------------------------------------------------------------------------

//  9. Write a js program to input any character and check whether it is alphabet, digit or special character.

//  function checkAlphabetDigitORSymbol(character){

//   var result = character
//   if(result >= 'a' && result <='z' || result >= 'A' && result <='Z'){
//     console.log(`"${result}" is a Alphabet`)
//   }
//   else if(result >= -100){
//      console.log(`"${result}" is a Number`)
//   }else{
//     console.log(`"${result}" is a special character`)
//   }


//  }

//  var userCharacter = prompt('Enter a character to Check it is Alphabet, Number or Symbol')
//  checkAlphabetDigitORSymbol(userCharacter)

//  ---------------------------------------------------------------------------------------------------------

// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.

// function checkUpperOrLowerCase(character){
//   var result = character
//   if(result >= 'a' && result <= 'z'){
//      console.log(`"${result}" is a Lowercase Character`)
//   }
//    else if(result >= 'A' && result <= 'Z'){
//      console.log(`"${result}" is a Uppercase Character`)
//   }else{
//     console.log('Enter a Valid Value!')
//   }
// }

// var userData = prompt('Enter Alphabet to Check it is Upper OR LowerCase')
// checkUpperOrLowerCase(userData)

// ---------------------------------------------------------------------------------------------------------

// 11. Write a js program to input week number and print week day.

//   function weekNumber(weeekDay){

//     var result = weeekDay
//     if(result == 1){
//        console.log(`${result} is a Monday`)
//     }
//     else if(result == 2){
//        console.log(`${result} is a Tuesday`)
//     }
//     else if(result == 3){
//        console.log(`${result} is a Wednesday`)
//     }
//     else if(result == 4){
//        console.log(`${result} is a Thursday`)
//     }
//     else if(result == 5){
//        console.log(`${result} is a Friday`)
//     }
//     else if(result == 6){
//        console.log(`${result} is a Saturday`)
//     }
//     else if(result == 7){
//        console.log(`${result} is a Sunday`)
//     }else{
//         console.log('PLease Enter Valid Number Enter 1 To 7 Only! ')
//     }

//   }
   
//   var getWeekNumber =+ prompt('Enter Number to see day Name, Enter 1 to 7')
//   weekNumber(getWeekNumber)

// ----------------------------------------------------------------------------------------------------------

// 12. Write a js program to input month number and print number of days in that month.

// function monthName(month){

//     var result = month
    
//     if(result == "january" || result == "January"){
//        console.log(`${result} have 31 Days`)
//     }
//     else if(result == "february" || result == "February"){
//        console.log(`${result} have 28 Days`)
//     }
//     else if(result == "march" || result == "March"){
//        console.log(`${result} have 31 Days`)
//     }
//     else if(result == "april" || result == "April"){
//        console.log(`${result} have 30 Days`)
//     }
//     else if(result == "may" || result == "May"){
//        console.log(`${result} have 31 Days`)
//     }
//     else if(result == "june" || result == "June"){
//        console.log(`${result} have 30 Days`)
//     }
//     else if(result == "july" || result == "July"){
//        console.log(`${result} have 31 Days`)
//     }
//     else if(result == "august" || result == "August"){
//        console.log(`${result} have 30 Days`)
//     }
//     else if(result == "september" || result == "September"){
//        console.log(`${result} have 31 Days`)
//     }
//     else if(result == "october" || result == "October"){
//        console.log(`${result} have 30 Days`)
//     }
//     else if(result == "november" || result == "November"){
//        console.log(`${result} have 31 Days`)
//     }
//     else if(result == "december" || result == "December"){
//        console.log(`${result} have 30 Days`)
//     }else{
//         console.log('Please Enter Correctly! ')
//     }

// }

// var getMonthName = prompt('Enter Any Month name to See Number of Days!')
// monthName(getMonthName)

// c----------------------------------------------------------------------------------------------------------

// 13. Write a js program to count total number of notes in given amount

//  function totalNotes(amount){
//     var result = amount
//     var resultNotes = parseInt( result/10)
//     // console.log(resultNotes)
//     if(resultNotes){
//         console.log(`${result}Rs have ${resultNotes} notes`)
//     }else{
//         console.log('Enter a Valid Value!')
//         // consolegit comm
//     }
//  }
// var userAmount =+ prompt('Enter Your Amount to Get Numbers of 10Rs Notes')
// totalNotes(userAmount)

// ----------------------------------------------------------------------------------------------------------

// 15. Write a js program to input all sides of a triangle and check whether triangle is valid or not

// function makeTriangle(leftSide, rightSide, base){

//     var left = leftSide
//     var right = rightSide
//     var baseValue = base
//     if(left + right + baseValue == 180 ){
//         console.log('LeftSide= ', left)
//         console.log('RightSide= ', right)
//         console.log('Base= ', baseValue)
//         console.log(`It is a Valid Triangle because ${left} + ${right} + ${baseValue} = 180`)
//     }
//     else{
//         console.log(`It is a Invalid Triangle ${left} + ${right} + ${baseValue} is not equal to 180  `)
//     }



//  }
// var UserValues1 =+ prompt('ENTER Left side angle')
// var UserValues2 =+ prompt('ENTER Right side angle')
// var UserValues3 =+ prompt('ENTER base')
// makeTriangle(UserValues1,UserValues2,UserValues3)

// ----------------------------------------------------------------------------------------------------


// 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.

//  function makeTriangle(leftSide, rightSide, base){

//     var left = leftSide
//     var right = rightSide
//     var baseValue = base
//     if(left == right && left == baseValue && right == left && right == baseValue && baseValue == left && baseValue == right ){
//         console.log('LeftSide= ', left)
//         console.log('RightSide= ', right)
//         console.log('Base= ', baseValue)
//         console.log("A triangle with all sides of equal length is called an 'equilateral triangle'")
//     }
//     else if(left== 90 || right == 90){
//         console.log("LeftSide= ", left)
//         console.log("RightSide= ", right)
//         console.log("base= ", baseValue)
//         console.log('A triangle with one angle measuring 90 degrees is called a "right-angled triangle"')
//     }else{
//         console.log('Please Enter Same Values to Create "equilateral triangle"')
//         console.log('Please Enter one side 90  to Create "right-angled triangle"')
//     }



//  }
// var UserValues1 =+ prompt('ENTER Left side angle')
// var UserValues2 =+ prompt('ENTER Right side angle')
// var UserValues3 =+ prompt('ENTER base')
// makeTriangle(UserValues1,UserValues2,UserValues3)

// ====================================================================================================

// 17. Write a js program to find all roots of a quadratic equation.
// function findRoots(){


// } 



// ================================================================================================

// 18. Write a js program to calculate profit or loss.

// function profitOrLoss(userbuyPrice, usersalePrice){

// var user = userbuyPrice
// var sale = usersalePrice
// var result = sale - user
// if(result >= 0){
//         console.log("Market Price = ", user )
//         console.log("Sale Price = ", sale )
//         console.log("Your Profit = ", result , " Rupees")
// }else{
//     console.log("Market Price = ", user )
//     console.log("Sale Price = ", sale )
//     console.log("Your Loss = ", result , " Rupees")
// }

// }
// var markedPrice =+ prompt('Enter Marked Price in Rupees')
// var salePrice =+ prompt('Enter sale price in Rupees')
// profitOrLoss(markedPrice, salePrice)

// ====================================================================================================

// 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

// function gradeAndPercentege(phy,chem,bio,math,comp){

//     var physicsMarks = phy
//     var ChemMarks = chem
//     var bioMarks = bio
//     var mathMarks = math
//     var compMarks = comp
//     var ObtainedMarks = physicsMarks + ChemMarks + bioMarks + mathMarks + compMarks
//     var getPercentege = (physicsMarks + ChemMarks + bioMarks + mathMarks + compMarks) /500 * 100
//     // console.log(TotalMarks)
//     if(ObtainedMarks > 500){
//        alert('Please Enter valid Values Total Marks of Every subject is 100 ')
//     }
//     else if(getPercentege >= 90){
//         console.log(`Obtained Marks = ${ObtainedMarks}`)
//         console.log(`Total Marks = 500`)
//         console.log(`Your Percentege = ${getPercentege}%`)
//         console.log(`Your Grade = A`)
//     }
//     else if(getPercentege >= 80){
//         console.log(`Obtained Marks = ${ObtainedMarks}`)
//         console.log(`Total Marks = 500`)
//         console.log(`Your Percentege = ${getPercentege}%`)
//         console.log(`Your Grade = B`)
//     }
//     else if(getPercentege >= 70){
//         console.log(`Obtained Marks = ${ObtainedMarks}`)
//         console.log(`Total Marks = 500`)
//         console.log(`Your Percentege = ${getPercentege}%`)
//         console.log(`Your Grade = C`)
//     }
//     else if(getPercentege >= 60){
//         console.log(`Obtained Marks = ${ObtainedMarks}`)
//         console.log(`Total Marks = 500`)
//         console.log(`Your Percentege = ${getPercentege}%`)
//         console.log(`Your Grade = D`)
//     }
//     else if(getPercentege >= 50){
//         console.log(`Obtained Marks = ${ObtainedMarks}`)
//         console.log(`Total Marks = 500`)
//         console.log(`Your Percentege = ${getPercentege}%`)
//         console.log(`Your Grade = E`)
//     }
//     else if(getPercentege <= 40){
//         console.log(`Obtained Marks = ${ObtainedMarks}`)
//         console.log(`Total Marks = 500`)
//         console.log(`Your Percentege = ${getPercentege}%`)
//         console.log(`Your Grade = F`)
//     }else{
//         console.log('Enter a valid value!')
//     }

// }

// var Physics =+ prompt('Your Physics Marks?')
// var Chemistry =+ prompt('Your Chemistry Marks?')
// var Biology =+ prompt('Your Biology Marks?')
// var Math =+ prompt('Your Math Marks?')
// var Computer =+ prompt('Your Computer Marks?')
// gradeAndPercentege(Physics,Chemistry,Biology,Math,Computer)

// ====================================================================================================


// . Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

// function employeeSalary(salary){

//     var result = salary
//     var calculate  = result 

// }
// var userData =+ prompt('Enter Your Salary')
// employeeSalary(userData)



// ====================================================================================================

// 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

function countBill(units){

    var result = units 
    
    if(result < 50  ){
        var unitsCount = result * 0.50 
        var totalBill = 20/100 + unitsCount
        // console.log(tex)
        // console.log(unitsCount)
      console.log(`Price of One Unit = 0.50`)
      console.log(`Your Used Units = ${result}`)
      console.log(`additional surcharge = 20%`)
      console.log(`Your Bill = ${totalBill} Rs`)
    }
    else if(result < 100  ){
        var unitsCount = result * 0.70 
        var totalBill = 20/100 + unitsCount
        // console.log(tex)
        // console.log(unitsCount)
      console.log(`Price of One Unit = 0.70`)
      console.log(`Your Used Units = ${result}`)
      console.log(`additional surcharge = 20%`)
      console.log(`Your Bill = ${totalBill} Rs`)
    }
    else if(result < 200  ){
        var unitsCount = result * 1.20 
        var totalBill = 20/100 + unitsCount
        // console.log(tex)
        // console.log(unitsCount)
      console.log(`Price of One Unit = 1.20`)
      console.log(`Your Used Units = ${result}`)
      console.log(`additional surcharge = 20%`)
      console.log(`Your Bill = ${totalBill} Rs`)
    }
    else if(result > 200  ){
        var unitsCount = result * 1.50 
        var totalBill = 20/100 + unitsCount
        // console.log(tex)
        // console.log(unitsCount)
      console.log(`Price of One Unit = 1.50`)
      console.log(`Your Used Units = ${result}`)
      console.log(`additional surcharge = 20%`)
      console.log(`Your Bill = ${totalBill} Rs`)
    }
 else{
    console.log('Enter a valid value')
 }



}
var units =+ prompt('Enter Units To generate Bill')
countBill(units)