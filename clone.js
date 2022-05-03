// let a = [1,2,3,4];

// let b = a.slice(2);

// let ab = (a.clone[b]);

// console.log(ab);

// function arrayclone (arr){
//     return arr.slice(0);
// }

// console.log(arrayclone([1,2,3,4]));
// console.log(arrayclone([1,2,[3,4]]))
let x = [1, 2, 3, 4];
console.log("Original array:")
console.log(x)
let y = Array.from(x);
console.log("Clone of the said array:")
console.log(y)

