// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. 
// The string length must be 3 or more.  

function frontback(str){
    first = str.substring(str.length-3);
    return first + str + first;

}

console.log(frontback("viren"));
