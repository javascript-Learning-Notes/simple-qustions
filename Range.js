// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive).
//  Return true if one or more of them are in the said range. 

function range(n){
    if(n>52&&n<99){
        return true;
    }else{
        return false;
    }
}

// console.log(range(80));
// console.log(range(100));

// function check_numbers(x, y) 
//   {
//   if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99))
//   {
//     return true;
//   } 
//   else 
//   {
//     return false;
//   }
// }

// console.log(check_numbers(12, 101));
// console.log(check_numbers(52, 80));