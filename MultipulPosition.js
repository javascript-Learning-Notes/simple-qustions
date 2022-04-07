// Write a JavaScript program to check whether a given positive number is a 
// multiple of 3 or a multiple of 7

function multipule(n){
    if(n % 3 == 0||n % 7 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(multipule(21));
console.log(multipule(10));