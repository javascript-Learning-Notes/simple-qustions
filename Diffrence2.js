// Write a JavaScript program to compute the absolute difference between a specified number and 19.
//  Returns triple their absolute difference 
//  if the specified number is greater than 19.

function number(n){
    if(n<=19){
        return (19 -n)
    }else{
        return (n-19)*3
    }
}

console.log(number(50));
console.log(number(12));