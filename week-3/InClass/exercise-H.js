// Takes an array of names
// Looks to see if your name is in the array
// If it is, return Found me!; if not, return Haven't found me :(

const array1 = [ 'Ramin', 'Ali', 'Thony', 'hassan' ];

const isThere = (arr, name) => {
	return arr.indexOf(name) !== -1 ? `found me 👍` : `have not found me`;
};

const findRamin = isThere(array1, 'Ramin');
const findHassan = isThere(array1, 'Hassan');

console.log(findRamin);
console.log(findHassan);

// works

// const isThere = (arr, name) => {
// 	return arr.includes(name) ? `found me` : `have not found me`;
// };

// const findMe = isThere(array1, 'Ali');

// console.log(findMe);

// const findHim = (name) => {
// 	let result = array1.find((element) => {
// 		element.includes(name) ? `found me` : `have not found me`;
// 	});
// 	return result;
// };
