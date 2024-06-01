// We will provide you with an array containing two numbers. Return the sum of those two numbers,
// plus the sum of all the numbers between them. The lower number will not always come first.
// For example, sumAll([4,1]) should return 10, because the sum of all the numbers between 1 and 4 (inclusive) is 10.

function sumAll(arr) {
  arr.sort((a, b) => a - b);
  const sum = arr.reduce((acc, value) => (acc + value), 0);
  let sum2 = 0;

  for (let i = arr[0] + 1; i < arr[1]; i++) {
    sum2 += i;
  }
  return sum2 + sum;
}

console.log(sumAll([1, 4])); 
console.log(sumAll([4, 1])); 