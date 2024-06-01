// Create a function that iterates through an array of objects (first argument) and returns an array with
// all objects that have corresponding name-value pairs (second argument).
// Each name-value pair from the source object must be present in the collection object to be included in the returned array.
// For example, if the first argument is [{ first: "Romeo", last: "Montague" },
// { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
// and the second argument is { last: "Capulet" }, 
// then you should return the third object from the array (the first argument),
// because it contains the corresponding name and value that were passed as the second argument.


function whatIsInAName(collection, source) {
  return collection.filter(obj => {
    for (let key in source) {
      if (obj[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));