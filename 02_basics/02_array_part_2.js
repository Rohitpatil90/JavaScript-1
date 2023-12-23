//02_array_part_2.js
 
const marvalHeros = ["ironman", "captain America", "thor", "hulk"]
const DCHERos = ["batman", "superman", "Flash"]
marvalHeros.push("Antman") // used add new element in array

console.log(marvalHeros); // used add new element

let allheros = marvalHeros.concat(DCHERos);  // used to add two array
console.log(allheros);

const myallheros = [...DCHERos, ...marvalHeros]; // this method is mostly used to merge two array
console.log(myallheros);


// .................. diff................

const another_array = [1,2,3, [4,5,6],7,[8,9,[11,12],23]]; // nested array
console.log(another_array);

const new_array = another_array.flat(Infinity); // used to attach all array and sub array in one array
console.log(new_array);  

