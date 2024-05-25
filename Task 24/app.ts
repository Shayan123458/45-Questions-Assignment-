// Tests for equality and inequality with strings
let string1: string = "hello";
let string2: string = "world";
console.log("Equality test:", string1 === string2);  // False
console.log("Inequality test:", string1 !== string2);  // True

// Tests using the lower case function
let string3: string = "Hello";
let string4: string = "hello";
console.log("Lower case test:", string3.toLowerCase() === string4.toLowerCase());  // True

// Numerical tests
let num1: number = 5;
let num2: number = 10;
console.log("Equality test:", num1 === num2);  // False
console.log("Inequality test:", num1 !== num2);  // True
console.log("Greater than test:", num2 > num1);  // True
console.log("Less than test:", num1 < num2);  // True
console.log("Greater than or equal to test:", num2 >= num1);  // True
console.log("Less than or equal to test:", num1 <= num2);  // True

// Tests using "and" and "or" operators
let bool1: boolean = true;
let bool2: boolean = false;
let bool3: boolean = true;
console.log("And operator test:", bool1 && bool2);  // False
console.log("Or operator test:", bool1 || bool2);  // True

// Test whether an item is in an array
let array: number[] = [1, 2, 3, 4, 5];
let item1: number = 3;
let item2: number = 6;
console.log("In array test:", array.includes(item1));  // True
console.log("Not in array test:", !array.includes(item2));  // True
















// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//  If you want to try more comparisons, write more tests. Have at least one True and 
//  one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array
