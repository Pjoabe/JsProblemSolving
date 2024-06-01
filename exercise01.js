// Check if property exists in object
// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// Hint: test case 3 is a bit tricky because the value of property 'z' is undefined
// But the property itself exists

function myFunction (a, b){
  let array =  Object.keys(a);
  
  let maybe;
  for (let index = 0; index < array.length; index++) {
   if (array[index] === b) {
     maybe = b;
   }
  }
  return !!maybe;
  };
  
  
  console.log(myFunction({x:'a',y:'b',z:undefined},'z'));
  