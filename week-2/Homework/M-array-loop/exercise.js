/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/

const daysOfWeek = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

const startWithT = (arr) => {
	const daysWithT = [];
	for (let idx in arr) {
		if (arr[idx].startsWith('T')) {
			daysWithT.push(arr[idx]);
		}
	}
	return daysWithT;
};

console.log(startWithT(daysOfWeek));
