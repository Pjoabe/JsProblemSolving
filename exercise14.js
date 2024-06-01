// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  str = str.split(' ').join('-');
  str = str.split('_').join('-');
  str = str.split('').map((char, index) => {
    if (index > 0 && char !== '-' && char === char.toUpperCase() && str[index - 1] !== '-') {
      return '-' + char;
    }
    return char;
  }).join('');
  str = str.toLowerCase();
  return str;
}

console.log(spinalCase('This Is Spinal Tap'));