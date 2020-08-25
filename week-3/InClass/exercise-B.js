// Use the array of the people from your class
//     Combine it with another array filled with the names from another class
//     console.log the names in alphabetical order
// Create a function that takes a name and an array of names and returns a string.If the name is not in an array, it should return <name> is not at the class with <people in the array>. If the name is in the array,
// it should return <name> is at the class with <people in the array>.

let engStudent = [ 'Ali', 'Amara', 'Diana', 'Thony', 'Ramin' ];
let spaStudent = [ 'Davied', 'Zaquiel', 'Md Raju' ];

console.log(engStudent.concat(spaStudent).sort());
const checkstud = (name, arr) =>
	arr.includes(name) ? console.log(`${name} is  in array`) : console.log(`${name} is not the array`);

console.log(checkstud('Ali', engStudent));
