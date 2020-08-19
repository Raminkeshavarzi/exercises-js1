const checkUser = (usrName, usrType) => {
	if (usrName[0] === usrName[0].toUpperCase() && (usrName.length >= 5 && usrName.length < 10)) {
		return `Username is valid`;
	} else if (usrType === 'admin' || usrType === 'manager') {
		return `Username is valid`;
	} else {
		return `Username invalid`;
	}
};

console.log(checkUser('Adm'));
