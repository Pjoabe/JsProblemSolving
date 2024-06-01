// You are given two arrays and an index.
// Copy each element from the first array into the second array, in order.
// Start inserting the elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.


function frankenSplice(arr1, arr2, n) {
  const newArr2 = arr2.slice();

  for (let i = 0; i < arr1.length; i++) {
    newArr2.splice(n, 0, arr1[i]);
    n++;
  }
  return newArr2;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));