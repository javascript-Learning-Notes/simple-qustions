//Write a JavaScript program to find the largest of three given integers. 

// function find(a, b, c){
//     if(a > b && a > c ){
//         console.log("A is greater")
//     }if(b > a && b > c ){
//         console.log("B is greater")
//     }if( c > a && c > b){
//         console.log("C is greater")
//     }else{
//         console.log("enter different values");
//     }

// }

//find(1,2,3);

function maxofthree(x, y, z) 
 {
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
}

console.log(maxofthree(1,5,3));