// Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


var today = new Date();
var mm = today.getMonth();
var dd = today.getDay();
var yyyy = today.getFullYear()

console.log("mm,dd,yyyy : "+mm, dd, yyyy);
console.log("mm/dd/yyyy : "+mm+'/'+dd+'/'+yyyy);
console.log("dd-mm-yyyy : "+dd+'-'+mm+'-'+yyyy);
console.log("dd/mm/yyyy : "+dd+'/'+mm+'/'+yyyy);