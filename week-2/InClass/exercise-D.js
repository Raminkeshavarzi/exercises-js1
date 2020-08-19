const robot = (str) => {
	if (str === 'Happy') {
		return `Good job, you're doing great!`;
	} else if (str === 'Sad') {
		return `Every cloud has a silver lining`;
	} else if (typeof str === 'number') {
		return `Beep beep boop`;
	} else {
		return `I'm sorry, I'm still learning about feelings!`;
	}
};

console.log(robot('Happy'));

console.log(robot('Sad'));

console.log(robot(1));
console.log(robot(true));
