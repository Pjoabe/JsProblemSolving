// Return the given string with the first letter of each word in uppercase. Ensure that the rest of the word is in lowercase.
// For the purposes of this exercise, you should also capitalize connective words like 'o' and 'de'.


function titleCase(str) {
  let strArr = str.split(" ");
  let finalString = '';

for (let index = 0; index < strArr.length; index++) {
  let rest = strArr[index].slice(1).toLowerCase();
  let firstLetter = strArr[index][0].toUpperCase() 
  let result = `${firstLetter}${rest}`
  finalString += `${result} `
}
return finalString.trim();
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));