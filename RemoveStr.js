// Write a JavaScript program to remove a character at the specified position
//  of a given string and return the new string. 

function removestr(str,rem){
   var p1 = str.substring(0,rem);
   var p2 = str.substring(rem+1,str.length);
  return(p1+p2);
}


console.log(removestr("virendra",0));
console.log(removestr("virendra",5));