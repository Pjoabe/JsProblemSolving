// vowels counter, write a function which counts the number of vowels in a string

const vowelsCounter = (string1) => {
  let toLowerCase = string1.toLowerCase();
  let counter = 0;
  let vowels = ['a','e', 'i', 'o', 'u'];
  for (let index = 0; index < toLowerCase.length; index++) {
    if (vowels.includes(toLowerCase[index])) {
      counter++;
    }
  }
  return counter;
  }
  
  console.log(vowelsCounter('AND new light heavyweight champion of the world is...'));