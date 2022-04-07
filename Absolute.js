// Write a JavaScript program to check whether a given integer is 
// within 20 of 100 or 400.

function absolute(n){
    return ((Math.abs(100-n)<=20)||(Math.abs(400-n)<=20))
}

console.log(absolute(10));
console.log(absolute(90));
console.log(absolute(390))