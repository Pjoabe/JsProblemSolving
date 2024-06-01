// Return true if the string in the first element of the array contains all the letters of the string
// in the second element of the array.
// For example, ["hello", "Hello"] should return true because all the letters from the second string
// are present in the first, ignoring case sensitivity.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"] should return true because all the letters in "line" are present in "Alien".



function mutation(arr) {
  let firstStr = arr[0].toLowerCase();
  let secondStr = arr[1].toLowerCase();

  for (let i = 0; i < secondStr.length; i++) {
    if (firstStr.indexOf(secondStr[i]) === -1) {
      return false;
    }
  }

  return true;
}

console.log(mutation(["hello", "Hello"]));
console.log(mutation(["hello", "hey"]));   
console.log(mutation(["Alien", "line"]));  



mutation(["hello", "hey"]);