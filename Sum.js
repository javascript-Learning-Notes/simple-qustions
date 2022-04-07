// Write a JavaScript program to compute the sum of the two given integers. 
// If the two values are same, then returns triple their sum.  

function sum(value1, value2) {
    if(value1==value2){
        return (value1+value2)*3;
    }else{
        return (value1+value2);
    }
}

console.log(sum(10,20));
console.log(sum(20,20));