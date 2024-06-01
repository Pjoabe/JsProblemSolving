//  return an array with the biggest numbers in an multidimensional array 
function biggestNumbers(arr) {
  let bigNums = [];
  for (let i = 0; i < arr.length; i++) {
    let bigNum = -Infinity;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > bigNum) {
        bigNum = arr[i][j];
      }
    }
    bigNums.push(bigNum);
  }
  return bigNums;
}

console.log(biggestNumbers([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));