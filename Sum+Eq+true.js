// Write a JavaScript program to check two given numbers and
//  return true if one of the number is 50 or if their sum is 50.  

function Number(number1,number2) {
    if(number1 && number2 == 50 || number1+number2 == 50){
        return true;
    }else{
        return false;
    }
}

console.log(Number(25,25));
console.log(Number(0,50))