// Create a function that checks if a given string ends with the specified target string.
// confirmEnding("He has to give me a new name", "name") should return true.

function confirmEnding(str, target) {
  let start = str.length - target.length;
  let substring = str.substring(start);
  return substring === target;
}

console.log(confirmEnding("uououofuouo", "aaaa")); 
console.log(confirmEnding("He has to give me a new name", "name"));