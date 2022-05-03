

function missing(a,arr){
   let total = Math.floor((arr + 1)*(arr + 2) / 2)

   for(let i = 0; i < arr ; i++)
       total = total - a[i]
       return total;
   
}
let array = [1,2,3,4,6,7,8,9];
let arr = array.length;
let get = missing(array,arr)
console.log(get);

//................................................................

// function getMissingNo(a, n) {
  
//     let total = Math.floor((n + 1) * (n + 2) / 2);
//     for (let i = 0; i < n; i++)
//         total -= a[i];
//     return total;
// }

// // Driver Code

// let arr = [ 1, 2, 4, 5, 6 ];
// let n = arr.length;
// let miss = getMissingNo(arr, n);
// console.log(miss);