const superheroes = require('superheroes');
const supervillains = require('supervillains');
 
const mySuperheroName = superheroes.random();
//=> 'Spider-Ham'

const mySupervillainName = supervillains.random();


console.log(mySuperheroName);
console.log(mySupervillainName);