const arr = [ 'hello', 'navy', 'Amy', 'Army' ];

function secondMatchesAmy(arr) {
	if (arr[2] === 'Amy') {
		return 'Second index matched!';
	}
	return 'Second index not matched';
}

console.log(secondMatchesAmy(arr));
