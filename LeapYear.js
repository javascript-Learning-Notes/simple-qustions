//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  

var year ;
function Leapyear(year){
    if (year % 4 && year % 100){
        console.log("its not leap year : " + year)
    }else{
        console.log("its leap year : " + year)
    }
}

console.log(Leapyear(2022));