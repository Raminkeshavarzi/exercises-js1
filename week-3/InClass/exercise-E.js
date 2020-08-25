// Create a function that takes a birthYear, and returns the age of someone
// You are given an array with year that 7 people were born,
// [1964, 2008, 1999, 2005, 1978, 1985, 1919].
// Take this array and create another array containing their ages.
//     console.log the birth years array

const birthYear = () => {
	const bornInYear = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];
	const age = [];
	bornInYear.forEach((year) => {
		console.log(`Your age is ${2020 - year}`);
		return age.push(`${2020 - year}`);
	});
	return age;
};
console.log(birthYear());
