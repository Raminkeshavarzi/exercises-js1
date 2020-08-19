const students = [ 'Ahmed', 'Maria', 'Atanas', 'Nahidul', 'Jack' ];

const studentList = (arr) => {
	for (let i in arr) {
		console.log(`${arr[i]}`);
	}
};

console.log(studentList(students));
