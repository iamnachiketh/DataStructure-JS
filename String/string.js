// String are basically any values that are enclosed in double quotes

let str = "hello@$36654";

// String can be declared in two ways

let s1 = "hello1234"; // Primitive

let s2 = new String("hello1234");

// string has many inbuilt functions 

// Note: In JavaScript string can also be accessed as array values

//Example
let sentence = "I love javascript this a very good language";

//All String functions return a new string

// Gets the character at a particular index
// at can also pass negetive index
console.log(sentence.at(3)); // Output: o

//Gets the character at a particular index
console.log(sentence.charAt(2));


// Get whether the passed string present in sentence or not
console.log(sentence.includes("javascript"));


//Get the first index of passed string
console.log(sentence.indexOf("a"));

//Get index of the last encounter of passed value 
console.log(sentence.lastIndexOf("a"));


//Converts every letter into upper case
console.log(sentence.toUpperCase());

//Converts every letter into lower case
console.log(sentence.toLowerCase());

// Splits the sentence based on the Regx that has been passed and returns everything in an array
console.log(sentence.split(/[.!,\s]+/)); 

// Get substring which starts from 2 and ends with 4, 5 is excluded
// If the ending index is not specified its consider till the end of the string
console.log(sentence.substring(2,5));


// Gets the ASCII value of a charcter at the particular index
console.log(sentence.charCodeAt(2));

// Return the total length of the sentence
console.log(sentence.length);

// Get substring which starts from 2 and ends with 4, 5 is excluded
// If the ending index is not specified its consider till the end of the string
console.log(sentence.slice(4));


//There are lot other inbuilt function in string but above mentioned are important ones