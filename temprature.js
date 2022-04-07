// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
////CtoF=cTemp * 9 / 5 + 32;
//F to c = (fTemp - 32) * 5 / 9


function CtoF(calsius) {
    var ctemp = calsius * 9 / 5 + 32;
    console.log(ctemp);

}

function FtoC(Fahrenheit){
    var ftemp =(Fahrenheit -32)*5/9;
    console.log(ftemp);
}

console.log(CtoF(60));
console.log(FtoC(45));
