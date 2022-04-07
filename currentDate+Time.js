// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// var today = new Date();
// var day = today.getDay();
// var daylist =("sunday","monday","tuesday","wednesday","thursday","friday","saturday")
// console.log("today is : daylist[day]")
// ;

var today = new Date();
  var day = today.getDay(); // method to get day
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"]; //define the days
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours(); //method to get houres
  var minute = today.getMinutes();//method to get minutes
  var second = today.getSeconds();//method to get seconds
  var prepand = (hour >= 12)? " PM ":" AM ";  //condition for am,pm
  hour = (hour >= 12)? hour - 12: hour; // condition for hours

  //Check condition for noon 
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand='Noon';
  } 
  else
  { 
  hour=12;
  prepand='PM';
  } 
  //check conditions for midnight
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand='Midnight';
  } 
  else
  { 
  hour=12;
  prepand='AM';
  } 
  } 

  console.log("Current-Time:" +   hour + ":" +minute+":" +second+""+ prepand);