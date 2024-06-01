// Write a program that reads three values for the sides of a triangle (variables A, B, and C). 
// Check if each side is less than the sum of the other two sides. If so, check if A==B and if B==C, 
// if true the triangle is equilateral; If not, check if A==B or if A==C or if B==C, if true the triangle is isosceles; 
// otherwise, the triangle will be scalene. If the provided sides do not characterize a triangle, notify the occurrence.

const checkTriangle = (A, B, C) => {
  if (A + B + C !== 180) {
  return `The provided data does not characterize a triangle!`;
  }
  if (A < B + C && B < C + A && C < A + B) {
  if (A === B && B === C) {
  return `The triangle is equilateral`;
  } else if (A === B || A === C || B === C) {
  return `The triangle is isosceles`;
  } else {
  return `The triangle is scalene`;
  }
  } else {
  return `The provided sides do not characterize a triangle`;
  }
  };
  
  console.log(checkTriangle(65, 55, 60));