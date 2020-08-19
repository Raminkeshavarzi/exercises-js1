function exponential(number) {
	return number * number;
}

function isEven(number) {
	for (let i = 6; i < 20; i += 2) {
		console.log(`The exponential of ${i} is ${i * i}`);
	}
	return number % 2 === 0;
}

console.log(isEven(6));
