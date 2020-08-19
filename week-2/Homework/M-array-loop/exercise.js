/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/

const daysOfWeek = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

const startWithT = (arr) => {
	for (let i in arr) {
		if (arr[i].startsWith('T')) {
			console.log(arr[i]);
		}
	}
};

console.log(startWithT(daysOfWeek));
