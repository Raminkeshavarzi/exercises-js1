/*
  Array methods - .slice()
  ------------------------
  The variable `firstFive` should contain the first five items of `everyone`
  The variable `lastFive` should contain the last five items of `everyone`
*/

var everyone = [ 'Daniel', 'Irina', 'Rares', 'Rukmini', 'Abdul', 'Austine', 'Swathi' ];

var firstFive = (arr, numStart, numEnd) => arr.slice(numStart, numEnd);
var lastFive = (arr, numStart, numEnd) => arr.slice(numStart, numEnd);

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(firstFive(everyone, 0, 5));
console.log(lastFive(everyone, 2, 7));

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Rares", "Rukmini", "Abdul"]
  ["Rares", "Rukmini", "Abdul", "Austine", "Swathi"]
*/
