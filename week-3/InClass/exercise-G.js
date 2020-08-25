const bornInYear = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];
const canDrive = bornInYear.filter((year) => 2020 - year > 17);
console.log(canDrive);
