/*
   This program should check if the array `group` contains only students
*/

var students = [ 'Omar', 'Austine', 'Dany', 'Swathi', 'Lesley', 'Rukmini' ];
var group = [ 'Austine', 'Dany', 'Swathi', 'Daniel' ];

const groupIsOnlyStudents = group.every(
	(idx) =>
		group.includes(students)
			? console.log('The group contains only students')
			: console.log('The group does not contain only students')
);

//  or using nested for loop

const checkIs = (arr1, arr2) => {
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (!arr1.includes(arr2[j])) {
				return 'The group contains only students';
			} else {
				return 'The group does not contain only students';
			}
		}
	}
};

console.log(checkIs(students, group));
/* EXPECTED RESULT */

// The group does not contain only students
