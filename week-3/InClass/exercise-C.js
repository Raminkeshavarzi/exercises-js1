function abracaFunction(yourFunc) {
	console.log("I am abracaFunction! Watch as I mutate an array of strings to your heart's content!");
	const abracaArray = [ 'James', 'Elamin', 'Ismael', 'Sanyia', 'Chris', 'Antigoni' ];
	const abracaOutput = abracaArray.map((idx) => idx.toUpperCase()).sort();
	return abracaOutput;
}

// abracaArray.map(idx => idx.toUpperCase());

console.log(abracaFunction(this.abracaOutput));
