const bornInYear = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];
const canDrive = (arr) => {
	arr.forEach((year) => {
		2020 - year > 17
			? console.log(`Born in ${year} can drive.`)
			: console.log(`Born in ${year} can drive in ${year + 17}. `);
	});
};
console.log(canDrive(bornInYear));
