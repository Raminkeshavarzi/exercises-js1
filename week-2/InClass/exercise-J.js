const arr = [ 'hello', 'navy', 'Amy', 'Army', 'BCN', 'London' ];
let randIdx = Math.floor(Math.random() * arr.length);
const secondMatchesAmy = (arr) => (arr[randIdx] === 'Amy' ? 'Second index matched!' : 'Second index not matched');

console.log(secondMatchesAmy(arr));
