//. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number.
// If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". 

var Number = Math.ceil(Math.random()*10)
console.log(Number);

var guess = 10;

if (Number == guess) {
    console.log("good work")
}else{
    console.log("not match")
}