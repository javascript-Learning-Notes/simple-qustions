// Write a JavaScript program to check whether 
// a string starts with 'Java' and false otherwise.  

// function check(str){
//     if(str.indexOf('Java')){
//         return true;
//     }else{
//         return false;
//     }
// }

function check(str){ 
    front = str.substring(0,4);
    if(front == 'java'){
        return true;
    }else{
        return false;
    }
}

console.log(check("javascript"));
console.log(check("scriptjava"))