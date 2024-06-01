// Remove all falsy values from an array. Return a new array; do not mutate the original array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  let trues = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index]) {
      trues.push(arr[index])
    }
  }
  return trues;
  }
  
  console.log(bouncer([7, "ate", "", false, 0, 9]));