const arr = [ 100, 'iSMael', 55, 45, 'sANyiA', 66, 'JaMEs', 'eLAmIn', 23, 'IsMael', 67, 19, 'ElaMIN' ];
const strArr = [];
const output = arr
	.filter((element) => typeof element === 'string')
	.map((element) => element.toUpperCase())
	.map((str) => `${str}!`);

console.log(output);
